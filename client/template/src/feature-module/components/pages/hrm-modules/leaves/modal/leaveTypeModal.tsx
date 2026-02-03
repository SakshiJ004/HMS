// import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
// import { StatusActive } from "../../../../../../core/common/selectOption";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import { Link } from "react-router";
// import { all_routes } from "../../../../../routes/all_routes";

// const LeaveTypeModal = () => {
//   return (
//     <>
//       {/* Start Add Categories */}
//       <div id="add_leave_type" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="text-dark modal-title fw-bold">Add Leave Type</h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="fa-solid fa-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Leave Type<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input type="text" className="form-control" />
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">
//                     Leave Quota<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input type="text" className="form-control" />
//                 </div>
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
//                   Add New Leave Type
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Categories */}
//       {/* Start Edit Categories */}
//       <div id="edit_leave_type" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="text-dark modal-title fw-bold">Edit Leave Type</h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="fa-solid fa-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Leave Type<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue="Sick Leave"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Leave Quota<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue={12}
//                   />
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">Status</label>
//                   <CommonSelect
//                     options={StatusActive}
//                     className="select"
//                     defaultValue={StatusActive[1]}
//                   />
//                 </div>
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
//       {/* End Edit Categories */}
//       {/* Start Delete Modal  */}
//       <div className="modal fade" id="delete_leave_type">
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
//                 <Link
//                   to={all_routes.leaveType}
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

// export default LeaveTypeModal;



// Admin/leaves/modal/leaveTypeModal.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import { StatusActive } from "../../../../../../core/common/selectOption";

interface LeaveTypeModalProps {
  showAddModal: boolean;
  showEditModal: boolean;
  showDeleteModal: boolean;
  selectedLeaveType: any;
  onCloseAdd: () => void;
  onCloseEdit: () => void;
  onCloseDelete: () => void;
  onAdd: (data: { leaveType: string; leaveQuota: number }) => void;
  onEdit: (data: { _id: string; leaveType: string; leaveQuota: number; status: string }) => void;
  onDelete: (id: string) => void;
}

const LeaveTypeModal = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  selectedLeaveType,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onAdd,
  onEdit,
  onDelete
}: LeaveTypeModalProps) => {
  const [addFormData, setAddFormData] = useState({
    leaveType: "",
    leaveQuota: ""
  });

  const [editFormData, setEditFormData] = useState({
    leaveType: "",
    leaveQuota: "",
    status: StatusActive[0]
  });

  useEffect(() => {
    if (selectedLeaveType && showEditModal) {
      setEditFormData({
        leaveType: selectedLeaveType.LeaveType,
        leaveQuota: selectedLeaveType.LeaveQuota.toString(),
        status: StatusActive.find(s => s.value === selectedLeaveType.Status) || StatusActive[0]
      });
    }
  }, [selectedLeaveType, showEditModal]);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!addFormData.leaveType || !addFormData.leaveQuota) {
      alert('Please fill all fields');
      return;
    }

    onAdd({
      leaveType: addFormData.leaveType,
      leaveQuota: parseInt(addFormData.leaveQuota)
    });

    setAddFormData({ leaveType: "", leaveQuota: "" });
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!editFormData.leaveType || !editFormData.leaveQuota) {
      alert('Please fill all fields');
      return;
    }

    onEdit({
      _id: selectedLeaveType._id,
      leaveType: editFormData.leaveType,
      leaveQuota: parseInt(editFormData.leaveQuota),
      status: editFormData.status.value
    });
  };

  return (
    <>
      {/* Add Leave Type Modal */}
      <div
        className={`modal fade ${showAddModal ? 'show' : ''}`}
        id="add_leave_type"
        style={{ display: showAddModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title fw-bold">Add Leave Type</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                onClick={onCloseAdd}
                aria-label="Close"
              >
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Leave Type<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={addFormData.leaveType}
                    onChange={(e) => setAddFormData({
                      ...addFormData,
                      leaveType: e.target.value
                    })}
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Leave Quota<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={addFormData.leaveQuota}
                    onChange={(e) => setAddFormData({
                      ...addFormData,
                      leaveQuota: e.target.value
                    })}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  onClick={onCloseAdd}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add New Leave Type
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showAddModal && <div className="modal-backdrop fade show"></div>}

      {/* Edit Leave Type Modal */}
      <div
        className={`modal fade ${showEditModal ? 'show' : ''}`}
        id="edit_leave_type"
        style={{ display: showEditModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title fw-bold">Edit Leave Type</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                onClick={onCloseEdit}
                aria-label="Close"
              >
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Leave Type<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editFormData.leaveType}
                    onChange={(e) => setEditFormData({
                      ...editFormData,
                      leaveType: e.target.value
                    })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Leave Quota<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={editFormData.leaveQuota}
                    onChange={(e) => setEditFormData({
                      ...editFormData,
                      leaveQuota: e.target.value
                    })}
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    value={editFormData.status}
                    onChange={(value: any) => setEditFormData({
                      ...editFormData,
                      status: value
                    })}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  onClick={onCloseEdit}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showEditModal && <div className="modal-backdrop fade show"></div>}

      {/* Delete Modal */}
      <div
        className={`modal fade ${showDeleteModal ? 'show' : ''}`}
        id="delete_leave_type"
        style={{ display: showDeleteModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0"
              />
              <div className="mb-3">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1">Delete Confirmation</h5>
              <p className="mb-3">Are you sure want to delete?</p>
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
                    if (selectedLeaveType) {
                      onDelete(selectedLeaveType._id);
                    }
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

export default LeaveTypeModal;