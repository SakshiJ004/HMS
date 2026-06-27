const express = require('express');
const router = express.Router();

const {
  createOrganization,
  getOrganization,
  getOrganizations,
  updateOrganization,
  deleteOrganization,
} = require('../controllers/organizationController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createOrganization);

router.get('/', protect, getOrganizations);

router.get('/:id', protect, getOrganization);

router.put('/:id', protect, updateOrganization);

router.delete('/:id', protect, deleteOrganization);

module.exports = router;