require('dotenv').config()

const server = {
  PORT: process.env.PORT || 8080,
  HOST: 'localhost'
}

const db = {
  MONGODB: process.env.MONGODB
}

module.exports = {
  server,
  db
}
