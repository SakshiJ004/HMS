import { Link } from "react-router";
import {
  Amount,
  Department,
  Designation,
  Doctor,
  Status,
} from "../../../../../core/common/selectOption";
import { DatePicker, Select } from "antd";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { message } from "antd";
import {
  getPatientPrescriptions,
  deletePrescription,
  type PrescriptionDetail,
} from "../../../../../api/patientDashboardService";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "./modals/modals";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const PatientPrescriptions = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const columns = [
    {
      title: "Prescription ID",
      dataIndex: "prescriptionId",
      render: (_: any, record: PrescriptionDetail) => (
        <span>{record.prescriptionId || "N/A"}</span>
      ),
      sorter: (a: PrescriptionDetail, b: PrescriptionDetail) =>
        (a.prescriptionId || "").localeCompare(b.prescriptionId || ""),
    },
    {
      title: "Doctor Name",
      dataIndex: "doctor",
      render: (_: any, record: PrescriptionDetail) => {
        const src = record.doctor?.profileImage
          ? record.doctor.profileImage.startsWith("http")
            ? record.doctor.profileImage
            : `${import.meta.env.VITE_BACKEND_URL}${record.doctor.profileImage}`
          : "";
        return (
          <div className="d-flex align-items-center">
            <Link
              to={`${all_routes.patientprescriptiondetails}?id=${record._id}`}
              className="avatar avatar-md me-2"
            >
              {src ? (
                <img
                  src={src}
                  alt={record.doctor?.fullName}
                  className="rounded-circle"
                  style={{ width: 40, height: 40, objectFit: "cover" }}
                />
              ) : (
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: 40, height: 40, fontSize: 15 }}
                >
                  {record.doctor?.fullName?.charAt(0)?.toUpperCase() || "D"}
                </div>
              )}
            </Link>
            <Link
              to={`${all_routes.patientprescriptiondetails}?id=${record._id}`}
              className="text-dark fw-semibold"
            >
              {record.doctor?.fullName || "Doctor"}
              <span className="text-body fs-13 fw-normal d-block">
                {record.doctor?.designation || record.doctor?.department || "N/A"}
              </span>
            </Link>
          </div>
        );
      },
      sorter: (a: PrescriptionDetail, b: PrescriptionDetail) =>
        (a.doctor?.fullName || "").localeCompare(b.doctor?.fullName || ""),
    },
    {
      title: "Prescribed On",
      dataIndex: "prescribedOn",
      render: (_: any, record: PrescriptionDetail) => (
        <span>
          {dayjs(record.prescribedOn || record.createdAt).format("DD MMM YYYY")}
        </span>
      ),
      sorter: (a: PrescriptionDetail, b: PrescriptionDetail) =>
        dayjs(a.prescribedOn || a.createdAt).unix() -
        dayjs(b.prescribedOn || b.createdAt).unix(),
    },
    {
      title: "",
      render: (_: any, record: PrescriptionDetail) => (
        <div className="action-item">
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <Link
                to={`${all_routes.patientprescriptiondetails}?id=${record._id}`}
                className="dropdown-item d-flex align-items-center"
              >
                View
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center text-danger"
                data-bs-toggle="modal"
                data-bs-target="#delete_modal"
                onClick={() => setDeleteId(record._id)}
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  // const navigate = useNavigate();
  const [prescriptions, setPrescriptions] = useState<PrescriptionDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string>("");

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      setLoading(true);
      const res = await getPatientPrescriptions();
      if (res.success) setPrescriptions(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deletePrescription(deleteId);
      message.success("Prescription deleted successfully!");
      // Modal close
      const modalEl = document.getElementById("delete_modal");
      if (modalEl) {
        const bsModal = (window as any).bootstrap?.Modal?.getInstance(modalEl);
        if (bsModal) bsModal.hide();
        else new (window as any).bootstrap.Modal(modalEl).hide();
      }
      setTimeout(() => {
        document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
        document.body.classList.remove("modal-open");
        document.body.style.overflow = "";
      }, 300);
      fetchPrescriptions();
    } catch (e: any) {
      message.error(e.message || "Failed to delete");
    }
  };

  // handleDelete च्या खाली हे add करा:

  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("My Prescriptions", 14, 20);

      autoTable(doc, {
        head: [["Prescription ID", "Doctor", "Department", "Prescribed On", "Status"]],
        body: prescriptions.map((p) => [
          p.prescriptionId || "N/A",
          p.doctor?.fullName || "N/A",
          p.doctor?.department || "N/A",
          dayjs(p.prescribedOn || p.createdAt).format("DD MMM YYYY"),
          p.status || "Active",
        ]),
        startY: 30,
        styles: { fontSize: 9 },
        headStyles: { fillColor: [66, 66, 245] },
      });

      doc.save(`prescriptions_${dayjs().format("YYYY-MM-DD")}.pdf`);
    } catch (e) {
      console.error("PDF export error:", e);
      message.error("Failed to export PDF");
    }
  };

  const exportToExcel = () => {
    try {
      const data = prescriptions.map((p) => ({
        "Prescription ID": p.prescriptionId || "N/A",
        "Doctor Name": p.doctor?.fullName || "N/A",
        Department: p.doctor?.department || "N/A",
        Designation: p.doctor?.designation || "N/A",
        "Prescribed On": dayjs(p.prescribedOn || p.createdAt).format("DD MMM YYYY"),
        Status: p.status || "Active",
      }));

      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Prescriptions");
      XLSX.writeFile(wb, `prescriptions_${dayjs().format("YYYY-MM-DD")}.xlsx`);
    } catch (e) {
      console.error("Excel export error:", e);
      message.error("Failed to export Excel");
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
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0"> Prescription </h4>
            </div>
            <div className="text-end">
              {/* dropdown*/}
              <div className="dropdown me-1">
                <Link
                  to="#"
                  className="btn btn-md border fs-14 fw-normal bg-white rounded text-dark d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Export
                  <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li>
                    <button className="dropdown-item" onClick={exportToPDF}>
                      <i className="ti ti-file-type-pdf me-2 text-danger" />
                      Download as PDF
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={exportToExcel}>
                      <i className="ti ti-file-type-xls me-2 text-success" />
                      Download as Excel
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Page Header */}
          <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="table-search d-flex align-items-center mb-0">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={handleSearch} />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter text-gray-5 me-1" />
                  Filters
                </Link>
                <div
                  className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
                  id="filter-dropdown"
                >
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h4 className="mb-0 fw-bold">Filter</h4>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-danger text-decoration-underline"
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                  <form action="#">
                    <div className="filter-body pb-0">
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label mb-1">Doctor</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Doctor}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Designation</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Designation}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Department</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Department}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Date<span className="text-danger">*</span>
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
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Amount</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Amount}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Status</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Status}
                        />
                      </div>
                    </div>
                    <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                      <Link
                        to="#"
                        className="btn btn-light btn-md me-2 fw-medium"
                        id="close-filter"
                      >
                        Close
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary btn-md fw-medium"
                      >
                        Filter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown"
                >
                  <span className="me-1"> Sort By : </span> Recent
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-2">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Recently Added
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Ascending
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Desending
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Last Month
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Last 7 Days
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" />
            </div>
          ) : (
            <div className="table-responsive">
              <Datatable
                columns={columns}
                dataSource={prescriptions}
                Selection={false}
                searchText={searchText}
              />
            </div>
          )}
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
      <Modals onDelete={handleDelete} />
    </>
  );
};

export default PatientPrescriptions;
