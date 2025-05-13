/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('visits', (table) => {
    table.increments('id').primary();
    table.string('full_name').notNullable();
    table.string('email').notNullable();
    table.string('phone');
    table.integer('visit_type_id').references('id').inTable('visit_types');
    table.date('visit_date').notNullable();
    table.time('time_slot').notNullable();
    table.integer('people_count').notNullable().checkPositive('people_count');
    table.text('message');
    table.string('status').defaultTo('pending');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('event_id').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('visits');
};