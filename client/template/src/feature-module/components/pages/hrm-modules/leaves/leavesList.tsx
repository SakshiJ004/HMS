// import { useState } from "react";
// import { Link } from "react-router";
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import FilterIndex from "../../../../../core/common/filter/filterIndex";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import { LeavesListData } from "../../../../../core/json/leavesListData";
// import Datatable from "../../../../../core/common/dataTable";
// import LeavesModal from "./modal/leavesModal";

// const LeavesList = () => {
//   const data = LeavesListData;
//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "ID",
//       sorter: (a: any, b: any) => a.ID.length - b.ID.length,
//     },
//     {
//       title: "Employee",
//       dataIndex: "Employee",
//       render: (text: any, record: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to="#"
//             className="avatar me-2"
//             data-bs-toggle="modal"
//             data-bs-target="#view_staff"
//           >
//             <ImageWithBasePath
//               src={`assets/img/users/${record.Image}`}
//               alt="Doctor"
//               className="rounded-circle"
//             />
//           </Link>
//           <div>
//             <h6 className="mb-0 fs-14 fw-semibold">
//               <Link to="#" data-bs-toggle="modal" data-bs-target="#view_staff">
//                 {text}
//               </Link>
//             </h6>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Employee.length - b.Employee.length,
//     },
//     {
//       title: "Leave Type",
//       dataIndex: "LeaveType",
//       sorter: (a: any, b: any) => a.LeaveType.length - b.LeaveType.length,
//     },
//     {
//       title: "Date",
//       dataIndex: "Date",
//       sorter: (a: any, b: any) => a.Date.length - b.Date.length,
//     },
//     {
//       title: "Day",
//       dataIndex: "Day",
//       sorter: (a: any, b: any) => a.Day.length - b.Day.length,
//     },
//     {
//       title: "AppliedOn",
//       dataIndex: "AppliedOn",
//       sorter: (a: any, b: any) => a.AppliedOn.length - b.AppliedOn.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: any) => (
//         <span
//           className={`badge border ${
//             text === "Approved"
//               ? "badge-soft-success border-success"
//               : "badge-soft-danger border-danger"
//           } px-2 py-1 fs-13 fw-medium`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//     {
//       title: "",
//       render: () => (
//         <div className="action-item p-2">
//           <Link to="#" data-bs-toggle="dropdown">
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu">
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#edit_leave"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_leave"
//               >
//                 Delete
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//     },
//   ];
//   const [searchText, setSearchText] = useState<string>("");

