# Markba Frontend

React + TypeScript + Vite app with Tailwind v4, React Router, Zustand auth store, Google/GitHub OAuth, and a simple dashboard.

**Live Demo :** 
https://markba-task-7sij.vercel.app/

backend github: https://github.com/shouqak/markba-backend

**Tech Stack**
- React 19, Vite 7, TypeScript 5
- Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- React Router v6, Zustand
- Google OAuth (`@react-oauth/google`), GitHub OAuth
- Framer Motion, React Icons, React Hot Toast

**Prerequisites**
- Node.js 18+ (20+ recommended)
- npm 9+

**Quick Start**
- Clone and install deps
  - `npm install`
- Configure environment (see below)
- Run locally
  - `npm run dev` then open http://localhost:5173
- Production build
  - `npm run build` and `npm run preview`

**Environment**
- Create a `.env` file at the project root with the following variables. Note: Vite only exposes vars prefixed with `VITE_` in `import.meta.env`.
- This project currently reads non‑prefixed names in code. For best results, set both forms to avoid confusion, or update code to use `VITE_` only.

```
# Backend API base (used for GitHub code exchange)
API_URL=https://markba-backend.onrender.com
VITE_API_URL=https://markba-backend.onrender.com

# Google OAuth (Client ID from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com

# GitHub OAuth (Client ID from GitHub OAuth App)
GITHUB_CLIENT_ID=your-github-client-id
VITE_GITHUB_CLIENT_ID=your-github-client-id

# Redirect URI used in the app (defaults to window.origin + /login)
GITHUB_REDIRECT_URI=http://localhost:5173/login
VITE_GITHUB_REDIRECT_URI=http://localhost:5173/login
```

If you prefer to standardize on `VITE_` only, update these places:
- `src/main.tsx:5` to read `import.meta.env.VITE_GOOGLE_CLIENT_ID`
- `src/pages/Login.tsx:17` (`API_URL`), `src/pages/Login.tsx:19` (`GITHUB_CLIENT_ID`), `src/pages/Login.tsx:21` (`GITHUB_REDIRECT_URI`) to the `VITE_` variants

**OAuth Setup**
- Google (user info via implicit flow)
  - Go to Google Cloud Console → Credentials → Create Credentials → OAuth client ID
  - Application type: Web application
  - Authorized JavaScript origins:
    - `http://localhost:5173`
    - Your production domain
  - Copy the Client ID into `.env` (`GOOGLE_CLIENT_ID` / `VITE_GOOGLE_CLIENT_ID`)

- GitHub (authorization code + backend exchange)
  - Go to GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
  - Homepage URL: your site (e.g., `http://localhost:5173`)
  - Authorization callback URL: `http://localhost:5173/login`
  - Copy the Client ID into `.env` (`GITHUB_CLIENT_ID` / `VITE_GITHUB_CLIENT_ID`)
  - Ensure backend `API_URL` points to your server that exchanges the `code` at `POST /auth/github`

**Scripts**
- `npm run dev` — start dev server
- `npm run build` — type‑check and build production assets
- `npm run preview` — preview production build
- `npm run lint` — lint sources

**Project Structure**
- App entry: `src/main.tsx`
- Router: `src/Router/Router.tsx`
- Auth store: `src/store/useAuthStore.ts`
- Pages: `src/pages/*`
- Components: `src/components/*`
- Styling: `src/index.css` (Tailwind v4)

**Troubleshooting**
- Env vars not taking effect: Vite only exposes `VITE_*` vars to `import.meta.env`. Either define both forms as above or update code to use `VITE_*` keys.
- OAuth redirect mismatch: ensure Google “Authorized JavaScript origins” and GitHub “Authorization callback URL” match your actual local/prod origins.
- OneDrive path issues on Windows: if dev server can’t serve files, try moving the project to a non‑OneDrive folder.

**Deployment**
- Vercel is pre‑configured for SPA routing via `vercel.json:2`. Set the same environment variables in your Vercel project and deploy.
