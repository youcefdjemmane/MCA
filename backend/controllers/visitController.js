import {
  createVisit,
  listAdminVisits,
  getVisit,
  cancelVisit,
  confirmVisit,
  deleteVisit
} from '../services/goApiService.js';

export const createVisitController = async (req, res) => {
  try {
    const response = await createVisit(req.body);
    res.status(201).json(response.data);
  } catch (err) {
    console.error('Erreur lors de la création de la visite:', err.message);
    res.status(500).json({ error: 'Erreur lors de la création de la visite.' });
  }
};

export const listAdminVisitsController = async (req, res) => {
  try {
    const response = await listAdminVisits();
    res.json(response.data);
  } catch (err) {
    console.error('Erreur lors de la récupération des visites admin:', err.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des visites admin.' });
  }
};

export const getVisitController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getVisit(id);
    res.json(response.data);
  } catch (err) {
    console.error('Erreur lors de la récupération de la visite:', err.message);
    res.status(500).json({ error: 'Erreur lors de la récupération de la visite.' });
  }
};

export const cancelVisitController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await cancelVisit(id);
    res.json(response.data);
  } catch (err) {
    console.error('Erreur lors de l’annulation de la visite:', err.message);
    res.status(500).json({ error: 'Erreur lors de l’annulation de la visite.' });
  }
};

export const confirmVisitController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await confirmVisit(id);
    res.json(response.data);
  } catch (err) {
    console.error('Erreur lors de la confirmation de la visite:', err.message);
    res.status(500).json({ error: 'Erreur lors de la confirmation de la visite.' });
  }
};

export const deleteVisitController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteVisit(id);
    res.json(response.data);
  } catch (err) {
    console.error('Erreur lors de la suppression de la visite:', err.message);
    res.status(500).json({ error: 'Erreur lors de la suppression de la visite.' });
  }
};