//   const handleSearch = (value: string) => {
//     setSearchText(value);
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
//               <h4 className="fw-bold mb-0">Admin Leaves</h4>
//             </div>
//             <div className="text-end d-flex">
//               <Link
//                 to="#"
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_leave"
//               >
//                 <i className="ti ti-plus me-1" />
//                 New Leave
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/* start row */}
//           <div className="row">
//             <div className="col-lg-3">
//               <div className="card">
//                 <div className="card-body position-relative">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p>Total Present</p>
//                       <div className="d-flex align-items-center">
//                         <p className="mb-0 me-2">
//                           <span className="text-dark fw-bold">180</span>
//                         </p>
//                         <span className="badge badge-soft-success fs-12 fw-normal">
//                           +10.6%
//                           <i className="ti ti-arrow-up-right ms-1" />
//                         </span>
//                       </div>
//                     </div>
//                     <span className="p-2 bg-soft-primary border border-primary rounded-circle d-inline-flex align-items-center justify-content-center text-primary position-relative z-1">
//                       <i className="ti ti-user-check" />
//                     </span>
//                   </div>
//                   <ImageWithBasePath
//                     src="assets/img/bg/attendance-bg-01.png"
//                     alt=""
//                     className="img-fluid position-absolute bottom-0 end-0"
//                   />
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-lg-3">
//               <div className="card">
//                 <div className="card-body position-relative">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p>Planned Leaves</p>
//                       <div className="d-flex align-items-center">
//                         <p className="mb-0 me-2">
//                           <span className="text-dark fw-bold">10</span>
//                         </p>
//                         <span className="badge badge-soft-success fs-12 fw-normal">
//                           +8.95%
//                           <i className="ti ti-arrow-up-right ms-1" />
//                         </span>
//                       </div>
//                     </div>
//                     <span className="p-2 bg-soft-success border border-success rounded-circle d-inline-flex align-items-center justify-content-center text-success position-relative z-1">
//                       <i className="ti ti-user-x" />
//                     </span>
//                   </div>
//                   <ImageWithBasePath
//                     src="assets/img/bg/attendance-bg-02.png"
//                     alt=""
//                     className="img-fluid position-absolute bottom-0 end-0"
//                   />
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-lg-3">
//               <div className="card">
//                 <div className="card-body position-relative">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p>Unplanned Leaves</p>
//                       <div className="d-flex align-items-center">
//                         <p className="mb-0 me-2">
//                           <span className="text-dark fw-bold">50</span>
//                         </p>
//                         <span className="badge badge-soft-success fs-12 fw-normal">
//                           +3.78%
//                           <i className="ti ti-arrow-up-right ms-1" />
//                         </span>
//                       </div>
//                     </div>
//                     <span className="p-2 bg-soft-warning border border-warning rounded-circle d-inline-flex align-items-center justify-content-center text-warning position-relative z-1">
//                       <i className="ti ti-user-exclamation" />
//                     </span>
//                   </div>
//                   <ImageWithBasePath
//                     src="assets/img/bg/attendance-bg-03.png"
//                     alt=""
//                     className="img-fluid position-absolute bottom-0 end-0"
//                   />
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-lg-3">
//               <div className="card">
//                 <div className="card-body position-relative">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p>Pending Requests</p>
//                       <div className="d-flex align-items-center">
//                         <p className="mb-0 me-2">
//                           <span className="text-dark fw-bold">15</span>
//                         </p>
//                         <span className="badge badge-soft-success fs-12 fw-normal">
//                           +7.65%
//                           <i className="ti ti-arrow-up-right ms-1" />
//                         </span>
//                       </div>
//                     </div>
//                     <span className="p-2 bg-soft-danger border border-danger rounded-circle d-inline-flex align-items-center justify-content-center text-danger position-relative z-1">
//                       <i className="ti ti-user-question" />
//                     </span>
//                   </div>
//                   <ImageWithBasePath
//                     src="assets/img/bg/attendance-bg-04.png"
//                     alt=""
//                     className="img-fluid position-absolute bottom-0 end-0"
//                   />
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//           </div>
//           {/* end row */}
//           <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//             <div className="search-set mb-3">
//               <div className="d-flex align-items-center">
//                 <div className="table-search d-flex align-items-center mb-0 me-2">
//                   <div className="search-input">
//                     <SearchInput value={searchText} onChange={handleSearch} />
//                   </div>
//                 </div>
//                 <div className="d-flex right-content align-items-center flex-wrap">
//                   <div className=" position-relative">
//                     <span className="input-icon-addon fs-14 text-dark">
//                       <i className="ti ti-calendar" />
//                     </span>
//                     <PredefinedDatePicker />
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
//                     <h5 className="mb-0 fw-bold">Filter</h5>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="link-danger text-decoration-underline"
//                       >
//                         Clear All
//                       </Link>
//                     </div>
//                   </div>
//                   <FilterIndex />
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
//       <LeavesModal />
//     </>
//   );
// };

// export default LeavesList;


// Admin/leaves/leavesList.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { DatePicker, Select } from "antd";
import type { Dayjs } from 'dayjs';
import dayjs from "dayjs";
import isBetween from 'dayjs/plugin/isBetween';
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import FilterIndex from "../../../../../core/common/filter/filterIndex"; // ← REMOVED (not used)
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import LeavesModal from "./modal/leavesModal";
import { getAllLeaves, updateLeaveStatus } from "../../../../../api/leaveService";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { getLeaveStatistics } from "../../../../../api/leaveTypeService";

dayjs.extend(isBetween);

interface LeaveData {
  key: string;
  _id: string;
  ID: string;
  Employee: string;
  Image: string;
  LeaveType: string;
  Date: string;
  Day: string;
  AppliedOn: string;
  Status: string;
  fromDate: string;
  toDate: string;
  numberOfDays: number;
  reason: string;
  doctorId: string;
}

