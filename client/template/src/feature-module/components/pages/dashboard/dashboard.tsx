// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../core/imageWithBasePath";
// import { all_routes } from "../../../routes/all_routes";
// import { useState } from "react";
// import Chart from "react-apexcharts";
// import SCol2Chart from "./chats/scol2";
// import SCol3Chart from "./chats/scol3";
// import SCol4Chart from "./chats/scol4";
// import SCol19Chart from "./chats/scol19";
// import CircleChart from "./chats/circleChart";
// import { Calendar, type CalendarProps } from "antd";
// import type { Dayjs } from "dayjs";

// const Dashboard = () => {
//   const [sColChart] = useState<any>({
//     chart: {
//       width: 80,
//       height: 54,
//       type: "bar",
//       toolbar: { show: false },
//       sparkline: { enabled: true },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "70%",
//         borderRadius: 3,
//         endingShape: "rounded",
//       },
//     },
//     dataLabels: { enabled: false },
//     stroke: { show: false },
//     xaxis: {
//       labels: { show: false },
//       axisTicks: { show: false },
//       axisBorder: { show: false },
//     },
//     yaxis: { show: false },
//     grid: { show: false },
//     tooltip: { enabled: false },
//     colors: [
//       "#2E37A4", // default color
//       "#2E37A4",
//       "#2E37A4",
//       "#2E37A4",
//       "#FF955A", // highlighted bar
//       "#2E37A4",
//       "#2E37A4",
//     ],
//     fill: {
//       type: "solid",
//     },
//   });

//   const series = [
//     {
//       name: "Data",
//       data: [40, 15, 60, 15, 90, 20, 70], // y-values
//     },
//   ];

