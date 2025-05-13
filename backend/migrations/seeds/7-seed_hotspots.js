/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('hotspots').del();
  await knex('hotspots').insert([
    {
      id: 1,
      panorama_id: 1,
      type: 'info',
      pitch: 0.1,
      yaw: 1.5,
      target_panorama_id: null,
      exhibit_id: 1
    },
    {
      id: 2,
      panorama_id: 1,
      type: 'navigation',
      pitch: -0.1,
      yaw: 0.5,
      target_panorama_id: 2,
      exhibit_id: null
    }
  ]);
}

