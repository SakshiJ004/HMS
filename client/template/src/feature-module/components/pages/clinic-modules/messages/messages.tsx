// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";

// const Messages = () => {
//   return (
//     <>
//       {/* ========================
//         Start Page Content
//       ========================= */}
//       <div className="page-wrapper">
//         <div className="content content-two">
//           <div className="chat-wrapper">
//             {/* Chats sidebar Start */}
//             <div className="sidebar-group ">
//               <div id="chats" className="sidebar-content active slimscroll">
//                 <div className="slimscroll">
//                   <div className="chat-search-header">
//                     <div className="header-title d-flex align-items-center justify-content-between">
//                       <h6 className="mb-3">Chats</h6>
//                     </div>
//                     {/* Chat Search */}
//                     <div className="search-wrap">
//                       <form>
//                         <div className="input-group">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Search"
//                           />
//                           <span className="input-group-text">
//                             <i className="isax isax-search-normal-1" />
//                           </span>
//                         </div>
//                       </form>
//                     </div>
//                     {/* /Chat Search */}
//                   </div>
//                   <div className="sidebar-body chat-body" id="chatsidebar">
//                     {/* Left Chat Title */}
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <h6 className="chat-title mb-0">All Chats</h6>
//                     </div>
//                     {/* /Left Chat Title */}
//                     <div className="chat-users-wrap">
//                       <div className="chat-list">
//                         <Link to={all_routes.chat} className="chat-user-list">
//                           <div className="avatar avatar-lg online me-2">
//                             <ImageWithBasePath
//                               src="assets/img/profiles/avatar-10.jpg"
//                               className="rounded-circle"
//                               alt="image"
//                             />
//                           </div>
//                           <div className="chat-user-info">
//                             <div className="chat-user-msg">
//                               <h6>Anthony Lewis</h6>
//                               <p>
//                                 <span className="animate-typing">
//                                   is typing
//                                   <span className="dot" />
//                                   <span className="dot" />
//                                   <span className="dot" />
//                                 </span>
//                               </p>
//                             </div>
//                             <div className="chat-user-time">
//                               <span className="time">02:40 PM</span>
//                               <div className="chat-pin">
//                                 <i className="ti ti-pin me-2" />
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                         <div className="chat-dropdown">
//                           <Link className="#" to="#" data-bs-toggle="dropdown">
//                             <i className="ti ti-dots-vertical" />
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-end p-3">
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-box-align-right me-2" />
//                                 Archive Chat
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-heart me-2" />
//                                 Mark as Favourite
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-check me-2" />
//                                 Mark as Unread
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-pinned me-2" />
//                                 Pin Chats
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-trash me-2" />
//                                 Delete
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="chat-list">
//                         <Link to={all_routes.chat} className="chat-user-list">
//                           <div className="avatar avatar-lg online me-2">
//                             <ImageWithBasePath
//                               src="assets/img/profiles/avatar-01.jpg"
//                               className="rounded-circle"
//                               alt="image"
//                             />
//                           </div>
//                           <div className="chat-user-info">
//                             <div className="chat-user-msg">
//                               <h6>Elliot Murray</h6>
//                               <p>
//                                 <i className="ti ti-file me-1" />
//                                 Document
//                               </p>
//                             </div>
//                             <div className="chat-user-time">
//                               <span className="time">06:12 AM</span>
//                               <div className="chat-pin">
//                                 <i className="ti ti-checks text-success" />
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                         <div className="chat-dropdown">
//                           <Link className="#" to="#" data-bs-toggle="dropdown">
//                             <i className="ti ti-dots-vertical" />
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-end p-3">
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-box-align-right me-2" />
//                                 Archive Chat
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-heart me-2" />
//                                 Mark as Favourite
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-check me-2" />
//                                 Mark as Unread
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-pinned me-2" />
//                                 Pin Chats
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-trash me-2" />
//                                 Delete
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="chat-list">
//                         <Link to={all_routes.chat} className="chat-user-list">
//                           <div className="avatar avatar-lg online me-2">
//                             <ImageWithBasePath
//                               src="assets/img/profiles/avatar-02.jpg"
//                               className="rounded-circle"
//                               alt="image"
//                             />
//                           </div>
//                           <div className="chat-user-info">
//                             <div className="chat-user-msg">
//                               <h6>Stephan Peralt</h6>
//                               <p className="text-danger">
//                                 <i className="ti ti-video-off me-2" />
//                                 Missed Video Call
//                               </p>
//                             </div>
//                             <div className="chat-user-time">
//                               <span className="time">03:15 AM</span>
//                               <div className="chat-pin">
//                                 <i className="ti ti-pin" />
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                         <div className="chat-dropdown">
//                           <Link className="#" to="#" data-bs-toggle="dropdown">
//                             <i className="ti ti-dots-vertical" />
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-end p-3">
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-box-align-right me-2" />
//                                 Archive Chat
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-heart me-2" />
//                                 Mark as Favourite
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-check me-2" />
//                                 Mark as Unread
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-pinned me-2" />
//                                 Pin Chats
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-trash me-2" />
//                                 Delete
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="chat-list">
//                         <Link to={all_routes.chat} className="chat-user-list">
//                           <div className="avatar avatar-lg online me-2">
//                             <ImageWithBasePath
//                               src="assets/img/profiles/avatar-18.jpg"
//                               className="rounded-circle"
//                               alt="image"
//                             />
//                           </div>
//                           <div className="chat-user-info">
//                             <div className="chat-user-msg">
//                               <h6>Rebecca Smtih</h6>
//                               <p>Hi How are you 🔥</p>
//                             </div>
//                             <div className="chat-user-time">
//                               <span className="time">Sunday</span>
//                               <div className="chat-pin">
//                                 <span className="count-message fs-12 fw-semibold">
//                                   25
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                         <div className="chat-dropdown">
//                           <Link className="#" to="#" data-bs-toggle="dropdown">
//                             <i className="ti ti-dots-vertical" />
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-end p-3">
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-box-align-right me-2" />
//                                 Archive Chat
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-heart me-2" />
//                                 Mark as Favourite
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-check me-2" />
//                                 Mark as Unread
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-pinned me-2" />
//                                 Pin Chats
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-trash me-2" />
//                                 Delete
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="chat-list">
//                         <Link to={all_routes.chat} className="chat-user-list">
//                           <div className="avatar avatar-lg online me-2">
//                             <ImageWithBasePath
//                               src="assets/img/profiles/avatar-03.jpg"
//                               className="rounded-circle"
//                               alt="image"
//                             />
//                           </div>
//                           <div className="chat-user-info">
//                             <div className="chat-user-msg">
//                               <h6>Lori Broaddus</h6>
//                               <p>Do you know which...</p>
//                             </div>
//                             <div className="chat-user-time">
//                               <span className="time">02:40 PM</span>
//                               <div className="chat-pin">
//                                 <i className="ti ti-heart-filled text-warning" />
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                         <div className="chat-dropdown">
//                           <Link className="#" to="#" data-bs-toggle="dropdown">
//                             <i className="ti ti-dots-vertical" />
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-end p-3">
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-box-align-right me-2" />
//                                 Archive Chat
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-heart me-2" />
//                                 Mark as Favourite
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-check me-2" />
//                                 Mark as Unread
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-pinned me-2" />
//                                 Pin Chats
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-trash me-2" />
//                                 Delete
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="chat-list">
//                         <Link to={all_routes.chat} className="chat-user-list">
//                           <div className="avatar avatar-lg online me-2">
//                             <ImageWithBasePath
//                               src="assets/img/profiles/avatar-15.jpg"
//                               className="rounded-circle"
//                               alt="image"
//                             />
//                           </div>
//                           <div className="chat-user-info">
//                             <div className="chat-user-msg">
//                               <h6>Brian Villalobos</h6>
//                               <p>Do you know which...</p>
//                             </div>
//                             <div className="chat-user-time">
//                               <span className="time">06:12 AM</span>
//                               <div className="chat-pin">
//                                 <i className="ti ti-pin me-2" />
//                                 <i className="ti ti-checks text-success" />
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                         <div className="chat-dropdown">
//                           <Link className="#" to="#" data-bs-toggle="dropdown">
//                             <i className="ti ti-dots-vertical" />
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-end p-3">
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-box-align-right me-2" />
//                                 Archive Chat
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-heart me-2" />
//                                 Mark as Favourite
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-check me-2" />
//                                 Mark as Unread
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-pinned me-2" />
//                                 Pin Chats
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-trash me-2" />
//                                 Delete
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="chat-list">
//                         <Link to={all_routes.chat} className="chat-user-list">
//                           <div className="avatar avatar-lg online me-2">
//                             <ImageWithBasePath
//                               src="assets/img/profiles/avatar-08.jpg"
//                               className="rounded-circle"
//                               alt="image"
//                             />
//                           </div>
//                           <div className="chat-user-info">
//                             <div className="chat-user-msg">
//                               <h6>Linda Ray</h6>
//                               <p>
//                                 <i className="ti ti-photo me-2" />
//                                 Photo
//                               </p>
//                             </div>
//                             <div className="chat-user-time">
//                               <span className="time">Wednesday</span>
//                               <div className="chat-pin">
//                                 <span className="count-message fs-12 fw-semibold">
//                                   12
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                         <div className="chat-dropdown">
//                           <Link className="#" to="#" data-bs-toggle="dropdown">
//                             <i className="ti ti-dots-vertical" />
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-end p-3">
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-box-align-right me-2" />
//                                 Archive Chat
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-heart me-2" />
//                                 Mark as Favourite
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-check me-2" />
//                                 Mark as Unread
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-pinned me-2" />
//                                 Pin Chats
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-trash me-2" />
//                                 Delete
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="chat-list">
//                         <Link
//                           to={all_routes.chat}
//                           className="chat-user-list mb-0"
//                         >
//                           <div className="avatar avatar-lg online me-2">
//                             <ImageWithBasePath
//                               src="assets/img/profiles/avatar-07.jpg"
//                               className="rounded-circle"
//                               alt="image"
//                             />
//                           </div>
//                           <div className="chat-user-info">
//                             <div className="chat-user-msg">
//                               <h6>Doglas Martini</h6>
//                               <p className="text-success">
//                                 <i className="ti ti-video-plus text-success me-2" />
//                                 Incoming Video Call
//                               </p>
//                             </div>
//                             <div className="chat-user-time">
//                               <span className="time">02:40 PM</span>
//                               <div className="chat-pin">
//                                 <i className="ti ti-heart-filled text-warning" />
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                         <div className="chat-dropdown">
//                           <Link className="#" to="#" data-bs-toggle="dropdown">
//                             <i className="ti ti-dots-vertical" />
//                           </Link>
//                           <ul className="dropdown-menu dropdown-menu-end p-3">
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-box-align-right me-2" />
//                                 Archive Chat
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-heart me-2" />
//                                 Mark as Favourite
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-check me-2" />
//                                 Mark as Unread
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-pinned me-2" />
//                                 Pin Chats
//                               </Link>
//                             </li>
//                             <li>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="ti ti-trash me-2" />
//                                 Delete
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Chats sidebar End */}
//             {/* Start Chat */}

