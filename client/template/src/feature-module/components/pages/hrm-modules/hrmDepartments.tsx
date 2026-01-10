// import { useState } from "react";
// import { Link } from "react-router";
// import { HrmDepartmentsData } from "../../../../core/json/hrmDepartmentsData";
// import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../core/common/dataTable";
// import HrmDepartmentsModal from "./modal/hrmDepartmentsModal";
// import { Department, StatusActive } from "../../../../core/common/selectOption";
// import { DatePicker, Select } from "antd";

// const HrmDepartments = () => {
//   const data = HrmDepartmentsData;
//   const columns = [
//     {
//       title: "Department",
//       dataIndex: "Department",
//       sorter: (a: any, b: any) => a.Department.length - b.Department.length,
//     },
//     {
//       title: "CreatedDate",
//       dataIndex: "CreatedDate",
//       sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
//     },
//     {
//       title: "NoofDoctor",
//       dataIndex: "NoofDoctor",
//       sorter: (a: any, b: any) => a.NoofDoctor.length - b.NoofDoctor.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: any) => (
//         <span
//           className={`badge border ${
//             text === "Active"
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
//         <div className="action-item">
//           <Link to="#" data-bs-toggle="dropdown">
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu">
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#edit_deparment"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_designation"
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
//    const getModalContainer = () => {
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
//                 Department
//                 <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
//                   Total Department : 33
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
//                 data-bs-target="#add_department"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add New Department
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
//                   <form action="#">
//                     <div className="filter-body pb-0">
//                       <div className="mb-3">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <label className="form-label">Department</label>
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
//                           options={Department}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                           Date
//                         </label>
//                         <div className="input-icon-end position-relative">
//                          <DatePicker
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
//                           options={StatusActive}
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

//       <HrmDepartmentsModal />
//     </>
//   );
// };

// export default HrmDepartments;



import { useState, useEffect } from "react";
import { Link } from "react-router";
import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../core/common/dataTable";
import HrmDepartmentsModal from "./modal/hrmDepartmentsModal";
import { Department, StatusActive } from "../../../../core/common/selectOption";
import { DatePicker, Select } from "antd";
import { getDoctors } from "../../../../api/doctorService";
import dayjs from "dayjs";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

interface DepartmentData {
  key: string;
  Department: string;
  CreatedDate: string;
  NoofDoctor: string;
  Status: string;
}

