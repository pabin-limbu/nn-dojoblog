import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
function BlogDetails() {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  return (
    <div className="blog-details">
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            {" "}
            written by{" "}
            <span style={{ color: "tomato", fontSize: "22px" }}>
              {blog.author}
            </span>
          </p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
