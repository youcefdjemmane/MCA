import db from '../db/connection.js'; // connexion à la BDD PostgreSQL

// Créer une nouvelle réservation (visit)
export const createVisit = async (visitData) => {

  const [visit] = await db('visits')
    .insert({
      full_name: visitData.full_name, //remplir
      email: visitData.email, //remplir
      phone: visitData.phone,//remplir
      visit_type_id: visitData.visit_type_id,//remplir
      visit_date: visitData.visit_date,//remplir
      time_slot: visitData.time_slot,//remplir
      people_count: visitData.people_count,//remplir
      message: visitData.message || null,//remplir
      status: 'pending',
      created_at: db.fn.now(),
      event_id: visitData.event_id//remplir
    })
    .returning('*');

  return visit;
};

// Lister toutes les réservations (admin)
export const listAdminVisits = async () => {
  const visits = await db('visits')
    .select(
      'visits.*',
      'visit_types.name as visit_type'
    )
    .leftJoin('visit_types', 'visits.visit_type_id', 'visit_types.id')
    .orderBy('visit_date', 'desc');

  return visits;
};

// Récupérer une seule réservation par ID
export const getVisit = async (id) => {
  const visit = await db('visits')
    .where({ id })
    .first();

  return visit;
};

// Annuler une réservation (changer le statut à 'cancelled')
export const cancelVisit = async (id) => {
  const [visit] = await db('visits')
    .where({ id })
    .update({ status: 'cancelled' }, ['*']);

  return visit;
};

// Confirmer une réservation (changer le statut à 'confirmed')
export const confirmVisit = async (id) => {
  const [visit] = await db('visits')
    .where({ id })
    .update({ status: 'confirmed' }, ['*']);

  return visit;
};

// Supprimer une réservation (delete)
export const deleteVisit = async (id) => {
  const [visit] = await db('visits')
    .where({ id })
    .del()
    .returning('*');

  return visit;
};
