const Prescription = require('../models/Prescription');
const OnlineConsultation = require('../models/OnlineConsultation');

// Get all prescriptions for doctor
exports.getDoctorPrescriptions = async (req, res) => {
    try {
        const doctorId = req.user._id;
        const { search, sortBy, status, startDate, endDate } = req.query;

        let query = { doctor: doctorId };

        // Status filter
        if (status) query.status = status;

        // Date filter
        if (startDate || endDate) {
            query.prescribedOn = {};
            if (startDate) query.prescribedOn.$gte = new Date(startDate);
            if (endDate) query.prescribedOn.$lte = new Date(endDate);
        }

        let prescriptions = await Prescription.find(query)
            .populate('patient', 'fullName email phone profileImage age gender bloodGroup')
            .populate('doctor', 'fullName department designation consultationCharge profileImage')
            .sort({ prescribedOn: sortBy === 'oldest' ? 1 : -1 });

        // Search filter (patient name or prescription ID)
        if (search) {
            const searchLower = search.toLowerCase();
            prescriptions = prescriptions.filter(p =>
                p.patient?.fullName?.toLowerCase().includes(searchLower) ||
                p.prescriptionId?.toLowerCase().includes(searchLower) ||
                p.patient?.phone?.includes(search)
            );
        }

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