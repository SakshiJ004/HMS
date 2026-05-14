// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import { useState } from "react";
// import { PatientAppoinmentsData } from "../../../../../core/json/patientAppointmentsData";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";
// import { DatePicker, Select } from "antd";
// import Datatable from "../../../../../core/common/dataTable";
// import Modals from "./modals/modals";

// const PatientAppointments = () => {
//   const data = PatientAppoinmentsData;
//   const columns = [
//     {
//       title: "Date & Time",
//       dataIndex: "Date_Time",
//       sorter: (a: any, b: any) => a.Date_Time.length - b.Date_Time.length,
//     },
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
//       title: "Mode",
//       dataIndex: "Mode",
//       sorter: (a: any, b: any) => a.Mode.length - b.Mode.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: string) => (
//         <span
//           className={`badge ${
//             text === "Checked Out"
//               ? "badge-soft-primary "
//               : text === "Checked In"
//               ? "badge-soft-warning"
//               : text === "Confirmed"
//               ? "badge-soft-success"
//               : text === "Schedule"
//               ? "badge-soft-info"
//               : "badge-soft-danger"
//           } rounded ${
//             text === "Checked Out"
//               ? "text-primary"
//               : text === "Checked In"
//               ? "text-warning"
//               : text === "Confirmed"
//               ? "text-success"
//               : text === "Schedule"
//               ? "text-info"
//               : "text-danger"
//           }  fw-medium fs-13`}
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
//           <>
//             <Link to="#" data-bs-toggle="dropdown">
//               <i className="ti ti-dots-vertical" />
//             </Link>
//             <ul className="dropdown-menu p-2">
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="offcanvas"
//                   data-bs-target="#edit_appointment"
//                 >
//                   Edit
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="offcanvas"
//                   data-bs-target="#view_details"
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
//               <h4 className="fw-bold mb-0"> Appointment </h4>
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
//               <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                 <Link
//                   to={all_routes.patientappointments}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                 >

//                   <i className="ti ti-list fs-14 text-dark" />
//                 </Link>
//                 <Link
//                   to={all_routes.patientappointmentdetails}
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >

//                   <i className="ti ti-calendar-event fs-14 text-body" />
//                 </Link>
//               </div>
//               <Link
//                 to="#"
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//                 data-bs-toggle="offcanvas"
//                 data-bs-target="#new_appointment"
//               >
//                 <i className="ti ti-plus me-1" /> New Appointment
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/*  Start Filter */}
//           <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//             <div className="d-flex align-items-center gap-2">
//               <div className="search-set mb-3">
//                 <div className="d-flex align-items-center flex-wrap gap-2">
//                   <div className="table-search d-flex align-items-center mb-0">
//                     <div className="search-input">
//                       <SearchInput value={searchText} onChange={handleSearch} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex right-content align-items-center flex-wrap mb-3">
//                 <div className="input-icon-start position-relative">
//                   <span className="input-icon-addon text-dark">
//                     <i className="ti ti-calendar-event" />
//                   </span>
//                   <PredefinedDatePicker />
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
//           {/*  End Filter */}
//           {/*  Start Table */}
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={data}
//               Selection={false}
//               searchText={searchText}
//             />
//           </div>
//           {/*  End Table */}
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

// export default PatientAppointments;



import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "./modals/modals";
import {
  getAllPatientAppointments,
  type PatientAppointment,
} from "../../../../../api/patientDashboardService";

