// import { HolidaysListData } from "../../../../core/json/holidaysListData";
// import { Link } from "react-router";
// import Datatable from "../../../../core/common/dataTable";
// import HolidaysModal from "./modal/holidaysModal";

// const HolidaysList = () => {
//   const data = HolidaysListData;
//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "Name",
//       sorter: (a: any, b: any) => a.Name.length - b.Name.length,
//     },
//     {
//       title: "Date",
//       dataIndex: "Date",
//       sorter: (a: any, b: any) => a.Date.length - b.Date.length,
//     },
//     {
//       title: "Days",
//       dataIndex: "Days",
//       sorter: (a: any, b: any) => a.Days.length - b.Days.length,
//     },
//     {
//       title: "",
//       render: () => (
//         <div className="action-item p-2">
//           <Link
//             to="#"
//             data-bs-toggle="dropdown"
//             className="btn p-1 btn-white border"
//           >
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu p-2">
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#edit_holiday"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_holiday"
//               >
//                 Delete
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content" id="profilePage">
//           {/* Page Header */}
//           <div className="mb-3 border-bottom pb-3">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="d-flex align-items-center">
//                 <h4 className="fw-bold mb-0 me-2">Holidays</h4>
//                 <span className="badge badge-soft-primary border border-primary fw-medium">
//                   Total Holidays : 33
//                 </span>
//               </div>
//               <Link
//                 to="#"
//                 className="btn btn-primary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_holiday"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add Holiday
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/* Table List */}
//           <div className="table-responsive border">
//             <Datatable
//               columns={columns}
//               dataSource={data}
//               Selection={false}
//               searchText={""}
//             />
//           </div>
//           {/* /Table List */}
//         </div>
//         {/* End Content */}
//       </div>
//       {/* ========================
// 			End Page Content
// 		========================= */}

//       <HolidaysModal />
//     </>
//   );
// };

// export default HolidaysList;



import { Link } from "react-router";
import { useState } from "react";
import Datatable from "../../../../core/common/dataTable";
import HolidaysModal from "./modal/holidaysModal";
import { useHolidays, type Holiday } from "./modal/useHolidays";
const HolidaysList = () => {
  const { holidays, addHoliday, updateHoliday, deleteHoliday, totalHolidays } = useHolidays();
  const [editHoliday, setEditHoliday] = useState<Holiday | null>(null);
  const [deleteKey, setDeleteKey] = useState<string | null>(null);

  const handleEdit = (holiday: Holiday) => {
    setEditHoliday(holiday);
  };

  const handleDeleteClick = (key: string) => {
    setDeleteKey(key);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      sorter: (a: Holiday, b: Holiday) => a.Name.length - b.Name.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: Holiday, b: Holiday) => a.Date.length - b.Date.length,
    },
    {
      title: "Days",
      dataIndex: "Days",
      sorter: (a: Holiday, b: Holiday) => a.Days.length - b.Days.length,
    },
    {
      title: "",
      render: (_: any, record: Holiday) => (
        <div className="action-item p-2">
          <Link
            to="#"
            data-bs-toggle="dropdown"
            className="btn p-1 btn-white border"
          >
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#edit_holiday"
                onClick={() => handleEdit(record)}
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#delete_holiday"
                onClick={() => handleDeleteClick(record.key)}
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content" id="profilePage">
          {/* Page Header */}
          <div className="mb-3 border-bottom pb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h4 className="fw-bold mb-0 me-2">Holidays</h4>
                <span className="badge badge-soft-primary border border-primary fw-medium">
                  Total Holidays : {totalHolidays}
                </span>
              </div>
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add_holiday"
              >
                <i className="ti ti-plus me-1" />
                Add Holiday
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* Table List */}
          <div className="table-responsive border">
            <Datatable
              columns={columns}
              dataSource={holidays}
              Selection={false}
              searchText={""}
            />
          </div>
          {/* /Table List */}
        </div>
        {/* End Content */}
      </div>
      {/* ========================
			End Page Content
		========================= */}

      <HolidaysModal
        onAdd={addHoliday}
        onUpdate={updateHoliday}
        onDelete={deleteHoliday} 
        editHoliday={editHoliday}
        deleteKey={deleteKey} 
        setDeleteKey={setDeleteKey}
      />
    </>
  );
};

export default HolidaysList;