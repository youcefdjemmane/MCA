/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('visits').del();

  await knex('visits').insert([
    {
      id: 1,
      full_name: 'Alice Dupont',
      email: 'alice.dupont@example.com',
      phone: '+123456789',
      visit_type_id: 1, // e.g., Personal
      visit_date: '2025-06-10',
      time_slot: '10:00:00',
      people_count: 1,
      message: 'Looking forward to my solo visit.',
      status: 'pending',
      created_at: '2025-05-13 09:00:00',
      event_id: 1
    },
    {
      id: 2,
      full_name: 'The Martin Family',
      email: 'martin.family@example.com',
      phone: '+987654321',
      visit_type_id: 2, // e.g., Family
      visit_date: '2025-06-12',
      time_slot: '15:00:00',
      people_count: 4,
      message: 'Family visit with kids. Need stroller access.',
      status: 'approved',
      created_at: '2025-05-13 09:15:00',
      event_id: 1
    },
    {
      id: 3,
      full_name: 'School Group - Lycée Voltaire',
      email: 'school.group@example.com',
      phone: '+33678901234',
      visit_type_id: 3, // e.g., Organized
      visit_date: '2025-06-20',
      time_slot: '09:30:00',
      people_count: 25,
      message: 'Organized school trip. Includes two teachers.',
      status: 'pending',
      created_at: '2025-05-13 09:30:00',
      event_id: 1
    }
  ]);
}


