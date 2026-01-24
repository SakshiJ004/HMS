// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import { DatePicker, Select } from "antd";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   // Status,
// } from "../../../../../core/common/selectOption";
// import EventCalendar from "../../../../../core/common/event-calendar/eventCalendar";
// import { useEffect, useState } from "react";
// import { getAllDoctorAppointments } from "../../../../../api/doctorDashboardService";
// import dayjs from "dayjs";
// import * as XLSX from 'xlsx';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const DoctorsAppointmentDetails = () => {

//   const [appointments, setAppointments] = useState<any[]>([]);
//   const [_loading, setLoading] = useState(true);
//   const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
//   const [filterStatus, setFilterStatus] = useState<string[]>([]);
//   const [filterType, setFilterType] = useState<string[]>([]);
//   const [filterDepartment, setFilterDepartment] = useState<string[]>([]);
//   const [sortOrder, setSortOrder] = useState<'recent' | 'asc' | 'desc' | 'lastmonth' | 'last7days'>('recent');

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       setLoading(true);
//       const res = await getAllDoctorAppointments();
//       if (res.success) {
//         setAppointments(res.data);
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDatePreset = (preset: string) => {
//     const now = new Date();
//     let start: Date;
//     let end: Date = new Date();

//     switch (preset) {
//       case 'today':
//         start = new Date();
//         start.setHours(0, 0, 0, 0);
//         end.setHours(23, 59, 59, 999);
//         break;
//       case 'yesterday':
//         start = new Date();
//         start.setDate(start.getDate() - 1);
//         start.setHours(0, 0, 0, 0);
//         end = new Date(start);
//         end.setHours(23, 59, 59, 999);
//         break;
//       case 'last7days':
//         start = new Date();
//         start.setDate(start.getDate() - 7);
//         start.setHours(0, 0, 0, 0);
//         break;
//       case 'last30days':
//         start = new Date();
//         start.setDate(start.getDate() - 30);
//         start.setHours(0, 0, 0, 0);
//         break;
//       case 'thismonth':
//         start = new Date(now.getFullYear(), now.getMonth(), 1);
//         start.setHours(0, 0, 0, 0);
//         break;
//       case 'lastmonth':
//         start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
//         start.setHours(0, 0, 0, 0);
//         end = new Date(now.getFullYear(), now.getMonth(), 0);
//         end.setHours(23, 59, 59, 999);
//         break;
//       default:
//         return;
//     }

//     setDateRange([start, end]);
//   };

//   const getFilteredAppointments = () => {
//     return appointments.filter((apt: any) => {
//       // Date range filter
//       const matchesDateRange = !dateRange[0] || !dateRange[1] || (
//         new Date(apt.appointmentDate) >= dateRange[0] &&
//         new Date(apt.appointmentDate) <= dateRange[1]
//       );

//       // Status filter
//       const matchesStatus = filterStatus.length === 0 || filterStatus.includes(apt.status);

//       // Type filter
//       const matchesType = filterType.length === 0 || filterType.includes(apt.appointmentType);

//       // Department filter (if your data has department field)
//       const matchesDepartment = filterDepartment.length === 0 || filterDepartment.includes(apt.department);

//       return matchesDateRange && matchesStatus && matchesType && matchesDepartment;
//     });
//   };

//   const getSortedAppointments = (data: any[]) => {
//     const sorted = [...data];
//     const now = new Date();

//     switch (sortOrder) {
//       case 'asc':
//         return sorted.sort((a, b) =>
//           new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime()
//         );
//       case 'desc':
//         return sorted.sort((a, b) =>
//           new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime()
//         );
//       case 'lastmonth':
//         const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
//         const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
//         return sorted.filter(a => {
//           const date = new Date(a.appointmentDate);
//           return date >= lastMonthStart && date <= lastMonthEnd;
//         }).sort((a, b) => new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime());
//       case 'last7days':
//         const sevenDaysAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
//         return sorted.filter(a => new Date(a.appointmentDate) >= sevenDaysAgo)
//           .sort((a, b) => new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime());
//       case 'recent':
//       default:
//         return sorted.sort((a, b) =>
//           new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime()
//         );
//     }
//   };
//   const filteredAppointments = getFilteredAppointments();
//   const sortedAndFilteredAppointments = getSortedAppointments(filteredAppointments);

//   const downloadPDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text('Appointments Calendar Report', 14, 15);

//     const tableData = sortedAndFilteredAppointments.map((apt: any) => [
//       dayjs(apt.appointmentDate).format('DD MMM YYYY'),
//       apt.appointmentTime,
//       apt.patient.fullName,
//       apt.appointmentType,
//       apt.status,
//     ]);

//     (doc as any).autoTable({
//       head: [['Date', 'Time', 'Patient', 'Mode', 'Status']],
//       body: tableData,
//       startY: 22,
//       headStyles: { fillColor: [41, 98, 255] },
//       styles: { fontSize: 9 }
//     });

//     doc.save(`calendar-appointments-${dayjs().format('DD-MM-YYYY')}.pdf`);
//   };

//   const downloadExcel = () => {
//     const excelData = sortedAndFilteredAppointments.map((apt: any) => ({
//       'Date': dayjs(apt.appointmentDate).format('DD MMM YYYY'),
//       'Time': apt.appointmentTime,
//       'Patient': apt.patient.fullName,
//       'Contact': apt.patient.phone || apt.patient.email,
//       'Mode': apt.appointmentType,
//       'Status': apt.status,
//     }));

//     const ws = XLSX.utils.json_to_sheet(excelData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
//     XLSX.writeFile(wb, `calendar-appointments-${dayjs().format('DD-MM-YYYY')}.xlsx`);
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
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0"> Appointment </h4>
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
//                     <button
//                       className="dropdown-item"
//                       onClick={downloadPDF}
//                       style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
//                     >
//                       Download as PDF
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={downloadExcel}
//                       style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
//                     >
//                       Download as Excel
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                 <Link
//                   to={all_routes.doctorsappointments}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-list fs-14 text-dark" />
//                 </Link>
//                 <Link
//                   to={all_routes.doctorsappointmentdetails}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
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
//                       <Link to="#" className="btn-searchset" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
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
//                         onChange={(dates: any) => {
//                           if (dates && dates[0] && dates[1]) {
//                             setDateRange([dates[0].toDate(), dates[1].toDate()]);
//                           } else {
//                             setDateRange([null, null]);
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
//                       <button
//                         type="button"
//                         className="btn btn-link text-danger text-decoration-underline p-0"
//                         onClick={() => {
//                           setFilterStatus([]);
//                           setFilterType([]);
//                           setFilterDepartment([]);
//                           setDateRange([null, null]);
//                         }}
//                       >
//                         Clear All
//                       </button>
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
//                         <div className="d-flex align-items-center justify-content-between mb-2">
//                           <label className="form-label mb-0">Status</label>
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
//                 <button
//                   className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
//                   data-bs-toggle="dropdown"
//                 >
//                   <span className="me-1">Sort By:</span>
//                   {sortOrder === 'recent' ? 'Recently Added' :
//                     sortOrder === 'asc' ? 'Ascending' :
//                       sortOrder === 'desc' ? 'Descending' :
//                         sortOrder === 'lastmonth' ? 'Last Month' :
//                           'Last 7 Days'}
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
//                   <li>
//                     <button className="dropdown-item" onClick={() => setSortOrder('lastmonth')}>
//                       Last Month
//                     </button>
//                   </li>
//                   <li>
//                     <button className="dropdown-item" onClick={() => setSortOrder('last7days')}>
//                       Last 7 Days
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/*  End Filter */}
//           {/* Start Card */}
//           <div className="card mb-0">
//             <div className="card-body">
//               <div id="calendar">
//                 <EventCalendar appointments={sortedAndFilteredAppointments} />
//               </div>
//             </div>
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

