# Deploy LaMoon (Supabase จริง + Vercel)

ขั้นที่ต้อง login (Supabase / Google Cloud / Vercel) ผู้ใช้ทำเอง — Claude เตรียมไฟล์และตรวจให้

## 1. Supabase project
1. supabase.com → New project (region Singapore) → จด `Project URL` และ `anon public key` (Settings → API)
2. SQL Editor → วางทั้งไฟล์ `backend/supabase/backups/deploy-remote.sql` (gitignore — สร้างจาก local ด้วย snippet + `pg_dump` ข้อมูล places) → Run
   - สร้าง profiles / places / trips / swipes + RLS + bucket `avatars` + policies + ข้อมูลสถานที่ 178 ที่
   - ตรวจ: `select count(*) from places;` ต้องได้ 178
3. Authentication → URL Configuration
   - Site URL = `https://<โดเมน vercel>`
   - Redirect URLs เพิ่ม `https://<โดเมน vercel>/**` (และ `http://localhost:5173/**` ถ้าจะเทส local กับ project จริง)

## 2. Google OAuth
1. Google Cloud Console → APIs & Services → Credentials → OAuth client (Web)
   - Authorized redirect URI: `https://<project-ref>.supabase.co/auth/v1/callback`
   - Authorized JavaScript origins: `https://<โดเมน vercel>`
2. Supabase → Authentication → Providers → Google → เปิด + ใส่ Client ID / Secret

## 3. Vercel
1. Import repo `MFMidfield/La-Moon` → Root Directory = `frontend` (Framework: Vite, build `npm run build`, output `dist`)
   - Settings → Git → Production Branch = `dev` (ตอนนี้งานล่าสุดอยู่ dev) หรือ merge เข้า main ก่อน
2. Environment Variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (จากข้อ 1), `VITE_AGODA_CID` (ว่างไว้ก่อนได้ — ดูข้อ 5)
3. Deploy → เอาโดเมนที่ได้ไปใส่ข้อ 1.3 และ 2.1 แล้ว Redeploy ถ้าเปลี่ยน
   - `frontend/vercel.json` มี SPA rewrite แล้ว (refresh หน้าไหนก็ไม่ 404)
   - Vercel Hobby ห้ามใช้เชิงพาณิชย์ — demo hackathon ได้

## 4. (ไม่บังคับ) AI อ่านมู้ดด้วย Gemini
ไม่ทำก็ได้ — ระบบจับคำแทนอัตโนมัติ
1. ลง Supabase CLI → `supabase link --project-ref <ref>`
2. `supabase secrets set GEMINI_API_KEY=...`
3. `supabase functions deploy mood-reader` (ถ้าเรียกแล้ว 401 ใส่ `--no-verify-jwt`)

## 5. Agoda Partners
1. partners.agoda.com → สมัคร affiliate → Website = `https://<โดเมน vercel>` (ชี้หน้า `/about` ถ้าถามหน้านโยบาย/ติดต่อ)
2. อนุมัติแล้ว → เอา CID → Vercel env `VITE_AGODA_CID` → Redeploy (ต้อง build ใหม่ ค่าฝังตอน build)
3. ปุ่ม Agoda ใน sheet จอง จะเปิด `agoda.com/search?cid=<CID>&textToSearch=<ชื่ออังกฤษ/จังหวัด>` — เทียบกับลิงก์จาก Agoda dashboard ถ้า format ต่าง แก้ `agodaUrl()` ใน `frontend/src/components/trip/BookingSheet.jsx`
4. Vercel Hobby ห้ามใช้เชิงพาณิชย์ — มีรายได้ affiliate จริงต้องขึ้น Pro

## เช็กหลัง deploy
- login Google → register (อัปโหลดรูปได้) → มู้ด → สุ่ม/เลือก → แผนที่ (กรุงเทพ/ใต้ไม่เป็นหมอก) → รายละเอียด → ปัด → แผนรายวัน (กรุงเทพมีเส้นทางรถไฟฟ้า) → บันทึก → Home เห็นทริป
- Landing footer → `/about` เปิดได้ทั้งตอน login/ไม่ login, refresh ไม่ 404
