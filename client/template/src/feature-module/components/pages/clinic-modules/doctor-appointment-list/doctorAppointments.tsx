// import { useState, useEffect } from "react";
// import { Link, useSearchParams } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { all_routes } from "../../../../routes/all_routes";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import Datatable from "../../../../../core/common/dataTable";
// import {
//     getAppointments,
//     deleteAppointment,
//     type AppointmentResponse
// } from "../../../../../api/appointmentService";
// import { getDoctor } from "../../../../../api/doctorService";
// import { message, Drawer } from "antd";
// import dayjs from "dayjs";
// import * as XLSX from 'xlsx';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// const DoctorAppointmentList = () => {
//     const [searchParams] = useSearchParams();
//     const doctorId = searchParams.get("doctorId");
//     // const isAllDoctors = !doctorId; // Check if viewing all doctors
//     const filterDate = searchParams.get("date");

//     const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
//     // const [doctor, setDoctor] = useState<any>(null);
//     const [loading, setLoading] = useState(true);
//     const [searchText, setSearchText] = useState<string>("");
//     const [deleteId, setDeleteId] = useState<string>("");
//     const [viewDrawerVisible, setViewDrawerVisible] = useState(false);
//     const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
//     const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
//     const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent');

//     const statuses = ["Checked Out", "Checked In", "Cancelled", "Scheduled", "Confirmed", "Completed"];

//     const toggleStatusFilter = (status: string) => {
//         if (selectedStatuses.includes(status)) {
//             setSelectedStatuses(selectedStatuses.filter(s => s !== status));
//         } else {
//             setSelectedStatuses([...selectedStatuses, status]);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [doctorId, filterDate]);

//     // const fetchData = async () => {
//     //     try {
//     //         setLoading(true);

//     //         // Fetch doctor details
//     //         const doctorResponse = await getDoctor(doctorId!);
//     //         setDoctor(doctorResponse.data);

//     //         // Fetch appointments
//     //         const appointmentsResponse = await getAppointments();
//     //         let doctorAppointments = (appointmentsResponse.data || []).filter(
//     //             (app: AppointmentResponse) => app.doctor?._id === doctorId
//     //         );

//     //         // Filter by date if provided
//     //         if (filterDate) {
//     //             doctorAppointments = doctorAppointments.filter((app: AppointmentResponse) =>
//     //                 dayjs(app.appointmentDate).format('YYYY-MM-DD') === filterDate
//     //             );
//     //         }

//     //         setAppointments(doctorAppointments);
//     //     } catch (error: any) {
//     //         console.error("Error fetching data:", error);
//     //         message.error(error.message || "Failed to load data");
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     const fetchData = async () => {
//         try {
//             setLoading(true);

//             // Get doctor if provided
//             if (doctorId) {
//                 const doctorResponse = await getDoctor(doctorId!);
//                 setDoctor(doctorResponse.data);
//             }

//             // Fetch appointments
//             const appointmentsResponse = await getAppointments();
//             let allAppointments = appointmentsResponse.data || [];

//             // Filter by doctor if specified
//             if (doctorId) {
//                 allAppointments = allAppointments.filter(
//                     (app: AppointmentResponse) => app.doctor?._id === doctorId
//                 );
//             }

//             // Always store ALL appointments for monthly count
//             setAppointments(allAppointments);

//             // If specific date filter, we'll filter in the render
//             // but keep all appointments in state for monthly count
//         } catch (error: any) {
//             console.error("Error fetching data:", error);
//             message.error(error.message || "Failed to load data");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async () => {
//         if (!deleteId) return;

//         try {
//             await deleteAppointment(deleteId);
//             message.success("Appointment deleted successfully");
//             fetchData();
//             setDeleteId("");
//         } catch (error: any) {
//             console.error("Error deleting appointment:", error);
//             message.error(error.message || "Failed to delete appointment");
//         }
//     };

//     const handleSearch = (value: string) => {
//         setSearchText(value);
//     };

//     const handleView = (appointment: any) => {
//         setSelectedAppointment(appointment);
//         setViewDrawerVisible(true);
//     };

//     const getInitials = (name: string) => {
//         if (!name) return "?";
//         return name.charAt(0).toUpperCase();
//     };

//     const renderAvatar = (image: string | null | undefined, name: string, bgColor: string) => {
//         if (image && (image.includes('googleusercontent.com') || image.startsWith('http'))) {
//             return (
//                 <img
//                     src={image}
//                     alt={name}
//                     className="rounded-circle"
//                     style={{ width: '40px', height: '40px', objectFit: 'cover' }}
//                 />
//             );
//         } else {
//             return (
//                 <div className={`rounded-circle ${bgColor} text-white d-flex align-items-center justify-content-center`}
//                     style={{ width: '40px', height: '40px', fontSize: '16px' }}>
//                     {getInitials(name)}
//                 </div>
//             );
//         }
//     };

//     const filteredData = appointments
//         .filter(app => {
//             // Search filter
//             const searchLower = searchText.toLowerCase();
//             const matchesSearch = app.patient?.fullName?.toLowerCase().includes(searchLower) ||
//                 app.department?.toLowerCase().includes(searchLower);

//             // Status filter
//             const matchesStatus = selectedStatuses.length === 0 ||
//                 selectedStatuses.includes(app.status);

//             return matchesSearch && matchesStatus;
//         })
//         .sort((a, b) => {
//             const dateA = dayjs(`${a.appointmentDate} ${a.appointmentTime}`).valueOf();
//             const dateB = dayjs(`${b.appointmentDate} ${b.appointmentTime}`).valueOf();
//             return sortOrder === 'recent' ? dateB - dateA : dateA - dateB;
//         });

//     const tableData = filteredData.map((appointment) => ({
//         key: appointment._id,
//         Date_Time: `${dayjs(appointment.appointmentDate).format("DD MMM YYYY")} - ${appointment.appointmentTime}`,
//         Patient: appointment.patient?.fullName || "N/A",
//         Patient_Image: appointment.patient?.profileImage || null,
//         Phone: appointment.patient?.email || "N/A",
//         Department: appointment.department,
//         Mode: appointment.appointmentType,
//         Status: appointment.status,
//         _id: appointment._id,
//         fullData: appointment
//     }));

//     const columns = [
//         {
//             title: "Date & Time",
//             dataIndex: "Date_Time",
//             sorter: (a: any, b: any) => a.Date_Time.localeCompare(b.Date_Time),
//         },
//         {
//             title: "Patient",
//             dataIndex: "Patient",
//             render: (text: any, record: any) => (
//                 <div className="d-flex align-items-center">
//                     <Link
//                         to={all_routes.patientDetails}
//                         className="avatar avatar-md me-2"
//                     >
//                         {renderAvatar(record.Patient_Image, text, 'bg-primary')}
//                     </Link>
//                     <Link
//                         to={all_routes.patientDetails}
//                         className="text-dark fw-semibold"
//                     >
//                         {text}
//                         <span className="text-body fs-13 fw-normal d-block">
//                             {record.Phone}
//                         </span>
//                     </Link>
//                 </div>
//             ),
//             sorter: (a: any, b: any) => a.Patient.localeCompare(b.Patient),
//         },
//         {
//             title: "Department",
//             dataIndex: "Department",
//             sorter: (a: any, b: any) => a.Department.localeCompare(b.Department),
//         },
//         {
//             title: "Mode",
//             dataIndex: "Mode",
//             sorter: (a: any, b: any) => a.Mode.localeCompare(b.Mode),
//         },
//         {
//             title: "Status",
//             dataIndex: "Status",
//             render: (text: string) => (
//                 <span
//                     className={`fs-13 badge ${text === "Checked Out" ? "badge-soft-info text-info" :
//                         text === "Checked In" ? "badge-soft-warning text-warning" :
//                             text === "Cancelled" ? "badge-soft-danger text-danger" :
//                                 text === "Scheduled" ? "badge-soft-primary text-primary" :
//                                     text === "Confirmed" ? "badge-soft-success text-success" : "badge-soft-secondary text-secondary"
//                         } rounded fw-medium`}
//                 >
//                     {text}
//                 </span>
//             ),
//             sorter: (a: any, b: any) => a.Status.localeCompare(b.Status),
//         },
//         {
//             title: "",
//             render: (record: any) => (
//                 <div className="action-item">
//                     <Link to="#" data-bs-toggle="dropdown">
//                         <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                         <li>
//                             <Link
//                                 to="#"
//                                 className="dropdown-item d-flex align-items-center"
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     handleView(record.fullData);
//                                 }}
//                             >
//                                 View
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 to="#"
//                                 className="dropdown-item d-flex align-items-center"
//                                 data-bs-toggle="modal"
//                                 data-bs-target="#delete_modal"
//                                 onClick={() => setDeleteId(record._id)}
//                             >
//                                 Delete
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             ),
//         },
//     ];
//     // Export to PDF
//     const exportToPDF = () => {
//         try {
//             const doc = new jsPDF();
//             doc.setFontSize(18);
//             doc.text('Doctor Appointments', 14, 20);
//             if (filterDate) {
//                 doc.setFontSize(12);
//                 doc.text(`Date: ${dayjs(filterDate).format('DD MMM YYYY')}`, 14, 30);
//             }

//             const tableData = filteredData.map(app => [
//                 dayjs(app.appointmentDate).format("DD MMM YYYY"),
//                 app.appointmentTime,
//                 app.patient?.fullName || "N/A",
//                 app.department || "N/A",
//                 app.appointmentType || "N/A",
//                 app.status || "N/A"
//             ]);

//             autoTable(doc, {
//                 head: [['Date', 'Time', 'Patient', 'Department', 'Type', 'Status']],
//                 body: tableData,
//                 startY: 40,
//                 styles: { fontSize: 8 },
//                 headStyles: { fillColor: [66, 66, 245] }
//             });

//             doc.save(`appointments_${dayjs().format('YYYY-MM-DD')}.pdf`);
//             message.success('PDF downloaded successfully');
//         } catch (error) {
//             console.error('PDF export error:', error);
//             message.error('Failed to export PDF');
//         }
//     };

//     // Export to Excel
//     const exportToExcel = () => {
//         try {
//             const excelData = filteredData.map(app => ({
//                 'Date': dayjs(app.appointmentDate).format("DD MMM YYYY"),
//                 'Time': app.appointmentTime,
//                 'Patient Name': app.patient?.fullName || "N/A",
//                 'Patient Email': app.patient?.email || "N/A",
//                 'Department': app.department || "N/A",
//                 'Appointment Type': app.appointmentType || "N/A",
//                 'Status': app.status || "N/A"
//             }));

//             const ws = XLSX.utils.json_to_sheet(excelData);
//             const wb = XLSX.utils.book_new();
//             XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
//             XLSX.writeFile(wb, `appointments_${dayjs().format('YYYY-MM-DD')}.xlsx`);
//             message.success('Excel downloaded successfully');
//         } catch (error) {
//             console.error('Excel export error:', error);
//             message.error('Failed to export Excel');
//         }
//     };

