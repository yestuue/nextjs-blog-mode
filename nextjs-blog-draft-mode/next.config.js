module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'es'], // Add your supported locales here
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.ctfassets.net'], // Add your Contentful image domain here
  },
  experimental: {
    appDir: true,
  },
};