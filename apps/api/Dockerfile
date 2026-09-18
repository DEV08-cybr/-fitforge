FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY apps/api/package.json apps/api/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY apps/api/src ./src

# Copy environment variables example
COPY apps/api/.env.example .env

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]