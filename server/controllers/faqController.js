const Faq = require('../models/Faq');

// ── Get all FAQs ──────────────────────────────────────────────────────────────
exports.getAllFaqs = async (req, res) => {
    try {
        const { search, category, status } = req.query;
        const filter = {};
        if (status) filter.status = status;
        if (category) filter.category = { $regex: category, $options: 'i' };
        if (search) {
            filter.$or = [
                { question: { $regex: search, $options: 'i' } },
                { answer: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
            ];
        }

        const faqs = await Faq.find(filter).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: faqs,
            count: faqs.length,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch FAQs', error: err.message });
    }
};

// ── Get single FAQ ────────────────────────────────────────────────────────────
exports.getFaqById = async (req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        if (!faq) return res.status(404).json({ success: false, message: 'FAQ not found' });
        res.status(200).json({ success: true, data: faq });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch FAQ', error: err.message });
    }
};

// ── Get unique categories ─────────────────────────────────────────────────────
exports.getCategories = async (req, res) => {
    try {
        const categories = await Faq.distinct('category');
        res.status(200).json({ success: true, data: categories.sort() });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch categories' });
    }
};

// ── Create FAQ ────────────────────────────────────────────────────────────────
exports.createFaq = async (req, res) => {
    try {
        const { category, question, answer, status } = req.body;

        if (!category || !category.trim())
            return res.status(400).json({ success: false, message: 'Category is required' });
        if (!question || !question.trim())
            return res.status(400).json({ success: false, message: 'Question is required' });
        if (!answer || !answer.trim())
            return res.status(400).json({ success: false, message: 'Answer is required' });

        const faq = await Faq.create({
            category: category.trim(),
            question: question.trim(),
            answer: answer.trim(),
            status: status || 'Active',
        });

        res.status(201).json({ success: true, message: 'FAQ created successfully', data: faq });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create FAQ', error: err.message });
    }
};

// ── Update FAQ ────────────────────────────────────────────────────────────────
exports.updateFaq = async (req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        if (!faq) return res.status(404).json({ success: false, message: 'FAQ not found' });

        const { category, question, answer, status } = req.body;

        if (category !== undefined) faq.category = category.trim();
        if (question !== undefined) faq.question = question.trim();
        if (answer !== undefined) faq.answer = answer.trim();
        if (status !== undefined) faq.status = status;

        await faq.save();

        res.status(200).json({ success: true, message: 'FAQ updated successfully', data: faq });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update FAQ', error: err.message });
    }
};

// ── Delete FAQ ────────────────────────────────────────────────────────────────
exports.deleteFaq = async (req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        if (!faq) return res.status(404).json({ success: false, message: 'FAQ not found' });
        await Faq.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'FAQ deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete FAQ', error: err.message });
    }
};