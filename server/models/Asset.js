const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    assetName: {
        type: String,
        required: [true, 'Asset name is required'],
        trim: true
    },
    assetUser: {
        type: String,
        required: [true, 'Asset user is required'],
        trim: true
    },
    purchaseDate: {
        type: String,
        required: [true, 'Purchase date is required']
    },
    purchaseFrom: {
        type: String,
        required: [true, 'Purchase from is required'],
        trim: true
    },
    manufacturer: {
        type: String,
        required: [true, 'Manufacturer is required'],
        trim: true
    },
    model: {
        type: String,
        required: [true, 'Model is required'],
        trim: true
    },
    serialNumber: {
        type: String,
        required: [true, 'Serial number is required'],
        trim: true,
        unique: true
    },
    supplier: {
        type: String,
        required: [true, 'Supplier is required'],
        trim: true
    },
    condition: {
        type: String,
        enum: ['New', 'Good', 'Fair', 'Poor'],
        default: 'New'
    },
    warranty: {
        type: String,
        default: ''
    },
    warrantyEnd: {
        type: String,
        default: ''
    },
    value: {
        type: Number,
        required: [true, 'Value is required'],
        min: 0
    },
    description: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['Approved', 'Pending', 'Returned', 'Damaged'],
        default: 'Pending'
    }
}, { timestamps: true });

// Auto-generate Asset ID virtual
assetSchema.virtual('assetId').get(function () {
    return `AST${String(this._id).slice(-6).toUpperCase()}`;
});

assetSchema.set('toJSON', { virtuals: true });
assetSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Asset', assetSchema);