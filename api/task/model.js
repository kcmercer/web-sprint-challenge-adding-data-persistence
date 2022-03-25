// build your `Task` model here
const db = require('../../data/dbConfig')

async function find() {
  const result = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')

    result.forEach(task => {
      !task.task_completed ? task.task_completed = false : task.task_completed = true
    })

    return result
}

async function create(task) {
  const result = await db('tasks').insert(task)
    .then(([task_id]) => {
      return db('tasks')
        .where('task_id', task_id)
        .first()
    })

    !result.task_completed ? result.task_completed = false : result.task_completed = true
    
    return result
}

module.exports = { find, create }