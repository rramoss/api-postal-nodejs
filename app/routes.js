'use strict'

const express= require('express')

var basicController= require('./controllers/basicController')

const routes= express()

//Routes
routes.get('/', basicController.get)
routes.get('/:postal?', basicController.getpostal)
//routes.post('/', basicController.post)


module.exports=routes
