# API Documentation

## Overview

FitForge API is a RESTful API designed to support the FitForge fitness platform. It provides endpoints for user authentication, exercise management, workout planning, and AI assistance.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- PostgreSQL database

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fitforge/apps/api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env` and fill in the required values.

4. Run database migrations:
   ```
   npx prisma migrate dev
   ```

5. Seed the database (optional):
   ```
   npx prisma db seed
   ```

6. Start the server:
   ```
   npm run start
   ```

### API Endpoints

- **Authentication**
  - `POST /api/auth/signup`: Create a new user account.
  - `POST /api/auth/login`: Authenticate a user and return a token.
  - `POST /api/auth/logout`: Log out the user.

- **Exercises**
  - `GET /api/exercises`: Retrieve a list of exercises.
  - `GET /api/exercises/:id`: Retrieve details of a specific exercise.

- **Workouts**
  - `GET /api/workouts`: Retrieve a list of workouts.
  - `POST /api/workouts`: Create a new workout.

- **Dashboard**
  - `GET /api/dashboard`: Retrieve user dashboard data.

- **AI Assistance**
  - `POST /api/ai`: Interact with the AI assistant for workout planning and guidance.

## Contributing

Contributions are welcome! Please follow the standard Git workflow for submitting pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.