//     return (
//         <>
//             <div className="page-wrapper">
//                 <div className="content">
//                     {/* Page Header */}
//                     <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//                         <div className="flex-grow-1">
//                             <h6 className="fw-bold mb-0 d-flex align-items-center">
//                                 <Link to={all_routes.doctorAppointmentCalendar}>
//                                     <i className="ti ti-chevron-left me-1 fs-14" />
//                                     Back to Calendar
//                                 </Link>
//                             </h6>
//                             <h4 className="fw-semibold mb-0 mt-2">
//                                 All Doctors Appointments
//                                 {filterDate && (
//                                     <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
//                                         {dayjs(filterDate).format('DD MMM YYYY')}
//                                     </span>
//                                 )}
//                             </h4>
//                             <p className="text-muted mb-0 mt-1">
//                                 Total Appointments in {dayjs(filterDate || new Date()).format('MMMM YYYY')}:
//                                 <strong className="ms-1">{appointments.length}</strong>
//                             </p>
//                         </div>
//                         <div className="text-end d-flex">
//                             {/* Export dropdown */}
//                             <div className="dropdown me-1">
//                                 <Link
//                                     to="#"
//                                     className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
//                                     data-bs-toggle="dropdown"
//                                 >
//                                     Export
//                                     <i className="ti ti-chevron-down ms-2" />
//                                 </Link>
//                                 <ul className="dropdown-menu p-2">
//                                     <li>
//                                         <Link className="dropdown-item" to="#" onClick={exportToPDF}>
//                                             Download as PDF
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link className="dropdown-item" to="#" onClick={exportToExcel}>
//                                             Download as Excel
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             {/* View toggle */}
//                             <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
//                                 <Link
//                                     to={all_routes.doctorAppointments}
//                                     className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                                 >
//                                     <i className="ti ti-list fs-14 text-dark" />
//                                 </Link>
//                                 <Link
//                                     to={all_routes.doctorAppointmentCalendar}
//                                     className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                                 >
//                                     <i className="ti ti-calendar-event fs-14 text-body" />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Filter Section */}
//                     <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
//                         <div className="d-flex align-items-center gap-2">
//                             <div className="search-set">
//                                 <div className="d-flex align-items-center flex-wrap gap-2">
//                                     <div className="table-search d-flex align-items-center mb-0">
//                                         <div className="search-input">
//                                             <SearchInput value={searchText} onChange={handleSearch} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="d-flex table-dropdown right-content align-items-center flex-wrap row-gap-3">
//                             {/* Status Filter */}
//                             <div className="dropdown me-2">
//                                 <Link
//                                     to="#"
//                                     className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
//                                     data-bs-toggle="dropdown"
//                                     data-bs-auto-close="outside"
//                                 >
//                                     <i className="ti ti-filter text-gray-5 me-1" />
//                                     Status
//                                     {selectedStatuses.length > 0 && (
//                                         <span className="badge bg-primary ms-2">
//                                             {selectedStatuses.length}
//                                         </span>
//                                     )}
//                                 </Link>
//                                 <div className="dropdown-menu dropdown-menu-end p-3" style={{ minWidth: '200px' }}>
//                                     <h6 className="mb-2 fw-bold">Filter by Status</h6>
//                                     {statuses.map((status) => (
//                                         <label key={status} className="d-flex align-items-center mb-2">
//                                             <input
//                                                 className="form-check-input m-0 me-2"
//                                                 type="checkbox"
//                                                 checked={selectedStatuses.includes(status)}
//                                                 onChange={() => toggleStatusFilter(status)}
//                                             />
//                                             {status}
//                                         </label>
//                                     ))}
//                                     <div className="d-flex gap-2 mt-3">
//                                         <button
//                                             className="btn btn-sm btn-light"
//                                             onClick={() => setSelectedStatuses([])}
//                                         >
//                                             Clear
//                                         </button>
//                                         <button
//                                             className="btn btn-sm btn-primary"
//                                             onClick={() => message.success('Filters applied')}
//                                         >
//                                             Apply
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Sort Dropdown */}
//                             <div className="dropdown">
//                                 <Link
//                                     to="#"
//                                     className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
//                                     data-bs-toggle="dropdown"
//                                 >
//                                     <span className="me-1">Sort By: </span>
//                                     {sortOrder === 'recent' ? 'Recent' : 'Oldest'}
//                                 </Link>
//                                 <ul className="dropdown-menu dropdown-menu-end p-2">
//                                     <li>
//                                         <Link
//                                             to="#"
//                                             className="dropdown-item rounded-1"
//                                             onClick={() => setSortOrder('recent')}
//                                         >
//                                             Recent
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link
//                                             to="#"
//                                             className="dropdown-item rounded-1"
//                                             onClick={() => setSortOrder('oldest')}
//                                         >
//                                             Oldest
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Table */}
//                     <div className="table-responsive">
//                         {loading ? (
//                             <div className="text-center py-5">
//                                 <div className="spinner-border text-primary" role="status">
//                                     <span className="visually-hidden">Loading...</span>
//                                 </div>
//                             </div>
//                         ) : (
//                             <Datatable
//                                 columns={columns}
//                                 dataSource={tableData}
//                                 Selection={false}
//                                 searchText=""
//                             />
//                         )}
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="footer text-center bg-white p-2 border-top">
//                     <p className="text-dark mb-0">
//                         2025 ©
//                         <Link to="#" className="link-primary">
//                             Preclinic
//                         </Link>
//                         , All Rights Reserved
//                     </p>
//                 </div>
//             </div>

//             {/* View Drawer */}
//             <Drawer
//                 title="Appointment Details"
//                 placement="right"
//                 width={400}
//                 onClose={() => setViewDrawerVisible(false)}
//                 open={viewDrawerVisible}
//             >
//                 {selectedAppointment && (
//                     <div>
//                         <h6 className="bg-light py-2 px-3 fw-bold mb-3">When & Where</h6>

