// import { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// type PasswordField = "password" | "confirmPassword" | "newpassword";

// const Modals = () => {
//   const [passwordVisibility, setPasswordVisibility] = useState({
//     password: false,
//     confirmPassword: false,
//     newpassword: false,
//   });

//   const togglePasswordVisibility = (field: PasswordField) => {
//     setPasswordVisibility((prevState) => ({
//       ...prevState,
//       [field]: !prevState[field],
//     }));
//   };
// const [phone, setPhone] = useState<string | undefined>()
//   return (
//     <>
//       <div id="change_password" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title fw-bold">Change Password</h4>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="fa-solid fa-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Current Password<span className="text-danger ms-1">*</span>
//                   </label>
//                   <div className="pass-group input-group">
//                     <span className="input-group-text border-end-0">
//                       <i className="ti ti-lock" />
//                     </span>
//                     <input
//                       type={passwordVisibility.password ? "text" : "password"}
//                       className="pass-input form-control border-start-0 ps-0"
//                       placeholder="****************"
//                     />
//                     <span
//                       className={`ti toggle-password text-dark fs-14 ${
//                         passwordVisibility.password ? "ti-eye" : "ti-eye-off"
//                       }`}
//                       onClick={() => togglePasswordVisibility("password")}
//                     ></span>
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     New Password<span className="text-danger ms-1">*</span>
//                   </label>
//                   <div className="pass-group input-group mb-3">
//                     <span className="input-group-text border-end-0">
//                       <i className="ti ti-lock" />
//                     </span>
//                     <input
//                       type={
//                         passwordVisibility.confirmPassword ? "text" : "password"
//                       }
//                       className="pass-input form-control border-start-0 ps-0"
//                       placeholder="****************"
//                     />
//                     <span
//                       className={`ti toggle-password text-dark fs-14 ${
//                         passwordVisibility.confirmPassword
//                           ? "ti-eye"
//                           : "ti-eye-off"
//                       }`}
//                       onClick={() =>
//                         togglePasswordVisibility("confirmPassword")
//                       }
//                     ></span>
//                   </div>
//                   <div
//                     className="password-strength d-flex"
//                     id="passwordStrength"
//                   >
//                     <span id="poor" />
//                     <span id="weak" />
//                     <span id="strong" />
//                     <span id="heavy" />
//                   </div>
//                   <div id="passwordInfo" className="mb-2" />
//                   <p className="text-gray-5">
//                     Use 8 or more characters with a mix of letters, numbers
//                     &amp; symbols.
//                   </p>
//                 </div>
//                 <div>
//                   <label className="form-label">
//                     Confirm Password<span className="text-danger ms-1">*</span>
//                   </label>
//                   <div className="pass-group input-group">
//                     <span className="input-group-text border-end-0">
//                       <i className="ti ti-lock" />
//                     </span>
//                     <input
//                       type={
//                         passwordVisibility.newpassword ? "text" : "password"
//                       }
//                       className="pass-input form-control border-start-0 ps-0"
//                       placeholder="****************"
//                     />
//                     <span
//                       className={`ti toggle-password text-dark fs-14 ${
//                         passwordVisibility.newpassword ? "ti-eye" : "ti-eye-off"
//                       }`}
//                       onClick={() => togglePasswordVisibility("newpassword")}
//                     ></span>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-outline-white"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div id="phone_verification" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title fw-bold">Change Phone Number</h4>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="fa-solid fa-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Current Phone Number
//                     <span className="text-danger ms-1">*</span>
//                   </label>
//                   <PhoneInput
//                             defaultCountry="US"
//                             value={phone}
//                             onChange={setPhone}
//                           />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     New Phone Number<span className="text-danger ms-1">*</span>
//                   </label>
//                    <PhoneInput
//                             defaultCountry="US"
//                             value={phone}
//                             onChange={setPhone}
//                           />
//                   <p className="mt-2 d-inline-flex align-items-center">
//                     <i className="ti ti-info-circle me-1" />
//                     New phone number only updated once you verified
//                   </p>
//                 </div>
//                 <div>
//                   <label className="form-label">
//                     Current Password<span className="text-danger ms-1">*</span>
//                   </label>
//                   <div className="pass-group input-group">
//                     <span className="input-group-text border-end-0">
//                       <i className="ti ti-lock" />
//                     </span>
//                      <input
//                       type={
//                         passwordVisibility.confirmPassword ? "text" : "password"
//                       }
//                       className="pass-input form-control border-start-0 ps-0"
//                       placeholder="****************"
//                     />
//                     <span
//                       className={`ti toggle-password text-dark fs-14 ${
//                         passwordVisibility.confirmPassword
//                           ? "ti-eye"
//                           : "ti-eye-off"
//                       }`}
//                       onClick={() =>
//                         togglePasswordVisibility("confirmPassword")
//                       }
//                     ></span>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-outline-white"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div id="email_verification" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title fw-bold">Change Email Address</h4>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="fa-solid fa-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Current Email Address
//                     <span className="text-danger ms-1">*</span>
//                   </label>
//                   <input type="email" className="form-control" />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     New Email Address<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input type="email" className="form-control" />
//                   <p className="mt-2 d-inline-flex align-items-center">
//                     <i className="ti ti-info-circle me-1" />
//                     New email address only updated once you verified
//                   </p>
//                 </div>
//                 <div>
//                   <label className="form-label">
//                     Current Password<span className="text-danger ms-1">*</span>
//                   </label>
//                   <div className="pass-group input-group">
//                     <span className="input-group-text border-end-0">
//                       <i className="ti ti-lock" />
//                     </span>
//                     <input
//                       type={
//                         passwordVisibility.confirmPassword ? "text" : "password"
//                       }
//                       className="pass-input form-control border-start-0 ps-0"
//                       placeholder="****************"
//                     />
//                     <span
//                       className={`ti toggle-password text-dark fs-14 ${
//                         passwordVisibility.confirmPassword
//                           ? "ti-eye"
//                           : "ti-eye-off"
//                       }`}
//                       onClick={() =>
//                         togglePasswordVisibility("confirmPassword")
//                       }
//                     ></span>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer d-flex align-items-center justify-content-end gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-outline-white"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div id="two-factor" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered modal-md">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title fw-bold">
//                 SMS Two Factor Authentication
//               </h4>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="fa-solid fa-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Phone Number<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input type="text" className="form-control" id="phone3" />
//                 </div>
//                 <p className="fs-13 mb-0">
//                   By providing your phone number, you agree to receive text
//                   messages from Figma to enable two-factor authentication when
//                   you log in.
//                 </p>
//               </div>
//               <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-outline-white"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Verify
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div id="delete_modal" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered modal-md">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title fw-bold">Delete Account</h4>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="fa-solid fa-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <div className="mb-3">
//                   <p className="text-dark fw-semibold mb-0">
//                     Why Are You Deleting Your Account?
//                   </p>
//                   <p className="fs-13">
//                     We're sorry to see you go! To help us improve, please let us
//                     know your reason for deleting your account
//                   </p>
//                 </div>
//                 <div>
//                   <div className="form-check mb-3 d-flex align-items-center">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="Radio-2"
//                       id="Radio-sm-1"
//                     />
//                     <div className="ms-2">
//                       <p className="text-dark fw-semibold mb-0">
//                         No longer using the service
//                       </p>
//                       <label
//                         className="form-check-label fs-13"
//                         htmlFor="Radio-sm-1"
//                       >
//                         I no longer need this service and won’t be using it in
//                         the future.
//                       </label>
//                     </div>
//                   </div>
//                   <div className="form-check mb-3 d-flex align-items-center">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="Radio-2"
//                       id="Radio-sm-2"
//                     />
//                     <div className="ms-2">
//                       <p className="text-dark fw-semibold mb-0">
//                         Privacy concerns
//                       </p>
//                       <label
//                         className="form-check-label fs-13"
//                         htmlFor="Radio-sm-2"
//                       >
//                         I am concerned about how my data is handled and want to
//                         remove
//                       </label>
//                     </div>
//                   </div>
//                   <div className="form-check mb-3 d-flex align-items-center">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="Radio-2"
//                       id="Radio-sm-3"
//                     />
//                     <div className="ms-2">
//                       <p className="text-dark fw-semibold mb-0">
//                         Too many notifications/emails
//                       </p>
//                       <label
//                         className="form-check-label fs-13"
//                         htmlFor="Radio-sm-3"
//                       >
//                         I’m overwhelmed by the volume of notifications or emails
//                       </label>
//                     </div>
//                   </div>
//                   <div className="form-check mb-3 d-flex align-items-center">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="Radio-2"
//                       id="Radio-sm-4"
//                     />
//                     <div className="ms-2">
//                       <p className="text-dark fw-semibold mb-0">
//                         Poor user experience
//                       </p>
//                       <label
//                         className="form-check-label fs-13"
//                         htmlFor="Radio-sm-4"
//                       >
//                         I’ve had difficulty using the platform, and it didn’t
//                         meet my expectations
//                       </label>
//                     </div>
//                   </div>
//                   <div className="form-check mb-3">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="Radio-2"
//                       id="Radio-sm-5"
//                       defaultChecked
//                     />
//                     <label
//                       className="form-check-label text-dark fw-semibold"
//                       htmlFor="Radio-sm-5"
//                     >
//                       Other (Please specify)
//                     </label>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="form-label">
//                     Reason<span className="text-danger ms-1">*</span>
//                   </label>
//                   <textarea
//                     className="form-control"
//                     rows={3}
//                     defaultValue={""}
//                   />
//                 </div>
//               </div>
//               <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-outline-white"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Confirm &amp; Delete
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modals;



