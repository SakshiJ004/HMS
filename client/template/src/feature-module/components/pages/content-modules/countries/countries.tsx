// import { Link } from "react-router";
// import { CountriesData } from "../../../../../core/json/countriesData";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import Datatable from "../../../../../core/common/dataTable";
// import Modals from "./modals/modals";

// const Countries = () => {
//   const data = CountriesData;
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
//               <h4 className="fw-bold mb-0 me-2">Countries</h4>
//               <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">
//                 Total States : 365
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
//                 Add New Countries
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/* Table List */}
//           <div className="table-responsive border bg-white">
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

// export default Countries;

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import Datatable from "../../../../../core/common/dataTable";
import {
  getCountries,
  deleteCountry,
  type ICountry,
  type Pagination,
} from "../../../../../api/contentLocationService";
import { AddCountryModal, EditCountryModal, DeleteCountryModal } from "./modals/modals";

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
        {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
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
const Countries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ total: 0, page: 1, limit: 10, pages: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [showAdd, setShowAdd] = useState(false);
  const [editTarget, setEditTarget] = useState<ICountry | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchCountries = useCallback(async (page = 1) => {
    try {
      setLoading(true); setError("");
      const res = await getCountries({ page, limit: 10, search: searchText || undefined });
      setCountries(res.data);
      setPagination(res.pagination);
    } catch { setError("Failed to load countries."); }
    finally { setLoading(false); }
  }, [searchText]);

  useEffect(() => { fetchCountries(1); setCurrentPage(1); }, [searchText]);
  useEffect(() => { fetchCountries(currentPage); }, [currentPage]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try { await deleteCountry(deleteTarget); setDeleteTarget(null); fetchCountries(currentPage); }
    catch { alert("Failed to delete."); }
    finally { setDeleteLoading(false); }
  };

  const columns = [
    {
      title: "Country Code",
      dataIndex: "countryCode",
      render: (text: string) => (
        <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2">{text}</span>
      ),
      sorter: (a: any, b: any) => a.countryCode.localeCompare(b.countryCode),
    },
    {
      title: "Country",
      dataIndex: "name",
      render: (text: string, record: ICountry) => (
        <div className="d-flex align-items-center">
          {record.flag ? (
            <span className="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
              <img src={`assets/img/flags/${record.flag}`} className="rounded-circle" alt={text}
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
            </span>
          ) : (
            <span className="avatar avatar-sm rounded-circle me-2 flex-shrink-0 bg-primary d-flex align-items-center justify-content-center">
              <span className="text-white fw-bold fs-12">{text[0]}</span>
            </span>
          )}
          <h6 className="fs-14 fw-medium mb-0">{text}</h6>
        </div>
      ),
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
      render: (_: any, record: ICountry) => (
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
              <h4 className="fw-bold mb-0 me-2">Countries</h4>
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">Total : {pagination.total}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="input-group" style={{ width: 220 }}>
                <span className="input-group-text"><i className="ti ti-search" /></span>
                <input type="text" className="form-control" placeholder="Search country..."
                  value={searchText} onChange={(e) => setSearchText(e.target.value)} />
              </div>
              <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
                <i className="ti ti-plus me-1" />Add New Country
              </button>
            </div>
          </div>

          {error && <div className="alert alert-danger">{error} <button className="btn btn-sm btn-link" onClick={() => fetchCountries(currentPage)}>Retry</button></div>}

          {loading ? (
            <div className="text-center py-5"><div className="spinner-border text-primary" /></div>
          ) : (
            <>
              <div className="table-responsive border bg-white">
                <Datatable columns={columns} dataSource={countries.map((c) => ({ ...c, key: c._id }))} Selection={false} searchText={""} />
              </div>
              <PaginationBar pagination={pagination} onPageChange={(p) => setCurrentPage(p)} />
            </>
          )}
        </div>
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">2025 © <Link to="#" className="link-primary">Preclinic</Link>, All Rights Reserved</p>
        </div>
      </div>

      <AddCountryModal show={showAdd} onClose={() => setShowAdd(false)} onSaved={() => fetchCountries(1)} />
      <EditCountryModal show={!!editTarget} country={editTarget} onClose={() => setEditTarget(null)} onSaved={() => fetchCountries(currentPage)} />
      <DeleteCountryModal show={!!deleteTarget} onClose={() => setDeleteTarget(null)} onConfirm={handleDelete} loading={deleteLoading} />
    </>
  );
};

export default Countries;