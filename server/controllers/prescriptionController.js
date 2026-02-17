const Prescription = require('../models/Prescription');
const OnlineConsultation = require('../models/OnlineConsultation');

// Get all prescriptions for doctor
exports.getDoctorPrescriptions = async (req, res) => {
    try {
        const doctorId = req.user._id;

        console.log('Doctor ID:', doctorId); // ✅ debug

        // पहिले सगळ्या prescriptions बघ - without doctor filter
        const allPrescriptions = await Prescription.find({});
        console.log('Total prescriptions in DB:', allPrescriptions.length); // ✅ debug
        console.log('Sample prescription doctor field:', allPrescriptions[0]?.doctor); // ✅ debug

        const prescriptions = await Prescription.find({ doctor: doctorId })
            .populate('patient', 'fullName email phone profileImage age gender bloodGroup')
            .populate('doctor', 'fullName department designation')
            .sort({ prescribedOn: -1 });

        console.log('Prescriptions for this doctor:', prescriptions.length); // ✅ debug

        res.json({ success: true, data: prescriptions });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get single prescription by ID
exports.getPrescriptionById = async (req, res) => {
    try {
        const prescription = await Prescription.findById(req.params.id)
            .populate('patient', 'fullName email phone profileImage age gender bloodGroup dob address')
            .populate('doctor', 'fullName department designation consultationCharge profileImage signature bio education');

        if (!prescription) {
            return res.status(404).json({ success: false, message: 'Prescription not found' });
        }

        res.json({ success: true, data: prescription });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};