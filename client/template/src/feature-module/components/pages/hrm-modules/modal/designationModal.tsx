// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import {
//   DesignDepartment,
//   StatusActive,
// } from "../../../../../core/common/selectOption";

// const DesignationModal = () => {
//   return (
//     <>
//       {/* Start Add Modal */}
//       <div id="add_designation" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="text-dark modal-title fw-bold">
//                 Add New Designation
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
//                   <div className="d-flex align-items-center">
//                     <div className="form-check d-flex align-items-center me-3">
//                       <input
//                         className="form-check-input me-2"
//                         type="radio"
//                         name="Radio-2"
//                         id="Radio-sm-1"
//                       />
//                       <label
//                         className="form-check-label fs-13"
//                         htmlFor="Radio-sm-1"
//                       >
//                         Staff
//                       </label>
//                     </div>
//                     <div className="form-check d-flex align-items-center">
//                       <input
//                         className="form-check-input me-2"
//                         type="radio"
//                         name="Radio-2"
//                         id="Radio-sm-2"
//                       />
//                       <label
//                         className="form-check-label fs-13"
//                         htmlFor="Radio-sm-2"
//                       >
//                         Doctor
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Designation Name<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input type="text" className="form-control" />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Department<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={DesignDepartment}
//                     className="select"
//                     defaultValue={DesignDepartment[0]}
//                   />
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
//                   Add Designation
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Modal */}
//       {/* Start Add Modal */}
//       <div id="edit_designation" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="text-dark modal-title fw-bold">
//                 Edit Designation
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
//                   <div className="d-flex align-items-center">
//                     <div className="form-check d-flex align-items-center me-3">
//                       <input
//                         className="form-check-input me-2"
//                         type="radio"
//                         name="Radio-2"
//                         id="Radio-sm-3"
//                         defaultChecked
//                       />
//                       <label
//                         className="form-check-label fs-13"
//                         htmlFor="Radio-sm-3"
//                       >
//                         Staff
//                       </label>
//                     </div>
//                     <div className="form-check d-flex align-items-center">
//                       <input
//                         className="form-check-input me-2"
//                         type="radio"
//                         name="Radio-2"
//                         id="Radio-sm-4"
//                       />
//                       <label
//                         className="form-check-label fs-13"
//                         htmlFor="Radio-sm-4"
//                       >
//                         Doctor
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Designation Name<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue="Nurse"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">
//                     Department<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={DesignDepartment}
//                     className="select"
//                     defaultValue={DesignDepartment[1]}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Description</label>
//                   <textarea
//                     className="form-control"
//                     rows={3}
//                     defaultValue={
//                       "A nurse provides patient care and supports medical treatments."
//                     }
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
//                   to={all_routes.designation}
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

// export default DesignationModal;


import { useState, useEffect } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import {
  DesignDepartment,
  StatusActive,
} from "../../../../../core/common/selectOption";

interface DesignationModalProps {
  showAddModal: boolean;
  showEditModal: boolean;
  showDeleteModal: boolean;
  currentDesignation: any;
  onCloseAdd: () => void;
  onCloseEdit: () => void;
  onCloseDelete: () => void;
  onAdd: (data: any) => void;
  onEdit: (data: any) => void;
  onDelete: () => void;
}

