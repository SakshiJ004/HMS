// import { useState } from "react";
// import ImageWithBasePath from "../../../../core/imageWithBasePath";
// import { Link } from "react-router";
// import { all_routes } from "../../../routes/all_routes";
// type PasswordField = "password" | "confirmPassword";

// const RegisterBasic = () => {
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
//           <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap py-3">
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
//                         <h5 className="mb-1 fs-20 fw-bold">Register</h5>
//                         <p className="mb-0">
//                           Please enter your details to create account
//                         </p>
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">Full Name</label>
//                         <div className="input-group">
//                           <span className="input-group-text border-end-0 bg-white">
//                             <i className="ti ti-user fs-14 text-dark" />
//                           </span>
//                           <input
//                             type="text"

//                             className="form-control border-start-0 ps-0"
//                             placeholder="Enter Name"
//                           />
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">Email Address</label>
//                         <div className="input-group">
//                           <span className="input-group-text border-end-0 bg-white">
//                             <i className="ti ti-mail fs-14 text-dark" />
//                           </span>
//                           <input
//                             type="text"

//                             className="form-control border-start-0 ps-0"
//                             placeholder="Enter Email Address"
//                           />
//                         </div>
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
//                       <div className="d-flex align-items-center justify-content-between mb-3">
//                         <div className="d-flex align-items-center">
//                           <div className="form-check form-check-md mb-0">
//                             <input
//                               className="form-check-input"
//                               id="remember_me"
//                               type="checkbox"
//                             />
//                             <label
//                               htmlFor="remember_me"
//                               className="form-check-label mt-0 text-dark"
//                             >
//                               I agree to the
//                               <Link
//                                 to={all_routes.termsCondition}
//                                 className="text-decoration-underline text-primary"
//                               >

//                                 Terms of Service
//                               </Link>
//                               &amp;
//                               <Link
//                                 to={all_routes.privacyPolicy}
//                                 className="text-decoration-underline text-primary"
//                               >
//                                 Privacy Policy
//                               </Link>
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mb-2">
//                         <Link
//                           to={all_routes.loginbasic}
//                           className="btn bg-primary text-white w-100"
//                         >
//                           Register
//                         </Link>
//                       </div>
//                       <div className="login-or position-relative mb-3">
//                         <span className="span-or">OR</span>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-center flex-wrap">
//                           <div className="text-center me-2 flex-fill">
//                             <Link
//                               to="#"
//                               className="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
//                             >
//                               <ImageWithBasePath
//                                 className="img-fluid m-1"
//                                 src="assets/img/icons/facebook-logo.svg"
//                                 alt="Facebook"
//                               />
//                             </Link>
//                           </div>
//                           <div className="text-center me-2 flex-fill">
//                             <Link
//                               to="#"
//                               className="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
//                             >
//                               <ImageWithBasePath
//                                 className="img-fluid m-1"
//                                 src="assets/img/icons/google-logo.svg"
//                                 alt="Google"
//                               />
//                             </Link>
//                           </div>
//                           <div className="text-center me-2 flex-fill">
//                             <Link
//                               to="#"
//                               className="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
//                             >
//                               <ImageWithBasePath
//                                 className="img-fluid m-1"
//                                 src="assets/img/icons/apple-logo.svg"
//                                 alt="apple"
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="text-center">
//                         <h6 className="fw-normal fs-14 text-dark mb-0">
//                           Already have an account yet?
//                           <Link to={all_routes.loginbasic} className="hover-a">

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

// export default RegisterBasic;




import { useState } from "react";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { Link, useNavigate } from "react-router";
import { all_routes } from "../../../routes/all_routes";

type PasswordField = "password" | "confirmPassword";

