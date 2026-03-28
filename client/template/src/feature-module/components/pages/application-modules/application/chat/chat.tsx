// import { Link } from "react-router";
// import { all_routes } from "../../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
// import 'overlayscrollbars/overlayscrollbars.css';

// const Chat = () => {
//   return (
//     <>
//     {/* ========================
//         Start Page Content
//       ========================= */}
//     <div className="page-wrapper">
//       {/* Start Content */}
//       <div className="content">
//         {/* Page Header */}
//         <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
//           <div className="flex-grow-1">
//             <h4 className="fs-18 fw-semibold mb-0">Chat</h4>
//           </div>
//           <div className="text-end">
//             <ol className="breadcrumb m-0 py-0">
//               <li className="breadcrumb-item">
//                 <Link to={all_routes.dashboard}>Home</Link>
//               </li>
//               <li className="breadcrumb-item">
//                 <Link to="#">Applications</Link>
//               </li>
//               <li className="breadcrumb-item active" aria-current="page">
//                 Chat
//               </li>
//             </ol>
//           </div>
//         </div>
//         {/* End Page Header */}
//         <div className="card shadow-none mb-0">
//           <div className="card-body p-0">
//             <div className="d-md-flex">
//               <div className="chat-user-nav">
//                 <div>
//                   <div className="d-flex align-items-center justify-content-between border-bottom p-3">
//                     <div className="d-flex align-items-center">
//                       <span className="avatar me-2 flex-shrink-0">
//                         <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="user" />
//                       </span>
//                       <div>
//                         <h6 className="fs-14 mb-1">James Hong </h6>
//                         <p className="mb-0">Admin</p>
//                       </div>
//                     </div>
//                     <Link
//                       to="#"
//                       className="btn p-2 btn-primary"
//                       data-bs-toggle="tooltip"
//                       data-bs-placement="top"
//                       data-bs-title="New Chat"
//                     >
//                       <i className="ti ti-plus" />
//                     </Link>
//                   </div>
//                   <div>
//                     <div className="input-group w-auto input-group-flat p-4 pb-0">
//                       <span className="input-group-text border-end-0">
//                         <i className="ti ti-search" />
//                       </span>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search Keyword"
//                       />
//                     </div>
//                     <OverlayScrollbarsComponent
//                         style={{ maxHeight: "calc(100vh - 18rem)" }}
//                         className="chat-users p-4"
//                         data-simplebar=""
//                       >
//                       <h6 className="mb-3">All Messages</h6>
//                       <div className="d-flex align-items-center justify-content-between rounded p-3 user-list active mb-1">
//                         <div className="d-flex align-items-center">
//                           <Link to="#" className="avatar me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-02.jpg" alt="user" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link to="#">Mark Smith</Link>
//                             </h6>
//                             <p className="mb-0 text-truncate">
//                               Hey Sam! Did you Ch...
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <span className="text-dark d-block">10:10 AM</span>
//                           <span className="d-block text-success">
//                             <i className="ti ti-checks" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
//                         <div className="d-flex align-items-center">
//                           <Link to="#" className="avatar me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-03.jpg" alt="user" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link to="#">Eugene Sikora</Link>
//                             </h6>
//                             <p className="mb-0 text-truncate">
//                               How are your Today
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <span className="text-dark d-block mb-1">08:26 AM</span>
//                           <span className="badge ms-auto bg-danger rounded-circle message-count">
//                             5
//                           </span>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
//                         <div className="d-flex align-items-center">
//                           <Link to="#" className="avatar me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-04.jpg" alt="user" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link to="#">Robert Fassett</Link>
//                             </h6>
//                             <p className="mb-0 text-truncate">
//                               Here are some of ve...
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <span className="text-dark d-block mb-1">
//                             yesterday
//                           </span>
//                           <span className="badge ms-auto bg-danger rounded-circle message-count">
//                             5
//                           </span>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
//                         <div className="d-flex align-items-center">
//                           <Link to="#" className="avatar me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-05.jpg" alt="user" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link to="#">Andrew Fletcher</Link>
//                             </h6>
//                             <p className="mb-0 text-truncate">
//                               Use tools like Trello...
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <span className="text-dark d-block mb-1">
//                             yesterday
//                           </span>
//                           <span className="d-block text-light">
//                             <i className="ti ti-checks" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
//                         <div className="d-flex align-items-center">
//                           <Link
//                             to="#"
//                             className="avatar badge-soft-purple fw-semibold me-2 flex-shrink-0"
//                           >
//                             TD
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link to="#">Tyron Derby</Link>
//                             </h6>
//                             <p className="mb-0 text-truncate">
//                               Let's reconvene next...
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <span className="text-dark d-block mb-1">12:55 PM</span>
//                           <span className="d-block text-light">
//                             <i className="ti ti-checks text-success" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
//                         <div className="d-flex align-items-center">
//                           <Link to="#" className="avatar me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-06.jpg" alt="user" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link to="#">Anna Johnson</Link>
//                             </h6>
//                             <p className="mb-0 text-truncate">
//                               How are your Today
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <span className="text-dark d-block mb-1">12:54 PM</span>
//                           <span className="d-block text-light">
//                             <i className="ti ti-check text-light" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
//                         <div className="d-flex align-items-center">
//                           <Link to="#" className="avatar me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-07.jpg" alt="user" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link to="#">Emily Davis</Link>
//                             </h6>
//                             <p className="mb-0 text-truncate">
//                               Sure, I can help with...
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <span className="text-dark d-block mb-1">11:47 PM</span>
//                           <span className="d-block text-light">
//                             <i className="ti ti-checks text-light" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
//                         <div className="d-flex align-items-center">
//                           <Link to="#" className="avatar me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-08.jpg" alt="user" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link to="#">Susan Denton</Link>
//                             </h6>
//                             <p className="mb-0 text-truncate">
//                               I'll share the meeting...
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <span className="text-dark d-block mb-1">10:43 PM</span>
//                           <span className="d-block text-light">
//                             <i className="ti ti-checks text-light" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between rounded p-3 user-list">
//                         <div className="d-flex align-items-center">
//                           <Link to="#" className="avatar me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-09.jpg" alt="user" />
//                           </Link>
//                           <div>
//                             <h6 className="fs-14 mb-1">
//                               <Link to="#">David Cruz</Link>
//                             </h6>
//                             <p className="mb-0 text-truncate">
//                               Let me know if you...
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <span className="text-dark d-block mb-1">10:43 PM</span>
//                           <span className="d-block text-light">
//                             <i className="ti ti-checks text-light" />
//                           </span>
//                         </div>
//                       </div>
//                     </OverlayScrollbarsComponent>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               <div className="flex-fill chat-messages">
//                 {/* card start */}
//                 <div className="card border-0 mb-0">
//                   <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3 p-3">
//                     <div className="d-flex align-items-center">
//                       <span className="avatar me-2 flex-shrink-0">
//                         <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
//                       </span>
//                       <div>
//                         <h6 className="fs-14 fw-semibold mb-1">Mark Smith</h6>
//                         <p className="mb-0 d-inline-flex align-items-center">
//                           <i className="ti ti-point-filled text-success" />
//                           Online
//                         </p>
//                       </div>
//                     </div>
//                     <div className="gap-2 d-flex align-items-center flex-wrap">
//                       <Link
//                         to="voice-call.html"
//                         className="btn btn-icon btn-light"
//                         data-bs-toggle="tooltip"
//                         data-bs-placement="top"
//                         aria-label="Refresh"
//                         data-bs-original-title="Voice Call"
//                       >
//                         <i className="ti ti-phone" />
//                       </Link>
//                       <Link
//                         to="video-call.html"
//                         className="btn btn-icon btn-light"
//                         data-bs-toggle="tooltip"
//                         data-bs-placement="top"
//                         aria-label="Refresh"
//                         data-bs-original-title="Video Call"
//                       >
//                         <i className="ti ti-video" />
//                       </Link>
//                       <Link
//                         to="#"
//                         className="btn btn-icon btn-light"
//                         data-bs-toggle="tooltip"
//                         data-bs-placement="top"
//                         aria-label="Refresh"
//                         data-bs-original-title="Info"
//                       >
//                         <i className="ti ti-info-circle" />
//                       </Link>
//                       <Link
//                         to="#"
//                         className="btn btn-icon btn-light close-chat d-md-none"
//                       >
//                         <i className="ti ti-x" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="card-body p-0">
//                     <OverlayScrollbarsComponent  style={{ maxHeight: "calc(100vh - 18.5rem)" }} className="message-body p-4" data-simplebar="">
//                       <div className="chat-list mb-3">
//                         <div className="d-flex align-items-start">
//                           <span className="avatar online me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
//                           </span>
//                           <div>
//                             <div className="d-flex align-items-center mb-1">
//                               <h6 className="fs-14 mb-0">Mark Smith</h6>
//                               <p className="mb-0 d-inline-flex align-items-center">
//                                 <i className="ti ti-point-filled mx-2" />
//                                 02:39 PM
//                               </p>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <div className="message-box receive-message p-3">
//                                 <p className="mb-0 fs-16">
//                                   Hey mark! Did you check out the new logo design?
//                                 </p>
//                               </div>
//                               <div className="ms-2">
//                                 <Link
//                                   to="#"
//                                   data-bs-toggle="dropdown"
//                                 >
//                                   <i className="ti ti-dots-vertical" />
//                                 </Link>
//                                 <ul className="dropdown-menu p-2">
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Reply
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Forward
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-file-export me-1" />
//                                       Copy
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Mark as Favourite
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-trash me-1" />
//                                       Delete
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-check me-1" />
//                                       Mark as Unread
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-box-align-right me-1" />
//                                       Archeive Chat
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Pin Chat
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="chat-list ms-auto mb-3">
//                         <div className="d-flex align-items-start justify-content-end">
//                           <div>
//                             <div className="d-flex align-items-center justify-content-end mb-1">
//                               <p className="mb-0 d-inline-flex align-items-center">
//                                 <i className="ti ti-checks text-success me-1" />
//                                 02:39 PM
//                                 <i className="ti ti-point-filled mx-2" />
//                               </p>
//                               <h6 className="fs-14 fw-semibold mb-0">You</h6>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <div className="me-2">
//                                 <Link
//                                   to="#"
//                                   data-bs-toggle="dropdown"
//                                 >
//                                   <i className="ti ti-dots-vertical" />
//                                 </Link>
//                                 <ul className="dropdown-menu p-2">
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Reply
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Forward
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-file-export me-1" />
//                                       Copy
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Mark as Favourite
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-trash me-1" />
//                                       Delete
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-check me-1" />
//                                       Mark as Unread
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-box-align-right me-1" />
//                                       Archeive Chat
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Pin Chat
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                               <div className="message-box sent-message p-3">
//                                 <p className="mb-0 fs-16">
//                                   Not yet. Can you send it here?
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <span className="avatar ms-2 online flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-11.jpg" alt="user" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="chat-list mb-3">
//                         <div className="d-flex align-items-start">
//                           <span className="avatar online me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
//                           </span>
//                           <div>
//                             <div className="d-flex align-items-center mb-1">
//                               <h6 className="fs-14 mb-0">Mark Smith</h6>
//                               <p className="mb-0 d-inline-flex align-items-center">
//                                 <i className="ti ti-point-filled mx-2" />
//                                 02:39 PM
//                               </p>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <div className="message-box receive-message p-3">
//                                 <p className="mb-2 fs-16">
//                                   Sure! Please check the below logo Attached!!!
//                                 </p>
//                                 <div className="d-flex align-items-center gap-2 d-none">
//                                   <span className="bg-white d-block rounded p-1">
//                                     <ImageWithBasePath
//                                       src="assets/img/favicon.png"
//                                       className="rounded"
//                                       alt="attachment"
//                                     />
//                                   </span>
//                                   <span className="bg-white d-block rounded p-1">
//                                     <ImageWithBasePath
//                                       src="assets/img/favicon.png"
//                                       className="rounded"
//                                       alt="attachment"
//                                     />
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className="ms-2">
//                                 <Link
//                                   to="#"
//                                   data-bs-toggle="dropdown"
//                                 >
//                                   <i className="ti ti-dots-vertical" />
//                                 </Link>
//                                 <ul className="dropdown-menu p-2">
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Reply
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Forward
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-file-export me-1" />
//                                       Copy
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Mark as Favourite
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-trash me-1" />
//                                       Delete
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-check me-1" />
//                                       Mark as Unread
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-box-align-right me-1" />
//                                       Archeive Chat
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Pin Chat
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="text-center">
//                         <span className="badge bg-light rounded-pill px-3 text-dark fs-14">
//                           Today
//                         </span>
//                       </div>
//                       <div className="chat-list ms-auto mb-3">
//                         <div className="d-flex align-items-start justify-content-end">
//                           <div>
//                             <div className="d-flex align-items-center justify-content-end mb-1">
//                               <p className="mb-0 d-inline-flex align-items-center">
//                                 <i className="ti ti-checks text-success me-1" />
//                                 10:00 AM
//                                 <i className="ti ti-point-filled mx-2" />
//                               </p>
//                               <h6 className="fs-14 fw-semibold mb-0">You</h6>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <div className="me-2">
//                                 <Link
//                                   to="#"
//                                   data-bs-toggle="dropdown"
//                                 >
//                                   <i className="ti ti-dots-vertical" />
//                                 </Link>
//                                 <ul className="dropdown-menu p-2">
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Reply
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Forward
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-file-export me-1" />
//                                       Copy
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Mark as Favourite
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-trash me-1" />
//                                       Delete
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-check me-1" />
//                                       Mark as Unread
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-box-align-right me-1" />
//                                       Archeive Chat
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Pin Chat
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                               <div className="message-box sent-message p-3">
//                                 <p className="mb-0 fs-16">
//                                   Looks clean! I like the font. Maybe try a
//                                   slightly darker blue?
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <span className="avatar ms-2 online flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-11.jpg" alt="user" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="chat-list mb-3">
//                         <div className="d-flex align-items-start">
//                           <span className="avatar online me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
//                           </span>
//                           <div>
//                             <div className="d-flex align-items-center mb-1">
//                               <h6 className="fs-14 mb-0">Mark Smith</h6>
//                               <p className="mb-0 d-inline-flex align-items-center">
//                                 <i className="ti ti-point-filled mx-2" />
//                                 10:05 AM
//                               </p>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <div className="message-box receive-message p-3">
//                                 <p className="mb-0 fs-16">
//                                   Perfect! That layout will work great on the
//                                   landing page. 👍
//                                 </p>
//                               </div>
//                               <div className="ms-2">
//                                 <Link
//                                   to="#"
//                                   data-bs-toggle="dropdown"
//                                 >
//                                   <i className="ti ti-dots-vertical" />
//                                 </Link>
//                                 <ul className="dropdown-menu p-2">
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Reply
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Forward
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-file-export me-1" />
//                                       Copy
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Mark as Favourite
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-trash me-1" />
//                                       Delete
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-check me-1" />
//                                       Mark as Unread
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-box-align-right me-1" />
//                                       Archeive Chat
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Pin Chat
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="chat-list ms-auto mb-3">
//                         <div className="d-flex align-items-start justify-content-end">
//                           <div>
//                             <div className="d-flex align-items-center justify-content-end mb-1">
//                               <p className="mb-0 d-inline-flex align-items-center">
//                                 <i className="ti ti-checks text-success me-1" />
//                                 10:00 AM
//                                 <i className="ti ti-point-filled mx-2" />
//                               </p>
//                               <h6 className="fs-14 fw-semibold mb-0">You</h6>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <div className="me-2">
//                                 <Link
//                                   to="#"
//                                   data-bs-toggle="dropdown"
//                                 >
//                                   <i className="ti ti-dots-vertical" />
//                                 </Link>
//                                 <ul className="dropdown-menu p-2">
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Reply
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Forward
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-file-export me-1" />
//                                       Copy
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Mark as Favourite
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-trash me-1" />
//                                       Delete
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-check me-1" />
//                                       Mark as Unread
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-box-align-right me-1" />
//                                       Archeive Chat
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Pin Chat
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                               <div className="message-box sent-message p-3">
//                                 <p className="mb-0 fs-16">
//                                   Perfect It looks Great!!!
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <span className="avatar ms-2 online flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-11.jpg" alt="user" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="chat-list">
//                         <div className="d-flex align-items-start">
//                           <span className="avatar online me-2 flex-shrink-0">
//                             <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
//                           </span>
//                           <div>
//                             <div className="d-flex align-items-center mb-1">
//                               <h6 className="fs-14 mb-0">Mark Smith</h6>
//                               <p className="mb-0 d-inline-flex align-items-center">
//                                 <i className="ti ti-point-filled mx-2" />
//                                 02:39 PM
//                               </p>
//                             </div>
//                             <div className="d-flex align-items-center">
//                               <div className="message-box receive-message p-3">
//                                 <p className="mb-0 fs-16">
//                                   Hey mark! Did you check out the new logo design?
//                                 </p>
//                               </div>
//                               <div className="ms-2">
//                                 <Link
//                                   to="#"
//                                   data-bs-toggle="dropdown"
//                                 >
//                                   <i className="ti ti-dots-vertical" />
//                                 </Link>
//                                 <ul className="dropdown-menu p-2">
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Reply
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Forward
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-file-export me-1" />
//                                       Copy
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-heart me-1" />
//                                       Mark as Favourite
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-trash me-1" />
//                                       Delete
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-check me-1" />
//                                       Mark as Unread
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-box-align-right me-1" />
//                                       Archeive Chat
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link className="dropdown-item" to="#">
//                                       <i className="ti ti-pinned me-1" />
//                                       Pin Chat
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </OverlayScrollbarsComponent>
//                     <div className="message-footer d-flex align-items-center border-top p-3">
//                       <div className="flex-fill">
//                         <input
//                           type="text"
//                           className="form-control border-0"
//                           placeholder="Type Something..."
//                         />
//                       </div>
//                       <div className="d-flex align-items-center gap-2">
//                         <Link
//                           to="#"
//                           className="btn btn-icon btn-light"
//                         >
//                           <i className="ti ti-photo-plus" />
//                         </Link>
//                         <Link
//                           to="#"
//                           className="btn btn-icon btn-light"
//                         >
//                           <i className="ti ti-mood-smile-beam" />
//                         </Link>
//                         <div>
//                           <Link
//                             to="#"
//                             className="btn btn-icon btn-outline-light"
//                             data-bs-toggle="dropdown"
//                             aria-label="more options"
//                           >
//                             <i className="ti ti-dots-vertical" />
//                           </Link>
//                           <ul className="dropdown-menu p-2">
//                             <li>
//                               <Link to="#" className="dropdown-item">
//                                 <i className="ti ti-camera-selfie me-2" />
//                                 Camera
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#" className="dropdown-item">
//                                 <i className="ti ti-photo-up me-2" />
//                                 Gallery
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#" className="dropdown-item">
//                                 <i className="ti ti-music me-2" />
//                                 Audio
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#" className="dropdown-item">
//                                 <i className="ti ti-map-pin-share me-2" />
//                                 Location
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#" className="dropdown-item">
//                                 <i className="ti ti-user-check me-2" />
//                                 Contact
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* card start */}
//               </div>
//             </div>
//           </div>
//           {/* end card body */}
//         </div>
//         {/* end card */}
//       </div>
//       {/* End Content */}
//       {/* Footer Start */}
//       <div className="footer text-center bg-white p-2 border-top">
//         <p className="text-dark mb-0">
//           2025 ©{" "}
//           <Link to="#" className="link-primary">
//             Preclinic
//           </Link>
//           , All Rights Reserved
//         </p>
//       </div>
//       {/* Footer End */}
//     </div>
//     {/* ========================
//         End Page Content
//       ========================= */}
//   </>

