import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/blog-categories`;

console.log('🔗 Blog Category API URL:', API_URL);

// ✅ FIX: Better token handling
const getAuthConfig = () => {
    const token = localStorage.getItem('token');

    console.log('🔑 Token check:', token ? 'Token found' : 'No token');

    if (!token) {
        console.warn('⚠️ No authentication token found');
        return {
            headers: {
                'Content-Type': 'application/json',
            },
        };
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

// Get all categories (public)
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

// Get single category (public)
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

// Create category (protected)
export const createCategory = async (data: CategoryPayload) => {
    try {
        console.log('📤 Creating category:', data);
        const config = getAuthConfig();
        console.log('🔐 Auth config:', config);

        const response = await axios.post(API_URL, data, config);
        console.log('✅ Category created:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('❌ Create category error:', error);
        console.error('Error response:', error.response?.data);

        if (error.response?.status === 401) {
            return {
                success: false,
                message: 'Please login again. Your session has expired.'
            };
        }

        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update category (protected)
export const updateCategory = async (id: string, data: CategoryPayload) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Update category error:', error);

        if (error.response?.status === 401) {
            return {
                success: false,
                message: 'Please login again. Your session has expired.'
            };
        }

        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete category (protected)
export const deleteCategory = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Delete category error:', error);

        if (error.response?.status === 401) {
            return {
                success: false,
                message: 'Please login again. Your session has expired.'
            };
        }

        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};