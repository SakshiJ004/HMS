import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api`;

console.log('🔗 Service API URL:', API_URL);

export interface ServicePayload {
    name: string;
    department: string;
    price: number | string;
    status?: string;
}

// Get all services
export const getServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        return response.data;
    } catch (error: any) {
        console.error('Get services error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Get single service by ID
export const getServiceById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/services/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Get service error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Create new service
export const createService = async (data: ServicePayload) => {
    try {
        const response = await axios.post(`${API_URL}/services`, data);
        return response.data;
    } catch (error: any) {
        console.error('Create service error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update service
export const updateService = async (id: string, data: ServicePayload) => {
    try {
        const response = await axios.put(`${API_URL}/services/${id}`, data);
        return response.data;
    } catch (error: any) {
        console.error('Update service error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete service
export const deleteService = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/services/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Delete service error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};