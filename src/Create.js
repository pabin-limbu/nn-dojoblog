import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("sachin");
  const [ispending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new Blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
          {" "}
        </textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="pabin">Pabin</option>
          <option value="sachin">Sachin</option>
        </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <p>addign blog...</p>}
      </form>
    </div>
  );
}

export default Create;
