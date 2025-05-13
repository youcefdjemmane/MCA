// routes/hotspotRoutes.js
import express from 'express';
import { getHotspotController, getHotspotExhibitController, getHotspotTargetController } from '../controllers/hotspotController.js';

const router = express.Router();

// Route pour récupérer un hotspot spécifique par ID
router.get('/hotspots/:id', getHotspotController);

// Route pour récupérer l'exposition d'un hotspot
router.get('/hotspots/:id/exhibit', getHotspotExhibitController);

// Route pour récupérer la cible d'un hotspot
router.get('/hotspots/:id/target', getHotspotTargetController);

export default router;
