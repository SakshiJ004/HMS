import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import { getBlogById } from "../../../../../api/blogService";
import { getCommentsByBlog, createComment, type CommentPayload,  } from "../../../../../api/blogCommentService";
import { message } from "antd";
import { all_routes } from "../../../../routes/all_routes";

interface Blog {
    _id: string;
    title: string;
    category: string;
    content: string;
    featureImage?: string;
    tags?: string[];
    author?: {
        fullName: string;
        profileImage?: string;
    };
    views: number;
    likes: number;
    createdAt: string;
}

interface Comment {
    _id: string;
    customerName: string;
    email: string;
    comment: string;
    createdAt: string;
    user?: {
        fullName: string;
        profileImage?: string;
    };
}

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // Comment form state
    const [commentForm, setCommentForm] = useState({
        name: "",
        email: "",
        comment: ""
    });

    useEffect(() => {
        if (id) {
            fetchBlogAndComments();
        }
    }, [id]);

    const fetchBlogAndComments = async () => {
        try {
            setLoading(true);

            // Fetch blog details
            const blogResponse = await getBlogById(id!);
            if (blogResponse.success && blogResponse.data) {
                setBlog(blogResponse.data);
            }

            // Fetch published comments
            const commentsResponse = await getCommentsByBlog(id!);
            if (commentsResponse.success && commentsResponse.data) {
                setComments(commentsResponse.data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            message.error('Failed to load blog');
        } finally {
            setLoading(false);
        }
    };

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!commentForm.name.trim() || !commentForm.email.trim() || !commentForm.comment.trim()) {
            message.error('Please fill all fields');
            return;
        }

        setSubmitting(true);

        try {
            const commentData: CommentPayload = {
                blogId: id!,
                customerName: commentForm.name,
                email: commentForm.email,
                comment: commentForm.comment
            };

            const response = await createComment(commentData);

            if (response.success) {
                message.success('Comment submitted successfully! It will be published after admin approval.');
                setCommentForm({ name: "", email: "", comment: "" });
                // Don't fetch comments immediately as they need admin approval
            } else {
                message.error(response.message || 'Failed to submit comment');
            }
        } catch (error: any) {
            console.error('Error:', error);
            message.error(error.message || 'Failed to submit comment');
        } finally {
            setSubmitting(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
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

    if (!blog) {
        return (
            <div className="page-wrapper">
                <div className="content">
                    <div className="text-center py-5">
                        <h4>Blog not found</h4>
                        <Link to={all_routes.blogs} className="btn btn-primary mt-3">
                            Back to Blogs
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <div className="content">
                {/* Back Button */}
                <div className="mb-3">
                    <Link to={all_routes.blogs} className="text-dark">
                        <i className="ti ti-chevron-left me-1" />
                        Back to Blogs
                    </Link>
                </div>

                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {/* Blog Content */}
                        <div className="card">
                            <div className="card-body">
                                {/* Feature Image */}
                                {blog.featureImage && (
                                    <img
                                        src={blog.featureImage}
                                        alt={blog.title}
                                        className="img-fluid rounded mb-4"
                                        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                                    />
                                )}

                                {/* Category Badge */}
                                <span className="badge badge-soft-primary border border-primary fs-13 py-1 px-2 mb-3">
                                    {blog.category}
                                </span>

                                {/* Title */}
                                <h2 className="fw-bold mb-3">{blog.title}</h2>

                                {/* Meta Info */}
                                <div className="d-flex align-items-center text-muted mb-4 pb-3 border-bottom">
                                    <div className="me-4">
                                        <i className="ti ti-user me-1" />
                                        {blog.author?.fullName || 'Admin'}
                                    </div>
                                    <div className="me-4">
                                        <i className="ti ti-calendar me-1" />
                                        {formatDate(blog.createdAt)}
                                    </div>
                                    <div className="me-4">
                                        <i className="ti ti-eye me-1" />
                                        {blog.views} views
                                    </div>
                                    <div>
                                        <i className="ti ti-message me-1" />
                                        {comments.length} comments
                                    </div>
                                </div>

                                {/* Blog Content */}
                                <div
                                    className="blog-content mb-4"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />

                                {/* Tags */}
                                {blog.tags && blog.tags.length > 0 && (
                                    <div className="mb-4">
                                        <strong className="me-2">Tags:</strong>
                                        {blog.tags.map((tag, index) => (
                                            <span key={index} className="badge bg-light text-dark border me-2 mb-2">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Comments Section */}
                        <div className="card mt-4">
                            <div className="card-body">
                                <h4 className="fw-bold mb-4">
                                    Comments ({comments.length})
                                </h4>

                                {/* Comment Form */}
                                <div className="mb-4 pb-4 border-bottom">
                                    <h5 className="fw-semibold mb-3">Leave a Comment</h5>
                                    <form onSubmit={handleCommentSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">
                                                    Name <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={commentForm.name}
                                                    onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">
                                                    Email <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    value={commentForm.email}
                                                    onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                                                    placeholder="Your email"
                                                />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-label">
                                                    Comment <span className="text-danger">*</span>
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows={4}
                                                    value={commentForm.comment}
                                                    onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                                                    placeholder="Write your comment here..."
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    disabled={submitting}
                                                >
                                                    {submitting ? 'Submitting...' : 'Post Comment'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* Comments List */}
                                <div className="comments-list">
                                    {comments.length === 0 ? (
                                        <p className="text-muted text-center py-4">
                                            No comments yet. Be the first to comment!
                                        </p>
                                    ) : (
                                        comments.map((comment) => (
                                            <div key={comment._id} className="mb-4 pb-4 border-bottom">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-md rounded-circle bg-primary text-white me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                                                        {comment.customerName.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="fw-semibold mb-1">{comment.customerName}</h6>
                                                        <small className="text-muted">
                                                            {formatDate(comment.createdAt)}
                                                        </small>
                                                        <p className="mt-2 mb-0">{comment.comment}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
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
    );
};

export default BlogDetails;