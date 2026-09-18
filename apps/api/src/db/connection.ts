export const prisma = {} as any;
export const db = {} as any;

export const connectToDatabase = async () => {
    console.log('Database connection skipped in local dev mode.');
};

export const disconnectFromDatabase = async () => undefined;