import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { useTranslations } from 'next-intl';
import { getPostAndMorePosts } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import "./slug.css";

interface Props {
  params: {
    slug: string;
    locale: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { isEnabled } = draftMode();
  const { post } = await getPostAndMorePosts(params.slug, isEnabled);

  if (!post) return { title: 'Not Found' };

  return {
    title: post.fields.title,
    description: post.fields.excerpt || post.fields.title,
    openGraph: {
      title: post.fields.title,
      description: post.fields.excerpt || post.fields.title,
      images: [
        {
          url: post.fields.featuredImage?.fields.file.url || '',
          width: 1200,
          height: 630,
          alt: post.fields.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const response = await getPostAndMorePosts('', false);
  return response.morePosts.map((post) => ({
    slug: post.fields.slug,
  }));
}

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <Image
        src={`https:${node.data.target.fields.file.url}`}
        alt={node.data.target.fields.description || ''}
        width={node.data.target.fields.file.details.image.width}
        height={node.data.target.fields.file.details.image.height}
        className="my-8 rounded-lg shadow-md"
      />
    ),
  },
  renderMark: {
    [MARKS.CODE]: (text: string) => (
      <code className="bg-gray-100 rounded px-2 py-1 font-mono text-sm">{text}</code>
    ),
  },
};

export default async function BlogDetailPage({ params }: Props) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);
  const { locale } = params;

  if (!post) return notFound();

  return (
    <article className="post-container">
      <div className="post-container-details">
        <div className="mb-8">
          {post.fields.featuredImage && (
            <Image
              src={`https:${post.fields.featuredImage.fields.file.url}`}
              alt={post.fields.title}
              width={1200}
              height={630}
              className="w-full rounded-lg shadow-lg"
              priority
            />
          )}
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
        {post.fields.author && (
          <div className="flex items-center mb-6">
            {post.fields.author.fields.picture && (
              <Image
                src={`https:${post.fields.author.fields.picture.fields.file.url}`}
                alt={post.fields.author.fields.name}
                width={40}
                height={40}
                className="rounded-full mr-4"
              />
            )}
            <div>
              <p className="font-semibold">{post.fields.author.fields.name}</p>
              <p className="text-gray-600 text-sm">
                {formatDate(post.fields.publishedDate)}
              </p>
            </div>
          </div>
        )}
        <div className="prose prose-lg max-w-none">
          {documentToReactComponents(post.fields.content, richTextOptions)}
        </div>
      </div>
          </article>
        );
      }

