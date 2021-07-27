const express = require('express')
const cors = require('cors')
const { server } = require('../config')

class Server {
  constructor() {
    this.app = express()
    this.port = server.PORT
    this.host = server.HOST

    this.middlewares()

    this.routes()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.send('Hi server')
    })
  }

  listen() {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server running at ${this.host}:${this.port}`)
    })
  }
}

module.exports = Server
