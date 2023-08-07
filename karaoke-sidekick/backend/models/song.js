const mongoose = require('mongoose');

const songSchema = new mongoose.Schema(
    {
        song: { type: String, required: true },
        artist: { type: String, required: true},
        genre: { type: String, required: true},
        sort: { type: String},        
    }
);

module.exports = mongoose.model('Song', songSchema)