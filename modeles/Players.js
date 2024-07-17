const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    role: {
        type: String,
        enum: ['batsman', 'bowler', 'allrounder', 'keeper'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
