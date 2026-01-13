// backend/controllers/searchController.js

const Doctor = require('../models/User');
const Appointment = require('../models/Appointment');

// Global Search - searches across doctors, patients, and appointments
exports.globalSearch = async (req, res) => {
    try {
        const { q } = req.query;

        // Validation
        if (!q || q.trim().length < 2) {
            return res.status(400).json({
                success: false,
                message: 'Search query must be at least 2 characters'
            });
        }

        const searchQuery = q.trim();
        const results = [];

        // Search Doctors
        const doctors = await Doctor.find({
            $or: [
                { fullName: { $regex: searchQuery, $options: 'i' } },
                { name: { $regex: searchQuery, $options: 'i' } },
                { specialization: { $regex: searchQuery, $options: 'i' } },
                { department: { $regex: searchQuery, $options: 'i' } }
            ]
        }).limit(5).select('fullName name specialization department profileImage profilePicture');

        doctors.forEach(doctor => {
            const doctorName = doctor.fullName || doctor.name || 'Unknown Doctor';
            const initials = doctorName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

            results.push({
                type: 'doctor',
                id: doctor._id,
                title: `Dr. ${doctorName}`,
                subtitle: `${doctor.specialization || 'Specialist'}${doctor.department ? ' • ' + doctor.department : ''}`,
                link: `/doctor-details?id=${doctor._id}`,
                image: doctor.profileImage || doctor.profilePicture || null,
                initials: initials,
                category: 'Doctors'
            });
        });

        // Search Patients
        const patients = await Patient.find({
            $or: [
                { fullName: { $regex: searchQuery, $options: 'i' } },
                { name: { $regex: searchQuery, $options: 'i' } },
                { phone: { $regex: searchQuery, $options: 'i' } },
                { email: { $regex: searchQuery, $options: 'i' } }
            ]
        }).limit(5).select('fullName name phone email profileImage profilePicture');

        patients.forEach(patient => {
            const patientName = patient.fullName || patient.name || 'Unknown Patient';
            const initials = patientName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

            results.push({
                type: 'patient',
                id: patient._id,
                title: patientName,
                subtitle: `${patient.phone || 'No phone'} • ${patient.email || 'No email'}`,
                link: `/patient-details?id=${patient._id}`,
                image: patient.profileImage || patient.profilePicture || null,
                initials: initials,
                category: 'Patients'
            });
        });

        // Search Appointments
        const appointments = await Appointment.find({
            $or: [
                { appointmentId: { $regex: searchQuery, $options: 'i' } },
                { status: { $regex: searchQuery, $options: 'i' } }
            ]
        })
            .limit(5)
            .populate('doctor', 'fullName name specialization')
            .populate('patient', 'fullName name')
            .select('appointmentId appointmentDate appointmentTime status appointmentType');

        appointments.forEach(appointment => {
            const doctorName = appointment.doctor?.fullName || appointment.doctor?.name || 'Unknown Doctor';
            const patientName = appointment.patient?.fullName || appointment.patient?.name || 'Unknown Patient';
            const date = new Date(appointment.appointmentDate).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });

            results.push({
                type: 'appointment',
                id: appointment._id,
                title: `Appointment - ${appointment.appointmentId || 'N/A'}`,
                subtitle: `${patientName} with Dr. ${doctorName} • ${date} ${appointment.appointmentTime}`,
                link: `/appointments?id=${appointment._id}`,
                image: null,
                initials: 'AP',
                category: 'Appointments',
                status: appointment.status
            });
        });

        // Quick Actions (static suggestions)
        if ('appointment'.includes(searchQuery.toLowerCase())) {
            results.push({
                type: 'action',
                title: 'New Appointment',
                subtitle: 'Create a new appointment',
                link: '/new-appointment',
                initials: '+',
                category: 'Quick Actions'
            });
        }

        if ('schedule'.includes(searchQuery.toLowerCase())) {
            results.push({
                type: 'action',
                title: 'Doctor Schedule',
                subtitle: 'View doctor schedules',
                link: '/doctor-schedule',
                initials: '📅',
                category: 'Quick Actions'
            });
        }

        if ('holiday'.includes(searchQuery.toLowerCase())) {
            results.push({
                type: 'action',
                title: 'Holidays',
                subtitle: 'Manage holidays',
                link: '/holidays',
                initials: '🎉',
                category: 'Quick Actions'
            });
        }

        // Sort results by relevance (doctors first, then patients, then appointments)
        const sortedResults = [
            ...results.filter(r => r.type === 'doctor'),
            ...results.filter(r => r.type === 'patient'),
            ...results.filter(r => r.type === 'appointment'),
            ...results.filter(r => r.type === 'action')
        ];

        res.status(200).json({
            success: true,
            query: searchQuery,
            count: sortedResults.length,
            results: sortedResults
        });

    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to perform search',
            error: error.message
        });
    }
};

// Search only doctors
exports.searchDoctors = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q || q.trim().length < 2) {
            return res.status(400).json({
                success: false,
                message: 'Search query must be at least 2 characters'
            });
        }

        const doctors = await Doctor.find({
            $or: [
                { fullName: { $regex: q, $options: 'i' } },
                { name: { $regex: q, $options: 'i' } },
                { specialization: { $regex: q, $options: 'i' } }
            ]
        }).limit(10);

        res.status(200).json({
            success: true,
            data: doctors
        });

    } catch (error) {
        console.error('Doctor search error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to search doctors',
            error: error.message
        });
    }
};

// Search only patients
exports.searchPatients = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q || q.trim().length < 2) {
            return res.status(400).json({
                success: false,
                message: 'Search query must be at least 2 characters'
            });
        }

        const patients = await Patient.find({
            $or: [
                { fullName: { $regex: q, $options: 'i' } },
                { name: { $regex: q, $options: 'i' } },
                { phone: { $regex: q, $options: 'i' } }
            ]
        }).limit(10);

        res.status(200).json({
            success: true,
            data: patients
        });

    } catch (error) {
        console.error('Patient search error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to search patients',
            error: error.message
        });
    }
};