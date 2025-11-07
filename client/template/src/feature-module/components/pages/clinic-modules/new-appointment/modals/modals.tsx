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


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Gender,
  Status,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import { DatePicker, message } from "antd";
import type { Dayjs } from 'dayjs';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Country, State, City } from "country-state-city";

// Enhanced Blood Group with AB+ and AB-
const BLOOD_GROUPS = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

// Define types
interface SelectOption {
  value: string;
  label: string;
}

interface Patient {
  _id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Add other patient fields as needed
}

interface ModalsProps {
  onPatientAdded?: (patient: Patient) => void;
}

const Modals = ({ onPatientAdded }: ModalsProps) => {
  const [phone, setPhone] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Country, State, City states
  const [countries, setCountries] = useState<SelectOption[]>([]);
  const [states, setStates] = useState<SelectOption[]>([]);
  const [cities, setCities] = useState<SelectOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("IN"); // Default India
  const [selectedState, setSelectedState] = useState("");

  // Form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    primaryDoctor: "",
    dob: null as Dayjs | null,
    gender: "",
    bloodGroup: "",
    status: "Available",
    address1: "",
    address2: "",
    country: "India",
    state: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    fetchDoctors();
    loadCountries();
  }, []);

  // Load countries on mount
  const loadCountries = () => {
    const allCountries = Country.getAllCountries();
    const countryOptions: SelectOption[] = allCountries.map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(countryOptions);

    // Load India's states by default
    loadStates("IN");
  };

  // Load states when country changes
  const loadStates = (countryCode: string) => {
    const countryStates = State.getStatesOfCountry(countryCode);
    const stateOptions: SelectOption[] = countryStates.map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
    setStates(stateOptions);
    setCities([]); // Reset cities
  };

  // Load cities when state changes
  const loadCities = (countryCode: string, stateCode: string) => {
    const stateCities = City.getCitiesOfState(countryCode, stateCode);
    const cityOptions: SelectOption[] = stateCities.map((city) => ({
      value: city.name,
      label: city.name,
    }));
    setCities(cityOptions);
  };

  const fetchDoctors = async () => {
    try {
      const response = await fetch("/api/doctors");
      const data = await response.json();
      setDoctors(data.data || []);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      message.error("Failed to load doctors");
    }
  };

  const doctorOptions = doctors.map((doctor: any) => ({
    value: doctor._id,
    label: `${doctor.fullName} - ${doctor.specialization}`,
  }));

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        message.error("Please upload an image file (jpg, jpeg, png)");
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleCountryChange = (option: any) => {
    const countryCode = option?.value || "IN";
    const countryName = option?.label || "India";
    setSelectedCountry(countryCode);
    setSelectedState("");
    setFormData({ ...formData, country: countryName, state: "", city: "" });
    loadStates(countryCode);
  };

  const handleStateChange = (option: any) => {
    const stateCode = option?.value || "";
    const stateName = option?.label || "";
    setSelectedState(stateCode);
    setFormData({ ...formData, state: stateName, city: "" });
    loadCities(selectedCountry, stateCode);
  };

  const handleCityChange = (option: any) => {
    const cityName = option?.label || "";
    setFormData({ ...formData, city: cityName });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validation
      if (!formData.firstName || !formData.lastName) {
        message.error("Please enter first and last name");
        setLoading(false);
        return;
      }

      if (!phone) {
        message.error("Please enter phone number");
        setLoading(false);
        return;
      }

      if (!formData.email) {
        message.error("Please enter email address");
        setLoading(false);
        return;
      }

      if (!formData.primaryDoctor) {
        message.error("Please select a primary doctor");
        setLoading(false);
        return;
      }

      if (!formData.dob) {
        message.error("Please select date of birth");
        setLoading(false);
        return;
      }

      if (!formData.gender) {
        message.error("Please select gender");
        setLoading(false);
        return;
      }

      if (!formData.bloodGroup) {
        message.error("Please select blood group");
        setLoading(false);
        return;
      }

      // Prepare form data for submission
      const submitData = new FormData();
      submitData.append("firstName", formData.firstName);
      submitData.append("lastName", formData.lastName);
      submitData.append("fullName", `${formData.firstName} ${formData.lastName}`);
      submitData.append("phone", phone);
      submitData.append("email", formData.email);
      submitData.append("primaryDoctor", formData.primaryDoctor);
      submitData.append("dob", formData.dob.format("YYYY-MM-DD"));
      submitData.append("gender", formData.gender);
      submitData.append("bloodGroup", formData.bloodGroup);
      submitData.append("status", formData.status);
      submitData.append("address1", formData.address1);
      submitData.append("address2", formData.address2);
      submitData.append("country", formData.country);
      submitData.append("state", formData.state);
      submitData.append("city", formData.city);
      submitData.append("pincode", formData.pincode);

      if (imageFile) {
        submitData.append("profileImage", imageFile);
      }

      // Submit to API
      const response = await fetch("/api/patients", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) {
        throw new Error("Failed to create patient");
      }

      const result = await response.json();

      message.success("Patient added successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        primaryDoctor: "",
        dob: null,
        gender: "",
        bloodGroup: "",
        status: "Available",
        address1: "",
        address2: "",
        country: "India",
        state: "",
        city: "",
        pincode: "",
      });
      setPhone(undefined);
      setImagePreview(null);
      setImageFile(null);

      // Notify parent component
      if (onPatientAdded) {
        onPatientAdded(result.data);
      }

      // Close modal
      const modal = document.getElementById("add_modal");
      const backdrop = document.querySelector(".modal-backdrop");
      if (modal) {
        modal.classList.remove("show");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        if (backdrop) {
          backdrop.remove();
        }
      }
    } catch (error: any) {
      console.error("Error creating patient:", error);
      message.error(error.message || "Failed to create patient");
    } finally {
      setLoading(false);
    }
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  return (
    <>
      {/* Start Add modal */}
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
              >
                <i className="ti ti-x bg-white fs-16 text-dark" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body pb-0">
                <h6 className="fw-bold mb-3">Patient Information</h6>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3 d-flex align-items-center">
                      <label className="form-label mb-0">Profile Image</label>
                      <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <i className="ti ti-user-plus fs-16" />
                        )}
                        <input
                          type="file"
                          className="form-control image-sign"
                          accept="image/jpeg,image/jpg,image/png"
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
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
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
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium custom-phoneinput">
                        Phone Number<span className="text-danger ms-1">*</span>
                      </label>
                      <PhoneInput
                        defaultCountry="IN"
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
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
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
                        options={doctorOptions}
                        className="select"
                        placeholder="Select Doctor"
                        onChange={(option: any) =>
                          setFormData({
                            ...formData,
                            primaryDoctor: option?.value || "",
                          })
                        }
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
                          suffixIcon={null}
                          onChange={(date) =>
                            setFormData({ ...formData, dob: date })
                          }
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
                          setFormData({
                            ...formData,
                            gender: option?.value || "",
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Blood Group<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={BLOOD_GROUPS}
                        className="select"
                        placeholder="Select Blood Group"
                        onChange={(option: any) =>
                          setFormData({
                            ...formData,
                            bloodGroup: option?.value || "",
                          })
                        }
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
                        onChange={(option: any) =>
                          setFormData({
                            ...formData,
                            status: option?.value || "Available",
                          })
                        }
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
                        onChange={(e) =>
                          setFormData({ ...formData, address1: e.target.value })
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
                        value={formData.address2}
                        onChange={(e) =>
                          setFormData({ ...formData, address2: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1">
                        Country<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={countries}
                        className="select"
                        defaultValue={{ value: "IN", label: "India" }}
                        onChange={handleCountryChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1">
                        State<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={states}
                        className="select"
                        placeholder="Select State"
                        onChange={handleStateChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1">
                        City<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={cities}
                        className="select"
                        placeholder="Select City"
                        onChange={handleCityChange}
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
                        onChange={(e) =>
                          setFormData({ ...formData, pincode: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                  data-bs-dismiss="modal"
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