import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export interface DepartmentPayload {
    name: string;
    description?: string;
}

export const getDepartments = async () => {
    try {
        const response = await axios.get(`${API_URL}/departments`);
        return response.data;
    } catch (error: any) {
        console.error('Get departments error:', error);
        return { success: false, message: error.message };
    }
};

export const createDepartment = async (data: DepartmentPayload) => {
    try {
        const response = await axios.post(`${API_URL}/departments`, data);
        return response.data;
    } catch (error: any) {
        console.error('Create department error:', error);
        return { success: false, message: error.message };
    }
};

export const updateDepartment = async (id: string, data: DepartmentPayload) => {
    try {
        const response = await axios.put(`${API_URL}/departments/${id}`, data);
        return response.data;
    } catch (error: any) {
        console.error('Update department error:', error);
        return { success: false, message: error.message };
    }
};

export const deleteDepartment = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/departments/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Delete department error:', error);
        return { success: false, message: error.message };
    }
};