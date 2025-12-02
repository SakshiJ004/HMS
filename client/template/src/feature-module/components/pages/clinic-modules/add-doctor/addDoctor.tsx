// import { DatePicker } from "antd";
// import { Link } from "react-router";
// import {
//   Appointment_Type,
//   Blood_Group,
//   City,
//   Country,
//   Department,
//   Designation,
//   Gender,
//   State,
// } from "../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import TagInput from "../../../../../core/common/Taginput";
// import { useState } from "react";
// import DuplicateForms from "../../../../../core/common/duplicate-forms/duplicateForms";
// import EducationForms from "../../../../../core/common/duplicate-forms/educationForm";
// import RewardsForms from "../../../../../core/common/duplicate-forms/rewardsForm";
// import { all_routes } from "../../../../routes/all_routes";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const AddDoctor = () => {
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };
//   const [tags, setTags] = useState<string[]>(["English", "French"]);
//   const handleTagsChange = (newTags: string[]) => {
//     setTags(newTags);
//   };

//   const [phone, setPhone] = useState<string | undefined>()

//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           <div className="row">
//             <div className="col-lg-10 mx-auto">
//               {/* Start Page Header */}
//               <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
//                 <div className="flex-grow-1">
//                   <h6 className="fw-bold mb-0 d-flex align-items-center">
//                     <Link to={all_routes.doctors}>
//                       <i className="ti ti-chevron-left me-1 fs-14" />
//                       Doctor
//                     </Link>
//                   </h6>
//                 </div>
//               </div>
//               {/* End Page Header */}
//               {/* Start Add Doctor */}
//               <div className="card">
//                 {/* <div class="card-header">

