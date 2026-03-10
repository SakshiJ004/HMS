import { useState, useEffect } from "react";
import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";

const DoctorsAccountSettings = () => {
    const [email, setEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [twoFA, setTwoFA] = useState(false);
    const [loginAlerts, setLoginAlerts] = useState(true);

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

    useEffect(() => { fetchProfile(); }, []);

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${BACKEND_URL}/api/doctors/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setEmail(data.data?.email || "");
                setTwoFA(data.data?.twoFAEnabled || false);
                setLoginAlerts(data.data?.loginAlerts ?? true);
            }
        } catch (err) {
            console.error("Failed to fetch profile:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleEmailUpdate = async () => {
        if (!newEmail) { setErrorMsg("Please enter a new email address"); return; }
        if (!/\S+@\S+\.\S+/.test(newEmail)) { setErrorMsg("Please enter a valid email address"); return; }
        if (newEmail === email) { setErrorMsg("New email is same as current email"); return; }

        setSaving(true); setErrorMsg(""); setSuccessMsg("");
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${BACKEND_URL}/api/doctors/update-email`, {
                method: "PUT",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ email: newEmail }),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setEmail(newEmail); setNewEmail("");
                setSuccessMsg("✅ Email updated successfully!");
                setTimeout(() => setSuccessMsg(""), 4000);
            } else {
                setErrorMsg(data.message || "Failed to update email");
            }
        } catch { setErrorMsg("Unable to connect to server."); }
        finally { setSaving(false); }
    };

    const handleSecuritySave = async () => {
        setSaving(true); setErrorMsg(""); setSuccessMsg("");
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${BACKEND_URL}/api/doctors/update-security`, {
                method: "PUT",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ twoFAEnabled: twoFA, loginAlerts }),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setSuccessMsg("✅ Security settings saved!");
                setTimeout(() => setSuccessMsg(""), 4000);
            } else {
                setErrorMsg(data.message || "Failed to save settings");
            }
        } catch { setErrorMsg("Unable to connect to server."); }
        finally { setSaving(false); }
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="mb-3 border-bottom pb-3">
                    <h4 className="fw-bold mb-0">Settings</h4>
                </div>

                {successMsg && (
                    <div className="alert alert-success d-flex align-items-center">
                        <i className="ti ti-circle-check me-2 fs-16" />
                        <span className="flex-grow-1">{successMsg}</span>
                        <button type="button" className="btn-close ms-2" onClick={() => setSuccessMsg("")} />
                    </div>
                )}
                {errorMsg && (
                    <div className="alert alert-danger d-flex align-items-center">
                        <i className="ti ti-alert-circle me-2 fs-16" />
                        <span className="flex-grow-1">{errorMsg}</span>
                        <button type="button" className="btn-close ms-2" onClick={() => setErrorMsg("")} />
                    </div>
                )}

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            {/* Sidebar */}
                            <div className="col-lg-3">
                                <div className="text-start">
                                    <Link to={all_routes.doctorsprofilesettings}
                                        className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start">
                                        <i className="ti ti-user-cog me-2 text-dark" /> Profile Settings
                                    </Link>
                                    <Link to={all_routes.doctorspasswordsettings}
                                        className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start">
                                        <i className="ti ti-lock-star me-2 text-dark" /> Change Password
                                    </Link>
                                    <Link to={all_routes.doctorsnotificationsettings}
                                        className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start">
                                        <i className="ti ti-bell me-2 text-dark" /> Notifications
                                    </Link>
                                    <Link to={all_routes.doctorsaccountsettings}
                                        className="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1">
                                        <i className="ti ti-settings me-2 text-primary" /> Account Settings
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="col-lg-9">
                                <div className="border-1 border-start ps-4">
                                    <h5 className="fw-bold pb-3 mb-4 border-1 border-bottom">Account Settings</h5>

                                    {loading ? (
                                        <div className="text-center py-4"><div className="spinner-border text-primary" /></div>
                                    ) : (
                                        <>
                                            {/* Email Section */}
                                            <div className="border-bottom pb-4 mb-4">
                                                <h6 className="fw-semibold mb-3">
                                                    <i className="ti ti-mail me-2 text-primary" />Email Address
                                                </h6>
                                                <div className="row align-items-center mb-2">
                                                    <div className="col-lg-3">
                                                        <label className="form-label mb-0 text-muted fs-13">Current Email</label>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="form-control bg-light text-muted fs-14">{email || "Not set"}</span>
                                                            <span className="badge bg-success-subtle text-success border border-success fs-12">Verified</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center mb-3">
                                                    <div className="col-lg-3">
                                                        <label className="form-label mb-0 fs-13">New Email</label>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Enter new email address"
                                                            value={newEmail}
                                                            onChange={(e) => { setNewEmail(e.target.value); setErrorMsg(""); }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <button className="btn btn-primary btn-md fs-13" onClick={handleEmailUpdate} disabled={saving}>
                                                        {saving ? <><span className="spinner-border spinner-border-sm me-2" />Updating...</> : "Update Email"}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Security Section */}
                                            <div className="pb-3">
                                                <h6 className="fw-semibold mb-3">
                                                    <i className="ti ti-shield-lock me-2 text-primary" />Security
                                                </h6>

                                                <div className="d-flex align-items-center justify-content-between border rounded p-3 mb-3">
                                                    <div>
                                                        <h6 className="fs-14 fw-semibold mb-1">Two-Factor Authentication</h6>
                                                        <p className="fs-13 text-muted mb-0">Add extra security to your account</p>
                                                    </div>
                                                    <div className="form-check form-switch mb-0">
                                                        <input className="form-check-input" type="checkbox" style={{ width: "40px", height: "20px" }}
                                                            checked={twoFA} onChange={() => setTwoFA(!twoFA)} />
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-between border rounded p-3 mb-4">
                                                    <div>
                                                        <h6 className="fs-14 fw-semibold mb-1">Login Alerts</h6>
                                                        <p className="fs-13 text-muted mb-0">Get notified of new login attempts</p>
                                                    </div>
                                                    <div className="form-check form-switch mb-0">
                                                        <input className="form-check-input" type="checkbox" style={{ width: "40px", height: "20px" }}
                                                            checked={loginAlerts} onChange={() => setLoginAlerts(!loginAlerts)} />
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end">
                                                    <button className="btn btn-primary btn-md fs-13" onClick={handleSecuritySave} disabled={saving}>
                                                        {saving ? <><span className="spinner-border spinner-border-sm me-2" />Saving...</> : "Save Security Settings"}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Danger Zone */}
                                            <div className="border border-danger rounded p-3 mt-2">
                                                <h6 className="fw-semibold text-danger mb-2">
                                                    <i className="ti ti-alert-triangle me-2" />Danger Zone
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p className="fs-14 fw-medium mb-1">Deactivate Account</p>
                                                        <p className="fs-13 text-muted mb-0">Temporarily disable your account</p>
                                                    </div>
                                                    <button className="btn btn-outline-danger btn-sm fs-13">Deactivate</button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer text-center bg-white p-2 border-top">
                <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
            </div>
        </div>
    );
};

export default DoctorsAccountSettings;