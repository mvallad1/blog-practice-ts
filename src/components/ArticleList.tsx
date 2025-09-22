import { useBlogs } from "../share/BlogContext"
import type { Blog } from "../types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
    onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {

  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="mt-[5rem]">
        {blogs.map(blog => (
            <ArticleCard key={blog.id} article={blog} onDelete={() => deleteBlog(blog.id)} onEdit={() => onEdit(blog)}/>
        ))}
    </div>
  )
}

export default ArticleList