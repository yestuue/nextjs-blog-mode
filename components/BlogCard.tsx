import { BlogPost } from '../types/components';

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {post.image && (
        <div className="relative h-48">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-sm text-[#4A90E2] font-medium uppercase mb-2">
          {post.category}
        </div>
        <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
          {post.title}
        </h3>
        <p className="text-[#6C757D] mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-[#6C757D]">
            {post.date} • By {post.author}
          </div>
          <a
            href={`/blogs/${post.slug}`}
            className="inline-flex items-center text-[#4A90E2] font-medium hover:text-[#2C3E50] transition-colors"
          >
            Read More
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}