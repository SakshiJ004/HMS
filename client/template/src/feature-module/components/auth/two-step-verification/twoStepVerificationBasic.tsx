// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../core/imageWithBasePath";
// import type { OTPProps } from "antd/es/input/OTP";
// import { useEffect, useState } from "react";
// import { Input } from "antd";
// import { all_routes } from "../../../routes/all_routes";

// const TwoStepVerificationBasic = () => {
//   const onChange: OTPProps["onChange"] = (text) => {
//     console.log("onChange:", text);
//   };

//   const onInput: OTPProps["onInput"] = (value) => {
//     console.log("onInput:", value);
//   };
//   const sharedProps: OTPProps = {
//     onChange,
//     onInput,
//   };

//   const [seconds, setSeconds] = useState(60);

//   useEffect(() => {
//     if (seconds <= 0) return;

//     const intervalId = setInterval(() => {
//       setSeconds((prevSeconds) => {
//         if (prevSeconds <= 1) {
//           clearInterval(intervalId);
//           return 0;
//         }
//         return prevSeconds - 1;
//       });
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [seconds]);

//   const formatTime = (totalSeconds: number) => {
//     const minutes = Math.floor(totalSeconds / 60);
//     const secs = totalSeconds % 60;
//     return `${minutes < 10 ? "0" + minutes : minutes}:${
//       secs < 10 ? "0" + secs : secs
//     }`;
//   };

//   return (
//     <>
//       {/* Start Content */}
//       <div className="container-fuild position-relative z-1">
//         <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white">
//           {/* start row*/}
//           <div className="row">
//             <div className="col-lg-6 p-0">
//               <div className="login-backgrounds d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0">
//                 <ImageWithBasePath
//                   src="assets/img/auth/twostep-verification-illustration-img.png"
//                   alt="log-illustration-img-01"
//                   className="img-fluid img1"
//                 />
//               </div>
//             </div>
//             {/* end row*/}
//             <div className="col-lg-6 col-md-12 col-sm-12">
//               <div className="row justify-content-center align-items-center overflow-auto flex-wrap vh-100 py-3">
//                 <div className="col-md-8 mx-auto">
//                   <form
//                     className="d-flex justify-content-center align-items-center"
//                   >
//                     <div className="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
//                       <div className=" mx-auto mb-4 text-center">
//                         <ImageWithBasePath
//                           src="assets/img/logo.svg"
//                           className="img-fluid"
//                           alt="Logo"
//                         />
//                       </div>
//                       <div className="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
//                         <div className="card-body">
//                           <div className="text-center mb-3">
//                             <h5 className="mb-1 fs-20 fw-bold">
//                               2 Step Verification
//                             </h5>
//                             <p className="mb-0">
//                               Please enter the OTP received to confirm your
//                               account ownership. A code has been send to
//                               <span className="text-dark b-block">

//                                 ******doe@example.com
//                               </span>
//                             </p>
//                           </div>
//                           <div className="text-center otp-input">
//                             <div className="d-flex align-items-center justify-content-center mb-3">
//                               <Input.OTP length={4} {...sharedProps} />
//                             </div>
//                             <div className="d-flex justify-content-center">
//                               <div className="mb-3 d-flex align-items-center ">
//                                 <p className="text-gray-9 me-4 mb-0">
//                                   Didn't receive code.
//                                   <Link
//                                     to="#"
//                                     className="text-primary"
//                                   >
//                                     Resend Code
//                                   </Link>
//                                 </p>
//                                 <span className="text-danger">{formatTime(seconds)}</span>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="mt-0">
//                             <Link
//                               to={all_routes.resetpasswordbasic}
//                               className="btn bg-primary text-white w-100"
//                             >
//                               Submit
//                             </Link>
//                           </div>
//                         </div>
//                         {/* end card body */}
//                       </div>
//                       {/* end card */}
//                     </div>
//                   </form>
//                   <p className="text-dark text-center">

//                     Copyright © 2025 - Preclinic
//                   </p>
//                 </div>
//                 {/* end row*/}
//               </div>
//             </div>
//           </div>
//           {/* end row*/}
//         </div>
//       </div>
//       {/* End Content */}
//     </>
//   );
// };

// export default TwoStepVerificationBasic;


import { Link, useNavigate, useSearchParams } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import type { OTPProps } from "antd/es/input/OTP";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { all_routes } from "../../../routes/all_routes";