//   const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
//     console.log(value.format("YYYY-MM-DD"), mode);
//   };
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content pb-0">
//           {/* Page Header */}
//           <div className="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4">
//             <div>
//               <h4 className="fw-bold mb-0">Admin Dashboard </h4>
//             </div>
//             <div className="d-flex align-items-center flex-wrap gap-2">
//               <Link
//                 to={all_routes.newAppointment}
//                 className="btn btn-primary d-inline-flex align-items-center"
//               >
//                 <i className="ti ti-plus me-1" />
//                 New Appointment
//               </Link>
//               <Link
//                 to={all_routes.doctorschedule}
//                 className="btn btn-outline-white bg-white d-inline-flex align-items-center"
//               >
//                 <i className="ti ti-calendar-time me-1" />
//                 Schedule Availability
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/* start row */}
//           <div className="row">
//             <div className="col-xl-3 col-md-6">
//               <div className="position-relative border card rounded-2 shadow-sm">
//                 <ImageWithBasePath
//                   src="./assets/img/bg/bg-01.svg"
//                   alt="img"
//                   className="position-absolute start-0 top-0"
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center mb-2 justify-content-between">
//                     <span className="avatar bg-primary rounded-circle">
//                       <i className="ti ti-calendar-heart fs-24" />
//                     </span>
//                     <div className="text-end">
//                       <span className="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">
//                         +95%
//                       </span>
//                       <p className="fs-13 mb-0">in last 7 Days </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p className="mb-1">Doctors</p>
//                       <h3 className="fw-bold mb-0">247</h3>
//                     </div>
//                     <div>
//                       <div id="s-col" className="chart-set">
//                         <Chart
//                           options={sColChart}
//                           series={series}
//                           type="bar"
//                           width={80}
//                           height={54}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end col */}
//             <div className="col-xl-3 col-md-6">
//               <div className="position-relative border card rounded-2 shadow-sm">
//                 <ImageWithBasePath
//                   src="./assets/img/bg/bg-02.svg"
//                   alt="img"
//                   className="position-absolute start-0 top-0"
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center mb-2 justify-content-between">
//                     <span className="avatar bg-danger rounded-circle">
//                       <i className="ti ti-calendar-heart fs-24" />
//                     </span>
//                     <div className="text-end">
//                       <span className="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">
//                         +25%
//                       </span>
//                       <p className="fs-13 mb-0">in last 7 Days </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p className="mb-1">Patients</p>
//                       <h3 className="fw-bold mb-0">4178</h3>
//                     </div>
//                     <div>
//                       <div id="s-col-2" className="chart-set">
//                         <SCol2Chart />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end col */}
//             <div className="col-xl-3 col-md-6">
//               <div className="position-relative border card rounded-2 shadow-sm">
//                 <ImageWithBasePath
//                   src="./assets/img/bg/bg-03.svg"
//                   alt="img"
//                   className="position-absolute start-0 top-0"
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center mb-2 justify-content-between">
//                     <span className="avatar bg-info rounded-circle">
//                       <i className="ti ti-calendar-heart fs-24" />
//                     </span>
//                     <div className="text-end">
//                       <span className="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-danger">
//                         -15%
//                       </span>
//                       <p className="fs-13 mb-0">in last 7 Days </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p className="mb-1">Appointment</p>
//                       <h3 className="fw-bold mb-0">12178</h3>
//                     </div>
//                     <div>
//                       <div id="s-col-3" className="chart-set">
//                         <SCol3Chart />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end col */}
//             <div className="col-xl-3 col-md-6">
//               <div className="position-relative border card rounded-2 shadow-sm">
//                 <ImageWithBasePath
//                   src="./assets/img/bg/bg-04.svg"
//                   alt="img"
//                   className="position-absolute start-0 top-0"
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center mb-2 justify-content-between">
//                     <span className="avatar bg-success rounded-circle">
//                       <i className="ti ti-calendar-heart fs-24" />
//                     </span>
//                     <div className="text-end">
//                       <span className="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">
//                         +25%
//                       </span>
//                       <p className="fs-13 mb-0">in last 7 Days </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between overflow-hidden">
//                     <div>
//                       <p className="mb-1">Revenue</p>
//                       <h3 className="fw-bold mb-0 text-truncate">$55,1240</h3>
//                     </div>
//                     <div>
//                       <div id="s-col-4" className="chart-set">
//                         <SCol4Chart />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* end col */}
//           </div>
//           {/* end row */}
//           {/* row start */}
//           <div className="row">
//             {/* col start */}
//             <div className="col-xl-8">
//               {/* card start */}
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Appointment Statistics</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       Monthly <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Monthly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Weekly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Yearly
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body pb-0">
//                   <div className="row row-gap-3 mb-2">
//                     <div className="col-md-3 col-sm-6">
//                       <div className="bg-light border p-2 text-center rounded-2">
//                         <p className="mb-1 text-truncate">
//                           <i className="ti ti-point-filled me-1 text-primary" />
//                           All Appointments
//                         </p>
//                         <h5 className="fw-bold mb-0">6314</h5>
//                       </div>
//                     </div>
//                     <div className="col-md-3 col-sm-6">
//                       <div className="bg-light border p-2 text-center rounded-2">
//                         <p className="mb-1">
//                           <i className="ti ti-point-filled me-1 text-danger" />
//                           Cancelled
//                         </p>
//                         <h5 className="fw-bold mb-0">456</h5>
//                       </div>
//                     </div>
//                     <div className="col-md-3 col-sm-6">
//                       <div className="bg-light border p-2 text-center rounded-2">
//                         <p className="mb-1">
//                           <i className="ti ti-point-filled me-1 text-warning" />
//                           Reschedule
//                         </p>
//                         <h5 className="fw-bold mb-0">745</h5>
//                       </div>
//                     </div>
//                     <div className="col-md-3 col-sm-6">
//                       <div className="bg-light border p-2 text-center rounded-2">
//                         <p className="mb-1">
//                           <i className="ti ti-point-filled me-1 text-success" />
//                           Completed
//                         </p>
//                         <h5 className="fw-bold mb-0">4578</h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="chart-set" id="s-col-19">
//                     <SCol19Chart />
//                   </div>
//                 </div>
//               </div>
//               {/* card end */}
//               {/* card start */}
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Popular Doctors</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       Weekly <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Monthly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Weekly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Yearly
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div className="row row-gap-3">
//                     <div className="col-md-4">
//                       <div className="border shadow-sm p-3 rounded-2">
//                         <div className="d-flex align-items-center mb-3">
//                           <Link
//                             to={all_routes.doctordetails}
//                             className="avatar me-2 flex-shrink-0 position-relative"
//                           >
//                             <span className="online text-success position-absolute end-0 bottom-0 pe-1">
//                               <i className="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white" />
//                             </span>
//                             <ImageWithBasePath
//                               src="assets/img/doctors/doctor-01.jpg"
//                               alt="img"
//                               className="rounded-circle"
//                             />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1 text-truncate">
//                               <Link
//                                 to={all_routes.doctordetails}
//                                 className="fw-semibold"
//                               >
//                                 Dr. Alex Morgan
//                               </Link>
//                             </h6>
//                             <p className="mb-0 fs-13">Cardiologist</p>
//                           </div>
//                         </div>
//                         <p className="mb-0">
//                           <span className="text-dark fw-semibold">258</span>
//                           Bookings
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="border shadow-sm p-3 rounded-2">
//                         <div className="d-flex align-items-center mb-3">
//                           <Link
//                             to={all_routes.doctordetails}
//                             className="avatar me-2 flex-shrink-0 position-relative"
//                           >
//                             <span className="online text-success position-absolute end-0 bottom-0 pe-1">
//                               <i className="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white" />
//                             </span>
//                             <ImageWithBasePath
//                               src="assets/img/doctors/doctor-03.jpg"
//                               alt="img"
//                               className="rounded-circle"
//                             />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1 text-truncate">
//                               <Link
//                                 to={all_routes.doctordetails}
//                                 className="fw-semibold"
//                               >
//                                 Dr. Emily Carter
//                               </Link>
//                             </h6>
//                             <p className="mb-0 fs-13">Pediatrician</p>
//                           </div>
//                         </div>
//                         <p className="mb-0">
//                           <span className="text-dark fw-semibold">125</span>
//                           Bookings
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="border shadow-sm p-3 rounded-2">
//                         <div className="d-flex align-items-center mb-3">
//                           <Link
//                             to={all_routes.doctordetails}
//                             className="avatar me-2 flex-shrink-0 position-relative"
//                           >
//                             <ImageWithBasePath
//                               src="assets/img/doctors/doctor-04.jpg"
//                               alt="img"
//                               className="rounded-circle"
//                             />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1 text-truncate">
//                               <Link
//                                 to={all_routes.doctordetails}
//                                 className="fw-semibold"
//                               >
//                                 Dr. David Lee
//                               </Link>
//                             </h6>
//                             <p className="mb-0 fs-13">Gynecologist</p>
//                           </div>
//                         </div>
//                         <p className="mb-0">
//                           <span className="text-dark fw-semibold">115</span>
//                           Bookings
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* card end */}
//             </div>
//             {/* col end */}
//             {/* col start */}
//             <div className="col-xl-4">
//               <div className="card shadow-sm">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0 text-truncate">Appointments</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       All Type <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           In Person
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Online
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div className="datepic appointment-calender mb-1">
//                     <Calendar
//                       fullscreen={false}
//                       onPanelChange={onPanelChange}
//                     />
//                   </div>
//                   <div className="mb-3 bg-light p-3 rounded-2 d-flex align-items-center justify-content-between">
//                     <div>
//                       <h6 className="fs-14 fw-semibold mb-1">General Visit</h6>
//                       <p className="mb-0 text-truncate">
//                         <i className="ti ti-calendar-time me-1 text-dark" />
//                         Wed, 05 Apr 2025, 06:30 PM
//                       </p>
//                     </div>
//                     <div className="avatar-list-stacked avatar-group-sm event flex-shrink-0">
//                       <span className="avatar avatar-lg rounded-circle border-0">
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-26.jpg"
//                           className="img-fluid rounded-circle border border-white"
//                           alt="Img"
//                         />
//                       </span>
//                       <span className="avatar avatar-lg rounded-circle border-0">
//                         <ImageWithBasePath
//                           src="assets/img/doctors/doctor-05.jpg"
//                           className="img-fluid rounded-circle border border-white"
//                           alt="Img"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                   <div className="mb-3 bg-soft-danger p-3 rounded-2 d-flex align-items-center justify-content-between">
//                     <div>
//                       <h6 className="fs-14 fw-semibold mb-1">General Visit</h6>
//                       <p className="mb-0 text-truncate">
//                         <i className="ti ti-calendar-time me-1 text-dark" />
//                         Wed, 05 Apr 2025, 04:10 PM
//                       </p>
//                     </div>
//                     <div className="avatar-list-stacked avatar-group-sm event flex-shrink-0">
//                       <span className="avatar avatar-lg rounded-circle border-0">
//                         <ImageWithBasePath
//                           src="assets/img/users/user-17.jpg"
//                           className="img-fluid rounded-circle border border-white"
//                           alt="Img"
//                         />
//                       </span>
//                       <span className="avatar avatar-lg rounded-circle border-0">
//                         <ImageWithBasePath
//                           src="assets/img/doctors/doctor-10.jpg"
//                           className="img-fluid rounded-circle border border-white"
//                           alt="Img"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                   <div className="mb-3 bg-soft-info p-3 rounded-2 d-flex align-items-center justify-content-between">
//                     <div>
//                       <h6 className="fs-14 fw-semibold mb-1">General Visit</h6>
//                       <p className="mb-0 text-truncate">
//                         <i className="ti ti-calendar-time me-1 text-dark" />
//                         Wed, 05 Apr 2025, 10:00 AM
//                       </p>
//                     </div>
//                     <div className="avatar-list-stacked avatar-group-sm event flex-shrink-0">
//                       <span className="avatar avatar-lg rounded-circle border-0">
//                         <ImageWithBasePath
//                           src="assets/img/users/user-16.jpg"
//                           className="img-fluid rounded-circle border border-white"
//                           alt="Img"
//                         />
//                       </span>
//                       <span className="avatar avatar-lg rounded-circle border-0">
//                         <ImageWithBasePath
//                           src="assets/img/doctors/doctor-09.jpg"
//                           className="img-fluid rounded-circle border border-white"
//                           alt="Img"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                   <Link
//                     to={all_routes.appointments}
//                     className="btn btn-light w-100"
//                   >
//                     View All Appointments
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             {/* col end */}
//           </div>
//           {/* end row */}
//           {/* start row */}
//           <div className="row">
//             {/* col start */}
//             <div className="col-xl-4 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Top 3 Departments</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       Weekly <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Monthly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Weekly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Yearly
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div id="circle-chart" className="chart-set">
//                     <CircleChart />
//                   </div>
//                   <div className="d-flex align-items-center flex-wrap justify-content-center gap-2 mt-3">
//                     <p className="d-flex align-items-center mb-0 fs-13">
//                       <i className="ti ti-circle-filled text-info fs-10 me-1" />
//                       <span className="text-dark fw-semibold me-1">214</span>
//                       Cardiology
//                     </p>
//                     <p className="d-flex align-items-center mb-0 fs-13">
//                       <i className="ti ti-circle-filled text-purple fs-10 me-1" />
//                       <span className="text-dark fw-semibold me-1">150</span>
//                       Dental
//                     </p>
//                     <p className="d-flex align-items-center mb-0 fs-13">
//                       <i className="ti ti-circle-filled text-primary fs-10 me-1" />
//                       <span className="text-dark fw-semibold me-1">121</span>
//                       Neurolgy
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* col end */}
//             {/* col start */}
//             <div className="col-xl-4 col-lg-6 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Doctors Schedule</h5>
//                   <Link
//                     to={all_routes.doctorschedule}
//                     className="btn fw-normal btn-outline-white"
//                   >
//                     View All
//                   </Link>
//                 </div>
//                 <div className="card-body">
//                   <div className="row g-2 mb-4">
//                     <div className="col d-flex border-end">
//                       <div className="text-center flex-fill">
//                         <p className="mb-1">Available</p>
//                         <h3 className="fw-bold mb-0">48</h3>
//                       </div>
//                     </div>
//                     <div className="col d-flex border-end">
//                       <div className="text-center flex-fill">
//                         <p className="mb-1">Unavailable</p>
//                         <h3 className="fw-bold mb-0">28</h3>
//                       </div>
//                     </div>
//                     <div className="col d-flex">
//                       <div className="text-center flex-fill">
//                         <p className="mb-1">Leave</p>
//                         <h3 className="fw-bold mb-0">12</h3>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="overflow-auto">
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <div className="d-flex align-items-center flex-shrink-0">
//                         <Link
//                           to={all_routes.doctordetails}
//                           className="avatar flex-shrink-0"
//                         >
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-02.jpg"
//                             className="rounded-circle"
//                             alt="img"
//                           />
//                         </Link>
//                         <div className="ms-2 flex-shrink-0">
//                           <div>
//                             <h6 className="fw-semibold fs-14 text-truncate mb-1">
//                               <Link to={all_routes.doctordetails}>
//                                 Dr. Sarah Johnson
//                               </Link>
//                             </h6>
//                             <p className="fs-13">Orthopedic Surgeon</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0 ms-2">
//                         <Link
//                           to="#"
//                           className="btn btn-primary btn-sm py-1 flex-shrink-0"
//                         >
//                           Book Now
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <div className="d-flex align-items-center flex-shrink-0">
//                         <Link
//                           to={all_routes.doctordetails}
//                           className="avatar flex-shrink-0"
//                         >
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-03.jpg"
//                             className="rounded-circle"
//                             alt="img"
//                           />
//                         </Link>
//                         <div className="ms-2 flex-shrink-0">
//                           <div>
//                             <h6 className="fw-semibold fs-14 text-truncate mb-1">
//                               <Link to={all_routes.doctordetails}>
//                                 Dr. Emily Carter
//                               </Link>
//                             </h6>
//                             <p className="fs-13">Pediatrician</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0 ms-2">
//                         <Link to="#" className="btn btn-primary btn-sm py-1">
//                           Book Now
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <div className="d-flex align-items-center flex-shrink-0">
//                         <Link
//                           to={all_routes.doctordetails}
//                           className="avatar flex-shrink-0"
//                         >
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-04.jpg"
//                             className="rounded-circle"
//                             alt="img"
//                           />
//                         </Link>
//                         <div className="ms-2 flex-shrink-0">
//                           <div>
//                             <h6 className="fw-semibold fs-14 text-truncate mb-1">
//                               <Link to={all_routes.doctordetails}>
//                                 Dr. David Lee
//                               </Link>
//                             </h6>
//                             <p className="fs-13">Gynecologist</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0 ms-2">
//                         <Link to="#" className="btn btn-primary btn-sm py-1">
//                           Book Now
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center mb-0">
//                       <div className="d-flex align-items-center flex-shrink-0">
//                         <Link
//                           to={all_routes.doctordetails}
//                           className="avatar flex-shrink-0"
//                         >
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-14.jpg"
//                             className="rounded-circle"
//                             alt="img"
//                           />
//                         </Link>
//                         <div className="ms-2 flex-shrink-0">
//                           <div>
//                             <h6 className="fw-semibold fs-14 text-truncate mb-1">
//                               <Link to={all_routes.doctordetails}>
//                                 Dr. Michael Smith
//                               </Link>
//                             </h6>
//                             <p className="fs-13">Cardiologist</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0 ms-2">
//                         <Link to="#" className="btn btn-primary btn-sm py-1">
//                           Book Now
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* col end */}
//             {/* col start */}
//             <div className="col-xl-4 col-lg-6 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Income By Treatment</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       Weekly <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Monthly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Weekly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Yearly
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div className="d-flex align-items-center justify-content-between mb-3">
//                     <div>
//                       <p className="fw-semibold mb-1 text-dark">Cardiology</p>
//                       <p className="mb-0">4,556 Apointments</p>
//                     </div>
//                     <h6 className="fw-bold mb-0">$5,985</h6>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between mb-3">
//                     <div>
//                       <p className="fw-semibold mb-1 text-dark">Radiology</p>
//                       <p className="mb-0">4,125 Apointments</p>
//                     </div>
//                     <h6 className="fw-bold mb-0">$5,194</h6>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between mb-3">
//                     <div>
//                       <p className="fw-semibold mb-1 text-dark">
//                         Dental Surgery
//                       </p>
//                       <p className="mb-0">1,796 Apointments</p>
//                     </div>
//                     <h6 className="fw-bold mb-0">$2,716</h6>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between mb-3">
//                     <div>
//                       <p className="fw-semibold mb-1 text-dark">Orthopaedics</p>
//                       <p className="mb-0">3,827 Apointments</p>
//                     </div>
//                     <h6 className="fw-bold mb-0">$4,682</h6>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between mb-0">
//                     <div>
//                       <p className="fw-semibold mb-1 text-dark">
//                         General Medicine
//                       </p>
//                       <p className="mb-0">9,894 Apointments</p>
//                     </div>
//                     <h6 className="fw-bold mb-0">$9,450</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* col end */}
//           </div>
//           {/* end row */}
//           {/* row start */}
//           <div className="row">
//             <div className="col-12 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">All Appointments</h5>
//                   <Link
//                     to={all_routes.appointments}
//                     className="btn fw-normal btn-outline-white"
//                   >
//                     View All
//                   </Link>
//                 </div>
//                 <div className="card-body">
//                   {/* Table start */}
//                   <div className="table-responsive table-nowrap">
//                     <table className="table border">
//                       <thead className="thead-light">
//                         <tr>
//                           <th>Doctor</th>
//                           <th>Patient</th>
//                           <th>Date &amp; Time</th>
//                           <th>Mode</th>
//                           <th>Status</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.doctordetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/doctors/doctor-06.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.doctordetails}
//                                     className="fw-semibold"
//                                   >
//                                     Dr. John Smith
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">Neurosurgeon</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.patientDetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-02.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.patientDetails}
//                                     className="fw-medium"
//                                   >
//                                     Jesus Adams
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">+1 41254 45214</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>28 May 2025 - 11:15 AM</td>
//                           <td>Online</td>
//                           <td>
//                             <span className="badge fs-13 py-1 badge-soft-success border border-success rounded text-success fw-medium">
//                               Confirmed
//                             </span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.doctordetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/doctors/doctor-07.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.doctordetails}
//                                     className="fw-semibold"
//                                   >
//                                     Dr. Lisa White
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">Oncologist</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.patientDetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-27.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.patientDetails}
//                                     className="fw-medium"
//                                   >
//                                     Ezra Belcher
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">+1 65895 41247</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>29 May 2025 - 11:30 AM</td>
//                           <td>In-Person</td>
//                           <td>
//                             <span className="badge fs-13 py-1 badge-soft-danger border border-danger rounded fw-medium">
//                               Cancelled
//                             </span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.doctordetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/doctors/doctor-10.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.doctordetails}
//                                     className="fw-semibold"
//                                   >
//                                     Dr. Patricia Brown
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">Pulmonologist</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.patientDetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-20.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.patientDetails}
//                                     className="fw-medium"
//                                   >
//                                     Glen Lentz
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">+1 62458 45845</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>30 May 2025 - 09:30 AM </td>
//                           <td>Online</td>
//                           <td>
//                             <span className="badge fs-13 py-1 badge-soft-success border border-success rounded text-success fw-medium">
//                               Confirmed
//                             </span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.doctordetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/doctors/doctor-11.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.doctordetails}
//                                     className="fw-semibold"
//                                   >
//                                     Dr. Rachel Green
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">Urologist</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.patientDetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-06.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.patientDetails}
//                                     className="fw-medium"
//                                   >
//                                     Bernard Griffith
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">+1 61422 45214</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>30 May 2025 - 10:00 AM</td>
//                           <td>Online</td>
//                           <td>
//                             <span className="badge fs-13 py-1 badge-soft-secondary border border-secondary rounded fw-medium">
//                               Checked Out
//                             </span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.doctordetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/doctors/doctor-14.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.doctordetails}
//                                     className="fw-semibold"
//                                   >
//                                     Dr. Michael Smith
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">Cardiologist</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Link
//                                 to={all_routes.patientDetails}
//                                 className="avatar me-2"
//                               >
//                                 <ImageWithBasePath
//                                   src="assets/img/profiles/avatar-25.jpg"
//                                   alt="img"
//                                   className="rounded-circle"
//                                 />
//                               </Link>
//                               <div>
//                                 <h6 className="fs-14 mb-1">
//                                   <Link
//                                     to={all_routes.patientDetails}
//                                     className="fw-medium"
//                                   >
//                                     John Elsass
//                                   </Link>
//                                 </h6>
//                                 <p className="mb-0 fs-13">+1 47851 26371</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td>30 May 2025 - 11:00 AM</td>
//                           <td>Online</td>
//                           <td>
//                             <span className="badge fs-13 py-1 badge-soft-info border border-info rounded fw-medium">
//                               Schedule
//                             </span>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                   {/* Table end */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* row end */}
//           {/* row start */}
//           <div className="row">
//             {/* col start */}
//             <div className="col-xl-4 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Top 5 Patients</h5>
//                   <Link
//                     to={all_routes.patients}
//                     className="btn fw-normal btn-outline-white"
//                   >
//                     View All
//                   </Link>
//                 </div>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.patientDetails}
//                         className="avatar me-2 flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-02.jpg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link
//                             to={all_routes.patientDetails}
//                             className="fw-medium"
//                           >
//                             Jesus Adams
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           Total Paid : $6589
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
//                       80 Appointments
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.patientDetails}
//                         className="avatar me-2 flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-27.jpg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link
//                             to={all_routes.patientDetails}
//                             className="fw-medium"
//                           >
//                             Ezra Belcher
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           Total Paid : $5632
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
//                       60 Appointments
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.patientDetails}
//                         className="avatar me-2 flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-20.jpg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link
//                             to={all_routes.patientDetails}
//                             className="fw-medium"
//                           >
//                             Glen Lentz
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           Total Paid : $4125
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
//                       40 Appointments
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.patientDetails}
//                         className="avatar me-2 flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-06.jpg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link
//                             to={all_routes.patientDetails}
//                             className="fw-medium"
//                           >
//                             Bernard Griffith
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           Total Paid : $3140
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
//                       25 Appointments
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-0">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.patientDetails}
//                         className="avatar me-2 flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-25.jpg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link
//                             to={all_routes.patientDetails}
//                             className="fw-medium"
//                           >
//                             John Elsass
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           Total Paid : $2654
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
//                       25 Appointments
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* col end */}
//             {/* col start */}
//             <div className="col-xl-4 col-lg-6 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Recent Transactions</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       Weekly <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Monthly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Weekly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Yearly
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link to="#" className="avatar me-2 flex-shrink-0">
//                         <ImageWithBasePath
//                           src="assets/img/icons/stripe.svg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link to="#" className="fw-semibold">
//                             General Check-up
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           <Link to="#" className="link-primary">
//                             #INV5889
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium bg-success flex-shrink-0">
//                       + $234
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link to="#" className="avatar me-2 flex-shrink-0">
//                         <ImageWithBasePath
//                           src="assets/img/icons/paypal.svg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link to="#" className="fw-semibold">
//                             Online Consultation
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           <Link to="#" className="link-primary">
//                             #INV7874
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium bg-success flex-shrink-0">
//                       + $234
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link to="#" className="avatar me-2 flex-shrink-0">
//                         <ImageWithBasePath
//                           src="assets/img/icons/stripe.svg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link to="#" className="fw-semibold">
//                             Purchase Product
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           <Link to="#" className="link-primary">
//                             #INV4458
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium bg-danger flex-shrink-0">
//                       - $69
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link to="#" className="avatar me-2 flex-shrink-0">
//                         <ImageWithBasePath
//                           src="assets/img/icons/paypal.svg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link to="#" className="fw-semibold">
//                             Online Consultation
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           <Link to="#" className="link-primary">
//                             #INV5456
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium bg-success flex-shrink-0">
//                       + $234
//                     </span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-0">
//                     <div className="d-flex align-items-center">
//                       <Link to="#" className="avatar me-2 flex-shrink-0">
//                         <ImageWithBasePath
//                           src="assets/img/icons/stripe.svg"
//                           alt="img"
//                           className="rounded-circle"
//                         />
//                       </Link>
//                       <div>
//                         <h6 className="fs-14 mb-1 text-truncate">
//                           <Link to="#" className="fw-semibold">
//                             Online Consultation
//                           </Link>
//                         </h6>
//                         <p className="mb-0 fs-13 text-truncate">
//                           <Link to="#" className="link-primary">
//                             #INV4557
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                     <span className="badge fw-medium bg-success flex-shrink-0">
//                       + $234
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* col end */}
//             {/* col start */}
//             <div className="col-xl-4 col-lg-6 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Leave Requests</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       Today <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Today
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           This Week
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           This Month
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.doctordetails}
//                         className="avatar flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-16.jpg"
//                           className="rounded-circle"
//                           alt="img"
//                         />
//                       </Link>
//                       <div className="ms-2">
//                         <div>
//                           <h6 className="fw-semibold text-truncate mb-1 fs-14">
//                             <Link to={all_routes.doctordetails}>
//                               James Allaire
//                             </Link>
//                           </h6>
//                           <p className="fs-13 mb-0 text-truncate">
//                             4 Days - Personal Reason
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
//                       >
//                         <i className="ti ti-x fw-bold" />
//                       </Link>
//                       <Link
//                         to="#"
//                         className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
//                       >
//                         <i className="ti ti-check fw-bold" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.doctordetails}
//                         className="avatar flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-21.jpg"
//                           className="rounded-circle"
//                           alt="img"
//                         />
//                       </Link>
//                       <div className="ms-2">
//                         <div>
//                           <h6 className="fw-semibold text-truncate mb-1 fs-14">
//                             <Link to={all_routes.doctordetails}>
//                               Esther Schmidt
//                             </Link>
//                           </h6>
//                           <p className="fs-13 mb-0 text-truncate">
//                             2 Days - Going to Hospital
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
//                       >
//                         <i className="ti ti-x fw-bold" />
//                       </Link>
//                       <Link
//                         to="#"
//                         className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
//                       >
//                         <i className="ti ti-check fw-bold" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.doctordetails}
//                         className="avatar flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/doctors/doctor-03.jpg"
//                           className="rounded-circle"
//                           alt="img"
//                         />
//                       </Link>
//                       <div className="ms-2">
//                         <div>
//                           <h6 className="fw-semibold text-truncate mb-1 fs-14">
//                             <Link to={all_routes.doctordetails}>
//                               Valerie Padgett
//                             </Link>
//                           </h6>
//                           <p className="fs-13 mb-0 text-truncate">
//                             1 Day - Changing Account
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
//                       >
//                         <i className="ti ti-x fw-bold" />
//                       </Link>
//                       <Link
//                         to="#"
//                         className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
//                       >
//                         <i className="ti ti-check fw-bold" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between mb-3">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.doctordetails}
//                         className="avatar flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/doctors/doctor-02.jpg"
//                           className="rounded-circle"
//                           alt="img"
//                         />
//                       </Link>
//                       <div className="ms-2">
//                         <div>
//                           <h6 className="fw-semibold text-truncate mb-1 fs-14">
//                             <Link to={all_routes.doctordetails}>
//                               Diane Nash
//                             </Link>
//                           </h6>
//                           <p className="fs-13 mb-0 text-truncate">
//                             1 Day - Not Well
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
//                       >
//                         <i className="ti ti-x fw-bold" />
//                       </Link>
//                       <Link
//                         to="#"
//                         className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
//                       >
//                         <i className="ti ti-check fw-bold" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between mb-0">
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to={all_routes.doctordetails}
//                         className="avatar flex-shrink-0"
//                       >
//                         <ImageWithBasePath
//                           src="assets/img/doctors/doctor-09.jpg"
//                           className="rounded-circle"
//                           alt="img"
//                         />
//                       </Link>
//                       <div className="ms-2">
//                         <div>
//                           <h6 className="fw-semibold text-truncate mb-1 fs-14">
//                             <Link to={all_routes.doctordetails}>
//                               Sally Cavazos
//                             </Link>
//                           </h6>
//                           <p className="fs-13 mb-0 text-truncate">
//                             2 Days - Going to Checkup
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
//                       >
//                         <i className="ti ti-x fw-bold" />
//                       </Link>
//                       <Link
//                         to="#"
//                         className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
//                       >
//                         <i className="ti ti-check fw-bold" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* col end */}
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
//     </>
//   );
// };

