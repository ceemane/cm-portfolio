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
