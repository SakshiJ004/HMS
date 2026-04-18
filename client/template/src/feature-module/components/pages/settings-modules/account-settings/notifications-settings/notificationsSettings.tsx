// import { Link } from "react-router"
// import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"


// const NotificationsSettings = () => {
//   return (
//     <>
//   {/* ========================
// 			Start Page Content
// 		========================= */}
//   <div className="page-wrapper">
//     {/* Start Content */}
//     <div className="content" id="profilePage">
//       {/* Page Header */}
//       <div className="mb-3 border-bottom pb-3">
//         <h4 className="fw-bold mb-0">Settings</h4>
//       </div>
//       {/* End Page Header */}
//       <div className="card">
//         <div className="card-body p-0">
//           <div className="settings-wrapper d-flex">
//             {/* Start Settings Sidebar */}
//             <SettingsSidebar/>
//             {/* End Settings Sidebar */}
//             <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
//               <div className="card-header border-bottom px-0 mx-3">
//                 <h5 className="fw-bold">Notifications</h5>
//               </div>
//               {/* end card header */}
//               <div className="card-body px-0 mx-3">
//                 {/* Items */}
//                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3 rounded">
//                   <div className="d-flex align-items-center">
//                     <span className="avatar avatar-lg border bg-light me-2">
//                       <i className="ti ti-calendar-time text-dark fs-16" />
//                     </span>
//                     <div>
//                       <h5 className="fs-14 fw-semibold mb-1">
//                         New Appointment Booking
//                       </h5>
//                       <p className="fs-13">
//                         Alert when an appointment is booked
//                       </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center gap-4">
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> Email </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> SMS </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> In App </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Items */}
//                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3 rounded">
//                   <div className="d-flex align-items-center">
//                     <span className="avatar avatar-lg border bg-light me-2">
//                       <i className="ti ti-calendar-x text-dark fs-16" />
//                     </span>
//                     <div>
//                       <h5 className="fs-14 fw-semibold mb-1">
//                         Appointment Cancellation
//                       </h5>
//                       <p className="fs-13">Alert if a appointment is cancel</p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center gap-4">
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> Email </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> SMS </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> In App </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Items */}
//                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3">
//                   <div className="d-flex align-items-center">
//                     <span className="avatar avatar-lg border bg-light me-2">
//                       <i className="ti ti-calendar-time text-dark fs-16" />
//                     </span>
//                     <div>
//                       <h5 className="fs-14 fw-semibold mb-1">
//                         Lab Report Ready
//                       </h5>
//                       <p className="fs-13">
//                         Notify when test reports are available
//                       </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center gap-4">
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> Email </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> SMS </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> In App </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Items */}
//                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3">
//                   <div className="d-flex align-items-center">
//                     <span className="avatar avatar-lg border bg-light me-2">
//                       <i className="ti ti-activity-heartbeat text-dark fs-16" />
//                     </span>
//                     <div>
//                       <h5 className="fs-14 fw-semibold mb-1">
//                         Follow-up Reminders
//                       </h5>
//                       <p className="fs-13">Scheduled follow-ups from doctors</p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center gap-4">
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> Email </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> SMS </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> In App </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Items */}
//                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3">
//                   <div className="d-flex align-items-center">
//                     <span className="avatar avatar-lg border bg-light me-2">
//                       <i className="ti ti-file-dollar text-dark fs-16" />
//                     </span>
//                     <div>
//                       <h5 className="fs-14 fw-semibold mb-1">
//                         Billing/Invoice Notification
//                       </h5>
//                       <p className="fs-13">
//                         Notify when a new bill or invoice is generated
//                       </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center gap-4">
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> Email </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> SMS </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> In App </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Items */}
//                 <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-0 p-3">
//                   <div className="d-flex align-items-center">
//                     <span className="avatar avatar-lg border bg-light me-2">
//                       <i className="ti ti-alert-octagon text-dark fs-16" />
//                     </span>
//                     <div>
//                       <h5 className="fs-14 fw-semibold mb-1">System Alerts</h5>
//                       <p className="fs-13">
//                         Login attempts, data changes, or system updates.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center gap-4">
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> Email </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> SMS </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                     <div className="">
//                       <p className="fw-medium mb-1 text-dark"> In App </p>
//                       <label className="d-flex align-items-center form-switch ps-0">
//                         <input
//                           className="form-check-input m-0"
//                           type="checkbox"
//                           defaultChecked
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* end card body */}
//             </div>
//             {/* end card */}
//           </div>
//         </div>
//         {/* end card body */}
//       </div>
//       {/* end card */}
//     </div>
//     {/* End Content */}
//     {/* Footer Start */}
//     <div className="footer text-center bg-white p-2 border-top">
//       <p className="text-dark mb-0">
//         2025 ©
//         <Link to="#" className="link-primary">
//           Preclinic
//         </Link>
//         , All Rights Reserved
//       </p>
//     </div>
//     {/* Footer End */}
//   </div>
//   {/* ========================
// 			End Page Content
// 		========================= */}
// </>

