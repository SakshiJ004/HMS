// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import { DatePicker, Select } from "antd";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";
// import EventCalendar from "../../../../../core/common/event-calendar/eventCalendar";

// const DoctorsAppointmentDetails = () => {
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
//           {/* Start Card */}
//           <div className="card mb-0">
//             <div className="card-body">
//               <div id="calendar">
//                 <EventCalendar />
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
import { useState, useEffect } from "react";
import { Select } from "antd";
import EventCalendar from "../../../../../core/common/event-calendar/eventCalendar";
import { getAllDoctorAppointments, type RecentAppointment } from "../../../../../api/doctorDashboardService";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import dayjs from "dayjs";

const DoctorsAppointmentDetails = () => {
  const [appointments, setAppointments] = useState<RecentAppointment[]>([]);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string[]>([]);
  const [calendarView, setCalendarView] = useState<'month' | 'week' | 'day'>('month');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await getAllDoctorAppointments();
      if (res.success) {
        setAppointments(res.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

  // Filter appointments
  const filteredAppointments = appointments.filter((apt: any) => {
    const matchesDateRange = !dateRange[0] || !dateRange[1] || (
      new Date(apt.appointmentDate) >= dateRange[0] &&
      new Date(apt.appointmentDate) <= dateRange[1]
    );
    const matchesStatus = filterStatus.length === 0 || filterStatus.includes(apt.status);
    const matchesType = filterType.length === 0 || filterType.includes(apt.appointmentType);
    return matchesDateRange && matchesStatus && matchesType;
  });

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableData = filteredAppointments.map((apt: any) => [
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
    doc.save('appointments-calendar.pdf');
  };

  const downloadExcel = () => {
    const excelData = filteredAppointments.map((apt: any) => ({
      'Date & Time': dayjs(apt.appointmentDate).format('DD MMM YYYY') + ' - ' + apt.appointmentTime,
      'Patient': apt.patient.fullName,
      'Phone': apt.patient.phone || apt.patient.email,
      'Mode': apt.appointmentType,
      'Status': apt.status,
    }));
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
    XLSX.writeFile(wb, 'appointments-calendar.xlsx');
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0"> Appointment </h4>
            </div>
            <div className="text-end d-flex">
              <div className="dropdown me-1">
                <Link to="#" className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center" data-bs-toggle="dropdown">
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
                <Link to={all_routes.doctorsappointments} className="bg-white rounded p-1 d-flex align-items-center justify-content-center">
                  <i className="ti ti-list fs-14 text-dark" />
                </Link>
                <Link to={all_routes.doctorsappointmentdetails} className="bg-light rounded p-1 d-flex align-items-center justify-content-center">
                  <i className="ti ti-calendar-event fs-14 text-body" />
                </Link>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="d-flex align-items-center gap-2">
              <div className="d-flex right-content align-items-center flex-wrap mb-3">
                <div className="dropdown">
                  <button className="btn btn-white border d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i className="ti ti-calendar-event me-2" />
                    {dateRange[0] && dateRange[1]
                      ? `${dayjs(dateRange[0]).format('DD/MM/YY')} - ${dayjs(dateRange[1]).format('DD/MM/YY')}`
                      : 'Select Date Range'}
                    <i className="ti ti-chevron-down ms-2" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-3" style={{ minWidth: '250px' }}>
                    <li><button className="dropdown-item rounded" onClick={() => handleDatePreset('today')} type="button">Today</button></li>
                    <li><button className="dropdown-item rounded" onClick={() => handleDatePreset('yesterday')} type="button">Yesterday</button></li>
                    <li><button className="dropdown-item rounded" onClick={() => handleDatePreset('last7days')} type="button">Last 7 Days</button></li>
                    <li><button className="dropdown-item rounded" onClick={() => handleDatePreset('last30days')} type="button">Last 30 Days</button></li>
                    <li><button className="dropdown-item rounded" onClick={() => handleDatePreset('thismonth')} type="button">This Month</button></li>
                    <li><button className="dropdown-item rounded" onClick={() => handleDatePreset('lastmonth')} type="button">Last Month</button></li>
                    <li><hr className="dropdown-divider my-2" /></li>
                    <li><button className="dropdown-item rounded text-primary fw-medium" onClick={() => setDateRange([null, null])} type="button"><i className="ti ti-x me-1" />Clear Filter</button></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link to="#" className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                  <i className="ti ti-filter text-gray-5 me-1" />
                  Filters
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0" id="filter-dropdown">
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header p-3">
                    <h4 className="mb-0 fw-bold">Filter</h4>
                    <button type="button" className="btn btn-link text-danger text-decoration-underline p-0" onClick={() => { setFilterStatus([]); setFilterType([]); }}>
                      Clear All
                    </button>
                  </div>
                  <div className="filter-body p-3">
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <label className="form-label mb-0">Appointment Type</label>
                        <button type="button" className="btn btn-link btn-sm p-0 link-primary" onClick={() => setFilterType([])}>Reset</button>
                      </div>
                      <Select mode="multiple" allowClear style={{ width: "100%" }} placeholder="Select type" value={filterType} onChange={setFilterType} options={[
                        { label: 'In-Person Visit', value: 'In-Person Visit' },
                        { label: 'Online Consultation', value: 'Online Consultation' }
                      ]}
                      />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <label className="form-label mb-0">Status</label>
                        <button type="button" className="btn btn-link btn-sm p-0 link-primary" onClick={() => setFilterStatus([])}>Reset</button>
                      </div>
                      <Select mode="multiple" allowClear style={{ width: "100%" }} placeholder="Select status" value={filterStatus} onChange={setFilterStatus} options={[
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
                <button className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14" data-bs-toggle="dropdown">
                  <span className="me-1">View:</span>
                  {calendarView === 'month' ? 'Month' : calendarView === 'week' ? 'Week' : 'Day'}
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li><button className="dropdown-item rounded" onClick={() => setCalendarView('month')}>Month</button></li>
                  <li><button className="dropdown-item rounded" onClick={() => setCalendarView('week')}>Week</button></li>
                  <li><button className="dropdown-item rounded" onClick={() => setCalendarView('day')}>Day</button></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-body">
              <div id="calendar">
                <EventCalendar appointments={filteredAppointments} view={calendarView} />
              </div>
            </div>
          </div>
        </div>

        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorsAppointmentDetails;