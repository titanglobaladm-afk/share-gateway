## Plan: Create Replit-Ready README.md

Replace the current `README.md` with a comprehensive setup guide tailored for running the SHARE Gateway app on Replit.

### Sections to include

1. **Project overview** — SHARE Gateway: bilingual (EN/FR) role-based onboarding, training, quiz, KYC, and document-signing platform.

2. **Tech stack** — React 18, TypeScript, Vite 5, TailwindCSS, shadcn/ui, Supabase (Auth/DB/RLS), React Router, TanStack Query.

3. **Prerequisites** — Node.js 18+, npm, a Supabase project (URL + anon key).

4. **Replit-specific setup**
   - Import from GitHub into Replit (Node.js template)
   - Configure `.replit` run command: `npm run dev -- --host 0.0.0.0 --port 3000`
   - Note Vite config currently binds to port 8080 / host `::` — Replit users may need to override via CLI flags or edit `vite.config.ts`
   - Open the webview to preview

5. **Environment variables** — create `.env` (or use Replit Secrets) with:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`

6. **Install & run**
   ```
   npm install
   npm run dev
   ```
   Plus `npm run build` / `npm run preview`.

7. **Database setup** — apply migrations in `supabase/migrations/` via Supabase CLI or dashboard SQL editor; key tables: `profiles`, `user_roles`, `user_courses`, `quiz_attempts`, `test_attempts`, `document_signatures`; key RPCs: `append_quiz_completion`, `append_lesson_completion`, `has_role`.

8. **Auth configuration** — enable email/password in Supabase; set Site URL and redirect URLs to the Replit preview URL.

9. **Project structure** — short tree of `src/pages`, `src/components`, `src/data`, `src/hooks`, `src/contexts`, `src/integrations/supabase`.

10. **User journey** — Sign in → Onboarding (profile + role) → KYC (investor) or Aptitude Test (staff) → Courses + Quizzes → Document signing → Dashboard.

11. **Admin access** — how to grant admin role via `user_roles` table and use `?reset=true` on `/onboarding`.

12. **Troubleshooting** — port conflicts on Replit, env vars not loading (must be `VITE_` prefixed), Supabase RLS errors, blank preview (check console).

### Files changed
- `README.md` (overwritten)

No code, dependencies, or database changes.
