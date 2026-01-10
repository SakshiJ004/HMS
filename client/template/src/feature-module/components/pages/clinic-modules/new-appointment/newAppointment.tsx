// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import { DatePicker, TimePicker, message } from "antd";
// import type { Dayjs } from 'dayjs';
// import dayjs from "dayjs";
// import Modals from "./modals/modals";
// import {
//   getDoctors,
//   getPatients,
//   createAppointment,
//   type Doctor,
//   type Patient,
// } from "../../../../../api/appointmentService";

// // Define SelectOption type
// interface SelectOption {
//   value: string;
//   label: string;
// }

// const NewAppointment = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const [patients, setPatients] = useState<Patient[]>([]);

//   // Form state
//   const [formData, setFormData] = useState({
//     patient: "",
//     doctor: "",
//     department: "",
//     appointmentType: "",
//     appointmentDate: null as Dayjs | null,
//     appointmentTime: null as Dayjs | null,
//     reason: "",
//     status: "Scheduled",
//   });

//   // Error states for validation
//   const [errors, setErrors] = useState({
//     patient: "",
//     doctor: "",
//     department: "",
//     appointmentType: "",
//     appointmentDate: "",
//     appointmentTime: "",
//     reason: "",
//   });

//   // Dropdown options
//   const departmentOptions: SelectOption[] = [
//     { value: "Cardiology", label: "Cardiology" },
//     { value: "Orthopedic", label: "Orthopedic" },
//     { value: "Pediatrics", label: "Pediatrics" },
//     { value: "Gynecology", label: "Gynecology" },
//     { value: "Psychiatry", label: "Psychiatry" },
//     { value: "Neurosurgery", label: "Neurosurgery" },
//     { value: "Oncology", label: "Oncology" },
//     { value: "Pulmonology", label: "Pulmonology" },
//     { value: "Urology", label: "Urology" },
//     { value: "Dermatology", label: "Dermatology" },
//   ];

//   const appointmentTypeOptions: SelectOption[] = [
//     { value: "Online Consultation", label: "Online Consultation" },
//     { value: "In-Person Visit", label: "In-Person Visit" },
//     { value: "Emergency", label: "Emergency" },
//     { value: "Follow-up", label: "Follow-up" },
//   ];

//   const statusOptions: SelectOption[] = [
//     { value: "Scheduled", label: "Scheduled" },
//     { value: "Confirmed", label: "Confirmed" },
//     { value: "Checked In", label: "Checked In" },
//     { value: "Checked Out", label: "Checked Out" },
//     { value: "Cancelled", label: "Cancelled" },
//   ];

//   // Fetch doctors and patients on component mount
//   useEffect(() => {
//     fetchDoctorsAndPatients();
//   }, []);

//   const fetchDoctorsAndPatients = async () => {
//     try {
//       const [doctorsRes, patientsRes] = await Promise.all([
//         getDoctors(),
//         getPatients(),
//       ]);

//       setDoctors(doctorsRes.data || []);
//       setPatients(patientsRes.data || []);

//       if (doctorsRes.data?.length === 0) {
//         message.warning('No doctors found. Please add doctors first.');
//       }
//       if (patientsRes.data?.length === 0) {
//         message.warning('No patients found. Please add patients first.');
//       }
//     } catch (error: any) {
//       console.error("❌ Error fetching data:", error);
//       message.error(error.message || "Failed to load doctors and patients");
//     }
//   };

//   // Handle when a new patient is added from the modal
//   const handlePatientAdded = (newPatient: Patient) => {
//     setPatients(prevPatients => [...prevPatients, newPatient]);
//     setFormData(prev => ({ ...prev, patient: newPatient._id }));
//     setErrors(prev => ({ ...prev, patient: "" }));
//     message.success(`Patient ${newPatient.fullName} has been added and selected!`);
//   };

//   // Convert doctors and patients to select options
//   const doctorOptions: SelectOption[] = doctors.map((doctor) => ({
//     value: doctor._id,
//     label: doctor.fullName,
//   }));

//   const patientOptions: SelectOption[] = patients.map((patient) => ({
//     value: patient._id,
//     label: patient.fullName,
//   }));

//   // Clear individual field errors
//   const clearError = (field: string) => {
//     setErrors({ ...errors, [field]: "" });
//   };

//   // Validate form
//   const validateForm = () => {
//     const newErrors = {
//       patient: "",
//       doctor: "",
//       department: "",
//       appointmentType: "",
//       appointmentDate: "",
//       appointmentTime: "",
//       reason: "",
//     };

