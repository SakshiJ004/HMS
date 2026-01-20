// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import { DatePicker } from "antd";
// import {
//   Blood_Group,
//   City,
//   Country,
//   Gender,
//   StaffsDesignation,
//   StaffsRole,
//   State,
// } from "../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";

// const StaffsModal = () => {
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };

//   return (
//     <>
//       {/* Start Add Modal */}
//       <div id="view_staff" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="fw-bold modal-title">Staff Details</h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="ti ti-x" />
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="card bg-light">
//                 <div className="card-body">
//                   <div className="d-flex align-items-center">
//                     <div className="me-2">
//                       <ImageWithBasePath
//                         src="assets/img/users/user-08.jpg"
//                         alt="img"
//                         className="img-fluid avatar avatar-xxl rounded"
//                       />
//                     </div>
//                     <div>
//                       <span className="text-primary mb-1">#STF020</span>
//                       <div className="d-flex align-items-center mb-1">
//                         <h5 className="fw-bold mb-0 me-2">James Allaire</h5>
//                         <span className="badge badge-soft-success border border-success fw-medium fs-13">
//                           Available
//                         </span>
//                       </div>
//                       <p>Front Office Executive</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* end card */}
//               <ul className="nav nav-tabs nav-bordered mb-3">
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     to="#"
//                     data-bs-toggle="tab"
//                     data-bs-target="#tab1"
//                   >
//                     Basic Info
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="#"
//                     data-bs-toggle="tab"
//                     data-bs-target="#tab2"
//                   >
//                     Salary Info
//                   </Link>
//                 </li>
//               </ul>
//               <div className="tab-content">
//                 <div
//                   className="tab-pane active"
//                   id="tab1"
//                   role="tabpanel"
//                   tabIndex={0}
//                 >
//                   {/* start row */}
//                   <div className="row row-gap-2">
//                     <div className="col-md-4">
//                       <p className="text-dark fs-13 fw-medium mb-0">Gender</p>
//                       <p className="fs-13">Male</p>
//                     </div>
//                     {/* end col */}
//                     <div className="col-md-4">
//                       <p className="text-dark fs-13 fw-medium mb-0">
//                         Phone Number
//                       </p>
//                       <p className="fs-13">+1 54546 45648</p>
//                     </div>
//                     {/* end col */}
//                     <div className="col-md-4">
//                       <p className="text-dark fs-13 fw-medium mb-0">Email</p>
//                       <p className="fs-13">james@example.com</p>
//                     </div>
//                     {/* end col */}
//                     <div className="col-md-4">
//                       <p className="text-dark fs-13 fw-medium mb-0">
//                         Date of Joining
//                       </p>
//                       <p className="fs-13">12 Dec 2024</p>
//                     </div>
//                     {/* end col */}
//                     <div className="col-md-4">
//                       <p className="text-dark fs-13 fw-medium mb-0">Email</p>
//                       <p className="fs-13">james@example.com</p>
//                     </div>
//                     {/* end col */}
//                     <div className="col-md-4">
//                       <p className="text-dark fs-13 fw-medium mb-0">
//                         Staff Type
//                       </p>
//                       <p className="fs-13">Permanent</p>
//                     </div>
//                     {/* end col */}
//                     <div className="col-md-12">
//                       <p className="text-dark fs-13 fw-medium mb-0">Addresss</p>
//                       <p className="fs-13">
//                         10 Elizabethtown Plaza, Downers Grove, Elizabeth UK07202
//                       </p>
//                     </div>
//                     {/* end col */}
//                   </div>
//                   {/* end row */}
//                 </div>
//                 <div
//                   className="tab-pane"
//                   id="tab2"
//                   role="tabpanel"
//                   tabIndex={0}
//                 >
//                   {/* Table List */}
//                   <div className="table-responsive border bg-white">
//                     <table className="table table-nowrap">
//                       <thead>
//                         <tr>
//                           <th>Credit Date</th>
//                           <th>Amount</th>
//                           <th>Salary for</th>
//                           <th />
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td>13 Jul 2025</td>
//                           <td>$4800</td>
//                           <td>Jun 2025</td>
//                           <td>
//                             <div className="action-item">
//                               <Link to="#" data-bs-toggle="dropdown">
//                                 <i className="ti ti-dots-vertical" />
//                               </Link>
//                               <ul className="dropdown-menu p-2">
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#edit"
//                                   >
//                                     Edit
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#delete"
//                                   >
//                                     Delete
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>12 Jun 2025</td>
//                           <td>$4800</td>
//                           <td>May 2025</td>
//                           <td>
//                             <div className="action-item">
//                               <Link to="#" data-bs-toggle="dropdown">
//                                 <i className="ti ti-dots-vertical" />
//                               </Link>
//                               <ul className="dropdown-menu p-2">
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#edit"
//                                   >
//                                     Edit
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#delete"
//                                   >
//                                     Delete
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>15 May 2025</td>
//                           <td>$4800</td>
//                           <td>Apr 2025</td>
//                           <td>
//                             <div className="action-item">
//                               <Link to="#" data-bs-toggle="dropdown">
//                                 <i className="ti ti-dots-vertical" />
//                               </Link>
//                               <ul className="dropdown-menu p-2">
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#edit"
//                                   >
//                                     Edit
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#delete"
//                                   >
//                                     Delete
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>14 Apr 2025</td>
//                           <td>$4800</td>
//                           <td>Mar 2025</td>
//                           <td>
//                             <div className="action-item">
//                               <Link to="#" data-bs-toggle="dropdown">
//                                 <i className="ti ti-dots-vertical" />
//                               </Link>
//                               <ul className="dropdown-menu p-2">
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#edit"
//                                   >
//                                     Edit
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#delete"
//                                   >
//                                     Delete
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>13 Mar 2025</td>
//                           <td>$4800</td>
//                           <td>Feb 2025</td>
//                           <td>
//                             <div className="action-item">
//                               <Link to="#" data-bs-toggle="dropdown">
//                                 <i className="ti ti-dots-vertical" />
//                               </Link>
//                               <ul className="dropdown-menu p-2">
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#edit"
//                                   >
//                                     Edit
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#delete"
//                                   >
//                                     Delete
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>14 Feb 2025</td>
//                           <td>$4800</td>
//                           <td>Jan 2025</td>
//                           <td>
//                             <div className="action-item">
//                               <Link to="#" data-bs-toggle="dropdown">
//                                 <i className="ti ti-dots-vertical" />
//                               </Link>
//                               <ul className="dropdown-menu p-2">
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#edit"
//                                   >
//                                     Edit
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#delete"
//                                   >
//                                     Delete
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>12 Jan 2025</td>
//                           <td>$4800</td>
//                           <td>Dec 2024</td>
//                           <td>
//                             <div className="action-item">
//                               <Link to="#" data-bs-toggle="dropdown">
//                                 <i className="ti ti-dots-vertical" />
//                               </Link>
//                               <ul className="dropdown-menu p-2">
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#edit"
//                                   >
//                                     Edit
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     to="#"
//                                     className="dropdown-item d-flex align-items-center"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#delete"
//                                   >
//                                     Delete
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                   {/* /Table List */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Add Modal */}
//       {/* Start Add Modal */}
//       <div id="add_staff" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="fw-bold modal-title">New Staff</h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="ti ti-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <h6 className="fw-bold mb-3">Staff Information</h6>
//                 <div className="mb-3 d-flex align-items-center">
//                   <label className="form-label">Profile Image</label>
//                   <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
//                     <i className="ti ti-user-plus fs-16" />
//                     <input
//                       type="file"
//                       className="form-control image-sign"
//                       multiple
//                     />
//                     <div className="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1">
//                       <Link
//                         to="#"
//                         className="text-white d-flex align-items-center justify-content-center"
//                       >
//                         <i className="ti ti-photo fs-14" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Name <span className="text-danger">*</span>
//                   </label>
//                   <input type="text" className="form-control" />
//                 </div>
//                 {/* start row */}
//                 <div className="row mb-3 border-bottom">
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Role<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={StaffsRole}
//                         className="select"
//                         defaultValue={StaffsRole[0]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Designation<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={StaffsDesignation}
//                         className="select"
//                         defaultValue={StaffsDesignation[0]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//                 <h6 className="fw-bold mb-3">Contact Information</h6>
//                 {/* start row */}
//                 <div className="row row-gap-2">
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Phone Number<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Email<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">
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
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Gender<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Gender}
//                         className="select"
//                         defaultValue={Gender[0]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-12">
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Blood Group<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Blood_Group}
//                         className="select"
//                         defaultValue={Blood_Group[0]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Address 1</label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Address 2</label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Country</label>
//                       <CommonSelect
//                         options={Country}
//                         className="select"
//                         defaultValue={Country[0]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">State</label>
//                       <CommonSelect
//                         options={State}
//                         className="select"
//                         defaultValue={State[0]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">City</label>
//                       <CommonSelect
//                         options={City}
//                         className="select"
//                         defaultValue={City[0]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Pincode</label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//               </div>
//               <div className="modal-footer d-flex align-items-center gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-white border"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Add Staff
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Modal */}
//       {/* Start Edit Modal */}
//       <div id="edit_staff" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="fw-bold modal-title">Edit Staff</h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="ti ti-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <h6 className="fw-bold mb-3">Staff Information</h6>
//                 <div className="mb-3 d-flex align-items-center">
//                   <label className="form-label me-3">Profile Image</label>
//                   <div className="profile-container">
//                     <ImageWithBasePath
//                       src="assets/img/users/user-08.jpg"
//                       alt="Profile"
//                     />
//                     <div className="overlay-btn">
//                       <Link to="#" className="text-white" id="uploadTrigger">
//                         <i className="ti ti-photo fs-10" />
//                       </Link>
//                     </div>
//                     <input
//                       type="file"
//                       id="profileUpload"
//                       style={{ display: "none" }}
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Name <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue="James Adair"
//                   />
//                 </div>
//                 {/* start row */}
//                 <div className="row mb-3 border-bottom">
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Role<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={StaffsRole}
//                         className="select"
//                         defaultValue={StaffsRole[1]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Designation<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={StaffsDesignation}
//                         className="select"
//                         defaultValue={StaffsDesignation[1]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//                 <h6 className="fw-bold mb-3">Contact Information</h6>
//                 {/* start row */}
//                 <div className="row row-gap-2">
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Phone Number<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue="+1 5258 25874"
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Email<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue="james@gmail.com"
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">
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
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Gender<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Gender}
//                         className="select"
//                         defaultValue={Gender[1]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-12">
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Blood Group<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Blood_Group}
//                         className="select"
//                         defaultValue={Blood_Group[1]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Address 1</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue="3-174,"
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Address 2</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue="3-/174,"
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Country</label>
//                       <CommonSelect
//                         options={Country}
//                         className="select"
//                         defaultValue={Country[1]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">State</label>
//                       <CommonSelect
//                         options={State}
//                         className="select"
//                         defaultValue={State[1]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">City</label>
//                       <CommonSelect
//                         options={City}
//                         className="select"
//                         defaultValue={City[1]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Pincode</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue="IN 46625"
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//               </div>
//               <div className="modal-footer d-flex align-items-center gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-white border"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Edit Modal */}
//       {/* Start Delete Modal  */}
//       <div className="modal fade" id="delete_staff">
//         <div className="modal-dialog modal-dialog-centered modal-sm">
//           <div className="modal-content">
//             <div className="modal-body text-center position-relative z-1">
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-01.png"
//                 alt=""
//                 className="img-fluid position-absolute top-0 start-0 z-n1"
//               />
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-02.png"
//                 alt=""
//                 className="img-fluid position-absolute bottom-0 end-0 z-n1"
//               />
//               <div className="mb-3">
//                 <span className="avatar avatar-lg bg-danger text-white">
//                   <i className="ti ti-trash fs-24" />
//                 </span>
//               </div>
//               <h5 className="fw-bold mb-1">Delete Confirmation</h5>
//               <p className="mb-3">Are you sure want to delete?</p>
//               <div className="d-flex justify-content-center">
//                 <Link
//                   to="#"
//                   className="btn btn-light position-relative z-1 me-3"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </Link>
//                 <Link
//                   to={all_routes.staffs}
//                   className="btn btn-danger position-relative z-1"
//                 >
//                   Yes, Delete
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Delete Modal  */}
//     </>
//   );
// };

