import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/blog-categories`;

console.log('🔗 Blog Category API URL:', API_URL);

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

export interface CategoryPayload {
    name: string;
    description?: string;
    status?: string;
}

// Get all categories
export const getCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error: any) {
        console.error('Get categories error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Get single category
export const getCategoryById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Get category error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Create category
export const createCategory = async (data: CategoryPayload) => {
    try {
        const response = await axios.post(API_URL, data, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Create category error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update category
export const updateCategory = async (id: string, data: CategoryPayload) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Update category error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete category
export const deleteCategory = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Delete category error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};