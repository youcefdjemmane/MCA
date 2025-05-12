// routes/hotspotRoutes.js
import express from 'express';
import { getHotspot, getHotspotExhibit, getHotspotTarget } from '../controllers/hotspotController.js';

const router = express.Router();

// Route pour récupérer un hotspot spécifique par ID
router.get('/hotspots/:id', getHotspot);

// Route pour récupérer l'exposition d'un hotspot
router.get('/hotspots/:id/exhibit', getHotspotExhibit);

// Route pour récupérer la cible d'un hotspot
router.get('/hotspots/:id/target', getHotspotTarget);

export default router;