// export default DoctorsAppointmentDetails;


import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { DatePicker, Select } from "antd";
import EventCalendar from "../../../../../core/common/event-calendar/eventCalendar";
import { useState, useEffect } from "react";
import { getAllDoctorAppointments } from "../../../../../api/doctorDashboardService";
import dayjs from "dayjs";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const DoctorsAppointmentDetails = () => {
  // ===== STEP 1: STATE VARIABLES =====
  const [appointments, setAppointments] = useState<any[]>([]);
  const [_loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string[]>([]);
  const [filterDepartment, setFilterDepartment] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'recent' | 'asc' | 'desc' | 'lastmonth' | 'last7days'>('recent');

  // ===== STEP 2: FETCH APPOINTMENTS =====
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await getAllDoctorAppointments();
      if (res.success) {
        setAppointments(res.data);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  // ===== STEP 4: DATE FILTER HANDLER =====
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

  // ===== STEP 5: FILTER LOGIC =====
  const getFilteredAppointments = () => {
    return appointments.filter((apt: any) => {
      const matchesDateRange = !dateRange[0] || !dateRange[1] || (
        new Date(apt.appointmentDate) >= dateRange[0] &&
        new Date(apt.appointmentDate) <= dateRange[1]
      );

      const matchesStatus = filterStatus.length === 0 || filterStatus.includes(apt.status);
      const matchesType = filterType.length === 0 || filterType.includes(apt.appointmentType);
      const matchesDepartment = filterDepartment.length === 0 || filterDepartment.includes(apt.department);

      return matchesDateRange && matchesStatus && matchesType && matchesDepartment;
    });
  };

  // ===== STEP 6: SORTING LOGIC =====
  const getSortedAppointments = (data: any[]) => {
    const sorted = [...data];
    const now = new Date();

    switch (sortOrder) {
      case 'asc':
        return sorted.sort((a, b) =>
          new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime()
        );
      case 'desc':
        return sorted.sort((a, b) =>
          new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime()
        );
      case 'lastmonth':
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        return sorted.filter(a => {
          const date = new Date(a.appointmentDate);
          return date >= lastMonthStart && date <= lastMonthEnd;
        }).sort((a, b) => new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime());
      case 'last7days':
        const sevenDaysAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
        return sorted.filter(a => new Date(a.appointmentDate) >= sevenDaysAgo)
          .sort((a, b) => new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime());
      case 'recent':
      default:
        return sorted.sort((a, b) =>
          new Date(b.appointmentDate).getTime() - new Date(a.appointmentDate).getTime()
        );
    }
  };

  // ===== STEP 7: COMBINE FILTER AND SORT =====
  const filteredAppointments = getFilteredAppointments();
  const sortedAndFilteredAppointments = getSortedAppointments(filteredAppointments);

  const downloadPDF = () => {
    try {
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.text('Appointments Calendar Report', 14, 15);

      // Add date
      doc.setFontSize(10);
      doc.text(`Generated on: ${dayjs().format('DD MMM YYYY HH:mm')}`, 14, 25);

      const tableData = sortedAndFilteredAppointments.map((apt: any) => [
        dayjs(apt.appointmentDate).format('DD MMM YYYY'),
        apt.appointmentTime,
        apt.patient.fullName,
        apt.appointmentType,
        apt.status,
      ]);

      autoTable(doc, {
        head: [['Date', 'Time', 'Patient', 'Mode', 'Status']],
        body: tableData,
        startY: 30,
        theme: 'grid',
        headStyles: { fillColor: [41, 98, 255] },
        styles: { fontSize: 9 }
      });

      doc.save(`calendar-appointments-${dayjs().format('DD-MM-YYYY')}.pdf`);
    } catch (error) {
      console.error('PDF export error:', error);
      alert('Failed to download PDF. Please try again.');
    }
  };

  const downloadExcel = () => {
    const excelData = sortedAndFilteredAppointments.map((apt: any) => ({
      'Date': dayjs(apt.appointmentDate).format('DD MMM YYYY'),
      'Time': apt.appointmentTime,
      'Patient': apt.patient.fullName,
      'Contact': apt.patient.phone || apt.patient.email,
      'Mode': apt.appointmentType,
      'Status': apt.status,
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
    XLSX.writeFile(wb, `calendar-appointments-${dayjs().format('DD-MM-YYYY')}.xlsx`);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* ===== PAGE HEADER ===== */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0"> Appointment </h4>
            </div>
            <div className="text-end d-flex">
              {/* ===== STEP 9: EXPORT DROPDOWN ===== */}
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
                    <button
                      className="dropdown-item"
                      onClick={downloadPDF}
                      style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                    >
                      Download as PDF
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={downloadExcel}
                      style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                    >
                      Download as Excel
                    </button>
                  </li>
                </ul>
              </div>
              <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                <Link
                  to={all_routes.doctorsappointments}
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-dark" />
                </Link>
                <Link
                  to={all_routes.doctorsappointmentdetails}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-calendar-event fs-14 text-body" />
                </Link>
              </div>
            </div>
          </div>

          {/* ===== FILTERS SECTION ===== */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="d-flex align-items-center gap-2">
              <div className="search-set mb-3">
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <div className="table-search d-flex align-items-center mb-0">
                    <div className="search-input">
                      <Link to="#" className="btn-searchset" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== STEP 10 & 11: DATE RANGE PICKER ===== */}
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
                    <li className="px-2" onClick={(e) => e.stopPropagation()}>
                      <label className="form-label mb-1">Custom Range</label>
                      <DatePicker.RangePicker
                        format="DD-MM-YYYY"
                        onChange={(dates: any) => {
                          if (dates && dates[0] && dates[1]) {
                            setDateRange([dates[0].toDate(), dates[1].toDate()]);
                          } else {
                            setDateRange([null, null]);
                          }
                        }}
                        className="form-control"
                        getPopupContainer={(trigger) => {
                          return trigger.parentElement?.parentElement || document.body;
                        }}
                        disabledDate={() => false}
                        allowClear
                      />
                    </li>
                  </ul>
                </div>
                {(dateRange[0] || dateRange[1]) && (
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => setDateRange([null, null])}
                    title="Clear date filter"
                  >
                    <i className="ti ti-x" />
                  </button>
                )}
              </div>
            </div>

            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              {/* ===== STEP 12: FILTERS DROPDOWN ===== */}
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
                <div
                  className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
                  id="filter-dropdown"
                >
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header p-3">
                    <h4 className="mb-0 fw-bold">Filter</h4>
                    <button
                      type="button"
                      className="btn btn-link text-danger text-decoration-underline p-0"
                      onClick={() => {
                        setFilterStatus([]);
                        setFilterType([]);
                        setFilterDepartment([]);
                        setDateRange([null, null]);
                      }}
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="filter-body p-3">
                    {/* Status Filter */}
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

                    {/* Appointment Type Filter */}
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
                  </div>
                </div>
              </div>

              {/* ===== STEP 14: SORT BY DROPDOWN ===== */}
              <div className="dropdown">
                <button
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown"
                >
                  <span className="me-1">Sort By:</span>
                  {sortOrder === 'recent' ? 'Recently Added' :
                    sortOrder === 'asc' ? 'Ascending' :
                      sortOrder === 'desc' ? 'Descending' :
                        sortOrder === 'lastmonth' ? 'Last Month' :
                          'Last 7 Days'}
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
                  <li>
                    <button className="dropdown-item" onClick={() => setSortOrder('lastmonth')}>
                      Last Month
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setSortOrder('last7days')}>
                      Last 7 Days
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ===== STEP 15: CALENDAR WITH FILTERED DATA ===== */}
          <div className="card mb-0">
            <div className="card-body">
              <div id="calendar">
                <EventCalendar appointments={sortedAndFilteredAppointments} />
              </div>
            </div>
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
    </>
  );
};

export default DoctorsAppointmentDetails;