//   )
// }

// export default NotificationsSettings


import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import { useState, useEffect } from "react";
import {
  getNotificationPreferences,
  updateNotificationPreferences,
  type NotificationPreferences
} from "../../../../../../api/notificationService";
import { message } from "antd";

const NotificationsSettings = () => {
  const [preferences, setPreferences] = useState<NotificationPreferences | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchPreferences();
  }, []);

  const fetchPreferences = async () => {
    try {
      setLoading(true);
      const response = await getNotificationPreferences();

      if (response.success) {
        setPreferences(response.data);
      } else {
        message.error('Failed to load preferences');
      }
    } catch (error) {
      console.error('Fetch preferences error:', error);
      message.error('Failed to load preferences');
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (type: keyof NotificationPreferences, channel: 'email' | 'inApp') => {
    if (!preferences) return;

    const updated = {
      ...preferences,
      [type]: {
        ...preferences[type],
        [channel]: !preferences[type][channel]
      }
    };

    setPreferences(updated);

    // Auto-save
    try {
      setSaving(true);
      const response = await updateNotificationPreferences(updated);

      if (response.success) {
        message.success('Preferences updated');
      } else {
        message.error('Failed to update');
        // Revert on failure
        fetchPreferences();
      }
    } catch (error) {
      console.error('Update error:', error);
      message.error('Failed to update');
      fetchPreferences();
    } finally {
      setSaving(false);
    }
  };

  const notificationTypes = [
    {
      key: 'newAppointment' as keyof NotificationPreferences,
      icon: 'ti-calendar-time',
      title: 'New Appointment Booking',
      description: 'Alert when an appointment is booked'
    },
    {
      key: 'appointmentCancellation' as keyof NotificationPreferences,
      icon: 'ti-calendar-x',
      title: 'Appointment Cancellation',
      description: 'Alert if an appointment is cancelled'
    },
    {
      key: 'labReportReady' as keyof NotificationPreferences,
      icon: 'ti-file-analytics',
      title: 'Lab Report Ready',
      description: 'Notify when test reports are available'
    },
    {
      key: 'followUpReminders' as keyof NotificationPreferences,
      icon: 'ti-activity-heartbeat',
      title: 'Follow-up Reminders',
      description: 'Scheduled follow-ups from doctors'
    },
    {
      key: 'billingNotification' as keyof NotificationPreferences,
      icon: 'ti-file-dollar',
      title: 'Billing/Invoice Notification',
      description: 'Notify when a new bill or invoice is generated'
    },
    {
      key: 'systemAlerts' as keyof NotificationPreferences,
      icon: 'ti-alert-octagon',
      title: 'System Alerts',
      description: 'Login attempts, data changes, or system updates'
    }
  ];

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" />
            <p className="mt-3 text-muted">Loading preferences...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="content" id="profilePage">
        {/* Page Header */}
        <div className="mb-3 border-bottom pb-3">
          <h4 className="fw-bold mb-0">Settings</h4>
        </div>

        <div className="card">
          <div className="card-body p-0">
            <div className="settings-wrapper d-flex">
              {/* Settings Sidebar */}
              <SettingsSidebar />

              {/* Main Content */}
              <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                <div className="card-header border-bottom px-0 mx-3 d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold mb-0">Notifications</h5>
                  {saving && (
                    <small className="text-muted">
                      <span className="spinner-border spinner-border-sm me-1" />
                      Saving...
                    </small>
                  )}
                </div>

                <div className="card-body px-0 mx-3">
                  {notificationTypes.map((type) => (
                    <div
                      key={type.key}
                      className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3 rounded"
                    >
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg border bg-light me-2">
                          <i className={`ti ${type.icon} text-dark fs-16`} />
                        </span>
                        <div>
                          <h5 className="fs-14 fw-semibold mb-1">{type.title}</h5>
                          <p className="fs-13 mb-0">{type.description}</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-4">
                        {/* Email Toggle */}
                        <div>
                          <p className="fw-medium mb-1 text-dark">Email</p>
                          <label className="d-flex align-items-center form-switch ps-0">
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              checked={preferences?.[type.key]?.email || false}
                              onChange={() => handleToggle(type.key, 'email')}
                              disabled={saving}
                            />
                          </label>
                        </div>
                        {/* In-App Toggle */}
                        <div>
                          <p className="fw-medium mb-1 text-dark">In App</p>
                          <label className="d-flex align-items-center form-switch ps-0">
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              checked={preferences?.[type.key]?.inApp || false}
                              onChange={() => handleToggle(type.key, 'inApp')}
                              disabled={saving}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="alert alert-info mt-4">
                    <i className="ti ti-info-circle me-2" />
                    <strong>Note:</strong> Preferences are saved automatically when you toggle switches.
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
          2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default NotificationsSettings;