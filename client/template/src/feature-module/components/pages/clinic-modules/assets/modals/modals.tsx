// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import { DatePicker } from "antd";
// import {
//   Condition,
//   StatusApproved,
//   Supplier,
// } from "../../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../../core/common/common-select/commonSelect";

// const Modals = () => {
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };
//   return (
//     <>
//       {/* Start Add Asset */}
//       <div className="modal fade" id="add_asset">
//         <div className="modal-dialog modal-dialog-centered modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title text-dark fw-bold">Add Asset</h5>
//               <button
//                 type="button"
//                 className="btn-close custom-btn-close opacity-100"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="ti ti-x bg-white fs-16 text-dark" />
//               </button>
//             </div>
//             <div className="modal-body">
//               {/* start row */}
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Asset Name <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Asset User <span className="text-danger">*</span>
//                     </label>
//                     <div className="dropdown">
//                       <Link
//                         to="#"
//                         className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
//                         data-bs-toggle="dropdown"
//                         data-bs-auto-close="outside"
//                         aria-expanded="true"
//                       >
//                         Select
//                       </Link>
//                       <div className="dropdown-menu shadow-lg w-100 dropdown-info">
//                         <div className="mb-3">
//                           <div className="input-icon-start position-relative">
//                             <span className="input-icon-addon fs-12">
//                               <i className="ti ti-search" />
//                             </span>
//                             <input
//                               type="text"
//                               className="form-control form-control-sm"
//                               placeholder="Select"
//                             />
//                           </div>
//                         </div>
//                         <ul className="mb-3 list-style-none">
//                           <li className="list-none">
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/users/user-02.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               Emily Clark
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-01.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               John Carter
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-16.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               Sophia White
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-15.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               Michael Johnson
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-14.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               Olivia Harris
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-01.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               David Anderson
//                             </label>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Purchase Date <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-icon-end position-relative">
//                       <DatePicker
//                         className="form-control datetimepicker"
//                         format={{
//                           format: "DD-MM-YYYY",
//                           type: "mask",
//                         }}
//                         getPopupContainer={getModalContainer}
//                         placeholder="DD-MM-YYYY"
//                         suffixIcon={null}
//                       />
//                       <span className="input-icon-addon">
//                         <i className="ti ti-calendar" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Purchase From <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Manufacturer&nbsp;<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Model&nbsp;<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Serial Number&nbsp;<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Supplier<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group custom-select">
//                       <CommonSelect
//                         options={Supplier}
//                         className="select"
//                         defaultValue={Supplier[0]}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Condition&nbsp; <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group custom-select">
//                       <CommonSelect
//                         options={Condition}
//                         className="select"
//                         defaultValue={Condition[0]}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       warranty <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                     Value <span className="text-danger">* </span>
//                   </label>
//                   <div className="input-group">
//                     <span className="input-group-text bg-transparent text-dark fs-14">
//                       $
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder={"0"}
//                     />
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Status <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group custom-select">
//                       <CommonSelect
//                         options={StatusApproved}
//                         className="select"
//                         defaultValue={StatusApproved[0]}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <div>
//                       <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                         Description <span className="text-danger">*</span>
//                       </label>
//                       <textarea
//                         rows={4}
//                         className="form-control rounded"
//                         placeholder="Description "
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//               </div>
//               {/* end row */}
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-light btn-sm me-2 fs-13 fw-medium"
//                 data-bs-dismiss="modal"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-sm fs-13 fw-medium"
//               >
//                 Add Asset
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Add Asset  */}
//       {/* Start Edit Asset */}
//       <div className="modal fade" id="edit_asset">
//         <div className="modal-dialog modal-dialog-centered modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title text-dark fw-bold">Edit Asset</h5>
//               <button
//                 type="button"
//                 className="btn-close custom-btn-close opacity-100"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="ti ti-x bg-white fs-16 text-dark" />
//               </button>
//             </div>
//             <div className="modal-body">
//               {/* start row */}
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Asset Name <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue="VitalScan Monitor"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Asset User <span className="text-danger">*</span>
//                     </label>
//                     <div className="dropdown">
//                       <Link
//                         to="#"
//                         className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
//                         data-bs-toggle="dropdown"
//                         data-bs-auto-close="outside"
//                         aria-expanded="true"
//                       >
//                         Select
//                       </Link>
//                       <div className="dropdown-menu shadow-lg w-100 dropdown-info">
//                         <div className="mb-3">
//                           <div className="input-icon-start position-relative">
//                             <span className="input-icon-addon fs-12">
//                               <i className="ti ti-search" />
//                             </span>
//                             <input
//                               type="text"
//                               className="form-control form-control-sm"
//                               placeholder="Emily clerk"
//                             />
//                           </div>
//                         </div>
//                         <ul className="mb-3 list-style-none">
//                           <li className="list-none">
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/users/user-02.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               Emily Clark
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-01.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               John Carter
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-16.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               Sophia White
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-15.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               Michael Johnson
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-14.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               Olivia Harris
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                               <input
//                                 className="form-check-input m-0 me-2"
//                                 type="checkbox"
//                               />
//                               <span className="avatar avatar-sm rounded-circle me-2">
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-01.jpg"
//                                   className="flex-shrink-0 rounded-circle"
//                                   alt="img"
//                                 />
//                               </span>
//                               David Anderson
//                             </label>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Purchase Date <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-icon-end position-relative">
//                       <DatePicker
//                         className="form-control datetimepicker"
//                         format={{
//                           format: "DD-MM-YYYY",
//                           type: "mask",
//                         }}
//                         getPopupContainer={getModalContainer}
//                         placeholder="DD-MM-YYYY"
//                         suffixIcon={null}
//                       />
//                       <span className="input-icon-addon">
//                         <i className="ti ti-calendar" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Purchase From <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={2547}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Manufacturer&nbsp;<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Endosys"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Model&nbsp;<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="CareKIT Pro"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Serial Number&nbsp;<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="ENW12547E789"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Supplier<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group custom-select">
//                       <CommonSelect
//                         options={Supplier}
//                         className="select"
//                         defaultValue={Supplier[1]}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Condition&nbsp; <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group custom-select">
//                       <CommonSelect
//                         options={Condition}
//                         className="select"
//                         defaultValue={Condition[1]}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       warranty <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group custom-select">
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue="2 years"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                     Value <span className="text-danger">* </span>
//                   </label>
//                   <div className="input-group">
//                     <span className="input-group-text bg-transparent text-dark fs-14">
//                       $
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder={"0"}
//                       defaultValue={"100"}
//                     />
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Status <span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group custom-select">
//                       <CommonSelect
//                         options={StatusApproved}
//                         className="select"
//                         defaultValue={StatusApproved[1]}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <div>
//                       <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                         Description <span className="text-danger">*</span>
//                       </label>
//                       <textarea
//                         rows={4}
//                         className="form-control rounded"
//                         placeholder=""
//                         defaultValue={
//                           " Evaluates the Autonomic Nervous System (ANS) to help identify disorders such as sudden death risk, silent heart attacks, hypertension, and syncope.​"
//                         }
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//               </div>
//               {/* end row */}
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-light btn-sm me-2 fs-13 fw-medium"
//                 data-bs-dismiss="modal"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-sm fs-13 fw-medium"
//               >
//                 Add Asset
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Edit Asset  */}
//       {/* Start Delete Modal  */}
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
//                 Are you sure want to delete?
//               </p>
//               <div className="d-flex justify-content-center">
//                 <Link
//                   to="#"
//                   className="btn btn-light position-relative z-1 me-3"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </Link>
//                 <Link
//                   to=""
//                   className="btn btn-danger position-relative z-1"
//                   data-bs-dismiss="modal"
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