//             <div className="chat chat-messages show" id="middle">
//               <div>
//                 <div className="chat-header">
//                   <div className="user-details">
//                     <div className="d-xl-none">
//                       <Link className="text-muted chat-close me-2" to="#">
//                         <i className="fas fa-arrow-left" />
//                       </Link>
//                     </div>
//                     <div className="avatar avatar-lg online flex-shrink-0">
//                       <ImageWithBasePath
//                         src="assets/img/profiles/avatar-01.jpg"
//                         className="rounded-circle"
//                         alt="image"
//                       />
//                     </div>
//                     <div className="ms-2 overflow-hidden">
//                       <h6 className="mb-0">Anthony Lewis</h6>
//                       <span className="last-seen">Online</span>
//                     </div>
//                   </div>
//                   <div className="chat-options">
//                     <ul className="list-unstyled">
//                       <li>
//                         <Link
//                           to="#"
//                           className="btn chat-search-btn"
//                           data-bs-toggle="tooltip"
//                           data-bs-placement="bottom"
//                           title="Search"
//                         >
//                           <i className="isax isax-search-normal-1" />
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           className="btn no-bg"
//                           to="#"
//                           data-bs-toggle="dropdown"
//                         >
//                           <i className="ti ti-dots-vertical" />
//                         </Link>
//                         <ul className="dropdown-menu dropdown-menu-end p-3">
//                           <li>
//                             <Link to="#" className="dropdown-item">
//                               <i className="ti ti-volume-off me-2" />
//                               Mute Notification
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="#" className="dropdown-item">
//                               <i className="ti ti-clock-hour-4 me-2" />
//                               Disappearing Message
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="#" className="dropdown-item">
//                               <i className="ti ti-clear-all me-2" />
//                               Clear Message
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="#" className="dropdown-item">
//                               <i className="ti ti-trash me-2" />
//                               Delete Chat
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="#" className="dropdown-item">
//                               <i className="ti ti-ban me-2" />
//                               Block
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                   {/* Chat Search */}
//                   <div className="chat-search search-wrap contact-search">
//                     <form>
//                       <div className="input-group">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Search Contacts"
//                         />
//                         <span className="input-group-text">
//                           <i className="isax isax-search-normal-1" />
//                         </span>
//                       </div>
//                     </form>
//                   </div>
//                   {/* /Chat Search */}
//                 </div>
//                 <div className="chat-body chat-page-group slimscroll">
//                   <div className="messages">
//                     <div className="chats">
//                       <div className="chat-avatar">
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-01.jpg"
//                           className="rounded-circle"
//                           alt="image"
//                         />
//                       </div>
//                       <div className="chat-content">
//                         <div className="chat-info">
//                           <div className="message-content">
//                             Hi John, I wanted to update you on a new company
//                             policy regarding remote work.
//                             <div className="emoj-group">
//                               <ul className="list-unstyled">
//                                 <li className="emoj-action">
//                                   <Link to="#">
//                                     <i className="ti ti-mood-smile" />
//                                   </Link>
//                                   <div className="emoj-group-list">
//                                     <ul>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-02.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-05.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-06.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-07.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-08.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-03.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-10.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-09.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li className="add-emoj">
//                                         <Link to="#">
//                                           <i className="ti ti-plus" />
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </li>
//                                 <li>
//                                   <Link to="#">
//                                     <i className="ti ti-arrow-forward-up" />
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="chat-actions">
//                             <Link
//                               className="#"
//                               to="#"
//                               data-bs-toggle="dropdown"
//                             >
//                               <i className="ti ti-dots-vertical" />
//                             </Link>
//                             <ul className="dropdown-menu dropdown-menu-end p-3">
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Reply
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Forward
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-file-export me-2" />
//                                   Copy
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Mark as Favourite
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-trash me-2" />
//                                   Delete
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-check me-2" />
//                                   Mark as Unread
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-box-align-right me-2" />
//                                   Archeive Chat
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Pin Chat
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <div className="chat-profile-name">
//                           <h6>
//                             Anthony Lewis
//                             <i className="ti ti-circle-filled fs-7 mx-2" />
//                             <span className="chat-time">08:00 AM</span>
//                           </h6>
//                         </div>
//                         <div className="chat-info">
//                           <div className="message-content">
//                             Do you have a moment?
//                             <div className="emoj-group">
//                               <ul className="list-unstyled">
//                                 <li className="emoj-action">
//                                   <Link to="#">
//                                     <i className="ti ti-mood-smile" />
//                                   </Link>
//                                   <div className="emoj-group-list">
//                                     <ul>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-02.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-05.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-06.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-07.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-08.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-03.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-10.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-09.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li className="add-emoj">
//                                         <Link to="#">
//                                           <i className="ti ti-plus" />
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </li>
//                                 <li>
//                                   <Link to="#">
//                                     <i className="ti ti-arrow-forward-up" />
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="chat-actions">
//                             <Link
//                               className="#"
//                               to="#"
//                               data-bs-toggle="dropdown"
//                             >
//                               <i className="ti ti-dots-vertical" />
//                             </Link>
//                             <ul className="dropdown-menu dropdown-menu-end p-3">
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Reply
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Forward
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-file-export me-2" />
//                                   Copy
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Mark as Favourite
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-trash me-2" />
//                                   Delete
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-check me-2" />
//                                   Mark as Unread
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-box-align-right me-2" />
//                                   Archeive Chat
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Pin Chat
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <div className="chat-profile-name">
//                           <h6>
//                             Anthony Lewis
//                             <i className="ti ti-circle-filled fs-7 mx-2" />
//                             <span className="chat-time">08:00 AM</span>
//                           </h6>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="chats chats-right">
//                       <div className="chat-content">
//                         <div className="chat-info">
//                           <div className="chat-actions">
//                             <Link
//                               className="#"
//                               to="#"
//                               data-bs-toggle="dropdown"
//                             >
//                               <i className="ti ti-dots-vertical" />
//                             </Link>
//                             <ul className="dropdown-menu dropdown-menu-end p-3">
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Reply
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Forward
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-file-export me-2" />
//                                   Copy
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Mark as Favourite
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-trash me-2" />
//                                   Delete
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-check me-2" />
//                                   Mark as Unread
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-box-align-right me-2" />
//                                   Archeive Chat
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Pin Chat
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                           <div className="message-content">
//                             Sure, Sarah. What’s the new policy?
//                             <div className="emoj-group">
//                               <ul className="list-unstyled">
//                                 <li className="emoj-action">
//                                   <Link to="#">
//                                     <i className="ti ti-mood-smile" />
//                                   </Link>
//                                   <div className="emoj-group-list">
//                                     <ul>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-02.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-05.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-06.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-07.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-08.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-03.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-10.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-09.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li className="add-emoj">
//                                         <Link to="#">
//                                           <i className="ti ti-plus" />
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </li>
//                                 <li>
//                                   <Link to="#">
//                                     <i className="ti ti-arrow-forward-up" />
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="chat-profile-name text-end">
//                           <h6>
//                             You
//                             <i className="ti ti-circle-filled fs-7 mx-2" />
//                             <span className="chat-time">08:00 AM</span>
//                             <span className="msg-read success">
//                               <i className="ti ti-checks" />
//                             </span>
//                           </h6>
//                         </div>
//                       </div>
//                       <div className="chat-avatar">
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-14.jpg"
//                           className="rounded-circle dreams_chat"
//                           alt="image"
//                         />
//                       </div>
//                     </div>
//                     <div className="chats">
//                       <div className="chat-avatar">
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-01.jpg"
//                           className="rounded-circle"
//                           alt="image"
//                         />
//                       </div>
//                       <div className="chat-content">
//                         <div className="chat-info">
//                           <div className="message-content">
//                             Starting next month, we’ll be implementing a hybrid
//                             work model. Employees can work from home up to three
//                             days a week.
//                             <div className="emoj-group">
//                               <ul className="list-unstyled">
//                                 <li className="emoj-action">
//                                   <Link to="#">
//                                     <i className="ti ti-mood-smile" />
//                                   </Link>
//                                   <div className="emoj-group-list">
//                                     <ul>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-02.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-05.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-06.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-07.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-08.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-03.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-10.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-09.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li className="add-emoj">
//                                         <Link to="#">
//                                           <i className="ti ti-plus" />
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </li>
//                                 <li>
//                                   <Link to="#">
//                                     <i className="ti ti-arrow-forward-up" />
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="chat-actions">
//                             <Link
//                               className="#"
//                               to="#"
//                               data-bs-toggle="dropdown"
//                             >
//                               <i className="ti ti-dots-vertical" />
//                             </Link>
//                             <ul className="dropdown-menu dropdown-menu-end p-3">
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Reply
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Forward
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-file-export me-2" />
//                                   Copy
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Mark as Favourite
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-trash me-2" />
//                                   Delete
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-check me-2" />
//                                   Mark as Unread
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-box-align-right me-2" />
//                                   Archeive Chat
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Pin Chat
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <div className="chat-profile-name">
//                           <h6>
//                             Anthony Lewis
//                             <i className="ti ti-circle-filled fs-7 mx-2" />
//                             <span className="chat-time">08:00 AM</span>
//                           </h6>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="chats chats-right">
//                       <div className="chat-content">
//                         <div className="chat-info">
//                           <div className="chat-actions">
//                             <Link
//                               className="#"
//                               to="#"
//                               data-bs-toggle="dropdown"
//                             >
//                               <i className="ti ti-dots-vertical" />
//                             </Link>
//                             <ul className="dropdown-menu dropdown-menu-end p-3">
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Reply
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Forward
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-file-export me-2" />
//                                   Copy
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Mark as Favourite
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-trash me-2" />
//                                   Delete
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-check me-2" />
//                                   Mark as Unread
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-box-align-right me-2" />
//                                   Archeive Chat
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Pin Chat
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                           <div className="message-content">
//                             That sounds great! Are there any specific
//                             requirements for tracking our hours when working
//                             remotely?
//                             <div className="emoj-group">
//                               <ul className="list-unstyled">
//                                 <li className="emoj-action">
//                                   <Link to="#">
//                                     <i className="ti ti-mood-smile" />
//                                   </Link>
//                                   <div className="emoj-group-list">
//                                     <ul>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-02.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-05.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-06.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-07.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-08.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-03.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-10.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-09.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li className="add-emoj">
//                                         <Link to="#">
//                                           <i className="ti ti-plus" />
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </li>
//                                 <li>
//                                   <Link to="#">
//                                     <i className="ti ti-arrow-forward-up" />
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="chat-profile-name text-end">
//                           <h6>
//                             You
//                             <i className="ti ti-circle-filled fs-7 mx-2" />
//                             <span className="chat-time">08:00 AM</span>
//                             <span className="msg-read success">
//                               <i className="ti ti-checks" />
//                             </span>
//                           </h6>
//                         </div>
//                       </div>
//                       <div className="chat-avatar">
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-14.jpg"
//                           className="rounded-circle dreams_chat"
//                           alt="image"
//                         />
//                       </div>
//                     </div>
//                     <div className="chat-line">
//                       <span className="chat-date">Today, July 24</span>
//                     </div>
//                     <div className="chats">
//                       <div className="chat-avatar">
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-01.jpg"
//                           className="rounded-circle"
//                           alt="image"
//                         />
//                       </div>
//                       <div className="chat-content">
//                         <div className="chat-info">
//                           <div className="message-content">
//                             Yes, we’ll be using a time-tracking tool to log
//                             hours. You’ll need to ensure you’re available during
//                             your usual working hours and keep your manager
//                             updated if anything changes.
//                             <div className="emoj-group">
//                               <ul className="list-unstyled">
//                                 <li className="emoj-action">
//                                   <Link to="#">
//                                     <i className="ti ti-mood-smile" />
//                                   </Link>
//                                   <div className="emoj-group-list">
//                                     <ul className="list-unstyled">
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-02.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-05.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-06.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-07.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-08.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-03.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-10.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-09.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li className="add-emoj">
//                                         <Link to="#">
//                                           <i className="ti ti-plus" />
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </li>
//                                 <li>
//                                   <Link to="#">
//                                     <i className="ti ti-arrow-forward-up" />
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="chat-actions">
//                             <Link
//                               className="#"
//                               to="#"
//                               data-bs-toggle="dropdown"
//                             >
//                               <i className="ti ti-dots-vertical" />
//                             </Link>
//                             <ul className="dropdown-menu dropdown-menu-end p-3 list-unstyled">
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Reply
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Forward
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-file-export me-2" />
//                                   Copy
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Mark as Favourite
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-trash me-2" />
//                                   Delete
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-check me-2" />
//                                   Mark as Unread
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-box-align-right me-2" />
//                                   Archeive Chat
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Pin Chat
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <div className="chat-profile-name">
//                           <h6>
//                             Anthony Lewis
//                             <i className="ti ti-circle-filled fs-7 mx-2" />
//                             <span className="chat-time">08:00 AM</span>
//                           </h6>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="chats chats-right">
//                       <div className="chat-content">
//                         <div className="chat-info">
//                           <div className="chat-actions">
//                             <Link
//                               className="#"
//                               to="#"
//                               data-bs-toggle="dropdown"
//                             >
//                               <i className="ti ti-dots-vertical" />
//                             </Link>
//                             <ul className="dropdown-menu dropdown-menu-end p-3 list-unstyled">
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Reply
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Forward
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-file-export me-2" />
//                                   Copy
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-heart me-2" />
//                                   Mark as Favourite
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-trash me-2" />
//                                   Delete
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-check me-2" />
//                                   Mark as Unread
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-box-align-right me-2" />
//                                   Archeive Chat
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   <i className="ti ti-pinned me-2" />
//                                   Pin Chat
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                           <div className="message-content">
//                             Got it. Do we need to fill out any forms to start
//                             working remotely?
//                             <div className="emoj-group">
//                               <ul className="list-unstyled">
//                                 <li className="emoj-action">
//                                   <Link to="#">
//                                     <i className="ti ti-mood-smile" />
//                                   </Link>
//                                   <div className="emoj-group-list">
//                                     <ul>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-02.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-05.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-06.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-07.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-08.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-03.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-10.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="#">
//                                           <ImageWithBasePath
//                                             src="assets/img/icons/emonji-09.svg"
//                                             alt="Icon"
//                                           />
//                                         </Link>
//                                       </li>
//                                       <li className="add-emoj">
//                                         <Link to="#">
//                                           <i className="ti ti-plus" />
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </li>
//                                 <li>
//                                   <Link to="#">
//                                     <i className="ti ti-arrow-forward-up" />
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="chat-profile-name text-end">
//                           <h6>
//                             You
//                             <i className="ti ti-circle-filled fs-7 mx-2" />
//                             <span className="chat-time">08:00 AM</span>
//                             <span className="msg-read success">
//                               <i className="ti ti-checks" />
//                             </span>
//                           </h6>
//                         </div>
//                       </div>
//                       <div className="chat-avatar">
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-14.jpg"
//                           className="rounded-circle dreams_chat"
//                           alt="image"
//                         />
//                       </div>
//                     </div>
//                     <div className="chats">
//                       <div className="chat-avatar">
//                         <ImageWithBasePath
//                           src="assets/img/profiles/avatar-01.jpg"
//                           className="rounded-circle"
//                           alt="image"
//                         />
//                       </div>
//                       <div className="chat-content">
//                         <div className="chat-profile-name">
//                           <h6>
//                             Edward Lietz
//                             <i className="ti ti-circle-filled fs-7 mx-2" />
//                             <span className="chat-time">02:39 PM</span>
//                             <span className="msg-read success">
//                               <i className="ti ti-checks" />
//                             </span>
//                           </h6>
//                         </div>
//                         <div className="message-content">
//                           <span className="animate-typing">
//                             is typing
//                             <span className="dot" />
//                             <span className="dot" />
//                             <span className="dot" />
//                           </span>
//                           <div className="emoj-group">
//                             <ul className="list-unstyled">
//                               <li className="emoj-action">
//                                 <Link to="#">
//                                   <i className="ti ti-mood-smile" />
//                                 </Link>
//                                 <div className="emoj-group-list">
//                                   <ul>
//                                     <li>
//                                       <Link to="#">
//                                         <ImageWithBasePath
//                                           src="assets/img/icons/emonji-02.svg"
//                                           alt="Icon"
//                                         />
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="#">
//                                         <ImageWithBasePath
//                                           src="assets/img/icons/emonji-05.svg"
//                                           alt="Icon"
//                                         />
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="#">
//                                         <ImageWithBasePath
//                                           src="assets/img/icons/emonji-06.svg"
//                                           alt="Icon"
//                                         />
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="#">
//                                         <ImageWithBasePath
//                                           src="assets/img/icons/emonji-07.svg"
//                                           alt="Icon"
//                                         />
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="#">
//                                         <ImageWithBasePath
//                                           src="assets/img/icons/emonji-08.svg"
//                                           alt="Icon"
//                                         />
//                                       </Link>
//                                     </li>
//                                     <li className="add-emoj">
//                                       <Link to="#">
//                                         <i className="ti ti-plus" />
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <Link to="#">
//                                   <i className="ti ti-arrow-forward-up" />
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="chat-footer">
//                 <form className="footer-form">
//                   <div className="chat-footer-wrap">
//                     <div className="form-item">
//                       <Link to="#" className="action-circle">
//                         <i className="ti ti-microphone" />
//                       </Link>
//                     </div>
//                     <div className="form-wrap">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Type Your Message"
//                       />
//                     </div>
//                     <div className="form-item emoj-action-foot">
//                       <Link to="#" className="action-circle">
//                         <i className="ti ti-mood-smile" />
//                       </Link>
//                       <div className="emoj-group-list-foot down-emoji-circle">
//                         <ul className="list-unstyled">
//                           <li>
//                             <Link to="#">
//                               <ImageWithBasePath
//                                 src="assets/img/icons/emonji-02.svg"
//                                 alt="Icon"
//                               />
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="#">
//                               <ImageWithBasePath
//                                 src="assets/img/icons/emonji-05.svg"
//                                 alt="Icon"
//                               />
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="#">
//                               <ImageWithBasePath
//                                 src="assets/img/icons/emonji-06.svg"
//                                 alt="Icon"
//                               />
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="#">
//                               <ImageWithBasePath
//                                 src="assets/img/icons/emonji-07.svg"
//                                 alt="Icon"
//                               />
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="#">
//                               <ImageWithBasePath
//                                 src="assets/img/icons/emonji-08.svg"
//                                 alt="Icon"
//                               />
//                             </Link>
//                           </li>
//                           <li className="add-emoj">
//                             <Link to="#">
//                               <i className="ti ti-plus" />
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="form-item position-relative d-flex align-items-center justify-content-center ">
//                       <Link
//                         to="#"
//                         className="action-circle file-action position-absolute"
//                       >
//                         <i className="ti ti-folder" />
//                       </Link>
//                       <input
//                         type="file"
//                         className="open-file position-relative"
//                         name="files"
//                         id="files"
//                       />
//                     </div>
//                     <div className="form-item">
//                       <Link to="#" data-bs-toggle="dropdown">
//                         <i className="ti ti-dots-vertical" />
//                       </Link>
//                       <div className="dropdown-menu dropdown-menu-end p-3">
//                         <Link to="#" className="dropdown-item">
//                           <i className="ti ti-camera-selfie me-2" />
//                           Camera
//                         </Link>
//                         <Link to="#" className="dropdown-item">
//                           <i className="ti ti-photo-up me-2" />
//                           Gallery
//                         </Link>
//                         <Link to="#" className="dropdown-item">
//                           <i className="ti ti-music me-2" />
//                           Audio
//                         </Link>
//                         <Link to="#" className="dropdown-item">
//                           <i className="ti ti-map-pin-share me-2" />
//                           Location
//                         </Link>
//                         <Link to="#" className="dropdown-item">
//                           <i className="ti ti-user-check me-2" />
//                           Contact
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="form-btn">
//                       <button className="btn btn-primary" type="submit">
//                         <i className="ti ti-send" />
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             {/* End Chat */}
//           </div>
//         </div>
//       </div>
//       {/* ========================
//         End Page Content
//       ========================= */}
//     </>
//   );
// };

