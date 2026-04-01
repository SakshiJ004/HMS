// import { Link } from "react-router";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { CitiesData } from "../../../../../core/json/citiesData";
// import Datatable from "../../../../../core/common/dataTable";
// import Modals from "./modals/modals";

// const Cities = () => {
//   const data = CitiesData;
//   const columns = [
//     {
//       title: "Country Code",
//       dataIndex: "Country_Code",
//       sorter: (a: any, b: any) => a.Customer.length - b.Customer.length,
//     },
//     {
//       title: "Country",
//       dataIndex: "Country",
//       render: (text: any, render: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to="#"
//             className="avatar avatar-sm rounded-circle me-2 flex-shrink-0"
//           >
//             <ImageWithBasePath
//               src={`assets/img/flags/${render.img}`}
//               className="rounded-circle"
//               alt="img"
//             />
//           </Link>
//           <div>
//             <h6 className="fs-14 fw-medium mb-0">
//               <Link to="#">{text}</Link>
//             </h6>
//           </div>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Country.length - b.Country.length,
//     },

//     {
//       title: "State",
//       dataIndex: "State",
//       sorter: (a: any, b: any) => a.State.length - b.State.length,
//     },
//     {
//       title: "City",
//       dataIndex: "City",
//       sorter: (a: any, b: any) => a.City.length - b.City.length,
//     },
//     {
//       title: "Status",
//       dataIndex: "Status",
//       render: (text: string) => (
//         <span
//           className={`badge ${
//             text === "Active"
//               ? "bg-soft-success text-success border-success"
//               : "bg-soft-danger text-danger border-danger"
//           } fs-13 fw-medium border py-1 px-2`}
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
//           <>
//             <Link
//               to="#"
//               data-bs-toggle="dropdown"
//               className="btn p-1 btn-white border"
//             >
//               <i className="ti ti-dots-vertical" />
//             </Link>
//             <ul className="dropdown-menu p-2">
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="modal"
//                   data-bs-target="#edit_countries"
//                 >
//                   Edit
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="modal"
//                   data-bs-target="#delete_countries"
//                 >
//                   Delete
//                 </Link>
//               </li>
//             </ul>
//           </>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.action.length - b.action.length,
//     },
//   ];
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* Page Header */}
//           <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
//             <div className="d-flex align-items-center">
//               <h4 className="fw-bold mb-0 me-2">City</h4>
//               <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">
//                 Total City : 365
//               </span>
//             </div>
//             <div className="text-end">
//               <Link
//                 to="#"
//                 className="btn btn-primary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_countries"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add New City
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/* Table List */}
//           <div className="table-responsive">
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

// export default Cities;


import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import Datatable from "../../../../../core/common/dataTable";
import {
  getCities,
  deleteCity,
  type ICity,
  type Pagination,
} from "../../../../../api/contentLocationService";
import { AddCityModal, EditCityModal, DeleteCityModal } from "./modals/modals";

