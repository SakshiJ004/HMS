import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/notifications`;

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

// Types
export interface INotification {
    _id: string;
    user: string;
    type: string;
    title: string;
    message: string;
    relatedEntity?: {
        entityType: string;
        entityId: string;
    };
    isRead: boolean;
    readAt?: string;
    icon?: string;
    actionUrl?: string;
    metadata?: any;
    createdAt: string;
    updatedAt: string;
}

export interface NotificationPreferences {
    newAppointment: { email: boolean; inApp: boolean };
    appointmentCancellation: { email: boolean; inApp: boolean };
    labReportReady: { email: boolean; inApp: boolean };
    followUpReminders: { email: boolean; inApp: boolean };
    billingNotification: { email: boolean; inApp: boolean };
    systemAlerts: { email: boolean; inApp: boolean };
}

// Get all notifications
export const getNotifications = async (params?: { page?: number; limit?: number; unreadOnly?: boolean }) => {
    try {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.append('page', params.page.toString());
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        if (params?.unreadOnly) queryParams.append('unreadOnly', 'true');

        const response = await axios.get(
            `${API_URL}?${queryParams.toString()}`,
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Get notifications error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Mark notification as read
export const markAsRead = async (id: string) => {
    try {
        const response = await axios.put(`${API_URL}/${id}/read`, {}, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Mark as read error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Mark all as read
export const markAllAsRead = async () => {
    try {
        const response = await axios.put(`${API_URL}/mark-all-read`, {}, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Mark all as read error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete notification
export const deleteNotification = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Delete notification error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Get notification preferences
export const getNotificationPreferences = async () => {
    try {
        const response = await axios.get(`${API_URL}/preferences`, getAuthConfig());
        return response.data;
    } catch (error: any) {
        console.error('Get preferences error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update notification preferences
export const updateNotificationPreferences = async (preferences: NotificationPreferences) => {
    try {
        const response = await axios.put(
            `${API_URL}/preferences`,
            { preferences },
            getAuthConfig()
        );
        return response.data;
    } catch (error: any) {
        console.error('Update preferences error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};