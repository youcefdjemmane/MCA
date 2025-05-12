
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.GO_API_URL;

// Auth
export const login = (email, pass) =>
  axios.post(`${BASE_URL}/users/login`, { email, pass });

export const signup = data =>
  axios.post(`${BASE_URL}/users/signup`, data);


// Events
export const addEvent = data =>
  axios.post(`${BASE_URL}/event/add`, data);

export const deleteEvent = id =>
  axios.delete(`${BASE_URL}/event/delete`, { params: { id } });

export const editEvent = data =>
  axios.put(`${BASE_URL}/event/edit`, data);

export const showEvents = () =>
  axios.get(`${BASE_URL}/event/show`);

export const showEvent = id =>
  axios.get(`${BASE_URL}/event/show/${id}`);

export const registerEvent = (id, name, email) =>
  axios.post(`${BASE_URL}/event/register/${id}:${name}:${email}`);



// Navigation
export const listFloors = () =>
  axios.get(`${BASE_URL}/floors`);

export const getFloor = id =>
  axios.get(`${BASE_URL}/floors/${id}`);

export const getFloorRooms = id =>
  axios.get(`${BASE_URL}/floors/${id}/rooms`);

export const getRoom = id =>
  axios.get(`${BASE_URL}/rooms/${id}`);

export const getRoomPanoramas = id =>
  axios.get(`${BASE_URL}/rooms/${id}/panoramas`);

export const getRoomCentral = id =>
  axios.get(`${BASE_URL}/rooms/${id}/central`);




// Panoramas
export const getPanorama = id =>
  axios.get(`${BASE_URL}/panoramas/${id}`);

export const getPanoramaImage = id =>
  axios.get(`${BASE_URL}/panoramas/${id}/image`);

export const getPanoramaHotspots = id =>
  axios.get(`${BASE_URL}/panoramas/${id}/hotspots`);





// Hotspots
export const getHotspot = id =>
  axios.get(`${BASE_URL}/hotspots/${id}`);

export const getHotspotExhibit = id =>
  axios.get(`${BASE_URL}/hotspots/${id}/exhibit`);

export const getHotspotTarget = id =>
  axios.get(`${BASE_URL}/hotspots/${id}/target`);




// Visits (réservations)
export const createVisit = data =>
  axios.post(`${BASE_URL}/visits`, data);

export const listAdminVisits = () =>
  axios.get(`${BASE_URL}/visits/admin`);

export const getVisit = id =>
  axios.get(`${BASE_URL}/visits/${id}`);

export const cancelVisit = id =>
  axios.post(`${BASE_URL}/visits/${id}/cancel`);

export const confirmVisit = id =>
  axios.post(`${BASE_URL}/visits/admin/${id}/confirm`);

export const deleteVisit = id =>
  axios.delete(`${BASE_URL}/visits/admin/${id}/delete`);
