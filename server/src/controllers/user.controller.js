import User from '../models/user.model.js';
import { AppError } from '../middlewares/error.middleware.js';

/**
 * @desc    Get user profile
 * @route   GET /api/user/profile
 * @access  Private
 */
export const getUserProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      user: req.user
    }
  });
};

/**
 * @desc    Update user profile
 * @route   PUT /api/user/profile
 * @access  Private
 */
export const updateUserProfile = async (req, res, next) => {
  try {
    const { username, email } = req.body;

    // Check if email is already taken
    if (email && email !== req.user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        throw new AppError('Email already taken', 400);
      }
    }

    // Check if username is already taken
    if (username && username !== req.user.username) {
      const usernameExists = await User.findOne({ username });
      if (usernameExists) {
        throw new AppError('Username already taken', 400);
      }
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { 
        username: username || req.user.username,
        email: email || req.user.email
      },
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      data: {
        user: updatedUser
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update password
 * @route   PUT /api/user/password
 * @access  Private
 */
export const updatePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Get user with password
    const user = await User.findById(req.user._id).select('+password');

    // Check current password
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      throw new AppError('Current password is incorrect', 401);
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Password updated successfully'
    });
  } catch (error) {
    next(error);
  }
};