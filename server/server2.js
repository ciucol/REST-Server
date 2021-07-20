const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/', express.static('public'))

app.listen(3000, () => {
  console.log('Server running')
})

module.exports = app
