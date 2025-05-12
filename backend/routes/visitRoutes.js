import express from 'express';
import {
  createVisitController,
  listAdminVisitsController,
  getVisitController,
  cancelVisitController,
  confirmVisitController,
  deleteVisitController
} from '../controllers/visitController.js';

const router = express.Router();

router.post('', createVisitController);
router.get('/admin', listAdminVisitsController);
router.get('/:id', getVisitController);
router.post('/:id/cancel', cancelVisitController);
router.post('/admin/:id/confirm', confirmVisitController);
router.delete('/admin/:id/delete', deleteVisitController);

export default router;