const TwoStepVerificationBasic = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [maskedEmail, setMaskedEmail] = useState("");
  const [seconds, setSeconds] = useState(600); // 10 minutes
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    // Get email from URL params
    const emailParam = searchParams.get("email");
    const maskedEmailParam = searchParams.get("maskedEmail");

    if (!emailParam) {
      navigate(all_routes.forgotpasswordbasic);
      return;
    }

    setEmail(emailParam);
    setMaskedEmail(maskedEmailParam || emailParam);
  }, [searchParams, navigate]);

  useEffect(() => {
    if (seconds <= 0) return;

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${secs < 10 ? "0" + secs : secs
      }`;
  };

  const onChange: OTPProps["onChange"] = (text) => {
    setOtp(text);
    if (errorMessage) setErrorMessage("");
  };

  const handleResendOTP = async () => {
    if (isResending) return;

    setIsResending(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/resend-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage("New OTP has been sent to your email");
        setSeconds(600); // Reset timer to 10 minutes
        setOtp(""); // Clear OTP input
      } else {
        setErrorMessage(data.message || "Failed to resend OTP");
      }
    } catch (error) {
      setErrorMessage("Unable to connect to server. Please try again.");
      console.error("Resend OTP error:", error);
    } finally {
      setIsResending(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!otp || otp.length !== 6) {
      setErrorMessage("Please enter the 6-digit OTP code");
      return;
    }

    if (seconds <= 0) {
      setErrorMessage("OTP has expired. Please request a new one.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage("OTP verified successfully!");

        // Redirect to reset password page with token
        setTimeout(() => {
          navigate(
            `${all_routes.resetpasswordbasic}?token=${data.data.resetToken}&email=${encodeURIComponent(email)}`
          );
        }, 1000);
      } else {
        setErrorMessage(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Unable to connect to server. Please try again.");
      console.error("OTP verification error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Start Content */}
      <div className="container-fuild position-relative z-1">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white">
          {/* start row*/}
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="login-backgrounds d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0">
                <ImageWithBasePath
                  src="assets/img/auth/twostep-verification-illustration-img.png"
                  alt="log-illustration-img-01"
                  className="img-fluid img1"
                />
              </div>
            </div>
            {/* end row*/}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center overflow-auto flex-wrap vh-100 py-3">
                <div className="col-md-8 mx-auto">
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
                            <h5 className="mb-1 fs-20 fw-bold">
                              Verify Your Identity
                            </h5>
                            <p className="mb-0">
                              Please enter the 6-digit OTP code sent to
                              <span className="text-dark d-block mt-2">
                                <strong>{maskedEmail}</strong>
                              </span>
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

                          <div className="text-center otp-input">
                            <div className="d-flex align-items-center justify-content-center mb-3">
                              <Input.OTP
                                length={6}
                                value={otp}
                                onChange={onChange}
                                size="large"
                              />
                            </div>
                            <div className="d-flex justify-content-center flex-column align-items-center">
                              <div className="mb-3 d-flex align-items-center">
                                <p className="text-gray-9 me-3 mb-0">
                                  Didn't receive code?{" "}
                                  {seconds > 0 ? (
                                    <span className="text-muted">
                                      Wait {formatTime(seconds)}
                                    </span>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={handleResendOTP}
                                      disabled={isResending}
                                      className="btn btn-link p-0 text-primary"
                                    >
                                      {isResending ? "Sending..." : "Resend Code"}
                                    </button>
                                  )}
                                </p>
                              </div>
                              {seconds > 0 && (
                                <span
                                  className={`badge ${seconds < 60 ? "bg-danger" : "bg-warning"
                                    } mb-3`}
                                >
                                  Expires in {formatTime(seconds)}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="mt-0">
                            <button
                              type="submit"
                              className="btn bg-primary text-white w-100"
                              disabled={isLoading || !otp || otp.length !== 6}
                            >
                              {isLoading ? (
                                <>
                                  <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                  Verifying...
                                </>
                              ) : (
                                "Verify & Continue"
                              )}
                            </button>
                          </div>
                          <div className="text-center mt-3">
                            <Link
                              to={all_routes.forgotpasswordbasic}
                              className="text-muted"
                              style={{ fontSize: "14px" }}
                            >
                              ← Back to Forgot Password
                            </Link>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>
                  </form>
                  <p className="text-dark text-center">
                    Copyright © 2025 - Preclinic
                  </p>
                </div>
                {/* end row*/}
              </div>
            </div>
          </div>
          {/* end row*/}
        </div>
      </div>
      {/* End Content */}
    </>
  );
};

export default TwoStepVerificationBasic;