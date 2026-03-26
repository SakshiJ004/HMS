const Asset = require('../models/Asset');

// Get all assets
exports.getAllAssets = async (req, res) => {
    try {
        const { sortBy = 'recent', status } = req.query;
        const filter = {};
        if (status) filter.status = status;
        const sortOrder = sortBy === 'oldest' ? 1 : -1;

        const assets = await Asset.find(filter).sort({ createdAt: sortOrder });

        res.status(200).json({
            success: true,
            data: assets,
            count: assets.length
        });
    } catch (error) {
        console.error('Get assets error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch assets', error: error.message });
    }
};

// Get single asset
exports.getAssetById = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset) {
            return res.status(404).json({ success: false, message: 'Asset not found' });
        }
        res.status(200).json({ success: true, data: asset });
    } catch (error) {
        console.error('Get asset error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch asset', error: error.message });
    }
};

// Create asset
exports.createAsset = async (req, res) => {
    try {
        const {
            assetName, assetUser, purchaseDate, purchaseFrom,
            manufacturer, model, serialNumber, supplier,
            condition, warranty, warrantyEnd, value, description, status
        } = req.body;

        if (!assetName || !assetUser || !purchaseDate || !serialNumber || !value) {
            return res.status(400).json({ success: false, message: 'Required fields missing' });
        }

        // Duplicate serial number check
        const existing = await Asset.findOne({ serialNumber: serialNumber.trim() });
        if (existing) {
            return res.status(400).json({ success: false, message: `Serial number "${serialNumber}" already exists` });
        }

        const newAsset = new Asset({
            assetName: assetName.trim(),
            assetUser: assetUser.trim(),
            purchaseDate,
            purchaseFrom: purchaseFrom?.trim() || '',
            manufacturer: manufacturer?.trim() || '',
            model: model?.trim() || '',
            serialNumber: serialNumber.trim(),
            supplier: supplier?.trim() || '',
            condition: condition || 'New',
            warranty: warranty || '',
            warrantyEnd: warrantyEnd || '',
            value: parseFloat(value),
            description: description?.trim() || '',
            status: status || 'Pending'
        });

        await newAsset.save();
        res.status(201).json({ success: true, message: 'Asset created successfully', data: newAsset });
    } catch (error) {
        console.error('Create asset error:', error);
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'Serial number already exists' });
        }
        res.status(500).json({ success: false, message: 'Failed to create asset', error: error.message });
    }
};

// Update asset
exports.updateAsset = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset) {
            return res.status(404).json({ success: false, message: 'Asset not found' });
        }

        const {
            assetName, assetUser, purchaseDate, purchaseFrom,
            manufacturer, model, serialNumber, supplier,
            condition, warranty, warrantyEnd, value, description, status
        } = req.body;

        // Duplicate serial check (exclude current)
        if (serialNumber && serialNumber !== asset.serialNumber) {
            const existing = await Asset.findOne({ serialNumber: serialNumber.trim(), _id: { $ne: req.params.id } });
            if (existing) {
                return res.status(400).json({ success: false, message: 'Serial number already exists' });
            }
        }

        asset.assetName = assetName?.trim() || asset.assetName;
        asset.assetUser = assetUser?.trim() || asset.assetUser;
        asset.purchaseDate = purchaseDate || asset.purchaseDate;
        asset.purchaseFrom = purchaseFrom?.trim() || asset.purchaseFrom;
        asset.manufacturer = manufacturer?.trim() || asset.manufacturer;
        asset.model = model?.trim() || asset.model;
        asset.serialNumber = serialNumber?.trim() || asset.serialNumber;
        asset.supplier = supplier?.trim() || asset.supplier;
        asset.condition = condition || asset.condition;
        asset.warranty = warranty !== undefined ? warranty : asset.warranty;
        asset.warrantyEnd = warrantyEnd !== undefined ? warrantyEnd : asset.warrantyEnd;
        asset.value = value !== undefined ? parseFloat(value) : asset.value;
        asset.description = description !== undefined ? description : asset.description;
        asset.status = status || asset.status;

        await asset.save();
        res.status(200).json({ success: true, message: 'Asset updated successfully', data: asset });
    } catch (error) {
        console.error('Update asset error:', error);
        res.status(500).json({ success: false, message: 'Failed to update asset', error: error.message });
    }
};

// Delete asset
exports.deleteAsset = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset) {
            return res.status(404).json({ success: false, message: 'Asset not found' });
        }
        await Asset.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Asset deleted successfully' });
    } catch (error) {
        console.error('Delete asset error:', error);
        res.status(500).json({ success: false, message: 'Failed to delete asset', error: error.message });
    }
};