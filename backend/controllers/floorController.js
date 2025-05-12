
import * as goApiService from '../services/goApiService.js';

// Récupérer tous les étages
export const listFloors = async (req, res) => {
  try {
    const response = await goApiService.listFloors();
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des étages.' });
  }
};

// Récupérer un étage spécifique par ID
export const getFloor = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getFloor(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l’étage.' });
  }
};

// Récupérer les salles d'un étage par ID
export const getFloorRooms = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getFloorRooms(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des salles.' });
  }
};
