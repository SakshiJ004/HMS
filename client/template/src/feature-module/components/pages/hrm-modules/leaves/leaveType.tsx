// import { Link } from "react-router";
// import { LeaveTypeData } from "../../../../../core/json/leaveTypeData";
// import Datatable from "../../../../../core/common/dataTable";
// import LeaveTypeModal from "./modal/leaveTypeModal";

// const LeaveType = () => {
//   const data = LeaveTypeData;
//   const columns = [
//     {
//       title: "Leave Type",
//       dataIndex: "LeaveType",
//       sorter: (a: any, b: any) => a.LeaveType.length - b.LeaveType.length,
//     },
//     {
//       title: "Leave Quota",
//       dataIndex: "LeaveQuota",
//       sorter: (a: any, b: any) => a.LeaveQuota.length - b.LeaveQuota.length,
//     },
//     {
//       title: "Created On",
//       dataIndex: "CreatedOn",
//       sorter: (a: any, b: any) => a.CreatedOn.length - b.CreatedOn.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: any) => (
//         <span
//           className={`badge border ${
//             text === "Active"
//               ? "badge-soft-success border-success"
//               : "badge-soft-danger border-danger"
//           } px-2 py-1 fs-13 fw-medium`}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
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
//                 data-bs-target="#edit_leave_type"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_leave_type"
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
//               <h4 className="fw-bold mb-0">Leave Type</h4>
//               <Link
//                 to="#"
//                 className="btn btn-primary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_leave_type"
//               >
//                 <i className="ti ti-plus me-1" />
//                 New Leave Type
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

//       <LeaveTypeModal />
//     </>
//   );
// };

// export default LeaveType;



// Admin/leaves/leaveType.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Datatable from "../../../../../core/common/dataTable";
import LeaveTypeModal from "./modal/leaveTypeModal";
import {
  getLeaveTypes,
  createLeaveType,
  updateLeaveType,
  deleteLeaveType
} from "../../../../../api/leaveTypeService";
import dayjs from "dayjs";

interface LeaveTypeData {
  key: string;
  _id: string;
  LeaveType: string;
  LeaveQuota: number;
  CreatedOn: string;
  Status: string;
}

const LeaveType = () => {
  const [data, setData] = useState<LeaveTypeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = useState<LeaveTypeData | null>(null);

  useEffect(() => {
    fetchLeaveTypes();
  }, []);

  const fetchLeaveTypes = async () => {
    try {
      setLoading(true);
      const response = await getLeaveTypes();

      if (response.success) {
        const formattedData = response.data.map((type: any) => ({
          key: type._id,
          _id: type._id,
          LeaveType: type.leaveType,
          LeaveQuota: type.leaveQuota,
          CreatedOn: dayjs(type.createdAt).format('DD MMM YYYY'),
          Status: type.status
        }));

        setData(formattedData);
      }
    } catch (error) {
      console.error('Error fetching leave types:', error);
      alert('Failed to fetch leave types');
    } finally {
      setLoading(false);
    }
  };

  const handleAddLeaveType = async (leaveTypeData: {
    leaveType: string;
    leaveQuota: number;
  }) => {
    try {
      const response = await createLeaveType(leaveTypeData);
      if (response.success) {
        alert('Leave type added successfully');
        setShowAddModal(false);
        fetchLeaveTypes();
      }
    } catch (error: any) {
      alert(error.message || 'Failed to add leave type');
    }
  };

  const handleEditLeaveType = async (leaveTypeData: {
    _id: string;
    leaveType: string;
    leaveQuota: number;
    status: string;
  }) => {
    try {
      const response = await updateLeaveType(leaveTypeData._id, {
        leaveType: leaveTypeData.leaveType,
        leaveQuota: leaveTypeData.leaveQuota,
        status: leaveTypeData.status
      });

      if (response.success) {
        alert('Leave type updated successfully');
        setShowEditModal(false);
        setSelectedLeaveType(null);
        fetchLeaveTypes();
      }
    } catch (error: any) {
      alert(error.message || 'Failed to update leave type');
    }
  };

  const handleDeleteLeaveType = async (id: string) => {
    try {
      const response = await deleteLeaveType(id);
      if (response.success) {
        alert('Leave type deleted successfully');
        setShowDeleteModal(false);
        setSelectedLeaveType(null);
        fetchLeaveTypes();
      }
    } catch (error: any) {
      alert(error.message || 'Failed to delete leave type');
    }
  };

  const columns = [
    {
      title: "Leave Type",
      dataIndex: "LeaveType",
      sorter: (a: LeaveTypeData, b: LeaveTypeData) =>
        a.LeaveType.length - b.LeaveType.length,
    },
    {
      title: "Leave Quota",
      dataIndex: "LeaveQuota",
      sorter: (a: LeaveTypeData, b: LeaveTypeData) =>
        a.LeaveQuota - b.LeaveQuota,
    },
    {
      title: "Created On",
      dataIndex: "CreatedOn",
      sorter: (a: LeaveTypeData, b: LeaveTypeData) =>
        a.CreatedOn.length - b.CreatedOn.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge border ${text === "Active"
              ? "badge-soft-success border-success"
              : "badge-soft-danger border-danger"
            } px-2 py-1 fs-13 fw-medium`}
        >
          {text}
        </span>
      ),
      sorter: (a: LeaveTypeData, b: LeaveTypeData) =>
        a.Status.length - b.Status.length,
    },
    {
      title: "",
      render: (record: LeaveTypeData) => (
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
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedLeaveType(record);
                  setShowEditModal(true);
                }}
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedLeaveType(record);
                  setShowDeleteModal(true);
                }}
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="content" id="profilePage">
          {/* Page Header */}
          <div className="mb-3 border-bottom pb-3">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="fw-bold mb-0">Leave Type</h4>
              <Link
                to="#"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAddModal(true);
                }}
              >
                <i className="ti ti-plus me-1" />
                New Leave Type
              </Link>
            </div>
          </div>

          {/* Table List */}
          <div className="table-responsive border">
            <Datatable
              columns={columns}
              dataSource={data}
              Selection={false}
              searchText={""}
            />
          </div>
        </div>
      </div>

      <LeaveTypeModal
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        selectedLeaveType={selectedLeaveType}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => {
          setShowEditModal(false);
          setSelectedLeaveType(null);
        }}
        onCloseDelete={() => {
          setShowDeleteModal(false);
          setSelectedLeaveType(null);
        }}
        onAdd={handleAddLeaveType}
        onEdit={handleEditLeaveType}
        onDelete={handleDeleteLeaveType}
      />
    </>
  );
};

export default LeaveType;