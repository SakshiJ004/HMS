const mongoose = require('mongoose');

const hospitalSetupSchema = new mongoose.Schema(
  {
    organizationDetails: {
      organizationName: String,
      organizationType: String,
      organizationEmail: String,
      primaryPhone: String,
      secondaryPhone: String,
      websiteUrl: String,
    },

    addressInformation: {
      address: String,
      city: String,
      state: String,
      country: String,
      pincode: String,
      landmark: String,
    },

    hospitalDetails: {
      fullName: String,
      hospitalName: String,
      totalBedCapacity: Number,
      establishmentDate: Date,
      hospitalRegistrationNumber: String,
      hospitalLocation: String,
    },

    operationConfiguration: {
      ipdHours: String,
      operation24x7: Boolean,
      emergencyServices: Boolean,
      weekendOperation: Boolean,
      availableServices: [String],
    },

    facilitiesDetails: {
      totalFloor: Number,
      wheelChairAccessible: Boolean,
      parkingCapacity: Number,
      totalOPD: Number,
      totalWard: Number,
      totalOT: Number,
      totalEmergency: Number,
      totalDiagnosticAndLab: Number,
      totalAmbulance: Number,
    },

    bedDetails: {
      generalWardBeds: Number,
      icuBeds: Number,
      privateRooms: Number,
      semiPrivateRooms: Number,
      otRooms: Number,
      specialisedRooms: Number,
      emergencyRooms: Number,
      otherRooms: Number,
    },

    staffInformation: {
      totalDoctors: Number,
      totalNurses: Number,
      totalSupportStaff: Number,
      totalAdminStaff: Number,
      totalLeadership: Number,
      otherStaff: Number,
    },

    complianceAndCertifications: {
      nabhAccreditation: String,
      nablAccreditation: String,
      jciAccreditation: String,
      isoCertification: String,
      otherCertificates: [String],
    },

    legalInformation: {
      medicalLicenseNumber: String,
      panNumber: String,
      gstinNumber: String,
      registrationDate: Date,
      otherInformation: String,
    },

    insuranceAndPaymentAcceptance: {
      governmentSchemes: [String],
      privateInsurancePartners: [String],
      cashlessFacilityProvider: [String],
      corporateTieUps: [String],
      paymentGateway: String,
      otherInformation: String,
    },

    paymentGatewayIntegration: {
      upi: Boolean,
      upiDetails: String,
      netBanking: Boolean,
      netBankingDetails: String,
      creditDebitCard: Boolean,
      creditDebitCardDetails: String,
      comments: String,
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

module.exports = mongoose.model('HospitalSetup', hospitalSetupSchema);