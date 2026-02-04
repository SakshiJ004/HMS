// api/leaveTypeService.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

// Get all leave types
export const getLeaveTypes = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/api/leave-types`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

// Create leave type (Admin only)
export const createLeaveType = async (data: {
    leaveType: string;
    leaveQuota: number;
}) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
            `${API_URL}/api/leave-types`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

// Update leave type (Admin only)
export const updateLeaveType = async (
    id: string,
    data: {
        leaveType: string;
        leaveQuota: number;
        status: string;
    }
) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(
            `${API_URL}/api/leave-types/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

// Delete leave type (Admin only)
export const deleteLeaveType = async (id: string) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(
            `${API_URL}/api/leave-types/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};
