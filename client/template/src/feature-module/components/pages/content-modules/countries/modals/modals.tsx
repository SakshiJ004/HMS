// import { Link } from "react-router";
// import {
//   Country_Code,
//   Country_Name,
//   StatusActive,
// } from "../../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import { all_routes } from "../../../../../routes/all_routes";

// const Modals = () => {
//   return (
//     <>
//       {/* Start Add Categories */}
//       <div id="add_countries" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="text-dark modal-title">Add New Country</h5>
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
//                     Country Code<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={Country_Code}
//                     className="select"
//                     defaultValue={Country_Code[0]}
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">
//                     Country Name<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={Country_Name}
//                     className="select"
//                     defaultValue={Country_Name[0]}
//                   />
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
//                   Add Country
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Categories */}
//       {/* Start Edit Categories */}
//       <div id="edit_countries" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="text-dark modal-title">Edit New Country</h5>
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
//                     Country Code<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={Country_Code}
//                     className="select"
//                     defaultValue={Country_Code[1]}
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">
//                     Country Name<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={Country_Name}
//                     className="select"
//                     defaultValue={Country_Name[1]}
//                   />
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">
//                     Status<span className="text-danger ms-1">*</span>
//                   </label>
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
//       <div className="modal fade" id="delete_countries">
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
//                   to={all_routes.countries}
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
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import {
  createCountry,
  updateCountry,
  type ICountry,
} from "../../../../../../api/contentLocationService";

const STATUS_OPTIONS = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

// ─── Add Country Modal ────────────────────────────────────────────────────────
export const AddCountryModal = ({
  show,
  onClose,
  onSaved,
}: {
  show: boolean;
  onClose: () => void;
  onSaved: () => void;
}) => {
  const [form, setForm] = useState({
    countryCode: "",
    name: "",
    status: "Active",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // ✅ FIX: undefined → null fallback
  const selectedStatus =
    STATUS_OPTIONS.find((s) => s.value === form.status) ?? STATUS_OPTIONS[0];

  const reset = () => {
    setForm({ countryCode: "", name: "", status: "Active" });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.countryCode.trim()) return setError("Country code is required.");
    if (!form.name.trim()) return setError("Country name is required.");
    setSaving(true);
    setError("");
    try {
      await createCountry(form);
      onSaved();
      reset();
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Failed to create country.");
    } finally {
      setSaving(false);
    }
  };

  if (!show) return null;
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title">Add New Country</h5>
              <button
                className="btn-close custom-btn-close"
                onClick={() => {
                  reset();
                  onClose();
                }}
              >
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {error && (
                  <div className="alert alert-danger py-2 fs-13">{error}</div>
                )}
                <div className="mb-2">
                  <label className="form-label">
                    Country Code <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. IN, US, GB"
                    value={form.countryCode}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        countryCode: e.target.value.toUpperCase(),
                      }))
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    Country Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. India"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Status <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={STATUS_OPTIONS}
                    className="select"
                    value={selectedStatus}
                    onChange={(opt: any) =>
                      setForm((p) => ({ ...p, status: opt?.value ?? "Active" }))
                    }
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  onClick={() => {
                    reset();
                    onClose();
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={saving}
                >
                  {saving && (
                    <span className="spinner-border spinner-border-sm me-1" />
                  )}
                  Add Country
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
};

// ─── Edit Country Modal ───────────────────────────────────────────────────────
export const EditCountryModal = ({
  show,
  country,
  onClose,
  onSaved,
}: {
  show: boolean;
  country: ICountry | null;
  onClose: () => void;
  onSaved: () => void;
}) => {
  const [form, setForm] = useState({
    countryCode: "",
    name: "",
    status: "Active",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (country && show) {
      setForm({
        countryCode: country.countryCode,
        name: country.name,
        status: country.status,
      });
      setError("");
    }
  }, [country, show]);

  // ✅ FIX: undefined → null fallback
  const selectedStatus =
    STATUS_OPTIONS.find((s) => s.value === form.status) ?? STATUS_OPTIONS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.countryCode.trim() || !form.name.trim())
      return setError("All fields are required.");
    if (!country) return;
    setSaving(true);
    setError("");
    try {
      await updateCountry(country._id, form);
      onSaved();
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Failed to update.");
    } finally {
      setSaving(false);
    }
  };

  if (!show || !country) return null;
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title">Edit Country</h5>
              <button
                className="btn-close custom-btn-close"
                onClick={onClose}
              >
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {error && (
                  <div className="alert alert-danger py-2 fs-13">{error}</div>
                )}
                <div className="mb-2">
                  <label className="form-label">
                    Country Code <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.countryCode}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        countryCode: e.target.value.toUpperCase(),
                      }))
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    Country Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Status <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={STATUS_OPTIONS}
                    className="select"
                    value={selectedStatus}
                    onChange={(opt: any) =>
                      setForm((p) => ({ ...p, status: opt?.value ?? "Active" }))
                    }
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={saving}
                >
                  {saving && (
                    <span className="spinner-border spinner-border-sm me-1" />
                  )}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
};

// ─── Delete Country Modal ─────────────────────────────────────────────────────
export const DeleteCountryModal = ({
  show,
  onClose,
  onConfirm,
  loading,
}: {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}) => {
  if (!show) return null;
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }}>
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
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1 position-relative z-1">
                Delete Confirmation
              </h5>
              <p className="mb-3 position-relative z-1">
                Are you sure? All related states and cities will also be deleted.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light position-relative z-1 me-3"
                  onClick={onClose}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger position-relative z-1"
                  onClick={onConfirm}
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm me-1" />
                  )}
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
};