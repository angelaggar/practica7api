const express = require('express')
const router = express.Router()
const auth = require('../middlewares/userauth')
const userModel = require('../models/model_users')

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email: email })
    if (!user || user.password !== password) {
      res.status(401).send({ message: 'invalid password' })
    } else {
      // TODO create token
      res.status(201).send({ message: 'login succesful' })
    }
  } catch (error) {
    res.status(400).send({ message: error })
  }
})

router.post('/', async (req, res) => {
  try {
    const user = req.body
    const newUser = await userModel.create(user)
    await newUser.save()
  } catch (error) {
    res.status(400).send({ message: error })
  }
})

router.get('/', async (req, res) => {
  try {
    const users = await userModel.find()
    res.status(200).send({ message: users })
  } catch (error) {
    res.status(400).send({ message: error })
  }
})

router.put('/:id', auth.userID, async (req, res) => {
  try {
    const { id } = req.params
    const user = req.body
    const updatedUser = userModel.findByIdAndUpdate(id, user, {
      returnOriginal: false
    }) // de esta manera busca el user, con el id y lo actualiza
    // await fn.updateUser(id, user)
    res.status(200).send({ message: 'User edited', data: updatedUser })
  } catch (error) {
    res.status(400).send({ message: error })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await userModel.findByIdAndDelete(id)
    res.status(200).send({ message: 'User deleted' })
  } catch (error) {
    res.status(400).send({ message: error })
  }
})

module.exports = router
