const mongoose = require('mongoose')
const { db } = require('../config')

const dbConnection = async () => {
  try {
    await mongoose.connect(db.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    console.log('// db online'.green)
  } catch (err) {
    console.log(err)
    throw new Error('Error'.red)
  }
}

module.exports = dbConnection
