import { Router } from 'express';
import userRoutes from './UserRoutes/UserRoutes';

const router = Router();

router.use('/users', userRoutes);

export default router;