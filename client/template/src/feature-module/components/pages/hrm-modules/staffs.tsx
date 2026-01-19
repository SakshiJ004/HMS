// import { useState } from "react";
// import { Link } from "react-router";
// import { StaffsListData } from "../../../../core/json/staffsListData";
// import ImageWithBasePath from "../../../../core/imageWithBasePath";
// import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../core/common/dataTable";
// import StaffsModal from "./modal/staffsModal";
// import { Designation, Staff, StaffsRole, Status } from "../../../../core/common/selectOption";
// import { DatePicker, Select } from "antd";
// import Slider from "rc-slider";

// const StaffsList = () => {
//   const data = StaffsListData;
//   const columns = [
//     {
//       title: "Staff",
//       dataIndex: "Staff",
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
//             <h6 className="mb-1 fs-14 fw-semibold">
//               <Link to="#" data-bs-toggle="modal" data-bs-target="#view_staff">
//                 {text}
//               </Link>
//             </h6>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Staff.length - b.Staff.length,
//     },
//     {
//       title: "Designation",
//       dataIndex: "Designation",
//       sorter: (a: any, b: any) => a.Designation.length - b.Designation.length,
//     },
//     {
//       title: "Role",
//       dataIndex: "Role",
//       sorter: (a: any, b: any) => a.Role.length - b.Role.length,
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
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: any) => (
//         // <span
//         //   className={`badge fs-13 fw-medium border py-1 px-2 ${
//         //     text === "Active"
//         //       ? "bg-soft-success text-success border-success"
//         //       : "bg-soft-danger text-danger border-danger"
//         //   } me-1`}
//         // >
//         //   {text}
//         // </span>
//         <span
//           className={`badge border ${
//             text === "Available"
//               ? "badge-soft-success border-success"
//               : "badge-soft-danger border-danger"
//           }`}
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
//           <Link to="#" data-bs-toggle="dropdown">
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu p-2">
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#view_staff"
//               >
//                 View Details
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#edit_staff"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_staff"
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
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };
//    const [sliderValueDefault, setSliderValueDefault] = useState(0);
//      const handleChangeDefault = (value: any) => {
//       setSliderValueDefault(value);
//     };

//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content" id="profilePage">
//           {/* Start Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0">
//                 Staff
//                 <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
//                   Total Staffs : 565
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
//               <Link
//                 to="#"
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_staff"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add Staff
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
//                           <label className="form-label">Staff</label>
//                           <Link
//                             to="#"
//                             className="link-primary mb-1"
//                           >
//                             Reset
//                           </Link>
//                         </div>
//                          <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Staff}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Designation</label>
//                           <Link
//                             to="#"
//                             className="link-primary mb-1"
//                           >
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
//                           <label className="form-label">Role</label>
//                           <Link
//                             to="#"
//                             className="link-primary mb-1"
//                           >
//                             Reset
//                           </Link>
//                         </div>
//                          <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={StaffsRole}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                           Date<span className="text-danger">*</span>
//                         </label>
//                         <div className="input-icon-end position-relative">
//                           <DatePicker
//                           className="form-control datetimepicker"
//                           format={{
//                             format: "DD-MM-YYYY",
//                             type: "mask",
//                           }}
//                           getPopupContainer={getModalContainer}
//                           placeholder="DD-MM-YYYY"
//                           suffixIcon={null} 
//                         />
//                           <span className="input-icon-addon">
//                             <i className="ti ti-calendar" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Amount</label>
//                           <Link
//                             to="#"
//                             className="link-primary mb-1"
//                           >
//                             Reset
//                           </Link>
//                         </div>
//                         <div className="dropdown">
//                           <Link
//                             to="#"
//                             className="dropdown-toggle btn btn-lg d-flex align-items-center justify-content-start fs-13 fw-normal rounded p-2 border"
//                             data-bs-toggle="dropdown"
//                             data-bs-auto-close="outside"
//                             aria-expanded="true"
//                           >
//                             Select
//                           </Link>
//                           <div className="dropdown-menu shadow-lg w-100 dropdown-info">
//                             <div className="filter-range">
//                                <Slider
//                                                   min={0}
//                                                   max={100}
//                                                   value={sliderValueDefault}
//                                                   defaultValue={[0, 50]}
//                                                   onChange={handleChangeDefault}
//                                                 />
//                               <p>
//                                 Range :{" "}
//                                 <span className="text-gray-9">
//                                   Range : $200 - $5695
//                                 </span>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Status</label>
//                           <Link
//                             to="#"
//                             className="link-primary mb-1"
//                           >
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

//       <StaffsModal />
//     </>
//   );
// };

// export default StaffsList;



import { useState, useEffect } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../core/common/dataTable";
import StaffsModal from "./modal/staffsModal";
import { Designation, Staff, StaffsRole, Status } from "../../../../core/common/selectOption";
import { DatePicker, Select } from "antd";
import Slider from "rc-slider";
import { getStaffs, deleteStaff } from "../../../../api/staffService";
import dayjs from "dayjs";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

