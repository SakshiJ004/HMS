const mongoose = require('mongoose');
const User = require('../models/User');

// ✅ DOCTOR-SPECIFIC SCHEMA
const doctorSchema = new mongoose.Schema({
    username: String,
    yearOfExperience: Number,
    department: String,
    designation: String,
    medicalLicenseNumber: String,
    languageSpoken: [String],
    bio: String,
    featureOnWebsite: {
        type: Boolean,
        default: false,
    },
    appointmentType: String,
    acceptBookingsDays: {
        type: Number,
        default: 0,
    },
    appointmentDuration: {
        type: Number,
        default: 30,
    },
    consultationCharge: {
        type: Number,
        default: 0,
    },
    maxBookingsPerSlot: {
        type: Number,
        default: 1,
    },
    displayOnBookingPage: {
        type: Boolean,
        default: false,
    },
    fromDate: {
        type: Date,
        default: null,
    },
    toDate: {
        type: Date,
        default: null,
    },
    schedules: [{
        day: String,
        timeSlots: [{
            startTime: String,
            endTime: String,
        }],
    }],
    education: [{
        degree: String,
        institution: String,
        year: Number,
    }],
    awards: [{
        title: String,
        year: Number,
    }],
    certifications: [{
        name: String,
        issuedBy: String,
        year: Number,
    }],
    signature: {
        type: String,  // Base64 image किंवा URL
        default: null
    },
    notificationPreferences: {
        newAppointment: {
            email: { type: Boolean, default: true },
            sms: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true },
        },
        appointmentCancellation: {
            email: { type: Boolean, default: true },
            sms: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true },
        },
        labReportReady: {
            email: { type: Boolean, default: true },
            sms: { type: Boolean, default: false },
            inApp: { type: Boolean, default: true },
        },
        followUpReminders: {
            email: { type: Boolean, default: true },
            sms: { type: Boolean, default: true },
            inApp: { type: Boolean, default: true },
        },
        billingNotification: {
            email: { type: Boolean, default: true },
            sms: { type: Boolean, default: false },
            inApp: { type: Boolean, default: true },
        },
        systemAlerts: {
            email: { type: Boolean, default: true },
            sms: { type: Boolean, default: false },
            inApp: { type: Boolean, default: true },
        },
    },
});

// ✅ Create Doctor discriminator
const Doctor = User.discriminator('doctor', doctorSchema);

module.exports = Doctor;