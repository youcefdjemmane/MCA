import {
  createVisit,
  listAdminVisits,
  getVisit,
  cancelVisit,
  confirmVisit,
  deleteVisit
} from '../models/visitModel.js';

export const createVisitController = async (req, res) => {
  try {
    const response = await createVisit(req.body);
    res.status(201).json({
      message: "Visite créée avec succès.",
      data: response
    });
  } catch (err) {
    console.error('Erreur lors de la création de la visite:', err.message);
    res.status(500).json({ error: 'Une erreur est survenue lors de la création de la visite.' });
  }
};

export const listAdminVisitsController = async (req, res) => {
  try {
    const response = await listAdminVisits();
    res.status(200).json({
      message: "Liste des visites administrateur récupérée avec succès.",
      data: response
    });
  } catch (err) {
    console.error('Erreur lors de la récupération des visites admin:', err.message);
    res.status(500).json({ error: 'Impossible de récupérer les visites administrateur.' });
  }
};

export const getVisitController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getVisit(id);
    res.status(200).json({
      message: "Détails de la visite récupérés avec succès.",
      data: response
    });
  } catch (err) {
    console.error('Erreur lors de la récupération de la visite:', err.message);
    res.status(500).json({ error: 'Impossible de récupérer la visite.' });
  }
};

export const cancelVisitController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await cancelVisit(id);
    res.status(200).json({
      message: "Visite annulée avec succès.",
      data: response.data
    });
  } catch (err) {
    console.error('Erreur lors de l’annulation de la visite:', err.message);
    res.status(500).json({ error: 'Impossible d’annuler la visite.' });
  }
};

export const confirmVisitController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await confirmVisit(id);
    res.status(200).json({
      message: "Visite confirmée avec succès.",
      data: response.data
    });
  } catch (err) {
    console.error('Erreur lors de la confirmation de la visite:', err.message);
    res.status(500).json({ error: 'Impossible de confirmer la visite.' });
  }
};

export const deleteVisitController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteVisit(id);
    res.status(200).json({
      message: "Visite supprimée avec succès.",
      data: response.data
    });
  } catch (err) {
    console.error('Erreur lors de la suppression de la visite:', err.message);
    res.status(500).json({ error: 'Impossible de supprimer la visite.' });
  }
};
