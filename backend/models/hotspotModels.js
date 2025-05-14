import db from '../db/connection.js';

export const getHotspot = async (id) => {
  return await db('hotspots').where({ id }).first();
};

export const getHotspotExhibit = async (id) => {
  return await db('hotspots')
    .select('exhibits.*')
    .join('exhibits', 'hotspots.exhibit_id', 'exhibits.id')
    .where('hotspots.id', id)
    .first();
};

export const getHotspotTarget = async (id) => {
  return await db('hotspots')
    .select('panoramas.*')
    .join('panoramas', 'hotspots.target_panorama_id', 'panoramas.id')
    .where('hotspots.id', id)
    .first();
};
