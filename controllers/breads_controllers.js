const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')
const breadSeedData = require('../models/baker_seed.js')


// INDEX
breads.get('/', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            Bread.find()
                .then(foundBreads => {
                    res.render('index', {
                        breads: foundBreads,
                        bakers: foundBakers,
                        title: 'Index Page'
                    })
                })
        })
})


//new
breads.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('new', {
                bakers: foundBakers
            })
        })
        .catch(err => {
            res.send('404')
        })
})

// show
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .populate('baker')
        .then(foundBread => {
            // const bakedBy = foundBread.getBakedBy()
            // console.log(bakedBy)
            res.render('show', {
                bread: foundBread
            })
        })
        .catch(err => {
            console.log(err)
            res.send('this is the 404')
        })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            Bread.findById(req.params.id)
                .then(foundBread => {
                    res.render('edit', {
                        bread: foundBread,
                        bakers: foundBakers
                    })
                })
        })
})

//update
breads.put('/:id', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => {
            console.log('this is the update function', updatedBread)
            res.redirect(`/breads/${req.params.id}`)
        })
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
})

//delete
breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then(deletedBread => {
            res.status(303).redirect('/breads')
        })
})

// SEED ROUTE 
breads.get('/data/seed', (req, res) => {
    Bread.insertMany(breadSeedData)
        .then(createdBreads => {
            res.redirect('/breads')
        })
})


module.exports = breads