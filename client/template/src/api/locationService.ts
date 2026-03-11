import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api`;

console.log('🔗 Location Service API URL:', API_URL);

export interface LocationPayload {
    name: string;
    locationType: string;
    email: string;
    phone: string;
    address1: string;
    address2?: string;
    country: string;
    state: string;
    city: string;
    pincode: string;
    image?: string;
    status?: string;
}

// Get all locations
export const getLocations = async () => {
    try {
        const response = await axios.get(`${API_URL}/locations`);
        return response.data;
    } catch (error: any) {
        console.error('Get locations error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Get single location by ID
export const getLocationById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/locations/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Get location error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Create new location
export const createLocation = async (data: LocationPayload) => {
    try {
        const response = await axios.post(`${API_URL}/locations`, data);
        return response.data;
    } catch (error: any) {
        console.error('Create location error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Update location
export const updateLocation = async (id: string, data: LocationPayload) => {
    try {
        const response = await axios.put(`${API_URL}/locations/${id}`, data);
        return response.data;
    } catch (error: any) {
        console.error('Update location error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Delete location
export const deleteLocation = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/locations/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Delete location error:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};