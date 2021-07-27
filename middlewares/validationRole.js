const Role = require('../models/role')

const validationRole = async (role = 'USER_ROLE') => {
  const existRole = await Role.findOne({ role })
  if (!existRole) {
    throw new Error(`Role ${role} not validate`)
  }
}

module.exports = validationRole
