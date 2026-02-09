import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const api = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Get diagnoses by department
export const getDiagnosesByDepartment = async (department: string) => {
    const response = await api.get(`/diagnoses/department/${department}`);
    return response.data;
};

// Search diagnoses
export const searchDiagnoses = async (query: string, department?: string) => {
    const params = new URLSearchParams({ query });
    if (department) params.append('department', department);

    const response = await api.get(`/diagnoses/search?${params}`);
    return response.data;
};