import { Router } from 'express';

const router = Router();

router.get('/me', (_, res) => {
  res.status(401).send({ error: 401, message: 'Unauthorized' });
});

router.get('/data', (_, res) => {
  res.send('Data');
});

router.post('/data', (_, res) => {
  res.send('Data');
});

export default router;
