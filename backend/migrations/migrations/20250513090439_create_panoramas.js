/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('panoramas', (table) => {
    table.increments('id').primary();
    table.integer('room_id').references('id').inTable('rooms').onDelete('CASCADE');
    table.string('title').notNullable();
    table.text('description');
    table.text('image_url').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('panoramas');
};