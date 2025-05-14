import {
  addEvent as modelAddEvent,
  deleteEvent as modelDeleteEvent,
  editEvent as modelEditEvent,
  showEvents as modelShowEvents,
  showEvent as modelShowEvent,
  registerEvent as modelRegisterEvent
} from '../models/eventModel.js';

// Ajouter un événement
export const addEvent = async (req, res) => {
  try {
    const response = await modelAddEvent(req.body);
    res.status(201).json({
      message: 'Événement ajouté avec succès.',
      data: response[0] // Retourne le premier événement ajouté
    });
  } catch (err) {
    console.error('Erreur addEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de l’ajout de l’événement.' });
  }
};

// Supprimer un événement
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await modelDeleteEvent(id);
    if (response.length === 0) {
      return res.status(404).json({ error: 'Événement non trouvé.' });
    }
    res.status(200).json({
      message: 'Événement supprimé avec succès.',
      data: response[0]
    });
  } catch (err) {
    console.error('Erreur deleteEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de la suppression de l’événement.' });
  }
};

// Modifier un événement
export const editEvent = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await modelEditEvent(id, req.body);
    if (!response) {
      return res.status(404).json({ error: 'Événement non trouvé.' });
    }
    res.status(200).json({
      message: 'Événement modifié avec succès.',
      data: response[0]
    });
  } catch (err) {
    console.error('Erreur editEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de la modification de l’événement.' });
  }
};

// Afficher tous les événements
export const showEvents = async (req, res) => {
  try {
    const events = await modelShowEvents();
    res.status(200).json({
      message: 'Liste des événements récupérée avec succès.',
      data: events
    });
  } catch (err) {
    console.error('Erreur showEvents:', err.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des événements.' });
  }
};

// Afficher un événement par ID
export const showEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await modelShowEvent(id);
    if (!event) {
      return res.status(404).json({ error: 'Événement non trouvé.' });
    }
    res.status(200).json({
      message: 'Événement récupéré avec succès.',
      data: event
    });
  } catch (err) {
    console.error('Erreur showEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de la récupération de l’événement.' });
  }
};

// S'inscrire à un événement
export const registerEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Nom et email requis pour l’inscription.' });
    }

    const response = await modelRegisterEvent(id, name, email);
    res.status(201).json({
      message: 'Inscription à l’événement réussie.',
      data: response[0]
    });
  } catch (err) {
    console.error('Erreur registerEvent:', err.message);
    res.status(500).json({ error: 'Erreur lors de l’inscription à l’événement.' });
  }
};
