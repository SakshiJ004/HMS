import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getSpecializations = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/api/specializations`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

export const createSpecialization = async (data: {
    name: string;
    description?: string;
}) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
            `${API_URL}/api/specializations`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

export const updateSpecialization = async (
    id: string,
    data: {
        name?: string;
        description?: string;
        status?: string;
    }
) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(
            `${API_URL}/api/specializations/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

export const deleteSpecialization = async (id: string) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(
            `${API_URL}/api/specializations/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};