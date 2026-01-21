// import { Link } from "react-router";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import { useState, useEffect } from "react";
// import Datatable from "../../../../../core/common/dataTable/index";
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import { DatePicker, Select } from "antd";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";
// import { DoctorAppoinmentsData } from "../../../../../core/json/doctorAppointmentsData";
// import { all_routes } from "../../../../routes/all_routes";
// import Modal from "./modal/modals";
// import * as XLSX from 'xlsx';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { getRecentAppointments, type RecentAppointment } from "../../../../../api/doctorDashboardService";
// import dayjs from "dayjs";

// const DoctorAppointments = () => {
//   const data = DoctorAppoinmentsData;
//   const columns = [
//     {
//       title: "Date & Time",
//       dataIndex: "appointmentDate",
//       render: (text: any, record: any) => (
//         <span>
//           {dayjs(record.appointmentDate).format('DD MMM YYYY')} - {record.appointmentTime}
//         </span>
//       ),
//       sorter: (a: any, b: any) => new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime(),
//     },
//     {
//       title: "Patient",
//       dataIndex: "patient",
//       render: (patient: any) => (
//         <div className="d-flex align-items-center">
//           <Link to="#" className="avatar avatar-md me-2">
//             {patient.profileImage ? (
//               <img
//                 src={patient.profileImage}
//                 alt={patient.fullName}
//                 className="rounded-circle"
//               />
//             ) : (
//               <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
//                 {patient.fullName.charAt(0)}
//               </div>
//             )}
//           </Link>
//           <div>
//             <Link to="#" className="fw-semibold">
//               {patient.fullName}
//             </Link>
//             <span className="text-body fs-13 fw-normal d-block">
//               {patient.phone || patient.email}
//             </span>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.patient.fullName.localeCompare(b.patient.fullName),
//     },
//     {
//       title: "Mode",
//       dataIndex: "appointmentType",
//       sorter: (a: any, b: any) => a.appointmentType.localeCompare(b.appointmentType),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (text: string) => (
//         <span
//           className={`badge ${text === "Checked Out"
//               ? "bg-success"
//               : text === "Checked In"
//                 ? "bg-warning"
//                 : text === "Confirmed"
//                   ? "bg-info"
//                   : text === "Scheduled"
//                     ? "bg-primary"
//                     : "bg-danger"
//             } fw-medium fs-13`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.status.localeCompare(b.status),
//     },
//     {
//       title: "",
//       render: (_: any, record: any) => (
//         <div className="action-item">
//           <Link to="#" data-bs-toggle="dropdown">
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu p-2">
//             {/* ❌ REMOVED Edit and Delete */}
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="offcanvas"
//                 data-bs-target="#view_details"
//                 onClick={() => setSelectedAppointment(record)}
//               >
//                 <i className="ti ti-eye me-2" />
//                 View
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//     },
//   ];

//   const [appointments, setAppointments] = useState<RecentAppointment[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState<string>("");
//   const [selectedAppointment, setSelectedAppointment] = useState<RecentAppointment | null>(null);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       setLoading(true);
//       const res = await getRecentAppointments();
//       if (res.success) {
//         setAppointments(res.data);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//   };

//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };
//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     const tableData = recentAppointments.map((apt: any) => [
//       dayjs(apt.appointmentDate).format('DD MMM YYYY') + ' - ' + apt.appointmentTime,
//       apt.patient.fullName,
//       apt.appointmentType,
//       apt.status,
//     ]);

//     (doc as any).autoTable({
//       head: [['Date & Time', 'Patient', 'Mode', 'Status']],
//       body: tableData,
//       startY: 20,
//     });

//     doc.save('appointments.pdf');
//   };

//   const downloadExcel = () => {
//     const excelData = recentAppointments.map((apt: any) => ({
//       'Date & Time': dayjs(apt.appointmentDate).format('DD MMM YYYY') + ' - ' + apt.appointmentTime,
//       'Patient': apt.patient.fullName,
//       'Phone': apt.patient.phone || apt.patient.email,
//       'Mode': apt.appointmentType,
//       'Status': apt.status,
//     }));

