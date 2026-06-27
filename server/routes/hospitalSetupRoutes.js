const express = require('express');
const router = express.Router();

const {
  createHospitalSetup,
  getHospitalSetups,
  getHospitalSetup,
  updateHospitalSetup,
  deleteHospitalSetup,
} = require('../controllers/hospitalSetupController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', createHospitalSetup);

router.get('/', getHospitalSetups);

router.get('/:id',protect, getHospitalSetup);

router.put('/:id',protect, updateHospitalSetup);

router.delete('/:id',protect, deleteHospitalSetup);

module.exports = router;