// import { DatePicker } from "antd";
// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";

// const Modals = () => {
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };
//   return (
//     <>
//       {/* Start Add leave */}
//       <div className="modal fade" id="add-leave">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title text-dark fw-bold">Add New Leave</h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Leave Type<span className="text-danger">*</span>
//                     </label>
//                     <div className="dropdown">
//                       <Link
//                         to="#"
//                         className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
//                         data-bs-toggle="dropdown"
//                         data-bs-auto-close="outside"
//                         aria-expanded="true"
//                       >
//                         Select
//                       </Link>
//                       <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
//                         <li>
//                           <div className="mb-2">
//                             <input
//                               type="text"
//                               className="form-control form-control"
//                               placeholder="Search"
//                             />
//                           </div>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Casual Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                             Sick Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                             Maternity Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Paternity Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                             Compensatory Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Emergency Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Bereavement Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                             Study/Exam Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Paid Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Unpaid Leave
//                           </label>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       From Date<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group position-relative">
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
//                         <i className="ti ti-calendar text-body" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       To Date<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group position-relative">
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
//                         <i className="ti ti-calendar text-body" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       No of Days<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <div className="row p-2 bg-light rounded align-items-center flex-wrap">
//                       <div className="col-lg-6">
//                         <label className="form-label mb-1 text-body fs-14 fw-medium">
//                           dd/mm/yyyy
//                         </label>
//                       </div>
//                       <div className="col-lg-6">
//                         <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                           Leave Type<span className="text-danger">*</span>
//                         </label>
//                         <div className="dropdown">
//                           <Link
//                             to="#"
//                             className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
//                             data-bs-toggle="dropdown"
//                             data-bs-auto-close="outside"
//                             aria-expanded="true"
//                           >
//                             Select
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
//                             <li>
//                               <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                                 <input
//                                   className="form-check-input m-0 me-2"
//                                   type="checkbox"
//                                 />
//                                 Applied
//                               </label>
//                             </li>
//                             <li>
//                               <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                                 <input
//                                   className="form-check-input m-0 me-2"
//                                   type="checkbox"
//                                   defaultChecked
//                                 />
//                                 Approved
//                               </label>
//                             </li>
//                             <li>
//                               <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                                 <input
//                                   className="form-check-input m-0 me-2"
//                                   type="checkbox"
//                                   defaultChecked
//                                 />
//                                 Rejected
//                               </label>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <div>
//                       <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                         Reason
//                       </label>
//                       <textarea
//                         rows={4}
//                         className="form-control rounded"
//                         placeholder="Description"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//               </div>
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
//                 Add New Leave
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Add New leave  */}
//       {/* Start Cancel Modal */}
//       <div className="modal fade" id="cancel-leave">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title text-dark fw-bold">Cancel Reason</h5>
//               <button
//                 type="button"
//                 className="btn-close opacity-100"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body">
//               <div className="mb-3">
//                 <div>
//                   <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                     Reason
//                   </label>
//                   <textarea
//                     rows={4}
//                     className="form-control rounded"
//                     placeholder="Description"
//                   />
//                 </div>
//               </div>
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
//                 Cancel Leave
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Cancel Modal  */}
//       {/* Start Add leave */}
//       <div className="modal fade" id="edit-leave">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title text-dark fw-bold">Edit New Leave</h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Leave Type<span className="text-danger">*</span>
//                     </label>
//                     <div className="dropdown">
//                       <Link
//                         to="#"
//                         className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
//                         data-bs-toggle="dropdown"
//                         data-bs-auto-close="outside"
//                         aria-expanded="true"
//                       >
//                         Casual Leave
//                       </Link>
//                       <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
//                         <li>
//                           <div className="mb-2">
//                             <input
//                               type="text"
//                               className="form-control form-control"
//                               placeholder="Search"
//                             />
//                           </div>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Casual Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                             Sick Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                             Maternity Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Paternity Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                             Compensatory Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Emergency Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Bereavement Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                               defaultChecked
//                             />
//                             Study/Exam Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Paid Leave
//                           </label>
//                         </li>
//                         <li>
//                           <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                             <input
//                               className="form-check-input m-0 me-2"
//                               type="checkbox"
//                             />
//                             Unpaid Leave
//                           </label>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       From Date<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group position-relative">
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
//                         <i className="ti ti-calendar text-body" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       To Date<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group position-relative">
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
//                         <i className="ti ti-calendar text-body" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       No of Days<span className="text-danger">*</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="{30}"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <div className="row p-2 bg-light rounded align-items-center flex-wrap">
//                       <div className="col-lg-6">
//                         <label className="form-label mb-1 text-body fs-14 fw-medium">
//                           dd/mm/yyyy
//                         </label>
//                       </div>
//                       <div className="col-lg-6">
//                         <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                           Leave Type<span className="text-danger">*</span>
//                         </label>
//                         <div className="dropdown">
//                           <Link
//                             to="#"
//                             className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
//                             data-bs-toggle="dropdown"
//                             data-bs-auto-close="outside"
//                             aria-expanded="true"
//                           >
//                             Applied
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
//                             <li>
//                               <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                                 <input
//                                   className="form-check-input m-0 me-2"
//                                   type="checkbox"
//                                 />
//                                 Applied
//                               </label>
//                             </li>
//                             <li>
//                               <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                                 <input
//                                   className="form-check-input m-0 me-2"
//                                   type="checkbox"
//                                   defaultChecked
//                                 />
//                                 Approved
//                               </label>
//                             </li>
//                             <li>
//                               <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
//                                 <input
//                                   className="form-check-input m-0 me-2"
//                                   type="checkbox"
//                                   defaultChecked
//                                 />
//                                 Rejected
//                               </label>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-12">
//                   <div className="mb-3">
//                     <div>
//                       <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                         Reason
//                       </label>
//                       <textarea
//                         rows={4}
//                         className="form-control rounded"
//                         placeholder="Description"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//               </div>
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
//                 Edit Leave
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Add New leave  */}
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




