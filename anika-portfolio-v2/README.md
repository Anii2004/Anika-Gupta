# Anika Gupta: PM portfolio

Next.js 14 site. Home page plus one page per case study.

## Edit your content
- `data/site.js`: name, intro, story, email, LinkedIn, skills, tools, experience, education.
- `data/caseStudies.js`: case studies. Copy the RideNow entry for a new one and set `ready: true`.
- `public/anika.jpg`: your photo.
- `public/resume.pdf`: replace the placeholder with your real resume (keep the same file name).

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy on Vercel
1. Create a new GitHub repo and push this folder to it.
2. On vercel.com, click **Add New → Project**, pick the repo, and click **Deploy**. No settings to change.
3. Every push to GitHub redeploys the site automatically.