const DesignationModal = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  currentDesignation,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onAdd,
  onEdit,
  onDelete
}: DesignationModalProps) => {
  const [addFormData, setAddFormData] = useState({
    type: "Staff",
    name: "",
    department: "",
    description: ""
  });

  const [editFormData, setEditFormData] = useState({
    type: "Staff",
    name: "",
    department: "",
    description: "",
    status: "Active"
  });

  // Update edit form when currentDesignation changes
  useEffect(() => {
    if (currentDesignation && showEditModal) {
      setEditFormData({
        type: currentDesignation.Type || "Staff",
        name: currentDesignation.Designation || "",
        department: currentDesignation.Department || "",
        description: currentDesignation.Description || "",
        status: currentDesignation.Status || "Active"
      });
    }
  }, [currentDesignation, showEditModal]);

  // Handle Add Submit
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!addFormData.name.trim()) {
      alert("Please enter designation name");
      return;
    }

    if (!addFormData.department.trim()) {
      alert("Please select department");
      return;
    }

    onAdd({
      name: addFormData.name.trim(),
      type: addFormData.type,
      department: addFormData.department.trim(),
      description: addFormData.description.trim(),
      status: "Active"
    });

    // Reset form
    setAddFormData({
      type: "Staff",
      name: "",
      department: "",
      description: ""
    });
  };

  // Handle Edit Submit
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!editFormData.name.trim()) {
      alert("Please enter designation name");
      return;
    }

    if (!editFormData.department.trim()) {
      alert("Please select department");
      return;
    }

    onEdit({
      name: editFormData.name.trim(),
      type: editFormData.type,
      department: editFormData.department.trim(),
      description: editFormData.description.trim(),
      status: editFormData.status
    });

    // Reset form
    setEditFormData({
      type: "Staff",
      name: "",
      department: "",
      description: "",
      status: "Active"
    });
  };

  // Handle Delete
  const handleDeleteConfirm = () => {
    onDelete();
  };

  return (
    <>
      {/* Add Modal */}
      <div
        id="add_designation"
        className={`modal fade ${showAddModal ? 'show' : ''}`}
        style={{ display: showAddModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">
                Add New Designation
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
                  <div className="d-flex align-items-center">
                    <div className="form-check d-flex align-items-center me-3">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="add-type"
                        id="add-staff"
                        checked={addFormData.type === "Staff"}
                        onChange={() => setAddFormData({ ...addFormData, type: "Staff" })}
                      />
                      <label
                        className="form-check-label fs-13"
                        htmlFor="add-staff"
                      >
                        Staff
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="add-type"
                        id="add-doctor"
                        checked={addFormData.type === "Doctor"}
                        onChange={() => setAddFormData({ ...addFormData, type: "Doctor" })}
                      />
                      <label
                        className="form-check-label fs-13"
                        htmlFor="add-doctor"
                      >
                        Doctor
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Designation Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={addFormData.name}
                    onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Department<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={DesignDepartment}
                    className="select"
                    value={DesignDepartment.find(d => d.value === addFormData.department)}
                    onChange={(option: any) => setAddFormData({ ...addFormData, department: option.value })}
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
                  Add Designation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showAddModal && <div className="modal-backdrop fade show"></div>}

      {/* Edit Modal */}
      <div
        id="edit_designation"
        className={`modal fade ${showEditModal ? 'show' : ''}`}
        style={{ display: showEditModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">
                Edit Designation
              </h4>
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
                  <div className="d-flex align-items-center">
                    <div className="form-check d-flex align-items-center me-3">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="edit-type"
                        id="edit-staff"
                        checked={editFormData.type === "Staff"}
                        onChange={() => setEditFormData({ ...editFormData, type: "Staff" })}
                      />
                      <label
                        className="form-check-label fs-13"
                        htmlFor="edit-staff"
                      >
                        Staff
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="edit-type"
                        id="edit-doctor"
                        checked={editFormData.type === "Doctor"}
                        onChange={() => setEditFormData({ ...editFormData, type: "Doctor" })}
                      />
                      <label
                        className="form-check-label fs-13"
                        htmlFor="edit-doctor"
                      >
                        Doctor
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Designation Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Department<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={DesignDepartment}
                    className="select"
                    value={DesignDepartment.find(d => d.value === editFormData.department)}
                    onChange={(option: any) => setEditFormData({ ...editFormData, department: option.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={editFormData.description}
                    onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    value={StatusActive.find(s => s.value === editFormData.status)}
                    onChange={(option: any) => setEditFormData({ ...editFormData, status: option.value })}
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
    </>
  );
};

export default DesignationModal;