// import { useState } from "react";
// import { Link } from "react-router";
// import { all_routes } from "../../../routes/all_routes";
// import ImageWithBasePath from "../../../../core/imageWithBasePath";
// type PasswordField = "password" | "confirmPassword";

// const ResetPasswordBasic = () => {
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
//       {/* Start Content */}
//       <div className="container-fuild position-relative z-1">
//         <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
//           {/* start row */}
//           <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
//             <div className="col-lg-4 mx-auto">
//               <form
//                 className="d-flex justify-content-center align-items-center"
//               >
//                 <div className="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
//                   <div className=" mx-auto mb-4 text-center">
//                     <ImageWithBasePath
//                       src="assets/img/logo.svg"
//                       className="img-fluid"
//                       alt="Logo"
//                     />
//                   </div>
//                   <div className="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
//                     <div className="card-body">
//                       <div className="text-center mb-3">
//                         <h5 className="mb-1 fs-20 fw-bold">Reset Password</h5>
//                         <p className="mb-0">
//                           Your new password must be different from previous used
//                           passwords.
//                         </p>
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">Password</label>
//                         <div className="position-relative">
//                           <div className="pass-group input-group position-relative border rounded">
//                             <span className="input-group-text bg-white border-0">
//                               <i className="ti ti-lock text-dark fs-14" />
//                             </span>
//                             <input
//                               type={
//                                 passwordVisibility.password
//                                   ? "text"
//                                   : "password"
//                               }
//                               className="pass-input form-control border-start-0 ps-0"
//                               placeholder="****************"
//                             />
//                             <span
//                               className={`ti toggle-password text-dark fs-14 ${
//                                 passwordVisibility.password
//                                   ? "ti-eye"
//                                   : "ti-eye-off"
//                               }`}
//                               onClick={() =>
//                                 togglePasswordVisibility("password")
//                               }
//                             ></span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">Confirm Password</label>
//                         <div className="position-relative">
//                           <div className="pass-group input-group position-relative border rounded">
//                             <span className="input-group-text bg-white border-0">
//                               <i className="ti ti-lock text-dark fs-14" />
//                             </span>
//                             <input
//                               type={
//                                 passwordVisibility.confirmPassword
//                                   ? "text"
//                                   : "password"
//                               }
//                               className="pass-input form-control border-start-0 ps-0"
//                               placeholder="****************"
//                             />
//                             <span
//                               className={`ti toggle-password text-dark fs-14 ${
//                                 passwordVisibility.confirmPassword
//                                   ? "ti-eye"
//                                   : "ti-eye-off"
//                               }`}
//                               onClick={() =>
//                                 togglePasswordVisibility("confirmPassword")
//                               }
//                             ></span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <Link
//                           to={all_routes.successBasic}
//                           className="btn bg-primary text-white w-100"
//                         >
//                           Submit
//                         </Link>
//                       </div>
//                       <div className="text-center">
//                         <h6 className="fw-normal fs-14 text-dark mb-0">
//                           Return to
//                           <Link to={all_routes.login} className="hover-a">
//                             Login
//                           </Link>
//                         </h6>
//                       </div>
//                     </div>
//                     {/* end card body */}
//                   </div>
//                   {/* end card */}
//                 </div>
//               </form>
//               <p className="text-dark text-center">
//                 Copyright © 2025 - Preclinic.
//               </p>
//             </div>
//             {/* end col */}
//           </div>
//           {/* end row */}
//         </div>
//       </div>
//       {/* End Content */}
//       {/* Start Bg Content */}
//       <ImageWithBasePath
//         src="assets/img/auth/auth-bg-top.png"
//         alt=""
//         className="img-fluid element-01"
//       />
//       <ImageWithBasePath
//         src="assets/img/auth/auth-bg-bot.png"
//         alt=""
//         className="img-fluid element-02"
//       />
//       {/* End Bg Content */}
//     </>
//   );
// };

// export default ResetPasswordBasic;


import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../../core/imageWithBasePath";

type PasswordField = "password" | "confirmPassword";

