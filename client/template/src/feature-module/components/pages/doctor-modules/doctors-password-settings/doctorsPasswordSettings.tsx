// import { useState } from "react";
// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// type PasswordField = "password" | "confirmPassword";

// const DoctorsPasswordSettings = () => {
//   const [passwordVisibility, setPasswordVisibility] = useState({
//     password: false,
//     confirmPassword: false,
//   });

//   const togglePasswordVisibility = (field: PasswordField) => {
//     setPasswordVisibility((prevState) => ({
//       ...prevState,
//       [field]: !prevState[field],
//     }));
//   };
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Page Header */}
//           <div className="mb-3 border-bottom pb-3">
//             <h4 className="fw-bold mb-0">Settings</h4>
//           </div>
//           {/* End Page Header */}
//           <div className="card">
//             <div className="card-body">
//               {/* end card body */}
//               <div className="row">
//                 <div className="col-lg-3">
//                   <div className="text-start">
//                     <Link
//                       to={all_routes.doctorsprofilesettings}
//                       className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
//                     >
//                       <i className="ti ti-user-cog me-2 text-dark"> </i> Profile
//                       Settings
//                     </Link>
//                     <Link
//                       to={all_routes.doctorspasswordsettings}
//                       className="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1 active"
//                     >
//                       <i className="ti ti-lock-star me-2 text-primary"> </i>{" "}
//                       Change Password
//                     </Link>
//                     <Link
//                       to={all_routes.doctorsnotificationsettings}
//                       className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
//                     >
//                       <i className="ti ti-bell me-2 text-dark"></i>{" "}
//                       Notifications
//                     </Link>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-9">
//                   <div className="border-1 border-start ps-4">
//                     <h5 className="fw-bold pb-3 mb-4 border-1 border-bottom">
//                       Change Password
//                     </h5>
//                     {/* start row */}
//                     <div className="row border-bottom mb-3">
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-5">
//                             <label className="form-label mb-0">
//                               New Password{" "}
//                               <span className="text-danger">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-7">
//                             <div className="position-relative">
//                               <div className="pass-group input-group position-relative border rounded">
//                                 <span className="input-group-text bg-white border-0">
//                                   <i className="ti ti-lock text-dark fs-14" />
//                                 </span>
//                                 <input
//                                   type={
//                                     passwordVisibility.password
//                                       ? "text"
//                                       : "password"
//                                   }
//                                   className="pass-input form-control border-start-0 ps-0"
//                                   placeholder="****************"
//                                 />
//                                 <span
//                                   className={`ti toggle-password fs-14 ${
//                                     passwordVisibility.password
//                                       ? "ti-eye"
//                                       : "ti-eye-off"
//                                   }`}
//                                   onClick={() =>
//                                     togglePasswordVisibility("password")
//                                   }
//                                 ></span>
//                               </div>
//                             </div>
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-5">
//                             <label className="form-label mb-0">
//                               Confirm Password
//                               <span className="text-danger">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-7">
//                             <div className="position-relative">
//                               <div className="pass-group input-group position-relative border rounded">
//                                 <span className="input-group-text bg-white border-0">
//                                   <i className="ti ti-lock text-dark fs-14" />
//                                 </span>
//                                 <input
//                                   type={
//                                     passwordVisibility.confirmPassword
//                                       ? "text"
//                                       : "password"
//                                   }
//                                   className="pass-input form-control border-start-0 ps-0"
//                                   placeholder="****************"
//                                 />
//                                 <span
//                                   className={`ti toggle-password fs-14 ${
//                                     passwordVisibility.confirmPassword
//                                       ? "ti-eye"
//                                       : "ti-eye-off"
//                                   }`}
//                                   onClick={() =>
//                                     togglePasswordVisibility("confirmPassword")
//                                   }
//                                 ></span>
//                               </div>
//                             </div>
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                     </div>
//                     {/* end row */}
//                     <div className="d-flex justify-content-end align-items-center gap-2">
//                       <Link
//                         to=""
//                         className="btn btn-light btn-md fs-13 fw-medium rounded"
//                       >
//                         Cancel
//                       </Link>
//                       <Link
//                         to=""
//                         className="btn btn-primary btn-md fs-13 fw-medium rounded"
//                       >
//                         Save Changes
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//               </div>
//             </div>
//             {/* end card body */}
//           </div>
//           {/* end card */}
//         </div>
//         {/* End Content */}
//         {/* Footer Start */}
//         <div className="footer text-center bg-white p-2 border-top">
//           <p className="text-dark mb-0">
//             2025 ©
//             <Link to="#" className="link-primary">
//               Preclinic
//             </Link>
//             , All Rights Reserved
//           </p>
//         </div>
//         {/* Footer End */}
//       </div>
//       {/* ========================
// 			End Page Content
// 		========================= */}
//     </>
//   );
// };

