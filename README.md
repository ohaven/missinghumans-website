# Missing Humans — missinghumans.com

Free, zero-backend resource site for families of missing persons. Next.js on Vercel; content lives in this repo.

## Editing the site (no coding needed)
- **Add / update a missing person case:** edit `data/cases.js` (instructions are at the top of the file). Put photos in `public/images/cases/`.
- **Mark someone found:** set `status: "found"` on their entry.
- **Site-wide settings** (contact email, Formspree ID, social links): `data/site.js`.
- **Guide text:** `app/resources/<guide>/page.js`.

Commit on GitHub → Vercel redeploys in about a minute.

## Local development
```
npm install
npm run dev
```
