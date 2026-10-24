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
| .codex-runs/ , .codex-worktrees/ | prompt/ผล/log ของ Codex และ worktree ชั่วคราว (gitignore) | |
| AGENTS.md | กฎ/บริบทโปรเจกต์สำหรับ Codex และ agent อื่น (sync กับ memory ของ Claude) |
| frontend/ | Vite React app |
| frontend/src/pages/ | หน้าแต่ละ route |
| frontend/src/components/SlideLink.jsx | Link ที่เปลี่ยนหน้าแบบเลื่อน (View Transitions) — ไปหน้าถัดไปเลื่อนขวา→ซ้าย, prop `back` เลื่อนสวนทาง; CSS อยู่ใน index.css | เพิ่มลิงก์ระหว่างหน้า |
| frontend/src/components/AppHeader.jsx | header ในแอป: ปุ่มกลับ (backTo/onBack) + crumb + title + step pill | |
| frontend/src/components/BottomSheet.jsx | sheet ล่าง/dialog กลางจอ (Esc, backdrop, scroll lock) | |
| frontend/src/components/ToggleChip.jsx | chip +/✓ ไม่ขยับ layout | |
| frontend/src/components/plan/ | flow วางทริป (Codex): ScrambleText (สลับตัวอักษรไทยตาม grapheme) + rollReveal.js (เล่นเฉพาะหลังสุ่ม: draft.rollId/revealed), OriginPicker (GPS→จังหวัด + ค้นหา), TripCalendar, DetailCard | |
| frontend/src/components/cards/ | การ์ด Swipe: SwipeDeck (ลาก/บินออก/ย้อน), PlaceCard, StatBars (ชิล ลุย ถ่ายรูป กิน คุ้ม), HoloOverlay, DeckFrame, SwipeControls, DeckStates | |
| frontend/src/components/map/ | แผนที่ (Codex): ContinuousMap, createMapCamera (d3-zoom), CountryMap, PlacePins, ProvinceSheet (มือถือ), ProvinceDetails (ชิ้นข้อมูลจังหวัดใช้ร่วม sheet/แผงข้าง), useIsDesktop, ProvinceSearch, geometry (d3-geo), useMapData, MapStatus; GeoJSON 77 จังหวัด `src/data/geo/thailand.json` (164 KB, lazy load) | |
| frontend/src/components/home/ | หน้า Home: HomeHeader, PersonalityChip, StartBox, TripList, WishProvinces, Sticker, useLoad (hook โหลดครั้งเดียว) | |
| frontend/src/components/personality/ | หน้าบุคลิก: PersonalityCard, PersonalityArt (7 ฉาก), ShareActions, EmptyState | |
| frontend/src/components/trip/ | แผนรายวัน: DayPlan (ลากการ์ดข้ามวัน/กองสำรอง, แตะย้าย fallback), TripBudget, TripOverview, itinerary.js (hydrate/serialize/moveCard); สรุปทริปเดิม: TripSummary, ComboCard, PlaceRow, PlaceThumb, BookingSheet (mock Agoda/Booking/Klook), TripStates | |
| frontend/src/components/mood/ | หน้า Mood: AiMoodBox, MoodTile, MoodIcon, BudgetPicker | |
| backend/supabase/functions/mood-reader/ | Edge Function Gemini: POST {text} → {moods, reason}; secret GEMINI_API_KEY (+ GEMINI_MODEL) — ไม่มี key ตอบ 503 แล้ว frontend จับคำแทน | แก้ prompt AI |
| frontend/src/lib/api/ | ทุกการเรียก supabase ต่อ feature: places, swipes, trips, mood (AI + fallback คำ) — หน้าไหนห้ามเรียก supabase ตรง | เพิ่ม query |
| frontend/src/lib/trip/ | logic ล้วน: plan (planDays เดิม + planTrip/dayCapacities/assignSlots แผนรายวันใหม่), travel (ระยะ/ตัวเลือกพาหนะ ด้วยสูตร), budget (estimateTrip, cheaperAlternatives, formatBaht), random (randomizeTrip), season (เตือนฤดู/คืนเพ็ญ), combos, personality, geo | |
| frontend/src/context/TripDraftContext.jsx | ร่างทริป (useTripDraft: draft/updateDraft/resetDraft + tripLength/travelerCount) เก็บ sessionStorage | เพิ่ม field ใน flow |
| frontend/src/data/travel.js | ตัวเลขประมาณการ: พาหนะ, จังหวะ, สนามบิน/รางรถไฟ, สูตรเดินทาง, ที่พัก/อาหาร/ค่าเข้า, preset งบ | ปรับตัวเลข |
| frontend/src/data/provinceCenters.js | จุดกลาง 77 จังหวัด (ใช้คำนวณระยะ) | |
| frontend/src/components/icons.jsx | ไอคอนกลาง Moon, Sparkle, Logo (ใช้หลายหน้า) |
| frontend/src/components/landing/ | ส่วนประกอบหน้า Landing (Header, Hero, CardStack, Steps, Showcase, CtaBanner, Footer) |
| frontend/src/components/login/ | ส่วนประกอบหน้า Login (LoginArt, GoogleButton) |
| frontend/src/components/register/ | ส่วนประกอบหน้า Register (ProfileCard อัปโหลดรูป, MoodPicker + อื่นๆ, ProvincePicker, ToggleChip, TermsCheckbox, TermsModal) |
| frontend/src/data/ | ข้อมูลคงที่ใช้ร่วม (options.js: MOODS, REGIONS, PROVINCES 77 จังหวัด, POPULAR_PROVINCES; personalities.js 7 แบบ) |
| frontend/src/routes/ | route guard |
| frontend/src/context/ | React context (auth) |
| frontend/src/lib/ | client ภายนอก (supabase) |
| backend/supabase/ | Supabase config |
| AI/gemini-code-1792804922688.json | ข้อมูลสถานที่ต้นฉบับ 28 ที่ + คำขวัญ 5 จังหวัด (import แล้ว) |
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
| `/home` | หน้าหลัก: บุคลิก chip, เริ่มเลือกจังหวัด, ทริปของฉัน, จังหวัดที่อยากไป, เมนูออกจากระบบ (lane A เสร็จ) | private |
| `/map/:province/mood` | เลือกมู้ด ≤3 + AI + งบ (default 2) → `/swipe?moods=&budget=` (lane B เสร็จ) | private |
| `/map/:province/trip` | สรุปทริปจากการปัด รับ state { likedIds, moods, budget } → บันทึก → /trips/:id (lane D เสร็จ) | private |
| `/trips/:id` | ดูทริปที่บันทึก + ลบ (lane D เสร็จ) | private |
| `/personality` | บุคลิกการเที่ยวจาก swipes ขวาทั้งหมด + แชร์ (lane A เสร็จ) | private |
| `/plan/mood` → `/plan/details` → `/plan/swipe` → `/plan/trip` | flow วางทริป (มู้ด+งบ+คน → sheet 🎲/🗺 → แผนที่ → รายละเอียด → ปัด → แผนรายวันลากการ์ดได้) ข้อมูลใน useTripDraft (Codex เพิ่ม draft.itinerary/itineraryKey เก็บแผนที่แก้ค้าง) — เสร็จ รอเทส | private |
| `/map/:province?` | แผนที่เดียว (route เดียว ไม่ remount): pan/pinch/wheel zoom (d3-zoom), แตะจังหวัด = บินซูม + URL replace, ซูมเข้า = เป้ากลางจอ highlight realtime, หมุดทุกที่, sheet ดึงขยาย → mood; หมอก = ยังไม่มีข้อมูล | private |
| `/map/:province/mood` | เลือก mood | private |
| `/map/:province/swipe` | ปัดการ์ด (?moods=&budget=) ลาก/ปุ่ม/คีย์บอร์ด, ย้อนได้, holo rare+ → trip state { likedIds, moods, budget } (lane C เสร็จ) | private |
- "register แล้ว" = มีแถวใน `profiles` (id = auth.users.id)
- จำหน้าเดิมผ่าน `location.state.from` แล้วพากลับหลัง login/register (default /home)
- Register บันทึกเสร็จ: `navigate('/welcome')` + `setProfile(data)` ใน tick เดียวกัน กัน guard /register เด้งก่อน

