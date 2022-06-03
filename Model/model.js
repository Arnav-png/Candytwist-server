const mongoose = require('mongoose')

const score = new mongoose.Schema({
    Username:{
        type: String,
        required:true
    },
    Score:{
        type: Number,
        required:true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

const ScoreSchema = mongoose.model("ScoreSchema",score);

module.exports= ScoreSchema