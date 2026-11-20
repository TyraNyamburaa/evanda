# evanda
My dad's car accessories business end-to-end business identity website and management platform

## Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS, GSAP, and Lenis
- UI effects: React Bits components copied into `frontend/src/components/react-bits/`
- Backend and data: Supabase (PostgreSQL, Auth, and Storage)
- Forms: React Hook Form with Zod resolvers
- Icons: Lucide React
- Deployment: Vercel (Vite frontend and serverless Express API)

## Local development

Requires Node.js 20.9 or newer. Install dependencies from the repository root:

```sh
npm install
```

Copy `frontend/.env.example` to `frontend/.env.local` and `backend/.env.example`
to `backend/.env`, then set the Supabase project URL and public anon key in both
files. Never put a Supabase service-role key in frontend variables.

Run the frontend with `npm run dev` and the API with `npm run dev:backend`.
The Supabase CLI uses `supabase/config.toml`; local database migrations live in
`supabase/migrations/`. Run `npm run supabase:start` to start the local Supabase
stack, `npm run supabase:status` to display its local credentials and URLs, and
`npm run supabase:db:reset` to recreate the local database from migrations.

## Forms and React Bits

Use `react-hook-form` with `zodResolver` from `@hookform/resolvers/zod` to
connect form schemas to validation. React Bits publishes copy-in components
rather than a general-purpose `react-bits` npm package; add selected components
under `frontend/src/components/react-bits/` and keep any component-specific
dependencies in the frontend package.

## Vercel

Import the repository with its root as the project root. The root
`vercel.json` builds the Vite app, serves the SPA fallback, and deploys
`api/[...path].js` as the backend function. Configure these environment
variables in Vercel:

- `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` for the frontend build
- `SUPABASE_URL` and `SUPABASE_ANON_KEY` for the backend function

The public anon key is protected by Supabase Row Level Security policies; use
server-only secrets only in backend environment variables.

## CI/CD checks

GitHub Actions runs on pull requests, pushes to `main`, and manual dispatch.
The CI job installs from the lockfile, type-checks the frontend, and builds it.
Run the same checks locally with `npm run check`.

Connect the repository to Vercel to enable Vercel's automatic preview
deployments for pull requests and production deployments from `main`. Configure
the required Supabase environment variables in the Vercel project.
