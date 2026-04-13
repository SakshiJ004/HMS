import { useState, useEffect, useRef, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import {
    getConversations,
    getMessages,
    sendMessage,
    deleteMessage,
    deleteConversation,
    createConversation,
    getChatUsers,
    type ConversationData,
    type MessageData,
    type ChatUser,
} from "../../../../api/chatService";

// ⚠️ chatService import path — adjust करा:
// pages/ChatCore.tsx → "../../../../api/chatService" ← हे adjust होणार नाही, ChatCore.tsx जिथे आहे त्यावर अवलंबून
// जर ChatCore pages/ मध्ये आहे तर: "../../../api/chatService"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export const getUserInfo = () => {
    try {
        const raw = localStorage.getItem("userData");
        if (raw) {
            const u = JSON.parse(raw);
            return {
                name: u.fullName || u.firstName || "User",
                image: u.profileImage || "",
                role: (u.role || "admin") as string,
                id: u._id || "",
            };
        }
    } catch { /* ignore */ }
    return { name: "User", image: "", role: "admin", id: "" };
};

const Avatar = ({
    name, image, size = 40, showOnline = false
}: {
    name: string; image?: string; size?: number; showOnline?: boolean;
}) => (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
        {image ? (
            <img src={image} alt={name} style={{
                width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover"
            }} />
        ) : (
            <div style={{
                width: "100%", height: "100%", borderRadius: "50%",
                background: `hsl(${(name.charCodeAt(0) * 40) % 360}, 55%, 50%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontWeight: "bold", fontSize: size * 0.38
            }}>
                {name.charAt(0).toUpperCase()}
            </div>
        )}
        {showOnline && (
            <span style={{
                position: "absolute", bottom: 0, right: 0,
                width: size * 0.28, height: size * 0.28, borderRadius: "50%",
                background: "#22c55e", border: "2px solid white"
            }} />
        )}
    </div>
);

// ✅ Tick component — 3 states
// single grey  = sent (delivered to server)
// double grey  = delivered (other person is online but not read)
// double blue  = seen (other person opened conversation)
const MessageTick = ({ isRead, isOtherOnline }: { isRead: boolean; isOtherOnline: boolean }) => {
    if (isRead) {
        // Double blue — seen
        return (
            <span style={{ display: "inline-flex", gap: 1, marginLeft: 2 }}>
                <i className="ti ti-check" style={{ fontSize: 10, color: "#22c55e", marginRight: -5 }} />
                <i className="ti ti-check" style={{ fontSize: 10, color: "#22c55e" }} />
            </span>
        );
    }
    if (isOtherOnline) {
        // Double grey — delivered (online but not read)
        return (
            <span style={{ display: "inline-flex", gap: 1, marginLeft: 2 }}>
                <i className="ti ti-check" style={{ fontSize: 10, color: "#adb5bd", marginRight: -5 }} />
                <i className="ti ti-check" style={{ fontSize: 10, color: "#adb5bd" }} />
            </span>
        );
    }
    // Single grey — sent (other person offline)
    return (
        <i className="ti ti-check" style={{ fontSize: 10, color: "#adb5bd", marginLeft: 2 }} />
    );
};

let socket: Socket;

interface ChatCoreProps {
    forRole: "admin" | "doctor" | "patient";
}

interface OnlineStatus {
    isOnline: boolean;
    lastSeen?: string | null;
}

const ChatCore = ({ forRole }: ChatCoreProps) => {
    const currentUser = getUserInfo();
    const MY_NAME = currentUser.name;
    const MY_IMAGE = currentUser.image;

    const [conversations, setConversations] = useState<ConversationData[]>([]);
    const [activeConv, setActiveConv] = useState<ConversationData | null>(null);
    const [messages, setMessages] = useState<MessageData[]>([]);
    const [newMsg, setNewMsg] = useState("");
    const [search, setSearch] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [typingUser, setTypingUser] = useState("");
    const [loadingMsgs, setLoadingMsgs] = useState(false);
    const [showNewChat, setShowNewChat] = useState(false);
    const [chatUsers, setChatUsers] = useState<ChatUser[]>([]);
    const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null);
    const [userSearch, setUserSearch] = useState("");
    // ✅ Online status — key = userName, value = { isOnline, lastSeen }
    const [onlineUsers, setOnlineUsers] = useState<Record<string, OnlineStatus>>({});

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    // ✅ activeConvRef — socket handler मध्ये latest activeConv मिळवायला
    const activeConvRef = useRef<ConversationData | null>(null);

    useEffect(() => {
        socket = io(BACKEND_URL, { transports: ["websocket"], reconnection: true });

        // ✅ App उघडताना online सांगा
        socket.emit("user_online", { userName: MY_NAME });

        // ✅ Message receive
        socket.on("receive_message", (msg: MessageData) => {
            if (activeConvRef.current?._id === msg.conversationId) {
                setMessages(prev => [...prev, msg]);
                setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
                // ✅ हे conversation आत्ता open आहे — sender ला seen सांगा
                socket.emit("mark_read", {
                    conversationId: msg.conversationId,
                    readerName: MY_NAME
                });
            }
            fetchConversations();
        });

        socket.on("conversation_updated", () => fetchConversations());

        socket.on("user_typing", ({ sender }: { sender: string }) => {
            setTypingUser(sender); setIsTyping(true);
        });
        socket.on("user_stop_typing", () => { setIsTyping(false); setTypingUser(""); });

        // ✅ SEEN — दुसऱ्याने read केलं — माझे messages blue करा
        socket.on("messages_read", ({ conversationId }: { conversationId: string }) => {
            if (activeConvRef.current?._id === conversationId) {
                setMessages(prev => prev.map(m => ({ ...m, isRead: true })));
            }
        });

        // ✅ ONLINE STATUS UPDATE — कोणी online/offline झाला
        socket.on("online_status_update", ({ userName, isOnline, lastSeen }: {
            userName: string; isOnline: boolean; lastSeen?: string | null;
        }) => {
            setOnlineUsers(prev => ({
                ...prev,
                [userName]: { isOnline, lastSeen: lastSeen || prev[userName]?.lastSeen }
            }));
        });

        // ✅ Initial status response
        socket.on("online_statuses", (statuses: Record<string, OnlineStatus>) => {
            setOnlineUsers(prev => ({ ...prev, ...statuses }));
        });

        return () => { socket.disconnect(); };
    }, [MY_NAME]);

    // ✅ Conversation list मध्ये participants चा online status fetch करा
    useEffect(() => {
        if (conversations.length > 0) {
            const otherNames = conversations.map(c => {
                const other = c.participants.find(p => p.name !== MY_NAME);
                return other?.name;
            }).filter(Boolean) as string[];

            if (otherNames.length > 0) {
                socket?.emit("get_online_status", { userNames: otherNames });
            }
        }
    }, [conversations, MY_NAME]);

    const fetchConversations = useCallback(async () => {
        try {
            const res = await getConversations(MY_NAME);
            if (res.success) setConversations(res.data);
        } catch (err) { console.error(err); }
    }, [MY_NAME]);

    useEffect(() => { fetchConversations(); }, [fetchConversations]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (showNewChat) {
            getChatUsers(forRole).then(setChatUsers).catch(console.error);
        }
    }, [showNewChat, forRole]);

    const openConversation = async (conv: ConversationData) => {
        if (activeConv?._id === conv._id) return;
        if (activeConv) socket.emit("leave_conversation", activeConv._id);
        setActiveConv(conv);
        activeConvRef.current = conv;
        setMessages([]);
        setLoadingMsgs(true);
        try {
            const res = await getMessages(conv._id, MY_NAME);
            if (res.success) setMessages(res.data);
        } catch (err) { console.error(err); }
        finally { setLoadingMsgs(false); }
        socket.emit("join_conversation", conv._id);
        // ✅ Conversation उघडताना sender ला seen सांगा
        socket.emit("mark_read", { conversationId: conv._id, readerName: MY_NAME });
        setConversations(prev => prev.map(c =>
            c._id === conv._id ? { ...c, myUnreadCount: 0 } : c
        ));
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMsg.trim() || !activeConv) return;
        const text = newMsg.trim();
        setNewMsg("");
        if (typingTimer.current) clearTimeout(typingTimer.current);
        socket.emit("stop_typing", { conversationId: activeConv._id });

        try {
            const res = await sendMessage({
                conversationId: activeConv._id,
                sender: MY_NAME,
                senderImage: MY_IMAGE,
                text,
            });
            if (res.success) {
                setMessages(prev => [...prev, res.data]);
                socket.emit("send_message", res.data);
                fetchConversations();
            }
        } catch (err) { console.error(err); }
    };

    const handleTypingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMsg(e.target.value);
        if (!activeConv) return;
        socket.emit("typing", { conversationId: activeConv._id, sender: MY_NAME });
        if (typingTimer.current) clearTimeout(typingTimer.current);
        typingTimer.current = setTimeout(() => {
            socket.emit("stop_typing", { conversationId: activeConv._id });
        }, 1500);
    };

    const handleDeleteMsg = async (msgId: string) => {
        try {
            await deleteMessage(msgId);
            setMessages(prev => prev.filter(m => m._id !== msgId));
        } catch (err) { console.error(err); }
    };

    const handleDeleteConv = async (convId: string) => {
        if (!confirm("Delete this conversation?")) return;
        try {
            await deleteConversation(convId);
            setConversations(prev => prev.filter(c => c._id !== convId));
            if (activeConv?._id === convId) {
                setActiveConv(null);
                activeConvRef.current = null;
                setMessages([]);
            }
        } catch (err) { console.error(err); }
    };

    const handleStartChat = async () => {
        if (!selectedUser) return;
        try {
            const res = await createConversation({
                participantName: selectedUser.name,
                participantImage: selectedUser.image || "",
                myName: MY_NAME,
                myImage: MY_IMAGE,
            });
            if (res.success) {
                setShowNewChat(false); setSelectedUser(null); setUserSearch("");
                await fetchConversations();
                openConversation(res.data);
            }
        } catch (err) { console.error(err); }
    };

    const getOther = (conv: ConversationData) =>
        conv.participants.find(p => p.name !== MY_NAME) || conv.participants[0];

    const formatTime = (d: string) =>
        new Date(d).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

    const formatConvTime = (d: string) => {
        const diff = Date.now() - new Date(d).getTime();
        if (diff < 86400000) return new Date(d).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
        if (diff < 172800000) return "Yesterday";
        return new Date(d).toLocaleDateString("en-US", { weekday: "short" });
    };

    // ✅ Online status text — Online / Last seen X / Offline
    const getStatusText = (userName: string): { text: string; color: string } => {
        const s = onlineUsers[userName];
        if (!s) return { text: "Offline", color: "#aaa" };
        if (s.isOnline) return { text: "● Online", color: "#22c55e" };
        if (s.lastSeen) {
            const d = new Date(s.lastSeen);
            const diff = Date.now() - d.getTime();
            let time: string;
            if (diff < 60000) time = "just now";
            else if (diff < 3600000) time = `${Math.floor(diff / 60000)}m ago`;
            else if (diff < 86400000) time = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
            else time = d.toLocaleDateString("en-US", { day: "numeric", month: "short" });
            return { text: `Last seen ${time}`, color: "#888" };
        }
        return { text: "Offline", color: "#aaa" };
    };

    const typeBadgeStyle = (type: string) => {
        const s: Record<string, { bg: string; color: string }> = {
            doctor: { bg: "#ede9fe", color: "#7c3aed" },
            staff: { bg: "#dcfce7", color: "#16a34a" },
            patient: { bg: "#fef9c3", color: "#a16207" },
            admin: { bg: "#fee2e2", color: "#dc2626" },
        };
        return s[type] || { bg: "#f3f4f6", color: "#374151" };
    };

    const filtered = conversations.filter(c =>
        getOther(c).name.toLowerCase().includes(search.toLowerCase())
    );

    const filteredUsers = chatUsers.filter(u =>
        u.name !== MY_NAME &&
        (u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
            u.role.toLowerCase().includes(userSearch.toLowerCase()))
    );

    return (
        <>
            <div style={{
                display: "flex", height: "calc(100vh - 110px)",
                background: "#fff", borderRadius: 12,
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)", overflow: "hidden",
                margin: "0 -8px"
            }}>
                {/* ===== LEFT SIDEBAR ===== */}
                <div style={{
                    width: 300, flexShrink: 0, borderRight: "1px solid #f0f0f0",
                    display: "flex", flexDirection: "column", background: "#fff"
                }}>
                    <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid #f0f0f0" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <Avatar name={MY_NAME} image={MY_IMAGE} size={36} showOnline />
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{MY_NAME}</p>
                                    <p style={{ margin: 0, fontSize: 11, color: "#22c55e" }}>● Online</p>
                                </div>
                            </div>
                            <button onClick={() => setShowNewChat(true)} style={{
                                background: "#4f46e5", color: "white", border: "none",
                                borderRadius: 8, padding: "6px 12px", cursor: "pointer",
                                fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 4,
                                whiteSpace: "nowrap"
                            }}>
                                <i className="ti ti-plus" /> New
                            </button>
                        </div>
                        <div style={{ position: "relative" }}>
                            <i className="ti ti-search" style={{
                                position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)",
                                color: "#aaa", fontSize: 14
                            }} />
                            <input
                                type="text" placeholder="Search..."
                                value={search} onChange={e => setSearch(e.target.value)}
                                style={{
                                    width: "100%", padding: "7px 8px 7px 30px",
                                    border: "1px solid #e9ecef", borderRadius: 8,
                                    fontSize: 13, outline: "none", background: "#f8f9fa",
                                    boxSizing: "border-box"
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ overflowY: "auto", flex: 1, scrollbarWidth: "none" }}>
                        {filtered.length === 0 ? (
                            <div style={{ textAlign: "center", padding: "40px 16px", color: "#aaa" }}>
                                <i className="ti ti-message-off" style={{ fontSize: 32, display: "block", marginBottom: 8 }} />
                                <p style={{ margin: "0 0 12px", fontSize: 13 }}>No conversations yet</p>
                                <button onClick={() => setShowNewChat(true)} style={{
                                    background: "#4f46e5", color: "white", border: "none",
                                    borderRadius: 8, padding: "7px 16px", cursor: "pointer", fontSize: 13
                                }}>Start a Chat</button>
                            </div>
                        ) : filtered.map(conv => {
                            const other = getOther(conv);
                            const isActive = activeConv?._id === conv._id;
                            const unread = conv.myUnreadCount || 0;
                            const isOtherOnline = onlineUsers[other.name]?.isOnline === true;
                            return (
                                <div key={conv._id} onClick={() => openConversation(conv)} style={{
                                    display: "flex", alignItems: "center", padding: "11px 14px",
                                    cursor: "pointer",
                                    background: isActive ? "#f0f0ff" : "transparent",
                                    borderLeft: isActive ? "3px solid #4f46e5" : "3px solid transparent",
                                    borderBottom: "1px solid #f8f8f8",
                                    transition: "background 0.1s", position: "relative"
                                }}>
                                    <Avatar name={other.name} image={other.image} size={42} showOnline={isOtherOnline} />
                                    <div style={{ flex: 1, overflow: "hidden", marginLeft: 10 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <span style={{
                                                fontWeight: unread > 0 ? 700 : 600, fontSize: 14,
                                                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 120
                                            }}>
                                                {other.name}
                                            </span>
                                            <span style={{ fontSize: 11, color: "#aaa", flexShrink: 0, marginLeft: 4 }}>
                                                {formatConvTime(conv.lastMessageTime)}
                                            </span>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2 }}>
                                            <p style={{
                                                margin: 0, fontSize: 12,
                                                color: unread > 0 ? "#374151" : "#888",
                                                fontWeight: unread > 0 ? 600 : 400,
                                                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 148
                                            }}>
                                                {conv.lastMessage || "No messages yet"}
                                            </p>
                                            {unread > 0 && (
                                                <span style={{
                                                    background: "#4f46e5", color: "white", borderRadius: "50%",
                                                    minWidth: 18, height: 18, fontSize: 10, flexShrink: 0,
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    fontWeight: 700, padding: "0 4px"
                                                }}>{unread > 9 ? "9+" : unread}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div style={{ position: "absolute", top: 6, right: 4 }}>
                                        <div className="dropdown">
                                            <button onClick={e => e.stopPropagation()} data-bs-toggle="dropdown"
                                                style={{ background: "none", border: "none", cursor: "pointer", color: "#ccc", padding: "2px 4px" }}>
                                                <i className="ti ti-dots-vertical" style={{ fontSize: 11 }} />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-1" style={{ fontSize: 13 }}>
                                                <li>
                                                    <button className="dropdown-item text-danger py-1" type="button"
                                                        onClick={e => { e.stopPropagation(); handleDeleteConv(conv._id); }}>
                                                        <i className="ti ti-trash me-1" />Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ===== RIGHT CHAT AREA ===== */}
                {activeConv ? (
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#f8f9fa" }}>
                        {/* Chat Header */}
                        <div style={{
                            padding: "12px 20px", background: "#fff", borderBottom: "1px solid #f0f0f0",
                            display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <Avatar
                                    name={getOther(activeConv).name}
                                    image={getOther(activeConv).image}
                                    size={42}
                                    showOnline={onlineUsers[getOther(activeConv).name]?.isOnline === true}
                                />
                                <div>
                                    <h6 style={{ margin: 0, fontWeight: 600, fontSize: 15 }}>
                                        {getOther(activeConv).name}
                                    </h6>
                                    {/* ✅ Real online status */}
                                    {(() => {
                                        const s = getStatusText(getOther(activeConv).name);
                                        return <span style={{ fontSize: 12, color: s.color }}>{s.text}</span>;
                                    })()}
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: 8 }}>
                                <button className="btn btn-light btn-sm btn-icon"><i className="ti ti-phone" /></button>
                                <button className="btn btn-light btn-sm btn-icon"><i className="ti ti-video" /></button>
                                <div className="dropdown">
                                    <button className="btn btn-light btn-sm btn-icon" data-bs-toggle="dropdown">
                                        <i className="ti ti-dots-vertical" />
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end p-2">
                                        <li>
                                            <button className="dropdown-item text-danger" type="button"
                                                onClick={() => handleDeleteConv(activeConv._id)}>
                                                <i className="ti ti-trash me-2" />Delete Chat
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, overflowY: "auto", padding: "16px", scrollbarWidth: "none" }}>
                            {loadingMsgs ? (
                                <div style={{ textAlign: "center", paddingTop: 60 }}>
                                    <div className="spinner-border text-primary" style={{ width: 28, height: 28 }} />
                                </div>
                            ) : messages.length === 0 ? (
                                <div style={{ textAlign: "center", paddingTop: 60, color: "#aaa" }}>
                                    <i className="ti ti-message" style={{ fontSize: "2.5rem", display: "block", marginBottom: 8 }} />
                                    <p>No messages yet. Say hello! 👋</p>
                                </div>
                            ) : (
                                messages.map(msg => {
                                    const isMe = msg.sender === MY_NAME;
                                    // ✅ दुसरा व्यक्ती online आहे का
                                    const otherName = getOther(activeConv).name;
                                    const isOtherOnline = onlineUsers[otherName]?.isOnline === true;
                                    return (
                                        <div key={msg._id} style={{
                                            display: "flex", marginBottom: 12,
                                            flexDirection: isMe ? "row-reverse" : "row",
                                            alignItems: "flex-end", gap: 8
                                        }}>
                                            <Avatar name={isMe ? MY_NAME : msg.sender}
                                                image={isMe ? MY_IMAGE : msg.senderImage} size={30} />
                                            <div style={{ maxWidth: "65%" }}>
                                                <p style={{
                                                    fontSize: 11, color: "#999", margin: "0 0 3px",
                                                    textAlign: isMe ? "right" : "left"
                                                }}>
                                                    {isMe ? "You" : msg.sender} · {formatTime(msg.createdAt)}
                                                </p>
                                                <div style={{
                                                    display: "flex", alignItems: "center", gap: 6,
                                                    flexDirection: isMe ? "row-reverse" : "row"
                                                }}>
                                                    <div style={{
                                                        padding: "9px 13px",
                                                        borderRadius: isMe ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                                                        background: isMe ? "#4f46e5" : "#fff",
                                                        color: isMe ? "#fff" : "#1a1a1a",
                                                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                                        fontSize: 14, lineHeight: 1.5, wordBreak: "break-word"
                                                    }}>
                                                        {msg.text}
                                                    </div>
                                                    <div className="dropdown">
                                                        <button data-bs-toggle="dropdown" style={{
                                                            background: "none", border: "none", cursor: "pointer",
                                                            color: "#ccc", padding: 2, opacity: 0.7
                                                        }}>
                                                            <i className="ti ti-dots-vertical" style={{ fontSize: 11 }} />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end p-1">
                                                            <li>
                                                                <button className="dropdown-item text-danger py-1" style={{ fontSize: 13 }} type="button"
                                                                    onClick={() => handleDeleteMsg(msg._id)}>
                                                                    <i className="ti ti-trash me-1" />Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* ✅ Tick — माझ्या messages साठी फक्त */}
                                                {isMe && (
                                                    <div style={{ textAlign: "right", marginTop: 3 }}>
                                                        <MessageTick
                                                            isRead={msg.isRead}
                                                            isOtherOnline={isOtherOnline}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })
                            )}

                            {isTyping && (
                                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#888", fontSize: 13, marginBottom: 8 }}>
                                    <Avatar name={typingUser} size={24} />
                                    <span>{typingUser} is typing</span>
                                    <span style={{ display: "flex", gap: 3 }}>
                                        {[0, 0.2, 0.4].map((d, i) => (
                                            <span key={i} style={{
                                                width: 5, height: 5, borderRadius: "50%", background: "#aaa",
                                                animation: `blink 1.2s ${d}s infinite`
                                            }} />
                                        ))}
                                    </span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div style={{ padding: "12px 16px", background: "#fff", borderTop: "1px solid #f0f0f0", flexShrink: 0 }}>
                            <form onSubmit={handleSend} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Type your message..."
                                    value={newMsg}
                                    onChange={handleTypingInput}
                                    style={{
                                        flex: 1, padding: "10px 16px", border: "1px solid #e9ecef",
                                        borderRadius: 24, fontSize: 14, outline: "none", background: "#f8f9fa"
                                    }}
                                />
                                <button type="submit" disabled={!newMsg.trim()} style={{
                                    width: 42, height: 42, borderRadius: "50%", border: "none",
                                    background: newMsg.trim() ? "#4f46e5" : "#e9ecef",
                                    color: newMsg.trim() ? "white" : "#aaa",
                                    cursor: newMsg.trim() ? "pointer" : "not-allowed",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0, transition: "all 0.15s"
                                }}>
                                    <i className="ti ti-send" style={{ fontSize: 16 }} />
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ textAlign: "center", color: "#aaa" }}>
                            <div style={{
                                width: 72, height: 72, borderRadius: "50%", background: "#eef2ff",
                                display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px"
                            }}>
                                <i className="ti ti-message-2" style={{ fontSize: "2rem", color: "#4f46e5" }} />
                            </div>
                            <h5 style={{ fontWeight: 600, marginBottom: 8, color: "#374151" }}>Your Messages</h5>
                            <p style={{ fontSize: 14, marginBottom: 20 }}>Select a chat or start a new one</p>
                            <button onClick={() => setShowNewChat(true)} style={{
                                background: "#4f46e5", color: "white", border: "none",
                                borderRadius: 8, padding: "10px 24px", cursor: "pointer", fontSize: 14, fontWeight: 500
                            }}>
                                <i className="ti ti-plus" style={{ marginRight: 6 }} />New Chat
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* New Chat Modal */}
            {showNewChat && (
                <div style={{
                    position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
                    display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
                }}>
                    <div style={{
                        background: "white", borderRadius: 12, width: 460, maxWidth: "95vw",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.2)", overflow: "hidden"
                    }}>
                        <div style={{
                            padding: "20px 24px 14px", borderBottom: "1px solid #f0f0f0",
                            display: "flex", justifyContent: "space-between", alignItems: "center"
                        }}>
                            <h5 style={{ margin: 0, fontWeight: 700 }}>New Chat</h5>
                            <button onClick={() => { setShowNewChat(false); setUserSearch(""); setSelectedUser(null); }}
                                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "#888", lineHeight: 1 }}>
                                ×
                            </button>
                        </div>
                        <div style={{ padding: "14px 24px" }}>
                            <div style={{ position: "relative", marginBottom: 12 }}>
                                <i className="ti ti-search" style={{
                                    position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#aaa"
                                }} />
                                <input type="text" autoFocus
                                    placeholder="Search by name or role..."
                                    value={userSearch} onChange={e => setUserSearch(e.target.value)}
                                    style={{
                                        width: "100%", padding: "10px 10px 10px 36px",
                                        border: "1px solid #e9ecef", borderRadius: 8,
                                        fontSize: 14, outline: "none", background: "#f8f9fa", boxSizing: "border-box"
                                    }}
                                />
                            </div>
                            <div style={{ maxHeight: 300, overflowY: "auto", scrollbarWidth: "none" }}>
                                {filteredUsers.length === 0 ? (
                                    <p style={{ textAlign: "center", color: "#aaa", padding: "20px 0", fontSize: 13 }}>No users found</p>
                                ) : filteredUsers.map(user => {
                                    const badge = typeBadgeStyle(user.type);
                                    return (
                                        <div key={user._id} onClick={() => setSelectedUser(user)} style={{
                                            display: "flex", alignItems: "center", padding: "10px 12px",
                                            borderRadius: 8, marginBottom: 6, cursor: "pointer",
                                            border: selectedUser?._id === user._id ? "2px solid #4f46e5" : "1px solid #e9ecef",
                                            background: selectedUser?._id === user._id ? "#eef2ff" : "#fff",
                                            transition: "all 0.1s"
                                        }}>
                                            <Avatar name={user.name} image={user.image} size={40} />
                                            <div style={{ marginLeft: 12, flex: 1, overflow: "hidden" }}>
                                                <p style={{ margin: 0, fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.name}</p>
                                                <p style={{ margin: 0, fontSize: 12, color: "#888" }}>{user.role}</p>
                                            </div>
                                            <span style={{
                                                fontSize: 11, padding: "2px 8px", borderRadius: 12, fontWeight: 500,
                                                background: badge.bg, color: badge.color, flexShrink: 0
                                            }}>
                                                {user.type.charAt(0).toUpperCase() + user.type.slice(1)}
                                            </span>
                                            {selectedUser?._id === user._id && (
                                                <i className="ti ti-check" style={{ color: "#4f46e5", fontSize: 18, marginLeft: 8 }} />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div style={{ padding: "10px 24px 20px", display: "flex", justifyContent: "flex-end", gap: 8 }}>
                            <button onClick={() => { setShowNewChat(false); setUserSearch(""); setSelectedUser(null); }}
                                style={{ padding: "8px 20px", border: "1px solid #e9ecef", borderRadius: 8, background: "white", cursor: "pointer", fontSize: 14 }}>
                                Cancel
                            </button>
                            <button onClick={handleStartChat} disabled={!selectedUser} style={{
                                padding: "8px 24px", border: "none", borderRadius: 8,
                                cursor: selectedUser ? "pointer" : "not-allowed",
                                background: selectedUser ? "#4f46e5" : "#e9ecef",
                                color: selectedUser ? "white" : "#aaa", fontSize: 14, fontWeight: 500
                            }}>
                                <i className="ti ti-message" style={{ marginRight: 6 }} />Start Chat
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes blink { 0%, 80%, 100% { opacity: 0; } 40% { opacity: 1; } }
                ::-webkit-scrollbar { display: none; }
            `}</style>
        </>
    );
};

export default ChatCore;