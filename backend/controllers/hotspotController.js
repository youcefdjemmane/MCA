
import * as goApiService from '../services/goApiService.js';

// Récupérer un hotspot spécifique par ID
export const getHotspot = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getHotspot(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du hotspot.' });
  }
};

// Récupérer l'exposition d'un hotspot
export const getHotspotExhibit = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getHotspotExhibit(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l’exposition du hotspot.' });
  }
};

// Récupérer la cible d'un hotspot
export const getHotspotTarget = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getHotspotTarget(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la cible du hotspot.' });
  }
};
