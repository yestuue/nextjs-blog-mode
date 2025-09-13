// app/[locale]/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

// Example: Generate metadata per blog
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = params;
  return {
    title: `Blog: ${slug} | ${locale.toUpperCase()}`,
  };
}

export default async function BlogPage({ params }: PageProps) {
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
export async function generateStaticParams() {
  return [
    { locale: "en", slug: "demo-blog" },
    { locale: "fr", slug: "exemple-blog" },
  ];
}
