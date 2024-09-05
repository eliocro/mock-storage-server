import { Router } from 'express';

import user from './user';
import students from './students';

const router = Router();

router.use('/user', user);
router.use('/students', students);

router.get('/', (_, res) => {
  res.send('Storage API Demo');
});

export default router;
