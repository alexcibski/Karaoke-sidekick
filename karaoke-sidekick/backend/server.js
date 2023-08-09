//require modules
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')


//require db connection
const db = require('./models')

//require routes in controllers folder
const songsCtrl = require('./controllers/songs')
const commentsCtrl = require('./controllers/comments')
//create express app
const app = express()

//middleware
app.use(cors())
//body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//mount routes
app.use('/api/songs', songsCtrl)
app.use('/api/comments', commentsCtrl)

//tell app to listen to port
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT)
})

