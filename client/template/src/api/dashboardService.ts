import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

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

// Type definitions
export interface DashboardStats {
    doctors: number;
    patients: number;
    appointments: number;
}

export interface AppointmentStatsSummary {
    allAppointments: number;
    cancelled: number;
    rescheduled: number;
    completed: number;
}

export interface ChartDataPoint {
    month?: string;
    day?: string;
    year?: string;
    completed: number;
    ongoing: number;
    rescheduled: number;
    total: number;
}

export interface AppointmentStatsResponse {
    summary: AppointmentStatsSummary;
    chartData: {
        monthly: ChartDataPoint[];
        weekly: ChartDataPoint[];
        yearly: ChartDataPoint[];
    };
}

// Get dashboard statistics
export const getDashboardStats = async () => {
    try {
        const response = await axios.get<{ success: boolean; data: DashboardStats }>(
            `${API_URL}/api/dashboard/stats`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get dashboard stats error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch dashboard statistics');
    }
};

// Get appointment statistics
export const getAppointmentStats = async (period: 'monthly' | 'weekly' | 'yearly' = 'monthly') => {
    try {
        const response = await axios.get<{ success: boolean; data: AppointmentStatsResponse }>(
            `${API_URL}/api/dashboard/appointment-stats?period=${period}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get appointment stats error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch appointment statistics');
    }
};