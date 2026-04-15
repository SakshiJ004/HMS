// import { Link } from "react-router"
// import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"
// import Modals from "./modals/modals"


// const SecuritySettings = () => {
//   return (
//     <>
//   {/* ========================
// 			Start Page Content
// 		========================= */}
//   <div className="page-wrapper">
//     {/* Start Content */}
//     <div className="content" id="profilePage">
//       {/* Page Header */}
//       <div className="mb-3 border-bottom pb-3">
//         <h4 className="fw-bold mb-0">Settings</h4>
//       </div>
//       {/* End Page Header */}
//       <div className="card">
//         <div className="card-body p-0">
//           <div className="settings-wrapper d-flex">
//             {/* Start Settings Sidebar */}
//            <SettingsSidebar/>
//             {/* End Settings Sidebar */}
//             <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
//               <div className="card-header border-bottom px-0 mx-3">
//                 <div className="d-flex">
//                   <h5 className="fw-bold">Security</h5>
//                 </div>
//               </div>
//               <div className="card-body px-0 mx-3">
//                 {/* start row */}
//                 <div className="row">
//                   <div className="col-lg-8">
//                     <div>
//                       <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
//                         <div className="d-flex align-items-center">
//                           <div>
//                             <h5 className="fs-16 fw-semibold mb-1">Password</h5>
//                             <p className="fs-14">
//                               Set a unique password to secure the account
//                             </p>
//                           </div>
//                         </div>
//                         <div className="d-flex align-items-center">
//                           <Link
//                             to="#"
//                             data-bs-toggle="modal"
//                             data-bs-target="#change_password"
//                           >
//                             <span className="btn btn-md btn-light p-1 shadow-sm border">
//                               <i className="ti ti-edit" />
//                             </span>
//                           </Link>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
//                         <div className="d-flex align-items-center">
//                           <div>
//                             <h5 className="fs-16 fw-semibold mb-1">
//                               Two Factor Authentication
//                             </h5>
//                             <p className="fs-14">
//                               Use your mobile phone to receive security PIN.
//                             </p>
//                           </div>
//                         </div>
//                         <div className="d-flex align-items-center">
//                           <label className="d-flex align-items-center form-switch ps-3">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                           </label>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
//                         <div className="d-flex align-items-center">
//                           <div>
//                             <h5 className="fs-16 fw-semibold mb-1">
//                               Google Authentication
//                             </h5>
//                             <p className="fs-14">Connect to Google</p>
//                           </div>
//                         </div>
//                         <div className="d-flex align-items-center">
//                           <label className="d-flex align-items-center form-switch ps-3">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                           </label>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
//                         <div className="d-flex align-items-center">
//                           <div>
//                             <h5 className="fs-16 fw-semibold mb-1">
//                               Phone Number
//                             </h5>
//                             <p className="fs-14">
//                               Phone Number associated with the account
//                             </p>
//                           </div>
//                         </div>
//                         <div className="d-flex align-items-center">
//                           <Link
//                             to="#"
//                             className="me-3"
//                             data-bs-toggle="modal"
//                             data-bs-target="#phone_verification"
//                           >
//                             <span className="btn btn-md btn-light border shadow-sm p-1">
//                               <i className="ti ti-edit" />
//                             </span>
//                           </Link>
//                           <Link to="#">
//                             <span className="btn btn-md btn-light border shadow-sm p-1">
//                               <i className="ti ti-trash" />
//                             </span>
//                           </Link>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
//                         <div className="d-flex align-items-center">
//                           <div>
//                             <h5 className="fs-16 fw-semibold mb-1">
//                               Email Address
//                             </h5>
//                             <p className="fs-14">
//                               Email Address associated with the account
//                             </p>
//                           </div>
//                         </div>
//                         <div className="d-flex align-items-center">
//                           <Link
//                             to="#"
//                             className="me-3"
//                             data-bs-toggle="modal"
//                             data-bs-target="#email_verification"
//                           >
//                             <span className="btn btn-md btn-light border shadow-sm p-1">
//                               <i className="ti ti-edit" />
//                             </span>
//                           </Link>
//                           <Link to="#">
//                             <span className="btn btn-md btn-light border shadow-sm p-1">
//                               <i className="ti ti-trash" />
//                             </span>
//                           </Link>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
//                         <div className="d-flex align-items-center">
//                           <div>
//                             <h5 className="fs-16 fw-semibold mb-1">
//                               Deactivate Account
//                             </h5>
//                             <p className="fs-14">
//                               ​Your account will be deactivated and reactivated
//                               upon signing in again.
//                             </p>
//                           </div>
//                         </div>
//                         <Link to="#">
//                           <span className="btn btn-md btn-light border shadow-sm p-1">
//                             <i className="ti ti-ban" />
//                           </span>
//                         </Link>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//                         <div className="d-flex align-items-center">
//                           <div>
//                             <h5 className="fs-16 fw-semibold mb-1">
//                               Delete Account
//                             </h5>
//                             <p className="fs-14">
//                               Your account will be permanently deleted
//                             </p>
//                           </div>
//                         </div>
//                         <Link
//                           to="#"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_modal"
//                         >
//                           <span className="btn btn-md btn-light border shadow-sm p-1">
//                             <i className="ti ti-trash" />
//                           </span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-lg-4">
//                     <div className="card bg-light">
//                       <div className="card-body">
//                         <div className="mb-3">
//                           <h6 className="fs-14 fw-semibold">
//                             Browsers &amp; Devices
//                           </h6>
//                           <p className="mb-1">
//                             The associated browsers &amp; devices
//                           </p>
//                           <Link
//                             to="#"
//                             className="btn btn-primary"
//                           >
//                             <i className="ti ti-logout me-1" />
//                             Sign out from all
//                           </Link>
//                         </div>
//                         <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
//                           <div>
//                             <h6 className="fs-14 fw-semibold">
//                               Chrome - Windows
//                             </h6>
//                             <span className="fs-13">30 Apr 2025, 11:15 AM</span>
//                           </div>
//                           <Link
//                             to="#"
//                             className="btn btn-md bg-white border shadow-sm p-1"
//                           >
//                             <i className="ti ti-logout" />
//                           </Link>
//                         </div>
//                         <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
//                           <div>
//                             <h6 className="fs-14 fw-semibold">Safari Macos</h6>
//                             <span className="fs-13">30 Apr 2025, 11:15 AM</span>
//                           </div>
//                           <Link
//                             to="#"
//                             className="btn btn-md bg-white border shadow-sm p-1"
//                           >
//                             <i className="ti ti-logout" />
//                           </Link>
//                         </div>
//                         <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
//                           <div>
//                             <h6 className="fs-14 fw-semibold">
//                               Chrome - Windows
//                             </h6>
//                             <span className="fs-13">30 Apr 2025, 11:15 AM</span>
//                           </div>
//                           <Link
//                             to="#"
//                             className="btn btn-md bg-white border shadow-sm p-1"
//                           >
//                             <i className="ti ti-logout" />
//                           </Link>
//                         </div>
//                         <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
//                           <div>
//                             <h6 className="fs-14 fw-semibold">
//                               Chrome - Windows
//                             </h6>
//                             <span className="fs-13">19 Mar 2025, 02:50 PM</span>
//                           </div>
//                           <Link
//                             to="#"
//                             className="btn btn-md bg-white border shadow-sm p-1"
//                           >
//                             <i className="ti ti-logout" />
//                           </Link>
//                         </div>
//                         <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
//                           <div>
//                             <h6 className="fs-14 fw-semibold">
//                               Firefox Windows
//                             </h6>
//                             <span className="fs-13">20 Feb 2025, 06:20 PM</span>
//                           </div>
//                           <Link
//                             to="#"
//                             className="btn btn-md bg-white border shadow-sm p-1"
//                           >
//                             <i className="ti ti-logout" />
//                           </Link>
//                         </div>
//                         <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
//                           <div>
//                             <h6 className="fs-14 fw-semibold">
//                               Chrome - Windows
//                             </h6>
//                             <span className="fs-13">18 Jan 2025, 03:15 PM</span>
//                           </div>
//                           <Link
//                             to="#"
//                             className="btn btn-md bg-white border shadow-sm p-1"
//                           >
//                             <i className="ti ti-logout" />
//                           </Link>
//                         </div>
//                         <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
//                           <div>
//                             <h6 className="fs-14 fw-semibold">Safari Macos</h6>
//                             <span className="fs-13">02 Jan 2025, 09:30 AM</span>
//                           </div>
//                           <Link
//                             to="#"
//                             className="btn btn-md bg-white border shadow-sm p-1"
//                           >
//                             <i className="ti ti-logout" />
//                           </Link>
//                         </div>
//                         <div className="d-flex align-items-center justify-content-between p-2">
//                           <div>
//                             <h6 className="fs-14 fw-semibold">
//                               Firefox Windows
//                             </h6>
//                             <span className="fs-13">28 Dec 2024, 05:40 PM</span>
//                           </div>
//                           <Link
//                             to="#"
//                             className="btn btn-md bg-white border shadow-sm p-1"
//                           >
//                             <i className="ti ti-logout" />
//                           </Link>
//                         </div>
//                       </div>
//                       {/* end card */}
//                     </div>
//                     {/* end card */}
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//               </div>
//               {/* end card body */}
//             </div>
//             {/* end card */}
//           </div>
//         </div>
//         {/* end card body */}
//       </div>
//       {/* end card */}
//     </div>
//     {/* End Content */}
//     {/* Footer Start */}
//     <div className="footer text-center bg-white p-2 border-top">
//       <p className="text-dark mb-0">
//         2025 ©
//         <Link to="#" className="link-primary">
//           Preclinic
//         </Link>
//         , All Rights Reserved
//       </p>
//     </div>
//     {/* Footer End */}
//   </div>
//   {/* ========================
// 			End Page Content
// 		========================= */}
//         <Modals/>
// </>

