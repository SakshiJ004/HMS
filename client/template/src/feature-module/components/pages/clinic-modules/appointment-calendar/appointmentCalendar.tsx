// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import EventCalendar from "../../../../../core/common/event-calendar/eventCalendar";
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import { all_routes } from "../../../../routes/all_routes";

// const AppointmentCalendar = () => {
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
//               <div className="bg-white border rounded px-1 pb-0 text-center d-flex align-items-center shadow-sm justify-content-center">
//                 <Link
//                   to={all_routes.appointments}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-list fs-14 text-body" />
//                 </Link>
//                 <Link
//                   to={all_routes.appointmentCalendar}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
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
//           <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//             <div className="d-flex align-items-center gap-2">
//               <div className="d-flex right-content align-items-center flex-wrap mb-3">
//                 <div className="custom-range-picker position-relative">
//                   <span className="input-icon-addon fs-14 text-dark">
//                     <i className="ti ti-calendar" />
//                   </span>
//                   <PredefinedDatePicker />
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
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
//                         <div className="input-icon-end position-relative">
//                           <input
//                             type="text"
//                             className="form-control bookingrange"
//                             placeholder="dd/mm/yyyy"
//                           />
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
//           {/* start Card */}
//           <div className="card mb-0">
//             <div className="card-body">
//               <div id="calendar">
//                 <EventCalendar />
//               </div>
//             </div>
//           </div>
//           {/* end card */}
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

// export default AppointmentCalendar;



