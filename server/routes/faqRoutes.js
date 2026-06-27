const express = require('express');
const router = express.Router();
const {
    getAllFaqs,
    getFaqById,
    getCategories,
    createFaq,
    updateFaq,
    deleteFaq,
} = require('../controllers/faqController');

// Add auth middleware if needed:
const { protect } = require('../middleware/authMiddleware');
router.use(protect);

router.get('/', getAllFaqs);       // GET all (with optional ?search= ?category= ?status=)
router.get('/categories', getCategories);   // GET unique categories list
router.get('/:id', getFaqById);      // GET single
router.post('/', createFaq);       // POST create
router.put('/:id', updateFaq);       // PUT update
router.delete('/:id', deleteFaq);       // DELETE

module.exports = router;