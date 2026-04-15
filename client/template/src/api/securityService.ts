import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";
const api = axios.create({ baseURL: BASE_URL, withCredentials: true });

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ISecuritySettings {
    email: string;
    phone: string;
    twoFAEnabled: boolean;
    loginAlerts: boolean;
    status: string;
}

// ── Get current security settings ────────────────────────────────────────────
export const getSecuritySettings = async (): Promise<ISecuritySettings> => {
    const res = await api.get("/api/security");
    return res.data.data;
};

// ── Change password ───────────────────────────────────────────────────────────
export const changePassword = async (payload: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}): Promise<void> => {
    await api.put("/api/security/password", payload);
};

// ── Toggle Two Factor Auth ────────────────────────────────────────────────────
export const toggleTwoFA = async (): Promise<{ twoFAEnabled: boolean }> => {
    const res = await api.put("/api/security/two-fa");
    return res.data;
};

// ── Toggle Login Alerts ───────────────────────────────────────────────────────
export const toggleLoginAlerts = async (): Promise<{ loginAlerts: boolean }> => {
    const res = await api.put("/api/security/login-alerts");
    return res.data;
};

// ── Update phone ──────────────────────────────────────────────────────────────
export const updatePhone = async (payload: {
    currentPhone?: string;
    newPhone: string;
    currentPassword: string;
}): Promise<{ phone: string }> => {
    const res = await api.put("/api/security/phone", payload);
    return res.data;
};

// ── Remove phone ──────────────────────────────────────────────────────────────
export const removePhone = async (): Promise<void> => {
    await api.delete("/api/security/phone");
};

// ── Update email ──────────────────────────────────────────────────────────────
export const updateEmail = async (payload: {
    currentEmail: string;
    newEmail: string;
    currentPassword: string;
}): Promise<{ email: string }> => {
    const res = await api.put("/api/security/email", payload);
    return res.data;
};

// ── Deactivate account ────────────────────────────────────────────────────────
export const deactivateAccount = async (): Promise<void> => {
    await api.put("/api/security/deactivate");
};

// ── Delete account ────────────────────────────────────────────────────────────
export const deleteAccount = async (payload: {
    reason?: string;
    currentPassword: string;
}): Promise<void> => {
    await api.delete("/api/security/account", { data: payload });
};