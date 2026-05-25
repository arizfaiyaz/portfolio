# Ariz Faiyaz Portfolio

Minimal developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives, next-themes, lucide-react, react-icons, react-github-calendar, framer-motion, next/font with Inconsolata, NeonDB Postgres for a privacy-friendly visitor counter, local TechIcons assets for the tech stack, and a curated Spotify track button powered by public oEmbed metadata.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Personal Data

All portfolio content lives in `src/data`:

- `src/data/profile.ts` for name, title, bio, metadata, GitHub username, contact URLs, and socials
- `src/data/hero-roles.ts` for the animated hero role slider
- `src/data/projects.ts` for featured projects
- `src/data/experience.ts` for timeline entries
- `src/data/tech-stack.ts` for technology icons
- `src/data/quotes.ts` for rotating visitor quotes

Shared TypeScript interfaces live in `src/types/portfolio.ts`.

## Project Images

Add project previews to `public/images/projects`, then update each project `image` field in `src/data/projects.ts`, for example:

```ts
image: "/images/projects/arcalist.png"
```

If an image is missing or the field is empty, the card renders a clean monochrome fallback preview.

## Visitor Counter

The quote/visitor card calls `GET /api/visitor`, stores no IP address or user agent, and uses httpOnly cookies only to avoid incrementing the same browser repeatedly. Persistence uses NeonDB Postgres through server-only route code.

Create `.env.local` with:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST/dbname?sslmode=require"
```

Run the SQL in `migrations/001_portfolio_visitors.sql` against Neon before enabling the counter. The row starts at `120`, then the API uses an atomic `UPDATE ... RETURNING count`, so the first real visitor becomes `121`.

If `DATABASE_URL` is missing or the database request fails, the API returns a safe fallback response and the site still renders.

## Spotify

The music button calls `GET /api/music`, selects a curated Spotify track from `src/data/songs.ts` using the visitor number, and fetches public Spotify oEmbed metadata server-side. It does not need any music-related environment variables.

## Contact Form

The contact form is UI-only by design. It validates fields locally, shows a success message, and does not send, store, or expose submitted data.

To integrate real email later, add a secure server action or API route that uses environment variables, validates input server-side, and never exposes API keys in client components.

## Useful Commands

```bash
npm run lint
npm run build
```
