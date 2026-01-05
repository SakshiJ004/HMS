// import { DatePicker, Select } from "antd";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";
// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { all_routes } from "../../../../routes/all_routes";
// import { useState } from "react";
// import { DoctorsListData } from "../../../../../core/json/doctorsListData";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../../core/common/dataTable";
// import Modals from "../doctors/modals/modals";

// const DoctorsList = () => {
//   const data = DoctorsListData;
//   const columns = [
//     {
//       title: "Name & Designation",
//       dataIndex: "Name_Designation",
//       render: (text: any, render: any) => (
//         <div className="d-flex align-items-center">
//           <Link to={all_routes.doctorsDetails} className="avatar me-2">
//             <ImageWithBasePath
//               src={`assets/img/doctors/${render.img}`}
//               alt="Doctor"
//               className="rounded-circle"
//             />
//           </Link>
//           <div>
//             <h6 className="mb-1 fs-14 fw-semibold">
//               <Link to={all_routes.doctorsDetails}>{text}</Link>
//             </h6>
//             <span className="fs-13 d-block">{render.Department}</span>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) =>
//         a.Name_Designation.length - b.Name_Designation.length,
//     },
//     {
//       title: "Department",
//       dataIndex: "Department",
//       sorter: (a: any, b: any) => a.Department.length - b.Department.length,
//     },
//     {
//       title: "Phone",
//       dataIndex: "Phone",
//       sorter: (a: any, b: any) => a.Phone.length - b.Phone.length,
//     },
//     {
//       title: "Email",
//       dataIndex: "Email",
//       sorter: (a: any, b: any) => a.Email.length - b.Email.length,
//     },
//     {
//       title: "Fees",
//       dataIndex: "Fees",
//       render: (text: any) => <h6 className="fs-14 fw-semibold mb-0">{text}</h6>,
//       sorter: (a: any, b: any) => a.Fees.length - b.Fees.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: string) => (
//         <span
//           className={`badge ${
//             text === "Available" ? "badge-soft-success" : "badge-soft-danger"
//           }  border border-success`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//     {
//       title: "",
//       render: () => (
//         <div className="d-flex align-items-center">
//           <div className="action-item me-2">
//             <Link to={all_routes.appointmentCalendar}>
//               <i className="ti ti-calendar-cog" />
//             </Link>
//           </div>
//           <div className="action-item">
//             <Link to="#" data-bs-toggle="dropdown">
//               <i className="ti ti-dots-vertical" />
//             </Link>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="offcanvas"
//                   data-bs-target="#edit_doctor"
//                 >
//                   Edit
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="modal"
//                   data-bs-target="#delete_modal"
//                 >
//                   Delete
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//   ];
//   const [searchText, setSearchText] = useState<string>("");

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//   };
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };

//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Start Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0">
//                 Doctor List
//                 <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
//                   Total Doctors : 565
//                 </span>
//               </h4>
//             </div>
//             <div className="text-end d-flex">
//               {/* dropdown*/}
//               <div className="dropdown me-1">
//                 <Link
//                   to="#"
//                   className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
//                   data-bs-toggle="dropdown"
//                 >
//                   Export
//                   <i className="ti ti-chevron-down ms-2" />
//                 </Link>
//                 <ul className="dropdown-menu p-2">
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as PDF
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as Excel
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                 <Link
//                   to={all_routes.doctorsList}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-list fs-14 text-dark" />
//                 </Link>
//                 <Link
//                   to={all_routes.doctors}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-layout-grid fs-14 text-body" />
//                 </Link>
//               </div>
//               <Link
//                 to="#"
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//                 data-bs-toggle="offcanvas"
//                 data-bs-target="#add_doctor"
//               >
//                 <i className="ti ti-plus me-1" />
//                 New Doctor
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//             <div className="search-set mb-3">
//               <div className="d-flex align-items-center flex-wrap gap-2">
//                 <div className="table-search d-flex align-items-center mb-0">
//                   <div className="search-input">
//                     <SearchInput value={searchText} onChange={handleSearch} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
//               <div className="dropdown me-2">
//                 <Link
//                   to="#"
//                   className="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
//                   data-bs-toggle="dropdown"
//                   data-bs-auto-close="outside"
//                 >
//                   <i className="ti ti-filter text-gray-5 me-1" />
//                   Filters
//                 </Link>
//                 <div
//                   className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
//                   id="filter-dropdown"
//                 >
//                   <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
//                     <h4 className="mb-0">Filter</h4>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="link-danger text-decoration-underline"
//                       >
//                         Clear All
//                       </Link>
//                     </div>
//                   </div>
//                   <form action="#">
//                     <div className="filter-body pb-0">
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Doctor</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Doctor}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Designation</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Designation}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Department</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Department}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                           Date<span className="text-danger">*</span>
//                         </label>
//                         <div className="input-icon-end position-relative">
//                           <DatePicker
//                             className="form-control datetimepicker"
//                             format={{
//                               format: "DD-MM-YYYY",
//                               type: "mask",
//                             }}
//                             getPopupContainer={getModalContainer}
//                             placeholder="DD-MM-YYYY"
//                             suffixIcon={null}
//                           />
//                           <span className="input-icon-addon">
//                             <i className="ti ti-calendar" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Amount</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Amount}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Status</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Status}
//                         />
//                       </div>
//                     </div>
//                     <div className="filter-footer d-flex align-items-center justify-content-end border-top">
//                       <Link
//                         to="#"
//                         className="btn btn-light btn-md me-2"
//                         id="close-filter"
//                       >
//                         Close
//                       </Link>
//                       <button type="submit" className="btn btn-primary btn-md">
//                         Filter
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               <div className="dropdown">
//                 <Link
//                   to="#"
//                   className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
//                   data-bs-toggle="dropdown"
//                 >
//                   <span className="me-1"> Sort By : </span> Recent
//                 </Link>
//                 <ul className="dropdown-menu  dropdown-menu-end p-2">
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Recently Added
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Ascending
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Desending
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Last Month
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Last 7 Days
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={data}
//               Selection={false}
//               searchText={searchText}
//             />
//           </div>
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
//       <Modals />
//     </>
//   );
// };

// export default DoctorsList;



// import { DatePicker, Select } from "antd";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";
// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import { useEffect, useState } from "react";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../../core/common/dataTable";
// import Modals from "../doctors/modals/modals";
// import { getDoctors, deleteDoctor } from "../../../../../api/doctorService";

// // Interface for Doctor data from backend
// interface DoctorData {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   fullName: string;
//   email: string;
//   phone: string;
//   department: string;
//   designation: string;
//   consultationCharge: number;
//   profileImage?: string;
//   status?: string;
//   createdAt: string;
// }

// const DoctorsList = () => {
//   // State management
//   const [doctors, setDoctors] = useState<DoctorData[]>([]);
//   const [_loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [deleteId, setDeleteId] = useState<string | null>(null);
//   const [searchText, setSearchText] = useState<string>("");

//   // Fetch doctors on component mount
//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const response = await getDoctors();
//       console.log("Fetched doctors:", response);

//       if (response.success && response.data) {
//         setDoctors(response.data);
//       } else {
//         setError("Failed to load doctors");
//       }
//     } catch (err: any) {
//       console.error("Error fetching doctors:", err);
//       setError(err.message || "Failed to load doctors");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle delete doctor
//   const handleDelete = async () => {
//     if (!deleteId) return;

//     try {
//       await deleteDoctor(deleteId);
//       await fetchDoctors();
//       setDeleteId(null);
//       // Close modal
//       const modal = document.getElementById("delete_modal");
//       if (modal) {
//         const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
//         if (bootstrapModal) {
//           bootstrapModal.hide();
//         }
//       }
//     } catch (err: any) {
//       console.error("Error deleting doctor:", err);
//       setError(err.message || "Failed to delete doctor");
//     }
//   };

//   // Get profile image or initials
//   const getProfileImage = (doctor: DoctorData) => {
//     if (doctor.profileImage) {
//       if (doctor.profileImage.startsWith('data:image') || doctor.profileImage.startsWith('http')) {
//         return doctor.profileImage;
//       }
//     }
//     return null;
//   };

//   const getInitials = (fullName: string) => {
//     if (!fullName) return "D";
//     const nameParts = fullName.trim().split(' ');
//     if (nameParts.length >= 2) {
//       return nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
//     }
//     return nameParts[0].charAt(0).toUpperCase();
//   };

//   // Transform real data for DataTable
//   const tableData = doctors.map((doctor) => ({
//     key: doctor._id,
//     Name_Designation: doctor.fullName,
//     Department: doctor.department || "N/A",
//     Phone: doctor.phone || "N/A",
//     Email: doctor.email,
//     Fees: `$${doctor.consultationCharge || 0}`,
//     Status: doctor.status || "Available",
//     img: doctor.profileImage,
//     _id: doctor._id,
//   }));

//   const columns = [
//     {
//       title: "Name & Designation",
//       dataIndex: "Name_Designation",
//       render: (text: any, record: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to={`/doctor-details?id=${record._id}`}
//             className="avatar me-2"
//             style={{ width: '40px', height: '40px', flexShrink: 0 }}
//           >
//             {getProfileImage(record) ? (
//               <img
//                 src={getProfileImage(record)!}
//                 alt={text}
//                 className="rounded-circle"
//                 style={{ width: '40px', height: '40px', objectFit: 'cover' }}
//               />
//             ) : (
//               <div
//                 className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold"
//                 style={{ width: '40px', height: '40px', fontSize: '14px' }}
//               >
//                 {getInitials(text)}
//               </div>
//             )}
//           </Link>
//           <div>
//             <h6 className="mb-1 fs-14 fw-semibold">
//               <Link to={`/doctor-details?id=${record._id}`}>Dr. {text}</Link>
//             </h6>
//             <span className="fs-13 d-block">{record.Department}</span>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) =>
//         a.Name_Designation.localeCompare(b.Name_Designation),
//     },
//     {
//       title: "Department",
//       dataIndex: "Department",
//       sorter: (a: any, b: any) => a.Department.localeCompare(b.Department),
//     },
//     {
//       title: "Phone",
//       dataIndex: "Phone",
//       sorter: (a: any, b: any) => a.Phone.localeCompare(b.Phone),
//     },
//     {
//       title: "Email",
//       dataIndex: "Email",
//       sorter: (a: any, b: any) => a.Email.localeCompare(b.Email),
//     },
//     {
//       title: "Fees",
//       dataIndex: "Fees",
//       render: (text: any) => <h6 className="fs-14 fw-semibold mb-0">{text}</h6>,
//       sorter: (a: any, b: any) => {
//         const aVal = parseInt(a.Fees.replace('$', ''));
//         const bVal = parseInt(b.Fees.replace('$', ''));
//         return aVal - bVal;
//       },
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: string) => (
//         <span
//           className={`badge ${text === "Available" ? "badge-soft-success" : "badge-soft-danger"
//             } border border-${text === "Available" ? "success" : "danger"}`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.Status.localeCompare(b.Status),
//     },
//     {
//       title: "",
//       render: (record: any) => (
//         <div className="d-flex align-items-center">
//           <div className="action-item me-2">
//             <Link to={all_routes.appointmentCalendar}>
//               <i className="ti ti-calendar-cog" />
//             </Link>
//           </div>
//           <div className="action-item">
//             <Link to="#" data-bs-toggle="dropdown">
//               <i className="ti ti-dots-vertical" />
//             </Link>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link
//                   to={`${all_routes.editDoctors}?id=${record._id}`}
//                   className="dropdown-item d-flex align-items-center"
//                 >
//                   Edit
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="modal"
//                   data-bs-target="#delete_modal"
//                   onClick={() => setDeleteId(record._id)}
//                 >
//                   Delete
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//   };

//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body;
//   };

//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Start Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0">
//                 Doctor List
//                 <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
//                   Total Doctors : {doctors.length}
//                 </span>
//               </h4>
//             </div>
//             <div className="text-end d-flex">
//               {/* dropdown*/}
//               <div className="dropdown me-1">
//                 <Link
//                   to="#"
//                   className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
//                   data-bs-toggle="dropdown"
//                 >
//                   Export
//                   <i className="ti ti-chevron-down ms-2" />
//                 </Link>
//                 <ul className="dropdown-menu p-2">
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as PDF
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as Excel
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                 <Link
//                   to={all_routes.doctorsList}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-list fs-14 text-dark" />
//                 </Link>
//                 <Link
//                   to={all_routes.doctors}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-layout-grid fs-14 text-body" />
//                 </Link>
//               </div>
//               <Link
//                 to={all_routes.addDoctors}
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//               >
//                 <i className="ti ti-plus me-1" />
//                 New Doctor
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}

//           {/* Error Message */}
//           {error && (
//             <div className="alert alert-danger alert-dismissible fade show" role="alert">
//               {error}
//               <button type="button" className="btn-close" onClick={() => setError("")}></button>
//             </div>
//           )}

//           <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//             <div className="search-set mb-3">
//               <div className="d-flex align-items-center flex-wrap gap-2">
//                 <div className="table-search d-flex align-items-center mb-0">
//                   <div className="search-input">
//                     <SearchInput value={searchText} onChange={handleSearch} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
//               <div className="dropdown me-2">
//                 <Link
//                   to="#"
//                   className="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
//                   data-bs-toggle="dropdown"
//                   data-bs-auto-close="outside"
//                 >
//                   <i className="ti ti-filter text-gray-5 me-1" />
//                   Filters
//                 </Link>
//                 <div
//                   className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
//                   id="filter-dropdown"
//                 >
//                   <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
//                     <h4 className="mb-0">Filter</h4>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="link-danger text-decoration-underline"
//                       >
//                         Clear All
//                       </Link>
//                     </div>
//                   </div>
//                   <form action="#">
//                     <div className="filter-body pb-0">
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Doctor</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Doctor}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Designation</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Designation}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Department</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Department}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                           Date<span className="text-danger">*</span>
//                         </label>
//                         <div className="input-icon-end position-relative">
//                           <DatePicker
//                             className="form-control datetimepicker"
//                             format={{
//                               format: "DD-MM-YYYY",
//                               type: "mask",
//                             }}
//                             getPopupContainer={getModalContainer}
//                             placeholder="DD-MM-YYYY"
//                             suffixIcon={null}
//                           />
//                           <span className="input-icon-addon">
//                             <i className="ti ti-calendar" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Amount</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Amount}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Status</label>
//                           <Link to="#" className="link-primary mb-1">
//                             Reset
//                           </Link>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Status}
//                         />
//                       </div>
//                     </div>
//                     <div className="filter-footer d-flex align-items-center justify-content-end border-top">
//                       <Link
//                         to="#"
//                         className="btn btn-light btn-md me-2"
//                         id="close-filter"
//                       >
//                         Close
//                       </Link>
//                       <button type="submit" className="btn btn-primary btn-md">
//                         Filter
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               <div className="dropdown">
//                 <Link
//                   to="#"
//                   className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
//                   data-bs-toggle="dropdown"
//                 >
//                   <span className="me-1"> Sort By : </span> Recent
//                 </Link>
//                 <ul className="dropdown-menu  dropdown-menu-end p-2">
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Recently Added
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Ascending
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Desending
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Last Month
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Last 7 Days
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={tableData}
//               Selection={false}
//               searchText={searchText}
//             />
//           </div>
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
//       <Modals onDelete={handleDelete} />
//     </>
//   );
// };

