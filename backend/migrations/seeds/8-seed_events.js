/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('events').del();

  await knex('events').insert([
    {
      id: 1,
      title: 'Art Night 2025',
      description: 'A special evening exhibition of Renaissance masterpieces.',
      event_date: '2025-06-05',
      start_time: '18:00:00',
      end_time: '22:00:00',
      location: 'Main Gallery - Floor 1',
      room_id: 1
    },
    {
      id: 2,
      title: 'Medieval Weapons Showcase',
      description: 'Live demonstration and guided tour of ancient weaponry.',
      event_date: '2025-06-10',
      start_time: '14:00:00',
      end_time: '17:30:00',
      location: 'Exhibition Hall B',
      room_id: 2
    },
    {
      id: 3,
      title: 'Interactive Sculpture Walk',
      description: 'Visitors interact with digital replicas of classical sculptures.',
      event_date: '2025-06-15',
      start_time: '11:00:00',
      end_time: '13:00:00',
      location: 'Sculpture Garden - Floor 2',
      room_id: 2
    }
  ]);
}