//                         <div className="mb-3">
//                             <div className="d-flex justify-content-between mb-2">
//                                 <span className="text-dark fw-semibold">Appointment On</span>
//                                 <span className="text-body">
//                                     {selectedAppointment ? dayjs(selectedAppointment.appointmentDate).format('dddd, DD MMM YYYY') : 'N/A'}
//                                 </span>
//                             </div>
//                             <div className="d-flex justify-content-between mb-2">
//                                 <span className="text-dark fw-semibold">Time</span>
//                                 <span className="text-body">{selectedAppointment?.appointmentTime || 'N/A'}</span>
//                             </div>
//                             <div className="d-flex justify-content-between mb-2">
//                                 <span className="text-dark fw-semibold">Appointment Type</span>
//                                 <span className="text-body">{selectedAppointment?.appointmentType || 'N/A'}</span>
//                             </div>
//                         </div>

//                         <div className="mb-3">
//                             <div className="text-dark fw-semibold mb-2">Patient</div>
//                             <div className="text-body">{selectedAppointment?.patient?.fullName || 'N/A'}</div>
//                         </div>

//                         <div className="mb-3">
//                             <div className="text-dark fw-semibold mb-2">Reason</div>
//                             <div className="text-body">{selectedAppointment?.reason || 'N/A'}</div>
//                         </div>

//                         <h6 className="bg-light py-2 px-3 fw-bold mb-3">Status</h6>

//                         <div className="d-flex justify-content-between align-items-center">
//                             <span className="text-dark fw-semibold">Current Status</span>
//                             <span className={`badge ${selectedAppointment?.status === "Checked Out" ? "bg-info" :
//                                 selectedAppointment?.status === "Checked In" ? "bg-warning" :
//                                     selectedAppointment?.status === "Cancelled" ? "bg-danger" :
//                                         selectedAppointment?.status === "Scheduled" ? "bg-primary" :
//                                             selectedAppointment?.status === "Confirmed" ? "bg-success" : "bg-secondary"
//                                 }`}>
//                                 {selectedAppointment?.status || 'N/A'}
//                             </span>
//                         </div>
//                     </div>
//                 )}
//             </Drawer>

//             {/* Delete Modal */}
//             <div className="modal fade" id="delete_modal">
//                 <div className="modal-dialog modal-dialog-centered modal-sm">
//                     <div className="modal-content">
//                         <div className="modal-body text-center position-relative">
//                             <ImageWithBasePath
//                                 src="assets/img/bg/delete-modal-bg-01.png"
//                                 alt=""
//                                 className="img-fluid position-absolute top-0 start-0 z-0"
//                             />
//                             <ImageWithBasePath
//                                 src="assets/img/bg/delete-modal-bg-02.png"
//                                 alt=""
//                                 className="img-fluid position-absolute bottom-0 end-0 z-0"
//                             />
//                             <div className="mb-3 position-relative z-1">
//                                 <span className="avatar avatar-lg bg-danger text-white">
//                                     <i className="ti ti-trash fs-24" />
//                                 </span>
//                             </div>
//                             <h5 className="fw-bold mb-1 position-relative z-1">
//                                 Delete Confirmation
//                             </h5>
//                             <p className="mb-3 position-relative z-1">
//                                 Are you sure want to delete this appointment?
//                             </p>
//                             <div className="d-flex justify-content-center">
//                                 <Link
//                                     to="#"
//                                     className="btn btn-light position-relative z-1 me-3"
//                                     data-bs-dismiss="modal"
//                                 >
//                                     Cancel
//                                 </Link>
//                                 <button
//                                     type="button"
//                                     className="btn btn-danger position-relative z-1"
//                                     data-bs-dismiss="modal"
//                                     onClick={handleDelete}
//                                 >
//                                     Yes, Delete
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default DoctorAppointmentList;


import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../routes/all_routes";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import {
    getAppointments,
    deleteAppointment,
    type AppointmentResponse
} from "../../../../../api/appointmentService";
import { message, Drawer } from "antd";
import dayjs from "dayjs";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const DoctorAppointmentList = () => {
    const [searchParams] = useSearchParams();
    const doctorId = searchParams.get("doctorId");
    const filterDate = searchParams.get("date");

    const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState<string>("");
    const [deleteId, setDeleteId] = useState<string>("");
    const [viewDrawerVisible, setViewDrawerVisible] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent');

    const statuses = ["Checked Out", "Checked In", "Cancelled", "Scheduled", "Confirmed", "Completed"];

    const toggleStatusFilter = (status: string) => {
        if (selectedStatuses.includes(status)) {
            setSelectedStatuses(selectedStatuses.filter(s => s !== status));
        } else {
            setSelectedStatuses([...selectedStatuses, status]);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [doctorId, filterDate]);

    const fetchData = async () => {
        try {
            setLoading(true);

            // Fetch appointments
            const appointmentsResponse = await getAppointments();
            let allAppointments = appointmentsResponse.data || [];

            // Filter by doctor if specified
            if (doctorId) {
                allAppointments = allAppointments.filter(
                    (app: AppointmentResponse) => app.doctor?._id === doctorId
                );
            }

            // Always store ALL appointments for monthly count
            setAppointments(allAppointments);
        } catch (error: any) {
            console.error("Error fetching data:", error);
            message.error(error.message || "Failed to load data");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;

        try {
            await deleteAppointment(deleteId);
            message.success("Appointment deleted successfully");
            fetchData();
            setDeleteId("");
        } catch (error: any) {
            console.error("Error deleting appointment:", error);
            message.error(error.message || "Failed to delete appointment");
        }
    };

    const handleSearch = (value: string) => {
        setSearchText(value);
    };

    const handleView = (appointment: any) => {
        setSelectedAppointment(appointment);
        setViewDrawerVisible(true);
    };

    const getInitials = (name: string) => {
        if (!name) return "?";
        return name.charAt(0).toUpperCase();
    };

    const renderAvatar = (image: string | null | undefined, name: string, bgColor: string) => {
        if (image && (image.includes('googleusercontent.com') || image.startsWith('http'))) {
            return (
                <img
                    src={image}
                    alt={name}
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
            );
        } else {
            return (
                <div className={`rounded-circle ${bgColor} text-white d-flex align-items-center justify-content-center`}
                    style={{ width: '40px', height: '40px', fontSize: '16px' }}>
                    {getInitials(name)}
                </div>
            );
        }
    };

    const filteredData = appointments
        .filter(app => {
            // Search filter
            const searchLower = searchText.toLowerCase();
            const matchesSearch = app.patient?.fullName?.toLowerCase().includes(searchLower) ||
                app.department?.toLowerCase().includes(searchLower);

            // Status filter
            const matchesStatus = selectedStatuses.length === 0 ||
                selectedStatuses.includes(app.status);

            return matchesSearch && matchesStatus;
        })
        .sort((a, b) => {
            const dateA = dayjs(`${a.appointmentDate} ${a.appointmentTime}`).valueOf();
            const dateB = dayjs(`${b.appointmentDate} ${b.appointmentTime}`).valueOf();
            return sortOrder === 'recent' ? dateB - dateA : dateA - dateB;
        });

    const tableData = filteredData.map((appointment) => ({
        key: appointment._id,
        Date_Time: `${dayjs(appointment.appointmentDate).format("DD MMM YYYY")} - ${appointment.appointmentTime}`,
        Patient: appointment.patient?.fullName || "N/A",
        Patient_Image: appointment.patient?.profileImage || null,
        Phone: appointment.patient?.email || "N/A",
        Department: appointment.department,
        Mode: appointment.appointmentType,
        Status: appointment.status,
        _id: appointment._id,
        fullData: appointment
    }));

    const columns = [
        {
            title: "Date & Time",
            dataIndex: "Date_Time",
            sorter: (a: any, b: any) => a.Date_Time.localeCompare(b.Date_Time),
        },
        {
            title: "Patient",
            dataIndex: "Patient",
            render: (text: any, record: any) => (
                <div className="d-flex align-items-center">
                    <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-md me-2"
                    >
                        {renderAvatar(record.Patient_Image, text, 'bg-primary')}
                    </Link>
                    <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                    >
                        {text}
                        <span className="text-body fs-13 fw-normal d-block">
                            {record.Phone}
                        </span>
                    </Link>
                </div>
            ),
            sorter: (a: any, b: any) => a.Patient.localeCompare(b.Patient),
        },
        {
            title: "Department",
            dataIndex: "Department",
            sorter: (a: any, b: any) => a.Department.localeCompare(b.Department),
        },
        {
            title: "Mode",
            dataIndex: "Mode",
            sorter: (a: any, b: any) => a.Mode.localeCompare(b.Mode),
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text: string) => (
                <span
                    className={`fs-13 badge ${text === "Checked Out" ? "badge-soft-info text-info" :
                        text === "Checked In" ? "badge-soft-warning text-warning" :
                            text === "Cancelled" ? "badge-soft-danger text-danger" :
                                text === "Scheduled" ? "badge-soft-primary text-primary" :
                                    text === "Confirmed" ? "badge-soft-success text-success" : "badge-soft-secondary text-secondary"
                        } rounded fw-medium`}
                >
                    {text}
                </span>
            ),
            sorter: (a: any, b: any) => a.Status.localeCompare(b.Status),
        },
        {
            title: "",
            render: (record: any) => (
                <div className="action-item">
                    <Link to="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item d-flex align-items-center"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleView(record.fullData);
                                }}
                            >
                                View
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                                onClick={() => setDeleteId(record._id)}
                            >
                                Delete
                            </Link>
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    // Export to PDF
    const exportToPDF = () => {
        try {
            const doc = new jsPDF();
            doc.setFontSize(18);
            doc.text('Doctor Appointments', 14, 20);
            if (filterDate) {
                doc.setFontSize(12);
                doc.text(`Date: ${dayjs(filterDate).format('DD MMM YYYY')}`, 14, 30);
            }

            const tableData = filteredData.map(app => [
                dayjs(app.appointmentDate).format("DD MMM YYYY"),
                app.appointmentTime,
                app.patient?.fullName || "N/A",
                app.department || "N/A",
                app.appointmentType || "N/A",
                app.status || "N/A"
            ]);

            autoTable(doc, {
                head: [['Date', 'Time', 'Patient', 'Department', 'Type', 'Status']],
                body: tableData,
                startY: 40,
                styles: { fontSize: 8 },
                headStyles: { fillColor: [66, 66, 245] }
            });

            doc.save(`appointments_${dayjs().format('YYYY-MM-DD')}.pdf`);
            message.success('PDF downloaded successfully');
        } catch (error) {
            console.error('PDF export error:', error);
            message.error('Failed to export PDF');
        }
    };

    // Export to Excel
    const exportToExcel = () => {
        try {
            const excelData = filteredData.map(app => ({
                'Date': dayjs(app.appointmentDate).format("DD MMM YYYY"),
                'Time': app.appointmentTime,
                'Patient Name': app.patient?.fullName || "N/A",
                'Patient Email': app.patient?.email || "N/A",
                'Department': app.department || "N/A",
                'Appointment Type': app.appointmentType || "N/A",
                'Status': app.status || "N/A"
            }));

            const ws = XLSX.utils.json_to_sheet(excelData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Appointments');
            XLSX.writeFile(wb, `appointments_${dayjs().format('YYYY-MM-DD')}.xlsx`);
            message.success('Excel downloaded successfully');
        } catch (error) {
            console.error('Excel export error:', error);
            message.error('Failed to export Excel');
        }
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    {/* Page Header */}
                    <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
                        <div className="flex-grow-1">
                            <h6 className="fw-bold mb-0 d-flex align-items-center">
                                <Link to={all_routes.doctorAppointmentCalendar}>
                                    <i className="ti ti-chevron-left me-1 fs-14" />
                                    Back to Calendar
                                </Link>
                            </h6>
                            <h4 className="fw-semibold mb-0 mt-2">
                                All Doctors Appointments
                                {filterDate && (
                                    <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
                                        {dayjs(filterDate).format('DD MMM YYYY')}
                                    </span>
                                )}
                            </h4>
                            <p className="text-muted mb-0 mt-1">
                                Total Appointments in {dayjs(filterDate || new Date()).format('MMMM YYYY')}:
                                <strong className="ms-1">{appointments.length}</strong>
                            </p>
                        </div>
                        <div className="text-end d-flex">
                            {/* Export dropdown */}
                            <div className="dropdown me-1">
                                <Link
                                    to="#"
                                    className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                >
                                    Export
                                    <i className="ti ti-chevron-down ms-2" />
                                </Link>
                                <ul className="dropdown-menu p-2">
                                    <li>
                                        <Link className="dropdown-item" to="#" onClick={exportToPDF}>
                                            Download as PDF
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#" onClick={exportToExcel}>
                                            Download as Excel
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* View toggle */}
                            <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                                <Link
                                    to={all_routes.doctorAppointments}
                                    className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                                >
                                    <i className="ti ti-list fs-14 text-dark" />
                                </Link>
                                <Link
                                    to={all_routes.doctorAppointmentCalendar}
                                    className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                                >
                                    <i className="ti ti-calendar-event fs-14 text-body" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Filter Section */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                        <div className="d-flex align-items-center gap-2">
                            <div className="search-set">
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="table-search d-flex align-items-center mb-0">
                                        <div className="search-input">
                                            <SearchInput value={searchText} onChange={handleSearch} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex table-dropdown right-content align-items-center flex-wrap row-gap-3">
                            {/* Status Filter */}
                            <div className="dropdown me-2">
                                <Link
                                    to="#"
                                    className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <i className="ti ti-filter text-gray-5 me-1" />
                                    Status
                                    {selectedStatuses.length > 0 && (
                                        <span className="badge bg-primary ms-2">
                                            {selectedStatuses.length}
                                        </span>
                                    )}
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end p-3" style={{ minWidth: '200px' }}>
                                    <h6 className="mb-2 fw-bold">Filter by Status</h6>
                                    {statuses.map((status) => (
                                        <label key={status} className="d-flex align-items-center mb-2">
                                            <input
                                                className="form-check-input m-0 me-2"
                                                type="checkbox"
                                                checked={selectedStatuses.includes(status)}
                                                onChange={() => toggleStatusFilter(status)}
                                            />
                                            {status}
                                        </label>
                                    ))}
                                    <div className="d-flex gap-2 mt-3">
                                        <button
                                            className="btn btn-sm btn-light"
                                            onClick={() => setSelectedStatuses([])}
                                        >
                                            Clear
                                        </button>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => message.success('Filters applied')}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Sort Dropdown */}
                            <div className="dropdown">
                                <Link
                                    to="#"
                                    className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                                    data-bs-toggle="dropdown"
                                >
                                    <span className="me-1">Sort By: </span>
                                    {sortOrder === 'recent' ? 'Recent' : 'Oldest'}
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end p-2">
                                    <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item rounded-1"
                                            onClick={() => setSortOrder('recent')}
                                        >
                                            Recent
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item rounded-1"
                                            onClick={() => setSortOrder('oldest')}
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
                        {loading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <Datatable
                                columns={columns}
                                dataSource={tableData}
                                Selection={false}
                                searchText=""
                            />
                        )}
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

            {/* View Drawer */}
            <Drawer
                title="Appointment Details"
                placement="right"
                width={400}
                onClose={() => setViewDrawerVisible(false)}
                open={viewDrawerVisible}
            >
                {selectedAppointment && (
                    <div>
                        <h6 className="bg-light py-2 px-3 fw-bold mb-3">When & Where</h6>

                        <div className="mb-3">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-dark fw-semibold">Appointment On</span>
                                <span className="text-body">
                                    {selectedAppointment ? dayjs(selectedAppointment.appointmentDate).format('dddd, DD MMM YYYY') : 'N/A'}
                                </span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-dark fw-semibold">Time</span>
                                <span className="text-body">{selectedAppointment?.appointmentTime || 'N/A'}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-dark fw-semibold">Appointment Type</span>
                                <span className="text-body">{selectedAppointment?.appointmentType || 'N/A'}</span>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="text-dark fw-semibold mb-2">Patient</div>
                            <div className="text-body">{selectedAppointment?.patient?.fullName || 'N/A'}</div>
                        </div>

                        <div className="mb-3">
                            <div className="text-dark fw-semibold mb-2">Reason</div>
                            <div className="text-body">{selectedAppointment?.reason || 'N/A'}</div>
                        </div>

                        <h6 className="bg-light py-2 px-3 fw-bold mb-3">Status</h6>

                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-dark fw-semibold">Current Status</span>
                            <span className={`badge ${selectedAppointment?.status === "Checked Out" ? "bg-info" :
                                selectedAppointment?.status === "Checked In" ? "bg-warning" :
                                    selectedAppointment?.status === "Cancelled" ? "bg-danger" :
                                        selectedAppointment?.status === "Scheduled" ? "bg-primary" :
                                            selectedAppointment?.status === "Confirmed" ? "bg-success" : "bg-secondary"
                                }`}>
                                {selectedAppointment?.status || 'N/A'}
                            </span>
                        </div>
                    </div>
                )}
            </Drawer>

            {/* Delete Modal */}
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
                                Are you sure want to delete this appointment?
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
                                    data-bs-dismiss="modal"
                                    onClick={handleDelete}
                                >
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorAppointmentList;