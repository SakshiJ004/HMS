// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { DatePicker } from "antd";
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
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const EditDoctor = () => {
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
//                       Edit Doctor
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
//                               <ImageWithBasePath
//                                 src="assets/img/doctors/doctor-01.jpg"
//                                 className="position-relative z-n1"
//                                 alt=""
//                               />
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
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   defaultValue="Dr.Mick Thompson"
//                                 />
//                               </div>
//                             </div>
//                             {/* end col*/}
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Username
//                                   <span className="text-danger">*</span>
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   defaultValue="Andrew"
//                                 />
//                               </div>
//                             </div>
//                             {/* end col*/}
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Phone Number
//                                   <span className="text-danger">*</span>
//                                 </label>
//  <PhoneInput
//                             defaultCountry="US"
//                             value={phone}
//                             onChange={setPhone}
//                           />
//                               </div>
//                             </div>
//                             {/* end col*/}
//                             <div className="col-lg-6">
//                               <div className="mb-3">
//                                 <label className="form-label">
//                                   Email Address
//                                   <span className="text-danger">*</span>
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   defaultValue="mick@example.com"
//                                 />
//                               </div>
//                             </div>
//                             {/* end col*/}
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
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   defaultValue="+5 Years"
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
//                                   defaultValue={Department[0]}
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
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   defaultValue="MGF14578"
//                                 />
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
//                                   defaultValue={Blood_Group[0]}
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
//                               defaultValue={
//                                 "Dr.Mick Thompson is a compassionate and experienced internal medicine physician with over 5 years of clinical practice."
//                               }
//                             />
//                           </div>
//                           <div className="form-check form-switch mb-3">
//                             <label
//                               className="form-check-label"
//                               htmlFor="switchCheckDefault3"
//                             >
//                               Feature On Website
//                             </label>
//                             <input
//                               className="form-check-input"
//                               type="checkbox"
//                               role="switch"
//                               id="switchCheckDefault3"
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
//                             <input
//                               type="text"
//                               className="form-control"
//                               defaultValue="2900 Alpha Avenue"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="mb-3">
//                             <label className="form-label">Address 2 </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               defaultValue="2900 Alpha Avenue"
//                             />
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
//                             <input
//                               type="text"
//                               className="form-control"
//                               defaultValue="PA 15650"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-light px-3 py-2 mb-3">
//                       <h6 className="fw-bold mb-0">Address Information</h6>
//                     </div>
//                     <div>
//                       <ul
//                         className="nav nav-pills schedule-tab mb-3"
//                         id="pills-tab2"
//                         role="tablist"
//                       >
//                         <li className="nav-item me-1" role="presentation">
//                           <button
//                             className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active"
//                             data-bs-toggle="pill"
//                             data-bs-target="#schedules-8"
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
//                             data-bs-target="#schedules-9"
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
//                             data-bs-target="#schedules-10"
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
//                             data-bs-target="#schedules-11"
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
//                             data-bs-target="#schedules-12"
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
//                             data-bs-target="#schedules-13"
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
//                             data-bs-target="#schedules-14"
//                             type="button"
//                             role="tab"
//                             aria-selected="false"
//                             tabIndex={-1}
//                           >
//                             Sunday
//                           </button>
//                         </li>
//                       </ul>
//                       <div className="tab-content" id="pills-tabContent2">
//                         <div
//                           className="tab-pane fade active show"
//                           id="schedules-8"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedules-9"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedules-10"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedules-11"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedules-12"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedules-13"
//                           role="tabpanel"
//                         >
//                           <div className="add-schedule-list">
//                             <DuplicateForms />
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade"
//                           id="schedules-14"
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
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 defaultValue={2}
//                               />
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
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 defaultValue={30}
//                               />
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
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 defaultValue="$100"
//                               />
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
//                             <input
//                               type="text"
//                               className="form-control"
//                               defaultValue={200}
//                             />
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
//                       <button className="btn btn-primary btm-md">
//                         Save Changes
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

// export default EditDoctor;



import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { DatePicker } from "antd";
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
import { useEffect, useState } from "react";
import DuplicateForms from "../../../../../core/common/duplicate-forms/duplicateForms";
import EducationForms from "../../../../../core/common/duplicate-forms/educationForm";
import RewardsForms from "../../../../../core/common/duplicate-forms/rewardsForm";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { getDoctor, updateDoctor } from "../../../../../api/doctorService";
import dayjs from "dayjs";

interface DoctorFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  dob: string;
  yearOfExperience: string | number;
  department: string;
  designation: string;
  medicalLicenseNumber: string;
  languageSpoken?: string[];
  bloodGroup: string;
  gender: string;
  bio?: string;
  featureOnWebsite?: boolean;
  address: {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    country?: string;
    pincode: string;
  };
  appointmentType?: string;
  acceptBookingsDays?: number;
  appointmentDuration?: number;
  consultationCharge?: number;
  maxBookingsPerSlot?: number;
  displayOnBookingPage?: boolean;
  education?: Array<{ degree: string; college: string; fromYear?: string; year: string }>;
  awards?: Array<{ title: string; year: string }>;
  certifications?: Array<{ title: string; year: string }>;
  schedules?: Array<{
    day: string;
    timeSlots: Array<{ startTime: string; endTime: string }>;
  }>;
  profileImage?: string;
}

