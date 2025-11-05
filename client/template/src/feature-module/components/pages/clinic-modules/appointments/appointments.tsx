// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { all_routes } from "../../../../routes/all_routes";
// import { AppointmentsData } from "../../../../../core/json/appointmentsData";
// import { useState } from "react";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../../core/common/dataTable";
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import Modals from "./modals/modals";

// const Appointments = () => {
//   const data = AppointmentsData;
//   const columns = [
//     {
//       title: "Date & Time",
//       dataIndex: "Date_Time",
//       sorter: (a: any, b: any) => a.Date_Time.length - b.Date_Time.length,
//     },
//     {
//       title: "Patient",
//       dataIndex: "Patient",
//       render: (text: any, render: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to={all_routes.patientDetails}
//             className="avatar avatar-md me-2"
//           >
//             <ImageWithBasePath
//               src={`assets/img/users/${render.Patient_Image}`}
//               alt="product"
//               className="rounded-circle"
//             />
//           </Link>
//           <Link
//             to={all_routes.patientDetails}
//             className="text-dark fw-semibold"
//           >
//             {text}
//             <span className="text-body fs-13 fw-normal d-block">
//               {render.Phone}
//             </span>
//           </Link>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Patient.length - b.Patient.length,
//     },
//     {
//       title: "Doctor",
//       dataIndex: "Doctor",
//       render: (text: any, render: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to={all_routes.doctordetails}
//             className="avatar me-2 flex-shrink-0"
//           >
//             <ImageWithBasePath
//               src={`assets/img/doctors/${render.Doctor_Image}`}
//               alt="img"
//               className="rounded-circle"
//             />
//           </Link>
//           <div>
//             <h6 className="fs-14 mb-1 text-truncate">
//               <Link to={all_routes.doctordetails} className="fw-semibold">
//                 {text}
//               </Link>
//             </h6>
//             <p className="mb-0 fs-13 text-truncate">{render.role}</p>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Doctor.length - b.Doctor.length,
//     },
//     {
//       title: "Mode",
//       dataIndex: "Mode",
//       sorter: (a: any, b: any) => a.Mode.length - b.Mode.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: string) => (
//         <span
//           className={`fs-13 badge ${
//             text === "Checked Out"
//               ? "badge-soft-info text-info"
//               : text === "Checked In"
//               ? "badge-soft-warning text-warning"
//               : text === "Cancelled"
//               ? "badge-soft-danger text-danger"
//               : text === "Schedule"
//               ? "badge-soft-primary text-primary"
//               : "badge-soft-success text-success"
//           }  rounded  fw-medium`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//     {
//       title: "",
//       render: () => (
//         <div className="action-item">
//           <Link to="#" data-bs-toggle="dropdown">
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu p-2">
//             <li>
//               <Link to="#" className="dropdown-item d-flex align-items-center">
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="offcanvas"
//                 data-bs-target="#view_details"
//               >
//                 View
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_modal"
//               >
//                 Delete
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//   ];
//   const [searchText, setSearchText] = useState<string>("");

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//   };

