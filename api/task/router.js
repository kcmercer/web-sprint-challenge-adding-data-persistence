// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model.js')
const TaskRouter = express.Router()

TaskRouter.get('/', (req, res, next) => {
  Tasks.find()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(next)
})

TaskRouter.post('/', (req, res, next) => {
  Tasks.create(req.body)
  .then(newTask => {
      res.status(201).json(newTask)
  })
  .catch(next)
})

module.exports = TaskRouter