import { useEffect, useState } from 'react';
import { useAuthContext } from '../providers/AuthProvider';

const useAuth = () => {
    const { user, login, logout, register } = useAuthContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            try {
                // Logic to check user authentication status
                // This could involve checking a token or making an API call
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        checkUser();
    }, []);

    return {
        user,
        login,
        logout,
        register,
        loading,
        error,
    };
};

export default useAuth;