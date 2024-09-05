import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
  const next = req.query.next?.toString() || req.headers.referer;

  // create new auth token
  // add the token to next or set the secure cookie
  // redirect to the frontend

  if (next) res.redirect(next);
  else res.send('Hello!');
});

router.get('/logout', (req, res) => {
  const next = req.query.next?.toString() || req.headers.referer;

  // clear cookies
  // redirect to frontend

  if (next) res.redirect(next);
  else res.send('Goodbye!');
});

export default router;
