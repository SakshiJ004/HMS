// src/api/patientService.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || '';

const getAuthConfig = () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Authentication required');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
};

export interface PatientData {
    _id: string;
    fullName: string;
    email: string;
    phone?: string;
    profileImage?: string;
    gender?: string;
    bloodGroup?: string;
    dob?: string;
    status?: string;
    address?: {
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        pincode?: string;
    };
    createdAt: string;
    lastAppointment?: {
        _id: string;
        appointmentDate: string;
        appointmentTime: string;
        appointmentType: string;
        status: string;
        doctor?: {
            fullName: string;
            department?: string;
            designation?: string;
        };
    } | null;
    totalAppointments: number;
}

export interface CreatePatientPayload {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    primaryDoctor: string;
    dob: string;
    gender: string;
    bloodGroup: string;
    status?: string;
    address?: {
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        pincode?: string;
    };
}

// ─── Get all patients ──────────────────────────────────────────────────────────
export const getPatients = async (): Promise<{ success: boolean; data: PatientData[]; count: number }> => {
    const res = await axios.get(
        `${API_URL}/api/appointments/patients`,
        getAuthConfig()
    );
    return res.data;
};

// ─── Create patient ────────────────────────────────────────────────────────────
export const createPatient = async (payload: CreatePatientPayload) => {
    const res = await axios.post(
        `${API_URL}/api/appointments/patients`,
        payload,
        getAuthConfig()
    );
    return res.data;
};

// ─── Delete patient ────────────────────────────────────────────────────────────
export const deletePatient = async (id: string) => {
    const res = await axios.delete(
        `${API_URL}/api/appointments/patients/${id}`,
        getAuthConfig()
    );
    return res.data;
};