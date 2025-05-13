/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('exhibit_types', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable(); // e.g., weapon, art
    table.text('description');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('exhibit_types');
};