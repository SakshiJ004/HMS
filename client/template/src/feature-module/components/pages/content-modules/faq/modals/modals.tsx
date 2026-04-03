// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
// import { all_routes } from "../../../../../routes/all_routes";

// const Modals = () => {
//   return (
//     <>
//       {/* Start Add Categories */}
//       <div id="add_faq" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="text-dark fw-bold modal-title">Add FAQ</h5>
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
//                 <div className="mb-2">
//                   <label className="form-label">Category</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Placeholder"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">Question</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Placeholder"
//                   />
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">Answer</label>
//                   <textarea
//                     className="form-control"
//                     placeholder="Description"
//                     defaultValue={""}
//                   />
//                 </div>
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
//                   Add FAQ
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* End Add Categories */}
//       {/* Start Edit Categories */}
//       <div id="edit_faq" className="modal fade">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="text-dark modal-title">Edit FAQ</h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-modal custom-btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <i className="fa-solid fa-x" />
//               </button>
//             </div>
//             <form>
//               <div className="modal-body">
//                 <div className="mb-2">
//                   <label className="form-label">Category</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue="General"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="form-label">Question</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue="Do you accept my health insurance?"
//                   />
//                 </div>
//                 <div className="mb-0">
//                   <label className="form-label">Answer</label>
//                   <textarea
//                     className="form-control"
//                     defaultValue={
//                       "We accep  t most major insurance plans. You can check the list of accepted insurers on our website or call us to confirm coverage."
//                     }
//                   />
//                 </div>
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
//       {/* End Edit Categories */}
//       {/* Start Delete Modal  */}
//       <div className="modal fade" id="delete_faq">
//         <div className="modal-dialog modal-dialog-centered modal-sm">
//           <div className="modal-content">
//             <div className="modal-body text-center position-relative">
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-01.png"
//                 alt=""
//                 className="img-fluid position-absolute top-0 start-0"
//               />
//               <ImageWithBasePath
//                 src="assets/img/bg/delete-modal-bg-02.png"
//                 alt=""
//                 className="img-fluid position-absolute bottom-0 end-0"
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
//                   to={all_routes.faq}
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

// export default Modals;


import { useState, useEffect } from "react";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { createFaq, updateFaq, type IFaq, type FaqPayload } from "../../../../../../api/faqService";

// ─── Add FAQ Modal ────────────────────────────────────────────────────────────
export const AddFaqModal = ({
  show,
  onClose,
  onSaved,
}: {
  show: boolean;
  onClose: () => void;
  onSaved: (faq: IFaq) => void;
}) => {
  const [form, setForm] = useState<FaqPayload>({
    category: "",
    question: "",
    answer: "",
    status: "Active",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setForm({ category: "", question: "", answer: "", status: "Active" });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.category.trim()) return setError("Category is required.");
    if (!form.question.trim()) return setError("Question is required.");
    if (!form.answer.trim()) return setError("Answer is required.");
    setSaving(true);
    setError("");
    try {
      const newFaq = await createFaq(form);
      onSaved(newFaq);
      reset();
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Failed to create FAQ.");
    } finally {
      setSaving(false);
    }
  };

  if (!show) return null;
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }} id="add_faq">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark fw-bold modal-title">Add FAQ</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                onClick={() => { reset(); onClose(); }}
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {error && (
                  <div className="alert alert-danger py-2 fs-13">{error}</div>
                )}
                <div className="mb-2">
                  <label className="form-label">
                    Category <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. General, Treatment, Prescriptions"
                    value={form.category}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, category: e.target.value }))
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    Question <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the question"
                    value={form.question}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, question: e.target.value }))
                    }
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Answer <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Enter the answer"
                    rows={4}
                    value={form.answer}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, answer: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  onClick={() => { reset(); onClose(); }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={saving}>
                  {saving && (
                    <span className="spinner-border spinner-border-sm me-1" />
                  )}
                  Add FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
};

// ─── Edit FAQ Modal ───────────────────────────────────────────────────────────
export const EditFaqModal = ({
  show,
  faq,
  onClose,
  onSaved,
}: {
  show: boolean;
  faq: IFaq | null;
  onClose: () => void;
  onSaved: (updated: IFaq) => void;
}) => {
  const [form, setForm] = useState<FaqPayload>({
    category: "",
    question: "",
    answer: "",
    status: "Active",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (faq && show) {
      setForm({
        category: faq.category,
        question: faq.question,
        answer: faq.answer,
        status: faq.status,
      });
      setError("");
    }
  }, [faq, show]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.category.trim()) return setError("Category is required.");
    if (!form.question.trim()) return setError("Question is required.");
    if (!form.answer.trim()) return setError("Answer is required.");
    if (!faq) return;
    setSaving(true);
    setError("");
    try {
      const updated = await updateFaq(faq._id, form);
      onSaved(updated);
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Failed to update FAQ.");
    } finally {
      setSaving(false);
    }
  };

  if (!show || !faq) return null;
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }} id="edit_faq">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title">Edit FAQ</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                onClick={onClose}
                aria-label="Close"
              >
                <i className="fa-solid fa-x" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {error && (
                  <div className="alert alert-danger py-2 fs-13">{error}</div>
                )}
                <div className="mb-2">
                  <label className="form-label">
                    Category <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.category}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, category: e.target.value }))
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    Question <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.question}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, question: e.target.value }))
                    }
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Answer <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    value={form.answer}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, answer: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={saving}>
                  {saving && (
                    <span className="spinner-border spinner-border-sm me-1" />
                  )}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
};

// ─── Delete FAQ Modal ─────────────────────────────────────────────────────────
export const DeleteFaqModal = ({
  show,
  onClose,
  onConfirm,
  loading,
}: {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}) => {
  if (!show) return null;
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }} id="delete_faq">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0"
              />
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1 position-relative z-1">
                Delete Confirmation
              </h5>
              <p className="mb-3 position-relative z-1">
                Are you sure you want to delete this FAQ?
              </p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-light position-relative z-1 me-3"
                  onClick={onClose}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger position-relative z-1"
                  onClick={onConfirm}
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm me-1" />
                  )}
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
};