const LeavesList = () => {
  const [data, setData] = useState<LeaveData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedLeave, setSelectedLeave] = useState<LeaveData | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Statistics
  const [stats, setStats] = useState({
    totalPresent: 0,
    totalPresentPercentage: '0',
    plannedLeaves: 0,
    plannedPercentage: '0',
    unplannedLeaves: 0,
    unplannedPercentage: '0',
    pendingRequests: 0,
    pendingPercentage: '0'
  });

  // Filters
  const [filterLeaveType, setFilterLeaveType] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<Dayjs | null>(null);
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');

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

  const statusOptions = [
    { value: 'Applied', label: 'Applied' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Rejected', label: 'Rejected' }
  ];

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      setLoading(true);
      const [leavesResponse, statsResponse] = await Promise.all([
        getAllLeaves(),
        getLeaveStatistics() // ← Add this
      ]);

      if (leavesResponse.success) {
        const formattedData = leavesResponse.data.map((leave: any, index: number) => ({
          key: leave._id,
          _id: leave._id,
          ID: `#EMP${String(index + 1).padStart(3, '0')}`,
          Employee: leave.doctor?.fullName || 'Unknown',
          Image: leave.doctor?.profileImage ? leave.doctor.profileImage : 'assets/img/users/user-01.jpg',
          LeaveType: leave.leaveType,
          Date: `${dayjs(leave.fromDate).format('DD MMM YYYY')} - ${dayjs(leave.toDate).format('DD MMM YYYY')}`,
          Day: `${leave.numberOfDays} ${leave.numberOfDays > 1 ? 'Days' : 'Day'}`,
          AppliedOn: dayjs(leave.appliedOn).format('DD MMM YYYY'),
          Status: leave.status,
          fromDate: leave.fromDate,
          toDate: leave.toDate,
          numberOfDays: leave.numberOfDays,
          reason: leave.reason,
          doctorId: leave.doctor?._id
        }));

        setData(formattedData);
        calculateStatistics(formattedData, statsResponse.data);
      }
    } catch (error) {
      console.error('Error fetching leaves:', error);
      alert('Failed to fetch leaves');
    } finally {
      setLoading(false);
    }
  };

  // calculateStatistics function update करा - Line ~135 च्या आसपास

  const calculateStatistics = (leaves: LeaveData[], apiStats?: any) => {
    const currentMonth = dayjs();
    const lastMonth = currentMonth.subtract(1, 'month');

    // Current stats
    const approved = leaves.filter(l => l.Status === 'Approved').length;
    const pending = leaves.filter(l => l.Status === 'Applied').length;
    const planned = leaves.filter(l =>
      l.Status === 'Approved' &&
      ['Casual Leave', 'Paid Leave'].includes(l.LeaveType)
    ).length;
    const unplanned = leaves.filter(l =>
      l.Status === 'Approved' &&
      ['Sick Leave', 'Emergency Leave'].includes(l.LeaveType)
    ).length;

    // Last month stats
    const lastMonthApproved = leaves.filter(l =>
      l.Status === 'Approved' &&
      dayjs(l.AppliedOn, 'DD MMM YYYY').isSame(lastMonth, 'month')
    ).length;

    const lastMonthPending = leaves.filter(l =>
      l.Status === 'Applied' &&
      dayjs(l.AppliedOn, 'DD MMM YYYY').isSame(lastMonth, 'month')
    ).length;

    const lastMonthPlanned = leaves.filter(l =>
      l.Status === 'Approved' &&
      ['Casual Leave', 'Paid Leave'].includes(l.LeaveType) &&
      dayjs(l.AppliedOn, 'DD MMM YYYY').isSame(lastMonth, 'month')
    ).length;

    const lastMonthUnplanned = leaves.filter(l =>
      l.Status === 'Approved' &&
      ['Sick Leave', 'Emergency Leave'].includes(l.LeaveType) &&
      dayjs(l.AppliedOn, 'DD MMM YYYY').isSame(lastMonth, 'month')
    ).length;

    // Calculate percentages
    const calculatePercentage = (current: number, last: number): string => {
      if (last === 0) return current > 0 ? '100' : '0';
      return ((current - last) / last * 100).toFixed(2);
    };

    // Use API stats if available, otherwise fallback to 180
    const totalPresent = apiStats?.totalPresent || (180 - approved);
    const lastMonthPresent = 180 - lastMonthApproved;

    setStats({
      totalPresent,
      totalPresentPercentage: calculatePercentage(totalPresent, lastMonthPresent),
      plannedLeaves: planned,
      plannedPercentage: calculatePercentage(planned, lastMonthPlanned),
      unplannedLeaves: unplanned,
      unplannedPercentage: calculatePercentage(unplanned, lastMonthUnplanned),
      pendingRequests: pending,
      pendingPercentage: calculatePercentage(pending, lastMonthPending)
    });
  };

  // Apply filters and sorting
  const applyFilters = () => {
    let filtered = [...data];

    // Leave Type filter
    if (filterLeaveType.length > 0) {
      filtered = filtered.filter(item => filterLeaveType.includes(item.LeaveType));
    }

    // Status filter
    if (filterStatus.length > 0) {
      filtered = filtered.filter(item => filterStatus.includes(item.Status));
    }

    // Date filter
    if (filterDate) {
      filtered = filtered.filter(item => {
        const fromDate = dayjs(item.fromDate);
        const toDate = dayjs(item.toDate);
        return filterDate.isBetween(fromDate, toDate, 'day', '[]');
      });
    }

    return applySorting(filtered);
  };

  const applySorting = (dataToSort: LeaveData[]) => {
    const sorted = [...dataToSort];
    if (sortBy === 'recent') {
      sorted.sort((a, b) =>
        dayjs(b.AppliedOn, 'DD MMM YYYY').valueOf() -
        dayjs(a.AppliedOn, 'DD MMM YYYY').valueOf()
      );
    } else {
      sorted.sort((a, b) =>
        dayjs(a.AppliedOn, 'DD MMM YYYY').valueOf() -
        dayjs(b.AppliedOn, 'DD MMM YYYY').valueOf()
      );
    }
    return sorted;
  };

  const filteredData = applyFilters();

  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      sorter: (a: LeaveData, b: LeaveData) => a.ID.length - b.ID.length,
    },
    {
      title: "Employee",
      dataIndex: "Employee",
      render: (text: string, record: LeaveData) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar me-2">
            {record.Image.startsWith('http') || record.Image.startsWith('data:') ? (
              <img
                src={record.Image}
                alt="Doctor"
                className="rounded-circle"
                style={{ width: '32px', height: '32px', objectFit: 'cover' }}
              />
            ) : (
              <ImageWithBasePath
                src={record.Image}
                alt="Doctor"
                className="rounded-circle"
              />
            )}
          </Link>
          <div>
            <h6 className="mb-0 fs-14 fw-semibold">
              <Link to="#">{text}</Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: LeaveData, b: LeaveData) => a.Employee.length - b.Employee.length,
    },
    {
      title: "Leave Type",
      dataIndex: "LeaveType",
      sorter: (a: LeaveData, b: LeaveData) => a.LeaveType.length - b.LeaveType.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: LeaveData, b: LeaveData) => a.Date.length - b.Date.length,
    },
    {
      title: "Day",
      dataIndex: "Day",
      sorter: (a: LeaveData, b: LeaveData) => a.numberOfDays - b.numberOfDays,
    },
    {
      title: "AppliedOn",
      dataIndex: "AppliedOn",
      sorter: (a: LeaveData, b: LeaveData) => a.AppliedOn.length - b.AppliedOn.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge border ${text === "Applied"
            ? "badge-soft-info border-info"
            : text === "Approved"
              ? "badge-soft-success border-success"
              : "badge-soft-danger border-danger"
            } px-2 py-1 fs-13 fw-medium`}
        >
          {text}
        </span>
      ),
      sorter: (a: LeaveData, b: LeaveData) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      render: (record: LeaveData) => (
        <div className="action-item p-2">
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu">
            {record.Status === 'Applied' && (
              <>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item d-flex align-items-center"
                    onClick={() => handleApprove(record._id)}
                  >
                    <i className="ti ti-check me-2 text-success" />
                    Approve
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item d-flex align-items-center"
                    onClick={() => handleReject(record._id)}
                  >
                    <i className="ti ti-x me-2 text-danger" />
                    Reject
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                onClick={() => {
                  setSelectedLeave(record);
                  setShowDeleteModal(true);
                }}
              >
                <i className="ti ti-trash me-2" />
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const handleApprove = async (leaveId: string) => {
    if (!confirm('Are you sure you want to approve this leave?')) return;

    try {
      const response = await updateLeaveStatus(leaveId, 'Approved');
      if (response.success) {
        alert('Leave approved successfully');
        fetchLeaves();
      }
    } catch (error: any) {
      alert(error.message || 'Failed to approve leave');
    }
  };

  const handleReject = async (leaveId: string) => {
    const remarks = prompt('Enter rejection reason (optional):');

    try {
      const response = await updateLeaveStatus(leaveId, 'Rejected', remarks || undefined);
      if (response.success) {
        alert('Leave rejected successfully');
        fetchLeaves();
      }
    } catch (error: any) {
      alert(error.message || 'Failed to reject leave');
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // Export to PDF
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Admin Leaves Report', 14, 20);
      doc.setFontSize(11);
      doc.text(`Generated on: ${dayjs().format('DD-MM-YYYY HH:mm')}`, 14, 30);

      const tableData = filteredData.map(item => [
        item.ID,
        item.Employee,
        item.LeaveType,
        item.Date,
        item.Day,
        item.AppliedOn,
        item.Status
      ]);

      autoTable(doc, {
        head: [['ID', 'Employee', 'Leave Type', 'Date', 'Days', 'Applied On', 'Status']],
        body: tableData,
        startY: 35,
        theme: 'grid',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 8 }
      });

      doc.save(`admin-leaves-${dayjs().format('YYYY-MM-DD')}.pdf`);
    } catch (error) {
      console.error('PDF export error:', error);
      alert('Failed to export PDF');
    }
  };

  // Export to Excel
  const exportToExcel = () => {
    try {
      const excelData = filteredData.map(item => ({
        "ID": item.ID,
        "Employee": item.Employee,
        "Leave Type": item.LeaveType,
        "Date": item.Date,
        "Days": item.Day,
        "Applied On": item.AppliedOn,
        "Status": item.Status
      }));

      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Admin Leaves");

      XLSX.writeFile(wb, `admin-leaves-${dayjs().format('YYYY-MM-DD')}.xlsx`);
    } catch (error) {
      console.error('Excel export error:', error);
      alert('Failed to export Excel');
    }
  };

  // Delete leave handler
  const handleDeleteLeave = async (leaveId: string) => {
    try {
      // TODO: Implement delete API call
      console.log('Deleting leave:', leaveId);
      alert('Delete functionality will be implemented soon');
      setShowDeleteModal(false);
      setSelectedLeave(null);
    } catch (error) {
      console.error('Error deleting leave:', error);
      alert('Failed to delete leave');
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
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Admin Leaves</h4>
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
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>Total Present</p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-2">
                          <span className="text-dark fw-bold">{stats.totalPresent}</span>
                        </p>
                        <span className={`badge fs-12 fw-normal ${parseFloat(stats.totalPresentPercentage) >= 0
                          ? 'badge-soft-success'
                          : 'badge-soft-danger'
                          }`}>
                          {parseFloat(stats.totalPresentPercentage) >= 0 ? '+' : ''}
                          {stats.totalPresentPercentage}%
                          <i className={`ti ${parseFloat(stats.totalPresentPercentage) >= 0
                            ? 'ti-arrow-up-right'
                            : 'ti-arrow-down-right'
                            } ms-1`} />
                        </span>
                      </div>
                    </div>
                    <span className="p-2 bg-soft-primary border border-primary rounded-circle d-inline-flex align-items-center justify-content-center text-primary position-relative z-1">
                      <i className="ti ti-user-check" />
                    </span>
                  </div>
                  <ImageWithBasePath
                    src="assets/img/bg/attendance-bg-01.png"
                    alt=""
                    className="img-fluid position-absolute bottom-0 end-0"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>Planned Leaves</p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-2">
                          <span className="text-dark fw-bold">{stats.plannedLeaves}</span>
                        </p>
                        <span className={`badge fs-12 fw-normal ${parseFloat(stats.plannedPercentage) >= 0
                          ? 'badge-soft-success'
                          : 'badge-soft-danger'
                          }`}>
                          {parseFloat(stats.plannedPercentage) >= 0 ? '+' : ''}
                          {stats.plannedPercentage}%
                          <i className={`ti ${parseFloat(stats.plannedPercentage) >= 0
                            ? 'ti-arrow-up-right'
                            : 'ti-arrow-down-right'
                            } ms-1`} />
                        </span>
                      </div>
                    </div>
                    <span className="p-2 bg-soft-success border border-success rounded-circle d-inline-flex align-items-center justify-content-center text-success position-relative z-1">
                      <i className="ti ti-user-x" />
                    </span>
                  </div>
                  <ImageWithBasePath
                    src="assets/img/bg/attendance-bg-02.png"
                    alt=""
                    className="img-fluid position-absolute bottom-0 end-0"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>Unplanned Leaves</p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-2">
                          <span className="text-dark fw-bold">{stats.unplannedLeaves}</span>
                        </p>
                        <span className={`badge fs-12 fw-normal ${parseFloat(stats.unplannedPercentage) >= 0
                          ? 'badge-soft-success'
                          : 'badge-soft-danger'
                          }`}>
                          {parseFloat(stats.unplannedPercentage) >= 0 ? '+' : ''}
                          {stats.unplannedPercentage}%
                          <i className={`ti ${parseFloat(stats.unplannedPercentage) >= 0
                            ? 'ti-arrow-up-right'
                            : 'ti-arrow-down-right'
                            } ms-1`} />
                        </span>
                      </div>
                    </div>
                    <span className="p-2 bg-soft-warning border border-warning rounded-circle d-inline-flex align-items-center justify-content-center text-warning position-relative z-1">
                      <i className="ti ti-user-exclamation" />
                    </span>
                  </div>
                  <ImageWithBasePath
                    src="assets/img/bg/attendance-bg-03.png"
                    alt=""
                    className="img-fluid position-absolute bottom-0 end-0"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>Pending Requests</p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-2">
                          <span className="text-dark fw-bold">{stats.pendingRequests}</span>
                        </p>
                        <span className={`badge fs-12 fw-normal ${parseFloat(stats.pendingPercentage) >= 0
                          ? 'badge-soft-success'
                          : 'badge-soft-danger'
                          }`}>
                          {parseFloat(stats.pendingPercentage) >= 0 ? '+' : ''}
                          {stats.pendingPercentage}%
                          <i className={`ti ${parseFloat(stats.pendingPercentage) >= 0
                            ? 'ti-arrow-up-right'
                            : 'ti-arrow-down-right'
                            } ms-1`} />
                        </span>
                      </div>
                    </div>
                    <span className="p-2 bg-soft-danger border border-danger rounded-circle d-inline-flex align-items-center justify-content-center text-danger position-relative z-1">
                      <i className="ti ti-user-question" />
                    </span>
                  </div>
                  <ImageWithBasePath
                    src="assets/img/bg/attendance-bg-04.png"
                    alt=""
                    className="img-fluid position-absolute bottom-0 end-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center">
                <div className="table-search d-flex align-items-center mb-0 me-2">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={handleSearch} />
                  </div>
                </div>
                <div className="d-flex right-content align-items-center flex-wrap">
                  <div className="position-relative">
                    <span className="input-icon-addon fs-14 text-dark">
                      <i className="ti ti-calendar" />
                    </span>
                    <DatePicker.RangePicker
                      className="form-control"
                      format="DD-MM-YYYY"
                      onChange={(dates) => {
                        if (dates && dates[0] && dates[1]) {
                          // Apply date range filter
                          const filtered = data.filter(item => {
                            const appliedDate = dayjs(item.AppliedOn, 'DD MMM YYYY');
                            return appliedDate.isBetween(dates[0], dates[1], 'day', '[]');
                          });
                          setData(filtered);
                        } else {
                          // Reset filter
                          fetchLeaves();
                        }
                      }}
                      style={{ width: '250px' }}
                    />
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
                    <h5 className="mb-0 fw-bold">Filter</h5>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-danger text-decoration-underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setFilterLeaveType([]);
                          setFilterStatus([]);
                          setFilterDate(null);
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
                          placeholder="Select leave types"
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
                          placeholder="Select status"
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
                  <span className="me-1">Sort By : </span>
                  {sortBy === 'recent' ? 'Recent' : 'Oldest'}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-2">
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

      <LeavesModal
        showDeleteModal={showDeleteModal}
        onCloseDelete={() => setShowDeleteModal(false)}
        selectedLeave={selectedLeave}
        onDelete={handleDeleteLeave}
      />
    </>
  );
};

export default LeavesList;