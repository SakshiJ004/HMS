import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";
const api = axios.create({ baseURL: BASE_URL, withCredentials: true });

// ─── Types ────────────────────────────────────────────────────────────────────
export interface IProfile {
    _id: string;
    fullName: string;
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
    profileImage?: string;
    role: string;
    address?: {
        address1?: string;
        address2?: string;
        country?: string;
        state?: string;
        city?: string;
        pincode?: string;
    };
}

export interface UpdateProfilePayload {
    firstName?: string;
    lastName?: string;
    phone?: string;
    profileImage?: string;
    address1?: string;
    address2?: string;
    country?: string;
    state?: string;
    city?: string;
    pincode?: string;
}

export interface ChangePasswordPayload {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

// ─── API calls ────────────────────────────────────────────────────────────────

export const getProfile = async (): Promise<IProfile> => {
    const res = await api.get("/api/profile");
    return res.data.data;
};

export const updateProfile = async (
    payload: UpdateProfilePayload
): Promise<IProfile> => {
    const res = await api.put("/api/profile", payload);
    return res.data.data;
};

export const changePassword = async (
    payload: ChangePasswordPayload
): Promise<void> => {
    await api.put("/api/profile/change-password", payload);
};