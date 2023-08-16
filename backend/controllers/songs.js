//require modules
const express = require('express')
//router
const router = express.Router()
//require db connection and models
const db = require('../models')

//routes
//index route will display all songs
router.get('/', function (req, res) {
    db.Song.find({})
        .then(songs => res.json(songs))
})
//show route
router.get('/sort/:sort', function(req, res) {
    console.log(req.params)
    db.Song.find({sort: req.params.sort})
        .then(songs => res.json(songs))
})
//create route
router.post('/', (req, res) => {
    db.Song.create(req.body)
        .then(song => res.json(song))
})
//update route
router.put('/:id', (req, res) => {
    db.Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(song => res.json(song))
})
//delete route
router.delete('/:id', (req, res) => {
    db.Song.findByIdAndRemove(req.params.id)
        .then(() => res.json({ deletedSongId: req.params.id}))
})

//export routes
module.exports = router