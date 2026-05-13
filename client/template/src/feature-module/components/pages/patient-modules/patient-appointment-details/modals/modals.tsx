// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import { DatePicker, TimePicker, type TimePickerProps } from "antd";
// import dayjs from "dayjs";

// const Modals = () => {
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };

//   const onChangeTime: TimePickerProps["onChange"] = (time, timeString) => {
//     console.log(time, timeString);
//   };
//   return (
//     <>
//       {/* Add New Event Start */}
//       <div className="modal fade" id="add_event">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title">Add New Event</h4>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal "
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <form>
//               <div className="modal-body">
//                 {/* start row */}
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="mb-3">
//                       <label className="form-label">Event Name</label>
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div className="mb-3">
//                       <label className="form-label">Event Date</label>
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
//                           <i className="ti ti-calendar text-gray-7" />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label">Start Time</label>
//                       <div className="input-icon-end position-relative">
//                         <TimePicker
//                           className="form-control"
//                           onChange={onChangeTime}
//                           defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
//                         />
//                         <span className="input-icon-addon">
//                           <i className="ti ti-clock text-gray-7" />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <label className="form-label">End Time</label>
//                       <div className="input-icon-end position-relative">
//                         <TimePicker
//                           className="form-control"
//                           onChange={onChangeTime}
//                           defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
//                         />
//                         <span className="input-icon-addon">
//                           <i className="ti ti-clock text-gray-7" />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div className="mb-3">
//                       <label className="form-label">Event Location</label>
//                       <input type="text" className="form-control" />
//                     </div>
//                     <div className="mb-0">
//                       <label className="form-label">Descriptions</label>
//                       <textarea
//                         className="form-control"
//                         rows={3}
//                         defaultValue={""}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end row */}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-md btn-light me-2"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-md btn-primary">
//                   Add Event
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* Add New Event End */}
//       {/* Start Event */}
//       <div className="modal fade" id="event_modal">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header bg-dark modal-bg">
//               <div className="modal-title text-white">
//                 <span id="eventTitle" />
//               </div>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal text-white"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body">
//               <p className="d-flex align-items-center fw-medium text-black mb-3">
//                 <i className="ti ti-calendar-check text-default me-2" />
//                 26 Jul,2024 to 31 Jul,2024
//               </p>
//               <p className="d-flex align-items-center fw-medium text-black mb-3">
//                 <i className="ti ti-calendar-check text-default me-2" />
//                 11:00 AM to 12:15 PM
//               </p>
//               <p className="d-flex align-items-center fw-medium text-black mb-3">
//                 <i className="ti ti-map-pin-bolt text-default me-2" />
//                 Las Vegas, US
//               </p>
//               <p className="d-flex align-items-center fw-medium text-black mb-0">
//                 <i className="ti ti-calendar-check text-default me-2" />A
//                 recurring or repeating event is simply any event that you will
//                 occur more than once on your calendar.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Event */}
//       {/* Start Add New Appointment */}
//       <div
//         className="offcanvas offcanvas-offset offcanvas-end"
//         tabIndex={-1}
//         id="new_appointment"
//       >
//         <div className="offcanvas-header d-block pb-0 px-0">
//           <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
//             <h5 className="offcanvas-title fs-18 fw-bold">New Appointment</h5>
//             <button
//               type="button"
//               className="btn-close opacity-100"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             />
//           </div>
//         </div>
//         <div className="offcanvas-body pt-3">
//           <form action="#">
//             {/* start row*/}
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="mb-3">
//                   <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                     Appointment ID <span className="text-danger">*</span>
//                   </label>
//                   <div className="input-group">
//                     <input
//                       type="text"
//                       className="form-control rounded bg-light"
//                       defaultValue="AP234354"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* end col*/}
//               <div className="col-lg-12">
//                 <div className="mb-3">
//                   <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                     Patient<span className="text-danger">*</span>
//                   </label>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
//                       data-bs-toggle="dropdown"
//                       data-bs-auto-close="outside"
//                       aria-expanded="true"
//                     >
//                       Select
//                     </Link>
//                     <div className="dropdown-menu shadow-lg w-100 dropdown-info">
//                       <div className="mb-3">
//                         <div className="input-icon-start position-relative">
//                           <span className="input-icon-addon fs-12">
//                             <i className="ti ti-search" />
//                           </span>
//                           <input
//                             type="text"
//                             className="form-control form-control-sm"
//                             placeholder="Search"
//                           />
//                         </div>
//                       </div>
//                       <ul className="mb-3 list-style-none">
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             <span className="avatar avatar-sm rounded-circle me-2">
//                               <ImageWithBasePath
//                                 src="assets/img/users/user-02.jpg"
//                                 className="flex-shrink-0 rounded-circle"
//                                 alt="img"
//                               />
//                             </span>
//                             Emily Clark
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             <span className="avatar avatar-sm rounded-circle me-2">
//                               <ImageWithBasePath
//                                 src="assets/img/profiles/avatar-01.jpg"
//                                 className="flex-shrink-0 rounded-circle"
//                                 alt="img"
//                               />
//                             </span>
//                             John Carter
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             <span className="avatar avatar-sm rounded-circle me-2">
//                               <ImageWithBasePath
//                                 src="assets/img/profiles/avatar-16.jpg"
//                                 className="flex-shrink-0 rounded-circle"
//                                 alt="img"
//                               />
//                             </span>
//                             Sophia White
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             <span className="avatar avatar-sm rounded-circle me-2">
//                               <ImageWithBasePath
//                                 src="assets/img/profiles/avatar-15.jpg"
//                                 className="flex-shrink-0 rounded-circle"
//                                 alt="img"
//                               />
//                             </span>
//                             Michael Johnson
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             <span className="avatar avatar-sm rounded-circle me-2">
//                               <ImageWithBasePath
//                                 src="assets/img/profiles/avatar-14.jpg"
//                                 className="flex-shrink-0 rounded-circle"
//                                 alt="img"
//                               />
//                             </span>
//                             Olivia Harris
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             <span className="avatar avatar-sm rounded-circle me-2">
//                               <ImageWithBasePath
//                                 src="assets/img/profiles/avatar-01.jpg"
//                                 className="flex-shrink-0 rounded-circle"
//                                 alt="img"
//                               />
//                             </span>
//                             David Anderson
//                           </label>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* end col*/}
//               <div className="col-lg-12">
//                 <div className="mb-3">
//                   <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                     Appointment Type <span className="text-danger">*</span>
//                   </label>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
//                       data-bs-toggle="dropdown"
//                       data-bs-auto-close="outside"
//                       aria-expanded="true"
//                     >
//                       Select
//                     </Link>
//                     <div className="dropdown-menu shadow-lg w-100 dropdown-info">
//                       <div className="mb-3">
//                         <div className="input-icon-start position-relative">
//                           <span className="input-icon-addon fs-12">
//                             <i className="ti ti-search" />
//                           </span>
//                           <input
//                             type="text"
//                             className="form-control form-control-sm"
//                             placeholder="Select"
//                           />
//                         </div>
//                       </div>
//                       <ul className="mb-3 list-style-none">
//                         <li className="list-none">
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Online
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Member
//                           </label>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* end col*/}
//               <div className="col-lg-6">
//                 <div className="mb-3">
//                   <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                     Date of Appointment <span className="text-danger">*</span>
//                   </label>
//                   <div className="input-icon-end position-relative">
//                     <DatePicker
//                       className="form-control datetimepicker"
//                       format={{
//                         format: "DD-MM-YYYY",
//                         type: "mask",
//                       }}
//                       getPopupContainer={getModalContainer}
//                       placeholder="DD-MM-YYYY"
//                       suffixIcon={null}
//                     />
//                     <span className="input-icon-addon">
//                       <i className="ti ti-calendar" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               {/* end col*/}
//               <div className="col-lg-6">
//                 <div className="mb-3">
//                   <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                     Time <span className="text-danger">*</span>
//                   </label>
//                   <div className="input-icon-end position-relative">
//                     <TimePicker
//                       className="form-control"
//                       onChange={onChangeTime}
//                       defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
//                     />
//                     <span className="input-icon-addon">
//                       <i className="ti ti-clock" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               {/* end col*/}
//               <div className="col-lg-12">
//                 <div className="mb-3">
//                   <div>
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Appointment Reason
//                     </label>
//                     <textarea rows={4} className="form-control rounded" />
//                   </div>
//                 </div>
//               </div>
//               {/* end col*/}
//               <div className="col-lg-12">
//                 <div className="mb-3">
//                   <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                     Status<span className="text-danger">*</span>
//                   </label>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
//                       data-bs-toggle="dropdown"
//                       data-bs-auto-close="outside"
//                       aria-expanded="true"
//                     >
//                       Select
//                     </Link>
//                     <div className="dropdown-menu shadow-lg w-100 dropdown-info">
//                       <div className="mb-3">
//                         <div className="input-icon-start position-relative">
//                           <span className="input-icon-addon fs-12">
//                             <i className="ti ti-search" />
//                           </span>
//                           <input
//                             type="text"
//                             className="form-control form-control-sm"
//                             placeholder="Select"
//                           />
//                         </div>
//                       </div>
//                       <ul className="mb-3 list-style-none">
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Checked Out
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                             Checked In
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Cancelled
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center text-dark">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Scheduled
//                           </label>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* end col*/}
//             </div>
//             {/* end row*/}
//           </form>
//         </div>
//         <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
//           <div className=" d-flex justify-content-end gap-2">
//             <Link to="#" className="btn btn-light btm-md">
//               Cancel
//             </Link>
//             <button
//               data-bs-dismiss="offcanvas"
//               className="btn btn-primary btm-md"
//               id="filter-submit"
//             >
//               Create Create Appointment
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* End Add New Appointment*/}
//       {/* Start View Details */}
//       <div
//         className="offcanvas offcanvas-offset offcanvas-end"
//         tabIndex={-1}
//         id="view_details"
//       >
//         <div className="offcanvas-header d-block pb-0 px-0">
//           <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
//             <h5 className="offcanvas-title fs-18 fw-bold">
//               Appointment Details
//               <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2">
//                 #AP544658
//               </span>
//             </h5>
//             <button
//               type="button"
//               className="btn-close  opacity-100"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             >
//               <i className="ti ti-x bg-white fs-16 text-dark" />
//             </button>
//           </div>
//         </div>
//         <div className="offcanvas-body pt-0 px-0">
//           <h6 className="bg-light py-2 px-3 text-dark fw-bold">
//             When &amp; Where
//           </h6>
//           <div className="px-3 my-4">
//             <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//               Appointment On
//               <span className="text-body fw-normal">Saturday, 25 Apr 2025</span>
//             </p>
//             <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//               Time
//               <span className="text-body fw-normal">09:00 AM - 11:00 AM</span>
//             </p>
//             <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//               Location
//               <span className="text-body fw-normal">Newyork , USA </span>
//             </p>
//             <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//               Appointment Type
//               <span className="text-body fw-normal">Online Consultation</span>
//             </p>
//             <div className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//               Patient Details
//               <div className="text-body fw-normal d-flex align-items-center">
//                 <div className="avatar avatar-sm">
//                   <ImageWithBasePath
//                     src="assets/img/users/avatar-2.jpg"
//                     alt=""
//                     className="rounded-circle me-1"
//                   />
//                 </div>
//                 James Adrian
//               </div>
//             </div>
//           </div>
//           <h6 className="bg-light py-2 px-3 text-dark fw-bold">
//             Appointment Details
//           </h6>
//           <div className="px-3 my-4">
//             <div className="d-flex align-items-center justify-content-between mb-3">
//               <div className="d-flex align-items-center">
//                 Telehealth
//                 <label className="d-flex align-items-center form-switch ps-1">
//                   <input
//                     className="form-check-input m-0 me-2"
//                     type="checkbox"
//                     defaultChecked
//                   />
//                 </label>
//               </div>
//               <div>
//                 <Link
//                   to=""
//                   className="btn-primary btn btn-sm rounded d-flex align-items-center"
//                 >
//                   <i className="ti ti-video me-1" /> Start
//                 </Link>
//               </div>
//             </div>
//             <div className="row align-items-center">
//               <div className="col-lg-6 col-md-6">
//                 <p className="text-dark"> Status </p>
//               </div>
//               <div className="col-lg-6 col-md-6">
//                 <div className="mb-0">
//                   <select className="select form-control rounded w-100">
//                     <option>Pending</option>
//                     <option>Oldest</option>
//                     <option>Recent</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Add New Appointment*/}
//       {/* Start Delete Modal  */}
//       <div className="modal fade" id="delete_modal">
//         <div className="modal-dialog modal-dialog-centered modal-sm">
//           <div className="modal-content">
//             <div className="modal-body text-center position-relative">
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-01.png"
//                 alt=""
//                 className="img-fluid position-absolute top-0 start-0"
//               />
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-02.png"
//                 alt=""
//                 className="img-fluid position-absolute bottom-0 end-0"
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
//                 <Link to="#" className="btn btn-danger position-relative z-1">
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


