// import { DatePicker} from "antd";
// import dayjs, { Dayjs } from "dayjs";
// import { Link } from "react-router";
// import { Session } from "../selectOption";
// import { useState } from "react";

// type RowType = {
//   id: number;
//   session: string;
//   from: Dayjs | null;
//   to: Dayjs | null;
// };

// const createRow = (row?: RowType): RowType => ({
//   id: Date.now() + Math.random(),
//   session: row ? row.session : Session[0]?.value || "",
//   from: row ? row.from : dayjs("00:00:00", "HH:mm:ss"),
//   to: row ? row.to : dayjs("00:00:00", "HH:mm:ss"),
// });

// const EducationForms = () => {
//   const [rows, setRows] = useState<RowType[]>([createRow()]);

//   const handleAddRow = (row: RowType) => {
//     const idx = rows.findIndex((r) => r.id === row.id);
//     const newRows = [...rows];
//     newRows.splice(idx + 1, 0, createRow(row));
//     setRows(newRows);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const getModalContainer = () => {
//     const modalElement = document.getElementById("modal-datepicker");
//     return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
//   };

//   return (
//     <div>
//       {rows.map((row) => (
//         <div className="row align-items-end " key={row.id}>
//           <div className="col-lg-11">
//             <div className="row">
//               <div className="col-lg-3">
//                 <div className="mb-3">
//                   <label className="form-label">Educational Degree</label>
//                   <input type="text" className="form-control" />
//                 </div>
//               </div>
//               <div className="col-lg-3">
//                 <div className="mb-3">
//                   <label className="form-label">University</label>
//                   <input type="text" className="form-control" />
//                 </div>
//               </div>
//               <div className="col-lg-3">
//                 <div className="mb-3">
//                   <label className="form-label">From</label>
//                   <div className="input-icon-end position-relative">
//                     <DatePicker
//                       className="form-control datetimepicker"
//                       format={{
//                         format: "DD-MM-YYYY",
//                         type: "mask",
//                       }}
//                       getPopupContainer={getModalContainer}
//                       placeholder="DD-MM-YYYY"
//                       suffixIcon={null}
//                     />
//                     <span className="input-icon-addon">
//                       <i className="ti ti-calendar" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-3">
//                 <div className="mb-3">
//                   <label className="form-label">To</label>
//                   <div className="input-icon-end position-relative">
//                     <DatePicker
//                       className="form-control datetimepicker"
//                       format={{
//                         format: "DD-MM-YYYY",
//                         type: "mask",
//                       }}
//                       getPopupContainer={getModalContainer}
//                       placeholder="DD-MM-YYYY"
//                       suffixIcon={null}
//                     />
//                     <span className="input-icon-addon">
//                       <i className="ti ti-calendar" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-1">
//             <div className="mb-3 d-flex">
//               <Link
//                 to="#"
//                 onClick={() => handleAddRow(row)}
//                 className="add-schedule-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
//                 style={{ marginRight: 8 }}
//               >
//                 <i className="ti ti-plus fs-16" />
//               </Link>
//               {rows.length > 1 && (
//                 <Link
//                   to="#"
//                   onClick={() => handleDeleteRow(row.id)}
//                   className="remove-schedule-btn p-2 bg-soft-danger btn-icon text-danger rounded d-flex align-items-center justify-content-center"
//                 >
//                   <i className="ti ti-trash fs-16" />
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EducationForms;



import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router";
import { useEffect, useState } from "react";

type RowType = {
  id: number;
  degree: string;
  college: string;
  from: Dayjs | null;
  to: Dayjs | null;
};

interface EducationFormsProps {
  onEducationChange?: (education: Array<{ degree: string; college: string; year: string }>) => void;
  educationData?: Array<{ degree: string; college: string; year: string }>;
}

const createRow = (row?: RowType): RowType => ({
  id: Date.now() + Math.random(),
  degree: row ? row.degree : "",
  college: row ? row.college : "",
  from: row ? row.from : null,
  to: row ? row.to : null,
});

const EducationForms = ({ onEducationChange, educationData }: EducationFormsProps) => {
  const [rows, setRows] = useState<RowType[]>([createRow()]);

  // Convert educationData to rows when component mounts or educationData changes
  // Convert educationData to rows when component mounts or educationData changes
  useEffect(() => {
    if (educationData && educationData.length > 0) {
      const convertedRows = educationData.map((edu, index) => ({
        id: Date.now() + index,
        degree: edu.degree || "",
        college: edu.college || "",
        from: null,
        to: edu.year ? dayjs(edu.year, "YYYY") : null,
      }));
      setRows(convertedRows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educationData]);

  // Notify parent component whenever rows change
  useEffect(() => {
    const education = rows
      .filter(row => row.degree && row.college && row.to)
      .map(row => ({
        degree: row.degree,
        college: row.college,
        year: row.to ? row.to.format("YYYY") : "",
      }));

    // ✅ FIX: Only call if education data actually changed
    const educationString = JSON.stringify(education);
    const currentString = JSON.stringify(educationData || []);

    if (educationString !== currentString && onEducationChange) {
      onEducationChange(education);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const handleAddRow = (row: RowType) => {
    const idx = rows.findIndex((r) => r.id === row.id);
    const newRows = [...rows];
    newRows.splice(idx + 1, 0, createRow(row));
    setRows(newRows);
  };

  const handleDeleteRow = (id: number) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleInputChange = (id: number, field: "degree" | "college", value: string) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const handleDateChange = (id: number, field: "from" | "to", date: Dayjs | null) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, [field]: date } : row)));
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  return (
    <div>
      {rows.map((row) => (
        <div className="row align-items-end " key={row.id}>
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-3">
                <div className="mb-3">
                  <label className="form-label">Educational Degree</label>
                  <input
                    type="text"
                    className="form-control"
                    value={row.degree}
                    onChange={(e) => handleInputChange(row.id, "degree", e.target.value)}
                    placeholder="e.g., MBBS"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3">
                  <label className="form-label">University</label>
                  <input
                    type="text"
                    className="form-control"
                    value={row.college}
                    onChange={(e) => handleInputChange(row.id, "college", e.target.value)}
                    placeholder="e.g., Harvard Medical School"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3">
                  <label className="form-label">From</label>
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
                      value={row.from}
                      onChange={(date) => handleDateChange(row.id, "from", date)}
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-3">
                  <label className="form-label">To</label>
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
                      value={row.to}
                      onChange={(date) => handleDateChange(row.id, "to", date)}
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1">
            <div className="mb-3 d-flex">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddRow(row);
                }}
                className="add-schedule-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                style={{ marginRight: 8 }}
              >
                <i className="ti ti-plus fs-16" />
              </Link>
              {rows.length > 1 && (
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteRow(row.id);
                  }}
                  className="remove-schedule-btn p-2 bg-soft-danger btn-icon text-danger rounded d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-trash fs-16" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationForms;