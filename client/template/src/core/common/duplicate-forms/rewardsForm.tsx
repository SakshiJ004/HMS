// import { DatePicker } from "antd";
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

// const RewardsForms = () => {
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
//         <div className="row align-items-end" key={row.id}>
//           <div className="col-lg-11">
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="mb-3">
//                   <label className="form-label">Name</label>
//                   <input type="text" className="form-control" />
//                 </div>
//               </div>
//               <div className="col-lg-6">
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

// export default RewardsForms;


import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router";
import { useEffect, useState } from "react";

type RowType = {
  id: number;
  title: string;
  year: Dayjs | null;
};

interface RewardsFormsProps {
  onRewardsChange?: (rewards: Array<{ title: string; year: string }>) => void;
  rewardsData?: Array<{ title: string; year: string }>;
}

const createRow = (row?: RowType): RowType => ({
  id: Date.now() + Math.random(),
  title: row ? row.title : "",
  year: row ? row.year : null,
});

const RewardsForms = ({ onRewardsChange, rewardsData }: RewardsFormsProps) => {
  const [rows, setRows] = useState<RowType[]>([createRow()]);

  // Convert rewardsData to rows when component mounts or rewardsData changes
  useEffect(() => {
    if (rewardsData && rewardsData.length > 0) {
      const convertedRows = rewardsData.map((reward, index) => ({
        id: Date.now() + index,
        title: reward.title || "",
        year: reward.year ? dayjs(reward.year, "YYYY") : null,
      }));
      setRows(convertedRows);
    }
  }, [rewardsData]);

  // Notify parent component whenever rows change
  useEffect(() => {
    if (onRewardsChange) {
      const rewards = rows
        .filter(row => row.title && row.year)
        .map(row => ({
          title: row.title,
          year: row.year ? row.year.format("YYYY") : "",
        }));
      onRewardsChange(rewards);
    }
  }, [rows, onRewardsChange]);

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

  const handleInputChange = (id: number, value: string) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, title: value } : row)));
  };

  const handleDateChange = (id: number, date: Dayjs | null) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, year: date } : row)));
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  return (
    <div>
      {rows.map((row) => (
        <div className="row align-items-end" key={row.id}>
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={row.title}
                    onChange={(e) => handleInputChange(row.id, e.target.value)}
                    placeholder="e.g., Best Doctor Award"
                  />
                </div>
              </div>
              <div className="col-lg-6">
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
                      value={row.year}
                      onChange={(date) => handleDateChange(row.id, date)}
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

export default RewardsForms;