// export default Dashboard;




// import { Link } from "react-router-dom";
// import ImageWithBasePath from "../../../../core/imageWithBasePath";
// import { all_routes } from "../../../routes/all_routes";
// import { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
// import SCol2Chart from "./chats/scol2";
// import SCol3Chart from "./chats/scol3";
// import SCol4Chart from "./chats/scol4";
// import CircleChart from "./chats/circleChart";
// import { Calendar } from "antd";
// import type { Dayjs } from "dayjs";
// import { getDashboardStats, getAppointmentStats } from "../../../../api/dashboardService";
// import { getAppointments } from "../../../../api/appointmentService";
// import dayjs from "dayjs";

// const Dashboard = () => {
//   const [dashboardStats, setDashboardStats] = useState({
//     doctors: 0,
//     patients: 0,
//     appointments: 0,
//   });

//   const [appointmentStats, setAppointmentStats] = useState({
//     allAppointments: 0,
//     cancelled: 0,
//     rescheduled: 0,
//     completed: 0,
//   });

//   const [chartData, setChartData] = useState<any[]>([]);
//   const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'weekly' | 'yearly'>('monthly');
//   const [loading, setLoading] = useState(true);
//   const [recentAppointments, setRecentAppointments] = useState<any[]>([]);

//   const [sColChart] = useState<any>({
//     chart: {
//       width: 80,
//       height: 54,
//       type: "bar",
//       toolbar: { show: false },
//       sparkline: { enabled: true },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "70%",
//         borderRadius: 3,
//         endingShape: "rounded",
//       },
//     },
//     dataLabels: { enabled: false },
//     stroke: { show: false },
//     xaxis: {
//       labels: { show: false },
//       axisTicks: { show: false },
//       axisBorder: { show: false },
//     },
//     yaxis: { show: false },
//     grid: { show: false },
//     tooltip: { enabled: false },
//     colors: ["#2E37A4", "#2E37A4", "#2E37A4", "#2E37A4", "#FF955A", "#2E37A4", "#2E37A4"],
//     fill: { type: "solid" },
//   });

