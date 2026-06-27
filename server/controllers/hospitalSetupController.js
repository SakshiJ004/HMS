const HospitalSetup = require('../models/HospitalSetup');

const User = require('../models/User');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        }
    );
};

exports.createHospitalSetup = async (req, res) => {
    try {
        const { adminDetails, ...hospitalData } = req.body;

        const existingUser = await User.findOne({
            email: adminDetails.email.toLowerCase(),
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Admin email already exists',
            });
        }

        // Create Hospital
        const hospital = await HospitalSetup.create(hospitalData);

        // Create Hospital Admin
        const admin = await Admin.create({
            fullName: adminDetails.fullName,
            email: adminDetails.email.toLowerCase(),
            phone: adminDetails.phone,
            password: adminDetails.password,
            hospitalId: hospital._id,
        });

        // Link Admin to Hospital
        hospital.adminId = admin._id;
        await hospital.save();

        // Generate Login Token
        const token = generateToken(admin._id);

        res.status(201).json({
            success: true,
            message: 'Hospital setup completed successfully',
            token,
            admin: {
                _id: admin._id,
                fullName: admin.fullName,
                email: admin.email,
                phone: admin.phone,
                role: admin.role,
                hospitalId: admin.hospitalId,
            },
            hospital,
        });
    } catch (error) {
        console.error('Hospital Setup Error:', error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getHospitalSetups = async (req, res) => {
    try {
        const hospitals = await HospitalSetup.find();

        res.json({
            success: true,
            count: hospitals.length,
            data: hospitals,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getHospitalSetup = async (req, res) => {
    try {
        const hospital = await HospitalSetup.findById(req.params.id);

        if (!hospital) {
            return res.status(404).json({
                success: false,
                message: 'Hospital setup not found',
            });
        }

        res.json({
            success: true,
            data: hospital,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.updateHospitalSetup = async (req, res) => {
    try {
        const hospital = await HospitalSetup.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!hospital) {
            return res.status(404).json({
                success: false,
                message: 'Hospital setup not found',
            });
        }

        res.json({
            success: true,
            data: hospital,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.deleteHospitalSetup = async (req, res) => {
    try {
        const hospital = await HospitalSetup.findByIdAndDelete(req.params.id);

        if (!hospital) {
            return res.status(404).json({
                success: false,
                message: 'Hospital setup not found',
            });
        }

        res.json({
            success: true,
            message: 'Hospital setup deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};