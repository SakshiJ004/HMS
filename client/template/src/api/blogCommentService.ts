import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/blog-comments`;

console.log('🔗 Blog Comment API URL:', API_URL);

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

export interface CommentPayload {
    blogId: string;
    customerName: string;
    email: string;
    comment: string;
}

// Get all comments (admin)
export const getAllComments = async () => {
    try {
        const response = await axios.get(API_URL, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Get comments error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Get comments for specific blog (public)
export const getCommentsByBlog = async (blogId: string) => {
    try {
        const response = await axios.get(`${API_URL}/blog/${blogId}`);
        return response.data;
    } catch (error: any) {
        console.error('Get blog comments error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Create comment (public)
export const createComment = async (data: CommentPayload) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error: any) {
        console.error('Create comment error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update comment status (admin)
export const updateCommentStatus = async (id: string, status: string) => {
    try {
        const response = await axios.put(`${API_URL}/${id}/status`, { status }, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Update comment status error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete comment (admin)
export const deleteComment = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Delete comment error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};