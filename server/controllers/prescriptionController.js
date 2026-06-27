// const Prescription = require('../models/Prescription');
// const OnlineConsultation = require('../models/OnlineConsultation');

// // Get all prescriptions for doctor
// exports.getDoctorPrescriptions = async (req, res) => {
//     try {
//         const doctorId = req.user._id;

//         console.log('Doctor ID:', doctorId); // ✅ debug

//         // पहिले सगळ्या prescriptions बघ - without doctor filter
//         const allPrescriptions = await Prescription.find({});
//         console.log('Total prescriptions in DB:', allPrescriptions.length); // ✅ debug
//         console.log('Sample prescription doctor field:', allPrescriptions[0]?.doctor); // ✅ debug

//         const prescriptions = await Prescription.find({ doctor: doctorId })
//             .populate('patient', 'fullName email phone profileImage age gender bloodGroup')
//             .populate('doctor', 'fullName department designation')
//             .sort({ prescribedOn: -1 });

//         console.log('Prescriptions for this doctor:', prescriptions.length); // ✅ debug

//         res.json({ success: true, data: prescriptions });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Get single prescription by ID
// exports.getPrescriptionById = async (req, res) => {
//     try {
//         const prescription = await Prescription.findById(req.params.id)
//             .populate('patient', 'fullName email phone profileImage age gender bloodGroup dob address')
//             .populate('doctor', 'fullName department designation consultationCharge profileImage signature bio education');

//         if (!prescription) {
//             return res.status(404).json({ success: false, message: 'Prescription not found' });
//         }

//         res.json({ success: true, data: prescription });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };


const Prescription = require('../models/Prescription');

// Get single prescription by ID
exports.getPrescriptionById = async (req, res) => {
    try {
        const prescription = await Prescription.findById(req.params.id)
            .populate({
                path: 'patient',
                select: 'fullName email phone profileImage age gender bloodGroup dob address'
            })
            .populate({
                path: 'doctor',
                select: 'fullName department designation consultationCharge profileImage signature bio education'
            });

        if (!prescription) {
            return res.status(404).json({
                success: false,
                message: 'Prescription not found'
            });
        }

        // ✅ Debug log - check what data is being sent
        console.log('Sending prescription:', {
            id: prescription._id,
            prescriptionId: prescription.prescriptionId,
            medications: prescription.medications?.length || 0,
            diagnosis: prescription.diagnosis?.length || 0,
            advice: prescription.advice?.length || 0,
            followUp: prescription.followUp,
            department: prescription.department,
            patient: {
                fullName: prescription.patient?.fullName,
                age: prescription.patient?.age,
                gender: prescription.patient?.gender
            }
        });

        res.json({ success: true, data: prescription });
    } catch (error) {
        console.error('getPrescriptionById error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all prescriptions for doctor
exports.getDoctorPrescriptions = async (req, res) => {
    try {
        const doctorId = req.user._id;
        const { sortBy, status, startDate } = req.query;

        let query = { doctor: doctorId };
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }

        // Status filter
        if (status) query.status = status;

        // Date filter
        if (startDate) {
            const date = new Date(startDate);
            date.setHours(0, 0, 0, 0);
            const nextDay = new Date(date);
            nextDay.setDate(nextDay.getDate() + 1);
            query.prescribedOn = { $gte: date, $lt: nextDay };
        }

        const prescriptions = await Prescription.find(query)
            .populate('patient', 'fullName email phone profileImage age gender bloodGroup')
            .populate('doctor', 'fullName department designation')
            .sort({ prescribedOn: sortBy === 'oldest' ? 1 : -1 });

        res.json({ success: true, data: prescriptions });
    } catch (error) {
        console.error('getDoctorPrescriptions error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};
