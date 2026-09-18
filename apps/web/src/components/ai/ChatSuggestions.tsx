import React from 'react';

const ChatSuggestions: React.FC<{ suggestions: string[]; onSelect: (suggestion: string) => void }> = ({ suggestions, onSelect }) => {
    return (
        <div className="chat-suggestions">
            {suggestions.map((suggestion, index) => (
                <button
                    key={index}
                    className="suggestion-button"
                    onClick={() => onSelect(suggestion)}
                >
                    {suggestion}
                </button>
            ))}
        </div>
    );
};

export default ChatSuggestions;