//     let isValid = true;

//     if (!formData.patient) {
//       newErrors.patient = "Please select a patient";
//       isValid = false;
//     }

//     if (!formData.doctor) {
//       newErrors.doctor = "Please select a doctor";
//       isValid = false;
//     }

//     if (!formData.department) {
//       newErrors.department = "Please select a department";
//       isValid = false;
//     }

//     if (!formData.appointmentType) {
//       newErrors.appointmentType = "Please select appointment type";
//       isValid = false;
//     }

//     if (!formData.appointmentDate) {
//       newErrors.appointmentDate = "Please select appointment date";
//       isValid = false;
//     }

//     if (!formData.appointmentTime) {
//       newErrors.appointmentTime = "Please select appointment time";
//       isValid = false;
//     }

//     if (!formData.reason || formData.reason.trim() === "") {
//       newErrors.reason = "Please enter appointment reason";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // Handle form submit
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       message.error("Please fill all required fields");
//       return;
//     }

//     setLoading(true);

//     try {
//       // Format date and time
//       const appointmentData = {
//         patient: formData.patient,
//         doctor: formData.doctor,
//         department: formData.department,
//         appointmentType: formData.appointmentType,
//         appointmentDate: formData.appointmentDate!.format("YYYY-MM-DD"),
//         appointmentTime: formData.appointmentTime!.format("HH:mm"),
//         reason: formData.reason,
//         status: formData.status,
//       };

//       // Create appointment
//       await createAppointment(appointmentData);
//       message.success("Appointment created successfully!");

//       // Navigate to appointments list
//       setTimeout(() => {
//         navigate(all_routes.appointments);
//       }, 500);

//     } catch (error: any) {
//       console.error("❌ Error creating appointment:", error);
//       message.error(error.message || "Failed to create appointment");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body;
//   };

//   return (
//     <>
//       <div className="page-wrapper">
//         <div className="content">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               {/* Page Header */}
//               <div className="mb-4">
//                 <h6 className="fw-bold mb-0 d-flex align-items-center">
//                   <Link to={all_routes.appointments} className="text-dark">
//                     <i className="ti ti-chevron-left me-1" />
//                     Appointments
//                   </Link>
//                 </h6>
//               </div>

//               {/* Form Card */}
//               <div className="card">
//                 <div className="card-body">
//                   <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Appointment ID
//                         <span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         value="Auto-generated"
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
//                             options={patientOptions}
//                             className="select"
//                             placeholder="Select Patient"
//                             {...(formData.patient && {
//                               value: patientOptions.find((p: SelectOption) => p.value === formData.patient)
//                             })}
//                             onChange={(option: any) => {
//                               setFormData(prev => ({ ...prev, patient: option?.value || "" }));
//                               clearError('patient');
//                             }}
//                           />
//                           {errors.patient && (
//                             <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
//                               {errors.patient}
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label mb-1 fw-medium">
//                             Department
//                             <span className="text-danger ms-1">*</span>
//                           </label>
//                           <CommonSelect
//                             options={departmentOptions}
//                             className="select"
//                             placeholder="Select Department"
//                             onChange={(option: any) => {
//                               setFormData(prev => ({ ...prev, department: option?.value || "" }));
//                               clearError('department');
//                             }}
//                           />
//                           {errors.department && (
//                             <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
//                               {errors.department}
//                             </div>
//                           )}
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
//                             options={doctorOptions}
//                             className="select"
//                             placeholder="Select Doctor"
//                             onChange={(option: any) => {
//                               setFormData(prev => ({ ...prev, doctor: option?.value || "" }));
//                               clearError('doctor');
//                             }}
//                           />
//                           {errors.doctor && (
//                             <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
//                               {errors.doctor}
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label mb-1 fw-medium">
//                             Appointment Type
//                             <span className="text-danger ms-1">*</span>
//                           </label>
//                           <CommonSelect
//                             options={appointmentTypeOptions}
//                             className="select"
//                             placeholder="Select Type"
//                             onChange={(option: any) => {
//                               setFormData(prev => ({ ...prev, appointmentType: option?.value || "" }));
//                               clearError('appointmentType');
//                             }}
//                           />
//                           {errors.appointmentType && (
//                             <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
//                               {errors.appointmentType}
//                             </div>
//                           )}
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
//                               format="DD-MM-YYYY"
//                               getPopupContainer={getModalContainer}
//                               placeholder="DD-MM-YYYY"
//                               onChange={(date) => {
//                                 setFormData(prev => ({ ...prev, appointmentDate: date }));
//                                 clearError('appointmentDate');
//                               }}
//                               suffixIcon={null}
//                             />
//                             <span className="input-icon-addon">
//                               <i className="ti ti-calendar" />
//                             </span>
//                           </div>
//                           {errors.appointmentDate && (
//                             <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
//                               {errors.appointmentDate}
//                             </div>
//                           )}
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
//                               format="HH:mm"
//                               onChange={(time) => {
//                                 setFormData(prev => ({ ...prev, appointmentTime: time }));
//                                 clearError('appointmentTime');
//                               }}
//                               defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
//                             />
//                             <span className="input-icon-addon">
//                               <i className="ti ti-clock text-gray-7" />
//                             </span>
//                           </div>
//                           {errors.appointmentTime && (
//                             <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
//                               {errors.appointmentTime}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mb-3">
//                       <label className="form-label mb-1 fw-medium">
//                         Appointment Reason
//                         <span className="text-danger ms-1">*</span>
//                       </label>
//                       <textarea
//                         className={`form-control ${errors.reason ? 'is-invalid' : ''}`}
//                         rows={3}
//                         value={formData.reason}
//                         onChange={(e) => {
//                           setFormData(prev => ({ ...prev, reason: e.target.value }));
//                           clearError('reason');
//                         }}
//                         placeholder="Enter reason for appointment"
//                       />
//                       {errors.reason && (
//                         <div className="invalid-feedback d-block">{errors.reason}</div>
//                       )}
//                     </div>

