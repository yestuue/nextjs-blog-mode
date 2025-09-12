import { draftMode } from 'next/headers';
import { getAllPosts } from '@/lib/api';
import BlogsClient from './BlogsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Posts',
  description: 'Learn about cryptocurrency, blockchain technology, and financial literacy.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  const dm = draftMode();
  // draftMode() shape can vary by Next version; guard access and pass a boolean
  const isDraft = Boolean((dm as any).isEnabled ?? (dm as any).enabled ?? false);
  const posts = await getAllPosts(isDraft);

  return <BlogsClient posts={posts} />;
}
