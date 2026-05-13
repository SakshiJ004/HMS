// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import {
//   Amount,
//   Department,
//   Designation,
//   Doctor,
//   Status,
// } from "../../../../../core/common/selectOption";
// import { DatePicker, Select } from "antd";
// import EventCalendar from "../../../../../core/common/event-calendar/eventCalendar";
// import Modals from "./modals/modals";

// const PatientAppointmentDetails = () => {
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
//                   className="btn btn-md fw-normal fs-14 border bg-white rounded text-dark d-inline-flex align-items-center"
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
//                   className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                 >

//                   <i className="ti ti-list fs-14 text-dark" />
//                 </Link>
//                 <Link
//                   to={all_routes.patientappointmentdetails}
//                   className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
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
//                       <Link to="#" className="btn-searchset" />
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
//           {/* Start Card */}
//           <div className="card mb-0">
//             <div className="card-body">
//               <EventCalendar />
//             </div>
//           </div>
//           {/* end card */}
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

// export default PatientAppointmentDetails;



import { Link, useSearchParams } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import {
  getAllPatientAppointments,
  type PatientAppointment,
} from "../../../../../api/patientDashboardService";
import Modals from "./modals/modals";

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

// ─── Status badge ─────────────────────────────────────────────────────────────
const getStatusBadge = (status: string) => {
  switch (status) {
    case "Checked Out": return "bg-success";
    case "Checked In": return "bg-warning";
    case "Cancelled": return "bg-danger";
    case "Confirmed": return "bg-primary";
    default: return "bg-info";
  }
};