// export default DoctorsPasswordSettings;




import { useState } from "react";
import { Link } from "react-router";
import { message } from "antd";
import { all_routes } from "../../../../routes/all_routes";

type PasswordField = "newPassword" | "confirmPassword";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const DoctorsPasswordSettings = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!formData.newPassword || !formData.confirmPassword) {
      message.error("All fields are required");
      return;
    }
    if (formData.newPassword.length < 8) {
      message.error("Password must be at least 8 characters");
      return;
    }
    if (!/[A-Z]/.test(formData.newPassword)) {
      message.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[0-9]/.test(formData.newPassword)) {
      message.error("Password must contain at least one number");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword)) {
      message.error("Password must contain at least one special character");
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      message.error("New password and confirm password do not match");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BACKEND_URL}/api/doctors/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          newPassword: formData.newPassword,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        message.success({
          content: "✅ Password updated successfully! A confirmation email has been sent.",
          duration: 4,
        });
        setFormData({ newPassword: "", confirmPassword: "" });
      } else {
        message.error(data.message || "Failed to update password");
      }
    } catch (error) {
      console.error("Change password error:", error);
      message.error("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderPasswordInput = (name: PasswordField, label: string) => (
    <div className="col-lg-6 mb-3">
      <label className="form-label">
        {label} <span className="text-danger">*</span>
      </label>
      <div className="pass-group input-group position-relative border rounded">
        <span className="input-group-text bg-white border-0">
          <i className="ti ti-lock text-dark fs-14" />
        </span>
        <input
          type={passwordVisibility[name] ? "text" : "password"}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className="pass-input form-control border-start-0 ps-0"
          placeholder="****************"
        />
        <span
          className={`ti toggle-password fs-14 ${passwordVisibility[name] ? "ti-eye" : "ti-eye-off"}`}
          style={{ cursor: "pointer", padding: "0 12px", display: "flex", alignItems: "center" }}
          onClick={() => togglePasswordVisibility(name)}
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="mb-3 border-bottom pb-3">
            <h4 className="fw-bold mb-0">Settings</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row">
                {/* Sidebar Nav */}
                <div className="col-lg-3">
                  <div className="text-start">
                    <Link to={all_routes.doctorsprofilesettings}
                      className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start">
                      <i className="ti ti-user-cog me-2 text-dark" /> Profile Settings
                    </Link>
                    <Link to={all_routes.doctorspasswordsettings}
                      className="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1 active">
                      <i className="ti ti-lock-star me-2 text-primary" /> Change Password
                    </Link>
                    <Link to={all_routes.doctorsnotificationsettings}
                      className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start">
                      <i className="ti ti-bell me-2 text-dark" /> Notifications
                    </Link>
                  </div>
                </div>

                {/* Form */}
                <div className="col-lg-9">
                  <div className="border-1 border-start ps-4">
                    <h5 className="fw-bold pb-3 mb-4 border-1 border-bottom">Change Password</h5>

                    <div className="alert alert-info py-2 px-3 mb-4">
                      <i className="ti ti-info-circle me-2" />
                      Set a new password for your account. You will use this password for future logins.
                    </div>

                    <div className="row border-bottom mb-3 pb-3">
                      {renderPasswordInput("newPassword", "New Password")}
                      {renderPasswordInput("confirmPassword", "Confirm New Password")}

                      <div className="col-12">
                        <small className="text-muted">
                          Password must be at least 8 characters with 1 uppercase letter, 1 number, and 1 special character.
                        </small>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <button type="button"
                        className="btn btn-light btn-md fs-13 fw-medium rounded"
                        onClick={() => setFormData({ newPassword: "", confirmPassword: "" })}
                        disabled={loading}>
                        Cancel
                      </button>
                      <button type="button"
                        className="btn btn-primary btn-md fs-13 fw-medium rounded"
                        onClick={handleSave}
                        disabled={loading}>
                        {loading
                          ? (<><span className="spinner-border spinner-border-sm me-2" />Saving...</>)
                          : "Save Changes"
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorsPasswordSettings;