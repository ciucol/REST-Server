require('colors')
const app = require('./server/server2')
const routes = require('./routes/routes')

routes(app)
