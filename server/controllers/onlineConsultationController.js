const https = require('https')
const OnlineConsultation = require('../models/OnlineConsultation')
const Appointment = require('../models/Appointment');
const Prescription = require('../models/Prescription')

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
                hospitalId: appointment.hospitalId || (req.user && req.user.hospitalId),
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
            { $set: { vitals } },
            { new: true, runValidators: false }
        );
        if (!consultation) return res.status(404).json({ success: false, message: 'Consultation not found' });
        res.json({ success: true, data: consultation });
    } catch (error) {
        console.error('❌ updateVitals error:', error);
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
            { $set: { complaints } },
            { new: true, runValidators: false }
        );
        if (!consultation) return res.status(404).json({ success: false, message: 'Consultation not found' });
        res.json({ success: true, data: consultation });
    } catch (error) {
        console.error('❌ updateComplaints error:', error);
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
            { $set: { diagnosis } },
            { new: true, runValidators: false }
        );
        if (!consultation) return res.status(404).json({ success: false, message: 'Consultation not found' });
        res.json({ success: true, data: consultation });
    } catch (error) {
        console.error('❌ updateDiagnosis error:', error);
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
            { $set: { medications } },
            { new: true, runValidators: false }
        );
        if (!consultation) return res.status(404).json({ success: false, message: 'Consultation not found' });
        res.json({ success: true, data: consultation });
    } catch (error) {
        console.error('❌ updateMedications error:', error);
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
            { $set: { advice } },
            { new: true, runValidators: false }
        );
        if (!consultation) return res.status(404).json({ success: false, message: 'Consultation not found' });
        res.json({ success: true, data: consultation });
    } catch (error) {
        console.error('❌ updateAdvice error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Investigations
exports.updateInvestigations = async (req, res) => {
    try {
        const { id } = req.params;
        const { investigations } = req.body;

        console.log('📝 Updating investigations for:', id);
        console.log('📋 Investigations data:', JSON.stringify(investigations));

        const mongoose = require('mongoose');
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid consultation ID'
            });
        }

        // ✅ item: any काढलं - plain JS
        const sanitized = (investigations || []).map((item) => ({
            name: item.name || '',
            type: item.type || 'Lab Test',
            instructions: item.instructions || ''
        }));

        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { $set: { investigations: sanitized } },
            { new: true, runValidators: false }
        );

        if (!consultation) {
            return res.status(404).json({
                success: false,
                message: 'Consultation not found'
            });
        }

        console.log('✅ Investigations updated successfully');
        res.json({ success: true, data: consultation });

    } catch (error) {    // ✅ error: any काढलं - plain JS
        console.error('❌ updateInvestigations error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to update investigations'
        });
    }
};

