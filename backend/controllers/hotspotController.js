import {
  getHotspot,
  getHotspotExhibit,
  getHotspotTarget
} from '../models/hotspotModels.js';

// Récupérer un hotspot spécifique par ID
export const getHotspotController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getHotspot(id);
    res.status(200).json({
      message: 'Hotspot récupéré avec succès.',
      data: response
    });
  } catch (err) {
    console.error('Erreur lors de la récupération du hotspot :', err.message);
    res.status(500).json({ error: 'Erreur lors de la récupération du hotspot.' });
  }
};

// Récupérer l'exposition d'un hotspot
export const getHotspotExhibitController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getHotspotExhibit(id);
    res.status(200).json({
      message: 'Exposition du hotspot récupérée avec succès.',
      data: response
    });
  } catch (err) {
    console.error('Erreur lors de la récupération de l’exposition du hotspot :', err.message);
    res.status(500).json({ error: 'Erreur lors de la récupération de l’exposition du hotspot.' });
  }
};

// Récupérer la cible d'un hotspot
export const getHotspotTargetController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getHotspotTarget(id);
    res.status(200).json({
      message: 'Cible du hotspot récupérée avec succès.',
      data: response
    });
  } catch (err) {
    console.error('Erreur lors de la récupération de la cible du hotspot :', err.message);
    res.status(500).json({ error: 'Erreur lors de la récupération de la cible du hotspot.' });
  }
};
