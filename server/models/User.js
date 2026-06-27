const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// ✅ BASE USER SCHEMA - Common fields for all users
const baseOptions = {
    discriminatorKey: 'role', // Our discriminator key
    collection: 'users',      // Same collection for all
    timestamps: true,
};

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: function () {
            return this.provider === 'local';
        },
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HospitalSetup',
    },
    phone: String,
    provider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local',
    },
    providerId: String,
    profileImage: String,
    isEmailVerified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['patient', 'doctor', 'admin'],
        required: true,
    },
    status: {
        type: String,
        enum: ['Available', 'Unavailable'],
        default: 'Available',
    },
    primaryDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dob: Date,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    bloodGroup: String,
    address: {
        address1: String,
        address2: String,
        city: String,
        state: String,
        country: String,
        pincode: String,
    },
    status: {
        type: String,
        enum: ['Available', 'Unavailable'],
        default: 'Available',
    },
    highScore: {
        type: Number,
        default: 0,
    },
    notificationPreferences: {
        newAppointment: {
            email: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true }
        },
        appointmentCancellation: {
            email: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true }
        },
        labReportReady: {
            email: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true }
        },
        followUpReminders: {
            email: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true }
        },
        billingNotification: {
            email: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true }
        },
        systemAlerts: {
            email: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true }
        }
    },
    twoFAEnabled: {
        type: Boolean,
        default: false
    },
    loginAlerts: {
        type: Boolean,
        default: true
    }

}, baseOptions);

// Password hashing middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    if (this.password) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Password comparison method
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// ✅ Base User Model
const User = mongoose.model('User', userSchema);

module.exports = User;