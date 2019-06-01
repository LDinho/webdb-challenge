const db = require('../../data/dbConfig');

module.exports = {
  getProjects,
  addProject,
  getProject,
}

function getProjects() {
  return db('projects');
}

async function addProject(project) {
  const [id] = await db('projects')
    .insert(project, 'id');

  return getProject(id);
}

function getProject(id) {
  return db('projects')
    .where({ id })
    .first();
}
