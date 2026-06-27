const mongoose = require('mongoose');
const User = require('../models/User');

const adminSchema = new mongoose.Schema({
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HospitalSetup'
    }
});

const Admin = User.discriminator('admin', adminSchema);

module.exports = Admin;