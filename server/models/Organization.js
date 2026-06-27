const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: String,
    fax: String,

    logos: {
      logo: String,
      darkLogo: String,
      miniLogo: String,
      darkMiniLogo: String,
      favicon: String,
      appleIcon: String,
    },

    address: {
      addressLine1: String,
      addressLine2: String,
      country: String,
      state: String,
      city: String,
      pincode: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Organization', organizationSchema);