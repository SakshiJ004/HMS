const OnlineConsultation = require('../models/OnlineConsultation')
const Appointment = require('../models/Appointment');

// Get consultation by appointment ID (or create if doesn't exist)
exports.getByAppointmentId = async (req, res) => {
    try {
        const { appointmentId } = req.params;

        let consultation = await OnlineConsultation.findOne({ appointmentId })
            .populate({
                path: 'patient',
                select: 'fullName email phone profileImage age gender bloodGroup'
            })
            .populate({
                path: 'doctor',
                select: 'fullName department'
            })
            .populate({
                path: 'appointmentId',  // ← 🔥 IMPORTANT: Populate appointment details
                select: 'appointmentDate appointmentTime reason appointmentType consultationCharge',
                populate: [
                    {
                        path: 'patient',
                        select: 'fullName email phone profileImage age gender bloodGroup'
                    },
                    {
                        path: 'doctor',
                        select: 'fullName department specialization'
                    }
                ]
            });

        // If consultation doesn't exist, create new one
        if (!consultation) {
            const appointment = await Appointment.findById(appointmentId)
                .populate('patient', 'fullName email phone profileImage age gender bloodGroup')
                .populate('doctor', 'fullName department specialization');

            if (!appointment) {
                return res.status(404).json({ success: false, message: 'Appointment not found' });
            }

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
                complaints: appointment.reason ? [{ complaint: appointment.reason, duration: '', severity: 'Mild' }] : [],  // ← 🔥 AUTO-FILL from appointment reason
                diagnosis: [],
                medications: [],
                advice: [],
                investigations: [],
                followUp: {}
            });

            await consultation.save();

            // Re-fetch with all populated data
            consultation = await OnlineConsultation.findById(consultation._id)
                .populate({
                    path: 'patient',
                    select: 'fullName email phone profileImage age gender bloodGroup'
                })
                .populate({
                    path: 'doctor',
                    select: 'fullName department specialization'
                })
                .populate({
                    path: 'appointmentId',
                    select: 'appointmentDate appointmentTime reason appointmentType consultationCharge'
                });
        }

        res.json({ success: true, data: consultation });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: error.message });
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