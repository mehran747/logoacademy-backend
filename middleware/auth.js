// middleware/auth.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) return res.status(401).json({ message: 'دسترسی ممنوع' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    req.user = { 
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
      role: decoded.role || 'user'
     };

    next();
  } catch (error) {
    console.error('خطا در توکن:', error.message);
    res.status(401).json({ message: 'توکن نامعتبر' });
  }
};