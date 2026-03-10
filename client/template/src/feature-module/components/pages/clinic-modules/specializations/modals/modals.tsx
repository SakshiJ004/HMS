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


// import { useState, useEffect } from "react";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import { message } from "antd";
// import { type Specialization } from "../specializations";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

// interface ModalsProps {
//   showAddModal: boolean;
//   showEditModal: boolean;
//   showDeleteModal: boolean;
//   selectedItem: Specialization | null;
//   onAddClose: () => void;
//   onEditClose: () => void;
//   onDeleteClose: () => void;
//   onSuccess: () => void;
// }

// const Modals = ({
//   showAddModal,
//   showEditModal,
//   showDeleteModal,
//   selectedItem,
//   onAddClose,
//   onEditClose,
//   onDeleteClose,
//   onSuccess,
// }: ModalsProps) => {
//   const [addForm, setAddForm] = useState({ name: "", description: "" });
//   const [editForm, setEditForm] = useState({ name: "", description: "", status: "Active" });
//   const [saving, setSaving] = useState(false);
//   const [deleting, setDeleting] = useState(false);

//   const getAuthHeaders = () => ({
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   });

//   // Edit modal खुली झाली की selectedItem चा data भर
//   useEffect(() => {
//     if (showEditModal && selectedItem) {
//       setEditForm({
//         name: selectedItem.name,
//         description: selectedItem.description || "",
//         status: selectedItem.status,
//       });
//     }
//   }, [showEditModal, selectedItem]);

//   // Add modal बंद झाली की form reset कर
//   useEffect(() => {
//     if (!showAddModal) {
//       setAddForm({ name: "", description: "" });
//     }
//   }, [showAddModal]);

//   // ===== ADD =====
//   const handleAdd = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!addForm.name.trim()) {
//       message.error("Specialization name is required");
//       return;
//     }
//     setSaving(true);
//     try {
//       const res = await fetch(`${BACKEND_URL}/api/specializations`, {
//         method: "POST",
//         headers: getAuthHeaders(),
//         body: JSON.stringify(addForm),
//       });
//       const data = await res.json();
//       if (res.ok && data.success) {
//         message.success("Specialization added successfully!");
//         onAddClose();
//         onSuccess();
//       } else {
//         message.error(data.message || "Failed to add specialization");
//       }
//     } catch {
//       message.error("Server error. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ===== EDIT =====
//   const handleEditSave = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!editForm.name.trim()) {
//       message.error("Specialization name is required");
//       return;
//     }
//     if (!selectedItem) return;
//     setSaving(true);
//     try {
//       const res = await fetch(`${BACKEND_URL}/api/specializations/${selectedItem._id}`, {
//         method: "PUT",
//         headers: getAuthHeaders(),
//         body: JSON.stringify(editForm),
//       });
//       const data = await res.json();
//       if (res.ok && data.success) {
//         message.success("Specialization updated successfully!");
//         onEditClose();
//         onSuccess();
//       } else {
//         message.error(data.message || "Failed to update");
//       }
//     } catch {
//       message.error("Server error. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   // ===== DELETE =====
//   const handleDelete = async () => {
//     if (!selectedItem) return;
//     setDeleting(true);
//     try {
//       const res = await fetch(`${BACKEND_URL}/api/specializations/${selectedItem._id}`, {
//         method: "DELETE",
//         headers: getAuthHeaders(),
//       });
//       const data = await res.json();
//       if (res.ok && data.success) {
//         message.success("Specialization deleted successfully!");
//         onDeleteClose();
//         onSuccess();
//       } else {
//         message.error(data.message || "Failed to delete");
//       }
//     } catch {
//       message.error("Server error. Please try again.");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   return (
//     <>
//       {/* ===== Add Modal ===== */}
//       {showAddModal && (
//         <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h4 className="text-dark modal-title fw-bold">Add New Specialization</h4>
//                 <button
//                   type="button"
//                   className="btn-close btn-close-modal custom-btn-close"
//                   onClick={onAddClose}
//                 >
//                   <i className="ti ti-x" />
//                 </button>
//               </div>
//               <form onSubmit={handleAdd}>
//                 <div className="modal-body">
//                   <div className="mb-3">
//                     <label className="form-label">
//                       Specialization <span className="text-danger ms-1">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter specialization name"
//                       value={addForm.name}
//                       onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
//                     />
//                   </div>
//                   <div className="mb-0">
//                     <label className="form-label">Description</label>
//                     <textarea
//                       className="form-control"
//                       rows={3}
//                       placeholder="Enter description (optional)"
//                       value={addForm.description}
//                       onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
//                     />
//                   </div>
//                 </div>
//                 <div className="modal-footer d-flex align-items-center gap-1">
//                   <button type="button" className="btn btn-light border" onClick={onAddClose}>
//                     Cancel
//                   </button>
//                   <button type="submit" className="btn btn-primary" disabled={saving}>
//                     {saving
//                       ? <><span className="spinner-border spinner-border-sm me-2" />Adding...</>
//                       : "Add Specialization"
//                     }
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ===== Edit Modal ===== */}
//       {showEditModal && selectedItem && (
//         <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h4 className="text-dark modal-title fw-bold">Edit Specialization</h4>
//                 <button
//                   type="button"
//                   className="btn-close btn-close-modal custom-btn-close"
//                   onClick={onEditClose}
//                 >
//                   <i className="ti ti-x" />
//                 </button>
//               </div>
//               <form onSubmit={handleEditSave}>
//                 <div className="modal-body">
//                   <div className="mb-3">
//                     <label className="form-label">
//                       Specialization <span className="text-danger ms-1">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={editForm.name}
//                       onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Description</label>
//                     <textarea
//                       className="form-control"
//                       rows={3}
//                       value={editForm.description}
//                       onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
//                     />
//                   </div>
//                   <div className="mb-0">
//                     <label className="form-label">Status</label>
//                     <select
//                       className="form-select"
//                       value={editForm.status}
//                       onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
//                     >
//                       <option value="Active">Active</option>
//                       <option value="Inactive">Inactive</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="modal-footer d-flex align-items-center gap-1">
//                   <button type="button" className="btn btn-white border" onClick={onEditClose}>
//                     Cancel
//                   </button>
//                   <button type="submit" className="btn btn-primary" disabled={saving}>
//                     {saving
//                       ? <><span className="spinner-border spinner-border-sm me-2" />Saving...</>
//                       : "Save Changes"
//                     }
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ===== Delete Modal ===== */}
//       {showDeleteModal && selectedItem && (
//         <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-dialog-centered modal-sm">
//             <div className="modal-content">
//               <div className="modal-body text-center position-relative z-1">
//                 <ImageWithBasePath
//                   src="assets/img/bg/delete-modal-bg-01.png"
//                   alt=""
//                   className="img-fluid position-absolute top-0 start-0 z-n1"
//                 />
//                 <ImageWithBasePath
//                   src="assets/img/bg/delete-modal-bg-02.png"
//                   alt=""
//                   className="img-fluid position-absolute bottom-0 end-0 z-n1"
//                 />
//                 <div className="mb-3">
//                   <span className="avatar avatar-lg bg-danger text-white">
//                     <i className="ti ti-trash fs-24" />
//                   </span>
//                 </div>
//                 <h5 className="fw-bold mb-1">Delete Confirmation</h5>
//                 <p className="mb-1">Are you sure want to delete</p>
//                 <p className="fw-semibold text-danger mb-3">"{selectedItem.name}"?</p>
//                 <div className="d-flex justify-content-center gap-2">
//                   <button className="btn btn-light position-relative z-1" onClick={onDeleteClose}>
//                     Cancel
//                   </button>
//                   <button className="btn btn-danger position-relative z-1" onClick={handleDelete} disabled={deleting}>
//                     {deleting
//                       ? <><span className="spinner-border spinner-border-sm me-2" />Deleting...</>
//                       : "Yes, Delete"
//                     }
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modals;

