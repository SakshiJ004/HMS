// import { Link } from "react-router";
// import { BlogCommentsData } from "../../../../../core/json/blogCommentsData";
// import Datatable from "../../../../../core/common/dataTable";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import Modals from "./modals/modals";

// const BlogComments = () => {
//   const data = BlogCommentsData;
//   const columns = [
//     {
//       title: "Customer",
//       dataIndex: "Customer",
//       render: (text: any, render: any) => (
//         <div className="d-flex align-items-center">
//           <Link
//             to="#"
//             className="avatar avatar-sm rounded-circle me-2 flex-shrink-0"
//           >
//             <ImageWithBasePath
//               src={`assets/img/users/${render.img}`}
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
//       sorter: (a: any, b: any) => a.Customer.length - b.Customer.length,
//     },
//     {
//       title: "Email",
//       dataIndex: "Email",
//       sorter: (a: any, b: any) => a.Email.length - b.Email.length,
//     },
//     {
//       title: "Comment",
//       dataIndex: "Comment",
//       render: (text: any) => <p className="truncate-text">{text}</p>,
//       sorter: (a: any, b: any) => a.Comment.length - b.Comment.length,
//     },
//     {
//       title: "Created On",
//       dataIndex: "Created_On",
//       sorter: (a: any, b: any) => a.Created_On.length - b.Created_On.length,
//     },
//     {
//       title: "Review",
//       dataIndex: "Review",
//       render: () => (
//         <div className="dropdown me-2">
//           <Link
//             to="#"
//             className="dropdown-toggle btn btn-white border fw-normal d-inline-flex align-items-center"
//             data-bs-toggle="dropdown"
//           >
//             Publish
//           </Link>
//           <ul className="dropdown-menu  dropdown-menu-end p-2">
//             <li>
//               <Link to="#" className="dropdown-item">
//                 Unpublish
//               </Link>
//             </li>
//             <li>
//               <Link to="#" className="dropdown-item">
//                 Publish
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ),
//       sorter: (a: any, b: any) => a.Review.length - b.Review.length,
//     },

//     {
//       title: "",
//       render: () => (
//         <div className="action-item">
//           <Link
//             to="#"
//             className="dropdown-item d-flex align-items-center"
//             data-bs-toggle="modal"
//             data-bs-target="#delete_categories"
//           >
//             <i className="ti ti-trash" />
//           </Link>
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
//           <div className="mb-3 pb-3 border-bottom">
//             <div className="d-flex align-items-center">
//               <h4 className="fw-bold mb-0 me-2">Comments</h4>
//               <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">
//                 Total Comments : 365
//               </span>
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

// export default BlogComments;


import { Link } from "react-router";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "./modals/modals";
import { useState, useEffect } from "react";
import { getAllComments, updateCommentStatus, deleteComment } from "../../../../../api/blogCommentService";
import { message } from "antd";

interface Comment {
  _id: string;
  customerName: string;
  email: string;
  comment: string;
  status: string;
  createdAt: string;
  blog?: {
    title: string;
  };
}

const BlogComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await getAllComments();

      if (response.success && response.data) {
        setComments(response.data);
      } else {
        setComments([]);
      }
    } catch (error) {
      console.error('Fetch comments error:', error);
      message.error('Failed to load comments');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (commentId: string, newStatus: string) => {
    try {
      const response = await updateCommentStatus(commentId, newStatus);

      if (response.success) {
        message.success(`Comment ${newStatus.toLowerCase()} successfully!`);
        fetchComments();
      } else {
        message.error(response.message || 'Failed to update status');
      }
    } catch (error) {
      console.error('Update status error:', error);
      message.error('Failed to update status');
    }
  };

  const handleDeleteClick = (commentId: string) => {
    setCommentToDelete(commentId);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = async () => {
    if (!commentToDelete) return;

    try {
      const response = await deleteComment(commentToDelete);

      if (response.success) {
        message.success('Comment deleted successfully!');
        fetchComments();
      } else {
        message.error(response.message || 'Failed to delete comment');
      }
    } catch (error) {
      console.error('Delete error:', error);
      message.error('Failed to delete comment');
    } finally {
      setDeleteModalVisible(false);
      setCommentToDelete(null);
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
      title: "Customer",
      dataIndex: "customerName",
      render: (text: string, record: Comment) => (
        <div className="d-flex align-items-center">
          <div className="avatar avatar-sm rounded-circle me-2 flex-shrink-0 bg-primary text-white d-flex align-items-center justify-content-center">
            {text.charAt(0).toUpperCase()}
          </div>
          <div>
            <h6 className="fs-14 fw-medium mb-0">
              <Link to="#">{text}</Link>
            </h6>
            <small className="text-muted">{record.email}</small>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.customerName.localeCompare(b.customerName),
    },
    {
      title: "Blog",
      dataIndex: "blog",
      render: (blog: any) => blog?.title || 'N/A',
      sorter: (a: any, b: any) => (a.blog?.title || '').localeCompare(b.blog?.title || ''),
    },
    {
      title: "Comment",
      dataIndex: "comment",
      render: (text: string) => (
        <p className="mb-0" style={{
          maxWidth: '300px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {text}
        </p>
      ),
    },
    {
      title: "Created On",
      dataIndex: "createdAt",
      render: (text: string) => formatDate(text),
      sorter: (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_: any, record: Comment) => (
        <div className="dropdown">
          <button
            className={`dropdown-toggle btn btn-sm fw-normal d-inline-flex align-items-center ${record.status === 'Published' ? 'btn-success' :
                record.status === 'Pending' ? 'btn-warning' :
                  'btn-secondary'
              }`}
            data-bs-toggle="dropdown"
          >
            {record.status}
          </button>
          <ul className="dropdown-menu dropdown-menu-end p-2">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleStatusChange(record._id, 'Published')}
              >
                Publish
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleStatusChange(record._id, 'Unpublished')}
              >
                Unpublish
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-warning"
                onClick={() => handleStatusChange(record._id, 'Pending')}
              >
                Mark Pending
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-danger"
                onClick={() => handleStatusChange(record._id, 'Spam')}
              >
                Mark as Spam
              </button>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "",
      render: (_: any, record: Comment) => (
        <div className="action-item">
          <button
            className="btn btn-sm btn-white border-0"
            onClick={() => handleDeleteClick(record._id)}
          >
            <i className="ti ti-trash text-danger" />
          </button>
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
          <div className="mb-3 pb-3 border-bottom">
            <div className="d-flex align-items-center">
              <h4 className="fw-bold mb-0 me-2">Comments</h4>
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">
                Total Comments: {comments.length}
              </span>
            </div>
          </div>

          {/* Table List */}
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={comments.map(c => ({ ...c, key: c._id }))}
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
        showDeleteModal={deleteModalVisible}
        onCloseDelete={() => setDeleteModalVisible(false)}
        onDelete={handleDeleteConfirm}
      />
    </>
  );
};

export default BlogComments;