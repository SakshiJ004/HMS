import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface DepartmentPayload {
    name: string;
    description?: string;
}

// Get all departments
export const getDepartments = async () => {
    try {
        const response = await axios.get(`${API_URL}/departments`);
        return response.data;
    } catch (error: any) {
        console.error('Get departments error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Get single department by ID
export const getDepartmentById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/departments/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Get department error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Create new department
export const createDepartment = async (data: DepartmentPayload) => {
    try {
        const response = await axios.post(`${API_URL}/departments`, data);
        return response.data;
    } catch (error: any) {
        console.error('Create department error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update department
export const updateDepartment = async (id: string, data: DepartmentPayload) => {
    try {
        const response = await axios.put(`${API_URL}/departments/${id}`, data);
        return response.data;
    } catch (error: any) {
        console.error('Update department error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete department
export const deleteDepartment = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/departments/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Delete department error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};