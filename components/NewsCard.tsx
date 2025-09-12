import { NewsArticle } from '../types/components';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends NewsArticle {
  locale: string;
  translations: {
    readMore: string;
    readMoreAbout: (params: { title: string }) => string;
  };
}

export default function NewsCard({ title, excerpt, date, author, slug, image, locale, translations }: Props) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 text-sm text-gray-500 flex items-center">
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          <span className="mx-2">•</span>
          <span>By {author}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-500 mb-4 flex-grow">
          {excerpt}
        </p>
        <Link
          href={`/${locale}/crypto-news/${slug}`}
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group"
        >
          {translations.readMore}
          <svg
            className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">{translations.readMoreAbout({ title })}</span>
        </Link>
      </div>
    </article>
  );
}