// ─── Avatar ───────────────────────────────────────────────────────────────────
const Avatar = ({
  name,
  image,
  size = 36,
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

// ─── Status Badge ─────────────────────────────────────────────────────────────
const getStatusClass = (status: string) => {
  switch (status) {
    case "Checked Out":
      return "badge-soft-primary text-primary";
    case "Checked In":
      return "badge-soft-warning text-warning";
    case "Confirmed":
      return "badge-soft-success text-success";
    case "Scheduled":
      return "badge-soft-info text-info";
    case "Cancelled":
      return "badge-soft-danger text-danger";
    default:
      return "badge-soft-info text-info";
  }
};

// ─── Main Component ───────────────────────────────────────────────────────────
const PatientAppointments = () => {
  const [appointments, setAppointments] = useState<PatientAppointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedAppointment, setSelectedAppointment] =
    useState<PatientAppointment | null>(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await getAllPatientAppointments();
      if (res.success) setAppointments(res.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Date & Time",
      dataIndex: "appointmentDate",
      render: (_: any, record: PatientAppointment) => (
        <span>
          {dayjs(record.appointmentDate).format("DD MMM YYYY")}
          <span className="text-muted fs-13 d-block">
            {record.appointmentTime}
          </span>
        </span>
      ),
      sorter: (a: PatientAppointment, b: PatientAppointment) =>
        dayjs(a.appointmentDate).unix() - dayjs(b.appointmentDate).unix(),
    },
    {
      title: "Doctor Name",
      dataIndex: "doctor",
      render: (_: any, record: PatientAppointment) => (
        <div className="d-flex align-items-center">
          <Link
            to={`${all_routes.patientappointmentdetails}?id=${record._id}`}
            className="avatar avatar-md me-2"
          >
            <Avatar
              name={record.doctor?.fullName}
              image={record.doctor?.profileImage}
            />
          </Link>
          <Link
            to={`${all_routes.patientappointmentdetails}?id=${record._id}`}
            className="text-dark fw-semibold"
          >
            {record.doctor?.fullName || "Doctor"}
            <span className="text-body fs-13 fw-normal d-block">
              {record.doctor?.department ||
                record.doctor?.designation ||
                "N/A"}
            </span>
          </Link>
        </div>
      ),
      sorter: (a: PatientAppointment, b: PatientAppointment) =>
        (a.doctor?.fullName || "").localeCompare(b.doctor?.fullName || ""),
    },
    {
      title: "Mode",
      dataIndex: "appointmentType",
      sorter: (a: PatientAppointment, b: PatientAppointment) =>
        a.appointmentType.localeCompare(b.appointmentType),
    },
    {
      title: "Fees",
      dataIndex: "consultationCharge",
      render: (_: any, record: PatientAppointment) => (
        <span className="fw-semibold">
          $
          {record.consultationCharge ||
            record.doctor?.consultationCharge ||
            0}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string) => (
        <span
          className={`badge rounded fw-medium fs-13 ${getStatusClass(text)}`}
        >
          {text}
        </span>
      ),
      sorter: (a: PatientAppointment, b: PatientAppointment) =>
        a.status.localeCompare(b.status),
    },
    {
      title: "",
      render: (_: any, record: PatientAppointment) => (
        <div className="action-item">
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#view_details"
                onClick={() => setSelectedAppointment(record)}
              >
                <i className="ti ti-eye me-2" />
                View
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#edit_appointment"
                onClick={() => setSelectedAppointment(record)}
              >
                <i className="ti ti-edit me-2" />
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center text-danger"
                data-bs-toggle="modal"
                data-bs-target="#delete_modal"
                onClick={() => setSelectedAppointment(record)}
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

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Appointment</h4>
            </div>
            <div className="text-end d-flex align-items-center gap-2">
              <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                <Link
                  to={all_routes.patientappointments}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-dark" />
                </Link>
                <Link
                  to={all_routes.patientappointmentdetails}
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-calendar-event fs-14 text-body" />
                </Link>
              </div>
              <Link
                to="#"
                className="btn btn-primary fs-13 btn-md"
                data-bs-toggle="offcanvas"
                data-bs-target="#new_appointment"
              >
                <i className="ti ti-plus me-1" /> New Appointment
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <div className="search-set">
              <div className="search-input">
                <SearchInput value={searchText} onChange={(v) => setSearchText(v)} />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              {/* Export */}
              <div className="dropdown">
                <Link to="#" className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  Export <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li>
                    <button className="dropdown-item" onClick={() => {
                      const rows = appointments.map(a => [
                        `"${dayjs(a.appointmentDate).format("DD MMM YYYY")}"`,
                        a.appointmentTime,
                        a.doctor?.fullName || "N/A",
                        a.doctor?.department || "N/A",
                        a.appointmentType,
                        `$${a.consultationCharge || a.doctor?.consultationCharge || 0}`,
                        a.status,
                      ]);
                      const csv = [["Date", "Time", "Doctor", "Department", "Type", "Fees", "Status"], ...rows].map(r => r.join(",")).join("\n");
                      const a2 = document.createElement("a");
                      a2.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
                      a2.download = `appointments_${dayjs().format("DDMMYYYY")}.csv`;
                      a2.click();
                    }}>
                      <i className="ti ti-file-type-csv me-2 text-success" /> Download as Excel/CSV
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => {
                      const win = window.open("", "_blank");
                      if (win) {
                        win.document.write(`<html><head><title>Appointments</title><style>table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px}th{background:#f5f5f5}</style></head><body><h2>My Appointments</h2><table><thead><tr><th>Date</th><th>Time</th><th>Doctor</th><th>Dept</th><th>Type</th><th>Fees</th><th>Status</th></tr></thead><tbody>${appointments.map(a => `<tr><td>${dayjs(a.appointmentDate).format("DD MMM YYYY")}</td><td>${a.appointmentTime}</td><td>${a.doctor?.fullName || "N/A"}</td><td>${a.doctor?.department || "N/A"}</td><td>${a.appointmentType}</td><td>$${a.consultationCharge || a.doctor?.consultationCharge || 0}</td><td>${a.status}</td></tr>`).join("")}</tbody></table></body></html>`);
                        win.document.close();
                        win.document.close();
                        setTimeout(() => win.print(), 500)
                      }
                    }}>
                      <i className="ti ti-file-type-pdf me-2 text-danger" /> Download as PDF
                    </button>
                  </li>
                </ul>
              </div>
              {/* Filter */}
              <div className="dropdown">
                <Link to="#" className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                  <i className="ti ti-filter text-gray-5 me-1" /> Filters
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end p-3">
                  <h6 className="fw-bold mb-3">Filter by Status</h6>
                  {["All", "Scheduled", "Confirmed", "Checked In", "Checked Out", "Cancelled"].map((s) => (
                    <div key={s} className="form-check mb-2">
                      <input className="form-check-input" type="radio" name="statusFilter" id={`filter_${s}`}
                        onChange={() => setSearchText(s === "All" ? "" : s)}
                        defaultChecked={s === "All"} />
                      <label className="form-check-label" htmlFor={`filter_${s}`}>{s}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" />
            </div>
          ) : appointments.length === 0 ? (
            <div className="text-center py-5">
              <i className="ti ti-calendar-x fs-1 text-muted d-block mb-2" />
              <p className="text-muted">No appointments found</p>
              <Link
                to="#"
                className="btn btn-primary btn-sm"
                data-bs-toggle="offcanvas"
                data-bs-target="#new_appointment"
              >
                <i className="ti ti-plus me-1" /> Book Appointment
              </Link>
            </div>
          ) : (
            <div className="table-responsive">
              <Datatable
                columns={columns}
                dataSource={appointments}
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

      <Modals
        selectedAppointment={selectedAppointment}
        onAppointmentUpdated={fetchAppointments}
      />
    </>
  );
};

export default PatientAppointments;