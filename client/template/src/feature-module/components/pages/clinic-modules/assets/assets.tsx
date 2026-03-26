// import { useState } from "react";
// import { AssertsListData } from "../../../../../core/json/AssetsListData";
// import FilterIndex from "../../../../../core/common/filter/filterIndex";
// import Datatable from "../../../../../core/common/dataTable";
// import { Link } from "react-router";
// import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
// import PredefinedDatePicker from "../../../../../core/common/datePicker";
// import Modals from "./modals/modals";

// const Assets = () => {
//   const data = AssertsListData;
//   const columns = [
//     {
//       title: "Asset ID",
//       dataIndex: "AssetID",
//       render: (text: any) => <Link to="#">{text}</Link>,
//       sorter: (a: any, b: any) => a.AssetID.length - b.AssetID.length,
//     },
//     {
//       title: "Asset User",
//       dataIndex: "AssetUser",
//       sorter: (a: any, b: any) => a.AssetUser.length - b.AssetUser.length,
//     },
//     {
//       title: "Assets",
//       dataIndex: "Assets",
//       sorter: (a: any, b: any) => a.Assets.length - b.Assets.length,
//     },
//     {
//       title: "Purchase Date",
//       dataIndex: "PurchaseDate",
//       sorter: (a: any, b: any) => a.PurchaseDate.length - b.PurchaseDate.length,
//     },
//     {
//       title: "Warrenty",
//       dataIndex: "Warrenty",
//       sorter: (a: any, b: any) => a.Warrenty.length - b.Warrenty.length,
//     },
//     {
//       title: "Warranty End",
//       dataIndex: "WarrantyEnd",
//       sorter: (a: any, b: any) => a.WarrantyEnd.length - b.WarrantyEnd.length,
//     },
//     {
//       title: "Amount",
//       dataIndex: "Amount",
//       sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: string) => (
//         <span
//           className={`badge ${
//             text === "Approved"
//               ? "badge-soft-success text-success border-success"
//               : text === " Returned"
//               ? "badge-soft-warning text-warning border-warning"
//               : "badge-soft-danger text-danger border-danger"
//           }  rounded  fw-medium border `}
//         >
//           {text}
//         </span>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//     {
//       title: "",
//       render: () => (
//         <div className="action-item">
//           <Link to="#" data-bs-toggle="dropdown">
//             <i className="ti ti-dots-vertical" />
//           </Link>
//           <ul className="dropdown-menu p-2">
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#edit_asset"
//               >
//                 Edit
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="#"
//                 className="dropdown-item d-flex align-items-center"
//                 data-bs-toggle="modal"
//                 data-bs-target="#delete_modal"
//               >
//                 Delete
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
//     },
//   ];
//   const [searchText, setSearchText] = useState<string>("");

//   const handleSearch = (value: string) => {
//     setSearchText(value);
//   };
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Start Page Header */}
//           <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0">
//                 Assets
//                 <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
//                   Asset List : 565
//                 </span>
//               </h4>
//             </div>
//             <div className="text-end d-flex">
//               {/* dropdown*/}
//               <div className="dropdown me-1">
//                 <Link
//                   to="#"
//                   className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
//                   data-bs-toggle="dropdown"
//                 >
//                   Export
//                   <i className="ti ti-chevron-down ms-2" />
//                 </Link>
//                 <ul className="dropdown-menu p-2">
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as PDF
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Download as Excel
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <Link
//                 to="#"
//                 className="btn btn-primary ms-2 fs-13 btn-md"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_asset"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add Asset
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/*  Start Filter */}
//           <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
//             <div className="d-flex align-items-center gap-2">
//               <div className="search-set mb-3">
//                 <div className="d-flex align-items-center flex-wrap gap-2">
//                   <div className="table-search d-flex align-items-center mb-0">
//                     <div className="search-input">
//                       <SearchInput value={searchText} onChange={handleSearch} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex right-content align-items-center flex-wrap mb-3">
//                 <div className="input-icon-start position-relative">
//                   <span className="input-icon-addon text-dark">
//                     <i className="ti ti-calendar-event" />
//                   </span>
//                   <PredefinedDatePicker />
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
//               <div className="dropdown me-2">
//                 <Link
//                   to="#"
//                   className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
//                   data-bs-toggle="dropdown"
//                   data-bs-auto-close="outside"
//                 >
//                   <i className="ti ti-filter text-gray-5 me-1" />
//                   Filters
//                 </Link>
//                 <div
//                   className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
//                   id="filter-dropdown"
//                 >
//                   <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
//                     <h4 className="mb-0 fw-bold">Filter</h4>
//                     <div className="d-flex align-items-center">
//                       <Link
//                         to="#"
//                         className="link-danger text-decoration-underline"
//                       >
//                         Clear All
//                       </Link>
//                     </div>
//                   </div>
//                   <FilterIndex />
//                 </div>
//               </div>
//               <div className="dropdown">
//                 <Link
//                   to="#"
//                   className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
//                   data-bs-toggle="dropdown"
//                 >
//                   <span className="me-1"> Sort By : </span> Recent
//                 </Link>
//                 <ul className="dropdown-menu  dropdown-menu-end p-2">
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Recent
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item rounded-1">
//                       Oldest
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/*  End Filter */}
//           {/*  Start Table */}
//           <div className="table-responsive">
//             <Datatable
//               columns={columns}
//               dataSource={data}
//               Selection={false}
//               searchText={searchText}
//             />
//           </div>
//           {/*  End Table */}
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

