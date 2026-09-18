import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../features/auth/authApi';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await authApi.getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (credentials) => {
        const loggedInUser = await authApi.login(credentials);
        setUser(loggedInUser);
    };

    const logout = async () => {
        await authApi.logout();
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};