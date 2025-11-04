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
import { all_routes } from "../../../../routes/all_routes";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { DatePicker, TimePicker, message } from "antd";
import dayjs from "dayjs";
import Modals from "./modals/modals";
import {
  getDoctors,
  getPatients,
  createAppointment,
  type Doctor,
  type Patient,
} from "../../../../../api/appointmentService";

const NewAppointment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);

  // Form state
  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    department: "",
    appointmentType: "",
    appointmentDate: null as any,
    appointmentTime: null as any,
    reason: "",
    status: "Schedule",
  });

  // Dropdown options
  const departmentOptions = [
    { value: "Cardiology", label: "Cardiology" },
    { value: "Orthopedic", label: "Orthopedic" },
    { value: "Pediatrics", label: "Pediatrics" },
    { value: "Gynecology", label: "Gynecology" },
    { value: "Psychiatry", label: "Psychiatry" },
    { value: "Neurosurgery", label: "Neurosurgery" },
    { value: "Oncology", label: "Oncology" },
    { value: "Pulmonology", label: "Pulmonology" },
    { value: "Urology", label: "Urology" },
    { value: "Dermatology", label: "Dermatology" },
  ];

  const appointmentTypeOptions = [
    { value: "Online Consultation", label: "Online Consultation" },
    { value: "In-Person Visit", label: "In-Person Visit" },
    { value: "Emergency", label: "Emergency" },
    { value: "Follow-up", label: "Follow-up" },
  ];

  const statusOptions = [
    { value: "Schedule", label: "Schedule" },
    { value: "Confirmed", label: "Confirmed" },
    { value: "Checked In", label: "Checked In" },
    { value: "Checked Out", label: "Checked Out" },
    { value: "Cancelled", label: "Cancelled" },
  ];

  // Fetch doctors and patients on component mount
  useEffect(() => {
    fetchDoctorsAndPatients();
  }, []);

  const fetchDoctorsAndPatients = async () => {
    try {
      const [doctorsRes, patientsRes] = await Promise.all([
        getDoctors(),
        getPatients(),
      ]);

      setDoctors(doctorsRes.data || []);
      setPatients(patientsRes.data || []);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      message.error(
        error.response?.data?.message || "Failed to load doctors and patients"
      );
    }
  };

  // Convert doctors and patients to select options
  const doctorOptions = doctors.map((doctor) => ({
    value: doctor._id,
    label: doctor.fullName,
  }));

  const patientOptions = patients.map((patient) => ({
    value: patient._id,
    label: patient.fullName,
  }));

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (
        !formData.patient ||
        !formData.doctor ||
        !formData.department ||
        !formData.appointmentType ||
        !formData.appointmentDate ||
        !formData.appointmentTime ||
        !formData.reason
      ) {
        message.error("Please fill in all required fields");
        setLoading(false);
        return;
      }

      // Format date and time
      const appointmentData = {
        patient: formData.patient,
        doctor: formData.doctor,
        department: formData.department,
        appointmentType: formData.appointmentType,
        appointmentDate: formData.appointmentDate.format("YYYY-MM-DD"),
        appointmentTime: formData.appointmentTime.format("HH:mm"),
        reason: formData.reason,
        status: formData.status,
      };

      console.log("Submitting appointment:", appointmentData);

      // Create appointment
      const response = await createAppointment(appointmentData);

      message.success("Appointment created successfully!");
      console.log("Appointment created:", response.data);

      // Navigate to appointments list
      navigate(all_routes.appointments);
    } catch (error: any) {
      console.error("Error creating appointment:", error);
      message.error(
        error.response?.data?.message || "Failed to create appointment"
      );
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
              {/* Page Header */}
              <div className="mb-4">
                <h6 className="fw-bold mb-0 d-flex align-items-center">
                  <Link to={all_routes.appointments} className="text-dark">
                    <i className="ti ti-chevron-left me-1" />
                    Appointments
                  </Link>
                </h6>
              </div>

              {/* Form Card */}
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Appointment ID
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value="Auto-generated"
                        disabled
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <label className="form-label mb-0 fw-medium">
                              Patient<span className="text-danger ms-1">*</span>
                            </label>
                            <Link
                              to="#"
                              className="link-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#add_modal"
                            >
                              <i className="ti ti-circle-plus me-1" />
                              Add New
                            </Link>
                          </div>
                          <CommonSelect
                            options={patientOptions}
                            className="select"
                            placeholder="Select Patient"
                            onChange={(option: any) =>
                              setFormData({ ...formData, patient: option.value })
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
                            options={departmentOptions}
                            className="select"
                            placeholder="Select Department"
                            onChange={(option: any) =>
                              setFormData({ ...formData, department: option.value })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Doctor<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={doctorOptions}
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
                            options={appointmentTypeOptions}
                            className="select"
                            placeholder="Select Type"
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
                                setFormData({ ...formData, appointmentDate: date })
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
                                setFormData({ ...formData, appointmentTime: time })
                              }
                              defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
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

                    {/* Submit Buttons */}
                    <div className="d-flex align-items-center justify-content-end mt-4">
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

      <Modals />
    </>
  );
};

export default NewAppointment;
