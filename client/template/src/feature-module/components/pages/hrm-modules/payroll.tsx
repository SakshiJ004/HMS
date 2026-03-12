// import { useState } from "react";
// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../core/imageWithBasePath";
// import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
// import { PayrollListData } from "../../../../core/json/payrollListData";
// import { all_routes } from "../../../routes/all_routes";
// import Datatable from "../../../../core/common/dataTable";
// import PayrollListModal from "./modal/payrollListModal";
// import { Employee, StaffsRole, StatusActive } from "../../../../core/common/selectOption";
// import { DatePicker, Select } from "antd";

// const PayrollList = () => {
//   const data = PayrollListData;
//   const columns = [
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
//       title: "Email",
//       dataIndex: "Email",
//       sorter: (a: any, b: any) => a.Email.length - b.Email.length,
//     },
//     {
//       title: "JoiningDate",
//       dataIndex: "JoiningDate",
//       sorter: (a: any, b: any) => a.JoiningDate.length - b.JoiningDate.length,
//     },
//     {
//       title: "Role",
//       dataIndex: "Role",
//       sorter: (a: any, b: any) => a.Role.length - b.Role.length,
//     },
//     {
//       title: "Salary",
//       dataIndex: "Salary",
//       sorter: (a: any, b: any) => a.Salary.length - b.Salary.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: any) => (
//         <Link
//           to={all_routes.payroll2}
//           className="btn btn-white border text-dark"
//         >
//           {text}
//         </Link>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//     {
//       title: "",
//       render: () => (
//         <div className="action-item p-2">
//           <Link
//             to="#"
//             data-bs-toggle="dropdown"
//             className="btn p-1 btn-white border"
//           >
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu p-2">
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#edit_payroll"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_payroll"
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
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Start Page Header */}
//           <div className="mb-3 pb-3 border-bottom">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="d-flex align-items-center">
//                 <h4 className="fw-bold mb-0 me-2">Payroll</h4>
//                 <span className="badge badge-soft-primary border border-primary fw-medium">
//                   Total Department : 33
//                 </span>
//               </div>
//               <Link
//                 to="#"
//                 className="btn btn-primary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_payroll"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add Employee Salary
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
//                           <label className="form-label">Employee</label>
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
//                           options={Employee}
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

//       <PayrollListModal />
//     </>
//   );
// };

// export default PayrollList;

import { useState, useEffect } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../core/common/dataTable";
import PayrollListModal, { type PayrollFormData } from "./modal/payrollListModal";
import { Employee, StaffsRole, StatusActive } from "../../../../core/common/selectOption";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { all_routes } from "../../../routes/all_routes";
import {
  getPayrolls,
  createPayroll,
  updatePayroll,
  deletePayroll,
} from "../../../../api/payrollService";

interface PayrollData {
  key: string;
  _id?: string;
  staffId: string;
  staffName: string;
  email: string;
  role: string;
  joiningDate: string;
  image: string;
  salaryMonth: string;
  salaryYear: number;
  basicSalary: number;
  da: number;
  hra: number;
  conveyance: number;
  medicalAllowance: number;
  otherEarnings: number;
  totalEarnings: number;
  tds: number;
  esi: number;
  pf: number;
  profTax: number;
  labourWelfare: number;
  otherDeductions: number;
  totalDeductions: number;
  netSalary: number;
  status: string;
  Employee: string;
  Email: string;
  JoiningDate: string;
  Role: string;
  Salary: string;
  Status: string;
  Image: string;
}

