// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import { empty_Stomach } from "../../../../../core/common/selectOption";
// import ComplaintForm from "../../../../../core/common/dynamic-list/complientForm";
// import DiagnosisForm from "../../../../../core/common/dynamic-list/diagnosisForm";
// import MedicalForm from "../../../../../core/common/dynamic-list/medicalForm";
// import AdviceForm from "../../../../../core/common/dynamic-list/AdviceForm";
// import InvestigationList from "../../../../../core/common/dynamic-list/InvestigationForm";
// import InvoiceList from "../../../../../core/common/dynamic-list/InvoiceList";

// const OnlineConsultations = () => {
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper consultation-custom">
//         {/* Start Content */}
//         <div className="content">
//           {/* Start Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0"> Online Consultations </h4>
//             </div>
//             <div className="text-end d-flex">
//               {/* dropdown*/}
//               <div className="dropdown me-1">
//                 <Link
//                   to="#"
//                   className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
//                   data-bs-toggle="dropdown"
//                 >
//                   Export
//                   <i className="ti ti-chevron-down ms-2" />
//                 </Link>
//                 <ul className="dropdown-menu p-2">
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as PDF
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as Excel
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/* Start Information */}
//           <div className="card rounded-0">
//             <div className="card-header">
//               <h5 className="m-0 fw-bold"> Basic Information </h5>
//             </div>
//             {/* end card header */}
//             <div className="card-body">
//               {/* start row */}
//               <div className="row align-items-center">
//                 <div className="col-lg-6">
//                   <div className="d-flex align-items-center gap-3">
//                     <div className="avatar avatar-xxxl">
//                       <ImageWithBasePath
//                         src="assets/img/users/user-04.jpg"
//                         alt="user-01"
//                         className="img-fluid img1 rounded"
//                       />
//                     </div>
//                     <div className="">
//                       <span className="badge badge-md text-info border border-info mb-1 fs-13 fw-medium px-2 ">
//                         #AP02254
//                       </span>
//                       <h5 className="text-dark mb-1 fw-bold"> James Carter </h5>
//                       <p className="text-dark m-0">
//                         <span className="text-body"> Reason : </span> Pain near
//                         left chest, Pelvic salinity
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="bg-light p-3 rounded d-flex align-items-center justify-content-between">
//                     {/* Items */}
//                     <div>
//                       <div className="mb-2">
//                         <h6 className="text-dark fs-14 fw-semibold mb-1">
//                           Age
//                         </h6>
//                         <p className="text-body fs-13 m-0"> 28 Years </p>
//                       </div>
//                       <div>
//                         <h6 className="text-dark fs-14 fw-semibold mb-1">
//                           Department
//                         </h6>
//                         <p className="text-body fs-13 m-0"> Cardiology </p>
//                       </div>
//                     </div>
//                     {/* Items */}
//                     <div>
//                       <div className="mb-2">
//                         <h6 className="text-dark fs-14 fw-semibold mb-1">
//                           Date
//                         </h6>
//                         <p className="text-body fs-13 m-0">
//                           25 Jan 2024, 07:00
//                         </p>
//                       </div>
//                       <div>
//                         <h6 className="text-dark fs-14 fw-semibold mb-1">
//                           Gender
//                         </h6>
//                         <p className="text-body fs-13 m-0"> Male</p>
//                       </div>
//                     </div>
//                     {/* Items */}
//                     <div>
//                       <div className="mb-2">
//                         <h6 className="text-dark fs-14 fw-semibold mb-1">
//                           Blood Group
//                         </h6>
//                         <p className="text-body fs-13 m-0"> O+ve</p>
//                       </div>
//                       <div>
//                         <h6 className="text-dark fs-14 fw-semibold mb-1">
//                           Consultation Type
//                         </h6>
//                         <p className="text-body fs-13 m-0">
//                           Online Consultation
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//               </div>
//               {/* end row */}
//             </div>
//             {/* end card body*/}
//           </div>
//           {/* end card */}
//           {/* End Information */}
//           {/* Start Vitals */}
//           <div className="card rounded-0">
//             <div className="card-header">
//               <h5 className="m-0 fw-bold"> Vitals </h5>
//             </div>
//             {/* end card header */}
//             <div className="card-body pb-0">
//               {/* start form */}
//               <form>
//                 {/* start row */}
//                 <div className="row">
//                   {/* Items */}
//                   <div className="col-md-4 mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Temperature
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-text bg-transparent text-dark fs-14">
//                         F
//                       </span>
//                     </div>
//                   </div>
//                   {/* end col */}
//                   {/* Items */}
//                   <div className="col-md-4 mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Pulse
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-text bg-transparent text-dark fs-14">
//                         mmHg
//                       </span>
//                     </div>
//                   </div>
//                   {/* end col */}
//                   {/* Items */}
//                   <div className="col-md-4 mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Respiratory Rate
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-text bg-transparent text-dark fs-14">
//                         rpm
//                       </span>
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-4 mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       SPO2
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-text bg-transparent text-dark fs-14">
//                         %
//                       </span>
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-4 mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Height
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-text bg-transparent text-dark fs-14">
//                         cm
//                       </span>
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-4 mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Weight
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-text bg-transparent text-dark fs-14">
//                         kg
//                       </span>
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-4 mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       BMI
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-text bg-transparent text-dark fs-14">
//                         %
//                       </span>
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-4 mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Waist
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-text bg-transparent text-dark fs-14">
//                         cm
//                       </span>
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-4 mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Weight
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-text bg-transparent text-dark fs-14">
//                         kg
//                       </span>
//                     </div>
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//               </form>
//               {/* end form */}
//             </div>
//           </div>
//           {/* End Vitals */}
//           {/* Start Complaint */}
//           <div className="card rounded-0">
//             <div className="card-header">
//               <h5 className="m-0 fw-bold"> Complaint </h5>
//             </div>
//             {/* end card header */}
//             <div className="card-body">
//               <ComplaintForm />
//             </div>
//             {/* end card-body */}
//           </div>
//           {/* end card-body */}
//           {/* End Vitals */}
//           {/* Start Diagnosis */}
//           <div className="card rounded-0">
//             <div className="card-header">
//               <h5 className="m-0 fw-bold"> Diagnosis </h5>
//             </div>
//             {/* end card header */}
//             <div className="card-body pb-0">
//               <div className="">
//                 <DiagnosisForm />
//               </div>
//             </div>
//             {/* end card-body */}
//           </div>
//           {/* end card-body */}
//           {/* End Complaint */}
//           {/* Start Medication */}
//           <div className="card rounded-0">
//             <div className="card-header">
//               <h5 className="m-0 fw-bold"> Medications </h5>
//             </div>
//             {/* end card header */}
//             <div className="card-body pb-0">
//               <MedicalForm />
//             </div>
//             {/* end card-body */}
//           </div>
//           {/* end card-body */}
//           {/* End Medications */}
//           {/* Start Advice */}
//           <div className="card rounded-0">
//             <div className="card-header">
//               <h5 className="m-0 fw-bold"> Advice </h5>
//             </div>
//             {/* end card header */}
//             <div className="card-body advices-list pb-0">
//               <AdviceForm />
//             </div>
//             {/* end card body */}
//           </div>
//           {/* end card */}
//           {/* End Advice */}
//           {/* Start Investigation */}
//           <div className="card rounded-0">
//             <div className="card-header">
//               <h5 className="m-0 fw-bold"> Investigation &amp; Procedure </h5>
//             </div>
//             {/* end card header */}
//             <div className="card-body invest-list pb-0">
//               <InvestigationList />
//             </div>
//             {/* end card body */}
//           </div>
//           {/* end card */}
//           {/* End Advice */}
//           {/* Start Follow Up */}
//           <div className="card rounded-0">
//             <div className="card-header">
//               <h5 className="m-0 fw-bold"> Follow Up </h5>
//             </div>
//             {/* end card header */}
//             <div className="card-body pb-0">
//               {/* start row */}
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Next Consultation
//                     </label>
//                     <div className="input-group">
//                       <input type="text" className="form-control rounded" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* end col */}
//                 <div className="col-lg-6">
//                   <div className="mb-3">
//                     <label className="form-label mb-1 text-dark fs-14 fw-medium">
//                       Whether to come on empty Stomach
//                     </label>
//                     <CommonSelect
//                       options={empty_Stomach}
//                       className="select"
//                       defaultValue={empty_Stomach[0]}
//                     />
//                   </div>
//                 </div>
//                 {/* end col */}
//               </div>
//               {/* end row */}
//             </div>
//             {/* end card body */}
//           </div>
//           {/* end card */}
//           {/* End Follow Up */}
//           {/* Start Invoice */}
//           <div className="card rounded-0">
//             <div className="card-header">
//               <h5 className="m-0 fw-bold"> Invoice </h5>
//             </div>
//             {/* end card header */}
//             <div className="card-body">
//               <InvoiceList />
//             </div>
//             {/* end card-body */}
//           </div>
//           {/* end card-body */}
//           {/* End Complaint */}
//           <div className="d-flex gap-2 align-items-center justify-content-end mb-4">
//             <Link
//               to=""
//               className="btn btn-md bg-light text-dark fs-13 fw-medium rounded"
//             >
//               Cancel
//             </Link>
//             <Link
//               to=""
//               className="btn btn-md btn-primary fs-13 fw-medium rounded"
//               data-bs-toggle="modal"
//               data-bs-target="#cancel-reason"
//             >
//               Complete Appointment
//             </Link>
//           </div>
//         </div>
//         {/* End Content */}
//       </div>
//       {/* ========================
// 			End Page Content
// 		========================= */}
//     </>
//   );
// };