import { DatePicker } from "antd";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { createLeave } from "../../../../../../api/leaveService";

interface ModalsProps {
  showEditModal: boolean;
  showDeleteModal: boolean;
  currentLeave: any;
  onCloseEdit: () => void;
  onCloseDelete: () => void;
  onEdit: (leaveData: any) => void;
  onDelete: () => void;
  onAdd: () => void;
}

const Modals = ({
  showEditModal,
  showDeleteModal,
  currentLeave,
  onCloseEdit,
  onCloseDelete,
  onEdit,
  onDelete,
  onAdd
}: ModalsProps) => {
  // Add leave form state
  const [addFormData, setAddFormData] = useState({
    leaveType: '',
    fromDate: null as Dayjs | null,
    toDate: null as Dayjs | null,
    dayType: 'Full Day',
    reason: ''
  });

  // Edit leave form state
  const [editFormData, setEditFormData] = useState({
    leaveType: '',
    fromDate: null as Dayjs | null,
    toDate: null as Dayjs | null,
    dayType: 'Full Day',
    reason: ''
  });

  const [selectedLeaveTypes, setSelectedLeaveTypes] = useState<string[]>([]);
  const [editSelectedLeaveTypes, setEditSelectedLeaveTypes] = useState<string[]>([]);

  const leaveTypes = [
    'Casual Leave',
    'Sick Leave',
    'Maternity Leave',
    'Paternity Leave',
    'Compensatory Leave',
    'Emergency Leave',
    'Bereavement Leave',
    'Study/Exam Leave',
    'Paid Leave',
    'Unpaid Leave'
  ];

  // Update edit form when currentLeave changes
  useEffect(() => {
    if (currentLeave && showEditModal) {
      const dateRange = currentLeave.Date?.split(' - ');
      setEditFormData({
        leaveType: currentLeave.Leave_Type || '',
        fromDate: dateRange?.[0] ? dayjs(dateRange[0], 'DD MMM YYYY') : null,
        toDate: dateRange?.[1] ? dayjs(dateRange[1], 'DD MMM YYYY') : null,
        dayType: currentLeave.Day?.includes('Half') ? 'Half Day' : 'Full Day',
        reason: currentLeave.reason || ''
      });
      setEditSelectedLeaveTypes([currentLeave.Leave_Type || '']);
    }
  }, [currentLeave, showEditModal]);

  // Calculate number of days
  const calculateDays = (from: Dayjs | null, to: Dayjs | null, dayType: string) => {
    if (!from || !to) return 0;

    const diff = to.diff(from, 'day') + 1;
    return dayType === 'Half Day' ? 0.5 : diff;
  };

  // Handle Add Submit
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!addFormData.leaveType || selectedLeaveTypes.length === 0) {
      alert('Please select leave type');
      return;
    }

    if (!addFormData.fromDate) {
      alert('Please select from date');
      return;
    }

    if (!addFormData.toDate) {
      alert('Please select to date');
      return;
    }

    if (!addFormData.reason.trim()) {
      alert('Please enter reason');
      return;
    }

    try {
      const leaveData = {
        leaveType: selectedLeaveTypes[0],
        fromDate: addFormData.fromDate.format('YYYY-MM-DD'),
        toDate: addFormData.toDate.format('YYYY-MM-DD'),
        dayType: addFormData.dayType,
        reason: addFormData.reason
      };

      const response = await createLeave(leaveData);

      if (response.success) {
        // Reset form
        setAddFormData({
          leaveType: '',
          fromDate: null,
          toDate: null,
          dayType: 'Full Day',
          reason: ''
        });
        setSelectedLeaveTypes([]);

        // Close modal and refresh data
        const modal = document.getElementById('add-leave');
        if (modal) {
          const bsModal = (window as any).bootstrap.Modal.getInstance(modal);
          if (bsModal) bsModal.hide();
        }

        onAdd();
        alert('Leave request submitted successfully');
      }
    } catch (error: any) {
      console.error('Add leave error:', error);
      alert(error.message || 'Failed to submit leave request');
    }
  };

  // Handle Edit Submit
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!editFormData.leaveType || editSelectedLeaveTypes.length === 0) {
      alert('Please select leave type');
      return;
    }

    if (!editFormData.fromDate || !editFormData.toDate) {
      alert('Please select dates');
      return;
    }

    if (!editFormData.reason.trim()) {
      alert('Please enter reason');
      return;
    }

    const leaveData = {
      leaveType: editSelectedLeaveTypes[0],
      fromDate: editFormData.fromDate.format('YYYY-MM-DD'),
      toDate: editFormData.toDate.format('YYYY-MM-DD'),
      dayType: editFormData.dayType,
      reason: editFormData.reason
    };

    onEdit(leaveData);

    // Reset form
    setEditFormData({
      leaveType: '',
      fromDate: null,
      toDate: null,
      dayType: 'Full Day',
      reason: ''
    });
    setEditSelectedLeaveTypes([]);
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // Handle leave type checkbox toggle
  const handleLeaveTypeToggle = (type: string, isEdit: boolean = false) => {
    if (isEdit) {
      setEditSelectedLeaveTypes([type]);
      setEditFormData({ ...editFormData, leaveType: type });
    } else {
      setSelectedLeaveTypes([type]);
      setAddFormData({ ...addFormData, leaveType: type });
    }
  };

  // Auto set toDate when fromDate is selected (for single day leave)
  const handleFromDateChange = (date: Dayjs | null, isEdit: boolean = false) => {
    if (isEdit) {
      setEditFormData({
        ...editFormData,
        fromDate: date,
        toDate: date // Same day by default
      });
    } else {
      setAddFormData({
        ...addFormData,
        fromDate: date,
        toDate: date // Same day by default
      });
    }
  };

  return (
    <>
      {/* Start Add leave */}
      <div className="modal fade" id="add-leave">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Add New Leave</h5>
              <button
                type="button"
                className="btn-close btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Leave Type<span className="text-danger">*</span>
                      </label>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="true"
                        >
                          {selectedLeaveTypes.length > 0 ? selectedLeaveTypes[0] : 'Select'}
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                          <li>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control form-control"
                                placeholder="Search"
                              />
                            </div>
                          </li>
                          {leaveTypes.map((type) => (
                            <li key={type}>
                              <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                  checked={selectedLeaveTypes.includes(type)}
                                  onChange={() => handleLeaveTypeToggle(type)}
                                />
                                {type}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        From Date<span className="text-danger">*</span>
                      </label>
                      <div className="input-group position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          value={addFormData.fromDate}
                          onChange={(date) => handleFromDateChange(date)}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-body" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        To Date<span className="text-danger">*</span>
                      </label>
                      <div className="input-group position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          value={addFormData.toDate}
                          onChange={(date) => setAddFormData({ ...addFormData, toDate: date })}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null}
                          disabled={!addFormData.fromDate}
                          disabledDate={(current: Dayjs | null) => {
                            if (!current || !addFormData.fromDate) return false;
                            return current.isBefore(addFormData.fromDate.startOf('day'));
                          }}

                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-body" />
                        </span>
                      </div>
                      <small className="text-muted">Leave same as From Date for single day</small>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        No of Days<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          value={calculateDays(addFormData.fromDate, addFormData.toDate, addFormData.dayType)}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <div className="row p-2 bg-light rounded align-items-center flex-wrap">
                        <div className="col-lg-6">
                          <label className="form-label mb-1 text-body fs-14 fw-medium">
                            {addFormData.fromDate ? addFormData.fromDate.format('DD/MM/YYYY') : 'dd/mm/yyyy'}
                          </label>
                        </div>
                        <div className="col-lg-6">
                          <label className="form-label mb-1 text-dark fs-14 fw-medium">
                            Day Type<span className="text-danger">*</span>
                          </label>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              aria-expanded="true"
                            >
                              {addFormData.dayType}
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="radio"
                                    name="addDayType"
                                    checked={addFormData.dayType === 'Full Day'}
                                    onChange={() => setAddFormData({ ...addFormData, dayType: 'Full Day' })}
                                  />
                                  Full Day
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="radio"
                                    name="addDayType"
                                    checked={addFormData.dayType === 'Half Day'}
                                    onChange={() => setAddFormData({ ...addFormData, dayType: 'Half Day' })}
                                  />
                                  Half Day
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <div>
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Reason<span className="text-danger">*</span>
                        </label>
                        <textarea
                          rows={4}
                          className="form-control rounded"
                          placeholder="Enter reason for leave"
                          value={addFormData.reason}
                          onChange={(e) => setAddFormData({ ...addFormData, reason: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm fs-13 fw-medium"
                >
                  Add New Leave
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Start Edit Modal */}
      <div
        className={`modal fade ${showEditModal ? 'show' : ''}`}
        id="edit-leave"
        style={{ display: showEditModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Edit Leave</h5>
              <button
                type="button"
                className="btn-close btn-close-modal"
                onClick={onCloseEdit}
                aria-label="Close"
              />
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Leave Type<span className="text-danger">*</span>
                      </label>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="true"
                        >
                          {editSelectedLeaveTypes.length > 0 ? editSelectedLeaveTypes[0] : 'Select'}
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                          {leaveTypes.map((type) => (
                            <li key={type}>
                              <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                  checked={editSelectedLeaveTypes.includes(type)}
                                  onChange={() => handleLeaveTypeToggle(type, true)}
                                />
                                {type}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        From Date<span className="text-danger">*</span>
                      </label>
                      <div className="input-group position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          value={editFormData.fromDate}
                          onChange={(date) => handleFromDateChange(date, true)}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-body" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        To Date<span className="text-danger">*</span>
                      </label>
                      <div className="input-group position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          value={editFormData.toDate}
                          onChange={(date) => setEditFormData({ ...editFormData, toDate: date })}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null}
                          disabled={!editFormData.fromDate}
                          disabledDate={(current: Dayjs | null) => {
                            if (!current || !addFormData.fromDate) return false;
                            return current.isBefore(addFormData.fromDate.startOf('day'));
                          }}

                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-body" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        No of Days<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          value={calculateDays(editFormData.fromDate, editFormData.toDate, editFormData.dayType)}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <div className="row p-2 bg-light rounded align-items-center flex-wrap">
                        <div className="col-lg-6">
                          <label className="form-label mb-1 text-body fs-14 fw-medium">
                            {editFormData.fromDate ? editFormData.fromDate.format('DD/MM/YYYY') : 'dd/mm/yyyy'}
                          </label>
                        </div>
                        <div className="col-lg-6">
                          <label className="form-label mb-1 text-dark fs-14 fw-medium">
                            Day Type<span className="text-danger">*</span>
                          </label>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              aria-expanded="true"
                            >
                              {editFormData.dayType}
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="radio"
                                    name="editDayType"
                                    checked={editFormData.dayType === 'Full Day'}
                                    onChange={() => setEditFormData({ ...editFormData, dayType: 'Full Day' })}
                                  />
                                  Full Day
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="radio"
                                    name="editDayType"
                                    checked={editFormData.dayType === 'Half Day'}
                                    onChange={() => setEditFormData({ ...editFormData, dayType: 'Half Day' })}
                                  />
                                  Half Day
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <div>
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Reason<span className="text-danger">*</span>
                        </label>
                        <textarea
                          rows={4}
                          className="form-control rounded"
                          placeholder="Enter reason for leave"
                          value={editFormData.reason}
                          onChange={(e) => setEditFormData({ ...editFormData, reason: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                  onClick={onCloseEdit}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm fs-13 fw-medium"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showEditModal && <div className="modal-backdrop fade show"></div>}

      {/* Start Delete Modal  */}
      <div
        className={`modal fade ${showDeleteModal ? 'show' : ''}`}
        id="delete_modal"
        style={{ display: showDeleteModal ? 'block' : 'none' }}
      >
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
                Are you sure want to delete this leave request?
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  onClick={(e) => {
                    e.preventDefault();
                    onCloseDelete();
                  }}
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="btn btn-danger position-relative z-1"
                  onClick={(e) => {
                    e.preventDefault();
                    onDelete();
                  }}
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default Modals;