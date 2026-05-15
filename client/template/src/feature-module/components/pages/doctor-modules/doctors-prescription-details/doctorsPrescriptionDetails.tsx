import { Link, useParams } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect, useRef } from "react";
import { getPrescriptionById } from "../../../../../api/prescriptionService";
import dayjs from "dayjs";

const DoctorsPrescriptionDetails = () => {
  const { id } = useParams();
  const [prescription, setPrescription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) fetchPrescription();
  }, [id]);

  const fetchPrescription = async () => {
    try {
      const res = await getPrescriptionById(id!);
      console.log('Prescription data:', res); // Debug
      if (res.success) setPrescription(res.data);
    } catch (error) {
      console.error('Failed to fetch prescription:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    const content = printRef.current?.innerHTML;
    if (!content) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Prescription - ${prescription?.prescriptionId}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
          @page { size: A4; margin: 20mm; }
          body { font-family: Arial, sans-serif; padding: 20px; color: #000; }
          .border { border: 1px solid #dee2e6 !important; }
          .border-bottom { border-bottom: 1px solid #dee2e6 !important; }
          .border-top { border-top: 1px solid #dee2e6 !important; }
          .bg-light { background-color: #f8f9fa !important; }
          .text-primary { color: #4f46e5 !important; }
          .text-muted { color: #6c757d !important; }
          .badge { padding: 4px 8px; border-radius: 4px; font-size: 12px; }
          .bg-info-subtle { background-color: #cfe2ff; }
          .text-info-emphasis { color: #084298; }
          table { width: 100%; border-collapse: collapse; margin: 10px 0; }
          table th, table td { padding: 8px; border: 1px solid #dee2e6; text-align: left; }
          table thead { background-color: #f8f9fa; }
          h5, h6 { margin-bottom: 10px; }
          p { margin-bottom: 5px; }
          @media print {
            body { padding: 0; }
            .no-print { display: none !important; }
          }
        </style>
      </head>
      <body>${content}</body>
      </html>
    `);

    printWindow.document.close();
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    };
  };

  const handleDownload = async () => {
    const content = printRef.current?.innerHTML;
    if (!content) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Prescription-${prescription?.prescriptionId}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>body { padding: 20px; font-family: Arial; }</style>
      </head>
      <body>${content}</body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Prescription-${prescription?.prescriptionId}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) return (
    <div className="page-wrapper">
      <div className="content d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary"></div>
      </div>
    </div>
  );

  if (!prescription) return (
    <div className="page-wrapper">
      <div className="content">
        <div className="alert alert-warning text-center">Prescription not found</div>
      </div>
    </div>
  );

  const { patient, doctor } = prescription;

  // ✅ Calculate age from DOB if age not available
  const getAge = () => {
    if (patient?.age) return patient.age;
    if (patient?.dob) {
      return dayjs().diff(dayjs(patient.dob), 'year');
    }
    return 'N/A';
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-lg-10 mx-auto">

            {/* Header */}
            <div className="d-flex align-items-sm-center flex-sm-row flex-column mb-4">
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-0 d-flex align-items-center">
                  <Link to={all_routes.doctorsprescriptions} className="me-1">
                    <i className="ti ti-chevron-left" /> Prescriptions
                  </Link>
                </h6>
              </div>
            </div>

            <div className="card">
              <div className="card-body">

                {/* Printable Content */}
                <div ref={printRef}>

                  {/* Logo + ID */}
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                    <h5 className="fw-bold text-primary mb-0">Preclinic HMS</h5>
                    <span className="badge bg-info-subtle text-info-emphasis fs-13 fw-medium border border-primary py-1 px-2">
                      #{prescription.prescriptionId}
                    </span>
                  </div>

                  {/* Doctor Info */}
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3 flex-wrap gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar avatar-xxl rounded bg-light border p-2 d-flex align-items-center justify-content-center"
                        style={{ width: '70px', height: '70px', fontSize: '28px' }}>
                        {doctor?.profileImage ? (
                          <img src={doctor.profileImage} className="rounded img-fluid" alt={doctor.fullName} />
                        ) : (
                          <span className="text-primary fw-bold">{doctor?.fullName?.charAt(0)}</span>
                        )}
                      </div>
                      <div>
                        <h6 className="text-dark fw-semibold mb-1">Dr. {doctor?.fullName}</h6>
                        <p className="mb-1">{doctor?.designation || 'Consultant'}</p>
                        <p className="mb-0">{prescription.department || doctor?.department}</p>
                      </div>
                    </div>
                    <div className="text-lg-end">
                      <p className="text-dark mb-1">Department: <span className="text-body">{prescription.department || doctor?.department || 'N/A'}</span></p>
                      <p className="text-dark mb-1">Prescribed on: <span className="text-body">{dayjs(prescription.prescribedOn).format('DD MMM YYYY')}</span></p>
                      <p className="text-dark mb-0">Consultation: <span className="text-body">Online Consultation</span></p>
                    </div>
                  </div>

                  {/* Patient Details */}
                  <div className="mb-3">
                    <h6 className="mb-2 fs-14 fw-medium">Patient Details</h6>
                    <div className="px-3 py-2 bg-light rounded d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <h6 className="m-0 fw-semibold fs-16">{patient?.fullName}</h6>
                      <div className="d-flex align-items-center gap-3 flex-wrap">
                        <p className="mb-0 text-dark">{getAge()}Y / {patient?.gender || 'N/A'}</p>
                        <p className="mb-0 text-dark"><span className="text-body">Blood</span>: {patient?.bloodGroup || 'N/A'}</p>
                        <p className="mb-0 text-dark">
                          Patient ID <span className="text-body">
                            {patient?._id ? patient._id.toString().slice(-6).toUpperCase() : 'N/A'}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Diagnosis */}
                  {prescription.diagnosis && prescription.diagnosis.length > 0 && (
                    <div className="mb-3">
                      <h6 className="mb-2 fs-14 fw-medium">Diagnosis</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {prescription.diagnosis.map((d: any, i: number) => (
                          <span key={i} className="badge bg-light text-dark border me-1 mb-1 fw-normal">
                            {d.code ? `${d.code} - ` : ''}{d.description}
                            {d.notes && <span className="text-muted ms-1">({d.notes})</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Medications Table */}
                  <div className="mb-4">
                    <h6 className="mb-3 fs-16 fw-semibold text-center">
                      {prescription.department || doctor?.department || 'Medical'} Prescription
                    </h6>
                    <div className="table-responsive border bg-white">
                      <table className="table table-nowrap mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>SNO</th>
                            <th>Medicine Name</th>
                            <th>Dosage</th>
                            <th>Frequency</th>
                            <th>Duration</th>
                            <th>Instructions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prescription.medications && prescription.medications.length > 0 ? (
                            prescription.medications.map((med: any, index: number) => (
                              <tr key={index}>
                                <td>{String(index + 1).padStart(2, '0')}</td>
                                <td>{med.medicineName}</td>
                                <td>{med.dosage}</td>
                                <td>{med.frequency}</td>
                                <td>{med.duration}</td>
                                <td>{med.instructions || (med.emptyStomach ? 'Empty stomach' : 'After meals')}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={6} className="text-center text-muted py-3">No medications prescribed</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Advice */}
                  {prescription.advice && prescription.advice.length > 0 && (
                    <div className="pb-3 mb-3 border-bottom">
                      <h6 className="mb-2 fs-16 fw-semibold">Advice</h6>
                      {prescription.advice.map((a: any, i: number) => (
                        <p key={i} className="mb-1">• {a.advice}</p>
                      ))}
                    </div>
                  )}

                  {/* Follow Up + Signature */}
                  <div className="pb-3 mb-3 border-bottom d-flex align-items-start justify-content-between flex-wrap gap-3">
                    <div>
                      <h6 className="mb-2 fs-16 fw-semibold">Follow Up</h6>
                      {prescription.followUp?.nextConsultation ? (
                        <>
                          <p className="mb-1">
                            <strong>Next Visit:</strong> {dayjs(prescription.followUp.nextConsultation).format('DD MMM YYYY')}
                          </p>
                          {prescription.followUp.emptyStomach && (
                            <p className="mb-1">• Come on empty stomach</p>
                          )}
                          {prescription.followUp.notes && (
                            <p className="mb-1">• {prescription.followUp.notes}</p>
                          )}
                        </>
                      ) : (
                        <p className="text-muted mb-0">No follow-up scheduled</p>
                      )}
                    </div>

                    {/* Doctor Signature */}
                    <div className="text-center">
                      {doctor?.signature ? (
                        <img
                          src={doctor.signature}
                          alt="Doctor Signature"
                          style={{ maxWidth: '150px', maxHeight: '60px', objectFit: 'contain' }}
                          className="mb-2 d-block"
                        />
                      ) : (
                        <div className="border-bottom mb-2" style={{ width: '150px', height: '40px' }}></div>
                      )}
                      <h6 className="fs-14 fw-semibold mb-0">Dr. {doctor?.fullName}</h6>
                      <p className="fs-13 fw-normal mb-0">{doctor?.designation || 'Consultant'}</p>
                    </div>
                  </div>

                </div>
                {/* End Printable Content */}

                {/* Print + Download Buttons */}
                <div className="text-center d-flex align-items-center justify-content-center gap-2 mt-3">
                  <button onClick={handlePrint} className="btn btn-md btn-dark d-flex align-items-center">
                    <i className="ti ti-printer me-1" /> Print
                  </button>
                  <button onClick={handleDownload} className="btn btn-md btn-primary d-flex align-items-center">
                    <i className="ti ti-download me-1" /> Download
                  </button>
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
  );
};

export default DoctorsPrescriptionDetails;