//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Start Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-semibold mb-0"> Appointment </h4>
//             </div>
//             <div className="text-end d-flex">
//               {/* dropdown*/}
//               <div className="dropdown me-1">
//                 <Link
//                   to="#"
//                   className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
//                   data-bs-toggle="dropdown"
//                 >
//                   Export
//                   <i className="ti ti-chevron-down ms-2" />
//                 </Link>
//                 <ul className="dropdown-menu p-2">
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as PDF
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as Excel
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                 <Link
//                   to={all_routes.appointments}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-list fs-14 text-dark" />
//                 </Link>
//                 <Link
//                   to={all_routes.appointmentCalendar}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-calendar-event fs-14 text-body" />
//                 </Link>
//               </div>
//               <Link
//                 to={all_routes.newAppointment}
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//               >
//                 <i className="ti ti-plus me-1" /> New Appointment
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/*  Start Filter */}
//           <div className=" d-flex align-items-center justify-content-between flex-wrap">
//             <div className="d-flex align-items-center gap-2">
//               <div className="search-set mb-3">
//                 <div className="d-flex align-items-center flex-wrap gap-2">
//                   <div className="table-search d-flex align-items-center mb-0">
//                     <div className="search-input">
//                       <SearchInput value={searchText} onChange={handleSearch} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex right-content align-items-center flex-wrap mb-3">
//                 <div
//                   id="reportrange"
//                   className="reportrange-picker d-flex align-items-center"
//                 >
//                   <i className="ti ti-calendar text-gray-5 fs-14 me-1" />
//                   <span className="reportrange-picker-field">
//                     16 Apr 25 - 16 Apr 25
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3">
//               <div className="dropdown me-2">
//                 <Link
//                   to="#"
//                   className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
//                   data-bs-toggle="dropdown"
//                   data-bs-auto-close="outside"
//                 >
//                   <i className="ti ti-filter text-gray-5 me-1" />
//                   Filters
//                 </Link>
//                 <div
//                   className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
//                   id="filter-dropdown"
//                 >
//                   <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
//                     <h4 className="mb-0 fw-bold">Filter</h4>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="link-danger text-decoration-underline"
//                       >
//                         Clear All
//                       </Link>
//                     </div>
//                   </div>
//                   <form action="#">
//                     <div className="filter-body pb-0">
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Patient</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <div className="dropdown">
//                           <Link
//                             to="#"
//                             className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
//                             data-bs-toggle="dropdown"
//                             data-bs-auto-close="outside"
//                             aria-expanded="true"
//                           >
//                             Select <i className="ti ti-chevron-down ms-auto" />
//                           </Link>
//                           <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
//                             <div className="mb-3">
//                               <div className="input-icon-start input-icon position-relative">
//                                 <span className="input-icon-addon fs-12">
//                                   <i className="ti ti-search" />
//                                 </span>
//                                 <input
//                                   type="text"
//                                   className="form-control form-control-md"
//                                   placeholder="Search"
//                                 />
//                               </div>
//                             </div>
//                             <ul className="mb-3">
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   <span className="avatar avatar-xs rounded-circle me-2">
//                                     <ImageWithBasePath
//                                       src="assets/img/users/user-33.jpg"
//                                       className="flex-shrink-0 rounded-circle"
//                                       alt="img"
//                                     />
//                                   </span>
//                                   Alberto Ripley
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   <span className="avatar avatar-xs rounded-circle me-2">
//                                     <ImageWithBasePath
//                                       src="assets/img/users/user-12.jpg"
//                                       className="flex-shrink-0 rounded-circle"
//                                       alt="img"
//                                     />
//                                   </span>
//                                   Bernard Griffith
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   <span className="avatar avatar-xs rounded-circle me-2">
//                                     <ImageWithBasePath
//                                       src="assets/img/users/user-02.jpg"
//                                       className="flex-shrink-0 rounded-circle"
//                                       alt="img"
//                                     />
//                                   </span>
//                                   Carol Lam
//                                 </label>
//                               </li>
//                               <li>
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   <span className="avatar avatar-xs rounded-circle me-2">
//                                     <ImageWithBasePath
//                                       src="assets/img/users/user-08.jpg"
//                                       className="flex-shrink-0 rounded-circle"
//                                       alt="img"
//                                     />
//                                   </span>
//                                   Ezra Belcher
//                                 </label>
//                               </li>
//                             </ul>
//                             <div className="row g-2">
//                               <div className="col-6">
//                                 <Link
//                                   to="#"
//                                   className="btn btn-outline-white w-100 close-filter"
//                                 >
//                                   Cancel
//                                 </Link>
//                               </div>
//                               <div className="col-6">
//                                 <Link to="#" className="btn btn-primary w-100">
//                                   Select
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Doctor</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <div className="dropdown">
//                           <Link
//                             to="#"
//                             className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
//                             data-bs-toggle="dropdown"
//                             data-bs-auto-close="outside"
//                             aria-expanded="true"
//                           >
//                             Select <i className="ti ti-chevron-down ms-auto" />
//                           </Link>
//                           <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
//                             <div className="mb-3">
//                               <div className="input-icon-start input-icon position-relative">
//                                 <span className="input-icon-addon fs-12">
//                                   <i className="ti ti-search" />
//                                 </span>
//                                 <input
//                                   type="text"
//                                   className="form-control form-control-md"
//                                   placeholder="Search"
//                                 />
//                               </div>
//                             </div>
//                             <ul className="mb-3">
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   <span className="avatar avatar-xs rounded-circle me-2">
//                                     <ImageWithBasePath
//                                       src="assets/img/doctors/doctor-01.jpg"
//                                       className="flex-shrink-0 rounded-circle"
//                                       alt="img"
//                                     />
//                                   </span>
//                                   Dr. Mick Thompson
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   <span className="avatar avatar-xs rounded-circle me-2">
//                                     <ImageWithBasePath
//                                       src="assets/img/doctors/doctor-02.jpg"
//                                       className="flex-shrink-0 rounded-circle"
//                                       alt="img"
//                                     />
//                                   </span>
//                                   Dr. Sarah Johnson
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   <span className="avatar avatar-xs rounded-circle me-2">
//                                     <ImageWithBasePath
//                                       src="assets/img/doctors/doctor-03.jpg"
//                                       className="flex-shrink-0 rounded-circle"
//                                       alt="img"
//                                     />
//                                   </span>
//                                   Dr. Emily Carter
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   <span className="avatar avatar-xs rounded-circle me-2">
//                                     <ImageWithBasePath
//                                       src="assets/img/doctors/doctor-04.jpg"
//                                       className="flex-shrink-0 rounded-circle"
//                                       alt="img"
//                                     />
//                                   </span>
//                                   Dr. David Lee
//                                 </label>
//                               </li>
//                               <li className="mb-0">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   <span className="avatar avatar-xs rounded-circle me-2">
//                                     <ImageWithBasePath
//                                       src="assets/img/doctors/doctor-05.jpg"
//                                       className="flex-shrink-0 rounded-circle"
//                                       alt="img"
//                                     />
//                                   </span>
//                                   Dr. Anna Kim
//                                 </label>
//                               </li>
//                             </ul>
//                             <div className="row g-2">
//                               <div className="col-6">
//                                 <Link
//                                   to="#"
//                                   className="btn btn-outline-white w-100 close-filter"
//                                 >
//                                   Cancel
//                                 </Link>
//                               </div>
//                               <div className="col-6">
//                                 <Link to="#" className="btn btn-primary w-100">
//                                   Select
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Designation</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <div className="dropdown">
//                           <Link
//                             to="#"
//                             className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
//                             data-bs-toggle="dropdown"
//                             data-bs-auto-close="outside"
//                             aria-expanded="true"
//                           >
//                             Select <i className="ti ti-chevron-down ms-auto" />
//                           </Link>
//                           <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
//                             <div className="mb-3">
//                               <div className="input-icon-start input-icon position-relative">
//                                 <span className="input-icon-addon fs-12">
//                                   <i className="ti ti-search" />
//                                 </span>
//                                 <input
//                                   type="text"
//                                   className="form-control form-control-md"
//                                   placeholder="Search"
//                                 />
//                               </div>
//                             </div>
//                             <ul className="mb-3">
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Cardiologist
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Orthopedic Surgeon
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Pediatrician
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Gynecologist
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Psychiatrist
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Neurosurgeon
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Oncologist
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Pulmonologist
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Urologist
//                                 </label>
//                               </li>
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Dermatologist
//                                 </label>
//                               </li>
//                             </ul>
//                             <div className="row g-2">
//                               <div className="col-6">
//                                 <Link
//                                   to="#"
//                                   className="btn btn-outline-white w-100 close-filter"
//                                 >
//                                   Cancel
//                                 </Link>
//                               </div>
//                               <div className="col-6">
//                                 <Link to="#" className="btn btn-primary w-100">
//                                   Select
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Mode</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <div className="dropdown">
//                           <Link
//                             to="#"
//                             className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
//                             data-bs-toggle="dropdown"
//                             data-bs-auto-close="outside"
//                             aria-expanded="true"
//                           >
//                             Select <i className="ti ti-chevron-down ms-auto" />
//                           </Link>
//                           <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
//                             <div className="mb-3">
//                               <div className="input-icon-start input-icon position-relative">
//                                 <span className="input-icon-addon fs-12">
//                                   <i className="ti ti-search" />
//                                 </span>
//                                 <input
//                                   type="text"
//                                   className="form-control form-control-md"
//                                   placeholder="Search"
//                                 />
//                               </div>
//                             </div>
//                             <ul className="mb-3">
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   In Person
//                                 </label>
//                               </li>
//                               <li className="mb-0">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Online
//                                 </label>
//                               </li>
//                             </ul>
//                             <div className="row g-2">
//                               <div className="col-6">
//                                 <Link
//                                   to="#"
//                                   className="btn btn-outline-white w-100 close-filter"
//                                 >
//                                   Cancel
//                                 </Link>
//                               </div>
//                               <div className="col-6">
//                                 <Link to="#" className="btn btn-primary w-100">
//                                   Select
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                           Date<span className="text-danger">*</span>
//                         </label>
//                         <div className="report-rangepicker position-relative">
//                           <PredefinedDatePicker />
//                           <span className="input-icon-addon">
//                             <i className="ti ti-calendar" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Status</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <div className="dropdown">
//                           <Link
//                             to="#"
//                             className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
//                             data-bs-toggle="dropdown"
//                             data-bs-auto-close="outside"
//                             aria-expanded="true"
//                           >
//                             Select <i className="ti ti-chevron-down ms-auto" />
//                           </Link>
//                           <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
//                             <div className="mb-3">
//                               <div className="input-icon-start input-icon position-relative">
//                                 <span className="input-icon-addon fs-12">
//                                   <i className="ti ti-search" />
//                                 </span>
//                                 <input
//                                   type="text"
//                                   className="form-control form-control-md"
//                                   placeholder="Search"
//                                 />
//                               </div>
//                             </div>
//                             <ul className="mb-3">
//                               <li className="mb-1">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Checked Out
//                                 </label>
//                               </li>
//                               <li className="mb-0">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Checked In
//                                 </label>
//                               </li>
//                               <li className="mb-0">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Cancelled
//                                 </label>
//                               </li>
//                               <li className="mb-0">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Schedule
//                                 </label>
//                               </li>
//                               <li className="mb-0">
//                                 <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                                   <input
//                                     className="form-check-input m-0 me-2"
//                                     type="checkbox"
//                                   />
//                                   Confirmed
//                                 </label>
//                               </li>
//                             </ul>
//                             <div className="row g-2">
//                               <div className="col-6">
//                                 <Link
//                                   to="#"
//                                   className="btn btn-outline-white w-100 close-filter"
//                                 >
//                                   Cancel
//                                 </Link>
//                               </div>
//                               <div className="col-6">
//                                 <Link to="#" className="btn btn-primary w-100">
//                                   Select
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="filter-footer d-flex align-items-center justify-content-end border-top">
//                       <Link
//                         to="#"
//                         className="btn btn-light btn-md me-2 fw-medium"
//                         id="close-filter"
//                       >
//                         Close
//                       </Link>
//                       <button
//                         type="submit"
//                         className="btn btn-primary btn-md fw-medium"
//                       >
//                         Filter
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               <div className="dropdown">
//                 <Link
//                   to="#"
//                   className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
//                   data-bs-toggle="dropdown"
//                 >
//                   <span className="me-1"> Sort By : </span> Recent
//                 </Link>
//                 <ul className="dropdown-menu  dropdown-menu-end p-2">
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Recent
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Oldest
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/*  End Filter */}
//           {/*  Start Table */}
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={data}
//               Selection={false}
//               searchText={searchText}
//             />
//           </div>
//           {/*  End Table */}
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
//       <Modals />
//     </>
//   );
// };

