const fetch = require('node-fetch')
const cookieParser = require('cookie-parser')
const express = require('express')
const wait = ms => new Promise(res => setTimeout(res, ms))
const app = express()

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use(cookieParser());

app.use(express.json())

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.get('/login', function (req, res) {
    res.render('login.ejs')
})

app.listen(3000)