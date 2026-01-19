import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api`;

console.log('🔗 Staff Service API URL:', API_URL);

export interface StaffPayload {
    name: string;
    designation: string;
    role: string;
    phone: string;
    email: string;
    dob: string;
    dateOfJoining: string;
    gender: string;
    bloodGroup?: string;
    address1?: string;
    address2?: string;
    country?: string;
    state?: string;
    city?: string;
    pincode?: string;
    image?: string;
    staffType?: string;
    status?: string;
}

// Get all staffs
export const getStaffs = async () => {
    try {
        const response = await axios.get(`${API_URL}/staffs`);
        return response.data;
    } catch (error: any) {
        console.error('Get staffs error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Get single staff by ID
export const getStaffById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/staffs/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Get staff error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Create new staff
export const createStaff = async (data: StaffPayload) => {
    try {
        const response = await axios.post(`${API_URL}/staffs`, data);
        return response.data;
    } catch (error: any) {
        console.error('Create staff error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update staff
export const updateStaff = async (id: string, data: StaffPayload) => {
    try {
        const response = await axios.put(`${API_URL}/staffs/${id}`, data);
        return response.data;
    } catch (error: any) {
        console.error('Update staff error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete staff
export const deleteStaff = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/staffs/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Delete staff error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};