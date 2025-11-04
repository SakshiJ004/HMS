import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

// Type definitions
export interface Doctor {
    _id: string;
    fullName: string;
    email: string;
    profileImage?: string;
}

export interface Patient {
    _id: string;
    fullName: string;
    email: string;
    profileImage?: string;
}

export interface AppointmentData {
    _id?: string;
    appointmentId?: string;
    patient: string;
    doctor: string;
    department: string;
    appointmentType: string;
    appointmentDate: string;
    appointmentTime: string;
    reason: string;
    status: string;
}

export interface AppointmentResponse {
    _id: string;
    appointmentId: string;
    patient: {
        _id: string;
        fullName: string;
        email: string;
        profileImage?: string;
    };
    doctor: {
        _id: string;
        fullName: string;
        email: string;
        profileImage?: string;
    };
    department: string;
    appointmentType: string;
    appointmentDate: string;
    appointmentTime: string;
    reason: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data: T;
    count?: number;
}

// Get auth token from localStorage
const getAuthConfig = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
};

// Get all doctors
export const getDoctors = async (): Promise<ApiResponse<Doctor[]>> => {
    const response = await axios.get(
        `${API_URL}/api/appointments/doctors`,
        getAuthConfig()
    );
    return response.data;
};

// Get all patients
export const getPatients = async (): Promise<ApiResponse<Patient[]>> => {
    const response = await axios.get(
        `${API_URL}/api/appointments/patients`,
        getAuthConfig()
    );
    return response.data;
};

// Create appointment
export const createAppointment = async (
    appointmentData: AppointmentData
): Promise<ApiResponse<AppointmentResponse>> => {
    const response = await axios.post(
        `${API_URL}/api/appointments`,
        appointmentData,
        getAuthConfig()
    );
    return response.data;
};

// Get all appointments
export const getAppointments = async (): Promise<ApiResponse<AppointmentResponse[]>> => {
    const response = await axios.get(
        `${API_URL}/api/appointments`,
        getAuthConfig()
    );
    return response.data;
};

// Get single appointment
export const getAppointment = async (
    id: string
): Promise<ApiResponse<AppointmentResponse>> => {
    const response = await axios.get(
        `${API_URL}/api/appointments/${id}`,
        getAuthConfig()
    );
    return response.data;
};

// Update appointment
export const updateAppointment = async (
    id: string,
    appointmentData: Partial<AppointmentData>
): Promise<ApiResponse<AppointmentResponse>> => {
    const response = await axios.put(
        `${API_URL}/api/appointments/${id}`,
        appointmentData,
        getAuthConfig()
    );
    return response.data;
};

// Delete appointment
export const deleteAppointment = async (
    id: string
): Promise<ApiResponse<{ message: string }>> => {
    const response = await axios.delete(
        `${API_URL}/api/appointments/${id}`,
        getAuthConfig()
    );
    return response.data;
};