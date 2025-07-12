# SkillBridge Server

A robust Express.js server with JWT authentication, MongoDB integration, and a well-organized MVC architecture.

## Features

- 🔐 JWT-based authentication
- 📦 MongoDB database with Mongoose ODM
- 🔑 Secure password hashing with bcrypt
- ✨ ES6+ syntax
- 🎯 Input validation using express-validator
- 🚦 Error handling middleware
- 📝 Request logging with Morgan
- 🔄 Environment configuration with dotenv

## Project Structure

```
server/
├── src/
│   ├── config/           # Database and environment configuration
│   ├── controllers/      # Route controllers
│   ├── routes/           # Route definitions
│   ├── middlewares/      # Custom middlewares
│   ├── models/           # Mongoose models
│   ├── services/         # Business logic
│   ├── utils/            # Helper functions
│   └── app.js           # Express app configuration
├── .env                 # Environment variables
├── .gitignore
├── package.json
└── server.js           # Entry point
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/skillbridge
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=24h
   LOG_LEVEL=dev
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user (protected)
- `GET /api/auth/me` - Get current user (protected)

### User Routes

- `GET /api/user/profile` - Get user profile (protected)
- `PUT /api/user/profile` - Update user profile (protected)
- `PUT /api/user/password` - Update password (protected)

## Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

The API uses consistent error responses:

```json
{
  "success": false,
  "message": "Error message here"
}
```

## Validation

Input validation is implemented using express-validator. Request data is validated before processing.

## Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- MongoDB injection prevention
- CORS enabled
- Request rate limiting

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.