// import { DatePicker, Select } from "antd";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { Link } from "react-router";
// import Modals from "./modals/modals";
// import { all_routes } from "../../../../routes/all_routes";

// const Doctors = () => {
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
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
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0">
//                 Doctor Grid
//                 <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
//                   Total Doctors : 565
//                 </span>
//               </h4>
//             </div>
//             <div className="text-end d-flex">
//               <div className="dropdown me-2">
//                 <Link
//                   to="#"
//                   className="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
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
//                     <h4 className="mb-0">Filter</h4>
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
//                           <label className="form-label">Doctor</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Doctor}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Designation</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Designation}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Department</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Department}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                           Date<span className="text-danger">*</span>
//                         </label>
//                         <div className="input-icon-end position-relative">
//                           <DatePicker
//                             className="form-control datetimepicker"
//                             format={{
//                               format: "DD-MM-YYYY",
//                               type: "mask",
//                             }}
//                             getPopupContainer={getModalContainer}
//                             placeholder="DD-MM-YYYY"
//                             suffixIcon={null}
//                           />
//                           <span className="input-icon-addon">
//                             <i className="ti ti-calendar" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Amount</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Amount}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Status</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Status}
//                         />
//                       </div>
//                     </div>
//                     <div className="filter-footer d-flex align-items-center justify-content-end border-top">
//                       <Link
//                         to="#"
//                         className="btn btn-light btn-md me-2"
//                         id="close-filter"
//                       >
//                         Close
//                       </Link>
//                       <button type="submit" className="btn btn-primary btn-md">
//                         Filter
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                 <Link
//                   to={all_routes.doctorsList}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-list fs-14 text-body" />
//                 </Link>
//                 <Link
//                   to={all_routes.doctors}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-layout-grid fs-14 text-body" />
//                 </Link>
//               </div>
//               <Link
//                 to={all_routes.addDoctors}
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//               >
//                 <i className="ti ti-plus me-1" />
//                 New Doctor
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           <div className="row">
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-01.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Mick Thompson
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Cardiologist</span>
//                     <p className="mb-2 fs-13">Available : Mon, 20 Jan 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $499
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-02.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Sarah Johnson
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">
//                       Orthopedic Surgeon
//                     </span>
//                     <p className="mb-2 fs-13">Available : Wed, 22 Jan 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $450
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-03.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Emily Carter
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Pediatrician</span>
//                     <p className="mb-2 fs-13">Available : Fri, 24 Jan 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $300
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-04.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>Dr. David Lee</Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Gynecologist</span>
//                     <p className="mb-2 fs-13">Available : Tue, 21 Jan 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $250
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-05.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>Dr. Anna Kim</Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Psychiatrist</span>
//                     <p className="mb-2 fs-13">Available : Mon, 27 Jan 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $350
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-06.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. John Smith
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Neurosurgeon</span>
//                     <p className="mb-2 fs-13">Available : Thu, Jan 30, 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $499
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-07.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Lisa White
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Oncologist</span>
//                     <p className="mb-2 fs-13">Available : Sat, 25 Jan 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $200
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-08.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Patricia Brown
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Pulmonologist</span>
//                     <p className="mb-2 fs-13">Available : Sun, 01 Feb 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $450
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-09.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Rachel Green
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Urologist</span>
//                     <p className="mb-2 fs-13">Available : Tue, 28 Jan 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $400
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-10.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Michael Smith
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Cardiologist</span>
//                     <p className="mb-2 fs-13">Available : Thu, 05 Feb 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $300
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-11.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Sarah Johnson
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Surgeon</span>
//                     <p className="mb-2 fs-13">Available : Mon, 09 Feb 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $500
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-12.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Adrian White
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Practitioner</span>
//                     <p className="mb-2 fs-13">Available : Sat, 25 Jan 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $200
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-13.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>Dr. Ken Clark</Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Dermatologist</span>
//                     <p className="mb-2 fs-13">Available : Wed, 12 Feb 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $350
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-14.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Oliver King
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Orthopedist</span>
//                     <p className="mb-2 fs-13">Available : Fri, 14 Feb 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $600
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-xl-4 col-md-6">
//               <div className="card">
//                 <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
//                   <div className="me-3 doctor-profile-img">
//                     <Link to={all_routes.doctordetails}>
//                       <ImageWithBasePath
//                         src="assets/img/doctors/doctor-15.jpg"
//                         className="rounded"
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center justify-content-between mb-1">
//                       <h6 className="mb-0 fw-semibold">
//                         <Link to={all_routes.doctordetails}>
//                           Dr. Avan Davis
//                         </Link>
//                       </h6>
//                       <div className="action-item">
//                         <Link to="#" data-bs-toggle="dropdown">
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <Link
//                               to={all_routes.editDoctors}
//                               className="dropdown-item d-flex align-items-center"
//                             >
//                               Edit
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="#"
//                               className="dropdown-item d-flex align-items-center"
//                               data-bs-toggle="modal"
//                               data-bs-target="#delete_modal"
//                             >
//                               Delete
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <span className="d-block mb-2 fs-13">Endocrinologist</span>
//                     <p className="mb-2 fs-13">Available : Tue, 17 Feb 2025</p>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <h6 className="text-primary fs-14 mb-0">
//                         <span className="text-muted fs-13 fw-normal">
//                           Starts From :
//                         </span>
//                         $375
//                       </h6>
//                       <Link
//                         to={all_routes.appointmentCalendar}
//                         className="avatar avatar-xs border text-muted fs-14"
//                       >
//                         <i className="ti ti-calendar-cog" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//           </div>
//           <div className="text-center">
//             <Link to="#" className="btn btn-white bg-white text-dark fs-13">
//               Load More
//               <span className="spinner-border spinner-border-sm ms-1" />
//             </Link>
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
//       <Modals />
//     </>
//   );
// };

