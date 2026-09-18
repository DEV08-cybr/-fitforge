import axios from 'axios';

const http = axios.create({
    baseURL: process.env.API_BASE_URL, // Ensure to set this in your environment variables
    timeout: 10000, // Set a timeout for requests
});

// Interceptors for request and response
http.interceptors.request.use(
    (config) => {
        // You can add authorization headers or other configurations here
        const token = localStorage.getItem('token'); // Example for token retrieval
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => {
        return response.data; // Return only the data from the response
    },
    (error) => {
        // Handle errors globally
        console.error('HTTP error:', error);
        return Promise.reject(error);
    }
);

export default http;