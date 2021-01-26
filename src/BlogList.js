import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  return (
    <div>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>

          {/* <button onClick={() => props.handleDelete(blog.id)}>
            delete blog
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;

/**api end point for blogs
 * /blog GET fetch all blogs
 * /blogs/{id} GET fetch single blog
 * /blogs POST add new blog
 * /blogs/{id} DELETE delete a blog
 */