// export default OnlineConsultations;



import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { message } from "antd";
import dayjs from "dayjs";
// import CommonSelect from "../../../../core/common/common-select/commonSelect";
import { all_routes } from "../../../../routes/all_routes";
import {
  getConsultationByAppointment,
  updateVitals,
  updateComplaints,
  updateDiagnosis,
  updateMedications,
  updateAdvice,
  updateInvestigations,
  updateFollowUp,
  updateInvoice,
  completeConsultation,
  getLatestOnlineAppointment,
  createVideoRoom
} from "../../../../../api/onlineConsultationService";
import {
  getDiagnosesByDepartment,
  searchDiagnoses
} from "../../../../../api/diagnosisService";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// Jitsi Meet API declaration
declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

const OnlineConsultations = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();

  // State Management
  const [consultation, setConsultation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [noAppointment, setNoAppointment] = useState(false)

  // Video Call State
  const [showVideoCall, setShowVideoCall] = useState(false);
  // const [videoRoomUrl, setVideoRoomUrl] = useState<string>('');
  // const [videoLoading, setVideoLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const zegoContainerRef = useRef<HTMLDivElement>(null);
  const zegoInstanceRef = useRef<any>(null);

  // Section States
  const [vitals, setVitals] = useState<any>({});
  const [complaints, setComplaints] = useState<any[]>([]);
  const [diagnosis, setDiagnosis] = useState<any[]>([]);
  const [medications, setMedications] = useState<any[]>([]);
  const [advice, setAdvice] = useState<any[]>([]);
  const [investigations, setInvestigations] = useState<any[]>([]);
  const [followUp, setFollowUp] = useState<any>({});
  const [invoice, setInvoice] = useState<any>({});

  // Diagnosis Search
  const [availableDiagnoses, setAvailableDiagnoses] = useState<any[]>([]);
  const [diagnosisSearch, setDiagnosisSearch] = useState('');

  // Dropdown Options
  const emptyStomachOptions = [
    { value: 'true', label: 'Yes' },
    { value: 'false', label: 'No' }
  ];

  // Load Consultation Data
  useEffect(() => {
    fetchConsultation();
  }, [appointmentId]);


  const fetchConsultation = async () => {
    try {
      setLoading(true);
      setNoAppointment(false);

      let idToUse: string = appointmentId || '';

      // appointmentId URL मध्ये नसेल तर latest appointment fetch कर
      if (!idToUse) {
        const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
        const doctorId: string = userInfo._id || userInfo.id || '';

        if (!doctorId) {
          setNoAppointment(true);
          return;
        }

        const latestResponse = await getLatestOnlineAppointment(doctorId);
        if (!latestResponse.success || !latestResponse.data) {
          setNoAppointment(true);
          return;
        }
        // latest consultation च्या appointmentId ने fetch कर
        idToUse = latestResponse.data.appointmentId || latestResponse.data._id;
      }

      const response = await getConsultationByAppointment(idToUse);
      if (response.success) {
        const data = response.data;
        setConsultation(data);
        setVitals(data.vitals || {});
        setComplaints(data.complaints || []);
        setDiagnosis(data.diagnosis || []);
        setMedications(data.medications || []);
        setAdvice(data.advice || []);
        setInvestigations(data.investigations || []);
        setFollowUp(data.followUp || {});
        setInvoice(data.invoice || { items: [], consultationFee: 0, totalAmount: 0 });

        if (data.doctor?.department) {
          loadDiagnoses(data.doctor.department);
        }
      }
    } catch (error: any) {
      message.error('Failed to load consultation');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadDiagnoses = async (department: string) => {
    try {
      const response = await getDiagnosesByDepartment(department);
      if (response.success) {
        setAvailableDiagnoses(response.data);
      }
    } catch (error) {
      console.error('Failed to load diagnoses');
    }
  };

  const handleDiagnosisSearch = async (query: string) => {
    setDiagnosisSearch(query);
    if (query.length > 2) {
      try {
        const response = await searchDiagnoses(query, consultation?.doctor?.department);
        if (response.success) {
          setAvailableDiagnoses(response.data);
        }
      } catch (error) {
        console.error('Search failed');
      }
    } else if (consultation?.doctor?.department) {
      loadDiagnoses(consultation.doctor.department);
    }
  };

  // ========================================
  // VIDEO CALL - JITSI MEET
  // ========================================
  const startVideoCall = async () => {
    try {
      setVideoLoading(true);

      const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
      const userId: string = String(userInfo._id || userInfo.id || 'doctor_001');
      const userName: string = String(consultation?.doctor?.fullName || 'Doctor');

      const response = await createVideoRoom(
        consultation._id,
        'doctor',
        userId,
        userName
      );

      if (!response.success) {
        message.error('Failed to start video call');
        return;
      }

      setShowVideoCall(true);

      setTimeout(() => {
        if (!zegoContainerRef.current) return;

        try {
          const appId = Number(response.appId);
          const serverSecret = String(response.serverSecret); // ✅ serverSecret वापर

          // @ts-ignore
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,   // ✅ AppSign नाही, ServerSecret वापर
            String(response.roomID),
            String(userId),
            String(userName)
          );

          // @ts-ignore
          const zp = ZegoUIKitPrebuilt.create(kitToken);
          zegoInstanceRef.current = zp;

          const joinConfig: any = {
            container: zegoContainerRef.current,
            roomID: String(response.roomID),
            userID: String(userId),
            userName: String(userName),
            scenario: {
              // @ts-ignore
              mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showPreJoinView: false,
            turnOnCameraWhenJoining: true,
            turnOnMicrophoneWhenJoining: true,
            showRoomDetailsButton: false,
            showInviteLinkButton: false,
            onLeaveRoom: () => {
              setShowVideoCall(false);
              zegoInstanceRef.current = null;
            },
          };

          // @ts-ignore
          zp.joinRoom(joinConfig);

        } catch (err) {
          console.error('ZegoCloud join error:', err);
          message.error('Failed to join video room');
        }
      }, 500);

    } catch (error) {
      message.error('Failed to start video call');
    } finally {
      setVideoLoading(false);
    }
  };

  // End call function
  const endVideoCall = () => {
    if (zegoInstanceRef.current) {
      zegoInstanceRef.current.destroy();
      zegoInstanceRef.current = null;
    }
    setShowVideoCall(false);
  };


  const saveAllSections = async () => {
    try {
      setSaving(true);

      // Save all sections in parallel
      await Promise.all([
        updateVitals(consultation._id, vitals),
        updateComplaints(consultation._id, complaints),
        updateDiagnosis(consultation._id, diagnosis),
        updateMedications(consultation._id, medications),
        updateAdvice(consultation._id, advice),
        updateInvestigations(consultation._id, investigations),
        updateFollowUp(consultation._id, followUp),
        updateInvoice(consultation._id, invoice)
      ]);

      message.success('All data saved successfully');
    } catch (error) {
      message.error('Failed to save some data');
      throw error; // Re-throw to prevent completion
    } finally {
      setSaving(false);
    }
  };

  // ========================================
  // COMPLETE CONSULTATION
  // ========================================
  const handleComplete = async () => {
    try {
      setCompleting(true);

      // Step 1: Save all sections first
      await saveAllSections();

      // Step 2: Then complete consultation
      const response = await completeConsultation(consultation._id);

      if (response.success) {
        message.success('Consultation completed successfully!');
        navigate(all_routes.doctordashboard);
      }
    } catch (error: any) {
      message.error('Failed to complete consultation');
    } finally {
      setCompleting(false);
    }
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (noAppointment || !consultation) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="alert alert-warning text-center p-5 mt-4">
            <i className="ti ti-calendar-off d-block mb-3" style={{ fontSize: '48px' }}></i>
            <h5>No Online Appointment Available</h5>
            <p className="text-muted">
              There are no pending online consultations at the moment.
            </p>
            <Link to={all_routes.doctordashboard} className="btn btn-primary mt-2">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ✅ हे फक्त consultation असेल तेव्हाच execute होईल:
  const patient = consultation.patient;
  const doctor = consultation.doctor;

  return (
    <div className="page-wrapper consultation-custom">
      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
          <div className="flex-grow-1">
            <h4 className="fw-bold mb-0">Online Consultation</h4>
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

        {/* ============================================
            BASIC INFORMATION
        ============================================ */}
        <div className="card rounded-0">
          <div className="card-header">
            <h5 className="m-0 fw-bold">Basic Information</h5>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar avatar-xxxl">
                    {patient?.profileImage ? (
                      <img
                        src={patient.profileImage}
                        alt={patient.fullName}
                        className="img-fluid img1 rounded"
                      />
                    ) : (
                      <div
                        className="bg-primary text-white rounded d-flex align-items-center justify-content-center"
                        style={{ width: '100px', height: '100px', fontSize: '40px' }}
                      >
                        {patient?.fullName?.charAt(0) || 'P'}
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="badge badge-md text-info border border-info mb-1 fs-13 fw-medium px-2">
                      #{consultation.appointmentId || 'N/A'}
                    </span>
                    <h5 className="text-dark mb-1 fw-bold">{patient?.fullName || 'N/A'}</h5>
                    <p className="text-dark m-0">
                      <span className="text-body">Reason: </span>
                      {complaints[0]?.complaint || 'General Consultation'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="bg-light p-3 rounded d-flex align-items-center justify-content-between">
                  <div>
                    <div className="mb-2">
                      <h6 className="text-dark fs-14 fw-semibold mb-1">Age</h6>
                      <p className="text-body fs-13 m-0">{patient?.age || 'N/A'} Years</p>
                    </div>
                    <div>
                      <h6 className="text-dark fs-14 fw-semibold mb-1">Department</h6>
                      <p className="text-body fs-13 m-0">{doctor?.department || 'N/A'}</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <h6 className="text-dark fs-14 fw-semibold mb-1">Date</h6>
                      <p className="text-body fs-13 m-0">
                        {dayjs(consultation.createdAt).format('DD MMM YYYY, HH:mm')}
                      </p>
                    </div>
                    <div>
                      <h6 className="text-dark fs-14 fw-semibold mb-1">Gender</h6>
                      <p className="text-body fs-13 m-0">{patient?.gender || 'N/A'}</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <h6 className="text-dark fs-14 fw-semibold mb-1">Blood Group</h6>
                      <p className="text-body fs-13 m-0">{patient?.bloodGroup || 'N/A'}</p>
                    </div>
                    <div>
                      <h6 className="text-dark fs-14 fw-semibold mb-1">Consultation Type</h6>
                      <p className="text-body fs-13 m-0">Online Consultation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO CALL SECTION */}
        {/* VIDEO CALL SECTION */}
        <div className="card rounded-0">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="m-0 fw-bold">Video Consultation</h5>
            <div className="d-flex gap-2">
              {!showVideoCall ? (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={startVideoCall}
                  disabled={videoLoading}
                >
                  {videoLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-1"></span>
                      Starting...
                    </>
                  ) : (
                    <><i className="ti ti-video me-1"></i> Start Video Call</>
                  )}
                </button>
              ) : (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={endVideoCall}
                >
                  <i className="ti ti-video-off me-1"></i> End Call
                </button>
              )}
            </div>
          </div>
          {showVideoCall && (
            <div className="card-body p-0">
              <div
                ref={zegoContainerRef}
                style={{ width: '100%', height: '550px' }}
              />
            </div>
          )}
        </div>

        {/* ============================================
            VITALS SECTION
        ============================================ */}
        <div className="card rounded-0">
          <div className="card-header d-flex justify-content-between">
            <h5 className="m-0 fw-bold">Vitals</h5>
          </div>
          <div className="card-body pb-0">
            <form>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">Temperature</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={vitals.temperature?.value || ''}
                      onChange={(e) =>
                        setVitals({
                          ...vitals,
                          temperature: { value: e.target.value, unit: 'F' }
                        })
                      }
                      placeholder="98.6"
                    />
                    <span className="input-group-text bg-transparent text-dark fs-14">F</span>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">Pulse</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={vitals.pulse?.value || ''}
                      onChange={(e) =>
                        setVitals({
                          ...vitals,
                          pulse: { value: e.target.value, unit: 'mmHg' }
                        })
                      }
                      placeholder="120/80"
                    />
                    <span className="input-group-text bg-transparent text-dark fs-14">mmHg</span>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Respiratory Rate
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={vitals.respiratoryRate?.value || ''}
                      onChange={(e) =>
                        setVitals({
                          ...vitals,
                          respiratoryRate: { value: e.target.value, unit: 'rpm' }
                        })
                      }
                      placeholder="16"
                    />
                    <span className="input-group-text bg-transparent text-dark fs-14">rpm</span>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">SPO2</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={vitals.spo2?.value || ''}
                      onChange={(e) =>
                        setVitals({
                          ...vitals,
                          spo2: { value: e.target.value, unit: '%' }
                        })
                      }
                      placeholder="98"
                    />
                    <span className="input-group-text bg-transparent text-dark fs-14">%</span>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">Height</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={vitals.height?.value || ''}
                      onChange={(e) =>
                        setVitals({
                          ...vitals,
                          height: { value: e.target.value, unit: 'cm' }
                        })
                      }
                      placeholder="170"
                    />
                    <span className="input-group-text bg-transparent text-dark fs-14">cm</span>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">Weight</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={vitals.weight?.value || ''}
                      onChange={(e) =>
                        setVitals({
                          ...vitals,
                          weight: { value: e.target.value, unit: 'kg' }
                        })
                      }
                      placeholder="70"
                    />
                    <span className="input-group-text bg-transparent text-dark fs-14">kg</span>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">BMI</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={vitals.bmi?.value || ''}
                      onChange={(e) =>
                        setVitals({
                          ...vitals,
                          bmi: { value: e.target.value, unit: '%' }
                        })
                      }
                      placeholder="24.2"
                    />
                    <span className="input-group-text bg-transparent text-dark fs-14">%</span>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">Waist</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={vitals.waist?.value || ''}
                      onChange={(e) =>
                        setVitals({
                          ...vitals,
                          waist: { value: e.target.value, unit: 'cm' }
                        })
                      }
                      placeholder="85"
                    />
                    <span className="input-group-text bg-transparent text-dark fs-14">cm</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card rounded-0">
          <div className="card-header d-flex justify-content-between">
            <h5 className="m-0 fw-bold">Complaints</h5>
            <div>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => setComplaints([...complaints, { complaint: '', duration: '', severity: 'Mild' }])}
              >
                <i className="ti ti-plus me-1"></i> Add
              </button>
            </div>
          </div>
          <div className="card-body">
            {complaints.map((item, index) => (
              <div key={index} className="row mb-3 align-items-end">
                <div className="col-md-5">
                  <label className="form-label">Complaint</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.complaint}
                    onChange={(e) => {
                      const updated = [...complaints];
                      updated[index].complaint = e.target.value;
                      setComplaints(updated);
                    }}
                    placeholder="Enter complaint"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.duration}
                    onChange={(e) => {
                      const updated = [...complaints];
                      updated[index].duration = e.target.value;
                      setComplaints(updated);
                    }}
                    placeholder="e.g., 2 days"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Severity</label>
                  <select
                    className="form-select"
                    value={item.severity}
                    onChange={(e) => {
                      const updated = [...complaints];
                      updated[index].severity = e.target.value;
                      setComplaints(updated);
                    }}
                  >
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => setComplaints(complaints.filter((_, i) => i !== index))}
                  >
                    <i className="ti ti-trash"></i>
                  </button>
                </div>
              </div>
            ))}
            {complaints.length === 0 && <p className="text-muted text-center">No complaints added</p>}
          </div>
        </div>

        {/* ============================================
            DIAGNOSIS SECTION
        ============================================ */}
        <div className="card rounded-0">
          <div className="card-header d-flex justify-content-between">
            <h5 className="m-0 fw-bold">Diagnosis</h5>
          </div>
          <div className="card-body pb-0">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search diagnosis..."
                value={diagnosisSearch}
                onChange={(e) => handleDiagnosisSearch(e.target.value)}
              />
            </div>

            {diagnosisSearch && availableDiagnoses.length > 0 && (
              <div className="mb-3 border rounded p-2" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {availableDiagnoses.map((diag) => (
                  <div
                    key={diag._id}
                    className="p-2 cursor-pointer"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setDiagnosis([
                        ...diagnosis,
                        { code: diag.code, description: diag.description, type: 'Primary', notes: '' }
                      ]);
                      setDiagnosisSearch('');
                    }}
                  >
                    <strong>{diag.code}</strong> - {diag.description}
                  </div>
                ))}
              </div>
            )}

            {diagnosis.map((item, index) => (
              <div key={index} className="row mb-3 border-bottom pb-3">
                <div className="col-md-10">
                  <div className="mb-2">
                    <strong>{item.code}</strong> - {item.description}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label">Type</label>
                      <select
                        className="form-select form-select-sm"
                        value={item.type}
                        onChange={(e) => {
                          const updated = [...diagnosis];
                          updated[index].type = e.target.value;
                          setDiagnosis(updated);
                        }}
                      >
                        <option value="Primary">Primary</option>
                        <option value="Secondary">Secondary</option>
                      </select>
                    </div>
                    <div className="col-md-8">
                      <label className="form-label">Notes</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={item.notes}
                        onChange={(e) => {
                          const updated = [...diagnosis];
                          updated[index].notes = e.target.value;
                          setDiagnosis(updated);
                        }}
                        placeholder="Additional notes"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 text-end">
                  <button
                    className="btn btn-sm btn-danger mt-4"
                    onClick={() => setDiagnosis(diagnosis.filter((_, i) => i !== index))}
                  >
                    <i className="ti ti-trash"></i>
                  </button>
                </div>
              </div>
            ))}
            {diagnosis.length === 0 && (
              <p className="text-muted text-center mb-3">No diagnosis added. Search above to add.</p>
            )}
          </div>
        </div>

        {/* ============================================
            MEDICATIONS SECTION
        ============================================ */}
        <div className="card rounded-0">
          <div className="card-header d-flex justify-content-between">
            <h5 className="m-0 fw-bold">Medications</h5>
            <div>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() =>
                  setMedications([
                    ...medications,
                    { medicineName: '', dosage: '', frequency: '', duration: '', instructions: '', emptyStomach: false }
                  ])
                }
              >
                <i className="ti ti-plus me-1"></i> Add
              </button>
            </div>
          </div>
          <div className="card-body pb-0">
            {medications.map((item, index) => (
              <div key={index} className="row mb-3 border-bottom pb-3">
                <div className="col-md-3">
                  <label className="form-label">Medicine Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.medicineName}
                    onChange={(e) => {
                      const updated = [...medications];
                      updated[index].medicineName = e.target.value;
                      setMedications(updated);
                    }}
                    placeholder="Type medicine name"
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Dosage</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.dosage}
                    onChange={(e) => {
                      const updated = [...medications];
                      updated[index].dosage = e.target.value;
                      setMedications(updated);
                    }}
                    placeholder="500mg"
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Frequency</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.frequency}
                    onChange={(e) => {
                      const updated = [...medications];
                      updated[index].frequency = e.target.value;
                      setMedications(updated);
                    }}
                    placeholder="2x daily"
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.duration}
                    onChange={(e) => {
                      const updated = [...medications];
                      updated[index].duration = e.target.value;
                      setMedications(updated);
                    }}
                    placeholder="7 days"
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Instructions</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.instructions}
                    onChange={(e) => {
                      const updated = [...medications];
                      updated[index].instructions = e.target.value;
                      setMedications(updated);
                    }}
                    placeholder="After meals"
                  />
                </div>
                <div className="col-md-1">
                  <label className="form-label">&nbsp;</label>
                  <button
                    className="btn btn-sm btn-danger d-block"
                    onClick={() => setMedications(medications.filter((_, i) => i !== index))}
                  >
                    <i className="ti ti-trash"></i>
                  </button>
                </div>
              </div>
            ))}
            {medications.length === 0 && <p className="text-muted text-center mb-3">No medications added</p>}
          </div>
        </div>

        {/* ============================================
    ADVICE SECTION
============================================ */}
        <div className="card rounded-0">
          <div className="card-header d-flex justify-content-between">
            <h5 className="m-0 fw-bold">Advice</h5>
            <div>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => setAdvice([...advice, { advice: '' }])}
              >
                <i className="ti ti-plus me-1"></i> Add
              </button>
            </div>
          </div>
          <div className="card-body">
            {advice.map((item: any, index: number) => (
              <div key={index} className="row mb-3 align-items-center">
                <div className="col-md-11">
                  <label className="form-label">Advice</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    value={item.advice}
                    onChange={(e) => {
                      const updated = [...advice];
                      updated[index].advice = e.target.value;
                      setAdvice(updated);
                    }}
                    placeholder="Enter advice for the patient"
                  />
                </div>
                <div className="col-md-1">
                  <label className="form-label">&nbsp;</label>
                  <button
                    className="btn btn-sm btn-danger d-block"
                    onClick={() => setAdvice(advice.filter((_: any, i: number) => i !== index))}
                  >
                    <i className="ti ti-trash"></i>
                  </button>
                </div>
              </div>
            ))}
            {advice.length === 0 && (
              <p className="text-muted text-center mb-3">No advice added yet</p>
            )}
          </div>
        </div>
        {/* ============================================
    INVESTIGATIONS SECTION
============================================ */}
        <div className="card rounded-0">
          <div className="card-header d-flex justify-content-between">
            <h5 className="m-0 fw-bold">Investigation & Procedure</h5>
            <div>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => setInvestigations([...investigations, { name: '', type: 'Lab Test', instructions: '' }])}
              >
                <i className="ti ti-plus me-1"></i> Add
              </button>
            </div>
          </div>
          <div className="card-body pb-0">
            {investigations.map((item: any, index: number) => (
              <div key={index} className="row mb-3 border-bottom pb-3">
                <div className="col-md-4">
                  <label className="form-label">Investigation Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.name}
                    onChange={(e) => {
                      const updated = [...investigations];
                      updated[index].name = e.target.value;
                      setInvestigations(updated);
                    }}
                    placeholder="e.g., Blood Test, X-Ray"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Type</label>
                  <select
                    className="form-select"
                    value={item.type}
                    onChange={(e) => {
                      const updated = [...investigations];
                      updated[index].type = e.target.value;
                      setInvestigations(updated);
                    }}
                  >
                    <option value="Lab Test">Lab Test</option>
                    <option value="Imaging">Imaging</option>
                    <option value="Procedure">Procedure</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Instructions</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.instructions}
                    onChange={(e) => {
                      const updated = [...investigations];
                      updated[index].instructions = e.target.value;
                      setInvestigations(updated);
                    }}
                    placeholder="Special instructions"
                  />
                </div>
                <div className="col-md-1">
                  <label className="form-label">&nbsp;</label>
                  <button
                    className="btn btn-sm btn-danger d-block"
                    onClick={() => setInvestigations(investigations.filter((_: any, i: number) => i !== index))}
                  >
                    <i className="ti ti-trash"></i>
                  </button>
                </div>
              </div>
            ))}
            {investigations.length === 0 && (
              <p className="text-muted text-center mb-3">No investigations added yet</p>
            )}
          </div>
        </div>
        {/* ============================================
    FOLLOW UP SECTION
============================================ */}
        <div className="card rounded-0">
          <div className="card-header d-flex justify-content-between">
            <h5 className="m-0 fw-bold">Follow Up</h5>
          </div>
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Next Consultation Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={followUp.nextConsultation ? dayjs(followUp.nextConsultation).format('YYYY-MM-DD') : ''}
                    onChange={(e) => setFollowUp({ ...followUp, nextConsultation: e.target.value })}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Come on Empty Stomach?
                  </label>
                  <select
                    className="form-select"
                    value={followUp.emptyStomach ? 'true' : 'false'}
                    onChange={(e) => setFollowUp({ ...followUp, emptyStomach: e.target.value === 'true' })}
                  >
                    {emptyStomachOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Notes
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={followUp.notes || ''}
                    onChange={(e) => setFollowUp({ ...followUp, notes: e.target.value })}
                    placeholder="Additional follow-up instructions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================
    INVOICE SECTION
============================================ */}
        <div className="card rounded-0">
          <div className="card-header d-flex justify-content-between">
            <h5 className="m-0 fw-bold">Invoice</h5>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Consultation Fee</label>
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    value={invoice.consultationFee || 0}
                    onChange={(e) => {
                      const fee = parseFloat(e.target.value) || 0;
                      const itemsTotal = invoice.items?.reduce((sum: number, item: any) => sum + (parseFloat(item.amount) || 0), 0) || 0;
                      setInvoice({
                        ...invoice,
                        consultationFee: fee,
                        totalAmount: fee + itemsTotal
                      });
                    }}
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Payment Status</label>
                <select
                  className="form-select"
                  value={invoice.paymentStatus || 'Pending'}
                  onChange={(e) => setInvoice({ ...invoice, paymentStatus: e.target.value })}
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Partially Paid">Partially Paid</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">Additional Charges</h6>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() =>
                    setInvoice({
                      ...invoice,
                      items: [...(invoice.items || []), { description: '', amount: 0 }]
                    })
                  }
                >
                  <i className="ti ti-plus me-1"></i> Add Item
                </button>
              </div>

              {invoice.items?.map((item: any, index: number) => (
                <div key={index} className="row mb-2">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={item.description}
                      onChange={(e) => {
                        const updated = [...invoice.items];
                        updated[index].description = e.target.value;
                        setInvoice({ ...invoice, items: updated });
                      }}
                      placeholder="Description"
                    />
                  </div>
                  <div className="col-md-5">
                    <div className="input-group input-group-sm">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        className="form-control"
                        value={item.amount}
                        onChange={(e) => {
                          const updated = [...invoice.items];
                          updated[index].amount = parseFloat(e.target.value) || 0;
                          const itemsTotal = updated.reduce((sum: number, i: any) => sum + (parseFloat(i.amount) || 0), 0);
                          setInvoice({
                            ...invoice,
                            items: updated,
                            totalAmount: (invoice.consultationFee || 0) + itemsTotal
                          });
                        }}
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="col-md-1">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        const updated = invoice.items.filter((_: any, i: number) => i !== index);
                        const itemsTotal = updated.reduce((sum: number, i: any) => sum + (parseFloat(i.amount) || 0), 0);
                        setInvoice({
                          ...invoice,
                          items: updated,
                          totalAmount: (invoice.consultationFee || 0) + itemsTotal
                        });
                      }}
                    >
                      <i className="ti ti-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-top pt-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Total Amount</h5>
                <h4 className="mb-0 text-primary">${invoice.totalAmount?.toFixed(2) || '0.00'}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* ADVICE, INVESTIGATIONS, FOLLOW UP, INVOICE - Similar pattern */}
        {/* See downloaded files for complete code */}

        {/* ============================================
            ACTION BUTTONS
        ============================================ */}
        <div className="d-flex gap-2 align-items-center justify-content-end mb-4">
          <Link
            to={all_routes.doctordashboard}
            className="btn btn-md bg-light text-dark fs-13 fw-medium rounded"
          >
            Cancel
          </Link>

          {/* ✅ Optional: Manual Save Draft button */}
          <button
            onClick={saveAllSections}
            className="btn btn-md btn-outline-primary fs-13 fw-medium rounded"
            disabled={saving}
          >
            {saving ? 'Saving Draft...' : 'Save Draft'}
          </button>

          {/* ✅ Complete button - saves everything + completes */}
          <button
            onClick={handleComplete}
            className="btn btn-md btn-primary fs-13 fw-medium rounded"
            disabled={completing || saving}
          >
            {completing ? 'Completing...' : 'Complete Appointment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineConsultations;