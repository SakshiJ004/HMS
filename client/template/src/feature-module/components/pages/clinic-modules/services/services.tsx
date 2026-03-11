// import { Link } from "react-router";
// import Modals from "./modals/modals";
// import { useState } from "react";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../../core/common/dataTable";
// import { ServiceListData } from "../../../../../core/json/servicesData";
// import { Department, Service_Name, StatusActive } from "../../../../../core/common/selectOption";
// import { Select } from "antd";
// import Slider from "rc-slider";

// const Services = () => {
//   const data = ServiceListData;
//   const columns = [
//     {
//       title: "Service Name",
//       dataIndex: "ServiceName",
//       sorter: (a: any, b: any) => a.ServiceName.length - b.ServiceName.length,
//     },
//     {
//       title: "Department",
//       dataIndex: "Department",
//       sorter: (a: any, b: any) => a.Department.length - b.Department.length,
//     },
//     {
//       title: "Price",
//       dataIndex: "Price",
//       sorter: (a: any, b: any) => a.Price.length - b.Price.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: string) => (
//         <span
//           className={`badge ${
//             text === "Active"
//               ? "badge-soft-success border-success"
//               : "badge-soft-danger border-danger"
//           }  border  px-2 py-1 fs-13 fw-medium`}
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
//                 data-bs-target="#edit_service"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_service"
//               >
//                 Delete
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//   ];
//   const [searchText, setSearchText] = useState<string>("");

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//   };

//   const [sliderValueDefault, setSliderValueDefault] = useState(0);
//    const handleChangeDefault = (value: any) => {
//     setSliderValueDefault(value);
//   };

