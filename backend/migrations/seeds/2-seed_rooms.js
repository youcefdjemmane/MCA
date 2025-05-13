/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('rooms').del();
  await knex('rooms').insert([
    { id: 1, name: 'Hall A', floor_id: 1, central_panorama_id: 1 },
    { id: 2, name: 'Gallery B', floor_id: 2, central_panorama_id: 2 },
  ]);
}