//   );
// };

// export default Chat;




import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { io, Socket } from "socket.io-client";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import {
  getConversations,
  getMessages,
  sendMessage,
  deleteMessage,
  deleteConversation,
  createConversation,
  type ConversationData,
  type MessageData,
} from "../../../../../../api/chatService";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

// ✅ Current logged-in user — इथे तुमचा logged in user name/image लावा
// Later auth context / localStorage से fetch करा
const MY_NAME = "You";
const MY_IMAGE = "assets/img/users/user-01.jpg";

let socket: Socket;

const Chat = () => {
  const [conversations, setConversations] = useState<ConversationData[]>([]);
  const [activeConversation, setActiveConversation] = useState<ConversationData | null>(null);
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState("");
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [newContactName, setNewContactName] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<any>(null);

  // ===== Socket.io Setup =====
  useEffect(() => {
    socket = io(BACKEND_URL, { transports: ["websocket"] });

    socket.on("receive_message", (msg: MessageData) => {
      setMessages((prev) => [...prev, msg]);
      scrollToBottom();
    });

    socket.on("conversation_updated", () => {
      fetchConversations();
    });

    socket.on("user_typing", ({ sender }: { sender: string }) => {
      setTypingUser(sender);
      setIsTyping(true);
    });

    socket.on("user_stop_typing", () => {
      setIsTyping(false);
      setTypingUser("");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // ===== Fetch conversations on mount =====
  useEffect(() => {
    fetchConversations();
  }, []);

  // ===== Scroll to bottom when messages change =====
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchConversations = async () => {
    try {
      const res = await getConversations();
      if (res.success) setConversations(res.data);
    } catch (err) {
      console.error("Fetch conversations error:", err);
    }
  };

  // ===== Open conversation =====
  const openConversation = async (conv: ConversationData) => {
    // Leave previous room
    if (activeConversation) {
      socket.emit("leave_conversation", activeConversation._id);
    }

    setActiveConversation(conv);
    setLoading(true);

    try {
      const res = await getMessages(conv._id);
      if (res.success) setMessages(res.data);
    } catch (err) {
      console.error("Fetch messages error:", err);
    } finally {
      setLoading(false);
    }

    // Join new room
    socket.emit("join_conversation", conv._id);

    // Update unread count locally
    setConversations((prev) =>
      prev.map((c) => (c._id === conv._id ? { ...c, unreadCount: 0 } : c))
    );
  };

  // ===== Send message =====
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeConversation) return;

    const msgText = newMessage.trim();
    setNewMessage("");

    // Stop typing indicator
    socket.emit("stop_typing", { conversationId: activeConversation._id });

    try {
      const res = await sendMessage({
        conversationId: activeConversation._id,
        sender: MY_NAME,
        senderImage: MY_IMAGE,
        text: msgText,
      });

      if (res.success) {
        // Add to local messages immediately
        setMessages((prev) => [...prev, res.data]);

        // Emit to socket for real-time delivery
        socket.emit("send_message", res.data);

        // Update conversation list
        fetchConversations();
      }
    } catch (err) {
      console.error("Send message error:", err);
    }
  };

  // ===== Typing indicator =====
  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);

    if (!activeConversation) return;

    socket.emit("typing", {
      conversationId: activeConversation._id,
      sender: MY_NAME,
    });

    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("stop_typing", { conversationId: activeConversation._id });
    }, 1500);
  };

  // ===== Delete message =====
  const handleDeleteMessage = async (msgId: string) => {
    try {
      await deleteMessage(msgId);
      setMessages((prev) => prev.filter((m) => m._id !== msgId));
    } catch (err) {
      console.error("Delete message error:", err);
    }
  };

  // ===== Delete conversation =====
  const handleDeleteConversation = async (convId: string) => {
    if (!confirm("Delete this conversation?")) return;
    try {
      await deleteConversation(convId);
      setConversations((prev) => prev.filter((c) => c._id !== convId));
      if (activeConversation?._id === convId) {
        setActiveConversation(null);
        setMessages([]);
      }
    } catch (err) {
      console.error("Delete conversation error:", err);
    }
  };

  // ===== New Conversation =====
  const handleNewConversation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContactName.trim()) return;

    try {
      const res = await createConversation({
        participantName: newContactName.trim(),
        myName: MY_NAME,
        myImage: MY_IMAGE,
      });
      if (res.success) {
        setConversations((prev) => [res.data, ...prev]);
        setShowNewChatModal(false);
        setNewContactName("");
        openConversation(res.data);
      }
    } catch (err) {
      console.error("New conversation error:", err);
    }
  };

  // ===== Helpers =====
  const getOtherParticipant = (conv: ConversationData) => {
    return conv.participants.find((p) => p.name !== MY_NAME) || conv.participants[0];
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  const formatConvTime = (dateStr: string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    if (diff < 86400000) return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    if (diff < 172800000) return "Yesterday";
    return d.toLocaleDateString("en-US", { weekday: "short" });
  };

  const filteredConversations = conversations.filter((c) => {
    const other = getOtherParticipant(c);
    return other.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Chat</h4>
            </div>
          </div>

          <div className="card shadow-none mb-0">
            <div className="card-body p-0">
              <div className="d-md-flex" style={{ height: "calc(100vh - 12rem)" }}>

                {/* ===== LEFT SIDEBAR ===== */}
                <div className="chat-user-nav" style={{ width: "300px", borderRight: "1px solid #e9ecef", display: "flex", flexDirection: "column" }}>
                  {/* Header */}
                  <div className="d-flex align-items-center justify-content-between border-bottom p-3" style={{ flexShrink: 0 }}>
                    <div className="d-flex align-items-center">
                      <span className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath src={MY_IMAGE} alt="user" />
                      </span>
                      <div>
                        <h6 className="fs-14 mb-0">{MY_NAME}</h6>
                        <p className="mb-0 text-muted fs-12">Admin</p>
                      </div>
                    </div>
                    <button
                      className="btn p-2 btn-primary btn-sm"
                      onClick={() => setShowNewChatModal(true)}
                      title="New Chat"
                    >
                      <i className="ti ti-plus" />
                    </button>
                  </div>

                  {/* Search */}
                  <div className="p-3 pb-0" style={{ flexShrink: 0 }}>
                    <div className="input-group input-group-flat">
                      <span className="input-group-text border-end-0">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Conversation List */}
                  <div style={{ overflowY: "auto", flex: 1, padding: "1rem" }}>
                    <h6 className="mb-3 text-muted fs-12 text-uppercase">All Messages</h6>
                    {filteredConversations.length === 0 ? (
                      <div className="text-center text-muted py-4">
                        <i className="ti ti-message-off fs-2 d-block mb-2" />
                        <p className="fs-13">No conversations yet</p>
                      </div>
                    ) : (
                      filteredConversations.map((conv) => {
                        const other = getOtherParticipant(conv);
                        const isActive = activeConversation?._id === conv._id;
                        return (
                          <div
                            key={conv._id}
                            className={`d-flex align-items-center justify-content-between rounded p-2 mb-1 cursor-pointer ${isActive ? "bg-primary bg-opacity-10" : "user-list"}`}
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              className="d-flex align-items-center flex-fill overflow-hidden"
                              onClick={() => openConversation(conv)}
                            >
                              <div className="avatar me-2 flex-shrink-0" style={{ width: "38px", height: "38px" }}>
                                {other.image ? (
                                  <img src={other.image} alt={other.name}
                                    className="rounded-circle w-100 h-100 object-fit-cover" />
                                ) : (
                                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center w-100 h-100">
                                    <span className="text-white fw-bold fs-14">
                                      {other.name.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="overflow-hidden flex-fill">
                                <h6 className="fs-14 mb-0 text-truncate">{other.name}</h6>
                                <p className="mb-0 text-muted fs-12 text-truncate">
                                  {conv.lastMessage || "No messages yet"}
                                </p>
                              </div>
                            </div>
                            <div className="text-end ms-2" style={{ flexShrink: 0 }}>
                              <span className="text-muted d-block fs-11">
                                {formatConvTime(conv.lastMessageTime)}
                              </span>
                              {conv.unreadCount > 0 && (
                                <span className="badge bg-danger rounded-circle fs-11">
                                  {conv.unreadCount}
                                </span>
                              )}
                              <div className="dropdown d-inline">
                                <Link to="#" data-bs-toggle="dropdown" className="ms-1">
                                  <i className="ti ti-dots-vertical fs-12 text-muted" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end p-2">
                                  <li>
                                    <button className="dropdown-item text-danger d-flex align-items-center" type="button"
                                      onClick={() => handleDeleteConversation(conv._id)}>
                                      <i className="ti ti-trash me-2" />Delete
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* ===== RIGHT CHAT AREA ===== */}
                <div className="flex-fill d-flex flex-column" style={{ overflow: "hidden" }}>
                  {activeConversation ? (
                    <>
                      {/* Chat Header */}
                      <div className="d-flex align-items-center justify-content-between border-bottom p-3" style={{ flexShrink: 0 }}>
                        <div className="d-flex align-items-center">
                          <div className="avatar me-2" style={{ width: "38px", height: "38px" }}>
                            {getOtherParticipant(activeConversation).image ? (
                              <img src={getOtherParticipant(activeConversation).image}
                                className="rounded-circle w-100 h-100 object-fit-cover" alt="user" />
                            ) : (
                              <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center w-100 h-100">
                                <span className="text-white fw-bold">
                                  {getOtherParticipant(activeConversation).name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                            )}
                          </div>
                          <div>
                            <h6 className="fs-14 fw-semibold mb-0">
                              {getOtherParticipant(activeConversation).name}
                            </h6>
                            <p className="mb-0 fs-12 text-success d-flex align-items-center">
                              <i className="ti ti-point-filled me-1" />Online
                            </p>
                          </div>
                        </div>
                        <div className="d-flex gap-2">
                          <button className="btn btn-icon btn-light btn-sm" title="Voice Call">
                            <i className="ti ti-phone" />
                          </button>
                          <button className="btn btn-icon btn-light btn-sm" title="Video Call">
                            <i className="ti ti-video" />
                          </button>
                        </div>
                      </div>

                      {/* Messages Area */}
                      <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
                        {loading ? (
                          <div className="text-center py-4">
                            <div className="spinner-border spinner-border-sm text-primary" />
                          </div>
                        ) : messages.length === 0 ? (
                          <div className="text-center text-muted py-5">
                            <i className="ti ti-message fs-1 d-block mb-2" />
                            <p>No messages yet. Say hello! 👋</p>
                          </div>
                        ) : (
                          messages.map((msg) => {
                            const isMe = msg.sender === MY_NAME;
                            return (
                              <div
                                key={msg._id}
                                className={`chat-list mb-3 ${isMe ? "ms-auto" : ""}`}
                              >
                                <div className={`d-flex align-items-start ${isMe ? "justify-content-end" : ""}`}>
                                  {/* Other person avatar */}
                                  {!isMe && (
                                    <div className="avatar me-2 flex-shrink-0" style={{ width: "34px", height: "34px" }}>
                                      {msg.senderImage ? (
                                        <img src={msg.senderImage} className="rounded-circle w-100 h-100 object-fit-cover" alt={msg.sender} />
                                      ) : (
                                        <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center w-100 h-100">
                                          <span className="text-white fw-bold fs-12">
                                            {msg.sender.charAt(0).toUpperCase()}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  <div style={{ maxWidth: "65%" }}>
                                    <div className={`d-flex align-items-center mb-1 ${isMe ? "justify-content-end" : ""}`}>
                                      <h6 className="fs-13 mb-0 me-2">{isMe ? "You" : msg.sender}</h6>
                                      <span className="text-muted fs-11">{formatTime(msg.createdAt)}</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1">
                                      {isMe && (
                                        <div className="dropdown">
                                          <Link to="#" data-bs-toggle="dropdown">
                                            <i className="ti ti-dots-vertical text-muted fs-12" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-2">
                                            <li>
                                              <button className="dropdown-item text-danger d-flex align-items-center fs-13" type="button"
                                                onClick={() => handleDeleteMessage(msg._id)}>
                                                <i className="ti ti-trash me-2" />Delete
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      )}
                                      <div
                                        className={`p-3 rounded-3 ${isMe
                                          ? "bg-primary text-white"
                                          : "bg-light text-dark border"
                                          }`}
                                        style={{ wordBreak: "break-word" }}
                                      >
                                        <p className="mb-0 fs-14">{msg.text}</p>
                                      </div>
                                      {!isMe && (
                                        <div className="dropdown">
                                          <Link to="#" data-bs-toggle="dropdown">
                                            <i className="ti ti-dots-vertical text-muted fs-12" />
                                          </Link>
                                          <ul className="dropdown-menu p-2">
                                            <li>
                                              <button className="dropdown-item text-danger d-flex align-items-center fs-13" type="button"
                                                onClick={() => handleDeleteMessage(msg._id)}>
                                                <i className="ti ti-trash me-2" />Delete
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                    {isMe && (
                                      <div className="text-end mt-1">
                                        <i className="ti ti-checks text-success fs-12" />
                                      </div>
                                    )}
                                  </div>

                                  {/* My avatar */}
                                  {isMe && (
                                    <div className="avatar ms-2 flex-shrink-0" style={{ width: "34px", height: "34px" }}>
                                      <img src={MY_IMAGE} className="rounded-circle w-100 h-100 object-fit-cover" alt="You" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })
                        )}

                        {/* Typing indicator */}
                        {isTyping && (
                          <div className="d-flex align-items-center text-muted fs-13 mb-2">
                            <span className="me-2">{typingUser} is typing</span>
                            <span className="d-flex gap-1">
                              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#adb5bd", animation: "blink 1.2s 0s infinite" }} />
                              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#adb5bd", animation: "blink 1.2s 0.2s infinite" }} />
                              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#adb5bd", animation: "blink 1.2s 0.4s infinite" }} />
                            </span>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>

                      {/* Message Input */}
                      <div className="border-top p-3" style={{ flexShrink: 0 }}>
                        <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type something..."
                            value={newMessage}
                            onChange={handleTyping}
                          />
                          <button type="submit" className="btn btn-primary px-3" disabled={!newMessage.trim()}>
                            <i className="ti ti-send" />
                          </button>
                        </form>
                      </div>
                    </>
                  ) : (
                    /* Empty State */
                    <div className="flex-fill d-flex align-items-center justify-content-center text-center">
                      <div>
                        <i className="ti ti-message-2 text-muted" style={{ fontSize: "4rem" }} />
                        <h5 className="mt-3 text-muted">Select a conversation</h5>
                        <p className="text-muted fs-14">Choose from existing conversations or start a new one</p>
                        <button className="btn btn-primary" onClick={() => setShowNewChatModal(true)}>
                          <i className="ti ti-plus me-2" />New Chat
                        </button>
                      </div>
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
            2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved
          </p>
        </div>
      </div>

      {/* ===== New Chat Modal ===== */}
      {showNewChatModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">New Chat</h5>
                <button type="button" className="btn-close" onClick={() => setShowNewChatModal(false)} />
              </div>
              <form onSubmit={handleNewConversation}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Contact Name <span className="text-danger">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Dr. Ramesh Kumar"
                      value={newContactName}
                      onChange={(e) => setNewContactName(e.target.value)}
                      autoFocus
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={() => setShowNewChatModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={!newContactName.trim()}>
                    Start Chat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Typing dots animation */}
      <style>{`
        @keyframes blink {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Chat;