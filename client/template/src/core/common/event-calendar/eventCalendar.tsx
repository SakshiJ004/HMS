// import { useState, useRef } from "react";
// import FullCalendar from "@fullcalendar/react";
// import type { EventApi } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import ImageWithBasePath from "../../imageWithBasePath";

// const EventCalendar = () => {
//   const calendarRef = useRef(null);
//   const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const events = [
//     {
//       image: "assets/img/users/user-01.jpg",
//       start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
//     },
//     {
//       image: "assets/img/users/user-02.jpg",
//       start: new Date(Date.now() + 338000000).toISOString().slice(0, 10),
//     },
//     {
//       image: "assets/img/users/user-03.jpg",
//       start: new Date(Date.now() - 338000000).toISOString().slice(0, 10),
//     },
//     {
//       image: "assets/img/users/user-04.jpg",
//       start: new Date(Date.now() + 68000000).toISOString().slice(0, 10),
//     },
//     {
//       image: "assets/img/users/user-05.jpg",
//       start: new Date(Date.now() + 88000000).toISOString().slice(0, 10),
//     },
//   ];

//   const renderEventContent = (eventInfo: any) => {
//     const { image } = eventInfo.event.extendedProps;
//     return (
//       <div style={{ display: "flex", alignItems: "center" }}>
//         {image && (
//           <span
//             style={{
//               width: "20px",
//               height: "20px",
//               borderRadius: "50%",
//             }}
//           >
//             <ImageWithBasePath
//               src={image}
//               alt="icon"
//               className="avatar-xs rounded-circle"
//             />
//           </span>
//         )}
//       </div>
//     );
//   };

//   const handleEventClick = (clickInfo: any) => {
//     setSelectedEvent(clickInfo.event);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="p-4">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         headerToolbar={{
//           start: "today,prev,next",
//           center: "title",
//           end: "dayGridMonth,dayGridWeek,dayGridDay",
//         }}
//         eventContent={renderEventContent}
//         eventClick={handleEventClick}
//         ref={calendarRef}
//       />

//       {selectedEvent && (
//         <div
//           className={`modal fade ${modalOpen ? "show d-block" : ""}`}
//           tabIndex={-1}
//           role="dialog"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//            onClick={closeModal} 
//         >
//           <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//               <div className="modal-header bg-dark modal-bg">
//                 <h5 className="modal-title text-white">
//                   {selectedEvent.title || "Team B"}
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={closeModal}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <p className="d-flex align-items-center fw-medium text-black mb-3">
//                   <i className="ti ti-calendar-check text-default me-2" />
//                   26 Jul,2024 to 31 Jul,2024
//                 </p>
//                 <p className="d-flex align-items-center fw-medium text-black mb-3">
//                   <i className="ti ti-calendar-check text-default me-2" />
//                   11:00 AM to 12:15 PM
//                 </p>
//                 <p className="d-flex align-items-center fw-medium text-black mb-3">
//                   <i className="ti ti-map-pin-bolt text-default me-2" />
//                   Las Vegas, US
//                 </p>
//                 <p className="d-flex align-items-center fw-medium text-black mb-0">
//                   <i className="ti ti-calendar-check text-default me-2" />A
//                   recurring or repeating event is simply any event that you will
//                   occur more than once on your calendar.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventCalendar;



import { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { getAllDoctorAppointments } from "../../../api/doctorDashboardService";
import dayjs from "dayjs";

interface EventCalendarProps {
  appointments?: any[];
}


const EventCalendar = ({ appointments: propAppointments }: EventCalendarProps) => {
  const calendarRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (propAppointments && propAppointments.length > 0) {
      const formattedEvents = propAppointments.map((apt: any) => ({
        id: apt._id,
        title: apt.patient.fullName,
        start: apt.appointmentDate,
        extendedProps: {
          image: apt.patient.profileImage,
          time: apt.appointmentTime,
          type: apt.appointmentType,
          status: apt.status,
          phone: apt.patient.phone || apt.patient.email,
          appointmentId: apt.appointmentId,
        }
      }));
      setEvents(formattedEvents);
    } else {
      fetchAppointments();
    }
  }, [propAppointments]);

  const fetchAppointments = async () => {
    try {
      const res = await getAllDoctorAppointments();
      if (res.success) {
        const formattedEvents = res.data.map((apt: any) => ({
          id: apt._id,
          title: apt.patient.fullName,
          start: apt.appointmentDate,
          extendedProps: {
            image: apt.patient.profileImage,
            time: apt.appointmentTime,
            type: apt.appointmentType,
            status: apt.status,
            phone: apt.patient.phone || apt.patient.email,
            appointmentId: apt.appointmentId,
          }
        }));
        setEvents(formattedEvents);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const renderEventContent = (eventInfo: any) => {
    const { image } = eventInfo.event.extendedProps;
    return (
      <div style={{ display: "flex", alignItems: "center", padding: "2px" }}>
        {image ? (
          <img
            src={image}
            alt="patient"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "4px"
            }}
          />
        ) : (
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#5E63FF",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              marginRight: "4px"
            }}
          >
            {eventInfo.event.title.charAt(0)}
          </div>
        )}
        <span style={{ fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {eventInfo.event.title}
        </span>
      </div>
    );
  };

  const handleEventClick = (clickInfo: any) => {
    setSelectedEvent(clickInfo.event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          start: "today,prev,next",
          center: "title",
          end: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        ref={calendarRef}
        height="auto"
      />

      {selectedEvent && (
        <div
          className={`modal fade ${modalOpen ? "show d-block" : ""}`}
          tabIndex={-1}
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-dialog-centered" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <h5 className="modal-title text-white">
                  Appointment Details - #{selectedEvent.extendedProps.appointmentId}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <p className="d-flex align-items-center fw-medium text-black mb-3">
                  <i className="ti ti-user text-primary me-2 fs-18" />
                  <strong>Patient:</strong>&nbsp;{selectedEvent.title}
                </p>
                <p className="d-flex align-items-center fw-medium text-black mb-3">
                  <i className="ti ti-phone text-primary me-2 fs-18" />
                  <strong>Contact:</strong>&nbsp;{selectedEvent.extendedProps.phone}
                </p>
                <p className="d-flex align-items-center fw-medium text-black mb-3">
                  <i className="ti ti-calendar-check text-primary me-2 fs-18" />
                  <strong>Date:</strong>&nbsp;{dayjs(selectedEvent.start).format('DD MMM YYYY')}
                </p>
                <p className="d-flex align-items-center fw-medium text-black mb-3">
                  <i className="ti ti-clock text-primary me-2 fs-18" />
                  <strong>Time:</strong>&nbsp;{selectedEvent.extendedProps.time}
                </p>
                <p className="d-flex align-items-center fw-medium text-black mb-3">
                  <i className="ti ti-video text-primary me-2 fs-18" />
                  <strong>Type:</strong>&nbsp;{selectedEvent.extendedProps.type}
                </p>
                <p className="d-flex align-items-center fw-medium text-black mb-0">
                  <i className="ti ti-check text-primary me-2 fs-18" />
                  <strong>Status:</strong>&nbsp;
                  <span className={`badge ${selectedEvent.extendedProps.status === 'Checked Out' ? 'bg-success' :
                    selectedEvent.extendedProps.status === 'Checked In' ? 'bg-warning' :
                      'bg-primary'
                    } ms-2`}>
                    {selectedEvent.extendedProps.status}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;