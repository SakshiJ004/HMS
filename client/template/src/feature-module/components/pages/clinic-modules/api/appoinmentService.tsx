import axios, { AxiosError } from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api` || 'http://localhost:5000/api';

// Types
interface Doctor {
    _id: string;
    fullName: string;
    email: string;
}

interface Patient {
    _id: string;
    fullName: string;
    email: string;
}

interface Appointment {
    _id: string;
    appointmentId: string;
    patient: Doctor;
    doctor: Patient;
    department: string;
    appointmentType: string;
    appointmentDate: string;
    appointmentTime: string;
    reason: string;
    status: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data: T;
    count?: number;
}

interface AppointmentFormData {
    patientId: string;
    doctorId: string;
    department: string;
    appointmentType: string;
    appointmentDate: string;
    appointmentTime: string;
    reason: string;
    status: string;
    notes?: string;
}

// Get token from localStorage
const getAuthToken = (): string | null => {
    const user = localStorage.getItem('user');
    if (user) {
        try {
            const userData = JSON.parse(user);
            return userData?.token || null;
        } catch {
            return null;
        }
    }
    return null;
};

// Create axios instance
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to all requests
apiClient.interceptors.request.use(
    (config) => {
        const token = getAuthToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for better error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

/**
 * Appointment API Services
 */
export const appointmentService = {
    /**
     * Get doctors list for dropdown
     */
    getDoctors: async (): Promise<ApiResponse<Doctor[]>> => {
        try {
            const response = await apiClient.get<ApiResponse<Doctor[]>>('/appointments/doctors/list');
            return response.data;
        } catch (error) {
            console.error('Error fetching doctors:', error);
            throw error;
        }
    },

    /**
     * Get patients list for dropdown
     */
    getPatients: async (): Promise<ApiResponse<Patient[]>> => {
        try {
            const response = await apiClient.get<ApiResponse<Patient[]>>('/appointments/patients/list');
            return response.data;
        } catch (error) {
            console.error('Error fetching patients:', error);
            throw error;
        }
    },

    /**
     * Get departments list
     */
    getDepartments: async (): Promise<ApiResponse<string[]>> => {
        try {
            const response = await apiClient.get<ApiResponse<string[]>>('/appointments/departments/list');
            return response.data;
        } catch (error) {
            console.error('Error fetching departments:', error);
            throw error;
        }
    },

    /**
     * Create new appointment
     */
    createAppointment: async (appointmentData: AppointmentFormData): Promise<ApiResponse<Appointment>> => {
        try {
            const response = await apiClient.post<ApiResponse<Appointment>>('/appointments', appointmentData);
            return response.data;
        } catch (error) {
            console.error('Error creating appointment:', error);
            throw error;
        }
    },

    /**
     * Get all appointments with optional filters
     */
    getAllAppointments: async (filters?: Record<string, any>): Promise<ApiResponse<Appointment[]>> => {
        try {
            const response = await apiClient.get<ApiResponse<Appointment[]>>('/appointments', {
                params: filters
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching appointments:', error);
            throw error;
        }
    },

    /**
     * Get single appointment by ID
     */
    getAppointmentById: async (id: string): Promise<ApiResponse<Appointment>> => {
        try {
            const response = await apiClient.get<ApiResponse<Appointment>>(`/appointments/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching appointment:', error);
            throw error;
        }
    },
};

// Export types for use in components
export type {
    Doctor,
    Patient,
    Appointment,
    ApiResponse,
    AppointmentFormData,
};