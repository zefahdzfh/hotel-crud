import express from 'express';
import RoomController from '../controllers/roomController.js';

const router = express.Router();

router.get('/', RoomController.index);
router.get('/create', RoomController.create);
router.post('/store', RoomController.store);

export default router;