//                       </div> */}
//                 <div className="card-body">
//                   <div className="border-bottom d-flex align-items-center justify-content-between pb-3 mb-3">
//                     <h5 className="offcanvas-title fs-18 fw-bold">
//                       New Doctor
//                     </h5>
//                   </div>
//                   <form>
//                     <div className="bg-light px-3 py-2 mb-3">
//                       <h6 className="fw-bold mb-0">Contact Information</h6>
//                     </div>
//                     <div className="pb-0">
//                       {/* start row*/}
//                       <div className="row">
//                         <div className="col-lg-12">
//                           <div className="mb-3 d-flex align-items-center">
//                             <label className="form-label">Profile Image</label>
//                             <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
//                               <i className="ti ti-user-plus fs-16" />
//                               <input
//                                 type="file"
//                                 className="form-control image-sign"
//                                 multiple
//                               />
//                               <div className="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1">
//                                 <Link
//                                   to="#"
//                                   className="text-white d-flex align-items-center justify-content-center"
//                                 >
//                                   <i className="ti ti-photo fs-14" />
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         {/* end col*/}
//                         <div className="col-lg-12">
//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Name <span className="text-danger">*</span>
//                                 </label>
//                                 <input type="text" className="form-control" />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Username
//                                   <span className="text-danger">*</span>
//                                 </label>
//                                 <input type="text" className="form-control" />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Phone Number
//                                   <span className="text-danger">*</span>
//                                 </label>
//                                 <PhoneInput
//                             defaultCountry="US"
//                             value={phone}
//                             onChange={setPhone}
//                           />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Email Address
//                                   <span className="text-danger">*</span>
//                                 </label>
//                                 <input type="text" className="form-control" />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         {/* end col*/}
//                         <div className="col-lg-12">
//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   DOB <span className="text-danger">*</span>
//                                 </label>
//                                 <div className="input-icon-end position-relative">
//                                   <DatePicker
//                                     className="form-control datetimepicker"
//                                     format={{
//                                       format: "DD-MM-YYYY",
//                                       type: "mask",
//                                     }}
//                                     getPopupContainer={getModalContainer}
//                                     placeholder="DD-MM-YYYY"
//                                     suffixIcon={null}
//                                   />
//                                   <span className="input-icon-addon">
//                                     <i className="ti ti-calendar" />
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Year Of Experience
//                                   <span className="text-danger">*</span>
//                                 </label>
//                                 <input type="text" className="form-control" />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         {/* end col*/}
//                         <div className="col-lg-12">
//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Department
//                                   <span className="text-danger ms-1">*</span>
//                                 </label>
//                                 <CommonSelect
//                                   options={Department}
//                                   className="select"
//                                   defaultValue={Department[0]}
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Designation
//                                   <span className="text-danger ms-1">*</span>
//                                 </label>
//                                 <CommonSelect
//                                   options={Designation}
//                                   className="select"
//                                   defaultValue={Designation[0]}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         {/* end col*/}
//                         <div className="col-lg-12">
//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Medical License Number
//                                   <span className="text-danger">*</span>
//                                 </label>
//                                 <input type="text" className="form-control" />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Language Spoken
//                                 </label>
//                                 <TagInput
//                                   initialTags={tags}
//                                   onTagsChange={handleTagsChange}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         {/* end col*/}
//                         <div className="col-lg-12">
//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Blood Group
//                                   <span className="text-danger ms-1">*</span>
//                                 </label>
//                                 <CommonSelect
//                                   options={Blood_Group}
//                                   className="select"
//                                   defaultValue={Blood_Group[0]}
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Gender
//                                   <span className="text-danger ms-1">*</span>
//                                 </label>
//                                 <CommonSelect
//                                   options={Gender}
//                                   className="select"
//                                   defaultValue={Gender[0]}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         {/* end col*/}
//                         <div className="col-lg-12">
//                           <div className="mb-3">
//                             <label className="form-label">Bio</label>
//                             <textarea
//                               className="form-control"
//                               rows={3}
//                               defaultValue={"About Doctor"}
//                             />
//                           </div>
//                           <div className="form-check form-switch mb-3">
//                             <label
//                               className="form-check-label"
//                               htmlFor="switchCheckDefault"
//                             >
//                               Feature On Website
//                             </label>
//                             <input
//                               className="form-check-input"
//                               type="checkbox"
//                               role="switch"
//                               id="switchCheckDefault"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       {/* end row*/}
//                     </div>
//                     <div className="bg-light px-3 py-2 mb-3">
//                       <h6 className="fw-bold mb-0">Address Information</h6>
//                     </div>
//                     <div className="pb-0">
//                       <div className="row">
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">Address 1</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">Address 2 </label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">Country</label>
//                             <CommonSelect
//                               options={Country}
//                               className="select"
//                               defaultValue={Country[0]}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">City</label>
//                             <CommonSelect
//                               options={City}
//                               className="select"
//                               defaultValue={City[0]}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">State</label>
//                             <CommonSelect
//                               options={State}
//                               className="select"
//                               defaultValue={State[0]}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">Pincode</label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-light px-3 py-2 mb-3">
//                       <h6 className="fw-bold mb-0">Address Information</h6>
//                     </div>
//                     <div className="p-3">
//                       <ul
//                         className="nav nav-pills schedule-tab mb-3"
//                         id="pills-tab"
//                         role="tablist"
//                       >
//                         <li className="nav-item me-1" role="presentation">
//                           <button
//                             className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active"
//                             data-bs-toggle="pill"
//                             data-bs-target="#schedule-1"
//                             type="button"
//                             role="tab"
//                             aria-selected="true"
//                           >
//                             Monday
//                           </button>
//                         </li>
//                         <li className="nav-item me-1" role="presentation">
//                           <button
//                             className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                             data-bs-toggle="pill"
//                             data-bs-target="#schedule-2"
//                             type="button"
//                             role="tab"
//                             aria-selected="false"
//                             tabIndex={-1}
//                           >
//                             Tuesday
//                           </button>
//                         </li>
//                         <li className="nav-item me-1" role="presentation">
//                           <button
//                             className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                             data-bs-toggle="pill"
//                             data-bs-target="#schedule-3"
//                             type="button"
//                             role="tab"
//                             aria-selected="false"
//                             tabIndex={-1}
//                           >
//                             Wednesday
//                           </button>
//                         </li>
//                         <li className="nav-item me-1" role="presentation">
//                           <button
//                             className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                             data-bs-toggle="pill"
//                             data-bs-target="#schedule-4"
//                             type="button"
//                             role="tab"
//                             aria-selected="false"
//                             tabIndex={-1}
//                           >
//                             Thursday
//                           </button>
//                         </li>
//                         <li className="nav-item me-1" role="presentation">
//                           <button
//                             className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                             data-bs-toggle="pill"
//                             data-bs-target="#schedule-5"
//                             type="button"
//                             role="tab"
//                             aria-selected="false"
//                             tabIndex={-1}
//                           >
//                             Friday
//                           </button>
//                         </li>
//                         <li className="nav-item me-1" role="presentation">
//                           <button
//                             className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                             data-bs-toggle="pill"
//                             data-bs-target="#schedule-6"
//                             type="button"
//                             role="tab"
//                             aria-selected="false"
//                             tabIndex={-1}
//                           >
//                             Saturday
//                           </button>
//                         </li>
//                         <li className="nav-item me-1" role="presentation">
//                           <button
//                             className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                             data-bs-toggle="pill"
//                             data-bs-target="#schedule-7"
//                             type="button"
//                             role="tab"
//                             aria-selected="false"
//                             tabIndex={-1}
//                           >
//                             Sunday
//                           </button>
//                         </li>
//                       </ul>
//                       <div className="tab-content" id="pills-tabContent">
//                         <div
//                           className="tab-pane fade active show"
//                           id="schedule-1"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedule-2"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedule-3"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedule-4"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedule-5"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedule-6"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedule-7"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <Link to="#" className="btn btn-dark">
//                           Apply All
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="bg-light px-3 py-2 mb-3">
//                       <h6 className="fw-bold mb-0">Appointment Information</h6>
//                     </div>
//                     <div className="pb-0">
//                       <div className="row">
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">
//                               Appointment Type
//                             </label>
//                             <CommonSelect
//                               options={Appointment_Type}
//                               className="select"
//                               defaultValue={Appointment_Type[0]}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-6" />
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">
//                               Accept bookings (in Advance)
//                             </label>
//                             <div className="input-group">
//                               <input type="text" className="form-control" />
//                               <span className="input-group-text bg-transparent text-dark fs-14">
//                                 Days
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">
//                               Appointment Duration
//                             </label>
//                             <div className="input-group">
//                               <input type="text" className="form-control" />
//                               <span className="input-group-text bg-transparent text-dark fs-14">
//                                 Mins
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">
//                               Consultation Charge
//                             </label>
//                             <div className="input-group">
//                               <input type="text" className="form-control" />
//                               <span className="input-group-text bg-transparent text-dark fs-14">
//                                 $
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">
//                               Max Bookings Per Slot
//                             </label>
//                             <input type="text" className="form-control" />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="form-check form-switch mb-3">
//                             <label
//                               className="form-check-label"
//                               htmlFor="switchCheckDefault2"
//                             >
//                               Display on Booking Page
//                             </label>
//                             <input
//                               className="form-check-input"
//                               type="checkbox"
//                               role="switch"
//                               id="switchCheckDefault2"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-light px-3 py-2 mb-3">
//                       <h6 className="fw-bold mb-0">Educational Information</h6>
//                     </div>
//                     <div className="pb-0">
//                       <div className="add-education-list">
//                         <EducationForms />
//                       </div>
//                     </div>
//                     <div className="bg-light px-3 py-2 mb-3">
//                       <h6 className="fw-bold mb-0">Awards &amp; Recognition</h6>
//                     </div>
//                     <div className="pb-0">
//                       <div className="add-award-list">
//                         <RewardsForms />
//                       </div>
//                     </div>
//                     <div className="bg-light px-3 py-2">
//                       <h6 className="fw-bold mb-0">Certifications</h6>
//                     </div>
//                     <div className="pb-3 mb-3 border-bottom">
//                       <div className="add-certification-list">
//                         <RewardsForms />
//                       </div>
//                     </div>
//                     <div className=" d-flex justify-content-end gap-2">
//                       <Link
//                         to="#"
//                         className="btn btn-light btm-md"
//                         data-bs-dismiss="offcanvas"
//                       >
//                         Cancel
//                       </Link>
//                       <button
//                         className="btn btn-primary btm-md"
//                         data-bs-toggle="modal"
//                         data-bs-target="#success_modal"
//                       >
//                         Add Doctor
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//                 {/* <div class="card-footer">