//   return (
//     <>
//       <>
//         {/* ========================
// 			Start Page Content
// 		========================= */}
//         <div className="page-wrapper">
//           {/* Start Content */}
//           <div className="content">
//             {/* Start Page Header */}
//             <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
//               <div className="flex-grow-1">
//                 <h4 className="fw-bold mb-0">
//                   Services
//                   <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
//                     Total Services : 565
//                   </span>
//                 </h4>
//               </div>
//               <div className="text-end d-flex">
//                 {/* dropdown*/}
//                 <div className="dropdown me-1">
//                   <Link
//                     to="#"
//                     className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
//                     data-bs-toggle="dropdown"
//                   >
//                     Export
//                     <i className="ti ti-chevron-down ms-2" />
//                   </Link>
//                   <ul className="dropdown-menu p-2">
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         Download as PDF
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         Download as Excel
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//                 <Link
//                   to="#"
//                   className="btn btn-primary ms-2 fs-13 btn-md"
//                   data-bs-toggle="modal"
//                   data-bs-target="#add_service"
//                 >
//                   <i className="ti ti-plus me-1" />
//                   New Services
//                 </Link>
//               </div>
//             </div>
//             {/* End Page Header */}
//             <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//               <div className="search-set mb-3">
//                 <div className="d-flex align-items-center flex-wrap gap-2">
//                   <div className="table-search d-flex align-items-center mb-0">
//                     <div className="search-input">
//                       <SearchInput value={searchText} onChange={handleSearch} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
//                 <div className="dropdown me-2">
//                   <Link
//                     to="#"
//                     className="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
//                     data-bs-toggle="dropdown"
//                     data-bs-auto-close="outside"
//                   >
//                     <i className="ti ti-filter text-gray-5 me-1" />
//                     Filters
//                   </Link>
//                   <div
//                     className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
//                     id="filter-dropdown"
//                   >
//                     <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
//                       <h5 className="mb-0 fw-bold">Filter</h5>
//                       <div className="d-flex align-items-center">
//                         <Link
//                           to="#"
//                           className="link-danger text-decoration-underline"
//                         >
//                           Clear All
//                         </Link>
//                       </div>
//                     </div>
//                     <form action="#">
//                       <div className="filter-body pb-0">
//                         <div className="mb-3">
//                           <div className="d-flex align-items-center justify-content-between">
//                             <label className="form-label">Service Name</label>
//                             <a
//                               href="#"
//                               className="link-primary mb-1"
//                             >
//                               Reset
//                             </a>
//                           </div>
//                            <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Service_Name}
//                         />
//                         </div>
//                         <div className="mb-3">
//                           <div className="d-flex align-items-center justify-content-between">
//                             <label className="form-label">Department</label>
//                             <a
//                               href="#"
//                               className="link-primary mb-1"
//                             >
//                               Reset
//                             </a>
//                           </div>
//                            <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Department}
//                         />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label">Amount</label>
//                           <div className="dropdown">
//                             <a
//                               href="#"
//                               className="dropdown-toggle form-control"
//                               data-bs-toggle="dropdown"
//                               data-bs-auto-close="outside"
//                               aria-expanded="true"
//                             >
//                               Select
//                             </a>
//                             <div className="dropdown-menu shadow-lg w-100 dropdown-info">
//                               <div className="filter-range">
//                                 <Slider
//                     min={0}
//                     max={100}
//                     value={sliderValueDefault}
//                     defaultValue={[0, 50]}
//                     onChange={handleChangeDefault}
//                   />
//                                 <p>
//                                   Range :{" "}
//                                   <span className="text-gray-9">
//                                     $200 - $5695
//                                   </span>
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="mb-3">
//                           <div className="d-flex align-items-center justify-content-between">
//                             <label className="form-label">Status</label>
//                             <a
//                               href="#"
//                               className="link-primary mb-1"
//                             >
//                               Reset
//                             </a>
//                           </div>
//                            <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={StatusActive}
//                         />
//                         </div>
//                       </div>
//                       <div className="filter-footer d-flex align-items-center justify-content-end border-top">
//                         <a
//                           href="#"
//                           className="btn btn-light btn-md me-2"
//                           id="close-filter"
//                         >
//                           Close
//                         </a>
//                         <button
//                           type="submit"
//                           className="btn btn-primary btn-md"
//                         >
//                           Filter
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="dropdown">
//                   <Link
//                     to="#"
//                     className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
//                     data-bs-toggle="dropdown"
//                   >
//                     <span className="me-1"> Sort By : </span> Recent
//                   </Link>
//                   <ul className="dropdown-menu  dropdown-menu-end p-2">
//                     <li>
//                       <Link to="#" className="dropdown-item rounded-1">
//                         Recent
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#" className="dropdown-item rounded-1">
//                         Oldest
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="table-responsive">
//               <Datatable
//                 columns={columns}
//                 dataSource={data}
//                 Selection={false}
//                 searchText={searchText}
//               />
//             </div>
//           </div>
//           {/* End Content */}
//           {/* Footer Start */}
//           <div className="footer text-center bg-white p-2 border-top">
//             <p className="text-dark mb-0">
//               2025 ©
//               <Link to="#" className="link-primary">
//                 Preclinic
//               </Link>
//               , All Rights Reserved
//             </p>
//           </div>
//           {/* Footer End */}
//         </div>
//         {/* ========================
// 			End Page Content
// 		========================= */}
//       </>

//       {/* <Modals /> */}
//     </>
//   );
// };

// export default Services;



import { useState, useEffect } from "react";
import { Link } from "react-router";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import ServicesModal from "./modals/modals";
import { Department, StatusActive } from "../../../../../core/common/selectOption";
import { Select } from "antd";
import Slider from "rc-slider";
import dayjs from "dayjs";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import {
  getServices,
  createService,
  updateService,
  deleteService,
} from "../../../../../api/serviceService";

interface ServiceData {
  key: string;
  _id?: string;
  ServiceName: string;
  Department: string;
  Price: string;
  Status: string;
}

