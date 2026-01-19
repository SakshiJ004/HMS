const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    staffId: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: [true, 'Staff name is required'],
        trim: true
    },
    designation: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    dob: {
        type: Date,
        required: true
    },
    dateOfJoining: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    bloodGroup: {
        type: String
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    pincode: {
        type: String
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
        enum: ['Available', 'Unavailable'],
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