// import { Link } from "react-router-dom";
// import ImageWithBasePath from "../../imageWithBasePath";
// import { useEffect, useState, useCallback, useRef } from "react";
// import { updateTheme } from "../../redux/themeSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { setMobileSidebar } from "../../redux/sidebarSlice";
// import { all_routes } from "../../../feature-module/routes/all_routes";
// import { globalSearch, type SearchResult } from "../../../api/searchService";
// import { debounce } from "lodash";

// const API_URL = import.meta.env.VITE_BACKEND_URL;

// const Header = () => {
//   const dispatch = useDispatch();
//   const themeSettings = useSelector((state: any) => state.theme.themeSettings);
//   const [isHiddenLayoutActive, setIsHiddenLayoutActive] = useState(() => {
//     const saved = localStorage.getItem("hiddenLayoutActive");
//     return saved ? JSON.parse(saved) : false;
//   });

//   // Add user state
//   const [userData, setUserData] = useState({
//     fullName: "",
//     firstName: "",
//     lastName: "",
//     role: "",
//     email: "",
//     profileImage: "",
//   });

//   // Search states
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const htmlElement: any = document.documentElement;
//     Object.entries(themeSettings).forEach(([key, value]) => {
//       htmlElement.setAttribute(key, value);
//     });
//   }, [themeSettings]);

//   const handleLogout = () => {
//     console.log('🔓 Logging out...');

//     // Clear all localStorage data
//     localStorage.clear();

//     // Or if you want to keep some data like theme settings:
//     // const theme = localStorage.getItem('theme');
//     // localStorage.clear();
//     // if (theme) localStorage.setItem('theme', theme);

//     console.log('✅ Logged out successfully');

//     // Navigate to login page
//     window.location.href = all_routes.loginbasic;
//   };

//   // ✅ FIX: Load user data function
//   const loadUserData = () => {
//     const storedUserData = localStorage.getItem("userData");

//     if (storedUserData) {
//       try {
//         const parsedData = JSON.parse(storedUserData);

//         console.log('📋 Loading user data in header:', parsedData);

//         // Get firstName and lastName
//         let firstName = parsedData.firstName || '';
//         let lastName = parsedData.lastName || '';

//         // If firstName/lastName not available, split fullName
//         if (!firstName && parsedData.fullName) {
//           const nameParts = parsedData.fullName.trim().split(' ');
//           firstName = nameParts[0] || '';
//           lastName = nameParts.slice(1).join(' ') || '';
//         }

//         const fullName = parsedData.fullName || `${firstName} ${lastName}`.trim() || 'User';

//         setUserData({
//           fullName: fullName,
//           firstName: firstName,
//           lastName: lastName,
//           role: parsedData.role || 'patient',
//           email: parsedData.email || '',
//           profileImage: parsedData.profileImage || '',
//         });

//         console.log('✅ User data loaded in header:', {
//           fullName,
//           firstName,
//           lastName,
//           role: parsedData.role,
//           profileImage: parsedData.profileImage
//         });
//       } catch (error) {
//         console.error('❌ Error parsing userData:', error);
//       }
//     }
//   };

//   // ✅ FIX: Load on mount
//   useEffect(() => {
//     loadUserData();
//   }, []);

//   // ✅ FIX: Listen for storage changes (for when auth callback updates localStorage)
//   useEffect(() => {
//     const handleStorageChange = (e: StorageEvent) => {
//       if (e.key === 'userData') {
//         console.log('🔄 localStorage changed, reloading user data');
//         loadUserData();
//       }
//     };

//     // Listen for storage events from other tabs/windows
//     window.addEventListener('storage', handleStorageChange);

//     // Also listen for custom event for same-window updates
//     const handleCustomStorageChange = () => {
//       console.log('🔄 Custom storage event, reloading user data');
//       loadUserData();
//     };
//     window.addEventListener('userDataUpdated', handleCustomStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//       window.removeEventListener('userDataUpdated', handleCustomStorageChange);
//     };
//   }, []);

//   //Search functionality with debounce
//   const performSearch = useCallback(
//     debounce(async (query: string) => {
//       if (!query || query.trim().length < 2) {
//         setSearchResults([]);
//         setShowResults(false);
//         setIsSearching(false);
//         return;
//       }

//       setIsSearching(true);
//       try {
//         const response = await globalSearch(query);
//         console.log('🔍 Search results:', response);
//         setSearchResults(response.results || []);
//         setShowResults(true);
//       } catch (error) {
//         console.error('Search error:', error);
//         setSearchResults([]);
//       } finally {
//         setIsSearching(false);
//       }
//     }, 300),
//     []
//   );

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     performSearch(query);
//   };

//   const handleSearchResultClick = () => {
//     setShowResults(false);
//     setSearchQuery('');
//     setSearchResults([]);
//   };

//   // Close search results when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setShowResults(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleUpdateTheme = (key: string, value: string) => {
//     if (themeSettings["dir"] === "rtl" && key !== "dir") {
//       dispatch(updateTheme({ dir: "ltr" }));
//     }
//     dispatch(updateTheme({ [key]: value }));
//   };

//   const mobileSidebar = useSelector(
//     (state: any) => state.sidebarSlice.mobileSidebar
//   );

//   const toggleMobileSidebar = () => {
//     dispatch(setMobileSidebar(!mobileSidebar));
//   };

//   const handleToggleHiddenLayout = () => {
//     if (themeSettings["data-layout"] === "hidden") {
//       const newState = !isHiddenLayoutActive;
//       setIsHiddenLayoutActive(newState);
//       localStorage.setItem("hiddenLayoutActive", JSON.stringify(newState));
//     }
//   };