const PayrollList = () => {
  const [data, setData] = useState<PayrollData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPayroll, setCurrentPayroll] = useState<any>(null);

  const [filterEmployee, setFilterEmployee] = useState<string[]>([]);
  const [filterRole, setFilterRole] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"recent" | "oldest">("recent");

  const fetchPayrolls = async () => {
    try {
      setLoading(true);
      const response = await getPayrolls();
      if (response.success && response.data) {
        const formatted: PayrollData[] = response.data.map((p: any) => ({
          key: p._id,
          _id: p._id,
          staffId: p.staffId,
          staffName: p.staffName,
          email: p.email || "",
          role: p.role || "",
          joiningDate: p.joiningDate || "",
          image: p.image || "",
          salaryMonth: p.salaryMonth,
          salaryYear: p.salaryYear,
          basicSalary: p.basicSalary,
          da: p.da,
          hra: p.hra,
          conveyance: p.conveyance,
          medicalAllowance: p.medicalAllowance,
          otherEarnings: p.otherEarnings,
          totalEarnings: p.totalEarnings,
          tds: p.tds,
          esi: p.esi,
          pf: p.pf,
          profTax: p.profTax,
          labourWelfare: p.labourWelfare,
          otherDeductions: p.otherDeductions,
          totalDeductions: p.totalDeductions,
          netSalary: p.netSalary,
          status: p.status,
          Employee: p.staffName,
          Email: p.email || "",
          JoiningDate: p.joiningDate || "-",
          Role: p.role || "-",
          Salary: `$${p.netSalary?.toFixed(2) || "0.00"}`,
          Status: p.status,
          Image: p.image || "avatar-01.jpg",
        }));
        setData(formatted);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching payrolls:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayrolls();
  }, []);

  const applyFilters = () => {
    let filtered = [...data];
    if (filterEmployee.length > 0) {
      filtered = filtered.filter(item => filterEmployee.includes(item.Employee));
    }
    if (filterRole.length > 0) {
      filtered = filtered.filter(item => filterRole.includes(item.Role));
    }
    if (filterStatus.length > 0) {
      filtered = filtered.filter(item => filterStatus.includes(item.Status));
    }
    if (filterDate) {
      const selectedDate = dayjs(filterDate).format("DD-MMM-YYYY");
      filtered = filtered.filter(item => item.JoiningDate === selectedDate);
    }
    if (sortBy === "oldest") {
      filtered.reverse();
    }
    return filtered;
  };

  const filteredData = applyFilters();

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  const columns = [
    {
      title: "Employee",
      dataIndex: "Employee",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar me-2">
            {record.image ? (
              <img src={record.image} alt="staff" className="rounded-circle w-100 h-100 object-fit-cover" />
            ) : (
              <ImageWithBasePath src={`assets/img/users/${record.Image}`} alt="Staff" className="rounded-circle" />
            )}
          </Link>
          <div>
            <h6 className="mb-0 fs-14 fw-semibold">{text}</h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Employee.localeCompare(b.Employee),
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a: any, b: any) => a.Email.localeCompare(b.Email),
    },
    {
      title: "JoiningDate",
      dataIndex: "JoiningDate",
      sorter: (a: any, b: any) => a.JoiningDate.localeCompare(b.JoiningDate),
    },
    {
      title: "Role",
      dataIndex: "Role",
      sorter: (a: any, b: any) => a.Role.localeCompare(b.Role),
    },
    {
      title: "Salary",
      dataIndex: "Salary",
      sorter: (a: any, b: any) =>
        parseFloat(a.Salary.replace("$", "")) - parseFloat(b.Salary.replace("$", "")),
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any, record: any) => (
        <Link
          to={`${all_routes.payroll2}?id=${record._id}`}
          className="btn btn-white border text-dark"
        >
          {text}
        </Link>
      ),
      sorter: (a: any, b: any) => a.Status.localeCompare(b.Status),
    },
    {
      title: "",
      render: (_: any, record: any) => (
        <div className="action-item p-2">
          <Link to="#" data-bs-toggle="dropdown" className="btn p-1 btn-white border">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <button
                className="dropdown-item d-flex align-items-center"
                type="button"
                onClick={() => { setCurrentPayroll(record); setShowEditModal(true); }}
              >
                <i className="ti ti-edit me-2" />Edit
              </button>
            </li>
            <li>
              <button
                className="dropdown-item d-flex align-items-center"
                type="button"
                onClick={() => { setCurrentPayroll(record); setShowDeleteModal(true); }}
              >
                <i className="ti ti-trash me-2" />Delete
              </button>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const handleAddPayroll = async (formData: PayrollFormData) => {
    try {
      const response = await createPayroll({
        ...formData,
        salaryYear: parseInt(formData.salaryYear),
      });
      if (response.success) {
        await fetchPayrolls();
        setShowAddModal(false);
      } else {
        alert(response.message || "Failed to add payroll.");
      }
    } catch (error) {
      console.error("Add payroll error:", error);
      alert("Error adding payroll.");
    }
  };

  const handleEditPayroll = async (formData: PayrollFormData) => {
    if (currentPayroll && currentPayroll._id) {
      try {
        const response = await updatePayroll(currentPayroll._id, {
          ...formData,
          salaryYear: parseInt(formData.salaryYear),
        });
        if (response.success) {
          await fetchPayrolls();
          setShowEditModal(false);
          setCurrentPayroll(null);
        } else {
          alert(response.message || "Failed to update payroll.");
        }
      } catch (error) {
        console.error("Update payroll error:", error);
        alert("Error updating payroll.");
      }
    }
  };

  const handleDeletePayroll = async () => {
    if (currentPayroll && currentPayroll._id) {
      try {
        const response = await deletePayroll(currentPayroll._id);
        if (response.success) {
          await fetchPayrolls();
          setShowDeleteModal(false);
          setCurrentPayroll(null);
        } else {
          alert(response.message || "Failed to delete payroll.");
        }
      } catch (error) {
        console.error("Delete payroll error:", error);
        alert("Error deleting payroll.");
      }
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
          <div className="mb-3 pb-3 border-bottom">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h4 className="fw-bold mb-0 me-2">Payroll</h4>
                <span className="badge badge-soft-primary border border-primary fw-medium">
                  Total Records : {data.length}
                </span>
              </div>
              <Link
                to="#"
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); setShowAddModal(true); }}
              >
                <i className="ti ti-plus me-1" />
                Add Employee Salary
              </Link>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="table-search d-flex align-items-center mb-0">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={(v) => setSearchText(v)} />
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
                  <i className="ti ti-filter text-gray-5 me-1" />Filters
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0">
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h5 className="mb-0 fw-bold">Filter</h5>
                    <Link to="#" className="link-danger text-decoration-underline"
                      onClick={(e) => {
                        e.preventDefault();
                        setFilterEmployee([]); setFilterRole([]);
                        setFilterDate(null); setFilterStatus([]);
                      }}>Clear All</Link>
                  </div>
                  <form action="#">
                    <div className="filter-body pb-0">
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Employee</label>
                          <Link to="#" className="link-primary mb-1"
                            onClick={(e) => { e.preventDefault(); setFilterEmployee([]); }}>Reset</Link>
                        </div>
                        <Select mode="multiple" allowClear style={{ width: "100%" }}
                          placeholder="Please select" value={filterEmployee}
                          onChange={setFilterEmployee} options={Employee} />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Role</label>
                          <Link to="#" className="link-primary mb-1"
                            onClick={(e) => { e.preventDefault(); setFilterRole([]); }}>Reset</Link>
                        </div>
                        <Select mode="multiple" allowClear style={{ width: "100%" }}
                          placeholder="Please select" value={filterRole}
                          onChange={setFilterRole} options={StaffsRole} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">Date</label>
                        <div className="input-icon-end position-relative">
                          <DatePicker
                            className="form-control datetimepicker"
                            format={{ format: "DD-MM-YYYY", type: "mask" }}
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
                          <Link to="#" className="link-primary mb-1"
                            onClick={(e) => { e.preventDefault(); setFilterStatus([]); }}>Reset</Link>
                        </div>
                        <Select mode="multiple" allowClear style={{ width: "100%" }}
                          placeholder="Please select" value={filterStatus}
                          onChange={setFilterStatus} options={StatusActive} />
                      </div>
                    </div>
                    <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                      <Link to="#" className="btn btn-light btn-md me-2">Close</Link>
                      <button type="submit" className="btn btn-primary btn-md">Filter</button>
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
                  {sortBy === "recent" ? "Recent" : "Oldest"}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1"
                      onClick={(e) => { e.preventDefault(); setSortBy("recent"); }}>Recent</Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1"
                      onClick={(e) => { e.preventDefault(); setSortBy("oldest"); }}>Oldest</Link>
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

        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved
          </p>
        </div>
      </div>

      <PayrollListModal
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        currentPayroll={currentPayroll}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => setShowDeleteModal(false)}
        onAdd={handleAddPayroll}
        onEdit={handleEditPayroll}
        onDelete={handleDeletePayroll}
      />
    </>
  );
};

export default PayrollList;