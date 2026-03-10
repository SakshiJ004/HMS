// import { useState } from "react";
// import Modals from "./modals/modals";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../../core/common/dataTable";
// import { SpecializationsListData } from "../../../../../core/json/specializationListData";
// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { DatePicker, Select } from "antd";
// import { Specialization, StatusActive } from "../../../../../core/common/selectOption";

// const Specializations = () => {
//   const data = SpecializationsListData;
//   const columns = [
//     {
//       title: "Specialization",
//       dataIndex: "Specialization",
//       render: (text: any, render: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to="#"
//             className="avatar me-2"
//             data-bs-toggle="modal"
//             data-bs-target="#view_staff"
//           >
//             <ImageWithBasePath
//               src={`assets/img/doctors/${render.img}`}
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
//       sorter: (a: any, b: any) =>
//         a.Specialization.length - b.Specialization.length,
//     },
//     {
//       title: "Created Date",
//       dataIndex: "CreatedDate",
//       sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
//     },
//     {
//       title: "No of Doctor",
//       dataIndex: "NoofDoctor",
//       sorter: (a: any, b: any) => a.NoofDoctor.length - b.NoofDoctor.length,
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
//                 data-bs-target="#edit_specialization"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_specialization"
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
//                 Specializations
//                 <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
//                   Total Specializations : 33
//                 </span>
//               </h4>
//             </div>
//             <div className="text-end d-flex">
//               <Link
//                 to="#"
//                 className="btn btn-primary text-white ms-2 fs-13 btn-md"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_specialization"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add New Specialization
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
//                   className="btn btn-white fs-14 py-1 bg-white border d-inline-flex text-dark align-items-center"
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
//                           <label className="form-label">Specialization</label>
//                         </div>
//                          <Select
//                           mode="multiple"
//                           allowClear
//                           style={{ width: "100%" }}
//                           placeholder="Please select"
//                           defaultValue={[]}
//                           options={Specialization}
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
//                       <a
//                         href="#"
//                         className="btn btn-light btn-md me-2"
//                         id="close-filter"
//                       >
//                         Close
//                       </a>
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
//       <Modals />
//     </>
//   );
// };

// export default Specializations;


import { useState, useEffect } from "react";
import { Link } from "react-router";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Modals from "./modals/modals";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export interface Specialization {
  _id: string;
  name: string;
  description?: string;
  image?: string;
  status: "Active" | "Inactive";
  doctorCount: number;
  createdAt: string;
}

