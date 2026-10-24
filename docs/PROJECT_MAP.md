# Project Map

อัปเดตล่าสุด: 2026-10-24

## คืออะไร
Webapp ช่วยเลือกที่เที่ยวตาม mood แบบเกมการ์ด: เลือกจังหวัดบนแผนที่ไทย → บอก mood → ปัดการ์ดสถานที่แบบ Tinder → จัดทริป → จอง (affiliate)
ส่ง hackathon AFOU "Make Me Money" 2026-10-25 12:00 ก่อน แล้วต่อยอดเป็น startup
งาน research ไอเดียอยู่ที่ `AI/PROJECTMAP.md`

## Stack
- React (JavaScript) + Vite + Tailwind
- react-router + framer-motion
- Supabase (DB + Auth Google OAuth + Edge Functions)
- Gemini free tier (เรียกผ่าน Edge Function)
- Deploy: Vercel

## โครงสร้าง
ผู้ใช้วางโครงเอง — Claude เสนอได้อย่างเดียว ห้ามสร้างโครงเอง
| path | หน้าที่ |
|------|--------|
| frontend/ | Vite React app |
| frontend/src/pages/ | หน้าแต่ละ route (ตอนนี้ placeholder) |
| frontend/src/components/SlideLink.jsx | Link ที่เปลี่ยนหน้าแบบเลื่อน (View Transitions) — ไปหน้าถัดไปเลื่อนขวา→ซ้าย, prop `back` เลื่อนสวนทาง; CSS อยู่ใน index.css | เพิ่มลิงก์ระหว่างหน้า |
| frontend/src/components/AppHeader.jsx | header ในแอป: ปุ่มกลับ (backTo/onBack) + crumb + title + step pill | |
| frontend/src/components/BottomSheet.jsx | sheet ล่าง/dialog กลางจอ (Esc, backdrop, scroll lock) | |
| frontend/src/components/ToggleChip.jsx | chip +/✓ ไม่ขยับ layout | |
| frontend/src/components/mood/ | หน้า Mood: AiMoodBox, MoodTile, MoodIcon, BudgetPicker | |
| backend/supabase/functions/mood-reader/ | Edge Function Gemini: POST {text} → {moods, reason}; secret GEMINI_API_KEY (+ GEMINI_MODEL) — ไม่มี key ตอบ 503 แล้ว frontend จับคำแทน | แก้ prompt AI |
| frontend/src/lib/api/ | ทุกการเรียก supabase ต่อ feature: places, swipes, trips, mood (AI + fallback คำ) — หน้าไหนห้ามเรียก supabase ตรง | เพิ่ม query |
| frontend/src/lib/trip/ | logic ล้วน: plan (วันละ 3 nearest neighbor), combos (3 แบบ ≤2), personality, geo | |
| frontend/src/components/icons.jsx | ไอคอนกลาง Moon, Sparkle, Logo (ใช้หลายหน้า) |
| frontend/src/components/landing/ | ส่วนประกอบหน้า Landing (Header, Hero, CardStack, Steps, Showcase, CtaBanner, Footer) |
| frontend/src/components/login/ | ส่วนประกอบหน้า Login (LoginArt, GoogleButton) |
| frontend/src/components/register/ | ส่วนประกอบหน้า Register (ProfileCard อัปโหลดรูป, MoodPicker + อื่นๆ, ProvincePicker, ToggleChip, TermsCheckbox, TermsModal) |
| frontend/src/data/ | ข้อมูลคงที่ใช้ร่วม (options.js: MOODS, REGIONS, PROVINCES 77 จังหวัด, POPULAR_PROVINCES; personalities.js 7 แบบ) |
| frontend/src/routes/ | route guard |
| frontend/src/context/ | React context (auth) |
| frontend/src/lib/ | client ภายนอก (supabase) |
| backend/supabase/ | Supabase config |
| AI/ | research ไอเดีย hackathon |

