//require modules
const express = require('express')
//router
const router = express.Router()
//require db connection and models
const db = require('../models')

//routes
//index
router.get('/', (req, res) => {
    db.Song.find({}, { comments: true, _id: false})
        .then(songs => {
            const flatList =[]
            for (let song of songs) {
                flatList.push(...song.comments)
            }
            res.json(flatList)
        })
})
//show
router.get('/:id', (req, res) => {
    db.Song.findOne(
        {'comments._id': req.params.id},
        {'comments.$': true, _id: false}
    )
        .then(song => res.json(song))
})
//create
router.post('/create/:songId', (req, res) => {
    db.Song.findByIdAndUpdate(
        req.params.songId,
        { $push: {comments: req.body}},
        {new: true}
    )
        .then(song => res.json(song))
})

//delete
router.delete('/:id', (req, res) => {
    db.Song.findOneAndUpdate(
        {'comments._id': req.params.id},
        { $pull: {comments: {_id: req.params.id}}},
        {new: true}
    )
        .then(song => res.json(song))
})
//export
module.exports = router