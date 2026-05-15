// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/prescriptionController');
// const { protect, authorize } = require('../middleware/authMiddleware');

// router.get('/', protect, authorize('doctor'), controller.getDoctorPrescriptions);
// router.get('/:id', protect, authorize('doctor'), controller.getPrescriptionById);
// router.post('/fix-existing', protect, authorize('doctor'), async (req, res) => {
//     try {
//         const OnlineConsultation = require('../models/OnlineConsultation');
//         const doctorId = req.user._id;

//         // Doctor च्या सगळ्या completed consultations बघ
//         const completedConsultations = await OnlineConsultation.find({
//             doctor: doctorId,
//             status: 'Completed'
//         }).populate('doctor', '_id department').populate('patient', '_id');

//         console.log('Completed consultations:', completedConsultations.length);

//         const results = [];

//         for (const consultation of completedConsultations) {
//             // Already prescription आहे का?
//             const existing = await Prescription.findOne({ consultationId: consultation._id });
//             if (existing) {
//                 results.push({ id: consultation._id, status: 'already exists', prescriptionId: existing.prescriptionId });
//                 continue;
//             }

//             const doctorRef = consultation.doctor?._id || consultation.doctor;
//             const patientRef = consultation.patient?._id || consultation.patient;

//             const prescription = new Prescription({
//                 consultationId: consultation._id,
//                 appointmentId: consultation.appointmentId,
//                 patient: patientRef,
//                 doctor: doctorRef,
//                 medications: consultation.medications || [],
//                 advice: consultation.advice || [],
//                 diagnosis: consultation.diagnosis || [],
//                 followUp: consultation.followUp || {},
//                 department: consultation.doctor?.department || '',
//                 prescribedOn: consultation.completedAt || new Date()
//             });

//             await prescription.save();
//             results.push({ id: consultation._id, status: 'created', prescriptionId: prescription.prescriptionId });
//             console.log('✅ Created prescription:', prescription.prescriptionId);
//         }

//         res.json({ success: true, results });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// });

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/prescriptionController');
// const { protect, authorize } = require('../middleware/authMiddleware');
// const Prescription = require('../models/Prescription'); // ✅ Top वर require

// router.get('/', protect, authorize('doctor'), controller.getDoctorPrescriptions);
// router.get('/:id', protect, authorize('doctor'), controller.getPrescriptionById);

// module.exports = router;


const express = require('express');
const router = express.Router();
const controller = require('../controllers/prescriptionController');
const { protect, authorize } = require('../middleware/authMiddleware');
const Prescription = require('../models/Prescription');

// ─── Doctor Routes ─────────────────────────────────────────────────────────────
router.get('/', protect, authorize('doctor'), controller.getDoctorPrescriptions);
router.get('/:id', protect, authorize('doctor'), controller.getPrescriptionById);

// ─── Patient Routes ────────────────────────────────────────────────────────────

// Patient च्या सगळ्या prescriptions
router.get('/patient/my-prescriptions', protect, authorize('patient'), async (req, res) => {
    try {
        const prescriptions = await Prescription.find({ patient: req.user._id })
            .populate('doctor', 'fullName department designation profileImage')
            .sort({ createdAt: -1 })
            .lean();
        res.json({ success: true, data: prescriptions });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// Single prescription by ID (patient)
router.get('/patient/:id', protect, authorize('patient'), async (req, res) => {
    try {
        const prescription = await Prescription.findOne({
            _id: req.params.id,
            patient: req.user._id,   // ← security: फक्त त्या patient चीच prescription
        })
            .populate('doctor', 'fullName department designation profileImage')
            .populate('patient', 'fullName dob gender bloodGroup patientId')
            .lean();

        if (!prescription) {
            return res.status(404).json({ success: false, message: 'Prescription not found' });
        }
        res.json({ success: true, data: prescription });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// Delete prescription (patient)
router.delete('/patient/:id', protect, authorize('patient'), async (req, res) => {
    try {
        const prescription = await Prescription.findOne({
            _id: req.params.id,
            patient: req.user._id,
        });
        if (!prescription) {
            return res.status(404).json({ success: false, message: 'Prescription not found' });
        }
        await Prescription.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Prescription deleted successfully' });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

module.exports = router;