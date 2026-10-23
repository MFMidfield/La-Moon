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
| frontend/src/routes/ | route guard |
| frontend/src/context/ | React context (auth) |
| frontend/src/lib/ | client ภายนอก (supabase) |
| backend/supabase/ | Supabase config |
| AI/ | research ไอเดีย hackathon |

## ไฟล์สำคัญ
| ไฟล์ | ทำอะไร | แตะเมื่อ |
|------|--------|---------|
| frontend/src/App.jsx | ประกาศ routes ทั้งหมด | เพิ่ม/ย้ายหน้า |
| frontend/src/context/AuthContext.jsx | session + profile + signInWithGoogle/signOut/refreshProfile (`useAuth`) | แก้ logic auth |
| frontend/src/routes/PrivateRoute.jsx | กันหน้า private: ไม่ login → /login, ไม่มี profile → /register | แก้เงื่อนไขเข้าหน้า |
| frontend/src/routes/PublicOnlyRoute.jsx | / และ /login — login แล้วเด้งไป /map | |
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
| `/map` | แผนที่ไทย | private |
| `/map/:province` | ซูมจังหวัด | private |
| `/map/:province/mood` | เลือก mood | private |
| `/map/:province/swipe` | Swipe | private |
- "register แล้ว" = มีแถวใน `profiles` (id = auth.users.id)
- จำหน้าเดิมผ่าน `location.state.from` แล้วพากลับหลัง login/register

## Database
`profiles` — SQL paste ให้แล้ว 2026-10-24 รอผู้ใช้รัน (Claude ไม่แตะ DB — แก้ผ่าน SQL ที่ paste ให้เท่านั้น)

## Decision ที่ล็อกแล้ว
- Scope MVP hackathon: core flow (map → mood → swipe) + Stat/rarity + การ์ด holo/เปิดซอง + แผนที่ stage select/fog + AI Mood reader + Travel personality + Trip combo
- Quest + check-in ทำแค่ demo mode (จำลองตำแหน่ง)
- รายได้ pitch 3 ขา: Affiliate (mock link) + Quest sponsorship (dashboard mock) + Season pass (mock)
- Roadmap startup: AI ไกด์ mascot, Season event, Creator deck marketplace, Trip bundle, พิมพ์การ์ดจริง
- ข้อมูลสถานที่: seed เอง — Claude ร่าง ทีมตรวจ
- จังหวัด seed: สุราษฎร์ธานี, นครศรีธรรมราช, พังงา, กระบี่, ภูเก็ต (จำนวนที่/จังหวัด ยังไม่เคาะ)
- LLM: Gemini
- Commit ทุกงาน ไม่ push

## ค้างอยู่
- [ ] เคาะจำนวนสถานที่ต่อจังหวัด
- [x] วาง route + private route
- [ ] ผู้ใช้รัน SQL `profiles` + ใส่ `.env`
- [ ] ทำฟอร์ม Register (insert profiles)
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
