import { generateToken } from '../utils/tokens';

type UserRecord = {
    id: string;
    email: string;
    password: string;
    name?: string;
};

const users: UserRecord[] = [];

const sanitizeUser = ({ id, email, name }: UserRecord) => ({
    id,
    email,
    name: name || 'User',
});

export const AuthService = {
    signup: async (userData: any) => {
        const email = String(userData?.email || '').trim().toLowerCase();
        const password = String(userData?.password || '');

        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        if (users.some((user) => user.email === email)) {
            throw new Error('User already exists');
        }

        const user: UserRecord = {
            id: `user_${Date.now()}`,
            email,
            password,
            name: userData?.name || 'User',
        };

        users.push(user);

        return {
            token: generateToken(user.id),
            user: sanitizeUser(user),
        };
    },
    login: async (userData: any) => {
        const email = String(userData?.email || '').trim().toLowerCase();
        const password = String(userData?.password || '');
        const user = users.find((record) => record.email === email && record.password === password);

        if (!user) {
            throw new Error('Invalid email or password');
        }

        return {
            token: generateToken(user.id),
            user: sanitizeUser(user),
        };
    },
    logout: async (user: any) => {
        if (!user) {
            throw new Error('User not found');
        }
        return true;
    },
    resetPassword: async (userData: any) => {
        const email = String(userData?.email || '').trim().toLowerCase();
        const password = String(userData?.newPassword || userData?.password || '');
        const user = users.find((record) => record.email === email);

        if (!user || !password) {
            throw new Error('User not found or password missing');
        }

        user.password = password;
        return user;
    },
};

export const registerUser = async (userData: any) => AuthService.signup(userData);
export const loginUser = async (email: string, password: string) => AuthService.login({ email, password });
export const resetPassword = async (email: string, newPassword: string) => AuthService.resetPassword({ email, newPassword });
export const getUserProfile = async (userId: string) => users.find((user) => user.id === userId);