//   useEffect(() => {
//     const bodyElement = document.body;
//     if (themeSettings["data-layout"] === "hidden") {
//       if (isHiddenLayoutActive) {
//         bodyElement.classList.add("hidden-layout");
//       } else {
//         bodyElement.classList.remove("hidden-layout");
//       }
//     } else {
//       bodyElement.classList.remove("hidden-layout");
//       setIsHiddenLayoutActive(false);
//       localStorage.removeItem("hiddenLayoutActive");
//     }
//   }, [isHiddenLayoutActive, themeSettings["data-layout"]]);

//   // Capitalize first letter of role
//   const capitalizeRole = (role: string) => {
//     return role.charAt(0).toUpperCase() + role.slice(1);
//   };

//   // Get first letter of name for avatar placeholder
//   const getInitials = () => {
//     if (userData.firstName) {
//       return userData.firstName.charAt(0).toUpperCase();
//     }
//     if (userData.fullName) {
//       return userData.fullName.charAt(0).toUpperCase();
//     }
//     return "U";
//   };

//   // Profile Avatar Component
//   const ProfileAvatar = ({ size = 32, className = "" }) => {
//     if (userData.profileImage) {
//       return (
//         <img
//           src={userData.profileImage}
//           width={size}
//           height={size}
//           className={`rounded-circle ${className}`}
//           alt="user-image"
//           onError={(e) => {
//             // If image fails to load, hide it and show initials instead
//             e.currentTarget.style.display = 'none';
//             const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
//             if (nextSibling) {
//               nextSibling.classList.remove('d-none');
//             }
//           }}
//         />
//       );
//     }

//     return (
//       <div
//         className={`rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-semibold ${className}`}
//         style={{
//           width: `${size}px`,
//           height: `${size}px`,
//           fontSize: `${size * 0.4}px`,
//         }}
//       >
//         {getInitials()}
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* Topbar Start */}
//       <header className="navbar-header">
//         <div className="page-container topbar-menu">
//           <div className="d-flex align-items-center gap-2">
//             {/* Logo */}
//             <Link to={all_routes.dashboard} className="logo">
//               <span className="logo-light">
//                 <span className="logo-lg">
//                   <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
//                 </span>
//                 <span className="logo-sm">
//                   <ImageWithBasePath
//                     src="assets/img/logo-small.svg"
//                     alt="small logo"
//                   />
//                 </span>
//               </span>
//               <span className="logo-dark">
//                 <span className="logo-lg">
//                   <ImageWithBasePath
//                     src="assets/img/logo-white.svg"
//                     alt="dark logo"
//                   />
//                 </span>
//               </span>
//             </Link>
//             {/* Sidebar Mobile Button */}
//             <Link
//               id="mobile_btn"
//               className="mobile-btn"
//               to="#"
//               onClick={toggleMobileSidebar}
//             >
//               <i className="ti ti-menu-deep fs-24" />
//             </Link>
//             <button
//               className="sidenav-toggle-btn btn border-0 p-0 active"
//               id="toggle_btn2"
//               onClick={handleToggleHiddenLayout}
//             >
//               <i className="ti ti-arrow-right" />
//             </button>
//             {/* Search with Results Dropdown */}
//             <div className="me-auto d-flex align-items-center header-search d-lg-flex d-none position-relative" ref={searchRef}>
//               <div className="input-icon-start position-relative me-2 w-100">
//                 <span className="input-icon-addon">
//                   <i className="ti ti-search" />
//                 </span>
//                 <input
//                   type="text"
//                   className="form-control shadow-sm"
//                   placeholder="Search doctors, patients, appointments..."
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                   onFocus={() => searchResults.length > 0 && setShowResults(true)}
//                   style={{ paddingRight: '40px' }}
//                 />
//                 {isSearching && (
//                   <span className="position-absolute" style={{ right: '45px', top: '50%', transform: 'translateY(-50%)' }}>
//                     <div className="spinner-border spinner-border-sm text-primary" role="status">
//                       <span className="visually-hidden">Loading...</span>
//                     </div>
//                   </span>
//                 )}
//                 <span className="input-icon-addon text-dark shadow fs-18 d-inline-flex p-0 header-search-icon">
//                   <i className="ti ti-command" />
//                 </span>
//               </div>

//               {/* Search Results Dropdown */}
//               {showResults && searchResults.length > 0 && (
//                 <div
//                   className="position-absolute bg-white border shadow-lg rounded-2 mt-1"
//                   style={{
//                     top: '100%',
//                     left: 0,
//                     width: '450px',
//                     maxHeight: '500px',
//                     overflowY: 'auto',
//                     zIndex: 1050
//                   }}
//                 >
//                   {/* Group results by category */}
//                   {['Doctors', 'Patients', 'Appointments', 'Quick Actions'].map(category => {
//                     const categoryResults = searchResults.filter(r => r.category === category);
//                     if (categoryResults.length === 0) return null;

