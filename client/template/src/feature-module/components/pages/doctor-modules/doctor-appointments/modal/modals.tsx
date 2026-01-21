// import dayjs from "dayjs";

// interface ModalProps {
//   selectedAppointment: any;
// }

// const Modal = ({ selectedAppointment }: ModalProps) => {
//   return (
//     <>
//       {/* Start View Details */}
//       <div className="offcanvas offcanvas-offset offcanvas-end" tabIndex={-1} id="view_details">
//         <div className="offcanvas-header d-block pb-0 px-0">
//           <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
//             <h5 className="offcanvas-title fs-18 fw-bold">
//               Appointment Details
//               {selectedAppointment && (
//                 <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2">
//                   #{selectedAppointment.appointmentId}
//                 </span>
//               )}
//             </h5>
//             <button
//               type="button"
//               className="btn-close opacity-100"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             />
//           </div>
//         </div>
//         <div className="offcanvas-body pt-0 px-0">
//           {selectedAppointment && (
//             <>
//               <h6 className="bg-light py-2 px-3 text-dark fw-bold">
//                 When &amp; Where
//               </h6>
//               <div className="px-3 my-4">
//                 <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//                   Appointment On
//                   <span className="text-body fw-normal">
//                     {dayjs(selectedAppointment.appointmentDate).format('dddd, DD MMM YYYY')}
//                   </span>
//                 </p>
//                 <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//                   Time
//                   <span className="text-body fw-normal">{selectedAppointment.appointmentTime}</span>
//                 </p>
//                 <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//                   Appointment Type
//                   <span className="text-body fw-normal">{selectedAppointment.appointmentType}</span>
//                 </p>
//                 <div className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//                   Patient Details
//                   <div className="text-body fw-normal d-flex align-items-center">
//                     {selectedAppointment.patient.profileImage ? (
//                       <img
//                         src={selectedAppointment.patient.profileImage}
//                         alt=""
//                         className="rounded-circle me-1 avatar avatar-sm"
//                       />
//                     ) : (
//                       <span className="avatar avatar-sm rounded-circle bg-primary text-white me-1">
//                         {selectedAppointment.patient.fullName.charAt(0)}
//                       </span>
//                     )}
//                     {selectedAppointment.patient.fullName}
//                   </div>
//                 </div>
//                 <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
//                   Status
//                   <span className={`badge ${selectedAppointment.status === 'Checked Out' ? 'bg-success' :
//                       selectedAppointment.status === 'Checked In' ? 'bg-warning' :
//                         'bg-primary'
//                     }`}>
//                     {selectedAppointment.status}
//                   </span>
//                 </p>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       {/* End Add New Appointment*/}
//     </>
//   );
// };

// export default Modal;



import dayjs from "dayjs";

interface ModalProps {
  selectedAppointment: any;
}

const Modal = ({ selectedAppointment }: ModalProps) => {
  return (
    <>
      {/* View Details Modal */}
      <div className="offcanvas offcanvas-offset offcanvas-end" tabIndex={-1} id="view_details">
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">
              Appointment Details
              {selectedAppointment && (
                <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2">
                  #{selectedAppointment.appointmentId}
                </span>
              )}
            </h5>
            <button
              type="button"
              className="btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
        </div>
        <div className="offcanvas-body pt-0 px-0">
          {selectedAppointment ? (
            <>
              <h6 className="bg-light py-2 px-3 text-dark fw-bold">
                When &amp; Where
              </h6>
              <div className="px-3 my-4">
                <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
                  Appointment On
                  <span className="text-body fw-normal">
                    {dayjs(selectedAppointment.appointmentDate).format('dddd, DD MMM YYYY')}
                  </span>
                </p>
                <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
                  Time
                  <span className="text-body fw-normal">{selectedAppointment.appointmentTime}</span>
                </p>
                <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
                  Appointment Type
                  <span className="text-body fw-normal">{selectedAppointment.appointmentType}</span>
                </p>
                <div className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
                  Patient Details
                  <div className="text-body fw-normal d-flex align-items-center">
                    {selectedAppointment.patient.profileImage ? (
                      <img
                        src={selectedAppointment.patient.profileImage}
                        alt=""
                        className="rounded-circle me-1"
                        style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                      />
                    ) : (
                      <span className="avatar avatar-sm rounded-circle bg-primary text-white me-1 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                        {selectedAppointment.patient.fullName.charAt(0)}
                      </span>
                    )}
                    {selectedAppointment.patient.fullName}
                  </div>
                </div>
                <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
                  Status
                  <span className={`badge ${selectedAppointment.status === 'Checked Out' ? 'bg-success' :
                      selectedAppointment.status === 'Checked In' ? 'bg-warning' :
                        selectedAppointment.status === 'Confirmed' ? 'bg-info' :
                          selectedAppointment.status === 'Scheduled' ? 'bg-primary' :
                            'bg-danger'
                    }`}>
                    {selectedAppointment.status}
                  </span>
                </p>
              </div>
            </>
          ) : (
            <div className="px-3 my-4 text-center text-muted">
              No appointment selected
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;