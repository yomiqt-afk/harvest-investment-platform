# CarVest Vercel Demo

A frontend prototype for a vehicle-investment platform. It uses demo data only.

## Run locally

Install Node.js 18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

### Option A — GitHub
1. Create a GitHub repository.
2. Upload this project.
3. Go to https://vercel.com
4. Sign in with GitHub.
5. Click **Add New... → Project**.
6. Select the repository.
7. Vercel should detect Next.js automatically.
8. Click **Deploy**.
9. Vercel will give you a public `.vercel.app` URL.

### Option B — Vercel CLI
Install the CLI:

```bash
npm install -g vercel
```

Then:

```bash
vercel
```

Follow the prompts. For a production deployment:

```bash
vercel --prod
```

## Important

This is a visual/functional prototype. It does NOT process real investments, payments, KYC, or investor money. Those should be added only after the business, legal, compliance, security, and payment architecture are properly designed.
