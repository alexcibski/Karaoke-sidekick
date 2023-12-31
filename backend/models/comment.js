const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
    {        
        success: {type: String},
        improvements: {type: String},
        doAgain: {type: String},
        songId: {type: String, required: true}
    }
)
module.exports = mongoose.model('Comment', commentSchema)