const Diagnosis = require('../models/Diagnosis');

// Get diagnoses by department
exports.getByDepartment = async (req, res) => {
    try {
        const { department } = req.params;

        const query = {
            department,
            isActive: true
        };
        if (req.user && req.user.hospitalId) {
            query.$or = [
                { hospitalId: { $exists: false } },
                { hospitalId: req.user.hospitalId }
            ];
        }
        const diagnoses = await Diagnosis.find(query).sort({ description: 1 });

        res.json({ success: true, data: diagnoses });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Search diagnoses
exports.search = async (req, res) => {
    try {
        const { query, department } = req.query;

        const searchCriteria = {
            isActive: true,
            $or: [
                { description: { $regex: query, $options: 'i' } },
                { code: { $regex: query, $options: 'i' } },
                { searchTerms: { $in: [new RegExp(query, 'i')] } }
            ]
        };

        if (req.user && req.user.hospitalId) {
            searchCriteria.$and = [
                {
                    $or: [
                        { hospitalId: { $exists: false } },
                        { hospitalId: req.user.hospitalId }
                    ]
                }
            ];
        }

        if (department) {
            searchCriteria.department = department;
        }

        const diagnoses = await Diagnosis.find(searchCriteria)
            .limit(20)
            .sort({ description: 1 });

        res.json({ success: true, data: diagnoses });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Seed sample diagnoses (ONE TIME SETUP)
exports.seedDiagnoses = async (req, res) => {
    try {
        const sampleDiagnoses = [
            // Cardiology
            { code: 'I10', description: 'Essential hypertension', department: 'Cardiology', searchTerms: ['high blood pressure', 'bp'] },
            { code: 'I25.1', description: 'Atherosclerotic heart disease', department: 'Cardiology', searchTerms: ['heart disease'] },
            { code: 'I50.9', description: 'Heart failure', department: 'Cardiology', searchTerms: ['cardiac failure'] },

            // General Medicine
            { code: 'E11.9', description: 'Type 2 diabetes mellitus', department: 'General Medicine', searchTerms: ['diabetes', 'sugar'] },
            { code: 'J06.9', description: 'Acute upper respiratory infection', department: 'General Medicine', searchTerms: ['cold', 'flu'] },
            { code: 'R50.9', description: 'Fever', department: 'General Medicine', searchTerms: ['temperature', 'pyrexia'] },

            // Orthopedics
            { code: 'M25.561', description: 'Pain in right knee', department: 'Orthopedics', searchTerms: ['knee pain'] },
            { code: 'M54.5', description: 'Low back pain', department: 'Orthopedics', searchTerms: ['backache', 'lumbago'] },

            // Dermatology
            { code: 'L20.9', description: 'Atopic dermatitis', department: 'Dermatology', searchTerms: ['eczema'] },
            { code: 'L70.0', description: 'Acne vulgaris', department: 'Dermatology', searchTerms: ['acne', 'pimples'] },

            // ENT
            { code: 'H66.90', description: 'Otitis media', department: 'ENT', searchTerms: ['ear infection'] },
            { code: 'J02.9', description: 'Acute pharyngitis', department: 'ENT', searchTerms: ['sore throat'] }
        ];

        await Diagnosis.deleteMany({});
        await Diagnosis.insertMany(sampleDiagnoses);

        res.json({ success: true, message: 'Diagnoses seeded successfully', count: sampleDiagnoses.length });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};