// export default Doctors;


import { DatePicker, Select } from "antd";
import {
  Amount,
  Department,
  Designation,
  Doctor,
  Status,
} from "../../../../../core/common/selectOption";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { Link } from "react-router";
import Modals from "./modals/modals";
import { all_routes } from "../../../../routes/all_routes";
import { useEffect, useState } from "react";
import { getDoctors, deleteDoctor } from "../../../../../api/doctorService";

// Interface for Doctor data from backend
interface DoctorData {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  consultationCharge: number;
  profileImage?: string;
  schedules?: Array<{
    day: string;
    timeSlots: Array<{ startTime: string; endTime: string }>;
  }>;
  createdAt: string;
}

const Doctors = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // State management
  const [doctors, setDoctors] = useState<DoctorData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Fetch doctors on component mount
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const response = await getDoctors();
      console.log("Fetched doctors:", response);

      if (response.success && response.data) {
        setDoctors(response.data);
      } else {
        setError("Failed to load doctors");
      }
    } catch (err: any) {
      console.error("Error fetching doctors:", err);
      setError(err.message || "Failed to load doctors");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete doctor
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteDoctor(deleteId);
      // Refresh the doctors list
      await fetchDoctors();
      setDeleteId(null);
      // Close modal using Bootstrap's modal API
      const modal = document.getElementById("delete_modal");
      if (modal) {
        const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
          bootstrapModal.hide();
        }
      }
    } catch (err: any) {
      console.error("Error deleting doctor:", err);
      setError(err.message || "Failed to delete doctor");
    }
  };

  // Add this helper function at the top of the component
  const getNextDayOccurrence = (dayName: string): Date => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const targetDay = daysOfWeek.indexOf(dayName);

    const today = new Date();
    const currentDay = today.getDay();

    let daysUntilTarget = targetDay - currentDay;
    if (daysUntilTarget <= 0) {
      daysUntilTarget += 7;
    }

    const nextOccurrence = new Date(today);
    nextOccurrence.setDate(today.getDate() + daysUntilTarget);

    return nextOccurrence;
  };

  const getNextAvailableDay = (schedules?: Array<{ day: string; timeSlots: any[] }>) => {
    if (!schedules || schedules.length === 0) {
      return "Not Available";
    }

    const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Filter schedules that have time slots
    const availableDays = schedules
      .filter(s => s.timeSlots && s.timeSlots.length > 0)
      .map(s => s.day);

    if (availableDays.length === 0) return "Not Available";

    // Get today
    const today = new Date();
    const currentDayIndex = today.getDay(); // 0 = Sunday, 6 = Saturday

    // Find the NEXT available day (starting from tomorrow)
    for (let i = 1; i <= 7; i++) { // ✅ Start from 1 (tomorrow), not 0
      const checkDayIndex = (currentDayIndex + i) % 7;
      const checkDay = daysOrder[checkDayIndex];

      if (availableDays.includes(checkDay)) {
        // Use getNextDayOccurrence to get correct date
        const date = getNextDayOccurrence(checkDay);

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${checkDay.slice(0, 3)}, ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
      }
    }

    return "Not Available";
  };

  // Get profile image or default
  const getProfileImage = (doctor: DoctorData) => {
    // ✅ Check if profileImage exists and is a base64 string or URL
    if (doctor.profileImage) {
      // If it's a base64 string, return it directly
      if (doctor.profileImage.startsWith('data:image')) {
        return doctor.profileImage;
      }
      // If it's a URL (Google photo or uploaded), return it
      if (doctor.profileImage.startsWith('http')) {
        return doctor.profileImage;
      }
    }

    // ✅ Return null to show initials instead
    return null;
  };

  // ✅ Add this NEW function to get initials
  const getInitials = (fullName: string) => {
    if (!fullName) return "D";
    const nameParts = fullName.trim().split(' ');
    if (nameParts.length >= 2) {
      return nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
    }
    return nameParts[0].charAt(0).toUpperCase();
  };

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Doctor Grid
                <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
                  Total Doctors : {doctors.length}
                </span>
              </h4>
            </div>
            <div className="text-end d-flex">
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter text-gray-5 me-1" />
                  Filters
                </Link>
                <div
                  className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
                  id="filter-dropdown"
                >
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h4 className="mb-0">Filter</h4>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-danger text-decoration-underline"
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                  <form action="#">
                    <div className="filter-body pb-0">
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Doctor</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Doctor}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Designation</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Designation}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Department</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Department}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Date<span className="text-danger">*</span>
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
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-calendar" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Amount</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Amount}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Status</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Status}
                        />
                      </div>
                    </div>
                    <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                      <Link
                        to="#"
                        className="btn btn-light btn-md me-2"
                        id="close-filter"
                      >
                        Close
                      </Link>
                      <button type="submit" className="btn btn-primary btn-md">
                        Filter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                <Link
                  to={all_routes.doctorsList}
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-body" />
                </Link>
                <Link
                  to={all_routes.doctors}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-layout-grid fs-14 text-body" />
                </Link>
              </div>
              <Link
                to={all_routes.addDoctors}
                className="btn btn-primary ms-2 fs-13 btn-md"
              >
                <i className="ti ti-plus me-1" />
                New Doctor
              </Link>
            </div>
          </div>
          {/* End Page Header */}

          {/* Error Message */}
          {error && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {error}
              <button type="button" className="btn-close" onClick={() => setError("")}></button>
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading doctors...</p>
            </div>
          ) : doctors.length === 0 ? (
            <div className="card">
              <div className="card-body text-center py-5">
                <i className="ti ti-users fs-1 text-muted mb-3"></i>
                <h5>No Doctors Found</h5>
                <p className="text-muted">Start by adding your first doctor</p>
                <Link to={all_routes.addDoctors} className="btn btn-primary">
                  <i className="ti ti-plus me-1" />
                  Add Doctor
                </Link>
              </div>
            </div>
          ) : (
            <div className="row">
              {doctors.map((doctor) => (
                <div className="col-xl-4 col-md-6" key={doctor._id}>
                  <div className="card">
                    <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                      <div className="me-3 doctor-profile-img">
                        <Link to={`${all_routes.doctordetails}?id=${doctor._id}`}>
                          {getProfileImage(doctor) ? (
                            <img
                              src={getProfileImage(doctor)!}
                              className="rounded"
                              alt={doctor.fullName}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          ) : (
                            <div
                              className="rounded d-flex align-items-center justify-content-center bg-primary text-white fw-bold"
                              style={{
                                width: '100%',
                                height: '100%',
                                fontSize: '24px',
                                aspectRatio: '1'
                              }}
                            >
                              {getInitials(doctor.fullName)}
                            </div>
                          )}
                        </Link>
                      </div>
                      <div className="flex-fill">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <h6 className="mb-0 fw-semibold">
                            <Link to={`${all_routes.doctordetails}?id=${doctor._id}`}>
                              Dr. {doctor.fullName}
                            </Link>
                          </h6>
                          <div className="action-item">
                            <Link to="#" data-bs-toggle="dropdown">
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link
                                  to={`${all_routes.editDoctors}?id=${doctor._id}`}
                                  className="dropdown-item d-flex align-items-center"
                                >
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                  onClick={() => setDeleteId(doctor._id)}
                                >
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <span className="d-block mb-2 fs-13">
                          {doctor.designation || doctor.department}
                        </span>
                        <p className="mb-2 fs-13">
                          Available : {getNextAvailableDay(doctor.schedules)}
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <h6 className="text-primary fs-14 mb-0">
                            <span className="text-muted fs-13 fw-normal">
                              Starts From :
                            </span>
                            ${doctor.consultationCharge || 0}
                          </h6>
                          <Link
                            to={all_routes.appointmentCalendar}
                            className="avatar avatar-xs border text-muted fs-14"
                          >
                            <i className="ti ti-calendar-cog" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
      <Modals onDelete={handleDelete} />
    </>
  );
};

export default Doctors;