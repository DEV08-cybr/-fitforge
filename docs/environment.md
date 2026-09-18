# Environment Setup for FitForge

This document outlines the steps required to set up the environment for the FitForge application.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- PostgreSQL (for the database)
- Docker (optional, for containerized setup)

## Setting Up the Frontend

1. Navigate to the `apps/web` directory:
   ```
   cd apps/web
   ```

2. Install the necessary dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` provided:
   ```
   cp .env.example .env
   ```

4. Update the `.env` file with your environment variables, including API keys and database connection strings.

5. Start the development server:
   ```
   npm run dev
   ```

## Setting Up the Backend

1. Navigate to the `apps/api` directory:
   ```
   cd apps/api
   ```

2. Install the necessary dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` provided:
   ```
   cp .env.example .env
   ```

4. Update the `.env` file with your environment variables, including database connection strings and API keys.

5. Run the database migrations:
   ```
   npx prisma migrate deploy
   ```

6. Seed the database with initial data:
   ```
   npx prisma db seed
   ```

7. Start the backend server:
   ```
   npm run start
   ```

## Running with Docker (Optional)

If you prefer to run the application using Docker, follow these steps:

1. Ensure Docker is running on your machine.

2. Build the Docker images:
   ```
   docker-compose build
   ```

3. Start the containers:
   ```
   docker-compose up
   ```

## Accessing the Application

Once both the frontend and backend servers are running, you can access the FitForge application at:

```
http://localhost:3000
```

## Conclusion

You are now set up to start developing and using the FitForge application. For further instructions on database setup, AI integration, and deployment, please refer to the respective documentation files in the `docs` directory.