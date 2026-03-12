import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api`;

console.log('🔗 Payroll Service API URL:', API_URL);

export interface PayrollPayload {
    staffId: string;
    staffName: string;
    email?: string;
    role?: string;
    joiningDate?: string;
    image?: string;
    salaryMonth: string;
    salaryYear: number | string;
    basicSalary: number | string;
    da: number | string;
    hra: number | string;
    conveyance: number | string;
    medicalAllowance: number | string;
    otherEarnings: number | string;
    tds: number | string;
    esi: number | string;
    pf: number | string;
    profTax: number | string;
    labourWelfare: number | string;
    otherDeductions: number | string;
    status?: string;
}

// Get all payrolls
export const getPayrolls = async () => {
    try {
        const response = await axios.get(`${API_URL}/payrolls`);
        return response.data;
    } catch (error: any) {
        console.error('Get payrolls error:', error);
        return { success: false, message: error.response?.data?.message || error.message };
    }
};

// Get single payroll by ID
export const getPayrollById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/payrolls/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Get payroll error:', error);
        return { success: false, message: error.response?.data?.message || error.message };
    }
};

// Create new payroll
export const createPayroll = async (data: PayrollPayload) => {
    try {
        const response = await axios.post(`${API_URL}/payrolls`, data);
        return response.data;
    } catch (error: any) {
        console.error('Create payroll error:', error);
        return { success: false, message: error.response?.data?.message || error.message };
    }
};

// Update payroll
export const updatePayroll = async (id: string, data: PayrollPayload) => {
    try {
        const response = await axios.put(`${API_URL}/payrolls/${id}`, data);
        return response.data;
    } catch (error: any) {
        console.error('Update payroll error:', error);
        return { success: false, message: error.response?.data?.message || error.message };
    }
};

// Delete payroll
export const deletePayroll = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/payrolls/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Delete payroll error:', error);
        return { success: false, message: error.response?.data?.message || error.message };
    }
};