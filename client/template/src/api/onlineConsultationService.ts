import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const api = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Get consultation by appointment ID
export const getConsultationByAppointment = async (appointmentId: string) => {
    const response = await api.get(`/online-consultations/appointment/${appointmentId}`);
    return response.data;
};

// Update Vitals
export const updateVitals = async (consultationId: string, vitals: any) => {
    const response = await api.patch(`/online-consultations/${consultationId}/vitals`, { vitals });
    return response.data;
};

// Update Complaints
export const updateComplaints = async (consultationId: string, complaints: any) => {
    const response = await api.patch(`/online-consultations/${consultationId}/complaints`, { complaints });
    return response.data;
};

// Update Diagnosis
export const updateDiagnosis = async (consultationId: string, diagnosis: any) => {
    const response = await api.patch(`/online-consultations/${consultationId}/diagnosis`, { diagnosis });
    return response.data;
};

// Update Medications
export const updateMedications = async (consultationId: string, medications: any) => {
    const response = await api.patch(`/online-consultations/${consultationId}/medications`, { medications });
    return response.data;
};

// Update Advice
export const updateAdvice = async (consultationId: string, advice: any) => {
    const response = await api.patch(`/online-consultations/${consultationId}/advice`, { advice });
    return response.data;
};

// Update Investigations
export const updateInvestigations = async (consultationId: string, investigations: any) => {
    const response = await api.patch(`/online-consultations/${consultationId}/investigations`, { investigations });
    return response.data;
};

// Update Follow Up
export const updateFollowUp = async (consultationId: string, followUp: any) => {
    const response = await api.patch(`/online-consultations/${consultationId}/followup`, { followUp });
    return response.data;
};

// Update Invoice
export const updateInvoice = async (consultationId: string, invoice: any) => {
    const response = await api.patch(`/online-consultations/${consultationId}/invoice`, { invoice });
    return response.data;
};

// Complete Consultation
export const completeConsultation = async (consultationId: string) => {
    const response = await api.post(`/online-consultations/${consultationId}/complete`);
    return response.data;
};

// Add this new API call:
export const getLatestOnlineAppointment = async (doctorId: string) => {
    const response = await api.get(`/online-consultations/latest/${doctorId}`);
    return response.data;
};
export const createVideoRoom = async (
    consultationId: string,
    role: 'doctor' | 'patient',
    userId: string,
    userName: string
) => {
    const response = await api.post(
        `/online-consultations/${consultationId}/create-video-room`,
        { role, userId, userName }
    );
    return response.data;
};