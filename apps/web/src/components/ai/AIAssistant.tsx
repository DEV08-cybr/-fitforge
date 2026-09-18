import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatSuggestions from './ChatSuggestions';

const quickSuggestions = [
    'Give me a home workout plan',
    'What should I do for cramps?',
    'How can I recover from shoulder pain?',
    'Best gym routine for strength',
];

const AIAssistant: React.FC = () => {
    const [messages, setMessages] = useState<{ message: string; isUser: boolean }[]>([
        { message: 'Hi! I can help with home workouts, gym plans, cramps, and common gym injuries.', isUser: false },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async (promptText?: string) => {
        const trimmed = (promptText ?? input).trim();
        if (!trimmed || loading) return;

        setMessages((prev) => [...prev, { message: trimmed, isUser: true }]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5001/api/ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: trimmed, prompt: trimmed }),
            });

            const data = await response.json();
            const answer = data?.answer || data?.message || 'I can help with that.';
            setMessages((prev) => [...prev, { message: answer, isUser: false }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { message: 'The AI assistant is offline right now. Try asking about home workouts, gym training, cramps, or shoulder/knee pain.', isUser: false },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'grid', gap: '14px' }}>
            <div style={{ display: 'grid', gap: '8px', maxHeight: '260px', overflowY: 'auto', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '14px', padding: '12px' }}>
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
                ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                    }}
                    placeholder="Ask FitForge AI..."
                    style={{ flex: 1, minWidth: '220px', borderRadius: '10px', border: '1px solid #475569', padding: '12px 14px', background: '#0f172a', color: '#f8fafc' }}
                />
                <button
                    onClick={() => handleSendMessage()}
                    disabled={loading}
                    style={{ borderRadius: '10px', border: 'none', background: '#38bdf8', color: '#082f49', fontWeight: 700, padding: '12px 18px', cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                    {loading ? 'Thinking...' : 'Send'}
                </button>
            </div>

            <ChatSuggestions suggestions={quickSuggestions} onSelect={handleSendMessage} />
        </div>
    );
};

export default AIAssistant;