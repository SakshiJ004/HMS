// import { Link } from "react-router";
// import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import { City, Country, State } from "../../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../../core/common/common-select/commonSelect";

// const ProfileSettings = () => {
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content" id="profilePage">
//           {/* Page Header */}
//           <div className="mb-3 border-bottom pb-3">
//             <h4 className="fw-bold mb-0">Settings</h4>
//           </div>
//           {/* End Page Header */}
//           <div className="card">
//             <div className="card-body p-0">
//               <div className="settings-wrapper d-flex">
//                 {/* Start Settings Sidebar */}
//                 <SettingsSidebar />
//                 {/* End Settings Sidebar */}
//                 <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
//                   <div className="card-header border-bottom px-0 mx-3">
//                     <h5 className="fw-bold">Basic Information</h5>
//                   </div>
//                   <div className="card-body px-0 mx-3">
//                     <form>
//                       {/* start row */}
//                       <div className="row border-bottom mb-3">
//                         <div className="col-lg-12">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-2">
//                               <label className="form-label mb-0">
//                                 Profile Image
//                                 <span className="text-danger ms-1">*</span>
//                               </label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-10">
//                               <div className="profile-container">
//                                 <ImageWithBasePath
//                                   src="assets/img/users/user-08.jpg"
//                                   alt="Profile"
//                                 />
//                                 <div className="overlay-btn">
//                                   <Link
//                                     to="#"
//                                     className="text-white"
//                                     id="uploadTrigger"
//                                   >
//                                     <i className="ti ti-photo fs-10" />
//                                   </Link>
//                                 </div>
//                                 <input
//                                   type="file"
//                                   id="profileUpload"
//                                   style={{ display: "none" }}
//                                 />
//                               </div>
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">
//                                 First Name
//                                 <span className="text-danger ms-1">*</span>
//                               </label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <input type="text" className="form-control" />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">
//                                 Last Name
//                                 <span className="text-danger ms-1">*</span>
//                               </label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <input type="text" className="form-control" />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">
//                                 Email<span className="text-danger ms-1">*</span>
//                               </label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <input type="text" className="form-control" />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">
//                                 Phone Number
//                                 <span className="text-danger ms-1">*</span>
//                               </label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <input type="text" className="form-control" />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                       </div>
//                       {/* end row */}
//                       {/* start row */}
//                       <div className="row border-bottom mb-3">
//                         <div className="mb-3">
//                           <h5 className="fw-bold mb-0">Address Information</h5>
//                         </div>
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">
//                                 Address Line 1
//                               </label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <input type="text" className="form-control" />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">
//                                 Address Line 2
//                               </label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <input type="text" className="form-control" />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">Country</label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <CommonSelect
//                                 options={Country}
//                                 className="select"
//                                 defaultValue={Country[0]}
//                               />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">State</label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <CommonSelect
//                                 options={State}
//                                 className="select"
//                                 defaultValue={State[0]}
//                               />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">City</label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <CommonSelect
//                                 options={City}
//                                 className="select"
//                                 defaultValue={City[0]}
//                               />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                         <div className="col-lg-6">
//                           {/* start row */}
//                           <div className="row align-items-center mb-3">
//                             <div className="col-lg-4">
//                               <label className="form-label mb-0">Pincode</label>
//                             </div>
//                             {/* end col */}
//                             <div className="col-lg-8">
//                               <input type="text" className="form-control" />
//                             </div>
//                             {/* end col */}
//                           </div>
//                           {/* end row */}
//                         </div>
//                         {/* end col */}
//                       </div>
//                       {/* end row */}
//                       <div className="d-flex align-items-center justify-content-end">
//                         <Link to="#" className="btn btn-light me-3">
//                           Cancel
//                         </Link>
//                         <Link to="#" className="btn btn-primary">
//                           Save Changes
//                         </Link>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end card body */}
//           </div>
//           {/* end card */}
//         </div>
//         {/* End Content */}
//         {/* Footer Start */}
//         <div className="footer text-center bg-white p-2 border-top">
//           <p className="text-dark mb-0">
//             2025 ©
//             <Link to="#" className="link-primary">
//               Preclinic
//             </Link>
//             , All Rights Reserved
//           </p>
//         </div>
//         {/* Footer End */}
//       </div>
//       {/* ========================
// 			End Page Content
// 		========================= */}
//     </>
//   );
// };

// export default ProfileSettings;



import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import {
  getProfile,
  updateProfile,
  changePassword,
  type IProfile,
  type UpdateProfilePayload,
} from "../../../../../../api/profileService";
import {
  getCountriesDropdown,
  getStatesByCountry,
  getCitiesByState,
  type ICountry,
  type IState,
  type ICity,
} from "../../../../../../api/contentLocationService";

// ─── Helper: get current user from localStorage ───────────────────────────────
// Adjust this if your app stores user differently (Redux, Context, etc.)
const syncUserToStorage = (updatedUser: IProfile) => {
  try {
    const raw = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (raw) {
      const parsed = JSON.parse(raw);
      const merged = { ...parsed, ...updatedUser };
      if (localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify(merged));
      } else {
        sessionStorage.setItem("user", JSON.stringify(merged));
      }
    }
  } catch {
    // silent
  }
};

// ─── Toast notification ───────────────────────────────────────────────────────
const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "danger";
  onClose: () => void;
}) => (
  <div
    className={`alert alert-${type} alert-dismissible d-flex align-items-center`}
    style={{ position: "fixed", top: 20, right: 20, zIndex: 9999, minWidth: 300 }}
  >
    <i className={`ti ti-${type === "success" ? "check" : "alert-circle"} me-2`} />
    {message}
    <button type="button" className="btn-close ms-auto" onClick={onClose} />
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const ProfileSettings = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Profile form state ──────────────────────────────────────────────────────
  const [_profile, setProfile] = useState<IProfile | null>(null);
  const [form, setForm] = useState<UpdateProfilePayload & { email: string }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    profileImage: "",
  });
  const [imagePreview, setImagePreview] = useState<string>("");

  // ── Password form state ─────────────────────────────────────────────────────
  const [pwForm, setPwForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // ── Location dropdowns ──────────────────────────────────────────────────────
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // ── UI states ───────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingPw, setSavingPw] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "danger" } | null>(null);

  const showToast = (message: string, type: "success" | "danger" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // ── Load profile + countries on mount ──────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      try {
        const [profileData, countryList] = await Promise.all([
          getProfile(),
          getCountriesDropdown(),
        ]);
        setProfile(profileData);
        setCountries(countryList);

        // Populate form
        const addr = profileData.address || {};
        const nameParts = profileData.fullName?.split(" ") || [];
        setForm({
          firstName: profileData.firstName || nameParts[0] || "",
          lastName: profileData.lastName || nameParts.slice(1).join(" ") || "",
          email: profileData.email || "",
          phone: profileData.phone || "",
          address1: addr.address1 || "",
          address2: addr.address2 || "",
          country: addr.country || "",
          state: addr.state || "",
          city: addr.city || "",
          pincode: addr.pincode || "",
          profileImage: profileData.profileImage || "",
        });
        setImagePreview(profileData.profileImage || "");

        // Load states if country is set
        if (addr.country) {
          const countryObj = countryList.find(
            (c) => c.name === addr.country || c._id === addr.country
          );
          if (countryObj) {
            const stateList = await getStatesByCountry(countryObj._id);
            setStates(stateList as any);

            // Load cities if state is set
            if (addr.state) {
              const stateObj = (stateList as any[]).find(
                (s: any) => s.name === addr.state || s._id === addr.state
              );
              if (stateObj) {
                const cityList = await getCitiesByState(stateObj._id);
                setCities(cityList as any);
              }
            }
          }
        }
      } catch {
        showToast("Failed to load profile data.", "danger");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // ── Country change → load states ───────────────────────────────────────────
  const handleCountryChange = async (countryId: string, countryName: string) => {
    setForm((p) => ({ ...p, country: countryName, state: "", city: "" }));
    setStates([]);
    setCities([]);
    if (!countryId) return;
    setLoadingStates(true);
    try {
      const stateList = await getStatesByCountry(countryId);
      setStates(stateList as any);
    } catch {
      setStates([]);
    } finally {
      setLoadingStates(false);
    }
  };

  // ── State change → load cities ──────────────────────────────────────────────
  const handleStateChange = async (stateId: string, stateName: string) => {
    setForm((p) => ({ ...p, state: stateName, city: "" }));
    setCities([]);
    if (!stateId) return;
    setLoadingCities(true);
    try {
      const cityList = await getCitiesByState(stateId);
      setCities(cityList as any);
    } catch {
      setCities([]);
    } finally {
      setLoadingCities(false);
    }
  };

  // ── Image upload ────────────────────────────────────────────────────────────
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setImagePreview(base64);
      setForm((p) => ({ ...p, profileImage: base64 }));
    };
    reader.readAsDataURL(file);
  };

  // ── Save profile ────────────────────────────────────────────────────────────
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName?.trim()) return showToast("First name is required.", "danger");
    if (!form.lastName?.trim()) return showToast("Last name is required.", "danger");

    setSaving(true);
    try {
      const { email, ...payload } = form; // email is read-only
      const updated = await updateProfile(payload);
      setProfile(updated);
      syncUserToStorage(updated); // sync to localStorage
      showToast("Profile updated successfully!");
    } catch (err: any) {
      showToast(err?.response?.data?.message || "Failed to update profile.", "danger");
    } finally {
      setSaving(false);
    }
  };

  // ── Change password ─────────────────────────────────────────────────────────
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pwForm.currentPassword) return showToast("Current password is required.", "danger");
    if (!pwForm.newPassword) return showToast("New password is required.", "danger");
    if (pwForm.newPassword.length < 6) return showToast("Password must be at least 6 characters.", "danger");
    if (pwForm.newPassword !== pwForm.confirmPassword) return showToast("Passwords do not match.", "danger");

    setSavingPw(true);
    try {
      await changePassword(pwForm);
      setPwForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      showToast("Password changed successfully!");
    } catch (err: any) {
      showToast(err?.response?.data?.message || "Failed to change password.", "danger");
    } finally {
      setSavingPw(false);
    }
  };

  // ── Build dropdown options ──────────────────────────────────────────────────
  const countryOptions = countries.map((c) => ({
    label: c.name,
    value: c._id,
    name: c.name,
  }));
  const stateOptions = states.map((s: any) => ({
    label: s.name,
    value: s._id,
    name: s.name,
  }));
  const cityOptions = cities.map((c: any) => ({
    label: c.name,
    value: c._id,
    name: c.name,
  }));

  // Find selected options
  const selectedCountry =
    countryOptions.find((c) => c.name === form.country) ?? null;
  const selectedState =
    stateOptions.find((s) => s.name === form.state) ?? null;
  const selectedCity =
    cityOptions.find((c) => c.name === form.city) ?? null;

  // ── Loading skeleton ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content d-flex align-items-center justify-content-center" style={{ minHeight: 400 }}>
          <div className="spinner-border text-primary" />
        </div>
      </div>
    );
  }

  // ── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="page-wrapper">
        <div className="content" id="profilePage">
          {/* Page Header */}
          <div className="mb-3 border-bottom pb-3">
            <h4 className="fw-bold mb-0">Settings</h4>
          </div>

          <div className="card">
            <div className="card-body p-0">
              <div className="settings-wrapper d-flex">
                {/* Settings Sidebar */}
                <SettingsSidebar />

                <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                  {/* ══ BASIC INFORMATION ══════════════════════════════════ */}
                  <div className="card-header border-bottom px-0 mx-3">
                    <h5 className="fw-bold">Basic Information</h5>
                  </div>
                  <div className="card-body px-0 mx-3">
                    <form onSubmit={handleSaveProfile}>
                      {/* ── Profile Image ─────────────────────────────── */}
                      <div className="row border-bottom mb-3">
                        <div className="col-lg-12">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-2">
                              <label className="form-label mb-0">
                                Profile Image
                                <span className="text-danger ms-1">*</span>
                              </label>
                            </div>
                            <div className="col-lg-10">
                              <div className="profile-container" style={{ position: "relative", display: "inline-block" }}>
                                {imagePreview ? (
                                  <img
                                    src={imagePreview}
                                    alt="Profile"
                                    style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }}
                                  />
                                ) : (
                                  <ImageWithBasePath
                                    src="assets/img/users/user-08.jpg"
                                    alt="Profile"
                                  />
                                )}
                                <div
                                  className="overlay-btn"
                                  style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    background: "#4f46e5",
                                    borderRadius: "50%",
                                    width: 24,
                                    height: 24,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => fileInputRef.current?.click()}
                                >
                                  <i className="ti ti-photo fs-10 text-white" />
                                </div>
                                <input
                                  type="file"
                                  ref={fileInputRef}
                                  accept="image/*"
                                  style={{ display: "none" }}
                                  onChange={handleImageChange}
                                />
                              </div>
                              <p className="text-muted fs-12 mt-2 mb-0">
                                Click the icon to upload. JPG, PNG (Max 5MB)
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* First Name */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">
                                First Name <span className="text-danger ms-1">*</span>
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="text"
                                className="form-control"
                                value={form.firstName}
                                onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                                placeholder="Enter first name"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Last Name */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">
                                Last Name <span className="text-danger ms-1">*</span>
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="text"
                                className="form-control"
                                value={form.lastName}
                                onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
                                placeholder="Enter last name"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Email — Read only */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">
                                Email <span className="text-danger ms-1">*</span>
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="email"
                                className="form-control bg-light"
                                value={form.email}
                                readOnly
                                title="Email cannot be changed here"
                              />
                              <small className="text-muted fs-12">Email cannot be changed</small>
                            </div>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">
                                Phone Number <span className="text-danger ms-1">*</span>
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="tel"
                                className="form-control"
                                value={form.phone}
                                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                                placeholder="Enter phone number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ── Address Information ────────────────────────── */}
                      <div className="row border-bottom mb-3">
                        <div className="mb-3">
                          <h5 className="fw-bold mb-0">Address Information</h5>
                        </div>

                        {/* Address 1 */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">Address Line 1</label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="text"
                                className="form-control"
                                value={form.address1}
                                onChange={(e) => setForm((p) => ({ ...p, address1: e.target.value }))}
                                placeholder="Street address"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Address 2 */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">Address Line 2</label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="text"
                                className="form-control"
                                value={form.address2}
                                onChange={(e) => setForm((p) => ({ ...p, address2: e.target.value }))}
                                placeholder="Apartment, suite, etc."
                              />
                            </div>
                          </div>
                        </div>

                        {/* Country — Real DB dropdown */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">Country</label>
                            </div>
                            <div className="col-lg-8">
                              <CommonSelect
                                options={countryOptions}
                                className="select"
                                placeholder="Select Country"
                                value={selectedCountry}
                                onChange={(opt: any) =>
                                  handleCountryChange(opt?.value ?? "", opt?.name ?? "")
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* State — loads based on country */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">State</label>
                            </div>
                            <div className="col-lg-8">
                              <CommonSelect
                                options={stateOptions}
                                className="select"
                                placeholder={
                                  loadingStates
                                    ? "Loading..."
                                    : !form.country
                                      ? "Select country first"
                                      : "Select State"
                                }
                                value={selectedState}
                                isDisabled={!form.country || loadingStates}
                                onChange={(opt: any) =>
                                  handleStateChange(opt?.value ?? "", opt?.name ?? "")
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* City — loads based on state */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">City</label>
                            </div>
                            <div className="col-lg-8">
                              <CommonSelect
                                options={cityOptions}
                                className="select"
                                placeholder={
                                  loadingCities
                                    ? "Loading..."
                                    : !form.state
                                      ? "Select state first"
                                      : "Select City"
                                }
                                value={selectedCity}
                                isDisabled={!form.state || loadingCities}
                                onChange={(opt: any) =>
                                  setForm((p) => ({ ...p, city: opt?.name ?? "" }))
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* Pincode */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">Pincode</label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="text"
                                className="form-control"
                                value={form.pincode}
                                onChange={(e) => setForm((p) => ({ ...p, pincode: e.target.value }))}
                                placeholder="Postal / ZIP code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Save Profile Buttons */}
                      <div className="d-flex align-items-center justify-content-end mb-4">
                        <button
                          type="button"
                          className="btn btn-light me-3"
                          onClick={() => window.location.reload()}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary" disabled={saving}>
                          {saving && <span className="spinner-border spinner-border-sm me-1" />}
                          Save Changes
                        </button>
                      </div>
                    </form>

                    {/* ══ CHANGE PASSWORD ════════════════════════════════ */}
                    <div className="card-header border-bottom px-0 mb-3" style={{ marginLeft: 0 }}>
                      <h5 className="fw-bold">Change Password</h5>
                    </div>
                    <form onSubmit={handleChangePassword}>
                      <div className="row">
                        {/* Current Password */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">
                                Current Password <span className="text-danger">*</span>
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <div className="input-group">
                                <input
                                  type={showPasswords.current ? "text" : "password"}
                                  className="form-control"
                                  placeholder="Enter current password"
                                  value={pwForm.currentPassword}
                                  onChange={(e) =>
                                    setPwForm((p) => ({ ...p, currentPassword: e.target.value }))
                                  }
                                />
                                <button
                                  type="button"
                                  className="input-group-text bg-white"
                                  onClick={() =>
                                    setShowPasswords((p) => ({ ...p, current: !p.current }))
                                  }
                                >
                                  <i className={`ti ti-eye${showPasswords.current ? "-off" : ""}`} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* New Password */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">
                                New Password <span className="text-danger">*</span>
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <div className="input-group">
                                <input
                                  type={showPasswords.new ? "text" : "password"}
                                  className="form-control"
                                  placeholder="Min 6 characters"
                                  value={pwForm.newPassword}
                                  onChange={(e) =>
                                    setPwForm((p) => ({ ...p, newPassword: e.target.value }))
                                  }
                                />
                                <button
                                  type="button"
                                  className="input-group-text bg-white"
                                  onClick={() =>
                                    setShowPasswords((p) => ({ ...p, new: !p.new }))
                                  }
                                >
                                  <i className={`ti ti-eye${showPasswords.new ? "-off" : ""}`} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-lg-4">
                              <label className="form-label mb-0">
                                Confirm Password <span className="text-danger">*</span>
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <div className="input-group">
                                <input
                                  type={showPasswords.confirm ? "text" : "password"}
                                  className="form-control"
                                  placeholder="Repeat new password"
                                  value={pwForm.confirmPassword}
                                  onChange={(e) =>
                                    setPwForm((p) => ({ ...p, confirmPassword: e.target.value }))
                                  }
                                />
                                <button
                                  type="button"
                                  className="input-group-text bg-white"
                                  onClick={() =>
                                    setShowPasswords((p) => ({ ...p, confirm: !p.confirm }))
                                  }
                                >
                                  <i className={`ti ti-eye${showPasswords.confirm ? "-off" : ""}`} />
                                </button>
                              </div>
                              {/* Password match indicator */}
                              {pwForm.confirmPassword && (
                                <small
                                  className={`fs-12 ${pwForm.newPassword === pwForm.confirmPassword
                                      ? "text-success"
                                      : "text-danger"
                                    }`}
                                >
                                  {pwForm.newPassword === pwForm.confirmPassword
                                    ? "✓ Passwords match"
                                    : "✗ Passwords do not match"}
                                </small>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-end">
                        <button
                          type="button"
                          className="btn btn-light me-3"
                          onClick={() =>
                            setPwForm({
                              currentPassword: "",
                              newPassword: "",
                              confirmPassword: "",
                            })
                          }
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary" disabled={savingPw}>
                          {savingPw && <span className="spinner-border spinner-border-sm me-1" />}
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;