import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/blogs`;

console.log('🔗 Blog Service API URL:', API_URL);

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

export interface BlogPayload {
    title: string;
    category: string;
    content: string;
    tags?: string[];
    featureImage?: string;
    status?: string;
}

// Get all blogs
export const getBlogs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error: any) {
        console.error('Get blogs error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Get single blog by ID
export const getBlogById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Get blog error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Create new blog
export const createBlog = async (data: BlogPayload) => {
    try {
        const response = await axios.post(API_URL, data, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Create blog error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update blog
export const updateBlog = async (id: string, data: BlogPayload) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Update blog error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete blog
export const deleteBlog = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Delete blog error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};