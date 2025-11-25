// ============================================
// FILE: frontend/src/api/doctorService.ts
// ============================================
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

// Get auth token
const getAuthConfig = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('Authentication required');
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
};

// Type definitions
export interface DoctorFormData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    dob: string;
    yearOfExperience: string | number;
    department: string;
    designation: string;
    medicalLicenseNumber: string;
    languageSpoken?: string[];
    bloodGroup: string;
    gender: string;
    bio?: string;
    featureOnWebsite?: boolean;
    address: {
        address1: string;
        address2?: string;
        city: string;
        state: string;
        country?: string;
        pincode: string;
    };
    appointmentType?: string;
    acceptBookingsDays?: number;
    appointmentDuration?: number;
    consultationCharge?: number;
    maxBookingsPerSlot?: number;
    displayOnBookingPage?: boolean;
    education?: Array<{ degree: string; college: string; year: string }>;
    awards?: Array<{ title: string; year: string }>;
    certifications?: Array<{ title: string; year: string }>;
    schedules?: Array<{
        day: string;
        timeSlots: Array<{ startTime: string; endTime: string }>;
    }>;
    profileImage?: string;
}

export interface DoctorCredentials {
    email: string;
    password: string;
    username: string;
}

export interface CreateDoctorResponse {
    success: boolean;
    message: string;
    data: {
        _id: string;
        fullName: string;
        email: string;
        role: string;
        credentials: DoctorCredentials;
    };
}

/**
 * Create new doctor (Admin only)
 */
export const createDoctor = async (doctorData: DoctorFormData) => {
    try {
        const response = await axios.post<CreateDoctorResponse>(
            `${API_URL}/api/doctors`,
            doctorData,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Create doctor error:', error);
        throw new Error(error.response?.data?.message || 'Failed to create doctor');
    }
};

/**
 * Get all doctors
 */
export const getDoctors = async () => {
    try {
        const response = await axios.get(
            `${API_URL}/api/doctors`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get doctors error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch doctors');
    }
};

/**
 * Get single doctor
 */
export const getDoctor = async (id: string) => {
    try {
        const response = await axios.get(
            `${API_URL}/api/doctors/${id}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get doctor error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch doctor');
    }
};

/**
 * Update doctor
 */
export const updateDoctor = async (id: string, doctorData: Partial<DoctorFormData>) => {
    try {
        const response = await axios.put(
            `${API_URL}/api/doctors/${id}`,
            doctorData,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Update doctor error:', error);
        throw new Error(error.response?.data?.message || 'Failed to update doctor');
    }
};

/**
 * Delete doctor
 */
export const deleteDoctor = async (id: string) => {
    try {
        const response = await axios.delete(
            `${API_URL}/api/doctors/${id}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Delete doctor error:', error);
        throw new Error(error.response?.data?.message || 'Failed to delete doctor');
    }
};