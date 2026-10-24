# AGENTS.md — LaMoon (repo AFOU)

Instructions for coding agents (Codex and others) working in this repo. Claude Code coordinates the work and merges branches; these are the same rules Claude follows here.

## Project
- LaMoon: a Thai travel web app that plans a trip from the user's mood. Flow: mood + budget + travelers → (random or pick) province on a full-screen map → trip details (origin, transport, dates, pace, live budget) → swipe place cards → automatic day-by-day plan (editable by dragging cards) → save.
- Hackathon AFOU "Make Me Money", submission 2026-10-25 12:00 (+07). After that it continues as a startup.
- Stack: React 19 (JavaScript) + Vite + Tailwind v4 + react-router 7 + framer-motion + d3-geo/d3-zoom, Supabase (Postgres, Auth with Google, Storage, Edge Functions), Gemini via Edge Function, Vercel.

## Always
1. Read `docs/PROJECT_MAP.md` before starting. It is the source of truth for structure, routes, data shapes and decisions. When you work directly on `main`, update it after every task. When you work in a worktree for review, put the needed PROJECT_MAP changes in your final report instead.
2. Read `AI/design/DESIGN.md` before any UI work and follow it strictly.
3. Finish every task with `cd frontend && npm run lint && npm run build` passing.
4. Never push. Commit only when your task says so (in review worktrees, Claude commits).
5. Do not test in a browser and do not take screenshots. The user tests the app.
6. The user owns the folder structure. Do not create new top-level folders or new `src/` folders without approval. Propose them in your report.
7. No new npm packages without approval.
8. Don't guess product decisions. If something is unclear, pick nothing and list it as a question in your report. In interactive sessions, ask the user first.

## Database (strict)
- Never run SQL, migrations or Supabase CLI commands, and never write `.sql` files, unless the task explicitly assigns it.
- DB changes are done by Claude only: take a `pg_dump` backup into `backend/supabase/backups/` (gitignored) first, get the user's explicit OK, run the change in a transaction, verify it, then update the schema snippet.
- The schema record is `backend/supabase/snippets/Untitled query 698.sql`. The local DB is `127.0.0.1:54322`, user `postgres`.
- Tables: `profiles`, `places` (28 real places in 5 southern provinces), `trips`, `swipes`, plus the Storage bucket `avatars`. Read the column docs in `frontend/src/lib/api/*.js`.

## Code conventions
- **UI language:** Thai. Code, identifiers and comments in English or Thai. Comments stay sparse.
- **Layout:** mobile-first at 390px using the mockup values. On desktop (`lg:`), center a column (`mx-auto max-w-[560px]`) unless the page has its own desktop layout, as the map does.
- **Tailwind theme tokens:** `bg-cream` `bg-peach` `bg-brown` `text-ink` `text-muted` `text-brown` `bg-orange`, plus the font Anuphan. Use arbitrary values for other colors: `#4A3A30` secondary text, `#FBE3D2` soft peach, `#D9CFC5` borders, `#EDE5DD` dividers.
- **Design:** one brown pill primary button per page. No black borders, no heavy shadows, rounded everything. Peach plus a brown check marks "selected". Orange `#E8793A` is an accent only and never a text color on white. The only gradient allowed is the holo sheen on rare and legendary cards.
- **Animation:** framer-motion. Always respect `useReducedMotion()`, so no looping or flying animation under reduced motion.
- **Navigation:** `SlideLink` / `slideNavigate(navigate, to, { back, replace, state })` from `src/components/SlideLink.jsx` (View Transitions slide). Use `back` when going backward.
- **Data access:** all Supabase calls go through `src/lib/api/*`. Pages never call `supabase` directly.
- **Logic:** pure logic lives in `src/lib/trip/*` (travel, budget, random, season, plan, combos, personality, geo).
- **Constants:** shared constants live in `src/data/*`. IDs stored in the DB are English slugs: moods `beach mountain food temple quiet photo adventure`, provinces like `krabi` or `chiang-mai`, places like `maya-bay`.
- **Trip flow state:** `useTripDraft()` from `src/context/TripDraftContext.jsx`, persisted in sessionStorage. The routes are `/plan/mood`, `/map/:province?`, `/plan/details`, `/plan/swipe`, `/plan/trip`.
- **Shared components:** `AppHeader`, `BottomSheet`, `ToggleChip`, `SlideLink` and `icons` (Moon, Sparkle, Logo). Reuse them instead of re-creating.
- **Feature folders:** each feature has its own folder under `src/components/<feature>/` (landing, login, register, mood, map, cards, trip, home, personality, plan).
- **Dialogs:** never use `window.alert` or `window.confirm`. Use `BottomSheet`.

## Decisions already made (don't re-litigate)
- **MVP scope:** core flow plus card stats/rarity, holo cards, AI mood reader, travel personality and trip combos. Quests are demo-only. Revenue is pitched with mock affiliate booking, quest sponsorship and season pass.
- **Rarity:** comes from `popularity`: ลับ = legendary, พอรู้จัก = rare, ดัง = common.
- **Card stats:** `{ chill, adventure, photo, food, budget }`, each 0–5.
- **Combos:** 3 kinds (rare hunter, mood pair, nearby cluster), at most 2 shown.
- **Travel estimates:** use the formula in `src/data/travel.js` and `src/lib/trip/travel.js`: distance between province centers × 1.3. There are no paid APIs.
- **Budget:** real baht, switchable between per person and whole trip. Dates come from a real calendar. Pace is chill 2 / normal 3 / packed 4 places per day. The user's province is saved to `profiles.home_province`.
- **Random trip:** needs mood and budget first. Random places still go through the swipe step. After swiping, the system auto-fills days that are short and the user can drag cards between days.
- **Admin panel:** later. Use Supabase Studio for now.

## Report format (end of every task)
Files changed and what each does, what works, what you could not do, decisions you made on your own, and any change needed in files you were not allowed to touch (with code).
