const Payroll = require('../models/Payroll');

// Get all payrolls
exports.getAllPayrolls = async (req, res) => {
    try {
        const query = {};
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        const payrolls = await Payroll.find(query).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: payrolls, count: payrolls.length });
    } catch (error) {
        console.error('Get payrolls error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch payrolls', error: error.message });
    }
};

// Get single payroll by ID
exports.getPayrollById = async (req, res) => {
    try {
        const payroll = await Payroll.findById(req.params.id);
        if (!payroll) {
            return res.status(404).json({ success: false, message: 'Payroll not found' });
        }
        res.status(200).json({ success: true, data: payroll });
    } catch (error) {
        console.error('Get payroll error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch payroll', error: error.message });
    }
};

// Create new payroll
exports.createPayroll = async (req, res) => {
    try {
        const {
            staffId, staffName, email, role, joiningDate, image,
            salaryMonth, salaryYear,
            basicSalary, da, hra, conveyance, medicalAllowance, otherEarnings,
            tds, esi, pf, profTax, labourWelfare, otherDeductions,
            status
        } = req.body;

        if (!staffId || !staffName) {
            return res.status(400).json({ success: false, message: 'Staff is required' });
        }
        if (!salaryMonth || !salaryYear) {
            return res.status(400).json({ success: false, message: 'Salary month and year are required' });
        }

        const checkQuery = { staffId, salaryMonth, salaryYear };
        if (req.user && req.user.hospitalId) {
            checkQuery.hospitalId = req.user.hospitalId;
        }
        // Check duplicate: same staff + same month + year
        const existing = await Payroll.findOne(checkQuery);
        if (existing) {
            return res.status(400).json({
                success: false,
                message: `Payroll for ${staffName} in ${salaryMonth} ${salaryYear} already exists`
            });
        }

        const payrollData = {
            staffId, staffName, email: email || '', role: role || '',
            joiningDate: joiningDate || '', image: image || '',
            salaryMonth, salaryYear: parseInt(salaryYear),
            basicSalary: parseFloat(basicSalary) || 0,
            da: parseFloat(da) || 0,
            hra: parseFloat(hra) || 0,
            conveyance: parseFloat(conveyance) || 0,
            medicalAllowance: parseFloat(medicalAllowance) || 0,
            otherEarnings: parseFloat(otherEarnings) || 0,
            tds: parseFloat(tds) || 0,
            esi: parseFloat(esi) || 0,
            pf: parseFloat(pf) || 0,
            profTax: parseFloat(profTax) || 0,
            labourWelfare: parseFloat(labourWelfare) || 0,
            otherDeductions: parseFloat(otherDeductions) || 0,
            status: status || 'Pending'
        };
        if (req.user && req.user.hospitalId) {
            payrollData.hospitalId = req.user.hospitalId;
        }
        const newPayroll = new Payroll(payrollData);

        await newPayroll.save();

        res.status(201).json({ success: true, message: 'Payroll created successfully', data: newPayroll });
    } catch (error) {
        console.error('Create payroll error:', error);
        res.status(500).json({ success: false, message: 'Failed to create payroll', error: error.message });
    }
};

// Update payroll
exports.updatePayroll = async (req, res) => {
    try {
        const payroll = await Payroll.findById(req.params.id);
        if (!payroll) {
            return res.status(404).json({ success: false, message: 'Payroll not found' });
        }

        const {
            staffId, staffName, email, role, joiningDate, image,
            salaryMonth, salaryYear,
            basicSalary, da, hra, conveyance, medicalAllowance, otherEarnings,
            tds, esi, pf, profTax, labourWelfare, otherDeductions,
            status
        } = req.body;

        // Check duplicate for other records
        if (staffId && salaryMonth && salaryYear) {
            const existing = await Payroll.findOne({
                staffId,
                salaryMonth,
                salaryYear: parseInt(salaryYear),
                _id: { $ne: req.params.id }
            });
            if (existing) {
                return res.status(400).json({
                    success: false,
                    message: `Payroll for this staff in ${salaryMonth} ${salaryYear} already exists`
                });
            }
        }

        payroll.staffId = staffId || payroll.staffId;
        payroll.staffName = staffName || payroll.staffName;
        payroll.email = email !== undefined ? email : payroll.email;
        payroll.role = role !== undefined ? role : payroll.role;
        payroll.joiningDate = joiningDate !== undefined ? joiningDate : payroll.joiningDate;
        payroll.image = image !== undefined ? image : payroll.image;
        payroll.salaryMonth = salaryMonth || payroll.salaryMonth;
        payroll.salaryYear = salaryYear ? parseInt(salaryYear) : payroll.salaryYear;
        payroll.basicSalary = basicSalary !== undefined ? parseFloat(basicSalary) : payroll.basicSalary;
        payroll.da = da !== undefined ? parseFloat(da) : payroll.da;
        payroll.hra = hra !== undefined ? parseFloat(hra) : payroll.hra;
        payroll.conveyance = conveyance !== undefined ? parseFloat(conveyance) : payroll.conveyance;
        payroll.medicalAllowance = medicalAllowance !== undefined ? parseFloat(medicalAllowance) : payroll.medicalAllowance;
        payroll.otherEarnings = otherEarnings !== undefined ? parseFloat(otherEarnings) : payroll.otherEarnings;
        payroll.tds = tds !== undefined ? parseFloat(tds) : payroll.tds;
        payroll.esi = esi !== undefined ? parseFloat(esi) : payroll.esi;
        payroll.pf = pf !== undefined ? parseFloat(pf) : payroll.pf;
        payroll.profTax = profTax !== undefined ? parseFloat(profTax) : payroll.profTax;
        payroll.labourWelfare = labourWelfare !== undefined ? parseFloat(labourWelfare) : payroll.labourWelfare;
        payroll.otherDeductions = otherDeductions !== undefined ? parseFloat(otherDeductions) : payroll.otherDeductions;
        payroll.status = status || payroll.status;

        await payroll.save();

        res.status(200).json({ success: true, message: 'Payroll updated successfully', data: payroll });
    } catch (error) {
        console.error('Update payroll error:', error);
        res.status(500).json({ success: false, message: 'Failed to update payroll', error: error.message });
    }
};

// Delete payroll
exports.deletePayroll = async (req, res) => {
    try {
        const payroll = await Payroll.findById(req.params.id);
        if (!payroll) {
            return res.status(404).json({ success: false, message: 'Payroll not found' });
        }
        await Payroll.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Payroll deleted successfully' });
    } catch (error) {
        console.error('Delete payroll error:', error);
        res.status(500).json({ success: false, message: 'Failed to delete payroll', error: error.message });
    }
};