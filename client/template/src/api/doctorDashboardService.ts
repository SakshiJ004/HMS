import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

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

export interface DoctorStats {
    totalAppointments: number;
    onlineConsultations: number;
    cancelledAppointments: number;
    totalAppointmentsChange: number;
    onlineConsultationsChange: number;
    cancelledAppointmentsChange: number;
}

export interface ChartDataPoint {
    _id: any;
    total: number;
    completed: number;
}

export interface UpcomingAppointmentData {
    _id: string;
    appointmentId: string;
    patient: {
        _id: string;
        fullName: string;
        email: string;
        phone?: string;
        profileImage?: string;
    };
    department: string;
    appointmentType: string;
    appointmentDate: string;
    appointmentTime: string;
    reason: string;
    status: string;
}

export interface RecentAppointment {
    _id: string;
    appointmentId: string;
    patient: {
        _id: string;
        fullName: string;
        email: string;
        phone?: string;
        profileImage?: string;
    };
    appointmentDate: string;
    appointmentTime: string;
    appointmentType: string;
    status: string;
    consultationCharge?: number;
}

export interface AdditionalStats {
    totalPatients: number;
    patientsChange: number;
    videoConsultations: number;
    videoChange: number;
    rescheduled: number;
    rescheduledChange: number;
    preVisit: number;
    preVisitChange: number;
    walkIn: number;
    walkInChange: number;
    followUps: number;
}

export interface AppointmentStatistics {
    completed: number;
    pending: number;
    cancelled: number;
}

export interface TopPatient {
    _id: string;
    fullName: string;
    email: string;
    phone?: string;
    profileImage?: string;
    appointmentCount: number;
}

export const getDoctorStats = async () => {
    try {
        const response = await axios.get<{ success: boolean; data: DoctorStats }>(
            `${API_URL}/api/doctor/dashboard/stats`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get doctor stats error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch stats');
    }
};

export const getDoctorAppointmentChart = async (period: 'monthly' | 'weekly' | 'yearly') => {
    try {
        const response = await axios.get<{ success: boolean; data: ChartDataPoint[] }>(
            `${API_URL}/api/doctor/dashboard/chart?period=${period}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get appointment chart error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch chart data');
    }
};

export const getUpcomingAppointment = async () => {
    try {
        const response = await axios.get<{ success: boolean; data: UpcomingAppointmentData | null }>(
            `${API_URL}/api/doctor/dashboard/upcoming`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get upcoming appointment error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch upcoming appointment');
    }
};

export const getRecentAppointments = async () => {
    try {
        const response = await axios.get<{ success: boolean; data: RecentAppointment[] }>(
            `${API_URL}/api/doctor/dashboard/recent`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get recent appointments error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch recent appointments');
    }
};
export const getAdditionalStats = async () => {
    try {
        const response = await axios.get<{ success: boolean; data: AdditionalStats }>(
            `${API_URL}/api/doctor/dashboard/additional-stats`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get additional stats error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch additional stats');
    }
};

export const getUpcomingAppointmentFiltered = async (filter: 'today' | 'week' | 'month' = 'today') => {
    try {
        const response = await axios.get<{ success: boolean; data: UpcomingAppointmentData[] }>(
            `${API_URL}/api/doctor/dashboard/upcoming-filtered?filter=${filter}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get upcoming appointment filtered error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch upcoming appointment');
    }
};

export const getAppointmentStatistics = async (period: 'monthly' | 'weekly' | 'yearly' = 'monthly') => {
    try {
        const response = await axios.get<{ success: boolean; data: AppointmentStatistics }>(
            `${API_URL}/api/doctor/dashboard/appointment-statistics?period=${period}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get appointment statistics error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch statistics');
    }
};

export const getTopPatients = async (period: 'monthly' | 'weekly' | 'yearly' = 'weekly') => {
    try {
        const response = await axios.get<{ success: boolean; data: TopPatient[] }>(
            `${API_URL}/api/doctor/dashboard/top-patients?period=${period}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get top patients error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch top patients');
    }
};
export const getAllDoctorAppointments = async () => {
    try {
        const response = await axios.get<{ success: boolean; data: RecentAppointment[] }>(
            `${API_URL}/api/doctor/dashboard/all-appointments`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get all appointments error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch appointments');
    }
};
export const getRecentAppointmentsFiltered = async (filter: 'today' | 'week' | 'month' = 'week') => {
    try {
        const response = await axios.get<{ success: boolean; data: RecentAppointment[] }>(
            `${API_URL}/api/doctor/dashboard/recent-filtered?filter=${filter}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get recent appointments filtered error:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch recent appointments');
    }
};