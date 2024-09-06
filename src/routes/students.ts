import { Router } from 'express';

const router = Router();

router.get('/me', (req, res) => {
  const { id, name, email } = req.user || {};
  res.send({ id, name, email });
});

router.get('/data', (_, res) => {
  res.send('Data');
});

router.post('/data', (_, res) => {
  res.send('Data');
});

export default router;
