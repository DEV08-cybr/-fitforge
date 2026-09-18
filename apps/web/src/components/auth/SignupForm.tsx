import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const SignupForm: React.FC = () => {
    const { signup } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await signup(email, password);
            // Redirect or show success message
        } catch (err) {
            setError('Failed to create an account. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Sign Up</h2>
            {error && <p className="text-red-500">{error}</p>}
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Button type="submit" disabled={loading}>
                {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>
        </form>
    );
};

export default SignupForm;