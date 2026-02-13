const express = require('express');
const router = express.Router();
const controller = require('../controllers/onlineConsultationController');
// const { authenticateDoctor } = require('../middleware/auth'); // Uncomment if you have auth middleware

// Get consultation by appointment ID
router.get('/latest/:doctorId', controller.getLatestAppointment)
router.get('/appointment/:appointmentId', controller.getByAppointmentId);

// Update sections
router.patch('/:id/vitals', controller.updateVitals);
router.patch('/:id/complaints', controller.updateComplaints);
router.patch('/:id/diagnosis', controller.updateDiagnosis);
router.patch('/:id/medications', controller.updateMedications);
router.patch('/:id/advice', controller.updateAdvice);
router.patch('/:id/investigations', controller.updateInvestigations);
router.patch('/:id/followup', controller.updateFollowUp);
router.patch('/:id/invoice', controller.updateInvoice);

// Complete consultation
router.post('/:id/complete', controller.completeConsultation);
router.post('/:consultationId/create-video-room', controller.createVideoRoom);

module.exports = router;