## Database
`profiles` (local DB) — id, display_name, avatar_url, favorite_moods text[] (id), custom_moods text[] (พิมพ์เอง), provinces text[], regions text[] (ไม่ใช้แล้ว), accepted_terms_at, created_at + RLS เจ้าของเท่านั้น
- Storage bucket `avatars` (public, 2MB, jpg/png/webp) path `<user id>/avatar-<ts>.<ext>` เขียนได้เฉพาะโฟลเดอร์ตัวเอง
- `places` (อ่านได้ทุกคน, เขียนผ่าน Studio) 28 ที่: สุราษฎร์ 8, นครศรี 5, พังงา 5, กระบี่ 5, ภูเก็ต 5; stats = {chill, adventure, photo, food, budget} 0-5
- `trips` (ของตัวเอง) — มีวันที่/คืน/คน/งบ jsonb/ต้นทาง/พาหนะ/จังหวะ/estimate/is_random/spare, days แบบ [{items:[{place,slot,auto}]}]; `swipes` (ของตัวเอง); `profiles.home_province`
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
- ห้ามใช้ emoji ใน UI — ใช้ไอคอน lucide-react / SVG
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
- [x] import ข้อมูลจริง 28 ที่ จาก `AI/gemini-code-1792804922688.json` (ลบ sample แล้ว) — มู้ด Claude กำหนดรายที่ (ค้นเว็บเพิ่ม), rarity: ลับ=ตำนาน พอรู้จัก=หายาก ดัง=ธรรมดา, price ฟรี/ถูก=1 กลาง=2 แพง=3
- [x] รูปสถานที่ 26/28 (Wikimedia 20 + Unsplash 6) — ไม่มีรูป: san-chao-market, laem-homestay (การ์ดใช้ภาพประกอบ)
- [ ] ข้อมูลเพิ่ม ~150 ที่ (กทม. 50, ปริมณฑล 5 จ. 40, ใต้ 5 จ.เดิม +60) + ระบบราง/เรือ กทม. — Codex รอบ 1 กำลังหาข้อมูลใน ../AFOU-codex-data → AI/data/places-*.json, frontend/src/data/transit/bkk.json; รอบ 2 = logic เส้นทาง + UI
- [ ] Gemini API key: ใส่ `backend/supabase/functions/.env` (GEMINI_API_KEY) แล้ว `supabase functions serve mood-reader`; ถ้า 401 ตั้ง `[functions.mood-reader] verify_jwt = false`
- [x] แตก lane A–E แล้ว merge ครบ (A Home/บุคลิก, B Mood/AI, C Swipe, D Trip, E Map — Codex)
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
| 2026-10-24 | merge lane D: หน้าสรุปทริป + ทริปที่บันทึก (ลบได้, จอง mock) |
| 2026-10-24 | merge lane A: หน้า Home + บุคลิกการเที่ยว |
| 2026-10-24 | merge lane E (Codex): หน้า Map + Province |
| 2026-10-24 | backup แล้ว import places 28 ที่ + คอลัมน์ใหม่ (name_en, price_label, coords_uncertain, popularity, best_time, opening_hours, booking_hint, image_license, image_page_url); แตก lane C (Swipe) + lane F (รูป Unsplash) |
| 2026-10-24 | merge lane C: หน้า Swipe + การ์ด holo — flow ครบ Landing → Trip |
| 2026-10-24 | รวม /map + /map/:province เป็น route เดียว, ลง d3-zoom/selection/transition, listAllPlaces; merge lane E2 (Codex): แผนที่ต่อเนื่อง pan/zoom + highlight realtime + sheet ดึงขยาย, ลบ Province.jsx |
| 2026-10-24 | แก้บัคแผนที่: ProvinceSheet เป็น overlay (แผนที่ไม่ resize/กระโดด), เข้า-ออกแบบเลื่อน, หน่วง 250ms ก่อนซ่อนกันกระพริบตอนเป้าหลุดจังหวัด, ซ่อนปุ่มสุ่ม/ป้ายตอน sheet โผล่ |
| 2026-10-24 | หน้าแผนที่เต็มจอ: แผนที่ชนขอบ พื้นครีม, ปุ่มกลับ+ค้นหา+1/3+chip ภาคลอยทับด้านบน (TOP_INSET 136), sheet/แถบควบคุมกว้างสุด 560px บน desktop |
| 2026-10-24 | แผนที่: ซ่อน scrollbar แถว chip (utility `no-scrollbar` ใน index.css); desktop (lg) = แผงซ้าย 380px (ค้นหา, chip ภาคตัดบรรทัด, ข้อมูลจังหวัดเปิดเต็ม) + แผนที่ขวา; มือถือคงเดิม |
| 2026-10-24 | ProvinceSheet มือถือ ดึงขยายได้ถึงครึ่งจอ (เดิมสูงสุด 390px) |
| 2026-10-24 | ProvinceSheet มือถือ ดึงขยายได้ถึง 3/4 ของจอ |
| 2026-10-24 | backup แล้ว update รูป Unsplash 6 ที่ (ratchaprapha-dam, koh-nang-yuan, kiriwong-village, similan-islands, maya-bay, phuket-old-town) |
| 2026-10-24 | backup แล้ว update รูป Wikimedia 9 ที่ (รวมมีรูป 26/28); commit ไฟล์ข้อมูลต้นฉบับ JSON |
| 2026-10-24 | Lane 1 (ของกลาง flow ใหม่): TripDraftContext, data/travel + provinceCenters, lib/trip travel/budget/random/season + planTrip, api profile.updateHomeProvince, createTrip รับ object, route /plan/*, placeholder TripDetails |
| 2026-10-24 | backup แล้ว migrate: profiles.home_province, trips.budget → jsonb + คอลัมน์รายละเอียดทริป; สั่ง Codex (gpt-6.1-sol xhigh) ทำ lane 2–5 ใน worktree ../AFOU-codex-flow (branch codex-flow) |
| 2026-10-24 | เพิ่ม AGENTS.md (กฎ + decision ให้ Codex) |
| 2026-10-24 | merge งาน Codex lane 2–5 (flow วางทริปใหม่ครบ); random.js ใช้วันที่ local แทน UTC |
| 2026-10-24 | ลง lucide-react (ไอคอนแทน emoji — ห้ามใช้ emoji ในเว็บ); สั่ง Codex polish UI (สุ่มเฉพาะหลังกดสุ่ม, เอา emoji ออก, animation ตอนเลือก, ตัดล็อกวันเดินทาง, กันปุ่มทับ slider, chip ไม่เบียด, ปุ่มสุ่มใหม่/ไปต่อเท่ากัน) ใน ../AFOU-codex-polish |
| 2026-10-24 | merge Codex UI polish: ไอคอน lucide แทน emoji ทั้งเว็บ, animation ตอนเลือก, สุ่มสลับตัวอักษรครั้งเดียวหลังกดสุ่ม, ตัดล็อกวันเดินทาง, footer ไม่ทับ, chip ไม่เบียด, ปุ่มสุ่มใหม่/ไปต่อเท่ากัน |
| 2026-10-24 | สั่ง Codex (web search + network) หาข้อมูลสถานที่ ~150 ที่ + เครือข่ายราง/เรือ กทม. (data only) |
| 2026-10-24 | จัดระเบียบ: ลบ worktree ที่ merge แล้ว 7 อัน + branch, ย้ายไฟล์ Codex จาก MyTask/ เข้า .codex-runs/ (gitignore), ต่อไป worktree อยู่ใน .codex-worktrees/ |
