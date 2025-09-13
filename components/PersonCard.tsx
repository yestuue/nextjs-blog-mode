import Link from 'next/link';
import { Person } from '@/types/person';

type Props = Person;

export default function PersonCard({
  name,
  emoji,
  location,
  status,
  youTube,
  twitter,
  instagram,
  website,
  description,
}: Props) {
  return (
    <div className="card p-6 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* Emoji Avatar */}
        <div className="flex-shrink-0 w-12 h-12 bg-light-gray rounded-full flex items-center justify-center text-2xl">
          {emoji}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-dark-gray mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-medium-gray mb-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">{location}</span>
          </div>

          {description && <p className="text-sm text-medium-gray mb-2">{description}</p>}

          {/* Social links */}
          <div className="flex items-center gap-3 mt-2">
            {website && (
              <Link href={website} target="_blank" className="text-sm text-blue-600">
                Website
              </Link>
            )}
            {youTube && (
              <Link href={youTube} target="_blank" className="text-sm text-red-600">
                YouTube
              </Link>
            )}
            {twitter && (
              <Link href={`https://twitter.com/${twitter.replace(/^@/, '')}`} target="_blank" className="text-sm text-blue-400">
                Twitter
              </Link>
            )}
            {instagram && (
              <Link href={`https://instagram.com/${instagram.replace(/^@/, '')}`} target="_blank" className="text-sm text-pink-500">
                Instagram
              </Link>
            )}
          </div>
        </div>

        {/* Status Indicator */}
        {status && (
          <div className="flex-shrink-0">
            <div
              className={`w-3 h-3 rounded-full ${
                status === 'ready' ? 'bg-success-green' : status === 'busy' ? 'bg-red-500' : 'bg-yellow-500'
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}