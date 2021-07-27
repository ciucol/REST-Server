require('colors')
const app = require('./server/server')
const routes = require('./routes/routes')

routes(app)
