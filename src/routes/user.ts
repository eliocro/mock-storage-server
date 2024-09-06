import { Router } from 'express';
import jwt from 'jsonwebtoken';
import createUser from '@/utils/createUser';

const secret = process.env.JWT_SECRET || 'secret';
const mode = process.env.MODE || 'token';

const paramName = process.env.QS_PARAM_NAME || 'storageToken';
const cookieName = process.env.COOKIE_NAME || 'StorageToken';
const tokenTTL = 86400; // 24h

const router = Router();

router.get('/login', (req, res) => {
  const next = req.query.next?.toString() || req.headers.referer;

  const user = createUser();
  const token = jwt.sign(user, secret, {
    expiresIn: tokenTTL,
  });

  if (mode === 'cookie') {
    res.cookie(cookieName, token, {
      expires: new Date(Date.now() + tokenTTL * 1000),
      sameSite: 'none',
      secure: true,
    });
  }

  if (!next) return res.send(`Hello, ${user.name}!`);

  if (mode === 'cookie') res.redirect(next);

  const url = new URL(next);
  url.searchParams.set(paramName, token);
  return res.redirect(url.toString());
});

router.get('/logout', (req, res) => {
  const next = req.query.next?.toString() || req.headers.referer;
  res.clearCookie(cookieName);

  if (next) res.redirect(next);
  else res.send('Goodbye!');
});

export default router;
