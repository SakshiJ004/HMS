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



import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DatePicker, TimePicker, message } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import CommonSelect from '../../../../../core/common/common-select/commonSelect';
import { appointmentService } from '../api/appoinmentService';
import { all_routes } from '../../../../routes/all_routes';
import type { TimePickerProps } from 'antd';

interface SelectOption {
  value: string;
  label: string;
}

interface FormData {
  patientId: string;
  doctorId: string;
  department: string;
  appointmentType: string;
  appointmentDate: Dayjs | null;
  appointmentTime: string;
  reason: string;
  status: string;
  notes: string;
}

const NewAppointment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingData, setLoadingData] = useState<boolean>(true);

  // Dropdown data
  const [doctors, setDoctors] = useState<SelectOption[]>([]);
  const [patients, setPatients] = useState<SelectOption[]>([]);
  const [departments, setDepartments] = useState<SelectOption[]>([]);

  // Form state
  const [formData, setFormData] = useState<FormData>({
    patientId: '',
    doctorId: '',
    department: '',
    appointmentType: '',
    appointmentDate: null,
    appointmentTime: '',
    reason: '',
    status: 'Schedule',
    notes: '',
  });

  const appointmentTypeOptions: SelectOption[] = [
    { value: 'Online', label: 'Online Consultation' },
    { value: 'In-Person', label: 'In-Person Visit' },
  ];

  const statusOptions: SelectOption[] = [
    { value: 'Schedule', label: 'Schedule' },
    { value: 'Confirmed', label: 'Confirmed' },
    { value: 'Checked In', label: 'Checked In' },
  ];

  // Fetch all dropdown data on component mount
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoadingData(true);
    try {
      const [doctorsRes, patientsRes, departmentsRes] = await Promise.all([
        appointmentService.getDoctors(),
        appointmentService.getPatients(),
        appointmentService.getDepartments(),
      ]);

      // Check if we have data
      if (doctorsRes.count === 0) {
        message.warning('No doctors found in the system. Please add doctors first.');
      }
      if (patientsRes.count === 0) {
        message.warning('No patients found in the system. Please add patients first.');
      }

      // Transform doctors for dropdown
      const doctorOptions: SelectOption[] = doctorsRes.data.map((doc) => ({
        value: doc._id,
        label: doc.fullName,
      }));

      // Transform patients for dropdown
      const patientOptions: SelectOption[] = patientsRes.data.map((patient) => ({
        value: patient._id,
        label: patient.fullName,
      }));

      // Transform departments for dropdown
      const departmentOptions: SelectOption[] = departmentsRes.data.map((dept) => ({
        value: dept,
        label: dept,
      }));

      setDoctors(doctorOptions);
      setPatients(patientOptions);
      setDepartments(departmentOptions);

      console.log('✅ Data loaded:', {
        doctors: doctorOptions.length,
        patients: patientOptions.length,
        departments: departmentOptions.length,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      message.error('Failed to load required data. Please refresh the page.');
    } finally {
      setLoadingData(false);
    }
  };

  const handleSelectChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDateChange = (date: Dayjs | null) => {
    setFormData((prev) => ({
      ...prev,
      appointmentDate: date,
    }));
  };

  const handleTimeChange: TimePickerProps['onChange'] = (time) => {
    if (time) {
      setFormData((prev) => ({
        ...prev,
        appointmentTime: time.format('HH:mm'),
      }));
    }
  };

  const validateForm = (): boolean => {
    if (!formData.patientId) {
      message.error('Please select a patient');
      return false;
    }
    if (!formData.doctorId) {
      message.error('Please select a doctor');
      return false;
    }
    if (!formData.department) {
      message.error('Please select a department');
      return false;
    }
    if (!formData.appointmentType) {
      message.error('Please select appointment type');
      return false;
    }
    if (!formData.appointmentDate) {
      message.error('Please select appointment date');
      return false;
    }
    if (!formData.appointmentTime) {
      message.error('Please select appointment time');
      return false;
    }
    if (!formData.reason.trim()) {
      message.error('Please enter appointment reason');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const appointmentData = {
        patientId: formData.patientId,
        doctorId: formData.doctorId,
        department: formData.department,
        appointmentType: formData.appointmentType,
        appointmentDate: formData.appointmentDate!.format('YYYY-MM-DD'),
        appointmentTime: formData.appointmentTime,
        reason: formData.reason.trim(),
        status: formData.status,
        notes: formData.notes.trim(),
      };

      console.log('📤 Submitting appointment:', appointmentData);

      const response = await appointmentService.createAppointment(appointmentData);

      console.log('✅ Appointment created:', response.data);

      message.success({
        content: response.message || 'Appointment created successfully!',
        duration: 3,
      });

      // Redirect to appointments list after 1 second
      setTimeout(() => {
        navigate(all_routes.appointments);
      }, 1000);
    } catch (error: any) {
      console.error('❌ Error creating appointment:', error);
      const errorMessage = error.response?.data?.message || 'Failed to create appointment. Please try again.';
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(all_routes.appointments);
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body;
  };

  if (loadingData) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
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

              <form onSubmit={handleSubmit}>
                <div className="card">
                  <div className="card-body">
                    {/* Appointment ID - Auto-generated */}
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Appointment ID
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        value="Auto-generated (e.g., AP234567)"
                        disabled
                        readOnly
                      />
                      <small className="text-muted">
                        A unique ID will be automatically assigned when you create the appointment
                      </small>
                    </div>

                    <div className="row">
                      {/* Patient Selection */}
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Patient<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={patients}
                            className="select"
                            placeholder="Select Patient"
                            onChange={(val: any) => handleSelectChange('patientId', val?.value)}
                          />
                          {patients.length === 0 && (
                            <small className="text-warning">
                              No patients available. Please add patients first.
                            </small>
                          )}
                        </div>
                      </div>

                      {/* Department Selection */}
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Department<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={departments}
                            className="select"
                            placeholder="Select Department"
                            onChange={(val: any) => handleSelectChange('department', val?.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      {/* Doctor Selection */}
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Doctor<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={doctors}
                            className="select"
                            placeholder="Select Doctor"
                            onChange={(val: any) => handleSelectChange('doctorId', val?.value)}
                          />
                          {doctors.length === 0 && (
                            <small className="text-warning">
                              No doctors available. Please add doctors first.
                            </small>
                          )}
                        </div>
                      </div>

                      {/* Appointment Type */}
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Appointment Type<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={appointmentTypeOptions}
                            className="select"
                            placeholder="Select Type"
                            onChange={(val: any) => handleSelectChange('appointmentType', val?.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      {/* Appointment Date */}
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Date of Appointment<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-icon-end position-relative">
                            <DatePicker
                              className="form-control datetimepicker"
                              format="DD-MM-YYYY"
                              getPopupContainer={getModalContainer}
                              placeholder="DD-MM-YYYY"
                              suffixIcon={null}
                              disabledDate={(current) => {
                                // Disable past dates
                                return current && current < dayjs().startOf('day');
                              }}
                              onChange={handleDateChange}
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Appointment Time */}
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Time<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-icon-end position-relative">
                            <TimePicker
                              className="form-control"
                              format="HH:mm"
                              onChange={handleTimeChange}
                              suffixIcon={null}
                              placeholder="Select Time"
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-clock text-gray-7" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Appointment Reason */}
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Appointment Reason<span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Enter reason for appointment (e.g., Regular checkup, Follow-up visit, Consultation)"
                        value={formData.reason}
                        onChange={(e) => handleInputChange('reason', e.target.value)}
                      />
                    </div>

                    {/* Additional Notes (Optional) */}
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        className="form-control"
                        rows={2}
                        placeholder="Any additional notes or special instructions"
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                      />
                    </div>

                    {/* Status */}
                    <div className="mb-0">
                      <label className="form-label mb-1 fw-medium">
                        Status<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={statusOptions}
                        className="select"
                        defaultValue={statusOptions[0]}
                        onChange={(val: any) => handleSelectChange('status', val?.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || doctors.length === 0 || patients.length === 0}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Creating Appointment...
                      </>
                    ) : (
                      <>
                        <i className="ti ti-plus me-1" />
                        Create Appointment
                      </>
                    )}
                  </button>
                </div>
              </form>
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
    </>
  );
};

export default NewAppointment;