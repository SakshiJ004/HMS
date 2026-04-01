// import { Link } from "react-router";
// import { all_routes } from "../../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import {
//   Country_Code,
//   Country_Name,
//   State,
//   StatusActive,
// } from "../../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../../core/common/common-select/commonSelect";

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
//                 <div className="mb-2">
//                   <label className="form-label">
//                     State<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={State}
//                     className="select"
//                     defaultValue={State[0]}
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
//                   Add State
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
//                 <div className="mb-2">
//                   <label className="form-label">
//                     State<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={State}
//                     className="select"
//                     defaultValue={State[1]}
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
//                   to={all_routes.states}
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
  createState,
  updateState,
  getCountriesDropdown,
  type IState,
  type ICountry,
} from "../../../../../../api/contentLocationService";

const STATUS_OPTIONS = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

// ─── Add State Modal ──────────────────────────────────────────────────────────
export const AddStateModal = ({
  show,
  onClose,
  onSaved,
}: {
  show: boolean;
  onClose: () => void;
  onSaved: () => void;
}) => {
  const [form, setForm] = useState({
    countryId: "",
    name: "",
    status: "Active",
  });
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (show) {
      getCountriesDropdown()
        .then(setCountries)
        .catch(() => setCountries([]));
    }
  }, [show]);

  const countryOptions = countries.map((c) => ({
    label: `${c.countryCode} — ${c.name}`,
    value: c._id,
  }));

  // ✅ FIX: undefined → null fallback
  const selectedCountry =
    countryOptions.find((c) => c.value === form.countryId) ?? null;
  const selectedStatus =
    STATUS_OPTIONS.find((s) => s.value === form.status) ?? STATUS_OPTIONS[0];

  const reset = () => {
    setForm({ countryId: "", name: "", status: "Active" });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.countryId) return setError("Please select a country.");
    if (!form.name.trim()) return setError("State name is required.");
    setSaving(true);
    setError("");
    try {
      await createState(form);
      onSaved();
      reset();
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Failed to create state.");
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
              <h5 className="text-dark modal-title">Add New State</h5>
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
                    Country <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={countryOptions}
                    className="select"
                    placeholder="Select Country"
                    value={selectedCountry}
                    onChange={(opt: any) =>
                      setForm((p) => ({ ...p, countryId: opt?.value ?? "" }))
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    State Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Maharashtra"
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
                  Add State
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

// ─── Edit State Modal ─────────────────────────────────────────────────────────
export const EditStateModal = ({
  show,
  state,
  onClose,
  onSaved,
}: {
  show: boolean;
  state: IState | null;
  onClose: () => void;
  onSaved: () => void;
}) => {
  const [form, setForm] = useState({
    countryId: "",
    name: "",
    status: "Active",
  });
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (show) {
      getCountriesDropdown()
        .then(setCountries)
        .catch(() => setCountries([]));
    }
  }, [show]);

  useEffect(() => {
    if (state && show) {
      setForm({
        countryId: state.country._id,
        name: state.name,
        status: state.status,
      });
      setError("");
    }
  }, [state, show]);

  const countryOptions = countries.map((c) => ({
    label: `${c.countryCode} — ${c.name}`,
    value: c._id,
  }));

  // ✅ FIX: undefined → null fallback
  const selectedCountry =
    countryOptions.find((c) => c.value === form.countryId) ?? null;
  const selectedStatus =
    STATUS_OPTIONS.find((s) => s.value === form.status) ?? STATUS_OPTIONS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.countryId || !form.name.trim())
      return setError("All fields are required.");
    if (!state) return;
    setSaving(true);
    setError("");
    try {
      await updateState(state._id, form);
      onSaved();
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Failed to update.");
    } finally {
      setSaving(false);
    }
  };

  if (!show || !state) return null;
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title">Edit State</h5>
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
                    Country <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={countryOptions}
                    className="select"
                    value={selectedCountry}
                    onChange={(opt: any) =>
                      setForm((p) => ({ ...p, countryId: opt?.value ?? "" }))
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    State Name <span className="text-danger">*</span>
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

// ─── Delete State Modal ───────────────────────────────────────────────────────
export const DeleteStateModal = ({
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
                Are you sure? All cities in this state will also be deleted.
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