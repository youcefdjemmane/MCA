
import * as goApiService from '../services/goApiService.js';

// Récupérer une salle spécifique par ID
export const getRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getRoom(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la salle.' });
  }
};

// Récupérer les panoramas d'une salle par ID
export const getRoomPanoramas = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getRoomPanoramas(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des panoramas de la salle.' });
  }
};

// Récupérer l'information centrale d'une salle par ID
export const getRoomCentral = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getRoomCentral(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des informations centrales de la salle.' });
  }
};
