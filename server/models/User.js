// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// /**
//  * User Schema Definition
//  * Defines the structure of user documents in MongoDB
//  */
// const userSchema = new mongoose.Schema(
//     {
//         fullName: {
//             type: String,
//             required: [true, 'Full name is required'],
//             trim: true,
//         },
//         email: {
//             type: String,
//             required: [true, 'Email is required'],
//             unique: true,
//             lowercase: true,
//             trim: true,
//             // ✅ REMOVED VALIDATOR: Controller handles all email validation
//             // This prevents validation conflicts and makes debugging easier
//         },
//         password: {
//             type: String,
//             required: [true, 'Password is required'],
//             minlength: [8, 'Password must be at least 8 characters'],
//         },
//         role: {
//             type: String,
//             enum: ['admin', 'doctor', 'patient'],
//             default: 'patient',
//         },
//         highScore: {
//             type: Number,
//             default: 0,
//         },
//     },
//     {
//         timestamps: true, // Automatically adds createdAt and updatedAt fields
//     }
// );

// /**
//  * Pre-save middleware to hash password before saving
//  * Only runs if password is modified
//  */
// userSchema.pre('save', async function (next) {
//     // Only hash the password if it has been modified (or is new)
//     if (!this.isModified('password')) {
//         return next();
//     }

//     try {
//         // Generate salt and hash password
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// /**
//  * Method to compare entered password with hashed password
//  */
// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// module.exports = User;



const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * User Schema Definition
 * Supports both traditional and social authentication
 */
const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            // Password not required for social login users
            required: function () {
                return !this.provider || this.provider === 'local';
            },
            minlength: [8, 'Password must be at least 8 characters'],
        },
        role: {
            type: String,
            enum: ['admin', 'doctor', 'patient'],
            default: 'patient',
        },
        highScore: {
            type: Number,
            default: 0,
        },
        // Social login fields
        provider: {
            type: String,
            enum: ['local', 'google'],
            default: 'local',
        },
        providerId: {
            type: String,
            sparse: true, // Allows null values while maintaining uniqueness for non-null values
        },
        profileImage: {
            type: String,
            default: null,
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

// Compound index to ensure unique provider + providerId combination
userSchema.index({ provider: 1, providerId: 1 }, { unique: true, sparse: true });

/**
 * Pre-save middleware to hash password
 */
userSchema.pre('save', async function (next) {
    // Skip hashing if password is not modified or user is from social login
    if (!this.isModified('password') || !this.password) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

/**
 * Method to compare entered password with hashed password
 */
userSchema.methods.matchPassword = async function (enteredPassword) {
    if (!this.password) return false;
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;