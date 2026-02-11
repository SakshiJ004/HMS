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
import Modals from "./modals/modals";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import { Link } from "react-router";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import {
  getSpecializations,
  deleteSpecialization,
} from "../../../../../api/specializationService";

interface SpecializationData {
  _id: string;
  name: string;
  description: string;
  doctorCount: number;
  status: string;
  createdAt: string;
  icon?: string;
}

const Specializations = () => {
  const [data, setData] = useState<SpecializationData[]>([]);
  const [filteredData, setFilteredData] = useState<SpecializationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedSpec, setSelectedSpec] = useState<SpecializationData | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Filters
  const [filterSpecialization, setFilterSpecialization] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');

  useEffect(() => {
    fetchSpecializations();
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
  }, [
    data,
    filterSpecialization,
    filterDate,
    filterStatus,
    sortBy,
  ]);

  const fetchSpecializations = async () => {
    try {
      setLoading(true);
      const response = await getSpecializations();
      if (response.success) {
        setData(response.data);
      }
    } catch (error: any) {
      console.error('Error fetching specializations:', error);
      alert(error.message || 'Failed to fetch specializations');
    } finally {
      setLoading(false);
    }
  };

  const applyFiltersAndSort = () => {
    let filtered = [...data];

    // Filter by specialization
    if (filterSpecialization.length > 0) {
      filtered = filtered.filter((spec) =>
        filterSpecialization.includes(spec.name)
      );
    }

    // Filter by date
    if (filterDate) {
      const selectedDate = dayjs(filterDate).format('YYYY-MM-DD');
      filtered = filtered.filter((spec) =>
        dayjs(spec.createdAt).format('YYYY-MM-DD') === selectedDate
      );
    }

    // Filter by status
    if (filterStatus.length > 0) {
      filtered = filtered.filter((spec) =>
        filterStatus.includes(spec.status)
      );
    }

    // Sort
    if (sortBy === 'recent') {
      filtered.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else {
      filtered.sort((a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }

    setFilteredData(filtered);
  };

  const handleDelete = async () => {
    if (!selectedSpec) return;

    try {
      await deleteSpecialization(selectedSpec._id);
      await fetchSpecializations();
      setShowDeleteModal(false);
      setSelectedSpec(null);
    } catch (error: any) {
      console.error('Error deleting specialization:', error);
      alert(error.message || 'Failed to delete specialization');
    }
  };

  const clearAllFilters = () => {
    setFilterSpecialization([]);
    setFilterDate(null);
    setFilterStatus([]);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // Dynamic options
  const specializationOptions = data.map((spec) => ({
    label: spec.name,
    value: spec.name,
  }));

  const statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
  ];

  const columns = [
    {
      title: "Specialization",
      dataIndex: "name",
      render: (text: string, record: SpecializationData) => (
        <div className="d-flex align-items-center">
          <Link
            to="#"
            className="avatar me-2"
            onClick={() => {
              setSelectedSpec(record);
              setShowEditModal(true);
            }}
          >
            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', fontSize: '16px' }}
            >
              {text.charAt(0).toUpperCase()}
            </div>
          </Link>
          <div>
            <h6 className="mb-0 fs-14 fw-semibold">
              <Link
                to="#"
                onClick={() => {
                  setSelectedSpec(record);
                  setShowEditModal(true);
                }}
              >
                {text}
              </Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: SpecializationData, b: SpecializationData) =>
        a.name.localeCompare(b.name),
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      render: (date: string) => dayjs(date).format('DD MMM YYYY'),
      sorter: (a: SpecializationData, b: SpecializationData) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "No of Doctor",
      dataIndex: "doctorCount",
      sorter: (a: SpecializationData, b: SpecializationData) =>
        a.doctorCount - b.doctorCount,
    },
    {
      title: "Status",
      dataIndex: "status",
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
      sorter: (a: SpecializationData, b: SpecializationData) =>
        a.status.localeCompare(b.status),
    },
    {
      title: "",
      render: (record: SpecializationData) => (
        <div className="action-item">
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                onClick={() => {
                  setSelectedSpec(record);
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
                onClick={() => {
                  setSelectedSpec(record);
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
              <h4 className="fw-bold mb-0">
                Specializations
                <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
                  Total Specializations : {filteredData.length}
                </span>
              </h4>
            </div>
            <div className="text-end d-flex">
              <Link
                to="#"
                className="btn btn-primary text-white ms-2 fs-13 btn-md"
                onClick={() => setShowAddModal(true)}
              >
                <i className="ti ti-plus me-1" />
                Add New Specialization
              </Link>
            </div>
          </div>

          {/* Search & Filters */}
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
                  className="btn btn-white fs-14 py-1 bg-white border d-inline-flex text-dark align-items-center"
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
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="filter-body pb-0">
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Specialization</label>
                          <Link
                            to="#"
                            className="link-primary mb-1"
                            onClick={() => setFilterSpecialization([])}
                          >
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          value={filterSpecialization}
                          onChange={setFilterSpecialization}
                          options={specializationOptions}
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
                            onClick={() => setFilterStatus([])}
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
                        className="btn btn-light btn-md me-2"
                        onClick={() => document.getElementById('close-filter')?.click()}
                        id="close-filter"
                      >
                        Close
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary btn-md"
                        onClick={() => document.getElementById('close-filter')?.click()}
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
                      onClick={() => setSortBy('recent')}
                    >
                      Recent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item rounded-1"
                      onClick={() => setSortBy('oldest')}
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
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        selectedSpec={selectedSpec}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => {
          setShowEditModal(false);
          setSelectedSpec(null);
        }}
        onCloseDelete={() => {
          setShowDeleteModal(false);
          setSelectedSpec(null);
        }}
        onDelete={handleDelete}
        onRefresh={fetchSpecializations}
      />
    </>
  );
};

export default Specializations;


