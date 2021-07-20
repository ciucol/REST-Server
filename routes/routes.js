const userComponent = require('../components/user')

const routes = (server) => {
  const userPath = '/api/user'

  server.use(userPath, userComponent)
}

module.exports = routes
