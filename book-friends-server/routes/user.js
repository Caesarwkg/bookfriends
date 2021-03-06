const express = require('express')
const router = express.Router()
const userInfoController = require('../controllers/userInfo')

const routers = router.post('/register', userInfoController.register)
  .post('/login', userInfoController.login)
  .post('/update', userInfoController.updateInfo)

module.exports = routers
