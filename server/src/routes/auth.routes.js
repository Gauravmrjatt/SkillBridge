import express from 'express';
import { register, login, logout, getMe } from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { registerValidation, loginValidation, validate } from '../utils/validation.utils.js';

const router = express.Router();

// Public routes
router.post('/register', validate(registerValidation), register);
router.post('/login', validate(loginValidation), login);

// Protected routes
router.use(protect); // All routes below this line will require authentication

router.post('/logout', logout);
router.get('/me', getMe);

export default router;