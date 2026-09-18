# Database Setup Documentation

## FitForge Database Setup

This document outlines the steps required to set up the database for the FitForge application.

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Install [PostgreSQL](https://www.postgresql.org/download/) or use a cloud-based PostgreSQL service.
- Ensure you have access to a terminal or command prompt.

### Step 1: Clone the Repository

Clone the FitForge repository to your local machine:

```bash
git clone <repository-url>
cd fitforge
```

### Step 2: Install Dependencies

Navigate to the API directory and install the necessary dependencies:

```bash
cd apps/api
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the `apps/api` directory based on the `.env.example` file provided:

```bash
cp .env.example .env
```

Edit the `.env` file to include your database connection details:

```
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
```

### Step 4: Run Database Migrations

Use Prisma to run the database migrations. This will create the necessary tables in your database:

```bash
npx prisma migrate dev --name init
```

### Step 5: Seed the Database

To populate the database with initial data, run the seed script:

```bash
npx prisma db seed
```

### Step 6: Verify the Setup

You can verify that the database is set up correctly by checking the tables and data in your PostgreSQL database using a database client or command line.

### Conclusion

Your FitForge database is now set up and ready for use. You can start the API server and begin developing the application.

For further assistance, refer to the [FitForge documentation](README.md) or contact the development team.