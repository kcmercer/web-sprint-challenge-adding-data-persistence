/* eslint-disable no-unused-vars */

exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('project_id');
    table.string('project_name', 128)
      .notNullable()
      .unique();
    table.string('project_description');
    table.boolean('project_completed')
      .defaultTo(0);
  })
  .createTable('resources', table => {
    table.increments('resource_id')
    table.string('resource_name', 128)
      .notNullable()
      .unique();
    table.string('resource_description');
  })
  .createTable('tasks', table => {
    table.increments('task_id');
    table.string('task_description')
      .notNullable();
    table.string('task_notes');
    table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.boolean('task_completed')
      .defaultTo(0);
  })
  .createTable('project_resources', table => {
    table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
