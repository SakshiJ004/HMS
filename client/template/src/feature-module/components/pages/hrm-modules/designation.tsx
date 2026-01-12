// import { useState, useEffect } from "react";
// import { Link } from "react-router";
// import { DesignationData } from "../../../../core/json/designationData";
// import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../core/common/dataTable";
// import DesignationModal from "./modal/designationModal";
// import { Designation, Status } from "../../../../core/common/selectOption";
// import { DatePicker, Select } from "antd";


// const DesignationList = () => {
//   const data = DesignationData;
//   const columns = [
//     {
//       title: "Designation",
//       dataIndex: "Designation",
//       sorter: (a: any, b: any) => a.Designation.length - b.Designation.length,
//     },
//     {
//       title: "CreatedDate",
//       dataIndex: "CreatedDate",
//       sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
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
//                 data-bs-target="#edit_designation"
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
//                 Designation
//                 <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
//                   Total Designation : 54
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
//                 data-bs-target="#add_designation"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add New Designation
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
//                         <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                           Date
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
//                           <label className="form-label">Status</label>
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

//       <DesignationModal />
//     </>
//   );
// };

// export default DesignationList;



import { useState, useEffect } from "react";
import { Link } from "react-router";
import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../core/common/dataTable";
import DesignationModal from "./modal/designationModal";
import { Designation, Status } from "../../../../core/common/selectOption";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import {
  getDesignations,
  createDesignation,
  updateDesignation,
  deleteDesignation
} from "../../../../api/designationService";

interface DesignationData {
  key: string;
  _id?: string;
  Designation: string;
  Type: string;
  Department: string;
  CreatedDate: string;
  Status: string;
  Description?: string;
}

const DesignationList = () => {
  const [data, setData] = useState<DesignationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentDesignation, setCurrentDesignation] = useState<any>(null);
  const [filterDesignation, setFilterDesignation] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');

  // Fetch designations
  useEffect(() => {
    fetchDesignations();
  }, []);

  const fetchDesignations = async () => {
    try {
      setLoading(true);
      const response = await getDesignations();

      console.log('Designation Response:', response);

      if (response.success && response.data) {
        const designationList: DesignationData[] = response.data.map((item: any) => ({
          key: item._id,
          _id: item._id,
          Designation: item.name,
          Type: item.type,
          Department: item.department,
          CreatedDate: dayjs(item.createdAt).format('DD-MMM-YYYY'),
          Status: item.status,
          Description: item.description || ''
        }));

        setData(designationList);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching designations:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...data];

    // Designation filter
    if (filterDesignation.length > 0) {
      filtered = filtered.filter(item =>
        filterDesignation.includes(item.Designation)
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

    return applySorting(filtered);
  };

  // Apply sorting
  const applySorting = (dataToSort: DesignationData[]) => {
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

  const columns = [
    {
      title: "Designation",
      dataIndex: "Designation",
      sorter: (a: any, b: any) => a.Designation.length - b.Designation.length,
    },
    {
      title: "Type",
      dataIndex: "Type",
      sorter: (a: any, b: any) => a.Type.length - b.Type.length,
    },
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
          <div className="dropdown">
            <button
              className="btn btn-sm btn-white border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti ti-dots-vertical" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setCurrentDesignation(record);
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
                    setCurrentDesignation(record);
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

  // Add Designation
  const handleAddDesignation = async (formData: any) => {
    try {
      const response = await createDesignation(formData);

      if (response.success) {
        await fetchDesignations();
        setShowAddModal(false);
      } else {
        console.error('Failed to add designation:', response.message);
        alert(response.message || 'Failed to add designation. Please try again.');
      }
    } catch (error) {
      console.error('Add designation error:', error);
      alert('Error adding designation. Please try again.');
    }
  };

  // Edit Designation
  const handleEditDesignation = async (formData: any) => {
    if (currentDesignation && currentDesignation._id) {
      try {
        const response = await updateDesignation(currentDesignation._id, formData);

        if (response.success) {
          await fetchDesignations();
          setShowEditModal(false);
          setCurrentDesignation(null);
        } else {
          console.error('Failed to update designation:', response.message);
          alert(response.message || 'Failed to update designation. Please try again.');
        }
      } catch (error) {
        console.error('Update designation error:', error);
        alert('Error updating designation. Please try again.');
      }
    }
  };

  // Delete Designation
  const handleDeleteDesignation = async () => {
    if (currentDesignation && currentDesignation._id) {
      try {
        const response = await deleteDesignation(currentDesignation._id);

        if (response.success) {
          await fetchDesignations();
          setShowDeleteModal(false);
          setCurrentDesignation(null);
        } else {
          console.error('Failed to delete designation:', response.message);
          alert(response.message || 'Failed to delete designation. Please try again.');
        }
      } catch (error) {
        console.error('Delete designation error:', error);
        alert('Error deleting designation. Please try again.');
      }
    }
  };

  // Export to PDF
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text('Designation List', 14, 20);

      doc.setFontSize(11);
      doc.text(`Generated on: ${dayjs().format('DD-MM-YYYY HH:mm')}`, 14, 30);

      const tableData = filteredData.map(item => [
        item.Designation,
        item.Type,
        item.Department,
        item.CreatedDate,
        item.Status
      ]);

      autoTable(doc, {
        head: [['Designation', 'Type', 'Department', 'Created Date', 'Status']],
        body: tableData,
        startY: 35,
        theme: 'grid',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 9 }
      });

      doc.save(`designations-list-${dayjs().format('YYYY-MM-DD')}.pdf`);
    } catch (error) {
      console.error('PDF export error:', error);
    }
  };

  // Export to Excel
  const exportToExcel = () => {
    try {
      const excelData = filteredData.map(item => ({
        "Designation": item.Designation,
        "Type": item.Type,
        "Department": item.Department,
        "Created Date": item.CreatedDate,
        "Status": item.Status
      }));

      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Designations");

      XLSX.writeFile(wb, `designations-list-${dayjs().format('YYYY-MM-DD')}.xlsx`);
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
        <div className="content">
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Designation
                <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
                  Total Designation : {data.length}
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
                Add New Designation
              </Link>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
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
                          setFilterDesignation([]);
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

      <DesignationModal
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        currentDesignation={currentDesignation}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => setShowDeleteModal(false)}
        onAdd={handleAddDesignation}
        onEdit={handleEditDesignation}
        onDelete={handleDeleteDesignation}
      />
    </>
  );
};

export default DesignationList;