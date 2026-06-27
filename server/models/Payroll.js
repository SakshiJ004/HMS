const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
    // Staff info (denormalized for easy display)
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: [true, 'Staff is required']
    },
    staffName: {
        type: String,
        required: [true, 'Staff name is required'],
        trim: true
    },
    email: { type: String, trim: true, default: '' },
    role: { type: String, trim: true, default: '' },
    joiningDate: { type: String, default: '' },
    image: { type: String, default: '' },

    // Salary Month/Year
    salaryMonth: {
        type: String,
        required: [true, 'Salary month is required'],
        trim: true
    },
    salaryYear: {
        type: Number,
        required: [true, 'Salary year is required']
    },

    // Earnings
    basicSalary: { type: Number, default: 0 },
    da: { type: Number, default: 0 },
    hra: { type: Number, default: 0 },
    conveyance: { type: Number, default: 0 },
    medicalAllowance: { type: Number, default: 0 },
    otherEarnings: { type: Number, default: 0 },
    totalEarnings: { type: Number, default: 0 },

    // Deductions
    tds: { type: Number, default: 0 },
    esi: { type: Number, default: 0 },
    pf: { type: Number, default: 0 },
    profTax: { type: Number, default: 0 },
    labourWelfare: { type: Number, default: 0 },
    otherDeductions: { type: Number, default: 0 },
    totalDeductions: { type: Number, default: 0 },

    // Net
    netSalary: { type: Number, default: 0 },

    status: {
        type: String,
        enum: ['Paid', 'Pending', 'Processing'],
        default: 'Pending'
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HospitalSetup'
    }
}, { timestamps: true });

// Auto-calculate totals before save
payrollSchema.pre('save', function (next) {
    this.totalEarnings =
        (this.basicSalary || 0) + (this.da || 0) + (this.hra || 0) +
        (this.conveyance || 0) + (this.medicalAllowance || 0) + (this.otherEarnings || 0);

    this.totalDeductions =
        (this.tds || 0) + (this.esi || 0) + (this.pf || 0) +
        (this.profTax || 0) + (this.labourWelfare || 0) + (this.otherDeductions || 0);

    this.netSalary = this.totalEarnings - this.totalDeductions;
    next();
});

module.exports = mongoose.model('Payroll', payrollSchema);