import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

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

// ─── Interfaces ────────────────────────────────────────────────────────────────

export interface PatientStats {
    totalAppointments: number;
    onlineConsultations: number;
    upcomingCount: number;
    cancelledAppointments: number;
    totalChange: number;
    onlineChange: number;
}

export interface MyDoctor {
    _id: string;
    fullName: string;
    email: string;
    profileImage?: string;
    department?: string;
    designation?: string;
    bookingCount: number;
    lastVisit?: string;
}

export interface MyPrescription {
    _id: string;
    prescriptionId: string;
    doctor?: {
        _id: string;
        fullName: string;
        department?: string;
        profileImage?: string;
    };
    appointmentId?: {
        _id: string;
        appointmentDate?: string;
        appointmentType?: string;
    };
    medications?: Array<{
        medicineName: string;
        dosage: string;
        frequency: string;
        duration: string;
    }>;
    department?: string;
    status?: string;
    prescribedOn: string;
    createdAt: string;
    fileUrl?: string;
}

export interface RecentActivity {
    _id: string;
    type: 'completed' | 'cancelled' | 'scheduled';
    title: string;
    doctorName: string;
    description: string;
    date: string;
    status: string;
}

export interface PatientAppointment {
    _id: string;
    appointmentId: string;
    doctor: {
        _id: string;
        fullName: string;
        department?: string;
        designation?: string;
        consultationCharge?: number;
        profileImage?: string;
    };
    appointmentDate: string;
    appointmentTime: string;
    appointmentType: string;
    status: string;
    reason?: string;
    consultationCharge?: number;
}

export interface DepartmentStat {
    department: string;
    count: number;
}

export interface Transaction {
    _id: string;
    doctor?: {
        _id: string;
        fullName: string;
        department?: string;
        designation?: string;
        consultationCharge?: number;
        profileImage?: string;
    };
    amount: number;
    status: 'Success' | 'Failed' | 'Pending';
    date: string;
    appointmentType: string;
}

// ─── API Functions ──────────────────────────────────────────────────────────────

export const getPatientStats = async () => {
    const res = await axios.get<{ success: boolean; data: PatientStats }>(
        `${API_URL}/api/patient/dashboard/stats`,
        getAuthConfig()
    );
    return res.data;
};

export const getMyDoctors = async () => {
    const res = await axios.get<{ success: boolean; data: MyDoctor[] }>(
        `${API_URL}/api/patient/dashboard/my-doctors`,
        getAuthConfig()
    );
    return res.data;
};

export const getMyPrescriptions = async () => {
    const res = await axios.get<{ success: boolean; data: MyPrescription[] }>(
        `${API_URL}/api/patient/dashboard/prescriptions`,
        getAuthConfig()
    );
    return res.data;
};

export const getRecentActivity = async () => {
    const res = await axios.get<{ success: boolean; data: RecentActivity[] }>(
        `${API_URL}/api/patient/dashboard/recent-activity`,
        getAuthConfig()
    );
    return res.data;
};

export const getPatientRecentAppointments = async (filter: 'today' | 'week' | 'month' = 'week') => {
    const res = await axios.get<{ success: boolean; data: PatientAppointment[] }>(
        `${API_URL}/api/patient/dashboard/recent-appointments?filter=${filter}`,
        getAuthConfig()
    );
    return res.data;
};

export const getPatientUpcomingAppointments = async () => {
    const res = await axios.get<{ success: boolean; data: PatientAppointment[] }>(
        `${API_URL}/api/patient/dashboard/upcoming-appointments`,
        getAuthConfig()
    );
    return res.data;
};

export const getConsultationByDepartment = async (period: 'monthly' | 'weekly' | 'yearly' = 'monthly') => {
    const res = await axios.get<{ success: boolean; data: DepartmentStat[] }>(
        `${API_URL}/api/patient/dashboard/consultation-by-department?period=${period}`,
        getAuthConfig()
    );
    return res.data;
};

export const getRecentTransactions = async (filter: 'weekly' | 'monthly' | 'yearly' = 'weekly') => {
    const res = await axios.get<{ success: boolean; data: Transaction[] }>(
        `${API_URL}/api/patient/dashboard/recent-transactions?filter=${filter}`,
        getAuthConfig()
    );
    return res.data;
};

export const getAllPatientAppointments = async () => {
    const res = await axios.get<{ success: boolean; data: PatientAppointment[] }>(
        `${API_URL}/api/patient/dashboard/all-appointments`,
        getAuthConfig()
    );
    return res.data;
};
