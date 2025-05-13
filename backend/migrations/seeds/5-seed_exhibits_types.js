/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('exhibit_types').del();
  await knex('exhibit_types').insert([
    { id: 1, name: 'Sculpture', description: "test" },
    { id: 2, name: 'Weapon', description: "test" },
    { id: 3, name: 'Painting', description: "test" },
  ]);
}

