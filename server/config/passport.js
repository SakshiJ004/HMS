const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const fs = require('fs');
const Patient = require('../models/Patient')

/**
 * Serialize user for session
 */
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

/**
 * Google OAuth Strategy
 */
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                console.log('🔍 Google OAuth - Checking user:', profile.emails[0].value);

                // Check if user already exists with Google provider
                let user = await User.findOne({
                    provider: 'google',
                    providerId: profile.id
                });

                if (user) {
                    console.log('✅ Existing Google user found:', user.email, 'Role:', user.role);
                    return done(null, user);
                }

                // Check if email already exists with different provider
                const existingUser = await User.findOne({
                    email: profile.emails[0].value
                });

                if (existingUser) {
                    console.log('🔗 Linking Google to existing user:', existingUser.email);
                    // Link Google account to existing user
                    existingUser.provider = 'google';
                    existingUser.providerId = profile.id;
                    existingUser.profileImage = profile.photos[0]?.value;
                    existingUser.isEmailVerified = true;
                    await existingUser.save();
                    console.log('✅ Linked successfully. Role:', existingUser.role);
                    return done(null, existingUser);
                }

                // Create new user - EXPLICITLY set role to 'patient'
                console.log('➕ Creating new Google user with role: patient');
                user = await Patient.create({
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    provider: 'google',
                    providerId: profile.id,
                    profileImage: profile.photos[0]?.value,
                    isEmailVerified: true,
                    role: 'patient', // ✅ EXPLICITLY SET ROLE
                });

                console.log('✅ New user created:', user.email, 'Role:', user.role);
                done(null, user);
            } catch (error) {
                console.error('❌ Google OAuth error:', error);
                done(error, null);
            }
        }
    )
);

module.exports = passport;