// patient-appointment-details/modals/modals.tsx
// Import paths मध्ये एक जास्त ../ लागेल कारण folder वेगळा आहे

import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { message } from "antd";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import {
  getDoctors,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getDoctorSchedule,
  type Doctor,
} from "../../../../../../api/appointmentService";


interface SelectOption {
  value: string;
  label: string;
}

interface ModalsProps {
  selectedAppointment?: any;
  onAppointmentUpdated?: () => void;
}

const Modals = ({ selectedAppointment, onAppointmentUpdated }: ModalsProps) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [doctorSchedule, setDoctorSchedule] = useState<any>(null);
  const [editDoctorSchedule, setEditDoctorSchedule] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [formData, setFormData] = useState({
    doctor: "",
    appointmentType: "",
    appointmentDate: null as any,
    appointmentTime: null as any,
    reason: "",
    status: "Scheduled",
  });

  const [editFormData, setEditFormData] = useState({
    doctor: "",
    appointmentType: "",
    appointmentDate: null as any,
    appointmentTime: null as any,
    reason: "",
    status: "Scheduled",
  });

  const [errors, setErrors] = useState({
    doctor: "",
    appointmentType: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  // ─── Fetch doctors on mount ───────────────────────────────────────────────
  useEffect(() => {
    fetchDoctors();
  }, []);

  // ─── Populate edit form when selectedAppointment changes ─────────────────
  useEffect(() => {
    if (selectedAppointment) {
      const doctorId =
        selectedAppointment.doctor?._id ||
        selectedAppointment.doctor ||
        "";
      setEditFormData({
        doctor: doctorId,
        appointmentType: selectedAppointment.appointmentType || "",
        appointmentDate: selectedAppointment.appointmentDate
          ? dayjs(selectedAppointment.appointmentDate)
          : null,
        appointmentTime: selectedAppointment.appointmentTime
          ? dayjs(selectedAppointment.appointmentTime, "HH:mm")
          : null,
        reason: selectedAppointment.reason || "",
        status: selectedAppointment.status || "Scheduled",
      });
      if (doctorId) {
        getDoctorSchedule(doctorId)
          .then((data) => setEditDoctorSchedule(data))
          .catch(() => setEditDoctorSchedule(null));
      }
    }
  }, [selectedAppointment]);

  const fetchDoctors = async () => {
    try {
      const response = await getDoctors();
      if (response.success) setDoctors(response.data || []);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  // ─── Options ──────────────────────────────────────────────────────────────
  const doctorOptions: SelectOption[] = doctors.map((doc: any) => ({
    value: doc._id,
    label: `${doc.fullName}${doc.department ? ` (${doc.department})` : ""}`,
  }));

  const appointmentTypeOptions: SelectOption[] = [
    { value: "Online Consultation", label: "Online Consultation" },
    { value: "In-Person Visit", label: "In-Person Visit" },
    { value: "Follow Up", label: "Follow Up" },
    { value: "Emergency", label: "Emergency" },
  ];

  const statusOptions: SelectOption[] = [
    { value: "Scheduled", label: "Scheduled" },
    { value: "Confirmed", label: "Confirmed" },
    { value: "Checked In", label: "Checked In" },
    { value: "Checked Out", label: "Checked Out" },
    { value: "Cancelled", label: "Cancelled" },
  ];

  // ─── Disabled dates ───────────────────────────────────────────────────────
  const disabledDate = (current: any) => {
    if (!current) return true;
    if (current.isBefore(dayjs().startOf("day"), "day")) return true;
    if (!doctorSchedule?.schedule?.length) return false;
    return !doctorSchedule.schedule.find(
      (s: any) => s.date === current.format("YYYY-MM-DD")
    );
  };

  const editDisabledDate = (current: any) => {
    if (!current) return true;
    if (current.isBefore(dayjs().startOf("day"), "day")) return true;
    if (!editDoctorSchedule?.schedule?.length) return false;
    return !editDoctorSchedule.schedule.find(
      (s: any) => s.date === current.format("YYYY-MM-DD")
    );
  };

  // ─── Time slots helper ────────────────────────────────────────────────────
  const getTimeSlots = (schedule: any, date: any) => {
    if (!date || !schedule?.schedule) return [];
    const dateStr = date.format("YYYY-MM-DD");
    const found = schedule.schedule.find((s: any) => s.date === dateStr);
    return found?.timeSlots || [];
  };

  // ─── Reusable time field renderer ────────────────────────────────────────
  const renderTimeField = (
    schedule: any,
    dateValue: any,
    timeValue: any,
    onChange: (val: any) => void,
    errorMsg?: string
  ) => {
    const slots = getTimeSlots(schedule, dateValue);
    const currentVal =
      timeValue
        ? typeof timeValue === "string"
          ? timeValue
          : timeValue.format("HH:mm")
        : "";

    return (
      <div className="mb-3">
        <label className="form-label mb-1 text-dark fs-14 fw-medium">
          Time <span className="text-danger">*</span>
        </label>
        <div className="input-icon-end position-relative">
          {slots.length > 0 ? (
            <select
              className="form-control"
              value={currentVal}
              disabled={!dateValue}
              onChange={(e) => onChange(e.target.value || null)}
            >
              <option value="">Select time slot</option>
              {slots.map((slot: any, i: number) => (
                <option key={i} value={slot.startTime}>
                  {slot.startTime} - {slot.endTime}
                </option>
              ))}
            </select>
          ) : (
            <TimePicker
              className="form-control"
              format="HH:mm"
              value={
                timeValue && typeof timeValue !== "string" ? timeValue : null
              }
              onChange={(time) => onChange(time)}
              showNow={false}
              disabled={!dateValue}
              placeholder="Select time"
            />
          )}
          <span className="input-icon-addon">
            <i className="ti ti-clock" />
          </span>
        </div>
        {errorMsg && (
          <div className="text-danger mt-1" style={{ fontSize: "0.875rem" }}>
            {errorMsg}
          </div>
        )}
      </div>
    );
  };

  // ─── Validation ───────────────────────────────────────────────────────────
  const validateForm = () => {
    const newErrors = {
      doctor: "",
      appointmentType: "",
      appointmentDate: "",
      appointmentTime: "",
    };
    let isValid = true;
    if (!formData.doctor) {
      newErrors.doctor = "Please select a doctor";
      isValid = false;
    }
    if (!formData.appointmentType) {
      newErrors.appointmentType = "Please select appointment type";
      isValid = false;
    }
    if (!formData.appointmentDate) {
      newErrors.appointmentDate = "Please select date";
      isValid = false;
    }
    if (!formData.appointmentTime) {
      newErrors.appointmentTime = "Please select time";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  // ─── Create handler ───────────────────────────────────────────────────────
  const handleCreate = async () => {
    if (!validateForm()) {
      message.error("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      const userData = JSON.parse(
        localStorage.getItem("userData") || "{}"
      );
      const selectedDoctor = doctors.find(
        (d: any) => d._id === formData.doctor
      );
      const timeVal =
        typeof formData.appointmentTime === "string"
          ? formData.appointmentTime
          : formData.appointmentTime?.format("HH:mm");

      await createAppointment({
        patient: userData._id,
        doctor: formData.doctor,
        department: selectedDoctor?.department || "",
        appointmentType: formData.appointmentType,
        appointmentDate: formData.appointmentDate.format("YYYY-MM-DD"),
        appointmentTime: timeVal,
        reason: formData.reason,
        status: formData.status,
      });

      message.success("Appointment created successfully!");

      // Close offcanvas
      const btn = document.querySelector(
        "#new_appointment .btn-close"
      ) as HTMLElement;
      btn?.click();

      // Reset
      setFormData({
        doctor: "",
        appointmentType: "",
        appointmentDate: null,
        appointmentTime: null,
        reason: "",
        status: "Scheduled",
      });
      setDoctorSchedule(null);
      setErrors({
        doctor: "",
        appointmentType: "",
        appointmentDate: "",
        appointmentTime: "",
      });

      onAppointmentUpdated?.();
    } catch (error: any) {
      message.error(error.message || "Failed to create appointment");
    } finally {
      setLoading(false);
    }
  };

  // ─── Update handler ───────────────────────────────────────────────────────
  const handleUpdate = async () => {
    if (!selectedAppointment) return;
    if (
      !editFormData.doctor ||
      !editFormData.appointmentType ||
      !editFormData.appointmentDate ||
      !editFormData.appointmentTime
    ) {
      message.error("Please fill all required fields");
      return;
    }
    setEditLoading(true);
    try {
      const selectedDoctor = doctors.find(
        (d: any) => d._id === editFormData.doctor
      );
      const timeVal =
        typeof editFormData.appointmentTime === "string"
          ? editFormData.appointmentTime
          : editFormData.appointmentTime?.format("HH:mm");

      await updateAppointment(selectedAppointment._id, {
        doctor: editFormData.doctor,
        department: selectedDoctor?.department || "",
        appointmentType: editFormData.appointmentType,
        appointmentDate: editFormData.appointmentDate.format("YYYY-MM-DD"),
        appointmentTime: timeVal,
        reason: editFormData.reason,
        status: editFormData.status,
      });

      message.success("Appointment updated successfully!");

      const btn = document.querySelector(
        "#edit_appointment .btn-close"
      ) as HTMLElement;
      btn?.click();

      onAppointmentUpdated?.();
    } catch (error: any) {
      message.error(error.message || "Failed to update appointment");
    } finally {
      setEditLoading(false);
    }
  };

  // ─── Delete handler ───────────────────────────────────────────────────────
  const handleDelete = async () => {
    if (!selectedAppointment) return;
    setDeleteLoading(true);
    try {
      await deleteAppointment(selectedAppointment._id);
      message.success("Appointment deleted successfully!");

      // Bootstrap modal बंद करा
      const modalEl = document.getElementById("delete_modal");
      if (modalEl) {
        const bsModal = (window as any).bootstrap?.Modal?.getInstance(modalEl);
        bsModal?.hide();
      }

      onAppointmentUpdated?.();
    } catch (error: any) {
      message.error(error.message || "Failed to delete appointment");
    } finally {
      setDeleteLoading(false);
    }
  };

  const getModalContainer = () =>
    document.getElementById("modal-datepicker") || document.body;

  // ─── Doctor avatar helper ─────────────────────────────────────────────────
  const DoctorAvatar = ({ doc }: { doc: any }) => {
    const src = doc?.profileImage
      ? doc.profileImage.startsWith("http")
        ? doc.profileImage
        : `${import.meta.env.VITE_BACKEND_URL}${doc.profileImage}`
      : "";
    if (src) {
      return (
        <img
          src={src}
          alt={doc?.fullName}
          className="rounded-circle"
          style={{ width: 32, height: 32, objectFit: "cover" }}
        />
      );
    }
    return (
      <div
        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
        style={{ width: 32, height: 32, fontSize: 13 }}
      >
        {doc?.fullName?.charAt(0)?.toUpperCase() || "D"}
      </div>
    );
  };

  return (
    <>
      {/* ══════════════════════════════════════════════
          NEW APPOINTMENT
      ══════════════════════════════════════════════ */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end"
        tabIndex={-1}
        id="new_appointment"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">New Appointment</h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>

        <div className="offcanvas-body pt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Appointment ID
                </label>
                <input
                  type="text"
                  className="form-control rounded bg-light"
                  value="Auto-generated"
                  readOnly
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Doctor <span className="text-danger">*</span>
                </label>
                <CommonSelect
                  options={doctorOptions}
                  className="select"
                  placeholder="Select Doctor"
                  onChange={async (option: any) => {
                    const id = option?.value || "";
                    setFormData((prev) => ({
                      ...prev,
                      doctor: id,
                      appointmentDate: null,
                      appointmentTime: null,
                    }));
                    setErrors((prev) => ({ ...prev, doctor: "" }));
                    if (id) {
                      try {
                        const data = await getDoctorSchedule(id);
                        setDoctorSchedule(data);
                      } catch {
                        setDoctorSchedule(null);
                      }
                    }
                  }}
                />
                {errors.doctor && (
                  <div
                    className="text-danger mt-1"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {errors.doctor}
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Appointment Type <span className="text-danger">*</span>
                </label>
                <CommonSelect
                  options={appointmentTypeOptions}
                  className="select"
                  placeholder="Select Type"
                  onChange={(option: any) => {
                    setFormData((prev) => ({
                      ...prev,
                      appointmentType: option?.value || "",
                    }));
                    setErrors((prev) => ({
                      ...prev,
                      appointmentType: "",
                    }));
                  }}
                />
                {errors.appointmentType && (
                  <div
                    className="text-danger mt-1"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {errors.appointmentType}
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Date <span className="text-danger">*</span>
                </label>
                <div className="input-icon-end position-relative">
                  <DatePicker
                    className="form-control datetimepicker"
                    format="DD-MM-YYYY"
                    value={formData.appointmentDate}
                    getPopupContainer={getModalContainer}
                    placeholder="DD-MM-YYYY"
                    disabledDate={disabledDate}
                    onChange={(date) => {
                      setFormData((prev) => ({
                        ...prev,
                        appointmentDate: date,
                        appointmentTime: null,
                      }));
                      setErrors((prev) => ({
                        ...prev,
                        appointmentDate: "",
                      }));
                    }}
                    suffixIcon={null}
                  />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
                {errors.appointmentDate && (
                  <div
                    className="text-danger mt-1"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {errors.appointmentDate}
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              {renderTimeField(
                doctorSchedule,
                formData.appointmentDate,
                formData.appointmentTime,
                (val) =>
                  setFormData((prev) => ({
                    ...prev,
                    appointmentTime: val,
                  })),
                errors.appointmentTime
              )}
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Reason
                </label>
                <textarea
                  rows={4}
                  className="form-control rounded"
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      reason: e.target.value,
                    }))
                  }
                  placeholder="Enter reason for appointment"
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Status <span className="text-danger">*</span>
                </label>
                <CommonSelect
                  options={statusOptions}
                  className="select"
                  defaultValue={statusOptions[0]}
                  onChange={(option: any) =>
                    setFormData((prev) => ({
                      ...prev,
                      status: option?.value || "Scheduled",
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
          <div className="d-flex justify-content-end gap-2">
            <Link
              to="#"
              className="btn btn-light btm-md"
              data-bs-dismiss="offcanvas"
            >
              Cancel
            </Link>
            <button
              type="button"
              className="btn btn-primary btm-md"
              onClick={handleCreate}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Creating...
                </>
              ) : (
                "Create Appointment"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          VIEW DETAILS
      ══════════════════════════════════════════════ */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end"
        tabIndex={-1}
        id="view_details"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">
              Appointment Details
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2">
                #{selectedAppointment?.appointmentId || "N/A"}
              </span>
            </h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-0 px-0">
          <h6 className="bg-light py-2 px-3 text-dark fw-bold">
            When &amp; Where
          </h6>
          <div className="px-3 my-4">
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Appointment On
              <span className="text-body fw-normal">
                {selectedAppointment
                  ? dayjs(selectedAppointment.appointmentDate).format(
                    "dddd, DD MMM YYYY"
                  )
                  : "N/A"}
              </span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Time
              <span className="text-body fw-normal">
                {selectedAppointment?.appointmentTime || "N/A"}
              </span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Appointment Type
              <span className="text-body fw-normal">
                {selectedAppointment?.appointmentType || "N/A"}
              </span>
            </p>
            <div className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Doctor
              <div className="text-body fw-normal d-flex align-items-center gap-2">
                <DoctorAvatar doc={selectedAppointment?.doctor} />
                {selectedAppointment?.doctor?.fullName || "N/A"}
              </div>
            </div>
          </div>

          <h6 className="bg-light py-2 px-3 text-dark fw-bold">
            Appointment Details
          </h6>
          <div className="px-3 my-4">
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Department
              <span className="text-body fw-normal">
                {selectedAppointment?.doctor?.department || "N/A"}
              </span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Consultation Fees
              <span className="text-body fw-normal">
                $
                {selectedAppointment?.consultationCharge ||
                  selectedAppointment?.doctor?.consultationCharge ||
                  0}
              </span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Status
              <span
                className={`badge fw-medium ${selectedAppointment?.status === "Checked Out"
                  ? "bg-success"
                  : selectedAppointment?.status === "Cancelled"
                    ? "bg-danger"
                    : selectedAppointment?.status === "Checked In"
                      ? "bg-warning"
                      : selectedAppointment?.status === "Confirmed"
                        ? "bg-primary"
                        : "bg-info"
                  }`}
              >
                {selectedAppointment?.status || "N/A"}
              </span>
            </p>
            {selectedAppointment?.reason && (
              <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
                Reason
                <span className="text-body fw-normal">
                  {selectedAppointment.reason}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          EDIT APPOINTMENT
      ══════════════════════════════════════════════ */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end"
        tabIndex={-1}
        id="edit_appointment"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">Edit Appointment</h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>

        <div className="offcanvas-body pt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Appointment ID
                </label>
                <input
                  type="text"
                  className="form-control rounded bg-light"
                  value={selectedAppointment?.appointmentId || "N/A"}
                  readOnly
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Doctor <span className="text-danger">*</span>
                </label>
                <CommonSelect
                  options={doctorOptions}
                  className="select"
                  placeholder="Select Doctor"
                  value={doctorOptions.find(
                    (d) => d.value === editFormData.doctor
                  )}
                  onChange={async (option: any) => {
                    const id = option?.value || "";
                    setEditFormData((prev) => ({
                      ...prev,
                      doctor: id,
                      appointmentDate: null,
                      appointmentTime: null,
                    }));
                    if (id) {
                      try {
                        const data = await getDoctorSchedule(id);
                        setEditDoctorSchedule(data);
                      } catch {
                        setEditDoctorSchedule(null);
                      }
                    }
                  }}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Appointment Type <span className="text-danger">*</span>
                </label>
                <CommonSelect
                  options={appointmentTypeOptions}
                  className="select"
                  placeholder="Select Type"
                  value={appointmentTypeOptions.find(
                    (t) => t.value === editFormData.appointmentType
                  )}
                  onChange={(option: any) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      appointmentType: option?.value || "",
                    }))
                  }
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Date <span className="text-danger">*</span>
                </label>
                <div className="input-icon-end position-relative">
                  <DatePicker
                    className="form-control datetimepicker"
                    format="DD-MM-YYYY"
                    value={editFormData.appointmentDate}
                    getPopupContainer={getModalContainer}
                    placeholder="DD-MM-YYYY"
                    disabledDate={editDisabledDate}
                    onChange={(date) =>
                      setEditFormData((prev) => ({
                        ...prev,
                        appointmentDate: date,
                        appointmentTime: null,
                      }))
                    }
                    suffixIcon={null}
                  />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {renderTimeField(
                editDoctorSchedule,
                editFormData.appointmentDate,
                editFormData.appointmentTime,
                (val) =>
                  setEditFormData((prev) => ({
                    ...prev,
                    appointmentTime: val,
                  }))
              )}
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Reason
                </label>
                <textarea
                  rows={4}
                  className="form-control rounded"
                  value={editFormData.reason}
                  onChange={(e) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      reason: e.target.value,
                    }))
                  }
                  placeholder="Enter reason for appointment"
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Status <span className="text-danger">*</span>
                </label>
                <CommonSelect
                  options={statusOptions}
                  className="select"
                  value={statusOptions.find(
                    (s) => s.value === editFormData.status
                  )}
                  onChange={(option: any) =>
                    setEditFormData((prev) => ({
                      ...prev,
                      status: option?.value || "Scheduled",
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
          <div className="d-flex justify-content-end gap-2">
            <Link
              to="#"
              className="btn btn-light btm-md"
              data-bs-dismiss="offcanvas"
            >
              Cancel
            </Link>
            <button
              type="button"
              className="btn btn-primary btm-md"
              onClick={handleUpdate}
              disabled={editLoading}
            >
              {editLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Updating...
                </>
              ) : (
                "Update Appointment"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          DELETE MODAL
      ══════════════════════════════════════════════ */}
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
                Are you sure want to delete?
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
                  onClick={handleDelete}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Deleting...
                    </>
                  ) : (
                    "Yes, Delete"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;