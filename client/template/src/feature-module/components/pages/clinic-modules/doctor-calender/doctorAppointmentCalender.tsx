// import { useState, useEffect } from "react";
// import { Link, useSearchParams, useNavigate } from "react-router";
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import { all_routes } from "../../../../routes/all_routes";
// import { getAppointments, type AppointmentResponse } from "../../../../../api/appointmentService";
// import { getDoctor } from "../../../../../api/doctorService";
// import { message, Calendar, Badge, Spin } from "antd";
// import dayjs, { Dayjs } from "dayjs";
// import type { BadgeProps } from 'antd';

// const DoctorAppointmentCalendar = () => {
//     const [searchParams] = useSearchParams();
//     const navigate = useNavigate();
//     const doctorId = searchParams.get("doctorId");

//     const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
//     const [doctor, setDoctor] = useState<any>(null);
//     const [loading, setLoading] = useState(true);
//     const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

//     useEffect(() => {
//         if (!doctorId) {
//             message.error("No doctor ID provided");
//             navigate(all_routes.doctors);
//             return;
//         }
//         fetchData();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [doctorId]);

//     const fetchData = async () => {
//         try {
//             setLoading(true);

//             // Fetch doctor details
//             const doctorResponse = await getDoctor(doctorId!);
//             setDoctor(doctorResponse.data);

//             // Fetch all appointments and filter by doctor
//             const appointmentsResponse = await getAppointments();
//             const doctorAppointments = (appointmentsResponse.data || []).filter(
//                 (app: AppointmentResponse) => app.doctor?._id === doctorId
//             );
//             setAppointments(doctorAppointments);
//         } catch (error: any) {
//             console.error("Error fetching data:", error);
//             message.error(error.message || "Failed to load data");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Get appointments for a specific date
//     const getAppointmentsForDate = (date: Dayjs) => {
//         return appointments.filter(app =>
//             dayjs(app.appointmentDate).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
//         );
//     };

//     // Get list data for calendar cells
//     const getListData = (value: Dayjs) => {
//         const dayAppointments = getAppointmentsForDate(value);

//         if (dayAppointments.length === 0) return [];

//         return [{
//             type: 'success' as BadgeProps['status'],
//             content: `${dayAppointments.length} ${dayAppointments.length === 1 ? 'Appointment' : 'Appointments'}`,
//         }];
//     };

//     // Custom date cell renderer
//     const dateCellRender = (value: Dayjs) => {
//         const listData = getListData(value);
//         const dayAppointments = getAppointmentsForDate(value);

//         return (
//             <div
//                 onClick={() => {
//                     if (dayAppointments.length > 0) {
//                         // Redirect to doctor appointment list with date filter
//                         navigate(`${all_routes.doctorAppointments}?doctorId=${doctorId}&date=${value.format('YYYY-MM-DD')}`);
//                     }
//                 }}
//                 style={{
//                     cursor: dayAppointments.length > 0 ? 'pointer' : 'default',
//                     minHeight: '80px'
//                 }}
//             >
//                 <ul className="events" style={{ listStyle: 'none', padding: 0 }}>
//                     {listData.map((item, index) => (
//                         <li key={index} style={{ marginBottom: '4px' }}>
//                             <Badge
//                                 status={item.type}
//                                 text={
//                                     <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#1890ff' }}>
//                                         {item.content}
//                                     </span>
//                                 }
//                             />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     };

