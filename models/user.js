const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name required']
  },
  age: {
    type: Number
  },
  mail: {
    type: String,
    required: [true, 'Mail required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password required']
  },
  img: {
    type: String
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE']
  },
  status: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }

})

UserSchema.methods.toJSON = function () {
  const { __v, _id, password, ...user } = this.toObject()
  return user
}

module.exports = model('User', UserSchema)