//   const series = [{ name: "Data", data: [40, 15, 60, 15, 90, 20, 70] }];

//   // Fetch dashboard data
//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   // Fetch appointment stats when period changes
//   useEffect(() => {
//     fetchAppointmentStats();
//   }, [selectedPeriod]);

//   const fetchDashboardData = async () => {
//     try {
//       setLoading(true);
//       const [statsRes, appointmentsRes] = await Promise.all([
//         getDashboardStats(),
//         getAppointments(),
//       ]);

//       setDashboardStats(statsRes.data);

//       // Get last 5 appointments
//       const sortedAppointments = appointmentsRes.data
//         .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
//         .slice(0, 5);
//       setRecentAppointments(sortedAppointments);

//       await fetchAppointmentStats();
//     } catch (error) {
//       console.error("Error fetching dashboard data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchAppointmentStats = async () => {
//     try {
//       const statsRes = await getAppointmentStats(selectedPeriod);
//       setAppointmentStats(statsRes.data.summary);

//       // Map chart data based on period
//       const periodData = selectedPeriod === 'monthly'
//         ? statsRes.data.chartData.monthly
//         : selectedPeriod === 'weekly'
//           ? statsRes.data.chartData.weekly
//           : statsRes.data.chartData.yearly;

//       setChartData(periodData);
//     } catch (error) {
//       console.error("Error fetching appointment stats:", error);
//     }
//   };

//   // Chart configuration for appointment statistics
//   const appointmentChartOptions: any = {
//     chart: {
//       type: 'bar',
//       height: 350,
//       stacked: true,
//       toolbar: { show: false },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: '55%',
//         borderRadius: 5,
//       },
//     },
//     dataLabels: { enabled: false },
//     stroke: { show: true, width: 2, colors: ['transparent'] },
//     xaxis: {
//       categories: chartData.map(d => d.month || d.day || d.year),
//     },
//     yaxis: {
//       title: { text: 'Appointments' },
//     },
//     fill: { opacity: 1 },
//     tooltip: {
//       y: {
//         formatter: function (val: number) {
//           return val + " appointments";
//         },
//       },
//     },
//     colors: ['#00E396', '#008FFB', '#775DD0'],
//     legend: {
//       position: 'bottom',
//       horizontalAlign: 'center',
//     },
//   };

//   const appointmentChartSeries = [
//     {
//       name: 'Completed',
//       data: chartData.map(d => d.completed),
//     },
//     {
//       name: 'Ongoing',
//       data: chartData.map(d => d.ongoing),
//     },
//     {
//       name: 'Rescheduled',
//       data: chartData.map(d => d.rescheduled),
//     },
//   ];

//   const onPanelChange = (value: Dayjs, mode: any) => {
//     console.log(value.format("YYYY-MM-DD"), mode);
//   };

//   const getStatusBadgeClass = (status: string) => {
//     switch (status) {
//       case "Confirmed":
//         return "badge-soft-success text-success";
//       case "Cancelled":
//         return "badge-soft-danger text-danger";
//       case "Checked Out":
//         return "badge-soft-secondary text-secondary";
//       case "Checked In":
//         return "badge-soft-warning text-warning";
//       case "Scheduled":
//         return "badge-soft-info text-info";
//       default:
//         return "badge-soft-secondary text-secondary";
//     }
//   };

//   const renderAvatar = (image: string | null | undefined, name: string, bgColor: string) => {
//     const getInitials = (fullName: string) => {
//       if (!fullName) return "?";
//       return fullName.charAt(0).toUpperCase();
//     };

//     if (image && (image.includes('googleusercontent.com') || image.startsWith('http'))) {
//       return (
//         <img
//           src={image}
//           alt={name}
//           className="rounded-circle"
//           style={{ width: '40px', height: '40px', objectFit: 'cover' }}
//         />
//       );
//     } else if (image) {
//       return (
//         <ImageWithBasePath
//           src={`assets/img/users/${image}`}
//           alt={name}
//           className="rounded-circle"
//         />
//       );
//     } else {
//       return (
//         <div
//           className={`rounded-circle ${bgColor} text-white d-flex align-items-center justify-content-center`}
//           style={{ width: '40px', height: '40px', fontSize: '16px' }}
//         >
//           {getInitials(name)}
//         </div>
//       );
//     }
//   };

