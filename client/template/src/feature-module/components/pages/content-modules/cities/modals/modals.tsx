// import { Link } from "react-router";
// import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
// import {
//   City,
//   Country_Name,
//   State,
//   StatusActive,
// } from "../../../../../../core/common/selectOption";
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
//               <h5 className="text-dark modal-title">Add New City</h5>
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
//                 <div className="mb-2">
//                   <label className="form-label">
//                     City<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={City}
//                     className="select"
//                     defaultValue={City[0]}
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
//                   Add City
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
//               <h5 className="text-dark modal-title">Edit New City</h5>
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
//                 <div className="mb-2">
//                   <label className="form-label">
//                     City<span className="text-danger ms-1">*</span>
//                   </label>
//                   <CommonSelect
//                     options={City}
//                     className="select"
//                     defaultValue={City[1]}
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
//                   to={all_routes.cities}
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
  createCity,
  updateCity,
  getCountriesDropdown,
  getStatesByCountry,
  type ICity,
  type ICountry,
  type IState,
} from "../../../../../../api/contentLocationService";

const STATUS_OPTIONS = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

// ─── Shared City Form ─────────────────────────────────────────────────────────
const CityForm = ({
  form,
  setForm,
  countries,
  states,
  onCountryChange,
  loadingStates,
}: {
  form: { countryId: string; stateId: string; name: string; status: string };
  setForm: React.Dispatch<React.SetStateAction<any>>;
  countries: ICountry[];
  states: IState[];
  onCountryChange: (id: string) => void;
  loadingStates: boolean;
}) => {
  const countryOptions = countries.map((c) => ({
    label: `${c.countryCode} — ${c.name}`,
    value: c._id,
  }));
  const stateOptions = states.map((s) => ({ label: s.name, value: s._id }));

  // ✅ FIX: find करून undefined येऊ शकतं, त्यामुळे null fallback द्या
  const selectedCountry =
    countryOptions.find((c) => c.value === form.countryId) ?? null;
  const selectedState =
    stateOptions.find((s) => s.value === form.stateId) ?? null;
  const selectedStatus =
    STATUS_OPTIONS.find((s) => s.value === form.status) ?? STATUS_OPTIONS[0];

  return (
    <>
      <div className="mb-2">
        <label className="form-label">
          Country <span className="text-danger">*</span>
        </label>
        <CommonSelect
          options={countryOptions}
          className="select"
          placeholder="Select Country"
          value={selectedCountry}
          onChange={(opt: any) => {
            setForm((p: any) => ({
              ...p,
              countryId: opt?.value ?? "",
              stateId: "",
            }));
            onCountryChange(opt?.value ?? "");
          }}
        />
      </div>
      <div className="mb-2">
        <label className="form-label">
          State <span className="text-danger">*</span>
        </label>
        <CommonSelect
          options={stateOptions}
          className="select"
          placeholder={loadingStates ? "Loading..." : "Select State"}
          value={selectedState}
          isDisabled={!form.countryId || loadingStates}
          onChange={(opt: any) =>
            setForm((p: any) => ({ ...p, stateId: opt?.value ?? "" }))
          }
        />
      </div>
      <div className="mb-2">
        <label className="form-label">
          City Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. Mumbai"
          value={form.name}
          onChange={(e) =>
            setForm((p: any) => ({ ...p, name: e.target.value }))
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
            setForm((p: any) => ({ ...p, status: opt?.value ?? "Active" }))
          }
        />
      </div>
    </>
  );
};

// ─── Add City Modal ───────────────────────────────────────────────────────────
export const AddCityModal = ({
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
    stateId: "",
    name: "",
    status: "Active",
  });
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (show) {
      getCountriesDropdown()
        .then(setCountries)
        .catch(() => setCountries([]));
    }
  }, [show]);

  const reset = () => {
    setForm({ countryId: "", stateId: "", name: "", status: "Active" });
    setStates([]);
    setError("");
  };

  const handleCountryChange = async (countryId: string) => {
    if (!countryId) {
      setStates([]);
      return;
    }
    setLoadingStates(true);
    try {
      const s = await getStatesByCountry(countryId);
      setStates(s as any);
    } catch {
      setStates([]);
    } finally {
      setLoadingStates(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.countryId) return setError("Please select a country.");
    if (!form.stateId) return setError("Please select a state.");
    if (!form.name.trim()) return setError("City name is required.");
    setSaving(true);
    setError("");
    try {
      await createCity(form);
      onSaved();
      reset();
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Failed to create city.");
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
              <h5 className="text-dark modal-title">Add New City</h5>
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
                <CityForm
                  form={form}
                  setForm={setForm}
                  countries={countries}
                  states={states}
                  onCountryChange={handleCountryChange}
                  loadingStates={loadingStates}
                />
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
                  Add City
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

// ─── Edit City Modal ──────────────────────────────────────────────────────────
export const EditCityModal = ({
  show,
  city,
  onClose,
  onSaved,
}: {
  show: boolean;
  city: ICity | null;
  onClose: () => void;
  onSaved: () => void;
}) => {
  const [form, setForm] = useState({
    countryId: "",
    stateId: "",
    name: "",
    status: "Active",
  });
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (show && city) {
      getCountriesDropdown()
        .then(setCountries)
        .catch(() => setCountries([]));

      const countryId = city.country._id;
      const stateId = city.state._id;
      setForm({
        countryId,
        stateId,
        name: city.name,
        status: city.status,
      });
      setError("");

      setLoadingStates(true);
      getStatesByCountry(countryId)
        .then((s) => setStates(s as any))
        .catch(() => setStates([]))
        .finally(() => setLoadingStates(false));
    }
  }, [city, show]);

  const handleCountryChange = async (countryId: string) => {
    if (!countryId) {
      setStates([]);
      return;
    }
    setLoadingStates(true);
    try {
      const s = await getStatesByCountry(countryId);
      setStates(s as any);
    } catch {
      setStates([]);
    } finally {
      setLoadingStates(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.countryId || !form.stateId || !form.name.trim())
      return setError("All fields are required.");
    if (!city) return;
    setSaving(true);
    setError("");
    try {
      await updateCity(city._id, form);
      onSaved();
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Failed to update.");
    } finally {
      setSaving(false);
    }
  };

  if (!show || !city) return null;
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title">Edit City</h5>
              <button className="btn-close custom-btn-close" onClick={onClose}>
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {error && (
                  <div className="alert alert-danger py-2 fs-13">{error}</div>
                )}
                <CityForm
                  form={form}
                  setForm={setForm}
                  countries={countries}
                  states={states}
                  onCountryChange={handleCountryChange}
                  loadingStates={loadingStates}
                />
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

// ─── Delete City Modal ────────────────────────────────────────────────────────
export const DeleteCityModal = ({
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
                Are you sure you want to delete this city?
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