//     const ws = XLSX.utils.json_to_sheet(excelData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
//     XLSX.writeFile(wb, 'appointments.xlsx');
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
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-semibold mb-0"> Appointment </h4>
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
//                     <Link className="dropdown-item" to="#" onClick={downloadPDF}>
//                       Download as PDF
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#" onClick={downloadExcel}>
//                       Download as Excel
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                 <Link
//                   to={all_routes.doctorsappointments}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-list fs-14 text-dark" />
//                 </Link>
//                 <Link
//                   to={all_routes.doctorsappointmentdetails}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-calendar-event fs-14 text-body" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/*  Start Filter */}
//           <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//             <div className="d-flex align-items-center gap-2">
//               <div className="search-set mb-3">
//                 <div className="d-flex align-items-center flex-wrap gap-2">
//                   <div className="table-search d-flex align-items-center mb-0">
//                     <div className="search-input">
//                       <SearchInput value={searchText} onChange={handleSearch} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex right-content align-items-center flex-wrap mb-3">
//                 <div className="input-icon-start position-relative">
//                   <span className="input-icon-addon text-dark">
//                     <i className="ti ti-calendar-event" />
//                   </span>
//                   <PredefinedDatePicker />
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
//               <div className="dropdown me-2">
//                 <Link
//                   to="#"
//                   className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
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
//                     <h4 className="mb-0 fw-bold">Filter</h4>
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
//                           <label className="form-label mb-1">Doctor</label>
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
//                         className="btn btn-light btn-md me-2 fw-medium"
//                         id="close-filter"
//                       >
//                         Close
//                       </Link>
//                       <button
//                         type="submit"
//                         className="btn btn-primary btn-md fw-medium"
//                       >
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
//           {/*  End Filter */}
//           {/*  Start Table */}
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={appointments}
//               Selection={false}
//               searchText={searchText}
//               loading={loading}
//             />
//           </div>
//           {/*  End Table */}
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
//       <Modal />
//     </>
//   );
// };

// export default DoctorAppointments;




// import { Link } from "react-router";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import { useState, useEffect } from "react";
// import Datatable from "../../../../../core/common/dataTable/index";
// // import { DatePicker, Select } from "antd";
// // import {
// //   Amount,
// //   Department,
// //   Designation,
// //   Doctor,
// //   Status,
// // } from "../../../../../core/common/selectOption";
// import { all_routes } from "../../../../routes/all_routes";
// import Modal from "./modal/modals";
// import * as XLSX from 'xlsx';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { getRecentAppointments, type RecentAppointment } from "../../../../../api/doctorDashboardService";
// import dayjs from "dayjs";

// const DoctorAppointments = () => {
//   // ✅ State declarations
//   const [appointments, setAppointments] = useState<RecentAppointment[]>([]);
//   const [_loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState<string>("");
//   const [selectedAppointment, setSelectedAppointment] = useState<RecentAppointment | null>(null);
//   const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
//   const [tempDateRange, setTempDateRange] = useState<[Date | null, Date | null]>([null, null]);
//   const [filterStatus, setFilterStatus] = useState<string[]>([]);
//   const [filterType, setFilterType] = useState<string[]>([]);
//   const [sortOrder, setSortOrder] = useState<'recent' | 'asc' | 'desc'>('recent');

//   // ✅ ADD date filter functions
//   const handleDatePreset = (preset: string) => {
//     const now = new Date();
//     let start: Date;
//     let end: Date = now;

