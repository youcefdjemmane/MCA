/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('periods').del();
  await knex('periods').insert([
    { id: 1, name: 'Renaissance', description: 'Period of cultural rebirth' },
    { id: 2, name: 'Modern', description: '20th century period' },
  ]);
}

