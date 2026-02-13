const https = require('https')
const OnlineConsultation = require('../models/OnlineConsultation')
const Appointment = require('../models/Appointment');
const {generateToken04} = require('../zegoTokenHelper')

// Get consultation by appointment ID (or create if doesn't exist)
exports.getByAppointmentId = async (req, res) => {
    try {
        const { appointmentId } = req.params;

        console.log('🔍 Searching for appointmentId:', appointmentId);

        // Validate appointmentId
        const mongoose = require('mongoose');
        if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
            console.log('❌ Invalid appointment ID format');
            return res.status(400).json({
                success: false,
                message: 'Invalid appointment ID format'
            });
        }

        // STEP 1: Try to find existing consultation
        let consultation = await OnlineConsultation.findOne({ appointmentId })
            .populate({
                path: 'patient',
                select: 'fullName email phone profileImage age gender bloodGroup dob address'
            })
            .populate({
                path: 'doctor',
                select: 'fullName email phone department designation'
            });

        console.log('📋 Existing consultation found:', consultation ? 'YES' : 'NO');

        // STEP 2: If not found, check if appointment exists and create consultation
        if (!consultation) {
            console.log('➕ Creating new consultation for appointment:', appointmentId);

            // Find appointment
            const appointment = await Appointment.findById(appointmentId)
                .populate('patient')
                .populate('doctor');

            if (!appointment) {
                console.log('❌ Appointment not found in database:', appointmentId);
                return res.status(404).json({
                    success: false,
                    message: 'Appointment not found. Please check the appointment ID.'
                });
            }

            console.log('✅ Appointment found:', {
                id: appointment._id,
                patient: appointment.patient?.fullName,
                doctor: appointment.doctor?.fullName,
                type: appointment.appointmentType
            });

            // Verify it's an online consultation
            if (appointment.appointmentType !== 'Online Consultation') {
                console.log('⚠️ Not an online consultation appointment');
                return res.status(400).json({
                    success: false,
                    message: 'This appointment is not an online consultation'
                });
            }

            if (!appointment.patient || !appointment.doctor) {
                console.log('❌ Appointment patient or doctor not populated');
                return res.status(400).json({
                    success: false,
                    message: 'Appointment patient or doctor data is missing'
                });
            }

            consultation = new OnlineConsultation({
                appointmentId: appointment._id,
                patient: appointment.patient._id || appointment.patient,
                doctor: appointment.doctor._id || appointment.doctor,
                invoice: {
                    consultationFee: appointment.consultationCharge || 0,
                    totalAmount: appointment.consultationCharge || 0,
                    items: []
                },
                vitals: {},
                complaints: appointment.reason ? [{
                    complaint: appointment.reason,
                    duration: '',
                    severity: 'Mild'
                }] : [],
                diagnosis: [],
                medications: [],
                advice: [],
                investigations: [],
                followUp: {},
                status: 'In Progress'
            });

            await consultation.save();
            console.log('💾 New consultation created:', consultation._id);

            // Re-fetch with populated data
            consultation = await OnlineConsultation.findById(consultation._id)
                .populate({
                    path: 'patient',
                    select: 'fullName email phone profileImage age gender bloodGroup dob address'
                })
                .populate({
                    path: 'doctor',
                    select: 'fullName email phone department designation'
                });
        }

        // STEP 3: Return consultation data
        console.log('✅ Returning consultation data');
        return res.json({
            success: true,
            data: consultation
        });

    } catch (error) {
        console.error('❌ ERROR in getByAppointmentId:', {
            message: error.message,
            stack: error.stack,
            appointmentId: req.params.appointmentId
        });

        return res.status(500).json({
            success: false,
            message: 'Failed to load consultation',
            error: error.message,
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

// Update Vitals
exports.updateVitals = async (req, res) => {
    try {
        const { id } = req.params;
        const { vitals } = req.body;

        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { vitals },
            { new: true, runValidators: true }
        );

        if (!consultation) {
            return res.status(404).json({ success: false, message: 'Consultation not found' });
        }

        res.json({ success: true, data: consultation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Complaints
exports.updateComplaints = async (req, res) => {
    try {
        const { id } = req.params;
        const { complaints } = req.body;

        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { complaints },
            { new: true }
        );

        res.json({ success: true, data: consultation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Diagnosis
exports.updateDiagnosis = async (req, res) => {
    try {
        const { id } = req.params;
        const { diagnosis } = req.body;

        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { diagnosis },
            { new: true }
        );

        res.json({ success: true, data: consultation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Medications
exports.updateMedications = async (req, res) => {
    try {
        const { id } = req.params;
        const { medications } = req.body;

        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { medications },
            { new: true }
        );

        res.json({ success: true, data: consultation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Advice
exports.updateAdvice = async (req, res) => {
    try {
        const { id } = req.params;
        const { advice } = req.body;

        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { advice },
            { new: true }
        );

        res.json({ success: true, data: consultation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Investigations
exports.updateInvestigations = async (req, res) => {
    try {
        const { id } = req.params;
        const { investigations } = req.body;

        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { investigations },
            { new: true }
        );

        res.json({ success: true, data: consultation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Follow Up
exports.updateFollowUp = async (req, res) => {
    try {
        const { id } = req.params;
        const { followUp } = req.body;

        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { followUp },
            { new: true }
        );

        res.json({ success: true, data: consultation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Invoice
exports.updateInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        const { invoice } = req.body;

        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { invoice },
            { new: true }
        );

        res.json({ success: true, data: consultation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Complete Consultation
exports.completeConsultation = async (req, res) => {
    try {
        const { id } = req.params;

        const consultation = await OnlineConsultation.findById(id);

        if (!consultation) {
            return res.status(404).json({ success: false, message: 'Consultation not found' });
        }

        consultation.status = 'Completed';
        consultation.completedAt = new Date();
        await consultation.save();

        // Update appointment status
        await Appointment.findByIdAndUpdate(consultation.appointmentId, {
            status: 'Checked Out'
        });

        res.json({ success: true, data: consultation, message: 'Consultation completed' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// Get latest/current online appointment for doctor
exports.getLatestAppointment = async (req, res) => {
    try {
        const { doctorId } = req.params;

        // Find the most recent In Progress consultation for this doctor
        let consultation = await OnlineConsultation.findOne({
            doctor: doctorId,
            status: 'In Progress'
        })
            .sort({ createdAt: -1 })
            .populate({ path: 'patient', select: 'fullName email phone profileImage age gender bloodGroup dob address' })
            .populate({ path: 'doctor', select: 'fullName email phone department designation' });

        // If no In Progress, find next upcoming appointment
        if (!consultation) {
            const upcomingAppointment = await Appointment.findOne({
                doctor: doctorId,
                appointmentType: 'Online Consultation',
                status: { $in: ['Confirmed', 'Pending'] },
                appointmentDate: { $gte: new Date() }
            })
                .sort({ appointmentDate: 1, appointmentTime: 1 })
                .populate('patient')
                .populate('doctor');

            if (!upcomingAppointment) {
                return res.json({ success: true, data: null });
            }

            // Create consultation for this appointment (reuse existing logic)
            req.params.appointmentId = upcomingAppointment._id.toString();
            return exports.getByAppointmentId(req, res);
        }

        return res.json({ success: true, data: consultation });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};


exports.createVideoRoom = async (req, res) => {
    try {
        const { consultationId } = req.params;
        const { role, userId, userName } = req.body;

        const appId = parseInt(process.env.ZEGO_APP_ID);
        const serverSecret = process.env.ZEGO_APP_SIGN;

        // Room ID consultation ID वरून
        const roomID = `consultation_${consultationId}`;

        // Token generate कर (1 hour valid)
        const token = generateToken04(
            appId,
            userId || role,
            serverSecret,
            3600,  // 1 hour
            ''
        );

        // Doctor असेल तर roomUrl consultation मध्ये save कर
        if (role === 'doctor') {
            await OnlineConsultation.findByIdAndUpdate(consultationId, {
                videoRoomName: roomID
            });
        }

        return res.json({
            success: true,
            appId,
            token,
            roomID,
            userID: userId || role,
            userName: userName || role
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};