//     switch (preset) {
//       case 'today':
//         start = new Date(now.setHours(0, 0, 0, 0));
//         break;
//       case 'yesterday':
//         start = new Date(now.setDate(now.getDate() - 1));
//         start.setHours(0, 0, 0, 0);
//         end = new Date(start);
//         end.setHours(23, 59, 59, 999);
//         break;
//       case 'last7days':
//         start = new Date(now.setDate(now.getDate() - 7));
//         break;
//       case 'last30days':
//         start = new Date(now.setDate(now.getDate() - 30));
//         break;
//       case 'thismonth':
//         start = new Date(now.getFullYear(), now.getMonth(), 1);
//         break;
//       case 'lastmonth':
//         start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
//         end = new Date(now.getFullYear(), now.getMonth(), 0);
//         break;
//       default:
//         return;
//     }

//     setDateRange([start, end]);
//   };
//   // ✅ Columns definition
//   const columns = [
//     {
//       title: "Date & Time",
//       dataIndex: "appointmentDate",
//       render: (_text: any, record: any) => (
//         <span>
//           {dayjs(record.appointmentDate).format('DD MMM YYYY')} - {record.appointmentTime}
//         </span>
//       ),
//       sorter: (a: any, b: any) => new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime(),
//     },
//     {
//       title: "Patient",
//       dataIndex: "patient",
//       render: (patient: any) => (
//         <div className="d-flex align-items-center">
//           <Link to="#" className="avatar avatar-md me-2">
//             {patient.profileImage ? (
//               <img
//                 src={patient.profileImage}
//                 alt={patient.fullName}
//                 className="rounded-circle"
//                 style={{ width: '40px', height: '40px', objectFit: 'cover' }}
//               />
//             ) : (
//               <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
//                 {patient.fullName.charAt(0)}
//               </div>
//             )}
//           </Link>
//           <div>
//             <Link to="#" className="fw-semibold">
//               {patient.fullName}
//             </Link>
//             <span className="text-body fs-13 fw-normal d-block">
//               {patient.phone || patient.email}
//             </span>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.patient.fullName.localeCompare(b.patient.fullName),
//     },
//     {
//       title: "Mode",
//       dataIndex: "appointmentType",
//       sorter: (a: any, b: any) => a.appointmentType.localeCompare(b.appointmentType),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (text: string) => (
//         <span
//           className={`badge ${text === "Checked Out"
//             ? "bg-success"
//             : text === "Checked In"
//               ? "bg-warning"
//               : text === "Confirmed"
//                 ? "bg-info"
//                 : text === "Scheduled"
//                   ? "bg-primary"
//                   : "bg-danger"
//             } fw-medium fs-13`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.status.localeCompare(b.status),
//     },
//     {
//       title: "",
//       render: (_: any, record: any) => (
//         <div className="action-item">
//           <Link to="#" data-bs-toggle="dropdown">
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu p-2">
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="offcanvas"
//                 data-bs-target="#view_details"
//                 onClick={() => setSelectedAppointment(record)}
//               >
//                 <i className="ti ti-eye me-2" />
//                 View
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//     },
//   ];

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       setLoading(true);
//       const res = await getRecentAppointments();
//       if (res.success) {
//         setAppointments(res.data);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//   };

//   // ✅ Fixed: Use appointments instead of recentAppointments
//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     const tableData = appointments.map((apt: any) => [
//       dayjs(apt.appointmentDate).format('DD MMM YYYY') + ' - ' + apt.appointmentTime,
//       apt.patient.fullName,
//       apt.appointmentType,
//       apt.status,
//     ]);

//     (doc as any).autoTable({
//       head: [['Date & Time', 'Patient', 'Mode', 'Status']],
//       body: tableData,
//       startY: 20,
//     });

//     doc.save('appointments.pdf');
//   };

//   // ✅ Fixed: Use appointments instead of recentAppointments
//   const downloadExcel = () => {
//     const excelData = appointments.map((apt: any) => ({
//       'Date & Time': dayjs(apt.appointmentDate).format('DD MMM YYYY') + ' - ' + apt.appointmentTime,
//       'Patient': apt.patient.fullName,
//       'Phone': apt.patient.phone || apt.patient.email,
//       'Mode': apt.appointmentType,
//       'Status': apt.status,
//     }));

