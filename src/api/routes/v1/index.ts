import { Router } from 'express';
import tracking from './tracking';

const router = Router();

router.use('/tracking', tracking);

export default router;