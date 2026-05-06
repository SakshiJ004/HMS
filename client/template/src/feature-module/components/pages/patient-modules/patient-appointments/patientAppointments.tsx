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
import { useState, useEffect, useCallback } from "react";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { DatePicker, Select, message } from "antd";
import dayjs from "dayjs";
// import Modals from "./modals/modals";
import {
  getDoctors,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getDoctorSchedule,
  type Doctor,
} from "../../../../../api/appointmentService";

const { RangePicker } = DatePicker;

interface Appointment {
  _id: string;
  appointmentId: string;
  doctor: {
    _id: string;
    fullName: string;
    name?: string;
    department?: string;
    designation?: string;
    specialization?: string;
    consultationCharge?: number;
    profileImage?: string;
    profilePicture?: string;
  };
  patient: {
    _id: string;
    fullName: string;
    email?: string;
    phone?: string;
    profileImage?: string;
  };
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
  department: string;
  status: string;
  reason?: string;
  consultationCharge?: number;
}

const STATUS_OPTIONS = [
  { value: '', label: 'All Status' },
  { value: 'Scheduled', label: 'Scheduled' },
  { value: 'Confirmed', label: 'Confirmed' },
  { value: 'Checked In', label: 'Checked In' },
  { value: 'Checked Out', label: 'Checked Out' },
  { value: 'Cancelled', label: 'Cancelled' },
];

const PatientAppointments = () => {
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  // Data states
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filtered, setFiltered] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  // Filter states
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null]>([null, null]);
  const [sortBy, setSortBy] = useState<'recent' | 'oldest' | 'asc' | 'desc'>('recent');

  // Modal states
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [doctorSchedule, setDoctorSchedule] = useState<any>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [createForm, setCreateForm] = useState({
    doctor: '',
    appointmentType: '',
    appointmentDate: null as dayjs.Dayjs | null,
    appointmentTime: null as dayjs.Dayjs | null,
    reason: '',
    status: 'Scheduled',
  });

  const [editForm, setEditForm] = useState({
    doctor: '',
    appointmentType: '',
    appointmentDate: null as dayjs.Dayjs | null,
    appointmentTime: null as dayjs.Dayjs | null,
    reason: '',
    status: 'Scheduled',
  });

  const [createErrors, setCreateErrors] = useState<any>({});

  // ─── Fetch ──────────────────────────────────────────────────────────────────

  const fetchAppointments = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/api/appointments`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setAppointments(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching appointments:', err);
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  const fetchDoctors = useCallback(async () => {
    try {
      const res = await getDoctors();
      setDoctors(res.data || []);
    } catch (err) {
      console.error('Error fetching doctors:', err);
    }
  }, []);

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, [fetchAppointments, fetchDoctors]);

  // ─── Filter + Sort ───────────────────────────────────────────────────────────

  useEffect(() => {
    let result = [...appointments];

    // Search
    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      result = result.filter(apt =>
        apt.doctor?.fullName?.toLowerCase().includes(q) ||
        apt.doctor?.name?.toLowerCase().includes(q) ||
        apt.appointmentId?.toLowerCase().includes(q) ||
        apt.department?.toLowerCase().includes(q) ||
        apt.status?.toLowerCase().includes(q) ||
        apt.appointmentType?.toLowerCase().includes(q)
      );
    }

    // Status
    if (statusFilter) {
      result = result.filter(apt => apt.status === statusFilter);
    }

    // Date range
    if (dateRange[0] && dateRange[1]) {
      result = result.filter(apt => {
        const d = dayjs(apt.appointmentDate);
        return d.isAfter(dateRange[0]!.subtract(1, 'day')) &&
          d.isBefore(dateRange[1]!.add(1, 'day'));
      });
    }

    // Sort
    result.sort((a, b) => {
      const da = new Date(a.appointmentDate).getTime();
      const db = new Date(b.appointmentDate).getTime();
      if (sortBy === 'recent' || sortBy === 'desc') return db - da;
      if (sortBy === 'oldest' || sortBy === 'asc') return da - db;
      return 0;
    });

    setFiltered(result);
  }, [appointments, searchText, statusFilter, dateRange, sortBy]);

  // ─── Export ──────────────────────────────────────────────────────────────────

  const exportCSV = () => {
    const headers = ['Appointment ID', 'Doctor', 'Department', 'Date', 'Time', 'Type', 'Status', 'Fees'];
    const rows = filtered.map(apt => [
      apt.appointmentId || '',
      apt.doctor?.fullName || apt.doctor?.name || '',
      apt.department || '',
      dayjs(apt.appointmentDate).format('DD MMM YYYY'),
      apt.appointmentTime || '',
      apt.appointmentType || '',
      apt.status || '',
      `$${apt.doctor?.consultationCharge || 0}`,
    ]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `appointments_${dayjs().format('YYYY-MM-DD')}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `appointments_${dayjs().format('YYYY-MM-DD')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ─── Doctor Schedule ─────────────────────────────────────────────────────────

  const handleDoctorChange = async (doctorId: string, isEdit = false) => {
    if (!isEdit) {
      setCreateForm(prev => ({ ...prev, doctor: doctorId, appointmentDate: null, appointmentTime: null }));
    } else {
      setEditForm(prev => ({ ...prev, doctor: doctorId, appointmentDate: null, appointmentTime: null }));
    }

    if (doctorId) {
      try {
        const schedule = await getDoctorSchedule(doctorId);
        setDoctorSchedule(schedule);
      } catch {
        setDoctorSchedule(null);
      }
    } else {
      setDoctorSchedule(null);
    }
  };

  const disabledDate = (current: dayjs.Dayjs) => {
    if (!current) return true;
    if (current.isBefore(dayjs().startOf('day'))) return true;
    if (!doctorSchedule?.schedule?.length) return true;
    const dateStr = current.format('YYYY-MM-DD');
    return !doctorSchedule.schedule.find((s: any) => s.date === dateStr);
  };

  const getTimeSlots = (date: dayjs.Dayjs | null) => {
    if (!date || !doctorSchedule?.schedule) return [];
    const dateStr = date.format('YYYY-MM-DD');
    const found = doctorSchedule.schedule.find((s: any) => s.date === dateStr);
    return found?.timeSlots || [];
  };

  // ─── CRUD ────────────────────────────────────────────────────────────────────

  const validateCreate = () => {
    const errs: any = {};
    if (!createForm.doctor) errs.doctor = 'Please select a doctor';
    if (!createForm.appointmentType) errs.appointmentType = 'Please select type';
    if (!createForm.appointmentDate) errs.appointmentDate = 'Please select date';
    if (!createForm.appointmentTime) errs.appointmentTime = 'Please select time';
    setCreateErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCreate = async () => {
    if (!validateCreate()) { message.error('Please fill all required fields'); return; }
    setCreateLoading(true);
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const selectedDoctor = doctors.find(d => d._id === createForm.doctor);
      await createAppointment({
        patient: userData._id,
        doctor: createForm.doctor,
        department: selectedDoctor?.department || '',
        appointmentType: createForm.appointmentType,
        appointmentDate: createForm.appointmentDate!.format('YYYY-MM-DD'),
        appointmentTime: createForm.appointmentTime!.format('HH:mm'),
        reason: createForm.reason || 'General Visit',
        status: createForm.status,
      });
      message.success('Appointment created successfully!');
      document.querySelector('#new_appointment .btn-close')?.dispatchEvent(new MouseEvent('click'));
      setCreateForm({ doctor: '', appointmentType: '', appointmentDate: null, appointmentTime: null, reason: '', status: 'Scheduled' });
      setCreateErrors({});
      setDoctorSchedule(null);
      await fetchAppointments();
    } catch (err: any) {
      message.error(err.message || 'Failed to create appointment');
    } finally {
      setCreateLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!selectedAppointment) return;
    if (!editForm.appointmentType || !editForm.appointmentDate || !editForm.appointmentTime) {
      message.error('Please fill all required fields'); return;
    }
    setEditLoading(true);
    try {
      const selectedDoctor = doctors.find(d => d._id === editForm.doctor);
      await updateAppointment(selectedAppointment._id, {
        doctor: editForm.doctor || selectedAppointment.doctor._id,
        department: selectedDoctor?.department || selectedAppointment.department,
        appointmentType: editForm.appointmentType,
        appointmentDate: editForm.appointmentDate!.format('YYYY-MM-DD'),
        appointmentTime: editForm.appointmentTime!.format('HH:mm'),
        reason: editForm.reason,
        status: editForm.status,
        patient: selectedAppointment.patient._id,
      });
      message.success('Appointment updated successfully!');
      document.querySelector('#edit_appointment .btn-close')?.dispatchEvent(new MouseEvent('click'));
      await fetchAppointments();
    } catch (err: any) {
      message.error(err.message || 'Failed to update appointment');
    } finally {
      setEditLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedAppointment) return;
    setDeleteLoading(true);
    try {
      await deleteAppointment(selectedAppointment._id);
      message.success('Appointment deleted successfully!');
      const modalEl = document.getElementById('delete_modal');
      const bsModal = (window as any).bootstrap?.Modal?.getInstance(modalEl);
      bsModal?.hide();
      await fetchAppointments();
    } catch (err: any) {
      message.error(err.message || 'Failed to delete appointment');
    } finally {
      setDeleteLoading(false);
    }
  };

  // ─── Helpers ─────────────────────────────────────────────────────────────────

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Checked Out': return 'badge-soft-primary text-primary';
      case 'Checked In': return 'badge-soft-warning text-warning';
      case 'Confirmed': return 'badge-soft-success text-success';
      case 'Scheduled': return 'badge-soft-info text-info';
      case 'Cancelled': return 'badge-soft-danger text-danger';
      default: return 'badge-soft-secondary text-secondary';
    }
  };

  const getAvatar = (name: string, img?: string, size = 40) => {
    if (img && (img.startsWith('http') || img.startsWith('data:'))) {
      return <img src={img} alt={name} className="rounded-circle" style={{ width: size, height: size, objectFit: 'cover' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />;
    }
    return (
      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: size, height: size, fontSize: 13 }}>
        {name?.charAt(0)?.toUpperCase() || 'D'}
      </div>
    );
  };

  const doctorOptions = doctors.map(d => ({ value: d._id, label: `${d.fullName} (${d.department || 'N/A'})` }));
  const typeOptions = [
    { value: 'Online Consultation', label: 'Online Consultation' },
    { value: 'In-Person Visit', label: 'In-Person Visit' },
    { value: 'Follow Up', label: 'Follow Up' },
    { value: 'Emergency', label: 'Emergency' },
  ];
  const statusOptions = [
    { value: 'Scheduled', label: 'Scheduled' },
    { value: 'Confirmed', label: 'Confirmed' },
    { value: 'Checked In', label: 'Checked In' },
    { value: 'Checked Out', label: 'Checked Out' },
    { value: 'Cancelled', label: 'Cancelled' },
  ];

  const getModalContainer = () => document.getElementById('modal-datepicker') || document.body;

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Appointments</h4>
            </div>
            <div className="text-end d-flex gap-2 align-items-center flex-wrap">
              {/* Export */}
              <div className="dropdown">
                <Link to="#" className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  Export <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li><button className="dropdown-item" onClick={exportCSV}>Download as CSV</button></li>
                  <li><button className="dropdown-item" onClick={exportJSON}>Download as JSON</button></li>
                </ul>
              </div>

              {/* View toggle */}
              <div className="bg-white border shadow-sm rounded px-1 d-flex align-items-center">
                <Link to={all_routes.patientappointments} className="bg-light rounded p-1 d-flex align-items-center">
                  <i className="ti ti-list fs-14 text-dark" />
                </Link>
                <Link to={all_routes.patientappointmentdetails} className="bg-white rounded p-1 d-flex align-items-center">
                  <i className="ti ti-calendar-event fs-14 text-body" />
                </Link>
              </div>

              {/* New Appointment */}
              <Link to="#" className="btn btn-primary fs-13 btn-md" data-bs-toggle="offcanvas" data-bs-target="#new_appointment">
                <i className="ti ti-plus me-1" /> New Appointment
              </Link>
            </div>
          </div>

          {/* Filters */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            {/* Search + Date Range */}
            <div className="d-flex align-items-center gap-2 flex-wrap">
              {/* Search */}
              <div className="search-input position-relative">
                <i className="ti ti-search position-absolute" style={{ left: 10, top: '50%', transform: 'translateY(-50%)', color: '#aaa' }} />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search doctor, status..."
                  style={{ paddingLeft: 32, width: 220 }}
                  value={searchText}
                  onChange={e => setSearchText(e.target.value)}
                />
              </div>

              {/* Date Range */}
              <RangePicker
                format="DD-MM-YYYY"
                style={{ height: 38 }}
                onChange={(dates) => setDateRange(dates ? [dates[0], dates[1]] : [null, null])}
                placeholder={['Start Date', 'End Date']}
              />
            </div>

            {/* Status + Sort */}
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <Select
                style={{ width: 150, height: 38 }}
                placeholder="All Status"
                options={STATUS_OPTIONS}
                value={statusFilter || undefined}
                onChange={val => setStatusFilter(val || '')}
                allowClear
              />

              <div className="dropdown">
                <Link to="#" className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14" data-bs-toggle="dropdown">
                  <span className="me-1">Sort By:</span>
                  {sortBy === 'recent' ? 'Recent' : sortBy === 'oldest' ? 'Oldest' : sortBy === 'asc' ? 'A-Z' : 'Z-A'}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  {[
                    { key: 'recent', label: 'Recently Added' },
                    { key: 'oldest', label: 'Oldest First' },
                    { key: 'asc', label: 'Date Ascending' },
                    { key: 'desc', label: 'Date Descending' },
                  ].map(s => (
                    <li key={s.key}>
                      <button className="dropdown-item rounded-1" onClick={() => setSortBy(s.key as any)}>{s.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="d-flex gap-3 mb-3 flex-wrap">
            {['All', 'Scheduled', 'Confirmed', 'Checked In', 'Checked Out', 'Cancelled'].map(s => {
              const count = s === 'All' ? appointments.length : appointments.filter(a => a.status === s).length;
              return (
                <button
                  key={s}
                  className={`btn btn-sm ${statusFilter === (s === 'All' ? '' : s) ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => setStatusFilter(s === 'All' ? '' : s)}
                >
                  {s} <span className="badge bg-white text-dark ms-1">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table border">
              <thead className="thead-light">
                <tr>
                  <th>#</th>
                  <th>Doctor</th>
                  <th>Date &amp; Time</th>
                  <th>Department</th>
                  <th>Mode</th>
                  <th>Fees</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="text-center py-5">
                      <div className="spinner-border text-primary" role="status" />
                    </td>
                  </tr>
                ) : filtered.length > 0 ? (
                  filtered.map((apt, idx) => {
                    const docName = apt.doctor?.fullName || apt.doctor?.name || 'N/A';
                    const docImg = apt.doctor?.profileImage || apt.doctor?.profilePicture;
                    return (
                      <tr key={apt._id}>
                        <td className="text-muted fs-13">#{apt.appointmentId || idx + 1}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="avatar me-2 flex-shrink-0">
                              {getAvatar(docName, docImg)}
                            </Link>
                            <div>
                              <h6 className="fs-14 mb-0 fw-semibold">{docName}</h6>
                              <p className="fs-13 mb-0 text-muted">{apt.doctor?.specialization || apt.doctor?.designation || ''}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="mb-0 fs-14">{dayjs(apt.appointmentDate).format('DD MMM YYYY')}</p>
                          <p className="mb-0 fs-13 text-muted">{apt.appointmentTime}</p>
                        </td>
                        <td className="fs-14">{apt.department || 'N/A'}</td>
                        <td className="fs-14">{apt.appointmentType}</td>
                        <td className="fw-semibold text-dark">${apt.doctor?.consultationCharge || 0}</td>
                        <td>
                          <span className={`badge fw-medium rounded fs-13 py-1 ${getStatusBadge(apt.status)}`}>
                            {apt.status}
                          </span>
                        </td>
                        <td>
                          <Link to="#" data-bs-toggle="dropdown" className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu p-2">
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item d-flex align-items-center"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#view_details"
                                onClick={() => setSelectedAppointment(apt)}
                              >
                                <i className="ti ti-eye me-2" /> View
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item d-flex align-items-center"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#edit_appointment"
                                onClick={() => {
                                  setSelectedAppointment(apt);
                                  setEditForm({
                                    doctor: apt.doctor?._id || '',
                                    appointmentType: apt.appointmentType,
                                    appointmentDate: dayjs(apt.appointmentDate),
                                    appointmentTime: dayjs(apt.appointmentTime, 'HH:mm'),
                                    reason: apt.reason || '',
                                    status: apt.status,
                                  });
                                }}
                              >
                                <i className="ti ti-edit me-2" /> Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item d-flex align-items-center text-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                                onClick={() => setSelectedAppointment(apt)}
                              >
                                <i className="ti ti-trash me-2" /> Delete
                              </Link>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={8} className="text-center py-5">
                      <i className="ti ti-calendar-x fs-1 text-muted d-block mb-2" />
                      <p className="text-muted mb-0">No appointments found</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Count */}
          {!loading && (
            <div className="text-muted fs-13 mt-2">
              Showing {filtered.length} of {appointments.length} appointments
            </div>
          )}
        </div>

        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          NEW APPOINTMENT OFFCANVAS
      ═══════════════════════════════════════════ */}
      <div className="offcanvas offcanvas-offset offcanvas-end" tabIndex={-1} id="new_appointment">
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">New Appointment</h5>
            <button type="button" className="btn-close custom-btn-close opacity-100" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-3">
          <div className="row">
            {/* Appointment ID */}
            <div className="col-lg-12 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Appointment ID</label>
              <input type="text" className="form-control bg-light" value="Auto-generated" readOnly />
            </div>

            {/* Doctor */}
            <div className="col-lg-12 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Doctor <span className="text-danger">*</span></label>
              <select
                className="form-control"
                value={createForm.doctor}
                onChange={e => handleDoctorChange(e.target.value)}
              >
                <option value="">Select Doctor</option>
                {doctorOptions.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
              </select>
              {createErrors.doctor && <div className="text-danger mt-1 fs-13">{createErrors.doctor}</div>}
            </div>

            {/* Appointment Type */}
            <div className="col-lg-12 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Appointment Type <span className="text-danger">*</span></label>
              <select className="form-control" value={createForm.appointmentType} onChange={e => setCreateForm(p => ({ ...p, appointmentType: e.target.value }))}>
                <option value="">Select Type</option>
                {typeOptions.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
              {createErrors.appointmentType && <div className="text-danger mt-1 fs-13">{createErrors.appointmentType}</div>}
            </div>

            {/* Date */}
            <div className="col-lg-6 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Date <span className="text-danger">*</span></label>
              <div className="input-icon-end position-relative">
                <DatePicker
                  className="form-control datetimepicker"
                  format="DD-MM-YYYY"
                  value={createForm.appointmentDate}
                  getPopupContainer={getModalContainer}
                  placeholder="DD-MM-YYYY"
                  disabledDate={disabledDate}
                  disabled={!createForm.doctor}
                  onChange={date => setCreateForm(p => ({ ...p, appointmentDate: date, appointmentTime: null }))}
                  suffixIcon={null}
                />
                <span className="input-icon-addon"><i className="ti ti-calendar" /></span>
              </div>
              {!createForm.doctor && <div className="text-muted mt-1 fs-13">Select a doctor first</div>}
              {createErrors.appointmentDate && <div className="text-danger mt-1 fs-13">{createErrors.appointmentDate}</div>}
            </div>

            {/* Time */}
            <div className="col-lg-6 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Time <span className="text-danger">*</span></label>
              <div className="input-icon-end position-relative">
                {(() => {
                  const slots = getTimeSlots(createForm.appointmentDate);
                  return slots.length > 0 ? (
                    <select
                      className="form-control"
                      value={createForm.appointmentTime ? createForm.appointmentTime.format('HH:mm') : ''}
                      onChange={e => setCreateForm(p => ({ ...p, appointmentTime: e.target.value ? dayjs(e.target.value, 'HH:mm') : null }))}
                      disabled={!createForm.appointmentDate}
                    >
                      <option value="">Select time slot</option>
                      {slots.map((s: any, i: number) => (
                        <option key={i} value={s.startTime}>{s.startTime} - {s.endTime}</option>
                      ))}
                    </select>
                  ) : (
                    <input type="text" className="form-control bg-light" placeholder="Select date first" readOnly disabled={!createForm.appointmentDate} />
                  );
                })()}
                <span className="input-icon-addon"><i className="ti ti-clock" /></span>
              </div>
              {createErrors.appointmentTime && <div className="text-danger mt-1 fs-13">{createErrors.appointmentTime}</div>}
            </div>

            {/* Reason */}
            <div className="col-lg-12 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Reason</label>
              <textarea rows={3} className="form-control" value={createForm.reason} onChange={e => setCreateForm(p => ({ ...p, reason: e.target.value }))} placeholder="Enter reason for appointment" />
            </div>

            {/* Status */}
            <div className="col-lg-12 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Status</label>
              <select className="form-control" value={createForm.status} onChange={e => setCreateForm(p => ({ ...p, status: e.target.value }))}>
                {statusOptions.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
          <div className="d-flex justify-content-end gap-2">
            <Link to="#" className="btn btn-light" data-bs-dismiss="offcanvas">Cancel</Link>
            <button type="button" className="btn btn-primary" onClick={handleCreate} disabled={createLoading}>
              {createLoading ? <><span className="spinner-border spinner-border-sm me-2" />Creating...</> : 'Create Appointment'}
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          VIEW DETAILS OFFCANVAS
      ═══════════════════════════════════════════ */}
      <div className="offcanvas offcanvas-offset offcanvas-end" tabIndex={-1} id="view_details">
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">
              Appointment Details
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2">
                #{selectedAppointment?.appointmentId || 'N/A'}
              </span>
            </h5>
            <button type="button" className="btn-close custom-btn-close opacity-100" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-0 px-0">
          <h6 className="bg-light py-2 px-3 text-dark fw-bold">When &amp; Where</h6>
          <div className="px-3 my-4">
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Appointment On
              <span className="text-body fw-normal">
                {selectedAppointment ? dayjs(selectedAppointment.appointmentDate).format('dddd, DD MMM YYYY') : 'N/A'}
              </span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Time <span className="text-body fw-normal">{selectedAppointment?.appointmentTime || 'N/A'}</span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Appointment Type <span className="text-body fw-normal">{selectedAppointment?.appointmentType || 'N/A'}</span>
            </p>
            <div className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Doctor
              <div className="text-body fw-normal d-flex align-items-center gap-2">
                {getAvatar(selectedAppointment?.doctor?.fullName || '', selectedAppointment?.doctor?.profileImage, 32)}
                {selectedAppointment?.doctor?.fullName || 'N/A'}
              </div>
            </div>
          </div>
          <h6 className="bg-light py-2 px-3 text-dark fw-bold">Appointment Details</h6>
          <div className="px-3 my-4">
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Department <span className="text-body fw-normal">{selectedAppointment?.department || 'N/A'}</span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Status
              <span className={`badge fw-medium ${getStatusBadge(selectedAppointment?.status || '')}`}>
                {selectedAppointment?.status || 'N/A'}
              </span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Reason <span className="text-body fw-normal">{selectedAppointment?.reason || 'N/A'}</span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Consultation Fees <span className="text-body fw-normal">${selectedAppointment?.doctor?.consultationCharge || 0}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          EDIT APPOINTMENT OFFCANVAS
      ═══════════════════════════════════════════ */}
      <div className="offcanvas offcanvas-offset offcanvas-end" tabIndex={-1} id="edit_appointment">
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">Edit Appointment</h5>
            <button type="button" className="btn-close custom-btn-close opacity-100" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-3">
          <div className="row">
            <div className="col-lg-12 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Appointment ID</label>
              <input type="text" className="form-control bg-light" value={selectedAppointment?.appointmentId || ''} readOnly />
            </div>

            <div className="col-lg-12 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Appointment Type <span className="text-danger">*</span></label>
              <select className="form-control" value={editForm.appointmentType} onChange={e => setEditForm(p => ({ ...p, appointmentType: e.target.value }))}>
                <option value="">Select Type</option>
                {typeOptions.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>

            <div className="col-lg-6 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Date <span className="text-danger">*</span></label>
              <div className="input-icon-end position-relative">
                <DatePicker
                  className="form-control datetimepicker"
                  format="DD-MM-YYYY"
                  value={editForm.appointmentDate}
                  getPopupContainer={getModalContainer}
                  placeholder="DD-MM-YYYY"
                  disabledDate={current => current && current.isBefore(dayjs().startOf('day'))}
                  onChange={date => setEditForm(p => ({ ...p, appointmentDate: date, appointmentTime: null }))}
                  suffixIcon={null}
                />
                <span className="input-icon-addon"><i className="ti ti-calendar" /></span>
              </div>
            </div>

            <div className="col-lg-6 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Time <span className="text-danger">*</span></label>
              <div className="input-icon-end position-relative">
                <input
                  type="time"
                  className="form-control"
                  value={editForm.appointmentTime ? editForm.appointmentTime.format('HH:mm') : ''}
                  onChange={e => setEditForm(p => ({ ...p, appointmentTime: e.target.value ? dayjs(e.target.value, 'HH:mm') : null }))}
                />
                <span className="input-icon-addon"><i className="ti ti-clock" /></span>
              </div>
            </div>

            <div className="col-lg-12 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Reason</label>
              <textarea rows={3} className="form-control" value={editForm.reason} onChange={e => setEditForm(p => ({ ...p, reason: e.target.value }))} />
            </div>

            <div className="col-lg-12 mb-3">
              <label className="form-label mb-1 text-dark fs-14 fw-medium">Status</label>
              <select className="form-control" value={editForm.status} onChange={e => setEditForm(p => ({ ...p, status: e.target.value }))}>
                {statusOptions.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
          <div className="d-flex justify-content-end gap-2">
            <Link to="#" className="btn btn-light" data-bs-dismiss="offcanvas">Cancel</Link>
            <button type="button" className="btn btn-primary" onClick={handleUpdate} disabled={editLoading}>
              {editLoading ? <><span className="spinner-border spinner-border-sm me-2" />Updating...</> : 'Update Appointment'}
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          DELETE MODAL
      ═══════════════════════════════════════════ */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath src="assets/img/bg/delete-modal-bg-01.png" alt="" className="img-fluid position-absolute top-0 start-0 z-0" />
              <ImageWithBasePath src="assets/img/bg/delete-modal-bg-02.png" alt="" className="img-fluid position-absolute bottom-0 end-0 z-0" />
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-lg bg-danger text-white"><i className="ti ti-trash fs-24" /></span>
              </div>
              <h5 className="fw-bold mb-1 position-relative z-1">Delete Confirmation</h5>
              <p className="mb-3 position-relative z-1">Are you sure want to delete this appointment?</p>
              <div className="d-flex justify-content-center">
                <Link to="#" className="btn btn-light position-relative z-1 me-3" data-bs-dismiss="modal">Cancel</Link>
                <button type="button" className="btn btn-danger position-relative z-1" onClick={handleDelete} disabled={deleteLoading}>
                  {deleteLoading ? <><span className="spinner-border spinner-border-sm me-2" />Deleting...</> : 'Yes, Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientAppointments;