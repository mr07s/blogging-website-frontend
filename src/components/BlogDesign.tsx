import { BlogType } from "../hooks/useBlogs";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const BlogDesign = ({ blog }: { blog: BlogType }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-4">Posted on</div>
            <div className="text-xl font-semibold pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4 ">
            <div className="text-slate-500">Author</div>
            <div className="flex ">
              <div className="pr-2 flex  items-center ">
                <Avatar size="big" name={blog.author.name} />
              </div>
              <div>
                <div className="text-xl font-bold pt-2 ">
                  {blog.author.name || "Anonymus"}
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, consequatur! Maxime aut et, deserunt minus ducimus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
