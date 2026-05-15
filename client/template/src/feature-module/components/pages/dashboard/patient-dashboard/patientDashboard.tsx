import { Link } from "react-router";
import Modals from "./modals/modals";
import SCol10Chart from "./chart/scol10Chart";
import SCol8Chart from "./chart/scol8Chart";
import SCol9Chart from "./chart/scol9Chart";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  getPatientStats,
  getMyDoctors,
  getMyPrescriptions,
  getRecentActivity,
  getPatientRecentAppointments,
  getRecentTransactions,
  type PatientStats,
  type MyDoctor,
  type MyPrescription,
  type RecentActivity,
  type PatientAppointment,
  type Transaction,
  getConsultationByDepartment,
  getPatientUpcomingAppointments,
} from "../../../../../api/patientDashboardService";

// ─── Local type for dept chart (backend returns _id, not department) ──────────
type DeptChartData = { _id: string; count: number };


const Avatar = ({ name, image, size = 40 }: { name?: string; image?: string; size?: number }) => {
  const [imgError, setImgError] = useState(false);

  const src = image
    ? (image.startsWith('http') || image.startsWith('data:')
      ? image
      : `${import.meta.env.VITE_BACKEND_URL}${image}`)
    : '';

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={name || ''}
        className="rounded-circle"
        style={{ width: size, height: size, objectFit: 'cover' }}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {name?.charAt(0)?.toUpperCase() || 'D'}
    </div>
  );
};

const PatientDashboard = () => {
  const [stats, setStats] = useState<PatientStats>({
    totalAppointments: 0,
    onlineConsultations: 0,
    upcomingCount: 0,
    cancelledAppointments: 0,
    totalChange: 0,
    onlineChange: 0,
  });
  const [myDoctors, setMyDoctors] = useState<MyDoctor[]>([]);
  const [prescriptions, setPrescriptions] = useState<MyPrescription[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [recentAppointments, setRecentAppointments] = useState<PatientAppointment[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [recentFilter, setRecentFilter] = useState<'today' | 'week' | 'month'>('week');
  const [txFilter, setTxFilter] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');
  const [deptData, setDeptData] = useState<DeptChartData[]>([]);
  const [deptPeriod, setDeptPeriod] = useState<'monthly' | 'weekly' | 'yearly'>('monthly');
  const [selectedAppointment, setSelectedAppointment] = useState<PatientAppointment | null>(null);
  const [upcomingAppointments, setUpcomingAppointments] = useState<PatientAppointment[]>([]);
  const [selectedPrescription, setSelectedPrescription] = useState<MyPrescription | null>(null);
  const [_loading, setLoading] = useState(true);

  useEffect(() => { fetchAllData(); }, []);
  useEffect(() => { fetchRecentAppointments(); }, [recentFilter]);
  useEffect(() => { fetchTransactions(); }, [txFilter]);
  useEffect(() => {
    const fetchDept = async () => {
      try {
        const res = await getConsultationByDepartment(deptPeriod);
        if (res.success) setDeptData(res.data as any);
      } catch (e) { console.error(e); }
    };
    fetchDept();
  }, [deptPeriod]);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [
        statsRes, doctorsRes, prescriptionsRes, activityRes,
        recentRes, txRes, deptRes, upcomingRes,
      ] = await Promise.all([
        getPatientStats(),
        getMyDoctors(),
        getMyPrescriptions(),
        getRecentActivity(),
        getPatientRecentAppointments(recentFilter),
        getRecentTransactions(txFilter),
        getConsultationByDepartment(deptPeriod),
        getPatientUpcomingAppointments(),
      ]);
      if (statsRes.success) setStats(statsRes.data);
      if (doctorsRes.success) setMyDoctors(doctorsRes.data);
      if (prescriptionsRes.success) setPrescriptions(prescriptionsRes.data);
      if (activityRes.success) setRecentActivity(activityRes.data);
      if (recentRes.success) setRecentAppointments(recentRes.data);
      if (txRes.success) setTransactions(txRes.data);
      if (deptRes.success) setDeptData(deptRes.data as any);
      if (upcomingRes.success) setUpcomingAppointments(upcomingRes.data);
    } catch (error) {
      console.error('Error fetching patient dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentAppointments = async () => {
    try {
      const res = await getPatientRecentAppointments(recentFilter);
      if (res.success) setRecentAppointments(res.data);
    } catch (error) { console.error(error); }
  };

  const fetchTransactions = async () => {
    try {
      const res = await getRecentTransactions(txFilter);
      if (res.success) setTransactions(res.data);
    } catch (error) { console.error(error); }
  };

  // ─── Helpers ────────────────────────────────────────────────────────────────

  const getActivityColor = (type: string) => {
    if (type === 'completed') return 'text-success';
    if (type === 'cancelled') return 'text-danger';
    return 'text-warning';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Checked Out': return 'bg-success';
      case 'Checked In': return 'bg-warning';
      case 'Cancelled': return 'bg-danger';
      case 'Confirmed': return 'bg-primary';
      default: return 'bg-info';
    }
  };

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <>
      <div className="page-wrapper">
        <div className="content pb-0">

          {/* ── Page Header ─────────────────────────────────────────────── */}
          <div className="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <h4 className="fw-bold mb-0">Patient Dashboard</h4>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              <Link
                to="#"
                className="btn btn-primary d-inline-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#new_appointment"
              >
                <i className="ti ti-plus me-1" />
                New Appointment
              </Link>
            </div>
          </div>

          {/* ── Stats Row (4 cards — same as dummy UI) ──────────────────── */}
          <div className="row">
            {/* Total Appointments */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <span className="avatar bg-primary rounded-circle fs-20 d-inline-flex flex-shrink-0">
                      <i className="ti ti-calendar-heart" />
                    </span>
                    <div className="ms-2">
                      <p className="mb-1 text-truncate">Total Appointments</p>
                      <h3 className="fw-bold mb-0">{stats.totalAppointments}</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className={`badge fw-medium ${stats.totalChange >= 0 ? 'bg-success' : 'bg-danger'} flex-shrink-0 me-2`}>
                      {stats.totalChange >= 0 ? '+' : ''}{stats.totalChange}%
                    </span>
                    <p className="fs-13 mb-0">in last 7 Days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Consultations */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <span className="avatar bg-danger rounded-circle fs-20 d-inline-flex flex-shrink-0">
                      <i className="ti ti-users" />
                    </span>
                    <div className="ms-2">
                      <p className="mb-1 text-truncate">Online Consultations</p>
                      <h3 className="fw-bold mb-0">{stats.onlineConsultations}</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className={`badge fw-medium ${stats.onlineChange >= 0 ? 'bg-success' : 'bg-danger'} flex-shrink-0 me-2`}>
                      {stats.onlineChange >= 0 ? '+' : ''}{stats.onlineChange}%
                    </span>
                    <p className="fs-13 mb-0">in last 7 Days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Appointments (replacing Blood Pressure — real data) */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1 text-truncate">Upcoming</p>
                      <span className="badge fw-medium bg-primary flex-shrink-0">
                        Scheduled
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <h3 className="fw-bold mb-0 me-1">{stats.upcomingCount}</h3>
                    </div>
                  </div>
                  <div id="s-col-8" className="chart-set">
                    <SCol8Chart />
                  </div>
                </div>
              </div>
            </div>

            {/* Cancelled Appointments (replacing Heart Rate — real data) */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1 text-truncate">Cancelled</p>
                      <span className="badge fw-medium bg-danger flex-shrink-0">
                        Total
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <h3 className="fw-bold mb-0 me-1">{stats.cancelledAppointments}</h3>
                    </div>
                  </div>
                  <div id="s-col-9" className="chart-set">
                    <SCol9Chart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── My Doctors + Prescriptions + Activity (same as dummy) ────── */}
          <div className="row">

            {/* My Doctors */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">My Doctors</h5>
                </div>
                <div className="card-body">
                  {myDoctors.length > 0 ? (
                    myDoctors.slice(0, 5).map((doctor, index) => (
                      <div
                        key={doctor._id}
                        className={`d-flex align-items-center justify-content-between ${index < myDoctors.length - 1 ? 'mb-3' : 'mb-0'}`}
                      >
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            <Avatar name={doctor.fullName} image={doctor.profileImage} />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link to="#" className="fw-semibold">{doctor.fullName}</Link>
                            </h6>
                            <p className="mb-0 fs-13 text-truncate">
                              {doctor.designation || doctor.department || 'Doctor'}
                            </p>
                          </div>
                        </div>
                        <span className="badge fw-medium badge-soft-danger border border-danger flex-shrink-0">
                          {doctor.bookingCount} Bookings
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <i className="ti ti-stethoscope fs-1 text-muted mb-2 d-block"></i>
                      <p className="text-muted mb-0">No doctors yet</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Prescriptions — proper col wrap */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Prescriptions</h5>
                </div>
                <div className="card-body">
                  <div className="overflow-auto">
                    {/* Prescriptions card body — फक्त हा section replace कर */}
                    {prescriptions.length > 0 ? (
                      prescriptions.map((rx, index) => (
                        <div
                          key={rx._id}
                          className={`d-flex align-items-center justify-content-between ${index < prescriptions.length - 1 ? 'mb-3' : 'mb-0'}`}
                        >
                          <div className="d-flex align-items-center flex-shrink-0">
                            <div
                              className="avatar me-2 flex-shrink-0 bg-light rounded-circle text-dark d-flex align-items-center justify-content-center"
                              style={{ width: 40, height: 40 }}
                            >
                              <i className="ti ti-file-description fs-20" />
                            </div>
                            <div>
                              <h6 className="fs-14 mb-1 text-truncate">
                                <span className="fw-semibold">
                                  {rx.doctor?.department
                                    ? `${rx.doctor.department} Prescription`
                                    : rx.prescriptionId || 'Prescription'}
                                </span>
                              </h6>
                              <p className="mb-0 fs-13 text-muted">
                                {rx.doctor?.fullName || 'Doctor'} · {dayjs(rx.prescribedOn || rx.createdAt).format('DD MMM YYYY')}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            {/* View — prescription detail page */}
                            {/* View button — Link नाही, button वापर */}
                            <button
                              className="btn btn-outline-white d-inline-flex align-items-center shadow-sm me-1 p-1"
                              title="View Prescription"
                              onClick={() => {
                                // Prescription details modal show कर
                                setSelectedPrescription(rx);
                              }}
                              data-bs-toggle="modal"
                              data-bs-target="#prescription_modal"
                            >
                              <i className="ti ti-eye" />
                            </button>
                            {/* Download — fileUrl नाही तर disabled */}
                            <button
                              className="btn btn-outline-white d-inline-flex align-items-center shadow-sm p-1"
                              title={rx.fileUrl ? "Download" : "Download not available"}
                              disabled={!rx.fileUrl}
                              onClick={() => {
                                if (rx.fileUrl) {
                                  const url = rx.fileUrl.startsWith('http')
                                    ? rx.fileUrl
                                    : `${import.meta.env.VITE_BACKEND_URL}${rx.fileUrl}`;
                                  window.open(url, '_blank');
                                }
                              }}
                            >
                              <i className="ti ti-download" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <i className="ti ti-file-description fs-1 text-muted mb-2 d-block"></i>
                        <p className="text-muted mb-0">No prescriptions yet</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Recent Activity</h5>
                </div>
                <div className="card-body">
                  {recentActivity.length > 0 ? (
                    <div className="recent-activity">
                      {recentActivity.map((activity, index) => (
                        <div
                          key={activity._id}
                          className={`d-flex align-items-start ${index < recentActivity.length - 1 ? 'mb-3' : 'mb-0'}`}
                        >
                          <span>
                            <i className={`ti ti-point-filled fs-24 ${getActivityColor(activity.type)}`} />
                          </span>
                          <div className="ms-2">
                            <p className="mb-1 text-truncate">
                              {activity.title}{' '}
                              {activity.doctorName !== 'N/A' && (
                                <Link to="#" className="fw-semibold">{activity.doctorName}</Link>
                              )}
                            </p>
                            {activity.description && (
                              <p className="mb-1 fs-13 text-muted text-truncate">{activity.description}</p>
                            )}
                            <p className="fs-13 mb-0 text-muted">
                              {dayjs(activity.date).format('DD MMM YYYY, hh:mm A')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <i className="ti ti-activity fs-1 text-muted mb-2 d-block"></i>
                      <p className="text-muted mb-0">No recent activity</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ── Upcoming Appointments card (below the 3 col row) ─────────── */}
          <div className="card shadow-sm mb-4">
            <div className="card-header">
              <h5 className="fw-bold mb-0">Upcoming Appointments</h5>
            </div>
            <div className="card-body">
              {upcomingAppointments.length > 0 ? (
                upcomingAppointments.map((apt, idx) => (
                  <div
                    key={apt._id}
                    className={`d-flex align-items-center justify-content-between ${idx < upcomingAppointments.length - 1 ? 'mb-3 pb-3 border-bottom' : ''}`}
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-3 flex-shrink-0">
                        <Avatar name={apt.doctor?.fullName} image={apt.doctor?.profileImage} />
                      </div>
                      <div>
                        <h6 className="fs-14 fw-semibold mb-1">{apt.doctor?.fullName || 'Doctor'}</h6>
                        <p className="fs-13 mb-0 text-muted">{apt.doctor?.department || apt.appointmentType}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="fs-13 fw-semibold mb-1">{dayjs(apt.appointmentDate).format('DD MMM YYYY')}</p>
                      <p className="fs-13 mb-1 text-muted">{apt.appointmentTime}</p>
                      <span className={`badge fw-medium ${getStatusBadge(apt.status)}`}>{apt.status}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-3">
                  <i className="ti ti-calendar-check fs-1 text-muted d-block mb-2"></i>
                  <p className="text-muted mb-0">No upcoming appointments</p>
                </div>
              )}
            </div>
          </div>

          {/* ── Consultation By Department + Recent Transactions ─────────── */}
          <div className="row">

            {/* Consultation By Department */}
            <div className="col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Consultation By Department</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {deptPeriod === 'monthly' ? 'Monthly' : deptPeriod === 'weekly' ? 'Weekly' : 'Yearly'}
                      <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      {(['monthly', 'weekly', 'yearly'] as const).map(p => (
                        <li key={p}>
                          <Link className="dropdown-item" to="#" onClick={() => setDeptPeriod(p)}>
                            {p.charAt(0).toUpperCase() + p.slice(1)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div id="s-col-10" className="chart-set">
                    <SCol10Chart data={deptData} />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Recent Transactions</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {txFilter === 'weekly' ? 'Weekly' : txFilter === 'monthly' ? 'Monthly' : 'Yearly'}
                      <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      {(['weekly', 'monthly', 'yearly'] as const).map(f => (
                        <li key={f}>
                          <Link className="dropdown-item" to="#" onClick={() => setTxFilter(f)}>
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-nowrap">
                    <table className="table">
                      <tbody>
                        {transactions.length > 0 ? (
                          transactions.map(tx => (
                            <tr key={tx._id} className="border-white">
                              <td className="ps-0">
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="avatar me-2">
                                    <Avatar
                                      name={tx.doctor?.fullName}
                                      image={tx.doctor?.profileImage}
                                    />
                                  </Link>
                                  <div>
                                    <h6 className="fs-14 mb-1">
                                      <Link to="#" className="fw-semibold">
                                        {tx.doctor?.fullName || 'Doctor'}
                                      </Link>
                                    </h6>
                                    <p className="mb-0 fs-13">
                                      {tx.doctor?.designation || tx.doctor?.department || 'N/A'}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h6 className="fs-14 fw-semibold">Consultation Fees</h6>
                                <p className="fs-13">${tx.amount}</p>
                              </td>
                              <td className="pe-0 text-end">
                                <span className={`badge fs-13 py-1 fw-medium rounded 
                                ${tx.status === 'Completed'
                                    ? 'badge-soft-success border border-success text-success'
                                    : tx.status === 'Cancelled'
                                      ? 'badge-soft-danger border border-danger text-danger'
                                      : tx.status === 'Confirmed'
                                        ? 'badge-soft-primary border border-primary text-primary'
                                        : 'badge-soft-warning border border-warning text-warning'
                                  }`}>
                                  {tx.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={3} className="text-center py-4">
                              <i className="ti ti-receipt-off fs-1 text-muted mb-2 d-block"></i>
                              <p className="text-muted mb-0">No transactions found</p>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Recent Appointments Table ────────────────────────────────── */}
          <div className="card shadow-sm flex-fill w-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="fw-bold mb-0">Recent Appointments</h5>
              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  {recentFilter === 'today' ? 'Today' : recentFilter === 'week' ? 'Weekly' : 'Monthly'}
                  <i className="ti ti-chevron-down ms-1" />
                </Link>
                <ul className="dropdown-menu">
                  {([
                    { value: 'today', label: 'Today' },
                    { value: 'week', label: 'Weekly' },
                    { value: 'month', label: 'Monthly' },
                  ] as const).map(f => (
                    <li key={f.value}>
                      <Link className="dropdown-item" to="#" onClick={() => setRecentFilter(f.value)}>
                        {f.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive table-nowrap">
                <table className="table border">
                  <thead className="thead-light">
                    <tr>
                      <th>Name &amp; Designation</th>
                      <th>Date &amp; Time</th>
                      <th>Consultation Fees</th>
                      <th>Mode</th>
                      <th>Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {recentAppointments.length > 0 ? (
                      recentAppointments.map(apt => (
                        <tr key={apt._id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <Avatar
                                  name={apt.doctor?.fullName}
                                  image={apt.doctor?.profileImage}
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-semibold">
                                    {apt.doctor?.fullName || 'Doctor'}
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">
                                  {apt.doctor?.designation || apt.doctor?.department || 'N/A'}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>{dayjs(apt.appointmentDate).format('DD MMM YYYY')} - {apt.appointmentTime}</td>
                          <td className="fw-semibold text-dark">${apt.consultationCharge || 0}</td>
                          <td>{apt.appointmentType}</td>
                          <td>
                            <span className={`badge fw-medium ${getStatusBadge(apt.status)}`}>
                              {apt.status}
                            </span>
                          </td>
                          <td>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
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
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#edit_appointment"
                                  onClick={() => setSelectedAppointment(apt)}
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
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
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center py-4">
                          <i className="ti ti-calendar-x fs-1 text-muted mb-2 d-block"></i>
                          <p className="text-muted mb-0">No appointments found</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary"> Preclinic</Link>
            , All Rights Reserved
          </p>
        </div>
      </div>


      {/* Prescription View Modal */}
      <div className="modal fade" id="prescription_modal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">
                Prescription — {selectedPrescription?.prescriptionId || 'N/A'}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              {selectedPrescription && (
                <>
                  {/* Header Info */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <p className="mb-1"><strong>Doctor:</strong> {selectedPrescription.doctor?.fullName || 'N/A'}</p>
                      <p className="mb-1"><strong>Department:</strong> {selectedPrescription.doctor?.department || selectedPrescription.department || 'N/A'}</p>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-1"><strong>Prescribed On:</strong> {dayjs(selectedPrescription.prescribedOn || selectedPrescription.createdAt).format('DD MMM YYYY')}</p>
                      <p className="mb-1">
                        <strong>Status:</strong>{' '}
                        <span className={`badge ${selectedPrescription.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                          {selectedPrescription.status || 'Active'}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Medications */}
                  {selectedPrescription.medications && selectedPrescription.medications.length > 0 && (
                    <>
                      <h6 className="fw-bold border-bottom pb-2 mb-3">Medications</h6>
                      <div className="table-responsive mb-3">
                        <table className="table table-bordered table-sm">
                          <thead className="thead-light">
                            <tr>
                              <th>Medicine</th>
                              <th>Dosage</th>
                              <th>Frequency</th>
                              <th>Duration</th>
                              <th>Instructions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedPrescription.medications.map((med: any, i: number) => (
                              <tr key={i}>
                                <td className="fw-semibold">{med.medicineName || '-'}</td>
                                <td>{med.dosage || '-'}</td>
                                <td>{med.frequency || '-'}</td>
                                <td>{med.duration || '-'}</td>
                                <td>{med.instructions || '-'}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}

                  {/* Advice */}
                  {selectedPrescription.advice && selectedPrescription.advice.length > 0 && (
                    <>
                      <h6 className="fw-bold border-bottom pb-2 mb-3">Advice</h6>
                      <ul className="mb-3">
                        {selectedPrescription.advice.map((a: any, i: number) => (
                          <li key={i}>{a.advice || a}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Follow Up */}
                  {selectedPrescription.followUp?.nextConsultation && (
                    <>
                      <h6 className="fw-bold border-bottom pb-2 mb-3">Follow Up</h6>
                      <p className="mb-1">
                        <strong>Next Consultation:</strong>{' '}
                        {dayjs(selectedPrescription.followUp.nextConsultation).format('DD MMM YYYY')}
                      </p>
                      {selectedPrescription.followUp.notes && (
                        <p className="mb-1"><strong>Notes:</strong> {selectedPrescription.followUp.notes}</p>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => window.print()}
              >
                <i className="ti ti-printer me-1" /> Print
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modals
        selectedAppointment={selectedAppointment}
        onAppointmentUpdated={fetchAllData}
      />
    </>
  );
};

export default PatientDashboard;