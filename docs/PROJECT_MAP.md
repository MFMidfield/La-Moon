# Project Map

อัปเดตล่าสุด: 2026-10-23

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
| frontend/ | Vite React scaffold (ยังเปล่า) |
| backend/supabase/ | Supabase config |
| AI/ | research ไอเดีย hackathon |

## ไฟล์สำคัญ
| ไฟล์ | ทำอะไร | แตะเมื่อ |
|------|--------|---------|
| - | - | - |

## Database
ยังไม่สร้าง (Claude ไม่แตะ DB — แก้ผ่าน SQL ที่ paste ให้เท่านั้น)

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
- [ ] ผู้ใช้วางโครงโฟลเดอร์/route
- [ ] Claude ร่าง seed data
- [ ] SQL schema (paste ในแชท)

## Log
| วันที่ | ทำอะไร |
|-------|--------|
| 2026-10-23 | วางแผน scope/feature/รายได้ สร้าง PROJECT_MAP |