// export default Modals;


import { useState, useEffect } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";

export interface AssetFormData {
  assetName: string;
  assetUser: string;
  purchaseDate: string;
  purchaseFrom: string;
  manufacturer: string;
  model: string;
  serialNumber: string;
  supplier: string;
  condition: string;
  warranty: string;
  warrantyEnd: string;
  value: string;
  description: string;
  status: string;
}

const emptyForm: AssetFormData = {
  assetName: "",
  assetUser: "",
  purchaseDate: "",
  purchaseFrom: "",
  manufacturer: "",
  model: "",
  serialNumber: "",
  supplier: "",
  condition: "New",
  warranty: "",
  warrantyEnd: "",
  value: "",
  description: "",
  status: "Pending",
};

const CONDITION_OPTIONS = [
  { label: "New", value: "New" },
  { label: "Good", value: "Good" },
  { label: "Fair", value: "Fair" },
  { label: "Poor", value: "Poor" },
];

const STATUS_OPTIONS = [
  { label: "Approved", value: "Approved" },
  { label: "Pending", value: "Pending" },
  { label: "Returned", value: "Returned" },
  { label: "Damaged", value: "Damaged" },
];

interface AssetModalProps {
  showAddModal: boolean;
  showEditModal: boolean;
  showDeleteModal: boolean;
  currentAsset: any;
  onCloseAdd: () => void;
  onCloseEdit: () => void;
  onCloseDelete: () => void;
  onAdd: (data: AssetFormData) => void;
  onEdit: (data: AssetFormData) => void;
  onDelete: () => void;
}

