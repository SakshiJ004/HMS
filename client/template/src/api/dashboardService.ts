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

export interface TopDoctor {
    _id: string;
    name: string;
    specialization: string;
    profilePicture?: string;
    bookingsCount: number;
    status?: string;
}

export interface DepartmentStat {
    department: string;
    count: number;
}

export interface DoctorSchedule {
    _id: string;
    fullName: string;
    specialization: string;
    profileImage?: string;
    status?: string;
}
export interface DoctorsScheduleResponse {
    doctors: DoctorSchedule[];
    counts: {
        available: number;
        unavailable: number;
        onLeave: number;
    };
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

// Get top doctors
export const getTopDoctors = async (period: 'weekly' | 'monthly' | 'yearly' = 'weekly') => {
    try {
        const response = await axios.get<{ success: boolean; data: TopDoctor[] }>(
            `${API_URL}/api/dashboard/top-doctors?period=${period}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get top doctors error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch top doctors');
    }
};

// Get department statistics
export const getDepartmentStats = async (period: 'weekly' | 'monthly' | 'yearly' = 'weekly') => {
    try {
        const response = await axios.get<{ success: boolean; data: DepartmentStat[] }>(
            `${API_URL}/api/dashboard/department-stats?period=${period}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get department stats error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch department statistics');
    }
};

// Get doctors schedule
export const getDoctorsSchedule = async () => {
    try {
        const response = await axios.get<{ success: boolean; data: DoctorsScheduleResponse }>(
            `${API_URL}/api/dashboard/doctors-schedule`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get doctors schedule error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch doctors schedule');
    }
};