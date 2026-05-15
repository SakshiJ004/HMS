// import { DatePicker, Select } from "antd";
// import { Link } from "react-router";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { all_routes } from "../../../../routes/all_routes";
// import { useState } from "react";
// import { PatientDoctorsData } from "../../../../../core/json/patientDoctorsData";
// import Datatable from "../../../../../core/common/dataTable";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import Modals from "./modals/modals";

// const PatientDoctors = () => {
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };

//   const data = PatientDoctorsData;
//   const columns = [
//     {
//       title: "Doctor Name",
//       dataIndex: "Doctor_Name",
//       render: (text: any, render: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to={all_routes.patientappointmentdetails}
//             className="avatar avatar-md me-2"
//           >
//             <ImageWithBasePath
//               src={`assets/img/doctors/${render.img}`}
//               alt="product"
//               className="rounded-circle"
//             />
//           </Link>
//           <Link
//             to={all_routes.patientappointmentdetails}
//             className="text-dark fw-semibold"
//           >
//             {text}
//             <span className="text-body fs-13 fw-normal d-block">
//               {render.role}
//             </span>
//           </Link>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Doctor_Name.length - b.Doctor_Name.length,
//     },
//     {
//       title: "Phone",
//       dataIndex: "Phone",
//       sorter: (a: any, b: any) => a.Phone.length - b.Phone.length,
//     },
//     {
//       title: "Last Visit",
//       dataIndex: "Last_Visit",
//       sorter: (a: any, b: any) => a.Last_Visit.length - b.Last_Visit.length,
//     },
//     {
//       title: "",
//       render: () => (
//         <div>
//           <>
//             <Link
//               to={all_routes.patientappointmentdetails}
//               className="border p-1 rounded-3 fs-13 text-body d-inline-flex align-items-center justify-content-center"
//             >
//               <i className="ti ti-calendar-cog" />
//             </Link>
//             <Link
//               to="#"
//               data-bs-toggle="dropdown"
//               className="border p-1 rounded-3 fs-13 text-body d-inline-flex align-items-center justify-content-center"
//             >
//               <i className="ti ti-dots-vertical" />
//             </Link>
//             <ul className="dropdown-menu p-2">
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="modal"
//                   data-bs-target="#edit_doctors"
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
//               <h4 className="fw-bold mb-0"> Doctors </h4>
//             </div>
//             <div className="text-end">
//               {/* dropdown*/}
//               <div className="dropdown me-1">
//                 <Link
//                   to="#"
//                   className="btn btn-md fw-normal border fs-14 bg-white rounded text-dark d-inline-flex align-items-center"
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
//                       Recently Added
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Ascending
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Desending
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Last Month
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Last 7 Days
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
//         <Modals/>
//     </>
//   );
// };

// export default PatientDoctors;



