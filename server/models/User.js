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



// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// /**
//  * User Schema Definition
//  * Supports both traditional and social authentication
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
//         },
//         password: {
//             type: String,
//             // Password not required for social login users
//             required: function () {
//                 return !this.provider || this.provider === 'local';
//             },
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
//         // Social login fields
//         provider: {
//             type: String,
//             enum: ['local', 'google'],
//             default: 'local',
//         },
//         providerId: {
//             type: String,
//             sparse: true, // Allows null values while maintaining uniqueness for non-null values
//         },
//         profileImage: {
//             type: String,
//             default: null,
//         },
//         isEmailVerified: {
//             type: Boolean,
//             default: false,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// userSchema.index(
//     { provider: 1, providerId: 1 },
//     {
//         unique: true,
//         partialFilterExpression: {
//             provider: { $ne: 'local' },
//             providerId: { $ne: null, $exists: true }
//         }
//     }
// );

// /**
//  * Pre-save middleware to hash password
//  */
// userSchema.pre('save', async function (next) {
//     // Skip hashing if password is not modified or user is from social login
//     if (!this.isModified('password') || !this.password) {
//         return next();
//     }

//     try {
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
//     if (!this.password) return false;
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// module.exports = User;



// ============================================
// FILE: backend/models/User.js (UPDATED)
// ============================================
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// /**
//  * User Schema Definition
//  * Supports patients, doctors, and admins with shared authentication
//  */
// const userSchema = new mongoose.Schema(
//     {
//         // ===========================
//         // BASIC INFO (ALL USERS)
//         // ===========================
//         firstName: {
//             type: String,
//             trim: true,
//         },
//         lastName: {
//             type: String,
//             trim: true,
//         },
//         fullName: {
//             type: String,
//             required: [true, 'Full name is required'],
//             trim: true,
//         },
//         username: {
//             type: String,
//             trim: true,
//             lowercase: true,
//             sparse: true, // Allows null values
//         },
//         email: {
//             type: String,
//             required: [true, 'Email is required'],
//             unique: true,
//             lowercase: true,
//             trim: true,
//         },
//         phone: {
//             type: String,
//             sparse: true,
//         },
//         password: {
//             type: String,
//             required: function () {
//                 return !this.provider || this.provider === 'local';
//             },
//             minlength: [8, 'Password must be at least 8 characters'],
//         },
//         role: {
//             type: String,
//             enum: ['admin', 'doctor', 'patient'],
//             default: 'patient',
//         },

//         // ===========================
//         // SOCIAL LOGIN FIELDS
//         // ===========================
//         provider: {
//             type: String,
//             enum: ['local', 'google'],
//             default: 'local',
//         },
//         providerId: {
//             type: String,
//             sparse: true,
//         },
//         profileImage: {
//             type: String,
//             default: null,
//         },
//         isEmailVerified: {
//             type: Boolean,
//             default: false,
//         },

//         // ===========================
//         // COMMON FIELDS (ALL ROLES)
//         // ===========================
//         dob: {
//             type: Date,
//         },
//         gender: {
//             type: String,
//             enum: ['Male', 'Female', 'Other'],
//         },
//         bloodGroup: {
//             type: String,
//             enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
//         },
//         address: {
//             address1: String,
//             address2: String,
//             city: String,
//             state: String,
//             country: String,
//             pincode: String,
//         },

//         // ===========================
//         // DOCTOR-SPECIFIC FIELDS
//         // ===========================
//         yearOfExperience: {
//             type: Number,
//         },
//         department: {
//             type: String,
//             enum: [
//                 'Cardiology',
//                 'Neurology',
//                 'Orthopedics',
//                 'Pediatrics',
//                 'Gynecology',
//                 'Obstetrics',
//                 'Psychiatry',
//                 'Neurosurgery',
//                 'Oncology',
//                 'Pulmonology',
//                 'Urology',
//                 'Dermatology',
//                 'ENT',
//                 'Ophthalmology',
//                 'Radiology',
//                 'Anesthesiology',
//                 'Emergency Medicine',
//                 'General Surgery',
//                 'Internal Medicine',
//                 'Nephrology',
//                 'Gastroenterology',
//                 'Endocrinology',
//                 'Rheumatology',
//                 'Hematology',
//                 'Infectious Disease',
//                 'Plastic Surgery',
//                 'Pathology',
//                 'Physical Medicine',
//                 'Dental',
//             ],
//         },
//         designation: {
//             type: String,
//             enum: [
//                 'Consultant',
//                 'Senior Consultant',
//                 'Specialist',
//                 'Senior Specialist',
//                 'Cardiologist',
//                 'Neurologist',
//                 'Orthopedic Surgeon',
//                 'Pediatrician',
//                 'Gynecologist',
//                 'Obstetrician',
//                 'Psychiatrist',
//                 'Neurosurgeon',
//                 'Oncologist',
//                 'Pulmonologist',
//                 'Urologist',
//                 'Dermatologist',
//                 'ENT Specialist',
//                 'Ophthalmologist',
//                 'Radiologist',
//                 'Anesthesiologist',
//                 'Emergency Physician',
//                 'General Surgeon',
//                 'Internist',
//                 'Nephrologist',
//                 'Gastroenterologist',
//                 'Endocrinologist',
//                 'Rheumatologist',
//                 'Hematologist',
//                 'Infectious Disease Specialist',
//                 'Plastic Surgeon',
//                 'Pathologist',
//                 'Physiatrist',
//                 'Dentist',
//                 'Medical Officer',
//                 'Resident Doctor',
//                 'Junior Resident',
//                 'Senior Resident',
//                 'House Officer',
//             ],
//         },
//         medicalLicenseNumber: {
//             type: String,
//             sparse: true,
//         },
//         languageSpoken: [{
//             type: String,
//         }],
//         bio: {
//             type: String,
//         },
//         featureOnWebsite: {
//             type: Boolean,
//             default: false,
//         },

//         // Appointment Settings
//         appointmentType: {
//             type: String,
//             enum: ['Online Consultation', 'In-Person Visit', 'Both'],
//         },
//         acceptBookingsDays: {
//             type: Number,
//             default: 0,
//         },
//         fromDate: {
//             type: Date,
//             required: false,
//             default: null
//         },
//         toDate: {
//             type: Date,
//             required: false,
//             default: null
//         },
//         appointmentDuration: {
//             type: Number,
//             default: 30, // minutes
//         },
//         consultationCharge: {
//             type: Number,
//             default: 0,
//         },
//         maxBookingsPerSlot: {
//             type: Number,
//             default: 1,
//         },
//         displayOnBookingPage: {
//             type: Boolean,
//             default: false,
//         },

//         // Professional Details
//         education: [{
//             degree: String,
//             college: String,
//             fromYear: String,
//             year: String,
//         }],
//         awards: [{
//             title: String,
//             year: String,
//         }],
//         certifications: [{
//             title: String,
//             year: String,
//         }],

//         // Doctor Schedule
//         schedules: [{
//             day: {
//                 type: String,
//                 enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//             },
//             timeSlots: [{
//                 startTime: String,
//                 endTime: String,
//             }],
//         }],

//         // ===========================
//         // PATIENT-SPECIFIC FIELDS
//         // ===========================
//         primaryDoctor: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User',
//         },
//         status: {
//             type: String,
//             enum: ['Available', 'Unavailable'],
//             default: 'Available',
//         },

//         // ===========================
//         // GAME/APP SPECIFIC
//         // ===========================
//         highScore: {
//             type: Number,
//             default: 0,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// // Compound index for social login
// userSchema.index(
//     { provider: 1, providerId: 1 },
//     {
//         unique: true,
//         partialFilterExpression: {
//             provider: { $ne: 'local' },
//             providerId: { $ne: null, $exists: true }
//         }
//     }
// );

// /**
//  * Pre-save middleware to hash password
//  */
// userSchema.pre('save', async function (next) {
//     if (!this.password) {
//         return next();
//     }

//     if (!this.isNew && !this.isModified('password')) {
//         return next();
//     }

//     try {
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
//     if (!this.password) return false;
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// module.exports = User;



const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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