import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const ResetPasswordForm: React.FC = () => {
    const { resetPassword } = useAuth();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await resetPassword(email);
            setMessage('Check your email for the reset link.');
        } catch (error) {
            setMessage('Failed to reset password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold">Reset Password</h2>
            {message && <p className="text-red-500">{message}</p>}
            <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
        </form>
    );
};

export default ResetPasswordForm;