const EditDoctor = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const doctorId = searchParams.get("id");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Form state
  const [formData, setFormData] = useState<DoctorFormData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    yearOfExperience: "",
    department: "",
    designation: "",
    medicalLicenseNumber: "",
    languageSpoken: [],
    bloodGroup: "",
    gender: "",
    bio: "",
    featureOnWebsite: false,
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    appointmentType: "",
    acceptBookingsDays: 0,
    appointmentDuration: 30,
    consultationCharge: 0,
    maxBookingsPerSlot: 1,
    displayOnBookingPage: false,
    education: [],
    awards: [],
    certifications: [],
    schedules: [],
    profileImage: "",
  });

  const [tags, setTags] = useState<string[]>([]);
  const [profilePreview, setProfilePreview] = useState<string>("");
  const [activeDay, setActiveDay] = useState("Monday");

  // Fetch doctor data on mount
  useEffect(() => {
    if (doctorId) {
      fetchDoctorData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctorId]);

  const fetchDoctorData = async () => {
    try {
      setLoading(true);
      const response = await getDoctor(doctorId!);

      if (response.success && response.data) {
        const doctor = response.data;

        setFormData({
          firstName: doctor.firstName || "",
          lastName: doctor.lastName || "",
          username: doctor.username || "",
          email: doctor.email || "",
          phone: doctor.phone || "",
          dob: doctor.dob || "",
          yearOfExperience: doctor.yearOfExperience || "",
          department: doctor.department || "",
          designation: doctor.designation || "",
          medicalLicenseNumber: doctor.medicalLicenseNumber || "",
          languageSpoken: doctor.languageSpoken || [],
          bloodGroup: doctor.bloodGroup || "",
          gender: doctor.gender || "",
          bio: doctor.bio || "",
          featureOnWebsite: doctor.featureOnWebsite || false,
          address: {
            address1: doctor.address?.address1 || "",
            address2: doctor.address?.address2 || "",
            city: doctor.address?.city || "",
            state: doctor.address?.state || "",
            country: doctor.address?.country || "",
            pincode: doctor.address?.pincode || "",
          },
          appointmentType: doctor.appointmentType || "",
          acceptBookingsDays: doctor.acceptBookingsDays || 0,
          appointmentDuration: doctor.appointmentDuration || 30,
          consultationCharge: doctor.consultationCharge || 0,
          maxBookingsPerSlot: doctor.maxBookingsPerSlot || 1,
          displayOnBookingPage: doctor.displayOnBookingPage || false,
          education: doctor.education || [],
          awards: doctor.awards || [],
          certifications: doctor.certifications || [],
          schedules: doctor.schedules || [],
          profileImage: doctor.profileImage || "",
        });

        setTags(doctor.languageSpoken || []);
        setProfilePreview(doctor.profileImage || "");
      }
    } catch (err: any) {
      console.error("Error fetching doctor:", err);
      setError(err.message || "Failed to load doctor data");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfilePreview(base64String);
        setFormData((prev) => ({
          ...prev,
          profileImage: base64String,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScheduleChange = (day: string, schedules: Array<{ startTime: string; endTime: string }>) => {
    setFormData((prev) => {
      const existingSchedules = prev.schedules || [];
      const filteredSchedules = existingSchedules.filter((s) => s.day !== day);

      // Only update if schedules actually changed
      const existingDaySchedule = existingSchedules.find((s) => s.day === day);
      if (existingDaySchedule && JSON.stringify(existingDaySchedule.timeSlots) === JSON.stringify(schedules)) {
        return prev;
      }

      return {
        ...prev,
        schedules: [
          ...filteredSchedules,
          {
            day,
            timeSlots: schedules,
          },
        ],
      };
    });
  };

  const handleEducationChange = (education: Array<{ degree: string; college: string; fromYear?: string; year: string }>) => {
    setFormData((prev) => {
      // Only update if education actually changed
      if (JSON.stringify(prev.education) === JSON.stringify(education)) {
        return prev;
      }
      return {
        ...prev,
        education,
      };
    });
  };

  const handleAwardsChange = (awards: Array<{ title: string; year: string }>) => {
    setFormData((prev) => {
      // Only update if awards actually changed
      if (JSON.stringify(prev.awards) === JSON.stringify(awards)) {
        return prev;
      }
      return {
        ...prev,
        awards,
      };
    });
  };

  const handleCertificationsChange = (certifications: Array<{ title: string; year: string }>) => {
    setFormData((prev) => {
      // Only update if certifications actually changed
      if (JSON.stringify(prev.certifications) === JSON.stringify(certifications)) {
        return prev;
      }
      return {
        ...prev,
        certifications,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!doctorId) {
      setError("Doctor ID is missing");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await updateDoctor(doctorId, formData);

      if (response.success) {
        setSuccess("Doctor updated successfully!");
        setTimeout(() => {
          navigate(all_routes.doctordetails);
        }, 1500);
      }
    } catch (err: any) {
      console.error("Error updating doctor:", err);
      setError(err.message || "Failed to update doctor");
    } finally {
      setLoading(false);
    }
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  if (loading && !formData.firstName) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* Page Header */}
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

              {/* Error & Success Messages */}
              {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  {error}
                  <button type="button" className="btn-close" onClick={() => setError("")}></button>
                </div>
              )}
              {success && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  {success}
                  <button type="button" className="btn-close" onClick={() => setSuccess("")}></button>
                </div>
              )}

              {/* Edit Doctor Form */}
              <div className="card">
                <div className="card-body">
                  <div className="border-bottom d-flex align-items-center justify-content-between pb-3 mb-3">
                    <h5 className="offcanvas-title fs-18 fw-bold">Edit Doctor</h5>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Contact Information */}
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Contact Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="row">
                        {/* Profile Image */}
                        <div className="col-lg-12">
                          <div className="mb-3 d-flex align-items-center">
                            <label className="form-label">Profile Image</label>
                            <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                              {profilePreview ? (
                                <img
                                  src={profilePreview}
                                  className="position-relative z-n1 w-100 h-100"
                                  style={{ objectFit: "cover" }}
                                  alt="Profile"
                                />
                              ) : (
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-primary text-white fs-24 fw-bold">
                                  {getInitials(formData.firstName, formData.lastName)}
                                </div>
                              )}
                              <input
                                type="file"
                                className="form-control image-sign"
                                accept="image/*"
                                onChange={handleProfileImageChange}
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

                        {/* Name & Username */}
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
                                  value={formData.firstName}
                                  onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                                  value={formData.lastName}
                                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Username <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={formData.username}
                                  onChange={(e) => handleInputChange("username", e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Email Address <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  value={formData.email}
                                  onChange={(e) => handleInputChange("email", e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Phone Number <span className="text-danger">*</span>
                                </label>
                                <PhoneInput
                                  defaultCountry="US"
                                  value={formData.phone}
                                  onChange={(value) => handleInputChange("phone", value || "")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* DOB & Experience */}
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
                                    format="DD-MM-YYYY"
                                    getPopupContainer={getModalContainer}
                                    placeholder="DD-MM-YYYY"
                                    suffixIcon={null}
                                    value={formData.dob ? dayjs(formData.dob) : null}
                                    onChange={(date) =>
                                      handleInputChange("dob", date ? date.format("YYYY-MM-DD") : "")
                                    }
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
                                  Year Of Experience <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={formData.yearOfExperience}
                                  onChange={(e) => handleInputChange("yearOfExperience", e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Department & Designation */}
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Department <span className="text-danger">*</span>
                                </label>
                                <CommonSelect
                                  options={Department}
                                  className="select"
                                  value={Department.find((d) => d.value === formData.department)}
                                  onChange={(option: any) => handleInputChange("department", option.value)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Designation <span className="text-danger">*</span>
                                </label>
                                <CommonSelect
                                  options={Designation}
                                  className="select"
                                  value={Designation.find((d) => d.value === formData.designation)}
                                  onChange={(option: any) => handleInputChange("designation", option.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* License & Language */}
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Medical License Number <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={formData.medicalLicenseNumber}
                                  onChange={(e) =>
                                    handleInputChange("medicalLicenseNumber", e.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Language Spoken</label>
                                <TagInput
                                  initialTags={tags}
                                  onTagsChange={(newTags) => {
                                    setTags(newTags);
                                    handleInputChange("languageSpoken", newTags);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Blood Group & Gender */}
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Blood Group <span className="text-danger">*</span>
                                </label>
                                <CommonSelect
                                  options={Blood_Group}
                                  className="select"
                                  value={Blood_Group.find((b) => b.value === formData.bloodGroup)}
                                  onChange={(option: any) => handleInputChange("bloodGroup", option.value)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Gender <span className="text-danger">*</span>
                                </label>
                                <CommonSelect
                                  options={Gender}
                                  className="select"
                                  value={Gender.find((g) => g.value === formData.gender)}
                                  onChange={(option: any) => handleInputChange("gender", option.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bio */}
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Bio</label>
                            <textarea
                              className="form-control"
                              rows={3}
                              value={formData.bio}
                              onChange={(e) => handleInputChange("bio", e.target.value)}
                            />
                          </div>
                          <div className="form-check form-switch mb-3">
                            <label className="form-check-label" htmlFor="featureWebsite">
                              Feature On Website
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="featureWebsite"
                              checked={formData.featureOnWebsite}
                              onChange={(e) =>
                                handleInputChange("featureOnWebsite", e.target.checked)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Address Information */}
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Address Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Address 1</label>
                            <input
                              type="text"
                              className="form-control"
                              value={formData.address.address1}
                              onChange={(e) => handleAddressChange("address1", e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Address 2</label>
                            <input
                              type="text"
                              className="form-control"
                              value={formData.address.address2}
                              onChange={(e) => handleAddressChange("address2", e.target.value)}
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
                              value={Country.find((c) => c.value === formData.address.country)}
                              onChange={(option: any) => handleAddressChange("country", option.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">City</label>
                            <CommonSelect
                              options={City}
                              className="select"
                              value={City.find((c) => c.value === formData.address.city)}
                              onChange={(option: any) => handleAddressChange("city", option.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">State</label>
                            <CommonSelect
                              options={State}
                              className="select"
                              value={State.find((s) => s.value === formData.address.state)}
                              onChange={(option: any) => handleAddressChange("state", option.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Pincode</label>
                            <input
                              type="text"
                              className="form-control"
                              value={formData.address.pincode}
                              onChange={(e) => handleAddressChange("pincode", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Schedule Information */}
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Schedule Information</h6>
                    </div>
                    <div>
                      <ul className="nav nav-pills schedule-tab mb-3" role="tablist">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                          (day) => (
                            <li className="nav-item me-1" role="presentation" key={day}>
                              <button
                                className={`nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto ${activeDay === day ? "active" : ""
                                  }`}
                                type="button"
                                onClick={() => setActiveDay(day)}
                              >
                                {day}
                              </button>
                            </li>
                          )
                        )}
                      </ul>
                      <div className="tab-content">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                          (day) => (
                            <div
                              key={day}
                              className={`tab-pane fade ${activeDay === day ? "active show" : ""}`}
                            >
                              <div className="add-schedule-list">
                                <DuplicateForms
                                  onScheduleChange={(schedules) => handleScheduleChange(day, schedules)}
                                  scheduleData={
                                    formData.schedules?.find((s) => s.day === day)?.timeSlots || []
                                  }
                                />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="mb-3">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => {
                            const currentSchedule = formData.schedules?.find(
                              (s) => s.day === activeDay
                            )?.timeSlots || [];
                            ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].forEach(
                              (day) => {
                                handleScheduleChange(day, currentSchedule);
                              }
                            );
                            alert("Schedule applied to all days!");
                          }}
                        >
                          Apply All
                        </button>
                      </div>
                    </div>

                    {/* Appointment Information */}
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Appointment Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Appointment Type</label>
                            <CommonSelect
                              options={Appointment_Type}
                              className="select"
                              value={Appointment_Type.find((a) => a.value === formData.appointmentType)}
                              onChange={(option: any) => handleInputChange("appointmentType", option.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6" />
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Accept bookings (in Advance)</label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                value={formData.acceptBookingsDays}
                                onChange={(e) =>
                                  handleInputChange("acceptBookingsDays", parseInt(e.target.value) || 0)
                                }
                              />
                              <span className="input-group-text bg-transparent text-dark fs-14">Days</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Appointment Duration</label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                value={formData.appointmentDuration}
                                onChange={(e) =>
                                  handleInputChange("appointmentDuration", parseInt(e.target.value) || 30)
                                }
                              />
                              <span className="input-group-text bg-transparent text-dark fs-14">Mins</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Consultation Charge</label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                value={formData.consultationCharge}
                                onChange={(e) =>
                                  handleInputChange("consultationCharge", parseInt(e.target.value) || 0)
                                }
                              />
                              <span className="input-group-text bg-transparent text-dark fs-14">$</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Max Bookings Per Slot</label>
                            <input
                              type="number"
                              className="form-control"
                              value={formData.maxBookingsPerSlot}
                              onChange={(e) =>
                                handleInputChange("maxBookingsPerSlot", parseInt(e.target.value) || 1)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check form-switch mb-3">
                            <label className="form-check-label" htmlFor="displayBooking">
                              Display on Booking Page
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="displayBooking"
                              checked={formData.displayOnBookingPage}
                              onChange={(e) =>
                                handleInputChange("displayOnBookingPage", e.target.checked)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Educational Information */}
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Educational Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="add-education-list">
                        <EducationForms
                          onEducationChange={handleEducationChange}
                          educationData={formData.education}
                        />
                      </div>
                    </div>

                    {/* Awards & Recognition */}
                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Awards &amp; Recognition</h6>
                    </div>
                    <div className="pb-0">
                      <div className="add-award-list">
                        <RewardsForms
                          onRewardsChange={handleAwardsChange}
                          rewardsData={formData.awards}
                        />
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="bg-light px-3 py-2">
                      <h6 className="fw-bold mb-0">Certifications</h6>
                    </div>
                    <div className="pb-3 mb-3 border-bottom">
                      <div className="add-certification-list">
                        <RewardsForms
                          onRewardsChange={handleCertificationsChange}
                          rewardsData={formData.certifications}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-end gap-2">
                      <Link to={all_routes.doctors} className="btn btn-light btm-md">
                        Cancel
                      </Link>
                      <button type="submit" className="btn btn-primary btm-md" disabled={loading}>
                        {loading ? "Saving..." : "Save Changes"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default EditDoctor;