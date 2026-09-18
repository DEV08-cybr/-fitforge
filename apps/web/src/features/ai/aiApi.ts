import axios from 'axios';

const AI_API_URL = '/api/ai'; // Adjust the API endpoint as necessary

export const fetchAIResponse = async (prompt: string, apiKey: string) => {
    try {
        const response = await axios.post(AI_API_URL, {
            prompt,
            apiKey,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching AI response:', error);
        throw error;
    }
};