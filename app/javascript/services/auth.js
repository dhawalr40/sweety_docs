import api from './api';

export const login = async (credentials) => {
    try {
        const response = await api.post('/login', credentials);
        localStorage.setItem('authToken', response.data.token);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = () => {
    localStorage.removeItem('authToken');
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
};