// export default StaffsModal;

import { useState, useEffect } from "react";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { Link } from "react-router";
import { DatePicker } from "antd";
import {
  Blood_Group,
  City,
  Country,
  Gender,
  StaffsDesignation,
  StaffsRole,
  State,
} from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { createStaff, updateStaff } from "../../../../../api/staffService";
import dayjs from "dayjs";

// Bootstrap type declaration
interface BootstrapModalInstance {
  hide: () => void;
  show: () => void;
  dispose: () => void;
}

interface BootstrapStatic {
  Modal: {
    getInstance: (element: HTMLElement) => BootstrapModalInstance | null;
    getOrCreateInstance: (element: HTMLElement) => BootstrapModalInstance;
  };
}

declare const bootstrap: BootstrapStatic;

interface StaffModalProps {
  showAddModal: boolean
  showEditModal: boolean;
  showViewModal: boolean;
  showDeleteModal: boolean;
  currentStaff: any;
  onCloseAdd: () => void;
  onCloseEdit: () => void;
  onCloseDelete: () => void;
  onCloseView: () => void;
  onAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const StaffsModal = ({
  showAddModal,
  showEditModal,
  showViewModal,
  showDeleteModal,
  currentStaff,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onCloseView,
  onAdd,
  onEdit,
  onDelete,
}: StaffModalProps) => {
  // Form states for Add Modal
  const [addFormData, setAddFormData] = useState({
    name: "",
    designation: "",
    role: "",
    phone: "",
    email: "",
    dob: null as any,
    dateOfJoining: null as any,
    gender: "",
    bloodGroup: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    image: "",
    staffType: "Permanent",
  });

  // Form states for Edit Modal
  const [editFormData, setEditFormData] = useState({
    name: "",
    designation: "",
    role: "",
    phone: "",
    email: "",
    dob: null as any,
    dateOfJoining: null as any,
    gender: "",
    bloodGroup: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    image: "",
    staffType: "Permanent",
    status: "Available",
  });

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [addFormErrors, setAddFormErrors] = useState<{ [key: string]: string }>({});
  const [editFormErrors, setEditFormErrors] = useState<{ [key: string]: string }>({});

  // Populate edit form when currentStaff changes
  useEffect(() => {
    if (currentStaff && showEditModal) {
      setEditFormErrors({});
      setEditFormData({
        name: currentStaff.Staff || "",
        designation: currentStaff.Designation || "",
        role: currentStaff.Role || "",
        phone: currentStaff.Phone || "",
        email: currentStaff.Email || "",
        dob: currentStaff.DOB ? dayjs(currentStaff.DOB, "DD-MM-YYYY") : null,
        dateOfJoining: currentStaff.DateOfJoining
          ? dayjs(currentStaff.DateOfJoining, "DD MMM YYYY")
          : null,
        gender: currentStaff.Gender || "",
        bloodGroup: currentStaff.BloodGroup || "",
        address1: currentStaff.Address1 || "",
        address2: currentStaff.Address2 || "",
        country: currentStaff.Country || "",
        state: currentStaff.State || "",
        city: currentStaff.City || "",
        pincode: currentStaff.Pincode || "",
        image: currentStaff.Image || "",
        staffType: currentStaff.StaffType || "Permanent",
        status: currentStaff.Status || "Available",
      });
    }
  }, [currentStaff, showEditModal]);
  
  // Clear errors when modals close
  useEffect(() => {
    if (!showAddModal) {
      setAddFormErrors({});
    }
  }, [showAddModal]);

  useEffect(() => {
    if (!showEditModal) {
      setEditFormErrors({});
    }
  }, [showEditModal]);

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // Validation function
  const validateAddForm = () => {
    const errors: { [key: string]: string } = {};

    if (!addFormData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!addFormData.designation) {
      errors.designation = 'Designation is required';
    }

    if (!addFormData.role) {
      errors.role = 'Role is required';
    }

    if (!addFormData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!addFormData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addFormData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!addFormData.dob) {
      errors.dob = 'Date of Birth is required';
    }

    if (!addFormData.dateOfJoining) {
      errors.dateOfJoining = 'Date of Joining is required';
    }

    if (!addFormData.gender) {
      errors.gender = 'Gender is required';
    }

    setAddFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Validation function for Edit Form
  const validateEditForm = () => {
    const errors: { [key: string]: string } = {};

    if (!editFormData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!editFormData.designation) {
      errors.designation = 'Designation is required';
    }

    if (!editFormData.role) {
      errors.role = 'Role is required';
    }

    if (!editFormData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!editFormData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editFormData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!editFormData.dob) {
      errors.dob = 'Date of Birth is required';
    }

    if (!editFormData.dateOfJoining) {
      errors.dateOfJoining = 'Date of Joining is required';
    }

    if (!editFormData.gender) {
      errors.gender = 'Gender is required';
    }

    setEditFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle Add Staff Submit
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setAddFormErrors({});

    // Validate form
    if (!validateAddForm()) {
      return; // Stop if validation fails
    }

    setLoading(true);

    try {
      const payload = {
        name: addFormData.name,
        designation: addFormData.designation,
        role: addFormData.role,
        phone: addFormData.phone,
        email: addFormData.email,
        dob: addFormData.dob ? addFormData.dob.format("YYYY-MM-DD") : "",
        dateOfJoining: addFormData.dateOfJoining
          ? addFormData.dateOfJoining.format("YYYY-MM-DD")
          : "",
        gender: addFormData.gender,
        bloodGroup: addFormData.bloodGroup,
        address1: addFormData.address1,
        address2: addFormData.address2,
        country: addFormData.country,
        state: addFormData.state,
        city: addFormData.city,
        pincode: addFormData.pincode,
        image: addFormData.image,
        staffType: addFormData.staffType,
      };

      const response = await createStaff(payload);

      if (response.success) {
        // Reset form
        setAddFormData({
          name: "",
          designation: "",
          role: "",
          phone: "",
          email: "",
          dob: null,
          dateOfJoining: null,
          gender: "",
          bloodGroup: "",
          address1: "",
          address2: "",
          country: "",
          state: "",
          city: "",
          pincode: "",
          image: "",
          staffType: "Permanent",
        });

        onAdd(); // Refresh the staff list
        onCloseAdd(); // Close modal - This will trigger parent to hide modal
      } else {
        // Show backend error in form
        setAddFormErrors({ submit: response.message || "Failed to add staff" });
      }
    } catch (error) {
      console.error("Add staff error:", error);
      setAddFormErrors({ submit: "Error adding staff. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  // Handle Edit Staff Submit
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentStaff?._id) return;

    // Clear previous errors
    setEditFormErrors({});

    // Validate form
    if (!validateEditForm()) {
      return; // Stop if validation fails
    }

    setLoading(true);

    try {
      const payload = {
        name: editFormData.name,
        designation: editFormData.designation,
        role: editFormData.role,
        phone: editFormData.phone,
        email: editFormData.email,
        dob: editFormData.dob ? editFormData.dob.format("YYYY-MM-DD") : "",
        dateOfJoining: editFormData.dateOfJoining
          ? editFormData.dateOfJoining.format("YYYY-MM-DD")
          : "",
        gender: editFormData.gender,
        bloodGroup: editFormData.bloodGroup,
        address1: editFormData.address1,
        address2: editFormData.address2,
        country: editFormData.country,
        state: editFormData.state,
        city: editFormData.city,
        pincode: editFormData.pincode,
        image: editFormData.image,
        staffType: editFormData.staffType,
        status: editFormData.status,
      };

      const response = await updateStaff(currentStaff._id, payload);

      if (response.success) {
        onEdit(); // Refresh the staff list
        onCloseEdit(); // Close modal
      } else {
        // Show backend error in form
        setEditFormErrors({ submit: response.message || "Failed to update staff" });
      }
    } catch (error) {
      console.error("Edit staff error:", error);
      setEditFormErrors({ submit: "Error updating staff. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* View Staff Modal */}
      <div
        id="view_staff"
        className={`modal fade ${showViewModal ? "show" : ""}`}
        style={{ display: showViewModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="fw-bold modal-title">Staff Details</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                onClick={onCloseView}
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="card bg-light">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <ImageWithBasePath
                        src={`assets/img/users/${currentStaff?.Image || "user-01.jpg"}`}
                        alt="img"
                        className="img-fluid avatar avatar-xxl rounded"
                      />
                    </div>
                    <div>
                      <span className="text-primary mb-1">
                        #{currentStaff?.staffId || "N/A"}
                      </span>
                      <div className="d-flex align-items-center mb-1">
                        <h5 className="fw-bold mb-0 me-2">
                          {currentStaff?.Staff || "N/A"}
                        </h5>
                        <span
                          className={`badge ${currentStaff?.Status === "Available"
                            ? "badge-soft-success border border-success"
                            : "badge-soft-danger border border-danger"
                            } fw-medium fs-13`}
                        >
                          {currentStaff?.Status || "N/A"}
                        </span>
                      </div>
                      <p>{currentStaff?.Designation || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="nav nav-tabs nav-bordered mb-3">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab1");
                    }}
                  >
                    Basic Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab2");
                    }}
                  >
                    Salary Info
                  </Link>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}
                  id="tab1"
                >
                  <div className="row row-gap-2">
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">Gender</p>
                      <p className="fs-13">{currentStaff?.Gender || "N/A"}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">
                        Phone Number
                      </p>
                      <p className="fs-13">{currentStaff?.Phone || "N/A"}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">Email</p>
                      <p className="fs-13">{currentStaff?.Email || "N/A"}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">
                        Date of Joining
                      </p>
                      <p className="fs-13">
                        {currentStaff?.DateOfJoining || "N/A"}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">DOB</p>
                      <p className="fs-13">{currentStaff?.DOB || "N/A"}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">
                        Staff Type
                      </p>
                      <p className="fs-13">{currentStaff?.StaffType || "N/A"}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">
                        Blood Group
                      </p>
                      <p className="fs-13">{currentStaff?.BloodGroup || "N/A"}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">Role</p>
                      <p className="fs-13">{currentStaff?.Role || "N/A"}</p>
                    </div>
                    <div className="col-md-12">
                      <p className="text-dark fs-13 fw-medium mb-0">Address</p>
                      <p className="fs-13">
                        {[
                          currentStaff?.Address1,
                          currentStaff?.Address2,
                          currentStaff?.City,
                          currentStaff?.State,
                          currentStaff?.Country,
                          currentStaff?.Pincode,
                        ]
                          .filter(Boolean)
                          .join(", ") || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}
                  id="tab2"
                >
                  <div className="table-responsive border bg-white">
                    <table className="table table-nowrap">
                      <thead>
                        <tr>
                          <th>Credit Date</th>
                          <th>Amount</th>
                          <th>Salary for</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={3} className="text-center text-muted">
                            No salary information available
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Staff Modal */}
      <div id="add_staff" className={`modal fade ${showAddModal ? "show" : ""}`} style={{ display: showAddModal ? "block" : "none" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="fw-bold modal-title">New Staff</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body">
                <h6 className="fw-bold mb-3">Staff Information</h6>

                <div className="mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${addFormErrors.name ? 'is-invalid' : ''}`}
                    value={addFormData.name}
                    onChange={(e) => {
                      setAddFormData({ ...addFormData, name: e.target.value });
                      // Clear error when user starts typing
                      if (addFormErrors.name) {
                        setAddFormErrors({ ...addFormErrors, name: '' });
                      }
                    }}
                  />
                  {addFormErrors.name && (
                    <div className="invalid-feedback d-block">
                      {addFormErrors.name}
                    </div>
                  )}
                </div>

                <div className="row mb-3 border-bottom">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Role<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={StaffsRole}
                        className={`select ${addFormErrors.role ? 'is-invalid' : ''}`}
                        value={StaffsRole.find((r) => r.value === addFormData.role)}
                        onChange={(option: any) => {
                          setAddFormData({ ...addFormData, role: option.value });
                          if (addFormErrors.role) {
                            setAddFormErrors({ ...addFormErrors, role: '' });
                          }
                        }}
                      />
                      {addFormErrors.role && (
                        <div className="invalid-feedback d-block">
                          {addFormErrors.role}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Designation<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={StaffsDesignation}
                        className="select"
                        value={StaffsDesignation.find(
                          (d) => d.value === addFormData.designation
                        )}
                        onChange={(option: any) =>
                          setAddFormData({
                            ...addFormData,
                            designation: option.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <h6 className="fw-bold mb-3">Contact Information</h6>

                <div className="row row-gap-2">
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Phone Number<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={addFormData.phone}
                        onChange={(e) =>
                          setAddFormData({
                            ...addFormData,
                            phone: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Email<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${addFormErrors.email ? 'is-invalid' : ''}`}
                        value={addFormData.email}
                        onChange={(e) => {
                          setAddFormData({ ...addFormData, email: e.target.value });
                          if (addFormErrors.email) {
                            setAddFormErrors({ ...addFormErrors, email: '' });
                          }
                        }}
                      />
                      {addFormErrors.email && (
                        <div className="invalid-feedback d-block">
                          {addFormErrors.email}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        DOB<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          value={addFormData.dob}
                          onChange={(date) =>
                            setAddFormData({ ...addFormData, dob: date })
                          }
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Date of Joining<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          value={addFormData.dateOfJoining}
                          onChange={(date) =>
                            setAddFormData({
                              ...addFormData,
                              dateOfJoining: date,
                            })
                          }
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Gender<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Gender}
                        className="select"
                        value={Gender.find(
                          (g) => g.value === addFormData.gender
                        )}
                        onChange={(option: any) =>
                          setAddFormData({
                            ...addFormData,
                            gender: option.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Blood Group</label>
                      <CommonSelect
                        options={Blood_Group}
                        className="select"
                        value={Blood_Group.find(
                          (b) => b.value === addFormData.bloodGroup
                        )}
                        onChange={(option: any) =>
                          setAddFormData({
                            ...addFormData,
                            bloodGroup: option.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Address 1</label>
                      <input
                        type="text"
                        className="form-control"
                        value={addFormData.address1}
                        onChange={(e) =>
                          setAddFormData({
                            ...addFormData,
                            address1: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Address 2</label>
                      <input
                        type="text"
                        className="form-control"
                        value={addFormData.address2}
                        onChange={(e) =>
                          setAddFormData({
                            ...addFormData,
                            address2: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Country</label>
                      <CommonSelect
                        options={Country}
                        className="select"
                        value={Country.find(
                          (c) => c.value === addFormData.country
                        )}
                        onChange={(option: any) =>
                          setAddFormData({
                            ...addFormData,
                            country: option.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">State</label>
                      <CommonSelect
                        options={State}
                        className="select"
                        value={State.find((s) => s.value === addFormData.state)}
                        onChange={(option: any) =>
                          setAddFormData({ ...addFormData, state: option.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">City</label>
                      <CommonSelect
                        options={City}
                        className="select"
                        value={City.find((c) => c.value === addFormData.city)}
                        onChange={(option: any) =>
                          setAddFormData({ ...addFormData, city: option.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        value={addFormData.pincode}
                        onChange={(e) =>
                          setAddFormData({
                            ...addFormData,
                            pincode: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              {addFormErrors.submit && (
                <div className="alert alert-danger mx-3 mb-0" role="alert">
                  {addFormErrors.submit}
                </div>
              )}
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Edit Staff Modal */}
      <div id="edit_staff" className={`modal fade ${showEditModal ? "show" : ""}`}
        style={{ display: showEditModal ? "block" : "none" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="fw-bold modal-title">Edit Staff</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <h6 className="fw-bold mb-3">Staff Information</h6>

                <div className="mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${editFormErrors.name ? 'is-invalid' : ''}`}
                    value={editFormData.name}
                    onChange={(e) => {
                      setEditFormData({ ...editFormData, name: e.target.value });
                      if (editFormErrors.name) {
                        setEditFormErrors({ ...editFormErrors, name: '' });
                      }
                    }}
                  />
                  {editFormErrors.name && (
                    <div className="invalid-feedback d-block">
                      {editFormErrors.name}
                    </div>
                  )}
                </div>

                <div className="row mb-3 border-bottom">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Role<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={StaffsRole}
                        className="select"
                        value={StaffsRole.find((r) => r.value === editFormData.role)}
                        onChange={(option: any) => {
                          setEditFormData({ ...editFormData, role: option.value });
                          if (editFormErrors.role) {
                            setEditFormErrors({ ...editFormErrors, role: '' });
                          }
                        }}
                      />
                      {editFormErrors.role && (
                        <div className="invalid-feedback d-block">
                          {editFormErrors.role}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Designation<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={StaffsDesignation}
                        className="select"
                        value={StaffsDesignation.find(
                          (d) => d.value === editFormData.designation
                        )}
                        onChange={(option: any) => {
                          setEditFormData({ ...editFormData, designation: option.value });
                          if (editFormErrors.designation) {
                            setEditFormErrors({ ...editFormErrors, designation: '' });
                          }
                        }}
                      />
                      {editFormErrors.designation && (
                        <div className="invalid-feedback d-block">
                          {editFormErrors.designation}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <h6 className="fw-bold mb-3">Contact Information</h6>

                <div className="row row-gap-2">
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Phone Number<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${editFormErrors.phone ? 'is-invalid' : ''}`}
                        value={editFormData.phone}
                        onChange={(e) => {
                          setEditFormData({ ...editFormData, phone: e.target.value });
                          if (editFormErrors.phone) {
                            setEditFormErrors({ ...editFormErrors, phone: '' });
                          }
                        }}
                      />
                      {editFormErrors.phone && (
                        <div className="invalid-feedback d-block">
                          {editFormErrors.phone}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Email<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${editFormErrors.email ? 'is-invalid' : ''}`}
                        value={editFormData.email}
                        onChange={(e) => {
                          setEditFormData({ ...editFormData, email: e.target.value });
                          if (editFormErrors.email) {
                            setEditFormErrors({ ...editFormErrors, email: '' });
                          }
                        }}
                      />
                      {editFormErrors.email && (
                        <div className="invalid-feedback d-block">
                          {editFormErrors.email}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        DOB<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className={`form-control datetimepicker ${editFormErrors.dob ? 'is-invalid' : ''}`}
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          value={editFormData.dob}
                          onChange={(date) => {
                            setEditFormData({ ...editFormData, dob: date });
                            if (editFormErrors.dob) {
                              setEditFormErrors({ ...editFormErrors, dob: '' });
                            }
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                      {editFormErrors.dob && (
                        <div className="invalid-feedback d-block">
                          {editFormErrors.dob}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Date of Joining<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className={`form-control datetimepicker ${editFormErrors.dateOfJoining ? 'is-invalid' : ''}`}
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          value={editFormData.dateOfJoining}
                          onChange={(date) => {
                            setEditFormData({ ...editFormData, dateOfJoining: date });
                            if (editFormErrors.dateOfJoining) {
                              setEditFormErrors({ ...editFormErrors, dateOfJoining: '' });
                            }
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                      {editFormErrors.dateOfJoining && (
                        <div className="invalid-feedback d-block">
                          {editFormErrors.dateOfJoining}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Gender<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Gender}
                        className="select"
                        value={Gender.find((g) => g.value === editFormData.gender)}
                        onChange={(option: any) => {
                          setEditFormData({ ...editFormData, gender: option.value });
                          if (editFormErrors.gender) {
                            setEditFormErrors({ ...editFormErrors, gender: '' });
                          }
                        }}
                      />
                      {editFormErrors.gender && (
                        <div className="invalid-feedback d-block">
                          {editFormErrors.gender}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Blood Group</label>
                      <CommonSelect
                        options={Blood_Group}
                        className="select"
                        value={Blood_Group.find((b) => b.value === editFormData.bloodGroup)}
                        onChange={(option: any) =>
                          setEditFormData({ ...editFormData, bloodGroup: option.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Address 1</label>
                      <input
                        type="text"
                        className="form-control"
                        value={editFormData.address1}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, address1: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Address 2</label>
                      <input
                        type="text"
                        className="form-control"
                        value={editFormData.address2}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, address2: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Country</label>
                      <CommonSelect
                        options={Country}
                        className="select"
                        value={Country.find((c) => c.value === editFormData.country)}
                        onChange={(option: any) =>
                          setEditFormData({ ...editFormData, country: option.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">State</label>
                      <CommonSelect
                        options={State}
                        className="select"
                        value={State.find((s) => s.value === editFormData.state)}
                        onChange={(option: any) =>
                          setEditFormData({ ...editFormData, state: option.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">City</label>
                      <CommonSelect
                        options={City}
                        className="select"
                        value={City.find((c) => c.value === editFormData.city)}
                        onChange={(option: any) =>
                          setEditFormData({ ...editFormData, city: option.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        value={editFormData.pincode}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, pincode: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {editFormErrors.submit && (
                <div className="alert alert-danger mx-3 mb-0" role="alert">
                  {editFormErrors.submit}
                </div>
              )}

              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Delete Staff Modal */}
      <div className={`modal fade ${showDeleteModal ? "show" : ""}`} style={{ display: showDeleteModal ? "block" : "none" }} id="delete_staff">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative z-1">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0 z-n1"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0 z-n1"
              />
              <div className="mb-3">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1">Delete Confirmation</h5>
              <p className="mb-3">
                Are you sure you want to delete {currentStaff?.Staff}?
              </p>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                  onClick={onCloseDelete}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger position-relative z-1"
                  onClick={() => {
                    onDelete();
                    const modalElement = document.getElementById("delete_staff");
                    if (modalElement) {
                      try {
                        const modal = bootstrap.Modal.getInstance(modalElement);
                        if (modal) {
                          modal.hide();
                        }
                      } catch (error) {
                        console.error("Error closing modal:", error);
                      }
                    }
                  }}
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

export default StaffsModal;