// export default Messages;


// import { useState, useEffect, useRef } from "react";
// // import { Link } from "react-router";
// import { io, Socket } from "socket.io-client";
// import {
//   getConversations,
//   getMessages,
//   sendMessage,
//   deleteMessage,
//   deleteConversation,
//   createConversation,
//   getChatUsers,
//   type ConversationData,
//   type MessageData,
//   type ChatUser,
// } from "../../../../../api/chatService";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

// // ✅ localStorage मधून logged-in user घेतो
// const getUserInfo = () => {
//   try {
//     const raw = localStorage.getItem("userData");
//     if (raw) {
//       const u = JSON.parse(raw);
//       return {
//         name: u.fullName || u.firstName || "User",
//         image: u.profileImage || "",
//         role: u.role || "admin",
//         id: u._id || "",
//       };
//     }
//   } catch { /* ignore */ }
//   return { name: "User", image: "", role: "admin", id: "" };
// };

// const currentUser = getUserInfo();
// const MY_NAME = currentUser.name;
// const MY_IMAGE = currentUser.image;

// let socket: Socket;

// const Messages = () => {
//   const [conversations, setConversations] = useState<ConversationData[]>([]);
//   const [activeConversation, setActiveConversation] = useState<ConversationData | null>(null);
//   const [messages, setMessages] = useState<MessageData[]>([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [searchText, setSearchText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [typingUser, setTypingUser] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showNewChatModal, setShowNewChatModal] = useState(false);
//   const [chatUsers, setChatUsers] = useState<ChatUser[]>([]);
//   const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null);
//   const [userSearch, setUserSearch] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   // Socket setup
//   useEffect(() => {
//     socket = io(BACKEND_URL, { transports: ["websocket"] });
//     socket.on("receive_message", (msg: MessageData) => {
//       setMessages((prev) => [...prev, msg]);
//       scrollToBottom();
//       fetchConversations();
//     });
//     socket.on("conversation_updated", () => fetchConversations());
//     socket.on("user_typing", ({ sender }: { sender: string }) => {
//       setTypingUser(sender); setIsTyping(true);
//     });
//     socket.on("user_stop_typing", () => { setIsTyping(false); setTypingUser(""); });
//     return () => { socket.disconnect(); };
//   }, []);

