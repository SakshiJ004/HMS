const OnlineConsultation = require('../models/OnlineConsultation')
const Appointment = require('../models/Appointment');

// Get consultation by appointment ID (or create if doesn't exist)
exports.getByAppointmentId = async (req, res) => {
    try {
        const { appointmentId } = req.params;

        console.log('🔍 Looking for appointment:', appointmentId);

        // STEP 1: Find consultation by appointmentId
        let consultation = await OnlineConsultation.findOne({ appointmentId })
            .populate({
                path: 'patient',
                select: 'fullName email phone profileImage age gender bloodGroup dob address'
            })
            .populate({
                path: 'doctor',
                select: 'fullName email phone department designation specialization'
            });

        console.log('📋 Found consultation:', consultation ? 'YES' : 'NO');

        // STEP 2: If consultation doesn't exist, create new one
        if (!consultation) {
            console.log('➕ Creating new consultation...');

            // Fetch appointment details
            const Appointment = require('../models/Appointment');
            const appointment = await Appointment.findById(appointmentId)
                .populate('patient')
                .populate('doctor');

            if (!appointment) {
                console.error('❌ Appointment not found:', appointmentId);
                return res.status(404).json({
                    success: false,
                    message: 'Appointment not found'
                });
            }

            console.log('✅ Appointment found:', appointment.patient?.fullName);

            // Create new consultation
            consultation = new OnlineConsultation({
                appointmentId: appointment._id,
                patient: appointment.patient._id,
                doctor: appointment.doctor._id,
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
                followUp: {}
            });

            await consultation.save();
            console.log('💾 Consultation saved:', consultation._id);

            // Re-fetch with populated data
            consultation = await OnlineConsultation.findById(consultation._id)
                .populate({
                    path: 'patient',
                    select: 'fullName email phone profileImage age gender bloodGroup dob address'
                })
                .populate({
                    path: 'doctor',
                    select: 'fullName email phone department designation specialization'
                });
        }

        console.log('✅ Returning consultation data');
        res.json({ success: true, data: consultation });

    } catch (error) {
        console.error('❌ Error in getByAppointmentId:', error);
        res.status(500).json({
            success: false,
            message: error.message,
            error: error.toString()
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