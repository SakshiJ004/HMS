import axios, { AxiosError } from 'axios';

// Use your actual backend URL
const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

console.log('🔗 API URL:', API_URL); // Debug log

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

    if (!token) {
        console.error('❌ No authentication token found');
        throw new Error('Authentication required. Please login first.');
    }

    console.log('✅ Token found:', token.substring(0, 20) + '...');

    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
};

// Error handler
const handleApiError = (error: any, operation: string) => {
    console.error(`❌ ${operation} failed:`, error);

    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;

        if (axiosError.response) {
            // Server responded with error
            console.error('Response error:', axiosError.response.data);
            throw new Error(axiosError.response.data?.message || `${operation} failed`);
        } else if (axiosError.request) {
            // Request made but no response
            console.error('No response from server');
            throw new Error('Cannot connect to server. Please check if the backend is running.');
        }
    }

    throw new Error(`${operation} failed: ${error.message}`);
};

// Get all doctors
export const getDoctors = async (): Promise<ApiResponse<Doctor[]>> => {
    try {
        console.log('📞 Fetching doctors...');
        const response = await axios.get(
            `${API_URL}/api/appointments/doctors`,
            getAuthConfig()
        );
        console.log('✅ Doctors fetched:', response.data.count, 'doctors');
        return response.data;
    } catch (error) {
        handleApiError(error, 'Get doctors');
        throw error;
    }
};

// Get all patients
export const getPatients = async (): Promise<ApiResponse<Patient[]>> => {
    try {
        console.log('📞 Fetching patients...');
        const response = await axios.get(
            `${API_URL}/api/appointments/patients`,
            getAuthConfig()
        );
        console.log('✅ Patients fetched:', response.data.count, 'patients');
        return response.data;
    } catch (error) {
        handleApiError(error, 'Get patients');
        throw error;
    }
};

// Create appointment
export const createAppointment = async (
    appointmentData: AppointmentData
): Promise<ApiResponse<AppointmentResponse>> => {
    try {
        console.log('📞 Creating appointment with data:', appointmentData);

        const response = await axios.post(
            `${API_URL}/api/appointments`,
            appointmentData,
            getAuthConfig()
        );

        console.log('✅ Appointment created successfully:', response.data);
        return response.data;
    } catch (error) {
        handleApiError(error, 'Create appointment');
        throw error;
    }
};

// Get all appointments
export const getAppointments = async (): Promise<ApiResponse<AppointmentResponse[]>> => {
    try {
        console.log('📞 Fetching appointments...');
        const response = await axios.get(
            `${API_URL}/api/appointments`,
            getAuthConfig()
        );
        console.log('✅ Appointments fetched:', response.data.count, 'appointments');
        return response.data;
    } catch (error) {
        handleApiError(error, 'Get appointments');
        throw error;
    }
};

// Get single appointment
export const getAppointment = async (
    id: string
): Promise<ApiResponse<AppointmentResponse>> => {
    try {
        console.log('📞 Fetching appointment:', id);
        const response = await axios.get(
            `${API_URL}/api/appointments/${id}`,
            getAuthConfig()
        );
        console.log('✅ Appointment fetched:', response.data);
        return response.data;
    } catch (error) {
        handleApiError(error, 'Get appointment');
        throw error;
    }
};

// Update appointment
export const updateAppointment = async (
    id: string,
    appointmentData: Partial<AppointmentData>
): Promise<ApiResponse<AppointmentResponse>> => {
    try {
        console.log('📞 Updating appointment:', id, appointmentData);
        const response = await axios.put(
            `${API_URL}/api/appointments/${id}`,
            appointmentData,
            getAuthConfig()
        );
        console.log('✅ Appointment updated:', response.data);
        return response.data;
    } catch (error) {
        handleApiError(error, 'Update appointment');
        throw error;
    }
};

// Delete appointment
export const deleteAppointment = async (
    id: string
): Promise<ApiResponse<{ message: string }>> => {
    try {
        console.log('📞 Deleting appointment:', id);
        const response = await axios.delete(
            `${API_URL}/api/appointments/${id}`,
            getAuthConfig()
        );
        console.log('✅ Appointment deleted:', response.data);
        return response.data;
    } catch (error) {
        handleApiError(error, 'Delete appointment');
        throw error;
    }
};

// Get doctor's schedule
export const getDoctorSchedule = async (doctorId: string) => {
    try {
        const response = await fetch(`${API_URL}/doctors/${doctorId}/schedule`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch doctor schedule');
        }

        return await response.json();
    } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch schedule');
    }
};