//   useEffect(() => { fetchConversations(); }, []);
//   useEffect(() => { scrollToBottom(); }, [messages]);

//   // Load chat users when modal opens
//   useEffect(() => {
//     if (showNewChatModal && chatUsers.length === 0) {
//       getChatUsers().then(setChatUsers).catch(console.error);
//     }
//   }, [showNewChatModal]);

//   const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

//   const fetchConversations = async () => {
//     try {
//       const res = await getConversations();
//       if (res.success) setConversations(res.data);
//     } catch (err) { console.error(err); }
//   };

//   const openConversation = async (conv: ConversationData) => {
//     if (activeConversation) socket.emit("leave_conversation", activeConversation._id);
//     setActiveConversation(conv);
//     setLoading(true);
//     try {
//       const res = await getMessages(conv._id);
//       if (res.success) setMessages(res.data);
//     } catch (err) { console.error(err); }
//     finally { setLoading(false); }
//     socket.emit("join_conversation", conv._id);
//     setConversations((prev) => prev.map((c) => c._id === conv._id ? { ...c, unreadCount: 0 } : c));
//   };

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!newMessage.trim() || !activeConversation) return;
//     const msgText = newMessage.trim();
//     setNewMessage("");
//     if (activeConversation) socket.emit("stop_typing", { conversationId: activeConversation._id });
//     try {
//       const res = await sendMessage({
//         conversationId: activeConversation._id,
//         sender: MY_NAME,
//         senderImage: MY_IMAGE,
//         text: msgText,
//       });
//       if (res.success) {
//         setMessages((prev) => [...prev, res.data]);
//         socket.emit("send_message", res.data);
//         fetchConversations();
//       }
//     } catch (err) { console.error(err); }
//   };

//   const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewMessage(e.target.value);
//     if (!activeConversation) return;
//     socket.emit("typing", { conversationId: activeConversation._id, sender: MY_NAME });
//     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
//     typingTimeoutRef.current = setTimeout(() => {
//       socket.emit("stop_typing", { conversationId: activeConversation._id });
//     }, 1500);
//   };

//   const handleDeleteMessage = async (msgId: string) => {
//     try { await deleteMessage(msgId); setMessages((prev) => prev.filter((m) => m._id !== msgId)); }
//     catch (err) { console.error(err); }
//   };

//   const handleDeleteConversation = async (convId: string) => {
//     if (!confirm("Delete this conversation?")) return;
//     try {
//       await deleteConversation(convId);
//       setConversations((prev) => prev.filter((c) => c._id !== convId));
//       if (activeConversation?._id === convId) { setActiveConversation(null); setMessages([]); }
//     } catch (err) { console.error(err); }
//   };

//   const handleStartChat = async () => {
//     if (!selectedUser) return;
//     try {
//       const res = await createConversation({
//         participantName: selectedUser.name,
//         participantImage: selectedUser.image || "",
//         myName: MY_NAME,
//         myImage: MY_IMAGE,
//       });
//       if (res.success) {
//         await fetchConversations();
//         setShowNewChatModal(false);
//         setSelectedUser(null);
//         setUserSearch("");
//         // Open the conversation
//         const conv = res.data;
//         openConversation(conv);
//       }
//     } catch (err) { console.error(err); }
//   };

