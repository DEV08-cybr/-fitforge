# Deployment Instructions for FitForge

## Overview
This document outlines the steps required to deploy the FitForge application, including the web frontend and the API backend. Ensure that you have the necessary environment variables and configurations set up before proceeding.

## Prerequisites
- Node.js (version 14 or higher)
- Docker (for containerized deployment)
- PostgreSQL (for the database)
- Vercel or Netlify account (for frontend deployment)
- Supabase account (for database hosting)

## Frontend Deployment

1. **Build the Frontend**
   Navigate to the `apps/web` directory and run the following command to build the production version of the application:
   ```
   npm install
   npm run build
   ```

2. **Deploy to Vercel/Netlify**
   - For **Vercel**:
     - Install the Vercel CLI if you haven't already:
       ```
       npm install -g vercel
       ```
     - Run the following command to deploy:
       ```
       vercel
       ```
     - Follow the prompts to complete the deployment.

   - For **Netlify**:
     - Install the Netlify CLI if you haven't already:
       ```
       npm install -g netlify-cli
       ```
     - Run the following command to deploy:
       ```
       netlify deploy
       ```
     - Follow the prompts to complete the deployment.

## Backend Deployment

1. **Set Up Environment Variables**
   Create a `.env` file in the `apps/api` directory and populate it with the necessary environment variables. Refer to the `.env.example` file for the required variables.

2. **Build and Run the API**
   Navigate to the `apps/api` directory and run the following commands:
   ```
   npm install
   npm run build
   npm start
   ```

3. **Docker Deployment (Optional)**
   If you prefer to deploy using Docker, ensure you have Docker installed and run the following command from the root of the project:
   ```
   docker-compose up --build
   ```

## Database Setup

1. **Create a PostgreSQL Database**
   Set up a PostgreSQL database using Supabase or your preferred hosting service.

2. **Run Migrations**
   After setting up the database, run the migrations to create the necessary tables:
   ```
   npx prisma migrate deploy
   ```

3. **Seed the Database**
   Optionally, you can seed the database with initial data by running:
   ```
   npx prisma db seed
   ```

## Final Steps
- Ensure that both the frontend and backend are running and accessible.
- Test the application by navigating to the deployed URL and verifying that all features are functioning correctly.

## Troubleshooting
If you encounter any issues during deployment, check the following:
- Ensure all environment variables are correctly set.
- Review the logs for any errors during the build or runtime.
- Consult the documentation for Vercel, Netlify, or Docker for specific deployment issues.

## Conclusion
Following these steps will help you successfully deploy the FitForge application. For further assistance, refer to the project's README or contact the development team.