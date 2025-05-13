/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('exhibits', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.text('image_url');
    table.integer('period_id').references('id').inTable('periods');
    table.integer('exhibit_type_id').references('id').inTable('exhibit_types');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('exhibits');
};