import { Link, useNavigate } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { all_routes } from "../../../routes/all_routes";
import { useState } from "react";

type PasswordField = "password" | "confirmPassword";

const LoginBasic = () => {
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
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
    if (!formData.email || !formData.password) {
      setErrorMessage("Email and password are required");
      return;
    }

    // API call
    setIsLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // if (response.ok && data.success) {
      //   setSuccessMessage(data.message);

      //   // ✅ Store the full user object in localStorage
      //   localStorage.setItem("userData", JSON.stringify(data.data));
      //   localStorage.setItem("token", data.data.token); // keep token separately if needed for API auth

      //   // Role-based redirection
      //   setTimeout(() => {
      //     switch (data.data.role) {
      //       case "admin":
      //         navigate(all_routes.dashboard); // Admin Dashboard
      //         break;
      //       case "doctor":
      //         navigate(all_routes.doctordashboard); // Doctor Dashboard
      //         break;
      //       case "patient":
      //         navigate(all_routes.patientdashboard); // Patient Dashboard
      //         break;
      //       default:
      //         navigate(all_routes.dashboard);
      //     }
      //   }, 1000);
      // }
      if (response.ok && data.success) {
        setSuccessMessage(data.message);

        localStorage.setItem("userData", JSON.stringify(data.data));
        localStorage.setItem("token", data.data.token);

        // 🔥 Instant Redirect – No Delay
        switch (data.data.role) {
          case "admin":
            navigate(all_routes.dashboard);
            break;
          case "doctor":
            navigate(all_routes.doctordashboard);
            break;
          case "patient":
            navigate(all_routes.patientdashboard);
            break;
          default:
            navigate(all_routes.dashboard);
        }
      } else {
        setErrorMessage(data.message || "Login failed");
      }
    } catch (error) {
      setErrorMessage("Unable to connect to server. Please try again later.");
      console.error("Login error:", error);
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
                        <h5 className="mb-1 fs-20 fw-bold">Login</h5>
                        <p className="mb-0">
                          Please enter below details to access the dashboard
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
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <div className="form-check form-check-md mb-0">
                            <input
                              className="form-check-input"
                              id="remember_me"
                              type="checkbox"
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label
                              htmlFor="remember_me"
                              className="form-check-label mt-0 text-dark"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="text-end">
                          <Link
                            to={all_routes.forgotpasswordbasic}
                            className="text-danger"
                          >
                            Forgot Password?
                          </Link>
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
                              Logging in...
                            </>
                          ) : (
                            "Login"
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
                          Don't have an account yet?
                          <Link to={all_routes.registerbasic} className="hover-a">
                            {" "}
                            Register
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
      <>
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
    </>
  );
};

export default LoginBasic;