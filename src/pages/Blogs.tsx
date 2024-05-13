import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log(blogs);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className=" ">
          {blogs?.map((data) => (
            <BlogCard
              id={data.id}
              authorName={data?.author?.name || "Anonymus"}
              title={data.title}
              content={data.content}
              publishedDate={"12-12-12"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
