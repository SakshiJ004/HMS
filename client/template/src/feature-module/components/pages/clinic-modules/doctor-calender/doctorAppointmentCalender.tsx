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


// import { useState, useEffect } from "react";
// import { Link, useSearchParams, useNavigate } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import { getAppointments, type AppointmentResponse } from "../../../../../api/appointmentService";
// import { getDoctor } from "../../../../../api/doctorService";
// import { message, Calendar, Spin } from "antd";
// import dayjs, { Dayjs } from "dayjs";

// const DoctorAppointmentCalendar = () => {
//     const [searchParams] = useSearchParams();
//     const navigate = useNavigate();
//     const doctorId = searchParams.get("doctorId");
//     const isAllDoctors = !doctorId; // Check if viewing all doctors

//     const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
//     const [_doctor, setDoctor] = useState<any>(null);
//     const [loading, setLoading] = useState(true);
//     const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());


//     useEffect(() => {
//         fetchData();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [doctorId]);

//     const fetchData = async () => {
//         try {
//             setLoading(true);

//             // Fetch appointments
//             const appointmentsResponse = await getAppointments();

//             if (isAllDoctors) {
//                 // Show all appointments from all doctors
//                 setAppointments(appointmentsResponse.data || []);
//                 setDoctor(null); // No specific doctor
//             } else {
//                 // Fetch specific doctor details
//                 const doctorResponse = await getDoctor(doctorId!);
//                 setDoctor(doctorResponse.data);

//                 // Filter appointments by doctor
//                 const doctorAppointments = (appointmentsResponse.data || []).filter(
//                     (app: AppointmentResponse) => app.doctor?._id === doctorId
//                 );
//                 setAppointments(doctorAppointments);
//             }
//         } catch (error: any) {
//             console.error("Error fetching data:", error);
//             message.error(error.message || "Failed to load data");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Filter appointments based on selected filters
//     const getFilteredAppointments = () => {
//         return appointments;
//     };

//     const filteredAppointments = getFilteredAppointments();

//     // Get appointments for a specific date
//     const getAppointmentsForDate = (date: Dayjs) => {
//         return filteredAppointments.filter(app =>
//             dayjs(app.appointmentDate).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
//         );
//     };

//     const dateCellRender = (value: Dayjs) => {
//         const dayAppointments = getAppointmentsForDate(value);

//         return (
//             <div
//                 onClick={() => {
//                     if (dayAppointments.length > 0) {
//                         navigate(`${all_routes.doctorAppointments}?date=${value.format('YYYY-MM-DD')}`);
//                     }
//                 }}
//                 style={{
//                     cursor: dayAppointments.length > 0 ? 'pointer' : 'default',
//                     minHeight: '80px',
//                     padding: '4px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}
//             >
//                 {dayAppointments.length > 0 && (
//                     <div
//                         className="bg-primary text-white rounded p-2 w-100 text-center"
//                         style={{ fontSize: '12px', fontWeight: 'bold' }}
//                     >
//                         {dayAppointments.length} Appointment{dayAppointments.length > 1 ? 's' : ''}
//                     </div>
//                 )}
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
//                                 All Doctors Appointment Calendar
//                                 <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
//                                     Total Appointments: {appointments.length}
//                                 </span>
//                             </h4>
//                         </div>
//                         <div className="text-end d-flex">
//                             {/* View toggle */}
//                             <div className="bg-white border rounded px-1 pb-0 text-center d-flex align-items-center shadow-sm justify-content-center">
//                                 <Link
//                                     to={all_routes.doctorAppointments}
//                                     className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
//                                     title="List View"
//                                 >
//                                     <i className="ti ti-list fs-14 text-body" />
//                                 </Link>
//                                 <Link
//                                     to={all_routes.doctorAppointmentCalendar}
//                                     className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
//                                     title="Calendar View"
//                                 >
//                                     <i className="ti ti-calendar-event fs-14 text-body" />
//                                 </Link>
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
//                                         value={selectedDate}
//                                         onChange={(date) => setSelectedDate(date)}
//                                     />
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
import { all_routes } from "../../../../routes/all_routes";
import { getAppointments, type AppointmentResponse } from "../../../../../api/appointmentService";
import { message, Calendar, Spin } from "antd";
import dayjs, { Dayjs } from "dayjs";

const DoctorAppointmentCalendar = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const doctorId = searchParams.get("doctorId");

    const [appointments, setAppointments] = useState<AppointmentResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [doctorId]);

    const fetchData = async () => {
        try {
            setLoading(true);

            // Fetch appointments
            const appointmentsResponse = await getAppointments();

            if (doctorId) {
                // Filter appointments by doctor if doctorId is provided
                const doctorAppointments = (appointmentsResponse.data || []).filter(
                    (app: AppointmentResponse) => app.doctor?._id === doctorId
                );
                setAppointments(doctorAppointments);
            } else {
                // Show all appointments from all doctors
                setAppointments(appointmentsResponse.data || []);
            }
        } catch (error: any) {
            console.error("Error fetching data:", error);
            message.error(error.message || "Failed to load data");
        } finally {
            setLoading(false);
        }
    };

    // Get appointments for a specific date
    const getAppointmentsForDate = (date: Dayjs) => {
        return appointments.filter(app =>
            dayjs(app.appointmentDate).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
        );
    };

    const dateCellRender = (value: Dayjs) => {
        const dayAppointments = getAppointmentsForDate(value);

        return (
            <div
                onClick={() => {
                    if (dayAppointments.length > 0) {
                        navigate(`${all_routes.doctorAppointments}?date=${value.format('YYYY-MM-DD')}`);
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
                                All Doctors Appointment Calendar
                                <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
                                    Total Appointments in {selectedDate.format('MMMM YYYY')}: {appointments.filter(app =>
                                        dayjs(app.appointmentDate).format('YYYY-MM') === selectedDate.format('YYYY-MM')
                                    ).length}
                                </span>
                            </h4>
                        </div>
                        <div className="text-end d-flex">
                            {/* View toggle */}
                            <div className="bg-white border rounded px-1 pb-0 text-center d-flex align-items-center shadow-sm justify-content-center">
                                <Link
                                    to={all_routes.doctorAppointments}
                                    className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                                    title="List View"
                                >
                                    <i className="ti ti-list fs-14 text-body" />
                                </Link>
                                <Link
                                    to={all_routes.doctorAppointmentCalendar}
                                    className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                                    title="Calendar View"
                                >
                                    <i className="ti ti-calendar-event fs-14 text-body" />
                                </Link>
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