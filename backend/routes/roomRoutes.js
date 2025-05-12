
import express from 'express';
import { getRoom, getRoomPanoramas, getRoomCentral } from '../controllers/roomController.js';

const router = express.Router();

// Route pour récupérer une salle spécifique par ID
router.get('/rooms/:id', getRoom);

// Route pour récupérer les panoramas d'une salle
router.get('/rooms/:id/panoramas', getRoomPanoramas);

// Route pour récupérer l'information centrale d'une salle
router.get('/rooms/:id/central', getRoomCentral);

export default router;
