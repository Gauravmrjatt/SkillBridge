import express from 'express';
import { getUserProfile, updateUserProfile, updatePassword } from '../controllers/user.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { passwordUpdateValidation, validate } from '../utils/validation.utils.js';

const router = express.Router();

// Protect all routes in this router
router.use(protect);

// Profile routes
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);

// Password update route
router.put('/password', validate(passwordUpdateValidation), updatePassword);

export default router;