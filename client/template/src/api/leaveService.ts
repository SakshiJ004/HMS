// api/leaveService.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

// Get doctor's leaves
export const getDoctorLeaves = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/api/leaves/my-leaves`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

// Get all leaves (Admin only)
export const getAllLeaves = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/api/leaves/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

// Create new leave
export const createLeave = async (leaveData: {
    leaveType: string;
    fromDate: string;
    toDate: string;
    reason: string;
}) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
            `${API_URL}/api/leaves/apply`,
            leaveData,
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

// Update leave status (Admin only)
export const updateLeaveStatus = async (
    leaveId: string,
    status: 'Approved' | 'Rejected',
    adminRemarks?: string
) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(
            `${API_URL}/api/leaves/status/${leaveId}`,
            { status, adminRemarks },
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

// Get leave statistics
export const getLeaveStatistics = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/api/leaves/statistics`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

// Get admin leave statistics (Admin only)
export const getAdminLeaveStatistics = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/api/leaves/admin-statistics`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};