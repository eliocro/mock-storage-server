import { Router } from 'express';

const router = Router();

const DATA: Record<string, unknown> = {};

router.get('/me', (req, res) => {
  const { id, name, email } = req.user || {};
  res.send({ id, name, email });
});

router.get('/me/storages/:storageName', (req, res) => {
  const { storageName } = req.params;
  const data = DATA[storageName];
  if (data === undefined) return res.sendStatus(404);
  res.send(data);
});

router.post('/me/storages/:storageName', (req, res) => {
  const { storageName } = req.params;
  DATA[storageName] = req.body;
  res.send('OK');
});

export default router;
