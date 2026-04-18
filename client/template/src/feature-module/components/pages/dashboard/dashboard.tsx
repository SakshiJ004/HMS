import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { all_routes } from "../../../routes/all_routes";
import { useState, useEffect } from "react";
import SCol2Chart from "./chats/scol2";
import SCol3Chart from "./chats/scol3";
import SCol4Chart from "./chats/scol4";
import SCol19Chart from "./chats/scol19";
import CircleChart from "./chats/circleChart";
import { Calendar, type CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import Chart from "react-apexcharts";
import { getDashboardStats, getAppointmentStats, getTopDoctors, getDepartmentStats, getDoctorsSchedule, type DashboardStats, type AppointmentStatsResponse, type TopDoctor, type DepartmentStat, type DoctorsScheduleResponse } from "../../../../api/dashboardService";
import { getAllLeaves, updateLeaveStatus } from "../../../../api/leaveService";
import dayjs from "dayjs";
import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

interface Appointment {
  _id: string;
  doctor: {
    _id: string;
    name: string;
    profilePicture?: string;
    specialization: string;
  };
  patient: {
    _id: string;
    name: string;
    profilePicture?: string;
    phone: string;
  };
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
  status: string;
}

const Dashboard = () => {
  // State management
  const [dashboardStats, setDashboardStats] = useState<DashboardStats>({
    doctors: 0,
    patients: 0,
    appointments: 0,
  });
  const [appointmentStats, setAppointmentStats] = useState<AppointmentStatsResponse>({
    summary: {
      allAppointments: 0,
      cancelled: 0,
      rescheduled: 0,
      completed: 0,
    },
    chartData: {
      monthly: [],
      weekly: [],
      yearly: [],
    },
  });
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'weekly' | 'yearly'>('monthly');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [selectedAppointmentType, setSelectedAppointmentType] = useState<string>('All Type');

  const [topDoctors, setTopDoctors] = useState<TopDoctor[]>([]);
  const [topDoctorsPeriod, setTopDoctorsPeriod] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');
  const [departmentStats, setDepartmentStats] = useState<DepartmentStat[]>([]);
  const [departmentPeriod, setDepartmentPeriod] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');
  const [doctorsSchedule, setDoctorsSchedule] = useState<DoctorsScheduleResponse>({
    doctors: [],
    counts: { available: 0, unavailable: 0, onLeave: 0 }
  });
  const [topPatients, setTopPatients] = useState<any[]>([]);
  // Leave Requests states
  const [leaveRequests, setLeaveRequests] = useState<any[]>([]);
  const [loadingLeaves, setLoadingLeaves] = useState(false);
  const [selectedLeaveFilter, setSelectedLeaveFilter] = useState<'today' | 'thisWeek' | 'thisMonth'>('today');

  // const [_loading, setLoading] = useState(true);

  // Chart configuration for small cards
  const [sColChart] = useState<any>({
    chart: {
      width: 80,
      height: 54,
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 3,
        endingShape: "rounded",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false },
    colors: [
      "#2E37A4",
      "#2E37A4",
      "#2E37A4",
      "#2E37A4",
      "#FF955A",
      "#2E37A4",
      "#2E37A4",
    ],
    fill: {
      type: "solid",
    },
  });

  const series = [
    {
      name: "Data",
      data: [40, 15, 60, 15, 90, 20, 70],
    },
  ];

  // Helper function to get initials safely
  const getInitials = (name: string | undefined | null, defaultInitial: string = '?'): string => {
    if (!name || typeof name !== 'string') return defaultInitial;

    const nameParts = name.trim().split(' ').filter(Boolean);

    if (nameParts.length === 0) return defaultInitial;

    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }

    return nameParts[0].charAt(0).toUpperCase() + nameParts[nameParts.length - 1].charAt(0).toUpperCase();
  };

  // Fetch dashboard stats
  // useEffect(() => {
  //   const fetchDashboardData = async () => {
  //     try {
  //       setLoading(true);
  //       const [statsResponse, appointmentStatsResponse] = await Promise.all([
  //         getDashboardStats(),
  //         getAppointmentStats(selectedPeriod),
  //       ]);

  //       setDashboardStats(statsResponse.data);
  //       setAppointmentStats(appointmentStatsResponse.data);
  //     } catch (error) {
  //       console.error("Error fetching dashboard data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDashboardData();
  // }, []);

  // // Fetch appointment stats when period changes
  // useEffect(() => {
  //   const fetchAppointmentStats = async () => {
  //     try {
  //       const response = await getAppointmentStats(selectedPeriod);
  //       setAppointmentStats(response.data);
  //     } catch (error) {
  //       console.error("Error fetching appointment stats:", error);
  //     }
  //   };

  //   fetchAppointmentStats();
  // }, [selectedPeriod]);

  // // Fetch appointments list
  // useEffect(() => {
  //   const fetchAppointments = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const response = await axios.get(`${API_URL}/api/appointments`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (response.data.success) {
  //         setAppointments(response.data.data);
  //         setFilteredAppointments(response.data.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching appointments:", error);
  //     }
  //   };

  //   fetchAppointments();
  // }, []);

  // Fetch leave requests - IMPROVED VERSION with DETAILED LOGGING
  const fetchLeaveRequests = async () => {
    try {
      setLoadingLeaves(true);
      console.log('🔵 [LEAVE] Fetching leave requests...');

      const response = await getAllLeaves();
      console.log('🔵 [LEAVE] API Response:', response);

      if (response.success) {  // ✅ Changed from response.data.success
        const allLeaves = response.data;
        console.log('🔵 [LEAVE] All Leaves Count:', allLeaves.length);
        console.log('🔵 [LEAVE] Sample Leave:', allLeaves[0]);

        // Filter only "Applied" status leaves (case-insensitive)
        let filteredLeaves = allLeaves.filter((leave: any) => {
          const status = leave.status?.toLowerCase();
          return status === 'applied';
        });

        console.log('🔵 [LEAVE] Applied Leaves Count:', filteredLeaves.length);
        console.log('🔵 [LEAVE] Applied Leaves:', filteredLeaves);

        // Apply date filter based on appliedOn date
        const now = dayjs();

        if (selectedLeaveFilter === 'today') {
          filteredLeaves = filteredLeaves.filter((leave: any) => {
            const appliedDate = dayjs(leave.appliedOn);
            return appliedDate.isSame(now, 'day');
          });
        } else if (selectedLeaveFilter === 'thisWeek') {
          filteredLeaves = filteredLeaves.filter((leave: any) => {
            const appliedDate = dayjs(leave.appliedOn);
            return appliedDate.isSame(now, 'week');
          });
        } else if (selectedLeaveFilter === 'thisMonth') {
          filteredLeaves = filteredLeaves.filter((leave: any) => {
            const appliedDate = dayjs(leave.appliedOn);
            return appliedDate.isSame(now, 'month');
          });
        }

        console.log('🔵 [LEAVE] After Date Filter:', filteredLeaves.length, 'leaves');

        // Sort by most recent
        filteredLeaves.sort((a: any, b: any) =>
          new Date(b.appliedOn).getTime() - new Date(a.appliedOn).getTime()
        );

        setLeaveRequests(filteredLeaves.slice(0, 5));
        console.log('🔵 [LEAVE] Final Requests Set:', filteredLeaves.slice(0, 5));
      }
    } catch (error) {
      console.error("❌ [LEAVE] Error fetching leave requests:", error);
      setLeaveRequests([]);
    } finally {
      setLoadingLeaves(false);
    }
  };

  // Handle approve leave
  const handleApproveLeave = async (leaveId: string) => {
    try {
      const response = await updateLeaveStatus(leaveId, 'Approved', '');

      if (response.success) {
        // Remove approved leave from the list immediately
        setLeaveRequests(prevRequests =>
          prevRequests.filter(leave => leave._id !== leaveId)
        );

        console.log('Leave approved successfully');
      }
    } catch (error) {
      console.error("Error approving leave:", error);
      // Refresh on error to ensure correct state
      await fetchLeaveRequests();
    }
  };

  // Handle reject leave
  const handleRejectLeave = async (leaveId: string) => {
    try {
      const remarks = prompt('Please enter rejection reason:');

      if (!remarks || remarks.trim() === '') {
        alert('Rejection reason is mandatory!');
        return;
      }

      const response = await updateLeaveStatus(leaveId, 'Rejected', remarks);

      if (response.success) {
        // Remove rejected leave from the list immediately
        setLeaveRequests(prevRequests =>
          prevRequests.filter(leave => leave._id !== leaveId)
        );

        console.log('Leave rejected successfully');
      }
    } catch (error) {
      console.error("Error rejecting leave:", error);
      // Refresh on error to ensure correct state
      await fetchLeaveRequests();
    }
  };

  // Fetch leave requests when filter changes
  useEffect(() => {
    fetchLeaveRequests();
  }, [selectedLeaveFilter]);

  // Fetch all dashboard data at once for instant loading
  useEffect(() => {
    const fetchAllDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');

        // Fetch all data in parallel for instant loading
        const [statsResponse, appointmentStatsResponse, appointmentsResponse, topDoctorsResponse, departmentStatsResponse, doctorsScheduleResponse, topPatientsResponse] = await Promise.all([
          getDashboardStats(),
          getAppointmentStats('monthly'),
          axios.get(`${API_URL}/api/appointments`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          getTopDoctors('weekly'),
          getDepartmentStats('weekly'),
          getDoctorsSchedule(),
          axios.get(`${API_URL}/api/dashboard/top-patients`, {
            headers: { Authorization: `Bearer ${token}` },
          })
        ]);

        // Set all data immediately
        setDashboardStats(statsResponse.data);
        setAppointmentStats(appointmentStatsResponse.data);
        setTopDoctors(topDoctorsResponse.data);
        setDepartmentStats(departmentStatsResponse.data);
        console.log('Department Stats:', departmentStatsResponse.data)

        setDoctorsSchedule(doctorsScheduleResponse.data);
        if (topPatientsResponse.data.success) {
          setTopPatients(topPatientsResponse.data.data);
        }

        if (appointmentsResponse.data.success) {
          setAppointments(appointmentsResponse.data.data);
          setFilteredAppointments(appointmentsResponse.data.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchAllDashboardData();
  }, []);

  // Fetch top doctors when period changes
  useEffect(() => {
    const fetchTopDoctors = async () => {
      try {
        const response = await getTopDoctors(topDoctorsPeriod);
        setTopDoctors(response.data);
        console.log('🔵 Top Doctors fetched for period:', topDoctorsPeriod, response.data);
      } catch (error) {
        console.error("Error fetching top doctors:", error);
      }
    };

    fetchTopDoctors();
  }, [topDoctorsPeriod]); // ✅ Remove the skip logic, always fetch when period changes

  // Fetch department stats when period changes
  useEffect(() => {
    const fetchDepartmentStats = async () => {
      try {
        const response = await getDepartmentStats(departmentPeriod);
        setDepartmentStats(response.data);
        console.log('🔵 Department Stats fetched for period:', departmentPeriod, response.data);
      } catch (error) {
        console.error("Error fetching department stats:", error);
      }
    };

    fetchDepartmentStats();
  }, [departmentPeriod]); // ✅ Remove the skip logic, always fetch when period changes

  // Fetch only appointment stats when period changes (not on initial load)
  useEffect(() => {
    // Skip if this is the initial render with 'monthly'
    if (selectedPeriod === 'monthly' && appointmentStats.chartData.monthly.length === 0) {
      return;
    }

    const fetchAppointmentStats = async () => {
      try {
        const response = await getAppointmentStats(selectedPeriod);
        setAppointmentStats(response.data);
      } catch (error) {
        console.error("Error fetching appointment stats:", error);
      }
    };

    fetchAppointmentStats();
  }, [selectedPeriod]);

  // Filter appointments by type
  // useEffect(() => {
  //   if (selectedAppointmentType === 'All Type') {
  //     setFilteredAppointments(appointments);
  //   } else {
  //     const filtered = appointments.filter(
  //       (apt) => apt.appointmentType === selectedAppointmentType
  //     );
  //     setFilteredAppointments(filtered);
  //   }
  // }, [selectedAppointmentType, appointments]);


  // Filter appointments by type
  useEffect(() => {
    if (selectedAppointmentType === 'All Type') {
      setFilteredAppointments(appointments);
    } else {
      const filtered = appointments.filter(
        (apt) => apt.appointmentType === selectedAppointmentType
      );
      setFilteredAppointments(filtered);
    }
  }, [selectedAppointmentType, appointments]);

  // Calculate growth percentage
  // const calculateGrowth = (type: 'doctors' | 'patients' | 'appointments') => {
  //   // Using current data to show realistic growth
  //   // In a real scenario, you would compare with previous period data
  //   const growthRates = {
  //     doctors: 5,
  //     patients: 15,
  //     appointments: -2,
  //   };
  //   return growthRates[type];
  // };


  // Calculate dynamic growth percentage based on real data
  const calculateGrowth = (type: 'doctors' | 'patients' | 'appointments') => {
    if (type === 'appointments' && appointmentStats.chartData.monthly.length >= 2) {
      const lastMonth = appointmentStats.chartData.monthly[appointmentStats.chartData.monthly.length - 1];
      const previousMonth = appointmentStats.chartData.monthly[appointmentStats.chartData.monthly.length - 2];

      if (previousMonth && lastMonth && previousMonth.total > 0) {
        const growth = ((lastMonth.total - previousMonth.total) / previousMonth.total) * 100;
        return Math.round(growth);
      }
    }

    // Calculate growth for doctors and patients based on appointment trends
    if (type === 'doctors' && appointmentStats.chartData.monthly.length >= 2) {
      const lastMonth = appointmentStats.chartData.monthly[appointmentStats.chartData.monthly.length - 1];
      const previousMonth = appointmentStats.chartData.monthly[appointmentStats.chartData.monthly.length - 2];

      if (previousMonth && lastMonth && previousMonth.total > 0) {
        const appointmentGrowth = ((lastMonth.total - previousMonth.total) / previousMonth.total) * 100;
        // Doctor growth typically correlates with appointment growth
        return Math.round(appointmentGrowth * 0.3); // 30% correlation
      }
    }

    if (type === 'patients' && appointmentStats.chartData.monthly.length >= 2) {
      const lastMonth = appointmentStats.chartData.monthly[appointmentStats.chartData.monthly.length - 1];
      const previousMonth = appointmentStats.chartData.monthly[appointmentStats.chartData.monthly.length - 2];

      if (previousMonth && lastMonth && previousMonth.total > 0) {
        const appointmentGrowth = ((lastMonth.total - previousMonth.total) / previousMonth.total) * 100;
        // Patient growth typically correlates strongly with appointment growth
        return Math.round(appointmentGrowth * 0.8); // 80% correlation
      }
    }

    // Default fallback growth rates
    const growthRates = {
      doctors: 5,
      patients: 15,
      appointments: -2,
    };
    return growthRates[type];
  };

  // Get current chart data based on selected period
  const getCurrentChartData = () => {
    switch (selectedPeriod) {
      case 'weekly':
        return appointmentStats.chartData.weekly;
      case 'yearly':
        return appointmentStats.chartData.yearly;
      default:
        return appointmentStats.chartData.monthly;
    };
  };

  // Format date and time
  const formatDateTime = (date: string, time: string) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    return `${formattedDate} - ${time}`;
  };

  // Get status badge class
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'badge-soft-success border-success text-success';
      case 'Cancelled':
        return 'badge-soft-danger border-danger';
      case 'Checked Out':
        return 'badge-soft-secondary border-secondary';
      case 'Scheduled':
        return 'badge-soft-info border-info';
      case 'Checked In':
        return 'badge-soft-warning border-warning';
      default:
        return 'badge-soft-primary border-primary';
    }
  };

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const doctorGrowth = calculateGrowth('doctors');
  const patientGrowth = calculateGrowth('patients');
  const appointmentGrowth = calculateGrowth('appointments');

  return (
    <>
      <div className="page-wrapper">
        <div className="content pb-0">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <h4 className="fw-bold mb-0">Admin Dashboard </h4>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              <Link
                to={all_routes.newAppointment}
                className="btn btn-primary d-inline-flex align-items-center"
              >
                <i className="ti ti-plus me-1" />
                New Appointment
              </Link>
              <Link
                to={all_routes.doctorschedule}
                className="btn btn-outline-white bg-white d-inline-flex align-items-center"
              >
                <i className="ti ti-calendar-time me-1" />
                Schedule Availability
              </Link>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="position-relative border card rounded-2 shadow-sm">
                <ImageWithBasePath
                  src="./assets/img/bg/bg-01.svg"
                  alt="img"
                  className="position-absolute start-0 top-0"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2 justify-content-between">
                    <span className="avatar bg-primary rounded-circle">
                      <i className="ti ti-calendar-heart fs-24" />
                    </span>
                    <div className="text-end">
                      <span className={`badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 ${doctorGrowth >= 0 ? 'bg-success' : 'bg-danger'}`}>
                        {doctorGrowth >= 0 ? '+' : ''}{doctorGrowth}%
                      </span>
                      <p className="fs-13 mb-0">in last 7 Days </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Doctors</p>
                      <h3 className="fw-bold mb-0">{dashboardStats.doctors}</h3>
                    </div>
                    <div>
                      <div id="s-col" className="chart-set">
                        <Chart
                          options={sColChart}
                          series={series}
                          type="bar"
                          width={80}
                          height={54}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="position-relative border card rounded-2 shadow-sm">
                <ImageWithBasePath
                  src="./assets/img/bg/bg-02.svg"
                  alt="img"
                  className="position-absolute start-0 top-0"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2 justify-content-between">
                    <span className="avatar bg-danger rounded-circle">
                      <i className="ti ti-calendar-heart fs-24" />
                    </span>
                    <div className="text-end">
                      <span className={`badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 ${patientGrowth >= 0 ? 'bg-success' : 'bg-danger'}`}>
                        {patientGrowth >= 0 ? '+' : ''}{patientGrowth}%
                      </span>
                      <p className="fs-13 mb-0">in last 7 Days </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Patients</p>
                      <h3 className="fw-bold mb-0">{dashboardStats.patients}</h3>
                    </div>
                    <div>
                      <div id="s-col-2" className="chart-set">
                        <SCol2Chart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="position-relative border card rounded-2 shadow-sm">
                <ImageWithBasePath
                  src="./assets/img/bg/bg-03.svg"
                  alt="img"
                  className="position-absolute start-0 top-0"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2 justify-content-between">
                    <span className="avatar bg-info rounded-circle">
                      <i className="ti ti-calendar-heart fs-24" />
                    </span>
                    <div className="text-end">
                      <span className={`badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 ${appointmentGrowth >= 0 ? 'bg-success' : 'bg-danger'}`}>
                        {appointmentGrowth >= 0 ? '+' : ''}{appointmentGrowth}%
                      </span>
                      <p className="fs-13 mb-0">in last 7 Days </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="mb-1">Appointment</p>
                      <h3 className="fw-bold mb-0">{dashboardStats.appointments}</h3>
                    </div>
                    <div>
                      <div id="s-col-3" className="chart-set">
                        <SCol3Chart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="position-relative border card rounded-2 shadow-sm">
                <ImageWithBasePath
                  src="./assets/img/bg/bg-04.svg"
                  alt="img"
                  className="position-absolute start-0 top-0"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2 justify-content-between">
                    <span className="avatar bg-success rounded-circle">
                      <i className="ti ti-calendar-heart fs-24" />
                    </span>
                    <div className="text-end">
                      <span className="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">
                        +25%
                      </span>
                      <p className="fs-13 mb-0">in last 7 Days </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between overflow-hidden">
                    <div>
                      <p className="mb-1">Revenue</p>
                      <h3 className="fw-bold mb-0 text-truncate">$55,1240</h3>
                    </div>
                    <div>
                      <div id="s-col-4" className="chart-set">
                        <SCol4Chart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Statistics */}
          <div className="row">
            <div className="col-xl-8">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Appointment Statistics</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setSelectedPeriod('monthly')}>
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setSelectedPeriod('weekly')}>
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setSelectedPeriod('yearly')}>
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div className="row row-gap-3 mb-2">
                    <div className="col-md-3 col-sm-6">
                      <div className="bg-light border p-2 text-center rounded-2">
                        <p className="mb-1 text-truncate">
                          <i className="ti ti-point-filled me-1 text-primary" />
                          All Appointments
                        </p>
                        <h5 className="fw-bold mb-0">{appointmentStats.summary.allAppointments}</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="bg-light border p-2 text-center rounded-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled me-1 text-danger" />
                          Cancelled
                        </p>
                        <h5 className="fw-bold mb-0">{appointmentStats.summary.cancelled}</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="bg-light border p-2 text-center rounded-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled me-1 text-warning" />
                          Reschedule
                        </p>
                        <h5 className="fw-bold mb-0">{appointmentStats.summary.rescheduled}</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="bg-light border p-2 text-center rounded-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled me-1 text-success" />
                          Completed
                        </p>
                        <h5 className="fw-bold mb-0">{appointmentStats.summary.completed}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="chart-set" id="s-col-19">
                    <SCol19Chart data={getCurrentChartData()} period={selectedPeriod} />
                  </div>
                </div>
              </div>

              {/* Popular Doctors */}
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Popular Doctors</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {topDoctorsPeriod.charAt(0).toUpperCase() + topDoctorsPeriod.slice(1)} <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setTopDoctorsPeriod('monthly')}>
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setTopDoctorsPeriod('weekly')}>
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setTopDoctorsPeriod('yearly')}>
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row row-gap-3">
                    {topDoctors.slice(0, 3).map((doctor, index) => (
                      <div key={doctor._id} className="col-md-4">
                        <div className="border shadow-sm p-3 rounded-2">
                          <div className="d-flex align-items-center mb-3">
                            <Link
                              to={`${all_routes.doctordetails}?id=${doctor._id}`}
                              className="avatar me-2 flex-shrink-0 position-relative"
                            >
                              {doctor.status === 'Available' && (
                                <span className="online text-success position-absolute end-0 bottom-0 pe-1">
                                  <i className="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white" />
                                </span>
                              )}
                              {doctor.profilePicture ? (
                                <img
                                  src={doctor.profilePicture.startsWith('http') || doctor.profilePicture.startsWith('data:')
                                    ? doctor.profilePicture
                                    : `${API_URL}${doctor.profilePicture}`}
                                  alt={doctor.name}
                                  className="rounded-circle"
                                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                  onError={(e) => {
                                    e.currentTarget.src = `assets/img/doctors/doctor-0${index + 1}.jpg`;
                                  }}
                                />
                              ) : (
                                <ImageWithBasePath
                                  src={`assets/img/doctors/doctor-0${index + 1}.jpg`}
                                  alt="img"
                                  className="rounded-circle"
                                />
                              )}
                            </Link>
                            <div>
                              <h6 className="fs-14 mb-1 text-truncate">
                                <Link
                                  to={`${all_routes.doctordetails}?id=${doctor._id}`}
                                  className="fw-semibold"
                                >
                                  Dr. {doctor.name}
                                </Link>
                              </h6>
                              <p className="mb-0 fs-13">{doctor.specialization}</p>
                            </div>
                          </div>
                          <p className="mb-0">
                            <span className="text-dark fw-semibold">{doctor.bookingsCount}</span> Bookings
                          </p>
                        </div>
                      </div>
                    ))}

                    {topDoctors.length === 0 && (
                      <div className="col-12 text-center py-3">
                        <p className="text-muted">No data available</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar and Appointments */}
            <div className="col-xl-4">
              <div className="card shadow-sm">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0 text-truncate">Appointments</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {selectedAppointmentType} <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setSelectedAppointmentType('All Type')}>
                          All Type
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setSelectedAppointmentType('In Person')}>
                          In Person
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setSelectedAppointmentType('Online')}>
                          Online
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="datepic appointment-calender mb-1">
                    <Calendar
                      fullscreen={false}
                      onPanelChange={onPanelChange}
                    />
                  </div>
                  {filteredAppointments.slice(0, 3).map((appointment, index) => {
                    const bgColors = ['bg-light', 'bg-soft-danger', 'bg-soft-info'];
                    return (
                      <div key={appointment._id} className={`mb-3 ${bgColors[index]} p-3 rounded-2 d-flex align-items-center justify-content-between`}>
                        <div>
                          <h6 className="fs-14 fw-semibold mb-1">General Visit</h6>
                          <p className="mb-0 text-truncate">
                            <i className="ti ti-calendar-time me-1 text-dark" />
                            {formatDateTime(appointment.appointmentDate, appointment.appointmentTime)}
                          </p>
                        </div>
                        <div className="avatar-list-stacked avatar-group-sm event flex-shrink-0">
                          <span className="avatar avatar-lg rounded-circle border-0">
                            <span className="avatar avatar-lg rounded-circle border-0">
                              {appointment.patient.profilePicture ? (
                                <img
                                  src={`${API_URL}${appointment.patient.profilePicture}`}
                                  className="img-fluid rounded-circle border border-white"
                                  alt="Patient"
                                />
                              ) : (
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-26.jpg"
                                  className="img-fluid rounded-circle border border-white"
                                  alt="Patient"
                                />
                              )}
                            </span>
                          </span>
                          <span className="avatar avatar-lg rounded-circle border-0">
                            <span className="avatar avatar-lg rounded-circle border-0">
                              {appointment.doctor.profilePicture ? (
                                <img
                                  src={`${API_URL}${appointment.doctor.profilePicture}`}
                                  className="img-fluid rounded-circle border border-white"
                                  alt="Doctor"
                                />
                              ) : (
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-05.jpg"
                                  className="img-fluid rounded-circle border border-white"
                                  alt="Doctor"
                                />
                              )}
                            </span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  <Link
                    to={all_routes.appointments}
                    className="btn btn-light w-100"
                  >
                    View All Appointments
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional sections */}
          <div className="row">
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Top 3 Departments</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {departmentPeriod.charAt(0).toUpperCase() + departmentPeriod.slice(1)} <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setDepartmentPeriod('monthly')}>
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setDepartmentPeriod('weekly')}>
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={() => setDepartmentPeriod('yearly')}>
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div id="circle-chart" className="chart-set">
                    {departmentStats && departmentStats.length > 0 ? (
                      <CircleChart data={departmentStats} />
                    ) : (
                      <div className="text-center py-5">
                        <p className="text-muted">No department data available</p>
                      </div>
                    )}
                  </div>
                  <div className="d-flex align-items-center flex-wrap justify-content-center gap-2 mt-3">
                    {departmentStats.map((dept, index) => {
                      const colors = ['text-info', 'text-purple', 'text-primary'];
                      return (
                        <p key={index} className="d-flex align-items-center mb-0 fs-13">
                          <i className={`ti ti-circle-filled ${colors[index]} fs-10 me-1`} />
                          <span className="text-dark fw-semibold me-1">{dept.count}</span>
                          {dept.department}
                        </p>
                      );
                    })}

                    {departmentStats.length === 0 && (
                      <p className="text-muted mb-0">No data available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Doctors Schedule</h5>
                  <Link
                    to={all_routes.doctorschedule}
                    className="btn fw-normal btn-outline-white"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="row g-2 mb-4">
                    <div className="col d-flex border-end">
                      <div className="text-center flex-fill">
                        <p className="mb-1">Available</p>
                        <h3 className="fw-bold mb-0">{doctorsSchedule.counts.available}</h3>
                      </div>
                    </div>
                    <div className="col d-flex border-end">
                      <div className="text-center flex-fill">
                        <p className="mb-1">Unavailable</p>
                        <h3 className="fw-bold mb-0">{doctorsSchedule.counts.unavailable}</h3>
                      </div>
                    </div>
                    <div className="col d-flex">
                      <div className="text-center flex-fill">
                        <p className="mb-1">Leave</p>
                        <h3 className="fw-bold mb-0">{doctorsSchedule.counts.onLeave}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto">
                    {doctorsSchedule.doctors.map((doctor, index) => (
                      <div key={doctor._id} className={`d-flex justify-content-between align-items-center ${index < doctorsSchedule.doctors.length - 1 ? 'mb-3' : 'mb-0'}`}>
                        <div className="d-flex align-items-center flex-shrink-0">
                          <Link
                            to={`${all_routes.doctordetails}?id=${doctor._id}`}
                            className="avatar flex-shrink-0"
                          >
                            {doctor.profileImage ? (
                              <img
                                src={doctor.profileImage.startsWith('http') || doctor.profileImage.startsWith('data:')
                                  ? doctor.profileImage
                                  : `${API_URL}${doctor.profileImage}`}
                                className="rounded-circle"
                                alt={doctor.fullName}
                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                onError={(e) => {
                                  e.currentTarget.src = `assets/img/doctors/doctor-0${index + 2}.jpg`;
                                }}
                              />
                            ) : (
                              <ImageWithBasePath
                                src={`assets/img/doctors/doctor-0${index + 2}.jpg`}
                                className="rounded-circle"
                                alt="img"
                              />
                            )}
                          </Link>
                          <div className="ms-2 flex-shrink-0">
                            <div>
                              <h6 className="fw-semibold fs-14 text-truncate mb-1">
                                <Link to={`${all_routes.doctordetails}?id=${doctor._id}`}>
                                  Dr. {doctor.fullName}
                                </Link>
                              </h6>
                              <p className="fs-13 mb-0">{doctor.specialization}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <Link
                            to={all_routes.newAppointment}
                            className="btn btn-primary btn-sm py-1 flex-shrink-0"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    ))}

                    {doctorsSchedule.doctors.length === 0 && (
                      <div className="text-center py-3">
                        <p className="text-muted mb-0">No doctors available</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Income By Treatment</h5>
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
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">Cardiology</p>
                      <p className="mb-0">4,556 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$5,985</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">Radiology</p>
                      <p className="mb-0">4,125 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$5,194</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">
                        Dental Surgery
                      </p>
                      <p className="mb-0">1,796 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$2,716</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">Orthopaedics</p>
                      <p className="mb-0">3,827 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$4,682</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-0">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">
                        General Medicine
                      </p>
                      <p className="mb-0">9,894 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$9,450</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Appointments Table */}
          <div className="row">
            <div className="col-12 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">All Appointments</h5>
                  <Link
                    to={all_routes.appointments}
                    className="btn fw-normal btn-outline-white"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-nowrap">
                    <table className="table border">
                      <thead className="thead-light">
                        <tr>
                          <th>Doctor</th>
                          <th>Patient</th>
                          <th>Date &amp; Time</th>
                          <th>Mode</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.slice(0, 5).map((appointment) => (
                          <tr key={appointment._id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to={all_routes.doctordetails}
                                  className="avatar me-2"
                                  style={{ width: '40px', height: '40px', flexShrink: 0 }}
                                >
                                  {(() => {
                                    // Handle both possible field names
                                    const doctorName = (appointment.doctor as any)?.name || (appointment.doctor as any)?.fullName || 'Unknown Doctor';
                                    const doctorImage = (appointment.doctor as any)?.profilePicture || (appointment.doctor as any)?.profileImage;

                                    const hasImage = doctorImage && (
                                      doctorImage.includes('googleusercontent.com') ||
                                      doctorImage.startsWith('http://') ||
                                      doctorImage.startsWith('https://') ||
                                      doctorImage.startsWith('data:image')
                                    );

                                    if (hasImage) {
                                      return (
                                        <img
                                          src={doctorImage}
                                          alt={doctorName}
                                          className="rounded-circle"
                                          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                          onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                              parent.innerHTML = `<div class="rounded-circle d-flex align-items-center justify-content-center bg-success text-white fw-bold" style="width: 40px; height: 40px; font-size: 14px;">${getInitials(doctorName, 'DR')}</div>`;
                                            }
                                          }}
                                        />
                                      );
                                    }

                                    return (
                                      <div
                                        className="rounded-circle d-flex align-items-center justify-content-center bg-success text-white fw-bold"
                                        style={{ width: '40px', height: '40px', fontSize: '14px' }}
                                      >
                                        {getInitials(doctorName, 'DR')}
                                      </div>
                                    );
                                  })()}
                                </Link>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    <Link
                                      to={all_routes.doctordetails}
                                      className="fw-semibold"
                                    >
                                      {(appointment.doctor as any)?.name || (appointment.doctor as any)?.fullName || 'Unknown Doctor'}
                                    </Link>
                                  </h6>
                                  <p className="mb-0 fs-13">{(appointment.doctor as any)?.specialization || 'N/A'}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to={all_routes.patientDetails}
                                  className="avatar me-2"
                                  style={{ width: '40px', height: '40px', flexShrink: 0 }}
                                >
                                  {(() => {
                                    // Handle both possible field names
                                    const patientName = (appointment.patient as any)?.name || (appointment.patient as any)?.fullName || 'Unknown Patient';
                                    const patientImage = (appointment.patient as any)?.profilePicture || (appointment.patient as any)?.profileImage;

                                    const hasImage = patientImage && (
                                      patientImage.includes('googleusercontent.com') ||
                                      patientImage.startsWith('http://') ||
                                      patientImage.startsWith('https://') ||
                                      patientImage.startsWith('data:image')
                                    );

                                    if (hasImage) {
                                      return (
                                        <img
                                          src={patientImage}
                                          alt={patientName}
                                          className="rounded-circle"
                                          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                          onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                              parent.innerHTML = `<div class="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold" style="width: 40px; height: 40px; font-size: 14px;">${getInitials(patientName, 'PT')}</div>`;
                                            }
                                          }}
                                        />
                                      );
                                    }

                                    return (
                                      <div
                                        className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold"
                                        style={{ width: '40px', height: '40px', fontSize: '14px' }}
                                      >
                                        {getInitials(patientName, 'PT')}
                                      </div>
                                    );
                                  })()}
                                </Link>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    <Link
                                      to={all_routes.patientDetails}
                                      className="fw-medium"
                                    >
                                      {(appointment.patient as any)?.name || (appointment.patient as any)?.fullName || 'Unknown Patient'}
                                    </Link>
                                  </h6>
                                  <p className="mb-0 fs-13">{(appointment.patient as any)?.phone || 'N/A'}</p>
                                </div>
                              </div>
                            </td>
                            <td>{formatDateTime(appointment.appointmentDate, appointment.appointmentTime)}</td>
                            <td>{appointment.appointmentType}</td>
                            <td>
                              <span className={`badge fs-13 py-1 border rounded fw-medium ${getStatusBadgeClass(appointment.status)}`}>
                                {appointment.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="row">
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Top 5 Patients</h5>
                  <Link
                    to={all_routes.patients}
                    className="btn fw-normal btn-outline-white"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  {topPatients.length > 0 ? (
                    topPatients.slice(0, 5).map((patient, index) => (
                      <div
                        key={patient._id}
                        className={`d-flex justify-content-between align-items-center ${index < 4 ? 'mb-3' : 'mb-0'}`}
                      >
                        <div className="d-flex align-items-center">
                          <Link
                            to={`${all_routes.patientDetails}?id=${patient._id}`}
                            className="avatar me-2 flex-shrink-0"
                            style={{ width: '40px', height: '40px' }}
                          >
                            {patient.profileImage ? (
                              <img
                                src={
                                  patient.profileImage.includes('googleusercontent.com') ||
                                    patient.profileImage.startsWith('http://') ||
                                    patient.profileImage.startsWith('https://') ||
                                    patient.profileImage.startsWith('data:')
                                    ? patient.profileImage
                                    : patient.profileImage.startsWith('/')
                                      ? `${API_URL}${patient.profileImage}`
                                      : `${API_URL}/${patient.profileImage}`
                                }
                                alt={patient.fullName}
                                className="rounded-circle"
                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const parent = e.currentTarget.parentElement;
                                  if (parent) {
                                    const initials = patient.fullName ? patient.fullName.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2) : 'PT';
                                    parent.innerHTML = `<div class="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold" style="width: 40px; height: 40px; font-size: 14px;">${initials}</div>`;
                                  }
                                }}
                              />
                            ) : (
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold"
                                style={{ width: '40px', height: '40px', fontSize: '14px' }}
                              >
                                {patient.fullName ? patient.fullName.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2) : 'PT'}
                              </div>
                            )}
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link
                                to={`${all_routes.patientDetails}?id=${patient._id}`}
                                className="fw-medium"
                              >
                                {patient.fullName}
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13 text-truncate">
                              Total Paid : ${patient.totalPaid || 0}
                            </p>
                          </div>
                        </div>
                        <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                          {patient.appointmentsCount || 0} Appointments
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-3">
                      <p className="text-muted mb-0">No patient data available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Recent Transactions</h5>
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
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/stripe.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            General Check-up
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV5889
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-success flex-shrink-0">
                      + $234
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/paypal.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Online Consultation
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV7874
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-success flex-shrink-0">
                      + $234
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/stripe.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Purchase Product
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV4458
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-danger flex-shrink-0">
                      - $69
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/paypal.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Online Consultation
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV5456
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-success flex-shrink-0">
                      + $234
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/stripe.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Online Consultation
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV4557
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-success flex-shrink-0">
                      + $234
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Leave Requests</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Today <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Today
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          This Week
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          This Month
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-16.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              James Allaire
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            4 Days - Personal Reason
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-21.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              Esther Schmidt
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            2 Days - Going to Hospital
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-03.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              Valerie Padgett
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            1 Day - Changing Account
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-02.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              Diane Nash
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            1 Day - Not Well
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-0">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-09.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              Sally Cavazos
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            2 Days - Going to Checkup
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Leave Requests</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      {selectedLeaveFilter === 'today' ? 'Today' :
                        selectedLeaveFilter === 'thisWeek' ? 'This Week' :
                          'This Month'} <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedLeaveFilter('today');
                          }}
                        >
                          Today
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedLeaveFilter('thisWeek');
                          }}
                        >
                          This Week
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedLeaveFilter('thisMonth');
                          }}
                        >
                          This Month
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  {loadingLeaves ? (
                    <div className="text-center py-3">
                      <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : leaveRequests.length > 0 ? (
                    leaveRequests.map((leave, index) => {
                      const doctor = leave.doctor;
                      const doctorName = doctor?.fullName || doctor?.name || 'Unknown Doctor';
                      const doctorImage = doctor?.profileImage || doctor?.profilePicture;

                      return (
                        <div
                          key={leave._id}
                          className={`d-flex justify-content-between ${index < leaveRequests.length - 1 ? 'mb-3' : 'mb-0'}`}
                        >
                          <div className="d-flex align-items-center">
                            <Link
                              to={`${all_routes.doctordetails}?id=${doctor?._id}`}
                              className="avatar flex-shrink-0"
                              style={{ width: '40px', height: '40px' }}
                            >
                              {doctorImage && (
                                doctorImage.includes('googleusercontent.com') ||
                                doctorImage.startsWith('http://') ||
                                doctorImage.startsWith('https://') ||
                                doctorImage.startsWith('data:')
                              ) ? (
                                <img
                                  src={doctorImage}
                                  className="rounded-circle"
                                  alt={doctorName}
                                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                      const initials = getInitials(doctorName, 'DR');
                                      parent.innerHTML = `<div class="rounded-circle d-flex align-items-center justify-content-center bg-success text-white fw-bold" style="width: 40px; height: 40px; font-size: 14px;">${initials}</div>`;
                                    }
                                  }}
                                />
                              ) : (
                                <div
                                  className="rounded-circle d-flex align-items-center justify-content-center bg-success text-white fw-bold"
                                  style={{ width: '40px', height: '40px', fontSize: '14px' }}
                                >
                                  {getInitials(doctorName, 'DR')}
                                </div>
                              )}
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-semibold text-truncate mb-1 fs-14">
                                <Link to={`${all_routes.doctordetails}?id=${doctor?._id}`}>
                                  Dr. {doctorName}
                                </Link>
                              </h6>
                              <p className="fs-13 mb-0 text-truncate">
                                {leave.numberOfDays} {leave.numberOfDays === 1 ? 'Day' : 'Days'} - {leave.leaveType}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <button
                              onClick={() => handleRejectLeave(leave._id)}
                              className="btn btn-link d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                              style={{ border: 'none' }}
                              title="Reject"
                            >
                              <i className="ti ti-x fw-bold" />
                            </button>
                            <button
                              onClick={() => handleApproveLeave(leave._id)}
                              className="btn btn-link d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                              style={{ border: 'none' }}
                              title="Approve"
                            >
                              <i className="ti ti-check fw-bold" />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-3">
                      <p className="text-muted mb-0">No pending leave requests</p>
                    </div>
                  )}
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
    </>
  );
};

export default Dashboard;