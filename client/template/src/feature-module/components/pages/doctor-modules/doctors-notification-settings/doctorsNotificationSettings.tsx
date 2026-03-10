import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

interface NotifPref {
  email: boolean;
  sms: boolean;
  inApp: boolean;
}

interface NotificationPreferences {
  newAppointment: NotifPref;
  appointmentCancellation: NotifPref;
  labReportReady: NotifPref;
  followUpReminders: NotifPref;
  billingNotification: NotifPref;
  systemAlerts: NotifPref;
}

const defaultPrefs: NotificationPreferences = {
  newAppointment: { email: true, sms: true, inApp: true },
  appointmentCancellation: { email: true, sms: true, inApp: true },
  labReportReady: { email: true, sms: false, inApp: true },
  followUpReminders: { email: true, sms: true, inApp: true },
  billingNotification: { email: true, sms: false, inApp: true },
  systemAlerts: { email: true, sms: false, inApp: true },
};

const notifItems = [
  { key: "newAppointment" as keyof NotificationPreferences, icon: "ti-calendar-time", title: "New Appointment Booking", desc: "Alert when an appointment is booked" },
  { key: "appointmentCancellation" as keyof NotificationPreferences, icon: "ti-calendar-x", title: "Appointment Cancellation", desc: "Alert if an appointment is cancelled" },
  { key: "labReportReady" as keyof NotificationPreferences, icon: "ti-flask", title: "Lab Report Ready", desc: "Notify when test reports are available" },
  { key: "followUpReminders" as keyof NotificationPreferences, icon: "ti-activity-heartbeat", title: "Follow-up Reminders", desc: "Scheduled follow-ups from doctors" },
  { key: "billingNotification" as keyof NotificationPreferences, icon: "ti-file-dollar", title: "Billing/Invoice Notification", desc: "Notify when a new bill or invoice is generated" },
  { key: "systemAlerts" as keyof NotificationPreferences, icon: "ti-alert-octagon", title: "System Alerts", desc: "Login attempts, data changes, or system updates." },
];

const DoctorsNotificationSettings = () => {
  const [prefs, setPrefs] = useState<NotificationPreferences>(defaultPrefs);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => { fetchPrefs(); }, []);

  const fetchPrefs = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BACKEND_URL}/api/doctors/notification-preferences`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok && data.success && data.data) {
        setPrefs({ ...defaultPrefs, ...data.data });
      }
    } catch {
      // Use defaults if API fails
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (key: keyof NotificationPreferences, channel: keyof NotifPref) => {
    setPrefs((prev) => ({
      ...prev,
      [key]: { ...prev[key], [channel]: !prev[key][channel] },
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setSuccessMsg("");
    setErrorMsg("");
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BACKEND_URL}/api/doctors/notification-preferences`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(prefs),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg("✅ Notification preferences saved successfully!");
        setTimeout(() => setSuccessMsg(""), 4000);
      } else {
        setErrorMsg(data.message || "Failed to save preferences");
      }
    } catch {
      setErrorMsg("Unable to connect to server. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="mb-3 border-bottom pb-3">
            <h4 className="fw-bold mb-0">Settings</h4>
          </div>

          {successMsg && (
            <div className="alert alert-success d-flex align-items-center">
              <i className="ti ti-circle-check me-2 fs-16" />
              <span className="flex-grow-1">{successMsg}</span>
              <button type="button" className="btn-close ms-2" onClick={() => setSuccessMsg("")} />
            </div>
          )}
          {errorMsg && (
            <div className="alert alert-danger d-flex align-items-center">
              <i className="ti ti-alert-circle me-2 fs-16" />
              <span className="flex-grow-1">{errorMsg}</span>
              <button type="button" className="btn-close ms-2" onClick={() => setErrorMsg("")} />
            </div>
          )}

          <div className="card">
            <div className="card-body">
              <div className="row">
                {/* Sidebar */}
                <div className="col-lg-3">
                  <div className="text-start">
                    <Link to={all_routes.doctorsprofilesettings} className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start">
                      <i className="ti ti-user-cog me-2 text-dark" /> Profile Settings
                    </Link>
                    <Link to={all_routes.doctorspasswordsettings} className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start">
                      <i className="ti ti-lock-star me-2 text-dark" /> Change Password
                    </Link>
                    <Link to={all_routes.doctorsnotificationsettings} className="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1">
                      <i className="ti ti-bell me-2 text-primary" /> Notifications
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="col-lg-9">
                  <div className="border-1 border-start ps-4">
                    <h5 className="fw-bold pb-3 mb-4 border-1 border-bottom">Notifications</h5>

                    {loading ? (
                      <div className="text-center py-4">
                        <div className="spinner-border text-primary" />
                      </div>
                    ) : (
                      <>
                        {notifItems.map((item) => (
                          <div key={item.key} className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3 rounded">
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-lg border bg-light me-2">
                                <i className={`ti ${item.icon} text-dark fs-16`} />
                              </span>
                              <div>
                                <h5 className="fs-14 fw-semibold mb-1">{item.title}</h5>
                                <p className="fs-13 mb-0 text-muted">{item.desc}</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center gap-4">
                              {(["email", "sms", "inApp"] as (keyof NotifPref)[]).map((channel) => (
                                <div key={channel}>
                                  <p className="fw-medium mb-1 text-dark text-capitalize">
                                    {channel === "inApp" ? "In App" : channel.charAt(0).toUpperCase() + channel.slice(1)}
                                  </p>
                                  <label className="d-flex align-items-center form-switch ps-0">
                                    <input
                                      className="form-check-input m-0"
                                      type="checkbox"
                                      checked={prefs[item.key][channel]}
                                      onChange={() => handleToggle(item.key, channel)}
                                    />
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Save Button */}
                        <div className="d-flex justify-content-end mt-3">
                          <button
                            type="button"
                            className="btn btn-primary btn-md fs-13 fw-medium rounded"
                            onClick={handleSave}
                            disabled={saving}
                          >
                            {saving ? <><span className="spinner-border spinner-border-sm me-2" />Saving...</> : "Save Preferences"}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default DoctorsNotificationSettings;