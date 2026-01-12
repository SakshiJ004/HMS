import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api`;

console.log('🔗 Designation Service API URL:', API_URL);

export interface DesignationPayload {
    name: string;
    type: 'Staff' | 'Doctor';
    department: string;
    description?: string;
    status?: 'Active' | 'Inactive';
}

// Get all designations
export const getDesignations = async () => {
    try {
        const response = await axios.get(`${API_URL}/designations`);
        return response.data;
    } catch (error: any) {
        console.error('Get designations error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Get single designation by ID
export const getDesignationById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/designations/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Get designation error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Create new designation
export const createDesignation = async (data: DesignationPayload) => {
    try {
        const response = await axios.post(`${API_URL}/designations`, data);
        return response.data;
    } catch (error: any) {
        console.error('Create designation error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update designation
export const updateDesignation = async (id: string, data: DesignationPayload) => {
    try {
        const response = await axios.put(`${API_URL}/designations/${id}`, data);
        return response.data;
    } catch (error: any) {
        console.error('Update designation error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete designation
export const deleteDesignation = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/designations/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Delete designation error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};