//     const ws = XLSX.utils.json_to_sheet(excelData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
//     XLSX.writeFile(wb, 'appointments.xlsx');
//   };

//   const filteredAppointments = appointments.filter((apt: any) => {
//     // Search filter
//     const searchLower = searchText.toLowerCase();
//     const matchesSearch = searchText === '' || (
//       apt.patient.fullName.toLowerCase().includes(searchLower) ||
//       apt.patient.email.toLowerCase().includes(searchLower) ||
//       (apt.patient.phone && apt.patient.phone.toLowerCase().includes(searchLower)) ||
//       apt.appointmentType.toLowerCase().includes(searchLower) ||
//       apt.status.toLowerCase().includes(searchLower)
//     );

//     // Date range filter
//     const matchesDateRange = !dateRange[0] || !dateRange[1] || (
//       new Date(apt.appointmentDate) >= dateRange[0] &&
//       new Date(apt.appointmentDate) <= dateRange[1]
//     );

//     // Status filter
//     const matchesStatus = filterStatus.length === 0 || filterStatus.includes(apt.status);

//     // Type filter
//     const matchesType = filterType.length === 0 || filterType.includes(apt.appointmentType);

//     return matchesSearch && matchesDateRange && matchesStatus && matchesType;
//   });

//   // ✅ Apply sorting
//   const sortedAndFilteredAppointments = getSortedAppointments(filteredAppointments);

//   const getSortedAppointments = (data: any[]) => {
//     const sorted = [...data];

//     if (sortOrder === 'asc') {
//       return sorted.sort((a, b) =>
//         new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime()
//       );
//     } else if (sortOrder === 'desc') {
//       return sorted.sort((a, b) =>
//         new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime()
//       );
//     } else {
//       // Recent = newest first
//       return sorted.sort((a, b) =>
//         new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime()
//       );
//     }
//   };

