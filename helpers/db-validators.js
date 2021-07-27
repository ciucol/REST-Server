const User = require('../models/user')
const Role = require('../models/role')

const validationRole = async (role) => {
  const existRole = await Role.findOne({ role })
  if (!existRole) {
    throw new Error(`Role ${role} not validate`)
  }
}

const validationEmail = async (mail) => {
  const emailExist = await User.findOne({ mail })
  if (emailExist) {
    throw new Error(`email ${mail} exist`)
  }
}

const validationUserId = async (id) => {
  const userExist = await User.findById(id)
  if (!userExist) {
    throw new Error(`id ${id} not exist`)
  }
}

module.exports = {
  validationRole,
  validationEmail,
  validationUserId
}
