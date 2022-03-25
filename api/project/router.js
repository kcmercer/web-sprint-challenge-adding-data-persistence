// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model.js')
const ProjectRouter = express.Router()

ProjectRouter.get('/', (req, res, next) => {
  Projects.find()
    .then(projects => {
      res.json(projects)
    })
    .catch(next)
})

ProjectRouter.post('/', (req, res, next) => {
  const project = req.body

  Projects.add(project)
  .then(project => {
    res.status(201).json(project)
  })
  .catch(next)
})

module.exports = ProjectRouter