import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/profile`;

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

// Types
export interface IProfile {
    _id: string;
    fullName: string;
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
    profileImage?: string;
    role: string;
    address?: {
        address1?: string;
        address2?: string;
        country?: string;
        state?: string;
        city?: string;
        pincode?: string;
    };
}

export interface UpdateProfilePayload {
    firstName?: string;
    lastName?: string;
    phone?: string;
    profileImage?: string;
    address1?: string;
    address2?: string;
    country?: string;
    state?: string;
    city?: string;
    pincode?: string;
}

export interface ChangePasswordPayload {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

// Get profile
export const getProfile = async () => {
    try {
        const response = await axios.get(API_URL, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Get profile error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update profile
export const updateProfile = async (payload: UpdateProfilePayload) => {
    try {
        const response = await axios.put(API_URL, payload, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Update profile error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Change password
export const changePassword = async (payload: ChangePasswordPayload) => {
    try {
        const response = await axios.put(
            `${API_URL}/change-password`,
            payload,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Change password error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};