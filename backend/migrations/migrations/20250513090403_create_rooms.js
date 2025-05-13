/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('rooms', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('floor_id').references('id').inTable('floors').onDelete('CASCADE');
    table.integer('central_panorama_id'); // optional FK, resolved after panoramas
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  await knex.schema.dropTable('rooms');
};