// import { useState } from "react";
// import { DatePicker, TimePicker, type TimePickerProps } from "antd";
// import dayjs from "dayjs";
// import { Link } from "react-router";
// import {
//   Location,
//   Recures_Every,
//   Session,
// } from "../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";

// const DoctorSchedules = () => {
//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body;
//   };
//   const onChangeTime: TimePickerProps["onChange"] = (time, timeString) => {
//     console.log(time, timeString);
//   };

//   // Separate state for each day's schedules
//   const [mondaySchedules, setMondaySchedules] = useState([
//     { id: Date.now(), session: Session[0], from: null, to: null },
//   ]);
//   const [tuesdaySchedules, setTuesdaySchedules] = useState([
//     { id: Date.now() + 1, session: Session[0], from: null, to: null },
//   ]);
//   const [wednesdaySchedules, setWednesdaySchedules] = useState([
//     { id: Date.now() + 2, session: Session[0], from: null, to: null },
//   ]);
//   const [thursdaySchedules, setThursdaySchedules] = useState([
//     { id: Date.now() + 3, session: Session[0], from: null, to: null },
//   ]);
//   const [fridaySchedules, setFridaySchedules] = useState([
//     { id: Date.now() + 4, session: Session[0], from: null, to: null },
//   ]);
//   const [saturdaySchedules, setSaturdaySchedules] = useState([
//     { id: Date.now() + 5, session: Session[0], from: null, to: null },
//   ]);
//   const [sundaySchedules, setSundaySchedules] = useState([
//     { id: Date.now() + 6, session: Session[0], from: null, to: null },
//   ]);

//   // Generic add/delete handlers for each day
//   const handleAddSchedule = (day: string) => {
//     const newRow = {
//       id: Date.now() + Math.random(),
//       session: Session[0],
//       from: null,
//       to: null,
//     };
//     switch (day) {
//       case "monday":
//         setMondaySchedules([...mondaySchedules, newRow]);
//         break;
//       case "tuesday":
//         setTuesdaySchedules([...tuesdaySchedules, newRow]);
//         break;
//       case "wednesday":
//         setWednesdaySchedules([...wednesdaySchedules, newRow]);
//         break;
//       case "thursday":
//         setThursdaySchedules([...thursdaySchedules, newRow]);
//         break;
//       case "friday":
//         setFridaySchedules([...fridaySchedules, newRow]);
//         break;
//       case "saturday":
//         setSaturdaySchedules([...saturdaySchedules, newRow]);
//         break;
//       case "sunday":
//         setSundaySchedules([...sundaySchedules, newRow]);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleDeleteSchedule = (day: string, id: number) => {
//     switch (day) {
//       case "monday":
//         setMondaySchedules(mondaySchedules.filter((row) => row.id !== id));
//         break;
//       case "tuesday":
//         setTuesdaySchedules(tuesdaySchedules.filter((row) => row.id !== id));
//         break;
//       case "wednesday":
//         setWednesdaySchedules(
//           wednesdaySchedules.filter((row) => row.id !== id)
//         );
//         break;
//       case "thursday":
//         setThursdaySchedules(thursdaySchedules.filter((row) => row.id !== id));
//         break;
//       case "friday":
//         setFridaySchedules(fridaySchedules.filter((row) => row.id !== id));
//         break;
//       case "saturday":
//         setSaturdaySchedules(saturdaySchedules.filter((row) => row.id !== id));
//         break;
//       case "sunday":
//         setSundaySchedules(sundaySchedules.filter((row) => row.id !== id));
//         break;
//       default:
//         break;
//     }
//   };