const Services = () => {
  const [data, setData] = useState<ServiceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentService, setCurrentService] = useState<any>(null);

  // Filter states
  const [filterServiceName, setFilterServiceName] = useState<string[]>([]);
  const [filterDepartment, setFilterDepartment] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [sliderValue, setSliderValue] = useState<number[]>([0, 10000]);
  const [sortBy, setSortBy] = useState<"recent" | "oldest">("recent");

  // ===================== Fetch Services =====================
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await getServices();

      if (response.success && response.data) {
        const formatted: ServiceData[] = response.data.map((service: any) => ({
          key: service._id,
          _id: service._id,
          ServiceName: service.name,
          Department: service.department,
          Price: `$${service.price}`,
          Status: service.status,
        }));
        setData(formatted);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // ===================== Filters & Sort =====================
  const applyFilters = () => {
    let filtered = [...data];

    if (filterServiceName.length > 0) {
      filtered = filtered.filter((item) =>
        filterServiceName.includes(item.ServiceName)
      );
    }

    if (filterDepartment.length > 0) {
      filtered = filtered.filter((item) =>
        filterDepartment.includes(item.Department)
      );
    }

    if (filterStatus.length > 0) {
      filtered = filtered.filter((item) =>
        filterStatus.includes(item.Status)
      );
    }

    // Price range filter
    filtered = filtered.filter((item) => {
      const price = parseFloat(item.Price.replace("$", ""));
      return price >= sliderValue[0] && price <= sliderValue[1];
    });

    // Sort
    if (sortBy === "recent") {
      filtered.reverse();
    }

    return filtered;
  };

  const filteredData = applyFilters();

  // ===================== Columns =====================
  const columns = [
    {
      title: "Service Name",
      dataIndex: "ServiceName",
      sorter: (a: any, b: any) => a.ServiceName.localeCompare(b.ServiceName),
    },
    {
      title: "Department",
      dataIndex: "Department",
      sorter: (a: any, b: any) => a.Department.localeCompare(b.Department),
    },
    {
      title: "Price",
      dataIndex: "Price",
      sorter: (a: any, b: any) =>
        parseFloat(a.Price.replace("$", "")) -
        parseFloat(b.Price.replace("$", "")),
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge ${text === "Active"
              ? "badge-soft-success border-success"
              : "badge-soft-danger border-danger"
            } border px-2 py-1 fs-13 fw-medium`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.localeCompare(b.Status),
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
                  className="dropdown-item d-flex align-items-center"
                  type="button"
                  onClick={() => {
                    setCurrentService(record);
                    setShowEditModal(true);
                  }}
                >
                  <i className="ti ti-edit me-2" />
                  Edit
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item d-flex align-items-center text-danger"
                  type="button"
                  onClick={() => {
                    setCurrentService(record);
                    setShowDeleteModal(true);
                  }}
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

  // ===================== CRUD Handlers =====================
  const handleAddService = async (
    name: string,
    department: string,
    price: string,
    status: string
  ) => {
    try {
      const response = await createService({ name, department, price, status });

      if (response.success) {
        await fetchServices();
        setShowAddModal(false);
      } else {
        alert(response.message || "Failed to add service. Please try again.");
      }
    } catch (error) {
      console.error("Add service error:", error);
      alert("Error adding service. Please try again.");
    }
  };

  const handleEditService = async (
    name: string,
    department: string,
    price: string,
    status: string
  ) => {
    if (currentService && currentService._id) {
      try {
        const response = await updateService(currentService._id, {
          name,
          department,
          price,
          status,
        });

        if (response.success) {
          await fetchServices();
          setShowEditModal(false);
          setCurrentService(null);
        } else {
          alert(
            response.message || "Failed to update service. Please try again."
          );
        }
      } catch (error) {
        console.error("Update service error:", error);
        alert("Error updating service. Please try again.");
      }
    }
  };

  const handleDeleteService = async () => {
    if (currentService && currentService._id) {
      try {
        const response = await deleteService(currentService._id);

        if (response.success) {
          await fetchServices();
          setShowDeleteModal(false);
          setCurrentService(null);
        } else {
          alert(
            response.message || "Failed to delete service. Please try again."
          );
        }
      } catch (error) {
        console.error("Delete service error:", error);
        alert("Error deleting service. Please try again.");
      }
    }
  };

  // ===================== Export =====================
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Service List", 14, 20);
      doc.setFontSize(11);
      doc.text(`Generated on: ${dayjs().format("DD-MM-YYYY HH:mm")}`, 14, 30);

      const tableData = data.map((item) => [
        item.ServiceName,
        item.Department,
        item.Price,
        item.Status,
      ]);

      autoTable(doc, {
        head: [["Service Name", "Department", "Price", "Status"]],
        body: tableData,
        startY: 35,
        theme: "grid",
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 9 },
      });

      doc.save(`services-list-${dayjs().format("YYYY-MM-DD")}.pdf`);
    } catch (error) {
      console.error("PDF export error:", error);
    }
  };

  const exportToExcel = () => {
    try {
      const excelData = data.map((item) => ({
        "Service Name": item.ServiceName,
        Department: item.Department,
        Price: item.Price,
        Status: item.Status,
      }));

      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Services");
      XLSX.writeFile(wb, `services-list-${dayjs().format("YYYY-MM-DD")}.xlsx`);
    } catch (error) {
      console.error("Excel export error:", error);
    }
  };

  // ===================== Loading =====================
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

  // ===================== Render =====================
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Services
                <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
                  Total Services : {data.length}
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
                New Services
              </Link>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="table-search d-flex align-items-center mb-0">
                  <div className="search-input">
                    <SearchInput
                      value={searchText}
                      onChange={(value) => setSearchText(value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              {/* Filter Dropdown */}
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
                <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0">
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h5 className="mb-0 fw-bold">Filter</h5>
                    <Link
                      to="#"
                      className="link-danger text-decoration-underline"
                      onClick={(e) => {
                        e.preventDefault();
                        setFilterServiceName([]);
                        setFilterDepartment([]);
                        setFilterStatus([]);
                        setSliderValue([0, 10000]);
                      }}
                    >
                      Clear All
                    </Link>
                  </div>
                  <div className="filter-body pb-0">
                    {/* Service Name Filter */}
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <label className="form-label">Service Name</label>
                        <Link
                          to="#"
                          className="link-primary mb-1"
                          onClick={(e) => {
                            e.preventDefault();
                            setFilterServiceName([]);
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
                        value={filterServiceName}
                        onChange={setFilterServiceName}
                        options={data.map((s) => ({
                          label: s.ServiceName,
                          value: s.ServiceName,
                        }))}
                      />
                    </div>

                    {/* Department Filter */}
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <label className="form-label">Department</label>
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

                    {/* Price Range Filter */}
                    <div className="mb-3">
                      <label className="form-label">Amount</label>
                      <div className="filter-range p-2 border rounded">
                        <Slider
                          range
                          min={0}
                          max={10000}
                          value={sliderValue}
                          onChange={(value: any) => setSliderValue(value)}
                        />
                        <p className="mt-2 mb-0">
                          Range:{" "}
                          <span className="text-gray-9 fw-medium">
                            ${sliderValue[0]} - ${sliderValue[1]}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Status Filter */}
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
                        options={StatusActive}
                      />
                    </div>
                  </div>
                  <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                    <Link to="#" className="btn btn-light btn-md me-2">
                      Close
                    </Link>
                    <button type="button" className="btn btn-primary btn-md">
                      Filter
                    </button>
                  </div>
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown"
                >
                  <span className="me-1"> Sort By : </span>
                  {sortBy === "recent" ? "Recent" : "Oldest"}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item rounded-1"
                      onClick={(e) => {
                        e.preventDefault();
                        setSortBy("recent");
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
                        setSortBy("oldest");
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

      {/* Modals */}
      <ServicesModal
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        currentService={currentService}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => setShowDeleteModal(false)}
        onAdd={handleAddService}
        onEdit={handleEditService}
        onDelete={handleDeleteService}
      />
    </>
  );
};

export default Services;