# Indian Dairy Consortium — Market Intelligence Platform

A Next.js App Router starter for a dairy-market intelligence website. It includes a public site, publication pages, a workbook explorer UI, enquiry capture, and a protected admin workspace. It uses an original identity and does not claim affiliation with any other market-intelligence provider.

## Requirements
- Node.js 20+
- Neon PostgreSQL database
- Cloudinary account for PDF and workbook uploads

## Setup
1. Extract the ZIP and open the project directory.
2. Install packages:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and set `DATABASE_URL`, Cloudinary credentials, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and a random `SESSION_SECRET` of at least 32 characters.
4. Generate Prisma Client and create the database schema:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   npm run db:seed
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Visit `http://localhost:3000`; admin sign-in is at `/admin/login`.

## What is included
- Responsive public homepage with animated-style data visual, KPI strip, solutions and calls to action.
- DB-backed Read list and detail pages; PDF uploads are sent to Cloudinary and text is extracted server-side into editable paragraph/heading blocks.
- Workbook upload route parses XLSX/XLS/CSV into JSON sheet rows in Neon and stores the original file in Cloudinary.
- Enquiry form with Zod validation, consent requirement, honeypot and basic process-local rate limits.
- Admin login with bcrypt verification and signed, HttpOnly session cookie; dashboard, Read and Analysis upload forms, leads inbox and site KPI/brand settings.
- Prisma schema and seed script for admin, solution and company page defaults.

## Important implementation notes
- Seed content and all illustrative values are sample content. Do not present them as live market observations.
- PDF extraction is text-first, not full layout reconstruction. Complex tables, font-based heading inference, embedded image extraction, OCR and the full extraction-block editor still require implementation before production.
- The public analysis page currently includes an explicit sample workbook UI; connecting it to published `AnalysisFile` records, full server-side pagination/sorting, and secure download handlers is the next integration step.
- Company and solution defaults are seeded in the database; site navigation includes the default concept items. Full CRUD/reordering UI for solutions, company pages, partners, categories, tags, users and audit log is not yet complete.
- The in-memory login/form rate limits are suitable only for local development. Use a shared rate limiter (e.g. Redis/Upstash) and edge-aware controls in production.
- Before production, add CSRF/origin protection for cookie-authenticated mutations, verify the signed session on all protected paths (already checked again inside admin API handlers), use a durable rate limiter, add tests, and audit Cloudinary deletion flows.
- For Vercel: configure all environment variables, run Prisma migrations against Neon, then deploy. Do not commit `.env`.
