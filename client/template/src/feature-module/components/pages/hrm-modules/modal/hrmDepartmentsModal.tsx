// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";

// const HrmDepartmentsModal = () => {
//   return (
//     <>
//       {/* Start Add Modal */}
//       <div id="add_department" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="text-dark modal-title fw-bold">
//                 Add New Department
//               </h4>
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
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Department Name<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input type="text" className="form-control" />
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">Description</label>
//                   <textarea
//                     className="form-control"
//                     rows={3}
//                     defaultValue={""}
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
//                   Add Department
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Modal */}
//       {/* Start Add Modal */}
//       <div id="edit_deparment" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="text-dark modal-title fw-bold">Edit Department</h4>
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
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Designation Name<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue="Nursing"
//                   />
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">Description</label>
//                   <textarea
//                     className="form-control"
//                     rows={3}
//                     defaultValue={
//                       "Nursing is caring for and supporting patients."
//                     }
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
//       {/* End Add Modal */}
//       {/* Start Delete Modal  */}
//       <div className="modal fade" id="delete_designation">
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
//                   to={all_routes.hrmDepartments}
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

// export default HrmDepartmentsModal;




import { useState, useEffect } from "react";
import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";

interface HrmDepartmentsModalProps {
  showAddModal: boolean;
  showEditModal: boolean;
  showDeleteModal: boolean;
  currentDepartment: any;
  onCloseAdd: () => void;
  onCloseEdit: () => void;
  onCloseDelete: () => void;
  onAdd: (name: string, description: string) => void;
  onEdit: (name: string, description: string) => void;
  onDelete: () => void;
}

const HrmDepartmentsModal = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  currentDepartment,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onAdd,
  onEdit,
  onDelete
}: HrmDepartmentsModalProps) => {
  const [addFormData, setAddFormData] = useState({ name: "", description: "" });
  const [editFormData, setEditFormData] = useState({ name: "", description: "" });

  // Update edit form when currentDepartment changes
  useEffect(() => {
    if (currentDepartment && showEditModal) {
      setEditFormData({
        name: currentDepartment.Department || "",
        description: ""
      });
    }
  }, [currentDepartment, showEditModal]);

  // Handle Add Department Submit
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (addFormData.name.trim()) {
      onAdd(addFormData.name, addFormData.description);
      setAddFormData({ name: "", description: "" });
    }
  };

  // Handle Edit Department Submit
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editFormData.name.trim()) {
      onEdit(editFormData.name, editFormData.description);
      setEditFormData({ name: "", description: "" });
    }
  };

  // Handle Delete Confirm
  const handleDeleteConfirm = () => {
    onDelete();
  };

  return (
    <>
      {/* Start Add Modal */}
      <div
        id="add_department"
        className={`modal fade ${showAddModal ? 'show' : ''}`}
        style={{ display: showAddModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">
                Add New Department
              </h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                onClick={onCloseAdd}
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Department Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={addFormData.name}
                    onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={addFormData.description}
                    onChange={(e) => setAddFormData({ ...addFormData, description: e.target.value })}
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
                  Add Department
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showAddModal && <div className="modal-backdrop fade show"></div>}
      {/* End Add Modal */}

      {/* Start Edit Modal */}
      <div
        id="edit_deparment"
        className={`modal fade ${showEditModal ? 'show' : ''}`}
        style={{ display: showEditModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">Edit Department</h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                onClick={onCloseEdit}
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Department Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={editFormData.description}
                    onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
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
      {/* End Edit Modal */}

      {/* Start Delete Modal  */}
      <div
        className={`modal fade ${showDeleteModal ? 'show' : ''}`}
        id="delete_designation"
        style={{ display: showDeleteModal ? 'block' : 'none' }}
      >
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
                    handleDeleteConfirm();
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
      {/* End Delete Modal  */}
    </>
  );
};

export default HrmDepartmentsModal;