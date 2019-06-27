const express = require('express')
const app = express()
var port = process.env.PORT || 3005
const cors = require('cors')
const parser = require('body-parser')
const dotenv = require('dotenv').config()
const knex = require('./knex')


app.use(cors())
app.use(parser.json())


app.get('/', function(req, res, next){
    knex('stretches')
    .then((rows) => {
        res.send(rows)
    })
    .catch((err) => {
        next(err)
    })
})

app.get('/:email', function(req, res, next){
    knex('users')
        .where('email', req.params.email)
        .first()
        .then((user) => {
            
                knex('saved')
                 .where('user_id', user.id)
                 .join('stretches', {'saved.stretch_id': 'stretches.id'})
                 .select('stretches.id','stretches.name', 'stretches.description', 'stretches.img' )
                 .then(savedStretches => (res.send(savedStretches)))
        })
        .catch((err) => {
            next(err)
        })
})

app.post('/:email', function(req, res, next){
    knex('users')
    .where('email', req.params.email)
    .first()
    .then((user) => {
        knex('saved')
        .insert({
            user_id: user.id,
            stretch_id: req.body.stretch_id
        })
    })
})

app.listen(port, () => console.log(`Ayyyy hmu on ${port}`))