//   return (
//     <>
//       <div className="page-wrapper">
//         <div className="content">
//           {/* Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-semibold mb-0"> Appointment </h4>
//             </div>
//             <div className="text-end d-flex">
//               {/* Export Dropdown */}
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
//                     <button className="dropdown-item" onClick={downloadPDF} style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}>
//                       Download as PDF
//                     </button>
//                   </li>
//                   <li>
//                     <button className="dropdown-item" onClick={downloadExcel} style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}>
//                       Download as Excel
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//               {/* View Toggle */}
//               <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                 <Link
//                   to={all_routes.doctorsappointments}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-list fs-14 text-dark" />
//                 </Link>
//                 <Link
//                   to={all_routes.doctorsappointmentdetails}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-calendar-event fs-14 text-body" />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Filters */}
//           <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//             <div className="d-flex align-items-center gap-2">
//               <div className="search-set mb-3">
//                 <div className="d-flex align-items-center flex-wrap gap-2">
//                   <div className="table-search d-flex align-items-center mb-0">
//                     <div className="search-input">
//                       <SearchInput value={searchText} onChange={handleSearch} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* <div className="d-flex right-content align-items-center flex-wrap mb-3">
//                 <div className="input-icon-start position-relative">
//                   <span className="input-icon-addon text-dark">
//                     <i className="ti ti-calendar-event" />
//                   </span>
//                   <PredefinedDatePicker />
//                 </div>
//               </div> */}
//               <div className="d-flex right-content align-items-center flex-wrap mb-3">
//                 <div className="dropdown">
//                   <button
//                     className="btn btn-white border d-inline-flex align-items-center"
//                     data-bs-toggle="dropdown"
//                   >
//                     <i className="ti ti-calendar-event me-2" />
//                     {dateRange[0] && dateRange[1]
//                       ? `${dayjs(dateRange[0]).format('DD/MM/YY')} - ${dayjs(dateRange[1]).format('DD/MM/YY')}`
//                       : 'Select Date Range'}
//                     <i className="ti ti-chevron-down ms-2" />
//                   </button>
//                   <ul className="dropdown-menu p-2">
//                     <li>
//                       <button className="dropdown-item" onClick={() => handleDatePreset('today')}>
//                         Today
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" onClick={() => handleDatePreset('yesterday')}>
//                         Yesterday
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" onClick={() => handleDatePreset('last7days')}>
//                         Last 7 Days
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" onClick={() => handleDatePreset('last30days')}>
//                         Last 30 Days
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" onClick={() => handleDatePreset('thismonth')}>
//                         This Month
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" onClick={() => handleDatePreset('lastmonth')}>
//                         Last Month
//                       </button>
//                     </li>
//                     <li>
//                       <hr className="dropdown-divider" />
//                     </li>
//                     <li className="px-2">
//                       <label className="form-label mb-1">Custom Range</label>
//                       <DatePicker.RangePicker
//                         format="DD-MM-YYYY"
//                         onChange={(dates) => {
//                           if (dates) {
//                             setDateRange([dates[0]?.toDate() || null, dates[1]?.toDate() || null]);
//                           }
//                         }}
//                         className="form-control"
//                       />
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
//               {/* Filter Dropdown */}
//               <div className="dropdown me-2">
//                 <Link
//                   to="#"
//                   className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
//                   data-bs-toggle="dropdown"
//                   data-bs-auto-close="outside"
//                 >
//                   <i className="ti ti-filter text-gray-5 me-1" />
//                   Filters
//                 </Link>
//                 <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0" id="filter-dropdown">
//                   <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
//                     <h4 className="mb-0 fw-bold">Filter</h4>
//                     <div className="d-flex align-items-center">
//                       <Link to="#" className="link-danger text-decoration-underline">
//                         Clear All
//                       </Link>
//                     </div>
//                   </div>
//                   <form action="#">
//                     <div className="filter-body pb-0">
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Appointment Type</label>
//                           <button
//                             type="button"
//                             className="btn btn-link btn-sm p-0 link-primary"
//                             onClick={() => setFilterType([])}
//                           >
//                             Reset
//                           </button>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Select type"
//                           value={filterType}
//                           onChange={setFilterType}
//                           options={[
//                             { label: 'In-Person Visit', value: 'In-Person Visit' },
//                             { label: 'Online Consultation', value: 'Online Consultation' }
//                           ]}
//                         />
//                       </div>

//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Status</label>
//                           <button
//                             type="button"
//                             className="btn btn-link btn-sm p-0 link-primary"
//                             onClick={() => setFilterStatus([])}
//                           >
//                             Reset
//                           </button>
//                         </div>
//                         <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Select status"
//                           value={filterStatus}
//                           onChange={setFilterStatus}
//                           options={[
//                             { label: 'Scheduled', value: 'Scheduled' },
//                             { label: 'Confirmed', value: 'Confirmed' },
//                             { label: 'Checked In', value: 'Checked In' },
//                             { label: 'Checked Out', value: 'Checked Out' },
//                             { label: 'Cancelled', value: 'Cancelled' }
//                           ]}
//                         />
//                       </div>
//                     </div>

//                     <div className="filter-footer d-flex align-items-center justify-content-end border-top">
//                       <button
//                         type="button"
//                         className="btn btn-light btn-md me-2 fw-medium"
//                         onClick={() => {
//                           setFilterStatus([]);
//                           setFilterType([]);
//                         }}
//                       >
//                         Clear All
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn-primary btn-md fw-medium"
//                         data-bs-dismiss="offcanvas"
//                       >
//                         Apply Filter
//                       </button>
//                     </div>
//                     <div className="filter-footer d-flex align-items-center justify-content-end border-top">
//                       <Link to="#" className="btn btn-light btn-md me-2 fw-medium" id="close-filter">
//                         Close
//                       </Link>
//                       <button type="submit" className="btn btn-primary btn-md fw-medium">
//                         Filter
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               {/* Sort Dropdown */}
//               <div className="dropdown">
//                 <button
//                   className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
//                   data-bs-toggle="dropdown"
//                 >
//                   <span className="me-1">Sort By:</span>
//                   {sortOrder === 'recent' ? 'Recently Added' : sortOrder === 'asc' ? 'Ascending' : 'Descending'}
//                 </button>
//                 <ul className="dropdown-menu dropdown-menu-end p-2">
//                   <li>
//                     <button className="dropdown-item" onClick={() => setSortOrder('recent')}>
//                       Recently Added
//                     </button>
//                   </li>
//                   <li>
//                     <button className="dropdown-item" onClick={() => setSortOrder('asc')}>
//                       Ascending
//                     </button>
//                   </li>
//                   <li>
//                     <button className="dropdown-item" onClick={() => setSortOrder('desc')}>
//                       Descending
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={filteredAppointments}
//               Selection={false}
//               searchText=""
//             />
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="footer text-center bg-white p-2 border-top">
//           <p className="text-dark mb-0">
//             2025 ©
//             <Link to="#" className="link-primary">
//               Preclinic
//             </Link>
//             , All Rights Reserved
//           </p>
//         </div>
//       </div>

//       {/* ✅ Fixed: Pass selectedAppointment prop */}
//       <Modal selectedAppointment={selectedAppointment} />
//     </>
//   );
// };

// export default DoctorAppointments;



import { Link } from "react-router";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import { useState, useEffect } from "react";
import Datatable from "../../../../../core/common/dataTable/index";
import { DatePicker, Select } from "antd"; // ✅ UNCOMMENT THIS
import { all_routes } from "../../../../routes/all_routes";
import Modal from "./modal/modals";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { getRecentAppointments, type RecentAppointment } from "../../../../../api/doctorDashboardService";
import dayjs from "dayjs";
import type { Dayjs } from 'dayjs'; // ✅ ADD THIS

const DoctorAppointments = () => {
  // ✅ State declarations
  const [appointments, setAppointments] = useState<RecentAppointment[]>([]);
  const [_loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedAppointment, setSelectedAppointment] = useState<RecentAppointment | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'recent' | 'asc' | 'desc'>('recent');

  // ✅ MOVE getSortedAppointments BEFORE it's used
  const getSortedAppointments = (data: any[]) => {
    const sorted = [...data];

    if (sortOrder === 'asc') {
      return sorted.sort((a, b) =>
        new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime()
      );
    } else if (sortOrder === 'desc') {
      return sorted.sort((a, b) =>
        new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime()
      );
    } else {
      // Recent = newest first
      return sorted.sort((a, b) =>
        new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime()
      );
    }
  };

  // ✅ Date filter function
  const handleDatePreset = (preset: string) => {
    const now = new Date();
    let start: Date;
    let end: Date = new Date();

    switch (preset) {
      case 'today':
        start = new Date();
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        break;
      case 'yesterday':
        start = new Date();
        start.setDate(start.getDate() - 1);
        start.setHours(0, 0, 0, 0);
        end = new Date(start);
        end.setHours(23, 59, 59, 999);
        break;
      case 'last7days':
        start = new Date();
        start.setDate(start.getDate() - 7);
        start.setHours(0, 0, 0, 0);
        break;
      case 'last30days':
        start = new Date();
        start.setDate(start.getDate() - 30);
        start.setHours(0, 0, 0, 0);
        break;
      case 'thismonth':
        start = new Date(now.getFullYear(), now.getMonth(), 1);
        start.setHours(0, 0, 0, 0);
        break;
      case 'lastmonth':
        start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        start.setHours(0, 0, 0, 0);
        end = new Date(now.getFullYear(), now.getMonth(), 0);
        end.setHours(23, 59, 59, 999);
        break;
      default:
        return;
    }

    setDateRange([start, end]);
  };

  // ✅ Columns definition
  const columns = [
    {
      title: "Date & Time",
      dataIndex: "appointmentDate",
      render: (_text: any, record: any) => (
        <span>
          {dayjs(record.appointmentDate).format('DD MMM YYYY')} - {record.appointmentTime}
        </span>
      ),
      sorter: (a: any, b: any) => new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime(),
    },
    {
      title: "Patient",
      dataIndex: "patient",
      render: (patient: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            {patient.profileImage ? (
              <img
                src={patient.profileImage}
                alt={patient.fullName}
                className="rounded-circle"
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
              />
            ) : (
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                {patient.fullName.charAt(0)}
              </div>
            )}
          </Link>
          <div>
            <Link to="#" className="fw-semibold">
              {patient.fullName}
            </Link>
            <span className="text-body fs-13 fw-normal d-block">
              {patient.phone || patient.email}
            </span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.patient.fullName.localeCompare(b.patient.fullName),
    },
    {
      title: "Mode",
      dataIndex: "appointmentType",
      sorter: (a: any, b: any) => a.appointmentType.localeCompare(b.appointmentType),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string) => (
        <span
          className={`badge ${text === "Checked Out"
              ? "bg-success"
              : text === "Checked In"
                ? "bg-warning"
                : text === "Confirmed"
                  ? "bg-info"
                  : text === "Scheduled"
                    ? "bg-primary"
                    : "bg-danger"
            } fw-medium fs-13`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.status.localeCompare(b.status),
    },
    {
      title: "",
      render: (_: any, record: any) => (
        <div className="action-item">
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#view_details"
                onClick={() => setSelectedAppointment(record)}
              >
                <i className="ti ti-eye me-2" />
                View
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await getRecentAppointments();
      if (res.success) {
        setAppointments(res.data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    const tableData = appointments.map((apt: any) => [
      dayjs(apt.appointmentDate).format('DD MMM YYYY') + ' - ' + apt.appointmentTime,
      apt.patient.fullName,
      apt.appointmentType,
      apt.status,
    ]);

    (doc as any).autoTable({
      head: [['Date & Time', 'Patient', 'Mode', 'Status']],
      body: tableData,
      startY: 20,
    });

    doc.save('appointments.pdf');
  };

  const downloadExcel = () => {
    const excelData = appointments.map((apt: any) => ({
      'Date & Time': dayjs(apt.appointmentDate).format('DD MMM YYYY') + ' - ' + apt.appointmentTime,
      'Patient': apt.patient.fullName,
      'Phone': apt.patient.phone || apt.patient.email,
      'Mode': apt.appointmentType,
      'Status': apt.status,
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
    XLSX.writeFile(wb, 'appointments.xlsx');
  };

  // ✅ Filter logic
  const filteredAppointments = appointments.filter((apt: any) => {
    const searchLower = searchText.toLowerCase();
    const matchesSearch = searchText === '' || (
      apt.patient.fullName.toLowerCase().includes(searchLower) ||
      apt.patient.email.toLowerCase().includes(searchLower) ||
      (apt.patient.phone && apt.patient.phone.toLowerCase().includes(searchLower)) ||
      apt.appointmentType.toLowerCase().includes(searchLower) ||
      apt.status.toLowerCase().includes(searchLower)
    );

    const matchesDateRange = !dateRange[0] || !dateRange[1] || (
      new Date(apt.appointmentDate) >= dateRange[0] &&
      new Date(apt.appointmentDate) <= dateRange[1]
    );

    const matchesStatus = filterStatus.length === 0 || filterStatus.includes(apt.status);
    const matchesType = filterType.length === 0 || filterType.includes(apt.appointmentType);

    return matchesSearch && matchesDateRange && matchesStatus && matchesType;
  });

  // ✅ Apply sorting
  const sortedAndFilteredAppointments = getSortedAppointments(filteredAppointments);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-semibold mb-0"> Appointment </h4>
            </div>
            <div className="text-end d-flex">
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
                    <button className="dropdown-item" onClick={downloadPDF} style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}>
                      Download as PDF
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={downloadExcel} style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}>
                      Download as Excel
                    </button>
                  </li>
                </ul>
              </div>
              <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                <Link
                  to={all_routes.doctorsappointments}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-dark" />
                </Link>
                <Link
                  to={all_routes.doctorsappointmentdetails}
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-calendar-event fs-14 text-body" />
                </Link>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="d-flex align-items-center gap-2">
              <div className="search-set mb-3">
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <div className="table-search d-flex align-items-center mb-0">
                    <div className="search-input">
                      <SearchInput value={searchText} onChange={handleSearch} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex right-content align-items-center flex-wrap mb-3">
                <div className="dropdown">
                  <button
                    className="btn btn-white border d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-calendar-event me-2" />
                    {dateRange[0] && dateRange[1]
                      ? `${dayjs(dateRange[0]).format('DD/MM/YY')} - ${dayjs(dateRange[1]).format('DD/MM/YY')}`
                      : 'Select Date Range'}
                    <i className="ti ti-chevron-down ms-2" />
                  </button>
                  <ul className="dropdown-menu p-2">
                    <li>
                      <button className="dropdown-item" onClick={() => handleDatePreset('today')}>
                        Today
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleDatePreset('yesterday')}>
                        Yesterday
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleDatePreset('last7days')}>
                        Last 7 Days
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleDatePreset('last30days')}>
                        Last 30 Days
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleDatePreset('thismonth')}>
                        This Month
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleDatePreset('lastmonth')}>
                        Last Month
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="px-2">
                      <label className="form-label mb-1">Custom Range</label>
                      <DatePicker.RangePicker
                        format="DD-MM-YYYY"
                        onChange={(dates: [Dayjs | null, Dayjs | null] | null) => {
                          if (dates && dates[0] && dates[1]) {
                            setDateRange([dates[0].toDate(), dates[1].toDate()]);
                          } else {
                            setDateRange([null, null]);
                          }
                        }}
                        className="form-control"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter text-gray-5 me-1" />
                  Filters
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0" id="filter-dropdown">
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header p-3">
                    <h4 className="mb-0 fw-bold">Filter</h4>
                    <button
                      type="button"
                      className="btn btn-link text-danger text-decoration-underline p-0"
                      onClick={() => {
                        setFilterStatus([]);
                        setFilterType([]);
                      }}
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="filter-body p-3">
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <label className="form-label mb-0">Appointment Type</label>
                        <button
                          type="button"
                          className="btn btn-link btn-sm p-0 link-primary"
                          onClick={() => setFilterType([])}
                        >
                          Reset
                        </button>
                      </div>
                      <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Select type"
                        value={filterType}
                        onChange={setFilterType}
                        options={[
                          { label: 'In-Person Visit', value: 'In-Person Visit' },
                          { label: 'Online Consultation', value: 'Online Consultation' }
                        ]}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <label className="form-label mb-0">Status</label>
                        <button
                          type="button"
                          className="btn btn-link btn-sm p-0 link-primary"
                          onClick={() => setFilterStatus([])}
                        >
                          Reset
                        </button>
                      </div>
                      <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Select status"
                        value={filterStatus}
                        onChange={setFilterStatus}
                        options={[
                          { label: 'Scheduled', value: 'Scheduled' },
                          { label: 'Confirmed', value: 'Confirmed' },
                          { label: 'Checked In', value: 'Checked In' },
                          { label: 'Checked Out', value: 'Checked Out' },
                          { label: 'Cancelled', value: 'Cancelled' }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown"
                >
                  <span className="me-1">Sort By:</span>
                  {sortOrder === 'recent' ? 'Recently Added' : sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <button className="dropdown-item" onClick={() => setSortOrder('recent')}>
                      Recently Added
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSortOrder('asc')}>
                      Ascending
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSortOrder('desc')}>
                      Descending
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={sortedAndFilteredAppointments}
              Selection={false}
              searchText=""
            />
          </div>
        </div>

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

      <Modal selectedAppointment={selectedAppointment} />
    </>
  );
};

export default DoctorAppointments;