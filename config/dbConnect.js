const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
}

module.exports = connectDB;