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
| docs/DEPLOY.md | ขั้นตอน deploy Supabase จริง + Google OAuth + Vercel | เปลี่ยนวิธี deploy |
| AGENTS.md | กฎ/บริบทโปรเจกต์สำหรับ Codex และ agent อื่น (sync กับ memory ของ Claude) |
| frontend/ | Vite React app |
| frontend/src/pages/ | หน้าแต่ละ route |
| frontend/src/components/SlideLink.jsx | Link ที่เปลี่ยนหน้าแบบเลื่อน (View Transitions) — ไปหน้าถัดไปเลื่อนขวา→ซ้าย, prop `back` เลื่อนสวนทาง; CSS อยู่ใน index.css | เพิ่มลิงก์ระหว่างหน้า |
| frontend/src/components/AppHeader.jsx | header ในแอป: ปุ่มกลับ (backTo/onBack) + crumb + title + step pill | |
| frontend/src/components/BottomSheet.jsx | sheet ล่าง/dialog กลางจอ (Esc, backdrop, scroll lock) | |
| frontend/src/components/ToggleChip.jsx | chip +/✓ ไม่ขยับ layout | |
| frontend/src/components/trip/ (เดินทางไป-กลับ) | travelLegs.js (buildLegs, legBounds วันแรกเริ่มหลังถึง+transfer / วันสุดท้ายเตือนไม่ทันเที่ยวกลับ, applyLegsTransport), TravelLegRow; บันทึกใน trips.estimate.transportBooking | |
| frontend/src/components/plan/ (เลือกเที่ยว) | TripOption, transportFormat.js; หน้า /plan/transport (แท็บขาไป/กลับ, ไปจองจริง) กลับไปหน้าที่มา (state.from === 'trip' → /plan/trip) | |
| frontend/src/lib/trip/schedules.js + data/schedules/bkk-south.json | ตารางเที่ยวจริง กทม.↔ใต้ 5 จ. (31 route, 191 เที่ยว ณ 2026-10-24: บิน flightstats/Kayak, รถไฟ SRT 2026, รถทัวร์ busticket/busandvan; บขส.บางเที่ยวไม่มีเวลาถึง; สุราษฎร์บินรวม URT+USM) ไม่มี → เที่ยวตัวอย่างจากสูตร; bookingUrl (Google Flights / SRT D-Ticket / 12Go / Maps) | อัปเดตตาราง |
| frontend/src/components/trip/ (เวลา/กองสำรอง) | dayTimes.js (scheduleTrip; มื้อกลางวัน≥12:00 เย็น≥18:00), TimeChip (แตะแก้เวลาเริ่ม), SpareDeck (กองซ้อน ปัดขึ้นวนไปหลัง); draft.itinerary.timeOverrides; trips.days[d].items[].start/end + meals[].start/end | |
| frontend/src/components/trip/ (มื้อ/ที่พัก) | mealPlan.js (buildFoodStay, overrides, serializeFood), MealRow, StayRow, MealSwapSheet, StayChoice, CheckPop — แผนรายวันแทรกมื้อ + แถวคืนนี้; draft.itinerary.mealOverrides['d:meal']; trips.days[d] = { items, meals[], stay } | |
| frontend/src/components/plan/ | flow วางทริป (Codex): ScrambleText (สลับตัวอักษรไทยตาม grapheme) + rollReveal.js (เล่นเฉพาะหลังสุ่ม: draft.rollId/revealed), OriginPicker (GPS→จังหวัด + ค้นหา), TripCalendar, DetailCard | |
| frontend/src/components/cards/ | หน้าปัดทุกหมวด: SwipeStage (shell h-dvh ไม่ scroll + rounds + keyboard ←→↑), SwipeDeck generic (ขวา/ซ้าย/ขึ้น=เก็บไว้ก่อน), RoundIntro (คั่นรอบสอง), RestaurantCard, StayCard, CardParts, swipeHelpers; draft.swipeState/foodKey/foodState/stayKey/stayState เก็บความคืบหน้า; เดิม: SwipeDeck (ลาก/บินออก/ย้อน), PlaceCard, StatBars (ชิล ลุย ถ่ายรูป กิน คุ้ม), HoloOverlay, DeckFrame, SwipeControls, DeckStates | |
| frontend/src/components/map/ | แผนที่ (Codex): ContinuousMap, createMapCamera (d3-zoom), CountryMap, PlacePins, ProvinceSheet (มือถือ), ProvinceDetails (ชิ้นข้อมูลจังหวัดใช้ร่วม sheet/แผงข้าง), useIsDesktop, ProvinceSearch, geometry (d3-geo), useMapData, MapStatus; GeoJSON 77 จังหวัด `src/data/geo/thailand.json` (164 KB, lazy load) | |
| frontend/src/components/home/ | หน้า Home: HomeHeader, PersonalityChip, StartBox, TripList, WishProvinces, Sticker, useLoad (hook โหลดครั้งเดียว) | |
| frontend/src/components/personality/ | หน้าบุคลิก: PersonalityCard, PersonalityArt (7 ฉาก), ShareActions, EmptyState | |
| frontend/src/components/trip/ | แผนรายวัน: DayPlan (ลากการ์ดข้ามวัน/กองสำรอง, แตะย้าย fallback), TripBudget, TripOverview, itinerary.js (hydrate/serialize/moveCard); ComboCard, PlaceThumb, BookingSheet (จองที่พักจากแถวคืนนี้), stayLinks.js (ลิงก์ Agoda + Booking.com ค้นหาจริง กรอกจังหวัด/วันเข้า-ออก/คน/ห้อง, Agoda ใส่ cid เมื่อมี VITE_AGODA_CID; ที่พัก mock ค้นตามจังหวัด), bookingItems.js (รายการสิ่งที่ต้องจอง: ตั๋วไป-กลับทุกครั้งที่ไปเครื่องบิน/รถไฟ/รถทัวร์ แม้ยังไม่เลือกเที่ยว + ที่พัก; serialize/savedBooked), BookingList (การ์ดตั๋วไป-กลับมีรอยปรุ บนสุด + การ์ดที่พักมีปุ่ม Agoda/Booking.com ในแถว, BookingCard, progress), BookingSaveSheet (เช็กลิสต์ก่อนบันทึกทริป), TripStates | |
| frontend/src/components/mood/ | หน้า Mood: AiMoodBox, MoodTile, MoodIcon, BudgetPicker | |
| backend/supabase/functions/mood-reader/ | Edge Function Gemini: POST {text} → {moods, reason}; secret GEMINI_API_KEY (+ GEMINI_MODEL) — ไม่มี key ตอบ 503 แล้ว frontend จับคำแทน | แก้ prompt AI |
| frontend/src/lib/api/ | ทุกการเรียก supabase ต่อ feature: places, swipes, trips, mood (AI + fallback คำ) — หน้าไหนห้ามเรียก supabase ตรง | เพิ่ม query |
| frontend/src/lib/trip/ | logic ล้วน: plan (planDays เดิม + planTrip/dayCapacities/assignSlots แผนรายวันใหม่), travel (ระยะ/ตัวเลือกพาหนะ ด้วยสูตร), budget (estimateTrip, cheaperAlternatives, formatBaht), random (randomizeTrip), season (เตือนฤดู/คืนเพ็ญ), combos, personality, geo | |
| frontend/src/data/moodWords.js + lib/api/mood.js | เดามู้ดจากคำ (ตัด AI แล้ว): คำหลัก 3/คำรอง 1, คำยาวกินคำสั้น, คำปฏิเสธหักคะแนน, พิมพ์ผิด 1 ตัว, ตัวซ้ำ ('ทะเลลลล') — เพิ่มคำที่ data/moodWords.js | เพิ่มคำมู้ด |
| frontend/src/lib/trip/luxury.js | มู้ด luxury (หรูหรา) = ดันของพรีเมียมขึ้นก่อน (premiumScore/sortForMoods) ไม่ใช้กรอง | |
| frontend/src/lib/trip/schedule.js | เวลาจริงในแผน: scheduleDay (เริ่ม 09:00 + visit/มื้อ + เดินทาง 30 กม./ชม.) + overrides เวลาเริ่ม | ปรับสูตรเวลา |
| frontend/src/lib/trip/swipeRounds.js | กติกาปัดทุกหมวด: ขวา/ซ้าย/ขึ้น(เก็บไว้ก่อน) → รอบ 2 เฉพาะที่เก็บ (ปัดขึ้นไม่ได้) | |
| frontend/src/lib/trip/meals.js | planMeals (ร้านที่ชอบลงมื้อ + เติมจาก pool), assignStays (single/multi ต่อคืน) | |
| frontend/src/lib/api/stays.js, restaurants.js + data/mock/ | ที่พัก 66 + ร้าน 88 ชื่อสมมุติ (is_mock) — เปลี่ยนเป็น DB จริงที่ api 2 ไฟล์นี้ | ข้อมูลจริงมา |
| frontend/src/lib/trip/transit.js | เส้นทาง กทม.+ปริมณฑล: โหลด data/transit/bkk.json แบบ lazy, graph สถานี, Dijkstra, ค่าโดยสาร, เดิน/แท็กซี่ fallback (Codex) | แก้สูตรเวลา/ค่าโดยสาร |
| frontend/src/data/transit/bkk.json | เครือข่ายราง+เรือ กทม. 15 สาย 261 สถานี ณ 2026-10-24 พร้อมแหล่งค่าโดยสาร | อัปเดตค่าโดยสาร/สายใหม่ |
| frontend/src/context/TripDraftContext.jsx | ร่างทริป (useTripDraft: draft/updateDraft/resetDraft + tripLength/travelerCount) เก็บ sessionStorage | เพิ่ม field ใน flow |
| frontend/src/data/travel.js | ตัวเลขประมาณการ: พาหนะ, จังหวะ, สนามบิน/รางรถไฟ, สูตรเดินทาง, ที่พัก/อาหาร/ค่าเข้า, preset งบ | ปรับตัวเลข |
| frontend/src/data/provinceCenters.js | จุดกลาง 77 จังหวัด (ใช้คำนวณระยะ) | |
| frontend/src/components/icons.jsx | ไอคอนกลาง Moon, Sparkle, Logo (ใช้หลายหน้า) |
| frontend/src/components/landing/ | ส่วนประกอบหน้า Landing (Header, Hero, CardStack, Steps, Showcase, CtaBanner, Footer) |
| frontend/src/components/login/ | ส่วนประกอบหน้า Login (LoginArt, GoogleButton) |
| frontend/src/components/register/ | ส่วนประกอบหน้า Register (ProfileCard อัปโหลดรูป, MoodPicker + อื่นๆ, ProvincePicker, ToggleChip, TermsCheckbox, TermsModal) |
| frontend/src/data/ | ข้อมูลคงที่ใช้ร่วม (options.js: MOODS, REGIONS, PROVINCES 77 จังหวัด, POPULAR_PROVINCES; personalities.js 7 แบบ; legal.js ข้อตกลง/นโยบาย/อีเมลติดต่อ ใช้ทั้ง TermsModal และ /about) |
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
| frontend/src/routes/pages.jsx | ประกาศหน้า lazy ทุกหน้า + `preloadPage(to)` (SlideLink โหลดหน้าปลายทางก่อนเริ่ม slide) | เพิ่มหน้าใหม่ต้องเพิ่มทั้งที่นี่ (lazyPage + ตาราง routes) และ App.jsx |
| frontend/src/lib/supabase.js | supabase client (env `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) | |
| frontend/.env.example | template env | เพิ่ม env |
| frontend/vercel.json | SPA rewrite ทุก path → index.html (กัน 404 ตอน refresh) | |
| backend/supabase/config.toml | config Supabase local — Google OAuth (`[auth.external.google]`), site_url/redirect = localhost:5173 | แก้ auth/port |
| backend/supabase/.env.example | env ของ config.toml (`SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_ID`, `_SECRET`) | เพิ่ม provider |

## Routes
| path | หน้า | guard |
|------|------|-------|
| `/` | Landing | public only |
| `/about` | เกี่ยวกับ/ติดต่อ/ลิงก์พันธมิตร/ข้อตกลง/ความเป็นส่วนตัว (anchor #about #contact #affiliate #terms #privacy) สำหรับยื่น Agoda Partners | public ทุกคน |
| `/login` | Login Google | public only |
| `/register` | ตั้งค่าโปรไฟล์ครั้งแรก | login แล้ว + ยังไม่มี profile |
| `/welcome` | ต้อนรับหลัง register → ปุ่มไป from ?? /home | private |
| `/home` | หน้าหลัก: บุคลิก chip, เริ่มเลือกจังหวัด, ทริปของฉัน, จังหวัดที่อยากไป, เมนูออกจากระบบ (lane A เสร็จ) | private |
| `/map/:province/mood` | เลือกมู้ด ≤3 + AI + งบ (default 2) → `/swipe?moods=&budget=` (lane B เสร็จ) | private |
| `/map/:province/trip` | สรุปทริปจากการปัด รับ state { likedIds, moods, budget } → บันทึก → /trips/:id (lane D เสร็จ) | private |
| `/trips/:id` | ดูทริปที่บันทึก + ลบ (lane D เสร็จ) | private |
| `/personality` | บุคลิกการเที่ยวจาก swipes ขวาทั้งหมด + แชร์ (lane A เสร็จ) | private |
| `/plan/mood` → `/plan/details` → `/plan/swipe` → `/plan/food` → (ค้างคืน) `/plan/stay` → `/plan/stay/final` (ถ้าชอบ >1) → `/plan/trip` | flow วางทริป (มู้ด+งบ+คน → sheet 🎲/🗺 → แผนที่ → รายละเอียด → ปัด → แผนรายวันลากการ์ดได้) ข้อมูลใน useTripDraft (Codex เพิ่ม draft.itinerary/itineraryKey เก็บแผนที่แก้ค้าง) — เสร็จ รอเทส | private |
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
- เนื้อหาข้อตกลง/นโยบายอยู่ที่ data/legal.js (ร่างโดย Claude ยังไม่ผ่านนักกฎหมาย)
- ห้ามใช้ emoji ใน UI — ใช้ไอคอน lucide-react / SVG
- โฟกัสทริปวันเดียวก่อน; ไม่มีจังหวะเที่ยว — แผนใช้เฉพาะที่ปัดขวา (planLikedOnly) ไม่เติม; FEATURES.intercityTransport / bkkTransit ปิดชั่วคราว (data/travel.js)
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
- [x] Codex รอบ 2: เส้นทางรถไฟฟ้า/เรือ ใน /plan/trip + /trips/:id (TransitRoute, usePlanTransit), โหมด 'transit' ใน 6 จังหวัด BKK_TRANSIT_PROVINCES
- [x] import 150 ที่ (รวม 178 ใน 11 จังหวัด, มีรูป 116) — ข้อมูลเพิ่ม ~150 ที่ (กทม. 50, ปริมณฑล 5 จ. 40, ใต้ 5 จ.เดิม +60) + ระบบราง/เรือ กทม. — deep research กทม. 50 ที่เสร็จแล้วใน `AI/data/deep-research-bkk.md`; ปริมณฑล/ใต้/transit และรอบ 2 logic เส้นทาง + UI ยังรอทำ
- [ ] Deploy: ทำตาม docs/DEPLOY.md — push branch `dev` แล้ว; Supabase cloud project `LaMoon` (ref `wwyzaocpkhdpwkxkpgye`, ap-northeast-2) ลง schema + 178 places + bucket avatars + function mood-reader แล้ว (2026-10-24); เหลือ Google provider, URL config, GEMINI_API_KEY, Vercel
- [ ] สมัคร Agoda Partners ด้วยโดเมน vercel.app → ได้ CID ใส่ VITE_AGODA_CID → เทียบรูปลิงก์กับ dashboard
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
| 2026-10-24 | Deep research สถานที่กรุงเทพฯ 50 แห่ง: เติมค่าเข้า เวลาเปิด/วันปิด ช่วงแนะนำ เวลาเที่ยว แหล่งอ้างอิง และรูปเสรีที่ตรวจสอบผู้สร้างกับใบอนุญาตแล้วใน `AI/data/deep-research-bkk.md` |
| 2026-10-24 | merge Codex transit routing (lib/trip/transit.js + UI ระหว่างสถานที่ในแผนรายวัน) |
| 2026-10-24 | backup แล้ว import 150 ที่ (+คอลัมน์ entry_fee_min/max, visit_minutes, closed_days, mood_reason, sources, coords_source); lazy-load ทุกหน้า (main 480 kB); docs/DEPLOY.md + deploy-remote.sql |
| 2026-10-24 | ของกลางระบบร้าน/ที่พัก: mock data + api, swipeRounds (ปัดขึ้นเก็บไว้ก่อน/รอบ 2), meals/assignStays, estimateTrip รับ stays/meals ราคาจริง, draft fields, route /plan/food /plan/stay /plan/stay/final (placeholder) |
| 2026-10-24 | merge agent B: /plan/stay/final (พักหลายที่/ที่เดียว), แผนรายวันมีมื้อ + สลับร้าน + แถวที่พัก, งบราคาจริง, บันทึก/อ่าน meals+stay |
| 2026-10-24 | merge agent A: ปัดทุกหมวดแบบ rounds (ปัดขึ้นเก็บไว้ก่อน → รอบสอง), การ์ดพอดีจอไม่ scroll, หน้า /plan/food + /plan/stay — flow ร้าน/ที่พักครบ |
| 2026-10-24 | ของกลางรอบปรับ flow: มู้ด luxury, รถส่วนตัว (own_car คิดค่าน้ำมันตามระยะ), FEATURES ปิดการเดินทางข้ามจังหวัด/รถไฟฟ้า, planLikedOnly, schedule.js เวลาจริง, geo.nearestOf |
| 2026-10-24 | merge agent A+B: มู้ดหรูหรา (Gem), หน้า 3 ไม่มีล็อก/จังหวะ, รถส่วนตัว, วันพรุ่งนี้สำหรับทริปวันเดียวในจังหวัด, ป้ายระยะห่างบนการ์ดปัด, แผนใช้เฉพาะที่ชอบ + เวลาจริงแก้ได้ + กองสำรองแบบซ้อน |
| 2026-10-24 | แก้กองการ์ดสำรองว่าง: spare = ที่ปัดข้าม (swipeState.skipped) ก่อน + ที่เที่ยวอื่นที่ตรงมู้ด เรียงใกล้แผน (ไม่เติมลงวันเอง) |
| 2026-10-24 | ทริปวันเดียว: ซ่อนปุ่ม "จองใกล้ที่นี่" (เลิกใช้แล้ว — ลบปุ่มนี้ทั้งหมด 2026-10-25) |
| 2026-10-24 | ทริปค้างคืน: การ์ดไปยังไง 4 แบบ, เที่ยวในพื้นที่ตามพาหนะ (รถส่วนตัว → รถส่วนตัวเท่านั้น), หน้า /plan/transport เลือกเที่ยว + ไปจองจริง, แผนมีแถวเดินทางไป-กลับ + เวลาวันแรก/วันสุดท้ายตามเที่ยว, งบจากราคาเที่ยว |
| 2026-10-24 | ใส่ตารางเที่ยวจริง กทม.↔ใต้ (agent ค้น), getTrips รวมหลาย route + สถานีต่อเที่ยว, รองรับเที่ยวไม่มีเวลาถึง |
| 2026-10-24 | ตารางเครื่องบินเหลือเฉพาะ low cost (AirAsia/Lion/Nok/Vietjet) — ตัดเส้นสมุย (มีแต่ Bangkok Airways) |
| 2026-10-24 | เตรียม deploy + Agoda: push branch dev, หน้า /about (public), footer Landing ลิงก์จริง, data/legal.js, BookingSheet Agoda ลิงก์จริงผ่าน VITE_AGODA_CID |
| 2026-10-24 | Supabase cloud: รัน deploy-remote.sql ผ่าน `supabase db query --linked` (cloud ว่างก่อนรัน), verify 4 ตาราง/68 คอลัมน์/178 places/12 policies/RLS ครบ, deploy mood-reader (verify_jwt) |
| 2026-10-25 | ตัด AI อ่านมู้ด → ระบบเดามู้ดจากคำ (moodWords.js) ปุ่ม 'ช่วยเลือกมู้ดให้'; สั่ง Codex หารูป 62 ที่ + agent ทำหน้าสิ่งที่ต้องจอง |
| 2026-10-25 | เช็กลิสต์ "สิ่งที่ต้องจองก่อนเดินทาง" ก่อนบันทึก (เที่ยวไป-กลับ + ที่พักรวมคืนติดกัน, ติ๊กจองแล้ว เก็บใน trips.estimate.booking.items ไม่ต้องแก้ DB) + การ์ดในหน้าทริป (อ่านอย่างเดียว); ลบ "จองใกล้ที่นี่" ทุกจุด + ลบ TripSummary/PlaceRow; ค้างคืนในจังหวัดตัวเอง รถส่วนตัวขึ้นก่อน+default |
| 2026-10-25 | รูปสถานที่: Codex หารูป Wikimedia ให้ 62 ที่ที่ไม่มีรูป (AI/data/images-missing.json) ใส่ DB local+cloud 33 ที่ (29 ตรง + 4 ใกล้เคียง) — เหลือไม่มีรูป 29/178 ใช้รูปสำรอง; backup ใน backend/supabase/backups/ |
| 2026-10-25 | ภาพประกอบ 29 ที่ที่เหลือ: รูป Pexels/Unsplash ตามประเภทสถานที่ 12 รูป (AI/data/images-illustrative.json) image_license ขึ้นต้น 'ภาพประกอบ ·' — ครบ 178/178 ทั้ง local+cloud; หลัง demo ควรหารูปจริงแทน |
| 2026-10-25 | เที่ยวในพื้นที่: รถส่วนตัวขึ้นเฉพาะตอนขับรถไปเอง (ตัวเลือกเดียว) — ทริปวันเดียว/ในจังหวัด/ไปเครื่องบินรถไฟรถทัวร์ไม่มีรถส่วนตัว (แทนกฎ 'รถส่วนตัวขึ้นก่อน' เดิม) แก้การ์ดกระโดดตอนสลับวันเดียว/ค้างคืน; random ไม่สุ่มได้ own_car |
| 2026-10-25 | ลิงก์จองจริง: เครื่องบิน Google Flights ตามสนามบินจริง (พังงา→HKT) วัน+คน, รถไฟ/รถทัวร์ 12Go วัน+คน (รถไฟใช้สถานีที่ลงจริง เช่น พุนพิน), ที่พัก Agoda/Booking.com พร้อมวัน+คืน+คน; แก้ วันเดินทางเด้งเป็นพรุ่งนี้ตอนกลับมาหน้า 3, slideNavigate กันกดซ้ำ + แถบโหลด html[data-loading] เมื่อเกิน 150ms + เปลี่ยนหน้าเลยเมื่อเกิน 2.5s |
| 2026-10-25 | sheet สิ่งที่ต้องจอง: ตั๋วไป-กลับบนสุดแบบตั๋ว (เวลา/รหัสสนามบินหรือสถานี/ผู้ให้บริการ/ราคา) ยังไม่เลือกเที่ยวก็ขึ้น พร้อม 'เลือกเที่ยว' + 'ค้นหาตั๋ว'; ที่พักมีปุ่ม Agoda/Booking.com ในแถว ไม่มี sheet ซ้อน; ติ๊กจองแล้วเก็บใน draft.bookingChecks (ไม่หาย) |
| 2026-10-25 | ร้าน/ที่พักจริง กทม.: data/realFoodStays.js (REAL_RESTAURANTS 8 + REAL_STAYS 5, Codex ตรวจจาก AI/more-bangkok.json → AI/data/bangkok-food-stays.verified.json + report) — lib/api/restaurants|stays: จังหวัดที่มีของจริงใช้ของจริงเท่านั้น ที่เหลือ mock; การ์ดร้าน/ที่พักแสดงเครดิตรูป, rating ไม่บังคับ; ตัด 3 รายการที่ยืนยันไม่ได้ |
| 2026-10-25 | ตัดแสงประกาย holo บนการ์ดปัด (ลบ HoloOverlay, เหลือการ์ดเอียงตามเมาส์ของ rare+); หน้า 3: แถบเลือกวันเดียว/ค้างคืนเลื่อนแนวนอนในราง (เลิก layoutId) + การ์ด 'ไปยังไง' ยืด-หดความสูงแทนกระโดด |
| 2026-10-25 | หน้า 3: กดสลับวันเดียว/ค้างคืน แล้วหน้าไม่เลื่อนเอง — holdInPlace เลื่อนชดเชยทุกเฟรม 600ms ให้แถบเลือกอยู่ที่เดิม (ปิด overflow-anchor ระหว่างนั้น) |
| 2026-10-25 | ร้าน/ที่พักจริงอีก 9 จังหวัด (ร้าน 84 + ที่พัก 48) แปลงจาก AI/more-*.json + *_research_data.md โดยไม่ได้ตรวจซ้ำ (Codex ติด limit) — unverified: true, ตัด rating/awards/ลิงก์จองปลอม, คิด tier ใหม่, ข้อมูลที่ AI/data/food-stays-unverified.json; ภาพประกอบตามประเภททั้ง mock และของจริงจาก AI/data/food-stay-image-pool.json (Pexels 51 รูป); lib/api: ของจริงน้อยกว่า 5 ร้าน/4 ที่พัก → ต่อด้วย mock (พังงา); สุราษฎร์ยัง mock |
| 2026-10-25 | UI จอคอม (lg: เท่านั้น มือถือเดิม, จุดย้อน tag before-desktop-ui): container 1120px + AppHeader ตาม container (prop className); Landing hero 2 คอลัมน์ CardStack 1.17x/CtaBanner แถว/Footer แถว; Home grid [1fr|380px] ทริป grid 2; Personality 2 การ์ด; About 720px; Register/Welcome 640px; SwipeStage 3 คอลัมน์ (SwipeSidePanels: ProgressPanel ซ้าย, LikedPanel ขวา); Mood มู้ด 4 คอลัมน์ งบ+คนคู่กัน; StayFinal grid 2–3; Trip/TripDetail แผนซ้าย + แผงขวา sticky (ภาพรวม/งบ/จอง/ปุ่มบันทึก), TripDetails ซ้ายเดินทาง ขวาวัน+งบ ปุ่มติดล่าง; TransportPick grid 2 |
| 2026-10-25 | ไปกลับวันเดียวไปจังหวัดใกล้ (≤ DAY_TRIP_MAX_KM 150 กม.) มีการ์ด 'ไปยังไง' (ขับรถเอง/รถทัวร์/รถไฟ) → buildLegs ไม่ตัด daytrip แล้ว (แผนมีแถวขับไป-กลับ, งบค่าน้ำมัน); เที่ยวในจังหวัดตัวเอง รถส่วนตัวขึ้นก่อน+default (วันเดียวและค้างคืน); ข้ามจังหวัดไม่ขับเอง = ไม่มีรถส่วนตัว |
| 2026-10-25 | Landing: การ์ดกองปัด/การ์ดข้าง/Showcase เป็นสถานที่จริงพร้อมรูปจริง + เครดิต (data/landingPlaces.js ใส่ตรง ไม่ดึง DB) — เจอรูปใน DB 404 (เขาสก, ไร่เลย์, เสม็ดนางชี, วัดพระมหาธาตุฯ นครศรีฯ) ใช้รูป Commons ใหม่ใน landing |
| 2026-10-25 | แก้ slide เปลี่ยนหน้ากระตุก (ถ่ายภาพได้ loader เพราะ chunk ยังไม่โหลด): ย้าย lazy pages ไป routes/pages.jsx, slideNavigate รอ preloadPage ก่อน startViewTransition |
