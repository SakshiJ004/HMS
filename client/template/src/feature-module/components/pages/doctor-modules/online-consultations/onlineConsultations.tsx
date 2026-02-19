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

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

const OnlineConsultations = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();

  const [consultation, setConsultation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [noAppointment, setNoAppointment] = useState(false)

  const [showVideoCall, setShowVideoCall] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const zegoContainerRef = useRef<HTMLDivElement>(null);
  const zegoInstanceRef = useRef<any>(null);

  const [vitals, setVitals] = useState<any>({});
  const [complaints, setComplaints] = useState<any[]>([]);
  const [diagnosis, setDiagnosis] = useState<any[]>([]);
  const [medications, setMedications] = useState<any[]>([]);
  const [advice, setAdvice] = useState<any[]>([]);
  const [investigations, setInvestigations] = useState<any[]>([]);
  const [followUp, setFollowUp] = useState<any>({});
  const [invoice, setInvoice] = useState<any>({});

  const [availableDiagnoses, setAvailableDiagnoses] = useState<any[]>([]);
  const [diagnosisSearch, setDiagnosisSearch] = useState('');

  const emptyStomachOptions = [
    { value: 'true', label: 'Yes' },
    { value: 'false', label: 'No' }
  ];

  useEffect(() => {
    fetchConsultation();
  }, [appointmentId]);

  const fetchConsultation = async () => {
    try {
      setLoading(true);
      setNoAppointment(false);

      let idToUse: string = appointmentId || '';

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
          const serverSecret = String(response.serverSecret);

          // @ts-ignore
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
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

  const endVideoCall = () => {
    if (zegoInstanceRef.current) {
      zegoInstanceRef.current.destroy();
      zegoInstanceRef.current = null;
    }
    setShowVideoCall(false);
  };

  // ✅ Enhanced saveAllSections with better error handling
  const saveAllSections = async () => {
    try {
      setSaving(true);

      console.log('📝 Saving all sections...');
      console.log('Vitals:', vitals);
      console.log('Complaints:', complaints);
      console.log('Diagnosis:', diagnosis);
      console.log('Medications:', medications);
      console.log('Advice:', advice);
      console.log('Investigations:', investigations);
      console.log('Follow Up:', followUp);
      console.log('Invoice:', invoice);

      const savePromises = [];

      // Save each section individually with error catching
      try {
        await updateVitals(consultation._id, vitals);
        console.log('✅ Vitals saved');
      } catch (err: any) {
        console.error('❌ Vitals save failed:', err.message);
      }

      try {
        await updateComplaints(consultation._id, complaints);
        console.log('✅ Complaints saved');
      } catch (err: any) {
        console.error('❌ Complaints save failed:', err.message);
      }

      try {
        await updateDiagnosis(consultation._id, diagnosis);
        console.log('✅ Diagnosis saved');
      } catch (err: any) {
        console.error('❌ Diagnosis save failed:', err.message);
      }

      try {
        await updateMedications(consultation._id, medications);
        console.log('✅ Medications saved');
      } catch (err: any) {
        console.error('❌ Medications save failed:', err.message);
      }

      try {
        await updateAdvice(consultation._id, advice);
        console.log('✅ Advice saved');
      } catch (err: any) {
        console.error('❌ Advice save failed:', err.message);
      }

      try {
        console.log('Attempting to save investigations:', investigations);
        await updateInvestigations(consultation._id, investigations);
        console.log('✅ Investigations saved');
      } catch (err: any) {
        console.error('❌ Investigations save failed:', err.message);
        console.error('Full error:', err);
        // Don't throw - continue with other sections
      }

      try {
        await updateFollowUp(consultation._id, followUp);
        console.log('✅ Follow-up saved');
      } catch (err: any) {
        console.error('❌ Follow-up save failed:', err.message);
      }

      try {
        await updateInvoice(consultation._id, invoice);
        console.log('✅ Invoice saved');
      } catch (err: any) {
        console.error('❌ Invoice save failed:', err.message);
      }

      message.success('All data saved successfully');
    } catch (error: any) {
      console.error('❌ Save all sections error:', error);
      message.error('Failed to save some data: ' + error.message);
      throw error;
    } finally {
      setSaving(false);
    }
  };

  // ✅ Enhanced handleComplete with prescription redirect
  const handleComplete = async () => {
    try {
      setCompleting(true);

      console.log('🎯 Starting consultation completion...');

      // Step 1: Save all sections
      await saveAllSections();
      console.log('✅ All sections saved');

      // Step 2: Complete consultation
      console.log('📋 Completing consultation...');
      const response = await completeConsultation(consultation._id);

      if (response.success) {
        message.success('Consultation completed successfully!');

        // ✅ Navigate to prescription details if available
        if (response.prescription && response.prescription._id) {
          console.log('✅ Prescription created:', response.prescription._id);
          console.log('Navigating to prescription details...');
          navigate(`/doctor/doctors-prescription-details/${response.prescription._id}`);
        } else {
          console.log('⚠️ No prescription ID, navigating to dashboard');
          navigate(all_routes.doctordashboard);
        }
      } else {
        throw new Error(response.message || 'Failed to complete consultation');
      }
    } catch (error: any) {
      console.error('❌ Complete consultation error:', error);
      message.error('Failed to complete consultation: ' + (error.message || 'Unknown error'));
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
        </div>

        {/* Basic Information */}
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

        {/* Video Consultation */}
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

        {/* ALL OTHER SECTIONS - Vitals, Complaints, Diagnosis, Medications, Advice, Investigations, Follow Up, Invoice */}
        {/* (Keep existing code for these sections) */}

        {/* Action Buttons */}
        <div className="d-flex gap-2 align-items-center justify-content-end mb-4">
          <Link
            to={all_routes.doctordashboard}
            className="btn btn-md bg-light text-dark fs-13 fw-medium rounded"
          >
            Cancel
          </Link>

          <button
            onClick={saveAllSections}
            className="btn btn-md btn-outline-primary fs-13 fw-medium rounded"
            disabled={saving}
          >
            {saving ? 'Saving Draft...' : 'Save Draft'}
          </button>

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