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
import { Link } from "react-router";
import {
  Blood_Group,
  City,
  Country,
  Gender,
  Primary_Doctor,
  State,
  Status,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import { DatePicker, message } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface ModalsProps {
  onPatientAdded?: () => void;
}

const Modals = ({ onPatientAdded }: ModalsProps) => {
  const [phone, setPhone] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    primaryDoctor: "",
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
    profileImage: null as File | null
  });

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      primaryDoctor: "",
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
      profileImage: null
    });
    setPhone(undefined);
  };

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profileImage: e.target.files[0] });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('🚀 Add Patient Form submitted!');
    console.log('Form data:', formData);

    // Validation
    if (!formData.firstName.trim()) {
      message.error("Please enter first name");
      return;
    }

    if (!formData.lastName.trim()) {
      message.error("Please enter last name");
      return;
    }

    if (!phone) {
      message.error("Please enter phone number");
      return;
    }

    if (!formData.email.trim()) {
      message.error("Please enter email address");
      return;
    }

    if (!formData.primaryDoctor) {
      message.error("Please select primary doctor");
      return;
    }

    if (!formData.dob) {
      message.error("Please select date of birth");
      return;
    }

    if (!formData.gender) {
      message.error("Please select gender");
      return;
    }

    if (!formData.bloodGroup) {
      message.error("Please select blood group");
      return;
    }

    setLoading(true);

    try {
      // Prepare patient data
      const patientData = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: phone,
        primaryDoctor: formData.primaryDoctor,
        dateOfBirth: formData.dob.format("YYYY-MM-DD"),
        gender: formData.gender,
        bloodGroup: formData.bloodGroup,
        status: formData.status,
        address: {
          address1: formData.address1,
          address2: formData.address2,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          pincode: formData.pincode
        }
      };

      console.log("📤 Submitting patient data:", patientData);

      // API call to create patient
      // Replace this with your actual API endpoint
      const response = await fetch('http://localhost:5000/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(patientData)
      });

      if (!response.ok) {
        throw new Error('Failed to create patient');
      }

      const result = await response.json();
      console.log("✅ Patient created successfully:", result);

      message.success("Patient added successfully!");

      // Close modal
      const modalElement = document.getElementById('add_modal');
      if (modalElement) {
        const bsModal = (window as any).bootstrap.Modal.getInstance(modalElement);
        if (bsModal) {
          bsModal.hide();
        }
      }

      // Reset form
      resetForm();

      // Trigger callback to refresh patient list
      if (onPatientAdded) {
        onPatientAdded();
      }

    } catch (error: any) {
      console.error("❌ Error creating patient:", error);
      message.error(error.message || "Failed to add patient");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Add Patient Modal */}
      <div className="modal fade" id="add_modal">
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
                <div className="form">
                  <h6 className="fw-bold mb-3">Patient Information</h6>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3 d-flex align-items-center">
                        <label className="form-label mb-0">Profile Image</label>
                        <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                          <i className="ti ti-user-plus fs-16" />
                          <input
                            type="file"
                            className="form-control image-sign"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                          <div className="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1">
                            <Link
                              to="#"
                              className="text-white d-flex align-items-center justify-content-center"
                            >
                              <i className="ti ti-photo fs-14" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          First Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="Enter first name"
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
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Enter last name"
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
                          onChange={setPhone}
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
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Primary Doctor
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Primary_Doctor}
                          className="select"
                          placeholder="Select Doctor"
                          onChange={(option: any) => setFormData({ ...formData, primaryDoctor: option?.value })}
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
                            onChange={(date) => setFormData({ ...formData, dob: date })}
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
                          onChange={(option: any) => setFormData({ ...formData, gender: option?.value })}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Blood Group<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Blood_Group}
                          className="select"
                          placeholder="Select Blood Group"
                          onChange={(option: any) => setFormData({ ...formData, bloodGroup: option?.value })}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Status<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Status}
                          className="select"
                          defaultValue={Status[0]}
                          onChange={(option: any) => setFormData({ ...formData, status: option?.value })}
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="fw-bold mb-3 border-top pt-3">
                    Address Information
                  </h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Address 1<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.address1}
                          onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                          placeholder="Enter address"
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
                          value={formData.address2}
                          onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                          placeholder="Enter address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label mb-1">
                          Country<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Country}
                          className="select"
                          placeholder="Select Country"
                          onChange={(option: any) => setFormData({ ...formData, country: option?.value })}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label mb-1">
                          State<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={State}
                          className="select"
                          placeholder="Select State"
                          onChange={(option: any) => setFormData({ ...formData, state: option?.value })}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label mb-1">
                          City<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={City}
                          className="select"
                          placeholder="Select City"
                          onChange={(option: any) => setFormData({ ...formData, city: option?.value })}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label mb-1">
                          Pincode<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          placeholder="Enter pincode"
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
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
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
    </>
  );
};

export default Modals;