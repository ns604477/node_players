const mongoose = require("mongoose");
require('dotenv').config();

const mongoUrl = process.env.MONGODB_URL_LOCAL || process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on('connected', () => {
  console.log("Connected to the MongoDB server");
});

db.on('error', (err) => {
  console.error("Error on the MongoDB server:", err);
});

db.on('disconnected', () => {
  console.log("Disconnected from the MongoDB server");
});

module.exports = db;
