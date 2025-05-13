/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('floors').del();
  await knex('floors').insert([
    { id: 1, name: 'Ground Floor', description: 'Main entrance and exhibitions' },
    { id: 2, name: 'First Floor', description: 'Historical galleries' },
  ]);
}