import { useState, useEffect } from "react";
import { Link } from "react-router";
import PredefinedDatePicker from "../../../../../core/common/datePicker";
import { all_routes } from "../../../../routes/all_routes";
import { getAppointments, getDoctors, getPatients, type AppointmentResponse } from "../../../../../api/appointmentService";
import { message, Calendar, Badge, Spin } from "antd";
import dayjs, { Dayjs } from "dayjs";
import type { BadgeProps } from 'antd';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const AppointmentCalendar = () => {
  const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  
  // Filter states
  const [selectedPatients, setSelectedPatients] = useState<string[]>([]);
  const [selectedDoctors, setSelectedDoctors] = useState<string[]>([]);
  const [selectedDesignations, setSelectedDesignations] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [filterDateRange, setFilterDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);
  const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent');
  
  // Available options for filters
  const [patients, setPatients] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);

  const designations = [
    "Cardiologist", "Orthopedic Surgeon", "Pediatrician", "Gynecologist",
    "Psychiatrist", "Neurosurgeon", "Oncologist", "Pulmonologist",
    "Urologist", "Dermatologist"
  ];
  
  const modes = ["In Person", "Online"];
  const statuses = ["Checked Out", "Checked In", "Cancelled", "Scheduled", "Confirmed"];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [appointmentsRes, patientsRes, doctorsRes] = await Promise.all([
        getAppointments(),
        getPatients(),
        getDoctors()
      ]);
      
      setAppointments(appointmentsRes.data || []);
      setPatients(patientsRes.data || []);
      setDoctors(doctorsRes.data || []);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      message.error(error.message || "Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  // Filter appointments based on all selected filters
  const getFilteredAppointments = () => {
    let filtered = [...appointments];

    // Filter by patients
    if (selectedPatients.length > 0) {
      filtered = filtered.filter(app => 
        selectedPatients.includes(app.patient?._id)
      );
    }

    // Filter by doctors
    if (selectedDoctors.length > 0) {
      filtered = filtered.filter(app => 
        selectedDoctors.includes(app.doctor?._id)
      );
    }

    // Filter by designations (department)
    if (selectedDesignations.length > 0) {
      filtered = filtered.filter(app => 
        selectedDesignations.includes(app.department)
      );
    }

    // Filter by modes (appointment type)
    if (selectedModes.length > 0) {
      filtered = filtered.filter(app => {
        const mode = app.appointmentType?.includes("Person") ? "In Person" : "Online";
        return selectedModes.includes(mode);
      });
    }

    // Filter by status
    if (selectedStatuses.length > 0) {
      filtered = filtered.filter(app => 
        selectedStatuses.includes(app.status)
      );
    }

    // Filter by date range
    if (filterDateRange[0] && filterDateRange[1]) {
      filtered = filtered.filter(app => {
        const appDate = dayjs(app.appointmentDate);
        return appDate.isAfter(filterDateRange[0]?.subtract(1, 'day')) && 
               appDate.isBefore(filterDateRange[1]?.add(1, 'day'));
      });
    }

    // Sort by date
    filtered.sort((a, b) => {
      const dateA = dayjs(a.appointmentDate).valueOf();
      const dateB = dayjs(b.appointmentDate).valueOf();
      return sortOrder === 'recent' ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  };

  const filteredAppointments = getFilteredAppointments();

  // Get appointments for a specific date
  const getAppointmentsForDate = (date: Dayjs) => {
    return filteredAppointments.filter(app => 
      dayjs(app.appointmentDate).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
    );
  };

  // Get list data for calendar cells
  const getListData = (value: Dayjs) => {
    const dayAppointments = getAppointmentsForDate(value);
    return dayAppointments.map(app => ({
      type: app.status === 'Confirmed' ? 'success' :
            app.status === 'Scheduled' ? 'warning' :
            app.status === 'Checked In' ? 'processing' :
            app.status === 'Checked Out' ? 'default' : 'error',
      content: `${app.patient?.fullName} - ${app.appointmentTime}`,
    }));
  };

  // Custom date cell renderer
  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events" style={{ listStyle: 'none', padding: 0 }}>
        {listData.map((item, index) => (
          <li key={index} style={{ marginBottom: '4px' }}>
            <Badge 
              status={item.type as BadgeProps['status']} 
              text={
                <span style={{ fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                  {item.content}
                </span>
              } 
            />
          </li>
        ))}
      </ul>
    );
  };

  // Handle checkbox toggle
  const toggleSelection = (array: string[], setArray: Function, value: string) => {
    if (array.includes(value)) {
      setArray(array.filter(item => item !== value));
    } else {
      setArray([...array, value]);
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedPatients([]);
    setSelectedDoctors([]);
    setSelectedDesignations([]);
    setSelectedModes([]);
    setSelectedStatuses([]);
    setFilterDateRange([null, null]);
  };

  // Export to PDF
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Appointments Calendar Report', 14, 20);

      const tableData = filteredAppointments.map(app => [
        dayjs(app.appointmentDate).format("DD MMM YYYY"),
        app.appointmentTime,
        app.patient?.fullName || "N/A",
        app.doctor?.fullName || "N/A",
        app.department || "N/A",
        app.appointmentType || "N/A",
        app.status || "N/A"
      ]);

      autoTable(doc, {
        head: [['Date', 'Time', 'Patient', 'Doctor', 'Department', 'Type', 'Status']],
        body: tableData,
        startY: 30,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [66, 66, 245] }
      });

      doc.save(`appointments_calendar_${dayjs().format('YYYY-MM-DD')}.pdf`);
      message.success('PDF downloaded successfully');
    } catch (error) {
      console.error('PDF export error:', error);
      message.error('Failed to export PDF');
    }
  };

  // Export to Excel
  const exportToExcel = () => {
    try {
      const excelData = filteredAppointments.map(app => ({
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
      XLSX.writeFile(wb, `appointments_calendar_${dayjs().format('YYYY-MM-DD')}.xlsx`);
      message.success('Excel downloaded successfully');
    } catch (error) {
      console.error('Excel export error:', error);
      message.error('Failed to export Excel');
    }
  };

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
              {/* Export dropdown */}
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
              {/* View toggle - List/Calendar */}
              <div className="bg-white border rounded px-1 pb-0 text-center d-flex align-items-center shadow-sm justify-content-center">
                <Link
                  to={all_routes.appointments}
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                  title="List View"
                >
                  <i className="ti ti-list fs-14 text-body" />
                </Link>
                <Link
                  to={all_routes.appointmentCalendar}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                  title="Calendar View"
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
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="d-flex align-items-center gap-2">
              <div className="d-flex right-content align-items-center flex-wrap mb-3">
                <div className="custom-range-picker position-relative">
                  <span className="input-icon-addon fs-14 text-dark">
                    <i className="ti ti-calendar" />
                  </span>
                  <PredefinedDatePicker />
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              {/* Filter Dropdown */}
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter text-gray-5 me-1" />
                  Filters
                  {(selectedPatients.length + selectedDoctors.length + selectedDesignations.length + 
                    selectedModes.length + selectedStatuses.length > 0) && (
                    <span className="badge bg-primary ms-2">
                      {selectedPatients.length + selectedDoctors.length + selectedDesignations.length + 
                       selectedModes.length + selectedStatuses.length}
                    </span>
                  )}
                </Link>
                <div
                  className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
                  id="filter-dropdown"
                  style={{ maxHeight: '600px', overflowY: 'auto' }}
                >
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h4 className="mb-0 fw-bold">Filter</h4>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-danger text-decoration-underline"
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className="filter-body pb-0">
                      {/* Patient Filter */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Patient</label>
                          <Link 
                            to="#" 
                            className="link-primary mb-1"
                            onClick={() => setSelectedPatients([])}
                          >
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                          >
                            {selectedPatients.length > 0 
                              ? `${selectedPatients.length} selected` 
                              : 'Select'} 
                            <i className="ti ti-chevron-down ms-auto" />
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                            <ul className="mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                              {patients.map((patient) => (
                                <li key={patient._id} className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input
                                      className="form-check-input m-0 me-2"
                                      type="checkbox"
                                      checked={selectedPatients.includes(patient._id)}
                                      onChange={() => toggleSelection(selectedPatients, setSelectedPatients, patient._id)}
                                    />
                                    <span className="avatar avatar-xs rounded-circle me-2">
                                      {patient.profileImage ? (
                                        <img src={patient.profileImage} alt={patient.fullName} className="rounded-circle" />
                                      ) : (
                                        <div className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle" style={{ width: '30px', height: '30px' }}>
                                          {patient.fullName?.charAt(0)}
                                        </div>
                                      )}
                                    </span>
                                    {patient.fullName}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Doctor Filter */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Doctor</label>
                          <Link 
                            to="#" 
                            className="link-primary mb-1"
                            onClick={() => setSelectedDoctors([])}
                          >
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                          >
                            {selectedDoctors.length > 0 
                              ? `${selectedDoctors.length} selected` 
                              : 'Select'}
                            <i className="ti ti-chevron-down ms-auto" />
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                            <ul className="mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                              {doctors.map((doctor) => (
                                <li key={doctor._id} className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input
                                      className="form-check-input m-0 me-2"
                                      type="checkbox"
                                      checked={selectedDoctors.includes(doctor._id)}
                                      onChange={() => toggleSelection(selectedDoctors, setSelectedDoctors, doctor._id)}
                                    />
                                    <span className="avatar avatar-xs rounded-circle me-2">
                                      {doctor.profileImage ? (
                                        <img src={doctor.profileImage} alt={doctor.fullName} className="rounded-circle" />
                                      ) : (
                                        <div className="bg-success text-white d-flex align-items-center justify-content-center rounded-circle" style={{ width: '30px', height: '30px' }}>
                                          {doctor.fullName?.charAt(0)}
                                        </div>
                                      )}
                                    </span>
                                    {doctor.fullName}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Designation Filter */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Designation</label>
                          <Link 
                            to="#" 
                            className="link-primary mb-1"
                            onClick={() => setSelectedDesignations([])}
                          >
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                          >
                            {selectedDesignations.length > 0 
                              ? `${selectedDesignations.length} selected` 
                              : 'Select'}
                            <i className="ti ti-chevron-down ms-auto" />
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                            <ul className="mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                              {designations.map((designation) => (
                                <li key={designation} className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input
                                      className="form-check-input m-0 me-2"
                                      type="checkbox"
                                      checked={selectedDesignations.includes(designation)}
                                      onChange={() => toggleSelection(selectedDesignations, setSelectedDesignations, designation)}
                                    />
                                    {designation}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Mode Filter */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Mode</label>
                          <Link 
                            to="#" 
                            className="link-primary mb-1"
                            onClick={() => setSelectedModes([])}
                          >
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                          >
                            {selectedModes.length > 0 
                              ? `${selectedModes.length} selected` 
                              : 'Select'}
                            <i className="ti ti-chevron-down ms-auto" />
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                            <ul className="mb-3">
                              {modes.map((mode) => (
                                <li key={mode} className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input
                                      className="form-check-input m-0 me-2"
                                      type="checkbox"
                                      checked={selectedModes.includes(mode)}
                                      onChange={() => toggleSelection(selectedModes, setSelectedModes, mode)}
                                    />
                                    {mode}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Status Filter */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Status</label>
                          <Link 
                            to="#" 
                            className="link-primary mb-1"
                            onClick={() => setSelectedStatuses([])}
                          >
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                          >
                            {selectedStatuses.length > 0 
                              ? `${selectedStatuses.length} selected` 
                              : 'Select'}
                            <i className="ti ti-chevron-down ms-auto" />
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                            <ul className="mb-3">
                              {statuses.map((status) => (
                                <li key={status} className="mb-1">
                                  <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input
                                      className="form-check-input m-0 me-2"
                                      type="checkbox"
                                      checked={selectedStatuses.includes(status)}
                                      onChange={() => toggleSelection(selectedStatuses, setSelectedStatuses, status)}
                                    />
                                    {status}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                      <Link
                        to="#"
                        className="btn btn-light btn-md me-2 fw-medium"
                        id="close-filter"
                        data-bs-dismiss="dropdown"
                      >
                        Close
                      </Link>
                      <button
                        type="button"
                        className="btn btn-primary btn-md fw-medium"
                        onClick={() => {
                          message.success('Filters applied successfully');
                        }}
                      >
                        Apply Filters
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Sort Dropdown */}
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown"
                >
                  <span className="me-1"> Sort By : </span> 
                  {sortOrder === 'recent' ? 'Recent' : 'Oldest'}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link 
                      to="#" 
                      className="dropdown-item rounded-1"
                      onClick={() => setSortOrder('recent')}
                    >
                      Recent
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="#" 
                      className="dropdown-item rounded-1"
                      onClick={() => setSortOrder('oldest')}
                    >
                      Oldest
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Calendar Card */}
          <div className="card mb-0">
            <div className="card-body">
              {loading ? (
                <div className="text-center py-5">
                  <Spin size="large" tip="Loading appointments..." />
                </div>
              ) : (
                <div id="calendar">
                  <Calendar 
                    dateCellRender={dateCellRender}
                    onChange={(date) => setSelectedDate(date)}
                  />
                  
                  {/* Show appointments for selected date */}
                  {getAppointmentsForDate(selectedDate).length > 0 && (
                    <div className="mt-4">
                      <h6 className="fw-bold mb-3">
                        Appointments on {selectedDate.format('DD MMM YYYY')} 
                        ({getAppointmentsForDate(selectedDate).length})
                      </h6>
                      <div className="row">
                        {getAppointmentsForDate(selectedDate).map((app) => (
                          <div key={app._id} className="col-md-6 mb-3">
                            <div className="card border">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                  <h6 className="mb-0">{app.appointmentTime}</h6>
                                  <span className={`badge ${
                                    app.status === 'Confirmed' ? 'bg-success' :
                                    app.status === 'Scheduled' ? 'bg-primary' :
                                    app.status === 'Checked In' ? 'bg-warning' :
                                    app.status === 'Checked Out' ? 'bg-info' : 'bg-danger'
                                  }`}>
                                    {app.status}
                                  </span>
                                </div>
                                <p className="mb-1">
                                  <strong>Patient:</strong> {app.patient?.fullName}
                                </p>
                                <p className="mb-1">
                                  <strong>Doctor:</strong> {app.doctor?.fullName}
                                </p>
                                <p className="mb-1">
                                  <strong>Department:</strong> {app.department}
                                </p>
                                <p className="mb-0">
                                  <strong>Type:</strong> {app.appointmentType}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
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

export default AppointmentCalendar;