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
import { message } from "antd";
import dayjs from "dayjs";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
// import './calendar-custom.css';
import '../../../../../style/css/calender-custom.css'

const AppointmentCalendar = () => {
  const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter states
  const [selectedPatients, setSelectedPatients] = useState<string[]>([]);
  const [selectedDoctors, setSelectedDoctors] = useState<string[]>([]);
  const [selectedDesignations, setSelectedDesignations] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent');
  
  // Available options for filters
  const [patients, setPatients] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);

  const designations = [
    "Cardiology", "Orthopedic", "Pediatrics", "Gynecology",
    "Psychiatry", "Neurosurgery", "Oncology", "Pulmonology",
    "Urology", "Dermatology"
  ];
  
  const modes = ["In-Person Visit", "Online Consultation"];
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

    if (selectedPatients.length > 0) {
      filtered = filtered.filter(app => selectedPatients.includes(app.patient?._id));
    }

    if (selectedDoctors.length > 0) {
      filtered = filtered.filter(app => selectedDoctors.includes(app.doctor?._id));
    }

    if (selectedDesignations.length > 0) {
      filtered = filtered.filter(app => selectedDesignations.includes(app.department));
    }

    if (selectedModes.length > 0) {
      filtered = filtered.filter(app => selectedModes.includes(app.appointmentType));
    }

    if (selectedStatuses.length > 0) {
      filtered = filtered.filter(app => selectedStatuses.includes(app.status));
    }

    filtered.sort((a, b) => {
      const dateA = dayjs(a.appointmentDate).valueOf();
      const dateB = dayjs(b.appointmentDate).valueOf();
      return sortOrder === 'recent' ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  };

  const filteredAppointments = getFilteredAppointments();

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return { bg: '#28a745', border: '#28a745' };
      case 'Scheduled': return { bg: '#007bff', border: '#007bff' };
      case 'Checked In': return { bg: '#ffc107', border: '#ffc107' };
      case 'Checked Out': return { bg: '#17a2b8', border: '#17a2b8' };
      case 'Cancelled': return { bg: '#dc3545', border: '#dc3545' };
      default: return { bg: '#6c757d', border: '#6c757d' };
    }
  };

  // Convert appointments to FullCalendar events with better formatting
  const calendarEvents = filteredAppointments.map(app => {
    const color = getStatusColor(app.status);
    return {
      id: app._id,
      title: `${app.appointmentTime} • ${app.patient?.fullName}`,
      start: app.appointmentDate,
      backgroundColor: color.bg,
      borderColor: color.border,
      textColor: '#ffffff',
      extendedProps: {
        patient: app.patient?.fullName,
        doctor: app.doctor?.fullName,
        time: app.appointmentTime,
        status: app.status,
        department: app.department,
        type: app.appointmentType,
        reason: app.reason,
        appointmentId: app.appointmentId
      }
    };
  });

  // Handle checkbox toggle
  const toggleSelection = (array: string[], setArray: Function, value: string) => {
    if (array.includes(value)) {
      setArray(array.filter((item: string) => item !== value));
    } else {
      setArray([...array, value]);
    }
  };

  // Clear all filters
  const clearAllFilters = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedPatients([]);
    setSelectedDoctors([]);
    setSelectedDesignations([]);
    setSelectedModes([]);
    setSelectedStatuses([]);
    message.success('All filters cleared');
  };

  // Apply filters and close dropdown
  const applyFilters = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close the dropdown manually
    const dropdownElement = document.querySelector('.filter-dropdown');
    if (dropdownElement) {
      const dropdown = dropdownElement.closest('.dropdown');
      if (dropdown) {
        const bsDropdown = (window as any).bootstrap?.Dropdown?.getInstance(dropdown);
        if (bsDropdown) {
          bsDropdown.hide();
        }
      }
    }
    
    message.success('Filters applied successfully');
  };

  // Close filter dropdown
  const closeFilterDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const dropdownElement = document.querySelector('.filter-dropdown');
    if (dropdownElement) {
      const dropdown = dropdownElement.closest('.dropdown');
      if (dropdown) {
        const bsDropdown = (window as any).bootstrap?.Dropdown?.getInstance(dropdown);
        if (bsDropdown) {
          bsDropdown.hide();
        }
      }
    }
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

  // Render event content with better formatting
  const renderEventContent = (eventInfo: any) => {
    return (
      <div className="fc-event-main-frame" style={{ padding: '2px 4px' }}>
        <div className="fc-event-time" style={{ fontWeight: 'bold', fontSize: '11px' }}>
          {eventInfo.event.extendedProps.time}
        </div>
        <div className="fc-event-title-container">
          <div className="fc-event-title fc-sticky" style={{ fontSize: '10px' }}>
            {eventInfo.event.extendedProps.patient}
          </div>
        </div>
      </div>
    );
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
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="filter-body pb-0">
                      {/* Patient Filter */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Patient</label>
                          <Link 
                            to="#" 
                            className="link-primary mb-1"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedPatients([]);
                            }}
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
                            Select <i className="ti ti-chevron-down ms-auto" />
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
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedDoctors([]);
                            }}
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
                            Select <i className="ti ti-chevron-down ms-auto" />
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
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedDesignations([]);
                            }}
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
                            Select <i className="ti ti-chevron-down ms-auto" />
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
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedModes([]);
                            }}
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
                            Select <i className="ti ti-chevron-down ms-auto" />
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
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedStatuses([]);
                            }}
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
                            Select <i className="ti ti-chevron-down ms-auto" />
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
                      <button
                        type="button"
                        className="btn btn-light btn-md me-2 fw-medium"
                        onClick={closeFilterDropdown}
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-md fw-medium"
                        onClick={applyFilters}
                      >
                        Filter
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
                      onClick={(e) => {
                        e.preventDefault();
                        setSortOrder('recent');
                      }}
                    >
                      Recent
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="#" 
                      className="dropdown-item rounded-1"
                      onClick={(e) => {
                        e.preventDefault();
                        setSortOrder('oldest');
                      }}
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
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div id="calendar">
                  <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={calendarEvents}
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,dayGridWeek,dayGridDay'
                    }}
                    height="auto"
                    eventContent={renderEventContent}
                    eventClick={(info) => {
                      const props = info.event.extendedProps;
                      const statusColor = getStatusColor(props.status);
                      
                      // Create a better modal/alert
                      const content = `
📋 Appointment Details
━━━━━━━━━━━━━━━━━━━━

🆔 ID: ${props.appointmentId}
👤 Patient: ${props.patient}
👨‍⚕️ Doctor: ${props.doctor}
🏥 Department: ${props.department}
⏰ Time: ${props.time}
📅 Date: ${dayjs(info.event.start).format('DD MMM YYYY')}
📋 Type: ${props.type}
📝 Status: ${props.status}
💬 Reason: ${props.reason || 'N/A'}
                      `;
                      
                      alert(content);
                    }}
                    eventDidMount={(info) => {
                      // Add tooltip on hover
                      info.el.title = `${info.event.extendedProps.patient} - ${info.event.extendedProps.time}\nStatus: ${info.event.extendedProps.status}`;
                    }}
                  />
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