import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "./modals/modals";
import { getMyDoctors, type MyDoctor } from "../../../../../api/patientDashboardService";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// ─── Avatar ───────────────────────────────────────────────────────────────────
const Avatar = ({
  name,
  image,
  size = 40,
}: {
  name?: string;
  image?: string;
  size?: number;
}) => {
  const [imgError, setImgError] = useState(false);
  const src = image
    ? image.startsWith("http") || image.startsWith("data:")
      ? image
      : `${import.meta.env.VITE_BACKEND_URL}${image}`
    : "";
  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={name || ""}
        className="rounded-circle"
        style={{ width: size, height: size, objectFit: "cover" }}
        onError={() => setImgError(true)}
      />
    );
  }
  return (
    <div
      className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {name?.charAt(0)?.toUpperCase() || "D"}
    </div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────
const PatientDoctors = () => {
  const [doctors, setDoctors] = useState<MyDoctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("bookingCount");

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const res = await getMyDoctors();
      if (res.success) setDoctors(res.data);
    } catch (e) {
      console.error("Error fetching doctors:", e);
    } finally {
      setLoading(false);
    }
  };

  // ─── Export PDF ───────────────────────────────────────────────────────────
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("My Doctors", 14, 20);

      autoTable(doc, {
        head: [["Doctor Name", "Department", "Designation", "Bookings", "Last Visit"]],
        body: doctors.map((d) => [
          d.fullName || "N/A",
          d.department || "N/A",
          d.designation || "N/A",
          String(d.bookingCount || 0),
          d.lastVisit ? dayjs(d.lastVisit).format("DD MMM YYYY") : "N/A",
        ]),
        startY: 30,
        styles: { fontSize: 9 },
        headStyles: { fillColor: [66, 66, 245] },
      });

      doc.save(`my-doctors_${dayjs().format("YYYY-MM-DD")}.pdf`);
    } catch (e) {
      console.error("PDF export error:", e);
    }
  };

  // ─── Export Excel ─────────────────────────────────────────────────────────
  const exportToExcel = () => {
    try {
      const data = doctors.map((d) => ({
        "Doctor Name": d.fullName || "N/A",
        Department: d.department || "N/A",
        Designation: d.designation || "N/A",
        "Total Bookings": d.bookingCount || 0,
        "Last Visit": d.lastVisit
          ? dayjs(d.lastVisit).format("DD MMM YYYY")
          : "N/A",
      }));

      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "My Doctors");
      XLSX.writeFile(wb, `my-doctors_${dayjs().format("YYYY-MM-DD")}.xlsx`);
    } catch (e) {
      console.error("Excel export error:", e);
    }
  };

  // ─── Columns ──────────────────────────────────────────────────────────────
  const columns = [
    {
      title: "Doctor Name",
      dataIndex: "fullName",
      render: (_: any, record: MyDoctor) => (
        <div className="d-flex align-items-center">
          <div className="avatar avatar-md me-2">
            <Avatar name={record.fullName} image={record.profileImage} />
          </div>
          <span className="text-dark fw-semibold">
            {record.fullName}
            <span className="text-body fs-13 fw-normal d-block">
              {record.designation || record.department || "Doctor"}
            </span>
          </span>
        </div>
      ),
      sorter: (a: MyDoctor, b: MyDoctor) =>
        (a.fullName || "").localeCompare(b.fullName || ""),
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (_: any, record: MyDoctor) => (
        <span>{record.department || "N/A"}</span>
      ),
      sorter: (a: MyDoctor, b: MyDoctor) =>
        (a.department || "").localeCompare(b.department || ""),
    },
    {
      title: "Total Bookings",
      dataIndex: "bookingCount",
      render: (_: any, record: MyDoctor) => (
        <span className="badge badge-soft-danger border border-danger fw-medium">
          {record.bookingCount} Bookings
        </span>
      ),
      sorter: (a: MyDoctor, b: MyDoctor) =>
        (a.bookingCount || 0) - (b.bookingCount || 0),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (_: any, record: MyDoctor) => (
        <span>{record.phone || "N/A"}</span>
      ),
    },
    {
      title: "Last Visit",
      dataIndex: "lastVisit",
      render: (_: any, record: MyDoctor) => (
        <span>
          {record.lastVisit
            ? dayjs(record.lastVisit).format("DD MMM YYYY")
            : "N/A"}
        </span>
      ),
      sorter: (a: MyDoctor, b: MyDoctor) =>
        dayjs(a.lastVisit || 0).unix() - dayjs(b.lastVisit || 0).unix(),
    },
    {
      title: "",
      render: (_: any, _record: MyDoctor) => (
        <div>
          <Link
            to={`${all_routes.patientappointmentdetails}`}
            className="border p-1 rounded-3 fs-13 text-body d-inline-flex align-items-center justify-content-center me-1"
            title="View Appointments"
          >
            <i className="ti ti-calendar-cog" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Doctors</h4>
            </div>
            <div className="text-end">
              <div className="dropdown me-1">
                <Link
                  to="#"
                  className="btn btn-md fw-normal border fs-14 bg-white rounded text-dark d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Export
                  <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li>
                    <button className="dropdown-item" onClick={exportToPDF}>
                      <i className="ti ti-file-type-pdf me-2 text-danger" />
                      Download as PDF
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={exportToExcel}>
                      <i className="ti ti-file-type-xls me-2 text-success" />
                      Download as Excel
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search + Filter */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <div className="search-set">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="table-search d-flex align-items-center mb-0">
                  <div className="search-input">
                    <SearchInput
                      value={searchText}
                      onChange={(v) => setSearchText(v)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          // Search div च्या खाली हे add करा:
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
                      onClick={() => setDeptFilter("")}
                    >
                      Clear All
                    </Link>
                  </div>
                </div>
                <div className="filter-body pb-0 p-3">
                  <div className="mb-3">
                    <label className="form-label mb-1">Department</label>
                    <select
                      className="form-control"
                      value={deptFilter}
                      onChange={(e) => setDeptFilter(e.target.value)}
                    >
                      <option value="">All Departments</option>
                      {[...new Set(doctors.map((d) => d.department).filter(Boolean))].map(
                        (dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <div className="filter-footer d-flex align-items-center justify-content-end border-top p-3">
                  <button
                    className="btn btn-light btn-md me-2 fw-medium"
                    onClick={() => setDeptFilter("")}
                  >
                    Close
                  </button>
                  <button className="btn btn-primary btn-md fw-medium">
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                data-bs-toggle="dropdown"
              >
                <span className="me-1"> Sort By : </span> Recent
              </Link>
              <ul className="dropdown-menu dropdown-menu-end p-2">
                <li>
                  <Link to="#" className="dropdown-item rounded-1"
                    onClick={() => setSortOrder("bookingCount")}>
                    Most Bookings
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1"
                    onClick={() => setSortOrder("lastVisit")}>
                    Last Visit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Table */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" />
            </div>
          ) : doctors.length === 0 ? (
            <div className="text-center py-5">
              <i className="ti ti-stethoscope fs-1 text-muted d-block mb-2" />
              <p className="text-muted">No doctors found</p>
              <p className="fs-13 text-muted">
                Book an appointment to see your doctors here
              </p>
              <Link
                to={all_routes.patientappointments}
                className="btn btn-primary btn-sm"
              >
                <i className="ti ti-calendar-plus me-1" /> Book Appointment
              </Link>
            </div>
          ) : (
            <div className="table-responsive">
              <Datatable
                columns={columns}
                dataSource={doctors
                  .filter((d) => !deptFilter || d.department === deptFilter)
                  .sort((a, b) =>
                    sortOrder === "lastVisit"
                      ? dayjs(b.lastVisit || 0).unix() - dayjs(a.lastVisit || 0).unix()
                      : (b.bookingCount || 0) - (a.bookingCount || 0)
                  )
                }
                Selection={false}
                searchText={searchText}
              />
            </div>
          )}
        </div>

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

      <Modals />
    </>
  );
};

export default PatientDoctors;