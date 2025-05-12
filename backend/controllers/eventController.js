import {
  addEvent as goAddEvent,
  deleteEvent as goDeleteEvent,
  editEvent as goEditEvent,
  showEvents as goShowEvents,
  showEvent as goShowEvent,
  registerEvent as goRegisterEvent
} from '../services/goApiService.js';

export const addEvent = async (req, res) => {
  try {
    const response = await goAddEvent(req.body);
    res.status(201).json(response.data);
  } catch (err) {
    console.error('Erreur addEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de l’ajout de l’événement.' });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goDeleteEvent(id);
    res.json(response.data);
  } catch (err) {
    console.error('Erreur deleteEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de la suppression de l’événement.' });
  }
};

export const editEvent = async (req, res) => {
  try {
    const response = await goEditEvent(req.body);
    res.json(response.data);
  } catch (err) {
    console.error('Erreur editEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de la modification de l’événement.' });
  }
};

export const showEvents = async (req, res) => {
  try {
    const response = await goShowEvents();
    res.json(response.data);
  } catch (err) {
    console.error('Erreur showEvents:', err.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des événements.' });
  }
};

export const showEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goShowEvent(id);
    res.json(response.data);
  } catch (err) {
    console.error('Erreur showEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de la récupération de l’événement.' });
  }
};

export const registerEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Nom et email requis pour l’inscription.' });
    }

    const response = await goRegisterEvent(id, name, email);
    res.json(response.data);
  } catch (err) {
    console.error('Erreur registerEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de l’inscription à l’événement.' });
  }
};
