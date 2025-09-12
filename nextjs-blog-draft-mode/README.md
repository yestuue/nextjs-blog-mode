# Next.js Blog with Draft Mode and Contentful

This project is a statically generated blog built with Next.js (App Router) and Contentful as the CMS. It supports multiple locales, draft mode, and on-demand revalidation.

## Features

- **Static Site Generation**: Leverages Next.js for fast performance and SEO.
- **Draft Mode**: Allows content creators to preview unpublished blog posts.
- **On-Demand Revalidation**: Automatically updates content when changes are made in Contentful.
- **Localization**: Supports multiple languages through locale-specific routing.

## Project Structure

```
nextjs-blog-draft-mode
├── app
│   ├── [locale]                # Locale-specific routes and components
│   │   ├── api                 # API routes for draft mode and revalidation
│   │   ├── blogs               # Blog post pages
│   │   ├── about               # About page
│   │   ├── layout.tsx          # Main layout component
│   │   └── globals.css         # Global styles
│   ├── page.tsx                # Main entry point
├── components                   # Reusable UI components
├── lib                          # Contentful integration and data fetching
├── types                        # TypeScript types and interfaces
├── public                       # Static assets
├── styles                       # CSS styles
├── scripts                      # Setup scripts
├── .env.local.example           # Environment variable example
├── .github                      # GitHub workflows
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── postcss.config.js            # PostCSS configuration
```

## Getting Started

### Setup

1. Copy `.env.local.example` to `.env.local` and fill in your Contentful credentials.
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. (Optional) Run the setup script to create Contentful models:
   ```
   npm run setup
   ```

### Development

- Start the development server:
  ```
  npm run dev
  ```
  or
  ```
  yarn dev
  ```
- Access the application at `http://localhost:3000`.

### Draft Mode

- Enable draft mode by accessing:
  ```
  /api/draft?secret=...&slug=...
  ```
- Exit draft mode via:
  ```
  /api/disable-draft
  ```

### On-Demand Revalidation

- Trigger revalidation through Contentful webhooks to:
  ```
  /api/revalidate
  ```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.