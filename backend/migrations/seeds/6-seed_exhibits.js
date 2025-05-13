/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('exhibits').del();
  await knex('exhibits').insert([
    {
      id: 1,
      title: 'Venus de Milo',
      description: 'Ancient Greek statue',
      period_id: 1,
      exhibit_type_id: 1,
      image_url: "/somewhere/anywhere"
    },
    {
      id: 2,
      title: 'Katana Sword',
      description: 'Japanese weapon from Edo period',
      period_id: 2,
      exhibit_type_id: 2,
      image_url: "/somewhere/anywhere"
    }
  ]);
}

