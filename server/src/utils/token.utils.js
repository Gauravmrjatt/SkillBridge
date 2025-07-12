import jwt from 'jsonwebtoken';

/**
 * Generate JWT token for user
 * @param {Object} user - User object containing id and role
 * @returns {String} JWT token
 */
export const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id,
      role: user.role 
    },
    process.env.JWT_SECRET,
    { 
      expiresIn: process.env.JWT_EXPIRES_IN 
    }
  );
};

/**
 * Verify JWT token
 * @param {String} token - JWT token to verify
 * @returns {Object} Decoded token payload
 */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

/**
 * Extract token from request headers
 * @param {Object} req - Express request object
 * @returns {String|null} JWT token or null if not found
 */
export const getTokenFromHeaders = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};