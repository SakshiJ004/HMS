// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import { Staff } from "../../../../../core/common/selectOption";

// const PayrollListModal = () => {
//   return (
//     <>
//       {/* Start Add Modal */}
//       <div id="add_payroll" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="text-dark modal-title fw-bold">
//                 Add Employee Salary
//               </h4>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="ti ti-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 {/* start row */}
//                 <div className="row row-gap-2 mb-3">
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Select Staff</label>
//                       <CommonSelect
//                         options={Staff}
//                         className="select"
//                         defaultValue={Staff[1]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Net Salary</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=""
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//                 {/* start row */}
//                 <div className="row row-gap-2">
//                   <div className="col-md-6">
//                     <h6 className="mb-3">Earnings ($)</h6>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Basic Salary<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={0}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         DA (40%)<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={0}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         HRA (15%)<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={0}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Conveyance<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={0}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Medical Allowance
//                         <span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={0}
//                       />
//                     </div>
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Others<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={0}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <h6 className="mb-3">Deductions ($)</h6>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         TDS<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=""
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">ESI</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=""
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         PF<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=""
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Prof Tax<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=""
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Labour Welfare
//                         <span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=""
//                       />
//                     </div>
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Others<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder=""
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//               </div>
//               <div className="modal-footer d-flex align-items-center gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-white border"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Add Payslip
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Modal */}
//       {/* Start Add Modal */}
//       <div id="edit_payroll" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="text-dark modal-title fw-bold">
//                 Edit Employee Salary
//               </h4>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="ti ti-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 {/* start row */}
//                 <div className="row row-gap-2 mb-3">
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Select Staff</label>
//                       <CommonSelect
//                         options={Staff}
//                         className="select"
//                         defaultValue={Staff[1]}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <div className="mb-0">
//                       <label className="form-label">Net Salary</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={1000}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//                 {/* start row */}
//                 <div className="row row-gap-2">
//                   <div className="col-md-6">
//                     <h6 className="mb-3">Earnings ($)</h6>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Basic Salary<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={1000}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         DA (40%)<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={800}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         HRA (15%)<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={600}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Conveyance<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={50}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Medical Allowance
//                         <span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={40}
//                       />
//                     </div>
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Others<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={20}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                   <div className="col-md-6">
//                     <h6 className="mb-3">Deductions ($)</h6>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         TDS<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue="$600"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">ESI</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={500}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         PF<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={60}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Prof Tax<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={40}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         Labour Welfare
//                         <span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={30}
//                       />
//                     </div>
//                     <div className="mb-0">
//                       <label className="form-label">
//                         Others<span className="text-danger ms-1">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         defaultValue={10}
//                       />
//                     </div>
//                   </div>
//                   {/* end col */}
//                 </div>
//                 {/* end row */}
//               </div>
//               <div className="modal-footer d-flex align-items-center gap-1">
//                 <button
//                   type="button"
//                   className="btn btn-white border"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Modal */}
//       {/* Start Delete Modal  */}
//       <div className="modal fade" id="delete_payroll">
//         <div className="modal-dialog modal-dialog-centered modal-sm">
//           <div className="modal-content">
//             <div className="modal-body text-center position-relative z-1">
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-01.png"
//                 alt=""
//                 className="img-fluid position-absolute top-0 start-0 z-n1"
//               />
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-02.png"
//                 alt=""
//                 className="img-fluid position-absolute bottom-0 end-0 z-n1"
//               />
//               <div className="mb-3">
//                 <span className="avatar avatar-lg bg-danger text-white">
//                   <i className="ti ti-trash fs-24" />
//                 </span>
//               </div>
//               <h5 className="fw-bold mb-1">Delete Confirmation</h5>
//               <p className="mb-3">Are you sure want to delete?</p>
//               <div className="d-flex justify-content-center">
//                 <Link
//                   to="#"
//                   className="btn btn-light position-relative z-1 me-3"
//                   data-bs-dismiss="modal"
//                 >
//                   Cancel
//                 </Link>
//                 <Link
//                   to={all_routes.payroll}
//                   className="btn btn-danger position-relative z-1"
//                 >
//                   Yes, Delete
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Delete Modal  */}
//     </>
//   );
// };

// export default PayrollListModal;


import { useState, useEffect } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { Staff } from "../../../../../core/common/selectOption";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MONTH_OPTIONS = MONTHS.map(m => ({ label: m, value: m }));

const currentYear = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: 5 }, (_, i) => ({
  label: String(currentYear - i),
  value: String(currentYear - i)
}));

export interface PayrollFormData {
  staffId: string;
  staffName: string;
  email: string;
  role: string;
  joiningDate: string;
  image: string;
  salaryMonth: string;
  salaryYear: string;
  basicSalary: string;
  da: string;
  hra: string;
  conveyance: string;
  medicalAllowance: string;
  otherEarnings: string;
  tds: string;
  esi: string;
  pf: string;
  profTax: string;
  labourWelfare: string;
  otherDeductions: string;
  status: string;
}

const emptyForm: PayrollFormData = {
  staffId: "", staffName: "", email: "", role: "",
  joiningDate: "", image: "",
  salaryMonth: MONTHS[new Date().getMonth()],
  salaryYear: String(currentYear),
  basicSalary: "0", da: "0", hra: "0", conveyance: "0",
  medicalAllowance: "0", otherEarnings: "0",
  tds: "0", esi: "0", pf: "0", profTax: "0",
  labourWelfare: "0", otherDeductions: "0",
  status: "Pending"
};

interface PayrollListModalProps {
  showAddModal: boolean;
  showEditModal: boolean;
  showDeleteModal: boolean;
  currentPayroll: any;
  onCloseAdd: () => void;
  onCloseEdit: () => void;
  onCloseDelete: () => void;
  onAdd: (data: PayrollFormData) => void;
  onEdit: (data: PayrollFormData) => void;
  onDelete: () => void;
}

// Helper: calc totals
const calcTotals = (f: PayrollFormData) => {
  const totalEarnings =
    parseFloat(f.basicSalary || "0") + parseFloat(f.da || "0") +
    parseFloat(f.hra || "0") + parseFloat(f.conveyance || "0") +
    parseFloat(f.medicalAllowance || "0") + parseFloat(f.otherEarnings || "0");

  const totalDeductions =
    parseFloat(f.tds || "0") + parseFloat(f.esi || "0") +
    parseFloat(f.pf || "0") + parseFloat(f.profTax || "0") +
    parseFloat(f.labourWelfare || "0") + parseFloat(f.otherDeductions || "0");

  return {
    totalEarnings,
    totalDeductions,
    netSalary: totalEarnings - totalDeductions
  };
};

const PayrollListModal = ({
  showAddModal, showEditModal, showDeleteModal,
  currentPayroll, onCloseAdd, onCloseEdit, onCloseDelete,
  onAdd, onEdit, onDelete
}: PayrollListModalProps) => {

  const [addForm, setAddForm] = useState<PayrollFormData>(emptyForm);
  const [editForm, setEditForm] = useState<PayrollFormData>(emptyForm);

  // Populate edit form
  useEffect(() => {
    if (currentPayroll && showEditModal) {
      setEditForm({
        staffId: currentPayroll.staffId || "",
        staffName: currentPayroll.staffName || "",
        email: currentPayroll.email || "",
        role: currentPayroll.role || "",
        joiningDate: currentPayroll.joiningDate || "",
        image: currentPayroll.image || "",
        salaryMonth: currentPayroll.salaryMonth || MONTHS[new Date().getMonth()],
        salaryYear: String(currentPayroll.salaryYear || currentYear),
        basicSalary: String(currentPayroll.basicSalary || 0),
        da: String(currentPayroll.da || 0),
        hra: String(currentPayroll.hra || 0),
        conveyance: String(currentPayroll.conveyance || 0),
        medicalAllowance: String(currentPayroll.medicalAllowance || 0),
        otherEarnings: String(currentPayroll.otherEarnings || 0),
        tds: String(currentPayroll.tds || 0),
        esi: String(currentPayroll.esi || 0),
        pf: String(currentPayroll.pf || 0),
        profTax: String(currentPayroll.profTax || 0),
        labourWelfare: String(currentPayroll.labourWelfare || 0),
        otherDeductions: String(currentPayroll.otherDeductions || 0),
        status: currentPayroll.status || "Pending"
      });
    }
  }, [currentPayroll, showEditModal]);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(addForm);
    setAddForm(emptyForm);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEdit(editForm);
  };

  // Earnings/Deductions form rows
  const EarningsDeductionsForm = ({
    form, setForm
  }: { form: PayrollFormData; setForm: (f: PayrollFormData) => void }) => {
    const totals = calcTotals(form);
    const field = (key: keyof PayrollFormData) => (
      <input
        type="number"
        className="form-control"
        value={form[key]}
        min="0"
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
      />
    );

    return (
      <div className="row row-gap-2">
        {/* Earnings */}
        <div className="col-md-6">
          <h6 className="mb-3 fw-bold">Earnings ($)</h6>
          <div className="mb-3">
            <label className="form-label">Basic Salary<span className="text-danger ms-1">*</span></label>
            {field("basicSalary")}
          </div>
          <div className="mb-3">
            <label className="form-label">DA (40%)<span className="text-danger ms-1">*</span></label>
            {field("da")}
          </div>
          <div className="mb-3">
            <label className="form-label">HRA (15%)<span className="text-danger ms-1">*</span></label>
            {field("hra")}
          </div>
          <div className="mb-3">
            <label className="form-label">Conveyance<span className="text-danger ms-1">*</span></label>
            {field("conveyance")}
          </div>
          <div className="mb-3">
            <label className="form-label">Medical Allowance<span className="text-danger ms-1">*</span></label>
            {field("medicalAllowance")}
          </div>
          <div className="mb-3">
            <label className="form-label">Others</label>
            {field("otherEarnings")}
          </div>
          <div className="mb-0 p-2 bg-light rounded">
            <label className="form-label fw-semibold mb-1">Total Earnings</label>
            <input type="text" className="form-control fw-bold" value={`$${totals.totalEarnings.toFixed(2)}`} readOnly />
          </div>
        </div>

        {/* Deductions */}
        <div className="col-md-6">
          <h6 className="mb-3 fw-bold">Deductions ($)</h6>
          <div className="mb-3">
            <label className="form-label">TDS<span className="text-danger ms-1">*</span></label>
            {field("tds")}
          </div>
          <div className="mb-3">
            <label className="form-label">ESI</label>
            {field("esi")}
          </div>
          <div className="mb-3">
            <label className="form-label">PF<span className="text-danger ms-1">*</span></label>
            {field("pf")}
          </div>
          <div className="mb-3">
            <label className="form-label">Prof Tax<span className="text-danger ms-1">*</span></label>
            {field("profTax")}
          </div>
          <div className="mb-3">
            <label className="form-label">Labour Welfare<span className="text-danger ms-1">*</span></label>
            {field("labourWelfare")}
          </div>
          <div className="mb-3">
            <label className="form-label">Others</label>
            {field("otherDeductions")}
          </div>
          <div className="mb-0 p-2 bg-light rounded">
            <label className="form-label fw-semibold mb-1">Total Deductions</label>
            <input type="text" className="form-control fw-bold" value={`$${totals.totalDeductions.toFixed(2)}`} readOnly />
          </div>
        </div>

        {/* Net Salary */}
        <div className="col-12 mt-2">
          <div className="p-3 bg-primary bg-opacity-10 rounded border border-primary">
            <h6 className="fw-bold text-primary mb-0">
              Net Salary: <span className="fs-5">${totals.netSalary.toFixed(2)}</span>
            </h6>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* ==================== Add Modal ==================== */}
      <div
        className={`modal fade ${showAddModal ? "show" : ""}`}
        id="add_payroll"
        style={{ display: showAddModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">Add Employee Salary</h4>
              <button type="button" className="btn-close btn-close-modal custom-btn-close" onClick={onCloseAdd}>
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="modal-body">
                {/* Staff + Month/Year Row */}
                <div className="row row-gap-2 mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Select Staff<span className="text-danger ms-1">*</span></label>
                    <CommonSelect
                      options={Staff}
                      className="select"
                      defaultValue={Staff[0]}
                      onChange={(option: any) =>
                        setAddForm({
                          ...addForm,
                          staffId: option?.value || "",
                          staffName: option?.label || ""
                        })
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Month<span className="text-danger ms-1">*</span></label>
                    <CommonSelect
                      options={MONTH_OPTIONS}
                      className="select"
                      defaultValue={MONTH_OPTIONS.find(m => m.value === addForm.salaryMonth)}
                      onChange={(option: any) =>
                        setAddForm({ ...addForm, salaryMonth: option?.value || "" })
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Year<span className="text-danger ms-1">*</span></label>
                    <CommonSelect
                      options={YEAR_OPTIONS}
                      className="select"
                      defaultValue={YEAR_OPTIONS[0]}
                      onChange={(option: any) =>
                        setAddForm({ ...addForm, salaryYear: option?.value || "" })
                      }
                    />
                  </div>
                </div>

                <EarningsDeductionsForm form={addForm} setForm={setAddForm} />
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button type="button" className="btn btn-white border" onClick={onCloseAdd}>Cancel</button>
                <button type="submit" className="btn btn-primary">Add Payslip</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showAddModal && <div className="modal-backdrop fade show"></div>}

      {/* ==================== Edit Modal ==================== */}
      <div
        className={`modal fade ${showEditModal ? "show" : ""}`}
        id="edit_payroll"
        style={{ display: showEditModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">Edit Employee Salary</h4>
              <button type="button" className="btn-close btn-close-modal custom-btn-close" onClick={onCloseEdit}>
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="row row-gap-2 mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Select Staff<span className="text-danger ms-1">*</span></label>
                    <CommonSelect
                      options={Staff}
                      className="select"
                      value={Staff.find((s: any) => s.value === editForm.staffId)}
                      onChange={(option: any) =>
                        setEditForm({
                          ...editForm,
                          staffId: option?.value || "",
                          staffName: option?.label || ""
                        })
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Month<span className="text-danger ms-1">*</span></label>
                    <CommonSelect
                      options={MONTH_OPTIONS}
                      className="select"
                      value={MONTH_OPTIONS.find(m => m.value === editForm.salaryMonth)}
                      onChange={(option: any) =>
                        setEditForm({ ...editForm, salaryMonth: option?.value || "" })
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Year<span className="text-danger ms-1">*</span></label>
                    <CommonSelect
                      options={YEAR_OPTIONS}
                      className="select"
                      value={YEAR_OPTIONS.find(y => y.value === editForm.salaryYear)}
                      onChange={(option: any) =>
                        setEditForm({ ...editForm, salaryYear: option?.value || "" })
                      }
                    />
                  </div>
                </div>

                <EarningsDeductionsForm form={editForm} setForm={setEditForm} />
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button type="button" className="btn btn-white border" onClick={onCloseEdit}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showEditModal && <div className="modal-backdrop fade show"></div>}

      {/* ==================== Delete Modal ==================== */}
      <div
        className={`modal fade ${showDeleteModal ? "show" : ""}`}
        id="delete_payroll"
        style={{ display: showDeleteModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative z-1">
              <ImageWithBasePath src="assets/img/bg/delete-modal-bg-01.png" alt="" className="img-fluid position-absolute top-0 start-0 z-n1" />
              <ImageWithBasePath src="assets/img/bg/delete-modal-bg-02.png" alt="" className="img-fluid position-absolute bottom-0 end-0 z-n1" />
              <div className="mb-3">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1">Delete Confirmation</h5>
              <p className="mb-3">Are you sure want to delete?</p>
              <div className="d-flex justify-content-center">
                <Link to="#" className="btn btn-light position-relative z-1 me-3"
                  onClick={(e) => { e.preventDefault(); onCloseDelete(); }}>
                  Cancel
                </Link>
                <Link to="#" className="btn btn-danger position-relative z-1"
                  onClick={(e) => { e.preventDefault(); onDelete(); }}>
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default PayrollListModal;