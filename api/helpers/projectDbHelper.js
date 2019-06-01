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

async function getProject(id) {
  const projects = // returns array of project objects
    await db.select(
      '*'
    )
    .from('projects as p')
    .where('p.id', id);

  const actions = // returns array of action objects
    await db.select(
      'a.id',
      'a.description',
      'a.notes',
      'a.completed'
    )
    .from(
      'projects as p'
    )
    .join(
      'actions as a',
      'p.id',
      'a.project_id'
    )
    .where('p.id', id);

  if(projects.length) {

    // if true, return an object - inside we spread
    //  the project object that was returned above,
    //   and add an actions property that has the action
    //   array of object (returned above) as the value
    return {...projects[0], actions: actions};

  } else {

    return projects[0];
  }
}
