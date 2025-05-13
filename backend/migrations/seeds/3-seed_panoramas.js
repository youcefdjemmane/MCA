/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('panoramas').del();
  await knex('panoramas').insert([
    { id: 1, room_id: 1, image_url: '/images/hallA_1.jpg', title: "Hallway", description: "some description for testing" },
    { id: 2, room_id: 2, image_url: '/images/galleryB_1.jpg', title: "Main entrance", description: "some description for testing" },
  ]);
}

