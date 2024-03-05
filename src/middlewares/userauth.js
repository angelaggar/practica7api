// const { findUserById } = require('../util/fileSystem')

// MIDDLEWARE
const userID = async (req, res, next) => {
  const { id } = req.headers
  const user = req.params
  console.log(id)
  console.log(user)
  if (id == user) {
    next()
  } else {
    res.status(401).send('Unauthorize access')
  }
}

module.exports = { userID }
