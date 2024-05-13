import { useParams } from "react-router-dom";
import { useOneBlog } from "../hooks/useBlogs";
import { BlogDesign } from "../components/BlogDesign";

export const Blog = () => {
  const { id } = useParams();
  // console.log(id);
  const { loading, blog } = useOneBlog({ id: id || "" });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <BlogDesign blog={blog} />
    </div>
  );
};