const Specializations = () => {
  const [specializations, setSpecializations] = useState<Specialization[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<any>(null);
  const [sortBy, setSortBy] = useState<"recent" | "oldest">("recent");
  const [totalCount, setTotalCount] = useState(0);

  // Modal control states - passed to Modals component
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Specialization | null>(null);

  useEffect(() => { fetchSpecializations(); }, [sortBy]);

  const getAuthHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });

  const fetchSpecializations = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/api/specializations?sortBy=${sortBy}`, {
        headers: getAuthHeaders(),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSpecializations(data.data || []);
        setTotalCount(data.total || data.data?.length || 0);
      }
    } catch (err) {
      console.error("Failed to fetch specializations:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditOpen = (item: Specialization) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleDeleteOpen = (item: Specialization) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const filteredData = specializations.filter((s) => {
    const matchSearch = !searchText || s.name.toLowerCase().includes(searchText.toLowerCase());
    const matchStatus = filterStatus.length === 0 || filterStatus.includes(s.status);
    const matchDate = !filterDate ||
      dayjs(s.createdAt).format("DD-MM-YYYY") === dayjs(filterDate).format("DD-MM-YYYY");
    return matchSearch && matchStatus && matchDate;
  });

  const StatusOptions = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

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
                Specializations
                <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
                  Total Specializations : {totalCount}
                </span>
              </h4>
            </div>
            <div className="text-end d-flex">
              <button
                className="btn btn-primary text-white ms-2 fs-13 btn-md"
                onClick={() => setShowAddModal(true)}
              >
                <i className="ti ti-plus me-1" />
                Add New Specialization
              </button>
            </div>
          </div>
          {/* End Page Header */}

          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            {/* Search */}
            <div className="search-set mb-3">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="table-search d-flex align-items-center mb-0">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={setSearchText} />
                  </div>
                </div>
              </div>
            </div>

            {/* Filter + Sort */}
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              {/* Filter Dropdown */}
              <div className="dropdown me-2">
                <Link to="#"
                  className="btn btn-white fs-14 py-1 bg-white border d-inline-flex text-dark align-items-center"
                  data-bs-toggle="dropdown" data-bs-auto-close="outside">
                  <i className="ti ti-filter text-gray-5 me-1" />Filters
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0" id="filter-dropdown">
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header p-3">
                    <h5 className="mb-0 fw-bold">Filter</h5>
                    <Link to="#" className="link-danger text-decoration-underline"
                      onClick={(e) => { e.preventDefault(); setFilterStatus([]); setFilterDate(null); }}>
                      Clear All
                    </Link>
                  </div>
                  <div className="filter-body p-3 pb-0">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">Date</label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{ format: "DD-MM-YYYY", type: "mask" }}
                          placeholder="DD-MM-YYYY"
                          value={filterDate}
                          onChange={setFilterDate}
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <Select
                        mode="multiple" allowClear style={{ width: "100%" }}
                        placeholder="Please select" value={filterStatus}
                        onChange={setFilterStatus} options={StatusOptions}
                      />
                    </div>
                  </div>
                  <div className="filter-footer d-flex align-items-center justify-content-end border-top p-3">
                    <Link to="#" className="btn btn-light btn-md me-2" id="close-filter"
                      onClick={(e) => { e.preventDefault(); const el = document.querySelector('.filter-dropdown'); if (el) el.classList.remove('show'); }}>
                      Close
                    </Link>
                    <button type="button" className="btn btn-primary btn-md" onClick={fetchSpecializations}>
                      Filter
                    </button>
                  </div>
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="dropdown">
                <Link to="#"
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown">
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
            <table className="table border">
              <thead className="thead-light">
                <tr>
                  <th>Specialization</th>
                  <th>Created Date</th>
                  <th>No of Doctor</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4">
                      <div className="spinner-border text-primary" role="status" />
                    </td>
                  </tr>
                ) : filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4">
                      <i className="ti ti-stethoscope fs-1 text-muted d-block mb-2" />
                      <p className="text-muted mb-0">No specializations found</p>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((s) => (
                    <tr key={s._id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="avatar me-2 rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center"
                            style={{ width: "40px", height: "40px" }}
                          >
                            {s.image ? (
                              <img src={s.image} alt={s.name} className="rounded-circle"
                                style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                            ) : (
                              <i className="ti ti-stethoscope text-primary fs-16" />
                            )}
                          </div>
                          <div>
                            <h6 className="mb-0 fs-14 fw-semibold">{s.name}</h6>
                            {s.description && (
                              <span className="text-muted fs-12">
                                {s.description.length > 40 ? s.description.slice(0, 40) + "..." : s.description}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="text-muted fs-13">{dayjs(s.createdAt).format("DD MMM YYYY")}</td>
                      <td>{s.doctorCount || 0}</td>
                      <td>
                        <span className={`badge ${s.status === "Active"
                          ? "badge-soft-success border-success"
                          : "badge-soft-danger border-danger"
                          } border px-2 py-1 fs-13 fw-medium`}>
                          {s.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-item">
                          <Link to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu p-2">
                            <li>
                              <button
                                className="dropdown-item d-flex align-items-center"
                                onClick={() => handleEditOpen(s)}
                              >
                                <i className="ti ti-edit me-2" /> Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item d-flex align-items-center text-danger"
                                onClick={() => handleDeleteOpen(s)}
                              >
                                <i className="ti ti-trash me-2" /> Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* End Content */}

        {/* Footer */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved
          </p>
        </div>
      </div>
      {/* ========================
        End Page Content
      ========================= */}

      {/* Modals */}
      <Modals
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        selectedItem={selectedItem}
        onAddClose={() => setShowAddModal(false)}
        onEditClose={() => setShowEditModal(false)}
        onDeleteClose={() => setShowDeleteModal(false)}
        onSuccess={fetchSpecializations}
      />
    </>
  );
};

export default Specializations;