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



import { useState, useEffect } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../routes/all_routes";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import {
  getAppointments,
  deleteAppointment,
  updateAppointment,
  type AppointmentResponse
} from "../../../../../api/appointmentService";
import { message, DatePicker, Modal, Drawer } from "antd";
import dayjs from "dayjs";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Appointments = () => {
  const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");
  const [deleteId, setDeleteId] = useState<string>("");
  const [viewDrawerVisible, setViewDrawerVisible] = useState(false); // ✅ Changed to Drawer
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [editFormData, setEditFormData] = useState<any>({});

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await getAppointments();
      setAppointments(response.data || []);
    } catch (error: any) {
      console.error("Error fetching appointments:", error);
      message.error(error.message || "Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteAppointment(deleteId);
      message.success("Appointment deleted successfully");
      fetchAppointments();
      setDeleteId("");
    } catch (error: any) {
      console.error("Error deleting appointment:", error);
      message.error(error.message || "Failed to delete appointment");
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  // ✅ Export to PDF
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text('Appointments Report', 14, 20);

      const tableData = filteredData.map(app => [
        `${dayjs(app.appointmentDate).format("DD MMM YYYY")} ${app.appointmentTime}`,
        app.patient?.fullName || "N/A",
        app.patient?.email || "N/A",
        app.doctor?.fullName || "N/A",
        app.department || "N/A",
        app.appointmentType || "N/A",
        app.status || "N/A"
      ]);

      autoTable(doc, {
        head: [['Date & Time', 'Patient', 'Contact', 'Doctor', 'Department', 'Mode', 'Status']],
        body: tableData,
        startY: 30,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [66, 66, 245] }
      });

      doc.save(`appointments_${dayjs().format('YYYY-MM-DD')}.pdf`);
      message.success('PDF downloaded successfully');
    } catch (error) {
      console.error('PDF export error:', error);
      message.error('Failed to export PDF');
    }
  };

  // Export to Excel
  const exportToExcel = () => {
    try {
      const excelData = filteredData.map(app => ({
        'Date': dayjs(app.appointmentDate).format("DD MMM YYYY"),
        'Time': app.appointmentTime,
        'Patient Name': app.patient?.fullName || "N/A",
        'Patient Email': app.patient?.email || "N/A",
        'Doctor Name': app.doctor?.fullName || "N/A",
        'Department': app.department || "N/A",
        'Appointment Type': app.appointmentType || "N/A",
        'Status': app.status || "N/A"
      }));

      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
      XLSX.writeFile(wb, `appointments_${dayjs().format('YYYY-MM-DD')}.xlsx`);
      message.success('Excel downloaded successfully');
    } catch (error) {
      console.error('Excel export error:', error);
      message.error('Failed to export Excel');
    }
  };

  // ✅ Handle View - Now using Ant Design Drawer (Works on Live)
  const handleView = (appointment: any) => {
    setSelectedAppointment(appointment);
    setViewDrawerVisible(true);
  };

  // Handle Edit
  const handleEdit = (appointment: any) => {
    setSelectedAppointment(appointment);
    setEditFormData({
      appointmentDate: appointment.appointmentDate,
      appointmentTime: appointment.appointmentTime,
      appointmentType: appointment.appointmentType,
      department: appointment.department,
      status: appointment.status,
      reason: appointment.reason || "",
      patient: appointment.patient?._id,
      doctor: appointment.doctor?._id
    });
    setEditModalVisible(true);
  };

  // Submit Edit - INSTANT UPDATE
  const handleEditSubmit = async () => {
    try {
      const updateData = {
        appointmentDate: editFormData.appointmentDate,
        appointmentTime: editFormData.appointmentTime,
        appointmentType: editFormData.appointmentType,
        department: editFormData.department,
        status: editFormData.status,
        reason: editFormData.reason
      };

      await updateAppointment(selectedAppointment._id, updateData);

      // Instant update in state without refetching
      setAppointments(prevAppointments =>
        prevAppointments.map(app =>
          app._id === selectedAppointment._id
            ? { ...app, ...updateData }
            : app
        )
      );

      message.success("Appointment updated successfully");
      setEditModalVisible(false);
    } catch (error: any) {
      console.error("Error updating appointment:", error);
      message.error(error.message || "Failed to update appointment");
    }
  };

  // Get initials
  const getInitials = (name: string) => {
    if (!name) return "?";
    return name.charAt(0).toUpperCase();
  };

  // Render avatar with proper image handling
  const renderAvatar = (image: string | null | undefined, name: string, bgColor: string) => {
    const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

    // If no image, show initials
    if (!image) {
      return (
        <div
          className={`rounded-circle ${bgColor} text-white d-flex align-items-center justify-content-center`}
          style={{ width: '40px', height: '40px', fontSize: '16px' }}
        >
          {getInitials(name)}
        </div>
      );
    }

    // Determine image source
    let imageSrc = image;

    // If image is relative path (starts with /uploads or uploads)
    if (image.startsWith('/uploads') || (image.startsWith('uploads') && !image.startsWith('http'))) {
      imageSrc = `${API_URL}${image.startsWith('/') ? image : '/' + image}`;
    }
    // If image is already full URL or data URI, use as is
    else if (image.startsWith('http') || image.startsWith('data:image')) {
      imageSrc = image;
    }
    // Local asset path
    else {
      imageSrc = `assets/img/users/${image}`;
    }

    return (
      <img
        src={imageSrc}
        alt={name}
        className="rounded-circle"
        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
        onError={(e) => {
          console.log(`Image failed to load: ${imageSrc}`);
          // Replace with initials on error
          const target = e.currentTarget;
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
            <div class="rounded-circle ${bgColor} text-white d-flex align-items-center justify-content-center" 
                  style="width: 40px; height: 40px; font-size: 16px;">
              ${getInitials(name)}
            </div>
          `;
          }
        }}
      />
    );
  };

  // Filter appointments
  const filteredData = appointments.filter(app => {
    const searchLower = searchText.toLowerCase();
    return (
      app.patient?.fullName?.toLowerCase().includes(searchLower) ||
      app.doctor?.fullName?.toLowerCase().includes(searchLower) ||
      app.department?.toLowerCase().includes(searchLower)
    );
  });

  // Format data for table
  const tableData = filteredData.map((appointment) => {
    console.log('Doctor image:', appointment.doctor?.profileImage); // ✅ Add this
    console.log('Patient image:', appointment.patient?.profileImage);
    return{
    key: appointment._id,
    Date_Time: `${dayjs(appointment.appointmentDate).format("DD MMM YYYY")} - ${appointment.appointmentTime}`,
    Patient: appointment.patient?.fullName || "N/A",
    Patient_Image: appointment.patient?.profileImage || null,
    Phone: appointment.patient?.email || "N/A",
    Doctor: appointment.doctor?.fullName || "N/A",
    Doctor_Image: appointment.doctor?.profileImage || null,
    role: appointment.department,
    Mode: appointment.appointmentType,
    Status: appointment.status,
    _id: appointment._id,
    fullData: appointment
    }
  });

  const columns = [
    {
      title: "Date & Time",
      dataIndex: "Date_Time",
      sorter: (a: any, b: any) => a.Date_Time.localeCompare(b.Date_Time),
    },
    {
      title: "Patient",
      dataIndex: "Patient",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.patientDetails}
            className="avatar avatar-md me-2"
          >
            {renderAvatar(record.Patient_Image, text, 'bg-primary')}
          </Link>
          <Link
            to={all_routes.patientDetails}
            className="text-dark fw-semibold"
          >
            {text}
            <span className="text-body fs-13 fw-normal d-block">
              {record.Phone}
            </span>
          </Link>
        </div>
      ),
      sorter: (a: any, b: any) => a.Patient.localeCompare(b.Patient),
    },
    {
      title: "Doctor",
      dataIndex: "Doctor",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.doctordetails}
            className="avatar me-2 flex-shrink-0"
          >
            {renderAvatar(record.Doctor_Image, text, 'bg-success')}
          </Link>
          <div>
            <h6 className="fs-14 mb-1 text-truncate">
              <Link to={all_routes.doctordetails} className="fw-semibold">
                {text}
              </Link>
            </h6>
            <p className="mb-0 fs-13 text-truncate">{record.role}</p>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Doctor.localeCompare(b.Doctor),
    },
    {
      title: "Mode",
      dataIndex: "Mode",
      sorter: (a: any, b: any) => a.Mode.localeCompare(b.Mode),
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`fs-13 badge ${text === "Checked Out"
            ? "badge-soft-info text-info"
            : text === "Checked In"
              ? "badge-soft-warning text-warning"
              : text === "Cancelled"
                ? "badge-soft-danger text-danger"
                : text === "Scheduled"
                  ? "badge-soft-primary text-primary"
                  : text === "Confirmed"
                    ? "badge-soft-success text-success"
                    : "badge-soft-secondary text-secondary"
            } rounded fw-medium`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.localeCompare(b.Status),
    },
    {
      title: "",
      render: (record: any) => (
        <div className="action-item">
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleEdit(record.fullData);
                }}
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleView(record.fullData);
                }}
              >
                View
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#delete_modal"
                onClick={() => setDeleteId(record._id)}
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const StatusOptions = [
    { value: "Scheduled", label: "Scheduled" },
    { value: "Confirmed", label: "Confirmed" },
    { value: "Checked In", label: "Checked In" },
    { value: "Checked Out", label: "Checked Out" },
    { value: "Cancelled", label: "Cancelled" }
  ];

  const AppointmentTypeOptions = [
    { value: "In-Person Visit", label: "In-Person Visit" },
    { value: "Online Consultation", label: "Online Consultation" },
    { value: "Emergency", label: "Emergency" }
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-semibold mb-0"> Appointment </h4>
            </div>
            <div className="text-end d-flex">
              <div className="dropdown me-1">
                <Link
                  to="#"
                  className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Export
                  <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li>
                    <Link className="dropdown-item" to="#" onClick={exportToPDF}>
                      Download as PDF
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={exportToExcel}>
                      Download as Excel
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                <Link
                  to={all_routes.appointments}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-dark" />
                </Link>
                <Link
                  to={all_routes.appointmentCalendar}
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-calendar-event fs-14 text-body" />
                </Link>
              </div>
              <Link
                to={all_routes.newAppointment}
                className="btn btn-primary ms-2 fs-13 btn-md"
              >
                <i className="ti ti-plus me-1" /> New Appointment
              </Link>
            </div>
          </div>

          {/* Filter Section */}
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <div className="search-set mb-3">
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <div className="table-search d-flex align-items-center mb-0">
                    <div className="search-input">
                      <SearchInput value={searchText} onChange={handleSearch} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading..</span>
                </div>
              </div>
            ) : (
              <Datatable
                columns={columns}
                dataSource={tableData}
                Selection={false}
                searchText=""
              />
            )}
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

      {/* ✅ View Drawer - Ant Design Drawer (Works on Live) */}
      <Drawer
        title={
          <div>
            <span className="fs-18 fw-bold">Appointment Details</span>
            <span className="badge bg-primary ms-2">
              #{selectedAppointment?.appointmentId || 'N/A'}
            </span>
          </div>
        }
        placement="right"
        width={400}
        onClose={() => setViewDrawerVisible(false)}
        open={viewDrawerVisible}
      >
        {selectedAppointment && (
          <div>
            <h6 className="bg-light py-2 px-3 fw-bold mb-3">When & Where</h6>

            <div className="bg-light p-3 mb-3 border rounded-3">
              <div className="d-flex align-items-center">
                <div className="avatar avatar-md me-2">
                  {selectedAppointment?.doctor?.profileImage ? (
                    renderAvatar(selectedAppointment.doctor.profileImage, selectedAppointment.doctor.fullName, 'bg-success')
                  ) : (
                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      {getInitials(selectedAppointment?.doctor?.fullName || '')}
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-dark fw-semibold">
                    {selectedAppointment?.doctor?.fullName || 'N/A'}
                  </div>
                  <div className="text-body fs-13">
                    {selectedAppointment?.department || 'N/A'}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-dark fw-semibold">Appointment On</span>
                <span className="text-body">
                  {selectedAppointment ? dayjs(selectedAppointment.appointmentDate).format('dddd, DD MMM YYYY') : 'N/A'}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-dark fw-semibold">Time</span>
                <span className="text-body">{selectedAppointment?.appointmentTime || 'N/A'}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-dark fw-semibold">Appointment Type</span>
                <span className="text-body">{selectedAppointment?.appointmentType || 'N/A'}</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-dark fw-semibold">Patient Details</span>
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-xs me-2">
                    {selectedAppointment?.patient?.profileImage ? (
                      renderAvatar(selectedAppointment.patient.profileImage, selectedAppointment.patient.fullName, 'bg-primary')
                    ) : (
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', fontSize: '14px' }}>
                        {getInitials(selectedAppointment?.patient?.fullName || '')}
                      </div>
                    )}
                  </div>
                  <span className="text-body">{selectedAppointment?.patient?.fullName || 'N/A'}</span>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="text-dark fw-semibold mb-2">Reason</div>
              <div className="text-body">{selectedAppointment?.reason || 'N/A'}</div>
            </div>

            <h6 className="bg-light py-2 px-3 fw-bold mb-3">Appointment Status</h6>

            <div className="d-flex justify-content-between align-items-center">
              <span className="text-dark fw-semibold">Current Status</span>
              <span className={`badge ${selectedAppointment?.status === "Checked Out" ? "bg-info" :
                selectedAppointment?.status === "Checked In" ? "bg-warning" :
                  selectedAppointment?.status === "Cancelled" ? "bg-danger" :
                    selectedAppointment?.status === "Scheduled" ? "bg-primary" :
                      selectedAppointment?.status === "Confirmed" ? "bg-success" : "bg-secondary"
                }`}>
                {selectedAppointment?.status || 'N/A'}
              </span>
            </div>
          </div>
        )}
      </Drawer>

      {/* Edit Modal */}
      <Modal
        title="Edit Appointment"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={[
          <button key="cancel" className="btn btn-light me-2" onClick={() => setEditModalVisible(false)}>
            Cancel
          </button>,
          <button key="save" className="btn btn-primary" onClick={handleEditSubmit}>
            Save Changes
          </button>
        ]}
        width={600}
      >
        {selectedAppointment && (
          <div>
            <div className="mb-3">
              <label className="form-label">Appointment Date</label>
              <DatePicker
                className="form-control"
                value={dayjs(editFormData.appointmentDate)}
                onChange={(date) => setEditFormData({ ...editFormData, appointmentDate: date?.format('YYYY-MM-DD') })}
                format="DD-MM-YYYY"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Time</label>
              <input
                type="time"
                className="form-control"
                value={editFormData.appointmentTime}
                onChange={(e) => setEditFormData({ ...editFormData, appointmentTime: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Appointment Type</label>
              <CommonSelect
                options={AppointmentTypeOptions}
                className="select"
                defaultValue={AppointmentTypeOptions.find(opt => opt.value === editFormData.appointmentType)}
                onChange={(option: any) => setEditFormData({ ...editFormData, appointmentType: option?.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <CommonSelect
                options={StatusOptions}
                className="select"
                defaultValue={StatusOptions.find(opt => opt.value === editFormData.status)}
                onChange={(option: any) => setEditFormData({ ...editFormData, status: option?.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Reason</label>
              <textarea
                className="form-control"
                rows={3}
                value={editFormData.reason}
                onChange={(e) => setEditFormData({ ...editFormData, reason: e.target.value })}
              />
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Modal */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0 z-0"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0 z-0"
              />
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1 position-relative z-1">
                Delete Confirmation
              </h5>
              <p className="mb-3 position-relative z-1">
                Are you sure want to delete this appointment?
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  className="btn btn-danger position-relative z-1"
                  data-bs-dismiss="modal"
                  onClick={handleDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;