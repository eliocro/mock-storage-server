import { Router } from 'express';

const router = Router();

const DATA: Record<string, unknown> = {};

router.get('/me', (req, res) => {
  const { id, name, email } = req.user || {};
  res.send({ id, name, email });
});

router.get('/me/storages/:storageName', (req, res) => {
  const { storageName } = req.params;
  res.send({
    data: DATA[storageName] ?? null,
  });
});

router.post('/me/storages/:storageName', (req, res) => {
  const { storageName } = req.params;
  DATA[storageName] = req.body;
  res.send('OK');
});

export default router;
