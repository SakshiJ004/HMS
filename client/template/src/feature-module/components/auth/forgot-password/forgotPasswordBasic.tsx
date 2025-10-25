// import { Link } from "react-router"
// import { all_routes } from "../../../routes/all_routes"
// import ImageWithBasePath from "../../../../core/imageWithBasePath"


// const ForgotPasswordBasic = () => {
//   return (
//     <>
//       {/* Start Content */}
//       <div className="container-fuild position-relative z-1">
//         <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
//           {/* start row */}
//           <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
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
//                         <h5 className="mb-1 fs-20 fw-bold">Forgot Password</h5>
//                         <p className="mb-0">
//                           No worries, we’ll send you reset instructions
//                         </p>
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
//                         <Link
//                           to={all_routes.emailverificationbasic}
//                           className="btn bg-primary text-white w-100"
//                         >
//                           Reset Password
//                         </Link>
//                       </div>
//                       <div className="text-center">
//                         <h6 className="fw-normal fs-14 text-dark mb-0">
//                           Return to  <Link to={all_routes.loginbasic} className="hover-a"> login </Link>
//                         </h6>
//                       </div>
//                     </div>
//                     {/* end card body */}
//                   </div>
//                   {/* end card */}
//                 </div>
//               </form>
//               <p className="text-dark text-center">

//                 Copyright © 2025 - Preclinic
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

//   )
// }

// export default ForgotPasswordBasic

// import { Link, useNavigate } from "react-router";
// import { all_routes } from "../../../routes/all_routes";
// import ImageWithBasePath from "../../../../core/imageWithBasePath";
// import { useState } from "react";

// const ForgotPasswordBasic = () => {
//   const navigate = useNavigate();
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   const [email, setEmail] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (!email) {
//       setErrorMessage("Email is required");
//       return;
//     }

//     if (!email.includes("@")) {
//       setErrorMessage("Please enter a valid email address");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch(`${BACKEND_URL}/api/auth/forgot-password`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         // Redirect to email verification page with email parameter
//         navigate(`${all_routes.emailverificationbasic}?email=${encodeURIComponent(email)}`);
//       } else {
//         setErrorMessage(data.message || "Failed to send reset link");
//       }
//     } catch (error) {
//       setErrorMessage("Unable to connect to server. Please try again later.");
//       console.error("Forgot password error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="container-fuild position-relative z-1">
//         <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
//           <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
//             <div className="col-lg-4 mx-auto">
//               <form
//                 className="d-flex justify-content-center align-items-center"
//                 onSubmit={handleSubmit}
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
//                         <h5 className="mb-1 fs-20 fw-bold">Forgot Password</h5>
//                         <p className="mb-0">
//                           No worries, we'll send you reset instructions
//                         </p>
//                       </div>

//                       {errorMessage && (
//                         <div className="alert alert-danger alert-dismissible fade show" role="alert">
//                           <i className="ti ti-alert-circle me-2"></i>
//                           {errorMessage}
//                           <button
//                             type="button"
//                             className="btn-close"
//                             onClick={() => setErrorMessage("")}
//                           ></button>
//                         </div>
//                       )}

//                       <div className="mb-3">
//                         <label className="form-label">Email Address</label>
//                         <div className="input-group">
//                           <span className="input-group-text border-end-0 bg-white">
//                             <i className="ti ti-mail fs-14 text-dark" />
//                           </span>
//                           <input
//                             type="text"
//                             value={email}
//                             onChange={(e) => {
//                               setEmail(e.target.value);
//                               if (errorMessage) setErrorMessage("");
//                             }}
//                             className="form-control border-start-0 ps-0"
//                             placeholder="Enter Email Address"
//                           />
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <button
//                           type="submit"
//                           className="btn bg-primary text-white w-100"
//                           disabled={isLoading}
//                         >
//                           {isLoading ? (
//                             <>
//                               <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                               Sending...
//                             </>
//                           ) : (
//                             "Reset Password"
//                           )}
//                         </button>
//                       </div>
//                       <div className="text-center">
//                         <h6 className="fw-normal fs-14 text-dark mb-0">
//                           Return to{" "}
//                           <Link to={all_routes.loginbasic} className="hover-a">
//                             login
//                           </Link>
//                         </h6>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//               <p className="text-dark text-center">
//                 Copyright © 2025 - Preclinic
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
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
//     </>
//   );
// };

// export default ForgotPasswordBasic;

import { Link, useNavigate } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { useState } from "react";

const ForgotPasswordBasic = () => {
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email) {
      setErrorMessage("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Redirect to OTP verification page
        navigate(
          `${all_routes.twostepverificationbasic}?email=${encodeURIComponent(email)}&maskedEmail=${encodeURIComponent(data.data.email)}`
        );
      } else {
        setErrorMessage(data.message || "Failed to send reset link");
      }
    } catch (error) {
      setErrorMessage("Unable to connect to server. Please try again later.");
      console.error("Forgot password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
                        <h5 className="mb-1 fs-20 fw-bold">Forgot Password</h5>
                        <p className="mb-0">
                          No worries, we'll send you reset instructions
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

                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <div className="input-group">
                          <span className="input-group-text border-end-0 bg-white">
                            <i className="ti ti-mail fs-14 text-dark" />
                          </span>
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errorMessage) setErrorMessage("");
                            }}
                            className="form-control border-start-0 ps-0"
                            placeholder="Enter Email Address"
                          />
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
                              Sending...
                            </>
                          ) : (
                            "Reset Password"
                          )}
                        </button>
                      </div>
                      <div className="text-center">
                        <h6 className="fw-normal fs-14 text-dark mb-0">
                          Return to{" "}
                          <Link to={all_routes.loginbasic} className="hover-a">
                            login
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <p className="text-dark text-center">
                Copyright © 2025 - Preclinic
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

export default ForgotPasswordBasic;