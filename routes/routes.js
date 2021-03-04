const express = require('express')
const router = express.Router()
const homeRoutes = require('./home')
const userRoutes = require('./user')
const taskRoutes = require('./task')

router.use(homeRoutes)
router.use(userRoutes)
router.use(taskRoutes)

module.exports = router