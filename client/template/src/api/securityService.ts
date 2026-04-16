import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/security`;

console.log('🔗 Security API URL:', API_URL);

// ✅ FIX: Proper token handling
const getAuthConfig = () => {
    const token = localStorage.getItem('token');

    console.log('🔑 Token check:', token ? 'Token found ✅' : 'No token ❌');

    if (!token) {
        console.error('⚠️ No authentication token found in localStorage');
        throw new Error('Authentication required. Please login again.');
    }

    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
};

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ISecuritySettings {
    email: string;
    phone: string;
    twoFAEnabled: boolean;
    loginAlerts: boolean;
    status: string;
}

export interface ChangePasswordPayload {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface UpdatePhonePayload {
    currentPhone?: string;
    newPhone: string;
    currentPassword: string;
}

export interface UpdateEmailPayload {
    currentEmail: string;
    newEmail: string;
    currentPassword: string;
}

export interface DeleteAccountPayload {
    reason?: string;
    currentPassword: string;
}

// ── Get Security Settings ─────────────────────────────────────────────────────
export const getSecuritySettings = async (): Promise<ISecuritySettings> => {
    try {
        console.log('📤 Fetching security settings...');
        const response = await axios.get(API_URL, getAuthConfig());
        console.log('✅ Security settings loaded:', response.data);
        return response.data.data;
    } catch (error: any) {
        console.error('❌ Get security settings error:', error);
        console.error('Error response:', error.response?.data);
        throw error;
    }
};

// ── Change Password ───────────────────────────────────────────────────────────
export const changePassword = async (payload: ChangePasswordPayload): Promise<void> => {
    try {
        console.log('📤 Changing password...');
        const response = await axios.put(`${API_URL}/password`, payload, getAuthConfig());
        console.log('✅ Password changed:', response.data);
    } catch (error: any) {
        console.error('❌ Change password error:', error);
        throw error;
    }
};

// ── Toggle Two Factor Auth ────────────────────────────────────────────────────
export const toggleTwoFA = async (): Promise<{ twoFAEnabled: boolean }> => {
    try {
        console.log('📤 Toggling 2FA...');
        const response = await axios.put(`${API_URL}/two-fa`, {}, getAuthConfig());
        console.log('✅ 2FA toggled:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('❌ Toggle 2FA error:', error);
        throw error;
    }
};

// ── Toggle Login Alerts ───────────────────────────────────────────────────────
export const toggleLoginAlerts = async (): Promise<{ loginAlerts: boolean }> => {
    try {
        console.log('📤 Toggling login alerts...');
        const response = await axios.put(`${API_URL}/login-alerts`, {}, getAuthConfig());
        console.log('✅ Login alerts toggled:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('❌ Toggle login alerts error:', error);
        throw error;
    }
};

// ── Update Phone ──────────────────────────────────────────────────────────────
export const updatePhone = async (payload: UpdatePhonePayload): Promise<{ phone: string }> => {
    try {
        console.log('📤 Updating phone...');
        const response = await axios.put(`${API_URL}/phone`, payload, getAuthConfig());
        console.log('✅ Phone updated:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('❌ Update phone error:', error);
        throw error;
    }
};

// ── Remove Phone ──────────────────────────────────────────────────────────────
export const removePhone = async (): Promise<void> => {
    try {
        console.log('📤 Removing phone...');
        const response = await axios.delete(`${API_URL}/phone`, getAuthConfig());
        console.log('✅ Phone removed:', response.data);
    } catch (error: any) {
        console.error('❌ Remove phone error:', error);
        throw error;
    }
};

// ── Update Email ──────────────────────────────────────────────────────────────
export const updateEmail = async (payload: UpdateEmailPayload): Promise<{ email: string }> => {
    try {
        console.log('📤 Updating email...');
        const response = await axios.put(`${API_URL}/email`, payload, getAuthConfig());
        console.log('✅ Email updated:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('❌ Update email error:', error);
        throw error;
    }
};

// ── Deactivate Account ────────────────────────────────────────────────────────
export const deactivateAccount = async (): Promise<void> => {
    try {
        console.log('📤 Deactivating account...');
        const response = await axios.put(`${API_URL}/deactivate`, {}, getAuthConfig());
        console.log('✅ Account deactivated:', response.data);
    } catch (error: any) {
        console.error('❌ Deactivate account error:', error);
        throw error;
    }
};

// ── Delete Account ────────────────────────────────────────────────────────────
export const deleteAccount = async (payload: DeleteAccountPayload): Promise<void> => {
    try {
        console.log('📤 Deleting account...');
        const response = await axios.delete(`${API_URL}/account`, {
            ...getAuthConfig(),
            data: payload
        });
        console.log('✅ Account deleted:', response.data);
    } catch (error: any) {
        console.error('❌ Delete account error:', error);
        throw error;
    }
};