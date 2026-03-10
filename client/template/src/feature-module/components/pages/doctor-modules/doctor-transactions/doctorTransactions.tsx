import { useState, useEffect } from "react";
import { Link } from "react-router";
import dayjs from "dayjs";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

const DoctorsTransactions = () => {
    const [transactions, setTransactions] = useState<any[]>([]);
    const [summary, setSummary] = useState({ totalEarnings: 0, thisMonth: 0, pending: 0, totalAppointments: 0 });
    const [loading, setLoading] = useState(true);
    const [filterType, setFilterType] = useState("all");
    const [searchText, setSearchText] = useState("");

    useEffect(() => { fetchTransactions(); }, []);

    const fetchTransactions = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${BACKEND_URL}/api/doctors/transactions`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setTransactions(data.data || []);
                setSummary(data.summary || { totalEarnings: 0, thisMonth: 0, pending: 0, totalAppointments: 0 });
            }
        } catch (err) {
            console.error("Failed to fetch transactions:", err);
        } finally {
            setLoading(false);
        }
    };

    const filtered = transactions.filter((t) => {
        const matchType = filterType === "all" || t.type === filterType;
        const matchSearch = !searchText ||
            t.patientName?.toLowerCase().includes(searchText.toLowerCase()) ||
            t.transactionId?.toLowerCase().includes(searchText.toLowerCase());
        return matchType && matchSearch;
    });

    const getStatusBadge = (status: string) => {
        switch (status?.toLowerCase()) {
            case "paid": case "completed": return "bg-success-subtle text-success border border-success";
            case "pending": return "bg-warning-subtle text-warning border border-warning";
            case "failed": case "refunded": return "bg-danger-subtle text-danger border border-danger";
            default: return "bg-light text-dark";
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "online": return "ti-video text-primary";
            case "clinic": return "ti-building-hospital text-success";
            default: return "ti-currency-rupee text-dark";
        }
    };

    const summaryCards = [
        { label: "Total Earnings", value: `₹${summary.totalEarnings.toLocaleString()}`, icon: "ti-currency-rupee", color: "text-primary", bg: "bg-primary-subtle" },
        { label: "This Month", value: `₹${summary.thisMonth.toLocaleString()}`, icon: "ti-calendar-stats", color: "text-success", bg: "bg-success-subtle" },
        { label: "Pending", value: `₹${summary.pending.toLocaleString()}`, icon: "ti-clock", color: "text-warning", bg: "bg-warning-subtle" },
        { label: "Total Appointments", value: summary.totalAppointments, icon: "ti-stethoscope", color: "text-info", bg: "bg-info-subtle" },
    ];

    return (
        <div className="page-wrapper">
            <div className="content">
                {/* Header */}
                <div className="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom">
                    <h4 className="fw-bold mb-0">Transactions</h4>
                </div>

                {/* Summary Cards */}
                <div className="row mb-4">
                    {summaryCards.map((card, i) => (
                        <div className="col-lg-3 col-sm-6 mb-3" key={i}>
                            <div className="card border mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <div className={`avatar avatar-lg rounded ${card.bg} d-flex align-items-center justify-content-center`}>
                                        <i className={`ti ${card.icon} ${card.color} fs-20`} />
                                    </div>
                                    <div>
                                        <p className="text-muted fs-13 mb-1">{card.label}</p>
                                        <h5 className="fw-bold mb-0">{card.value}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <div className="d-flex align-items-center gap-2">
                        <div className="input-group" style={{ width: "240px" }}>
                            <span className="input-group-text bg-white border-end-0">
                                <i className="ti ti-search text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0 ps-0"
                                placeholder="Search patient, ID..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        {["all", "online", "clinic"].map((type) => (
                            <button
                                key={type}
                                className={`btn btn-sm ${filterType === type ? "btn-primary" : "btn-outline-secondary"} fs-13`}
                                onClick={() => setFilterType(type)}
                            >
                                {type === "all" ? "All" : type === "online" ? "Online" : "Clinic"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <div className="card border mb-0">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="ps-3">Transaction ID</th>
                                        <th>Patient</th>
                                        <th>Date</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr><td colSpan={6} className="text-center py-5">
                                            <div className="spinner-border text-primary" />
                                        </td></tr>
                                    ) : filtered.length === 0 ? (
                                        <tr><td colSpan={6} className="text-center py-5">
                                            <i className="ti ti-receipt-off fs-1 text-muted d-block mb-2" />
                                            <p className="text-muted mb-0">No transactions found</p>
                                        </td></tr>
                                    ) : (
                                        filtered.map((t, i) => (
                                            <tr key={i}>
                                                <td className="ps-3">
                                                    <span className="text-primary fw-medium fs-13">#{t.transactionId || t._id?.slice(-6).toUpperCase()}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                                            style={{ width: "34px", height: "34px", fontSize: "14px", flexShrink: 0 }}>
                                                            {t.patientName?.charAt(0)?.toUpperCase() || "P"}
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fs-14 fw-medium">{t.patientName || "Unknown"}</p>
                                                            <span className="text-muted fs-12">{t.patientPhone || ""}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="fs-13 text-muted">{dayjs(t.date || t.createdAt).format("DD MMM YYYY")}</td>
                                                <td>
                                                    <span className="d-flex align-items-center gap-1 fs-13">
                                                        <i className={`ti ${getTypeIcon(t.type)} fs-14`} />
                                                        {t.type === "online" ? "Online" : t.type === "clinic" ? "Clinic" : t.type || "N/A"}
                                                    </span>
                                                </td>
                                                <td className="fw-semibold fs-14">₹{(t.amount || 0).toLocaleString()}</td>
                                                <td>
                                                    <span className={`badge fw-medium fs-12 ${getStatusBadge(t.status)}`}>
                                                        {t.status || "Pending"}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer text-center bg-white p-2 border-top mt-4">
                <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
            </div>
        </div>
    );
};

export default DoctorsTransactions;