/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('visit_types').del();
  await knex('visit_types').insert([
    { id: 1, name: 'Personal', description: "some description" },
    { id: 2, name: 'Family', description: "some description" },
    { id: 3, name: 'School Group', description: "some description" },
    { id: 4, name: 'Guided Tour', description: "some description" }
  ]);
}

