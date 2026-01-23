import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

// Admin APIs
export const getAllLeaves = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/admin/leaves`, getAuthHeader());
        return response.data;
    } catch (error: any) {
        console.error('Get all leaves error:', error);
        throw error.response?.data || error;
    }
};

export const updateLeaveStatus = async (leaveId: string, status: string, remarks?: string) => {
    try {
        const response = await axios.put(
            `${API_URL}/api/admin/leaves/${leaveId}/status`,
            { status, remarks },
            getAuthHeader()
        );
        return response.data;
    } catch (error: any) {
        console.error('Update leave status error:', error);
        throw error.response?.data || error;
    }
};

export const updateLeave = async (leaveId: string, leaveData: any) => {
    try {
        const response = await axios.put(
            `${API_URL}/api/admin/leaves/${leaveId}`,
            leaveData,
            getAuthHeader()
        );
        return response.data;
    } catch (error: any) {
        console.error('Update leave error:', error);
        throw error.response?.data || error;
    }
};

export const deleteLeave = async (leaveId: string) => {
    try {
        const response = await axios.delete(
            `${API_URL}/api/admin/leaves/${leaveId}`,
            getAuthHeader()
        );
        return response.data;
    } catch (error: any) {
        console.error('Delete leave error:', error);
        throw error.response?.data || error;
    }
};

// Doctor APIs
export const getDoctorLeaves = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/doctor/leaves`, getAuthHeader());
        return response.data;
    } catch (error: any) {
        console.error('Get doctor leaves error:', error);
        throw error.response?.data || error;
    }
};

export const createLeave = async (leaveData: {
    leaveType: string;
    fromDate: string;
    toDate: string;
    dayType: string;
    reason: string;
}) => {
    try {
        const response = await axios.post(
            `${API_URL}/api/doctor/leaves`,
            leaveData,
            getAuthHeader()
        );
        return response.data;
    } catch (error: any) {
        console.error('Create leave error:', error);
        throw error.response?.data || error;
    }
};