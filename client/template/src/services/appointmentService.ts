import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

// Create axios instance
const api = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Appointment Service
export const appointmentService = {
    // Get dropdown data
    getDoctors: async () => {
        const response = await api.get('/appointments/doctors');
        return response.data;
    },

    getDepartments: async () => {
        const response = await api.get('/appointments/departments');
        return response.data;
    },

    // CRUD operations
    createAppointment: async (appointmentData: any) => {
        const response = await api.post('/appointments', appointmentData);
        return response.data;
    },

    getAppointments: async (params?: any) => {
        const response = await api.get('/appointments', { params });
        return response.data;
    },

    getAppointmentById: async (id: string) => {
        const response = await api.get(`/appointments/${id}`);
        return response.data;
    },

    updateAppointment: async (id: string, appointmentData: any) => {
        const response = await api.put(`/appointments/${id}`, appointmentData);
        return response.data;
    },

    deleteAppointment: async (id: string) => {
        const response = await api.delete(`/appointments/${id}`);
        return response.data;
    },
};

export default appointmentService;