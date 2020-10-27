const port = 3000;

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const router = require('./router')
const app = express()

mongoose.connect('mongodb://apist:apist@apist_mongo_1:27017/', {useNewUrlParser: true})

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', router)

app.listen(port, () => {
    console.log('Server OK')
})
