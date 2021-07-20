const express = require('express')
// const morgan = require('morgan')
const cors = require('cors')
const { server } = require('../config')
require('dotenv').config()

const port = process.env.PORT
const host = server.HOST

const app = express()
// app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/', express.static('public'))

app.listen(port, host, () => {
  console.log('Server running')
})

module.exports = app
