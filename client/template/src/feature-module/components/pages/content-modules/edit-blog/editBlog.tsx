// import { Link } from "react-router";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import { Category } from "../../../../../core/common/selectOption";
// import DefaultEditor from "react-simple-wysiwyg";
// import TagInput from "../../../../../core/common/Taginput";
// import { useState } from "react";
// import ImageWithBasePath from "../../../../../core/imageWithBasePath";
// import { all_routes } from "../../../../routes/all_routes";

// const EditBlog = () => {
//   const [tags, setTags] = useState<string[]>(["Preventive Care"]);
//   const handleTagsChange = (newTags: string[]) => {
//     setTags(newTags);
//   };
//   return (
//     <>
//       {/* ========================
// 			Start Page Content
// 		========================= */}
//       <div className="page-wrapper">
//         {/* Start Content */}
//         <div className="content">
//           {/* start row */}
//           <div className="row">
//             <div className="col-lg-10 mx-auto">
//               <div className="mb-3">
//                 <h6 className="fw-semibold">
//                   <Link to={all_routes.blogs}>
//                     <i className="ti ti-chevron-left me-1" />
//                     Blogs
//                   </Link>
//                 </h6>
//               </div>
//               <div className="card">
//                 <div className="card-body">
//                   <div className="mb-3">
//                     <label className="form-label">Title</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="Health First: Your Guide to Better Living"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Category</label>
//                     <CommonSelect
//                       options={Category}
//                       className="select"
//                       defaultValue={Category[0]}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Content</label>
//                     <div className="editor">
//                       <DefaultEditor />
//                     </div>
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Tag</label>
//                     <TagInput
//                       initialTags={tags}
//                       onTagsChange={handleTagsChange}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Feature Image</label>
//                     <input className="form-control" type="file" />
//                   </div>
//                   <div className="mb-3">
//                     <div className="selected-img">
//                       <ImageWithBasePath
//                         src="assets/img/blogs/blog-img-01.jpg"
//                         alt="img"
//                         className="avatar avatar-xxl img-fluid"
//                       />
//                       <Link to="#" className="close-img">
//                         <i className="ti ti-circle-x-filled" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-end">
//                     <Link to="#" className="btn btn-light me-2">
//                       Cancel
//                     </Link>
//                     <Link to="#" className="btn btn-primary">
//                       Save Changes
//                     </Link>
//                   </div>
//                 </div>
//                 {/* end card body */}
//               </div>
//               {/* end card */}
//             </div>
//             {/* end col */}
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

// export default EditBlog;


import { Link, useNavigate, useParams } from "react-router";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import DefaultEditor from "react-simple-wysiwyg";
import TagInput from "../../../../../core/common/Taginput";
import { useState, useEffect } from "react";
import { all_routes } from "../../../../routes/all_routes";
import { getBlogById, updateBlog, type BlogPayload,  } from "../../../../../api/blogService";
import { message } from "antd";

const Category = [
  { value: 'Health Tips', label: 'Health Tips' },
  { value: 'Medical News', label: 'Medical News' },
  { value: 'Patient Stories', label: 'Patient Stories' },
  { value: 'Hospital Updates', label: 'Hospital Updates' },
  { value: 'Wellness', label: 'Wellness' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Research', label: 'Research' }
];

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get blog ID from URL
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "Health Tips",
    content: "",
    featureImage: "",
    status: "Published"
  });
  const [currentImage, setCurrentImage] = useState<string>("");

  // Fetch blog data on component mount
  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        message.error('Blog ID not found');
        navigate(all_routes.blogs);
        return;
      }

      try {
        setFetching(true);
        const response = await getBlogById(id);

        if (response.success && response.data) {
          const blog = response.data;
          setFormData({
            title: blog.title,
            category: blog.category,
            content: blog.content,
            featureImage: blog.featureImage || "",
            status: blog.status
          });
          setTags(blog.tags || []);
          setCurrentImage(blog.featureImage || "");
        } else {
          message.error('Blog not found');
          navigate(all_routes.blogs);
        }
      } catch (error) {
        console.error('Fetch blog error:', error);
        message.error('Failed to load blog');
        navigate(all_routes.blogs);
      } finally {
        setFetching(false);
      }
    };

    fetchBlog();
  }, [id, navigate]);

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData({ ...formData, featureImage: base64String });
        setCurrentImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, featureImage: "" });
    setCurrentImage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      message.error('Please enter blog title');
      return;
    }

    if (!formData.content.trim()) {
      message.error('Please enter blog content');
      return;
    }

    if (!id) {
      message.error('Blog ID not found');
      return;
    }

    setLoading(true);

    try {
      const blogData: BlogPayload = {
        title: formData.title,
        category: formData.category,
        content: formData.content,
        tags: tags,
        featureImage: formData.featureImage || undefined,
        status: formData.status
      };

      const response = await updateBlog(id, blogData);

      if (response.success) {
        message.success('Blog updated successfully!');
        navigate(all_routes.blogs);
      } else {
        message.error(response.message || 'Failed to update blog');
      }
    } catch (error: any) {
      console.error('Error:', error);
      message.error(error.message || 'Failed to update blog');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
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
    <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="mb-3">
              <h6 className="fw-semibold">
                <Link to={all_routes.blogs}>
                  <i className="ti ti-chevron-left me-1" />
                  Blogs
                </Link>
              </h6>
            </div>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Category <span className="text-danger">*</span>
                    </label>
                    <CommonSelect
                      options={Category}
                      className="select"
                      value={Category.find(cat => cat.value === formData.category)}
                      onChange={(option: any) => setFormData({ ...formData, category: option?.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Content <span className="text-danger">*</span>
                    </label>
                    <div className="editor">
                      <DefaultEditor
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Tags</label>
                    <TagInput
                      initialTags={tags}
                      onTagsChange={handleTagsChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Feature Image</label>
                    <input
                      className="form-control"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>

                  {currentImage && (
                    <div className="mb-3">
                      <div className="selected-img position-relative d-inline-block">
                        <img
                          src={currentImage}
                          alt="img"
                          className="avatar avatar-xxl img-fluid"
                        />
                        <Link
                          to="#"
                          className="close-img position-absolute top-0 end-0"
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemoveImage();
                          }}
                        >
                          <i className="ti ti-circle-x-filled" />
                        </Link>
                      </div>
                    </div>
                  )}

                  <div className="d-flex align-items-center justify-content-end">
                    <Link to={all_routes.blogs} className="btn btn-light me-2">
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  );
};

export default EditBlog;