//                     return (
//                       <div key={category}>
//                         <div className="px-3 py-2 bg-light border-bottom">
//                           <small className="text-muted fw-semibold">{category}</small>
//                         </div>
//                         {categoryResults.map((result, index) => (
//                           <Link
//                             key={`${result.type}-${result.id || index}`}
//                             to={result.link}
//                             className="d-flex align-items-center p-3 border-bottom text-decoration-none"
//                             onClick={handleSearchResultClick}
//                             style={{
//                               transition: 'background-color 0.2s',
//                               cursor: 'pointer'
//                             }}
//                             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
//                             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
//                           >
//                             {result.image ? (
//                               <img
//                                 src={result.image.startsWith('http') || result.image.startsWith('data:')
//                                   ? result.image
//                                   : `${API_URL}${result.image}`
//                                 }
//                                 className="rounded-circle me-3"
//                                 width="40"
//                                 height="40"
//                                 alt=""
//                                 style={{ objectFit: 'cover' }}
//                                 onError={(e) => {
//                                   e.currentTarget.style.display = 'none';
//                                   const parent = e.currentTarget.parentElement;
//                                   if (parent) {
//                                     const placeholder = document.createElement('div');
//                                     placeholder.className = 'rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold me-3';
//                                     placeholder.style.width = '40px';
//                                     placeholder.style.height = '40px';
//                                     placeholder.style.fontSize = '14px';
//                                     placeholder.textContent = result.initials;
//                                     parent.insertBefore(placeholder, e.currentTarget);
//                                   }
//                                 }}
//                               />
//                             ) : (
//                               <div
//                                 className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold me-3"
//                                 style={{ width: '40px', height: '40px', fontSize: '14px' }}
//                               >
//                                 {result.initials}
//                               </div>
//                             )}
//                             <div className="flex-grow-1">
//                               <p className="mb-0 fw-semibold text-dark">{result.title}</p>
//                               <small className="text-muted">{result.subtitle}</small>
//                             </div>
//                             <i className="ti ti-arrow-right ms-auto text-muted"></i>
//                           </Link>
//                         ))}
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}

