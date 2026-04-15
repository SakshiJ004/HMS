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

import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import { useState, useEffect } from "react";
import { getProfile, updateProfile, type IProfile, type UpdateProfilePayload } from "../../../../../../api/profileService";
import { message } from "antd";

const ProfileSettings = () => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [_profile, setProfile] = useState<IProfile | null>(null);
  const [profileImage, setProfileImage] = useState<string>("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: ""
  });

  // Fetch profile on mount
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await getProfile();

      if (response.success && response.data) {
        const user = response.data;
        setProfile(user);
        setProfileImage(user.profileImage || "");

        setFormData({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          phone: user.phone || "",
          address1: user.address?.address1 || "",
          address2: user.address?.address2 || "",
          country: user.address?.country || "",
          state: user.address?.state || "",
          city: user.address?.city || "",
          pincode: user.address?.pincode || ""
        });
      } else {
        message.error('Failed to load profile');
      }
    } catch (error) {
      console.error('Fetch profile error:', error);
      message.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        message.error('Image size should be less than 5MB');
        return;
      }

      // Check file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        message.error('Please upload a valid image (JPEG, PNG, GIF, WebP)');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        message.success('Image selected! Click "Save Changes" to update.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      message.error('First name and last name are required');
      return;
    }

    setSubmitting(true);

    try {
      const payload: UpdateProfilePayload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: formData.phone.trim(),
        profileImage: profileImage,
        address1: formData.address1.trim(),
        address2: formData.address2.trim(),
        country: formData.country.trim(),
        state: formData.state.trim(),
        city: formData.city.trim(),
        pincode: formData.pincode.trim()
      };

      console.log('📤 Updating profile:', payload);

      const response = await updateProfile(payload);

      if (response.success && response.data) {
        message.success('Profile updated successfully!');

        // ✅ Update localStorage with new user data
        const updatedUser = {
          _id: response.data._id,
          fullName: response.data.fullName,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phone: response.data.phone,
          role: response.data.role,
          profileImage: response.data.profileImage,
          address: response.data.address
        };

        localStorage.setItem('user', JSON.stringify(updatedUser));
        console.log('✅ localStorage updated:', updatedUser);

        // ✅ Trigger custom event to update header
        window.dispatchEvent(new Event('userProfileUpdated'));

        // ✅ Refresh profile data
        await fetchProfile();

        // ✅ Force page reload after 1 second to update header
        setTimeout(() => {
          window.location.reload();
        }, 1000);

      } else {
        message.error(response.message || 'Failed to update profile');
      }
    } catch (error: any) {
      console.error('❌ Update error:', error);
      message.error(error.message || 'Failed to update profile');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    fetchProfile(); // Reset form to original values
    message.info('Changes cancelled');
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
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

              {/* Main Content */}
              <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                <div className="card-header border-bottom px-0 mx-3">
                  <h5 className="fw-bold">Basic Information</h5>
                </div>
                <div className="card-body px-0 mx-3">
                  <form onSubmit={handleSubmit}>
                    {/* Profile Image Section */}
                    <div className="row border-bottom mb-3">
                      <div className="col-lg-12">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-2">
                            <label className="form-label mb-0">
                              Profile Image
                            </label>
                          </div>
                          <div className="col-lg-10">
                            <div className="d-flex align-items-center">
                              <div className="profile-container position-relative me-3">
                                <img
                                  src={profileImage || "assets/img/users/user-placeholder.jpg"}
                                  alt="Profile"
                                  className="rounded-circle border"
                                  style={{
                                    width: '120px',
                                    height: '120px',
                                    objectFit: 'cover'
                                  }}
                                />
                                <div className="position-absolute bottom-0 end-0">
                                  <label
                                    htmlFor="profileUpload"
                                    className="btn btn-primary btn-sm rounded-circle shadow"
                                    style={{
                                      cursor: 'pointer',
                                      width: '36px',
                                      height: '36px',
                                      padding: 0,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                  >
                                    <i className="ti ti-camera fs-18" />
                                  </label>
                                </div>
                                <input
                                  type="file"
                                  id="profileUpload"
                                  style={{ display: "none" }}
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                />
                              </div>
                              <div>
                                <p className="mb-1 text-muted">
                                  <small>Allowed formats: JPG, PNG, GIF</small>
                                </p>
                                <p className="mb-0 text-muted">
                                  <small>Max size: 5MB</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Basic Info */}
                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">
                              First Name
                              <span className="text-danger ms-1">*</span>
                            </label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              placeholder="Enter first name"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">
                              Last Name
                              <span className="text-danger ms-1">*</span>
                            </label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              placeholder="Enter last name"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">
                              Email
                              <span className="text-danger ms-1">*</span>
                            </label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="email"
                              className="form-control bg-light"
                              value={formData.email}
                              disabled
                              title="Email cannot be changed"
                            />
                            <small className="text-muted">
                              <i className="ti ti-lock me-1" />
                              Email cannot be changed for security reasons
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">
                              Phone Number
                            </label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="tel"
                              className="form-control"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Address Section */}
                    <div className="row border-bottom mb-3">
                      <div className="mb-3">
                        <h5 className="fw-bold mb-0">
                          <i className="ti ti-map-pin me-2" />
                          Address Information
                        </h5>
                      </div>

                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">Address Line 1</label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              value={formData.address1}
                              onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                              placeholder="Street address"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">Address Line 2</label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              value={formData.address2}
                              onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                              placeholder="Apartment, suite, etc."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">Country</label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              value={formData.country}
                              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                              placeholder="Enter country"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">State</label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              value={formData.state}
                              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                              placeholder="Enter state"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">City</label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              placeholder="Enter city"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">Pincode</label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              className="form-control"
                              value={formData.pincode}
                              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                              placeholder="Enter pincode"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex align-items-center justify-content-end">
                      <button
                        type="button"
                        className="btn btn-light me-3"
                        onClick={handleCancel}
                        disabled={submitting}
                      >
                        <i className="ti ti-x me-1" />
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <i className="ti ti-device-floppy me-1" />
                            Save Changes
                          </>
                        )}
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
          2025 ©
          <Link to="#" className="link-primary">
            Preclinic
          </Link>
          , All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default ProfileSettings;