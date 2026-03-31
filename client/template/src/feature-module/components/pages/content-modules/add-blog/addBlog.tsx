// import { Link } from "react-router";
// import { Category } from "../../../../../core/common/selectOption";
// import CommonSelect from "../../../../../core/common/common-select/commonSelect";
// import { useState } from "react";
// import TagInput from "../../../../../core/common/Taginput";
// import { all_routes } from "../../../../routes/all_routes";
// import DefaultEditor from "react-simple-wysiwyg";

// const AddBlog = () => {
//   const [tags, setTags] = useState<string[]>();
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
//                     <input type="text" className="form-control" />
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
//                   <div className="d-flex align-items-center justify-content-end">
//                     <Link to="#" className="btn btn-light me-2">
//                       Cancel
//                     </Link>
//                     <Link to="#" className="btn btn-primary">
//                       Add Blog
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

// export default AddBlog;



import { Link, useNavigate } from "react-router";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { useState } from "react";
import TagInput from "../../../../../core/common/Taginput";
import { all_routes } from "../../../../routes/all_routes";
import DefaultEditor from "react-simple-wysiwyg";
import { createBlog, type BlogPayload } from "../../../../../api/blogService"; // ✅ Import BlogPayload type
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

const AddBlog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "Health Tips",
    content: "",
    featureImage: "",
    status: "Published"
  });

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, featureImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
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

    setLoading(true);

    try {
      // ✅ FIX: Properly type the blogData object
      const blogData: BlogPayload = {
        title: formData.title,
        category: formData.category,
        content: formData.content,
        tags: tags,
        featureImage: formData.featureImage || undefined, // ✅ Use undefined instead of null
        status: formData.status
      };

      const response = await createBlog(blogData);

      if (response.success) {
        message.success('Blog created successfully!');
        navigate(all_routes.blogs); // ✅ Redirect to blogs page
      } else {
        message.error(response.message || 'Failed to create blog');
      }
    } catch (error: any) {
      console.error('Error:', error);
      message.error(error.message || 'Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

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
                      placeholder="Enter blog title"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Category <span className="text-danger">*</span>
                    </label>
                    <CommonSelect
                      options={Category}
                      className="select"
                      defaultValue={Category[0]}
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
                    {formData.featureImage && (
                      <img
                        src={formData.featureImage}
                        alt="Preview"
                        className="mt-2"
                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                      />
                    )}
                  </div>

                  <div className="d-flex align-items-center justify-content-end">
                    <Link to={all_routes.blogs} className="btn btn-light me-2">
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Creating...' : 'Add Blog'}
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

export default AddBlog;