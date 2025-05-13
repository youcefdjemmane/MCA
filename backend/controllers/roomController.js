import * as roomModel from '../models/roomModel.js';

// ✅ Récupérer une salle par ID
export const getRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await roomModel.getRoomById(id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: `Salle avec ID ${id} introuvable.`,
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: `Salle ${id} récupérée avec succès.`,
      data: room
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur serveur lors de la récupération de la salle.",
      error: error.message
    });
  }
};

// ✅ Récupérer les panoramas d’une salle
export const getRoomPanoramas = async (req, res) => {
  try {
    const { id } = req.params;
    const panoramas = await roomModel.getRoomPanoramas(id);

    res.status(200).json({
      success: true,
      message: `Panoramas de la salle ${id} récupérés.`,
      data: panoramas
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur serveur lors de la récupération des panoramas.",
      error: error.message
    });
  }
};

// ✅ Récupérer le panorama central
export const getRoomCentral = async (req, res) => {
  try {
    const { id } = req.params;
    const centralPanorama = await roomModel.getRoomCentralPanorama(id);

    if (!centralPanorama) {
      return res.status(404).json({
        success: false,
        message: `Aucun panorama central défini pour la salle ${id}.`,
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: `Panorama central de la salle ${id} récupéré.`,
      data: centralPanorama
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur serveur lors de la récupération du panorama central.",
      error: error.message
    });
  }
};
