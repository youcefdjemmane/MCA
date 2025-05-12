// routes/floorRoutes.jsimport express from 'express';
import express from 'express';
import { listFloors, getFloor, getFloorRooms } from '../controllers/floorController.js';

const router = express.Router();

// Route pour récupérer tous les étages
router.get('/floors', listFloors);

// Route pour récupérer un étage spécifique par ID
router.get('/floors/:id', getFloor);

// Route pour récupérer les salles d'un étage par ID
router.get('/floors/:id/rooms', getFloorRooms);

export default router;
