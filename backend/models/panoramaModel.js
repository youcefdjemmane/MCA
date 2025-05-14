import db from '../db/connection.js';

// Récupérer un panorama par ID
export const getPanoramaById = (id) => {
  return db('panoramas').where({ id }).first();
};

// Récupérer l’URL de l’image d’un panorama
export const getPanoramaImageById = (id) => {
  return db('panoramas')
    .select('image_url')
    .where({ id })
    .first();
};

// Récupérer les hotspots liés à un panorama
export const getPanoramaHotspotsById = (id) => {
  return db('hotspots')
    .where({ panorama_id: id })
    .select('*');
};
