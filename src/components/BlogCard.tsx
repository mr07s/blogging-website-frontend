import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`blog/${id}`}>
      <div className="flex flex-col  border-b border-slate-200 p-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex  font-extralight ">
          <div className="flex justify-center flex-col ">
            <Avatar name={authorName} size={"small"} />
          </div>
          <div className="pl-2 font-extralight">{authorName}</div>
          <div className="flex flex-col justify-center pl-2">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-500">{publishedDate}</div>.
        </div>
        <div className="text-xl font-semibold mb-1 pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className=" text-slate-500">{`${Math.ceil(
          content.length / 100
        )} minute read`}</div>
      </div>
    </Link>
  );
};
function Circle() {
  return <div className="w-1 h-1 rounded-full bg-gray-600"></div>;
}
export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600
      ${size === "small" ? "w-6 h-6" : "w-10 h-10"}
      `}
    >
      <span
        className={`font-medium  text-gray-600 dark:text-gray-300
      ${size === "small" ? "text-xs" : "text-md"}
      `}
      >
        {name[0]}
      </span>
    </div>
  );
}
