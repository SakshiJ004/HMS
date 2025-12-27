import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { Link } from "react-router";
import { all_routes } from "../../../../../routes/all_routes"
import { useState, useEffect } from "react";
import { message } from "antd";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import {
  getPatients,
  createAppointment,
  type Patient,
} from "../../../../../../api/appointmentService";
// import { getDoctor } from "../../../../../../api/doctorService";

interface SelectOption {
  value: string;
  label: string;
}

// Add this TypeScript declaration for Bootstrap
declare global {
  interface Window {
    bootstrap?: {
      Offcanvas: {
        getInstance: (element: HTMLElement | null) => {
          hide: () => void;
        } | null;
      };
    };
  }
}

// Add interface for props
interface ModalsProps {
  selectedAppointment?: any;
  onAppointmentUpdated?: () => void;
}

const Modals = ({ selectedAppointment, onAppointmentUpdated }: ModalsProps) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    patient: "",
    appointmentType: "",
    appointmentDate: null as any,
    appointmentTime: null as any,
    reason: "",
    status: "Scheduled",
  });
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editFormData, setEditFormData] = useState({
    patient: "",
    appointmentType: "",
    appointmentDate: null as any,
    appointmentTime: null as any,
    reason: "",
    status: "Scheduled",
  });

  const [doctorSchedule, setDoctorSchedule] = useState<Array<{
    day: string;
    timeSlots: Array<{ startTime: string; endTime: string }>;
  }>>([]);
  const [doctorInfo, setDoctorInfo] = useState<any>(null);
  const [errors, setErrors] = useState({
    patient: "",
    appointmentType: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  // Fetch patients on mount
  useEffect(() => {
    fetchPatients();
    fetchDoctorInfo();
  }, []);

  // Update EDIT form when selectedAppointment changes
  useEffect(() => {
    if (selectedAppointment) {
      setEditFormData({
        patient: selectedAppointment.patient._id || selectedAppointment.patient,
        appointmentType: selectedAppointment.appointmentType,
        appointmentDate: selectedAppointment.appointmentDate ? dayjs(selectedAppointment.appointmentDate) : null,
        appointmentTime: selectedAppointment.appointmentTime ? dayjs(selectedAppointment.appointmentTime, "HH:mm") : null,
        reason: selectedAppointment.reason || "",
        status: selectedAppointment.status || "Scheduled",
      });
    }
  }, [selectedAppointment]);

  const fetchPatients = async () => {
    try {
      const response = await getPatients();
      setPatients(response.data || []);
    } catch (error: any) {
      console.error("Error fetching patients:", error);
      message.error("Failed to load patients");
    }
  };


  const fetchDoctorInfo = async () => {
    try {
      const userData = localStorage.getItem('userData');
      if (!userData) return;

      const user = JSON.parse(userData);

      // Import getDoctor from your service
      const { getDoctor } = await import("../../../../../../api/doctorService");
      const response = await getDoctor(user._id);

      if (response.success) {
        setDoctorInfo(response.data);
        setDoctorSchedule(response.data.schedules || []);
      }
    } catch (error: any) {
      console.error("Error fetching doctor info:", error);
    }
  };

  // Dropdown options
  const appointmentTypeOptions: SelectOption[] = [
    { value: "Online Consultation", label: "Online Consultation" },
    { value: "In-Person Visit", label: "In-Person Visit" },
  ];

  const statusOptions: SelectOption[] = [
    { value: "Scheduled", label: "Scheduled" },
    { value: "Confirmed", label: "Confirmed" },
  ];

  const patientOptions: SelectOption[] = patients.map((patient) => ({
    value: patient._id,
    label: patient.fullName,
  }));

  // Disable past dates
  const disabledDate = (current: any) => {
    // Disable past dates
    if (!current || current.isBefore(dayjs().startOf('day'))) {
      return true;
    }

    // If doctor schedule available, only allow doctor's working days
    if (doctorSchedule && doctorSchedule.length > 0) {
      const dayName = current.format('dddd'); // Monday, Tuesday, etc.
      const doctorWorkingDay = doctorSchedule.find(
        schedule => schedule.day === dayName && schedule.timeSlots.length > 0
      );

      // If doctor doesn't work on this day, disable it
      return !doctorWorkingDay;
    }

    return false;
  };

  // Disable past times
  const disabledTime = () => {
    const now = dayjs();
    const selectedDate = formData.appointmentDate;

    if (!selectedDate) {
      return {};
    }

    // Get doctor's schedule for selected day
    const dayName = selectedDate.format('dddd');
    const daySchedule = doctorSchedule.find(s => s.day === dayName);

    if (!daySchedule || daySchedule.timeSlots.length === 0) {
      // If no schedule for this day, disable all hours
      return {
        disabledHours: () => Array.from({ length: 24 }, (_, i) => i),
      };
    }

    // Get doctor's working hours
    const timeSlot = daySchedule.timeSlots[0]; // Take first time slot
    const [startHour, startMinute] = timeSlot.startTime.split(':').map(Number);
    const [endHour, endMinute] = timeSlot.endTime.split(':').map(Number);

    return {
      disabledHours: () => {
        const disabled: number[] = [];

        // Disable hours before doctor's start time
        for (let i = 0; i < startHour; i++) {
          disabled.push(i);
        }

        // Disable hours after doctor's end time
        for (let i = endHour + 1; i < 24; i++) {
          disabled.push(i);
        }

        // If today, also disable past hours
        if (selectedDate.isSame(now, 'day')) {
          const currentHour = now.hour();
          for (let i = 0; i <= currentHour; i++) {
            if (!disabled.includes(i)) {
              disabled.push(i);
            }
          }
        }

        return disabled;
      },
      disabledMinutes: (selectedHour: number) => {
        const disabled: number[] = [];

        // If selected hour is start hour, disable minutes before start minute
        if (selectedHour === startHour) {
          for (let i = 0; i < startMinute; i++) {
            disabled.push(i);
          }
        }

        // If selected hour is end hour, disable minutes after end minute
        if (selectedHour === endHour) {
          for (let i = endMinute; i < 60; i++) {
            disabled.push(i);
          }
        }

        // If today and current hour, disable past minutes
        if (selectedDate.isSame(now, 'day') && selectedHour === now.hour()) {
          const currentMinute = now.minute();
          for (let i = 0; i <= currentMinute; i++) {
            if (!disabled.includes(i)) {
              disabled.push(i);
            }
          }
        }

        return disabled;
      },
    };
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {
      patient: "",
      appointmentType: "",
      appointmentDate: "",
      appointmentTime: "",
    };

    let isValid = true;

    if (!formData.patient) {
      newErrors.patient = "Please select a patient";
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
      const selectedDateTime = formData.appointmentDate.clone()
        .hour(formData.appointmentTime.hour())
        .minute(formData.appointmentTime.minute());

      if (selectedDateTime.isBefore(dayjs())) {
        newErrors.appointmentTime = "Please select a future time";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleCreateAppointment = async () => {
    if (!validateForm()) {
      message.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const appointmentData = {
        patient: formData.patient,
        doctor: doctorInfo._id,
        department: doctorInfo.department,
        appointmentType: formData.appointmentType,
        appointmentDate: formData.appointmentDate.format("YYYY-MM-DD"),
        appointmentTime: formData.appointmentTime.format("HH:mm"),
        reason: formData.reason,
        status: formData.status,
      };

      await createAppointment(appointmentData);
      message.success("Appointment created successfully!");

      // Close modal
      const offcanvasElement = document.getElementById('new_appointment');
      const offcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvasElement);
      offcanvas?.hide();

      // Reset form
      setFormData({
        patient: "",
        appointmentType: "",
        appointmentDate: null,
        appointmentTime: null,
        reason: "",
        status: "Scheduled",
      });

      // Refresh data
      if (onAppointmentUpdated) {
        onAppointmentUpdated();
      }
    } catch (error: any) {
      console.error("Error creating appointment:", error);
      message.error(error.message || "Failed to create appointment");
    } finally {
      setLoading(false);
    }
  };

  // Handle edit appointment
  const handleUpdateAppointment = async () => {
    if (!selectedAppointment) {
      message.error("No appointment selected");
      return;
    }

    // Validate form
    if (!editFormData.patient || !editFormData.appointmentType || !editFormData.appointmentDate || !editFormData.appointmentTime) {
      message.error("Please fill all required fields");
      return;
    }

    setEditLoading(true);

    try {
      const { updateAppointment } = await import("../../../../../../api/appointmentService");

      const appointmentData = {
        patient: editFormData.patient,
        doctor: doctorInfo._id,
        department: doctorInfo.department,
        appointmentType: editFormData.appointmentType,
        appointmentDate: editFormData.appointmentDate.format("YYYY-MM-DD"),
        appointmentTime: editFormData.appointmentTime.format("HH:mm"),
        reason: editFormData.reason,
        status: editFormData.status,
      };

      await updateAppointment(selectedAppointment._id, appointmentData);
      message.success("Appointment updated successfully!");

      // Close modal
      const offcanvasElement = document.getElementById('edit_appointment');
      if (offcanvasElement) {
        const bsOffcanvas = (window as any).bootstrap?.Offcanvas?.getInstance(offcanvasElement);
        bsOffcanvas?.hide();
      }

      // Refresh data
      if (onAppointmentUpdated) {
        onAppointmentUpdated();
      }
    } catch (error: any) {
      console.error("Error updating appointment:", error);
      message.error(error.message || "Failed to update appointment");
    } finally {
      setEditLoading(false);
    }
  };

  // Handle delete appointment
  const handleDeleteAppointment = async () => {
    if (!selectedAppointment) {
      message.error("No appointment selected");
      return;
    }

    setDeleteLoading(true);

    try {
      const { deleteAppointment } = await import("../../../../../../api/appointmentService");

      await deleteAppointment(selectedAppointment._id);
      message.success("Appointment deleted successfully!");

      // Close modal
      const modalElement = document.getElementById('delete_modal');
      if (modalElement) {
        const bsModal = (window as any).bootstrap?.Modal?.getInstance(modalElement);
        bsModal?.hide();
      }

      // Refresh data
      if (onAppointmentUpdated) {
        onAppointmentUpdated();
      }
    } catch (error: any) {
      console.error("Error deleting appointment:", error);
      message.error(error.message || "Failed to delete appointment");
    } finally {
      setDeleteLoading(false);
    }
  };

  // Keep your existing getModalContainer and onChangeTime functions
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  return (
    <>
      {/* Start Add New Appointment */}
      {/* Start Add New Appointment */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end"
        tabIndex={-1}
        id="new_appointment"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">New Appointment</h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-3">
          <form id="newAppointmentForm">
            {/* start row*/}
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment ID <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      value="Auto-generated"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              {/* end col*/}

              {/* Patient Selection */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Patient<span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={patientOptions}
                    className="select"
                    placeholder="Select Patient"
                    onChange={(option: any) => {
                      setFormData(prev => ({ ...prev, patient: option?.value || "" }));
                      setErrors(prev => ({ ...prev, patient: "" }));
                    }}
                  />
                  {errors.patient && (
                    <div className="text-danger mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.patient}
                    </div>
                  )}
                </div>
              </div>
              {/* end col*/}

              {/* Doctor Info (Read-only) */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Doctor<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded bg-light"
                    value={doctorInfo?.fullName || "N/A"}
                    readOnly
                  />
                </div>
              </div>
              {/* end col*/}

              {/* Department (Read-only) */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Department<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded bg-light"
                    value={doctorInfo?.department || "N/A"}
                    readOnly
                  />
                </div>
              </div>
              {/* end col*/}

              {/* Appointment Type */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment Type <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={appointmentTypeOptions}
                    className="select"
                    placeholder="Select Type"
                    onChange={(option: any) => {
                      setFormData(prev => ({ ...prev, appointmentType: option?.value || "" }));
                      setErrors(prev => ({ ...prev, appointmentType: "" }));
                    }}
                  />
                  {errors.appointmentType && (
                    <div className="text-danger mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.appointmentType}
                    </div>
                  )}
                </div>
              </div>
              {/* end col*/}

              {/* Date */}
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Date of Appointment <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                    <DatePicker
                      className="form-control datetimepicker"
                      format="DD-MM-YYYY"
                      getPopupContainer={getModalContainer}
                      placeholder="DD-MM-YYYY"
                      disabledDate={disabledDate}
                      onChange={(date) => {
                        setFormData(prev => ({ ...prev, appointmentDate: date }));
                        if (date && date.isSame(dayjs(), 'day')) {
                          setFormData(prev => ({ ...prev, appointmentTime: null }));
                        }
                        setErrors(prev => ({ ...prev, appointmentDate: "" }));
                      }}
                      suffixIcon={null}
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                  {errors.appointmentDate && (
                    <div className="text-danger mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.appointmentDate}
                    </div>
                  )}
                </div>
              </div>
              {/* end col*/}

              {/* Time */}
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                    <TimePicker
                      className="form-control"
                      format="HH:mm"
                      value={formData.appointmentTime}
                      onChange={(time) => {
                        setFormData(prev => ({ ...prev, appointmentTime: time }));
                        setErrors(prev => ({ ...prev, appointmentTime: "" }));
                      }}
                      disabledTime={disabledTime}
                      showNow={false}
                      disabled={!formData.appointmentDate}
                      placeholder="Select time"
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-clock" />
                    </span>
                  </div>
                  {errors.appointmentTime && (
                    <div className="text-danger mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.appointmentTime}
                    </div>
                  )}
                </div>
              </div>
              {/* end col*/}

              {/* Reason */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment Reason
                  </label>
                  <textarea
                    rows={4}
                    className="form-control rounded"
                    value={formData.reason}
                    onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
                    placeholder="Enter reason for appointment"
                  />
                </div>
              </div>
              {/* end col*/}

              {/* Status */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Status<span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={statusOptions}
                    className="select"
                    defaultValue={statusOptions[0]}
                    onChange={(option: any) =>
                      setFormData(prev => ({ ...prev, status: option?.value || "Scheduled" }))
                    }
                  />
                </div>
              </div>
              {/* end col*/}
            </div>
            {/* end row*/}
          </form>
        </div>
        <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
          <div className="d-flex justify-content-end gap-2">
            <Link to="#" className="btn btn-light btm-md" data-bs-dismiss="offcanvas">
              Cancel
            </Link>
            <button
              type="button"
              className="btn btn-primary btm-md"
              onClick={handleCreateAppointment}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Creating...
                </>
              ) : (
                "Create Appointment"
              )}
            </button>
          </div>
        </div>
      </div>
      {/* End Add New Appointment*/}
      {/* Start Edit New Appointment */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end"
        tabIndex={-1}
        id="edit_appointment"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold"> Edit Appointment</h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-3">
          <form>
            <div className="row">
              {/* Appointment ID */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment ID <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded bg-light"
                    value={selectedAppointment?.appointmentId || "N/A"}
                    readOnly
                  />
                </div>
              </div>

              {/* Patient */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Patient<span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={patientOptions}
                    className="select"
                    placeholder="Select Patient"
                    value={patientOptions.find((p: any) => p.value === editFormData.patient)}
                    onChange={(option: any) => {
                      setEditFormData(prev => ({ ...prev, patient: option?.value || "" }));
                    }}
                  />
                </div>
              </div>

              {/* Doctor (Read-only) */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Doctor<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded bg-light"
                    value={doctorInfo?.fullName || "N/A"}
                    readOnly
                  />
                </div>
              </div>

              {/* Department (Read-only) */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Department<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded bg-light"
                    value={doctorInfo?.department || "N/A"}
                    readOnly
                  />
                </div>
              </div>

              {/* Appointment Type */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment Type <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={appointmentTypeOptions}
                    className="select"
                    placeholder="Select Type"
                    value={appointmentTypeOptions.find((t: any) => t.value === editFormData.appointmentType)}
                    onChange={(option: any) => {
                      setEditFormData(prev => ({ ...prev, appointmentType: option?.value || "" }));
                    }}
                  />
                </div>
              </div>

              {/* Date */}
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Date of Appointment <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                    <DatePicker
                      className="form-control datetimepicker"
                      format="DD-MM-YYYY"
                      value={editFormData.appointmentDate}
                      getPopupContainer={getModalContainer}
                      placeholder="DD-MM-YYYY"
                      disabledDate={disabledDate}
                      onChange={(date) => {
                        setEditFormData(prev => ({ ...prev, appointmentDate: date }));
                        if (date && date.isSame(dayjs(), 'day')) {
                          setEditFormData(prev => ({ ...prev, appointmentTime: null }));
                        }
                      }}
                      suffixIcon={null}
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Time */}
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                    <TimePicker
                      className="form-control"
                      format="HH:mm"
                      value={editFormData.appointmentTime}
                      onChange={(time) => {
                        setEditFormData(prev => ({ ...prev, appointmentTime: time }));
                      }}
                      disabledTime={disabledTime}
                      showNow={false}
                      disabled={!editFormData.appointmentDate}
                      placeholder="Select time"
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-clock" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment Reason
                  </label>
                  <textarea
                    rows={4}
                    className="form-control rounded"
                    value={editFormData.reason}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, reason: e.target.value }))}
                    placeholder="Enter reason for appointment"
                  />
                </div>
              </div>

              {/* Status */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Status<span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={statusOptions}
                    className="select"
                    value={statusOptions.find((s: any) => s.value === editFormData.status)}
                    onChange={(option: any) =>
                      setEditFormData(prev => ({ ...prev, status: option?.value || "Scheduled" }))
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
          <div className="d-flex justify-content-end gap-2">
            <Link to="#" className="btn btn-light btm-md" data-bs-dismiss="offcanvas">
              Cancel
            </Link>
            <button
              type="button"
              className="btn btn-primary btm-md"
              onClick={handleUpdateAppointment}
              disabled={editLoading}
            >
              {editLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Updating...
                </>
              ) : (
                "Update Appointment"
              )}
            </button>
          </div>
        </div>
        {/* <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
          <div className=" d-flex justify-content-end gap-2">
            <Link to="#" className="btn btn-light btm-md">
              Cancel
            </Link>
            <button
              data-bs-dismiss="offcanvas"
              className="btn btn-primary btm-md"
              id="filter-submit2"
            >
              Create Appointment
            </button>
          </div>
        </div> */}
      </div>
      {/* End Edit New Appointment*/}
      {/* Start View Details */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end"
        tabIndex={-1}
        id="view_details"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">
              Appointment Details
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2">
                #AP544658
              </span>
            </h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-0 px-0">
          <h6 className="bg-light py-2 px-3 text-dark fw-bold">
            When &amp; Where
          </h6>
          <div className="px-3 my-4">
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Appointment On
              <span className="text-body fw-normal">Saturday, 25 Apr 2025</span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Time
              <span className="text-body fw-normal">09:00 AM - 11:00 AM</span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Location
              <span className="text-body fw-normal">Newyork , USA </span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Appointment Type
              <span className="text-body fw-normal">Online Consultation</span>
            </p>
            <div className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Patient Details
              <div className="text-body fw-normal d-flex align-items-center">
                <span className="avatar avatar-sm">
                  <ImageWithBasePath
                    src="assets/img/users/avatar-2.jpg"
                    alt=""
                    className="rounded-circle me-1"
                  />
                </span>
                James Adrian
              </div>
            </div>
          </div>
          <h6 className="bg-light py-2 px-3 text-dark fw-bold">
            Appointment Details
          </h6>
          <div className="px-3 my-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                Telehealth
                <label className="d-flex align-items-center form-switch ps-1">
                  <input
                    className="form-check-input m-0 me-2"
                    type="checkbox"
                    defaultChecked
                  />
                </label>
              </div>
              <div>
                <Link
                  to={all_routes.onlineconsultations}
                  className="btn-primary btn btn-sm rounded d-flex align-items-center"
                >
                  <i className="ti ti-video me-1" /> Start
                </Link>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p className="text-dark"> Status </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="mb-3">
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      Pending
                    </Link>
                    <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                      <div className="mb-3">
                        <div className="input-icon-start position-relative">
                          <span className="input-icon-addon fs-12">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <ul className="mb-0 list-style-none">
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Checked Out
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Checked In
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Cancelled
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Scheduled
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Add New Appointment*/}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0 z-0"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0 z-0"
              />
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1 position-relative z-1">
                Delete Confirmation
              </h5>
              <p className="mb-3 position-relative z-1">
                Are you sure want to delete?
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  className="btn btn-danger position-relative z-1"
                  onClick={handleDeleteAppointment}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Deleting...
                    </>
                  ) : (
                    "Yes, Delete"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Delete Modal  */}
    </>
  );
};

export default Modals;
