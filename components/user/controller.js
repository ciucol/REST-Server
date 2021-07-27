const bcriptjs = require('bcryptjs')
const store = require('./store')

const getUser = async ({ name, page, limit }) => {
  return await store.getUser(name, page, limit)
}

const newUser = async ({ name, mail, password, role }) => {
  const salt = bcriptjs.genSaltSync()
  const user = {
    name,
    mail,
    password: bcriptjs.hashSync(password, salt),
    role
  }
  return await store.newUser(user)
}

const editUser = async (params, body) => {
  const { id } = params
  const { password, google, ...infoUser } = body

  if (password) {
    const salt = bcriptjs.genSaltSync()
    infoUser.password = bcriptjs.hashSync(password, salt)
  }

  return await store.editUser(id, infoUser)
}

const deleteUser = async (id) => {
  return await store.deleteUser(id)
}

module.exports = {
  newUser,
  editUser,
  getUser,
  deleteUser
}
