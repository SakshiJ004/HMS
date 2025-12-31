import { Link } from "react-router";
import Modals from "./modals/modals";
import SCol20Chart from "./charts/scol20";
import SCol5Chart from "./charts/scol5";
import SCol6Chart from "./charts/scol6";
import SCol7Chart from "./charts/scol7";
import CircleChart2 from "./charts/circleChart2";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  getDoctorStats,
  getDoctorAppointmentChart,
  // getUpcomingAppointment,
  getRecentAppointments,
  getAdditionalStats,
  type DoctorStats,
  type UpcomingAppointmentData,
  type RecentAppointment,
  getUpcomingAppointmentFiltered,
  getAppointmentStatistics,
  getTopPatients,
} from "../../../../../api/doctorDashboardService";
import { getDoctor } from "../../../../../api/doctorService";
import { all_routes } from "../../../../routes/all_routes";


const DoctorDahboard = () => {
  const [stats, setStats] = useState<DoctorStats>({
    totalAppointments: 0,
    onlineConsultations: 0,
    cancelledAppointments: 0,
    totalAppointmentsChange: 0,
    onlineConsultationsChange: 0,
    cancelledAppointmentsChange: 0,
  });
  const [chartPeriod, setChartPeriod] = useState<'monthly' | 'weekly' | 'yearly'>('monthly');
  const [chartData, setChartData] = useState<any[]>([]);
  const [upcomingAppointment, setUpcomingAppointment] = useState<UpcomingAppointmentData[]>([]);
  const [recentAppointments, setRecentAppointments] = useState<RecentAppointment[]>([]);

  const [additionalStats, setAdditionalStats] = useState<any>({
    totalPatients: 0,
    videoConsultations: 0,
    rescheduled: 0,
    preVisit: 0,
    walkIn: 0,
    followUps: 0,
  });

  const [doctorSchedules, setDoctorSchedules] = useState<Array<{
    day: string;
    timeSlots: Array<{ startTime: string; endTime: string }>;
  }>>([]);
  const [upcomingFilter, setUpcomingFilter] = useState<'today' | 'week' | 'month'>('week');
  const [statisticsPeriod, setStatisticsPeriod] = useState<'monthly' | 'weekly' | 'yearly'>('monthly');
  const [topPatientsPeriod, setTopPatientsPeriod] = useState<'monthly' | 'weekly' | 'yearly'>('weekly');
  const [appointmentStatistics, setAppointmentStatistics] = useState<any>({
    completed: 260,
    pending: 21,
    cancelled: 50
  });
  const [topPatients, setTopPatients] = useState<any[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<RecentAppointment | null>(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    fetchChartData();
  }, [chartPeriod]);

  // Refetch upcoming when filter changes
  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const res = await getUpcomingAppointmentFiltered(upcomingFilter);
        if (res.success) setUpcomingAppointment(res.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUpcoming();
  }, [upcomingFilter]);

  // Refetch statistics when period changes
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getAppointmentStatistics(statisticsPeriod);
        if (res.success) setAppointmentStatistics(res.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchStats();
  }, [statisticsPeriod]);

  // Refetch top patients when period changes
  useEffect(() => {
    const fetchTopPatients = async () => {
      try {
        const res = await getTopPatients(topPatientsPeriod);
        if (res.success) setTopPatients(res.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchTopPatients();
  }, [topPatientsPeriod]);

  const fetchAllData = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}')
      const doctorId = userData._id;

      const [
        statsRes,
        chartRes,
        upcomingRes,
        recentRes,
        doctorRes,
        additionalRes,
        statisticsRes,
        topPatientsRes
      ] = await Promise.all([
        getDoctorStats(),
        getDoctorAppointmentChart(chartPeriod),
        getUpcomingAppointmentFiltered(upcomingFilter),
        getRecentAppointments(),
        getDoctor(doctorId),
        getAdditionalStats(),
        getAppointmentStatistics(statisticsPeriod),
        getTopPatients(topPatientsPeriod),
      ]);

      if (statsRes.success) setStats(statsRes.data);
      if (chartRes.success) setChartData(chartRes.data);
      if (upcomingRes.success) setUpcomingAppointment(upcomingRes.data);
      if (recentRes.success) setRecentAppointments(recentRes.data);
      if (doctorRes.success) setDoctorSchedules(doctorRes.data.schedules || []);
      if (additionalRes.success) setAdditionalStats(additionalRes.data);
      if (statisticsRes.success) setAppointmentStatistics(statisticsRes.data);
      if (topPatientsRes.success) setTopPatients(topPatientsRes.data);
    } catch (error: any) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const fetchChartData = async () => {
    try {
      const chartRes = await getDoctorAppointmentChart(chartPeriod);
      if (chartRes.success) setChartData(chartRes.data);
    } catch (error: any) {
      console.error('Error fetching chart data:', error);
    }
  };

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content pb-0">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <h4 className="fw-bold mb-0">Doctor Dashboard</h4>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              {/* <Link
                to="#"
                className="btn btn-primary d-inline-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#new_appointment"
              >
                <i className="ti ti-plus me-1" />
                New Appointment
              </Link> */}
              <Link
                to={all_routes.doctorschedule}
                className="btn btn-outline-white bg-white d-inline-flex align-items-center"
              >
                <i className="ti ti-calendar-time me-1" />
                Schedule Availability
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1">Total Appointments</p>
                      <div className="d-flex align-items-center gap-1">
                        <h3 className="fw-bold mb-0">{stats.totalAppointments}</h3>
                        <span className="badge fw-medium bg-success flex-shrink-0">
                          +{stats.totalAppointmentsChange}%
                        </span>
                      </div>
                    </div>
                    <span className="avatar border border-primary text-primary rounded-2 flex-shrink-0">
                      <i className="ti ti-calendar-heart fs-20" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end">
                    <SCol5Chart />
                    <span className="badge fw-medium badge-soft-success flex-shrink-0 ms-2">
                      +21% <i className="ti ti-arrow-up ms-1" />
                    </span>
                    <p className="ms-1 fs-13 text-truncate">in last 7 Days </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1">Online Consultations</p>
                      <div className="d-flex align-items-center gap-1">
                        <h3 className="fw-bold mb-0">{stats.onlineConsultations}</h3>
                        <span className="badge fw-medium bg-danger flex-shrink-0">
                          {stats.onlineConsultationsChange > 0 ? '+' : ''}{stats.onlineConsultationsChange}%
                        </span>
                      </div>
                    </div>
                    <span className="avatar border border-danger text-danger rounded-2 flex-shrink-0">
                      <i className="ti ti-users fs-20" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end">
                    <SCol6Chart />
                    <span className="badge fw-medium badge-soft-danger flex-shrink-0 ms-2">
                      +21% <i className="ti ti-arrow-down ms-1" />
                    </span>
                    <p className="ms-1 fs-13 text-truncate">in last 7 Days </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1">Cancelled Appointments</p>
                      <div className="d-flex align-items-center gap-1">
                        <h3 className="fw-bold mb-0">{stats.cancelledAppointments}</h3>
                        <span className="badge fw-medium bg-success flex-shrink-0">
                          +{stats.cancelledAppointmentsChange}%
                        </span>
                      </div>
                    </div>
                    <span className="avatar border border-success text-success rounded-2 flex-shrink-0">
                      <i className="ti ti-versions fs-20" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end">
                    <SCol7Chart />
                    <span className="badge fw-medium badge-soft-success flex-shrink-0 ms-2">
                      +31% <i className="ti ti-arrow-up ms-1" />
                    </span>
                    <p className="ms-1 fs-13 text-truncate">in last 7 Days </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row end */}
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-4 d-flex">
              {/* card start */}
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0 text-truncate">
                    Upcoming Appointments
                  </h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {upcomingFilter === 'today' ? 'Today' : upcomingFilter === 'week' ? 'This Week' : 'This Month'} <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setUpcomingFilter('today')}>
                          Today
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setUpcomingFilter('week')}>
                          This Week
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setUpcomingFilter('month')}>
                          This Month
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  {upcomingAppointment && upcomingAppointment.length > 0 ? (
                    upcomingAppointment.map((apt) => (
                      <div key={apt._id} className="mb-4">
                        <div className="d-flex align-items-center mb-3">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            {apt.patient.profileImage ? (
                              <img
                                src={apt.patient.profileImage}
                                alt={apt.patient.fullName}
                                className="rounded-circle"
                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                              />
                            ) : (
                              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                {apt.patient.fullName.charAt(0)}
                              </div>
                            )}
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link to="#" className="fw-semibold">
                                {apt.patient.fullName}
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13 text-truncate">#{apt.appointmentId}</p>
                          </div>
                        </div>
                        <h6 className="fs-14 fw-semibold mb-1">{apt.reason || 'General Visit'}</h6>
                        <div className="d-flex align-items-center gap-2 flex-wrap mb-3">
                          <p className="mb-0 d-inline-flex align-items-center">
                            <i className="ti ti-calendar-time text-dark me-1" />
                            {dayjs(apt.appointmentDate).format('dddd, DD MMM YYYY')}
                          </p>
                          <p className="mb-0 d-inline-flex align-items-center">
                            <i className="ti ti-clock text-dark me-1" />
                            {apt.appointmentTime}
                          </p>
                        </div>
                        <div className="row">
                          <div className="col">
                            <h6 className="fs-13 fw-semibold mb-1">Department</h6>
                            <p>{apt.department}</p>
                          </div>
                          <div className="col">
                            <h6 className="fs-13 fw-semibold mb-1">Type</h6>
                            <p className="text-truncate">{apt.appointmentType}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-5">
                      <i className="ti ti-calendar-x fs-1 text-muted mb-3"></i>
                      <p className="text-muted">No upcoming appointments</p>
                    </div>
                  )}
                </div>
                {/* card end */}
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-8 d-flex">
              {/* card start */}
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Appointments</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {chartPeriod === 'monthly' ? 'Monthly' : chartPeriod === 'weekly' ? 'Weekly' : 'Yearly'}
                      <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setChartPeriod('monthly')}>
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setChartPeriod('weekly')}>
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setChartPeriod('yearly')}>
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex align-items-center justify-content-end gap-2 mb-1 flex-wrap mb-3">
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-point-filled me-1 fs-18 text-primary" />
                      Total Appointments
                    </p>
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-point-filled me-1 fs-18 text-success" />
                      Completed Appointments
                    </p>
                  </div>
                  <SCol20Chart data={chartData} period={chartPeriod} />
                </div>
              </div>
              {/* card end */}
            </div>
            {/* col end */}
          </div>
          {/* row end */}
          {/* row start */}
          <div className="row row-cols-1 row-cols-xl-6 row-cols-md-3 row-cols-sm-2">
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-primary rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-user" />
                  </span>
                  <p className="mb-1 text-truncate">Total Patient</p>
                  <h3 className="fw-bold mb-2">{additionalStats.totalPatients}</h3>
                  <p className="mb-0 text-success text-truncate">
                    +{additionalStats.patientsChange}% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-secondary rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-video" />
                  </span>
                  <p className="mb-1 text-truncate">Video Consultation</p>
                  <h3 className="fw-bold mb-2">{additionalStats.videoConsultations}</h3>
                  <p className={`mb-0 ${additionalStats.videoChange >= 0 ? 'text-success' : 'text-danger'} text-truncate`}>
                    {additionalStats.videoChange >= 0 ? '+' : ''}{additionalStats.videoChange}% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-success rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-calendar-up" />
                  </span>
                  <p className="mb-1 text-truncate">Rescheduled</p>
                  <h3 className="fw-bold mb-2">{additionalStats.rescheduled}</h3>
                  <p className="mb-0 text-success text-truncate">
                    +{additionalStats.rescheduledChange}% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-danger rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-checklist" />
                  </span>
                  <p className="mb-1 text-truncate">Pre Visit Bookings</p>
                  <h3 className="fw-bold mb-2">{additionalStats.preVisit}</h3>
                  <p className="mb-0 text-success text-truncate">
                    +{additionalStats.preVisitChange}% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-info rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-calendar-share" />
                  </span>
                  <p className="mb-1 text-truncate">Walkin Bookings</p>
                  <h3 className="fw-bold mb-2">{additionalStats.walkIn}</h3>
                  <p className="mb-0 text-success text-truncate">
                    +{additionalStats.walkInChange}% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-soft-success text-success rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-carousel-vertical" />
                  </span>
                  <p className="mb-1 text-truncate">Follow Ups</p>
                  <h3 className="fw-bold mb-2">{additionalStats.followUps}</h3>
                  <p className="mb-0 text-success text-truncate">
                    {/* Follow ups percentage - you can add this in backend if needed */}
                    +0% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row start */}
          {/* row start */}
          <div className="row">
            <div className="col-12 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Recent Appointments</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Weekly <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  {/* Table start */}
                  <div className="table-responsive table-nowrap">
                    <table className="table border">
                      <thead className="thead-light">
                        <tr>
                          <th>Patient</th>
                          <th>Date &amp; Time</th>
                          <th>Mode</th>
                          <th>Status</th>
                          <th>Consultation Fees</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {recentAppointments && recentAppointments.length > 0 ? (
                          recentAppointments.map((apt) => (
                            <tr key={apt._id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="avatar me-2">
                                    {apt.patient.profileImage ? (
                                      <img
                                        src={apt.patient.profileImage}
                                        alt={apt.patient.fullName}
                                        className="rounded-circle"
                                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                      />
                                    ) : (
                                      <div
                                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                        style={{ width: '40px', height: '40px' }}
                                      >
                                        {apt.patient.fullName.charAt(0).toUpperCase()}
                                      </div>
                                    )}
                                  </Link>
                                  <div>
                                    <h6 className="fs-14 mb-1">
                                      <Link to="#" className="fw-medium">
                                        {apt.patient.fullName}
                                      </Link>
                                    </h6>
                                    <p className="mb-0 fs-13">{apt.patient.phone || apt.patient.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td>{dayjs(apt.appointmentDate).format('DD MMM YYYY')} - {apt.appointmentTime}</td>
                              <td>{apt.appointmentType}</td>
                              <td>
                                <span className={`badge fw-medium ${apt.status === 'Checked Out' ? 'bg-success' :
                                  apt.status === 'Checked In' ? 'bg-warning' :
                                    apt.status === 'Cancelled' ? 'bg-danger' :
                                      'bg-info'
                                  }`}>
                                  {apt.status}
                                </span>
                              </td>
                              <td className="fw-semibold text-dark">${apt.consultationCharge || 0}</td>
                              <td>
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                  className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                                  title="More options"
                                >
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
                                      <i className="ti ti-eye me-2" />
                                      View
                                    </Link>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="text-center py-4">
                              <div className="d-flex flex-column align-items-center">
                                <i className="ti ti-calendar-x fs-1 text-muted mb-2"></i>
                                <p className="text-muted mb-0">No recent appointments found</p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  {/* Table end */}
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Availability</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Trustcare Clinic <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          CureWell Medical Hub
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Trustcare Clinic
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          NovaCare Medical
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Greeny Medical Clinic
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                      <p className="text-dark fw-semibold mb-0">Mon</p>
                      <p className="mb-0 d-inline-flex align-items-center">
                        <i className="ti ti-clock me-1" />
                        11:00 PM - 12:30 PM
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                      <p className="text-dark fw-semibold mb-0">Tue</p>
                      <p className="mb-0 d-inline-flex align-items-center">
                        <i className="ti ti-clock me-1" />
                        11:00 PM - 12:30 PM
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                      <p className="text-dark fw-semibold mb-0">Wed</p>
                      <p className="mb-0 d-inline-flex align-items-center">
                        <i className="ti ti-clock me-1" />
                        11:00 PM - 12:30 PM
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                      <p className="text-dark fw-semibold mb-0">Thu</p>
                      <p className="mb-0 d-inline-flex align-items-center">
                        <i className="ti ti-clock me-1" />
                        11:00 PM - 12:30 PM
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                      <p className="text-dark fw-semibold mb-0">Fri</p>
                      <p className="mb-0 d-inline-flex align-items-center">
                        <i className="ti ti-clock me-1" />
                        11:00 PM - 12:30 PM
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                      <p className="text-dark fw-semibold mb-0">Sat</p>
                      <p className="mb-0 d-inline-flex align-items-center">
                        <i className="ti ti-clock me-1" />
                        11:00 PM - 12:30 PM
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2 pb-2">
                      <p className="text-dark fw-semibold mb-0">Sun</p>
                      <p className="mb-0 d-inline-flex align-items-center text-danger">
                        <i className="ti ti-clock me-1" />
                        Closed
                      </p>
                    </div>
                    <Link to="#" className="btn btn-light w-100 mt-2 fs-13">
                      Edit Availability
                    </Link>
                  </div> */}

                <div className="card-body">
                  {doctorSchedules && doctorSchedules.length > 0 ? (
                    <>
                      {doctorSchedules.map((schedule, index) => (
                        <div key={index} className="mb-2 border-bottom pb-2">
                          <p className="text-dark fw-semibold mb-1">{schedule.day.slice(0, 3)}</p>
                          {schedule.timeSlots && schedule.timeSlots.length > 0 ? (
                            schedule.timeSlots.map((slot, slotIndex) => (
                              <p key={slotIndex} className="mb-1 d-inline-flex align-items-center ps-3">
                                <i className="ti ti-clock me-1" />
                                {slot.startTime.slice(0, 5)} - {slot.endTime.slice(0, 5)}
                              </p>
                            ))
                          ) : (
                            <p className="mb-0 d-inline-flex align-items-center text-danger ps-3">
                              <i className="ti ti-clock me-1" />
                              Closed
                            </p>
                          )}
                        </div>
                      ))}
                    </>
                  ) : (
                    <p className="text-center text-muted py-3">No schedule available</p>
                  )}
                  <Link to={all_routes.doctorschedule} className="btn btn-light w-100 mt-2 fs-13">
                    Edit Availability
                  </Link>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0 text-truncate">
                    Appointment Statistics
                  </h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {statisticsPeriod.charAt(0).toUpperCase() + statisticsPeriod.slice(1)} <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setStatisticsPeriod('monthly')}>
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setStatisticsPeriod('weekly')}>
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setStatisticsPeriod('yearly')}>
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <CircleChart2 data={appointmentStatistics} />
                  <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
                    <div className="text-center">
                      <p className="d-flex align-items-center mb-1 fs-13">
                        <i className="ti ti-circle-filled text-success fs-10 me-1" />
                        Completed
                      </p>
                      <h5 className="fw-bold mb-0">{appointmentStatistics.completed}</h5>
                    </div>
                    <div className="text-center">
                      <p className="d-flex align-items-center mb-1 fs-13">
                        <i className="ti ti-circle-filled text-warning fs-10 me-1" />
                        Pending
                      </p>
                      <h5 className="fw-bold mb-0">{appointmentStatistics.pending}</h5>
                    </div>
                    <div className="text-center">
                      <p className="d-flex align-items-center mb-1 fs-13">
                        <i className="ti ti-circle-filled text-danger fs-10 me-1" />
                        Cancelled
                      </p>
                      <h5 className="fw-bold mb-0">{appointmentStatistics.cancelled}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Top Patients</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {topPatientsPeriod.charAt(0).toUpperCase() + topPatientsPeriod.slice(1)} <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setTopPatientsPeriod('monthly')}>
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setTopPatientsPeriod('weekly')}>
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setTopPatientsPeriod('yearly')}>
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  {topPatients.length > 0 ? (
                    topPatients.map((patient, index) => (
                      <div key={patient._id} className={`d-flex align-items-center justify-content-between ${index < topPatients.length - 1 ? 'mb-4' : 'mb-0'}`}>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            {patient.profileImage ? (
                              <img
                                src={patient.profileImage.startsWith('http')
                                  ? patient.profileImage
                                  : `${import.meta.env.VITE_BACKEND_URL}${patient.profileImage}`}
                                alt={patient.fullName}
                                className="rounded-circle"
                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const parent = e.currentTarget.parentElement;
                                  if (parent) {
                                    const div = document.createElement('div');
                                    div.className = 'rounded-circle bg-primary text-white';
                                    div.style.cssText = 'width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 16px;';
                                    div.textContent = patient.fullName.charAt(0).toUpperCase();
                                    parent.appendChild(div);
                                  }
                                }}
                              />
                            ) : (
                              <div className="rounded-circle bg-primary text-white" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                                {patient.fullName.charAt(0).toUpperCase()}
                              </div>
                            )}
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link to="#" className="fw-medium">
                                {patient.fullName}
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13 text-truncate">
                              {patient.phone || patient.email}
                            </p>
                          </div>
                        </div>
                        <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                          {patient.appointmentCount} Appointments
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-muted mb-0">No patient data available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row end */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
        {/* Footer End */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
      <Modals
        selectedAppointment={selectedAppointment}
        onAppointmentUpdated={fetchAllData}
      />
    </>
  );
};

export default DoctorDahboard;
