const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const { server } = require('../config')
const db = require('../db/config')

const port = server.PORT
const host = server.HOST

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
db()

app.use('/', express.static('public'))

app.listen(port, host, () => {
  console.log(`Server running at ${port}:${host}`)
})

module.exports = app
