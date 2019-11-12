'use strict'

const express= require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const routes= require('./app/routes')
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: 3306,
    connectionLimit: 10
})

//test connect to mysql
db.getConnection( (err)=>{
    if(err) {
        console.log('mysql error')
    }else{
        console.log('mysql connect ok')
    }
    
})

global.db = db

const app= express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Route
app.use('/', routes)


module.exports=app
