import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

export interface AssetPayload {
    assetName: string;
    assetUser: string;
    purchaseDate: string;
    purchaseFrom: string;
    manufacturer: string;
    model: string;
    serialNumber: string;
    supplier: string;
    condition: string;
    warranty: string;
    warrantyEnd: string;
    value: number | string;
    description: string;
    status?: string;
}

export const getAssets = async () => {
    const res = await axios.get(`${BASE_URL}/api/assets`);
    return res.data;
};

export const getAssetById = async (id: string) => {
    const res = await axios.get(`${BASE_URL}/api/assets/${id}`);
    return res.data;
};

export const createAsset = async (payload: AssetPayload) => {
    const res = await axios.post(`${BASE_URL}/api/assets`, payload);
    return res.data;
};

export const updateAsset = async (id: string, payload: AssetPayload) => {
    const res = await axios.put(`${BASE_URL}/api/assets/${id}`, payload);
    return res.data;
};

export const deleteAsset = async (id: string) => {
    const res = await axios.delete(`${BASE_URL}/api/assets/${id}`);
    return res.data;
};