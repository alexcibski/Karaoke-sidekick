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
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))


//mount routes
app.use('/api/songs', songsCtrl)
app.use('/api/comments', commentsCtrl)

// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});


//tell app to listen to port
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT)
})

