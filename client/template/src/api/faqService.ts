import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";
const api = axios.create({ baseURL: BASE_URL, withCredentials: true });

// ─── Types ────────────────────────────────────────────────────────────────────
export interface IFaq {
    _id: string;
    category: string;
    question: string;
    answer: string;
    status: "Active" | "Inactive";
    createdAt: string;
    updatedAt: string;
}

export interface FaqPayload {
    category: string;
    question: string;
    answer: string;
    status?: "Active" | "Inactive";
}

// ─── API calls ────────────────────────────────────────────────────────────────

export const getFaqs = async (params?: {
    search?: string;
    category?: string;
    status?: string;
}): Promise<IFaq[]> => {
    const res = await api.get("/api/faqs", { params });
    return res.data.data;
};

export const getFaqById = async (id: string): Promise<IFaq> => {
    const res = await api.get(`/api/faqs/${id}`);
    return res.data.data;
};

export const getCategories = async (): Promise<string[]> => {
    const res = await api.get("/api/faqs/categories");
    return res.data.data;
};

export const createFaq = async (payload: FaqPayload): Promise<IFaq> => {
    const res = await api.post("/api/faqs", payload);
    return res.data.data;
};

export const updateFaq = async (
    id: string,
    payload: Partial<FaqPayload>
): Promise<IFaq> => {
    const res = await api.put(`/api/faqs/${id}`, payload);
    return res.data.data;
};

export const deleteFaq = async (id: string): Promise<void> => {
    await api.delete(`/api/faqs/${id}`);
};