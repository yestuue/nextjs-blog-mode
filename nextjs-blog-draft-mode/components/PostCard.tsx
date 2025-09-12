import React from 'react';

interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, slug }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-bold">
        <a href={`/blogs/${slug}`}>{title}</a>
      </h2>
      <p className="mt-2 text-gray-600">{excerpt}</p>
    </div>
  );
};

export default PostCard;