//               {/* No Results Message */}
//               {showResults && searchResults.length === 0 && searchQuery.length >= 2 && !isSearching && (
//                 <div
//                   className="position-absolute bg-white border shadow-lg rounded-2 mt-1 p-4 text-center"
//                   style={{
//                     top: '100%',
//                     left: 0,
//                     width: '450px',
//                     zIndex: 1050
//                   }}
//                 >
//                   <i className="ti ti-search-off fs-48 text-muted mb-2 d-block"></i>
//                   <p className="mb-0 text-muted">No results found for "{searchQuery}"</p>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="d-flex align-items-center">
//             {/* Search for Mobile */}
//             <div className="header-item d-flex d-lg-none me-2">
//               <button
//                 className="topbar-link btn btn-icon"
//                 data-bs-toggle="modal"
//                 data-bs-target="#searchModal"
//                 type="button"
//               >
//                 <i className="ti ti-search fs-16" />
//               </button>
//             </div>
//             {/* AI Assistance */}
//             <Link
//               to="#"
//               className="btn btn-liner-gradient me-3 d-lg-flex d-none"
//             >
//               AI Assistance
//               <i className="ti ti-chart-bubble-filled ms-1" />
//             </Link>
//             {/* Appointment */}
//             <div className="header-item">
//               <div className="dropdown me-2">
//                 <Link to={all_routes.newAppointment} className="btn topbar-link">
//                   <i className="ti ti-calendar-due" />
//                 </Link>
//               </div>
//             </div>
//             {/* Settings */}
//             <div className="header-item">
//               <div className="dropdown me-2">
//                 <Link to={all_routes.profilesettings} className="btn topbar-link">
//                   <i className="ti ti-settings-2" />
//                 </Link>
//               </div>
//             </div>
//             {/* Light/Dark Mode Button */}
//             <div className="header-item d-none d-sm-flex me-2">
//               <Link
//                 to="#"
//                 id="dark-mode-toggle"
//                 className={`topbar-link btn btn-icon topbar-link header-togglebtn ${themeSettings["data-bs-theme"] === "dark" ? "activate" : ""
//                   }`}
//                 onClick={() => handleUpdateTheme("data-bs-theme", "light")}
//               >
//                 <i className="ti ti-sun fs-16" />
//               </Link>
//               <Link
//                 to="#"
//                 id="light-mode-toggle"
//                 className={`topbar-link btn btn-icon topbar-link header-togglebtn ${themeSettings["data-bs-theme"] === "light" ? "activate" : ""
//                   }`}
//                 onClick={() => handleUpdateTheme("data-bs-theme", "dark")}
//               >
//                 <i className="ti ti-moon fs-16" />
//               </Link>
//             </div>
//             {/* Notification Dropdown */}
//             <div className="header-item">
//               <div className="dropdown me-3">
//                 <button
//                   className="topbar-link btn btn-icon topbar-link dropdown-toggle drop-arrow-none"
//                   data-bs-toggle="dropdown"
//                   data-bs-offset="0,24"
//                   type="button"
//                   aria-haspopup="false"
//                   aria-expanded="false"
//                 >
//                   <i className="ti ti-bell-check fs-16 animate-ring" />
//                   <span className="notification-badge" />
//                 </button>
//                 <div
//                   className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg"
//                   style={{ minHeight: 300 }}
//                 >
//                   <div className="p-2 border-bottom">
//                     <div className="row align-items-center">
//                       <div className="col">
//                         <h6 className="m-0 fs-16 fw-semibold">
//                           Notifications
//                         </h6>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Notification Body */}
//                   <div
//                     className="notification-body position-relative z-2 rounded-0"
//                     data-simplebar=""
//                   >
//                     {/* Item*/}
//                     <div
//                       className="dropdown-item notification-item py-3 text-wrap border-bottom"
//                       id="notification-1"
//                     >
//                       <div className="d-flex">
//                         <div className="me-2 position-relative flex-shrink-0">
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-01.jpg"
//                             className="avatar-md rounded-circle"
//                             alt=""
//                           />
//                         </div>
//                         <div className="flex-grow-1">
//                           <p className="mb-0 fw-medium text-dark">Dr. Smith</p>
//                           <p className="mb-1 text-wrap">
//                             updated the
//                             <span className="fw-medium text-dark">surgery</span>
//                             schedule.
//                           </p>
//                           <div className="d-flex justify-content-between align-items-center">
//                             <span className="fs-12">
//                               <i className="ti ti-clock me-1" />4 min ago
//                             </span>
//                             <div className="notification-action d-flex align-items-center float-end gap-2">
//                               <Link
//                                 to="#"
//                                 className="notification-read rounded-circle bg-danger"
//                                 data-bs-toggle="tooltip"
//                                 title=""
//                                 data-bs-original-title="Make as Read"
//                                 aria-label="Make as Read"
//                               />
//                               <button
//                                 className="btn rounded-circle p-0"
//                                 data-dismissible="#notification-1"
//                               >
//                                 <i className="ti ti-x" />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* Item*/}
//                     <div
//                       className="dropdown-item notification-item py-3 text-wrap border-bottom"
//                       id="notification-2"
//                     >
//                       <div className="d-flex">
//                         <div className="me-2 position-relative flex-shrink-0">
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-06.jpg"
//                             className="avatar-md rounded-circle"
//                             alt=""
//                           />
//                         </div>
//                         <div className="flex-grow-1">
//                           <p className="mb-0 fw-medium text-dark">Dr. Patel</p>
//                           <p className="mb-1 text-wrap">
//                             completed a
//                             <span className="fw-medium text-dark">
//                               follow-up
//                             </span>
//                             report for patient
//                             <span className="fw-medium text-dark">Emily</span>.
//                           </p>
//                           <div className="d-flex justify-content-between align-items-center">
//                             <span className="fs-12">
//                               <i className="ti ti-clock me-1" />8 min ago
//                             </span>
//                             <div className="notification-action d-flex align-items-center float-end gap-2">
//                               <Link
//                                 to="#"
//                                 className="notification-read rounded-circle bg-danger"
//                                 data-bs-toggle="tooltip"
//                                 title=""
//                                 data-bs-original-title="Make as Read"
//                                 aria-label="Make as Read"
//                               />
//                               <button
//                                 className="btn rounded-circle p-0"
//                                 data-dismissible="#notification-2"
//                               >
//                                 <i className="ti ti-x" />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* Item*/}
//                     <div
//                       className="dropdown-item notification-item py-3 text-wrap border-bottom"
//                       id="notification-3"
//                     >
//                       <div className="d-flex">
//                         <div className="me-2 position-relative flex-shrink-0">
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-02.jpg"
//                             className="avatar-md rounded-circle"
//                             alt=""
//                           />
//                         </div>
//                         <div className="flex-grow-1">
//                           <p className="mb-0 fw-medium text-dark">Emily</p>
//                           <p className="mb-1 text-wrap">
//                             booked an appointment with
//                             <span className="fw-medium text-dark">
//                               Dr. Patel
//                             </span>
//                             for
//                             <span className="fw-medium text-dark">
//                               April 15
//                             </span>
//                           </p>
//                           <div className="d-flex justify-content-between align-items-center">
//                             <span className="fs-12">
//                               <i className="ti ti-clock me-1" />
//                               15 min ago
//                             </span>
//                             <div className="notification-action d-flex align-items-center float-end gap-2">
//                               <Link
//                                 to="#"
//                                 className="notification-read rounded-circle bg-danger"
//                                 data-bs-toggle="tooltip"
//                                 title=""
//                                 data-bs-original-title="Make as Read"
//                                 aria-label="Make as Read"
//                               />
//                               <button
//                                 className="btn rounded-circle p-0"
//                                 data-dismissible="#notification-3"
//                               >
//                                 <i className="ti ti-x" />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* Item*/}
//                     <div
//                       className="dropdown-item notification-item py-3 text-wrap"
//                       id="notification-4"
//                     >
//                       <div className="d-flex">
//                         <div className="me-2 position-relative flex-shrink-0">
//                           <ImageWithBasePath
//                             src="assets/img/doctors/doctor-07.jpg"
//                             className="avatar-md rounded-circle"
//                             alt=""
//                           />
//                         </div>
//                         <div className="flex-grow-1">
//                           <p className="mb-0 fw-medium text-dark">Amelia</p>
//                           <p className="mb-1 text-wrap">
//                             completed the
//                             <span className="fw-medium text-dark">
//                               pre-visit
//                             </span>
//                             health questionnaire.
//                           </p>
//                           <div className="d-flex justify-content-between align-items-center">
//                             <span className="fs-12">
//                               <i className="ti ti-clock me-1" />
//                               20 min ago
//                             </span>
//                             <div className="notification-action d-flex align-items-center float-end gap-2">
//                               <Link
//                                 to="#"
//                                 className="notification-read rounded-circle bg-danger"
//                                 data-bs-toggle="tooltip"
//                                 title=""
//                                 data-bs-original-title="Make as Read"
//                                 aria-label="Make as Read"
//                               />
//                               <button
//                                 className="btn rounded-circle p-0"
//                                 data-dismissible="#notification-4"
//                               >
//                                 <i className="ti ti-x" />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* View All*/}
//                   <div className="p-2 rounded-bottom border-top text-center">
//                     <Link
//                       to={all_routes.notifications}
//                       className="text-center text-decoration-underline fs-14 mb-0"
//                     >
//                       View All Notifications
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* User Dropdown */}
//             <div className="dropdown profile-dropdown d-flex align-items-center justify-content-center">
//               <Link
//                 to="#"
//                 className="topbar-link dropdown-toggle drop-arrow-none position-relative"
//                 data-bs-toggle="dropdown"
//                 data-bs-offset="0,22"
//                 aria-haspopup="false"
//                 aria-expanded="false"
//               >
//                 <div className="position-relative">
//                   <ProfileAvatar size={32} className="d-flex" />
//                   <span className="online text-success position-absolute" style={{ bottom: 0, right: 0 }}>
//                     <i className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white" />
//                   </span>
//                 </div>
//               </Link>
//               <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
//                 <div className="d-flex align-items-center bg-light rounded-3 p-2 mb-2">
//                   <ProfileAvatar size={42} />
//                   <div className="ms-2">
//                     <p className="fw-medium text-dark mb-0">{userData.fullName}</p>
//                     <span className="d-block fs-13">{capitalizeRole(userData.role)}</span>
//                   </div>
//                 </div>
//                 {/* Item*/}
//                 <Link to={all_routes.profilesettings} className="dropdown-item">
//                   <i className="ti ti-user-circle me-1 align-middle" />
//                   <span className="align-middle">Profile Settings</span>
//                 </Link>
//                 {/* Item*/}
//                 <Link to={all_routes.profilesettings} className="dropdown-item">
//                   <i className="ti ti-settings me-1 align-middle" />
//                   <span className="align-middle">Account Settings</span>
//                 </Link>
//                 {/* item */}
//                 <div className="form-check form-switch form-check-reverse d-flex align-items-center justify-content-between dropdown-item mb-0">
//                   <label className="form-check-label" htmlFor="notify">
//                     <i className="ti ti-bell me-1" />
//                     Notifications
//                   </label>
//                   <input
//                     className="form-check-input me-0"
//                     type="checkbox"
//                     role="switch"
//                     id="notify"
//                   />
//                 </div>
//                 {/* Item*/}
//                 <Link to={all_routes.transactions} className="dropdown-item">
//                   <i className="ti ti-transition-right me-1 align-middle" />
//                   <span className="align-middle">Transactions</span>
//                 </Link>
//                 {/* Item*/}
//                 <div className="pt-2 mt-2 border-top">
//                   <button onClick={handleLogout} className="dropdown-item text-danger">
//                     <i className="ti ti-logout me-1 fs-17 align-middle" />
//                     <span className="align-middle">Log Out</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       {/* Topbar End */}
//       {/* Search Modal */}
//       <div className="modal fade" id="searchModal">
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content bg-transparent">
//             <div className="card shadow-none mb-0">
//               <div
//                 className="px-3 py-2 d-flex flex-row align-items-center"
//                 id="search-top"
//               >
//                 <i className="ti ti-search fs-22" />
//                 <input
//                   type="search"
//                   className="form-control border-0"
//                   placeholder="Search doctors, patients, appointments..."
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                 />
//                 <button
//                   type="button"
//                   className="btn p-0"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <i className="ti ti-x fs-22" />
//                 </button>
//               </div>
//               {/* Mobile Search Results */}
//               {showResults && searchResults.length > 0 && (
//                 <div className="px-3 pb-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
//                   {searchResults.map((result, index) => (
//                     <Link
//                       key={`mobile-${result.type}-${result.id || index}`}
//                       to={result.link}
//                       className="d-flex align-items-center p-2 border-bottom text-decoration-none"
//                       onClick={handleSearchResultClick}
//                       data-bs-dismiss="modal"
//                     >
//                       <div
//                         className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold me-2"
//                         style={{ width: '35px', height: '35px', fontSize: '12px' }}
//                       >
//                         {result.initials}
//                       </div>
//                       <div>
//                         <p className="mb-0 fw-semibold text-dark">{result.title}</p>
//                         <small className="text-muted">{result.subtitle}</small>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;


import { Link } from "react-router-dom";
import ImageWithBasePath from "../../imageWithBasePath";
import { useEffect, useState, useCallback, useRef } from "react";
import { updateTheme } from "../../redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../../redux/sidebarSlice";
import { all_routes } from "../../../feature-module/routes/all_routes";
import { globalSearch, type SearchResult } from "../../../api/searchService";
import { debounce } from "lodash";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const Header = () => {
  const dispatch = useDispatch();
  const themeSettings = useSelector((state: any) => state.theme.themeSettings);
  const [isHiddenLayoutActive, setIsHiddenLayoutActive] = useState(() => {
    const saved = localStorage.getItem("hiddenLayoutActive");
    return saved ? JSON.parse(saved) : false;
  });

  const [userData, setUserData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    profileImage: "",
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const htmlElement: any = document.documentElement;
    Object.entries(themeSettings).forEach(([key, value]) => {
      htmlElement.setAttribute(key, value);
    });
  }, [themeSettings]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = all_routes.loginbasic;
  };

  const loadUserData = () => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        let firstName = parsedData.firstName || '';
        let lastName = parsedData.lastName || '';
        if (!firstName && parsedData.fullName) {
          const nameParts = parsedData.fullName.trim().split(' ');
          firstName = nameParts[0] || '';
          lastName = nameParts.slice(1).join(' ') || '';
        }
        const fullName = parsedData.fullName || `${firstName} ${lastName}`.trim() || 'User';
        setUserData({
          fullName,
          firstName,
          lastName,
          role: parsedData.role || 'patient',
          email: parsedData.email || '',
          profileImage: parsedData.profileImage || '',
        });
      } catch (error) {
        console.error('❌ Error parsing userData:', error);
      }
    }
  };

  useEffect(() => { loadUserData(); }, []);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'userData') loadUserData();
    };
    const handleCustomStorageChange = () => loadUserData();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userDataUpdated', handleCustomStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userDataUpdated', handleCustomStorageChange);
    };
  }, []);

  const performSearch = useCallback(
    debounce(async (query: string) => {
      if (!query || query.trim().length < 2) {
        setSearchResults([]); setShowResults(false); setIsSearching(false);
        return;
      }
      setIsSearching(true);
      try {
        const response = await globalSearch(query);
        setSearchResults(response.results || []);
        setShowResults(true);
      } catch (error) {
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  const handleSearchResultClick = () => {
    setShowResults(false); setSearchQuery(''); setSearchResults([]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUpdateTheme = (key: string, value: string) => {
    if (themeSettings["dir"] === "rtl" && key !== "dir") {
      dispatch(updateTheme({ dir: "ltr" }));
    }
    dispatch(updateTheme({ [key]: value }));
  };

  const mobileSidebar = useSelector((state: any) => state.sidebarSlice.mobileSidebar);
  const toggleMobileSidebar = () => { dispatch(setMobileSidebar(!mobileSidebar)); };

  const handleToggleHiddenLayout = () => {
    if (themeSettings["data-layout"] === "hidden") {
      const newState = !isHiddenLayoutActive;
      setIsHiddenLayoutActive(newState);
      localStorage.setItem("hiddenLayoutActive", JSON.stringify(newState));
    }
  };

  useEffect(() => {
    const bodyElement = document.body;
    if (themeSettings["data-layout"] === "hidden") {
      if (isHiddenLayoutActive) {
        bodyElement.classList.add("hidden-layout");
      } else {
        bodyElement.classList.remove("hidden-layout");
      }
    } else {
      bodyElement.classList.remove("hidden-layout");
      setIsHiddenLayoutActive(false);
      localStorage.removeItem("hiddenLayoutActive");
    }
  }, [isHiddenLayoutActive, themeSettings["data-layout"]]);

  const capitalizeRole = (role: string) => role.charAt(0).toUpperCase() + role.slice(1);

  const getInitials = () => {
    if (userData.firstName) return userData.firstName.charAt(0).toUpperCase();
    if (userData.fullName) return userData.fullName.charAt(0).toUpperCase();
    return "U";
  };

  // ✅ Role-based routes helper
  const getProfileRoute = () => {
    switch (userData.role) {
      case 'doctor': return all_routes.doctorsprofilesettings;
      case 'patient': return all_routes.patientprofilesettings || all_routes.profilesettings;
      default: return all_routes.profilesettings; // admin
    }
  };

  const getAccountSettingsRoute = () => {
    switch (userData.role) {
      case 'doctor': return all_routes.doctorsaccountsettings;
      // case 'patient': return all_routes.patientaccountsettings || all_routes.profilesettings;
      default: return all_routes.profilesettings; // admin
    }
  };

  const getNotificationsRoute = () => {
    switch (userData.role) {
      case 'doctor': return all_routes.doctorsnotificationsettings;
      default: return all_routes.notifications;
    }
  };

  const getTransactionsRoute = () => {
    switch (userData.role) {
      case 'doctor': return all_routes.doctorstransactions;
      default: return all_routes.transactions;
    }
  };

  const getSettingsRoute = () => {
    switch (userData.role) {
      case 'doctor': return all_routes.doctorsprofilesettings;
      default: return all_routes.profilesettings;
    }
  };

  const ProfileAvatar = ({ size = 32, className = "" }) => {
    if (userData.profileImage) {
      return (
        <img
          src={userData.profileImage}
          width={size}
          height={size}
          className={`rounded-circle ${className}`}
          alt="user-image"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
            if (nextSibling) nextSibling.classList.remove('d-none');
          }}
        />
      );
    }
    return (
      <div
        className={`rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-semibold ${className}`}
        style={{ width: `${size}px`, height: `${size}px`, fontSize: `${size * 0.4}px` }}
      >
        {getInitials()}
      </div>
    );
  };

  return (
    <>
      <header className="navbar-header">
        <div className="page-container topbar-menu">
          <div className="d-flex align-items-center gap-2">
            <Link to={all_routes.dashboard} className="logo">
              <span className="logo-light">
                <span className="logo-lg"><ImageWithBasePath src="assets/img/logo.svg" alt="logo" /></span>
                <span className="logo-sm"><ImageWithBasePath src="assets/img/logo-small.svg" alt="small logo" /></span>
              </span>
              <span className="logo-dark">
                <span className="logo-lg"><ImageWithBasePath src="assets/img/logo-white.svg" alt="dark logo" /></span>
              </span>
            </Link>
            <Link id="mobile_btn" className="mobile-btn" to="#" onClick={toggleMobileSidebar}>
              <i className="ti ti-menu-deep fs-24" />
            </Link>
            <button className="sidenav-toggle-btn btn border-0 p-0 active" id="toggle_btn2" onClick={handleToggleHiddenLayout}>
              <i className="ti ti-arrow-right" />
            </button>

            {/* Search */}
            <div className="me-auto d-flex align-items-center header-search d-lg-flex d-none position-relative" ref={searchRef}>
              <div className="input-icon-start position-relative me-2 w-100">
                <span className="input-icon-addon"><i className="ti ti-search" /></span>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeholder="Search doctors, patients, appointments..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchResults.length > 0 && setShowResults(true)}
                  style={{ paddingRight: '40px' }}
                />
                {isSearching && (
                  <span className="position-absolute" style={{ right: '45px', top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="spinner-border spinner-border-sm text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </span>
                )}
                <span className="input-icon-addon text-dark shadow fs-18 d-inline-flex p-0 header-search-icon">
                  <i className="ti ti-command" />
                </span>
              </div>
              {showResults && searchResults.length > 0 && (
                <div className="position-absolute bg-white border shadow-lg rounded-2 mt-1"
                  style={{ top: '100%', left: 0, width: '450px', maxHeight: '500px', overflowY: 'auto', zIndex: 1050 }}>
                  {['Doctors', 'Patients', 'Appointments', 'Quick Actions'].map(category => {
                    const categoryResults = searchResults.filter(r => r.category === category);
                    if (categoryResults.length === 0) return null;
                    return (
                      <div key={category}>
                        <div className="px-3 py-2 bg-light border-bottom">
                          <small className="text-muted fw-semibold">{category}</small>
                        </div>
                        {categoryResults.map((result, index) => (
                          <Link key={`${result.type}-${result.id || index}`} to={result.link}
                            className="d-flex align-items-center p-3 border-bottom text-decoration-none"
                            onClick={handleSearchResultClick}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                            {result.image ? (
                              <img src={result.image.startsWith('http') || result.image.startsWith('data:') ? result.image : `${API_URL}${result.image}`}
                                className="rounded-circle me-3" width="40" height="40" alt="" style={{ objectFit: 'cover' }}
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const parent = e.currentTarget.parentElement;
                                  if (parent) {
                                    const placeholder = document.createElement('div');
                                    placeholder.className = 'rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold me-3';
                                    placeholder.style.width = '40px'; placeholder.style.height = '40px'; placeholder.style.fontSize = '14px';
                                    placeholder.textContent = result.initials;
                                    parent.insertBefore(placeholder, e.currentTarget);
                                  }
                                }}
                              />
                            ) : (
                              <div className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold me-3"
                                style={{ width: '40px', height: '40px', fontSize: '14px' }}>
                                {result.initials}
                              </div>
                            )}
                            <div className="flex-grow-1">
                              <p className="mb-0 fw-semibold text-dark">{result.title}</p>
                              <small className="text-muted">{result.subtitle}</small>
                            </div>
                            <i className="ti ti-arrow-right ms-auto text-muted" />
                          </Link>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
              {showResults && searchResults.length === 0 && searchQuery.length >= 2 && !isSearching && (
                <div className="position-absolute bg-white border shadow-lg rounded-2 mt-1 p-4 text-center"
                  style={{ top: '100%', left: 0, width: '450px', zIndex: 1050 }}>
                  <i className="ti ti-search-off fs-48 text-muted mb-2 d-block" />
                  <p className="mb-0 text-muted">No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>

          <div className="d-flex align-items-center">
            {/* Mobile Search */}
            <div className="header-item d-flex d-lg-none me-2">
              <button className="topbar-link btn btn-icon" data-bs-toggle="modal" data-bs-target="#searchModal" type="button">
                <i className="ti ti-search fs-16" />
              </button>
            </div>

            {/* AI Assistance */}
            <Link to="#" className="btn btn-liner-gradient me-3 d-lg-flex d-none">
              AI Assistance <i className="ti ti-chart-bubble-filled ms-1" />
            </Link>

            {/* Appointment */}
            <div className="header-item">
              <div className="dropdown me-2">
                <Link to={all_routes.newAppointment} className="btn topbar-link">
                  <i className="ti ti-calendar-due" />
                </Link>
              </div>
            </div>

            {/* Settings - ✅ Role-based */}
            <div className="header-item">
              <div className="dropdown me-2">
                <Link to={getSettingsRoute()} className="btn topbar-link">
                  <i className="ti ti-settings-2" />
                </Link>
              </div>
            </div>

            {/* Light/Dark Mode */}
            <div className="header-item d-none d-sm-flex me-2">
              <Link to="#" id="dark-mode-toggle"
                className={`topbar-link btn btn-icon topbar-link header-togglebtn ${themeSettings["data-bs-theme"] === "dark" ? "activate" : ""}`}
                onClick={() => handleUpdateTheme("data-bs-theme", "light")}>
                <i className="ti ti-sun fs-16" />
              </Link>
              <Link to="#" id="light-mode-toggle"
                className={`topbar-link btn btn-icon topbar-link header-togglebtn ${themeSettings["data-bs-theme"] === "light" ? "activate" : ""}`}
                onClick={() => handleUpdateTheme("data-bs-theme", "dark")}>
                <i className="ti ti-moon fs-16" />
              </Link>
            </div>

            {/* Notifications Bell */}
            <div className="header-item">
              <div className="dropdown me-3">
                <button className="topbar-link btn btn-icon topbar-link dropdown-toggle drop-arrow-none"
                  data-bs-toggle="dropdown" data-bs-offset="0,24" type="button">
                  <i className="ti ti-bell-check fs-16 animate-ring" />
                  <span className="notification-badge" />
                </button>
                <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg" style={{ minHeight: 300 }}>
                  <div className="p-2 border-bottom">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0 fs-16 fw-semibold">Notifications</h6>
                      </div>
                    </div>
                  </div>
                  <div className="notification-body position-relative z-2 rounded-0" data-simplebar="">
                    <div className="dropdown-item notification-item py-3 text-wrap border-bottom" id="notification-1">
                      <div className="d-flex">
                        <div className="me-2 position-relative flex-shrink-0">
                          <ImageWithBasePath src="assets/img/doctors/doctor-01.jpg" className="avatar-md rounded-circle" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0 fw-medium text-dark">Dr. Smith</p>
                          <p className="mb-1 text-wrap">updated the <span className="fw-medium text-dark">surgery</span> schedule.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-12"><i className="ti ti-clock me-1" />4 min ago</span>
                            <div className="notification-action d-flex align-items-center float-end gap-2">
                              <Link to="#" className="notification-read rounded-circle bg-danger" />
                              <button className="btn rounded-circle p-0" data-dismissible="#notification-1"><i className="ti ti-x" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item notification-item py-3 text-wrap border-bottom" id="notification-2">
                      <div className="d-flex">
                        <div className="me-2 position-relative flex-shrink-0">
                          <ImageWithBasePath src="assets/img/doctors/doctor-06.jpg" className="avatar-md rounded-circle" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0 fw-medium text-dark">Dr. Patel</p>
                          <p className="mb-1 text-wrap">completed a <span className="fw-medium text-dark">follow-up</span> report.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-12"><i className="ti ti-clock me-1" />8 min ago</span>
                            <div className="notification-action d-flex align-items-center float-end gap-2">
                              <Link to="#" className="notification-read rounded-circle bg-danger" />
                              <button className="btn rounded-circle p-0" data-dismissible="#notification-2"><i className="ti ti-x" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item notification-item py-3 text-wrap" id="notification-3">
                      <div className="d-flex">
                        <div className="me-2 position-relative flex-shrink-0">
                          <ImageWithBasePath src="assets/img/doctors/doctor-02.jpg" className="avatar-md rounded-circle" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0 fw-medium text-dark">Emily</p>
                          <p className="mb-1 text-wrap">booked an appointment with <span className="fw-medium text-dark">Dr. Patel</span>.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-12"><i className="ti ti-clock me-1" />15 min ago</span>
                            <div className="notification-action d-flex align-items-center float-end gap-2">
                              <Link to="#" className="notification-read rounded-circle bg-danger" />
                              <button className="btn rounded-circle p-0" data-dismissible="#notification-3"><i className="ti ti-x" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-bottom border-top text-center">
                    <Link to={all_routes.notifications} className="text-center text-decoration-underline fs-14 mb-0">
                      View All Notifications
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ User Dropdown - Role-based links */}
            <div className="dropdown profile-dropdown d-flex align-items-center justify-content-center">
              <Link to="#" className="topbar-link dropdown-toggle drop-arrow-none position-relative"
                data-bs-toggle="dropdown" data-bs-offset="0,22">
                <div className="position-relative">
                  <ProfileAvatar size={32} className="d-flex" />
                  <span className="online text-success position-absolute" style={{ bottom: 0, right: 0 }}>
                    <i className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white" />
                  </span>
                </div>
              </Link>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
                {/* User Info */}
                <div className="d-flex align-items-center bg-light rounded-3 p-2 mb-2">
                  <ProfileAvatar size={42} />
                  <div className="ms-2">
                    <p className="fw-medium text-dark mb-0">{userData.fullName}</p>
                    <span className="d-block fs-13">{capitalizeRole(userData.role)}</span>
                  </div>
                </div>

                {/* ✅ Profile Settings - role-based */}
                <Link to={getProfileRoute()} className="dropdown-item">
                  <i className="ti ti-user-circle me-1 align-middle" />
                  <span className="align-middle">Profile Settings</span>
                </Link>

                {/* ✅ Account Settings - role-based */}
                <Link to={getAccountSettingsRoute()} className="dropdown-item">
                  <i className="ti ti-settings me-1 align-middle" />
                  <span className="align-middle">Account Settings</span>
                </Link>

                {/* ✅ Notifications - role-based */}
                <Link to={getNotificationsRoute()} className="dropdown-item">
                  <i className="ti ti-bell me-1 align-middle" />
                  <span className="align-middle">Notifications</span>
                </Link>

                {/* ✅ Transactions - role-based */}
                <Link to={getTransactionsRoute()} className="dropdown-item">
                  <i className="ti ti-transition-right me-1 align-middle" />
                  <span className="align-middle">Transactions</span>
                </Link>

                {/* Logout */}
                <div className="pt-2 mt-2 border-top">
                  <button onClick={handleLogout} className="dropdown-item text-danger">
                    <i className="ti ti-logout me-1 fs-17 align-middle" />
                    <span className="align-middle">Log Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal (Mobile) */}
      <div className="modal fade" id="searchModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-transparent">
            <div className="card shadow-none mb-0">
              <div className="px-3 py-2 d-flex flex-row align-items-center" id="search-top">
                <i className="ti ti-search fs-22" />
                <input type="search" className="form-control border-0"
                  placeholder="Search doctors, patients, appointments..."
                  value={searchQuery} onChange={handleSearchChange} />
                <button type="button" className="btn p-0" data-bs-dismiss="modal" aria-label="Close">
                  <i className="ti ti-x fs-22" />
                </button>
              </div>
              {showResults && searchResults.length > 0 && (
                <div className="px-3 pb-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  {searchResults.map((result, index) => (
                    <Link key={`mobile-${result.type}-${result.id || index}`} to={result.link}
                      className="d-flex align-items-center p-2 border-bottom text-decoration-none"
                      onClick={handleSearchResultClick} data-bs-dismiss="modal">
                      <div className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold me-2"
                        style={{ width: '35px', height: '35px', fontSize: '12px' }}>
                        {result.initials}
                      </div>
                      <div>
                        <p className="mb-0 fw-semibold text-dark">{result.title}</p>
                        <small className="text-muted">{result.subtitle}</small>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;