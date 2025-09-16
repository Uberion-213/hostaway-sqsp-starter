# Hostaway × Squarespace Custom Booking Starter

Serverless API (Next.js) you can deploy on Vercel and embed into a Squarespace page.

## Quick start

1) Create a **Hostaway access token** (valid ~24 months).
2) On Vercel: **New Project → Import** this repo → add env var `HOSTAWAY_ACCESS_TOKEN`.
3) Deploy → copy the production URL (e.g., `https://your-app.vercel.app`).
4) In Squarespace, create a page (e.g., **Book**) and paste the embed code from `/embed.html` into a **Code Block**, changing `apiBase` to your production URL.

## API routes

- `GET /api/listings` → list properties (IDs, names)
- `GET /api/availability?listingId=...&start=YYYY-MM-DD&end=YYYY-MM-DD` → availability
- `POST /api/price` → { startingDate, endingDate, numberOfGuests } → price breakdown
- `POST /api/reservations` → creates reservation using prior price components

> Keep your Hostaway token **server-side only**.
