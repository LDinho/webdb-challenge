const db = require('../../data/dbConfig');

module.exports = {
  getActions,
  addAction,
  getAction,
}

function getActions() {
  return db('actions');
}

async function addAction(action) {
  const [id] = await db('actions')
    .insert(action, 'id');

  return getAction(id);
}

function getAction(id) {
  return db('actions')
    .where({ id })
    .first();
}