const ResetPasswordBasic = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  // Verify token on component mount
  useEffect(() => {
    const verifyToken = async () => {
      if (!token || !email) {
        setErrorMessage("Invalid reset link");
        setIsVerifying(false);
        return;
      }

      try {
        const response = await fetch(
          `${BACKEND_URL}/api/auth/verify-reset-token?token=${token}&email=${email}`
        );

        const data = await response.json();

        if (response.ok && data.success) {
          setTokenValid(true);
        } else {
          setErrorMessage(data.message || "Invalid or expired reset link");
        }
      } catch (error) {
        setErrorMessage("Unable to verify reset link. Please try again.");
        console.error("Token verification error:", error);
      } finally {
        setIsVerifying(false);
      }
    };

    verifyToken();
  }, [token, email, BACKEND_URL]);

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!formData.password || !formData.confirmPassword) {
      setErrorMessage("Both password fields are required");
      return;
    }

    if (formData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setErrorMessage("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[0-9]/.test(formData.password)) {
      setErrorMessage("Password must contain at least one number");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      setErrorMessage("Password must contain at least one special character");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(data.message);

        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate(all_routes.loginbasic);
        }, 2000);
      } else {
        setErrorMessage(data.message || "Failed to reset password");
      }
    } catch (error) {
      setErrorMessage("Unable to connect to server. Please try again later.");
      console.error("Reset password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isVerifying) {
    return (
      <>
        <div className="container-fuild position-relative z-1">
          <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
              <div className="col-lg-4 mx-auto">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3">Verifying reset link...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!tokenValid) {
    return (
      <>
        <div className="container-fuild position-relative z-1">
          <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
              <div className="col-lg-4 mx-auto">
                <div className="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
                  <div className=" mx-auto mb-4 text-center">
                    <ImageWithBasePath
                      src="assets/img/logo.svg"
                      className="img-fluid"
                      alt="Logo"
                    />
                  </div>
                  <div className="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
                    <div className="card-body text-center">
                      <i className="ti ti-x text-danger" style={{ fontSize: "48px" }}></i>
                      <h5 className="mb-3 mt-3">Invalid Reset Link</h5>
                      <p className="text-danger mb-4">{errorMessage}</p>
                      <Link
                        to={all_routes.forgotpasswordbasic}
                        className="btn bg-primary text-white"
                      >
                        Request New Reset Link
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-fuild position-relative z-1">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
            <div className="col-lg-4 mx-auto">
              <form
                className="d-flex justify-content-center align-items-center"
                onSubmit={handleSubmit}
              >
                <div className="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
                  <div className=" mx-auto mb-4 text-center">
                    <ImageWithBasePath
                      src="assets/img/logo.svg"
                      className="img-fluid"
                      alt="Logo"
                    />
                  </div>
                  <div className="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
                    <div className="card-body">
                      <div className="text-center mb-3">
                        <h5 className="mb-1 fs-20 fw-bold">Reset Password</h5>
                        <p className="mb-0">
                          Your new password must be different from previous used
                          passwords.
                        </p>
                      </div>

                      {errorMessage && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                          <i className="ti ti-alert-circle me-2"></i>
                          {errorMessage}
                          <button
                            type="button"
                            className="btn-close"
                            onClick={() => setErrorMessage("")}
                          ></button>
                        </div>
                      )}

                      {successMessage && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                          <i className="ti ti-check me-2"></i>
                          {successMessage}
                        </div>
                      )}

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="position-relative">
                          <div className="pass-group input-group position-relative border rounded">
                            <span className="input-group-text bg-white border-0">
                              <i className="ti ti-lock text-dark fs-14" />
                            </span>
                            <input
                              type={
                                passwordVisibility.password
                                  ? "text"
                                  : "password"
                              }
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="pass-input form-control border-start-0 ps-0"
                              placeholder="****************"
                            />
                            <span
                              className={`ti toggle-password text-dark fs-14 ${passwordVisibility.password
                                  ? "ti-eye"
                                  : "ti-eye-off"
                                }`}
                              onClick={() =>
                                togglePasswordVisibility("password")
                              }
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <div className="position-relative">
                          <div className="pass-group input-group position-relative border rounded">
                            <span className="input-group-text bg-white border-0">
                              <i className="ti ti-lock text-dark fs-14" />
                            </span>
                            <input
                              type={
                                passwordVisibility.confirmPassword
                                  ? "text"
                                  : "password"
                              }
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              className="pass-input form-control border-start-0 ps-0"
                              placeholder="****************"
                            />
                            <span
                              className={`ti toggle-password text-dark fs-14 ${passwordVisibility.confirmPassword
                                  ? "ti-eye"
                                  : "ti-eye-off"
                                }`}
                              onClick={() =>
                                togglePasswordVisibility("confirmPassword")
                              }
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="btn bg-primary text-white w-100"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Resetting...
                            </>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                      <div className="text-center">
                        <h6 className="fw-normal fs-14 text-dark mb-0">
                          Return to
                          <Link to={all_routes.loginbasic} className="hover-a">
                            {" "}Login
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <p className="text-dark text-center">
                Copyright © 2025 - Preclinic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageWithBasePath
        src="assets/img/auth/auth-bg-top.png"
        alt=""
        className="img-fluid element-01"
      />
      <ImageWithBasePath
        src="assets/img/auth/auth-bg-bot.png"
        alt=""
        className="img-fluid element-02"
      />
    </>
  );
};

export default ResetPasswordBasic;