//     return (
//         <>
//             <div className="page-wrapper">
//                 <div className="content">
//                     {/* Page Header */}
//                     <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//                         <div className="flex-grow-1">
//                             <h6 className="fw-bold mb-0 d-flex align-items-center">
//                                 <Link to={all_routes.doctors}>
//                                     <i className="ti ti-chevron-left me-1 fs-14" />
//                                     Back to Doctors
//                                 </Link>
//                             </h6>
//                             <h4 className="fw-semibold mb-0 mt-2">
//                                 {doctor ? `Dr. ${doctor.fullName}'s Appointment Calendar` : 'Doctor Appointment Calendar'}
//                                 <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
//                                     Total Appointments: {appointments.length}
//                                 </span>
//                             </h4>
//                         </div>
//                         <div className="text-end d-flex">
//                             <div className="bg-white border rounded px-1 pb-0 text-center d-flex align-items-center shadow-sm justify-content-center">
//                                 <Link
//                                     to={`${all_routes.doctorAppointments}?doctorId=${doctorId}`}
//                                     className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                                     title="List View"
//                                 >
//                                     <i className="ti ti-list fs-14 text-body" />
//                                 </Link>
//                                 <Link
//                                     to={`${all_routes.doctorAppointmentCalendar}?doctorId=${doctorId}`}
//                                     className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                                     title="Calendar View"
//                                 >
//                                     <i className="ti ti-calendar-event fs-14 text-body" />
//                                 </Link>
//                             </div>
//                             <Link
//                                 to={all_routes.newAppointment}
//                                 className="btn btn-primary ms-2 fs-13 btn-md"
//                             >
//                                 <i className="ti ti-plus me-1" /> New Appointment
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Filter Section */}
//                     <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
//                         <div className="d-flex align-items-center gap-2">
//                             <div className="d-flex right-content align-items-center flex-wrap">
//                                 <div className="custom-range-picker position-relative">
//                                     <span className="input-icon-addon fs-14 text-dark">
//                                         <i className="ti ti-calendar" />
//                                     </span>
//                                     <PredefinedDatePicker />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Calendar Card */}
//                     <div className="card mb-0">
//                         <div className="card-body">
//                             {loading ? (
//                                 <div className="text-center py-5">
//                                     <Spin size="large" tip="Loading appointments..." />
//                                 </div>
//                             ) : (
//                                 <div id="calendar">
//                                     <Calendar
//                                         dateCellRender={dateCellRender}
//                                         onChange={(date) => setSelectedDate(date)}
//                                     />

//                                     {/* Show appointments for selected date */}
//                                     {getAppointmentsForDate(selectedDate).length > 0 && (
//                                         <div className="mt-4">
//                                             <div className="d-flex justify-content-between align-items-center mb-3">
//                                                 <h6 className="fw-bold mb-0">
//                                                     Appointments on {selectedDate.format('DD MMM YYYY')}
//                                                     ({getAppointmentsForDate(selectedDate).length})
//                                                 </h6>
//                                                 <Link
//                                                     to={`${all_routes.doctorAppointments}?doctorId=${doctorId}&date=${selectedDate.format('YYYY-MM-DD')}`}
//                                                     className="btn btn-sm btn-primary"
//                                                 >
//                                                     View All <i className="ti ti-arrow-right ms-1" />
//                                                 </Link>
//                                             </div>
//                                             <div className="row">
//                                                 {getAppointmentsForDate(selectedDate).slice(0, 4).map((app) => (
//                                                     <div key={app._id} className="col-md-6 mb-3">
//                                                         <div className="card border">
//                                                             <div className="card-body">
//                                                                 <div className="d-flex justify-content-between align-items-start mb-2">
//                                                                     <h6 className="mb-0">{app.appointmentTime}</h6>
//                                                                     <span className={`badge ${app.status === 'Confirmed' ? 'bg-success' :
//                                                                             app.status === 'Scheduled' ? 'bg-primary' :
//                                                                                 app.status === 'Checked In' ? 'bg-warning' :
//                                                                                     app.status === 'Checked Out' ? 'bg-info' : 'bg-danger'
//                                                                         }`}>
//                                                                         {app.status}
//                                                                     </span>
//                                                                 </div>
//                                                                 <p className="mb-1">
//                                                                     <strong>Patient:</strong> {app.patient?.fullName}
//                                                                 </p>
//                                                                 <p className="mb-1">
//                                                                     <strong>Department:</strong> {app.department}
//                                                                 </p>
//                                                                 <p className="mb-0">
//                                                                     <strong>Type:</strong> {app.appointmentType}
//                                                                 </p>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
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
//         </>
//     );
// };

// export default DoctorAppointmentCalendar;


import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router";
import PredefinedDatePicker from "../../../../../core/common/datePicker";
import { all_routes } from "../../../../routes/all_routes";
import { getAppointments, type AppointmentResponse } from "../../../../../api/appointmentService";
import { getDoctor } from "../../../../../api/doctorService";
import { message, Calendar, Spin } from "antd";
import dayjs, { Dayjs } from "dayjs";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const DoctorAppointmentCalendar = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const doctorId = searchParams.get("doctorId");

    const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
    const [doctor, setDoctor] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

    // Filter states
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent');

    const statuses = ["Checked Out", "Checked In", "Cancelled", "Scheduled", "Confirmed"];

    useEffect(() => {
        if (!doctorId) {
            message.error("No doctor ID provided");
            navigate(all_routes.doctors);
            return;
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [doctorId]);

    const fetchData = async () => {
        try {
            setLoading(true);

            // Fetch doctor details
            const doctorResponse = await getDoctor(doctorId!);
            setDoctor(doctorResponse.data);

            // Fetch all appointments and filter by doctor
            const appointmentsResponse = await getAppointments();
            const doctorAppointments = (appointmentsResponse.data || []).filter(
                (app: AppointmentResponse) => app.doctor?._id === doctorId
            );
            setAppointments(doctorAppointments);
        } catch (error: any) {
            console.error("Error fetching data:", error);
            message.error(error.message || "Failed to load data");
        } finally {
            setLoading(false);
        }
    };

    // Filter appointments based on selected filters
    const getFilteredAppointments = () => {
        let filtered = [...appointments];

        // Filter by status
        if (selectedStatuses.length > 0) {
            filtered = filtered.filter(app =>
                selectedStatuses.includes(app.status)
            );
        }

        // Sort by date
        filtered.sort((a, b) => {
            const dateA = dayjs(a.appointmentDate).valueOf();
            const dateB = dayjs(b.appointmentDate).valueOf();
            return sortOrder === 'recent' ? dateB - dateA : dateA - dateB;
        });

        return filtered;
    };

    const filteredAppointments = getFilteredAppointments();

    // Get appointments for a specific date
    const getAppointmentsForDate = (date: Dayjs) => {
        return filteredAppointments.filter(app =>
            dayjs(app.appointmentDate).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
        );
    };

    // Custom date cell renderer
    const dateCellRender = (value: Dayjs) => {
        const dayAppointments = getAppointmentsForDate(value);

        return (
            <div
                onClick={() => {
                    if (dayAppointments.length > 0) {
                        navigate(`${all_routes.doctorAppointments}?doctorId=${doctorId}&date=${value.format('YYYY-MM-DD')}`);
                    }
                }}
                style={{
                    cursor: dayAppointments.length > 0 ? 'pointer' : 'default',
                    minHeight: '80px',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {dayAppointments.length > 0 && (
                    <div
                        className="bg-primary text-white rounded p-2 w-100 text-center"
                        style={{ fontSize: '12px', fontWeight: 'bold' }}
                    >
                        {dayAppointments.length} Appointment{dayAppointments.length > 1 ? 's' : ''}
                    </div>
                )}
            </div>
        );
    };

    // Handle checkbox toggle
    const toggleSelection = (array: string[], setArray: Function, value: string) => {
        if (array.includes(value)) {
            setArray(array.filter(item => item !== value));
        } else {
            setArray([...array, value]);
        }
    };

    // Clear all filters
    const clearAllFilters = () => {
        setSelectedStatuses([]);
    };

    // Export to PDF
    const exportToPDF = () => {
        try {
            const doc = new jsPDF();
            doc.setFontSize(18);
            doc.text(`Dr. ${doctor?.fullName}'s Appointments`, 14, 20);

            const tableData = filteredAppointments.map(app => [
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
                startY: 30,
                styles: { fontSize: 8 },
                headStyles: { fillColor: [66, 66, 245] }
            });

            doc.save(`doctor_${doctor?.fullName}_appointments_${dayjs().format('YYYY-MM-DD')}.pdf`);
            message.success('PDF downloaded successfully');
        } catch (error) {
            console.error('PDF export error:', error);
            message.error('Failed to export PDF');
        }
    };

    // Export to Excel
    const exportToExcel = () => {
        try {
            const excelData = filteredAppointments.map(app => ({
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
            XLSX.writeFile(wb, `doctor_${doctor?.fullName}_appointments_${dayjs().format('YYYY-MM-DD')}.xlsx`);
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
                                <Link to={all_routes.doctors}>
                                    <i className="ti ti-chevron-left me-1 fs-14" />
                                    Back to Doctors
                                </Link>
                            </h6>
                            <h4 className="fw-semibold mb-0 mt-2">
                                {doctor ? `Dr. ${doctor.fullName}'s Appointment Calendar` : 'Appointment Calendar'}
                                <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
                                    Total Appointments: {appointments.length}
                                </span>
                            </h4>
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
                            <div className="bg-white border rounded px-1 pb-0 text-center d-flex align-items-center shadow-sm justify-content-center">
                                <Link
                                    to={`${all_routes.doctorAppointments}?doctorId=${doctorId}`}
                                    className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                                    title="List View"
                                >
                                    <i className="ti ti-list fs-14 text-body" />
                                </Link>
                                <Link
                                    to={`${all_routes.doctorAppointmentCalendar}?doctorId=${doctorId}`}
                                    className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                                    title="Calendar View"
                                >
                                    <i className="ti ti-calendar-event fs-14 text-body" />
                                </Link>
                            </div>
                            <Link
                                to={all_routes.newAppointment}
                                className="btn btn-primary ms-2 fs-13 btn-md"
                            >
                                <i className="ti ti-plus me-1" /> New Appointment
                            </Link>
                        </div>
                    </div>

                    {/* Filter Section */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <div className="d-flex align-items-center gap-2">
                            <div className="d-flex right-content align-items-center flex-wrap mb-3">
                                <div className="custom-range-picker position-relative">
                                    <span className="input-icon-addon fs-14 text-dark">
                                        <i className="ti ti-calendar" />
                                    </span>
                                    <PredefinedDatePicker />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
                            {/* Filter Dropdown */}
                            <div className="dropdown me-2">
                                <Link
                                    to="#"
                                    className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <i className="ti ti-filter text-gray-5 me-1" />
                                    Filters
                                    {selectedStatuses.length > 0 && (
                                        <span className="badge bg-primary ms-2">
                                            {selectedStatuses.length}
                                        </span>
                                    )}
                                </Link>
                                <div
                                    className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
                                    id="filter-dropdown"
                                    style={{ maxHeight: '600px', overflowY: 'auto' }}
                                >
                                    <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                                        <h4 className="mb-0 fw-bold">Filter</h4>
                                        <div className="d-flex align-items-center">
                                            <Link
                                                to="#"
                                                className="link-danger text-decoration-underline"
                                                onClick={clearAllFilters}
                                            >
                                                Clear All
                                            </Link>
                                        </div>
                                    </div>
                                    <form action="#" onSubmit={(e) => e.preventDefault()}>
                                        <div className="filter-body pb-0">
                                            {/* Status Filter */}
                                            <div className="mb-3">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <label className="form-label">Status</label>
                                                    <Link
                                                        to="#"
                                                        className="link-primary mb-1"
                                                        onClick={() => setSelectedStatuses([])}
                                                    >
                                                        Reset
                                                    </Link>
                                                </div>
                                                <div className="dropdown">
                                                    <Link
                                                        to="#"
                                                        className="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                                                        data-bs-toggle="dropdown"
                                                        data-bs-auto-close="outside"
                                                    >
                                                        {selectedStatuses.length > 0
                                                            ? `${selectedStatuses.length} selected`
                                                            : 'Select'}
                                                        <i className="ti ti-chevron-down ms-auto" />
                                                    </Link>
                                                    <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                                                        <ul className="mb-3">
                                                            {statuses.map((status) => (
                                                                <li key={status} className="mb-1">
                                                                    <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                                                        <input
                                                                            className="form-check-input m-0 me-2"
                                                                            type="checkbox"
                                                                            checked={selectedStatuses.includes(status)}
                                                                            onChange={() => toggleSelection(selectedStatuses, setSelectedStatuses, status)}
                                                                        />
                                                                        {status}
                                                                    </label>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                                            <Link
                                                to="#"
                                                className="btn btn-light btn-md me-2 fw-medium"
                                                id="close-filter"
                                                data-bs-dismiss="dropdown"
                                            >
                                                Close
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-md fw-medium"
                                                onClick={() => {
                                                    message.success('Filters applied successfully');
                                                }}
                                            >
                                                Apply Filters
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Sort Dropdown */}
                            <div className="dropdown">
                                <Link
                                    to="#"
                                    className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                                    data-bs-toggle="dropdown"
                                >
                                    <span className="me-1"> Sort By : </span>
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

                    {/* Calendar Card */}
                    <div className="card mb-0">
                        <div className="card-body">
                            {loading ? (
                                <div className="text-center py-5">
                                    <Spin size="large" tip="Loading appointments..." />
                                </div>
                            ) : (
                                <div id="calendar">
                                    <Calendar
                                        dateCellRender={dateCellRender}
                                        value={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                    />
                                </div>
                            )}
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

export default DoctorAppointmentCalendar;