//   // ✅ Get the OTHER participant (not me)
//   const getOtherParticipant = (conv: ConversationData) => {
//     const other = conv.participants.find((p) => p.name !== MY_NAME);
//     return other || conv.participants[0];
//   };

//   const formatTime = (dateStr: string) =>
//     new Date(dateStr).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

//   const formatConvTime = (dateStr: string) => {
//     const d = new Date(dateStr);
//     const diff = Date.now() - d.getTime();
//     if (diff < 86400000) return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
//     if (diff < 172800000) return "Yesterday";
//     return d.toLocaleDateString("en-US", { weekday: "short" });
//   };

//   const filteredConversations = conversations.filter((c) => {
//     const other = getOtherParticipant(c);
//     return other.name.toLowerCase().includes(searchText.toLowerCase());
//   });

//   // Filter chat users excluding myself
//   const filteredUsers = chatUsers.filter((u) =>
//     u.name !== MY_NAME &&
//     (u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
//       u.role.toLowerCase().includes(userSearch.toLowerCase()))
//   );

//   const AvatarCircle = ({ name, image, size = 40 }: { name: string; image?: string; size?: number }) => (
//     <div style={{ width: size, height: size, flexShrink: 0 }}>
//       {image ? (
//         <img src={image} className="rounded-circle" alt={name}
//           style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//       ) : (
//         <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
//           style={{ width: "100%", height: "100%", background: `hsl(${name.charCodeAt(0) * 15 % 360}, 60%, 50%)` }}>
//           <span style={{ color: "white", fontWeight: "bold", fontSize: size * 0.35 }}>
//             {name.charAt(0).toUpperCase()}
//           </span>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <>
//       <div className="page-wrapper">
//         <div className="content content-two" style={{ padding: 0 }}>
//           <div className="chat-wrapper" style={{ display: "flex", height: "calc(100vh - 60px)" }}>

//             {/* ===== LEFT SIDEBAR ===== */}
//             <div style={{
//               width: "320px", flexShrink: 0, borderRight: "1px solid #e9ecef",
//               display: "flex", flexDirection: "column", background: "#fff"
//             }}>
//               {/* Header */}
//               <div style={{ padding: "16px", borderBottom: "1px solid #e9ecef", flexShrink: 0 }}>
//                 <div className="d-flex align-items-center justify-content-between mb-3">
//                   <h5 className="mb-0 fw-bold">Messages</h5>
//                   <button className="btn btn-primary btn-sm px-3" onClick={() => setShowNewChatModal(true)}>
//                     <i className="ti ti-plus me-1" />New
//                   </button>
//                 </div>
//                 <div className="input-group">
//                   <span className="input-group-text bg-white border-end-0">
//                     <i className="ti ti-search text-muted" />
//                   </span>
//                   <input type="text" className="form-control border-start-0 ps-0"
//                     placeholder="Search conversations..."
//                     value={searchText} onChange={(e) => setSearchText(e.target.value)} />
//                 </div>
//               </div>

