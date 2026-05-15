import { Link } from "react-router";
import { useState, useEffect } from "react";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { getDoctorPrescriptions } from "../../../../../api/prescriptionService";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

const DoctorsPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');
  const [filterDate, setFilterDate] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);

  useEffect(() => { fetchPrescriptions(); }, []);
  useEffect(() => { fetchPrescriptions(); }, [sortBy]);

  const fetchPrescriptions = async () => {
    try {
      setLoading(true);
      const res = await getDoctorPrescriptions({
        sortBy,
        status: filterStatus[0] || '',
        startDate: filterDate ? filterDate.format('YYYY-MM-DD') : ''
      });
      if (res.success) setPrescriptions(res.data);
    } catch (error) {
      console.error('Failed to fetch prescriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Department: appointment -> specialization -> doctor -> fallback
  const getDepartment = (p: any) => {
    return p.appointment?.specialization
      || p.appointment?.department
      || p.department
      || p.doctor?.specialization
      || p.doctor?.department
      || 'General';
  };

  // ✅ Status: appointment completed → show "Completed", else original status
  const getStatus = (p: any) => {
    const apptStatus = p.appointment?.status;
    if (apptStatus === 'Completed' || apptStatus === 'completed') return 'Completed';
    return p.status || 'Active';
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success-subtle text-success border border-success';
      case 'Active': return 'bg-primary-subtle text-primary border border-primary';
      case 'Expired': return 'bg-secondary-subtle text-secondary border border-secondary';
      default: return 'bg-light text-dark';
    }
  };

  const applyFilters = () => {
    let filtered = [...prescriptions];
    if (searchText) {
      const search = searchText.toLowerCase();
      filtered = filtered.filter(p =>
        p.patient?.fullName?.toLowerCase().includes(search) ||
        p.prescriptionId?.toLowerCase().includes(search) ||
        p.patient?.phone?.includes(search)
      );
    }
    if (filterDate) {
      const selectedDate = dayjs(filterDate).format('DD-MM-YYYY');
      filtered = filtered.filter(p => dayjs(p.prescribedOn).format('DD-MM-YYYY') === selectedDate);
    }
    if (filterStatus.length > 0) {
      filtered = filtered.filter(p => filterStatus.includes(getStatus(p)));
    }
    return filtered;
  };

  const filteredData = applyFilters();

  const handleApplyFilter = () => {
    fetchPrescriptions();
    const dropdown = document.querySelector('.filter-dropdown');
    if (dropdown) dropdown.classList.remove('show');
  };

  const handleClearFilters = () => { setFilterDate(null); setFilterStatus([]); };

  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Prescription List', 14, 20);
      doc.setFontSize(11);
      doc.text(`Generated on: ${dayjs().format('DD-MM-YYYY HH:mm')}`, 14, 30);
      autoTable(doc, {
        head: [['Prescription ID', 'Patient', 'Prescribed On', 'Department', 'Status']],
        body: filteredData.map(p => [p.prescriptionId, p.patient?.fullName || 'N/A', dayjs(p.prescribedOn).format('DD MMM YYYY'), getDepartment(p), getStatus(p)]),
        startY: 35,
        theme: 'grid',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 9 }
      });
      doc.save(`prescriptions-${dayjs().format('YYYY-MM-DD')}.pdf`);
    } catch (error) { alert('Failed to export PDF'); }
  };

  const exportToExcel = () => {
    try {
      const ws = XLSX.utils.json_to_sheet(filteredData.map(p => ({
        "Prescription ID": p.prescriptionId,
        "Patient": p.patient?.fullName || 'N/A',
        "Phone": p.patient?.phone || 'N/A',
        "Prescribed On": dayjs(p.prescribedOn).format('DD MMM YYYY'),
        "Department": getDepartment(p),
        "Status": getStatus(p)
      })));
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Prescriptions");
      XLSX.writeFile(wb, `prescriptions-${dayjs().format('YYYY-MM-DD')}.xlsx`);
    } catch { alert('Failed to export Excel'); }
  };

  const StatusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Expired', value: 'Expired' },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1"><h4 className="fw-bold mb-0">Prescriptions</h4></div>
            <div className="text-end d-flex">
              <div className="dropdown me-1">
                <Link to="#" className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  Export <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li><Link className="dropdown-item" to="#" onClick={(e) => { e.preventDefault(); exportToPDF(); }}>Download as PDF</Link></li>
                  <li><Link className="dropdown-item" to="#" onClick={(e) => { e.preventDefault(); exportToExcel(); }}>Download as Excel</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="table-search d-flex align-items-center mb-0">
                <div className="search-input">
                  <SearchInput value={searchText} onChange={setSearchText} />
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link to="#" className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                  <i className="ti ti-filter text-gray-5 me-1" /> Filters
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0">
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header p-3">
                    <h5 className="mb-0 fw-bold">Filter</h5>
                    <Link to="#" className="link-danger text-decoration-underline" onClick={(e) => { e.preventDefault(); handleClearFilters(); }}>Clear All</Link>
                  </div>
                  <div className="p-3">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">Date</label>
                      <DatePicker className="form-control datetimepicker" format={{ format: "DD-MM-YYYY", type: "mask" }} placeholder="DD-MM-YYYY" value={filterDate} onChange={setFilterDate} />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <label className="form-label mb-0">Status</label>
                        <Link to="#" className="link-primary" onClick={(e) => { e.preventDefault(); setFilterStatus([]); }}>Reset</Link>
                      </div>
                      <Select mode="multiple" allowClear style={{ width: "100%" }} placeholder="Select status" value={filterStatus} onChange={setFilterStatus} options={StatusOptions} />
                    </div>
                    <div className="d-flex align-items-center justify-content-end gap-2 border-top pt-3 mt-3">
                      <button type="button" className="btn btn-light btn-md fw-medium" onClick={() => { const el = document.querySelector('.filter-dropdown'); if (el) el.classList.remove('show'); }}>Close</button>
                      <button type="button" className="btn btn-primary btn-md fw-medium" onClick={handleApplyFilter}>Apply Filter</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <Link to="#" className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14" data-bs-toggle="dropdown">
                  <span className="me-1">Sort By : </span>{sortBy === 'recent' ? 'Recent' : 'Oldest'}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li><Link to="#" className="dropdown-item rounded-1" onClick={(e) => { e.preventDefault(); setSortBy('recent'); }}>Recent</Link></li>
                  <li><Link to="#" className="dropdown-item rounded-1" onClick={(e) => { e.preventDefault(); setSortBy('oldest'); }}>Oldest</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table border">
              <thead className="thead-light">
                <tr>
                  <th>Prescription ID</th>
                  <th>Patient</th>
                  <th>Prescribed On</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={6} className="text-center py-4"><div className="spinner-border text-primary" role="status"></div></td></tr>
                ) : filteredData.length === 0 ? (
                  <tr><td colSpan={6} className="text-center py-4"><i className="ti ti-file-x fs-1 text-muted d-block mb-2"></i><p className="text-muted mb-0">No prescriptions found</p></td></tr>
                ) : (
                  filteredData.map((p) => (
                    <tr key={p._id}>
                      <td>
                        <Link to={`/doctor/doctors-prescription-details/${p._id}`} className="text-primary fw-medium">
                          #{p.prescriptionId}
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2">
                            {p.patient?.profileImage ? (
                              <img src={p.patient.profileImage} alt={p.patient?.fullName} className="rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                            ) : (
                              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '16px' }}>
                                {p.patient?.fullName?.charAt(0)?.toUpperCase() || 'P'}
                              </div>
                            )}
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-0 fw-medium">{p.patient?.fullName}</h6>
                            <span className="text-body fs-13 fw-normal">{p.patient?.phone || p.patient?.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>{dayjs(p.prescribedOn).format('DD MMM YYYY')}</td>
                      {/* ✅ Real department */}
                      <td>{getDepartment(p)}</td>
                      {/* ✅ Real status */}
                      <td><span className={`badge fw-medium ${getStatusBadgeClass(getStatus(p))}`}>{getStatus(p)}</span></td>
                      <td>
                        <div className="action-item">
                          <Link to="#" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical" /></Link>
                          <ul className="dropdown-menu p-2">
                            <li><Link to={`/doctor/doctors-prescription-details/${p._id}`} className="dropdown-item d-flex align-items-center"><i className="ti ti-eye me-2" /> View</Link></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default DoctorsPrescriptions;