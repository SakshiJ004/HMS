// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import Datatable from "../../../../../core/common/dataTable";
// import { DoctorPrescriptionsData } from "../../../../../core/json/doctorPrescriptionsData";
// import { useState } from "react";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import { DatePicker, Select } from "antd";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";

// const DoctorsPrescriptions = () => {
//   const data = DoctorPrescriptionsData;
//   const columns = [
//     {
//       title: "Prescription ID",
//       dataIndex: "Prescription_ID",
//       render: (text: any) => (
//         <Link to={all_routes.doctorsprescriptiondetails}>{text}</Link>
//       ),
//       sorter: (a: any, b: any) =>
//         a.Prescription_ID.length - b.Prescription_ID.length,
//     },
//     {
//       title: "Patient",
//       dataIndex: "Patient",
//       render: (text: any, render: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to={all_routes.doctorspatientdetails}
//             className="avatar avatar-md me-2"
//           >
//             <ImageWithBasePath
//               src={`assets/img/users/${render.img}`}
//               alt="product"
//               className="rounded-circle"
//             />
//           </Link>
//           <Link to={all_routes.doctorspatientdetails}>
//             {text}
//             <span className="text-body fs-13 fw-normal d-block">
//               {render.phone_number}
//             </span>
//           </Link>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Patient.length - b.Patient.length,
//     },
//     {
//       title: "Prescribed On",
//       dataIndex: "Prescribed_On",
//       sorter: (a: any, b: any) =>
//         a.Prescribed_On.length - b.Prescribed_On.length,
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
//                   to={all_routes.doctorspatientdetails}
//                   className="dropdown-item d-flex align-items-center"
//                 >
//                   View
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
//               <h4 className="fw-bold mb-0"> Prescriptions </h4>
//             </div>
//             <div className="text-end d-flex">
//               {/* dropdown*/}
//               <div className="dropdown me-1">
//                 <Link
//                   to="#"
//                   className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center fw-regular"
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
//     </>
//   );
// };

// export default DoctorsPrescriptions;



// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import { useState, useEffect } from "react";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import { DatePicker } from "antd";
// import dayjs from "dayjs";
// import { getDoctorPrescriptions } from "../../../../../api/prescriptionService";

// const DoctorsPrescriptions = () => {
//   const [prescriptions, setPrescriptions] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState('');
//   const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');
//   const [filterDate, setFilterDate] = useState<string>('');
//   const [filterStatus, setFilterStatus] = useState<string>('');

//   useEffect(() => {
//     fetchPrescriptions();
//   }, [sortBy]);

//   const fetchPrescriptions = async () => {
//     try {
//       setLoading(true);
//       const res = await getDoctorPrescriptions({
//         search: searchText,
//         sortBy,
//         status: filterStatus,
//         startDate: filterDate
//       });
//       if (res.success) setPrescriptions(res.data);
//     } catch (error) {
//       console.error('Failed to fetch prescriptions');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Search - real time
//   const handleSearch = (value: string) => {
//     setSearchText(value);
//     // Filter locally for speed
//   };

//   const filteredPrescriptions = prescriptions.filter(p => {
//     const search = searchText.toLowerCase();
//     return !search ||
//       p.patient?.fullName?.toLowerCase().includes(search) ||
//       p.prescriptionId?.toLowerCase().includes(search) ||
//       p.patient?.phone?.includes(search);
//   });

//   return (
//     <div className="page-wrapper">
//       <div className="content">
//         {/* Page Header */}
//         <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//           <div className="flex-grow-1">
//             <h4 className="fw-bold mb-0">Prescriptions</h4>
//           </div>
//           <div className="text-end d-flex">
//             <div className="dropdown me-1">
//               <Link to="#" className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center" data-bs-toggle="dropdown">
//                 Export <i className="ti ti-chevron-down ms-2" />
//               </Link>
//               <ul className="dropdown-menu p-2">
//                 <li><Link className="dropdown-item" to="#">Download as PDF</Link></li>
//                 <li><Link className="dropdown-item" to="#">Download as Excel</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Search + Filters */}
//         <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//           <div className="search-set mb-3">
//             <div className="search-input">
//               <SearchInput value={searchText} onChange={handleSearch} />
//             </div>
//           </div>
//           <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
//             {/* Date Filter */}
//             <div className="me-2">
//               <DatePicker
//                 className="form-control"
//                 format="DD-MM-YYYY"
//                 placeholder="Filter by date"
//                 onChange={(date) => setFilterDate(date ? date.format('YYYY-MM-DD') : '')}
//                 suffixIcon={<i className="ti ti-calendar" />}
//                 style={{ width: '160px' }}
//               />
//             </div>

