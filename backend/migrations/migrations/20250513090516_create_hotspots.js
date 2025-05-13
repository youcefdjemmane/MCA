/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('hotspots', (table) => {
    table.increments('id').primary();
    table.integer('panorama_id').references('id').inTable('panoramas').onDelete('CASCADE');
    table.string('type').notNullable(); // 'navigation' or 'info'
    table.float('pitch').notNullable();
    table.float('yaw').notNullable();
    table.integer('target_panorama_id').references('id').inTable('panoramas');
    table.integer('exhibit_id').references('id').inTable('exhibits');
    table.string('tooltip');
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('hotspots');
};
