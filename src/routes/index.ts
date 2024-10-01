import { Router } from 'express';

import auth from '@/middleware/auth';
import login from './login';
import users from './users';

const router = Router();

router.use(login);
router.use('/users', auth, users);

router.get('/', (_, res) => {
  res.send('Storage API Mock Server');
});

export default router;
