
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  /**Function TO handle Delete blog--> pass functions as props. */
  //-- we pass this function as props because directly editing state data in compoent is not good. instead ue use useState methods to update state.
  // const handleDelete = (id) => {
  //   //console.log(id);
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  /**Function TO handle Delete blog EMD */

  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="ALL BLOGS !!"
          // handleDelete={handleDelete}
        />
      )}
      {/* <button
        onClick={() => {
          setName("pabin");
        }}
      >
        change name
      </button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
