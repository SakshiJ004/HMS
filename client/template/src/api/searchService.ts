// src/api/searchService.ts

import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api`;

export interface SearchResult {
    type: 'doctor' | 'patient' | 'appointment' | 'action';
    id?: string;
    title: string;
    subtitle: string;
    link: string;
    image?: string | null;
    initials: string;
    category: string;
    status?: string;
}

export interface SearchResponse {
    success: boolean;
    query: string;
    count: number;
    results: SearchResult[];
}

// Global search across all entities
export const globalSearch = async (query: string): Promise<SearchResponse> => {
    try {
        const response = await axios.get<SearchResponse>(`${API_URL}/search`, {
            params: { q: query }
        });
        return response.data;
    } catch (error) {
        console.error('Search error:', error);
        throw error;
    }
};

// Search only doctors
export const searchDoctors = async (query: string) => {
    try {
        const response = await axios.get(`${API_URL}/search/doctors`, {
            params: { q: query }
        });
        return response.data;
    } catch (error) {
        console.error('Doctor search error:', error);
        throw error;
    }
};

// Search only patients
export const searchPatients = async (query: string) => {
    try {
        const response = await axios.get(`${API_URL}/search/patients`, {
            params: { q: query }
        });
        return response.data;
    } catch (error) {
        console.error('Patient search error:', error);
        throw error;
    }
};