import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Next.js expects `params` to be just a plain object
interface BlogPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

// Metadata generation
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug, locale } = params;
  return {
    title: `Blog: ${slug} | ${locale.toUpperCase()}`,
  };
}

// Page component
export default async function BlogPage({ params }: BlogPageProps) {
  const { slug, locale } = params;

  // Example: simulate fetching data for this slug
  const blog = { title: "Demo Blog", content: "Hello world content" };

  if (!blog) {
    notFound();
  }

  return (
    <article className="prose max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-dark-gray">{blog.title}</h1>
      <p className="text-medium-gray mt-4">{blog.content}</p>
      <p className="text-sm text-light-gray mt-8">Locale: {locale}</p>
    </article>
  );
}

// Generate static params for SSG
export async function generateStaticParams(): Promise<BlogPageProps["params"][]> {
  return [
    { locale: "en", slug: "demo-blog" },
    { locale: "fr", slug: "exemple-blog" },
  ];
}
// Note: In a real app, fetch available slugs from a CMS or database