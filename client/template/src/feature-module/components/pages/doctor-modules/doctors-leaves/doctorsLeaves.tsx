// import { DatePicker, Select } from "antd";
// import { Link } from "react-router";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";
// import { useState } from "react";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import { DoctorLeavesData } from "../../../../../core/json/doctorLeavesData";
// import Datatable from "../../../../../core/common/dataTable";
// import Modals from "./modals/modals";

// const DoctorsLeaves = () => {
//   const data = DoctorLeavesData;
//   const columns = [
//     {
//       title: "Date",
//       dataIndex: "Date",
//       sorter: (a: any, b: any) => a.Date.length - b.Date.length,
//     },
//     {
//       title: "Leave Type",
//       dataIndex: "Leave_Type",
//       sorter: (a: any, b: any) => a.Leave_Type.length - b.Leave_Type.length,
//     },
//     {
//       title: "Day",
//       dataIndex: "Day",
//       sorter: (a: any, b: any) => a.Day.length - b.Day.length,
//     },
//     {
//       title: "Applied On",
//       dataIndex: "Applied_On",
//       sorter: (a: any, b: any) => a.Applied_On.length - b.Applied_On.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: any) => (
//         <span
//           className={`badge badge-sm border rounded
//     ${
//       text === "Applied"
//         ? "badge-info text-info border-info"
//         : text === "Approved"
//         ? "badge-success text-success border-success"
//         : "badge-danger text-danger border-danger"
//     }`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//     {
//       title: "",
//       render: () => (
//         <div className="action-item">
//           <>
//             <Link to="#" data-bs-toggle="dropdown">
//               <i className="ti ti-dots-vertical" />
//             </Link>
//             <ul className="dropdown-menu p-2">
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="modal"
//                   data-bs-target="#edit-leave"
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
//           </>
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
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0"> Leaves </h4>
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
//               <Link
//                 to="#"
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add-leave"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add New Leave
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/* Start Filter */}
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
//                       Recent
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Oldest
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/* End Filter */}
//           {/* Start Table */}
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={data}
//               Selection={false}
//               searchText={searchText}
//             />
//           </div>
//           {/* End Table */}
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

// export default DoctorsLeaves;


