// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const AppleStrategy = require('passport-apple').Strategy;
// const User = require('../models/User');
// const fs = require('fs');

// /**
//  * Serialize user for session
//  */
// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });


// passport.deserializeUser(async (id, done) => {
//     try {
//         const user = await User.findById(id);
//         done(null, user);
//     } catch (error) {
//         done(error, null);
//     }
// });

// /**
//  * Google OAuth Strategy
//  */
// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL: process.env.GOOGLE_CALLBACK_URL,
//         },
//         async (accessToken, refreshToken, profile, done) => {
//             try {
//                 // Check if user already exists
//                 let user = await User.findOne({
//                     provider: 'google',
//                     providerId: profile.id
//                 });

//                 if (user) {
//                     return done(null, user);
//                 }

//                 // Check if email already exists with different provider
//                 const existingUser = await User.findOne({
//                     email: profile.emails[0].value
//                 });

//                 if (existingUser) {
//                     // Link Google account to existing user
//                     existingUser.provider = 'google';
//                     existingUser.providerId = profile.id;
//                     existingUser.profileImage = profile.photos[0]?.value;
//                     existingUser.isEmailVerified = true;
//                     await existingUser.save();
//                     return done(null, existingUser);
//                 }

//                 // Create new user
//                 user = await User.create({
//                     fullName: profile.displayName,
//                     email: profile.emails[0].value,
//                     provider: 'google',
//                     providerId: profile.id,
//                     profileImage: profile.photos[0]?.value,
//                     isEmailVerified: true,
//                     role: 'patient',
//                 });

//                 done(null, user);
//             } catch (error) {
//                 console.error('Google OAuth error:', error);
//                 done(error, null);
//             }
//         }
//     )
// );

// /**
//  * Facebook OAuth Strategy
//  */
// // passport.use(
// //     new FacebookStrategy(
// //         {
// //             clientID: process.env.FACEBOOK_APP_ID,
// //             clientSecret: process.env.FACEBOOK_APP_SECRET,
// //             callbackURL: process.env.FACEBOOK_CALLBACK_URL,
// //             profileFields: ['id', 'displayName', 'emails', 'photos'],
// //         },
// //         async (accessToken, refreshToken, profile, done) => {
// //             try {
// //                 let user = await User.findOne({
// //                     provider: 'facebook',
// //                     providerId: profile.id
// //                 });

// //                 if (user) {
// //                     return done(null, user);
// //                 }

// //                 const existingUser = await User.findOne({
// //                     email: profile.emails[0].value
// //                 });

// //                 if (existingUser) {
// //                     existingUser.provider = 'facebook';
// //                     existingUser.providerId = profile.id;
// //                     existingUser.profileImage = profile.photos[0]?.value;
// //                     existingUser.isEmailVerified = true;
// //                     await existingUser.save();
// //                     return done(null, existingUser);
// //                 }

// //                 user = await User.create({
// //                     fullName: profile.displayName,
// //                     email: profile.emails[0].value,
// //                     provider: 'facebook',
// //                     providerId: profile.id,
// //                     profileImage: profile.photos[0]?.value,
// //                     isEmailVerified: true,
// //                     role: 'patient',
// //                 });

// //                 done(null, user);
// //             } catch (error) {
// //                 console.error('Facebook OAuth error:', error);
// //                 done(error, null);
// //             }
// //         }
// //     )
// // );

// /**
//  * Apple OAuth Strategy
//  */
// // if (process.env.APPLE_CLIENT_ID && fs.existsSync(process.env.APPLE_PRIVATE_KEY_PATH)) {
// //     passport.use(
// //         new AppleStrategy(
// //             {
// //                 clientID: process.env.APPLE_CLIENT_ID,
// //                 teamID: process.env.APPLE_TEAM_ID,
// //                 keyID: process.env.APPLE_KEY_ID,
// //                 privateKeyLocation: process.env.APPLE_PRIVATE_KEY_PATH,
// //                 callbackURL: process.env.APPLE_CALLBACK_URL,
// //                 passReqToCallback: true,
// //             },
// //             async (req, accessToken, refreshToken, idToken, profile, done) => {
// //                 try {
// //                     const email = profile.email || idToken.email;
// //                     const name = req.body?.user?.name || profile.name || { firstName: 'User', lastName: '' };
// //                     const fullName = `${name.firstName} ${name.lastName}`.trim();

// //                     let user = await User.findOne({
// //                         provider: 'apple',
// //                         providerId: profile.id
// //                     });

// //                     if (user) {
// //                         return done(null, user);
// //                     }

// //                     const existingUser = await User.findOne({ email });

// //                     if (existingUser) {
// //                         existingUser.provider = 'apple';
// //                         existingUser.providerId = profile.id;
// //                         existingUser.isEmailVerified = true;
// //                         await existingUser.save();
// //                         return done(null, existingUser);
// //                     }

// //                     user = await User.create({
// //                         fullName: fullName || 'Apple User',
// //                         email,
// //                         provider: 'apple',
// //                         providerId: profile.id,
// //                         isEmailVerified: true,
// //                         role: 'patient',
// //                     });

// //                     done(null, user);
// //                 } catch (error) {
// //                     console.error('Apple OAuth error:', error);
// //                     done(error, null);
// //                 }
// //             }
// //         )
// //     );
// // }

// module.exports = passport;


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