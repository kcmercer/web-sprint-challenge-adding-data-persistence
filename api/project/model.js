// build your `Project` model here
const db = require('../../data/dbConfig')

async function find() {
  const projects = await db('projects')

  projects.forEach(project => {
    !project.project_completed ? project.project_completed = false : project.project_completed = true
  })

  return projects
}

async function add(project) {
  const newProject = await db('projects')
    .insert(project)
    .then(([project_id]) => {
      return db('projects')
        .where('project_id', project_id)
        .first()
    })

    !newProject.project_completed ? newProject.project_completed = false : newProject.project_completed = true

    return newProject
}

module.exports = { find, add }