const AssetModal = ({
  showAddModal, showEditModal, showDeleteModal,
  currentAsset,
  onCloseAdd, onCloseEdit, onCloseDelete,
  onAdd, onEdit, onDelete,
}: AssetModalProps) => {
  const [addForm, setAddForm] = useState<AssetFormData>(emptyForm);
  const [editForm, setEditForm] = useState<AssetFormData>(emptyForm);

  const getModalContainer = () => document.body;

  useEffect(() => {
    if (currentAsset && showEditModal) {
      setEditForm({
        assetName: currentAsset.assetName || "",
        assetUser: currentAsset.assetUser || "",
        purchaseDate: currentAsset.purchaseDate || "",
        purchaseFrom: currentAsset.purchaseFrom || "",
        manufacturer: currentAsset.manufacturer || "",
        model: currentAsset.model || "",
        serialNumber: currentAsset.serialNumber || "",
        supplier: currentAsset.supplier || "",
        condition: currentAsset.condition || "New",
        warranty: currentAsset.warranty || "",
        warrantyEnd: currentAsset.warrantyEnd || "",
        value: String(currentAsset.value || ""),
        description: currentAsset.description || "",
        status: currentAsset.status || "Pending",
      });
    }
  }, [currentAsset, showEditModal]);

  // ✅ KEY: renderFormBody is inline function — NOT a sub-component
  // This prevents focus loss on every keystroke
  const renderFormBody = (
    form: AssetFormData,
    setForm: React.Dispatch<React.SetStateAction<AssetFormData>>
  ) => (
    // ✅ KEY FIX: overflowY + flex:1 makes this div scroll independently
    // header और footer fixed रहतात, फक्त हा div scroll होतो
    <div style={{ overflowY: "auto", flex: 1, padding: "1rem 1.5rem" }}>
      <div className="row">

        {/* Asset Name */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Asset Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Patient Monitor"
              value={form.assetName}
              onChange={(e) => setForm((p) => ({ ...p, assetName: e.target.value }))}
            />
          </div>
        </div>

        {/* Asset User */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Asset User <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Dr. Ramesh Kumar"
              value={form.assetUser}
              onChange={(e) => setForm((p) => ({ ...p, assetUser: e.target.value }))}
            />
          </div>
        </div>

        {/* Purchase Date */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Purchase Date <span className="text-danger">*</span>
            </label>
            <div className="input-icon-end position-relative">
              <DatePicker
                className="form-control datetimepicker"
                format={{ format: "DD-MM-YYYY", type: "mask" }}
                getPopupContainer={getModalContainer}
                placeholder="DD-MM-YYYY"
                suffixIcon={null}
                value={form.purchaseDate ? dayjs(form.purchaseDate, "DD-MM-YYYY") : null}
                onChange={(_, dateStr) =>
                  setForm((p) => ({ ...p, purchaseDate: dateStr as string }))
                }
              />
              <span className="input-icon-addon"><i className="ti ti-calendar" /></span>
            </div>
          </div>
        </div>

        {/* Purchase From */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Purchase From <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Mediline Supplies Pvt Ltd"
              value={form.purchaseFrom}
              onChange={(e) => setForm((p) => ({ ...p, purchaseFrom: e.target.value }))}
            />
          </div>
        </div>

        {/* Manufacturer */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Manufacturer <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Philips Healthcare"
              value={form.manufacturer}
              onChange={(e) => setForm((p) => ({ ...p, manufacturer: e.target.value }))}
            />
          </div>
        </div>

        {/* Model */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Model <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. IntelliVue MX40"
              value={form.model}
              onChange={(e) => setForm((p) => ({ ...p, model: e.target.value }))}
            />
          </div>
        </div>

        {/* Serial Number */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Serial Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. PHI-MX40-2024001"
              value={form.serialNumber}
              onChange={(e) => setForm((p) => ({ ...p, serialNumber: e.target.value }))}
            />
          </div>
        </div>

        {/* Supplier */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Supplier <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. MedEquip India"
              value={form.supplier}
              onChange={(e) => setForm((p) => ({ ...p, supplier: e.target.value }))}
            />
          </div>
        </div>

        {/* Condition */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Condition <span className="text-danger">*</span>
            </label>
            <CommonSelect
              options={CONDITION_OPTIONS}
              className="select"
              value={CONDITION_OPTIONS.find((c) => c.value === form.condition)}
              onChange={(option: any) =>
                setForm((p) => ({ ...p, condition: option?.value || "New" }))
              }
            />
          </div>
        </div>

        {/* Warranty */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">Warranty</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. 2 Years"
              value={form.warranty}
              onChange={(e) => setForm((p) => ({ ...p, warranty: e.target.value }))}
            />
          </div>
        </div>

        {/* Warranty End */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">Warranty End</label>
            <div className="input-icon-end position-relative">
              <DatePicker
                className="form-control datetimepicker"
                format={{ format: "DD-MM-YYYY", type: "mask" }}
                getPopupContainer={getModalContainer}
                placeholder="DD-MM-YYYY"
                suffixIcon={null}
                value={form.warrantyEnd ? dayjs(form.warrantyEnd, "DD-MM-YYYY") : null}
                onChange={(_, dateStr) =>
                  setForm((p) => ({ ...p, warrantyEnd: dateStr as string }))
                }
              />
              <span className="input-icon-addon"><i className="ti ti-calendar" /></span>
            </div>
          </div>
        </div>

        {/* Value */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Value <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-transparent text-dark fs-14">$</span>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                min="0"
                value={form.value}
                onChange={(e) => setForm((p) => ({ ...p, value: e.target.value }))}
              />
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Status <span className="text-danger">*</span>
            </label>
            <CommonSelect
              options={STATUS_OPTIONS}
              className="select"
              value={STATUS_OPTIONS.find((s) => s.value === form.status)}
              onChange={(option: any) =>
                setForm((p) => ({ ...p, status: option?.value || "Pending" }))
              }
            />
          </div>
        </div>

        {/* Description — full width */}
        <div className="col-lg-12">
          <div className="mb-2">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">Description</label>
            <textarea
              rows={4}
              className="form-control rounded"
              placeholder="Brief description of the asset..."
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
            />
          </div>
        </div>

      </div>
    </div>
  );

  // ✅ STRUCTURE:
  // modal-content (flex column, maxHeight 88vh)
  //   ├── modal-header  (flexShrink: 0 — never shrinks)
  //   ├── form          (flex: 1, contains scrollable div)
  //   └── modal-footer  (flexShrink: 0 — ALWAYS visible at bottom)

  return (
    <>
      {/* ==================== Add Modal ==================== */}
      <div
        className={`modal fade ${showAddModal ? "show" : ""}`}
        id="add_asset"
        style={{ display: showAddModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{
            maxHeight: "88vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}>
            {/* Header — fixed */}
            <div className="modal-header" style={{ flexShrink: 0 }}>
              <h5 className="modal-title text-dark fw-bold">Add Asset</h5>
              <button type="button" className="btn-close custom-btn-close opacity-100"
                onClick={onCloseAdd} aria-label="Close">
                <i className="ti ti-x bg-white fs-16 text-dark" />
              </button>
            </div>

            {/* Form — scrollable area, flex: 1 fills remaining space */}
            <form id="add-asset-form"
              style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}
              onSubmit={(e) => { e.preventDefault(); onAdd(addForm); setAddForm(emptyForm); }}>
              {renderFormBody(addForm, setAddForm)}
            </form>

            {/* Footer — fixed at bottom, always visible */}
            <div className="modal-footer" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                onClick={onCloseAdd}>Cancel</button>
              <button type="submit" form="add-asset-form"
                className="btn btn-primary btn-sm fs-13 fw-medium">Add Asset</button>
            </div>
          </div>
        </div>
      </div>
      {showAddModal && <div className="modal-backdrop fade show" />}

      {/* ==================== Edit Modal ==================== */}
      <div
        className={`modal fade ${showEditModal ? "show" : ""}`}
        id="edit_asset"
        style={{ display: showEditModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{
            maxHeight: "88vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}>
            <div className="modal-header" style={{ flexShrink: 0 }}>
              <h5 className="modal-title text-dark fw-bold">Edit Asset</h5>
              <button type="button" className="btn-close custom-btn-close opacity-100"
                onClick={onCloseEdit} aria-label="Close">
                <i className="ti ti-x bg-white fs-16 text-dark" />
              </button>
            </div>

            <form id="edit-asset-form"
              style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}
              onSubmit={(e) => { e.preventDefault(); onEdit(editForm); }}>
              {renderFormBody(editForm, setEditForm)}
            </form>

            <div className="modal-footer" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                onClick={onCloseEdit}>Cancel</button>
              <button type="submit" form="edit-asset-form"
                className="btn btn-primary btn-sm fs-13 fw-medium">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      {showEditModal && <div className="modal-backdrop fade show" />}

      {/* ==================== Delete Modal ==================== */}
      <div
        className={`modal fade ${showDeleteModal ? "show" : ""}`}
        id="delete_modal"
        style={{ display: showDeleteModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath src="assets/img/bg/delete-modal-bg-01.png" alt=""
                className="img-fluid position-absolute top-0 start-0 z-0" />
              <ImageWithBasePath src="assets/img/bg/delete-modal-bg-02.png" alt=""
                className="img-fluid position-absolute bottom-0 end-0 z-0" />
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1 position-relative z-1">Delete Confirmation</h5>
              <p className="mb-3 position-relative z-1">Are you sure you want to delete this asset?</p>
              <div className="d-flex justify-content-center">
                <Link to="#" className="btn btn-light position-relative z-1 me-3"
                  onClick={(e) => { e.preventDefault(); onCloseDelete(); }}>Cancel</Link>
                <Link to="#" className="btn btn-danger position-relative z-1"
                  onClick={(e) => { e.preventDefault(); onDelete(); }}>Yes, Delete</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && <div className="modal-backdrop fade show" />}
    </>
  );
};

export default AssetModal;  