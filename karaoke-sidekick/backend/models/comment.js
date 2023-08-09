const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
    {
        success: {type: string},
        improvements: {type: string},
        doAgain: {type: string}
    }
)
module.exports = mongoose.model('Comment', commentSchema)