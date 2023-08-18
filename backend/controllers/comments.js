//require modules
const express = require('express')
//router
const router = express.Router()
//require db connection and models
const db = require('../models')

//routes
//index
router.get('/:songId',  (req, res) => {
    db.Comment.find({songId: req.params.songId})
        .then(comments => res.json(comments))
})

//show
// router.get('/:id', (req, res) => {
//     db.Comment.find(req.params.id)
//         .then(comment => res.json(comment))
// })


//create
router.post('/', (req, res) => {
    db.Comment.create(req.body)
        .then(comment => res.json(comment))
})

//update
router.put('/:id', (req, res) => {
    db.Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    .then(comment => res.json(comment))
})

//delete
router.delete('/:id', (req, res) => {
    db.Comment.findByIdAndRemove(req.params.id)
        .then(() => res.json({deletedCommentId: req.params.id}))
})
//export
module.exports = router