// import { Link } from "react-router";
// import Modals from "./modals/modals";

// const Faq = () => {
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Page Header */}
//           <div className="d-flex align-items-center gap-2 pb-3 mb-3 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0">FAQ</h4>
//             </div>
//             <div className="text-end">
//               <Link
//                 to="#"
//                 className="btn btn-primary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_faq"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add New FAQ
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/* Table List */}
//           <div className="table-responsive border bg-white">
//             <table className="table table-nowrap">
//               <thead>
//                 <tr>
//                   <th className="text-dark">Questions</th>
//                   <th className="text-dark">Answer</th>
//                   <th className="text-dark">Category</th>
//                   <th />
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>What services does your clinic offer?</td>
//                   <td>
//                     <p className="truncate-text">
//                       We provide a comprehensive range of services, including
//                       preventive care, diagnostics, treatment for acute and
//                       chronic conditions, vaccinations, and wellness counseling.
//                     </p>
//                   </td>
//                   <td>General</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Do you accept walk-in patients?</td>
//                   <td>
//                     <p className="truncate-text">
//                       Yes, we accept walk-in patients for urgent care needs.
//                       However, scheduling an appointment is recommended to
//                       reduce waiting times.
//                     </p>
//                   </td>
//                   <td>General</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>What should I bring to my appointment?</td>
//                   <td>
//                     <p className="truncate-text">
//                       Please bring a valid ID, your insurance card, a list of
//                       current medications, and any relevant medical records.
//                     </p>
//                   </td>
//                   <td>General</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td> How do I cancel or reschedule my appointment?</td>
//                   <td>
//                     <p className="truncate-text">
//                       To cancel or reschedule, please call our office at least
//                       24 hours in advance to avoid any cancellation fees.
//                     </p>
//                   </td>
//                   <td>General</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>What medical services do you provide?</td>
//                   <td>
//                     <p className="truncate-text">
//                       We offer a range of services including preventive care,
//                       chronic disease management, vaccinations, pediatric care,
//                       and minor surgical procedures.
//                     </p>
//                   </td>
//                   <td>General</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Do you offer telemedicine consultations?</td>
//                   <td>
//                     <p className="truncate-text">
//                       Yes, we provide telemedicine services for certain
//                       non-emergency conditions. Please contact our office to
//                       determine if your condition is suitable for a virtual
//                       visit.
//                     </p>
//                   </td>
//                   <td>Prescriptions</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Are laboratory services available on-site?</td>
//                   <td>
//                     <p className="truncate-text">
//                       Yes, we have an on-site laboratory for blood tests,
//                       urinalysis, and other diagnostic services.
//                     </p>
//                   </td>
//                   <td>Treatment</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Which insurance plans do you accept?</td>
//                   <td>
//                     <p className="truncate-text">
//                       We accept most major insurance plans. Please visit our
//                       website or call our billing department to confirm if we
//                       accept your specific plan.
//                     </p>
//                   </td>
//                   <td>Clinic Policies</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>How do I access the patient portal?</td>
//                   <td>
//                     <p className="truncate-text">
//                       You can access the patient portal by visiting our website
//                       and clicking on the "Patient Portal" link. First-time
//                       users will need to register using their email address and
//                       a provided access code.
//                     </p>
//                   </td>
//                   <td>Wellness</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>What should I do in case of a medical emergency?</td>
//                   <td>
//                     <p className="truncate-text">
//                       If you are experiencing a life-threatening emergency, call
//                       911 or go to the nearest emergency room immediately.
//                     </p>
//                   </td>
//                   <td>Wellness</td>
//                   <td className="action-item">
//                     <Link
//                       to="#"
//                       data-bs-toggle="dropdown"
//                       className="btn p-1 btn-white border"
//                     >
//                       <i className="ti ti-dots-vertical" />
//                     </Link>
//                     <ul className="dropdown-menu p-2">
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_faq"
//                         >
//                           Edit
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="#"
//                           className="dropdown-item d-flex align-items-center"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_faq"
//                         >
//                           Delete
//                         </Link>
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           {/* /Table List */}
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
//       <Modals />
//     </>
//   );
// };

// export default Faq;


import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { getFaqs, deleteFaq, type IFaq } from "../../../../../api/faqService";
import { AddFaqModal, EditFaqModal, DeleteFaqModal } from "./modals/modals";

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const Faq = () => {
  const [faqs, setFaqs] = useState<IFaq[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");

  // Modal states
  const [showAdd, setShowAdd] = useState(false);
  const [editTarget, setEditTarget] = useState<IFaq | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // ── Fetch ───────────────────────────────────────────────────────────────────
  const fetchFaqs = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getFaqs({ search: searchText || undefined });
      setFaqs(data);
    } catch {
      setError("Failed to load FAQs.");
    } finally {
      setLoading(false);
    }
  }, [searchText]);

  useEffect(() => {
    const timer = setTimeout(() => fetchFaqs(), 300);
    return () => clearTimeout(timer);
  }, [fetchFaqs]);

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleAdded = (faq: IFaq) => {
    setFaqs((prev) => [faq, ...prev]);
  };

  const handleUpdated = (updated: IFaq) => {
    setFaqs((prev) =>
      prev.map((f) => (f._id === updated._id ? updated : f))
    );
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try {
      await deleteFaq(deleteTarget);
      setFaqs((prev) => prev.filter((f) => f._id !== deleteTarget));
      setDeleteTarget(null);
    } catch {
      alert("Failed to delete FAQ.");
    } finally {
      setDeleteLoading(false);
    }
  };

  // ── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center gap-2 pb-3 mb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                FAQ
                <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium fs-13 ms-2">
                  Total : {faqs.length}
                </span>
              </h4>
            </div>
            <div className="d-flex align-items-center gap-2">
              {/* Search */}
              <div className="input-group" style={{ width: 240 }}>
                <span className="input-group-text bg-white border-end-0">
                  <i className="ti ti-search text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search FAQs..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={() => setShowAdd(true)}
              >
                <i className="ti ti-plus me-1" />
                Add New FAQ
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="alert alert-danger d-flex align-items-center">
              <i className="ti ti-alert-circle me-2" />
              {error}
              <button
                className="btn btn-sm btn-link ms-auto"
                onClick={fetchFaqs}
              >
                Retry
              </button>
            </div>
          )}

          {/* Loading */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" />
            </div>
          ) : faqs.length === 0 ? (
            <div className="text-center py-5">
              <i className="ti ti-help-octagon fs-1 text-muted d-block mb-3" />
              <h5 className="text-muted">
                {searchText ? "No FAQs found" : "No FAQs yet"}
              </h5>
              {!searchText && (
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={() => setShowAdd(true)}
                >
                  <i className="ti ti-plus me-1" />
                  Add First FAQ
                </button>
              )}
            </div>
          ) : (
            /* Table — same UI as original */
            <div className="table-responsive border bg-white">
              <table className="table table-nowrap">
                <thead>
                  <tr>
                    <th className="text-dark" style={{ width: "30%" }}>
                      Questions
                    </th>
                    <th className="text-dark" style={{ width: "45%" }}>
                      Answer
                    </th>
                    <th className="text-dark" style={{ width: "15%" }}>
                      Category
                    </th>
                    <th style={{ width: "10%" }} />
                  </tr>
                </thead>
                <tbody>
                  {faqs.map((faq) => (
                    <tr key={faq._id}>
                      <td className="fw-medium">{faq.question}</td>
                      <td>
                        <p className="truncate-text mb-0">{faq.answer}</p>
                      </td>
                      <td>
                        <span className="badge badge-soft-primary border border-primary fs-12 py-1 px-2">
                          {faq.category}
                        </span>
                      </td>
                      <td className="action-item">
                        <Link
                          to="#"
                          data-bs-toggle="dropdown"
                          className="btn p-1 btn-white border"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu p-2">
                          <li>
                            <button
                              className="dropdown-item d-flex align-items-center"
                              onClick={() => setEditTarget(faq)}
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item d-flex align-items-center text-danger"
                              onClick={() => setDeleteTarget(faq._id)}
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
      </div>

      {/* ── Modals ──────────────────────────────────────────────────── */}
      <AddFaqModal
        show={showAdd}
        onClose={() => setShowAdd(false)}
        onSaved={handleAdded}
      />
      <EditFaqModal
        show={!!editTarget}
        faq={editTarget}
        onClose={() => setEditTarget(null)}
        onSaved={handleUpdated}
      />
      <DeleteFaqModal
        show={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        loading={deleteLoading}
      />
    </>
  );
};

export default Faq;