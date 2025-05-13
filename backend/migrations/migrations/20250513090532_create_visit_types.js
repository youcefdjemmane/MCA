/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('visit_types', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.text('description');
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('visit_types');
};
