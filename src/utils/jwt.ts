import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';
const tokenTTL = 86400; // 24h

export function sign(data: string | object | Buffer) {
  return jwt.sign(data, secret, { expiresIn: tokenTTL });
}

export function verify(token: string) {
  return jwt.verify(token, secret);
}
