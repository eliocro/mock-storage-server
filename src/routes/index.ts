import { Router } from 'express';

import auth from '@/middleware/auth';
import user from './user';
import students from './students';

const router = Router();

router.use('/user', user);
router.use('/students', auth, students);

router.get('/', (_, res) => {
  res.send('Storage API Demo');
});

export default router;
