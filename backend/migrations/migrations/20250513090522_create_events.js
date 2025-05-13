/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('events', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.date('event_date').notNullable();
    table.time('start_time');
    table.time('end_time');
    table.string('location');
    table.integer('room_id').references('id').inTable('rooms');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('events');
};
