const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task.controller')

router.post('/tasks',
TaskController.create)

router.get('/task',
TaskController.get)

module.exports = router;