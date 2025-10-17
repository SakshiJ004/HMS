const mongoose = require('mongoose');

/**
 * Connect to MongoDB database
 * Uses connection string from environment variables
 */
const connectDB = async () => {
    try {
        // Connect to MongoDB with modern configuration
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb Connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;