## ไฟล์สำคัญ
| ไฟล์ | ทำอะไร | แตะเมื่อ |
|------|--------|---------|
| frontend/src/App.jsx | ประกาศ routes ทั้งหมด | เพิ่ม/ย้ายหน้า |
| frontend/src/index.css | Tailwind + theme token (`brown`, `ink`, `cream`, `peach`, `orange`, `muted`, font Anuphan) | เพิ่มสี/ฟอนต์กลาง |
| frontend/src/context/AuthContext.jsx | session + profile + setProfile + signInWithGoogle/signOut/refreshProfile (`useAuth`) | แก้ logic auth |
| frontend/src/routes/PrivateRoute.jsx | กันหน้า private: ไม่ login → /login, ไม่มี profile → /register | แก้เงื่อนไขเข้าหน้า |
| frontend/src/routes/PublicOnlyRoute.jsx | / และ /login — login แล้วเด้งไป /home | |
| frontend/src/lib/supabase.js | supabase client (env `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) | |
| frontend/.env.example | template env | เพิ่ม env |
| frontend/vercel.json | SPA rewrite ทุก path → index.html (กัน 404 ตอน refresh) | |
| backend/supabase/config.toml | config Supabase local — Google OAuth (`[auth.external.google]`), site_url/redirect = localhost:5173 | แก้ auth/port |
| backend/supabase/.env.example | env ของ config.toml (`SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_ID`, `_SECRET`) | เพิ่ม provider |

## Routes
| path | หน้า | guard |
|------|------|-------|
| `/` | Landing | public only |
| `/login` | Login Google | public only |
| `/register` | ตั้งค่าโปรไฟล์ครั้งแรก | login แล้ว + ยังไม่มี profile |
| `/welcome` | ต้อนรับหลัง register → ปุ่มไป from ?? /home | private |
| `/home` | หน้าหลักหลัง login (placeholder — lane A) | private |
| `/map/:province/mood` | เลือกมู้ด ≤3 + AI + งบ (default 2) → `/swipe?moods=&budget=` (lane B เสร็จ) | private |
| `/map/:province/trip` | สรุปทริปจากการปัด รับ state { likedIds, moods, budget } (placeholder — lane D) | private |
| `/trips/:id` | ดูทริปที่บันทึก (placeholder — lane D) | private |
| `/personality` | บุคลิกการเที่ยวจาก swipes ขวาทั้งหมด (placeholder — lane A) | private |
| `/map` | แผนที่ไทย | private |
| `/map/:province` | ซูมจังหวัด | private |
| `/map/:province/mood` | เลือก mood | private |
| `/map/:province/swipe` | Swipe | private |
- "register แล้ว" = มีแถวใน `profiles` (id = auth.users.id)
- จำหน้าเดิมผ่าน `location.state.from` แล้วพากลับหลัง login/register (default /home)
- Register บันทึกเสร็จ: `navigate('/welcome')` + `setProfile(data)` ใน tick เดียวกัน กัน guard /register เด้งก่อน

## Database
`profiles` (local DB) — id, display_name, avatar_url, favorite_moods text[] (id), custom_moods text[] (พิมพ์เอง), provinces text[], regions text[] (ไม่ใช้แล้ว), accepted_terms_at, created_at + RLS เจ้าของเท่านั้น
- Storage bucket `avatars` (public, 2MB, jpg/png/webp) path `<user id>/avatar-<ts>.<ext>` เขียนได้เฉพาะโฟลเดอร์ตัวเอง
- `places` (อ่านได้ทุกคน, เขียนผ่าน Studio), `trips` (ของตัวเอง), `swipes` (ของตัวเอง)
- schema ทั้งหมดอยู่ใน `backend/supabase/snippets/Untitled query 698.sql`
- permission: `.claude/settings.local.json` อนุญาต `pg_dump`/`psql` (ผู้ใช้เพิ่มเอง) — ยังต้อง backup + ถามก่อนทุกครั้ง
- กฎ DB (2026-10-24): Claude รัน SQL เองได้ แต่ต้อง backup (`pg_dump`) + ถามยืนยันก่อนทุกครั้ง; backup อยู่ `backend/supabase/backups/` (gitignore)
- local DB: `127.0.0.1:54322` user `postgres`

## Decision ที่ล็อกแล้ว
- Scope MVP hackathon: core flow (map → mood → swipe) + Stat/rarity + การ์ด holo/เปิดซอง + แผนที่ stage select/fog + AI Mood reader + Travel personality + Trip combo
- Quest + check-in ทำแค่ demo mode (จำลองตำแหน่ง)
- รายได้ pitch 3 ขา: Affiliate (mock link) + Quest sponsorship (dashboard mock) + Season pass (mock)
- Roadmap startup: AI ไกด์ mascot, Season event, Creator deck marketplace, Trip bundle, พิมพ์การ์ดจริง
- ข้อมูลสถานที่: seed เอง — Claude ร่าง ทีมตรวจ
- จังหวัด seed: สุราษฎร์ธานี, นครศรีธรรมราช, พังงา, กระบี่, ภูเก็ต (จำนวนที่/จังหวัด ยังไม่เคาะ)
- LLM: Gemini
- Commit ทุกงาน ไม่ push
- ชื่อแบรนด์ LaMoon, design ตาม mockup "8 Warm" (โทนน้ำตาล/ครีม, ฟอนต์ Anuphan) — มือถือตาม mockup เป๊ะ, desktop (lg) hero 2 คอลัมน์
- ตัวอย่างสถานที่บน Landing ใช้ภาคใต้ (ตามจังหวัด seed)
- ค่าใน DB เก็บเป็น id อังกฤษ (mood `beach`..., ภาค `north`..., จังหวัด `krabi`/`chiang-mai`) ดู `src/data/options.js`
- Register: ไม่มีปุ่มย้อนกลับ, เลือกแค่จังหวัด (ยอดนิยม + ค้นหา), มู้ดอื่นๆ พิมพ์เองได้ ≤5 คำ ≤20 ตัว, ปุ่มกดได้เมื่อ ชื่อไม่ว่าง + มู้ด ≥1 + ยอมรับข้อตกลง
- เนื้อหาข้อตกลง/นโยบายใน TermsModal เป็น mockup
- P1 อยู่ในคลิป; admin ไว้ทีหลัง (ช่วงนี้ใช้ Studio); agent ใช้ Opus; รูปสถานที่ Unsplash
- ส่งต่อระหว่างหน้า: Mood → `/swipe?moods=a,b&budget=2`; Swipe → `/trip` ด้วย state { likedIds, moods, budget }
- เปลี่ยนหน้า: ใช้ `SlideLink` แทน `Link` (ยังใช้ BrowserRouter ไม่ย้ายไป data router) ถอยกลับใส่ `back`

## ค้างอยู่
- [ ] เคาะจำนวนสถานที่ต่อจังหวัด
- [x] วาง route + private route
- [x] หน้า Landing ตาม design
- [x] animation การ์ด Hero (framer-motion)
- [x] หน้า Login ตาม design (desktop แบ่ง 2 ฝั่ง)
- [x] animation เปลี่ยนหน้าแบบเลื่อน
- [ ] ลบ `frontend/src/App.css` (template เก่า ไม่มีใครใช้) — ผู้ใช้ลบเอง
- [x] ผู้ใช้รัน SQL `profiles` + ใส่ `.env`
- [x] ทำฟอร์ม Register (insert profiles) + หน้า Welcome
- [x] เพิ่มคอลัมน์ `profiles.regions text[]` (local DB)
- [x] snippet `backend/supabase/snippets/Untitled query 698.sql` เพิ่ม regions แล้ว (ตรงกับ local DB)
- [x] design หน้า Home/สรุปทริป/บุคลิก/AI มู้ด/การ์ดหายาก เคาะแล้ว (ดูแชท 2026-10-24) — combo 3 แบบ, holo ยกเว้น gradient เฉพาะ rare+
- [x] ตาราง places/trips/swipes + seed ตัวอย่าง 8 ที่ (กระบี่ 4, ภูเก็ต 4, id ขึ้นต้น `sample-` ลบเมื่อข้อมูลจริงมา)
- [ ] ข้อมูลสถานที่จริง (รอทีม) + รูป Unsplash
- [ ] Gemini API key: ใส่ `backend/supabase/functions/.env` (GEMINI_API_KEY) แล้ว `supabase functions serve mood-reader`; ถ้า 401 ตั้ง `[functions.mood-reader] verify_jwt = false`
- [ ] แตก lane A–F ให้ agent (Opus) / Codex
- [ ] เนื้อหาข้อตกลง/นโยบายจริง (ตอนนี้ mockup)
- [ ] ผู้ใช้สร้าง Google OAuth client + ใส่ `backend/supabase/.env` + redirect URI ใน Google Console
- [ ] Claude ร่าง seed data
- [ ] SQL schema (paste ในแชท)

## Log
| วันที่ | ทำอะไร |
|-------|--------|
| 2026-10-23 | วางแผน scope/feature/รายได้ สร้าง PROJECT_MAP |
| 2026-10-24 | เพิ่ม frontend/vercel.json (SPA rewrite) |
| 2026-10-24 | เพิ่ม Google OAuth ใน config.toml, site_url → 5173, gitignore `.env` ใน backend/supabase |
| 2026-10-24 | ลง react-router-dom + supabase-js, ทำ AuthProvider + PrivateRoute/PublicOnlyRoute + หน้า placeholder |
| 2026-10-24 | ทำหน้า Landing ตาม design 8 Warm (responsive), ล้าง index.css เหลือ Tailwind + theme, ใส่ฟอนต์ Anuphan |
| 2026-10-24 | ลง framer-motion, CardStack: กางการ์ดตอนโหลด + ลอย + demo ปัดอัตโนมัติ + ลากปัดได้จริง (หยุด demo ตอนแตะ กลับมาวนหลัง 4 วิ, ปิดตาม prefers-reduced-motion) |
| 2026-10-24 | หน้า Login ตาม design 8 Warm: ภาพการ์ด animate เบาๆ, ปุ่ม Google โลโก้จริง + loading/error, desktop แบ่ง 2 ฝั่ง; ย้าย icons ไป components/icons.jsx |
| 2026-10-24 | เพิ่ม SlideLink + CSS view transition เลื่อนหน้า (ถอยกลับเลื่อนสวนทาง, ปิดตาม reduced motion) ใช้ใน Landing/Login |
| 2026-10-24 | หน้า Register ตาม 03-register.html + หน้า Welcome (Claude ออกแบบ) + /home placeholder, default หลัง login → /home, เพิ่ม src/data/options.js |
| 2026-10-24 | backup local DB แล้ว `alter table profiles add column regions text[] not null default '{}'`, gitignore backups/ |
| 2026-10-24 | snippet SQL profiles เพิ่มคอลัมน์ regions ให้ตรง DB |
| 2026-10-24 | backup แล้วเพิ่ม profiles.custom_moods + bucket avatars + policy; Register: อัปโหลดรูป, มู้ดอื่นๆ, chip ไม่ขยับ, จังหวัดยอดนิยม+ค้นหา (ตัดภาค), checkbox มน + modal ข้อตกลง, ตัดปุ่มย้อนกลับ; Welcome โชว์มู้ดที่พิมพ์เอง |
| 2026-10-24 | ของกลางก่อนแตก lane: AppHeader, BottomSheet, ToggleChip กลาง, lib/api (places/swipes/trips/mood), lib/trip (plan/combos/personality/geo), data/personalities, route + placeholder Trip/TripDetail/Personality; schema places/trips/swipes ลง snippet (ยังไม่รัน — auto mode ไม่อนุญาต) |
| 2026-10-24 | backup แล้วสร้าง places/trips/swipes + RLS, seed ตัวอย่าง 8 ที่ |
| 2026-10-24 | merge lane B: หน้า Mood + Edge Function mood-reader; gitignore .claude/worktrees |
