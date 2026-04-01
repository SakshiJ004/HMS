// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

// export interface ConversationData {
//     _id: string;
//     participants: { name: string; image: string }[];
//     lastMessage: string;
//     lastMessageTime: string;
//     unreadCount: number;
// }

// export interface MessageData {
//     _id: string;
//     conversationId: string;
//     sender: string;
//     senderImage: string;
//     text: string;
//     isRead: boolean;
//     createdAt: string;
// }

// export interface ChatUser {
//     _id: string;
//     name: string;
//     email: string;
//     role: string;
//     image: string;
//     type: "staff" | "doctor";
// }

// export const getConversations = async () => {
//     const res = await axios.get(`${BASE_URL}/api/chat/conversations`);
//     return res.data;
// };

// export const createConversation = async (payload: {
//     participantName: string;
//     participantImage?: string;
//     myName: string;
//     myImage?: string;
// }) => {
//     const res = await axios.post(`${BASE_URL}/api/chat/conversations`, payload);
//     return res.data;
// };

// export const getMessages = async (conversationId: string) => {
//     const res = await axios.get(`${BASE_URL}/api/chat/messages/${conversationId}`);
//     return res.data;
// };

// export const sendMessage = async (payload: {
//     conversationId: string;
//     sender: string;
//     senderImage?: string;
//     text: string;
// }) => {
//     const res = await axios.post(`${BASE_URL}/api/chat/messages`, payload);
//     return res.data;
// };

// export const deleteMessage = async (id: string) => {
//     const res = await axios.delete(`${BASE_URL}/api/chat/messages/${id}`);
//     return res.data;
// };

// export const deleteConversation = async (id: string) => {
//     const res = await axios.delete(`${BASE_URL}/api/chat/conversations/${id}`);
//     return res.data;
// };

// // ✅ Staff + Doctors combined list for New Chat modal
// export const getChatUsers = async (): Promise<ChatUser[]> => {
//     const res = await axios.get(`${BASE_URL}/api/chat/users`);
//     return res.data.data || [];
// };


import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

export interface ConversationData {
    _id: string;
    participants: { name: string; image: string }[];
    lastMessage: string;
    lastMessageTime: string;
    unreadCount: number;
}

export interface MessageData {
    _id: string;
    conversationId: string;
    sender: string;
    senderImage: string;
    text: string;
    isRead: boolean;
    createdAt: string;
}

export interface ChatUser {
    _id: string;
    name: string;
    email: string;
    role: string;
    image: string;
    type: "staff" | "doctor";
}

// ✅ Filter conversations by current user name
export const getConversations = async (myName: string) => {
    const res = await axios.get(`${BASE_URL}/api/chat/conversations`, {
        params: { myName }
    });
    return res.data;
};

export const createConversation = async (payload: {
    participantName: string;
    participantImage?: string;
    myName: string;
    myImage?: string;
}) => {
    const res = await axios.post(`${BASE_URL}/api/chat/conversations`, payload);
    return res.data;
};

export const getMessages = async (conversationId: string) => {
    const res = await axios.get(`${BASE_URL}/api/chat/messages/${conversationId}`);
    return res.data;
};

export const sendMessage = async (payload: {
    conversationId: string;
    sender: string;
    senderImage?: string;
    text: string;
}) => {
    const res = await axios.post(`${BASE_URL}/api/chat/messages`, payload);
    return res.data;
};

export const deleteMessage = async (id: string) => {
    const res = await axios.delete(`${BASE_URL}/api/chat/messages/${id}`);
    return res.data;
};

export const deleteConversation = async (id: string) => {
    const res = await axios.delete(`${BASE_URL}/api/chat/conversations/${id}`);
    return res.data;
};

export const getChatUsers = async (): Promise<ChatUser[]> => {
    const res = await axios.get(`${BASE_URL}/api/chat/users`);
    return res.data.data || [];
};