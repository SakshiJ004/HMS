import { useState } from "react";
import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import {
  City,
  Country,
  State,
} from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { DatePicker } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { message } from "antd";
import { useNavigate } from "react-router";
import axios from "axios";
import { getDoctors, type Doctor } from "../../../../../api/appointmentService";
import { useEffect } from "react";

const CreatePatient = () => {
  const [phone, setPhone] = useState<string | undefined>()
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL || "";
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    primaryDoctor: "",
    dob: null as any,
    gender: "",
    bloodGroup: "",
    status: "Available",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  useEffect(() => { fetchDoctors(); }, []);

  const fetchDoctors = async () => {
    try {
      const res = await getDoctors();
      if (res.success) setDoctors(res.data);
    } catch (e) { console.error(e); }
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email ||
      !formData.phone || !formData.primaryDoctor || !formData.dob ||
      !formData.gender || !formData.bloodGroup || !formData.address1 ||
      !formData.state || !formData.city || !formData.pincode) {
      message.error("Please fill all required fields");
      return;
    }
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${API_URL}/api/appointments/patients`,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          primaryDoctor: formData.primaryDoctor,
          dob: formData.dob?.format("YYYY-MM-DD"),
          gender: formData.gender,
          bloodGroup: formData.bloodGroup,
          status: formData.status,
          address: {
            address1: formData.address1,
            address2: formData.address2,
            state: formData.state,
            city: formData.city,
            pincode: formData.pincode,
          },
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        message.success("Patient created successfully!");
        navigate(all_routes.patients);
      }
    } catch (e: any) {
      message.error(e.response?.data?.message || "Failed to create patient");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* row start */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* page header start */}
              <div className="mb-4">
                <h6 className="fw-bold mb-0 d-flex align-items-center">
                  <Link to={all_routes.patients} className="text-dark">
                    <i className="ti ti-chevron-left me-1" />
                    Patients
                  </Link>
                </h6>
              </div>
              {/* page header end */}
              {/* card start */}
              <div className="card">
                <div className="card-body pb-0">
                  <div className="form">
                    <h6 className="fw-bold mb-3">Patient Information</h6>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3 d-flex align-items-center">
                          <label className="form-label mb-0">
                            Profile Image
                          </label>
                          <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                            <i className="ti ti-user-plus fs-16" />
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                            />
                            <div className="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1">
                              <Link
                                to="#"
                                className="text-white d-flex align-items-center justify-content-center"
                              >
                                <i className="ti ti-photo fs-14" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            First Name
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Last Name<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Phone Number
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <PhoneInput
                            defaultCountry="US"
                            value={phone}
                            onChange={setPhone}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Email Address
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Primary Doctor
                            <span className="text-danger ms-1">*</span>
                          </label>
                          // Primary Doctor CommonSelect replace करा:
                          <select
                            className="form-control select"
                            value={formData.primaryDoctor}
                            onChange={(e) => setFormData({ ...formData, primaryDoctor: e.target.value })}
                          >
                            <option value="">Select Doctor</option>
                            {doctors.map((d) => (
                              <option key={d._id} value={d._id}>
                                {d.fullName} {d.department ? `(${d.department})` : ""}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            DOB<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-icon-end position-relative">
                            <DatePicker
                              className="form-control datetimepicker"
                              format={{
                                format: "DD-MM-YYYY",
                                type: "mask",
                              }}
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
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Gender<span className="text-danger ms-1">*</span>
                          </label>
                          <select className="form-control select" value={formData.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Blood Group
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <select className="form-control select" value={formData.bloodGroup}
                            onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}>
                            <option value="">Select Blood Group</option>
                            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                              <option key={bg} value={bg}>{bg}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Status<span className="text-danger ms-1">*</span>
                          </label>
                          <select className="form-control select" value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <h6 className="fw-bold mb-3 border-top pt-3">
                      Address Information
                    </h6>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Address 1<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control"
                            value={formData.address1}
                            onChange={(e) => setFormData({ ...formData, address1: e.target.value })} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Address 2<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control"
                            value={formData.address2}
                            onChange={(e) => setFormData({ ...formData, address2: e.target.value })} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label mb-1">
                            Country<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={Country}
                            className="select"
                            defaultValue={Country[0]}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label mb-1">
                            State<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={State}
                            className="select"
                            defaultValue={State[0]}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label mb-1">
                            City<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={City}
                            className="select"
                            defaultValue={City[0]}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label mb-1">
                            Pincode<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control"
                            value={formData.pincode}
                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card end */}
              <div className="d-flex align-items-center justify-content-end">
                <Link to="#" className="btn btn-light me-2">
                  Cancel
                </Link>
                <button type="button" className="btn btn-primary" onClick={handleSubmit} disabled={saving}>
                  {saving ? <><span className="spinner-border spinner-border-sm me-2" />Creating...</> : "Add New Patient"}
                </button>
              </div>
            </div>
          </div>
          {/* row end */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
        {/* Footer End */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default CreatePatient;