//   if (loading) {
//     return (
//       <div className="page-wrapper">
//         <div className="content pb-0">
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="page-wrapper">
//         <div className="content pb-0">
//           {/* Page Header */}
//           <div className="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4">
//             <div>
//               <h4 className="fw-bold mb-0">Admin Dashboard </h4>
//             </div>
//             <div className="d-flex align-items-center flex-wrap gap-2">
//               <Link
//                 to={all_routes.newAppointment}
//                 className="btn btn-primary d-inline-flex align-items-center"
//               >
//                 <i className="ti ti-plus me-1" />
//                 New Appointment
//               </Link>
//               <Link
//                 to={all_routes.doctorschedule}
//                 className="btn btn-outline-white bg-white d-inline-flex align-items-center"
//               >
//                 <i className="ti ti-calendar-time me-1" />
//                 Schedule Availability
//               </Link>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="row">
//             <div className="col-xl-3 col-md-6">
//               <div className="position-relative border card rounded-2 shadow-sm">
//                 <ImageWithBasePath
//                   src="./assets/img/bg/bg-01.svg"
//                   alt="img"
//                   className="position-absolute start-0 top-0"
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center mb-2 justify-content-between">
//                     <span className="avatar bg-primary rounded-circle">
//                       <i className="ti ti-calendar-heart fs-24" />
//                     </span>
//                     <div className="text-end">
//                       <span className="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">
//                         +95%
//                       </span>
//                       <p className="fs-13 mb-0">in last 7 Days </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p className="mb-1">Doctors</p>
//                       <h3 className="fw-bold mb-0">{dashboardStats.doctors}</h3>
//                     </div>
//                     <div>
//                       <div id="s-col" className="chart-set">
//                         <Chart
//                           options={sColChart}
//                           series={series}
//                           type="bar"
//                           width={80}
//                           height={54}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-md-6">
//               <div className="position-relative border card rounded-2 shadow-sm">
//                 <ImageWithBasePath
//                   src="./assets/img/bg/bg-02.svg"
//                   alt="img"
//                   className="position-absolute start-0 top-0"
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center mb-2 justify-content-between">
//                     <span className="avatar bg-danger rounded-circle">
//                       <i className="ti ti-calendar-heart fs-24" />
//                     </span>
//                     <div className="text-end">
//                       <span className="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">
//                         +25%
//                       </span>
//                       <p className="fs-13 mb-0">in last 7 Days </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p className="mb-1">Patients</p>
//                       <h3 className="fw-bold mb-0">{dashboardStats.patients}</h3>
//                     </div>
//                     <div>
//                       <div id="s-col-2" className="chart-set">
//                         <SCol2Chart />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-md-6">
//               <div className="position-relative border card rounded-2 shadow-sm">
//                 <ImageWithBasePath
//                   src="./assets/img/bg/bg-03.svg"
//                   alt="img"
//                   className="position-absolute start-0 top-0"
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center mb-2 justify-content-between">
//                     <span className="avatar bg-info rounded-circle">
//                       <i className="ti ti-calendar-heart fs-24" />
//                     </span>
//                     <div className="text-end">
//                       <span className="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-danger">
//                         -15%
//                       </span>
//                       <p className="fs-13 mb-0">in last 7 Days </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div>
//                       <p className="mb-1">Appointment</p>
//                       <h3 className="fw-bold mb-0">{dashboardStats.appointments}</h3>
//                     </div>
//                     <div>
//                       <div id="s-col-3" className="chart-set">
//                         <SCol3Chart />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-md-6">
//               <div className="position-relative border card rounded-2 shadow-sm">
//                 <ImageWithBasePath
//                   src="./assets/img/bg/bg-04.svg"
//                   alt="img"
//                   className="position-absolute start-0 top-0"
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center mb-2 justify-content-between">
//                     <span className="avatar bg-success rounded-circle">
//                       <i className="ti ti-calendar-heart fs-24" />
//                     </span>
//                     <div className="text-end">
//                       <span className="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">
//                         +25%
//                       </span>
//                       <p className="fs-13 mb-0">in last 7 Days </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between overflow-hidden">
//                     <div>
//                       <p className="mb-1">Revenue</p>
//                       <h3 className="fw-bold mb-0 text-truncate">$55,1240</h3>
//                     </div>
//                     <div>
//                       <div id="s-col-4" className="chart-set">
//                         <SCol4Chart />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Appointment Statistics */}
//           <div className="row">
//             <div className="col-xl-8">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Appointment Statistics</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}{" "}
//                       <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link
//                           className="dropdown-item"
//                           to="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setSelectedPeriod('monthly');
//                           }}
//                         >
//                           Monthly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           className="dropdown-item"
//                           to="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setSelectedPeriod('weekly');
//                           }}
//                         >
//                           Weekly
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           className="dropdown-item"
//                           to="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setSelectedPeriod('yearly');
//                           }}
//                         >
//                           Yearly
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body pb-0">
//                   <div className="row row-gap-3 mb-2">
//                     <div className="col-md-3 col-sm-6">
//                       <div className="bg-light border p-2 text-center rounded-2">
//                         <p className="mb-1 text-truncate">
//                           <i className="ti ti-point-filled me-1 text-primary" />
//                           All Appointments
//                         </p>
//                         <h5 className="fw-bold mb-0">{appointmentStats.allAppointments}</h5>
//                       </div>
//                     </div>
//                     <div className="col-md-3 col-sm-6">
//                       <div className="bg-light border p-2 text-center rounded-2">
//                         <p className="mb-1">
//                           <i className="ti ti-point-filled me-1 text-danger" />
//                           Cancelled
//                         </p>
//                         <h5 className="fw-bold mb-0">{appointmentStats.cancelled}</h5>
//                       </div>
//                     </div>
//                     <div className="col-md-3 col-sm-6">
//                       <div className="bg-light border p-2 text-center rounded-2">
//                         <p className="mb-1">
//                           <i className="ti ti-point-filled me-1 text-warning" />
//                           Reschedule
//                         </p>
//                         <h5 className="fw-bold mb-0">{appointmentStats.rescheduled}</h5>
//                       </div>
//                     </div>
//                     <div className="col-md-3 col-sm-6">
//                       <div className="bg-light border p-2 text-center rounded-2">
//                         <p className="mb-1">
//                           <i className="ti ti-point-filled me-1 text-success" />
//                           Completed
//                         </p>
//                         <h5 className="fw-bold mb-0">{appointmentStats.completed}</h5>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="chart-set" id="s-col-19">
//                     <Chart
//                       options={appointmentChartOptions}
//                       series={appointmentChartSeries}
//                       type="bar"
//                       height={350}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Popular Doctors */}
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Popular Doctors</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       Weekly <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li><Link className="dropdown-item" to="#">Monthly</Link></li>
//                       <li><Link className="dropdown-item" to="#">Weekly</Link></li>
//                       <li><Link className="dropdown-item" to="#">Yearly</Link></li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div className="row row-gap-3">
//                     <div className="col-md-4">
//                       <div className="border shadow-sm p-3 rounded-2">
//                         <div className="d-flex align-items-center mb-3">
//                           <Link to={all_routes.doctordetails} className="avatar me-2 flex-shrink-0 position-relative">
//                             <span className="online text-success position-absolute end-0 bottom-0 pe-1">
//                               <i className="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white" />
//                             </span>
//                             <ImageWithBasePath src="assets/img/doctors/doctor-01.jpg" alt="img" className="rounded-circle" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1 text-truncate">
//                               <Link to={all_routes.doctordetails} className="fw-semibold">Dr. Alex Morgan</Link>
//                             </h6>
//                             <p className="mb-0 fs-13">Cardiologist</p>
//                           </div>
//                         </div>
//                         <p className="mb-0">
//                           <span className="text-dark fw-semibold">258</span> Bookings
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="border shadow-sm p-3 rounded-2">
//                         <div className="d-flex align-items-center mb-3">
//                           <Link to={all_routes.doctordetails} className="avatar me-2 flex-shrink-0 position-relative">
//                             <span className="online text-success position-absolute end-0 bottom-0 pe-1">
//                               <i className="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white" />
//                             </span>
//                             <ImageWithBasePath src="assets/img/doctors/doctor-03.jpg" alt="img" className="rounded-circle" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1 text-truncate">
//                               <Link to={all_routes.doctordetails} className="fw-semibold">Dr. Emily Carter</Link>
//                             </h6>
//                             <p className="mb-0 fs-13">Pediatrician</p>
//                           </div>
//                         </div>
//                         <p className="mb-0">
//                           <span className="text-dark fw-semibold">125</span> Bookings
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="border shadow-sm p-3 rounded-2">
//                         <div className="d-flex align-items-center mb-3">
//                           <Link to={all_routes.doctordetails} className="avatar me-2 flex-shrink-0 position-relative">
//                             <ImageWithBasePath src="assets/img/doctors/doctor-04.jpg" alt="img" className="rounded-circle" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1 text-truncate">
//                               <Link to={all_routes.doctordetails} className="fw-semibold">Dr. David Lee</Link>
//                             </h6>
//                             <p className="mb-0 fs-13">Gynecologist</p>
//                           </div>
//                         </div>
//                         <p className="mb-0">
//                           <span className="text-dark fw-semibold">115</span> Bookings
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Appointments Calendar */}
//             <div className="col-xl-4">
//               <div className="card shadow-sm">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0 text-truncate">Appointments</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       All Type <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li><Link className="dropdown-item" to="#">In Person</Link></li>
//                       <li><Link className="dropdown-item" to="#">Online</Link></li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div className="datepic appointment-calender mb-1">
//                     <Calendar fullscreen={false} onPanelChange={onPanelChange} />
//                   </div>
//                   {recentAppointments.slice(0, 3).map((appointment, index) => (
//                     <div
//                       key={appointment._id}
//                       className={`mb-3 ${index === 0 ? 'bg-light' :
//                           index === 1 ? 'bg-soft-danger' :
//                             'bg-soft-info'
//                         } p-3 rounded-2 d-flex align-items-center justify-content-between`}
//                     >
//                       <div>
//                         <h6 className="fs-14 fw-semibold mb-1">{appointment.appointmentType}</h6>
//                         <p className="mb-0 text-truncate">
//                           <i className="ti ti-calendar-time me-1 text-dark" />
//                           {dayjs(appointment.appointmentDate).format("ddd, DD MMM YYYY")}, {appointment.appointmentTime}
//                         </p>
//                       </div>
//                       <div className="avatar-list-stacked avatar-group-sm event flex-shrink-0">
//                         <span className="avatar avatar-lg rounded-circle border-0">
//                           {renderAvatar(appointment.patient?.profileImage, appointment.patient?.fullName, 'bg-primary')}
//                         </span>
//                         <span className="avatar avatar-lg rounded-circle border-0">
//                           {renderAvatar(appointment.doctor?.profileImage, appointment.doctor?.fullName, 'bg-success')}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                   <Link to={all_routes.appointments} className="btn btn-light w-100">
//                     View All Appointments
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="row">
//             <div className="col-xl-4 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Top 3 Departments</h5>
//                   <div className="dropdown">
//                     <Link
//                       to="#"
//                       className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       Weekly <i className="ti ti-chevron-down ms-1" />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li><Link className="dropdown-item" to="#">Monthly</Link></li>
//                       <li><Link className="dropdown-item" to="#">Weekly</Link></li>
//                       <li><Link className="dropdown-item" to="#">Yearly</Link></li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <div id="circle-chart" className="chart-set">
//                     <CircleChart />
//                   </div>
//                   <div className="d-flex align-items-center flex-wrap justify-content-center gap-2 mt-3">
//                     <p className="d-flex align-items-center mb-0 fs-13">
//                       <i className="ti ti-circle-filled text-info fs-10 me-1" />
//                       <span className="text-dark fw-semibold me-1">214</span> Cardiology
//                     </p>
//                     <p className="d-flex align-items-center mb-0 fs-13">
//                       <i className="ti ti-circle-filled text-purple fs-10 me-1" />
//                       <span className="text-dark fw-semibold me-1">150</span> Dental
//                     </p>
//                     <p className="d-flex align-items-center mb-0 fs-13">
//                       <i className="ti ti-circle-filled text-primary fs-10 me-1" />
//                       <span className="text-dark fw-semibold me-1">121</span> Neurology
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-4 col-lg-6 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Doctors Schedule</h5>
//                   <Link to={all_routes.doctorschedule} className="btn fw-normal btn-outline-white">
//                     View All
//                   </Link>
//                 </div>
//                 <div className="card-body">
//                   <div className="row g-2 mb-4">
//                     <div className="col d-flex border-end">
//                       <div className="text-center flex-fill">
//                         <p className="mb-1">Available</p>
//                         <h3 className="fw-bold mb-0">48</h3>
//                       </div>
//                     </div>
//                     <div className="col d-flex border-end">
//                       <div className="text-center flex-fill">
//                         <p className="mb-1">On Leave</p>
//                         <h3 className="fw-bold mb-0">12</h3>
//                       </div>
//                     </div>
//                     <div className="col d-flex">
//                       <div className="text-center flex-fill">
//                         <p className="mb-1">On Duty</p>
//                         <h3 className="fw-bold mb-0">32</h3>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border-bottom mb-3 pb-3">
//                     <div className="d-flex align-items-center justify-content-between mb-2">
//                       <div className="d-flex align-items-center">
//                         <Link to={all_routes.doctordetails} className="avatar me-2">
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-01.jpg"
//                             alt="img"
//                             className="rounded-circle"
//                           />
//                         </Link>
//                         <div>
//                           <h6 className="fs-14 mb-1">
//                             <Link to={all_routes.doctordetails} className="fw-semibold">
//                               Dr. Alex Morgan
//                             </Link>
//                           </h6>
//                           <p className="mb-0 fs-13">Cardiologist</p>
//                         </div>
//                       </div>
//                       <span className="badge badge-soft-success text-success fs-12">
//                         Available
//                       </span>
//                     </div>
//                     <p className="mb-0 fs-13">
//                       <i className="ti ti-calendar-time me-1" />
//                       Mon - Fri : 09:00 AM - 05:00 PM
//                     </p>
//                   </div>
//                   <div className="border-bottom mb-3 pb-3">
//                     <div className="d-flex align-items-center justify-content-between mb-2">
//                       <div className="d-flex align-items-center">
//                         <Link to={all_routes.doctordetails} className="avatar me-2">
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-03.jpg"
//                             alt="img"
//                             className="rounded-circle"
//                           />
//                         </Link>
//                         <div>
//                           <h6 className="fs-14 mb-1">
//                             <Link to={all_routes.doctordetails} className="fw-semibold">
//                               Dr. Emily Carter
//                             </Link>
//                           </h6>
//                           <p className="mb-0 fs-13">Pediatrician</p>
//                         </div>
//                       </div>
//                       <span className="badge badge-soft-danger text-danger fs-12">
//                         On Leave
//                       </span>
//                     </div>
//                     <p className="mb-0 fs-13">
//                       <i className="ti ti-calendar-time me-1" />
//                       Mon - Fri : 09:00 AM - 05:00 PM
//                     </p>
//                   </div>
//                   <div>
//                     <div className="d-flex align-items-center justify-content-between mb-2">
//                       <div className="d-flex align-items-center">
//                         <Link to={all_routes.doctordetails} className="avatar me-2">
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-04.jpg"
//                             alt="img"
//                             className="rounded-circle"
//                           />
//                         </Link>
//                         <div>
//                           <h6 className="fs-14 mb-1">
//                             <Link to={all_routes.doctordetails} className="fw-semibold">
//                               Dr. David Lee
//                             </Link>
//                           </h6>
//                           <p className="mb-0 fs-13">Gynecologist</p>
//                         </div>
//                       </div>
//                       <span className="badge badge-soft-warning text-warning fs-12">
//                         On Duty
//                       </span>
//                     </div>
//                     <p className="mb-0 fs-13">
//                       <i className="ti ti-calendar-time me-1" />
//                       Mon - Fri : 09:00 AM - 05:00 PM
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-4 col-lg-6 d-flex">
//               <div className="card shadow-sm flex-fill w-100">
//                 <div className="card-header d-flex align-items-center justify-content-between">
//                   <h5 className="fw-bold mb-0">Recent Appointments</h5>
//                   <Link to={all_routes.appointments} className="btn fw-normal btn-outline-white">
//                     View All
//                   </Link>
//                 </div>
//                 <div className="card-body">
//                   {recentAppointments.slice(0, 5).map((appointment) => (
//                     <div key={appointment._id} className="border-bottom mb-3 pb-3">
//                       <div className="d-flex align-items-center justify-content-between mb-2">
//                         <div className="d-flex align-items-center">
//                           <Link to={all_routes.appointments} className="avatar me-2">
//                             {renderAvatar(
//                               appointment.patient?.profileImage,
//                               appointment.patient?.fullName,
//                               'bg-primary'
//                             )}
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link
//                                 to={all_routes.appointments}
//                                 className="fw-semibold"
//                               >
//                                 {appointment.patient?.fullName || 'Unknown Patient'}
//                               </Link>
//                             </h6>
//                             <p className="mb-0 fs-13">
//                               {appointment.doctor?.fullName || 'Unknown Doctor'}
//                             </p>
//                           </div>
//                         </div>
//                         <span className={`badge fs-12 ${getStatusBadgeClass(appointment.status)}`}>
//                           {appointment.status}
//                         </span>
//                       </div>
//                       <p className="mb-0 fs-13">
//                         <i className="ti ti-calendar-time me-1" />
//                         {dayjs(appointment.appointmentDate).format("DD MMM YYYY")}, {appointment.appointmentTime}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;




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
import { getDashboardStats, getAppointmentStats, type DashboardStats, type AppointmentStatsResponse } from "../../../../api/dashboardService";
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


  // Fetch all dashboard data at once for instant loading
  useEffect(() => {
    const fetchAllDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');

        // Fetch all data in parallel for instant loading
        const [statsResponse, appointmentStatsResponse, appointmentsResponse] = await Promise.all([
          getDashboardStats(),
          getAppointmentStats('monthly'),
          axios.get(`${API_URL}/api/appointments`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        // Set all data immediately
        setDashboardStats(statsResponse.data);
        setAppointmentStats(appointmentStatsResponse.data);

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
                  <div className="row row-gap-3">
                    <div className="col-md-4">
                      <div className="border shadow-sm p-3 rounded-2">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={all_routes.doctordetails}
                            className="avatar me-2 flex-shrink-0 position-relative"
                          >
                            <span className="online text-success position-absolute end-0 bottom-0 pe-1">
                              <i className="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white" />
                            </span>
                            <ImageWithBasePath
                              src="assets/img/doctors/doctor-01.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link
                                to={all_routes.doctordetails}
                                className="fw-semibold"
                              >
                                Dr. Alex Morgan
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Cardiologist</p>
                          </div>
                        </div>
                        <p className="mb-0">
                          <span className="text-dark fw-semibold">258</span>
                          Bookings
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border shadow-sm p-3 rounded-2">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={all_routes.doctordetails}
                            className="avatar me-2 flex-shrink-0 position-relative"
                          >
                            <span className="online text-success position-absolute end-0 bottom-0 pe-1">
                              <i className="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white" />
                            </span>
                            <ImageWithBasePath
                              src="assets/img/doctors/doctor-03.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link
                                to={all_routes.doctordetails}
                                className="fw-semibold"
                              >
                                Dr. Emily Carter
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Pediatrician</p>
                          </div>
                        </div>
                        <p className="mb-0">
                          <span className="text-dark fw-semibold">125</span>
                          Bookings
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border shadow-sm p-3 rounded-2">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={all_routes.doctordetails}
                            className="avatar me-2 flex-shrink-0 position-relative"
                          >
                            <ImageWithBasePath
                              src="assets/img/doctors/doctor-04.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link
                                to={all_routes.doctordetails}
                                className="fw-semibold"
                              >
                                Dr. David Lee
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Gynecologist</p>
                          </div>
                        </div>
                        <p className="mb-0">
                          <span className="text-dark fw-semibold">115</span>
                          Bookings
                        </p>
                      </div>
                    </div>
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
                  <div id="circle-chart" className="chart-set">
                    <CircleChart />
                  </div>
                  <div className="d-flex align-items-center flex-wrap justify-content-center gap-2 mt-3">
                    <p className="d-flex align-items-center mb-0 fs-13">
                      <i className="ti ti-circle-filled text-info fs-10 me-1" />
                      <span className="text-dark fw-semibold me-1">214</span>
                      Cardiology
                    </p>
                    <p className="d-flex align-items-center mb-0 fs-13">
                      <i className="ti ti-circle-filled text-purple fs-10 me-1" />
                      <span className="text-dark fw-semibold me-1">150</span>
                      Dental
                    </p>
                    <p className="d-flex align-items-center mb-0 fs-13">
                      <i className="ti ti-circle-filled text-primary fs-10 me-1" />
                      <span className="text-dark fw-semibold me-1">121</span>
                      Neurolgy
                    </p>
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
                        <h3 className="fw-bold mb-0">48</h3>
                      </div>
                    </div>
                    <div className="col d-flex border-end">
                      <div className="text-center flex-fill">
                        <p className="mb-1">Unavailable</p>
                        <h3 className="fw-bold mb-0">28</h3>
                      </div>
                    </div>
                    <div className="col d-flex">
                      <div className="text-center flex-fill">
                        <p className="mb-1">Leave</p>
                        <h3 className="fw-bold mb-0">12</h3>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
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
                        <div className="ms-2 flex-shrink-0">
                          <div>
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">
                              <Link to={all_routes.doctordetails}>
                                Dr. Sarah Johnson
                              </Link>
                            </h6>
                            <p className="fs-13">Orthopedic Surgeon</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <Link
                          to="#"
                          className="btn btn-primary btn-sm py-1 flex-shrink-0"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
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
                        <div className="ms-2 flex-shrink-0">
                          <div>
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">
                              <Link to={all_routes.doctordetails}>
                                Dr. Emily Carter
                              </Link>
                            </h6>
                            <p className="fs-13">Pediatrician</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <Link to="#" className="btn btn-primary btn-sm py-1">
                          Book Now
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to={all_routes.doctordetails}
                          className="avatar flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-04.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-shrink-0">
                          <div>
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">
                              <Link to={all_routes.doctordetails}>
                                Dr. David Lee
                              </Link>
                            </h6>
                            <p className="fs-13">Gynecologist</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <Link to="#" className="btn btn-primary btn-sm py-1">
                          Book Now
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-0">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to={all_routes.doctordetails}
                          className="avatar flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-14.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-shrink-0">
                          <div>
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">
                              <Link to={all_routes.doctordetails}>
                                Dr. Michael Smith
                              </Link>
                            </h6>
                            <p className="fs-13">Cardiologist</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <Link to="#" className="btn btn-primary btn-sm py-1">
                          Book Now
                        </Link>
                      </div>
                    </div>
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
                                >
                                  {appointment.doctor.profilePicture ? (
                                    <img
                                      src={`${API_URL}${appointment.doctor.profilePicture}`}
                                      alt="img"
                                      className="rounded-circle"
                                    />
                                  ) : (
                                    <ImageWithBasePath
                                      src="assets/img/doctors/doctor-06.jpg"
                                      alt="img"
                                      className="rounded-circle"
                                    />
                                  )}
                                </Link>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    <Link
                                      to={all_routes.doctordetails}
                                      className="fw-semibold"
                                    >
                                      {appointment.doctor.name}
                                    </Link>
                                  </h6>
                                  <p className="mb-0 fs-13">{appointment.doctor.specialization}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to={all_routes.patientDetails}
                                  className="avatar me-2"
                                >
                                  {appointment.patient.profilePicture ? (
                                    <img
                                      src={`${API_URL}${appointment.patient.profilePicture}`}
                                      alt="img"
                                      className="rounded-circle"
                                    />
                                  ) : (
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-02.jpg"
                                      alt="img"
                                      className="rounded-circle"
                                    />
                                  )}
                                </Link>
                                <div>
                                  <h6 className="fs-14 mb-1">
                                    <Link
                                      to={all_routes.patientDetails}
                                      className="fw-medium"
                                    >
                                      {appointment.patient.name}
                                    </Link>
                                  </h6>
                                  <p className="mb-0 fs-13">{appointment.patient.phone}</p>
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
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            Jesus Adams
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $6589
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      80 Appointments
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-27.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            Ezra Belcher
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $5632
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      60 Appointments
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-20.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            Glen Lentz
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $4125
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      40 Appointments
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-06.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            Bernard Griffith
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $3140
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      25 Appointments
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-25.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            John Elsass
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $2654
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      25 Appointments
                    </span>
                  </div>
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