// Doctor/leaves/doctorsLeaves.tsx
import { DatePicker, Select } from "antd";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "./modals/modals";
import { getDoctorLeaves, createLeave } from "../../../../../api/leaveService";
import dayjs from "dayjs";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import type { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

interface LeaveData {
  key: string;
  _id: string;
  Date: string;
  Leave_Type: string;
  Day: string;
  Applied_On: string;
  Status: string;
  fromDate: string;
  toDate: string;
  numberOfDays: number;
  reason: string;
}

const DoctorsLeaves = () => {
  const [data, setData] = useState<LeaveData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");
  const [showAddModal, setShowAddModal] = useState(false);

  // Filters
  const [filterLeaveType, setFilterLeaveType] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<Dayjs | null>(null);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');

  // Leave type options
  const leaveTypeOptions = [
    { value: 'Casual Leave', label: 'Casual Leave' },
    { value: 'Sick Leave', label: 'Sick Leave' },
    { value: 'Maternity Leave', label: 'Maternity Leave' },
    { value: 'Paternity Leave', label: 'Paternity Leave' },
    { value: 'Compensatory Leave', label: 'Compensatory Leave' },
    { value: 'Emergency Leave', label: 'Emergency Leave' },
    { value: 'Bereavement Leave', label: 'Bereavement Leave' },
    { value: 'Study/Exam Leave', label: 'Study/Exam Leave' },
    { value: 'Paid Leave', label: 'Paid Leave' },
    { value: 'Unpaid Leave', label: 'Unpaid Leave' }
  ];

  // Status options
  const statusOptions = [
    { value: 'Applied', label: 'Applied' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Rejected', label: 'Rejected' }
  ];

  // Fetch leaves
  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      setLoading(true);
      const response = await getDoctorLeaves();

      if (response.success) {
        const formattedData = response.data.map((leave: any) => ({
          key: leave._id,
          _id: leave._id,
          Date: `${dayjs(leave.fromDate).format('DD MMM YYYY')} - ${dayjs(leave.toDate).format('DD MMM YYYY')}`,
          Leave_Type: leave.leaveType,
          Day: `${leave.numberOfDays} ${leave.numberOfDays > 1 ? 'Days' : 'Day'}`,
          Applied_On: dayjs(leave.appliedOn).format('DD MMM YYYY'),
          Status: leave.status,
          fromDate: leave.fromDate,
          toDate: leave.toDate,
          numberOfDays: leave.numberOfDays,
          reason: leave.reason
        }));

        setData(formattedData);
      }
    } catch (error) {
      console.error('Error fetching leaves:', error);
      alert('Failed to fetch leaves');
    } finally {
      setLoading(false);
    }
  };

  // Apply filters and sorting
  const applyFilters = () => {
    let filtered = [...data];

    // Leave Type filter
    if (filterLeaveType.length > 0) {
      filtered = filtered.filter(item => filterLeaveType.includes(item.Leave_Type));
    }

    // Date filter
    if (filterDate) {
      // const selectedDate = filterDate.format('DD MMM YYYY');
      filtered = filtered.filter(item => {
        const fromDate = dayjs(item.fromDate);
        const toDate = dayjs(item.toDate);
        return filterDate.isBetween(fromDate, toDate, 'day', '[]');
      });
    }

    // Status filter
    if (filterStatus.length > 0) {
      filtered = filtered.filter(item => filterStatus.includes(item.Status));
    }

    return applySorting(filtered);
  };

  const applySorting = (dataToSort: LeaveData[]) => {
    const sorted = [...dataToSort];

    if (sortBy === 'recent') {
      sorted.sort((a, b) =>
        dayjs(b.Applied_On, 'DD MMM YYYY').valueOf() -
        dayjs(a.Applied_On, 'DD MMM YYYY').valueOf()
      );
    } else {
      sorted.sort((a, b) =>
        dayjs(a.Applied_On, 'DD MMM YYYY').valueOf() -
        dayjs(b.Applied_On, 'DD MMM YYYY').valueOf()
      );
    }

    return sorted;
  };

  const filteredData = applyFilters();

  // Table columns - NO EDIT/DELETE for doctors
  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: LeaveData, b: LeaveData) => a.Date.length - b.Date.length,
    },
    {
      title: "Leave Type",
      dataIndex: "Leave_Type",
      sorter: (a: LeaveData, b: LeaveData) => a.Leave_Type.length - b.Leave_Type.length,
    },
    {
      title: "Day",
      dataIndex: "Day",
      sorter: (a: LeaveData, b: LeaveData) => a.numberOfDays - b.numberOfDays,
    },
    {
      title: "Applied On",
      dataIndex: "Applied_On",
      sorter: (a: LeaveData, b: LeaveData) => a.Applied_On.length - b.Applied_On.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge badge-sm border rounded
            ${text === "Applied"
              ? "badge-info text-info border-info"
              : text === "Approved"
                ? "badge-success text-success border-success"
                : "badge-danger text-danger border-danger"
            }`}
        >
          {text}
        </span>
      ),
      sorter: (a: LeaveData, b: LeaveData) => a.Status.length - b.Status.length,
    },
  ];

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // Handle add leave
  const handleAddLeave = async (leaveData: {
    leaveType: string;
    fromDate: string;
    toDate: string;
    reason: string;
  }) => {
    try {
      const response = await createLeave(leaveData);

      if (response.success) {
        alert('Leave application submitted successfully');
        setShowAddModal(false);
        fetchLeaves(); // Refresh the list
      }
    } catch (error: any) {
      console.error('Error creating leave:', error);
      alert(error.message || 'Failed to submit leave application');
    }
  };

  // Export to PDF
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text('Leave List', 14, 20);

      doc.setFontSize(11);
      doc.text(`Generated on: ${dayjs().format('DD-MM-YYYY HH:mm')}`, 14, 30);

      const tableData = filteredData.map(item => [
        item.Date,
        item.Leave_Type,
        item.Day,
        item.Applied_On,
        item.Status
      ]);

      autoTable(doc, {
        head: [['Date', 'Leave Type', 'Days', 'Applied On', 'Status']],
        body: tableData,
        startY: 35,
        theme: 'grid',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 9 }
      });

      doc.save(`leaves-list-${dayjs().format('YYYY-MM-DD')}.pdf`);
    } catch (error) {
      console.error('PDF export error:', error);
      alert('Failed to export PDF');
    }
  };

  // Export to Excel
  const exportToExcel = () => {
    try {
      const excelData = filteredData.map(item => ({
        "Date": item.Date,
        "Leave Type": item.Leave_Type,
        "Days": item.Day,
        "Applied On": item.Applied_On,
        "Status": item.Status
      }));

      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Leaves");

      XLSX.writeFile(wb, `leaves-list-${dayjs().format('YYYY-MM-DD')}.xlsx`);
    } catch (error) {
      console.error('Excel export error:', error);
      alert('Failed to export Excel');
    }
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
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
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0"> Leaves </h4>
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
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        exportToPDF();
                      }}
                    >
                      Download as PDF
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        exportToExcel();
                      }}
                    >
                      Download as Excel
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to="#"
                className="btn btn-primary ms-2 fs-13 btn-md"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAddModal(true);
                }}
              >
                <i className="ti ti-plus me-1" />
                Add New Leave
              </Link>
            </div>
          </div>

          {/* Filter Section */}
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
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h4 className="mb-0 fw-bold">Filter</h4>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-danger text-decoration-underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setFilterLeaveType([]);
                          setFilterDate(null);
                          setFilterStatus([]);
                        }}
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                  <form action="#">
                    <div className="filter-body pb-0">
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label mb-1">Leave Type</label>
                          <Link
                            to="#"
                            className="link-primary mb-1"
                            onClick={(e) => {
                              e.preventDefault();
                              setFilterLeaveType([]);
                            }}
                          >
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          value={filterLeaveType}
                          onChange={setFilterLeaveType}
                          options={leaveTypeOptions}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Date
                        </label>
                        <div className="input-icon-end position-relative">
                          <DatePicker
                            className="form-control datetimepicker"
                            format="DD-MM-YYYY"
                            value={filterDate}
                            onChange={setFilterDate}
                            getPopupContainer={getModalContainer}
                            placeholder="DD-MM-YYYY"
                            suffixIcon={null}
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-calendar" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Status</label>
                          <Link
                            to="#"
                            className="link-primary mb-1"
                            onClick={(e) => {
                              e.preventDefault();
                              setFilterStatus([]);
                            }}
                          >
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
                        className="btn btn-light btn-md me-2 fw-medium"
                        id="close-filter"
                      >
                        Close
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary btn-md fw-medium"
                      >
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
                  <span className="me-1"> Sort By : </span> {sortBy === 'recent' ? 'Recent' : 'Oldest'}
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-2">
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item rounded-1"
                      onClick={(e) => {
                        e.preventDefault();
                        setSortBy('recent');
                      }}
                    >
                      Recent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item rounded-1"
                      onClick={(e) => {
                        e.preventDefault();
                        setSortBy('oldest');
                      }}
                    >
                      Oldest
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={filteredData}
              Selection={false}
              searchText={searchText}
            />
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

      <Modals
        showAddModal={showAddModal}
        onCloseAdd={() => setShowAddModal(false)}
        onAdd={handleAddLeave}
      />
    </>
  );
};

export default DoctorsLeaves;