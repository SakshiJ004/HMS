const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    staffId: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Staff name is required'],
        trim: true
    },
    designation: {
        type: String,
        required: [true, 'Designation is required']
    },
    role: {
        type: String,
        required: [true, 'Role is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    dob: {
        type: Date,
        required: [true, 'Date of birth is required']
    },
    dateOfJoining: {
        type: Date,
        required: [true, 'Date of joining is required']
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female', 'Other'],
            message: 'Gender must be Male, Female, or Other'
        },
        required: [true, 'Gender is required']
    },
    bloodGroup: {
        type: String,
        default: ''
    },
    address1: {
        type: String,
        default: ''
    },
    address2: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    pincode: {
        type: String,
        default: ''
    },
    staffType: {
        type: String,
        default: 'Permanent'
    },
    image: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: {
            values: ['Available', 'Unavailable'],
            message: 'Status must be Available or Unavailable'
        },
        default: 'Available'
    },
    salaryInfo: [{
        creditDate: Date,
        amount: Number,
        salaryFor: String
    }]
}, {
    timestamps: true
});

// Auto-generate staffId before saving
staffSchema.pre('save', async function (next) {
    if (!this.staffId) {
        const count = await mongoose.model('Staff').countDocuments();
        this.staffId = `STF${String(count + 1).padStart(3, '0')}`;
    }
    next();
});

module.exports = mongoose.model('Staff', staffSchema);