import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const api = axios.create({
    baseURL: `${API_URL}/api`,
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const getDoctorPrescriptions = async (params?: {
    search?: string;
    sortBy?: string;
    status?: string;
    startDate?: string;
    endDate?: string;
}) => {
    const queryString = params ? '?' + new URLSearchParams(
        Object.fromEntries(Object.entries(params).filter(([_, v]) => v))
    ).toString() : '';
    const response = await api.get(`/prescriptions${queryString}`);
    return response.data;
};

export const getPrescriptionById = async (id: string) => {
    const response = await api.get(`/prescriptions/${id}`);
    return response.data;
};