exports.up = async function(knex) {
  await knex.schema.createTable('projects', tbl => {
    tbl.increments('id');
    tbl.string('name').notNullable();
    tbl.text('description').notNullable();
    tbl.boolean('completed').defaultTo(false);
  })
  await knex.schema.createTable('actions', tbl => {
    tbl.increments('id');
    tbl.string('description').notNullable();
    tbl.text('notes');
    tbl.boolean('completed').defaultTo(false);
    tbl
      .integer('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('actions');
  await knex.schema.dropTableIfExists('projects');
};
