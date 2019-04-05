const express = require('express')
const app = express()
var port = process.env.PORT || 3005
const cors = require('cors')
const parser = require('body-parser')
const dotenv = require('dotenv').config()
const knex = require('./knex')


app.use(cors())
app.use(parser.json())


app.get('/', function(req,res, next) {
    res.send('you got this')
})


app.listen(port, () => console.log(`Ayyyy hmu on ${port}`))