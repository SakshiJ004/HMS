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



import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { io, Socket } from "socket.io-client";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import {
  getConversations,
  getMessages,
  sendMessage,
  deleteMessage,
  deleteConversation,
  createConversation,
  type ConversationData,
  type MessageData,
} from "../../../../../api/chatService";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

const MY_NAME = "You";
const MY_IMAGE = "assets/img/profiles/avatar-14.jpg";

let socket: Socket;

const Messages = () => {
  const [conversations, setConversations] = useState<ConversationData[]>([]);
  const [activeConversation, setActiveConversation] = useState<ConversationData | null>(null);
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [newContactName, setNewContactName] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<any>(null);

  // Socket setup
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

    return () => { socket.disconnect(); };
  }, []);

  useEffect(() => { fetchConversations(); }, []);
  useEffect(() => { scrollToBottom(); }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchConversations = async () => {
    try {
      const res = await getConversations();
      if (res.success) setConversations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const openConversation = async (conv: ConversationData) => {
    if (activeConversation) socket.emit("leave_conversation", activeConversation._id);
    setActiveConversation(conv);
    setLoading(true);
    try {
      const res = await getMessages(conv._id);
      if (res.success) setMessages(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
    socket.emit("join_conversation", conv._id);
    setConversations((prev) =>
      prev.map((c) => (c._id === conv._id ? { ...c, unreadCount: 0 } : c))
    );
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeConversation) return;
    const msgText = newMessage.trim();
    setNewMessage("");
    socket.emit("stop_typing", { conversationId: activeConversation._id });
    try {
      const res = await sendMessage({
        conversationId: activeConversation._id,
        sender: MY_NAME,
        senderImage: MY_IMAGE,
        text: msgText,
      });
      if (res.success) {
        setMessages((prev) => [...prev, res.data]);
        socket.emit("send_message", res.data);
        fetchConversations();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
    if (!activeConversation) return;
    socket.emit("typing", { conversationId: activeConversation._id, sender: MY_NAME });
    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("stop_typing", { conversationId: activeConversation._id });
    }, 1500);
  };

  const handleDeleteMessage = async (msgId: string) => {
    try {
      await deleteMessage(msgId);
      setMessages((prev) => prev.filter((m) => m._id !== msgId));
    } catch (err) {
      console.error(err);
    }
  };

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
      console.error(err);
    }
  };

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
      console.error(err);
    }
  };

  const getOtherParticipant = (conv: ConversationData) =>
    conv.participants.find((p) => p.name !== MY_NAME) || conv.participants[0];

  const formatTime = (dateStr: string) =>
    new Date(dateStr).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  const formatConvTime = (dateStr: string) => {
    const d = new Date(dateStr);
    const diff = Date.now() - d.getTime();
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
        <div className="content content-two">
          <div className="chat-wrapper">

            {/* ===== Sidebar ===== */}
            <div className="sidebar-group">
              <div id="chats" className="sidebar-content active slimscroll">
                <div className="slimscroll">
                  <div className="chat-search-header">
                    <div className="header-title d-flex align-items-center justify-content-between">
                      <h6 className="mb-3">Chats</h6>
                      <button
                        className="btn btn-primary btn-sm mb-3"
                        onClick={() => setShowNewChatModal(true)}
                        title="New Chat"
                      >
                        <i className="ti ti-plus me-1" />New
                      </button>
                    </div>
                    {/* Search */}
                    <div className="search-wrap">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)}
                        />
                        <span className="input-group-text">
                          <i className="ti ti-search" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-body chat-body" id="chatsidebar">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="chat-title mb-0">All Chats</h6>
                    </div>

                    <div className="chat-users-wrap">
                      {filteredConversations.length === 0 ? (
                        <div className="text-center text-muted py-4">
                          <i className="ti ti-message-off fs-2 d-block mb-2" />
                          <p className="fs-13">No conversations yet</p>
                          <button className="btn btn-primary btn-sm" onClick={() => setShowNewChatModal(true)}>
                            Start Chat
                          </button>
                        </div>
                      ) : (
                        filteredConversations.map((conv) => {
                          const other = getOtherParticipant(conv);
                          const isActive = activeConversation?._id === conv._id;
                          return (
                            <div
                              key={conv._id}
                              className={`chat-list ${isActive ? "active" : ""}`}
                            >
                              <Link
                                to="#"
                                className="chat-user-list"
                                onClick={(e) => { e.preventDefault(); openConversation(conv); }}
                              >
                                <div className="avatar avatar-lg online me-2">
                                  {other.image ? (
                                    <img src={other.image} className="rounded-circle" alt={other.name} />
                                  ) : (
                                    <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                                      style={{ width: "100%", height: "100%" }}>
                                      <span className="text-white fw-bold">
                                        {other.name.charAt(0).toUpperCase()}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <div className="chat-user-info">
                                  <div className="chat-user-msg">
                                    <h6>{other.name}</h6>
                                    <p className="text-truncate" style={{ maxWidth: "130px" }}>
                                      {conv.lastMessage || "No messages yet"}
                                    </p>
                                  </div>
                                  <div className="chat-user-time">
                                    <span className="time">{formatConvTime(conv.lastMessageTime)}</span>
                                    <div className="chat-pin">
                                      {conv.unreadCount > 0 && (
                                        <span className="count-message fs-12 fw-semibold">
                                          {conv.unreadCount}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                              <div className="chat-dropdown">
                                <Link to="#" data-bs-toggle="dropdown">
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                  <li>
                                    <button
                                      className="dropdown-item text-danger d-flex align-items-center"
                                      type="button"
                                      onClick={() => handleDeleteConversation(conv._id)}
                                    >
                                      <i className="ti ti-trash me-2" />Delete Chat
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ===== End Sidebar ===== */}

            {/* ===== Chat Area ===== */}
            {activeConversation ? (
              <div className="chat chat-messages show" id="middle">
                {/* Chat Header */}
                <div className="chat-header">
                  <div className="user-details">
                    <div className="avatar avatar-lg online flex-shrink-0">
                      {getOtherParticipant(activeConversation).image ? (
                        <img
                          src={getOtherParticipant(activeConversation).image}
                          className="rounded-circle"
                          alt="user"
                        />
                      ) : (
                        <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                          style={{ width: "100%", height: "100%" }}>
                          <span className="text-white fw-bold">
                            {getOtherParticipant(activeConversation).name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="ms-2 overflow-hidden">
                      <h6 className="mb-0">{getOtherParticipant(activeConversation).name}</h6>
                      <span className="last-seen text-success">Online</span>
                    </div>
                  </div>
                  <div className="chat-options">
                    <ul className="list-unstyled">
                      <li>
                        <Link to="#" className="btn no-bg" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <button
                              className="dropdown-item text-danger d-flex align-items-center"
                              type="button"
                              onClick={() => handleDeleteConversation(activeConversation._id)}
                            >
                              <i className="ti ti-trash me-2" />Delete Chat
                            </button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Messages */}
                <div className="chat-body chat-page-group slimscroll">
                  <div className="messages">
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
                        return isMe ? (
                          // My message — right side
                          <div key={msg._id} className="chats chats-right">
                            <div className="chat-content">
                              <div className="chat-info">
                                <div className="chat-actions">
                                  <Link to="#" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <button
                                        className="dropdown-item text-danger d-flex align-items-center"
                                        type="button"
                                        onClick={() => handleDeleteMessage(msg._id)}
                                      >
                                        <i className="ti ti-trash me-2" />Delete
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                <div className="message-content">{msg.text}</div>
                              </div>
                              <div className="chat-profile-name text-end">
                                <h6>
                                  You
                                  <i className="ti ti-circle-filled fs-7 mx-2" />
                                  <span className="chat-time">{formatTime(msg.createdAt)}</span>
                                  <span className="msg-read success ms-1">
                                    <i className="ti ti-checks" />
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="chat-avatar">
                              <img
                                src={MY_IMAGE}
                                className="rounded-circle dreams_chat"
                                alt="You"
                                style={{ width: "36px", height: "36px", objectFit: "cover" }}
                              />
                            </div>
                          </div>
                        ) : (
                          // Other person message — left side
                          <div key={msg._id} className="chats">
                            <div className="chat-avatar">
                              {msg.senderImage ? (
                                <img
                                  src={msg.senderImage}
                                  className="rounded-circle"
                                  alt={msg.sender}
                                  style={{ width: "36px", height: "36px", objectFit: "cover" }}
                                />
                              ) : (
                                <div
                                  className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                                  style={{ width: "36px", height: "36px" }}
                                >
                                  <span className="text-white fw-bold fs-14">
                                    {msg.sender.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="chat-content">
                              <div className="chat-info">
                                <div className="message-content">{msg.text}</div>
                                <div className="chat-actions">
                                  <Link to="#" data-bs-toggle="dropdown">
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <button
                                        className="dropdown-item text-danger d-flex align-items-center"
                                        type="button"
                                        onClick={() => handleDeleteMessage(msg._id)}
                                      >
                                        <i className="ti ti-trash me-2" />Delete
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="chat-profile-name">
                                <h6>
                                  {msg.sender}
                                  <i className="ti ti-circle-filled fs-7 mx-2" />
                                  <span className="chat-time">{formatTime(msg.createdAt)}</span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}

                    {/* Typing indicator */}
                    {isTyping && (
                      <div className="chats">
                        <div className="chat-content">
                          <div className="message-content">
                            <span className="animate-typing">
                              {typingUser} is typing
                              <span className="dot" />
                              <span className="dot" />
                              <span className="dot" />
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Footer Input */}
                <div className="chat-footer">
                  <form className="footer-form" onSubmit={handleSendMessage}>
                    <div className="chat-footer-wrap">
                      <div className="form-wrap flex-fill">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type Your Message"
                          value={newMessage}
                          onChange={handleTyping}
                        />
                      </div>
                      <div className="form-btn">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          disabled={!newMessage.trim()}
                        >
                          <i className="ti ti-send" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              // No conversation selected
              <div className="chat chat-messages show d-flex align-items-center justify-content-center" id="middle">
                <div className="text-center text-muted">
                  <i className="ti ti-message-2" style={{ fontSize: "4rem" }} />
                  <h5 className="mt-3">Select a conversation</h5>
                  <p className="fs-14">Choose from the list or start a new chat</p>
                  <button className="btn btn-primary" onClick={() => setShowNewChatModal(true)}>
                    <i className="ti ti-plus me-2" />New Chat
                  </button>
                </div>
              </div>
            )}
          </div>
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
                    <label className="form-label">
                      Contact Name <span className="text-danger">*</span>
                    </label>
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
    </>
  );
};

export default Messages;