//                     <div className="mb-0">
//                       <label className="form-label mb-1 fw-medium">
//                         Status<span className="text-danger ms-1">*</span>
//                       </label>
//                       <CommonSelect
//                         options={statusOptions}
//                         className="select"
//                         defaultValue={statusOptions[0]}
//                         onChange={(option: any) => setFormData(prev => ({ ...prev, status: option?.value || "Scheduled" }))}
//                       />
//                     </div>

//                     {/* Submit Buttons */}
//                     <div className="d-flex align-items-center justify-content-end mt-4">
//                       <Link
//                         to={all_routes.appointments}
//                         className="btn btn-light me-2"
//                       >
//                         Cancel
//                       </Link>
//                       <button
//                         type="submit"
//                         className="btn btn-primary"
//                         disabled={loading}
//                       >
//                         {loading ? (
//                           <>
//                             <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                             Creating...
//                           </>
//                         ) : (
//                           "Create Appointment"
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="footer text-center bg-white p-2 border-top">
//           <p className="text-dark mb-0">
//             2025 ©
//             <Link to="#" className="link-primary">
//               Preclinic
//             </Link>
//             , All Rights Reserved
//           </p>
//         </div>
//       </div>

//       {/* Pass the callback function to the modal */}
//       <Modals onPatientAdded={handlePatientAdded} />
//     </>
//   );
// };

// export default NewAppointment;



import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { DatePicker, TimePicker, message } from "antd";
import type { Dayjs } from 'dayjs';
import dayjs from "dayjs";
import Modals from "./modals/modals";
import {
  getDoctors,
  getPatients,
  createAppointment,
  type Doctor,
  type Patient,
  getDoctorSchedule,
} from "../../../../../api/appointmentService";

// Define SelectOption type
interface SelectOption {
  value: string;
  label: string;
}

const NewAppointment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [doctorSchedule, setDoctorSchedule] = useState<any>(null);
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  // Form state
  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    department: "",
    appointmentType: "",
    appointmentDate: null as Dayjs | null,
    appointmentTime: null as Dayjs | null,
    reason: "",
    status: "Scheduled",
  });

  // Error states for validation
  const [errors, setErrors] = useState({
    patient: "",
    doctor: "",
    department: "",
    appointmentType: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
  });

  // Dropdown options
  const departmentOptions: SelectOption[] = [
    { value: "Cardiology", label: "Cardiology" },
    { value: "Neurology", label: "Neurology" },
    { value: "Orthopedics", label: "Orthopedics" },
    { value: "Pediatrics", label: "Pediatrics" },
    { value: "Gynecology", label: "Gynecology" },
    { value: "Obstetrics", label: "Obstetrics" },
    { value: "Psychiatry", label: "Psychiatry" },
    { value: "Neurosurgery", label: "Neurosurgery" },
    { value: "Oncology", label: "Oncology" },
    { value: "Pulmonology", label: "Pulmonology" },
    { value: "Urology", label: "Urology" },
    { value: "Dermatology", label: "Dermatology" },
    { value: "ENT", label: "ENT (Ear, Nose, Throat)" },
    { value: "Ophthalmology", label: "Ophthalmology" },
    { value: "Radiology", label: "Radiology" },
    { value: "Anesthesiology", label: "Anesthesiology" },
    { value: "Emergency Medicine", label: "Emergency Medicine" },
    { value: "General Surgery", label: "General Surgery" },
    { value: "Internal Medicine", label: "Internal Medicine" },
    { value: "Nephrology", label: "Nephrology" },
    { value: "Gastroenterology", label: "Gastroenterology" },
    { value: "Endocrinology", label: "Endocrinology" },
    { value: "Rheumatology", label: "Rheumatology" },
    { value: "Hematology", label: "Hematology" },
    { value: "Infectious Disease", label: "Infectious Disease" },
    { value: "Plastic Surgery", label: "Plastic Surgery" },
    { value: "Pathology", label: "Pathology" },
    { value: "Physical Medicine", label: "Physical Medicine & Rehabilitation" },
    { value: "Dental", label: "Dental" }
  ];

  const appointmentTypeOptions: SelectOption[] = [
    { value: "Online Consultation", label: "Online Consultation" },
    { value: "In-Person Visit", label: "In-Person Visit" },
    { value: "Emergency", label: "Emergency" },
    { value: "Follow-up", label: "Follow-up" },
  ];

  const statusOptions: SelectOption[] = [
    { value: "Scheduled", label: "Scheduled" },
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

      if (doctorsRes.data?.length === 0) {
        message.warning('No doctors found. Please add doctors first.');
      }
      if (patientsRes.data?.length === 0) {
        message.warning('No patients found. Please add patients first.');
      }
    } catch (error: any) {
      console.error("❌ Error fetching data:", error);
      message.error(error.message || "Failed to load doctors and patients");
    }
  };

  const location = useLocation();

  // Add this useEffect AFTER fetchDoctorsAndPatients useEffect
  useEffect(() => {
    // Read query parameters from URL
    const searchParams = new URLSearchParams(location.search);
    const doctorId = searchParams.get('doctorId');
    const doctorName = searchParams.get('doctorName');
    const department = searchParams.get('department');

    // Prefill form if doctor info is in URL
    if (doctorId && doctorName && department) {
      setFormData(prev => ({
        ...prev,
        doctor: doctorId,
        department: department,
      }));

      // Clear errors for prefilled fields
      setErrors(prev => ({
        ...prev,
        doctor: "",
        department: "",
      }));

      console.log("Prefilled doctor:", doctorName, department);
    }
  }, [location.search, doctors]); // Doctors dependency add kela ki doctor options ready aslyavar prefill honar

  // Handle when a new patient is added from the modal
  const handlePatientAdded = (newPatient: Patient) => {
    setPatients(prevPatients => [...prevPatients, newPatient]);
    setFormData(prev => ({ ...prev, patient: newPatient._id }));
    setErrors(prev => ({ ...prev, patient: "" }));
    message.success(`Patient ${newPatient.fullName} has been added and selected!`);
  };

  // Convert doctors and patients to select options
  const doctorOptions: SelectOption[] = doctors.map((doctor) => ({
    value: doctor._id,
    label: doctor.fullName,
  }));

  const patientOptions: SelectOption[] = patients.map((patient) => ({
    value: patient._id,
    label: patient.fullName,
  }));

  // Clear individual field errors
  const clearError = (field: string) => {
    setErrors({ ...errors, [field]: "" });
  };

  // Disable past times based on doctor schedule
  const disabledTime = () => {
    const now = dayjs();
    const selectedDate = formData.appointmentDate;

    if (!selectedDate) {
      return {};
    }

    // ✅ If doctor schedule exists, only allow scheduled time slots
    if (doctorSchedule && doctorSchedule.schedule) {
      const dateSchedule = doctorSchedule.schedule.find(
        (s: any) => s.date === selectedDate.format('YYYY-MM-DD')
      );

      if (dateSchedule && dateSchedule.timeSlots) {
        // ✅ Extract available hours from time slots
        const availableSlots = dateSchedule.timeSlots.map((slot: any) => ({
          hour: parseInt(slot.startTime.split(':')[0]),
          minute: parseInt(slot.startTime.split(':')[1])
        }));

        const availableHours = [...new Set(availableSlots.map((s: any) => s.hour))];

        return {
          disabledHours: () => {
            const allHours = Array.from({ length: 24 }, (_, i) => i);
            return allHours.filter(h => !availableHours.includes(h));
          },
          disabledMinutes: (selectedHour: number) => {
            // ✅ Get available minutes for this hour
            const minutesForHour = availableSlots
              .filter((s: any) => s.hour === selectedHour)
              .map((s: any) => s.minute);

            if (minutesForHour.length === 0) {
              return Array.from({ length: 60 }, (_, i) => i);
            }

            const allMinutes = Array.from({ length: 60 }, (_, i) => i);
            return allMinutes.filter(m => !minutesForHour.includes(m));
          },
        };
      }
    }

    // Default: disable past times for today
    if (selectedDate.isSame(now, 'day')) {
      const currentHour = now.hour();
      const currentMinute = now.minute();

      return {
        disabledHours: () => Array.from({ length: currentHour }, (_, i) => i),
        disabledMinutes: (selectedHour: number) => {
          if (selectedHour === currentHour) {
            return Array.from({ length: currentMinute + 1 }, (_, i) => i);
          }
          return [];
        },
      };
    }

    return {};
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {
      patient: "",
      doctor: "",
      department: "",
      appointmentType: "",
      appointmentDate: "",
      appointmentTime: "",
      reason: "",
    };

    let isValid = true;

    if (!formData.patient) {
      newErrors.patient = "Please select a patient";
      isValid = false;
    }

    if (!formData.doctor) {
      newErrors.doctor = "Please select a doctor";
      isValid = false;
    }

    if (!formData.department) {
      newErrors.department = "Please select a department";
      isValid = false;
    }

    if (!formData.appointmentType) {
      newErrors.appointmentType = "Please select appointment type";
      isValid = false;
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = "Please select appointment date";
      isValid = false;
    }

    if (!formData.appointmentTime) {
      newErrors.appointmentTime = "Please select appointment time";
      isValid = false;
    } else {
      // Additional validation: check if time is in the past for today's date
      const selectedDateTime = formData.appointmentDate!.clone()
        .hour(formData.appointmentTime.hour())
        .minute(formData.appointmentTime.minute());

      if (selectedDateTime.isBefore(dayjs())) {
        newErrors.appointmentTime = "Please select a future time";
        isValid = false;
      }
    }

    if (!formData.reason || formData.reason.trim() === "") {
      newErrors.reason = "Please enter appointment reason";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      message.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      // Format date and time
      const appointmentData = {
        patient: formData.patient,
        doctor: formData.doctor,
        department: formData.department,
        appointmentType: formData.appointmentType,
        appointmentDate: formData.appointmentDate!.format("YYYY-MM-DD"),
        appointmentTime: formData.appointmentTime!.format("HH:mm"),
        reason: formData.reason,
        status: formData.status,
      };

      // Create appointment
      await createAppointment(appointmentData);
      message.success("Appointment created successfully!");

      // Navigate to appointments list
      setTimeout(() => {
        navigate(all_routes.appointments);
      }, 500);

    } catch (error: any) {
      console.error("❌ Error creating appointment:", error);
      message.error(error.message || "Failed to create appointment");
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
                            {...(formData.patient && {
                              value: patientOptions.find((p: SelectOption) => p.value === formData.patient)
                            })}
                            onChange={(option: any) => {
                              setFormData(prev => ({ ...prev, patient: option?.value || "" }));
                              clearError('patient');
                            }}
                          />
                          {errors.patient && (
                            <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                              {errors.patient}
                            </div>
                          )}
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
                            value={departmentOptions.find((d: SelectOption) => d.value === formData.department)}
                            onChange={(option: any) => {
                              setFormData(prev => ({ ...prev, department: option?.value || "" }));
                              clearError('department');
                            }}
                          />
                          {errors.department && (
                            <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                              {errors.department}
                            </div>
                          )}
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
                            value={doctorOptions.find((d: SelectOption) => d.value === formData.doctor)}
                            onChange={async (option: any) => {
                              const selectedDoctorId = option?.value || "";

                              // Find selected doctor
                              const selectedDoctor = doctors.find(d => d._id === selectedDoctorId);
                              console.log("🔍 All doctors:", doctors); // ✅ Debug
                              console.log("🔍 Selected doctor ID:", selectedDoctorId); // ✅ Debug
                              console.log("🔍 Found doctor object:", selectedDoctor); // ✅ Debug
                              console.log("🔍 Doctor department:", selectedDoctor?.department);

                              console.log("✅ Selected Doctor:", selectedDoctor); // Debug

                              // Auto-fill department
                              if (selectedDoctor) {
                                console.log("✅ Setting department:", selectedDoctor.department);
                                setFormData(prev => ({
                                  ...prev,
                                  doctor: selectedDoctorId,
                                  department: selectedDoctor.department || "",
                                  appointmentDate: null, // Reset date
                                  appointmentTime: null, // Reset time
                                }));

                                // Clear errors
                                clearError('doctor');
                                clearError('department');

                                // Fetch doctor's schedule
                                try {
                                  console.log("📞 Fetching schedule for:", selectedDoctorId);

                                  const scheduleData = await getDoctorSchedule(selectedDoctorId);

                                  console.log("✅ Schedule data received:", scheduleData);

                                  setDoctorSchedule(scheduleData);

                                  // Extract available dates from schedule
                                  if (scheduleData && scheduleData.schedule) {
                                    const dates = scheduleData.schedule.map((s: any) => s.date);
                                    setAvailableDates(dates);

                                    console.log("✅ Available dates:", dates);

                                    if (dates.length === 0) {
                                      message.info("Doctor has not set up their schedule yet");
                                    }
                                  }
                                } catch (error: any) {
                                  console.error("❌ Error fetching schedule:", error);
                                  message.warning("Could not load doctor's schedule");
                                  setDoctorSchedule(null);
                                  setAvailableDates([]);
                                }
                              }
                            }}
                          />
                          {errors.doctor && (
                            <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                              {errors.doctor}
                            </div>
                          )}
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
                            onChange={(option: any) => {
                              setFormData(prev => ({ ...prev, appointmentType: option?.value || "" }));
                              clearError('appointmentType');
                            }}
                          />
                          {errors.appointmentType && (
                            <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                              {errors.appointmentType}
                            </div>
                          )}
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
                              disabledDate={(current) => {
                                // Disable past dates
                                if (current && current.isBefore(dayjs().startOf('day'))) {
                                  return true;
                                }

                                // If doctor schedule exists, only allow scheduled dates
                                if (doctorSchedule && availableDates.length > 0) {
                                  const currentDateStr = current.format('YYYY-MM-DD');
                                  return !availableDates.includes(currentDateStr);
                                }

                                return false;
                              }}
                              onChange={(date) => {
                                setFormData(prev => ({ ...prev, appointmentDate: date }));
                                // Reset time when date changes to force revalidation
                                if (date && date.isSame(dayjs(), 'day')) {
                                  setFormData(prev => ({ ...prev, appointmentTime: null }));
                                }
                                clearError('appointmentDate');
                              }}
                              suffixIcon={null}
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                          {errors.appointmentDate && (
                            <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                              {errors.appointmentDate}
                            </div>
                          )}
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
                              value={formData.appointmentTime}
                              onChange={(time) => {
                                setFormData(prev => ({ ...prev, appointmentTime: time }));
                                clearError('appointmentTime');
                              }}
                              disabledTime={disabledTime}
                              showNow={false}
                              disabled={!formData.appointmentDate}
                              placeholder="Select time"
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-clock text-gray-7" />
                            </span>
                          </div>
                          {errors.appointmentTime && (
                            <div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                              {errors.appointmentTime}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Appointment Reason
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className={`form-control ${errors.reason ? 'is-invalid' : ''}`}
                        rows={3}
                        value={formData.reason}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, reason: e.target.value }));
                          clearError('reason');
                        }}
                        placeholder="Enter reason for appointment"
                      />
                      {errors.reason && (
                        <div className="invalid-feedback d-block">{errors.reason}</div>
                      )}
                    </div>

                    <div className="mb-0">
                      <label className="form-label mb-1 fw-medium">
                        Status<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={statusOptions}
                        className="select"
                        defaultValue={statusOptions[0]}
                        onChange={(option: any) => setFormData(prev => ({ ...prev, status: option?.value || "Scheduled" }))}
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
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Creating...
                          </>
                        ) : (
                          "Create Appointment"
                        )}
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

      {/* Pass the callback function to the modal */}
      <Modals onPatientAdded={handlePatientAdded} />
    </>
  );
};

export default NewAppointment;