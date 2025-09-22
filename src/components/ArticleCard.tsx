import type { Blog } from "../types";

interface ArticleCardProps {
    article: Blog;
    onDelete: () => void;
    onEdit: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onDelete, onEdit }) => {
  return (
    <div className="flex p-4 bg-white w-[40rem] mb-6 ml-[2rem] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img src={article.image} alt={article.title} />
    </div>
  )
}

export default ArticleCard