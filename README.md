# FitForge - AI-Powered Fitness Platform

Welcome to FitForge, your all-in-one fitness platform designed to help you train smarter, move better, and get stronger. This README provides an overview of the project, its features, and how to get started.

## Table of Contents

- [Core Concept](#core-concept)
- [Full-Stack Architecture](#full-stack-architecture)
- [Features](#features)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Core Concept

FitForge combines various fitness functionalities, including:

- Home and gym workouts
- Exercise library
- Personalized workout plans
- Progress tracking
- AI fitness assistant

The platform is designed for users of all fitness levels, from beginners to experienced gym-goers.

## Full-Stack Architecture

FitForge is built using a modern tech stack:

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: PostgreSQL (via Supabase)

## Features

- User authentication (sign up, login, password reset)
- Multi-device synchronization
- AI fitness assistant for personalized workout planning
- Comprehensive exercise library with detailed instructions
- Progress tracking and workout history
- Weekly workout planner
- Recovery and mobility resources

## Getting Started

To get started with FitForge, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/fitforge.git
   cd fitforge
   ```

2. Install dependencies for both the frontend and backend:
   ```
   cd apps/web
   npm install
   cd ../api
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both `apps/web` and `apps/api` and fill in the required values.

4. Run the development servers:
   ```
   cd apps/web
   npm run dev
   cd ../api
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Deployment

For deployment, you can use services like Vercel for the frontend and Supabase for the backend. Ensure to follow the deployment instructions provided in the respective directories.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.