const RegisterBasic = () => {
  const navigate = useNavigate();

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    // Clear error message when user starts typing
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Frontend validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage("All fields are required");
      return;
    }

    if (!agreeToTerms) {
      setErrorMessage("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    // Email validation
    if (!formData.email.includes("@")) {
      setErrorMessage("Email must contain @ symbol");
      return;
    }

    if (!/[0-9]/.test(formData.email)) {
      setErrorMessage("Email must contain at least one number");
      return;
    }

    if (!formData.email.endsWith("gmail.com")) {
      setErrorMessage("Email must end with gmail.com");
      return;
    }

    // Password validation
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

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Password and Confirm Password do not match. Please ensure both fields are identical.");
      return;
    }

    // API call
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(data.message);

        // ✅ Store full user object in localStorage
        localStorage.setItem("userData", JSON.stringify(data.data));
        localStorage.setItem("token", data.data.token); // Keep token separately if needed

        // Redirect to login after 1.5 seconds
        setTimeout(() => {
          navigate(all_routes.loginbasic);
        }, 1500);
      } else {
        setErrorMessage(data.message || "Registration failed");
      }
    } catch (error) {
      setErrorMessage("Unable to connect to server. Please try again later.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Start Content */}
      <div className="container-fuild position-relative z-1">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          {/* start row */}
          <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap py-3">
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
                        <h5 className="mb-1 fs-20 fw-bold">Register</h5>
                        <p className="mb-0">
                          Please enter your details to create account
                        </p>
                      </div>

                      {/* Error Message */}
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

                      {/* Success Message */}
                      {successMessage && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                          <i className="ti ti-check me-2"></i>
                          {successMessage}
                        </div>
                      )}

                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <div className="input-group">
                          <span className="input-group-text border-end-0 bg-white">
                            <i className="ti ti-user fs-14 text-dark" />
                          </span>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="form-control border-start-0 ps-0"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <div className="input-group">
                          <span className="input-group-text border-end-0 bg-white">
                            <i className="ti ti-mail fs-14 text-dark" />
                          </span>
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-control border-start-0 ps-0"
                            placeholder="Enter Email Address"
                          />
                        </div>
                      </div>
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
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <div className="form-check form-check-md mb-0">
                            <input
                              className="form-check-input"
                              id="remember_me"
                              type="checkbox"
                              checked={agreeToTerms}
                              onChange={(e) => setAgreeToTerms(e.target.checked)}
                            />
                            <label
                              htmlFor="remember_me"
                              className="form-check-label mt-0 text-dark"
                            >
                              I agree to the
                              <Link
                                to={all_routes.termsCondition}
                                className="text-decoration-underline text-primary"
                              >
                                {" "}
                                Terms of Service
                              </Link>
                              &amp;
                              <Link
                                to={all_routes.privacyPolicy}
                                className="text-decoration-underline text-primary"
                              >
                                {" "}
                                Privacy Policy
                              </Link>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <button
                          type="submit"
                          className="btn bg-primary text-white w-100"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Registering...
                            </>
                          ) : (
                            "Register"
                          )}
                        </button>
                      </div>
                      <div className="login-or position-relative mb-3">
                        <span className="span-or">OR</span>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-center flex-wrap">
                          <div className="text-center me-2 flex-fill">
                            <Link
                              to="#"
                              className="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                            >
                              <ImageWithBasePath
                                className="img-fluid m-1"
                                src="assets/img/icons/facebook-logo.svg"
                                alt="Facebook"
                              />
                            </Link>
                          </div>
                          <div className="text-center me-2 flex-fill">
                            <Link
                              to="#"
                              className="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                            >
                              <ImageWithBasePath
                                className="img-fluid m-1"
                                src="assets/img/icons/google-logo.svg"
                                alt="Google"
                              />
                            </Link>
                          </div>
                          <div className="text-center me-2 flex-fill">
                            <Link
                              to="#"
                              className="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                            >
                              <ImageWithBasePath
                                className="img-fluid m-1"
                                src="assets/img/icons/apple-logo.svg"
                                alt="apple"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h6 className="fw-normal fs-14 text-dark mb-0">
                          Already have an account yet?
                          <Link to={all_routes.loginbasic} className="hover-a">
                            {" "}
                            Login
                          </Link>
                        </h6>
                      </div>
                    </div>
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
              </form>
              <p className="text-dark text-center">
                Copyright © 2025 - Preclinic.
              </p>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
      </div>
      {/* End Content */}
      {/* Start Bg Content */}
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
      {/* End Bg Content */}
    </>
  );
};

export default RegisterBasic;