//                       </div> */}
//               </div>
//               {/* End Add Doctor */}
//             </div>
//           </div>
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

// export default AddDoctor;



import { DatePicker } from "antd";
import { Link, useNavigate } from "react-router";
import {
  Appointment_Type,
  Blood_Group,
  City,
  Country,
  Department,
  Designation,
  Gender,
  State,
} from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import TagInput from "../../../../../core/common/Taginput";
import { useState } from "react";
import DuplicateForms from "../../../../../core/common/duplicate-forms/duplicateForms";
import EducationForms from "../../../../../core/common/duplicate-forms/educationForm";
import RewardsForms from "../../../../../core/common/duplicate-forms/rewardsForm";
import { all_routes } from "../../../../routes/all_routes";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { createDoctor } from "../../../../../api/doctorService";
import type { DoctorFormData } from "../../../../../api/doctorService";
import { Dayjs } from "dayjs";

const AddDoctor = () => {
  const navigate = useNavigate();
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [dob, setDob] = useState<Dayjs | null>(null);
  const [yearOfExperience, setYearOfExperience] = useState("");
  const [department, setDepartment] = useState(Department[0]);
  const [designation, setDesignation] = useState(Designation[0]);
  const [medicalLicenseNumber, setMedicalLicenseNumber] = useState("");
  const [tags, setTags] = useState<string[]>(["English", "French"]);
  const [bloodGroup, setBloodGroup] = useState(Blood_Group[0]);
  const [gender, setGender] = useState(Gender[0]);
  const [bio, setBio] = useState("About Doctor");
  const [featureOnWebsite, setFeatureOnWebsite] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successModalData, setSuccessModalData] = useState<{
    email: string;
    password: string;
    username: string;
  } | null>(null);

  // Address state
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState(Country[0]);
  const [city, setCity] = useState(City[0]);
  const [state, setState] = useState(State[0]);
  const [pincode, setPincode] = useState("");

  // Schedule state - one for each day
  const [mondaySchedule, setMondaySchedule] = useState<Array<{ startTime: string; endTime: string }>>([]);
  const [tuesdaySchedule, setTuesdaySchedule] = useState<Array<{ startTime: string; endTime: string }>>([]);
  const [wednesdaySchedule, setWednesdaySchedule] = useState<Array<{ startTime: string; endTime: string }>>([]);
  const [thursdaySchedule, setThursdaySchedule] = useState<Array<{ startTime: string; endTime: string }>>([]);
  const [fridaySchedule, setFridaySchedule] = useState<Array<{ startTime: string; endTime: string }>>([]);
  const [saturdaySchedule, setSaturdaySchedule] = useState<Array<{ startTime: string; endTime: string }>>([]);
  const [sundaySchedule, setSundaySchedule] = useState<Array<{ startTime: string; endTime: string }>>([]);

  // Appointment state
  const [appointmentType, setAppointmentType] = useState(Appointment_Type[0]);
  const [acceptBookingsDays, setAcceptBookingsDays] = useState("");
  const [appointmentDuration, setAppointmentDuration] = useState("");
  const [consultationCharge, setConsultationCharge] = useState("");
  const [maxBookingsPerSlot, setMaxBookingsPerSlot] = useState("");
  const [displayOnBookingPage, setDisplayOnBookingPage] = useState(false);

  // Professional details state
  const [education, setEducation] = useState<Array<{ degree: string; college: string; year: string }>>([]);
  const [awards, setAwards] = useState<Array<{ title: string; year: string }>>([]);
  const [certifications, setCertifications] = useState<Array<{ title: string; year: string }>>([]);

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  // Handle profile image upload
  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfileImage(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // Handle profile image upload with compression
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          // Create canvas to compress image
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;

          let width = img.width;
          let height = img.height;

          // Calculate new dimensions
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = height * (MAX_WIDTH / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = width * (MAX_HEIGHT / height);
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          // Compress to 70% quality
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
          setProfileImage(compressedBase64);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopyCredentials = () => {
    if (!successModalData) return;

    const text = `Email: ${successModalData.email}\nUsername: ${successModalData.username}\nPassword: ${successModalData.password}`;
    navigator.clipboard.writeText(text);
    alert('Credentials copied to clipboard!');
  };

  // Apply current active tab's schedule to all days
  const handleApplyAllSchedules = () => {
    // Find which tab is currently active
    const activeTab = document.querySelector('.schedule-tab .nav-link.active');
    if (!activeTab) return;

    // Get the active day's schedule
    let sourceSchedule: Array<{ startTime: string; endTime: string }> = [];

    if (activeTab.textContent?.includes('Monday')) sourceSchedule = mondaySchedule;
    else if (activeTab.textContent?.includes('Tuesday')) sourceSchedule = tuesdaySchedule;
    else if (activeTab.textContent?.includes('Wednesday')) sourceSchedule = wednesdaySchedule;
    else if (activeTab.textContent?.includes('Thursday')) sourceSchedule = thursdaySchedule;
    else if (activeTab.textContent?.includes('Friday')) sourceSchedule = fridaySchedule;
    else if (activeTab.textContent?.includes('Saturday')) sourceSchedule = saturdaySchedule;
    else if (activeTab.textContent?.includes('Sunday')) sourceSchedule = sundaySchedule;

    if (sourceSchedule.length === 0) {
      alert('Please add at least one time slot before applying to all days');
      return;
    }

    // Confirm with user
    if (!window.confirm('This will replace schedules on all other days. Continue?')) {
      return;
    }

    // Apply to all days
    setMondaySchedule([...sourceSchedule]);
    setTuesdaySchedule([...sourceSchedule]);
    setWednesdaySchedule([...sourceSchedule]);
    setThursdaySchedule([...sourceSchedule]);
    setFridaySchedule([...sourceSchedule]);
    setSaturdaySchedule([...sourceSchedule]);
    setSundaySchedule([...sourceSchedule]);

    alert('Schedule applied to all days successfully!');
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate required fields
      if (!firstName || !lastName || !username || !email || !phone || !dob || !yearOfExperience ||
        !medicalLicenseNumber || !address1 || !city || !state || !pincode) {
        setError("Please fill in all required fields");
        setLoading(false);
        return;
      }

      // Prepare schedules array
      const schedules = [];
      if (mondaySchedule.length > 0) schedules.push({ day: "Monday", timeSlots: mondaySchedule });
      if (tuesdaySchedule.length > 0) schedules.push({ day: "Tuesday", timeSlots: tuesdaySchedule });
      if (wednesdaySchedule.length > 0) schedules.push({ day: "Wednesday", timeSlots: wednesdaySchedule });
      if (thursdaySchedule.length > 0) schedules.push({ day: "Thursday", timeSlots: thursdaySchedule });
      if (fridaySchedule.length > 0) schedules.push({ day: "Friday", timeSlots: fridaySchedule });
      if (saturdaySchedule.length > 0) schedules.push({ day: "Saturday", timeSlots: saturdaySchedule });
      if (sundaySchedule.length > 0) schedules.push({ day: "Sunday", timeSlots: sundaySchedule });

      // Prepare form data
      const doctorData: DoctorFormData = {
        firstName,
        lastName,
        username,
        email,
        phone,
        dob: dob.format("YYYY-MM-DD"),
        yearOfExperience: parseInt(yearOfExperience),
        department: department.value,
        designation: designation.value,
        medicalLicenseNumber,
        languageSpoken: tags,
        bloodGroup: bloodGroup.value,
        gender: gender.value,
        bio,
        featureOnWebsite,
        address: {
          address1,
          address2,
          city: city.value,
          state: state.value,
          country: country.value,
          pincode,
        },
        appointmentType: appointmentType.value,
        acceptBookingsDays: acceptBookingsDays ? parseInt(acceptBookingsDays) : 0,
        appointmentDuration: appointmentDuration ? parseInt(appointmentDuration) : 30,
        consultationCharge: consultationCharge ? parseFloat(consultationCharge) : 0,
        maxBookingsPerSlot: maxBookingsPerSlot ? parseInt(maxBookingsPerSlot) : 1,
        displayOnBookingPage,
        education: education.filter(e => e.degree && e.college && e.year),
        awards: awards.filter(a => a.title && a.year),
        certifications: certifications.filter(c => c.title && c.year),
        schedules,
        profileImage: profileImage || undefined,
      };

      // Submit to backend
      const response = await createDoctor(doctorData);

      console.log("Doctor created successfully:", response);

      // Show success message (you can add a toast notification here)
      // alert(`Doctor created successfully!\n\nCredentials:\nEmail: ${response.data.credentials.email}\nPassword: ${response.data.credentials.password}\nUsername: ${response.data.credentials.username}\n\nPlease save these credentials!`);
      // Show success modal with credentials
      setSuccessModalData({
        email: response.data.credentials.email,
        password: response.data.credentials.password,
        username: response.data.credentials.username
      });
      setShowSuccessModal(true);
      setLoading(false);


      // navigate(all_routes.doctors);
    } catch (err: any) {
      console.error("Error creating doctor:", err);
      setError(err.message || "Failed to create doctor Please try again.");
      setLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel? All entered data will be lost.")) {
      navigate(all_routes.doctors);
    }
  };

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* Start Page Header */}
              <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-0 d-flex align-items-center">
                    <Link to={all_routes.doctors}>
                      <i className="ti ti-chevron-left me-1 fs-14" />
                      Doctor
                    </Link>
                  </h6>
                </div>
              </div>
              {/* End Page Header */}
              {/* Start Add Doctor */}
              <div className="card">
                <div className="card-body">
                  <div className="border-bottom d-flex align-items-center justify-content-between pb-3 mb-3">
                    <h5 className="offcanvas-title fs-18 fw-bold">
                      New Doctor
                    </h5>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      {error}
                      <button type="button" className="btn-close" onClick={() => setError("")}></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Contact Information</h6>
                    </div>
                    <div className="pb-0">
                      {/* start row*/}
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3 d-flex align-items-center">
                            <label className="form-label">Profile Image</label>
                            <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                              {profileImage ? (
                                <img src={profileImage} alt="Profile" className="w-100 h-100 object-fit-cover" />
                              ) : (
                                <i className="ti ti-user-plus fs-16" />
                              )}
                              <input
                                type="file"
                                className="form-control image-sign"
                                accept="image/*"
                                onChange={handleImageUpload}
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
                        {/* end col*/}
                        
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  First Name <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={firstName}
                                  onChange={(e) => setFirstName(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Last Name <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Username
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Email Address
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Phone Number
                                  <span className="text-danger">*</span>
                                </label>
                                <PhoneInput
                                  defaultCountry="US"
                                  value={phone}
                                  onChange={setPhone}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col*/}
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  DOB <span className="text-danger">*</span>
                                </label>
                                <div className="input-icon-end position-relative">
                                  <DatePicker
                                    className="form-control datetimepicker"
                                    format={{
                                      format: "DD-MM-YYYY",
                                      type: "mask",
                                    }}
                                    getPopupContainer={getModalContainer}
                                    placeholder="DD-MM-YYYY"
                                    suffixIcon={null}
                                    value={dob}
                                    onChange={(date) => setDob(date)}
                                  />
                                  <span className="input-icon-addon">
                                    <i className="ti ti-calendar" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Year Of Experience
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  value={yearOfExperience}
                                  onChange={(e) => setYearOfExperience(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col*/}
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Department
                                  <span className="text-danger ms-1">*</span>
                                </label>
                                <CommonSelect
                                  options={Department}
                                  className="select"
                                  value={department}
                                  // onChange={setDepartment}
                                  onChange={(option) => option && setDepartment(option)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Designation
                                  <span className="text-danger ms-1">*</span>
                                </label>
                                <CommonSelect
                                  options={Designation}
                                  className="select"
                                  value={designation}
                                  // onChange={setDesignation}
                                  onChange={(option) => option && setDesignation(option)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col*/}
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Medical License Number
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={medicalLicenseNumber}
                                  onChange={(e) => setMedicalLicenseNumber(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Language Spoken
                                </label>
                                <TagInput
                                  initialTags={tags}
                                  onTagsChange={handleTagsChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col*/}
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Blood Group
                                  <span className="text-danger ms-1">*</span>
                                </label>
                                <CommonSelect
                                  options={Blood_Group}
                                  className="select"
                                  value={bloodGroup}
                                  // onChange={setBloodGroup}
                                  onChange={(option) => option && setBloodGroup(option)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Gender
                                  <span className="text-danger ms-1">*</span>
                                </label>
                                <CommonSelect
                                  options={Gender}
                                  className="select"
                                  value={gender}
                                  // onChange={setGender}
                                  onChange={(option) => option && setGender(option)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col*/}
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Bio</label>
                            <textarea
                              className="form-control"
                              rows={3}
                              value={bio}
                              onChange={(e) => setBio(e.target.value)}
                            />
                          </div>
                          <div className="form-check form-switch mb-3">
                            <label
                              className="form-check-label"
                              htmlFor="switchCheckDefault"
                            >
                              Feature On Website
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="switchCheckDefault"
                              checked={featureOnWebsite}
                              onChange={(e) => setFeatureOnWebsite(e.target.checked)}
                            />
                          </div>
                        </div>
                      </div>
                      {/* end row*/}
                    </div>
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Address Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Address 1 <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={address1}
                              onChange={(e) => setAddress1(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Address 2 </label>
                            <input
                              type="text"
                              className="form-control"
                              value={address2}
                              onChange={(e) => setAddress2(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Country</label>
                            <CommonSelect
                              options={Country}
                              className="select"
                              value={country}
                              // onChange={setCountry}
                              onChange={(option) => option && setCountry(option)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              City <span className="text-danger">*</span>
                            </label>
                            <CommonSelect
                              options={City}
                              className="select"
                              value={city}
                              // onChange={setCity}
                              onChange={(option) => option && setCity(option)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              State <span className="text-danger">*</span>
                            </label>
                            <CommonSelect
                              options={State}
                              className="select"
                              value={state}
                              // onChange={setState}
                              onChange={(option) => option && setState(option)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Pincode <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={pincode}
                              onChange={(e) => setPincode(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Schedule Information</h6>
                    </div>
                    <div className="p-3">
                      <ul
                        className="nav nav-pills schedule-tab mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item me-1" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active"
                            data-bs-toggle="pill"
                            data-bs-target="#schedule-1"
                            type="button"
                            role="tab"
                            aria-selected="true"
                          >
                            Monday
                          </button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                            data-bs-toggle="pill"
                            data-bs-target="#schedule-2"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            Tuesday
                          </button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                            data-bs-toggle="pill"
                            data-bs-target="#schedule-3"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            Wednesday
                          </button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                            data-bs-toggle="pill"
                            data-bs-target="#schedule-4"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            Thursday
                          </button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                            data-bs-toggle="pill"
                            data-bs-target="#schedule-5"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            Friday
                          </button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                            data-bs-toggle="pill"
                            data-bs-target="#schedule-6"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            Saturday
                          </button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                            data-bs-toggle="pill"
                            data-bs-target="#schedule-7"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            Sunday
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade active show"
                          id="schedule-1"
                          role="tabpanel"
                        >
                          <div className="add-schedule-list">
                            <DuplicateForms
                              onScheduleChange={setMondaySchedule}
                              scheduleData={mondaySchedule}
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="schedule-2"
                          role="tabpanel"
                        >
                          <div className="add-schedule-list">
                            <DuplicateForms
                              onScheduleChange={setTuesdaySchedule}
                              scheduleData={tuesdaySchedule}
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="schedule-3"
                          role="tabpanel"
                        >
                          <div className="add-schedule-list">
                            <DuplicateForms
                              onScheduleChange={setWednesdaySchedule}
                              scheduleData={wednesdaySchedule}
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="schedule-4"
                          role="tabpanel"
                        >
                          <div className="add-schedule-list">
                            <DuplicateForms
                              onScheduleChange={setThursdaySchedule}
                              scheduleData={thursdaySchedule}
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="schedule-5"
                          role="tabpanel"
                        >
                          <div className="add-schedule-list">
                            <DuplicateForms
                              onScheduleChange={setFridaySchedule}
                              scheduleData={fridaySchedule}
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="schedule-6"
                          role="tabpanel"
                        >
                          <div className="add-schedule-list">
                            <DuplicateForms
                              onScheduleChange={setSaturdaySchedule}
                              scheduleData={saturdaySchedule}
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="schedule-7"
                          role="tabpanel"
                        >
                          <div className="add-schedule-list">
                            <DuplicateForms
                              onScheduleChange={setSundaySchedule}
                              scheduleData={sundaySchedule}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button type="button" className="btn btn-dark" onClick={handleApplyAllSchedules}>
                          Apply All
                        </button>
                      </div>
                    </div>
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Appointment Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Appointment Type
                            </label>
                            <CommonSelect
                              options={Appointment_Type}
                              className="select"
                              value={appointmentType}
                              // onChange={setAppointmentType}
                              onChange={(option) => option && setAppointmentType(option)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6" />
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Accept bookings (in Advance)
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                value={acceptBookingsDays}
                                onChange={(e) => setAcceptBookingsDays(e.target.value)}
                              />
                              <span className="input-group-text bg-transparent text-dark fs-14">
                                Days
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Appointment Duration
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                value={appointmentDuration}
                                onChange={(e) => setAppointmentDuration(e.target.value)}
                              />
                              <span className="input-group-text bg-transparent text-dark fs-14">
                                Mins
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Consultation Charge
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                value={consultationCharge}
                                onChange={(e) => setConsultationCharge(e.target.value)}
                              />
                              <span className="input-group-text bg-transparent text-dark fs-14">
                                $
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Max Bookings Per Slot
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              value={maxBookingsPerSlot}
                              onChange={(e) => setMaxBookingsPerSlot(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check form-switch mb-3">
                            <label
                              className="form-check-label"
                              htmlFor="switchCheckDefault2"
                            >
                              Display on Booking Page
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="switchCheckDefault2"
                              checked={displayOnBookingPage}
                              onChange={(e) => setDisplayOnBookingPage(e.target.checked)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Educational Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="add-education-list">
                        <EducationForms
                          onEducationChange={setEducation}
                          educationData={education}
                        />
                      </div>
                    </div>
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Awards &amp; Recognition</h6>
                    </div>
                    <div className="pb-0">
                      <div className="add-award-list">
                        <RewardsForms
                          onRewardsChange={setAwards}
                          rewardsData={awards}
                        />
                      </div>
                    </div>
                    <div className="bg-light px-3 py-2">
                      <h6 className="fw-bold mb-0">Certifications</h6>
                    </div>
                    <div className="pb-3 mb-3 border-bottom">
                      <div className="add-certification-list">
                        <RewardsForms
                          onRewardsChange={setCertifications}
                          rewardsData={certifications}
                        />
                      </div>
                    </div>
                    <div className=" d-flex justify-content-end gap-2">
                      <button
                        type="button"
                        className="btn btn-light btm-md"
                        onClick={handleCancel}
                        disabled={loading}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary btm-md"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Creating...
                          </>
                        ) : (
                          'Add Doctor'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* End Add Doctor */}
            </div>
          </div>
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
        {/* Footer End */}
      </div>
      {/* ========================
			End Page Content
		========================= */}

      {/* Success Modal with Credentials */}
      {showSuccessModal && successModalData && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">
                  <i className="ti ti-check-circle me-2"></i>
                  Doctor Created Successfully!
                </h5>
              </div>
              <div className="modal-body">
                <div className="alert alert-warning mb-3">
                  <i className="ti ti-alert-triangle me-2"></i>
                  <strong>Important:</strong> Copy these credentials now. The password will not be shown again!
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={successModalData.email}
                      readOnly
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Username</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={successModalData.username}
                      readOnly
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Password</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={successModalData.password}
                      readOnly
                    />
                  </div>
                </div>

                <button
                  className="btn btn-primary w-100 mb-2"
                  onClick={handleCopyCredentials}
                >
                  <i className="ti ti-copy me-2"></i>
                  Copy All Credentials
                </button>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success w-100"
                  onClick={() => {
                    setShowSuccessModal(false);
                    navigate(all_routes.doctors);
                  }}
                >
                  Go to Doctors List
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddDoctor;

