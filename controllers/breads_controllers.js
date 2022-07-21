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
    if (Bread[req.params.arrayIndex]) {
        console.log('this is an id', req.params)
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    } else {
        res.render('404')
    }
})

module.exports = breads