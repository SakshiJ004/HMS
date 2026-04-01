import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";
const api = axios.create({ baseURL: BASE_URL, withCredentials: true });

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ICountry {
    _id: string;
    countryCode: string;
    name: string;
    flag: string;
    status: "Active" | "Inactive";
    createdAt: string;
}

export interface IState {
    _id: string;
    country: { _id: string; countryCode: string; name: string; flag: string };
    name: string;
    status: "Active" | "Inactive";
    createdAt: string;
}

export interface ICity {
    _id: string;
    country: { _id: string; countryCode: string; name: string; flag: string };
    state: { _id: string; name: string };
    name: string;
    status: "Active" | "Inactive";
    createdAt: string;
}

export interface Pagination {
    total: number;
    page: number;
    limit: number;
    pages: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: Pagination;
}

// ─── Countries ────────────────────────────────────────────────────────────────

export const getCountries = async (params?: {
    status?: string; search?: string; page?: number; limit?: number;
}): Promise<PaginatedResponse<ICountry>> => {
    const res = await api.get("/api/content-locations/countries", { params });
    return res.data;
};

export const getCountriesDropdown = async (): Promise<ICountry[]> => {
    const res = await api.get("/api/content-locations/countries/dropdown");
    return res.data.data;
};

export const createCountry = async (payload: {
    countryCode: string; name: string; flag?: string; status?: string;
}): Promise<ICountry> => {
    const res = await api.post("/api/content-locations/countries", payload);
    return res.data.data;
};

export const updateCountry = async (
    id: string,
    payload: Partial<{ countryCode: string; name: string; flag: string; status: string }>
): Promise<ICountry> => {
    const res = await api.put(`/api/content-locations/countries/${id}`, payload);
    return res.data.data;
};

export const deleteCountry = async (id: string): Promise<void> => {
    await api.delete(`/api/content-locations/countries/${id}`);
};

// ─── States ───────────────────────────────────────────────────────────────────

export const getStates = async (params?: {
    status?: string; search?: string; countryId?: string; page?: number; limit?: number;
}): Promise<PaginatedResponse<IState>> => {
    const res = await api.get("/api/content-locations/states", { params });
    return res.data;
};

export const getStatesByCountry = async (countryId: string): Promise<IState[]> => {
    const res = await api.get(`/api/content-locations/states/by-country/${countryId}`);
    return res.data.data;
};

export const createState = async (payload: {
    countryId: string; name: string; status?: string;
}): Promise<IState> => {
    const res = await api.post("/api/content-locations/states", payload);
    return res.data.data;
};

export const updateState = async (
    id: string,
    payload: Partial<{ countryId: string; name: string; status: string }>
): Promise<IState> => {
    const res = await api.put(`/api/content-locations/states/${id}`, payload);
    return res.data.data;
};

export const deleteState = async (id: string): Promise<void> => {
    await api.delete(`/api/content-locations/states/${id}`);
};

// ─── Cities ───────────────────────────────────────────────────────────────────

export const getCities = async (params?: {
    status?: string; search?: string; countryId?: string; stateId?: string;
    page?: number; limit?: number;
}): Promise<PaginatedResponse<ICity>> => {
    const res = await api.get("/api/content-locations/cities", { params });
    return res.data;
};

export const getCitiesByState = async (stateId: string): Promise<ICity[]> => {
    const res = await api.get(`/api/content-locations/cities/by-state/${stateId}`);
    return res.data.data;
};

export const createCity = async (payload: {
    countryId: string; stateId: string; name: string; status?: string;
}): Promise<ICity> => {
    const res = await api.post("/api/content-locations/cities", payload);
    return res.data.data;
};

export const updateCity = async (
    id: string,
    payload: Partial<{ countryId: string; stateId: string; name: string; status: string }>
): Promise<ICity> => {
    const res = await api.put(`/api/content-locations/cities/${id}`, payload);
    return res.data.data;
};

export const deleteCity = async (id: string): Promise<void> => {
    await api.delete(`/api/content-locations/cities/${id}`);
};