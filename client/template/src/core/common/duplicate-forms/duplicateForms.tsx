// import { TimePicker } from "antd";
// import dayjs, { Dayjs } from "dayjs";
// import { Link } from "react-router";
// import CommonSelect from "../common-select/commonSelect";
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

// const DuplicateForms = () => {
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


//   const handleTimeChange = (
//     id: number,
//     field: "from" | "to",
//     time: Dayjs | null
//   ) => {
//     setRows(rows.map((row) => (row.id === id ? { ...row, [field]: time } : row)));
//   };

//   return (
//     <div>
//       {rows.map((row) => (
//         <div className="row gx-3" key={row.id}>
//           <div className="col-lg-5">
//             <div className="mb-3">
//               <label className="form-label">Session</label>
//               <CommonSelect
//                 options={Session}
//                 className="select"
//                 defaultValue={Session[0]}
//               />
//             </div>
//           </div>
//           <div className="col-lg-7">
//             <div className="row align-items-end gx-3">
//               <div className="col-lg-9">
//                 <div className="row gx-3">
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label">From</label>
//                       <div className="input-icon-end position-relative">
//                         <TimePicker
//                           className="form-control"
//                           value={row.from}
//                           onChange={(time) => handleTimeChange(row.id, "from", time)}
//                           defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
//                         />
//                         <span className="input-icon-addon">
//                           <i className="ti ti-clock-hour-10" />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label className="form-label">To</label>
//                       <div className="input-icon-end position-relative">
//                         <TimePicker
//                           className="form-control"
//                           value={row.to}
//                           onChange={(time) => handleTimeChange(row.id, "to", time)}
//                           defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
//                         />
//                         <span className="input-icon-addon">
//                           <i className="ti ti-clock-hour-10" />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-3">
//                 <div className="mb-3 d-flex">
//                   <Link
//                     to="#"
//                     onClick={() => handleAddRow(row)}
//                     className="add-schedule-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
//                     style={{ marginRight: 8 }}
//                   >
//                     <i className="ti ti-plus fs-16" />
//                   </Link>
//                   {rows.length > 1 && (
//                     <Link
//                       to="#"
//                       onClick={() => handleDeleteRow(row.id)}
//                       className="remove-schedule-btn p-2 bg-soft-danger btn-icon text-danger rounded d-flex align-items-center justify-content-center"
//                     >
//                       <i className="ti ti-trash fs-16" />
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DuplicateForms;


import { TimePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router";
import CommonSelect from "../common-select/commonSelect";
import { Session } from "../selectOption";
import { useEffect, useState } from "react";

type RowType = {
  id: number;
  session: string;
  from: Dayjs | null;
  to: Dayjs | null;
};

interface DuplicateFormsProps {
  onScheduleChange?: (schedules: Array<{ startTime: string; endTime: string }>) => void;
  scheduleData?: Array<{ startTime: string; endTime: string }>;
}

const createRow = (row?: RowType): RowType => ({
  id: Date.now() + Math.random(),
  session: row ? row.session : Session[0]?.value || "",
  from: row ? row.from : dayjs("00:00:00", "HH:mm:ss"),
  to: row ? row.to : dayjs("00:00:00", "HH:mm:ss"),
});

const DuplicateForms = ({ onScheduleChange, scheduleData }: DuplicateFormsProps) => {
  const [rows, setRows] = useState<RowType[]>([createRow()]);

  // Convert scheduleData to rows when component mounts or scheduleData changes
  // Convert scheduleData to rows when component mounts or scheduleData changes
  useEffect(() => {
    if (scheduleData && scheduleData.length > 0 && rows.length === 1 && !rows[0].from) {
      const convertedRows = scheduleData.map((schedule, index) => ({
        id: Date.now() + index,
        session: Session[0]?.value || "",
        from: schedule.startTime ? dayjs(schedule.startTime, "HH:mm:ss") : dayjs("00:00:00", "HH:mm:ss"),
        to: schedule.endTime ? dayjs(schedule.endTime, "HH:mm:ss") : dayjs("00:00:00", "HH:mm:ss"),
      }));
      setRows(convertedRows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduleData]);

  // Notify parent component whenever rows change
  // Notify parent component whenever rows change
  useEffect(() => {
    const schedules = rows.map(row => ({
      startTime: row.from ? row.from.format("HH:mm:ss") : "00:00:00",
      endTime: row.to ? row.to.format("HH:mm:ss") : "00:00:00",
    }));

    // Only call if schedules actually changed
    // const schedulesString = JSON.stringify(schedules);
    if (onScheduleChange) {
      onScheduleChange(schedules);
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

  const handleTimeChange = (
    id: number,
    field: "from" | "to",
    time: Dayjs | null
  ) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, [field]: time } : row)));
  };

  const handleSessionChange = (id: number, value: any) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, session: value.value } : row)));
  };

  return (
    <div>
      {rows.map((row) => (
        <div className="row gx-3" key={row.id}>
          <div className="col-lg-5">
            <div className="mb-3">
              <label className="form-label">Session</label>
              <CommonSelect
                options={Session}
                className="select"
                value={Session.find(s => s.value === row.session) || Session[0]}
                onChange={(value) => handleSessionChange(row.id, value)}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row align-items-end gx-3">
              <div className="col-lg-9">
                <div className="row gx-3">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">From</label>
                      <div className="input-icon-end position-relative">
                        <TimePicker
                          className="form-control"
                          value={row.from}
                          onChange={(time) => handleTimeChange(row.id, "from", time)}
                          defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                          format="HH:mm:ss"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-clock-hour-10" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">To</label>
                      <div className="input-icon-end position-relative">
                        <TimePicker
                          className="form-control"
                          value={row.to}
                          onChange={(time) => handleTimeChange(row.id, "to", time)}
                          defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                          format="HH:mm:ss"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-clock-hour-10" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default DuplicateForms;