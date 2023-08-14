const mongoose = require('mongoose');
const commentSchema = require('./comment');

const songSchema = new mongoose.Schema(
    {
        song: { type: String, required: true },
        artist: { type: String, required: true},
        genre: { type: String, required: true},
        sort: { type: String},  
        //comment schema below
        comments: [commentSchema]      
    }
);

module.exports = mongoose.model('Song', songSchema)