interface StaffData {
  key: string;
  _id?: string;
  staffId: string;
  Staff: string;
  Designation: string;
  Role: string;
  Phone: string;
  Email: string;
  Status: string;
  Image: string;
  DateOfJoining: string;
  Gender: string;
  DOB: string;
  BloodGroup: string;
  Address1: string;
  Address2: string;
  Country: string;
  State: string;
  City: string;
  Pincode: string;
  StaffType: string;
}

const StaffsList = () => {
  const [data, setData] = useState<StaffData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [currentStaff, setCurrentStaff] = useState<any>(null);

  // Filter states
  const [filterStaff, setFilterStaff] = useState<string[]>([]);
  const [filterDesignation, setFilterDesignation] = useState<string[]>([]);
  const [filterRole, setFilterRole] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');
  const [sliderValueDefault, setSliderValueDefault] = useState(0);

  // Fetch staffs on component mount
  useEffect(() => {
    fetchStaffs();
  }, []);

  const fetchStaffs = async () => {
    try {
      setLoading(true);
      const response = await getStaffs();

      if (response.success && response.data) {
        const staffList: StaffData[] = response.data.map((staff: any) => ({
          key: staff._id,
          _id: staff._id,
          staffId: staff.staffId,
          Staff: staff.name,
          Designation: staff.designation,
          Role: staff.role,
          Phone: staff.phone,
          Email: staff.email,
          Status: staff.status,
          Image: staff.image || 'user-01.jpg',
          DateOfJoining: dayjs(staff.dateOfJoining).format('DD MMM YYYY'),
          Gender: staff.gender,
          DOB: dayjs(staff.dob).format('DD-MM-YYYY'),
          BloodGroup: staff.bloodGroup || '',
          Address1: staff.address1 || '',
          Address2: staff.address2 || '',
          Country: staff.country || '',
          State: staff.state || '',
          City: staff.city || '',
          Pincode: staff.pincode || '',
          StaffType: staff.staffType || 'Permanent'
        }));

        setData(staffList);
      }
    } catch (error) {
      console.error("Error fetching staffs:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Apply filters and sorting
  const applyFilters = () => {
    let filtered = [...data];

    // Staff filter
    if (filterStaff.length > 0) {
      filtered = filtered.filter(item =>
        filterStaff.includes(item.Staff)
      );
    }

    // Designation filter
    if (filterDesignation.length > 0) {
      filtered = filtered.filter(item =>
        filterDesignation.includes(item.Designation)
      );
    }

    // Role filter
    if (filterRole.length > 0) {
      filtered = filtered.filter(item =>
        filterRole.includes(item.Role)
      );
    }

    // Date filter
    if (filterDate) {
      const selectedDate = dayjs(filterDate).format('DD MMM YYYY');
      filtered = filtered.filter(item =>
        item.DateOfJoining === selectedDate
      );
    }

    // Status filter
    if (filterStatus.length > 0) {
      filtered = filtered.filter(item =>
        filterStatus.includes(item.Status)
      );
    }

    return applySorting(filtered);
  };

  const applySorting = (dataToSort: StaffData[]) => {
    const sorted = [...dataToSort];

    if (sortBy === 'recent') {
      sorted.sort((a, b) =>
        dayjs(b.DateOfJoining, 'DD MMM YYYY').valueOf() -
        dayjs(a.DateOfJoining, 'DD MMM YYYY').valueOf()
      );
    } else {
      sorted.sort((a, b) =>
        dayjs(a.DateOfJoining, 'DD MMM YYYY').valueOf() -
        dayjs(b.DateOfJoining, 'DD MMM YYYY').valueOf()
      );
    }

    return sorted;
  };

  const filteredData = applyFilters();

  const columns = [
    {
      title: "Staff",
      dataIndex: "Staff",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to="#"
            className="avatar me-2"
            onClick={(e) => {
              e.preventDefault();
              setCurrentStaff(record);
              setShowViewModal(true);
            }}
          >
            <ImageWithBasePath
              src={`assets/img/users/${record.Image}`}
              alt="Staff"
              className="rounded-circle"
            />
          </Link>
          <div>
            <h6 className="mb-1 fs-14 fw-semibold">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentStaff(record);
                  setShowViewModal(true);
                }}
              >
                {text}
              </Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Staff.length - b.Staff.length,
    },
    {
      title: "Designation",
      dataIndex: "Designation",
      sorter: (a: any, b: any) => a.Designation.length - b.Designation.length,
    },
    {
      title: "Role",
      dataIndex: "Role",
      sorter: (a: any, b: any) => a.Role.length - b.Role.length,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a: any, b: any) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a: any, b: any) => a.Email.length - b.Email.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge border ${text === "Available"
              ? "badge-soft-success border-success"
              : "badge-soft-danger border-danger"
            }`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      render: (_: any, record: any) => (
        <div className="action-item">
          <div className="dropdown">
            <button
              className="btn btn-sm btn-white border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti ti-dots-vertical" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end p-2">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setCurrentStaff(record);
                    setShowViewModal(true);
                  }}
                  type="button"
                >
                  <i className="ti ti-eye me-2" />
                  View Details
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setCurrentStaff(record);
                    setShowEditModal(true);
                  }}
                  type="button"
                >
                  <i className="ti ti-edit me-2" />
                  Edit
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setCurrentStaff(record);
                    setShowDeleteModal(true);
                  }}
                  type="button"
                >
                  <i className="ti ti-trash me-2" />
                  Delete
                </button>
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

  const handleChangeDefault = (value: any) => {
    setSliderValueDefault(value);
  };

  // Handle Delete Staff
  const handleDeleteStaff = async () => {
    if (currentStaff && currentStaff._id) {
      try {
        const response = await deleteStaff(currentStaff._id);

        if (response.success) {
          await fetchStaffs();
          setShowDeleteModal(false);
          setCurrentStaff(null);
        } else {
          console.error('Failed to delete staff:', response.message);
          alert('Failed to delete staff. Please try again.');
        }
      } catch (error) {
        console.error('Delete staff error:', error);
        alert('Error deleting staff. Please try again.');
      }
    }
  };

  // Export to PDF
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text('Staff List', 14, 20);

      doc.setFontSize(11);
      doc.text(`Generated on: ${dayjs().format('DD-MM-YYYY HH:mm')}`, 14, 30);

      const tableData = data.map(item => [
        item.Staff,
        item.Designation,
        item.Role,
        item.Phone,
        item.Email,
        item.Status
      ]);

      autoTable(doc, {
        head: [['Name', 'Designation', 'Role', 'Phone', 'Email', 'Status']],
        body: tableData,
        startY: 35,
        theme: 'grid',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 9 }
      });

      doc.save(`staffs-list-${dayjs().format('YYYY-MM-DD')}.pdf`);
    } catch (error) {
      console.error('PDF export error:', error);
    }
  };

  // Export to Excel
  const exportToExcel = () => {
    try {
      const excelData = data.map(item => ({
        "Staff ID": item.staffId,
        "Name": item.Staff,
        "Designation": item.Designation,
        "Role": item.Role,
        "Phone": item.Phone,
        "Email": item.Email,
        "Date of Joining": item.DateOfJoining,
        "Status": item.Status
      }));

      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Staffs");

      XLSX.writeFile(wb, `staffs-list-${dayjs().format('YYYY-MM-DD')}.xlsx`);
    } catch (error) {
      console.error('Excel export error:', error);
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
        <div className="content" id="profilePage">
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Staff
                <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
                  Total Staffs : {data.length}
                </span>
              </h4>
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
                Add Staff
              </Link>
            </div>
          </div>

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
                        onClick={(e) => {
                          e.preventDefault();
                          setFilterStaff([]);
                          setFilterDesignation([]);
                          setFilterRole([]);
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
                          <label className="form-label">Staff</label>
                          <Link
                            to="#"
                            className="link-primary mb-1"
                            onClick={(e) => {
                              e.preventDefault();
                              setFilterStaff([]);
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
                          value={filterStaff}
                          onChange={setFilterStaff}
                          options={Staff}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Designation</label>
                          <Link
                            to="#"
                            className="link-primary mb-1"
                            onClick={(e) => {
                              e.preventDefault();
                              setFilterDesignation([]);
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
                          value={filterDesignation}
                          onChange={setFilterDesignation}
                          options={Designation}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Role</label>
                          <Link
                            to="#"
                            className="link-primary mb-1"
                            onClick={(e) => {
                              e.preventDefault();
                              setFilterRole([]);
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
                          value={filterRole}
                          onChange={setFilterRole}
                          options={StaffsRole}
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
                          <span className="input-icon-addon">
                            <i className="ti ti-calendar" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Amount</label>
                          <Link
                            to="#"
                            className="link-primary mb-1"
                          >
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn btn-lg d-flex align-items-center justify-content-start fs-13 fw-normal rounded p-2 border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="true"
                          >
                            Select
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                            <div className="filter-range">
                              <Slider
                                min={0}
                                max={100}
                                value={sliderValueDefault}
                                defaultValue={[0, 50]}
                                onChange={handleChangeDefault}
                              />
                              <p>
                                Range :{" "}
                                <span className="text-gray-9">
                                  Range : $200 - $5695
                                </span>
                              </p>
                            </div>
                          </div>
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
                          options={Status}
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
                  <span className="me-1"> Sort By : </span>
                  {sortBy === 'recent' ? 'Recent' : 'Oldest'}
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
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={filteredData}
              Selection={false}
              searchText={searchText}
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

      <StaffsModal
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        showViewModal={showViewModal}
        currentStaff={currentStaff}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => setShowDeleteModal(false)}
        onCloseView={() => setShowViewModal(false)}
        onAdd={fetchStaffs}
        onEdit={fetchStaffs}
        onDelete={handleDeleteStaff}
      />
    </>
  );
};

export default StaffsList;