const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    ranking :{
        type: Number,
        required: true,
        unique: true
    },
    dob :{
        type: Date,
        required: true,
        trim: true
    },
    country :{
        type: String,
        required: true,
        trim: true
    },
    score :{
        type: Number,
        required: true
    },
    event :{
        type: String,
        default: '100m'
    }
});

const MenAthlete = new mongoose.model('MenAthlete', athleteSchema);

module.exports = MenAthlete;