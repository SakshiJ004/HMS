// import { useState } from "react";
// import { Link } from "react-router";
// import {
//   Blood_Group,
//   City,
//   Country,
//   Gender,
//   Primary_Doctor,
//   State,
//   Status,
// } from "../../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
// import { DatePicker } from "antd";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const Modals = () => {
//  const [phone, setPhone] = useState<string | undefined>()

//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };

//   return (
//     <>
//       {/* Start Add modal */}
//       <div className="modal fade" id="add_modal">
//         <div className="modal-dialog modal-dialog-centered modal-md">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title text-dark fw-bold">Add New Patient</h5>
//               <button
//                 type="button"
//                 className="btn-close custom-btn-close opacity-100"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="ti ti-x bg-white fs-16 text-dark" />
//               </button>
//             </div>
//             <div className="modal-body pb-0">
//               {/* form start */}
//               <div className="form">
//                 <h6 className="fw-bold mb-3">Patient Information</h6>
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="mb-3 d-flex align-items-center">
//                       <label className="form-label mb-0">Profile Image</label>
//                       <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
//                         <i className="ti ti-user-plus fs-16" />
//                         <input
//                           type="file"
//                           className="form-control image-sign"
//                           multiple
//                         />
//                         <div className="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1">
//                           <Link
//                             to="#"
//                             className="text-white d-flex align-items-center justify-content-center"
//                           >
//                             <i className="ti ti-photo fs-14" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         First Name<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Last Name<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium custom-phoneinput">
//                         Phone Number<span className="text-danger ms-1">*</span>
//                       </label>
//                       <PhoneInput
//                             defaultCountry="US"
//                             value={phone}
//                             onChange={setPhone}
//                           />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Email Address<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input type="email" className="form-control" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Primary Doctor
//                         <span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Primary_Doctor}
//                         className="select"
//                         defaultValue={Primary_Doctor[0]}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         DOB<span className="text-danger ms-1">*</span>
//                       </label>
//                       <div className="input-icon-end position-relative">
//                         <DatePicker
//                           className="form-control datetimepicker"
//                           format={{
//                             format: "DD-MM-YYYY",
//                             type: "mask",
//                           }}
//                           getPopupContainer={getModalContainer}
//                           placeholder="DD-MM-YYYY"
//                           suffixIcon={null}
//                         />
//                         <span className="input-icon-addon">
//                           <i className="ti ti-calendar" />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Gender<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Gender}
//                         className="select"
//                         defaultValue={Gender[0]}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Blood Group<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Blood_Group}
//                         className="select"
//                         defaultValue={Blood_Group[0]}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Status<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Status}
//                         className="select"
//                         defaultValue={Status[0]}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <h6 className="fw-bold mb-3 border-top pt-3">
//                   Address Information
//                 </h6>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Address 1<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Address 2<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1">
//                         Country<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Country}
//                         className="select"
//                         defaultValue={Country[0]}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1">
//                         State<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={State}
//                         className="select"
//                         defaultValue={State[0]}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1">
//                         City<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={City}
//                         className="select"
//                         defaultValue={City[0]}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label mb-1">
//                         Pincode<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* form end */}
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-light btn-sm me-2 fs-13 fw-medium"
//                 data-bs-dismiss="modal"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-sm fs-13 fw-medium"
//               >
//                 Add New Patient
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Add modal  */}
//     </>
//   );
// };

// export default Modals;





import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Blood_Group,
  City,
  Country,
  Gender,
  State,
  Status,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import { DatePicker, message } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

// Declare bootstrap for TypeScript
declare const bootstrap: any;

interface ModalsProps {
  onPatientAdded?: () => void;
}

const Modals = ({ onPatientAdded }: ModalsProps) => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState<string | undefined>();

  // Form state
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: null as any,
    gender: "",
    bloodGroup: "",
    status: "Available",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  const resetForm = () => {
    setPatientData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dob: null,
      gender: "",
      bloodGroup: "",
      status: "Available",
      address1: "",
      address2: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
    });
    setPhone(undefined);
  };

  const closeModal = () => {
    const modalElement = document.getElementById("add_modal");
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      } else {
        const newModal = new bootstrap.Modal(modalElement);
        newModal.hide();
      }
      // Remove backdrop manually if it persists
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validation
      if (!patientData.firstName || !patientData.lastName) {
        message.error("First name and last name are required");
        setLoading(false);
        return;
      }

      if (!patientData.email) {
        message.error("Email is required");
        setLoading(false);
        return;
      }

      if (!phone) {
        message.error("Phone number is required");
        setLoading(false);
        return;
      }

      // Prepare data for API
      const token = localStorage.getItem('token');

      if (!token) {
        message.error("Please login first");
        setLoading(false);
        return;
      }

      const fullName = `${patientData.firstName} ${patientData.lastName}`;

      // Create patient via registration endpoint
      const response = await axios.post(
        `${API_URL}/api/auth/register`,
        {
          fullName: fullName,
          email: patientData.email,
          password: `Patient@${patientData.firstName}123`, // Temporary password
          confirmPassword: `Patient@${patientData.firstName}123`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.data.success) {
        message.success("Patient added successfully!");

        // Close modal
        closeModal();

        // Reset form
        resetForm();

        // Notify parent component to refresh patient list
        if (onPatientAdded) {
          onPatientAdded();
        }
      }
    } catch (error: any) {
      console.error("Error adding patient:", error);
      if (error.response?.data?.message) {
        message.error(error.response.data.message);
      } else {
        message.error("Failed to add patient");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Start Add modal */}
      <div className="modal fade" id="add_modal" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Add New Patient</h5>
              <button
                type="button"
                className="btn-close custom-btn-close opacity-100"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetForm}
              >
                <i className="ti ti-x bg-white fs-16 text-dark" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body pb-0">
                <div className="form" id="modal-datepicker">
                  <h6 className="fw-bold mb-3">Patient Information</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          First Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={patientData.firstName}
                          onChange={(e) =>
                            setPatientData({
                              ...patientData,
                              firstName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Last Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={patientData.lastName}
                          onChange={(e) =>
                            setPatientData({
                              ...patientData,
                              lastName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium custom-phoneinput">
                          Phone Number<span className="text-danger ms-1">*</span>
                        </label>
                        <PhoneInput
                          defaultCountry="US"
                          value={phone}
                          onChange={(value) => {
                            setPhone(value);
                            setPatientData({
                              ...patientData,
                              phoneNumber: value || "",
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Email Address<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={patientData.email}
                          onChange={(e) =>
                            setPatientData({
                              ...patientData,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          DOB<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="input-icon-end position-relative">
                          <DatePicker
                            className="form-control datetimepicker"
                            format="DD-MM-YYYY"
                            getPopupContainer={getModalContainer}
                            placeholder="DD-MM-YYYY"
                            onChange={(date) =>
                              setPatientData({ ...patientData, dob: date })
                            }
                            suffixIcon={null}
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-calendar" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Gender<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Gender}
                          className="select"
                          placeholder="Select Gender"
                          onChange={(option: any) =>
                            setPatientData({
                              ...patientData,
                              gender: option?.value || "",
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Blood Group
                        </label>
                        <CommonSelect
                          options={Blood_Group}
                          className="select"
                          placeholder="Select Blood Group"
                          onChange={(option: any) =>
                            setPatientData({
                              ...patientData,
                              bloodGroup: option?.value || "",
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Status
                        </label>
                        <CommonSelect
                          options={Status}
                          className="select"
                          defaultValue={Status[0]}
                          onChange={(option: any) =>
                            setPatientData({
                              ...patientData,
                              status: option?.value || "Available",
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <h6 className="fw-bold mb-3 border-top pt-3">
                    Address Information (Optional)
                  </h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Address 1
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={patientData.address1}
                          onChange={(e) =>
                            setPatientData({
                              ...patientData,
                              address1: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Address 2
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={patientData.address2}
                          onChange={(e) =>
                            setPatientData({
                              ...patientData,
                              address2: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label mb-1">Country</label>
                        <CommonSelect
                          options={Country}
                          className="select"
                          placeholder="Select Country"
                          onChange={(option: any) =>
                            setPatientData({
                              ...patientData,
                              country: option?.value || "",
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label mb-1">State</label>
                        <CommonSelect
                          options={State}
                          className="select"
                          placeholder="Select State"
                          onChange={(option: any) =>
                            setPatientData({
                              ...patientData,
                              state: option?.value || "",
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label mb-1">City</label>
                        <CommonSelect
                          options={City}
                          className="select"
                          placeholder="Select City"
                          onChange={(option: any) =>
                            setPatientData({
                              ...patientData,
                              city: option?.value || "",
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label mb-1">Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          value={patientData.pincode}
                          onChange={(e) =>
                            setPatientData({
                              ...patientData,
                              pincode: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                  data-bs-dismiss="modal"
                  onClick={resetForm}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm fs-13 fw-medium"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Adding...
                    </>
                  ) : (
                    "Add New Patient"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add modal  */}
    </>
  );
};

export default Modals;