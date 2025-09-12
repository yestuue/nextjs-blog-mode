// next.config.js
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'], // Allow Contentful image domain
    loader: "custom",
  },
  // Enable static page optimization
  output: 'standalone',
  // Improve security headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ],
};

module.exports = withNextIntl(nextConfig);