// Update Follow Up
exports.updateFollowUp = async (req, res) => {
    try {
        const { id } = req.params;
        const { followUp } = req.body;
        const consultation = await OnlineConsultation.findByIdAndUpdate(
            id,
            { $set: { followUp } },
            { new: true, runValidators: false }
        );
        if (!consultation) return res.status(404).json({ success: false, message: 'Consultation not found' });
        res.json({ success: true, data: consultation });
    } catch (error) {
        console.error('❌ updateFollowUp error:', error);
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
            { $set: { invoice } },
            { new: true, runValidators: false }
        );
        if (!consultation) return res.status(404).json({ success: false, message: 'Consultation not found' });
        res.json({ success: true, data: consultation });
    } catch (error) {
        console.error('❌ updateInvoice error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ CRITICAL FIX - Complete Consultation with proper data copying
exports.completeConsultation = async (req, res) => {
    try {
        const { id } = req.params;

        // ✅ Fetch consultation with full data
        const consultation = await OnlineConsultation.findById(id)
            .populate('doctor', '_id department fullName designation')
            .populate('patient', '_id fullName email phone age gender bloodGroup dob');

        if (!consultation) {
            return res.status(404).json({ success: false, message: 'Consultation not found' });
        }

        console.log('✅ Completing consultation:', id);
        console.log('Doctor:', consultation.doctor);
        console.log('Patient:', consultation.patient);
        console.log('Medications count:', consultation.medications?.length || 0);
        console.log('Advice count:', consultation.advice?.length || 0);
        console.log('Diagnosis count:', consultation.diagnosis?.length || 0);
        console.log('Follow-up:', consultation.followUp);

        // Status update
        consultation.status = 'Completed';
        consultation.completedAt = new Date();
        await consultation.save();

        // Appointment status update
        if (consultation.appointmentId) {
            await Appointment.findByIdAndUpdate(consultation.appointmentId, {
                status: 'Checked Out'
            });
        }

        // ✅ Extract IDs properly
        const doctorId = consultation.doctor?._id || consultation.doctor;
        const patientId = consultation.patient?._id || consultation.patient;
        const department = consultation.doctor?.department || '';

        console.log('Creating prescription with:');
        console.log('- doctorId:', doctorId);
        console.log('- patientId:', patientId);
        console.log('- department:', department);
        console.log('- medications:', JSON.stringify(consultation.medications, null, 2));
        console.log('- advice:', JSON.stringify(consultation.advice, null, 2));
        console.log('- diagnosis:', JSON.stringify(consultation.diagnosis, null, 2));
        console.log('- followUp:', JSON.stringify(consultation.followUp, null, 2));

        // ✅ Create prescription with ALL data from consultation
        const prescription = new Prescription({
            consultationId: consultation._id,
            appointmentId: consultation.appointmentId,
            patient: patientId,
            doctor: doctorId,
            // ✅ Copy arrays directly (they're already in correct format)
            medications: consultation.medications || [],
            advice: consultation.advice || [],
            diagnosis: consultation.diagnosis || [],
            // ✅ Copy followUp object directly
            followUp: consultation.followUp || {},
            department: department,
            prescribedOn: new Date()
        });

        await prescription.save();
        console.log('✅ Prescription created successfully:', prescription.prescriptionId);
        console.log('✅ Saved medications:', prescription.medications);
        console.log('✅ Saved advice:', prescription.advice);
        console.log('✅ Saved followUp:', prescription.followUp);

        res.json({
            success: true,
            data: consultation,
            prescription: prescription,
            message: 'Consultation completed and prescription generated'
        });
    } catch (error) {
        console.error('❌ completeConsultation error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};


// Get latest/current online appointment for doctor
exports.getLatestAppointment = async (req, res) => {
    try {
        const { doctorId } = req.params;

        // Step 1: आधी In Progress consultation बघ
        let consultation = await OnlineConsultation.findOne({
            doctor: doctorId,
            status: 'In Progress'
        })
            .sort({ createdAt: -1 })
            .populate({ path: 'patient', select: 'fullName email phone profileImage age gender bloodGroup dob address' })
            .populate({ path: 'doctor', select: 'fullName email phone department designation' });

        if (consultation) {
            return res.json({ success: true, data: consultation });
        }

        // Step 2: Today पासून future पर्यंत upcoming online appointment बघ
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0); // ✅ आजचा पूर्ण दिवस include कर

        const upcomingAppointment = await Appointment.findOne({
            doctor: doctorId,
            appointmentType: 'Online Consultation',
            status: { $in: ['Confirmed', 'Pending', 'Scheduled'] }, // ✅ Scheduled add केलं
            appointmentDate: { $gte: todayStart } // ✅ new Date() नाही, todayStart वापर
        })
            .sort({ appointmentDate: 1, appointmentTime: 1 })
            .populate('patient')
            .populate('doctor');

        console.log('Upcoming appointment found:', upcomingAppointment ? upcomingAppointment._id : 'None');

        if (!upcomingAppointment) {
            return res.json({ success: true, data: null });
        }

        // Step 3: Consultation create कर
        req.params.appointmentId = upcomingAppointment._id.toString();
        return exports.getByAppointmentId(req, res);

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};


exports.createVideoRoom = async (req, res) => {
    try {
        const { consultationId } = req.params;
        const { role, userId, userName } = req.body;

        const roomID = `consultation_${consultationId}`;

        if (role === 'doctor') {
            await OnlineConsultation.findByIdAndUpdate(consultationId, {
                videoRoomName: roomID
            });
        }

        return res.json({
            success: true,
            appId: parseInt(process.env.ZEGO_APP_ID),
            serverSecret: process.env.ZEGO_SERVER_SECRET, // ✅ ServerSecret return कर
            roomID: roomID,
            userID: String(userId),
            userName: String(userName)
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};