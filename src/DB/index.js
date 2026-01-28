const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}`); // mongo uri should be in the formate of mongodb://username:password@localhost:port/database?authSource=admin
        console.log(`MongoDB connected: ${conn}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;