//   // Helper to render schedule rows for a given day
//   const renderScheduleRows = (schedules: typeof mondaySchedules, day: string) =>
//     schedules.map((row, idx) => (
//       <div className="row gx-3" key={row.id}>
//         <div className="col-lg-5">
//           <div className="mb-3">
//             <label className="form-label">Session</label>
//             <CommonSelect
//               options={Session}
//               className="select"
//               defaultValue={row.session}
//             />
//           </div>
//         </div>
//         <div className="col-lg-7">
//           <div className="row align-items-end gx-3">
//             <div className="col-lg-9">
//               <div className="row gx-3">
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label">From</label>
//                     <div className="input-icon-end position-relative">
//                       <TimePicker
//                         className="form-control"
//                         onChange={onChangeTime}
//                         defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
//                       />
//                       <span className="input-icon-addon">
//                         <i className="ti ti-clock-hour-10" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label">To</label>
//                     <div className="input-icon-end position-relative">
//                       <TimePicker
//                         className="form-control"
//                         onChange={onChangeTime}
//                         defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
//                       />
//                       <span className="input-icon-addon">
//                         <i className="ti ti-clock-hour-10" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3">
//               <div className="mb-3 d-flex gap-2">
//                 {idx === 0 ? (
//                   <Link
//                     to="#"
//                     className="add-schedule-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleAddSchedule(day);
//                     }}
//                     title="Add"
//                   >
//                     <i className="ti ti-plus fs-16" />
//                   </Link>
//                 ) : (
//                   <Link
//                     to="#"
//                     className="delete-schedule-btn p-2 bg-danger btn-icon text-white rounded d-flex align-items-center justify-content-center"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleDeleteSchedule(day, row.id);
//                     }}
//                     title="Delete"
//                   >
//                     <i className="ti ti-trash fs-16" />
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ));