// export default Appointments;



// import { useState, useEffect } from "react";
// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { all_routes } from "../../../../routes/all_routes";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../../core/common/dataTable";
// import {
//   getAppointments,
//   deleteAppointment,
//   type AppointmentResponse
// } from "../../../../../api/appointmentService";
// import { message } from "antd";
// import dayjs from "dayjs";

// const Appointments = () => {
//   const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState<string>("");
//   const [deleteId, setDeleteId] = useState<string>("");

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       setLoading(true);
//       const response = await getAppointments();
//       setAppointments(response.data || []);
//     } catch (error: any) {
//       console.error("Error fetching appointments:", error);
//       message.error(error.response?.data?.message || "Failed to load appointments");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!deleteId) return;

//     try {
//       await deleteAppointment(deleteId);
//       message.success("Appointment deleted successfully");
//       fetchAppointments(); // Refresh list
//       setDeleteId("");
//     } catch (error: any) {
//       console.error("Error deleting appointment:", error);
//       message.error(error.response?.data?.message || "Failed to delete appointment");
//     }
//   };

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//   };

//   // Format data for table
//   const tableData = appointments.map((appointment) => ({
//     key: appointment._id,
//     Date_Time: `${dayjs(appointment.appointmentDate).format("DD MMM YYYY")} - ${appointment.appointmentTime}`,
//     Patient: appointment.patient?.fullName || "N/A",
//     Patient_Image: appointment.patient?.profileImage || "avatar-02.jpg",
//     Phone: appointment.patient?.email || "N/A",
//     Doctor: appointment.doctor?.fullName || "N/A",
//     Doctor_Image: appointment.doctor?.profileImage || "doctor-01.jpg",
//     role: appointment.department,
//     Mode: appointment.appointmentType,
//     Status: appointment.status,
//     _id: appointment._id,
//   }));

