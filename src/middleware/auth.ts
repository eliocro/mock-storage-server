import { RequestHandler } from 'express';
import { verify } from '@/utils/jwt';

const mode = process.env.MODE || 'token';
const cookieName = process.env.COOKIE_NAME || 'StorageToken';

const auth: RequestHandler = (req, res, next) => {
  const token =
    mode === 'cookie'
      ? req.cookies[cookieName]
      : req.headers.authorization?.split(' ')[1];

  if (!token) return res.sendStatus(401);

  try {
    const data = verify(token);
    if (typeof data === 'string') return res.sendStatus(401);

    req.user = data;
    next();
  } catch {
    res.sendStatus(401);
  }
};

export default auth;
