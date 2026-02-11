// import { Link } from "react-router";
// import { all_routes } from "../../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";

// const Modals = () => {
//   return (
//     <>
//       {/* Start Add Modal */}
//       <div id="add_specialization" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="text-dark modal-title fw-bold">
//                 Add New Specialization
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
//                     Specialization<span className="text-danger ms-1">*</span>
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
//                   className="btn btn-light border"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Add Specialization
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Modal */}
//       {/* Start Add Modal */}
//       <div id="edit_specialization" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="text-dark modal-title fw-bold">
//                 Edit Specialization
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
//                     Specialization<span className="text-danger ms-1">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue="Cardiologist"
//                   />
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">Description</label>
//                   <textarea
//                     className="form-control"
//                     rows={3}
//                     defaultValue={"Focuses on heart conditions in children."}
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
//       <div className="modal fade" id="delete_specialization">
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
//                   to={all_routes.specializations}
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

// export default Modals;



import { useState, useEffect } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import {
  createSpecialization,
  updateSpecialization,
} from "../../../../../../api/specializationService";
import * as bootstrap from "bootstrap"

interface ModalsProps {
  showAddModal: boolean;
  showEditModal: boolean;
  showDeleteModal: boolean;
  selectedSpec: any;
  onCloseAdd: () => void;
  onCloseEdit: () => void;
  onCloseDelete: () => void;
  onDelete: () => void;
  onRefresh: () => void;
}

const Modals = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  selectedSpec,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onDelete,
  onRefresh,
}: ModalsProps) => {
  // Add Modal States
  const [addName, setAddName] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addLoading, setAddLoading] = useState(false);

  // Edit Modal States
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editStatus, setEditStatus] = useState("Active");
  const [editLoading, setEditLoading] = useState(false);

  // Populate edit form when selectedSpec changes
  useEffect(() => {
    if (selectedSpec) {
      setEditName(selectedSpec.name || "");
      setEditDescription(selectedSpec.description || "");
      setEditStatus(selectedSpec.status || "Active");
    }
  }, [selectedSpec]);

  // Close modals programmatically
  const closeAddModal = () => {
    setAddName("");
    setAddDescription("");
    onCloseAdd();
    const modal = document.getElementById("add_specialization");
    if (modal) {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  };


  const closeEditModal = () => {
    setEditName("");
    setEditDescription("");
    setEditStatus("Active");
    onCloseEdit();
    const modal = document.getElementById("edit_specialization");
    if (modal) {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  };


  const closeDeleteModal = () => {
    onCloseDelete();
    const modal = document.getElementById("delete_specialization");
    if (modal) {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  };


  // Handle Add Submit
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!addName.trim()) {
      alert("Specialization name is required");
      return;
    }

    try {
      setAddLoading(true);
      const response = await createSpecialization({
        name: addName.trim(),
        description: addDescription.trim(),
      });

      if (response.success) {
        alert("Specialization created successfully!");
        closeAddModal();
        onRefresh();
      }
    } catch (error: any) {
      console.error("Error creating specialization:", error);
      alert(error.message || "Failed to create specialization");
    } finally {
      setAddLoading(false);
    }
  };

  // Handle Edit Submit
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSpec) return;

    if (!editName.trim()) {
      alert("Specialization name is required");
      return;
    }

    try {
      setEditLoading(true);
      const response = await updateSpecialization(selectedSpec._id, {
        name: editName.trim(),
        description: editDescription.trim(),
        status: editStatus,
      });

      if (response.success) {
        alert("Specialization updated successfully!");
        closeEditModal();
        onRefresh();
      }
    } catch (error: any) {
      console.error("Error updating specialization:", error);
      alert(error.message || "Failed to update specialization");
    } finally {
      setEditLoading(false);
    }
  };

  // Handle Delete
  const handleDeleteConfirm = async () => {
    try {
      await onDelete();
      closeDeleteModal();
    } catch (error) {
      console.error("Error in delete:", error);
    }
  };

  // Show/hide modals using Bootstrap
  useEffect(() => {
    if (showAddModal) {
      const modal = document.getElementById("add_specialization");
      if (modal) {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
        modalInstance.show();
      }
    }
  }, [showAddModal]);


  useEffect(() => {
    if (showEditModal) {
      const modal = document.getElementById("edit_specialization");
      if (modal) {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
        modalInstance.show();
      }
    }
  }, [showEditModal]);


  useEffect(() => {
    if (showDeleteModal) {
      const modal = document.getElementById("delete_specialization");
      if (modal) {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modal);
        modalInstance.show();
      }
    }
  }, [showDeleteModal]);


  return (
    <>
      {/* Add Specialization Modal */}
      <div id="add_specialization" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">
                Add New Specialization
              </h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeAddModal}
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Specialization<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., Cardiology"
                    value={addName}
                    onChange={(e) => setAddName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Enter description (optional)"
                    value={addDescription}
                    onChange={(e) => setAddDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-light border"
                  data-bs-dismiss="modal"
                  onClick={closeAddModal}
                  disabled={addLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={addLoading}
                >
                  {addLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Adding...
                    </>
                  ) : (
                    "Add Specialization"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Edit Specialization Modal */}
      <div id="edit_specialization" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">
                Edit Specialization
              </h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeEditModal}
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Specialization<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  data-bs-dismiss="modal"
                  onClick={closeEditModal}
                  disabled={editLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={editLoading}
                >
                  {editLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Delete Specialization Modal */}
      <div className="modal fade" id="delete_specialization">
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
                Are you sure you want to delete{" "}
                <strong>{selectedSpec?.name}</strong>?
                {selectedSpec?.doctorCount > 0 && (
                  <span className="text-danger d-block mt-2">
                    Warning: {selectedSpec.doctorCount} doctor(s) are assigned to
                    this specialization
                  </span>
                )}
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="btn btn-danger position-relative z-1"
                  onClick={handleDeleteConfirm}
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;