// import { Link } from "react-router";
// import {
//   Category,
//   StatusActive,
// } from "../../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
// import PredefinedDatePicker from "../../../../../../core/common/datePicker";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import { all_routes } from "../../../../../routes/all_routes";

// const Modals = () => {
//   return (
//     <>
//       {/* Start Add Categories */}
//       <div id="add_categories" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="text-dark modal-title">Add New Category</h5>
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
//                 <div className="mb-2">
//                   <label className="form-label">
//                     Category Name<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={Category}
//                     className="select"
//                     defaultValue={Category[0]}
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">
//                     Date<span className="text-danger ms-1">*</span>
//                   </label>
//                   <div className="position-relative report-rangepicker">
//                     <PredefinedDatePicker />
//                     <span className="input-icon-addon fs-16 text-gray-9">
//                       <i className="ti ti-calendar" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">
//                     Status<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={StatusActive}
//                     className="select"
//                     defaultValue={StatusActive[0]}
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
//                   Add Category
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Categories */}
//       {/* Start Edit Categories */}
//       <div id="edit_categories" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="text-dark modal-title">Edit Category</h5>
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
//                 <div className="mb-2">
//                   <label className="form-label">
//                     Category Name<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={Category}
//                     className="select"
//                     defaultValue={Category[1]}
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">
//                     Date<span className="text-danger ms-1">*</span>
//                   </label>
//                   <div className="report-rangepicker position-relative">
//                     <PredefinedDatePicker />
//                     <span className="input-icon-addon fs-16 text-gray-9">
//                       <i className="ti ti-calendar" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">
//                     Status<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={StatusActive}
//                     className="select"
//                     defaultValue={StatusActive[0]}
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
//       <div className="modal fade" id="delete_categories">
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
//               <p className="mb-3">
//                 Are you sure, you want to delete Blog Category?
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
//                   to={all_routes.blogCategories}
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



import { StatusActive } from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { useState, useEffect } from "react";
import { createCategory, updateCategory, type CategoryPayload,  } from "../../../../../../api/blogCategoryService";
import { message } from "antd";

interface ModalsProps {
  showAddModal: boolean;
  showEditModal: boolean;
  showDeleteModal: boolean;
  currentCategory: any;
  onCloseAdd: () => void;
  onCloseEdit: () => void;
  onCloseDelete: () => void;
  onAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const Modals = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  currentCategory,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onAdd,
  onEdit,
  onDelete
}: ModalsProps) => {
  const [addFormData, setAddFormData] = useState({
    name: "",
    description: "",
    status: "Active"
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    status: "Active"
  });

  const [loading, setLoading] = useState(false);

  // Update edit form when currentCategory changes
  useEffect(() => {
    if (currentCategory && showEditModal) {
      setEditFormData({
        name: currentCategory.name || "",
        description: currentCategory.description || "",
        status: currentCategory.status || "Active"
      });
    }
  }, [currentCategory, showEditModal]);

  // Handle Add Submit
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!addFormData.name.trim()) {
      message.error('Please enter category name');
      return;
    }

    setLoading(true);

    try {
      const categoryData: CategoryPayload = {
        name: addFormData.name,
        description: addFormData.description,
        status: addFormData.status
      };

      const response = await createCategory(categoryData);

      if (response.success) {
        message.success('Category created successfully!');
        setAddFormData({ name: "", description: "", status: "Active" });
        onAdd();
      } else {
        message.error(response.message || 'Failed to create category');
      }
    } catch (error: any) {
      console.error('Error:', error);
      message.error(error.message || 'Failed to create category');
    } finally {
      setLoading(false);
    }
  };

  // Handle Edit Submit
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editFormData.name.trim()) {
      message.error('Please enter category name');
      return;
    }

    if (!currentCategory) return;

    setLoading(true);

    try {
      const categoryData: CategoryPayload = {
        name: editFormData.name,
        description: editFormData.description,
        status: editFormData.status
      };

      const response = await updateCategory(currentCategory._id, categoryData);

      if (response.success) {
        message.success('Category updated successfully!');
        onEdit();
      } else {
        message.error(response.message || 'Failed to update category');
      }
    } catch (error: any) {
      console.error('Error:', error);
      message.error(error.message || 'Failed to update category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Add Modal */}
      <div
        className={`modal fade ${showAddModal ? "show" : ""}`}
        style={{ display: showAddModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title">Add New Category</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                onClick={onCloseAdd}
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Category Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={addFormData.name}
                    onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })}
                    placeholder="Enter category name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={addFormData.description}
                    onChange={(e) => setAddFormData({ ...addFormData, description: e.target.value })}
                    placeholder="Enter description (optional)"
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    defaultValue={StatusActive[0]}
                    onChange={(option: any) =>
                      setAddFormData({ ...addFormData, status: option?.value || "Active" })
                    }
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Adding...' : 'Add Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showAddModal && <div className="modal-backdrop fade show"></div>}

      {/* Edit Modal */}
      <div
        className={`modal fade ${showEditModal ? "show" : ""}`}
        style={{ display: showEditModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title">Edit Category</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                onClick={onCloseEdit}
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Category Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={editFormData.description}
                    onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                    placeholder="Enter description (optional)"
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    value={StatusActive.find(s => s.value === editFormData.status)}
                    onChange={(option: any) =>
                      setEditFormData({ ...editFormData, status: option?.value || "Active" })
                    }
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showEditModal && <div className="modal-backdrop fade show"></div>}

      {/* Delete Modal */}
      <div
        className={`modal fade ${showDeleteModal ? "show" : ""}`}
        style={{ display: showDeleteModal ? "block" : "none" }}
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
              <p className="mb-3">Are you sure you want to delete this category?</p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light position-relative z-1 me-3"
                  onClick={onCloseDelete}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger position-relative z-1"
                  onClick={onDelete}
                >
                  Yes, Delete
                </button>
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