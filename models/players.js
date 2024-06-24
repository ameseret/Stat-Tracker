const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: String, required: true },
    position: { type: String, required: true },
    age: { type: Number, required: true },
    stats: {
        points: { type: Number, required: true },
        rebounds: { type: Number, required: true },
        assists: { type: Number, required: true },
        blocks: { type: Number, required: true },
        steals: { type: Number, required: true },
        turnovers: { type: Number, required: true },
        minutesPlayed: { type: Number, required: true },
        fieldGoalPercentage: { type: Number, required: true },
        threePointPercentage: { type: Number, required: true },
        freeThrowPercentage: { type: Number, required: true }
    }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;