# FitForge Web Application

FitForge is a production-ready, full-stack AI-powered fitness platform designed to help users train smarter, move better, and get stronger. This README provides an overview of the web application, its features, and how to set it up.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure sign-up, login, and password reset functionalities.
- **Workout Generation**: Personalized workout plans based on user preferences and goals.
- **Exercise Library**: Comprehensive database of exercises with detailed instructions and variations.
- **AI Fitness Assistant**: Interactive AI assistant for workout planning and fitness guidance.
- **Progress Tracking**: Monitor workout history and progress metrics over time.
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices.

## Technologies

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (via Supabase)
- **Deployment**: Vercel / Netlify for frontend, Supabase for backend

## Getting Started

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/fitforge.git
   cd fitforge/apps/web
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up environment variables**:
   Copy the `.env.example` file to `.env` and fill in the required values.

4. **Run the application**:
   ```
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Deployment

For deployment instructions, refer to the [deployment documentation](../../docs/deployment.md).

## Contributing

Contributions are welcome! Please read the [contributing guidelines](../../CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.