//             {/* Status Filter */}
//             <div className="me-2">
//               <select
//                 className="form-select btn bg-white border rounded btn-md text-dark fs-14 py-1"
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//               >
//                 <option value="">All Status</option>
//                 <option value="Active">Active</option>
//                 <option value="Expired">Expired</option>
//               </select>
//             </div>

//             {/* Apply Filter */}
//             <button className="btn btn-primary btn-sm me-2" onClick={fetchPrescriptions}>
//               Apply Filter
//             </button>

//             {/* Sort By */}
//             <div className="dropdown">
//               <Link to="#" className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14" data-bs-toggle="dropdown">
//                 <span className="me-1">Sort By:</span>
//                 {sortBy === 'recent' ? 'Recent' : 'Oldest'}
//               </Link>
//               <ul className="dropdown-menu dropdown-menu-end p-2">
//                 <li>
//                   <Link to="#" className="dropdown-item rounded-1"
//                     onClick={(e) => { e.preventDefault(); setSortBy('recent'); }}>
//                     Recent
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="dropdown-item rounded-1"
//                     onClick={(e) => { e.preventDefault(); setSortBy('oldest'); }}>
//                     Oldest
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="table-responsive">
//           <table className="table border">
//             <thead className="thead-light">
//               <tr>
//                 <th>Prescription ID</th>
//                 <th>Patient</th>
//                 <th>Prescribed On</th>
//                 <th>Department</th>
//                 <th>Status</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan={6} className="text-center py-4">
//                     <div className="spinner-border text-primary"></div>
//                   </td>
//                 </tr>
//               ) : filteredPrescriptions.length === 0 ? (
//                 <tr>
//                   <td colSpan={6} className="text-center py-4">
//                     <i className="ti ti-file-x fs-1 text-muted d-block mb-2"></i>
//                     <p className="text-muted">No prescriptions found</p>
//                   </td>
//                 </tr>
//               ) : (
//                 filteredPrescriptions.map((p) => (
//                   <tr key={p._id}>
//                     <td>
//                       <Link to={`${all_routes.doctorsprescriptiondetails}/${p._id}`}
//                         className="text-primary fw-medium">
//                         #{p.prescriptionId}
//                       </Link>
//                     </td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2 flex-shrink-0"
//                           style={{ width: '36px', height: '36px' }}>
//                           {p.patient?.fullName?.charAt(0) || 'P'}
//                         </div>
//                         <div>
//                           <p className="mb-0 fw-medium">{p.patient?.fullName}</p>
//                           <span className="text-muted fs-13">{p.patient?.phone || p.patient?.email}</span>
//                         </div>
//                       </div>
//                     </td>
//                     <td>{dayjs(p.prescribedOn).format('DD MMM YYYY')}</td>
//                     <td>{p.department || 'N/A'}</td>
//                     <td>
//                       <span className={`badge ${p.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
//                         {p.status}
//                       </span>
//                     </td>
//                     <td>
//                       <Link to="#" data-bs-toggle="dropdown">
//                         <i className="ti ti-dots-vertical" />
//                       </Link>
//                       <ul className="dropdown-menu p-2">
//                         <li>
//                           <Link to={`${all_routes.doctorsprescriptiondetails}/${p._id}`}
//                             className="dropdown-item d-flex align-items-center">
//                             <i className="ti ti-eye me-2" /> View
//                           </Link>
//                         </li>
//                       </ul>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* Footer */}
//       <div className="footer text-center bg-white p-2 border-top">
//         <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
//       </div>
//     </div>
//   );
// };

// export default DoctorsPrescriptions;



import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect } from "react";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { getDoctorPrescriptions } from "../../../../../api/prescriptionService";

const DoctorsPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');
  const [filterDate, setFilterDate] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string[]>([]);

  useEffect(() => {
    fetchPrescriptions();
  }, [sortBy]);

  const fetchPrescriptions = async () => {
    try {
      setLoading(true);
      const res = await getDoctorPrescriptions({
        sortBy,
        status: filterStatus[0] || '',
        startDate: filterDate
      });
      if (res.success) setPrescriptions(res.data);
    } catch (error) {
      console.error('Failed to fetch prescriptions');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredPrescriptions = prescriptions.filter(p => {
    const search = searchText.toLowerCase();
    return !search ||
      p.patient?.fullName?.toLowerCase().includes(search) ||
      p.prescriptionId?.toLowerCase().includes(search) ||
      p.patient?.phone?.includes(search);
  });

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  const StatusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Expired', value: 'Expired' },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Prescriptions</h4>
            </div>
            <div className="text-end d-flex">
              <div className="dropdown me-1">
                <Link
                  to="#"
                  className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center fw-regular"
                  data-bs-toggle="dropdown"
                >
                  Export
                  <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Download as PDF
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Download as Excel
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Page Header */}

          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            {/* Search */}
            <div className="search-set mb-3">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="table-search d-flex align-items-center mb-0">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={handleSearch} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right filters */}
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">

              {/* Filter Dropdown */}
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
                          setFilterDate('');
                          setFilterStatus([]);
                        }}
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                  <form action="#">
                    <div className="filter-body pb-0">
                      {/* Date filter */}
                      <div className="mb-3">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Date
                        </label>
                        <div className="input-icon-end position-relative">
                          <DatePicker
                            className="form-control datetimepicker"
                            format={{ format: "DD-MM-YYYY", type: "mask" }}
                            getPopupContainer={getModalContainer}
                            placeholder="DD-MM-YYYY"
                            suffixIcon={null}
                            onChange={(date) =>
                              setFilterDate(date ? date.format('YYYY-MM-DD') : '')
                            }
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-calendar" />
                          </span>
                        </div>
                      </div>

                      {/* Status filter */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Status</label>
                          <Link
                            to="#"
                            className="link-primary mb-1"
                            onClick={(e) => { e.preventDefault(); setFilterStatus([]); }}
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
                          onChange={(val) => setFilterStatus(val)}
                          options={StatusOptions}
                        />
                      </div>
                    </div>
                    <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                      <Link
                        to="#"
                        className="btn btn-light btn-md me-2 fw-medium"
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById('filter-dropdown');
                          if (el) el.classList.remove('show');
                        }}
                      >
                        Close
                      </Link>
                      <button
                        type="button"
                        className="btn btn-primary btn-md fw-medium"
                        onClick={fetchPrescriptions}
                      >
                        Filter
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Sort By */}
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
                      onClick={(e) => { e.preventDefault(); setSortBy('recent'); }}
                    >
                      Recent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item rounded-1"
                      onClick={(e) => { e.preventDefault(); setSortBy('oldest'); }}
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
            <table className="table border">
              <thead className="thead-light">
                <tr>
                  <th>Prescription ID</th>
                  <th>Patient</th>
                  <th>Prescribed On</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center py-4">
                      <div className="spinner-border text-primary" role="status"></div>
                    </td>
                  </tr>
                ) : filteredPrescriptions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-4">
                      <i className="ti ti-file-x fs-1 text-muted d-block mb-2"></i>
                      <p className="text-muted mb-0">No prescriptions found</p>
                    </td>
                  </tr>
                ) : (
                  filteredPrescriptions.map((p) => (
                    <tr key={p._id}>
                      <td>
                        <Link
                          to={`${all_routes.doctorsprescriptiondetails}/${p._id}`}
                          className="text-primary fw-medium"
                        >
                          #{p.prescriptionId}
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2">
                            {p.patient?.profileImage ? (
                              <img
                                src={p.patient.profileImage}
                                alt={p.patient?.fullName}
                                className="rounded-circle"
                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                              />
                            ) : (
                              <div
                                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                style={{ width: '40px', height: '40px', fontSize: '16px' }}
                              >
                                {p.patient?.fullName?.charAt(0)?.toUpperCase() || 'P'}
                              </div>
                            )}
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">{p.patient?.fullName}</h6>
                            <span className="text-body fs-13 fw-normal">
                              {p.patient?.phone || p.patient?.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>{dayjs(p.prescribedOn).format('DD MMM YYYY')}</td>
                      <td>{p.department || 'N/A'}</td>
                      <td>
                        <span className={`badge fw-medium ${p.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                          {p.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-item">
                          <Link to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu p-2">
                            <li>
                              <Link
                                to={`${all_routes.doctorsprescriptiondetails}/${p._id}`}
                                className="dropdown-item d-flex align-items-center"
                              >
                                <i className="ti ti-eye me-2" /> View
                              </Link>
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

        {/* Footer */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorsPrescriptions;