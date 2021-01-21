/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('events', (table) => {
    table.bigIncrements('id')
    table.string('name').notNullable()
    table.string('description')
    table.bigInteger('categoryId')
      .notNullable()
      .unsigned()
      .index()
      .references('categories.id')
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists('events')
}