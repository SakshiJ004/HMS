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



// ============================================
// PART 1: IMPORTS, STATE, AND DATA FETCHING
// ============================================

import { Link, useNavigate, useSearchParams } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
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
import type { DoctorFormData } from "../../../../../api/doctorService";

const EditDoctor = () => {
  const [searchParams] = useSearchParams();
  const doctorId = searchParams.get('id');
  const navigate = useNavigate();

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // Loading & Error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

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

  // Address state
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState(Country[0]);
  const [city, setCity] = useState(City[0]);
  const [state, setState] = useState(State[0]);
  const [pincode, setPincode] = useState("");

  // Schedule state
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

  // Professional details
  const [education, setEducation] = useState<Array<{ degree: string; college: string; fromYear?: string; year: string }>>([]);
  const [awards, setAwards] = useState<Array<{ title: string; year: string }>>([]);
  const [certifications, setCertifications] = useState<Array<{ title: string; year: string }>>([]);

  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Fetch doctor data on mount
  useEffect(() => {
    if (!doctorId) {
      setError("No doctor ID provided");
      setLoading(false);
      return;
    }
    fetchDoctorData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctorId]);

  const fetchDoctorData = async () => {
    try {
      setLoading(true);
      const response = await getDoctor(doctorId!);

      if (response.success && response.data) {
        const doctor = response.data;

        setFirstName(doctor.firstName || "");
        setLastName(doctor.lastName || "");
        setUsername(doctor.username || "");
        setEmail(doctor.email || "");
        setPhone(doctor.phone || "");
        setDob(doctor.dob ? dayjs(doctor.dob) : null);
        setYearOfExperience(doctor.yearOfExperience?.toString() || "");
        setMedicalLicenseNumber(doctor.medicalLicenseNumber || "");
        setTags(doctor.languageSpoken || ["English"]);
        setBio(doctor.bio || "");
        setFeatureOnWebsite(doctor.featureOnWebsite || false);
        setProfileImage(doctor.profileImage || null);

        const foundDepartment = Department.find(d => d.value === doctor.department);
        if (foundDepartment) setDepartment(foundDepartment);

        const foundDesignation = Designation.find(d => d.value === doctor.designation);
        if (foundDesignation) setDesignation(foundDesignation);

        const foundBloodGroup = Blood_Group.find(b => b.value === doctor.bloodGroup);
        if (foundBloodGroup) setBloodGroup(foundBloodGroup);

        const foundGender = Gender.find(g => g.value === doctor.gender);
        if (foundGender) setGender(foundGender);

        if (doctor.address) {
          setAddress1(doctor.address.address1 || "");
          setAddress2(doctor.address.address2 || "");

          const foundCity = City.find(c => c.value === doctor.address.city);
          if (foundCity) setCity(foundCity);

          const foundState = State.find(s => s.value === doctor.address.state);
          if (foundState) setState(foundState);

          const foundCountry = Country.find(c => c.value === doctor.address.country);
          if (foundCountry) setCountry(foundCountry);

          setPincode(doctor.address.pincode || "");
        }

        if (doctor.schedules && Array.isArray(doctor.schedules)) {
          doctor.schedules.forEach((schedule: { day: string; timeSlots: Array<{ startTime: string; endTime: string }> }) => {
            switch (schedule.day) {
              case "Monday":
                setMondaySchedule(schedule.timeSlots || []);
                break;
              case "Tuesday":
                setTuesdaySchedule(schedule.timeSlots || []);
                break;
              case "Wednesday":
                setWednesdaySchedule(schedule.timeSlots || []);
                break;
              case "Thursday":
                setThursdaySchedule(schedule.timeSlots || []);
                break;
              case "Friday":
                setFridaySchedule(schedule.timeSlots || []);
                break;
              case "Saturday":
                setSaturdaySchedule(schedule.timeSlots || []);
                break;
              case "Sunday":
                setSundaySchedule(schedule.timeSlots || []);
                break;
            }
          });
        }

        const foundAppointmentType = Appointment_Type.find(a => a.value === doctor.appointmentType);
        if (foundAppointmentType) setAppointmentType(foundAppointmentType);

        setAcceptBookingsDays(doctor.acceptBookingsDays?.toString() || "0");
        setAppointmentDuration(doctor.appointmentDuration?.toString() || "30");
        setConsultationCharge(doctor.consultationCharge?.toString() || "0");
        setMaxBookingsPerSlot(doctor.maxBookingsPerSlot?.toString() || "1");
        setDisplayOnBookingPage(doctor.displayOnBookingPage || false);

        setEducation(doctor.education || []);
        setAwards(doctor.awards || []);
        setCertifications(doctor.certifications || []);

      } else {
        setError("Failed to load doctor data");
      }
    } catch (err: any) {
      console.error("Error fetching doctor:", err);
      setError(err.message || "Failed to load doctor");
    } finally {
      setLoading(false);
    }
  };

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;

          let width = img.width;
          let height = img.height;

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

          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
          setProfileImage(compressedBase64);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyAllSchedules = () => {
    const activeTab = document.querySelector('.schedule-tab .nav-link.active');
    if (!activeTab) {
      alert('Please select a day first');
      return;
    }

    let sourceSchedule: Array<{ startTime: string; endTime: string }> = [];
    let dayName = '';

    if (activeTab.textContent?.includes('Monday')) {
      sourceSchedule = mondaySchedule;
      dayName = 'Monday';
    } else if (activeTab.textContent?.includes('Tuesday')) {
      sourceSchedule = tuesdaySchedule;
      dayName = 'Tuesday';
    } else if (activeTab.textContent?.includes('Wednesday')) {
      sourceSchedule = wednesdaySchedule;
      dayName = 'Wednesday';
    } else if (activeTab.textContent?.includes('Thursday')) {
      sourceSchedule = thursdaySchedule;
      dayName = 'Thursday';
    } else if (activeTab.textContent?.includes('Friday')) {
      sourceSchedule = fridaySchedule;
      dayName = 'Friday';
    } else if (activeTab.textContent?.includes('Saturday')) {
      sourceSchedule = saturdaySchedule;
      dayName = 'Saturday';
    } else if (activeTab.textContent?.includes('Sunday')) {
      sourceSchedule = sundaySchedule;
      dayName = 'Sunday';
    }

    if (sourceSchedule.length === 0) {
      alert(`Please add at least one time slot for ${dayName} before applying to all days`);
      return;
    }

    if (!window.confirm(`This will copy ${dayName}'s schedule to all other days. Continue?`)) {
      return;
    }

    setMondaySchedule([...sourceSchedule]);
    setTuesdaySchedule([...sourceSchedule]);
    setWednesdaySchedule([...sourceSchedule]);
    setThursdaySchedule([...sourceSchedule]);
    setFridaySchedule([...sourceSchedule]);
    setSaturdaySchedule([...sourceSchedule]);
    setSundaySchedule([...sourceSchedule]);

    alert(`${dayName}'s schedule applied to all days successfully!`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      if (!firstName || !lastName || !email || !phone) {
        setError("Please fill in all required fields");
        setSaving(false);
        return;
      }

      const schedules = [];
      if (mondaySchedule.length > 0) schedules.push({ day: "Monday", timeSlots: mondaySchedule });
      if (tuesdaySchedule.length > 0) schedules.push({ day: "Tuesday", timeSlots: tuesdaySchedule });
      if (wednesdaySchedule.length > 0) schedules.push({ day: "Wednesday", timeSlots: wednesdaySchedule });
      if (thursdaySchedule.length > 0) schedules.push({ day: "Thursday", timeSlots: thursdaySchedule });
      if (fridaySchedule.length > 0) schedules.push({ day: "Friday", timeSlots: fridaySchedule });
      if (saturdaySchedule.length > 0) schedules.push({ day: "Saturday", timeSlots: saturdaySchedule });
      if (sundaySchedule.length > 0) schedules.push({ day: "Sunday", timeSlots: sundaySchedule });

      const doctorData: Partial<DoctorFormData> = {
        firstName,
        lastName,
        username,
        email,
        phone,
        dob: dob?.format("YYYY-MM-DD"),
        yearOfExperience: yearOfExperience ? parseInt(yearOfExperience) : undefined,
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

      const response = await updateDoctor(doctorId!, doctorData);
      console.log("Doctor updated successfully:", response);

      alert("Doctor updated successfully!");
      navigate(`/doctor-details?id=${doctorId}`);
    } catch (err: any) {
      console.error("Error updating doctor:", err);
      setError(err.message || "Failed to update doctor. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel? All changes will be lost.")) {
      navigate(`/doctor-details?id=${doctorId}`);
    }
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading doctor data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !doctorId) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="alert alert-danger">{error}</div>
          <Link to={all_routes.doctors} className="btn btn-primary">
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }
  // ============================================
  // PART 2: JSX RETURN - MERGE THIS AFTER PART 1
  // ============================================

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="mb-3">
                <h6 className="fw-semibold fs-14 mb-0">
                  <Link to={all_routes.doctors}>
                    <i className="ti ti-chevron-left me-1" />
                    Doctors
                  </Link>
                </h6>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="border-bottom d-flex align-items-center justify-content-between pb-3 mb-3">
                    <h5 className="offcanvas-title fs-18 fw-bold">Edit Doctor</h5>
                  </div>

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
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3 d-flex align-items-center">
                            <label className="form-label">Profile Image</label>
                            <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                              {profileImage ? (
                                <img src={profileImage} alt="Profile" className="w-100 h-100 object-fit-cover rounded-circle position-relative z-n1" />
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
                                <Link to="#" className="text-white d-flex align-items-center justify-content-center">
                                  <i className="ti ti-photo fs-14" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">First Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Last Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Username <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Email Address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                                <PhoneInput defaultCountry="US" value={phone} onChange={setPhone} required />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">DOB <span className="text-danger">*</span></label>
                                <div className="input-icon-end position-relative">
                                  <DatePicker
                                    className="form-control datetimepicker"
                                    format={{ format: "DD-MM-YYYY", type: "mask" }}
                                    getPopupContainer={getModalContainer}
                                    placeholder="DD-MM-YYYY"
                                    suffixIcon={null}
                                    value={dob}
                                    onChange={(date) => setDob(date)}
                                  />
                                  <span className="input-icon-addon"><i className="ti ti-calendar" /></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Year Of Experience <span className="text-danger">*</span></label>
                                <input type="number" className="form-control" value={yearOfExperience} onChange={(e) => setYearOfExperience(e.target.value)} required />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Department<span className="text-danger ms-1">*</span></label>
                                <CommonSelect options={Department} className="select" value={department} onChange={(option) => option && setDepartment(option)} />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Designation<span className="text-danger ms-1">*</span></label>
                                <CommonSelect options={Designation} className="select" value={designation} onChange={(option) => option && setDesignation(option)} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Medical License Number <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value={medicalLicenseNumber} onChange={(e) => setMedicalLicenseNumber(e.target.value)} required />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Language Spoken</label>
                                <TagInput initialTags={tags} onTagsChange={handleTagsChange} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Blood Group<span className="text-danger ms-1">*</span></label>
                                <CommonSelect options={Blood_Group} className="select" value={bloodGroup} onChange={(option) => option && setBloodGroup(option)} />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Gender <span className="text-danger ms-1">*</span></label>
                                <CommonSelect options={Gender} className="select" value={gender} onChange={(option) => option && setGender(option)} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Bio</label>
                            <textarea className="form-control" rows={3} value={bio} onChange={(e) => setBio(e.target.value)} />
                          </div>
                          <div className="form-check form-switch mb-3">
                            <label className="form-check-label" htmlFor="switchCheckDefault">Feature On Website</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" checked={featureOnWebsite} onChange={(e) => setFeatureOnWebsite(e.target.checked)} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Address Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Address 1 <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Address 2</label>
                            <input type="text" className="form-control" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Country</label>
                            <CommonSelect options={Country} className="select" value={country} onChange={(option) => option && setCountry(option)} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">City <span className="text-danger">*</span></label>
                            <CommonSelect options={City} className="select" value={city} onChange={(option) => option && setCity(option)} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">State <span className="text-danger">*</span></label>
                            <CommonSelect options={State} className="select" value={state} onChange={(option) => option && setState(option)} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Pincode <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Schedule Information</h6>
                    </div>
                    <div className="p-3">
                      <ul className="nav nav-pills schedule-tab mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item me-1" role="presentation">
                          <button className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active" data-bs-toggle="pill" data-bs-target="#schedule-1" type="button" role="tab" aria-selected="true">Monday</button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto" data-bs-toggle="pill" data-bs-target="#schedule-2" type="button" role="tab" aria-selected="false" tabIndex={-1}>Tuesday</button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto" data-bs-toggle="pill" data-bs-target="#schedule-3" type="button" role="tab" aria-selected="false" tabIndex={-1}>Wednesday</button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto" data-bs-toggle="pill" data-bs-target="#schedule-4" type="button" role="tab" aria-selected="false" tabIndex={-1}>Thursday</button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto" data-bs-toggle="pill" data-bs-target="#schedule-5" type="button" role="tab" aria-selected="false" tabIndex={-1}>Friday</button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto" data-bs-toggle="pill" data-bs-target="#schedule-6" type="button" role="tab" aria-selected="false" tabIndex={-1}>Saturday</button>
                        </li>
                        <li className="nav-item me-1" role="presentation">
                          <button className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto" data-bs-toggle="pill" data-bs-target="#schedule-7" type="button" role="tab" aria-selected="false" tabIndex={-1}>Sunday</button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade active show" id="schedule-1" role="tabpanel">
                          <div className="add-schedule-list">
                            <DuplicateForms onScheduleChange={setMondaySchedule} scheduleData={mondaySchedule} />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="schedule-2" role="tabpanel">
                          <div className="add-schedule-list">
                            <DuplicateForms onScheduleChange={setTuesdaySchedule} scheduleData={tuesdaySchedule} />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="schedule-3" role="tabpanel">
                          <div className="add-schedule-list">
                            <DuplicateForms onScheduleChange={setWednesdaySchedule} scheduleData={wednesdaySchedule} />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="schedule-4" role="tabpanel">
                          <div className="add-schedule-list">
                            <DuplicateForms onScheduleChange={setThursdaySchedule} scheduleData={thursdaySchedule} />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="schedule-5" role="tabpanel">
                          <div className="add-schedule-list">
                            <DuplicateForms onScheduleChange={setFridaySchedule} scheduleData={fridaySchedule} />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="schedule-6" role="tabpanel">
                          <div className="add-schedule-list">
                            <DuplicateForms onScheduleChange={setSaturdaySchedule} scheduleData={saturdaySchedule} />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="schedule-7" role="tabpanel">
                          <div className="add-schedule-list">
                            <DuplicateForms onScheduleChange={setSundaySchedule} scheduleData={sundaySchedule} />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button type="button" className="btn btn-dark" onClick={handleApplyAllSchedules}>Apply All</button>
                      </div>
                    </div>

                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Appointment Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Appointment Type</label>
                            <CommonSelect options={Appointment_Type} className="select" value={appointmentType} onChange={(option) => option && setAppointmentType(option)} />
                          </div>
                        </div>
                        <div className="col-lg-6" />
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Accept bookings (in Advance)</label>
                            <div className="input-group">
                              <input type="number" className="form-control" value={acceptBookingsDays} onChange={(e) => setAcceptBookingsDays(e.target.value)} />
                              <span className="input-group-text bg-transparent text-dark fs-14">Days</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Appointment Duration</label>
                            <div className="input-group">
                              <input type="number" className="form-control" value={appointmentDuration} onChange={(e) => setAppointmentDuration(e.target.value)} />
                              <span className="input-group-text bg-transparent text-dark fs-14">Mins</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Consultation Charge</label>
                            <div className="input-group">
                              <input type="number" className="form-control" value={consultationCharge} onChange={(e) => setConsultationCharge(e.target.value)} />
                              <span className="input-group-text bg-transparent text-dark fs-14">$</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">Max Bookings Per Slot</label>
                            <input type="number" className="form-control" value={maxBookingsPerSlot} onChange={(e) => setMaxBookingsPerSlot(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check form-switch mb-3">
                            <label className="form-check-label" htmlFor="switchCheckDefault2">Display on Booking Page</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault2" checked={displayOnBookingPage} onChange={(e) => setDisplayOnBookingPage(e.target.checked)} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Educational Information</h6>
                    </div>
                    <div className="pb-0">
                      <div className="add-education-list">
                        <EducationForms onEducationChange={setEducation} educationData={education} />
                      </div>
                    </div>

                    <div className="bg-light px-3 py-2 mb-3">
                      <h6 className="fw-bold mb-0">Awards &amp; Recognition</h6>
                    </div>
                    <div className="pb-0">
                      <div className="add-award-list">
                        <RewardsForms onRewardsChange={setAwards} rewardsData={awards} />
                      </div>
                    </div>

                    <div className="bg-light px-3 py-2">
                      <h6 className="fw-bold mb-0">Certifications</h6>
                    </div>
                    <div className="pb-3 mb-3 border-bottom">
                      <div className="add-certification-list">
                        <RewardsForms onRewardsChange={setCertifications} rewardsData={certifications} />
                      </div>
                    </div>

                    <div className="d-flex justify-content-end gap-2">
                      <button type="button" className="btn btn-light btm-md" onClick={handleCancel} disabled={saving}>Cancel</button>
                      <button type="submit" className="btn btn-primary btm-md" disabled={saving}>
                        {saving ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Saving...
                          </>
                        ) : (
                          'Save Changes'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default EditDoctor;