'use client';

import { NewsArticle } from '../../../types/components';

interface Props {
  articles: NewsArticle[];
}

export default function CryptoNewsClient({ articles }: Props) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#4A90E2] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            NEWS FEED
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Building Black Wealth Through Crypto – Stay Informed, Stay Empowered!
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">DAILY CRYPTO NEWS - Bitcoin</h2>
            <p className="text-lg">
              We provide up-to-date news, expert insights, and community-driven discussions to help you navigate
              the world of digital assets. Whether you're just starting or looking for advanced strategies,
              you're in the right place. Join us and start your journey towards financial empowerment today!
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={article.slug || index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {article.image && (
                  <div className="relative h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-sm text-[#6C757D] mb-2">
                    {article.date} • By {article.author}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
                    {article.title}
                  </h3>
                  <p className="text-[#6C757D] mb-4">{article.excerpt}</p>
                  <a
                    href={`/crypto-news/${article.slug}`}
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
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">
            Stay Updated with Crypto News
          </h2>
          <p className="text-lg text-[#6C757D] mb-8">
            Subscribe to our newsletter for the latest updates, market analysis, and educational content.
          </p>
          <form className="flex gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg hover:bg-[#4A90E2]/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}