// src/services/holidaysApi.ts

import axios from 'axios';

// Backend API base URL - tumcha backend URL yeth ghala
const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api`;

export interface HolidayDTO {
    _id?: string;
    name: string;
    description?: string;
    date: string; // DD-MM-YYYY format
    day: string; // Monday, Tuesday, etc.
}

export interface HolidayResponse {
    success: boolean;
    data: HolidayDTO[];
    message?: string;
}

export interface SingleHolidayResponse {
    success: boolean;
    data: HolidayDTO;
    message?: string;
}

// Get all holidays
export const getAllHolidays = async (): Promise<HolidayDTO[]> => {
    try {
        const response = await axios.get<HolidayResponse>(`${API_URL}/holidays`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching holidays:', error);
        throw error;
    }
};

// Add new holiday
export const addHoliday = async (holiday: Omit<HolidayDTO, '_id'>): Promise<HolidayDTO> => {
    try {
        const response = await axios.post<SingleHolidayResponse>(`${API_URL}/holidays`, holiday);
        return response.data.data;
    } catch (error) {
        console.error('Error adding holiday:', error);
        throw error;
    }
};

// Update holiday
export const updateHoliday = async (id: string, holiday: Omit<HolidayDTO, '_id'>): Promise<HolidayDTO> => {
    try {
        const response = await axios.put<SingleHolidayResponse>(`${API_URL}/holidays/${id}`, holiday);
        return response.data.data;
    } catch (error) {
        console.error('Error updating holiday:', error);
        throw error;
    }
};

// Delete holiday
export const deleteHoliday = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/holidays/${id}`);
    } catch (error) {
        console.error('Error deleting holiday:', error);
        throw error;
    }
};