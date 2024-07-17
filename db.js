const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/nsdatabase";

// Connect to MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Move event listeners after connection setup
db.on('connected', () => {
  console.log("connected to the server mongo db");
});

db.on('error', (err) => {
  console.error("error on the server:", err);
});

db.on('disconnected', () => {
  console.log("disconnected to the server");
});

module.exports = db;
