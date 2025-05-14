import express from 'express';
import {
  addEvent,
  deleteEvent,
  editEvent,
  showEvents,
  showEvent,
  registerEvent
} from '../controllers/eventController.js';

const router = express.Router();

router.post('/add', addEvent); // Ajouter un événement
router.delete('/delete/:id', deleteEvent); // Supprimer un événement
router.put('/edit', editEvent); // Modifier un événement
router.get('/show', showEvents); // Afficher tous les événements
router.get('/show/:id', showEvent); // Afficher un événement spécifique
router.post('/register/:id', registerEvent); // Inscription à un événement

export default router;
