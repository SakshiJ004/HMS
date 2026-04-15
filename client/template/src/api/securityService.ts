import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

// ─── Token helper ─────────────────────────────────────────────────────────────
// तुमचा user object localStorage मध्ये आहे → user.token
const getToken = (): string => {
    try {
        const raw =
            localStorage.getItem("user") || sessionStorage.getItem("user");
        if (raw) {
            const parsed = JSON.parse(raw);
            // token थेट object मध्ये आहे: { token: "eyJ...", _id: "...", ... }
            return parsed.token || parsed.accessToken || "";
        }
    } catch {
        /* silent */
    }
    return "";
};

// ─── axios instance — हर request मध्ये token auto-attach होईल ────────────────
const api = axios.create({ baseURL: BASE_URL, withCredentials: true });

// Request interceptor — हर call आधी token inject करतो
api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor — 401 आल्यावर login page वर redirect
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ISecuritySettings {
    email: string;
    phone: string;
    twoFAEnabled: boolean;
    loginAlerts: boolean;    // Google Auth toggle — स्वतंत्र field
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

// ── Toggle Two Factor Auth — ONLY 2FA changes, loginAlerts untouched ─────────
export const toggleTwoFA = async (): Promise<{ twoFAEnabled: boolean }> => {
    const res = await api.put("/api/security/two-fa");
    return res.data;
};

// ── Toggle Login Alerts — ONLY loginAlerts changes, twoFA untouched ──────────
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