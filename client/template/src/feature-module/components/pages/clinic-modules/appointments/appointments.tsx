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




import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect } from "react";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "./modals/modals";
import appointmentService from "../../../../../services/appointmentService";
import { message, DatePicker } from "antd";
import dayjs from "dayjs";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

const { RangePicker } = DatePicker;

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Filter states
  const [searchText, setSearchText] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [dateRange, setDateRange] = useState<any[]>([]);
  const [sortOrder, setSortOrder] = useState("recent");

  // Dropdown options
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    loadDropdownData();
    loadAppointments();
  }, []);

  useEffect(() => {
    loadAppointments();
  }, [searchText, selectedDoctor, selectedDepartment, selectedStatus, selectedMode, dateRange, sortOrder]);

  const loadDropdownData = async () => {
    try {
      const [doctorsRes, departmentsRes] = await Promise.all([
        appointmentService.getDoctors(),
        appointmentService.getDepartments(),
      ]);

      if (doctorsRes.success) setDoctors(doctorsRes.data);
      if (departmentsRes.success) setDepartments(departmentsRes.data);
    } catch (error) {
      console.error("Error loading dropdown data:", error);
    }
  };

  const loadAppointments = async () => {
    setLoading(true);
    try {
      const params: any = {};

      if (searchText) params.search = searchText;
      if (selectedDoctor) params.doctor = selectedDoctor;
      if (selectedDepartment) params.department = selectedDepartment;
      if (selectedStatus) params.status = selectedStatus;
      if (dateRange.length === 2) {
        params.startDate = dateRange[0].format("YYYY-MM-DD");
        params.endDate = dateRange[1].format("YYYY-MM-DD");
      }
      if (sortOrder) params.sort = sortOrder;

      const response = await appointmentService.getAppointments(params);
      if (response.success) {
        setAppointments(response.data);
      }
    } catch (error) {
      console.error("Error loading appointments:", error);
      message.error("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) {
      return;
    }

    try {
      const response = await appointmentService.deleteAppointment(id);
      if (response.success) {
        message.success("Appointment deleted successfully");
        loadAppointments();
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      message.error("Failed to delete appointment");
    }
  };

  const clearFilters = () => {
    setSearchText("");
    setSelectedDoctor("");
    setSelectedDepartment("");
    setSelectedStatus("");
    setSelectedMode("");
    setDateRange([]);
    setSortOrder("recent");
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Appointments Report", 14, 22);
    doc.setFontSize(11);
    doc.text(`Generated on: ${dayjs().format("DD-MM-YYYY HH:mm")}`, 14, 30);

    const tableData = appointments.map((apt: any) => [
      apt.appointmentId,
      apt.patientName,
      `Dr. ${apt.doctor?.firstName} ${apt.doctor?.lastName}`,
      apt.department,
      dayjs(apt.appointmentDate).format("DD MMM YYYY"),
      apt.appointmentTime,
      apt.appointmentType,
      apt.status,
    ]);

    autoTable(doc, {
      head: [["ID", "Patient", "Doctor", "Department", "Date", "Time", "Mode", "Status"]],
      body: tableData,
      startY: 35,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [46, 55, 164] },
    });

    doc.save(`appointments_${dayjs().format("YYYY-MM-DD")}.pdf`);
    message.success("PDF downloaded successfully");
  };

  // Export to Excel
  const exportToExcel = () => {
    const excelData = appointments.map((apt: any) => ({
      "Appointment ID": apt.appointmentId,
      "Patient Name": apt.patientName,
      "Patient Email": apt.patientEmail,
      "Patient Phone": apt.patientPhone,
      "Doctor": `Dr. ${apt.doctor?.firstName} ${apt.doctor?.lastName}`,
      "Specialization": apt.doctor?.specialization,
      "Department": apt.department,
      "Appointment Date": dayjs(apt.appointmentDate).format("DD MMM YYYY"),
      "Appointment Time": apt.appointmentTime,
      "Appointment Type": apt.appointmentType,
      "Reason": apt.reason,
      "Status": apt.status,
      "Created At": dayjs(apt.createdAt).format("DD MMM YYYY HH:mm"),
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Appointments");

    // Set column widths
    const colWidths = [
      { wch: 15 }, // Appointment ID
      { wch: 20 }, // Patient Name
      { wch: 25 }, // Patient Email
      { wch: 15 }, // Patient Phone
      { wch: 20 }, // Doctor
      { wch: 20 }, // Specialization
      { wch: 15 }, // Department
      { wch: 15 }, // Date
      { wch: 12 }, // Time
      { wch: 20 }, // Type
      { wch: 30 }, // Reason
      { wch: 12 }, // Status
      { wch: 18 }, // Created At
    ];
    ws['!cols'] = colWidths;

    XLSX.writeFile(wb, `appointments_${dayjs().format("YYYY-MM-DD")}.xlsx`);
    message.success("Excel downloaded successfully");
  };

  const columns = [
    {
      title: "Appointment ID",
      dataIndex: "appointmentId",
      sorter: (a: any, b: any) => a.appointmentId.localeCompare(b.appointmentId),
    },
    {
      title: "Date & Time",
      render: (text: any, record: any) => (
        <div>
          <div className="fw-medium">{dayjs(record.appointmentDate).format("DD MMM YYYY")}</div>
          <div className="text-muted fs-13">{record.appointmentTime}</div>
        </div>
      ),
      sorter: (a: any, b: any) =>
        new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime(),
    },
    {
      title: "Patient",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link to={all_routes.patientDetails} className="avatar avatar-md me-2">
            <ImageWithBasePath
              src="assets/img/users/avatar-2.jpg"
              alt="patient"
              className="rounded-circle"
            />
          </Link>
          <div>
            <Link to={all_routes.patientDetails} className="text-dark fw-semibold">
              {record.patientName}
            </Link>
            <div className="text-body fs-13 fw-normal">{record.patientPhone}</div>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.patientName.localeCompare(b.patientName),
    },
    {
      title: "Doctor",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link to={all_routes.doctordetails} className="avatar me-2 flex-shrink-0">
            <ImageWithBasePath
              src="assets/img/doctors/doctor-01.jpg"
              alt="doctor"
              className="rounded-circle"
            />
          </Link>
          <div>
            <h6 className="fs-14 mb-1 text-truncate">
              <Link to={all_routes.doctordetails} className="fw-semibold">
                Dr. {record.doctor?.firstName} {record.doctor?.lastName}
              </Link>
            </h6>
            <p className="mb-0 fs-13 text-truncate">{record.doctor?.specialization}</p>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) =>
        `${a.doctor?.firstName} ${a.doctor?.lastName}`.localeCompare(
          `${b.doctor?.firstName} ${b.doctor?.lastName}`
        ),
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a: any, b: any) => a.department.localeCompare(b.department),
    },
    {
      title: "Mode",
      dataIndex: "appointmentType",
      sorter: (a: any, b: any) => a.appointmentType.localeCompare(b.appointmentType),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <span
          className={`fs-13 badge ${status === "Checked Out"
              ? "badge-soft-info text-info"
              : status === "Checked In"
                ? "badge-soft-warning text-warning"
                : status === "Cancelled"
                  ? "badge-soft-danger text-danger"
                  : status === "Scheduled"
                    ? "badge-soft-primary text-primary"
                    : "badge-soft-success text-success"
            } rounded fw-medium`}
        >
          {status}
        </span>
      ),
      sorter: (a: any, b: any) => a.status.localeCompare(b.status),
    },
    {
      title: "",
      render: (text: any, record: any) => (
        <div className="action-item">
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <Link to="#" className="dropdown-item d-flex align-items-center">
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#view_details"
              >
                View
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center text-danger"
                onClick={() => handleDelete(record._id)}
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-semibold mb-0">Appointments</h4>
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

          {/* Filters */}
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <div className="search-set mb-3">
                <div className="search-input">
                  <SearchInput value={searchText} onChange={handleSearch} />
                </div>
              </div>
              <div className="mb-3">
                <RangePicker
                  format="DD-MM-YYYY"
                  value={dateRange}
                  onChange={(dates) => setDateRange(dates || [])}
                  placeholder={["Start Date", "End Date"]}
                />
              </div>
            </div>

            <div className="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter text-gray-5 me-1" />
                  Filters
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0">
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h4 className="mb-0 fw-bold">Filter</h4>
                    <Link
                      to="#"
                      className="link-danger text-decoration-underline"
                      onClick={clearFilters}
                    >
                      Clear All
                    </Link>
                  </div>
                  <div className="filter-body pb-0">
                    {/* Doctor Filter */}
                    <div className="mb-3">
                      <label className="form-label">Doctor</label>
                      <select
                        className="form-select"
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                      >
                        <option value="">All Doctors</option>
                        {doctors.map((doctor: any) => (
                          <option key={doctor.value} value={doctor.value}>
                            {doctor.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Department Filter */}
                    <div className="mb-3">
                      <label className="form-label">Department</label>
                      <select
                        className="form-select"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                      >
                        <option value="">All Departments</option>
                        {departments.map((dept: any) => (
                          <option key={dept.value} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Mode Filter */}
                    <div className="mb-3">
                      <label className="form-label">Mode</label>
                      <select
                        className="form-select"
                        value={selectedMode}
                        onChange={(e) => setSelectedMode(e.target.value)}
                      >
                        <option value="">All Types</option>
                        <option value="In Person">In Person</option>
                        <option value="Online Consultation">Online Consultation</option>
                        <option value="Video Call">Video Call</option>
                        <option value="Phone Call">Phone Call</option>
                      </select>
                    </div>

                    {/* Status Filter */}
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                      >
                        <option value="">All Status</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Checked In">Checked In</option>
                        <option value="Checked Out">Checked Out</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                  <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                    <button
                      type="button"
                      className="btn btn-primary btn-md fw-medium"
                      onClick={loadAppointments}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown"
                >
                  Sort By: {sortOrder === "recent" ? "Recent" : "Oldest"}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item rounded-1"
                      onClick={() => setSortOrder("recent")}
                    >
                      Recent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item rounded-1"
                      onClick={() => setSortOrder("oldest")}
                    >
                      Oldest
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={appointments}
              Selection={false}
              loading={loading}
            />
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

      <Modals />
    </>
  );
};

export default Appointments;