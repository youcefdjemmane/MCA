import {
  getPanoramaById,
  getPanoramaImageById,
  getPanoramaHotspotsById
} from '../models/panoramaModel.js';

// 📍 Récupérer un panorama spécifique par ID
export const getPanorama = async (req, res) => {
  try {
    const { id } = req.params;
    const panorama = await getPanoramaById(id);

    if (!panorama) {
      return res.status(404).json({
        success: false,
        message: `Aucun panorama trouvé avec l'ID ${id}.`,
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: `Panorama avec l'ID ${id} récupéré avec succès.`,
      data: panorama
    });
  } catch (error) {
    console.error('Erreur getPanorama:', error.message);
    res.status(500).json({
      success: false,
      message: "Erreur interne lors de la récupération du panorama.",
      error: error.message
    });
  }
};

// 🖼️ Récupérer l'image d'un panorama par ID
export const getPanoramaImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await getPanoramaImageById(id);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: `Aucune image trouvée pour le panorama avec l'ID ${id}.`,
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: `Image du panorama ${id} récupérée avec succès.`,
      data: image
    });
  } catch (error) {
    console.error('Erreur getPanoramaImage:', error.message);
    res.status(500).json({
      success: false,
      message: "Erreur interne lors de la récupération de l’image du panorama.",
      error: error.message
    });
  }
};

// 🔥 Récupérer les hotspots associés à un panorama
export const getPanoramaHotspots = async (req, res) => {
  try {
    const { id } = req.params;
    const hotspots = await getPanoramaHotspotsById(id);

    if (!hotspots || hotspots.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Aucun hotspot trouvé pour le panorama avec l'ID ${id}.`,
        data: []
      });
    }

    res.status(200).json({
      success: true,
      message: `Hotspots pour le panorama ${id} récupérés avec succès.`,
      data: hotspots
    });
  } catch (error) {
    console.error('Erreur getPanoramaHotspots:', error.message);
    res.status(500).json({
      success: false,
      message: "Erreur interne lors de la récupération des hotspots du panorama.",
      error: error.message
    });
  }
};
