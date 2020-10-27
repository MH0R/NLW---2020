// import lib
const express = require('express');
const path = require('path')
const pages = require('./pages.js')
// express start
const server = express();
server
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
// rote server
.get('/', pages.index)
.get('/create-orphanage', pages.createOrphanage)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)

// start server 
server.listen(5500)