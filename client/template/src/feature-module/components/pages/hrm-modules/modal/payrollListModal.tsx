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



import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { getStaffs } from "../../../../../api/staffService";

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
  tds: "", esi: "", pf: "", profTax: "",
  labourWelfare: "", otherDeductions: "",
  status: "Pending"
};

const calcNetSalary = (f: PayrollFormData) => {
  const totalEarnings =
    parseFloat(f.basicSalary || "0") + parseFloat(f.da || "0") +
    parseFloat(f.hra || "0") + parseFloat(f.conveyance || "0") +
    parseFloat(f.medicalAllowance || "0") + parseFloat(f.otherEarnings || "0");
  const totalDeductions =
    parseFloat(f.tds || "0") + parseFloat(f.esi || "0") +
    parseFloat(f.pf || "0") + parseFloat(f.profTax || "0") +
    parseFloat(f.labourWelfare || "0") + parseFloat(f.otherDeductions || "0");
  return totalEarnings - totalDeductions;
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

const PayrollListModal = ({
  showAddModal, showEditModal, showDeleteModal,
  currentPayroll, onCloseAdd, onCloseEdit, onCloseDelete,
  onAdd, onEdit, onDelete
}: PayrollListModalProps) => {

  const [addForm, setAddForm] = useState<PayrollFormData>(emptyForm);
  const [editForm, setEditForm] = useState<PayrollFormData>(emptyForm);
  const [staffOptions, setStaffOptions] = useState<any[]>([]);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const response = await getStaffs();
        if (response.success && response.data) {
          const options = response.data.map((staff: any) => ({
            label: staff.name,
            value: staff._id,
            email: staff.email || "",
            role: staff.role || "",
            joiningDate: staff.dateOfJoining
              ? new Date(staff.dateOfJoining).toLocaleDateString("en-GB", {
                day: "2-digit", month: "short", year: "numeric"
              })
              : "",
            image: staff.image || "",
          }));
          setStaffOptions(options);
        }
      } catch (error) {
        console.error("Error fetching staff:", error);
      }
    };
    fetchStaffs();
  }, []);

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
        tds: String(currentPayroll.tds || ""),
        esi: String(currentPayroll.esi || ""),
        pf: String(currentPayroll.pf || ""),
        profTax: String(currentPayroll.profTax || ""),
        labourWelfare: String(currentPayroll.labourWelfare || ""),
        otherDeductions: String(currentPayroll.otherDeductions || ""),
        status: currentPayroll.status || "Pending"
      });
    }
  }, [currentPayroll, showEditModal]);

  const handleAddChange = useCallback((key: keyof PayrollFormData, value: string) => {
    setAddForm(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleEditChange = useCallback((key: keyof PayrollFormData, value: string) => {
    setEditForm(prev => ({ ...prev, [key]: value }));
  }, []);

  // ✅ KEY FIX: modal-body मध्ये फक्त scrollable content
  // modal-footer form च्या बाहेर आहे — त्यामुळे buttons नेहमी दिसतात
  const renderModalBody = (
    form: PayrollFormData,
    onChange: (key: keyof PayrollFormData, value: string) => void,
    setForm: React.Dispatch<React.SetStateAction<PayrollFormData>>
  ) => (
    <div className="modal-body">
      {/* Select Staff */}
      <div className="row row-gap-2 mb-3">
        <div className="col-12">
          <label className="form-label">Select Staff</label>
          <CommonSelect
            options={staffOptions}
            className="select"
            placeholder="Select staff"
            value={staffOptions.find(s => s.value === form.staffId) || null}
            onChange={(option: any) => {
              if (option) {
                setForm(prev => ({
                  ...prev,
                  staffId: option.value,
                  staffName: option.label,
                  email: option.email || "",
                  role: option.role || "",
                  joiningDate: option.joiningDate || "",
                  image: option.image || "",
                }));
              }
            }}
          />
        </div>
      </div>

      {/* Month + Year */}
      <div className="row row-gap-2 mb-3">
        <div className="col-md-6">
          <label className="form-label">Month<span className="text-danger ms-1">*</span></label>
          <CommonSelect
            options={MONTH_OPTIONS}
            className="select"
            value={MONTH_OPTIONS.find(m => m.value === form.salaryMonth)}
            onChange={(option: any) =>
              setForm(prev => ({ ...prev, salaryMonth: option?.value || "" }))
            }
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Year<span className="text-danger ms-1">*</span></label>
          <CommonSelect
            options={YEAR_OPTIONS}
            className="select"
            value={YEAR_OPTIONS.find(y => y.value === form.salaryYear)}
            onChange={(option: any) =>
              setForm(prev => ({ ...prev, salaryYear: option?.value || "" }))
            }
          />
        </div>
      </div>

      {/* Net Salary */}
      <div className="mb-3">
        <label className="form-label">Net Salary</label>
        <input
          type="text"
          className="form-control"
          value={calcNetSalary(form) > 0 ? `$${calcNetSalary(form).toFixed(2)}` : ""}
          readOnly
          placeholder=""
        />
      </div>

      {/* Earnings + Deductions */}
      <div className="row row-gap-2">
        {/* Earnings */}
        <div className="col-md-6">
          <h6 className="mb-3">Earnings ($)</h6>
          <div className="mb-3">
            <label className="form-label">Basic Salary<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.basicSalary}
              onChange={(e) => onChange("basicSalary", e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">DA (40%)<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.da}
              onChange={(e) => onChange("da", e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">HRA (15%)<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.hra}
              onChange={(e) => onChange("hra", e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Conveyance<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.conveyance}
              onChange={(e) => onChange("conveyance", e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Medical Allowance<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.medicalAllowance}
              onChange={(e) => onChange("medicalAllowance", e.target.value)} />
          </div>
          <div className="mb-0">
            <label className="form-label">Others<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.otherEarnings}
              onChange={(e) => onChange("otherEarnings", e.target.value)} />
          </div>
        </div>

        {/* Deductions */}
        <div className="col-md-6">
          <h6 className="mb-3">Deductions ($)</h6>
          <div className="mb-3">
            <label className="form-label">TDS<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.tds}
              onChange={(e) => onChange("tds", e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">ESI</label>
            <input type="number" className="form-control" min="0"
              value={form.esi}
              onChange={(e) => onChange("esi", e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">PF<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.pf}
              onChange={(e) => onChange("pf", e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Prof Tax<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.profTax}
              onChange={(e) => onChange("profTax", e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Labour Welfare<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.labourWelfare}
              onChange={(e) => onChange("labourWelfare", e.target.value)} />
          </div>
          <div className="mb-0">
            <label className="form-label">Others<span className="text-danger ms-1">*</span></label>
            <input type="number" className="form-control" min="0"
              value={form.otherDeductions}
              onChange={(e) => onChange("otherDeductions", e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ==================== Add Modal ==================== */}
      <div
        id="add_payroll"
        className={`modal fade ${showAddModal ? "show" : ""}`}
        style={{ display: showAddModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content" style={{ maxHeight: "85vh", display: "flex", flexDirection: "column" }}>
            <div className="modal-header" style={{ flexShrink: 0 }}>
              <h4 className="text-dark modal-title fw-bold">Add Employee Salary</h4>
              <button type="button" className="btn-close btn-close-modal custom-btn-close" onClick={onCloseAdd} aria-label="Close">
                <i className="ti ti-x" />
              </button>
            </div>

            {/* ✅ form wraps only modal-body — footer is OUTSIDE form but inside modal-content */}
            <form id="add-payroll-form" onSubmit={(e) => { e.preventDefault(); onAdd(addForm); setAddForm(emptyForm); }} style={{ overflowY: "auto", flex: 1 }}>
              {renderModalBody(addForm, handleAddChange, setAddForm)}
            </form>

            {/* ✅ modal-footer is OUTSIDE form — always visible, never scrolls away */}
            <div className="modal-footer d-flex align-items-center gap-1" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-white border" onClick={onCloseAdd}>
                Cancel
              </button>
              <button type="submit" form="add-payroll-form" className="btn btn-primary">
                Add Payslip
              </button>
            </div>

          </div>
        </div>
      </div>
      {showAddModal && <div className="modal-backdrop fade show"></div>}

      {/* ==================== Edit Modal ==================== */}
      <div
        id="edit_payroll"
        className={`modal fade ${showEditModal ? "show" : ""}`}
        style={{ display: showEditModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content" style={{ maxHeight: "85vh", display: "flex", flexDirection: "column" }}>
            <div className="modal-header" style={{ flexShrink: 0 }}>
              <h4 className="text-dark modal-title fw-bold">Edit Employee Salary</h4>
              <button type="button" className="btn-close btn-close-modal custom-btn-close" onClick={onCloseEdit} aria-label="Close">
                <i className="ti ti-x" />
              </button>
            </div>

            <form id="edit-payroll-form" onSubmit={(e) => { e.preventDefault(); onEdit(editForm); }} style={{ overflowY: "auto", flex: 1 }}>
              {renderModalBody(editForm, handleEditChange, setEditForm)}
            </form>

            <div className="modal-footer d-flex align-items-center gap-1" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-white border" onClick={onCloseEdit}>
                Cancel
              </button>
              <button type="submit" form="edit-payroll-form" className="btn btn-primary">
                Save Changes
              </button>
            </div>

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