// ─── Pagination ───────────────────────────────────────────────────────────────
const PaginationBar = ({
  pagination,
  onPageChange,
}: {
  pagination: Pagination;
  onPageChange: (p: number) => void;
}) => {
  if (pagination.pages <= 1) return null;
  const pages = Array.from({ length: pagination.pages }, (_, i) => i + 1);
  return (
    <div className="d-flex align-items-center justify-content-between px-3 py-2 border-top">
      <small className="text-muted">
        Showing {(pagination.page - 1) * pagination.limit + 1}–
        {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
        {pagination.total}
      </small>
      <nav>
        <ul className="pagination pagination-sm mb-0">
          <li className={`page-item ${pagination.page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => onPageChange(pagination.page - 1)}>‹</button>
          </li>
          {pages.map((p) => (
            <li key={p} className={`page-item ${p === pagination.page ? "active" : ""}`}>
              <button className="page-link" onClick={() => onPageChange(p)}>{p}</button>
            </li>
          ))}
          <li className={`page-item ${pagination.page === pagination.pages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => onPageChange(pagination.page + 1)}>›</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const Cities = () => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ total: 0, page: 1, limit: 10, pages: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [showAdd, setShowAdd] = useState(false);
  const [editTarget, setEditTarget] = useState<ICity | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchCities = useCallback(async (page = 1) => {
    try {
      setLoading(true); setError("");
      const res = await getCities({ page, limit: 10, search: searchText || undefined });
      setCities(res.data);
      setPagination(res.pagination);
    } catch { setError("Failed to load cities."); }
    finally { setLoading(false); }
  }, [searchText]);

  useEffect(() => { fetchCities(1); setCurrentPage(1); }, [searchText]);
  useEffect(() => { fetchCities(currentPage); }, [currentPage]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try { await deleteCity(deleteTarget); setDeleteTarget(null); fetchCities(currentPage); }
    catch { alert("Failed to delete."); }
    finally { setDeleteLoading(false); }
  };

  const columns = [
    {
      title: "Country Code",
      dataIndex: "country",
      render: (country: ICity["country"]) => (
        <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2">
          {country?.countryCode ?? "-"}
        </span>
      ),
      sorter: (a: any, b: any) => (a.country?.countryCode ?? "").localeCompare(b.country?.countryCode ?? ""),
    },
    {
      title: "Country",
      dataIndex: "country",
      render: (country: ICity["country"]) => (
        <div className="d-flex align-items-center">
          {country?.flag ? (
            <span className="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
              <img src={`assets/img/flags/${country.flag}`} className="rounded-circle" alt={country.name}
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
            </span>
          ) : (
            <span className="avatar avatar-sm rounded-circle me-2 flex-shrink-0 bg-primary d-flex align-items-center justify-content-center">
              <span className="text-white fw-bold fs-12">{(country?.name ?? "?")[0]}</span>
            </span>
          )}
          <h6 className="fs-14 fw-medium mb-0">{country?.name ?? "-"}</h6>
        </div>
      ),
      sorter: (a: any, b: any) => (a.country?.name ?? "").localeCompare(b.country?.name ?? ""),
    },
    {
      title: "State",
      dataIndex: "state",
      render: (state: ICity["state"]) => <span>{state?.name ?? "-"}</span>,
      sorter: (a: any, b: any) => (a.state?.name ?? "").localeCompare(b.state?.name ?? ""),
    },
    {
      title: "City",
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string) => (
        <span className={`badge fs-13 fw-medium border py-1 px-2 ${text === "Active" ? "bg-soft-success text-success border-success" : "bg-soft-danger text-danger border-danger"}`}>
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.status.localeCompare(b.status),
    },
    {
      title: "",
      render: (_: any, record: ICity) => (
        <div className="action-item">
          <Link to="#" data-bs-toggle="dropdown" className="btn p-1 btn-white border">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li><button className="dropdown-item d-flex align-items-center" onClick={() => setEditTarget(record)}><i className="ti ti-edit me-2" />Edit</button></li>
            <li><button className="dropdown-item d-flex align-items-center text-danger" onClick={() => setDeleteTarget(record._id)}><i className="ti ti-trash me-2" />Delete</button></li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
            <div className="d-flex align-items-center">
              <h4 className="fw-bold mb-0 me-2">Cities</h4>
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">Total : {pagination.total}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="input-group" style={{ width: 220 }}>
                <span className="input-group-text"><i className="ti ti-search" /></span>
                <input type="text" className="form-control" placeholder="Search city..."
                  value={searchText} onChange={(e) => setSearchText(e.target.value)} />
              </div>
              <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
                <i className="ti ti-plus me-1" />Add New City
              </button>
            </div>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          {loading ? (
            <div className="text-center py-5"><div className="spinner-border text-primary" /></div>
          ) : (
            <>
              <div className="table-responsive border bg-white">
                <Datatable columns={columns} dataSource={cities.map((c) => ({ ...c, key: c._id }))} Selection={false} searchText={""} />
              </div>
              <PaginationBar pagination={pagination} onPageChange={(p) => setCurrentPage(p)} />
            </>
          )}
        </div>
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
        </div>
      </div>

      <AddCityModal show={showAdd} onClose={() => setShowAdd(false)} onSaved={() => fetchCities(1)} />
      <EditCityModal show={!!editTarget} city={editTarget} onClose={() => setEditTarget(null)} onSaved={() => fetchCities(currentPage)} />
      <DeleteCityModal show={!!deleteTarget} onClose={() => setDeleteTarget(null)} onConfirm={handleDelete} loading={deleteLoading} />
    </>
  );
};

export default Cities;