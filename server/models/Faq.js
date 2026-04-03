const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true,
    },
    question: {
        type: String,
        required: [true, 'Question is required'],
        trim: true,
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
}, { timestamps: true });

module.exports = mongoose.model('Faq', faqSchema);