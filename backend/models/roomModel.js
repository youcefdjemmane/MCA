import db from '../db/connection.js'; // Connexion à Knex

// Récupérer une salle par ID
export const getRoomById = async (id) => {
  return db('rooms').where({ id }).first();
};

// Récupérer les panoramas liés à une salle
export const getRoomPanoramas = async (roomId) => {
  return db('panoramas').where({ room_id: roomId });
};

// Récupérer le panorama central d’une salle
export const getRoomCentralPanorama = async (roomId) => {
  const room = await db('rooms').where({ id: roomId }).first();
  if (room && room.central_panorama_id) {
    return db('panoramas').where({ id: room.central_panorama_id }).first();
  }
  return null;
};
