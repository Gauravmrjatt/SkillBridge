import 'dotenv/config';
import app from './src/app.js';
import { connectDB } from './src/config/database.js';

// Connect to MongoDB
connectDB();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  // Close server & exit process
  process.exit(1);
});