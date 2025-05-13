import db from '../db/connection.js';
// Ajouter un événement
export const addEvent = (eventData) => {
  return db('events')
    .insert({
      title: eventData.title,
      description: eventData.description,
      event_date: eventData.event_date, // colonne correcte
      start_time: eventData.start_time,
      end_time: eventData.end_time,
      location: eventData.location,
      room_id: eventData.room_id
    })
    .returning('*');
};


// Supprimer un événement
export const deleteEvent = (id) => {
  return db('events').where({ id }).del().returning('*');
};

// Modifier un événement
export const editEvent = (id, eventData) => {
  return db('events')
    .where({ id })
    .update({
      title: eventData.title,
      description: eventData.description,
      event_date: eventData.event_date,
      start_time: eventData.start_time,
      end_time: eventData.end_time,
      location: eventData.location,
      room_id: eventData.room_id
    })
    .returning('*');
};


// Récupérer tous les événements
export const showEvents = () => {
  return db('events').select('*').orderBy('start_time', 'desc');
};

// Récupérer un événement par ID
export const showEvent = (id) => {
  return db('events').where({ id }).first();
};

// S'inscrire à un événement  
// pas fait encore 
export const registerEvent = (eventId, name, email) => {
  return db('event_registrations').insert({
    event_id: eventId,
    name,
    email,
    registered_at: db.fn.now()
  }).returning('*');
};
