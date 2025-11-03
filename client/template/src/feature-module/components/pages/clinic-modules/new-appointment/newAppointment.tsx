// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import {
//   Appointment_Type,
//   Department,
//   Doctor,
//   Patient,
//   Status_Checkout,
// } from "../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import { DatePicker, TimePicker, type TimePickerProps } from "antd";
// import dayjs from "dayjs";
// import Modals from "./modals/modals";

// const NewAppointment = () => {
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };

//   const onChangeTime: TimePickerProps["onChange"] = (time, timeString) => {
//     console.log(time, timeString);
//   };
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* row start */}
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               {/* page header start */}
//               <div className="mb-4">
//                 <h6 className="fw-bold mb-0 d-flex align-items-center">
//                   <Link to={all_routes.appointments} className="text-dark">
//                     <i className="ti ti-chevron-left me-1" />
//                     Appointments
//                   </Link>
//                 </h6>
//               </div>
//               {/* page header end */}
//               {/* card start */}
//               <div className="card">
//                 <div className="card-body">
//                   <div className="form">
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Appointment ID
//                         <span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue="AP234354"
//                         disabled
//                       />
//                     </div>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <div className="d-flex align-items-center justify-content-between mb-1">
//                             <label className="form-label mb-0 fw-medium">
//                               Patient<span className="text-danger ms-1">*</span>
//                             </label>
//                             <Link
//                               to="#"
//                               className="link-primary"
//                               data-bs-toggle="modal"
//                               data-bs-target="#add_modal"
//                             >
//                               <i className="ti ti-circle-plus me-1" />
//                               Add New
//                             </Link>
//                           </div>
//                           <CommonSelect
//                             options={Patient}
//                             className="select"
//                             defaultValue={Patient[0]}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label mb-1 fw-medium">
//                             Department
//                             <span className="text-danger ms-1">*</span>
//                           </label>
//                           <CommonSelect
//                             options={Department}
//                             className="select"
//                             defaultValue={Department[0]}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label mb-1 fw-medium">
//                             Doctor<span className="text-danger ms-1">*</span>
//                           </label>
//                           <CommonSelect
//                             options={Doctor}
//                             className="select"
//                             defaultValue={Doctor[0]}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label mb-1 fw-medium">
//                             Appointment Type
//                             <span className="text-danger ms-1">*</span>
//                           </label>
//                           <CommonSelect
//                             options={Appointment_Type}
//                             className="select"
//                             defaultValue={Appointment_Type[0]}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label mb-1 fw-medium">
//                             Date of Appointment
//                             <span className="text-danger ms-1">*</span>
//                           </label>
//                           <div className="input-icon-end position-relative">
//                             <DatePicker
//                               className="form-control datetimepicker"
//                               format={{
//                                 format: "DD-MM-YYYY",
//                                 type: "mask",
//                               }}
//                               getPopupContainer={getModalContainer}
//                               placeholder="DD-MM-YYYY"
//                               suffixIcon={null}
//                             />
//                             <span className="input-icon-addon">
//                               <i className="ti ti-calendar" />
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label mb-1 fw-medium">
//                             Time<span className="text-danger ms-1">*</span>
//                           </label>
//                           <div className="input-icon-end position-relative">
//                             <TimePicker
//                               className="form-control"
//                               onChange={onChangeTime}
//                               defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
//                             />
//                             <span className="input-icon-addon">
//                               <i className="ti ti-clock text-gray-7" />
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Appointment Reason
//                         <span className="text-danger ms-1">*</span>
//                       </label>
//                       <textarea
//                         className="form-control"
//                         rows={3}
//                         defaultValue={""}
//                       />
//                     </div>
//                     <div className="mb-0">
//                       <label className="form-label mb-1 fw-medium">
//                         Status<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={Status_Checkout}
//                         className="select"
//                         defaultValue={Status_Checkout[0]}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* card end */}
//               <div className="d-flex align-items-center justify-content-end">
//                 <Link to="#" className="btn btn-light me-2">
//                   Cancel
//                 </Link>
//                 <Link to="#" className="btn btn-primary">
//                   Create Appointment
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* row end */}
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

// export default NewAppointment;


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { DatePicker, TimePicker, message } from "antd";
import dayjs from "dayjs";
import { all_routes } from "../../../../routes/all_routes";
import appointmentService from "../../../../../services/appointmentService";

const NewAppointment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [appointmentId, setAppointmentId] = useState("AP234354");

  // Dropdown options state
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);

  // Form state
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    doctor: null,
    department: null,
    appointmentType: "In Person",
    appointmentDate: null,
    appointmentTime: null,
    reason: "",
    status: "Scheduled",
  });

  // Appointment types
  const appointmentTypes = [
    { value: "In Person", label: "In Person" },
    { value: "Online Consultation", label: "Online Consultation" },
    { value: "Video Call", label: "Video Call" },
    { value: "Phone Call", label: "Phone Call" },
  ];

  // Status options
  const statusOptions = [
    { value: "Scheduled", label: "Scheduled" },
    { value: "Confirmed", label: "Confirmed" },
  ];

  // Load dropdown data on mount
  useEffect(() => {
    loadDropdownData();
  }, []);

  const loadDropdownData = async () => {
    try {
      const [doctorsRes, departmentsRes] = await Promise.all([
        appointmentService.getDoctors(),
        appointmentService.getDepartments(),
      ]);

      if (doctorsRes.success) {
        setDoctors(doctorsRes.data);
      }
      if (departmentsRes.success) {
        setDepartments(departmentsRes.data);
      }

      // Generate appointment ID
      const count = Math.floor(Math.random() * 900000) + 100000;
      setAppointmentId(`AP${count}`);
    } catch (error) {
      console.error("Error loading dropdown data:", error);
      message.error("Failed to load form data. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.patientName ||
      !formData.patientEmail ||
      !formData.patientPhone ||
      !formData.doctor ||
      !formData.department ||
      !formData.appointmentDate ||
      !formData.appointmentTime ||
      !formData.reason
    ) {
      message.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const appointmentData = {
        patientName: formData.patientName,
        patientEmail: formData.patientEmail,
        patientPhone: formData.patientPhone,
        doctor: formData.doctor,
        department: formData.department,
        appointmentType: formData.appointmentType,
        appointmentDate: formData.appointmentDate,
        appointmentTime: formData.appointmentTime,
        reason: formData.reason,
        status: formData.status,
      };

      const response = await appointmentService.createAppointment(appointmentData);

      if (response.success) {
        message.success("Appointment created successfully!");
        navigate(all_routes.appointments);
      }
    } catch (error: any) {
      console.error("Error creating appointment:", error);
      const errorMessage =
        error.response?.data?.message || "Failed to create appointment";
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="mb-4">
                <h6 className="fw-bold mb-0 d-flex align-items-center">
                  <Link to={all_routes.appointments} className="text-dark">
                    <i className="ti ti-chevron-left me-1" />
                    Appointments
                  </Link>
                </h6>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="card">
                  <div className="card-body">
                    <div className="form">
                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Appointment ID
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={appointmentId}
                          disabled
                        />
                      </div>

                      <h6 className="fw-bold mb-3">Patient Information</h6>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label mb-1 fw-medium">
                              Patient Name<span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter patient name"
                              value={formData.patientName}
                              onChange={(e) =>
                                setFormData({ ...formData, patientName: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label mb-1 fw-medium">
                              Patient Email<span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter patient email"
                              value={formData.patientEmail}
                              onChange={(e) =>
                                setFormData({ ...formData, patientEmail: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label mb-1 fw-medium">
                              Patient Phone<span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Enter patient phone"
                              value={formData.patientPhone}
                              onChange={(e) =>
                                setFormData({ ...formData, patientPhone: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label mb-1 fw-medium">
                              Department
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <CommonSelect
                              options={departments}
                              className="select"
                              placeholder="Select Department"
                              onChange={(option: any) =>
                                setFormData({ ...formData, department: option.value })
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <h6 className="fw-bold mb-3 border-top pt-3">
                        Appointment Details
                      </h6>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label mb-1 fw-medium">
                              Doctor<span className="text-danger ms-1">*</span>
                            </label>
                            <CommonSelect
                              options={doctors}
                              className="select"
                              placeholder="Select Doctor"
                              onChange={(option: any) =>
                                setFormData({ ...formData, doctor: option.value })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label mb-1 fw-medium">
                              Appointment Type
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <CommonSelect
                              options={appointmentTypes}
                              className="select"
                              defaultValue={appointmentTypes[0]}
                              onChange={(option: any) =>
                                setFormData({
                                  ...formData,
                                  appointmentType: option.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label mb-1 fw-medium">
                              Date of Appointment
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="input-icon-end position-relative">
                              <DatePicker
                                className="form-control datetimepicker"
                                format="DD-MM-YYYY"
                                getPopupContainer={getModalContainer}
                                placeholder="DD-MM-YYYY"
                                onChange={(date) =>
                                  setFormData({
                                    ...formData,
                                    appointmentDate: date
                                      ? date.format("YYYY-MM-DD")
                                      : null,
                                  })
                                }
                                suffixIcon={null}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label mb-1 fw-medium">
                              Time<span className="text-danger ms-1">*</span>
                            </label>
                            <div className="input-icon-end position-relative">
                              <TimePicker
                                className="form-control"
                                format="HH:mm"
                                onChange={(time) =>
                                  setFormData({
                                    ...formData,
                                    appointmentTime: time
                                      ? time.format("HH:mm")
                                      : null,
                                  })
                                }
                                defaultOpenValue={dayjs("00:00", "HH:mm")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label mb-1 fw-medium">
                          Appointment Reason
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          value={formData.reason}
                          onChange={(e) =>
                            setFormData({ ...formData, reason: e.target.value })
                          }
                          placeholder="Enter reason for appointment"
                        />
                      </div>

                      <div className="mb-0">
                        <label className="form-label mb-1 fw-medium">
                          Status<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={statusOptions}
                          className="select"
                          defaultValue={statusOptions[0]}
                          onChange={(option: any) =>
                            setFormData({ ...formData, status: option.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-end">
                  <Link
                    to={all_routes.appointments}
                    className="btn btn-light me-2"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Appointment"}
                  </button>
                </div>
              </form>
            </div>
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
    </>
  );
};

export default NewAppointment;