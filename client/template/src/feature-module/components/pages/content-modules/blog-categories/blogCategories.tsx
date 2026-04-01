// import { Link } from "react-router";
// import Datatable from "../../../../../core/common/dataTable";
// import { BlogCategoriesData } from "../../../../../core/json/blogCategoriesData";
// import Modals from "./modals/modals";

// const BlogCategories = () => {
//   const data = BlogCategoriesData;
//   const columns = [
//     {
//       title: "Categories",
//       dataIndex: "Categories",
//       sorter: (a: any, b: any) => a.Categories.length - b.Categories.length,
//     },
//     {
//       title: "Date",
//       dataIndex: "Date",
//       sorter: (a: any, b: any) => a.Date.length - b.Date.length,
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
//           }  fs-13 fw-medium  border  py-1 px-2`}
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
//                   data-bs-target="#edit_categories"
//                 >
//                   Edit
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="dropdown-item d-flex align-items-center"
//                   data-bs-toggle="modal"
//                   data-bs-target="#delete_categories"
//                 >
//                   Delete
//                 </Link>
//               </li>
//             </ul>
//           </>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Status.length - b.Status.length,
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
//           <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
//             <div className="flex-grow-1">
//               <h4 className="fw-bold mb-0">Categories</h4>
//             </div>
//             <div className="text-end">
//               <Link
//                 to="#"
//                 className="btn btn-primary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_categories"
//               >
//                 <i className="ti ti-plus me-1" />
//                 Add New Categories
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

// export default BlogCategories;



import { Link } from "react-router";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "./modals/modals";
import { useState, useEffect } from "react";
import { getCategories, deleteCategory } from "../../../../../api/blogCategoryService";
import { message } from "antd";

interface Category {
  _id: string;
  name: string;
  status: string;
  createdAt: string;
}

const BlogCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  // Fetch categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await getCategories();

      if (response.success && response.data) {
        setCategories(response.data);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error('Fetch categories error:', error);
      message.error('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleEditClick = (category: Category) => {
    setCurrentCategory(category);
    setShowEditModal(true);
  };

  const handleDeleteClick = (category: Category) => {
    setCurrentCategory(category);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!currentCategory) return;

    try {
      const response = await deleteCategory(currentCategory._id);

      if (response.success) {
        message.success('Category deleted successfully!');
        fetchCategories();
      } else {
        message.error(response.message || 'Failed to delete category');
      }
    } catch (error) {
      console.error('Delete error:', error);
      message.error('Failed to delete category');
    } finally {
      setShowDeleteModal(false);
      setCurrentCategory(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const columns = [
    {
      title: "Categories",
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (text: string) => formatDate(text),
      sorter: (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string) => (
        <span
          className={`badge ${text === "Active"
              ? "badge-soft-success border-success"
              : "badge-soft-danger border-danger"
            } border fs-13 fw-medium py-1 px-2`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.status.localeCompare(b.status),
    },
    {
      title: "",
      render: (_: any, record: Category) => (
        <div className="action-item">
          <div className="dropdown">
            <button
              className="btn p-1 btn-white border"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-dots-vertical" />
            </button>
            <ul className="dropdown-menu p-2">
              <li>
                <button
                  className="dropdown-item d-flex align-items-center"
                  onClick={() => handleEditClick(record)}
                >
                  <i className="ti ti-edit me-2" />
                  Edit
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item d-flex align-items-center text-danger"
                  onClick={() => handleDeleteClick(record)}
                >
                  <i className="ti ti-trash me-2" />
                  Delete
                </button>
              </li>
            </ul>
          </div>
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
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Categories
                <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
                  Total: {categories.length}
                </span>
              </h4>
            </div>
            <div className="text-end">
              <button
                className="btn btn-primary"
                onClick={handleAddClick}
              >
                <i className="ti ti-plus me-1" />
                Add New Category
              </button>
            </div>
          </div>

          {/* Table List */}
          <div className="table-responsive border">
            <Datatable
              columns={columns}
              dataSource={categories.map(cat => ({ ...cat, key: cat._id }))}
              Selection={false}
              searchText={""}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
      </div>

      {/* Modals */}
      <Modals
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        currentCategory={currentCategory}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => setShowDeleteModal(false)}
        onAdd={() => {
          setShowAddModal(false);
          fetchCategories();
        }}
        onEdit={() => {
          setShowEditModal(false);
          fetchCategories();
        }}
        onDelete={handleDeleteConfirm}
      />
    </>
  );
};

export default BlogCategories;