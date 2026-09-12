# Youth Quran Seerah Evaluation Form

A multi-step React form (all 7 sections from `Form_English_Translation.md`) that submits to a small Express
backend, which appends every response as a row to `responses.csv` on the server.

```
frontend/   React app (GitHub Pages)
backend/    Express API (Render / Railway)
```

## Local development

```bash
# backend
cd backend
npm install
npm start                 # runs on http://localhost:5000
                           # macOS note: port 5000 is often taken by AirPlay Receiver.
                           # If so: PORT=5050 npm start

# frontend (separate terminal)
cd frontend
npm install
cp .env.example .env.local   # edit REACT_APP_BACKEND_URL to match the backend port above
npm start                    # runs on http://localhost:3000
```

Fill out the form and submit — a row is appended to `backend/responses.csv`.

## Deploying the backend (Render.com)

This is already deployed: **https://youth-quran-seerah-backend.onrender.com** (service `youth-quran-seerah-backend`
in the "Mohammed's workspace" Render team, deploying from this repo's `main` branch, root dir `backend`).

To set up a fresh instance elsewhere:

1. Push this repo to GitHub.
2. Go to render.com → sign in with GitHub → **New Web Service**.
3. Connect the repo, set **Root Directory** to `backend`.
4. Build command: `yarn install`. Start command: `yarn start`.
   (Plain `npm install` hit a known npm bug — "Exit handler never called!" — on Render's free build tier,
   where npm reported success without actually installing dependencies. Yarn avoided it. `npm install`
   works fine locally.)
5. Add an environment variable `ADMIN_KEY` set to a private password of your choosing (used to protect the
   CSV download link — see below). If you skip this, it defaults to `admin123`, which is not private.
6. Deploy. Render gives you a URL like `https://your-app.onrender.com`.

Railway.app works the same way (New Project → Deploy from GitHub → set root directory to `backend`).

**Note:** Render/Railway free tiers use ephemeral disks — `responses.csv` can be wiped on redeploy or after
extended inactivity. For anything beyond a short-lived pilot, download the CSV regularly, or swap the CSV
write in `backend/server.js` for a persistent store (e.g. a Postgres add-on).

## Deploying the frontend (GitHub Pages)

1. In `frontend/package.json`, set `homepage` to `https://<your-username>.github.io/<repo-name>`.
2. Set `REACT_APP_BACKEND_URL` to your deployed backend URL before building:
   ```bash
   cd frontend
   echo "REACT_APP_BACKEND_URL=https://youth-quran-seerah-backend.onrender.com" > .env.production.local
   npm install
   npm run deploy      # builds and pushes the build/ folder to the gh-pages branch
   ```
3. In the GitHub repo settings → Pages, set the source to the `gh-pages` branch (the `deploy` script creates
   this automatically the first time it runs).
4. Your form is live at `https://<your-username>.github.io/<repo-name>/`.

## Downloading responses

```
https://youth-quran-seerah-backend.onrender.com/api/download?key=YOUR_ADMIN_KEY
```

Open that URL in a browser (with the `ADMIN_KEY` you set on the backend) to download `responses.csv`, which
opens directly in Excel/Google Sheets. Each submission is one row; the header row lists every field across
all 7 sections.

## Notes

- The form has no login — anyone with the link can submit. There's no rate limiting or duplicate-detection;
  add both if this goes out to a large or public audience.
- `POST /api/submit` requires only `studentInfo.name`; every other field is optional so partial reflection
  answers still get recorded.