import { useState, useEffect } from "react";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { message } from "antd";
import CreatableSelect from "react-select/creatable";
import { type Specialization } from "../specializations";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

interface ModalsProps {
  showAddModal: boolean;
  showEditModal: boolean;
  showDeleteModal: boolean;
  selectedItem: Specialization | null;
  onAddClose: () => void;
  onEditClose: () => void;
  onDeleteClose: () => void;
  onSuccess: () => void;
}

interface SelectOption {
  value: string;
  label: string;
}

const Modals = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  selectedItem,
  onAddClose,
  onEditClose,
  onDeleteClose,
  onSuccess,
}: ModalsProps) => {
  const [addForm, setAddForm] = useState({ name: "", description: "" });
  const [editForm, setEditForm] = useState({ name: "", description: "", status: "Active" });
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // ✅ Existing specializations for dropdown suggestions
  const [specializationOptions, setSpecializationOptions] = useState<SelectOption[]>([]);

  const getAuthHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });

  // ✅ Fetch all specializations for dropdown
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/specializations`, {
          headers: getAuthHeaders(),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          const options = data.data.map((s: Specialization) => ({
            value: s.name,
            label: s.name,
          }));
          setSpecializationOptions(options);
        }
      } catch (err) {
        console.error("Failed to fetch specializations:", err);
      }
    };
    fetchOptions();
  }, [showAddModal, showEditModal]); // modal उघडताना refresh करा

  // Edit modal खुली झाली की selectedItem चा data भर
  useEffect(() => {
    if (showEditModal && selectedItem) {
      setEditForm({
        name: selectedItem.name,
        description: selectedItem.description || "",
        status: selectedItem.status,
      });
    }
  }, [showEditModal, selectedItem]);

  // Add modal बंद झाली की form reset कर
  useEffect(() => {
    if (!showAddModal) {
      setAddForm({ name: "", description: "" });
    }
  }, [showAddModal]);

  // ===== ADD =====
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addForm.name.trim()) {
      message.error("Specialization name is required");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/specializations`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(addForm),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        message.success("Specialization added successfully!");
        onAddClose();
        onSuccess();
      } else {
        message.error(data.message || "Failed to add specialization");
      }
    } catch {
      message.error("Server error. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // ===== EDIT =====
  const handleEditSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm.name.trim()) {
      message.error("Specialization name is required");
      return;
    }
    if (!selectedItem) return;
    setSaving(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/specializations/${selectedItem._id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        message.success("Specialization updated successfully!");
        onEditClose();
        onSuccess();
      } else {
        message.error(data.message || "Failed to update");
      }
    } catch {
      message.error("Server error. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // ===== DELETE =====
  const handleDelete = async () => {
    if (!selectedItem) return;
    setDeleting(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/specializations/${selectedItem._id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        message.success("Specialization deleted successfully!");
        onDeleteClose();
        onSuccess();
      } else {
        message.error(data.message || "Failed to delete");
      }
    } catch {
      message.error("Server error. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  // ✅ CreatableSelect custom styles - Bootstrap शी match करणारे
  const selectStyles = {
    control: (base: any) => ({
      ...base,
      borderColor: "#dee2e6",
      borderRadius: "0.375rem",
      minHeight: "38px",
      boxShadow: "none",
      "&:hover": { borderColor: "#86b7fe" },
    }),
    menu: (base: any) => ({
      ...base,
      zIndex: 9999,
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#0d6efd"
        : state.isFocused
          ? "#e8f0fe"
          : "white",
      color: state.isSelected ? "white" : "#212529",
      cursor: "pointer",
    }),
  };

  return (
    <>
      {/* ===== Add Modal ===== */}
      {showAddModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="text-dark modal-title fw-bold">Add New Specialization</h4>
                <button
                  type="button"
                  className="btn-close btn-close-modal custom-btn-close"
                  onClick={onAddClose}
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form onSubmit={handleAdd}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">
                      Specialization <span className="text-danger ms-1">*</span>
                    </label>
                    {/* ✅ CreatableSelect - dropdown + type करताना suggestions */}
                    <CreatableSelect
                      isClearable
                      options={specializationOptions}
                      styles={selectStyles}
                      placeholder="Type or select a specialization..."
                      // ✅ formatCreateLabel - नवीन नाव टाइप केल्यावर "Create" option
                      formatCreateLabel={(inputValue) => `✨ Add new: "${inputValue}"`}
                      value={addForm.name ? { value: addForm.name, label: addForm.name } : null}
                      onChange={(option) => {
                        setAddForm({ ...addForm, name: option ? option.value : "" });
                      }}
                      onInputChange={(inputValue) => {
                        // Type करताना directly name update करा
                        if (inputValue) setAddForm((prev) => ({ ...prev, name: inputValue }));
                      }}
                    />
                    <small className="text-muted fs-12 mt-1 d-block">
                      Existing specializations select करा किंवा नवीन नाव type करा
                    </small>
                  </div>
                  <div className="mb-0">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Enter description (optional)"
                      value={addForm.description}
                      onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
                    />
                  </div>
                </div>
                <div className="modal-footer d-flex align-items-center gap-1">
                  <button type="button" className="btn btn-light border" onClick={onAddClose}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={saving}>
                    {saving ? (
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
      )}

      {/* ===== Edit Modal ===== */}
      {showEditModal && selectedItem && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="text-dark modal-title fw-bold">Edit Specialization</h4>
                <button
                  type="button"
                  className="btn-close btn-close-modal custom-btn-close"
                  onClick={onEditClose}
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form onSubmit={handleEditSave}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">
                      Specialization <span className="text-danger ms-1">*</span>
                    </label>
                    {/* ✅ Edit मध्ये पण CreatableSelect */}
                    <CreatableSelect
                      isClearable
                      options={specializationOptions.filter(
                        (o) => o.value !== selectedItem.name // current name exclude करा
                      )}
                      styles={selectStyles}
                      placeholder="Type or select a specialization..."
                      formatCreateLabel={(inputValue) => `✨ Rename to: "${inputValue}"`}
                      value={
                        editForm.name
                          ? { value: editForm.name, label: editForm.name }
                          : null
                      }
                      onChange={(option) => {
                        setEditForm({ ...editForm, name: option ? option.value : "" });
                      }}
                      onInputChange={(inputValue) => {
                        if (inputValue) setEditForm((prev) => ({ ...prev, name: inputValue }));
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    />
                  </div>
                  <div className="mb-0">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      value={editForm.status}
                      onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer d-flex align-items-center gap-1">
                  <button type="button" className="btn btn-white border" onClick={onEditClose}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={saving}>
                    {saving ? (
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
      )}

      {/* ===== Delete Modal ===== */}
      {showDeleteModal && selectedItem && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
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
                <p className="mb-1">Are you sure want to delete</p>
                <p className="fw-semibold text-danger mb-3">"{selectedItem.name}"?</p>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-light position-relative z-1"
                    onClick={onDeleteClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger position-relative z-1"
                    onClick={handleDelete}
                    disabled={deleting}
                  >
                    {deleting ? (
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
      )}
    </>
  );
};

export default Modals;