//   return (
//     <>
//       {/* ========================
//             Start Page Content
//         ========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Start Row */}
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               {/* Start Page Header */}
//               <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
//                 <div className="flex-grow-1">
//                   <h4 className="fw-bold mb-0"> My Schedule</h4>
//                 </div>
//                 <div className="text-end d-flex">
//                   {/* dropdown*/}
//                   <div className="dropdown me-1">
//                     <Link
//                       to="#"
//                       className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
//                       data-bs-toggle="dropdown"
//                     >
//                       Export
//                       <i className="ti ti-chevron-down ms-2" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Download as PDF
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="#">
//                           Download as Excel
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               {/* End Page Header */}
//               <div className="card">
//                 <div className="card-body">
//                   <div className="border-bottom mb-3">
//                     <h6 className="fw-bold mb-3">Schedule Detail</h6>
//                     <div className="row">
//                       <div className="col-lg-3 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">Location</label>
//                           <CommonSelect
//                             options={Location}
//                             className="select"
//                             defaultValue={Location[0]}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">From</label>
//                           <div className="input-icon-end position-relative">
//                             <DatePicker
//                               className="form-control datetimepicker"
//                               format={{
//                                 format: "DD-MM-YYYY",
//                                 type: "mask",
//                               }}
//                               getPopupContainer={getModalContainer}
//                               placeholder="DD-MM-YYYY"
//                               suffixIcon={null}
//                             />
//                             <span className="input-icon-addon">
//                               <i className="ti ti-calendar" />
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">To</label>
//                           <div className="input-icon-end position-relative">
//                             <DatePicker
//                               className="form-control datetimepicker"
//                               format={{
//                                 format: "DD-MM-YYYY",
//                                 type: "mask",
//                               }}
//                               getPopupContainer={getModalContainer}
//                               placeholder="DD-MM-YYYY"
//                               suffixIcon={null}
//                             />
//                             <span className="input-icon-addon">
//                               <i className="ti ti-calendar" />
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">Recures Every</label>
//                           <CommonSelect
//                             options={Recures_Every}
//                             className="select"
//                             defaultValue={Recures_Every[0]}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <h6 className="fw-bold mb-3">Schedules</h6>
//                     <ul
//                       className="nav nav-pills schedule-tab mb-3"
//                       id="pills-tab2"
//                       role="tablist"
//                     >
//                       <li className="nav-item me-1" role="presentation">
//                         <button
//                           className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active"
//                           data-bs-toggle="pill"
//                           data-bs-target="#schedules-8"
//                           type="button"
//                           role="tab"
//                           aria-selected="true"
//                         >
//                           Monday
//                         </button>
//                       </li>
//                       <li className="nav-item me-1" role="presentation">
//                         <button
//                           className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                           data-bs-toggle="pill"
//                           data-bs-target="#schedules-9"
//                           type="button"
//                           role="tab"
//                           aria-selected="false"
//                           tabIndex={-1}
//                         >
//                           Tuesday
//                         </button>
//                       </li>
//                       <li className="nav-item me-1" role="presentation">
//                         <button
//                           className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                           data-bs-toggle="pill"
//                           data-bs-target="#schedules-10"
//                           type="button"
//                           role="tab"
//                           aria-selected="false"
//                           tabIndex={-1}
//                         >
//                           Wednesday
//                         </button>
//                       </li>
//                       <li className="nav-item me-1" role="presentation">
//                         <button
//                           className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                           data-bs-toggle="pill"
//                           data-bs-target="#schedules-11"
//                           type="button"
//                           role="tab"
//                           aria-selected="false"
//                           tabIndex={-1}
//                         >
//                           Thursday
//                         </button>
//                       </li>
//                       <li className="nav-item me-1" role="presentation">
//                         <button
//                           className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                           data-bs-toggle="pill"
//                           data-bs-target="#schedules-12"
//                           type="button"
//                           role="tab"
//                           aria-selected="false"
//                           tabIndex={-1}
//                         >
//                           Friday
//                         </button>
//                       </li>
//                       <li className="nav-item me-1" role="presentation">
//                         <button
//                           className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                           data-bs-toggle="pill"
//                           data-bs-target="#schedules-13"
//                           type="button"
//                           role="tab"
//                           aria-selected="false"
//                           tabIndex={-1}
//                         >
//                           Saturday
//                         </button>
//                       </li>
//                       <li className="nav-item me-1" role="presentation">
//                         <button
//                           className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
//                           data-bs-toggle="pill"
//                           data-bs-target="#schedules-14"
//                           type="button"
//                           role="tab"
//                           aria-selected="false"
//                           tabIndex={-1}
//                         >
//                           Sunday
//                         </button>
//                       </li>
//                     </ul>
//                     <div className="tab-content" id="pills-tabContent2">
//                       <div
//                         className="tab-pane fade active show"
//                         id="schedules-8"
//                         role="tabpanel"
//                       >
//                         <div className="add-schedule-list">
//                           {renderScheduleRows(mondaySchedules, "monday")}
//                         </div>
//                       </div>
//                       <div
//                         className="tab-pane fade"
//                         id="schedules-9"
//                         role="tabpanel"
//                       >
//                         <div className="add-schedule-list">
//                           {renderScheduleRows(tuesdaySchedules, "tuesday")}
//                         </div>
//                       </div>
//                       <div
//                         className="tab-pane fade"
//                         id="schedules-10"
//                         role="tabpanel"
//                       >
//                         <div className="add-schedule-list">
//                           {renderScheduleRows(wednesdaySchedules, "wednesday")}
//                         </div>
//                       </div>
//                       <div
//                         className="tab-pane fade"
//                         id="schedules-11"
//                         role="tabpanel"
//                       >
//                         <div className="add-schedule-list">
//                           {renderScheduleRows(thursdaySchedules, "thursday")}
//                         </div>
//                       </div>
//                       <div
//                         className="tab-pane fade"
//                         id="schedules-12"
//                         role="tabpanel"
//                       >
//                         <div className="add-schedule-list">
//                           {renderScheduleRows(fridaySchedules, "friday")}
//                         </div>
//                       </div>
//                       <div
//                         className="tab-pane fade"
//                         id="schedules-13"
//                         role="tabpanel"
//                       >
//                         <div className="add-schedule-list">
//                           {renderScheduleRows(saturdaySchedules, "saturday")}
//                         </div>
//                       </div>
//                       <div
//                         className="tab-pane fade"
//                         id="schedules-14"
//                         role="tabpanel"
//                       >
//                         <div className="add-schedule-list">
//                           {renderScheduleRows(sundaySchedules, "sunday")}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* End card body */}
//               </div>
//               {/* End card */}
//               <div className="modal-footer d-flex align-items-center gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-white border"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* End Row */}
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
//             End Page Content
//         ========================= */}
//     </>
//   );
// };

// export default DoctorSchedules;



import { useState, useEffect } from "react";
import { DatePicker, TimePicker, message } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router";
import {
  Location,
  Recures_Every,
  Session,
} from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { getDoctor, updateDoctorSchedule } from "../../../../../api/doctorService";

interface TimeSlot {
  id: number;
  session: any;
  from: Dayjs | null;
  to: Dayjs | null;
}

