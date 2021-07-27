const User = require('../../models/user')

const mailExists = async (mail) => {
  return await User.findOne({ mail })
}

const getUser = async (name, page = 1, limit = 3) => {
  const mySkip = limit * (page - 1)
  if (name) {
    return await User.findOne({ name })
  } else {
    const [count, user] = await Promise.all([
      User.countDocuments({ status: true }),
      User.find({ status: true }).skip(mySkip).limit(parseInt(limit))
    ])
    return { count, user }
  }
}

const newUser = async (user) => {
  const newUser = new User(user)
  await newUser.save()

  console.log(newUser)
  return newUser
}

const editUser = async (id, infoUser) => {
  await User.findByIdAndUpdate(id, infoUser)
  return await User.findById(id)
}

const deleteUser = async (id) => {
  await User.findByIdAndUpdate(id, { status: false })
  return await User.findById(id)
}

module.exports = {
  newUser,
  mailExists,
  getUser,
  editUser,
  deleteUser
}
