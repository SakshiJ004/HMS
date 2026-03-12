const express = require('express');
const router = express.Router();
const {
    getAllPayrolls,
    getPayrollById,
    createPayroll,
    updatePayroll,
    deletePayroll
} = require('../controllers/payrollController');

router.get('/', getAllPayrolls);
router.get('/:id', getPayrollById);
router.post('/', createPayroll);
router.put('/:id', updatePayroll);
router.delete('/:id', deletePayroll);

module.exports = router;