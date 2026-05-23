# SHARE Gateway

A bilingual (English / French) role-based onboarding, training, quiz, KYC and document-signing platform built with React + Vite and a Supabase backend.

---

## Tech stack

- **Frontend:** React 18, TypeScript, Vite 5
- **Styling:** Tailwind CSS, shadcn/ui, Radix UI
- **Routing / data:** React Router, TanStack Query
- **Backend:** Supabase (Postgres, Auth, Row Level Security, RPC functions)
- **Forms / validation:** React Hook Form + Zod

---

## Running on Replit

### 1. Import the project

1. In Replit, choose **Create Repl → Import from GitHub** and paste this repository URL.
2. When prompted for a template, pick **Node.js**.
3. Wait for Replit to finish provisioning.

### 2. Configure the run command

The default `vite.config.ts` binds Vite to host `::` on port `8080`. Replit's webview needs the dev server bound to `0.0.0.0` on a port it can expose. The simplest fix is to override on the command line.

Edit (or create) `.replit` at the project root:

```toml
run = "npm run dev -- --host 0.0.0.0 --port 3000"

[nix]
channel = "stable-23_11"

[[ports]]
localPort = 3000
externalPort = 80
```

Alternatively, edit `vite.config.ts` and change `host: "::"` to `host: "0.0.0.0"` and `port: 8080` to `port: 3000`.

### 3. Set environment variables (Replit Secrets)

Open the **Secrets** (🔒) tab in Replit and add:

| Key | Value |
| --- | --- |
| `VITE_SUPABASE_URL` | `https://YOUR-PROJECT-REF.supabase.co` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase anon/publishable key |
| `VITE_SUPABASE_PROJECT_ID` | Your Supabase project ref |

> All client-side env vars **must** be prefixed with `VITE_` or Vite will not expose them to the browser.

For local development outside Replit, the same values go into a `.env` file at the project root.

### 4. Install and run

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build      # production build
npm run preview    # preview the production build
npm run lint       # run ESLint
```

Click **Run** in Replit and open the webview to see the app.

---

## Supabase setup

1. Create a new project at [supabase.com](https://supabase.com) (free tier is fine).
2. Copy the **Project URL** and **anon public key** from *Project Settings → API* into the env vars above.
3. Apply the schema by running every file in `supabase/migrations/` in order, either via:
   - **Supabase CLI:** `supabase db push`
   - **Dashboard:** *SQL Editor → New query*, paste each migration, run.
4. In **Authentication → Providers**, enable **Email** (password). Disable "Confirm email" during local testing if you don't want to verify each sign-up.
5. In **Authentication → URL Configuration**, add your Replit preview URL (e.g. `https://your-repl.username.repl.co`) to both **Site URL** and **Redirect URLs**.

### Key database objects

Tables: `profiles`, `user_roles`, `user_courses`, `quiz_attempts`, `test_attempts`, `document_signatures`, `kyc_submissions`.

RPC functions used by the app:
- `has_role(_user_id uuid, _role app_role)` — RLS helper
- `append_quiz_completion(p_user_id, p_course_id, p_quiz_id)` — marks a quiz complete
- `append_lesson_completion(p_user_id, p_course_id, p_lesson_id)` — marks a lesson viewed

All user-owned tables have RLS enabled — make sure migrations ran cleanly or the app will appear empty.

---

## Project structure

```
src/
├── pages/              # Route components (SignIn, Onboarding, Dashboard, Quiz, …)
├── components/         # Reusable UI + feature components
│   └── ui/             # shadcn/ui primitives
├── contexts/           # LanguageContext (EN/FR i18n)
├── hooks/              # useAuth, useAdminCheck, …
├── data/               # Static training content, role → course map
├── lib/                # Helpers (onboarding flow, utils)
└── integrations/
    └── supabase/       # Auto-generated client + types (do not edit)
supabase/
└── migrations/         # SQL schema history
```

---

## User journey

1. **Sign in / Sign up** (`/signin`)
2. **Onboarding** (`/onboarding`) — profile → role selection → course assignment
3. **KYC verification** (investors) **or Aptitude test** (staff roles)
4. **My Courses** (`/my-courses`) — lessons + quizzes per assigned course
5. **Documents** (`/documents`) — review and sign required documents
6. **Dashboard** (`/dashboard`) — progress overview

---

## Admin access

To grant a user admin rights, insert a row in `user_roles`:

```sql
insert into public.user_roles (user_id, role)
values ('<auth-user-uuid>', 'admin');
```

Admins can then visit `/admin` for the admin dashboard, and can use `/onboarding?reset=true` to redo onboarding for testing.

---

## Troubleshooting

- **Blank preview in Replit** — check the browser console; usually a missing env var. Confirm all three `VITE_*` secrets are set, then restart the Repl.
- **`Failed to fetch` / CORS errors** — your Supabase URL is wrong, or your Replit URL is not in the Supabase *Redirect URLs* list.
- **Port already in use** — change the `--port` flag in `.replit` to another free port and update `[[ports]] localPort` to match.
- **Empty tables / RLS errors** — re-run the migrations and confirm RLS policies were created. The app relies on `has_role()` for admin checks.
- **Env vars not picked up** — they must start with `VITE_`. Restart the dev server after adding them.
- **Stuck on onboarding** — clear `sessionStorage` keys starting with `onb_`, or sign out and sign back in.

---

## License

Proprietary — internal use only unless stated otherwise.