//   )
// }

// export default SecuritySettings


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import {
  getSecuritySettings,
  toggleTwoFA,
  toggleLoginAlerts,
  removePhone,
  deactivateAccount,
  type ISecuritySettings,
} from "../../../../../../api/securityService";
import Modals from "./modals/modals";

// ─── Toast ────────────────────────────────────────────────────────────────────
const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "danger";
  onClose: () => void;
}) => (
  <div
    className={`alert alert-${type} alert-dismissible d-flex align-items-center`}
    style={{
      position: "fixed",
      top: 20,
      right: 20,
      zIndex: 9999,
      minWidth: 320,
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    }}
  >
    <i
      className={`ti ti-${type === "success" ? "circle-check" : "alert-circle"
        } me-2 fs-18`}
    />
    {message}
    <button type="button" className="btn-close ms-auto" onClick={onClose} />
  </div>
);

// ─── Toggle Switch Component ──────────────────────────────────────────────────
// ✅ Proper sliding toggle — blue dot slides right when ON
const ToggleSwitch = ({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}) => (
  <div
    onClick={!disabled ? onChange : undefined}
    style={{
      width: 44,
      height: 24,
      borderRadius: 12,
      background: checked ? "#4f46e5" : "#d1d5db",
      position: "relative",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 0.25s ease",
      opacity: disabled ? 0.6 : 1,
      flexShrink: 0,
    }}
  >
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: "#fff",
        position: "absolute",
        top: 3,
        left: checked ? 23 : 3,
        transition: "left 0.25s ease",
        boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
      }}
    />
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const SecuritySettings = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState<ISecuritySettings>({
    email: "",
    phone: "",
    twoFAEnabled: false,
    loginAlerts: true,
    status: "Available",
  });
  const [loading, setLoading] = useState(true);
  // ✅ Separate loading states for each toggle — so they don't block each other
  const [toggling2FA, setToggling2FA] = useState(false);
  const [togglingAlerts, setTogglingAlerts] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "danger";
  } | null>(null);

  const showToast = (message: string, type: "success" | "danger" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // ── Load on mount ───────────────────────────────────────────────────────
  useEffect(() => {
    getSecuritySettings()
      .then((data) => setSettings(data))
      .catch(() => showToast("Failed to load security settings.", "danger"))
      .finally(() => setLoading(false));
  }, []);

  // ── Toggle 2FA ──────────────────────────────────────────────────────────
  // ✅ Only updates twoFAEnabled — loginAlerts stays exactly as is
  const handleToggle2FA = async () => {
    if (toggling2FA) return;
    setToggling2FA(true);
    // Optimistic update
    const prev2FA = settings.twoFAEnabled;
    setSettings((p) => ({ ...p, twoFAEnabled: !p.twoFAEnabled }));
    try {
      const res = await toggleTwoFA();
      // Use server response to confirm — loginAlerts from server (unchanged)
      setSettings((p) => ({
        ...p,
        twoFAEnabled: res.twoFAEnabled,
        // ✅ loginAlerts is NOT changed — keep existing value
      }));
      showToast(`Two Factor Authentication ${res.twoFAEnabled ? "enabled" : "disabled"}`);
    } catch (err: any) {
      // Revert on error
      setSettings((p) => ({ ...p, twoFAEnabled: prev2FA }));
      showToast(err?.response?.data?.message ?? "Failed to update 2FA.", "danger");
    } finally {
      setToggling2FA(false);
    }
  };

  // ── Toggle Login Alerts ─────────────────────────────────────────────────
  // ✅ Only updates loginAlerts — twoFAEnabled stays exactly as is
  const handleToggleLoginAlerts = async () => {
    if (togglingAlerts) return;
    setTogglingAlerts(true);
    // Optimistic update
    const prevAlerts = settings.loginAlerts;
    setSettings((p) => ({ ...p, loginAlerts: !p.loginAlerts }));
    try {
      const res = await toggleLoginAlerts();
      // Use server response — twoFAEnabled is NOT changed
      setSettings((p) => ({
        ...p,
        loginAlerts: res.loginAlerts,
        // ✅ twoFAEnabled is NOT changed — keep existing value
      }));
      showToast(`Login alerts ${res.loginAlerts ? "enabled" : "disabled"}`);
    } catch (err: any) {
      // Revert on error
      setSettings((p) => ({ ...p, loginAlerts: prevAlerts }));
      showToast(err?.response?.data?.message ?? "Failed to update.", "danger");
    } finally {
      setTogglingAlerts(false);
    }
  };

  // ── Remove Phone ────────────────────────────────────────────────────────
  const handleRemovePhone = async () => {
    if (!window.confirm("Remove your phone number?")) return;
    try {
      await removePhone();
      setSettings((p) => ({ ...p, phone: "" }));
      showToast("Phone number removed.");
    } catch (err: any) {
      showToast(err?.response?.data?.message ?? "Failed to remove phone.", "danger");
    }
  };

  // ── Deactivate ──────────────────────────────────────────────────────────
  const handleDeactivate = async () => {
    if (!window.confirm("Deactivate your account? You can reactivate by signing in again.")) return;
    try {
      await deactivateAccount();
      localStorage.clear();
      sessionStorage.clear();
      showToast("Account deactivated.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err: any) {
      showToast(err?.response?.data?.message ?? "Failed to deactivate.", "danger");
    }
  };

  // ── Callbacks for Modals ────────────────────────────────────────────────
  const handlePhoneUpdated = (phone: string) =>
    setSettings((p) => ({ ...p, phone }));

  const handleEmailUpdated = (email: string) => {
    setSettings((p) => ({ ...p, email }));
    showToast("Email updated. Logging out...");
    setTimeout(() => {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login");
    }, 2000);
  };

  const handleAccountDeleted = () => {
    localStorage.clear();
    sessionStorage.clear();
    showToast("Account deleted.");
    setTimeout(() => navigate("/login"), 1500);
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div
          className="content d-flex align-items-center justify-content-center"
          style={{ minHeight: 400 }}
        >
          <div className="spinner-border text-primary" />
        </div>
      </div>
    );
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="page-wrapper">
        <div className="content" id="profilePage">
          <div className="mb-3 border-bottom pb-3">
            <h4 className="fw-bold mb-0">Settings</h4>
          </div>

          <div className="card">
            <div className="card-body p-0">
              <div className="settings-wrapper d-flex">
                <SettingsSidebar />

                <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                  <div className="card-header border-bottom px-0 mx-3">
                    <h5 className="fw-bold">Security</h5>
                  </div>

                  <div className="card-body px-0 mx-3">
                    <div className="row">
                      <div className="col-lg-8">
                        <div>
                          {/* ── Password ─────────────────────────── */}
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                            <div>
                              <h5 className="fs-16 fw-semibold mb-1">Password</h5>
                              <p className="fs-14 mb-0">Set a unique password to secure the account</p>
                            </div>
                            <Link to="#" data-bs-toggle="modal" data-bs-target="#change_password">
                              <span className="btn btn-md btn-light p-1 shadow-sm border">
                                <i className="ti ti-edit" />
                              </span>
                            </Link>
                          </div>

                          {/* ── Two Factor Auth ───────────────────── */}
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                            <div>
                              <h5 className="fs-16 fw-semibold mb-1">Two Factor Authentication</h5>
                              <p className="fs-14 mb-0">Use your mobile phone to receive security PIN.</p>
                              <small className={`mt-1 d-block ${settings.twoFAEnabled ? "text-success" : "text-muted"}`}>
                                {settings.twoFAEnabled ? "● Enabled" : "○ Disabled"}
                              </small>
                            </div>
                            <ToggleSwitch
                              checked={settings.twoFAEnabled}
                              onChange={handleToggle2FA}
                              disabled={toggling2FA}
                            />
                          </div>

                          {/* ── Google Auth ───────────────────────── */}
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                            <div>
                              <h5 className="fs-16 fw-semibold mb-1">Google Authentication</h5>
                              <p className="fs-14 mb-0">Receive login alert notifications</p>
                              <small className={`mt-1 d-block ${settings.loginAlerts ? "text-success" : "text-muted"}`}>
                                {settings.loginAlerts ? "● Enabled" : "○ Disabled"}
                              </small>
                            </div>
                            <ToggleSwitch
                              checked={settings.loginAlerts}
                              onChange={handleToggleLoginAlerts}
                              disabled={togglingAlerts}
                            />
                          </div>

                          {/* ── Phone Number ──────────────────────── */}
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                            <div>
                              <h5 className="fs-16 fw-semibold mb-1">Phone Number</h5>
                              <p className="fs-14 mb-0">
                                {settings.phone ? (
                                  <span className="fw-medium text-dark">{settings.phone}</span>
                                ) : (
                                  <span className="text-muted">No phone number set</span>
                                )}
                              </p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                              <Link to="#" data-bs-toggle="modal" data-bs-target="#phone_verification">
                                <span className="btn btn-md btn-light border shadow-sm p-1">
                                  <i className="ti ti-edit" />
                                </span>
                              </Link>
                              {settings.phone && (
                                <button
                                  className="btn btn-md btn-light border shadow-sm p-1"
                                  onClick={handleRemovePhone}
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              )}
                            </div>
                          </div>

                          {/* ── Email Address ─────────────────────── */}
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                            <div>
                              <h5 className="fs-16 fw-semibold mb-1">Email Address</h5>
                              <p className="fs-14 mb-0">
                                {settings.email ? (
                                  <span className="fw-medium text-dark">{settings.email}</span>
                                ) : (
                                  <span className="text-muted">No email set</span>
                                )}
                              </p>
                            </div>
                            <Link to="#" data-bs-toggle="modal" data-bs-target="#email_verification">
                              <span className="btn btn-md btn-light border shadow-sm p-1">
                                <i className="ti ti-edit" />
                              </span>
                            </Link>
                          </div>

                          {/* ── Deactivate ────────────────────────── */}
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                            <div>
                              <h5 className="fs-16 fw-semibold mb-1">Deactivate Account</h5>
                              <p className="fs-14 mb-0">
                                Your account will be deactivated and reactivated upon signing in again.
                              </p>
                            </div>
                            <button
                              className="btn btn-md btn-light border shadow-sm p-1"
                              onClick={handleDeactivate}
                            >
                              <i className="ti ti-ban" />
                            </button>
                          </div>

                          {/* ── Delete Account ────────────────────── */}
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <div>
                              <h5 className="fs-16 fw-semibold mb-1 text-danger">Delete Account</h5>
                              <p className="fs-14 mb-0">Your account will be permanently deleted</p>
                            </div>
                            <Link to="#" data-bs-toggle="modal" data-bs-target="#delete_modal">
                              <span className="btn btn-md btn-light border shadow-sm p-1">
                                <i className="ti ti-trash text-danger" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* ── Browsers & Devices ───────────────────── */}
                      <div className="col-lg-4">
                        <div className="card bg-light">
                          <div className="card-body">
                            <div className="mb-3">
                              <h6 className="fs-14 fw-semibold">Browsers &amp; Devices</h6>
                              <p className="mb-1">The associated browsers &amp; devices</p>
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  localStorage.clear();
                                  sessionStorage.clear();
                                  navigate("/login");
                                }}
                              >
                                <i className="ti ti-logout me-1" />
                                Sign out from all
                              </button>
                            </div>
                            {[
                              { browser: "Chrome - Windows", time: "30 Apr 2025, 11:15 AM" },
                              { browser: "Safari Macos", time: "30 Apr 2025, 11:15 AM" },
                              { browser: "Chrome - Windows", time: "30 Apr 2025, 11:15 AM" },
                              { browser: "Chrome - Windows", time: "19 Mar 2025, 02:50 PM" },
                              { browser: "Firefox Windows", time: "20 Feb 2025, 06:20 PM" },
                              { browser: "Chrome - Windows", time: "18 Jan 2025, 03:15 PM" },
                              { browser: "Safari Macos", time: "02 Jan 2025, 09:30 AM" },
                              { browser: "Firefox Windows", time: "28 Dec 2024, 05:40 PM" },
                            ].map((s, i, arr) => (
                              <div
                                key={i}
                                className={`d-flex align-items-center justify-content-between p-2 ${i < arr.length - 1 ? "border-bottom" : ""
                                  }`}
                              >
                                <div>
                                  <h6 className="fs-14 fw-semibold">{s.browser}</h6>
                                  <span className="fs-13">{s.time}</span>
                                </div>
                                <button
                                  className="btn btn-md bg-white border shadow-sm p-1"
                                  onClick={() => showToast("Session terminated.")}
                                >
                                  <i className="ti ti-logout" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
      </div>

      <Modals
        onSuccess={showToast}
        onError={(msg) => showToast(msg, "danger")}
        currentEmail={settings.email}
        currentPhone={settings.phone}
        onPhoneUpdated={handlePhoneUpdated}
        onEmailUpdated={handleEmailUpdated}
        onAccountDeleted={handleAccountDeleted}
      />
    </>
  );
};

export default SecuritySettings;