// export default DoctorsList;


import { DatePicker, Select } from "antd";
import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { useEffect, useState } from "react";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "../doctors/modals/modals";
import { getDoctors, deleteDoctor } from "../../../../../api/doctorService";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import dayjs from "dayjs";

// Interface for Doctor data from backend
interface DoctorData {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  consultationCharge: number;
  profileImage?: string;
  status?: string;
  createdAt: string;
}

const DoctorsList = () => {
  // State management
  const [doctors, setDoctors] = useState<DoctorData[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<DoctorData[]>([]);
  const [_loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  // Filter states
  const [filterDoctor, setFilterDoctor] = useState<string[]>([]);
  const [filterDesignation, setFilterDesignation] = useState<string[]>([]);
  const [filterDepartment, setFilterDepartment] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<any>(null);
  const [filterAmount, setFilterAmount] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);

  // Sort state
  const [sortBy, setSortBy] = useState<string>("recent");

  // Fetch doctors on component mount
  useEffect(() => {
    fetchDoctors();
  }, []);

  // Apply filters and sort when doctors or filter/sort state changes
  useEffect(() => {
    applyFiltersAndSort();
  }, [doctors, filterDoctor, filterDesignation, filterDepartment, filterDate, filterAmount, filterStatus, sortBy]);

  const fetchDoctors = async () => {
    try {
      const response = await getDoctors();
      console.log("Fetched doctors:", response);

      if (response.success && response.data) {
        setDoctors(response.data);
      } else {
        setError("Failed to load doctors");
      }
    } catch (err: any) {
      console.error("Error fetching doctors:", err);
      setError(err.message || "Failed to load doctors");
    } finally {
      setLoading(false);
    }
  };

  // Generate dynamic filter options from real data
  const doctorOptions = doctors.map(doc => ({
    label: doc.fullName,
    value: doc.fullName
  }));

  const departmentOptions = [...new Set(doctors.map(doc => doc.department))]
    .filter(Boolean)
    .map(dept => ({
      label: dept,
      value: dept
    }));

  const designationOptions = [...new Set(doctors.map(doc => doc.designation))]
    .filter(Boolean)
    .map(desig => ({
      label: desig,
      value: desig
    }));

  const statusOptions = [...new Set(doctors.map(doc => doc.status || "Available"))]
    .map(status => ({
      label: status,
      value: status
    }));

  const amountOptions = [
    { label: "$0-$100", value: "$0-$100" },
    { label: "$100-$500", value: "$100-$500" },
    { label: "$500-$1000", value: "$500-$1000" },
    { label: "$1000+", value: "$1000+" }
  ];

  // Apply filters and sorting
  const applyFiltersAndSort = () => {
    let filtered = [...doctors];

    // Apply filters
    if (filterDoctor.length > 0) {
      filtered = filtered.filter(doc =>
        filterDoctor.includes(doc.fullName)
      );
    }

    if (filterDesignation.length > 0) {
      filtered = filtered.filter(doc =>
        filterDesignation.includes(doc.designation)
      );
    }

    if (filterDepartment.length > 0) {
      filtered = filtered.filter(doc =>
        filterDepartment.includes(doc.department)
      );
    }

    if (filterDate) {
      const selectedDate = dayjs(filterDate).format('YYYY-MM-DD');
      filtered = filtered.filter(doc =>
        dayjs(doc.createdAt).format('YYYY-MM-DD') === selectedDate
      );
    }

    if (filterAmount.length > 0) {
      filtered = filtered.filter(doc => {
        const charge = doc.consultationCharge;
        return filterAmount.some(range => {
          if (range === "$0-$100") return charge >= 0 && charge <= 100;
          if (range === "$100-$500") return charge > 100 && charge <= 500;
          if (range === "$500-$1000") return charge > 500 && charge <= 1000;
          if (range === "$1000+") return charge > 1000;
          return false;
        });
      });
    }

    if (filterStatus.length > 0) {
      filtered = filtered.filter(doc =>
        filterStatus.includes(doc.status || "Available")
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "recent":
      case "recentlyAdded":
        filtered.sort((a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "ascending":
        filtered.sort((a, b) =>
          a.fullName.localeCompare(b.fullName)
        );
        break;
      case "descending":
        filtered.sort((a, b) =>
          b.fullName.localeCompare(a.fullName)
        );
        break;
      case "lastMonth":
        const lastMonth = dayjs().subtract(1, 'month');
        filtered = filtered.filter(doc =>
          dayjs(doc.createdAt).isAfter(lastMonth)
        );
        break;
      case "last7Days":
        const last7Days = dayjs().subtract(7, 'days');
        filtered = filtered.filter(doc =>
          dayjs(doc.createdAt).isAfter(last7Days)
        );
        break;
    }

    setFilteredDoctors(filtered);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilterDoctor([]);
    setFilterDesignation([]);
    setFilterDepartment([]);
    setFilterDate(null);
    setFilterAmount([]);
    setFilterStatus([]);
  };

  // Handle filter submit
  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Close filter dropdown
    const closeBtn = document.getElementById('close-filter');
    if (closeBtn) closeBtn.click();
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Doctor List", 14, 22);

    // Add date
    doc.setFontSize(11);
    doc.text(`Generated on: ${dayjs().format('DD-MM-YYYY HH:mm')}`, 14, 30);

    // Prepare table data
    const tableData = filteredDoctors.map(doctor => [
      doctor.fullName,
      doctor.department || "N/A",
      doctor.phone || "N/A",
      doctor.email,
      `$${doctor.consultationCharge || 0}`,
      doctor.status || "Available"
    ]);

    // Add table
    autoTable(doc, {
      head: [["Name", "Department", "Phone", "Email", "Fees", "Status"]],
      body: tableData,
      startY: 35,
      theme: 'grid',
      headStyles: { fillColor: [79, 70, 229] },
      styles: { fontSize: 9 }
    });

    // Save PDF
    doc.save(`doctors-list-${dayjs().format('YYYY-MM-DD')}.pdf`);
  };

  // Export to Excel
  const exportToExcel = () => {
    // Prepare data for Excel
    const excelData = filteredDoctors.map(doctor => ({
      "Name": doctor.fullName,
      "Department": doctor.department || "N/A",
      "Phone": doctor.phone || "N/A",
      "Email": doctor.email,
      "Fees": doctor.consultationCharge || 0,
      "Status": doctor.status || "Available",
      "Created Date": dayjs(doctor.createdAt).format('DD-MM-YYYY')
    }));

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Doctors");

    // Save file
    XLSX.writeFile(wb, `doctors-list-${dayjs().format('YYYY-MM-DD')}.xlsx`);
  };

  // Handle delete doctor
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteDoctor(deleteId);
      await fetchDoctors();
      setDeleteId(null);
      // Close modal
      const modal = document.getElementById("delete_modal");
      if (modal) {
        const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
          bootstrapModal.hide();
        }
      }
    } catch (err: any) {
      console.error("Error deleting doctor:", err);
      setError(err.message || "Failed to delete doctor");
    }
  };

  // Get profile image or initials
  // const getProfileImage = (doctor: DoctorData) => {
  //   const img = doctor.profileImage;
  //   // Check if valid image exists
  //   if (img && (
  //     img.includes('googleusercontent.com') ||
  //     img.startsWith('http://') ||
  //     img.startsWith('https://') ||
  //     img.startsWith('data:image') ||
  //     img.startsWith('/') // relative path
  //   )) {
  //     return img;
  //   }
  //   return null;
  // };

  const getInitials = (fullName: string) => {
    if (!fullName) return "D";
    const nameParts = fullName.trim().split(' ');
    if (nameParts.length >= 2) {
      return nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
    }
    return nameParts[0].charAt(0).toUpperCase();
  };

  // Transform real data for DataTable
  const tableData = filteredDoctors.map((doctor) => ({
    key: doctor._id,
    Name_Designation: doctor.fullName,
    Department: doctor.department || "N/A",
    Phone: doctor.phone || "N/A",
    Email: doctor.email,
    Fees: `$${doctor.consultationCharge || 0}`,
    Status: doctor.status || "Available",
    profileImage: doctor.profileImage,
    _id: doctor._id,
    fullData: doctor,
  }));

  const columns = [
    {
      title: "Name & Designation",
      dataIndex: "Name_Designation",
      render: (text: any, record: any) => {
        // Get image directly from profileImage field
        const hasValidImage = record.profileImage && (
          record.profileImage.includes('googleusercontent.com') ||
          record.profileImage.startsWith('http://') ||
          record.profileImage.startsWith('https://') ||
          record.profileImage.startsWith('data:image') ||
          record.profileImage.startsWith('/')
        );

        return (
          <div className="d-flex align-items-center">
            <Link
              to={`/doctor-details?id=${record._id}`}
              className="avatar me-2"
              style={{ width: '40px', height: '40px', flexShrink: 0 }}
            >
              {hasValidImage ? (
                <img
                  src={record.profileImage}
                  alt={text}
                  className="rounded-circle"
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  onError={(e) => {
                    // Fallback to initials if image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold" style="width: 40px; height: 40px; font-size: 14px;">${getInitials(text)}</div>`;
                    }
                  }}
                />
              ) : (
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold"
                  style={{ width: '40px', height: '40px', fontSize: '14px' }}
                >
                  {getInitials(text)}
                </div>
              )}
            </Link>
            <div>
              <h6 className="mb-1 fs-14 fw-semibold">
                <Link to={`/doctor-details?id=${record._id}`}>Dr. {text}</Link>
              </h6>
              <span className="fs-13 d-block">{record.Department}</span>
            </div>
          </div>
        );
      },
      sorter: (a: any, b: any) =>
        a.Name_Designation.localeCompare(b.Name_Designation),
    },
    {
      title: "Department",
      dataIndex: "Department",
      sorter: (a: any, b: any) => a.Department.localeCompare(b.Department),
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a: any, b: any) => a.Phone.localeCompare(b.Phone),
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a: any, b: any) => a.Email.localeCompare(b.Email),
    },
    {
      title: "Fees",
      dataIndex: "Fees",
      render: (text: any) => <h6 className="fs-14 fw-semibold mb-0">{text}</h6>,
      sorter: (a: any, b: any) => {
        const aVal = parseInt(a.Fees.replace('$', ''));
        const bVal = parseInt(b.Fees.replace('$', ''));
        return aVal - bVal;
      },
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge ${text === "Available" ? "badge-soft-success" : "badge-soft-danger"
            } border border-${text === "Available" ? "success" : "danger"}`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.localeCompare(b.Status),
    },
    {
      title: "",
      render: (record: any) => (
        <div className="d-flex align-items-center">
          <div className="action-item me-2">
            <Link to={all_routes.appointmentCalendar}>
              <i className="ti ti-calendar-cog" />
            </Link>
          </div>
          <div className="action-item">
            <Link to="#" data-bs-toggle="dropdown">
              <i className="ti ti-dots-vertical" />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link
                  to={`${all_routes.editDoctors}?id=${record._id}`}
                  className="dropdown-item d-flex align-items-center"
                >
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_modal"
                  onClick={() => setDeleteId(record._id)}
                >
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Doctor List
                <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
                  Total Doctors : {filteredDoctors.length}
                </span>
              </h4>
            </div>
            <div className="text-end d-flex">
              {/* dropdown*/}
              <div className="dropdown me-1">
                <Link
                  to="#"
                  className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Export
                  <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li>
                    <Link className="dropdown-item" to="#" onClick={exportToPDF}>
                      Download as PDF
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={exportToExcel}>
                      Download as Excel
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                <Link
                  to={all_routes.doctorsList}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-dark" />
                </Link>
                <Link
                  to={all_routes.doctors}
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-layout-grid fs-14 text-body" />
                </Link>
              </div>
              <Link
                to={all_routes.addDoctors}
                className="btn btn-primary ms-2 fs-13 btn-md"
              >
                <i className="ti ti-plus me-1" />
                New Doctor
              </Link>
            </div>
          </div>
          {/* End Page Header */}

          {/* Error Message */}
          {error && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {error}
              <button type="button" className="btn-close" onClick={() => setError("")}></button>
            </div>
          )}

          <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="table-search d-flex align-items-center mb-0">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={handleSearch} />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter text-gray-5 me-1" />
                  Filters
                </Link>
                <div
                  className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
                  id="filter-dropdown"
                >
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h4 className="mb-0">Filter</h4>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-danger text-decoration-underline"
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                  <form onSubmit={handleFilterSubmit}>
                    <div className="filter-body pb-0">
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Doctor</label>
                          <Link to="#" className="link-primary mb-1" onClick={() => setFilterDoctor([])}>
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          value={filterDoctor}
                          onChange={setFilterDoctor}
                          options={doctorOptions}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Designation</label>
                          <Link to="#" className="link-primary mb-1" onClick={() => setFilterDesignation([])}>
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          value={filterDesignation}
                          onChange={setFilterDesignation}
                          options={designationOptions}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Department</label>
                          <Link to="#" className="link-primary mb-1" onClick={() => setFilterDepartment([])}>
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          value={filterDepartment}
                          onChange={setFilterDepartment}
                          options={departmentOptions}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Date<span className="text-danger">*</span>
                        </label>
                        <div className="input-icon-end position-relative">
                          <DatePicker
                            className="form-control datetimepicker"
                            format={{
                              format: "DD-MM-YYYY",
                              type: "mask",
                            }}
                            value={filterDate}
                            onChange={setFilterDate}
                            getPopupContainer={getModalContainer}
                            placeholder="DD-MM-YYYY"
                            suffixIcon={null}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Amount</label>
                          <Link to="#" className="link-primary mb-1" onClick={() => setFilterAmount([])}>
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          value={filterAmount}
                          onChange={setFilterAmount}
                          options={amountOptions}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Status</label>
                          <Link to="#" className="link-primary mb-1" onClick={() => setFilterStatus([])}>
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          value={filterStatus}
                          onChange={setFilterStatus}
                          options={statusOptions}
                        />
                      </div>
                    </div>
                    <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                      <Link
                        to="#"
                        className="btn btn-light btn-md me-2"
                        id="close-filter"
                      >
                        Close
                      </Link>
                      <button type="submit" className="btn btn-primary btn-md">
                        Filter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown"
                >
                  <span className="me-1"> Sort By : </span> {
                    sortBy === "recent" || sortBy === "recentlyAdded" ? "Recently Added" :
                      sortBy === "ascending" ? "Ascending" :
                        sortBy === "descending" ? "Descending" :
                          sortBy === "lastMonth" ? "Last Month" :
                            sortBy === "last7Days" ? "Last 7 Days" : "Recent"
                  }
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1" onClick={() => setSortBy("recentlyAdded")}>
                      Recently Added
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1" onClick={() => setSortBy("ascending")}>
                      Ascending
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1" onClick={() => setSortBy("descending")}>
                      Descending
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1" onClick={() => setSortBy("lastMonth")}>
                      Last Month
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1" onClick={() => setSortBy("last7Days")}>
                      Last 7 Days
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={tableData}
              Selection={false}
              searchText={searchText}
            />
          </div>
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
        {/* Footer End */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
      <Modals onDelete={handleDelete} />
    </>
  );
};

export default DoctorsList;