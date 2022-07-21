const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//index
breads.get('/', (req, res) => {
    res.render('index',
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
    // res.send(Bread)
})

//show
breads.get('/:arrayIndex', (req, res) => {
    console.log(Bread)
    console.log('this is an id', req.params)
    res.render('Show', {
        bread: Bread[req.params.arrayIndex]
    })
})

module.exports = breads