//   const columns = [
//     {
//       title: "Date & Time",
//       dataIndex: "Date_Time",
//       sorter: (a: any, b: any) => a.Date_Time.localeCompare(b.Date_Time),
//     },
//     {
//       title: "Patient",
//       dataIndex: "Patient",
//       render: (text: any, record: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to={all_routes.patientDetails}
//             className="avatar avatar-md me-2"
//           >
//             <ImageWithBasePath
//               src={`assets/img/users/${record.Patient_Image}`}
//               alt="patient"
//               className="rounded-circle"
//             />
//           </Link>
//           <Link
//             to={all_routes.patientDetails}
//             className="text-dark fw-semibold"
//           >
//             {text}
//             <span className="text-body fs-13 fw-normal d-block">
//               {record.Phone}
//             </span>
//           </Link>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Patient.localeCompare(b.Patient),
//     },
//     {
//       title: "Doctor",
//       dataIndex: "Doctor",
//       render: (text: any, record: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to={all_routes.doctordetails}
//             className="avatar me-2 flex-shrink-0"
//           >
//             <ImageWithBasePath
//               src={`assets/img/doctors/${record.Doctor_Image}`}
//               alt="doctor"
//               className="rounded-circle"
//             />
//           </Link>
//           <div>
//             <h6 className="fs-14 mb-1 text-truncate">
//               <Link to={all_routes.doctordetails} className="fw-semibold">
//                 {text}
//               </Link>
//             </h6>
//             <p className="mb-0 fs-13 text-truncate">{record.role}</p>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Doctor.localeCompare(b.Doctor),
//     },
//     {
//       title: "Mode",
//       dataIndex: "Mode",
//       sorter: (a: any, b: any) => a.Mode.localeCompare(b.Mode),
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: string) => (
//         <span
//           className={`fs-13 badge ${text === "Checked Out"
//               ? "badge-soft-info text-info"
//               : text === "Checked In"
//                 ? "badge-soft-warning text-warning"
//                 : text === "Cancelled"
//                   ? "badge-soft-danger text-danger"
//                   : text === "Schedule"
//                     ? "badge-soft-primary text-primary"
//                     : "badge-soft-success text-success"
//             } rounded fw-medium`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.Status.localeCompare(b.Status),
//     },
//     {
//       title: "",
//       render: (record: any) => (
//         <div className="action-item">
//           <Link to="#" data-bs-toggle="dropdown">
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu p-2">
//             <li>
//               <Link to="#" className="dropdown-item d-flex align-items-center">
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="offcanvas"
//                 data-bs-target="#view_details"
//               >
//                 View
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_modal"
//                 onClick={() => setDeleteId(record._id)}
//               >
//                 Delete
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <>
//       <div className="page-wrapper">
//         <div className="content">
//           {/* Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-semibold mb-0"> Appointment </h4>
//             </div>
//             <div className="text-end d-flex">
//               <div className="dropdown me-1">
//                 <Link
//                   to="#"
//                   className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
//                   data-bs-toggle="dropdown"
//                 >
//                   Export
//                   <i className="ti ti-chevron-down ms-2" />
//                 </Link>
//                 <ul className="dropdown-menu p-2">
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as PDF
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as Excel
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                 <Link
//                   to={all_routes.appointments}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-list fs-14 text-dark" />
//                 </Link>
//                 <Link
//                   to={all_routes.appointmentCalendar}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-calendar-event fs-14 text-body" />
//                 </Link>
//               </div>
//               <Link
//                 to={all_routes.newAppointment}
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//               >
//                 <i className="ti ti-plus me-1" /> New Appointment
//               </Link>
//             </div>
//           </div>

//           {/* Filter Section */}
//           <div className="d-flex align-items-center justify-content-between flex-wrap">
//             <div className="d-flex align-items-center gap-2">
//               <div className="search-set mb-3">
//                 <div className="d-flex align-items-center flex-wrap gap-2">
//                   <div className="table-search d-flex align-items-center mb-0">
//                     <div className="search-input">
//                       <SearchInput value={searchText} onChange={handleSearch} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="table-responsive">
//             {loading ? (
//               <div className="text-center py-5">
//                 <div className="spinner-border text-primary" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//               </div>
//             ) : (
//               <Datatable
//                 columns={columns}
//                 dataSource={tableData}
//                 Selection={false}
//                 searchText={searchText}
//               />
//             )}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="footer text-center bg-white p-2 border-top">
//           <p className="text-dark mb-0">
//             2025 ©
//             <Link to="#" className="link-primary">
//               Preclinic
//             </Link>
//             , All Rights Reserved
//           </p>
//         </div>
//       </div>

//       {/* Delete Modal */}
//       <div className="modal fade" id="delete_modal">
//         <div className="modal-dialog modal-dialog-centered modal-sm">
//           <div className="modal-content">
//             <div className="modal-body text-center position-relative">
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-01.png"
//                 alt=""
//                 className="img-fluid position-absolute top-0 start-0 z-0"
//               />
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-02.png"
//                 alt=""
//                 className="img-fluid position-absolute bottom-0 end-0 z-0"
//               />
//               <div className="mb-3 position-relative z-1">
//                 <span className="avatar avatar-lg bg-danger text-white">
//                   <i className="ti ti-trash fs-24" />
//                 </span>
//               </div>
//               <h5 className="fw-bold mb-1 position-relative z-1">
//                 Delete Confirmation
//               </h5>
//               <p className="mb-3 position-relative z-1">
//                 Are you sure want to delete this appointment?
//               </p>
//               <div className="d-flex justify-content-center">
//                 <Link
//                   to="#"
//                   className="btn btn-light position-relative z-1 me-3"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </Link>
//                 <button
//                   type="button"
//                   className="btn btn-danger position-relative z-1"
//                   data-bs-dismiss="modal"
//                   onClick={handleDelete}
//                 >
//                   Yes, Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Appointments;

import { useState, useEffect } from "react";
import { message, DatePicker, Modal, Spin } from "antd";
import axios from "axios";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

interface Appointment {
  _id: string;
  patientId: string;
  patientName: string;
  patientEmail: string;
  doctorId: string;
  doctorName: string;
  department: string;
  appointmentType: string;
  date: string;
  time: string;
  status: string;
  notes?: string;
  patient?: {
    profilePhoto?: string;
    avatar?: string;
  };
  doctor?: {
    profilePhoto?: string;
    avatar?: string;
  };
}

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editFormData, setEditFormData] = useState<any>({});
  const [doctors, setDoctors] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
    fetchPatients();
  }, []);

  useEffect(() => {
    filterAppointments();
  }, [searchQuery, appointments]);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/api/appointments`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAppointments(response.data.appointments || []);
      setFilteredAppointments(response.data.appointments || []);
    } catch (error) {
      message.error("Failed to fetch appointments");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctors = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/api/doctors`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDoctors(response.data.doctors || []);
    } catch (error) {
      console.error("Failed to fetch doctors", error);
    }
  };

  const fetchPatients = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/api/patients`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPatients(response.data.patients || []);
    } catch (error) {
      console.error("Failed to fetch patients", error);
    }
  };

  const filterAppointments = () => {
    if (!searchQuery.trim()) {
      setFilteredAppointments(appointments);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = appointments.filter((apt) => {
      const patientName = apt.patientName?.toLowerCase() || "";
      const doctorName = apt.doctorName?.toLowerCase() || "";
      const department = apt.department?.toLowerCase() || "";
      return (
        patientName.includes(query) ||
        doctorName.includes(query) ||
        department.includes(query)
      );
    });
    setFilteredAppointments(filtered);
  };

  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: "Delete Appointment",
      content: "Are you sure you want to delete this appointment?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`${API_URL}/api/appointments/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          message.success("Appointment deleted successfully");
          fetchAppointments();
        } catch (error) {
          message.error("Failed to delete appointment");
          console.error(error);
        }
      },
    });
  };

  const handleEdit = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setEditFormData({
      patientId: appointment.patientId,
      doctorId: appointment.doctorId,
      department: appointment.department,
      appointmentType: appointment.appointmentType,
      date: appointment.date.split("T")[0], // Format date for input
      time: appointment.time,
      status: appointment.status,
      notes: appointment.notes || "",
    });
    setShowEditModal(true);
  };

  const handleView = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setShowViewModal(true);
  };

  const handleUpdateAppointment = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_URL}/api/appointments/${selectedAppointment?._id}`,
        editFormData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      message.success("Appointment updated successfully");
      setShowEditModal(false);
      setSelectedAppointment(null);
      fetchAppointments();
    } catch (error: any) {
      message.error(error.response?.data?.message || "Failed to update appointment");
      console.error(error);
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Appointments Report", 14, 20);
    doc.setFontSize(11);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 28);

    const tableData = filteredAppointments.map((apt) => [
      apt.patientName || "N/A",
      apt.doctorName || "N/A",
      apt.department || "N/A",
      apt.appointmentType || "N/A",
      new Date(apt.date).toLocaleDateString(),
      apt.time || "N/A",
      apt.status || "N/A",
    ]);

    (doc as any).autoTable({
      head: [["Patient", "Doctor", "Department", "Type", "Date", "Time", "Status"]],
      body: tableData,
      startY: 35,
      theme: "grid",
      styles: { fontSize: 9 },
      headStyles: { fillColor: [67, 97, 238] },
    });

    doc.save(`appointments_${new Date().getTime()}.pdf`);
    message.success("PDF downloaded successfully");
  };

  const exportToExcel = () => {
    const excelData = filteredAppointments.map((apt) => ({
      Patient: apt.patientName || "N/A",
      "Patient Email": apt.patientEmail || "N/A",
      Doctor: apt.doctorName || "N/A",
      Department: apt.department || "N/A",
      "Appointment Type": apt.appointmentType || "N/A",
      Date: new Date(apt.date).toLocaleDateString(),
      Time: apt.time || "N/A",
      Status: apt.status || "N/A",
      Notes: apt.notes || "",
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);

    // Set column widths
    ws["!cols"] = [
      { wch: 20 }, // Patient
      { wch: 25 }, // Patient Email
      { wch: 20 }, // Doctor
      { wch: 15 }, // Department
      { wch: 15 }, // Appointment Type
      { wch: 12 }, // Date
      { wch: 10 }, // Time
      { wch: 12 }, // Status
      { wch: 30 }, // Notes
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Appointments");
    XLSX.writeFile(wb, `appointments_${new Date().getTime()}.xlsx`);
    message.success("Excel downloaded successfully");
  };

  const getInitials = (name: string) => {
    if (!name) return "?";
    const names = name.split(" ");
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name.charAt(0).toUpperCase();
  };

  const getAvatarUrl = (user: any) => {
    return user?.profilePhoto || user?.avatar || null;
  };

  const renderAvatar = (user: any, name: string) => {
    const avatarUrl = getAvatarUrl(user);
    if (avatarUrl) {
      return (
        <img
          src={avatarUrl}
          alt={name}
          className="rounded-circle"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            border: "2px solid #e9ecef"
          }}
          onError={(e) => {
            // Fallback to initials if image fails to load
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling?.classList.remove("d-none");
          }}
        />
      );
    }
    return (
      <div
        className="rounded-circle d-flex align-items-center justify-content-center"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#4361ee",
          color: "white",
          fontSize: "16px",
          fontWeight: "600",
          border: "2px solid #e9ecef",
        }}
      >
        {getInitials(name)}
      </div>
    );
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h4 className="mb-1">Appointments</h4>
            <p className="text-muted mb-0">
              Manage all appointments ({filteredAppointments.length})
            </p>
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={exportToPDF}
              disabled={filteredAppointments.length === 0}
            >
              <i className="ti ti-file-export me-2"></i>
              Export PDF
            </button>
            <button
              className="btn btn-outline-success btn-sm"
              onClick={exportToExcel}
              disabled={filteredAppointments.length === 0}
            >
              <i className="ti ti-file-spreadsheet me-2"></i>
              Export Excel
            </button>
            <button className="btn btn-primary btn-sm">
              <i className="ti ti-plus me-2"></i>
              New Appointment
            </button>
          </div>
        </div>

        {/* Search and Table Card */}
        <div className="card">
          <div className="card-body">
            {/* Search Bar */}
            <div className="mb-4">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="ti ti-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by patient name, doctor name, or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setSearchQuery("")}
                  >
                    <i className="ti ti-x"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Table */}
            {loading ? (
              <div className="text-center py-5">
                <Spin size="large" />
                <p className="mt-3 text-muted">Loading appointments...</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: "15%" }}>Date & Time</th>
                      <th style={{ width: "25%" }}>Patient</th>
                      <th style={{ width: "25%" }}>Doctor</th>
                      <th style={{ width: "12%" }}>Type</th>
                      <th style={{ width: "10%" }}>Status</th>
                      <th style={{ width: "8%" }} className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAppointments.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-5">
                          <div className="text-muted">
                            <i className="ti ti-calendar-off fs-1 mb-3 d-block"></i>
                            {searchQuery
                              ? "No appointments found matching your search"
                              : "No appointments available"}
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredAppointments.map((apt) => (
                        <tr key={apt._id}>
                          <td>
                            <div className="fw-medium">
                              {new Date(apt.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                            <small className="text-muted">
                              <i className="ti ti-clock me-1"></i>
                              {apt.time}
                            </small>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              {renderAvatar(apt.patient, apt.patientName)}
                              <div>
                                <div className="fw-medium">{apt.patientName}</div>
                                <small className="text-muted">{apt.patientEmail}</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              {renderAvatar(apt.doctor, apt.doctorName)}
                              <div>
                                <div className="fw-medium">{apt.doctorName}</div>
                                <small className="text-muted">
                                  <i className="ti ti-stethoscope me-1"></i>
                                  {apt.department}
                                </small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-info-subtle text-info">
                              {apt.appointmentType}
                            </span>
                          </td>
                          <td>
                            <span
                              className={`badge ${apt.status === "Scheduled"
                                  ? "bg-primary"
                                  : apt.status === "Completed"
                                    ? "bg-success"
                                    : apt.status === "Cancelled"
                                      ? "bg-danger"
                                      : "bg-warning"
                                }`}
                            >
                              {apt.status}
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown">
                              <button
                                className="btn btn-sm btn-light"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    onClick={() => handleView(apt)}
                                  >
                                    <i className="ti ti-eye me-2"></i>View Details
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    onClick={() => handleEdit(apt)}
                                  >
                                    <i className="ti ti-edit me-2"></i>Edit
                                  </button>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                  <button
                                    className="dropdown-item text-danger"
                                    onClick={() => handleDelete(apt._id)}
                                  >
                                    <i className="ti ti-trash me-2"></i>Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        title={
          <div className="d-flex align-items-center">
            <i className="ti ti-edit me-2 text-primary"></i>
            <span>Edit Appointment</span>
          </div>
        }
        open={showEditModal}
        onCancel={() => {
          setShowEditModal(false);
          setSelectedAppointment(null);
        }}
        onOk={handleUpdateAppointment}
        width={700}
        okText="Update Appointment"
        okButtonProps={{ className: "btn btn-primary" }}
        cancelButtonProps={{ className: "btn btn-light" }}
      >
        <div className="row g-3 mt-2">
          <div className="col-md-6">
            <label className="form-label fw-medium">
              Patient <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              value={editFormData.patientId}
              onChange={(e) =>
                setEditFormData({ ...editFormData, patientId: e.target.value })
              }
            >
              <option value="">Select Patient</option>
              {patients.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.fullName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium">
              Doctor <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              value={editFormData.doctorId}
              onChange={(e) =>
                setEditFormData({ ...editFormData, doctorId: e.target.value })
              }
            >
              <option value="">Select Doctor</option>
              {doctors.map((d) => (
                <option key={d._id} value={d._id}>
                  {d.fullName} - {d.department}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium">
              Department <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={editFormData.department}
              onChange={(e) =>
                setEditFormData({ ...editFormData, department: e.target.value })
              }
              placeholder="e.g., Cardiology"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium">
              Appointment Type <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              value={editFormData.appointmentType}
              onChange={(e) =>
                setEditFormData({
                  ...editFormData,
                  appointmentType: e.target.value,
                })
              }
            >
              <option value="In-Person Visit">In-Person Visit</option>
              <option value="Video Call">Video Call</option>
              <option value="Emergency">Emergency</option>
              <option value="Follow-up">Follow-up</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium">
              Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              value={editFormData.date}
              onChange={(e) =>
                setEditFormData({ ...editFormData, date: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium">
              Time <span className="text-danger">*</span>
            </label>
            <input
              type="time"
              className="form-control"
              value={editFormData.time}
              onChange={(e) =>
                setEditFormData({ ...editFormData, time: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label className="form-label fw-medium">
              Status <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              value={editFormData.status}
              onChange={(e) =>
                setEditFormData({ ...editFormData, status: e.target.value })
              }
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
              <option value="No Show">No Show</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label fw-medium">Notes (Optional)</label>
            <textarea
              className="form-control"
              rows={3}
              value={editFormData.notes}
              onChange={(e) =>
                setEditFormData({ ...editFormData, notes: e.target.value })
              }
              placeholder="Add any additional notes about this appointment..."
            />
          </div>
        </div>
      </Modal>

      {/* View Modal */}
      <Modal
        title={
          <div className="d-flex align-items-center">
            <i className="ti ti-eye me-2 text-info"></i>
            <span>Appointment Details</span>
          </div>
        }
        open={showViewModal}
        onCancel={() => {
          setShowViewModal(false);
          setSelectedAppointment(null);
        }}
        footer={[
          <button
            key="edit"
            className="btn btn-primary btn-sm"
            onClick={() => {
              setShowViewModal(false);
              if (selectedAppointment) {
                handleEdit(selectedAppointment);
              }
            }}
          >
            <i className="ti ti-edit me-2"></i>
            Edit Appointment
          </button>,
          <button
            key="close"
            className="btn btn-light btn-sm"
            onClick={() => {
              setShowViewModal(false);
              setSelectedAppointment(null);
            }}
          >
            Close
          </button>,
        ]}
        width={650}
      >
        {selectedAppointment && (
          <div className="mt-3">
            {/* Patient Information */}
            <div className="mb-4 p-3 bg-light rounded">
              <h6 className="text-primary mb-3">
                <i className="ti ti-user me-2"></i>Patient Information
              </h6>
              <div className="d-flex align-items-center gap-3">
                {renderAvatar(
                  selectedAppointment.patient,
                  selectedAppointment.patientName
                )}
                <div>
                  <div className="fw-bold fs-5">{selectedAppointment.patientName}</div>
                  <div className="text-muted">
                    <i className="ti ti-mail me-1"></i>
                    {selectedAppointment.patientEmail}
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="mb-4 p-3 bg-light rounded">
              <h6 className="text-primary mb-3">
                <i className="ti ti-stethoscope me-2"></i>Doctor Information
              </h6>
              <div className="d-flex align-items-center gap-3">
                {renderAvatar(
                  selectedAppointment.doctor,
                  selectedAppointment.doctorName
                )}
                <div>
                  <div className="fw-bold fs-5">{selectedAppointment.doctorName}</div>
                  <div className="text-muted">
                    <i className="ti ti-building-hospital me-1"></i>
                    {selectedAppointment.department}
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="p-3 border rounded">
                  <div className="text-muted small mb-1">Appointment Type</div>
                  <div className="fw-medium">
                    <span className="badge bg-info-subtle text-info">
                      {selectedAppointment.appointmentType}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded">
                  <div className="text-muted small mb-1">Status</div>
                  <div className="fw-medium">
                    <span
                      className={`badge ${selectedAppointment.status === "Scheduled"
                          ? "bg-primary"
                          : selectedAppointment.status === "Completed"
                            ? "bg-success"
                            : selectedAppointment.status === "Cancelled"
                              ? "bg-danger"
                              : "bg-warning"
                        }`}
                    >
                      {selectedAppointment.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded">
                  <div className="text-muted small mb-1">
                    <i className="ti ti-calendar me-1"></i>Date
                  </div>
                  <div className="fw-medium">
                    {new Date(selectedAppointment.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded">
                  <div className="text-muted small mb-1">
                    <i className="ti ti-clock me-1"></i>Time
                  </div>
                  <div className="fw-medium">{selectedAppointment.time}</div>
                </div>
              </div>
              {selectedAppointment.notes && (
                <div className="col-12">
                  <div className="p-3 border rounded">
                    <div className="text-muted small mb-2">
                      <i className="ti ti-notes me-1"></i>Notes
                    </div>
                    <div className="fw-medium">{selectedAppointment.notes}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Appointments;