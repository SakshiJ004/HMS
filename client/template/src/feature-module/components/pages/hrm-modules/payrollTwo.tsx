// import ImageWithBasePath from "../../../../core/imageWithBasePath";
// import { Link } from "react-router";
// import { all_routes } from "../../../routes/all_routes";

// const PayrollTwo = () => {
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* start row */}
//           <div className="row">
//             <div className="col-lg-10 mx-auto">
//               {/* Start Page Header */}
//               <div className="mb-3">
//                 <h6 className="fs-14 fw-bold mb-3 me-2">
//                   <Link to={all_routes.payroll}>
//                     <i className="ti ti-chevron-left me-1" />
//                     Payroll
//                   </Link>
//                 </h6>
//                 <div className="card rounded-5">
//                   <div className="card-header px-0 mx-3">
//                     <h4 className="fw-bold text-center mb-3">
//                       Payslip for the Month of March 2025
//                     </h4>
//                     <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
//                       <h6 className="fs-14 fw-semibold mb-0">
//                         Salary Month: March,2025
//                       </h6>
//                       <div className="d-flex align-items-center">
//                         <h6 className="fs-14 fw-semibold mb-0 me-2">Status:</h6>
//                         <span className="badge bg-success fw-medium">
//                           Sucess
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-body">
//                     <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
//                       <div>
//                         <ImageWithBasePath
//                           src="assets/img/logo.svg"
//                           alt="img"
//                           className="img-fluid mb-2"
//                         />
//                         <p className="mb-0">3864 Quiet Valley Lane,</p>
//                         <p className="mb-0">Sherman Oaks, CA, 91403</p>
//                         <p className="mb-0">GST No:2914035</p>
//                       </div>
//                       <div className="text-end">
//                         <h6 className="fs-14 fw-semibold mb-1">
//                           Andrew Fletcher
//                         </h6>
//                         <p className="mb-0">
//                           Employee ID :
//                           <span className="text-dark fw-medium">ST-0001</span>
//                         </p>
//                         <p className="mb-0">
//                           Joining Date :
//                           <span className="text-dark fw-medium">
//                             7 May 2015
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                     {/* start row */}
//                     <div className="row row-gap-2 mb-3">
//                       <div className="col-md-6">
//                         <h5 className="mb-3 fw-bold">Earnings</h5>
//                         <div className="mb-3">
//                           <label className="form-label">Basic Salary</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label">
//                             House Rent Allowance (H.R.A)
//                           </label>
//                           <input type="text" className="form-control" />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label">Conveyance</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label">Other Allowance</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                         <div className="mb-0">
//                           <label className="form-label">Total Earnings</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                       </div>
//                       {/* end col */}
//                       <div className="col-md-6">
//                         <h5 className="mb-3 fw-bold">Deductions</h5>
//                         <div className="mb-3">
//                           <label className="form-label">
//                             Tax Deducted at Sources (T.D.S)
//                           </label>
//                           <input type="text" className="form-control" />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label">Provident Fund</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label">ESI</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                         <div className="mb-3">
//                           <label className="form-label">Loan</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                         <div className="mb-0">
//                           <label className="form-label">Total Deductions</label>
//                           <input type="text" className="form-control" />
//                         </div>
//                       </div>
//                       {/* end col */}
//                     </div>
//                     {/* end row */}
//                     <h6 className="fs-14 fw-semibold mb-2">
//                       Net Salary: $9698 (Nine Thousand Six Hundred and Ninety
//                       Eight Only)
//                     </h6>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Vivamus sed dictum ligula, cursus blandit risus. Maecenas
//                       eget metus non tellus dignissim aliquam ut a ex. Maecenas
//                       sed vehicula dui, ac suscipit lacus.
//                     </p>
//                   </div>
//                   {/* end card body */}
//                   <div className="card-footer px-0 mx-3">
//                     <div className="d-flex align-items-center justify-content-center">
//                       <Link to="#" className="btn btn-primary me-2">
//                         Send Payslip
//                       </Link>
//                       <Link to="#" className="btn btn-light">
//                         <i className="ti ti-printer me-1" />
//                         Print
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 {/* end card */}
//               </div>
//               {/* End Page Header */}
//             </div>
//             {/* end col */}
//           </div>
//           {/* end row */}
//         </div>
//         {/* End Content */}
//         {/* Footer Start */}
//         <div className="footer text-center bg-white p-2 border-top">
//           <p className="text-dark mb-0">
//             2025 ©
//             <Link to="#" className="link-primary">
//               Preclinic
//             </Link>
//             , All Rights Reserved
//           </p>
//         </div>
//         {/* Footer End */}
//       </div>
//       {/* ========================
// 			End Page Content
// 		========================= */}
//     </>
//   );
// };

// export default PayrollTwo;


import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { all_routes } from "../../../routes/all_routes";
import { getPayrollById } from "../../../../api/payrollService";

const numberToWords = (num: number): string => {
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
    "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (num === 0) return "Zero";
  if (num < 20) return ones[num];
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? " " + ones[num % 10] : "");
  if (num < 1000) return ones[Math.floor(num / 100)] + " Hundred" + (num % 100 ? " " + numberToWords(num % 100) : "");
  if (num < 100000) return numberToWords(Math.floor(num / 1000)) + " Thousand" + (num % 1000 ? " " + numberToWords(num % 1000) : "");
  return String(num);
};

const PayrollTwo = () => {
  const [searchParams] = useSearchParams();
  const payrollId = searchParams.get("id");

  const [payroll, setPayroll] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (payrollId) {
      fetchPayroll();
    } else {
      setLoading(false);
    }
  }, [payrollId]);

  const fetchPayroll = async () => {
    try {
      setLoading(true);
      const response = await getPayrollById(payrollId!);
      if (response.success) {
        setPayroll(response.data);
      }
    } catch (error) {
      console.error("Error fetching payroll:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!payroll) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <h5 className="text-muted">No payroll record found.</h5>
            <Link to={all_routes.payroll} className="btn btn-primary mt-3">
              <i className="ti ti-chevron-left me-1" />Back to Payroll
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const netSalaryWords = numberToWords(Math.floor(payroll.netSalary));

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="mb-3">
                <h6 className="fs-14 fw-bold mb-3 me-2">
                  <Link to={all_routes.payroll}>
                    <i className="ti ti-chevron-left me-1" />
                    Payroll
                  </Link>
                </h6>

                <div className="card rounded-5">
                  <div className="card-header px-0 mx-3">
                    <h4 className="fw-bold text-center mb-3">
                      Payslip for the Month of {payroll.salaryMonth} {payroll.salaryYear}
                    </h4>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <h6 className="fs-14 fw-semibold mb-0">
                        Salary Month: {payroll.salaryMonth}, {payroll.salaryYear}
                      </h6>
                      <div className="d-flex align-items-center">
                        <h6 className="fs-14 fw-semibold mb-0 me-2">Status:</h6>
                        <span className={`badge fw-medium ${payroll.status === "Paid"
                          ? "bg-success"
                          : payroll.status === "Processing"
                            ? "bg-warning"
                            : "bg-danger"
                          }`}>
                          {payroll.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    {/* Header Info */}
                    <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                      <div>
                        <ImageWithBasePath src="assets/img/logo.svg" alt="img" className="img-fluid mb-2" />
                        <p className="mb-0">3864 Quiet Valley Lane,</p>
                        <p className="mb-0">Sherman Oaks, CA, 91403</p>
                        <p className="mb-0">GST No: 2914035</p>
                      </div>
                      <div className="text-end">
                        <h6 className="fs-14 fw-semibold mb-1">{payroll.staffName}</h6>
                        <p className="mb-0">Role: <span className="text-dark fw-medium">{payroll.role || "-"}</span></p>
                        <p className="mb-0">Joining Date: <span className="text-dark fw-medium">{payroll.joiningDate || "-"}</span></p>
                        <p className="mb-0">Email: <span className="text-dark fw-medium">{payroll.email || "-"}</span></p>
                      </div>
                    </div>

                    {/* Earnings & Deductions */}
                    <div className="row row-gap-2 mb-3">
                      {/* Earnings */}
                      <div className="col-md-6">
                        <h5 className="mb-3 fw-bold">Earnings</h5>
                        {[
                          { label: "Basic Salary", value: payroll.basicSalary },
                          { label: "DA (40%)", value: payroll.da },
                          { label: "HRA (15%)", value: payroll.hra },
                          { label: "Conveyance", value: payroll.conveyance },
                          { label: "Medical Allowance", value: payroll.medicalAllowance },
                          { label: "Others", value: payroll.otherEarnings },
                        ].map((item, i) => (
                          <div className="mb-3" key={i}>
                            <label className="form-label">{item.label}</label>
                            <input type="text" className="form-control" value={`$${item.value?.toFixed(2) || "0.00"}`} readOnly />
                          </div>
                        ))}
                        <div className="mb-0 p-2 bg-light rounded">
                          <label className="form-label fw-bold">Total Earnings</label>
                          <input type="text" className="form-control fw-bold text-success" value={`$${payroll.totalEarnings?.toFixed(2) || "0.00"}`} readOnly />
                        </div>
                      </div>

                      {/* Deductions */}
                      <div className="col-md-6">
                        <h5 className="mb-3 fw-bold">Deductions</h5>
                        {[
                          { label: "TDS", value: payroll.tds },
                          { label: "ESI", value: payroll.esi },
                          { label: "PF", value: payroll.pf },
                          { label: "Prof Tax", value: payroll.profTax },
                          { label: "Labour Welfare", value: payroll.labourWelfare },
                          { label: "Others", value: payroll.otherDeductions },
                        ].map((item, i) => (
                          <div className="mb-3" key={i}>
                            <label className="form-label">{item.label}</label>
                            <input type="text" className="form-control" value={`$${item.value?.toFixed(2) || "0.00"}`} readOnly />
                          </div>
                        ))}
                        <div className="mb-0 p-2 bg-light rounded">
                          <label className="form-label fw-bold">Total Deductions</label>
                          <input type="text" className="form-control fw-bold text-danger" value={`$${payroll.totalDeductions?.toFixed(2) || "0.00"}`} readOnly />
                        </div>
                      </div>
                    </div>

                    {/* Net Salary */}
                    <div className="p-3 bg-primary bg-opacity-10 rounded border border-primary mb-3">
                      <h6 className="fs-14 fw-semibold mb-0">
                        Net Salary:{" "}
                        <span className="fs-5 text-primary fw-bold">${payroll.netSalary?.toFixed(2)}</span>
                        {" "}({netSalaryWords} Only)
                      </h6>
                    </div>

                    <p className="text-muted small mb-0">
                      This is a computer-generated payslip and does not require a signature.
                      For any discrepancies, please contact HR.
                    </p>
                  </div>

                  <div className="card-footer px-0 mx-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <Link to="#" className="btn btn-primary me-2">
                        Send Payslip
                      </Link>
                      <button type="button" className="btn btn-light" onClick={handlePrint}>
                        <i className="ti ti-printer me-1" />Print
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default PayrollTwo;