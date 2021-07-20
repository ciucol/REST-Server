require('dotenv').config()

const server = {
  PORT: process.env.PORT || 3001,
  HOST: 'localhost'
}

module.exports = {
  server
}
