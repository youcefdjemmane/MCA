
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

router.post('/add', addEvent);
router.delete('/delete/:id', deleteEvent);
router.put('/edit', editEvent);
router.get('/show', showEvents);
router.get('/show/:id', showEvent);
router.post('/register/:id', registerEvent);

export default router;
