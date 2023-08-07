//require modules
const express = require('express')
//router
const router = express.Router()
//require db connection and models
const db = require('../models')

//routes
//index route will display all songs
router.get('/songs', function (req, res) {
    db.Song.find({ song: req.params.songs})
        .then(songs => res.json(songs))
})
//create route
router.post('/', (req, res) => {
    db.Song.create(req.body)
        .then(song => res.json(song))
})