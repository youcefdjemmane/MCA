
import * as goApiService from '../services/goApiService.js';

// Récupérer un panorama spécifique par ID
export const getPanorama = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getPanorama(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du panorama.' });
  }
};

// Récupérer l'image d'un panorama par ID
export const getPanoramaImage = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getPanoramaImage(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l’image du panorama.' });
  }
};

// Récupérer les hotspots associés à un panorama par ID
export const getPanoramaHotspots = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await goApiService.getPanoramaHotspots(id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des hotspots du panorama.' });
  }
};