interface DaySchedule {
  [key: string]: TimeSlot[];
}

interface DoctorScheduleSlot {
  startTime: string;
  endTime: string;
}

interface DoctorDaySchedule {
  day: string;
  timeSlots: DoctorScheduleSlot[];
}

interface DoctorInfo {
  _id: string;
  fullName: string;
  email: string;
  department?: string;
  schedules?: DoctorDaySchedule[];
  [key: string]: any;
}

const DoctorSchedules = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  // Form state
  const [location, setLocation] = useState(Location[0]);
  const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  const [toDate, setToDate] = useState<Dayjs | null>(null);
  const [recuresEvery, setRecuresEvery] = useState(Recures_Every[0]);
  const [loading, setLoading] = useState(false);
  const [_doctorInfo, setDoctorInfo] = useState<DoctorInfo | null>(null);

  // Separate state for each day's schedules
  const [schedules, setSchedules] = useState<DaySchedule>({
    monday: [{ id: Date.now(), session: Session[0], from: null, to: null }],
    tuesday: [{ id: Date.now() + 1, session: Session[0], from: null, to: null }],
    wednesday: [{ id: Date.now() + 2, session: Session[0], from: null, to: null }],
    thursday: [{ id: Date.now() + 3, session: Session[0], from: null, to: null }],
    friday: [{ id: Date.now() + 4, session: Session[0], from: null, to: null }],
    saturday: [{ id: Date.now() + 5, session: Session[0], from: null, to: null }],
    sunday: [{ id: Date.now() + 6, session: Session[0], from: null, to: null }],
  });

  // Fetch doctor info on mount
  useEffect(() => {
    fetchDoctorInfo();
  }, []);

  const fetchDoctorInfo = async () => {
    try {
      const userData = localStorage.getItem('userData');
      if (!userData) {
        message.error('User data not found');
        return;
      }

      const user = JSON.parse(userData);
      const response = await getDoctor(user._id);

      if (response.success && response.data) {
        setDoctorInfo(response.data);

        // Load existing schedules if available
        if (response.data.schedules && response.data.schedules.length > 0) {
          const loadedSchedules: DaySchedule = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
          };

          response.data.schedules.forEach((daySchedule: any) => {
            const dayKey = daySchedule.day.toLowerCase();
            if (daySchedule.timeSlots && daySchedule.timeSlots.length > 0) {
              loadedSchedules[dayKey] = daySchedule.timeSlots.map((slot: any, index: number) => ({
                id: Date.now() + Math.random() + index,
                session: Session[0], // Default session
                from: slot.startTime ? dayjs(slot.startTime, "HH:mm") : null,
                to: slot.endTime ? dayjs(slot.endTime, "HH:mm") : null,
              }));
            } else {
              loadedSchedules[dayKey] = [{
                id: Date.now() + Math.random(),
                session: Session[0],
                from: null,
                to: null
              }];
            }
          });

          setSchedules(loadedSchedules);
        }
      }
    } catch (error: any) {
      console.error("Error fetching doctor info:", error);
      message.error("Failed to load doctor information");
    }
  };

  // Add schedule handler
  const handleAddSchedule = (day: string) => {
    const newRow: TimeSlot = {
      id: Date.now() + Math.random(),
      session: Session[0],
      from: null,
      to: null,
    };

    setSchedules(prev => ({
      ...prev,
      [day]: [...prev[day], newRow]
    }));
  };

  // Delete schedule handler
  const handleDeleteSchedule = (day: string, id: number) => {
    setSchedules(prev => ({
      ...prev,
      [day]: prev[day].filter((row) => row.id !== id)
    }));
  };

  // Update session for a specific slot
  const handleSessionChange = (day: string, id: number, newSession: any) => {
    setSchedules(prev => ({
      ...prev,
      [day]: prev[day].map(slot =>
        slot.id === id ? { ...slot, session: newSession } : slot
      )
    }));
  };

  // Update time for a specific slot
  const handleTimeChange = (day: string, id: number, field: 'from' | 'to', time: Dayjs | null) => {
    setSchedules(prev => ({
      ...prev,
      [day]: prev[day].map(slot =>
        slot.id === id ? { ...slot, [field]: time } : slot
      )
    }));
  };

  const validateSchedules = () => {
    console.log('🔍 Starting validation...');
    console.log('📅 Current schedules:', schedules);

    let hasAtLeastOneSlot = false;

    for (const day in schedules) {
      console.log(`Checking ${day}:`, schedules[day]);

      for (const slot of schedules[day]) {
        console.log(`  Slot:`, { from: slot.from, to: slot.to });

        if (slot.from && slot.to) {
          hasAtLeastOneSlot = true;
          console.log(`  ✅ Found valid slot in ${day}`);

          if (slot.to.isBefore(slot.from) || slot.to.isSame(slot.from)) {
            console.log(`  ❌ Invalid time range in ${day}`);
            message.error(`Invalid time range for ${day}: End time must be after start time`);
            return false;
          }
        }
      }
    }

    console.log('Has at least one slot:', hasAtLeastOneSlot);

    if (!hasAtLeastOneSlot) {
      message.error('Please add at least one time slot with both start and end times');
      return false;
    }

    return true;
  };

  // Save changes handler
  // const handleSaveChanges = async () => {
  //   if (!validateSchedules()) {
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const userData = localStorage.getItem('userData');
  //     if (!userData) {
  //       message.error('User data not found');
  //       return;
  //     }

  //     const user = JSON.parse(userData);

  //     // Format schedules for backend
  //     const formattedSchedules = Object.keys(schedules).map(day => ({
  //       day: day.charAt(0).toUpperCase() + day.slice(1), // Capitalize first letter
  //       timeSlots: schedules[day]
  //         .filter(slot => slot.from && slot.to) // Only include slots with both times
  //         .map(slot => ({
  //           startTime: slot.from!.format("HH:mm"),
  //           endTime: slot.to!.format("HH:mm"),
  //         }))
  //     }));

  //     const scheduleData = {
  //       schedules: formattedSchedules,
  //       location: location?.value || location,
  //       fromDate: fromDate ? fromDate.format("YYYY-MM-DD") : undefined,
  //       toDate: toDate ? toDate.format("YYYY-MM-DD") : undefined,
  //       recuresEvery: recuresEvery?.value || recuresEvery,
  //     };

  //     await updateDoctorSchedule(user._id, scheduleData);
  //     message.success("Schedule updated successfully!");

  //     // Refresh doctor info
  //     await fetchDoctorInfo();
  //   } catch (error: any) {
  //     console.error("Error updating schedule:", error);
  //     message.error(error.message || "Failed to update schedule");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSaveChanges = async () => {
    console.log('🔵 Save Changes clicked');

    if (!validateSchedules()) {
      console.log('❌ Validation failed');
      return;
    }

    console.log('✅ Validation passed');
    setLoading(true);

    try {
      const userData = localStorage.getItem('userData');
      console.log('👤 User data:', userData);

      if (!userData) {
        message.error('User data not found');
        return;
      }

      const user = JSON.parse(userData);
      console.log('👤 Parsed user:', user);

      // Format schedules for backend
      const formattedSchedules = Object.keys(schedules).map(day => ({
        day: day.charAt(0).toUpperCase() + day.slice(1),
        timeSlots: schedules[day]
          .filter(slot => slot.from && slot.to)
          .map(slot => ({
            startTime: slot.from!.format("HH:mm"),
            endTime: slot.to!.format("HH:mm"),
          }))
      }));

      console.log('📅 Formatted schedules:', formattedSchedules);

      const scheduleData = {
        schedules: formattedSchedules,
        location: location?.value || location,
        fromDate: fromDate ? fromDate.format("YYYY-MM-DD") : undefined,
        toDate: toDate ? toDate.format("YYYY-MM-DD") : undefined,
        recuresEvery: recuresEvery?.value || recuresEvery,
      };

      console.log('📤 Sending schedule data:', scheduleData);

      const response = await updateDoctorSchedule(user._id, scheduleData);
      console.log('✅ Response:', response);

      message.success("Schedule updated successfully!");
      await fetchDoctorInfo();
    } catch (error: any) {
      console.error("❌ Error updating schedule:", error);
      message.error(error.message || "Failed to update schedule");
    } finally {
      setLoading(false);
    }
  };

  // Helper to render schedule rows for a given day
  const renderScheduleRows = (daySchedules: TimeSlot[], day: string) =>
    daySchedules.map((row, idx) => (
      <div className="row gx-3" key={row.id}>
        <div className="col-lg-5">
          <div className="mb-3">
            <label className="form-label">Session</label>
            <CommonSelect
              options={Session}
              className="select"
              value={row.session}
              onChange={(option: any) => handleSessionChange(day, row.id, option)}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row align-items-end gx-3">
            <div className="col-lg-9">
              <div className="row gx-3">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">From</label>
                    <div className="input-icon-end position-relative">
                      <TimePicker
                        className="form-control"
                        value={row.from}
                        onChange={(time) => handleTimeChange(day, row.id, 'from', time)}
                        format="HH:mm"
                        placeholder="Select time"
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-clock-hour-10" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">To</label>
                    <div className="input-icon-end position-relative">
                      <TimePicker
                        className="form-control"
                        value={row.to}
                        onChange={(time) => handleTimeChange(day, row.id, 'to', time)}
                        format="HH:mm"
                        placeholder="Select time"
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-clock-hour-10" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mb-3 d-flex gap-2">
                {idx === 0 ? (
                  <Link
                    to="#"
                    className="add-schedule-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddSchedule(day);
                    }}
                    title="Add"
                  >
                    <i className="ti ti-plus fs-16" />
                  </Link>
                ) : (
                  <Link
                    to="#"
                    className="delete-schedule-btn p-2 bg-danger btn-icon text-white rounded d-flex align-items-center justify-content-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteSchedule(day, row.id);
                    }}
                    title="Delete"
                  >
                    <i className="ti ti-trash fs-16" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
                <div className="flex-grow-1">
                  <h4 className="fw-bold mb-0">My Schedule</h4>
                </div>
                <div className="text-end d-flex">
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
                        <Link className="dropdown-item" to="#">
                          Download as PDF
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Download as Excel
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="border-bottom mb-3">
                    <h6 className="fw-bold mb-3">Schedule Detail</h6>
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Location</label>
                          <CommonSelect
                            options={Location}
                            className="select"
                            value={location}
                            onChange={(option: any) => setLocation(option)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">From</label>
                          <div className="input-icon-end position-relative">
                            <DatePicker
                              className="form-control datetimepicker"
                              format="DD-MM-YYYY"
                              value={fromDate}
                              onChange={(date) => setFromDate(date)}
                              getPopupContainer={getModalContainer}
                              placeholder="DD-MM-YYYY"
                              suffixIcon={null}
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">To</label>
                          <div className="input-icon-end position-relative">
                            <DatePicker
                              className="form-control datetimepicker"
                              format="DD-MM-YYYY"
                              value={toDate}
                              onChange={(date) => setToDate(date)}
                              getPopupContainer={getModalContainer}
                              placeholder="DD-MM-YYYY"
                              suffixIcon={null}
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Recures Every</label>
                          <CommonSelect
                            options={Recures_Every}
                            className="select"
                            value={recuresEvery}
                            onChange={(option: any) => setRecuresEvery(option)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-3">Schedules</h6>
                    <ul
                      className="nav nav-pills schedule-tab mb-3"
                      id="pills-tab2"
                      role="tablist"
                    >
                      {Object.keys(schedules).map((day, index) => (
                        <li className="nav-item me-1" role="presentation" key={day}>
                          <button
                            className={`nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto ${index === 0 ? 'active' : ''}`}
                            data-bs-toggle="pill"
                            data-bs-target={`#schedules-${day}`}
                            type="button"
                            role="tab"
                            aria-selected={index === 0}
                          >
                            {day.charAt(0).toUpperCase() + day.slice(1)}
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="tab-content" id="pills-tabContent2">
                      {Object.keys(schedules).map((day, index) => (
                        <div
                          key={day}
                          className={`tab-pane fade ${index === 0 ? 'active show' : ''}`}
                          id={`schedules-${day}`}
                          role="tabpanel"
                        >
                          <div className="add-schedule-list">
                            {renderScheduleRows(schedules[day], day)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveChanges}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

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

export default DoctorSchedules;