import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  changePassword,
  updatePhone,
  updateEmail,
  deleteAccount,
} from "../../../../../../../api/securityService"

type PasswordField = "password" | "confirmPassword" | "newpassword";

// ─── Password strength helper ─────────────────────────────────────────────────
const getStrength = (pw: string): { level: number; label: string; color: string } => {
  if (!pw) return { level: 0, label: "", color: "" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const map = [
    { level: 1, label: "Poor", color: "#ef4444" },
    { level: 1, label: "Weak", color: "#f97316" },
    { level: 2, label: "Good", color: "#eab308" },
    { level: 3, label: "Strong", color: "#22c55e" },
    { level: 4, label: "Very Strong", color: "#16a34a" },
  ];
  return map[score] || map[0];
};

interface ModalProps {
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
  currentEmail: string;
  currentPhone: string;
  onPhoneUpdated: (phone: string) => void;
  onEmailUpdated: (email: string) => void;
  onAccountDeleted: () => void;
}

const Modals = ({
  onSuccess,
  onError,
  currentEmail,
  currentPhone,
  onPhoneUpdated,
  onEmailUpdated,
  onAccountDeleted,
}: ModalProps) => {
  // ── Password visibility ───────────────────────────────────────────────────
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
    newpassword: false,
  });
  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((p) => ({ ...p, [field]: !p[field] }));
  };

  // ── Change Password form ──────────────────────────────────────────────────
  const [pwForm, setPwForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [savingPw, setSavingPw] = useState(false);
  const strength = getStrength(pwForm.newPassword);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pwForm.currentPassword) return onError("Current password is required.");
    if (pwForm.newPassword.length < 8) return onError("Password must be at least 8 characters.");
    if (pwForm.newPassword !== pwForm.confirmPassword) return onError("Passwords do not match.");
    setSavingPw(true);
    try {
      await changePassword(pwForm);
      setPwForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      // Close modal
      document.getElementById("close-change-password")?.click();
      onSuccess("Password changed successfully!");
    } catch (err: any) {
      onError(err?.response?.data?.message ?? "Failed to change password.");
    } finally {
      setSavingPw(false);
    }
  };

  // ── Phone form ────────────────────────────────────────────────────────────
  const [phoneForm, setPhoneForm] = useState({
    newPhone: "" as string | undefined,
    currentPassword: "",
  });
  const [savingPhone, setSavingPhone] = useState(false);

  const handleUpdatePhone = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneForm.newPhone) return onError("New phone number is required.");
    if (!phoneForm.currentPassword) return onError("Current password is required.");
    setSavingPhone(true);
    try {
      const res = await updatePhone({
        currentPhone,
        newPhone: phoneForm.newPhone,
        currentPassword: phoneForm.currentPassword,
      });
      onPhoneUpdated(res.phone);
      setPhoneForm({ newPhone: "", currentPassword: "" });
      document.getElementById("close-phone-modal")?.click();
      onSuccess("Phone number updated successfully!");
    } catch (err: any) {
      onError(err?.response?.data?.message ?? "Failed to update phone.");
    } finally {
      setSavingPhone(false);
    }
  };

  // ── Email form ────────────────────────────────────────────────────────────
  const [emailForm, setEmailForm] = useState({
    newEmail: "",
    currentPassword: "",
  });
  const [savingEmail, setSavingEmail] = useState(false);

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailForm.newEmail) return onError("New email is required.");
    if (!emailForm.currentPassword) return onError("Current password is required.");
    setSavingEmail(true);
    try {
      const res = await updateEmail({
        currentEmail,
        newEmail: emailForm.newEmail,
        currentPassword: emailForm.currentPassword,
      });
      onEmailUpdated(res.email);
      setEmailForm({ newEmail: "", currentPassword: "" });
      document.getElementById("close-email-modal")?.click();
      onSuccess("Email updated successfully! Please login again.");
    } catch (err: any) {
      onError(err?.response?.data?.message ?? "Failed to update email.");
    } finally {
      setSavingEmail(false);
    }
  };

  // ── Delete Account form ───────────────────────────────────────────────────
  const [deleteForm, setDeleteForm] = useState({
    reason: "",
    reasonText: "",
    currentPassword: "",
  });
  const [deletingAccount, setDeletingAccount] = useState(false);

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deleteForm.currentPassword) return onError("Password is required to delete your account.");
    setDeletingAccount(true);
    try {
      const reason = deleteForm.reason === "Other"
        ? deleteForm.reasonText
        : deleteForm.reason;
      await deleteAccount({
        reason,
        currentPassword: deleteForm.currentPassword,
      });
      document.getElementById("close-delete-modal")?.click();
      onAccountDeleted();
    } catch (err: any) {
      onError(err?.response?.data?.message ?? "Failed to delete account.");
    } finally {
      setDeletingAccount(false);
    }
  };

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ══ CHANGE PASSWORD MODAL ══════════════════════════════════════════ */}
      <div id="change_password" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Change Password</h4>
              <button
                id="close-change-password"
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleChangePassword}>
              <div className="modal-body">
                {/* Current Password */}
                <div className="mb-3">
                  <label className="form-label">
                    Current Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                    <input
                      type={passwordVisibility.password ? "text" : "password"}
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                      value={pwForm.currentPassword}
                      onChange={(e) => setPwForm((p) => ({ ...p, currentPassword: e.target.value }))}
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                        }`}
                      style={{ cursor: "pointer", padding: "0.375rem 0.75rem", border: "1px solid #dee2e6", borderLeft: "none", display: "flex", alignItems: "center" }}
                      onClick={() => togglePasswordVisibility("password")}
                    />
                  </div>
                </div>

                {/* New Password */}
                <div className="mb-3">
                  <label className="form-label">
                    New Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group mb-3">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                    <input
                      type={passwordVisibility.confirmPassword ? "text" : "password"}
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                      value={pwForm.newPassword}
                      onChange={(e) => setPwForm((p) => ({ ...p, newPassword: e.target.value }))}
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"
                        }`}
                      style={{ cursor: "pointer", padding: "0.375rem 0.75rem", border: "1px solid #dee2e6", borderLeft: "none", display: "flex", alignItems: "center" }}
                      onClick={() => togglePasswordVisibility("confirmPassword")}
                    />
                  </div>
                  {/* Password strength bars */}
                  {pwForm.newPassword && (
                    <div className="mb-2">
                      <div className="d-flex gap-1 mb-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            style={{
                              height: 4,
                              flex: 1,
                              borderRadius: 2,
                              background: i <= strength.level ? strength.color : "#e5e7eb",
                              transition: "background 0.3s",
                            }}
                          />
                        ))}
                      </div>
                      <small style={{ color: strength.color }}>{strength.label}</small>
                    </div>
                  )}
                  <p className="text-gray-5">
                    Use 8 or more characters with a mix of letters, numbers &amp; symbols.
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="form-label">
                    Confirm Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                    <input
                      type={passwordVisibility.newpassword ? "text" : "password"}
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                      value={pwForm.confirmPassword}
                      onChange={(e) => setPwForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${passwordVisibility.newpassword ? "ti-eye" : "ti-eye-off"
                        }`}
                      style={{ cursor: "pointer", padding: "0.375rem 0.75rem", border: "1px solid #dee2e6", borderLeft: "none", display: "flex", alignItems: "center" }}
                      onClick={() => togglePasswordVisibility("newpassword")}
                    />
                  </div>
                  {/* Match indicator */}
                  {pwForm.confirmPassword && (
                    <small className={`mt-1 d-block ${pwForm.newPassword === pwForm.confirmPassword ? "text-success" : "text-danger"}`}>
                      {pwForm.newPassword === pwForm.confirmPassword ? "✓ Passwords match" : "✗ Passwords do not match"}
                    </small>
                  )}
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
                <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={savingPw}>
                  {savingPw && <span className="spinner-border spinner-border-sm me-1" />}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ══ PHONE VERIFICATION MODAL ════════════════════════════════════════ */}
      <div id="phone_verification" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Change Phone Number</h4>
              <button
                id="close-phone-modal"
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleUpdatePhone}>
              <div className="modal-body">
                {/* Current Phone (read-only display) */}
                <div className="mb-3">
                  <label className="form-label">
                    Current Phone Number
                    <span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    value={currentPhone || "Not set"}
                    readOnly
                  />
                </div>
                {/* New Phone */}
                <div className="mb-3">
                  <label className="form-label">
                    New Phone Number<span className="text-danger ms-1">*</span>
                  </label>
                  <PhoneInput
                    defaultCountry="IN"
                    value={phoneForm.newPhone}
                    onChange={(val) => setPhoneForm((p) => ({ ...p, newPhone: val }))}
                  />
                  <p className="mt-2 d-inline-flex align-items-center">
                    <i className="ti ti-info-circle me-1" />
                    Phone number updated after verification
                  </p>
                </div>
                {/* Current Password */}
                <div>
                  <label className="form-label">
                    Current Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                    <input
                      type={passwordVisibility.confirmPassword ? "text" : "password"}
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                      value={phoneForm.currentPassword}
                      onChange={(e) => setPhoneForm((p) => ({ ...p, currentPassword: e.target.value }))}
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"}`}
                      style={{ cursor: "pointer", padding: "0.375rem 0.75rem", border: "1px solid #dee2e6", borderLeft: "none", display: "flex", alignItems: "center" }}
                      onClick={() => togglePasswordVisibility("confirmPassword")}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
                <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={savingPhone}>
                  {savingPhone && <span className="spinner-border spinner-border-sm me-1" />}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ══ EMAIL VERIFICATION MODAL ════════════════════════════════════════ */}
      <div id="email_verification" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Change Email Address</h4>
              <button
                id="close-email-modal"
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleUpdateEmail}>
              <div className="modal-body">
                {/* Current Email (read-only) */}
                <div className="mb-3">
                  <label className="form-label">
                    Current Email Address<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="email" className="form-control bg-light" value={currentEmail} readOnly />
                </div>
                {/* New Email */}
                <div className="mb-3">
                  <label className="form-label">
                    New Email Address<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter new email"
                    value={emailForm.newEmail}
                    onChange={(e) => setEmailForm((p) => ({ ...p, newEmail: e.target.value }))}
                  />
                  <p className="mt-2 d-inline-flex align-items-center">
                    <i className="ti ti-info-circle me-1" />
                    You will need to login again after changing email
                  </p>
                </div>
                {/* Current Password */}
                <div>
                  <label className="form-label">
                    Current Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                    <input
                      type={passwordVisibility.confirmPassword ? "text" : "password"}
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                      value={emailForm.currentPassword}
                      onChange={(e) => setEmailForm((p) => ({ ...p, currentPassword: e.target.value }))}
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"}`}
                      style={{ cursor: "pointer", padding: "0.375rem 0.75rem", border: "1px solid #dee2e6", borderLeft: "none", display: "flex", alignItems: "center" }}
                      onClick={() => togglePasswordVisibility("confirmPassword")}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-end gap-1">
                <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={savingEmail}>
                  {savingEmail && <span className="spinner-border spinner-border-sm me-1" />}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ══ DELETE ACCOUNT MODAL ════════════════════════════════════════════ */}
      <div id="delete_modal" className="modal fade">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Delete Account</h4>
              <button
                id="close-delete-modal"
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleDeleteAccount}>
              <div className="modal-body">
                <div className="mb-3">
                  <p className="text-dark fw-semibold mb-0">Why Are You Deleting Your Account?</p>
                  <p className="fs-13">We're sorry to see you go! Please let us know your reason.</p>
                </div>
                {/* Reasons */}
                {[
                  { id: "r1", value: "No longer using the service", desc: "I no longer need this service." },
                  { id: "r2", value: "Privacy concerns", desc: "I'm concerned about how my data is handled." },
                  { id: "r3", value: "Too many notifications/emails", desc: "I'm overwhelmed by the volume of notifications." },
                  { id: "r4", value: "Poor user experience", desc: "The platform didn't meet my expectations." },
                ].map((r) => (
                  <div key={r.id} className="form-check mb-3 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="deleteReason"
                      id={r.id}
                      value={r.value}
                      onChange={(e) => setDeleteForm((p) => ({ ...p, reason: e.target.value }))}
                    />
                    <div className="ms-2">
                      <p className="text-dark fw-semibold mb-0">{r.value}</p>
                      <label className="form-check-label fs-13" htmlFor={r.id}>{r.desc}</label>
                    </div>
                  </div>
                ))}
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="deleteReason"
                    id="r5"
                    value="Other"
                    defaultChecked
                    onChange={(e) => setDeleteForm((p) => ({ ...p, reason: e.target.value }))}
                  />
                  <label className="form-check-label text-dark fw-semibold" htmlFor="r5">Other (Please specify)</label>
                </div>
                {deleteForm.reason === "Other" && (
                  <div className="mb-3">
                    <label className="form-label">Reason<span className="text-danger ms-1">*</span></label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={deleteForm.reasonText}
                      onChange={(e) => setDeleteForm((p) => ({ ...p, reasonText: e.target.value }))}
                      placeholder="Tell us more..."
                    />
                  </div>
                )}
                {/* Password confirmation */}
                <div>
                  <label className="form-label">
                    Enter Password to Confirm<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group">
                    <span className="input-group-text border-end-0"><i className="ti ti-lock" /></span>
                    <input
                      type={passwordVisibility.password ? "text" : "password"}
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                      value={deleteForm.currentPassword}
                      onChange={(e) => setDeleteForm((p) => ({ ...p, currentPassword: e.target.value }))}
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${passwordVisibility.password ? "ti-eye" : "ti-eye-off"}`}
                      style={{ cursor: "pointer", padding: "0.375rem 0.75rem", border: "1px solid #dee2e6", borderLeft: "none", display: "flex", alignItems: "center" }}
                      onClick={() => togglePasswordVisibility("password")}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
                <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-danger" disabled={deletingAccount}>
                  {deletingAccount && <span className="spinner-border spinner-border-sm me-1" />}
                  Confirm &amp; Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;