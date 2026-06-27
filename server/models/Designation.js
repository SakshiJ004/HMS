const mongoose = require('mongoose');

const designationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Designation name is required'],
        unique: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['Staff', 'Doctor'],
        required: [true, 'Designation type is required']
    },
    department: {
        type: String,
        required: [true, 'Department is required'],
        trim: true
    },
    hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'HospitalSetup',
        },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Designation', designationSchema);