const HrmDepartments = () => {
  const [data, setData] = useState<DepartmentData[]>([]);
  const [_doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState<any>(null);
  const [filterDepartment, setFilterDepartment] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');


  const applyFilters = () => {
    let filtered = [...data];

    // Department filter
    if (filterDepartment.length > 0) {
      filtered = filtered.filter(item =>
        filterDepartment.includes(item.Department)
      );
    }

    // Date filter
    if (filterDate) {
      const selectedDate = dayjs(filterDate).format('DD-MMM-YYYY');
      filtered = filtered.filter(item =>
        item.CreatedDate === selectedDate
      );
    }

    // Status filter
    if (filterStatus.length > 0) {
      filtered = filtered.filter(item =>
        filterStatus.includes(item.Status)
      );
    }

    // return filtered;

    return applySorting(filtered)
  };

  const applySorting = (dataToSort: DepartmentData[]) => {
    const sorted = [...dataToSort];

    if (sortBy === 'recent') {
      sorted.sort((a, b) =>
        dayjs(b.CreatedDate, 'DD-MMM-YYYY').valueOf() -
        dayjs(a.CreatedDate, 'DD-MMM-YYYY').valueOf()
      );
    } else {
      sorted.sort((a, b) =>
        dayjs(a.CreatedDate, 'DD-MMM-YYYY').valueOf() -
        dayjs(b.CreatedDate, 'DD-MMM-YYYY').valueOf()
      );
    }

    return sorted;
  };
  const filteredData = applyFilters();

  // Fetch doctors and create department list
  useEffect(() => {
    fetchDoctorsAndCreateDepartments();
  }, []);

  const fetchDoctorsAndCreateDepartments = async () => {
    try {
      setLoading(true);
      const response = await getDoctors();

      if (response.success && response.data) {
        const doctorsList = response.data;
        setDoctors(doctorsList);

        // Group doctors by department
        const departmentMap = new Map<string, {
          doctors: any[];
          earliestDate: Date;
          hasActive: boolean;
        }>();

        doctorsList.forEach((doctor: any) => {
          const dept = doctor.department;
          if (!dept) return;

          if (!departmentMap.has(dept)) {
            departmentMap.set(dept, {
              doctors: [],
              earliestDate: new Date(doctor.createdAt),
              hasActive: false
            });
          }

          const deptData = departmentMap.get(dept)!;
          deptData.doctors.push(doctor);

          // Track earliest creation date
          const docDate = new Date(doctor.createdAt);
          if (docDate < deptData.earliestDate) {
            deptData.earliestDate = docDate;
          }

          // Check if any doctor is active (displayOnBookingPage = true)
          if (doctor.displayOnBookingPage) {
            deptData.hasActive = true;
          }
        });

        // Convert to department list
        const departmentList: DepartmentData[] = Array.from(departmentMap.entries()).map(
          ([deptName, deptData], index) => ({
            key: String(index + 1),
            Department: deptName,
            CreatedDate: dayjs(deptData.earliestDate).format('DD-MMM-YYYY'),
            NoofDoctor: String(deptData.doctors.length),
            Status: deptData.hasActive ? "Active" : "Inactive"
          })
        );

        // Sort by creation date (newest first)
        departmentList.sort((a, b) =>
          dayjs(b.CreatedDate, 'DD-MMM-YYYY').valueOf() -
          dayjs(a.CreatedDate, 'DD-MMM-YYYY').valueOf()
        );

        setData(departmentList);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Department",
      dataIndex: "Department",
      sorter: (a: any, b: any) => a.Department.length - b.Department.length,
    },
    {
      title: "CreatedDate",
      dataIndex: "CreatedDate",
      sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
    },
    {
      title: "NoofDoctor",
      dataIndex: "NoofDoctor",
      sorter: (a: any, b: any) => parseInt(a.NoofDoctor) - parseInt(b.NoofDoctor),
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge border ${text === "Active"
            ? "badge-soft-success border-success"
            : "badge-soft-danger border-danger"
            } px-2 py-1 fs-13 fw-medium`}
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
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentDepartment(record);
                  setShowEditModal(true);
                }}
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentDepartment(record);
                  setShowDeleteModal(true);
                }}
              >
                Delete
              </Link>
            </li>
          </ul>
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

  // Add Department
  const handleAddDepartment = (name: string) => {
    const newKey = String(data.length + 1);
    const today = new Date();
    const formattedDate = dayjs(today).format('DD-MMM-YYYY');

    const newDept = {
      key: newKey,
      Department: name,
      CreatedDate: formattedDate,
      NoofDoctor: "0",
      Status: "Inactive"
    };

    setData([newDept, ...data]); // Add to beginning (newest first)
    setShowAddModal(false);
  };

  // Edit Department
  const handleEditDepartment = (name: string) => {
    if (currentDepartment) {
      setData(data.map(item =>
        item.key === currentDepartment.key
          ? { ...item, Department: name }
          : item
      ));
      setShowEditModal(false);
      setCurrentDepartment(null);
    }
  };

  // Delete Department
  const handleDeleteDepartment = () => {
    if (currentDepartment) {
      setData(data.filter(item => item.key !== currentDepartment.key));
      setShowDeleteModal(false);
      setCurrentDepartment(null);
    }
  };


  // Export to PDF
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();

      // Title add करा
      doc.setFontSize(18);
      doc.text('Department List', 14, 20);

      // Date add करा
      doc.setFontSize(11);
      doc.text(`Generated on: ${dayjs().format('DD-MM-YYYY HH:mm')}`, 14, 30);

      // Table data prepare करा
      const tableData = data.map(item => [
        item.Department,
        item.CreatedDate,
        item.NoofDoctor,
        item.Status
      ]);

      // Auto table add करा
      autoTable(doc, {
        head: [['Department', 'Created Date', 'No. of Doctors', 'Status']],
        body: tableData,
        startY: 35,
        theme: 'grid',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 9 }
      });

      // Save PDF
      doc.save(`departments-list-${dayjs().format('YYYY-MM-DD')}.pdf`);
    } catch (error) {
      console.error('PDF export error:', error);
    }
  };

  // Export to Excel (CSV)
  const exportToExcel = () => {
    try {
      // Excel data prepare करा
      const excelData = data.map(item => ({
        "Department": item.Department,
        "Created Date": item.CreatedDate,
        "No. of Doctors": item.NoofDoctor,
        "Status": item.Status
      }));

      // Worksheet create करा
      const ws = XLSX.utils.json_to_sheet(excelData);

      // Workbook create करा
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Departments");

      // Excel file save करा
      XLSX.writeFile(wb, `departments-list-${dayjs().format('YYYY-MM-DD')}.xlsx`);
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
                Department
                <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
                  Total Department : {data.length}
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
                    <Link className="dropdown-item" to="#" onClick={(e) => { e.preventDefault(); exportToPDF(); }}>
                      Download as PDF
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" onClick={(e) => { e.preventDefault(); exportToExcel(); }}>
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
                Add New Department
              </Link>
            </div>
          </div>
          {/* End Page Header */}
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
                    <h5 className="mb-0 fw-bold">Filter</h5>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-danger text-decoration-underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setFilterDepartment([]);
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
                          <label className="form-label">Department</label>
                          // Department Reset
                          <Link
                            to="#"
                            className="link-primary mb-1"
                            onClick={(e) => {
                              e.preventDefault();
                              setFilterDepartment([]);
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
                          value={filterDepartment}
                          onChange={setFilterDepartment}
                          options={Department}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Date
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
                          <label className="form-label">Status</label>
                          // Department Reset
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
                          options={StatusActive}
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

      <HrmDepartmentsModal
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        currentDepartment={currentDepartment}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => setShowDeleteModal(false)}
        onAdd={handleAddDepartment}
        onEdit={handleEditDepartment}
        onDelete={handleDeleteDepartment}
      />
    </>
  );
};

export default HrmDepartments;