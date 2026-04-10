import { Link } from "react-router";
import ChatCore from "../../chatcore/ChatCore";
// ⚠️ Adjust ChatCore import path for patient-messages folder

const PatientMessages = () => {
    return (
        <div className="page-wrapper">
            <div className="content" style={{ paddingBottom: 0 }}>
                <div className="d-flex align-items-center pb-3">
                    <h4 className="fs-18 fw-semibold mb-0">Messages</h4>
                </div>
                {/* ✅ Patient sees Admin + Doctors only */}
                <ChatCore forRole="patient" />
            </div>
            <div className="footer text-center bg-white p-2 border-top mt-2">
                <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
            </div>
        </div>
    );
};
export default PatientMessages;