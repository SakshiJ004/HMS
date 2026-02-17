// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { City, Country, State } from "../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import { all_routes } from "../../../../routes/all_routes";

// const DoctorsProfileSettings = () => {
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Page Header */}
//           <div className="mb-3 border-bottom pb-3">
//             <h4 className="fw-bold mb-0">Settings</h4>
//           </div>
//           {/* End Page Header */}
//           <div className="card" id="profilePage">
//             <div className="card-body">
//               {/* end card body */}
//               <div className="row">
//                 <div className="col-lg-3">
//                   <div className="text-start">
//                     <Link
//                       to={all_routes.doctorsprofilesettings}
//                       className="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1 active w-100 justify-content-start"
//                     >
//                       <i className="ti ti-user-cog me-2 text-primary"> </i>{" "}
//                       Profile Settings
//                     </Link>
//                     <Link
//                       to={all_routes.doctorspasswordsettings}
//                       className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
//                     >
//                       <i className="ti ti-lock-star me-2 text-dark"> </i> Change
//                       Password
//                     </Link>
//                     <Link
//                       to={all_routes.doctorsnotificationsettings}
//                       className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
//                     >
//                       <i className="ti ti-bell me-2 text-dark"></i>{" "}
//                       Notifications
//                     </Link>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-9">
//                   <div className="border-1 border-start ps-4">
//                     <h5 className="fw-bold pb-3 mb-4 border-1 border-bottom">
//                       Basic Information
//                     </h5>
//                     {/* start row */}
//                     <div className="row border-bottom mb-3">
//                       <div className="col-lg-12">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-2">
//                             <label className="form-label mb-0">
//                               Profile Image
//                               <span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-10">
//                             <div className="profile-container">
//                               <ImageWithBasePath
//                                 src="assets/img/users/user-08.jpg"
//                                 alt="Profile"
//                               />
//                               <div className="overlay-btn">
//                                 <Link
//                                   to="#"
//                                   className="text-white"
//                                   id="uploadTrigger"
//                                 >
//                                   <i className="ti ti-photo fs-10" />
//                                 </Link>
//                               </div>
//                               <input
//                                 type="file"
//                                 id="profileUpload"
//                                 style={{ display: "none" }}
//                               />
//                             </div>
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               First Name
//                               <span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input type="text" className="form-control" />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Last Name
//                               <span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input type="text" className="form-control" />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Email<span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input type="text" className="form-control" />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Phone Number
//                               <span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input type="text" className="form-control" />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                     </div>
//                     {/* end row */}
//                     {/* start row */}
//                     <div className="row border-bottom mb-3">
//                       <div className="mb-3">
//                         <h5 className="fw-bold mb-0">Address Information</h5>
//                       </div>
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Address Line 1
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input type="text" className="form-control" />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Address Line 2
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input type="text" className="form-control" />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">Country</label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <CommonSelect
//                               options={Country}
//                               className="select"
//                               defaultValue={Country[0]}
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">State</label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <CommonSelect
//                               options={State}
//                               className="select"
//                               defaultValue={State[0]}
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">City</label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <CommonSelect
//                               options={City}
//                               className="select"
//                               defaultValue={City[0]}
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">Pincode</label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input type="text" className="form-control" />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                     </div>
//                     {/* end row */}
//                     <div className="d-flex justify-content-end align-items-center gap-2">
//                       <Link
//                         to=""
//                         className="btn btn-light btn-md fs-13 fw-medium rounded"
//                       >
//                         Cancel
//                       </Link>
//                       <Link
//                         to=""
//                         className="btn btn-primary btn-md fs-13 fw-medium rounded"
//                       >
//                         Save Changes
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
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

// export default DoctorsProfileSettings;


// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { City, Country, State } from "../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import { all_routes } from "../../../../routes/all_routes";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const DoctorsProfileSettings = () => {
//   const [userData, setUserData] = useState({
//     fullName: "",
//     email: "",
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     addressLine1: "",
//     addressLine2: "",
//     pincode: "",
//     signature: "",
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const handleSave = async () => {
//     try {
//       setSaving(true);
//       const token = localStorage.getItem('token');
//       const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

//       const response = await axios.put(
//         `${API_URL}/api/doctors/profile`,
//         {
//           firstName: userData.firstName,
//           lastName: userData.lastName,
//           phoneNumber: userData.phoneNumber,
//           addressLine1: userData.addressLine1,
//           addressLine2: userData.addressLine2,
//           pincode: userData.pincode,
//           signature: userData.signature,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.success) {
//         // localStorage update कर
//         const stored = JSON.parse(localStorage.getItem('userData') || '{}');
//         localStorage.setItem('userData', JSON.stringify({
//           ...stored,
//           fullName: response.data.data.fullName,
//           signature: response.data.data.signature
//         }));

//         alert('Profile saved successfully!');
//       }
//     } catch (error) {
//       alert('Failed to save profile');
//       console.error(error);
//     } finally {
//       setSaving(false);
//     }
//   };

//   // useEffect(() => {
//   //   // Get user data from localStorage
//   //   const storedUserData = localStorage.getItem("userData");

//   //   if (storedUserData) {
//   //     const parsedData = JSON.parse(storedUserData);

//   //     // Split fullName into firstName and lastName
//   //     const nameParts = parsedData.fullName ? parsedData.fullName.split(" ") : ["", ""];
//   //     const firstName = nameParts[0] || "";
//   //     const lastName = nameParts.slice(1).join(" ") || "";

//   //     setUserData({
//   //       fullName: parsedData.fullName || "",
//   //       email: parsedData.email || "",
//   //       firstName: firstName,
//   //       lastName: lastName,
//   //       phoneNumber: "",
//   //       addressLine1: "",
//   //       addressLine2: "",
//   //       pincode: "",
//   //       signature: "",
//   //     });
//   //     setIsLoading(false);
//   //   }
//   // }, []);


//   useEffect(() => {
//     const storedUserData = localStorage.getItem("userData");
//     if (storedUserData) {
//       const parsedData = JSON.parse(storedUserData);
//       const nameParts = parsedData.fullName ? parsedData.fullName.split(" ") : ["", ""];

//       setUserData({
//         fullName: parsedData.fullName || "",
//         email: parsedData.email || "",
//         firstName: nameParts[0] || "",
//         lastName: nameParts.slice(1).join(" ") || "",
//         phoneNumber: parsedData.phone || "",
//         addressLine1: parsedData.address?.address1 || "",
//         addressLine2: parsedData.address?.address2 || "",
//         pincode: parsedData.address?.pincode || "",
//         signature: parsedData.signature || "",  // ✅ हे add कर
//       });
//       setIsLoading(false);
//     }
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   if (isLoading) {
//     return (
//       <div className="page-wrapper">
//         <div className="content">
//           <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Page Header */}
//           <div className="mb-3 border-bottom pb-3">
//             <h4 className="fw-bold mb-0">Settings</h4>
//           </div>
//           {/* End Page Header */}
//           <div className="card" id="profilePage">
//             <div className="card-body">
//               {/* end card body */}
//               <div className="row">
//                 <div className="col-lg-3">
//                   <div className="text-start">
//                     <Link
//                       to={all_routes.doctorsprofilesettings}
//                       className="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1 active w-100 justify-content-start"
//                     >
//                       <i className="ti ti-user-cog me-2 text-primary"> </i>{" "}
//                       Profile Settings
//                     </Link>
//                     <Link
//                       to={all_routes.doctorspasswordsettings}
//                       className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
//                     >
//                       <i className="ti ti-lock-star me-2 text-dark"> </i> Change
//                       Password
//                     </Link>
//                     <Link
//                       to={all_routes.doctorsnotificationsettings}
//                       className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
//                     >
//                       <i className="ti ti-bell me-2 text-dark"></i>{" "}
//                       Notifications
//                     </Link>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-9">
//                   <div className="border-1 border-start ps-4">
//                     <h5 className="fw-bold pb-3 mb-4 border-1 border-bottom">
//                       Basic Information
//                     </h5>
//                     {/* start row */}
//                     <div className="row border-bottom mb-3">
//                       <div className="col-lg-12">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-2">
//                             <label className="form-label mb-0">
//                               Profile Image
//                               <span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-10">
//                             <div className="profile-container">
//                               <ImageWithBasePath
//                                 src="assets/img/users/user-08.jpg"
//                                 alt="Profile"
//                               />
//                               <div className="overlay-btn">
//                                 <Link
//                                   to="#"
//                                   className="text-white"
//                                   id="uploadTrigger"
//                                 >
//                                   <i className="ti ti-photo fs-10" />
//                                 </Link>
//                               </div>
//                               <input
//                                 type="file"
//                                 id="profileUpload"
//                                 style={{ display: "none" }}
//                               />
//                             </div>
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               First Name
//                               <span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input
//                               type="text"
//                               name="firstName"
//                               className="form-control"
//                               value={userData.firstName}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Last Name
//                               <span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input
//                               type="text"
//                               name="lastName"
//                               className="form-control"
//                               value={userData.lastName}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Email<span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input
//                               type="text"
//                               name="email"
//                               className="form-control"
//                               value={userData.email}
//                               onChange={handleInputChange}
//                               disabled
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Phone Number
//                               <span className="text-danger ms-1">*</span>
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input
//                               type="text"
//                               name="phoneNumber"
//                               className="form-control"
//                               value={userData.phoneNumber}
//                               onChange={handleInputChange}
//                               placeholder="Enter phone number"
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                     </div>
//                     {/* end row */}
//                     {/* start row */}
//                     <div className="row border-bottom mb-3">
//                       <div className="mb-3">
//                         <h5 className="fw-bold mb-0">Address Information</h5>
//                       </div>
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Address Line 1
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input
//                               type="text"
//                               name="addressLine1"
//                               className="form-control"
//                               value={userData.addressLine1}
//                               onChange={handleInputChange}
//                               placeholder="Enter address line 1"
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">
//                               Address Line 2
//                             </label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input
//                               type="text"
//                               name="addressLine2"
//                               className="form-control"
//                               value={userData.addressLine2}
//                               onChange={handleInputChange}
//                               placeholder="Enter address line 2"
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">Country</label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <CommonSelect
//                               options={Country}
//                               className="select"
//                               defaultValue={Country[0]}
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">State</label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <CommonSelect
//                               options={State}
//                               className="select"
//                               defaultValue={State[0]}
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">City</label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <CommonSelect
//                               options={City}
//                               className="select"
//                               defaultValue={City[0]}
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                       <div className="col-lg-6">
//                         {/* start row */}
//                         <div className="row align-items-center mb-3">
//                           <div className="col-lg-4">
//                             <label className="form-label mb-0">Pincode</label>
//                           </div>
//                           {/* end col */}
//                           <div className="col-lg-8">
//                             <input
//                               type="text"
//                               name="pincode"
//                               className="form-control"
//                               value={userData.pincode}
//                               onChange={handleInputChange}
//                               placeholder="Enter pincode"
//                             />
//                           </div>
//                           {/* end col */}
//                         </div>
//                         {/* end row */}
//                       </div>
//                       {/* end col */}
//                     </div>

//                     // Address Information च्या closing </div> नंतर हे add कर:

//                   {/* Signature Section */}
//                   <div className="row border-bottom mb-3">
//                     <div className="mb-3">
//                       <h5 className="fw-bold mb-0">Digital Signature</h5>
//                       <p className="text-muted fs-13 mt-1">
//                         Upload the signature shown on the prescription (PNG/JPG with a transparent background).
//                       </p>
//                     </div>
//                     <div className="col-lg-12">
//                       <div className="row align-items-center mb-3">
//                         <div className="col-lg-2">
//                           <label className="form-label mb-0">Signature</label>
//                         </div>
//                         <div className="col-lg-10">
//                           {/* Preview */}
//                           {userData.signature && (
//                             <div className="mb-3 p-3 border rounded bg-light d-inline-block">
//                               <img
//                                 src={userData.signature}
//                                 alt="Current Signature"
//                                 style={{
//                                   maxWidth: '250px',
//                                   maxHeight: '80px',
//                                   objectFit: 'contain'
//                                 }}
//                               />
//                               <div className="mt-2">
//                                 <button
//                                   type="button"
//                                   className="btn btn-sm btn-outline-danger"
//                                   onClick={() => setUserData({ ...userData, signature: '' })}
//                                 >
//                                   <i className="ti ti-trash me-1"></i> Remove Signature
//                                 </button>
//                               </div>
//                             </div>
//                           )}

//                           {/* Upload */}
//                           <div className="d-flex align-items-center gap-3">
//                             <label
//                               htmlFor="signatureUpload"
//                               className="btn btn-outline-primary btn-sm"
//                               style={{ cursor: 'pointer' }}
//                             >
//                               <i className="ti ti-upload me-1"></i>
//                               {userData.signature ? 'Change Signature' : 'Upload Signature'}
//                             </label>
//                             <input
//                               type="file"
//                               id="signatureUpload"
//                               accept="image/*"
//                               style={{ display: 'none' }}
//                               onChange={(e) => {
//                                 const file = e.target.files?.[0];
//                                 if (file) {
//                                   // File size check (max 2MB)
//                                   if (file.size > 2 * 1024 * 1024) {
//                                     alert('File size should be less than 2MB');
//                                     return;
//                                   }
//                                   const reader = new FileReader();
//                                   reader.onload = (ev) => {
//                                     const base64 = ev.target?.result as string;
//                                     setUserData({ ...userData, signature: base64 });
//                                   };
//                                   reader.readAsDataURL(file);
//                                 }
//                               }}
//                             />
//                             <small className="text-muted">
//                               PNG/JPG, max 2MB. White/transparent background recommended.
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* end row */}
//                   <div className="d-flex justify-content-end align-items-center gap-2">
//                     <Link
//                       to=""
//                       className="btn btn-light btn-md fs-13 fw-medium rounded"
//                     >
//                       Cancel
//                     </Link>
//                     <button
//                       type="button"
//                       className="btn btn-primary btn-md fs-13 fw-medium rounded"
//                       onClick={handleSave}
//                       disabled={saving}
//                     >
//                       {saving ? (
//                         <><span className="spinner-border spinner-border-sm me-1"></span>Saving...</>
//                       ) : 'Save Changes'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* end col */}
//             </div>
//           </div>
//           {/* end card body */}
//         </div>
//         {/* end card */}
//       </div>
//       {/* End Content */}
//       {/* Footer Start */}
//       <div className="footer text-center bg-white p-2 border-top">
//         <p className="text-dark mb-0">
//           2025 ©
//           <Link to="#" className="link-primary">
//             Preclinic
//           </Link>
//           , All Rights Reserved
//         </p>
//       </div>
//       {/* Footer End */}
//     </div >
//     {/* ========================
// 			End Page Content
// 		========================= */}
//     </>
//   );
// };

// export default DoctorsProfileSettings;

import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { City, Country, State } from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect } from "react";
import axios from "axios";

const DoctorsProfileSettings = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    signature: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      const nameParts = parsedData.fullName
        ? parsedData.fullName.split(" ")
        : ["", ""];

      setUserData({
        fullName: parsedData.fullName || "",
        email: parsedData.email || "",
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        phoneNumber: parsedData.phone || "",
        addressLine1: parsedData.address?.address1 || "",
        addressLine2: parsedData.address?.address2 || "",
        pincode: parsedData.address?.pincode || "",
        signature: parsedData.signature || "",
      });
    }
    setIsLoading(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");
      const API_URL =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

      const response = await axios.put(
        `${API_URL}/api/doctors/profile`,
        {
          firstName: userData.firstName,
          lastName: userData.lastName,
          phoneNumber: userData.phoneNumber,
          addressLine1: userData.addressLine1,
          addressLine2: userData.addressLine2,
          pincode: userData.pincode,
          signature: userData.signature,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        const stored = JSON.parse(localStorage.getItem("userData") || "{}");
        localStorage.setItem(
          "userData",
          JSON.stringify({
            ...stored,
            fullName: response.data.data.fullName,
            signature: response.data.data.signature,
            phone: userData.phoneNumber,
            address: {
              address1: userData.addressLine1,
              address2: userData.addressLine2,
              pincode: userData.pincode,
            },
          })
        );
        alert("Profile saved successfully!");
      }
    } catch (error) {
      alert("Failed to save profile");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "400px" }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ======================== Start Page Content ========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="mb-3 border-bottom pb-3">
            <h4 className="fw-bold mb-0">Settings</h4>
          </div>
          {/* End Page Header */}

          <div className="card" id="profilePage">
            <div className="card-body">
              <div className="row">

                {/* ── Left Sidebar ── */}
                <div className="col-lg-3">
                  <div className="text-start">
                    <Link
                      to={all_routes.doctorsprofilesettings}
                      className="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1 active justify-content-start"
                    >
                      <i className="ti ti-user-cog me-2 text-primary" />
                      Profile Settings
                    </Link>
                    <Link
                      to={all_routes.doctorspasswordsettings}
                      className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
                    >
                      <i className="ti ti-lock-star me-2 text-dark" />
                      Change Password
                    </Link>
                    <Link
                      to={all_routes.doctorsnotificationsettings}
                      className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
                    >
                      <i className="ti ti-bell me-2 text-dark" />
                      Notifications
                    </Link>
                  </div>
                </div>
                {/* end col-lg-3 */}

                {/* ── Right Content ── */}
                <div className="col-lg-9">
                  <div className="border-1 border-start ps-4">
                    <h5 className="fw-bold pb-3 mb-4 border-1 border-bottom">
                      Basic Information
                    </h5>

                    {/* ── Basic Info Section ── */}
                    <div className="row border-bottom mb-3">

                      {/* Profile Image */}
                      <div className="col-lg-12">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-2">
                            <label className="form-label mb-0">
                              Profile Image
                              <span className="text-danger ms-1">*</span>
                            </label>
                          </div>
                          <div className="col-lg-10">
                            <div className="profile-container">
                              <ImageWithBasePath
                                src="assets/img/users/user-08.jpg"
                                alt="Profile"
                              />
                              <div className="overlay-btn">
                                <Link to="#" className="text-white" id="uploadTrigger">
                                  <i className="ti ti-photo fs-10" />
                                </Link>
                              </div>
                              <input
                                type="file"
                                id="profileUpload"
                                style={{ display: "none" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* First Name */}
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
                              name="firstName"
                              className="form-control"
                              value={userData.firstName}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Last Name */}
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
                              name="lastName"
                              className="form-control"
                              value={userData.lastName}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email */}
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
                              type="text"
                              name="email"
                              className="form-control"
                              value={userData.email}
                              onChange={handleInputChange}
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">
                              Phone Number
                              <span className="text-danger ms-1">*</span>
                            </label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              name="phoneNumber"
                              className="form-control"
                              value={userData.phoneNumber}
                              onChange={handleInputChange}
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                    {/* end Basic Info Section */}

                    {/* ── Address Information Section ── */}
                    <div className="row border-bottom mb-3">
                      <div className="mb-3">
                        <h5 className="fw-bold mb-0">Address Information</h5>
                      </div>

                      {/* Address Line 1 */}
                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">Address Line 1</label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              name="addressLine1"
                              className="form-control"
                              value={userData.addressLine1}
                              onChange={handleInputChange}
                              placeholder="Enter address line 1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Address Line 2 */}
                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">Address Line 2</label>
                          </div>
                          <div className="col-lg-8">
                            <input
                              type="text"
                              name="addressLine2"
                              className="form-control"
                              value={userData.addressLine2}
                              onChange={handleInputChange}
                              placeholder="Enter address line 2"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Country */}
                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">Country</label>
                          </div>
                          <div className="col-lg-8">
                            <CommonSelect
                              options={Country}
                              className="select"
                              defaultValue={Country[0]}
                            />
                          </div>
                        </div>
                      </div>

                      {/* State */}
                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">State</label>
                          </div>
                          <div className="col-lg-8">
                            <CommonSelect
                              options={State}
                              className="select"
                              defaultValue={State[0]}
                            />
                          </div>
                        </div>
                      </div>

                      {/* City */}
                      <div className="col-lg-6">
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">City</label>
                          </div>
                          <div className="col-lg-8">
                            <CommonSelect
                              options={City}
                              className="select"
                              defaultValue={City[0]}
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
                              name="pincode"
                              className="form-control"
                              value={userData.pincode}
                              onChange={handleInputChange}
                              placeholder="Enter pincode"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                    {/* end Address Information Section */}

                    {/* ── Digital Signature Section ── */}
                    <div className="row border-bottom mb-4">
                      <div className="mb-3">
                        <h5 className="fw-bold mb-0">Digital Signature</h5>
                        <p className="text-muted fs-13 mt-1">
                          Prescription वर दिसणारी signature upload करा (PNG/JPG transparent background recommended).
                        </p>
                      </div>

                      <div className="col-lg-12">
                        <div className="row align-items-start mb-3">
                          <div className="col-lg-2">
                            <label className="form-label mb-0 mt-2">Signature</label>
                          </div>
                          <div className="col-lg-10">

                            {/* Signature Preview */}
                            {userData.signature && (
                              <div className="mb-3 p-3 border rounded bg-light d-inline-block">
                                <img
                                  src={userData.signature}
                                  alt="Current Signature"
                                  style={{
                                    maxWidth: "250px",
                                    maxHeight: "80px",
                                    objectFit: "contain",
                                    display: "block",
                                  }}
                                />
                                <div className="mt-2">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() =>
                                      setUserData({ ...userData, signature: "" })
                                    }
                                  >
                                    <i className="ti ti-trash me-1" />
                                    Remove Signature
                                  </button>
                                </div>
                              </div>
                            )}

                            {/* Upload Button */}
                            <div className="d-flex align-items-center gap-3 flex-wrap">
                              <label
                                htmlFor="signatureUpload"
                                className="btn btn-outline-primary btn-sm mb-0"
                                style={{ cursor: "pointer" }}
                              >
                                <i className="ti ti-upload me-1" />
                                {userData.signature
                                  ? "Change Signature"
                                  : "Upload Signature"}
                              </label>
                              <input
                                type="file"
                                id="signatureUpload"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    if (file.size > 2 * 1024 * 1024) {
                                      alert("File size should be less than 2MB");
                                      return;
                                    }
                                    const reader = new FileReader();
                                    reader.onload = (ev) => {
                                      const base64 = ev.target?.result as string;
                                      setUserData({
                                        ...userData,
                                        signature: base64,
                                      });
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                              <small className="text-muted">
                                PNG/JPG, max 2MB. Transparent background recommended.
                              </small>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end Digital Signature Section */}

                    {/* ── Save / Cancel Buttons ── */}
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <Link
                        to=""
                        className="btn btn-light btn-md fs-13 fw-medium rounded"
                      >
                        Cancel
                      </Link>
                      <button
                        type="button"
                        className="btn btn-primary btn-md fs-13 fw-medium rounded"
                        onClick={handleSave}
                        disabled={saving}
                      >
                        {saving ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-1" />
                            Saving...
                          </>
                        ) : (
                          "Save Changes"
                        )}
                      </button>
                    </div>

                  </div>
                </div>
                {/* end col-lg-9 */}

              </div>
              {/* end row */}
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}

        </div>
        {/* End Content */}

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
        {/* Footer End */}

      </div>
      {/* ======================== End Page Content ========================= */}
    </>
  );
};

export default DoctorsProfileSettings;