// ─── Main Component ───────────────────────────────────────────────────────────
const PatientAppointmentDetails = () => {
  const [searchParams] = useSearchParams();
  const appointmentIdFromUrl = searchParams.get("id");

  const [appointments, setAppointments] = useState<PatientAppointment[]>([]);
  const [selected, setSelected] = useState<PatientAppointment | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  // URL मध्ये id बदलला की selected update करा
  useEffect(() => {
    if (appointmentIdFromUrl && appointments.length > 0) {
      const found = appointments.find((a) => a._id === appointmentIdFromUrl);
      if (found) setSelected(found);
    }
  }, [appointmentIdFromUrl, appointments]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await getAllPatientAppointments();
      if (res.success) {
        setAppointments(res.data);
        // URL id असेल तर ती select करा, नाहीतर पहिली
        if (appointmentIdFromUrl) {
          const found = res.data.find((a) => a._id === appointmentIdFromUrl);
          setSelected(found || res.data[0] || null);
        } else {
          setSelected(res.data[0] || null);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

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
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-body" />
                </Link>
                <Link
                  to={all_routes.patientappointmentdetails}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-calendar-event fs-14 text-dark" />
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

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" />
            </div>
          ) : (
            <div className="row g-3">
              {/* ── Left: Appointment List ─────────────────────────── */}
              <div className="col-lg-4">
                <div className="card shadow-sm h-100">
                  <div className="card-header border-bottom">
                    <h6 className="fw-bold mb-0">
                      All Appointments
                      <span className="badge bg-primary ms-2">
                        {appointments.length}
                      </span>
                    </h6>
                  </div>
                  <div className="card-body p-0">
                    {appointments.length === 0 ? (
                      <div className="text-center py-5">
                        <i className="ti ti-calendar-x fs-1 text-muted d-block mb-2" />
                        <p className="text-muted mb-0">
                          No appointments found
                        </p>
                      </div>
                    ) : (
                      <div style={{ maxHeight: 600, overflowY: "auto" }}>
                        {appointments.map((apt) => (
                          <div
                            key={apt._id}
                            onClick={() => setSelected(apt)}
                            className={`d-flex align-items-center justify-content-between p-3 border-bottom ${selected?._id === apt._id
                                ? "bg-light border-start border-primary border-3"
                                : "bg-white"
                              }`}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="d-flex align-items-center gap-2">
                              <Avatar
                                name={apt.doctor?.fullName}
                                image={apt.doctor?.profileImage}
                                size={38}
                              />
                              <div>
                                <h6 className="fs-13 fw-semibold mb-0">
                                  {apt.doctor?.fullName || "Doctor"}
                                </h6>
                                <p className="fs-12 text-muted mb-0">
                                  {dayjs(apt.appointmentDate).format(
                                    "DD MMM YYYY"
                                  )}{" "}
                                  · {apt.appointmentTime}
                                </p>
                              </div>
                            </div>
                            <span
                              className={`badge fw-medium ${getStatusBadge(apt.status)}`}
                              style={{ fontSize: 10 }}
                            >
                              {apt.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Right: Details ─────────────────────────────────── */}
              <div className="col-lg-8">
                {selected ? (
                  <div className="card shadow-sm">
                    {/* Card Header */}
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="fw-bold mb-1">Appointment Details</h5>
                        <span className="badge badge-soft-primary border border-primary fw-medium px-2">
                          #{selected.appointmentId || "N/A"}
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <Link
                          to="#"
                          className="btn btn-sm btn-outline-primary d-inline-flex align-items-center"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#view_details"
                        >
                          <i className="ti ti-eye me-1" /> View
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#edit_appointment"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-outline-danger d-inline-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                      </div>
                    </div>

                    <div className="card-body">
                      {/* Doctor Info Banner */}
                      <div className="d-flex align-items-center p-3 bg-light rounded mb-4">
                        <Avatar
                          name={selected.doctor?.fullName}
                          image={selected.doctor?.profileImage}
                          size={64}
                        />
                        <div className="ms-3 flex-grow-1">
                          <h5 className="fw-bold mb-1">
                            {selected.doctor?.fullName || "Doctor"}
                          </h5>
                          <p className="text-muted mb-0 fs-13">
                            {selected.doctor?.department || "N/A"}
                            {selected.doctor?.designation &&
                              ` · ${selected.doctor.designation}`}
                          </p>
                        </div>
                        <span
                          className={`badge fs-13 fw-medium ${getStatusBadge(selected.status)}`}
                        >
                          {selected.status}
                        </span>
                      </div>

                      {/* Details Grid */}
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <div className="border rounded p-3 h-100">
                            <p className="text-muted fs-12 mb-1">
                              <i className="ti ti-id-badge me-1" />
                              Appointment ID
                            </p>
                            <p className="fw-semibold mb-0 text-dark">
                              {selected.appointmentId || "N/A"}
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="border rounded p-3 h-100">
                            <p className="text-muted fs-12 mb-1">
                              <i className="ti ti-calendar me-1" />
                              Date & Time
                            </p>
                            <p className="fw-semibold mb-0 text-dark">
                              {dayjs(selected.appointmentDate).format(
                                "DD MMM YYYY"
                              )}
                              <span className="text-muted fw-normal">
                                {" "}
                                · {selected.appointmentTime}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="border rounded p-3 h-100">
                            <p className="text-muted fs-12 mb-1">
                              <i className="ti ti-device-desktop me-1" />
                              Appointment Type
                            </p>
                            <p className="fw-semibold mb-0 text-dark">
                              {selected.appointmentType || "N/A"}
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="border rounded p-3 h-100">
                            <p className="text-muted fs-12 mb-1">
                              <i className="ti ti-currency-dollar me-1" />
                              Consultation Fees
                            </p>
                            <p className="fw-semibold mb-0 text-dark">
                              $
                              {selected.consultationCharge ||
                                selected.doctor?.consultationCharge ||
                                0}
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="border rounded p-3 h-100">
                            <p className="text-muted fs-12 mb-1">
                              <i className="ti ti-building-hospital me-1" />
                              Department
                            </p>
                            <p className="fw-semibold mb-0 text-dark">
                              {selected.doctor?.department || "N/A"}
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="border rounded p-3 h-100">
                            <p className="text-muted fs-12 mb-1">
                              <i className="ti ti-calendar-week me-1" />
                              Day
                            </p>
                            <p className="fw-semibold mb-0 text-dark">
                              {dayjs(selected.appointmentDate).format("dddd")}
                            </p>
                          </div>
                        </div>
                        {selected.reason && (
                          <div className="col-12">
                            <div className="border rounded p-3">
                              <p className="text-muted fs-12 mb-1">
                                <i className="ti ti-notes me-1" />
                                Reason
                              </p>
                              <p className="fw-semibold mb-0 text-dark">
                                {selected.reason}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="card shadow-sm">
                    <div className="card-body text-center py-5">
                      <i className="ti ti-calendar-check fs-1 text-muted d-block mb-3" />
                      <p className="text-muted mb-3">
                        Select an appointment from the list to view details
                      </p>
                      <Link
                        to="#"
                        className="btn btn-primary btn-sm"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#new_appointment"
                      >
                        <i className="ti ti-plus me-1" /> New Appointment
                      </Link>
                    </div>
                  </div>
                )}
              </div>
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
        selectedAppointment={selected}
        onAppointmentUpdated={fetchAppointments}
      />
    </>
  );
};

export default PatientAppointmentDetails;