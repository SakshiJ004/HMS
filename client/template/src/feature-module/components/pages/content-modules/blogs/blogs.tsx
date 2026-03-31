// import { Link } from "react-router";
// import { all_routes } from "../../../../routes/all_routes";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";

// const Blogs = () => {
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
//               <h4 className="fw-bold mb-0">Blogs</h4>
//             </div>
//             <div className="text-end">
//               <Link to={all_routes.addBlogs} className="btn btn-primary">
//                 <i className="ti ti-plus me-1" /> New Blog
//               </Link>
//             </div>
//           </div>
//           {/* End Page Header */}
//           {/* start row */}
//           <div className="row">
//             <div className="col-md-6 col-lg-4">
//               <div className="card blog-item">
//                 <div className="card-body p-0">
//                   <div className="position-relative rounded-top overflow-hidden">
//                     <Link to={all_routes.blogDetails} className="blog-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-01.jpg"
//                         alt="img"
//                         className="img-fluid rounded-top"
//                       />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
//                     >
//                       <i className="ti ti-trash" />
//                     </Link>
//                     <Link
//                       to={all_routes.editBlogs}
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
//                     >
//                       <i className="ti ti-edit" />
//                     </Link>
//                   </div>
//                   <div className="p-3">
//                     <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
//                       Preventive Care
//                     </span>
//                     <h6 className="fw-bold">
//                       <Link to={all_routes.blogDetails}>
//                         Health First: Your Guide to Better Living
//                       </Link>
//                     </h6>
//                     <p className="truncate-2-lines mb-0">
//                       Preventive care refers to medical services that help you
//                       avoid illness, detect health issues early, and maintain
//                       overall wellness
//                     </p>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-md-6 col-lg-4">
//               <div className="card blog-item">
//                 <div className="card-body p-0">
//                   <div className="position-relative rounded-top overflow-hidden">
//                     <Link to={all_routes.blogDetails} className="blog-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-02.jpg"
//                         alt="img"
//                         className="img-fluid rounded-top"
//                       />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
//                     >
//                       <i className="ti ti-trash" />
//                     </Link>
//                     <Link
//                       to={all_routes.editBlogs}
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
//                     >
//                       <i className="ti ti-edit" />
//                     </Link>
//                   </div>
//                   <div className="p-3">
//                     <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
//                       Nutrition
//                     </span>
//                     <h6 className="fw-bold">
//                       <Link to={all_routes.blogDetails}>
//                         Balance Your Plate, Boost Your Life
//                       </Link>
//                     </h6>
//                     <p className="truncate-2-lines mb-0">
//                       Fuel your body, move with purpose—wellness starts with
//                       what you eat and how you live
//                     </p>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-md-6 col-lg-4">
//               <div className="card blog-item">
//                 <div className="card-body p-0">
//                   <div className="position-relative rounded-top overflow-hidden">
//                     <Link to={all_routes.blogDetails} className="blog-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-04.jpg"
//                         alt="img"
//                         className="img-fluid rounded-top"
//                       />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
//                     >
//                       <i className="ti ti-trash" />
//                     </Link>
//                     <Link
//                       to={all_routes.editBlogs}
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
//                     >
//                       <i className="ti ti-edit" />
//                     </Link>
//                   </div>
//                   <div className="p-3">
//                     <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
//                       Health Tips
//                     </span>
//                     <h6 className="fw-bold">
//                       <Link to={all_routes.blogDetails}>
//                         Small Daily Habits, Big Health Benefits
//                       </Link>
//                     </h6>
//                     <p className="truncate-2-lines mb-0">
//                       Add a fruit or veggie to every meal.Don’t skip
//                       breakfast—it fuels your day.Go to bed and wake up at the
//                       same time daily
//                     </p>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-md-6 col-lg-4">
//               <div className="card blog-item">
//                 <div className="card-body p-0">
//                   <div className="position-relative rounded-top overflow-hidden">
//                     <Link to={all_routes.blogDetails} className="blog-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-03.jpg"
//                         alt="img"
//                         className="img-fluid rounded-top"
//                       />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
//                     >
//                       <i className="ti ti-trash" />
//                     </Link>
//                     <Link
//                       to={all_routes.editBlogs}
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
//                     >
//                       <i className="ti ti-edit" />
//                     </Link>
//                   </div>
//                   <div className="p-3">
//                     <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
//                       Sleep
//                     </span>
//                     <h6 className="fw-bold">
//                       <Link to={all_routes.blogDetails}>
//                         Rest Your Body, Calm Your Mind
//                       </Link>
//                     </h6>
//                     <p className="truncate-2-lines mb-0">
//                       Avoid screens at least 1 hour before bedtime.Take 5-minute
//                       deep breathing breaks throughout your day.
//                     </p>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-md-6 col-lg-4">
//               <div className="card blog-item">
//                 <div className="card-body p-0">
//                   <div className="position-relative rounded-top overflow-hidden">
//                     <Link to={all_routes.blogDetails} className="blog-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-05.jpg"
//                         alt="img"
//                         className="img-fluid rounded-top"
//                       />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
//                     >
//                       <i className="ti ti-trash" />
//                     </Link>
//                     <Link
//                       to={all_routes.editBlogs}
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
//                     >
//                       <i className="ti ti-edit" />
//                     </Link>
//                   </div>
//                   <div className="p-3">
//                     <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
//                       Anxiety
//                     </span>
//                     <h6 className="fw-bold">
//                       <Link to={all_routes.blogDetails}>
//                         When the Mind Feels Heavy
//                       </Link>
//                     </h6>
//                     <p className="truncate-2-lines mb-0">
//                       Move your body for at least 30 minutes a day.Practice deep
//                       breathing or mindfulness to manage stress.
//                     </p>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-md-6 col-lg-4">
//               <div className="card blog-item">
//                 <div className="card-body p-0">
//                   <div className="position-relative rounded-top overflow-hidden">
//                     <Link to={all_routes.blogDetails} className="blog-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-06.jpg"
//                         alt="img"
//                         className="img-fluid rounded-top"
//                       />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
//                     >
//                       <i className="ti ti-trash" />
//                     </Link>
//                     <Link
//                       to={all_routes.editBlogs}
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
//                     >
//                       <i className="ti ti-edit" />
//                     </Link>
//                   </div>
//                   <div className="p-3">
//                     <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
//                       Therapy
//                     </span>
//                     <h6 className="fw-bold">
//                       <Link to={all_routes.blogDetails}>
//                         Therapy Isn’t Just for Crisis
//                       </Link>
//                     </h6>
//                     <p className="truncate-2-lines mb-0">
//                       Healing isn't linear—progress takes time and
//                       patience.Therapy gives you tools; growth comes from using
//                       them.
//                     </p>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-md-6 col-lg-4">
//               <div className="card blog-item">
//                 <div className="card-body p-0">
//                   <div className="position-relative rounded-top overflow-hidden">
//                     <Link to={all_routes.blogDetails} className="blog-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-07.jpg"
//                         alt="img"
//                         className="img-fluid rounded-top"
//                       />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
//                     >
//                       <i className="ti ti-trash" />
//                     </Link>
//                     <Link
//                       to={all_routes.editBlogs}
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
//                     >
//                       <i className="ti ti-edit" />
//                     </Link>
//                   </div>
//                   <div className="p-3">
//                     <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
//                       Stay Well
//                     </span>
//                     <h6 className="fw-bold">
//                       <Link to={all_routes.blogDetails}>
//                         Pediatrics &amp; Family Health
//                       </Link>
//                     </h6>
//                     <p className="truncate-2-lines mb-0">
//                       Vaccines for Kids: What Parents Should Know.Screen Time
//                       and Children’s Health: Striking the Balance
//                     </p>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-md-6 col-lg-4">
//               <div className="card blog-item">
//                 <div className="card-body p-0">
//                   <div className="position-relative rounded-top overflow-hidden">
//                     <Link to={all_routes.blogDetails} className="blog-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-08.jpg"
//                         alt="img"
//                         className="img-fluid rounded-top"
//                       />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
//                     >
//                       <i className="ti ti-trash" />
//                     </Link>
//                     <Link
//                       to={all_routes.editBlogs}
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
//                     >
//                       <i className="ti ti-edit" />
//                     </Link>
//                   </div>
//                   <div className="p-3">
//                     <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
//                       Health First
//                     </span>
//                     <h6 className="fw-bold">
//                       <Link to={all_routes.blogDetails}>
//                         Health First: Your Guide to Better Living
//                       </Link>
//                     </h6>
//                     <p className="truncate-2-lines mb-0">
//                       Move More, Live More: Exercise as a Prescription.Sleep,
//                       Stress, and Sugar: The Silent Health Killers
//                     </p>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-md-6 col-lg-4">
//               <div className="card blog-item">
//                 <div className="card-body p-0">
//                   <div className="position-relative rounded-top overflow-hidden">
//                     <Link to={all_routes.blogDetails} className="blog-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-09.jpg"
//                         alt="img"
//                         className="img-fluid rounded-top"
//                       />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
//                     >
//                       <i className="ti ti-trash" />
//                     </Link>
//                     <Link
//                       to={all_routes.editBlogs}
//                       className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
//                     >
//                       <i className="ti ti-edit" />
//                     </Link>
//                   </div>
//                   <div className="p-3">
//                     <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
//                       Self-Care
//                     </span>
//                     <h6 className="fw-bold">
//                       <Link to={all_routes.blogDetails}>
//                         Mindful Moments, Meaningful Life
//                       </Link>
//                     </h6>
//                     <p className="truncate-2-lines mb-0">
//                       Start your day with 2 minutes of silence. Taking a walk
//                       without your phone. Getting enough sleep
//                     </p>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
//             <div className="col-lg-12">
//               <div className="d-flex align-items-center justify-content-center">
//                 <Link
//                   to="#"
//                   className="btn btn-outline-white bg-white d-inline-flex align-items-center"
//                 >
//                   Load More <i className="ti ti-loader-2 ms-1" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* end row */}
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
//     </>
//   );
// };