//               {/* My info */}
//               <div style={{ padding: "12px 16px", background: "#f8f9fa", borderBottom: "1px solid #e9ecef", flexShrink: 0 }}>
//                 <div className="d-flex align-items-center">
//                   <AvatarCircle name={MY_NAME} image={MY_IMAGE} size={36} />
//                   <div className="ms-2">
//                     <p className="mb-0 fw-semibold fs-14">{MY_NAME}</p>
//                     <p className="mb-0 text-muted fs-12 text-capitalize">{currentUser.role}</p>
//                   </div>
//                   <span className="ms-auto badge bg-success bg-opacity-10 text-success fs-11 px-2">Online</span>
//                 </div>
//               </div>

//               {/* Conversation List */}
//               <div style={{ overflowY: "auto", flex: 1 }}>
//                 {filteredConversations.length === 0 ? (
//                   <div className="text-center text-muted py-5">
//                     <i className="ti ti-message-off fs-2 d-block mb-2" />
//                     <p className="fs-14 mb-2">No conversations yet</p>
//                     <button className="btn btn-primary btn-sm" onClick={() => setShowNewChatModal(true)}>
//                       Start a Chat
//                     </button>
//                   </div>
//                 ) : (
//                   filteredConversations.map((conv) => {
//                     const other = getOtherParticipant(conv);
//                     const isActiveConv = activeConversation?._id === conv._id;
//                     return (
//                       <div key={conv._id}
//                         onClick={() => openConversation(conv)}
//                         style={{
//                           display: "flex", alignItems: "center", padding: "12px 16px",
//                           cursor: "pointer", borderBottom: "1px solid #f0f0f0",
//                           background: isActiveConv ? "#e8f0fe" : "transparent",
//                           borderLeft: isActiveConv ? "3px solid #4f46e5" : "3px solid transparent",
//                           transition: "all 0.15s"
//                         }}>
//                         <div style={{ position: "relative", marginRight: 12, flexShrink: 0 }}>
//                           <AvatarCircle name={other.name} image={other.image} size={44} />
//                           <span style={{
//                             position: "absolute", bottom: 1, right: 1,
//                             width: 10, height: 10, borderRadius: "50%",
//                             background: "#22c55e", border: "2px solid white"
//                           }} />
//                         </div>
//                         <div style={{ flex: 1, overflow: "hidden" }}>
//                           <div className="d-flex align-items-center justify-content-between">
//                             <span className="fw-semibold fs-14 text-truncate" style={{ maxWidth: "140px" }}>{other.name}</span>
//                             <span className="text-muted fs-11 flex-shrink-0">{formatConvTime(conv.lastMessageTime)}</span>
//                           </div>
//                           <div className="d-flex align-items-center justify-content-between">
//                             <p className="mb-0 text-muted fs-12 text-truncate" style={{ maxWidth: "160px" }}>
//                               {conv.lastMessage || "No messages yet"}
//                             </p>
//                             {conv.unreadCount > 0 && (
//                               <span className="badge rounded-pill bg-primary fs-11 ms-1">{conv.unreadCount}</span>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })
//                 )}
//               </div>
//             </div>

//             {/* ===== RIGHT CHAT AREA ===== */}
//             {activeConversation ? (
//               <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#f8f9fa" }}>

//                 {/* Chat Header */}
//                 <div style={{
//                   padding: "12px 20px", background: "#fff", borderBottom: "1px solid #e9ecef",
//                   flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between"
//                 }}>
//                   <div className="d-flex align-items-center">
//                     <div style={{ position: "relative", marginRight: 12 }}>
//                       <AvatarCircle name={getOtherParticipant(activeConversation).name}
//                         image={getOtherParticipant(activeConversation).image} size={42} />
//                       <span style={{
//                         position: "absolute", bottom: 1, right: 1, width: 10, height: 10,
//                         borderRadius: "50%", background: "#22c55e", border: "2px solid white"
//                       }} />
//                     </div>
//                     <div>
//                       <h6 className="mb-0 fw-semibold">{getOtherParticipant(activeConversation).name}</h6>
//                       <span className="text-success fs-12">● Online</span>
//                     </div>
//                   </div>
//                   <div className="d-flex gap-2">
//                     <button className="btn btn-light btn-sm btn-icon" title="Voice Call">
//                       <i className="ti ti-phone" />
//                     </button>
//                     <button className="btn btn-light btn-sm btn-icon" title="Video Call">
//                       <i className="ti ti-video" />
//                     </button>
//                     <div className="dropdown">
//                       <button className="btn btn-light btn-sm btn-icon" data-bs-toggle="dropdown">
//                         <i className="ti ti-dots-vertical" />
//                       </button>
//                       <ul className="dropdown-menu dropdown-menu-end p-2">
//                         <li>
//                           <button className="dropdown-item text-danger d-flex align-items-center fs-13" type="button"
//                             onClick={() => handleDeleteConversation(activeConversation._id)}>
//                             <i className="ti ti-trash me-2" />Delete Chat
//                           </button>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Messages Area */}
//                 <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
//                   {loading ? (
//                     <div className="text-center py-5">
//                       <div className="spinner-border text-primary" />
//                     </div>
//                   ) : messages.length === 0 ? (
//                     <div className="text-center text-muted py-5">
//                       <i className="ti ti-message" style={{ fontSize: "3rem" }} />
//                       <p className="mt-2">No messages yet. Say hello! 👋</p>
//                     </div>
//                   ) : (
//                     messages.map((msg) => {
//                       const isMe = msg.sender === MY_NAME;
//                       return (
//                         <div key={msg._id} style={{
//                           display: "flex", marginBottom: 16,
//                           flexDirection: isMe ? "row-reverse" : "row",
//                           alignItems: "flex-end", gap: 8
//                         }}>
//                           {/* Avatar */}
//                           <div style={{ flexShrink: 0 }}>
//                             <AvatarCircle
//                               name={isMe ? MY_NAME : msg.sender}
//                               image={isMe ? MY_IMAGE : msg.senderImage}
//                               size={34}
//                             />
//                           </div>

