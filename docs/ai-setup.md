# AI Integration Setup Guide

## Overview
This document provides instructions for setting up the AI integration for the FitForge platform. Follow the steps below to configure the AI assistant and ensure it functions correctly within the application.

## Prerequisites
- Ensure you have access to the AI service provider and have obtained your API key.
- Familiarity with environment variables and server-side configurations.

## Step 1: Obtain Your API Key
1. Sign up for the AI service provider (e.g., OpenAI, etc.).
2. Navigate to the API section of the provider's dashboard.
3. Generate a new API key and copy it for later use.

## Step 2: Configure Environment Variables
1. In the `apps/api` directory, locate the `.env.example` file.
2. Create a new file named `.env` based on the example.
3. Add the following line to your `.env` file, replacing `YOUR_API_KEY_HERE` with your actual API key:
   ```
   AI_API_KEY=YOUR_API_KEY_HERE
   ```

## Step 3: Update Server Configuration
1. Open the `apps/api/src/config/env.ts` file.
2. Ensure that the environment variable for the AI API key is being loaded correctly:
   ```typescript
   export const AI_API_KEY = process.env.AI_API_KEY || '';
   ```

## Step 4: Implement AI Service
1. In the `apps/api/src/services/aiService.ts` file, implement the logic to interact with the AI API using the API key from the environment variables.
2. Ensure that all requests to the AI service are made server-side to protect the API key.

## Step 5: Test the Integration
1. Start the API server by running the appropriate command (e.g., `npm run start`).
2. Use the AI assistant feature in the FitForge application to verify that it responds correctly to user queries.

## Important Notes
- Never expose your API key in the frontend code or public repositories.
- Regularly review your API usage and monitor for any unusual activity.

## Conclusion
Following these steps will ensure that the AI integration for FitForge is set up correctly. If you encounter any issues, refer to the documentation provided by your AI service provider or consult the development team for assistance.