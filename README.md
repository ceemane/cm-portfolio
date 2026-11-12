This is a private, token-gated portfolio built with [Next.js](https://nextjs.org).

## Production configuration

Set these Vercel environment variables for every production deployment:

- `ADMIN_SECRET`: a long, unique value used to access `/admin`.
- `CRON_SECRET`: a separate random value (at least 16 characters) that Vercel
  sends to authenticate the weekly Upstash keepalive job.
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: persistent storage for private access tokens.
- `SITE_URL`: `https://www.cmlearn.tech`.

Copy `.env.example` for local development. Do not commit actual values. The site is private by design: visitors must use a current link created from `/admin`.

Logging into `/admin` creates a signed, HTTP-only admin session valid for seven
days. During that period the site owner can browse the portfolio without an
access token.

The production deployment pings Upstash every Monday at 12:00 UTC. After
deploying, set `CRON_SECRET` in Vercel's Production environment and confirm the
job is enabled under **Settings → Cron Jobs**.

## Replacing portfolio samples

The ChatGPT workshop and the Community Trainer Readiness Kit are portfolio samples. Chester can replace them later without hunting through the site.

Two places matter:

- **Files and preview images:** `public/portfolio-samples/`. One folder. Filenames stay the same, with no version numbers, dates, or hashes.
- **The words and the links:** `src/lib/projects/portfolio-samples.ts`. That file is the only config for these entries. It is spread into `src/lib/projects/data.ts`, so you do not edit `data.ts` to swap or add a sample.

Keep the line `Portfolio sample · Not official OpenAI material` on these entries. Do not add OpenAI logos.

### Replace a deck, guide, worksheet, or kit

1. Export the new PDF or PowerPoint.
2. Put it in `public/portfolio-samples/`.
3. Use the filename already there. Overwrite the file. Do not rename it.
4. Commit and deploy. View and download links already point at that name.

| Piece | Filename |
| --- | --- |
| Workshop deck | `chatgpt-for-small-business-workshop-deck.pptx` |
| Facilitator guide | `chatgpt-for-small-business-facilitator-guide.pdf` |
| Participant worksheet | `chatgpt-for-small-business-participant-worksheet.pdf` |
| Trainer readiness kit | `community-trainer-readiness-kit.pdf` |

### Replace a preview image

Same folder, same rule: overwrite the `.webp` and keep the filename. Slides are about 1400 pixels wide. Page covers are about 1000 pixels wide. Export as WebP.

The first image in a project's `images` list is the picture on the homepage card.

| Preview | Filename |
| --- | --- |
| Workshop title slide | `chatgpt-for-small-business-title.webp` |
| Jam rubric slide | `chatgpt-for-small-business-jam-rubric.webp` |
| Facilitator guide cover | `chatgpt-for-small-business-facilitator-cover.webp` |
| Worksheet rubric | `chatgpt-for-small-business-worksheet-rubric.webp` |
| Kit cover | `community-trainer-readiness-kit-cover.webp` |
| Kit rubric | `community-trainer-readiness-kit-rubric.webp` |

If the new image has a different pixel size, update `width` and `height` on that `preview(...)` call in `portfolio-samples.ts`.

### Change the description

Edit the matching object in `src/lib/projects/portfolio-samples.ts`.

- `description` is the short text on the homepage card.
- `context`, `role`, `challenge`, `approach`, and `impact` are the project page.
- Leave `disclaimer` as `Portfolio sample · Not official OpenAI material`.

### Add a file to an existing sample

1. Drop the file in `public/portfolio-samples/` with a new lowercase hyphenated name, and no version number. Example: `chatgpt-for-small-business-handout.pdf`.
2. In `portfolio-samples.ts`, add a `downloadable(...)` call to that project's `files` array. The first argument is the filename. Pass `true` as the last argument for a PDF so the page can show it. Leave that off for a PowerPoint file.
3. To show a preview, add a `preview(...)` call to `images` with the filename, alt text, width, and height.

### Add a new sample project

Add another object to the `portfolioSamples` array in `portfolio-samples.ts`, with the same fields as the entries already there. Put its files and previews in `public/portfolio-samples/`. Set `featured: true` to lead the homepage grid. The `slug` is the URL: `/project/your-slug`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