//                           {/* Message bubble */}
//                           <div style={{ maxWidth: "60%" }}>
//                             <div style={{
//                               fontSize: 11, color: "#888", marginBottom: 4,
//                               textAlign: isMe ? "right" : "left"
//                             }}>
//                               {isMe ? "You" : msg.sender} • {formatTime(msg.createdAt)}
//                             </div>
//                             <div style={{
//                               padding: "10px 14px", borderRadius: isMe ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
//                               background: isMe ? "#4f46e5" : "#fff",
//                               color: isMe ? "#fff" : "#1a1a1a",
//                               boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
//                               wordBreak: "break-word", fontSize: 14, lineHeight: 1.5,
//                               position: "relative"
//                             }}>
//                               {msg.text}
//                             </div>
//                             {isMe && (
//                               <div style={{ textAlign: "right", marginTop: 2 }}>
//                                 <i className="ti ti-checks text-success fs-11" />
//                               </div>
//                             )}
//                           </div>

//                           {/* Delete button */}
//                           <div className="dropdown" style={{ alignSelf: "center" }}>
//                             <button className="btn btn-sm p-0 border-0 bg-transparent" data-bs-toggle="dropdown"
//                               style={{ opacity: 0.5 }}>
//                               <i className="ti ti-dots-vertical fs-12" />
//                             </button>
//                             <ul className="dropdown-menu dropdown-menu-end p-1">
//                               <li>
//                                 <button className="dropdown-item text-danger fs-12 py-1" type="button"
//                                   onClick={() => handleDeleteMessage(msg._id)}>
//                                   <i className="ti ti-trash me-1" />Delete
//                                 </button>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       );
//                     })
//                   )}

//                   {/* Typing indicator */}
//                   {isTyping && (
//                     <div className="d-flex align-items-center gap-2 text-muted fs-13 mb-2">
//                       <span>{typingUser} is typing</span>
//                       <span className="d-flex gap-1">
//                         {[0, 0.2, 0.4].map((d, i) => (
//                           <span key={i} style={{
//                             width: 6, height: 6, borderRadius: "50%", background: "#adb5bd",
//                             animation: `blink 1.2s ${d}s infinite`
//                           }} />
//                         ))}
//                       </span>
//                     </div>
//                   )}
//                   <div ref={messagesEndRef} />
//                 </div>

//                 {/* Message Input */}
//                 <div style={{
//                   padding: "12px 16px", background: "#fff", borderTop: "1px solid #e9ecef", flexShrink: 0
//                 }}>
//                   <form onSubmit={handleSendMessage}>
//                     <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                       <input type="text" className="form-control"
//                         style={{ borderRadius: 24, paddingLeft: 16, paddingRight: 16 }}
//                         placeholder="Type your message..."
//                         value={newMessage} onChange={handleTyping} />
//                       <button type="submit" className="btn btn-primary"
//                         style={{ borderRadius: "50%", width: 42, height: 42, padding: 0, flexShrink: 0 }}
//                         disabled={!newMessage.trim()}>
//                         <i className="ti ti-send" />
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             ) : (
//               /* Empty state */
//               <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <div className="text-center text-muted">
//                   <div style={{
//                     width: 80, height: 80, borderRadius: "50%", background: "#e8f0fe",
//                     display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px"
//                   }}>
//                     <i className="ti ti-message-2 text-primary" style={{ fontSize: "2.5rem" }} />
//                   </div>
//                   <h5 className="fw-semibold mb-2">Your Messages</h5>
//                   <p className="fs-14 mb-4">Select a conversation or start a new chat</p>
//                   <button className="btn btn-primary px-4" onClick={() => setShowNewChatModal(true)}>
//                     <i className="ti ti-plus me-2" />New Chat
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ===== New Chat Modal ===== */}
//       {showNewChatModal && (
//         <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header border-0 pb-0">
//                 <h5 className="modal-title fw-bold">New Chat</h5>
//                 <button type="button" className="btn-close"
//                   onClick={() => { setShowNewChatModal(false); setUserSearch(""); setSelectedUser(null); }} />
//               </div>
//               <div className="modal-body">
//                 <input type="text" className="form-control mb-3"
//                   placeholder="🔍 Search by name or role..."
//                   value={userSearch} onChange={(e) => setUserSearch(e.target.value)} autoFocus />

//                 <div style={{ maxHeight: 320, overflowY: "auto" }}>
//                   {filteredUsers.length === 0 ? (
//                     <p className="text-muted text-center py-3 fs-13">No users found</p>
//                   ) : (
//                     filteredUsers.map((user) => (
//                       <div key={user._id}
//                         onClick={() => setSelectedUser(user)}
//                         style={{
//                           display: "flex", alignItems: "center", padding: "10px 12px",
//                           borderRadius: 8, marginBottom: 6, cursor: "pointer",
//                           border: selectedUser?._id === user._id ? "2px solid #4f46e5" : "1px solid #e9ecef",
//                           background: selectedUser?._id === user._id ? "#eef2ff" : "#fff",
//                           transition: "all 0.15s"
//                         }}>
//                         <AvatarCircle name={user.name} image={user.image} size={40} />
//                         <div className="ms-3 flex-fill">
//                           <p className="mb-0 fw-semibold fs-14">{user.name}</p>
//                           <p className="mb-0 text-muted fs-12">{user.role}</p>
//                         </div>
//                         <span className={`badge fs-11 ${user.type === "doctor" ? "bg-primary bg-opacity-10 text-primary" : "bg-success bg-opacity-10 text-success"}`}>
//                           {user.type === "doctor" ? "Doctor" : "Staff"}
//                         </span>
//                         {selectedUser?._id === user._id && (
//                           <i className="ti ti-check text-primary fs-18 ms-2" />
//                         )}
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </div>
//               <div className="modal-footer border-0 pt-0">
//                 <button type="button" className="btn btn-light"
//                   onClick={() => { setShowNewChatModal(false); setUserSearch(""); setSelectedUser(null); }}>
//                   Cancel
//                 </button>
//                 <button type="button" className="btn btn-primary px-4"
//                   disabled={!selectedUser} onClick={handleStartChat}>
//                   <i className="ti ti-message me-2" />Start Chat
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes blink { 0%, 80%, 100% { opacity: 0; } 40% { opacity: 1; } }
//       `}</style>
//     </>
//   );
// };

// export default Messages;


import { Link } from "react-router";
import ChatCore from "../../chatcore/ChatCore";
// ⚠️ Same ChatCore — adjust import path for messages folder

const Messages = () => {
  return (
    <div className="page-wrapper">
      <div className="content" style={{ paddingBottom: 0 }}>
        {/* ✅ Admin sees Staff + Doctors + Patients */}
        <ChatCore forRole="admin" />
      </div>
      <div className="footer text-center bg-white p-2 border-top mt-2">
        <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Messages;