// export default Blogs;



import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { useState, useEffect } from "react";
import { getBlogs, deleteBlog } from "../../../../../api/blogService";
import { message, Modal } from "antd";

interface Blog {
  _id: string;
  title: string;
  category: string;
  content: string;
  featureImage?: string;
  tags?: string[];
  author?: {
    fullName: string;
  };
  createdAt: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await getBlogs();

      if (response.success && response.data) {
        setBlogs(response.data);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.error('Fetch blogs error:', error);
      message.error('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (blogId: string) => {
    setBlogToDelete(blogId);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = async () => {
    if (!blogToDelete) return;

    try {
      const response = await deleteBlog(blogToDelete);

      if (response.success) {
        message.success('Blog deleted successfully!');
        fetchBlogs(); // Refresh list
      } else {
        message.error(response.message || 'Failed to delete blog');
      }
    } catch (error) {
      console.error('Delete error:', error);
      message.error('Failed to delete blog');
    } finally {
      setDeleteModalVisible(false);
      setBlogToDelete(null);
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    const strippedText = text.replace(/<[^>]*>/g, ''); // Remove HTML tags
    return strippedText.length > maxLength
      ? strippedText.substring(0, maxLength) + '...'
      : strippedText;
  };

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
                Blogs
                <span className="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
                  Total: {blogs.length}
                </span>
              </h4>
            </div>
            <div className="text-end">
              <Link to={all_routes.addBlogs} className="btn btn-primary">
                <i className="ti ti-plus me-1" /> New Blog
              </Link>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="row">
            {blogs.length === 0 ? (
              <div className="col-12">
                <div className="card">
                  <div className="card-body text-center py-5">
                    <p className="text-muted mb-0">No blogs found. Create your first blog!</p>
                  </div>
                </div>
              </div>
            ) : (
              blogs.map((blog) => (
                <div className="col-md-6 col-lg-4" key={blog._id}>
                  <div className="card blog-item">
                    <div className="card-body p-0">
                      <div className="position-relative rounded-top overflow-hidden">
                        <Link to={`${all_routes.blogDetails}/${blog._id}`} className="blog-img">
                          <img
                            src={blog.featureImage || "assets/img/blogs/blog-placeholder.jpg"}
                            alt={blog.title}
                            className="img-fluid rounded-top"
                            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                          />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-delete"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeleteClick(blog._id);
                          }}
                        >
                          <i className="ti ti-trash" />
                        </Link>
                        <Link
                          to={`${all_routes.editBlogs}/${blog._id}`}
                          className="btn btn-sm d-inline-flex align-items-center justify-content-center p-2 bg-white rounded-2 blog-edit"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                      </div>
                      <div className="p-3">
                        <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
                          {blog.category}
                        </span>
                        <h6 className="fw-bold">
                          <Link to={`${all_routes.blogDetails}/${blog._id}`}>
                            {blog.title}
                          </Link>
                        </h6>
                        <p className="truncate-2-lines mb-0">
                          {truncateText(blog.content, 120)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
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

      {/* Delete Confirmation Modal */}
      <Modal
        title="Delete Blog"
        open={deleteModalVisible}
        onOk={handleDeleteConfirm}
        onCancel={() => setDeleteModalVisible(false)}
        okText="Yes, Delete"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete this blog? This action cannot be undone.</p>
      </Modal>
    </>
  );
};

export default Blogs;