// export default Assets;



import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Select, DatePicker } from "antd";
import dayjs from "dayjs";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../core/common/dataTable";
import AssetModal, {type AssetFormData} from "./modals/modals";
import {
  getAssets,
  createAsset,
  updateAsset,
  deleteAsset,
} from "../../../../../api/assetService";

interface AssetData {
  key: string;
  _id?: string;
  assetId: string;
  assetName: string;
  assetUser: string;
  purchaseDate: string;
  purchaseFrom: string;
  manufacturer: string;
  model: string;
  serialNumber: string;
  supplier: string;
  condition: string;
  warranty: string;
  warrantyEnd: string;
  value: number;
  description: string;
  status: string;
}

const STATUS_OPTIONS = [
  { label: "Approved", value: "Approved" },
  { label: "Pending", value: "Pending" },
  { label: "Returned", value: "Returned" },
  { label: "Damaged", value: "Damaged" },
];

const Assets = () => {
  const [data, setData] = useState<AssetData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentAsset, setCurrentAsset] = useState<any>(null);

  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [filterDate, setFilterDate] = useState<any>(null);
  const [sortBy, setSortBy] = useState<"recent" | "oldest">("recent");

  const fetchAssets = async () => {
    try {
      setLoading(true);
      const response = await getAssets();
      if (response.success && response.data) {
        const formatted: AssetData[] = response.data.map((a: any) => ({
          key: a._id,
          _id: a._id,
          assetId: a.assetId || `AST${a._id.slice(-6).toUpperCase()}`,
          assetName: a.assetName,
          assetUser: a.assetUser,
          purchaseDate: a.purchaseDate || "-",
          purchaseFrom: a.purchaseFrom || "-",
          manufacturer: a.manufacturer || "-",
          model: a.model || "-",
          serialNumber: a.serialNumber || "-",
          supplier: a.supplier || "-",
          condition: a.condition || "-",
          warranty: a.warranty || "-",
          warrantyEnd: a.warrantyEnd || "-",
          value: a.value || 0,
          description: a.description || "",
          status: a.status,
        }));
        setData(formatted);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Fetch assets error:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAssets(); }, []);

  const applyFilters = () => {
    let filtered = [...data];
    if (filterStatus.length > 0) {
      filtered = filtered.filter(item => filterStatus.includes(item.status));
    }
    if (filterDate) {
      filtered = filtered.filter(item =>
        dayjs(item.purchaseDate, "DD-MM-YYYY").isSame(dayjs(filterDate), "day")
      );
    }
    if (sortBy === "oldest") filtered.reverse();
    return filtered;
  };

  const filteredData = applyFilters();

  const columns = [
    {
      title: "Asset ID",
      dataIndex: "assetId",
      render: (text: string) => (
        <span className="fw-semibold text-primary">{text}</span>
      ),
      sorter: (a: any, b: any) => a.assetId.localeCompare(b.assetId),
    },
    {
      title: "Asset Name",
      dataIndex: "assetName",
      sorter: (a: any, b: any) => a.assetName.localeCompare(b.assetName),
    },
    {
      title: "Asset User",
      dataIndex: "assetUser",
      sorter: (a: any, b: any) => a.assetUser.localeCompare(b.assetUser),
    },
    {
      title: "Purchase Date",
      dataIndex: "purchaseDate",
      sorter: (a: any, b: any) => a.purchaseDate.localeCompare(b.purchaseDate),
    },
    {
      title: "Warranty",
      dataIndex: "warranty",
      sorter: (a: any, b: any) => a.warranty.localeCompare(b.warranty),
    },
    {
      title: "Warranty End",
      dataIndex: "warrantyEnd",
      sorter: (a: any, b: any) => a.warrantyEnd.localeCompare(b.warrantyEnd),
    },
    {
      title: "Amount",
      dataIndex: "value",
      render: (val: number) => (
        <span className="fw-medium">${val.toLocaleString("en-IN")}</span>
      ),
      sorter: (a: any, b: any) => a.value - b.value,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string) => (
        <span className={`badge fw-medium border rounded px-2 py-1 ${text === "Approved"
            ? "badge-soft-success border-success"
            : text === "Returned"
              ? "badge-soft-warning border-warning"
              : text === "Damaged"
                ? "badge-soft-danger border-danger"
                : "badge-soft-secondary border-secondary"
          }`}>
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.status.localeCompare(b.status),
    },
    {
      title: "",
      render: (_: any, record: any) => (
        <div className="action-item p-2">
          <Link to="#" data-bs-toggle="dropdown" className="btn p-1 btn-white border">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <button
                className="dropdown-item d-flex align-items-center"
                type="button"
                onClick={() => { setCurrentAsset(record); setShowEditModal(true); }}
              >
                <i className="ti ti-edit me-2" /> Edit
              </button>
            </li>
            <li>
              <button
                className="dropdown-item d-flex align-items-center text-danger"
                type="button"
                onClick={() => { setCurrentAsset(record); setShowDeleteModal(true); }}
              >
                <i className="ti ti-trash me-2" /> Delete
              </button>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const handleAddAsset = async (formData: AssetFormData) => {
    try {
      const response = await createAsset({ ...formData, value: parseFloat(formData.value) });
      if (response.success) {
        await fetchAssets();
        setShowAddModal(false);
      } else {
        alert(response.message || "Failed to add asset.");
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "Error adding asset.");
    }
  };

  const handleEditAsset = async (formData: AssetFormData) => {
    if (currentAsset?._id) {
      try {
        const response = await updateAsset(currentAsset._id, { ...formData, value: parseFloat(formData.value) });
        if (response.success) {
          await fetchAssets();
          setShowEditModal(false);
          setCurrentAsset(null);
        } else {
          alert(response.message || "Failed to update asset.");
        }
      } catch (error: any) {
        alert(error?.response?.data?.message || "Error updating asset.");
      }
    }
  };

  const handleDeleteAsset = async () => {
    if (currentAsset?._id) {
      try {
        const response = await deleteAsset(currentAsset._id);
        if (response.success) {
          await fetchAssets();
          setShowDeleteModal(false);
          setCurrentAsset(null);
        } else {
          alert(response.message || "Failed to delete asset.");
        }
      } catch (error) {
        alert("Error deleting asset.");
      }
    }
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

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Assets
                <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
                  Total Assets : {data.length}
                </span>
              </h4>
            </div>
            <div className="text-end d-flex">
              <Link
                to="#"
                className="btn btn-primary ms-2 fs-13 btn-md"
                onClick={(e) => { e.preventDefault(); setShowAddModal(true); }}
              >
                <i className="ti ti-plus me-1" />
                Add Asset
              </Link>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="search-input">
                <SearchInput value={searchText} onChange={setSearchText} />
              </div>
            </div>

            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              {/* Filters */}
              <div className="dropdown me-2">
                <Link to="#"
                  className="btn btn-white fs-14 py-1 bg-white border d-inline-flex text-dark align-items-center"
                  data-bs-toggle="dropdown" data-bs-auto-close="outside">
                  <i className="ti ti-filter text-gray-5 me-1" />Filters
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0">
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header p-3">
                    <h5 className="mb-0 fw-bold">Filter</h5>
                    <Link to="#" className="link-danger text-decoration-underline"
                      onClick={(e) => { e.preventDefault(); setFilterStatus([]); setFilterDate(null); }}>
                      Clear All
                    </Link>
                  </div>
                  <div className="filter-body p-3 pb-0">
                    <div className="mb-3">
                      <label className="form-label">Purchase Date</label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{ format: "DD-MM-YYYY", type: "mask" }}
                          placeholder="DD-MM-YYYY"
                          value={filterDate}
                          onChange={setFilterDate}
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon"><i className="ti ti-calendar" /></span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <Select
                        mode="multiple" allowClear style={{ width: "100%" }}
                        placeholder="Please select"
                        value={filterStatus}
                        onChange={setFilterStatus}
                        options={STATUS_OPTIONS}
                      />
                    </div>
                  </div>
                  <div className="filter-footer d-flex align-items-center justify-content-end border-top p-3">
                    <button type="button" className="btn btn-primary btn-md">Filter</button>
                  </div>
                </div>
              </div>

              {/* Sort */}
              <div className="dropdown">
                <Link to="#"
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown">
                  <span className="me-1">Sort By : </span>
                  {sortBy === "recent" ? "Recent" : "Oldest"}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end p-2">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1"
                      onClick={(e) => { e.preventDefault(); setSortBy("recent"); }}>Recent</Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1"
                      onClick={(e) => { e.preventDefault(); setSortBy("oldest"); }}>Oldest</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={filteredData}
              Selection={false}
              searchText={searchText}
            />
          </div>
        </div>

        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved
          </p>
        </div>
      </div>

      <AssetModal
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        currentAsset={currentAsset}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => setShowDeleteModal(false)}
        onAdd={handleAddAsset}
        onEdit={handleEditAsset}
        onDelete={handleDeleteAsset}
      />
    </>
  );
};

export default Assets;