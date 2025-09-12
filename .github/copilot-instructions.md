# Copilot Instructions for nextjs-blog-draft-mode-main

## Project Overview

- This is a statically generated blog built with Next.js (App Router) and Contentful as the CMS.
- Supports multiple locales, draft mode, and on-demand revalidation.
- Key directories: `app/` (routes, pages, API endpoints), `components/` (UI), `lib/` (Contentful/data logic), `public/assets/` (images), `types/` (TypeScript types).

## Data Flow & Architecture

- Content is fetched from Contentful using logic in `lib/api.ts` and related helpers.
- Blog posts, authors, and images are modeled in Contentful and mapped to frontend types in `types/`.
- API routes under `app/[locale]/api/` handle draft mode (`draft/route.ts`), disabling draft (`disable-draft/route.ts`), and on-demand revalidation (`revalidate/route.ts`).
- Localization is handled via `[locale]/` subfolders and `i18n.ts` config.

## Developer Workflows

- **Setup:**
  - Copy `.env.local.example` to `.env.local` and fill in Contentful credentials.
  - Run `npm install` or `yarn install`.
  - (Optional) Run `npm run setup` to auto-create Contentful models (requires Contentful management token).
- **Development:**
  - Start dev server: `npm run dev` or `yarn dev`.
  - Access at `http://localhost:3000`.
- **Draft Mode:**
  - Enable via `/api/draft?secret=...&slug=...` (see README for details).
  - Exit via `/api/disable-draft`.
- **On-Demand Revalidation:**
  - Triggered by Contentful webhooks to `/api/revalidate` with secret header.

## Project-Specific Patterns

- Uses Next.js App Router (not Pages Router).
- All routes and API endpoints are colocated under `app/[locale]/`.
- Localization: Each locale has its own subfolder and CSS (e.g., `app/[locale]/about/about.css`).
- UI components are in `components/` and are locale-agnostic.
- Contentful integration is abstracted in `lib/`.
- TypeScript is used throughout; types are in `types/`.
- Tailwind CSS is configured via `tailwind.config.ts` and used for styling.

## Integration Points

- Contentful: All content is managed in Contentful; see `lib/api.ts` and `lib/contenful.ts`.
- Vercel: Deployment and preview integration (see README for environment setup).
- Webhooks: Contentful webhooks trigger revalidation via `/api/revalidate`.

## Examples

- See `app/[locale]/blogs/[slug]/page.tsx` for dynamic blog post rendering.
- See `app/[locale]/api/draft/route.ts` for draft mode logic.
- See `lib/api.ts` for Contentful data fetching patterns.

## Conventions

- Use environment variables for all Contentful and secret values.
- Keep locale-specific logic in `[locale]/` folders; keep shared logic in `lib/` and `components/`.
- Use TypeScript types for all data models.
- Use Tailwind for all styling; avoid inline styles.

---

For more details, see the project [README.md].
