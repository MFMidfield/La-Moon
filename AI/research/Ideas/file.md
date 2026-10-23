# 100 Startup Ideas สำหรับ Hackathon “Make Me Money”

> **ฉบับภาษาไทยสำหรับนำไปให้ AI Critic วิเคราะห์ต่อ**  
> สรุปจากรายการ IDEA-001 ถึง IDEA-100 ที่สร้างไว้ในบทสนทนานี้ โดยคงทั้ง 13 ฟิลด์ (รวม ID) สำหรับทุกไอเดีย ไม่ใช่ข้อยืนยันว่าไอเดียผ่านการทดสอบตลาดแล้ว

## 0. บริบทการแข่งขัน

- **ประเภท:** Web/Application/Software Startup
- **โจทย์:** Make Me Money — มีช่องทางสร้างรายได้จริง
- **เวลาทำ:** 1 วันเต็ม + ครึ่งวัน (ประมาณ 1.5 วัน)
- **ทีม:** นักเรียนมัธยมปลาย ใช้ AI-assisted Coding ได้ แต่ไม่ควรประเมินกำลังการพัฒนาสูงเกินจริง
- **สิ่งที่ส่ง:** Prototype ใช้ได้จริง, วิดีโอ Pitch 2 นาที, สาธิต Core Workflow, อธิบาย Business Model
- **เกณฑ์:** Problem & Opportunity 20; Completeness & Usability 30; Business Feasibility & Impact 30; Pitch & Q&A 20
- **Tourism Bonus:** มีข่าวว่าอาจมี Bonus แต่ยังไม่ทราบน้ำหนักอย่างเป็นทางการ อย่ายึด Bonus เป็นหลัก
- **ขอบเขต MVP:** Core Function ต้องทำงานจริง; ชำระเงินแบบทดลองต้องระบุว่าเป็น **Mock Payment**; ไม่พึ่ง Hardware, Dataset ใหญ่, หรือ API ปิด/แพงแบบไม่มีแผนสำรอง

## 1. Phase 1 — Problem Discovery และภาพรวม Research

### 1.1 กลุ่มปัญหา

1. **Tourism:** เลือกที่เที่ยวใต้ข้อจำกัดงบ เวลา อากาศ การเดินทาง และการหาลูกค้าของร้านชุมชน
2. **SME:** งานออเดอร์ ต้นทุน มัดจำ สต็อก จองเวลา และการสื่อสารลูกค้า
3. **Education:** เอกสารสมัคร การจัดทรัพยากร กิจกรรม และข้อมูลการเรียน
4. **Productivity:** การอนุมัติ ติดตามงาน เวอร์ชันเอกสาร และงานซ้ำในองค์กรเล็ก
5. **Lifestyle / Marketplace / Community:** ทรัพยากรร่วมกัน การจับคู่ผู้ซื้อ–ผู้ขาย และการบริหารชุมชน

### 1.2 ข้อมูลภายนอกที่ถูกกล่าวถึงในการวิจัยเดิม

| เรื่อง | สิ่งที่ทราบ/ตัวอย่างแหล่งข้อมูล | ข้อจำกัด |
|---|---|---|
| ข้อมูลท่องเที่ยว | data.go.th และข้อมูล ททท. | ต้องทดสอบการดาวน์โหลด, ฟิลด์, ความครบ, License ก่อนใช้ |
| แผนเที่ยว | Wanderlog มีแผนเที่ยว, Map, Budget และ Collaboration | แนวคิดสร้าง itinerary อย่างเดียวไม่ต่างพอ |
| กิจกรรมท่องเที่ยว | Klook มีตลาดกิจกรรมและระบบ Merchant | Marketplace ใหม่ต้องแก้ปัญหาที่ต่างออกไป |
| SME / บัญชี | FlowAccount มีเอกสาร บัญชี สต็อก และการชำระเงิน | ไม่ควรสร้างระบบทั่วไปซ้ำโดยไร้ความต่าง |
| ช่องทางขาย SME | งานสำรวจ ETDA กล่าวถึง Marketplace, เว็บไซต์ และ Social Commerce | ไม่ได้ยืนยันว่าลูกค้าของแต่ละไอเดียยอมจ่าย |
| แผนที่ | Google Maps Platform มี Pricing ตามบริการ; OSM เป็นอีกแหล่งแผนที่ | ต้องตรวจ License, เงื่อนไขและค่าใช้งานจริง |
| Geocoding | Nominatim สาธารณะมี Rate Limit และไม่รองรับ Autocomplete ตามรูปแบบทั่วไป | ต้อง Cache/ใช้ข้อมูล curated และอ่านนโยบาย |
| สภาพอากาศ | Open-Meteo มี Free API สำหรับกรณี non-commercial | ใช้เชิงพาณิชย์ต้องตรวจเงื่อนไขบริการ |
| คู่แข่งเฉพาะทาง | Splitwise (แบ่งค่าใช้จ่าย), Notion (Dependency), Traffy Fondue (แจ้งปัญหาเมือง) | ห้ามอ้างว่าเป็นตลาดว่างเปล่า |

> **หมายเหตุหลักฐาน:** ตารางนี้เป็นการถ่ายทอด Research จากคำตอบก่อนหน้า ไม่ใช่การตรวจสอบเว็บไซต์สดใหม่ในขั้นตอนสร้างไฟล์ คำว่า VERIFIED ในแต่ละ Idea Card หมายถึงมีหลักฐานสนับสนุนเรื่อง *ตลาด/ผลิตภัณฑ์ที่เกี่ยวข้อง* ไม่ใช่พิสูจน์ว่าลูกค้ายอมจ่ายให้ผลิตภัณฑ์ใหม่

### 1.3 เกณฑ์ประเมิน

- **HIGH:** ทำ Core Workflow ได้ภายใน 1.5 วันด้วยทีมและข้อมูลจำกัด
- **MEDIUM:** มี Integration, ข้อมูลหรือ Business Logic ที่ต้องเผื่อความเสี่ยง
- **LOW:** มีความเสี่ยงสูงที่จะ Demo คุณค่าจริงได้ไม่ครบในเวลาที่กำหนด
- **VERIFIED:** มีหลักฐานภายนอกเกี่ยวกับปัญหา ตลาด หรือคู่แข่ง แต่ยังไม่พิสูจน์การจ่ายเงินจริง
- **ASSUMPTION:** Problem/Revenue ยังเป็นสมมติฐานที่ต้องสัมภาษณ์ลูกค้า
- **UNKNOWN:** ยังขาดหลักฐานสำคัญหรือมีความไม่แน่นอนที่ยอมรับไม่ได้หากไม่ตรวจต่อ

## 2. Phase 2–3 — ไอเดีย 100 รายการ พร้อม Self-Criticism

**รูปแบบทุกไอเดีย:** ID, Name, Category, Problem, Target Customer, Solution, Core MVP (สูงสุด 3 ฟังก์ชัน), Revenue Model, Data / API, Differentiation, Biggest Risk, Feasibility, Evidence Status

### Batch 1/5 — IDEA-001 ถึง IDEA-020

**หมวด: การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)**

#### IDEA-001 — MoodSwipe Trip

- **ID:** IDEA-001
- **Name:** MoodSwipe Trip
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** นักท่องเที่ยวรู้บรรยากาศที่อยากได้แต่เลือกจุดหมายไม่ออก
- **Target Customer:** นักท่องเที่ยวใช้; ร้านค้า/กิจกรรมท่องเที่ยวจ่าย
- **Solution:** ปัดเลือกสถานที่จากภาพและอารมณ์เพื่อสร้างแผน
- **Core MVP:** 1. Swipe สถานที่; 2. จัดอันดับจากแท็ก; 3. สร้างแผนเที่ยว
- **Revenue Model:** ร้านจ่ายค่า Sponsored Placement ที่ติดป้ายชัดเจน
- **Data / API:** สถานที่ curated 30–50 แห่ง, ภาพมีสิทธิ์, Supabase
- **Differentiation:** เริ่มจากความรู้สึกแทนชื่อสถานที่
- **Biggest Risk:** ฟังก์ชันปัดอาจเป็นเพียงลูกเล่น; แอปวางแผนเดิมมีอยู่แล้ว
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-002 — BudgetReality

- **ID:** IDEA-002
- **Name:** BudgetReality
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ตั้งงบทริปแล้วไม่รู้ว่ารายการเที่ยวที่ต้องการเกินงบหรือไม่
- **Target Customer:** นักท่องเที่ยวใช้; ผู้จัดทริปจ่าย
- **Solution:** ตรวจงบคงเหลือหลังค่าเดินทาง ที่พัก และกิจกรรม
- **Core MVP:** 1. กรอกงบ; 2. เลือกค่าใช้จ่าย; 3. เปรียบเทียบแผน
- **Revenue Model:** ผู้จัดทริปจ่ายเพื่อทำ/แชร์ใบเสนอราคา
- **Data / API:** ราคาที่ผู้ใช้กรอกและค่าใช้จ่ายตัวอย่าง; ไม่มีราคาสด
- **Differentiation:** ประเมินความเป็นไปได้ทางการเงินก่อนเลือกจุดหมาย
- **Biggest Risk:** ราคาจริงเปลี่ยน; Spreadsheet ฟรีทดแทนได้
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-003 — TripConsensus

- **ID:** IDEA-003
- **Name:** TripConsensus
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** เพื่อนร่วมทริปตกลงสถานที่เที่ยวไม่ได้
- **Target Customer:** กลุ่มนักท่องเที่ยวใช้; ผู้จัดทริปกลุ่มจ่าย
- **Solution:** โหวตและคัดตัวเลือกภายใต้ข้อจำกัดร่วมกัน
- **Core MVP:** 1. สร้างห้อง; 2. โหวตสถานที่; 3. สรุปฉันทามติ
- **Revenue Model:** ผู้จัดทริปจ่ายต่อห้อง/รายงานผล
- **Data / API:** Supabase Realtime, สถานที่ที่สมาชิกเพิ่ม
- **Differentiation:** แก้ปัญหาการตกลงร่วมกัน ไม่ใช่แค่จัด itinerary
- **Biggest Risk:** แบบสำรวจและ Poll ในแชตฟรีอาจเพียงพอ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-004 — NoCar Explorer

- **ID:** IDEA-004
- **Name:** NoCar Explorer
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ผู้ไม่มีรถไม่รู้ว่าสถานที่ใดเดินทางไปถึงได้จริง
- **Target Customer:** นักท่องเที่ยวใช้; ที่พัก/ผู้จัดกิจกรรมจ่าย
- **Solution:** แนะนำเส้นทางที่ไม่ต้องใช้รถส่วนตัว
- **Core MVP:** 1. เลือกต้นทาง; 2. กรองเส้นทาง; 3. ดูวิธีเดินทาง
- **Revenue Model:** ที่พักจ่ายเพื่อแนะนำเส้นทางให้แขก
- **Data / API:** เส้นทางตรวจเองในพื้นที่นำร่อง; OSM
- **Differentiation:** การไม่มีรถเป็นข้อจำกัดหลักของการค้นหา
- **Biggest Risk:** ข้อมูลรถท้องถิ่นไม่ครบหรือเปลี่ยนโดยไม่แจ้ง
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-005 — RainPlan

- **ID:** IDEA-005
- **Name:** RainPlan
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ฝนทำให้กำหนดการเที่ยวกลางแจ้งใช้ไม่ได้
- **Target Customer:** นักท่องเที่ยวใช้; ที่พักจ่าย
- **Solution:** สลับสถานที่กลางแจ้งเป็นกิจกรรมในร่ม
- **Core MVP:** 1. เลือกทริป; 2. ตรวจเงื่อนไขอากาศ; 3. สร้างแผนสำรอง
- **Revenue Model:** ที่พักจ่ายค่า Widget เสนอแผนสำรอง
- **Data / API:** กิจกรรม curated; Open-Meteo ภายใต้เงื่อนไขหรือข้อมูลจำลอง
- **Differentiation:** แก้แผนเที่ยวที่มีอยู่แล้วเมื่อสภาพอากาศเปลี่ยน
- **Biggest Risk:** ข้อมูลพยากรณ์คลาดเคลื่อนและเงื่อนไข API เชิงพาณิชย์
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-006 — HiddenTown

- **ID:** IDEA-006
- **Name:** HiddenTown
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ร้านค้าชุมชนในเมืองรองเข้าถึงนักท่องเที่ยวยาก
- **Target Customer:** นักท่องเที่ยวใช้; ร้านค้าชุมชนจ่าย
- **Solution:** ค้นพบร้านและจุดเที่ยวรองตามความสนใจ
- **Core MVP:** 1. โปรไฟล์ร้าน; 2. ตัวกรองความสนใจ; 3. คำขอติดต่อ
- **Revenue Model:** ร้านจ่ายค่าหน้าร้าน/จัดการลูกค้า
- **Data / API:** ข้อมูลร้านสมัครเอง; Open Data ท่องเที่ยว
- **Differentiation:** เน้นผู้ประกอบการเล็กที่ไม่ติดอันดับยอดนิยม
- **Biggest Risk:** ไม่มีร้านเข้าร่วมแล้วไม่มี Supply; คำว่า Hidden ไม่ใช่คุณภาพ
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-007 — AccessTrip

- **ID:** IDEA-007
- **Name:** AccessTrip
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ผู้มีข้อจำกัดด้านการเคลื่อนไหวไม่รู้ว่าสถานที่รองรับจริงไหม
- **Target Customer:** นักท่องเที่ยวใช้; ที่พัก/สถานที่จ่าย
- **Solution:** แสดง Accessibility พร้อมหลักฐานและวันตรวจสอบ
- **Core MVP:** 1. โปรไฟล์สถานที่; 2. Checklist; 3. ภาพหลักฐาน
- **Revenue Model:** สถานที่จ่ายเพื่อจัดการโปรไฟล์ที่อัปเดตได้
- **Data / API:** ข้อมูล/ภาพจากผู้ประกอบการ; Supabase Storage
- **Differentiation:** แสดงแหล่งอ้างอิงและวันที่ของข้อมูลการเข้าถึง
- **Biggest Risk:** ข้อมูลผิดกระทบความปลอดภัย; ต้องมีกระบวนการยืนยัน
- **Feasibility:** MEDIUM
- **Evidence Status:** UNKNOWN

#### IDEA-008 — AllergyTravel Card

- **ID:** IDEA-008
- **Name:** AllergyTravel Card
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** นักเดินทางสื่อสารข้อจำกัดอาหารต่างภาษาได้ยาก
- **Target Customer:** นักท่องเที่ยวใช้; โรงแรมจ่าย
- **Solution:** บัตรข้อความหลายภาษาจากแม่แบบตรวจทานแล้ว
- **Core MVP:** 1. เลือกส่วนผสม; 2. สร้างข้อความ; 3. แสดงบัตร
- **Revenue Model:** โรงแรมจ่ายเพื่อให้แขกใช้เครื่องมือ
- **Data / API:** ข้อความแปลตรวจทานแล้ว; ไม่ต้องใช้ AI
- **Differentiation:** ใช้ข้อความมาตรฐานแทนแปลอิสระ
- **Biggest Risk:** คำแปลผิดเสี่ยงต่อสุขภาพ; ไม่รับประกันอาหารปลอดภัย
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-009 — QuietEscape

- **ID:** IDEA-009
- **Name:** QuietEscape
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ข้อมูลความสงบของสถานที่ท่องเที่ยวค้นหายาก
- **Target Customer:** นักท่องเที่ยวใช้; ที่พักแนวพักผ่อนจ่าย
- **Solution:** กรองสถานที่ตามลักษณะเสียงและเวลาที่สงบ
- **Core MVP:** 1. เพิ่มสถานที่; 2. ระบุบรรยากาศ; 3. กรองผล
- **Revenue Model:** ที่พักจ่ายค่าโปรไฟล์
- **Data / API:** ข้อมูลบรรยากาศที่กรอกเอง
- **Differentiation:** เน้นสภาพแวดล้อมมากกว่าความนิยม
- **Biggest Risk:** ความสงบเป็นอัตวิสัยและขึ้นกับช่วงเวลา
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-010 — WorkshopSeat

- **ID:** IDEA-010
- **Name:** WorkshopSeat
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ผู้จัด Workshop ท้องถิ่นรับจองและนับที่นั่งผ่านแชต
- **Target Customer:** นักท่องเที่ยวใช้; เจ้าของ Workshop จ่าย
- **Solution:** จองรอบกิจกรรมพร้อมจัดการที่นั่ง
- **Core MVP:** 1. สร้างรอบ; 2. รับคำขอจอง; 3. Dashboard ที่นั่ง
- **Revenue Model:** ผู้จัดจ่ายค่าระบบต่อรอบ/รายเดือน
- **Data / API:** ข้อมูลกิจกรรม, Supabase
- **Differentiation:** เครื่องมือจองขนาดเล็กสำหรับ Workshop ชุมชน
- **Biggest Risk:** ระบบจองทั่วไปและ Klook เป็นคู่แข่ง; ร้านไม่ย้ายระบบ
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED

#### IDEA-011 — LocalRoute Publisher

- **ID:** IDEA-011
- **Name:** LocalRoute Publisher
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ไกด์ท้องถิ่นเปลี่ยนความรู้เรื่องเส้นทางเป็นสินค้าดิจิทัลได้ยาก
- **Target Customer:** นักท่องเที่ยวซื้อ; ไกด์ใช้และแบ่งรายได้
- **Solution:** สร้างและขายเส้นทางท่องเที่ยวพร้อมเรื่องเล่า
- **Core MVP:** 1. Route Editor; 2. แผนที่ Preview; 3. ลิงก์เข้าถึง
- **Revenue Model:** เก็บส่วนแบ่งเมื่อขาย Route สำเร็จ
- **Data / API:** ข้อมูลไกด์, พิกัด, OSM
- **Differentiation:** ขายความรู้เส้นทาง ไม่ใช่แพ็กเกจทัวร์
- **Biggest Risk:** ลูกค้าคัดลอกเส้นทางหรือหาเส้นทางฟรี
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-012 — StopoverGo

- **ID:** IDEA-012
- **Name:** StopoverGo
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ผู้โดยสารที่มีเวลาคั่นกลางไม่รู้ว่ามีกิจกรรมใดไปทัน
- **Target Customer:** นักท่องเที่ยวใช้; ร้านใกล้สถานีจ่าย
- **Solution:** คัดกิจกรรมจากเวลาว่างและระยะทาง
- **Core MVP:** 1. เลือกสถานี; 2. ระบุเวลาว่าง; 3. ดูตัวเลือกพร้อม Buffer
- **Revenue Model:** ร้านจ่ายค่าข้อเสนอสำหรับคนเดินทางผ่าน
- **Data / API:** สถานที่/เวลานำร่องที่ตรวจสอบเอง
- **Differentiation:** ออกแบบสำหรับการเที่ยวช่วงต่อรถสั้น ๆ
- **Biggest Risk:** ระยะเวลาเดินทางผิดทำให้พลาดรถหรือเที่ยวต่อ
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-013 — FieldTrip Quote

- **ID:** IDEA-013
- **Name:** FieldTrip Quote
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** จัดทัศนศึกษาคำนวณต้นทุนและราคาต่อหัวลำบาก
- **Target Customer:** ครูใช้; โรงเรียน/ผู้จัดทัศนศึกษาจ่าย
- **Solution:** ทำใบประมาณการที่แยกต้นทุนคงที่และต่อคน
- **Core MVP:** 1. กรอกจำนวนคน; 2. กรอกต้นทุน; 3. Export PDF
- **Revenue Model:** ผู้จัดจ่ายค่าเอกสารหรือแพ็กเกจ
- **Data / API:** ราคาผู้จัดกรอก, PDF Generator
- **Differentiation:** ออกแบบตามตัวแปรเฉพาะทัศนศึกษา
- **Biggest Risk:** Spreadsheet ฟรีได้; มีระเบียบจัดซื้อแตกต่างกัน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-014 — StayCheck

- **ID:** IDEA-014
- **Name:** StayCheck
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ที่พักเล็กติดตามสถานะเตรียมห้องและคำขอแขกไม่สะดวก
- **Target Customer:** เจ้าของที่พักใช้และจ่าย
- **Solution:** บอร์ดเตรียมห้องและข้อมูลการเช็กอิน
- **Core MVP:** 1. Room Board; 2. งานเตรียมห้อง; 3. ฟอร์มเวลาเข้าพัก
- **Revenue Model:** ที่พักจ่ายรายเดือนตามจำนวนห้อง
- **Data / API:** Supabase; กรอกข้อมูลเอง
- **Differentiation:** เน้นก่อนเข้าพัก ไม่ทำ PMS เต็มระบบ
- **Biggest Risk:** ที่พักที่มี PMS อาจไม่ต้องการระบบซ้ำ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-015 — TourSeat Ledger

- **ID:** IDEA-015
- **Name:** TourSeat Ledger
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ทัวร์เล็กติดตามที่นั่ง เงินมัดจำ และรายชื่อด้วยหลายเครื่องมือ
- **Target Customer:** ผู้ประกอบการทัวร์ใช้และจ่าย
- **Solution:** รวมสถานะรอบทัวร์กับยอดเงินที่บันทึก
- **Core MVP:** 1. เปิดรอบ; 2. รับจอง; 3. นับที่นั่งและมัดจำ
- **Revenue Model:** คิดค่าระบบตามรอบ/Booking
- **Data / API:** Supabase; บันทึกเงินมือ
- **Differentiation:** หลังบ้านทัวร์เล็ก ไม่ใช่แพลตฟอร์มหาลูกค้า
- **Biggest Risk:** ความถูกต้องของที่นั่งและข้อมูลเงินต้องสูง
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-016 — TownStamp

- **ID:** IDEA-016
- **Name:** TownStamp
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ร้านในย่านท่องเที่ยวไม่มีเครื่องมือชวนลูกค้าแวะหลายร้าน
- **Target Customer:** นักท่องเที่ยวใช้; ร้าน/สมาคมย่านจ่าย
- **Solution:** สะสมตราประทับดิจิทัลข้ามร้าน
- **Core MVP:** 1. แผนที่ร้าน; 2. ร้านยืนยันรหัส; 3. แลกรางวัลสาธิต
- **Revenue Model:** ร้านจ่ายค่าร่วมแคมเปญ
- **Data / API:** ร้านเข้าร่วม, Supabase, QR Code
- **Differentiation:** Loyalty ระดับย่าน ไม่ใช่ร้านเดียว
- **Biggest Risk:** ต้องมีร้านหลายแห่งก่อน; เสี่ยงโกง Stamp
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-017 — IslandTransfer Board

- **ID:** IDEA-017
- **Name:** IslandTransfer Board
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ผู้เดินทางไปเกาะตามหาข้อมูลเรือหลายแหล่ง
- **Target Customer:** นักท่องเที่ยวใช้; ที่พัก/เรือจ่าย
- **Solution:** กระดานรอบเรือที่ผู้ให้บริการอัปเดตเอง
- **Core MVP:** 1. ตารางเรือ; 2. Dashboard ผู้ให้บริการ; 3. วันอัปเดต
- **Revenue Model:** ผู้ให้บริการจ่ายค่าแสดงข้อมูล/รับคำถาม
- **Data / API:** ข้อมูลเรือผู้ประกอบการกรอกเอง
- **Differentiation:** แสดงแหล่งและอายุข้อมูลชัดเจน
- **Biggest Risk:** ตารางเก่าอันตราย; ไม่ใช่ข้อมูล Real-time
- **Feasibility:** MEDIUM
- **Evidence Status:** UNKNOWN

#### IDEA-018 — FarmVisit

- **ID:** IDEA-018
- **Name:** FarmVisit
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ฟาร์มท่องเที่ยวจัดรอบเข้าชมตามฤดูกาลลำบาก
- **Target Customer:** นักท่องเที่ยวใช้; ฟาร์มจ่าย
- **Solution:** จองกิจกรรมฟาร์มตามรอบและ Capacity
- **Core MVP:** 1. สร้างกิจกรรม; 2. เลือกรอบ; 3. ส่งคำขอจอง
- **Revenue Model:** ฟาร์มจ่ายค่าระบบจอง
- **Data / API:** ข้อมูลฟาร์ม, Supabase
- **Differentiation:** รองรับกิจกรรมตามฤดูกาล
- **Biggest Risk:** ความต้องการผันผวน; ระบบจองทั่วไปทดแทนได้
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-019 — PetTrip Verified

- **ID:** IDEA-019
- **Name:** PetTrip Verified
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** เจ้าของสัตว์เลี้ยงหากฎเข้าที่พัก/สถานที่ได้ยาก
- **Target Customer:** เจ้าของสัตว์ใช้; ที่พักจ่าย
- **Solution:** ฐานข้อมูลข้อกำหนดรับสัตว์ที่ผู้ประกอบการดูแล
- **Core MVP:** 1. ค้นหาสถานที่; 2. แสดงกฎ; 3. ร้านแก้ไขข้อมูล
- **Revenue Model:** ที่พักจ่ายค่าโปรไฟล์/รับคำขอ
- **Data / API:** ข้อมูลผู้ประกอบการ, Supabase
- **Differentiation:** รายละเอียดเงื่อนไขมากกว่าป้าย Pet-friendly
- **Biggest Risk:** ข้อมูลเก่าทำให้ถูกปฏิเสธเมื่อเดินทางถึง
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-020 — MenuBridge

- **ID:** IDEA-020
- **Name:** MenuBridge
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ร้านอาหารท้องถิ่นอธิบายเมนูให้ลูกค้าต่างชาติได้ยาก
- **Target Customer:** ร้านอาหารใช้และจ่าย; นักท่องเที่ยวอ่าน
- **Solution:** สร้าง QR Menu หลายภาษาที่เจ้าของร้านตรวจ
- **Core MVP:** 1. เพิ่มเมนู; 2. แก้คำแปล; 3. สร้าง QR
- **Revenue Model:** ร้านจ่ายค่าติดตั้ง/ดูแล
- **Data / API:** เมนูและคำแปลจากร้าน, QR Generator
- **Differentiation:** เพิ่มบริบทอาหารท้องถิ่นผ่านคำแปลที่ร้านยืนยัน
- **Biggest Risk:** QR Menu และเครื่องแปลมีมาก; ลูกค้าอาจไม่จ่าย
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

### Batch 2/5 — IDEA-021 ถึง IDEA-040

#### IDEA-021 — FestivalBooth

- **ID:** IDEA-021
- **Name:** FestivalBooth
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ผู้จัดเทศกาลรับสมัครร้านและจัดล็อกยุ่งยาก
- **Target Customer:** ผู้จัดเทศกาลใช้และจ่าย; ร้านค้าใช้
- **Solution:** รับสมัครร้านและจัดสรรพื้นที่ขาย
- **Core MVP:** 1. ผังบูธ; 2. ฟอร์มสมัคร; 3. อนุมัติพร้อมสถานะ
- **Revenue Model:** ผู้จัดงานจ่ายต่อเทศกาล
- **Data / API:** ผังอัปโหลด, Supabase
- **Differentiation:** เชื่อมการสมัครกับแผนผังจริง
- **Biggest Risk:** จัดงานไม่บ่อย; ผู้จัดอาจใช้กระบวนการเดิม
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-022 — TripSplit

- **ID:** IDEA-022
- **Name:** TripSplit
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** เพื่อนทริปสำรองจ่ายแทนกันจนคำนวณคืนไม่ถูก
- **Target Customer:** กลุ่มเที่ยวใช้; ผู้จัดทริปจ่าย
- **Solution:** แยกค่าใช้จ่ายและหายอดคืนระหว่างสมาชิก
- **Core MVP:** 1. สร้างกลุ่ม; 2. บันทึกบิล; 3. คำนวณยอดค้าง
- **Revenue Model:** คิดค่ารายงาน/จัดการหลายกลุ่ม
- **Data / API:** Supabase; ไม่มีเชื่อมธนาคาร
- **Differentiation:** โฟกัสการปิดบัญชีทริป
- **Biggest Risk:** Splitwise/Spreadsheet ทดแทนและยากต่อการเก็บเงิน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-023 — EcoRoute Compare

- **ID:** IDEA-023
- **Name:** EcoRoute Compare
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** นักท่องเที่ยวเปรียบเทียบการปล่อยคาร์บอนแต่ละวิธีเดินทางไม่สะดวก
- **Target Customer:** นักท่องเที่ยวใช้; ผู้จัดกิจกรรมจ่าย
- **Solution:** ประมาณการคาร์บอนพร้อมแสดงสมมติฐาน
- **Core MVP:** 1. กรอกระยะทาง; 2. เลือกวิธีเดินทาง; 3. แสดงผล
- **Revenue Model:** ผู้จัดจ่ายค่ารายงานแผน
- **Data / API:** Emission Factor ที่อ้างอิง, ระยะทางผู้ใช้กรอก
- **Differentiation:** เปิดเผยสูตรและข้อจำกัดแทนกล่าวอ้างสีเขียวลอย ๆ
- **Biggest Risk:** สูตรคลาดเคลื่อนและความเสี่ยง Greenwashing
- **Feasibility:** MEDIUM
- **Evidence Status:** UNKNOWN

#### IDEA-024 — GuestLost

- **ID:** IDEA-024
- **Name:** GuestLost
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** ที่พักติดตามสิ่งของที่ลูกค้าลืมไว้ลำบาก
- **Target Customer:** ที่พัก/สถานที่ท่องเที่ยวใช้และจ่าย
- **Solution:** ทะเบียนของหายและกระบวนการส่งคืน
- **Core MVP:** 1. ลงรายการของ; 2. แบบแจ้งหาย; 3. ติดตามสถานะ
- **Revenue Model:** สถานที่จ่ายค่าระบบ Lost & Found
- **Data / API:** Supabase Storage และ Database
- **Differentiation:** เก็บหลักฐานผู้รับของและขั้นตอนส่งคืน
- **Biggest Risk:** ต้องยืนยันเจ้าของโดยไม่เปิดเผยข้อมูลส่วนบุคคล
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-025 — SouvenirReserve

- **ID:** IDEA-025
- **Name:** SouvenirReserve
- **Category:** การท่องเที่ยวและเศรษฐกิจท้องถิ่น (Tourism & Local Economy)
- **Problem:** นักท่องเที่ยวอยากได้ของฝากแต่มีเวลาซื้อหรือรอทำจำกัด
- **Target Customer:** นักท่องเที่ยวใช้; ผู้ผลิตของฝากจ่าย
- **Solution:** สั่งจองสินค้าและนัดจุดรับล่วงหน้า
- **Core MVP:** 1. Catalog; 2. ฟอร์มจอง; 3. Dashboard เตรียมสินค้า
- **Revenue Model:** ผู้ขายจ่ายต่อคำสั่งซื้อที่สำเร็จ
- **Data / API:** ข้อมูลร้าน, Supabase, Mock Payment
- **Differentiation:** Preorder ก่อนถึงแหล่งท่องเที่ยว
- **Biggest Risk:** ไม่มีสินค้าเมื่อมารับ; ปริมาณออเดอร์ไม่พอ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

**หมวด: นักเรียนและการศึกษา (Student & Education)**

#### IDEA-026 — GradeScenario

- **ID:** IDEA-026
- **Name:** GradeScenario
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** นักเรียนไม่รู้ว่าเกรดอนาคตจะทำให้ GPAX เปลี่ยนเท่าไร
- **Target Customer:** นักเรียนใช้; โรงเรียน/แนะแนวจ่าย
- **Solution:** จำลอง GPA ตามหน่วยกิตและเกรด
- **Core MVP:** 1. กรอกผลเรียน; 2. จำลองเกรด; 3. แสดง GPAX
- **Revenue Model:** สถาบันแนะแนวจ่ายค่า Dashboard
- **Data / API:** ข้อมูลกรอกเอง, สูตรคำนวณตรวจตามระเบียบ
- **Differentiation:** ทดลอง Scenario แทนคิด GPA ครั้งเดียว
- **Biggest Risk:** ตัวคำนวณฟรีมีแล้ว; หลักสูตรมีเงื่อนไขต่างกัน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-027 — TCAS Document Audit

- **ID:** IDEA-027
- **Name:** TCAS Document Audit
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** ผู้สมัครอาจส่งเอกสารไม่ครบตามโครงการ
- **Target Customer:** นักเรียนใช้; โรงเรียน/แนะแนวจ่าย
- **Solution:** Checklist เอกสารตามประกาศที่ผู้ดูแลตรวจ
- **Core MVP:** 1. เลือกโครงการ; 2. ติ๊กเอกสาร; 3. สรุปส่วนที่ขาด
- **Revenue Model:** โรงเรียนจ่ายค่า Dashboard ความพร้อม
- **Data / API:** Requirement คัดจากประกาศจริงโดยผู้ดูแล
- **Differentiation:** ตรวจความครบตามโครงการเฉพาะ
- **Biggest Risk:** ประกาศเปลี่ยนหรืออ่านผิดทำให้เสียโอกาส
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-028 — LabSlot

- **ID:** IDEA-028
- **Name:** LabSlot
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** ตารางใช้ห้องแล็บและอุปกรณ์โรงเรียนชนกัน
- **Target Customer:** ครูใช้; โรงเรียนจ่าย
- **Solution:** ระบบจองห้องและอุปกรณ์เป็นช่วงเวลา
- **Core MVP:** 1. ปฏิทินห้อง; 2. ขอจอง; 3. ป้องกันเวลาชน
- **Revenue Model:** โรงเรียนจ่ายค่าติดตั้ง/ดูแล
- **Data / API:** Supabase, ห้อง/อุปกรณ์จากโรงเรียน
- **Differentiation:** จองห้องและของที่ใช้ร่วมกันในคำขอเดียว
- **Biggest Risk:** บางโรงเรียนใช้ตารางเดิมได้ดี
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-029 — ScienceFair Budget

- **ID:** IDEA-029
- **Name:** ScienceFair Budget
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** ทีมโครงงานติดตามงบ วัสดุ และเบิกค่าใช้จ่ายยาก
- **Target Customer:** นักเรียนใช้; โรงเรียน/ผู้จัดประกวดจ่าย
- **Solution:** บัญชีงบโครงงานพร้อมหลักฐาน
- **Core MVP:** 1. กำหนดงบ; 2. บันทึกจ่าย; 3. สรุปพร้อมหลักฐาน
- **Revenue Model:** โรงเรียนหรือผู้จัดจ่ายต่อกิจกรรม
- **Data / API:** Supabase Storage, ข้อมูลกรอกเอง
- **Differentiation:** เน้นทีมประกวดที่ต้องมีผู้อนุมัติ
- **Biggest Risk:** Spreadsheet ฟรี; ทีมเล็กไม่มีความจำเป็น
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-030 — TeamContribution

- **ID:** IDEA-030
- **Name:** TeamContribution
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** ครูประเมินส่วนร่วมในงานกลุ่มไม่เป็นธรรม
- **Target Customer:** นักเรียนบันทึก; ครูใช้; โรงเรียนจ่าย
- **Solution:** ติดตามงานและหลักฐาน Contribution รายคน
- **Core MVP:** 1. มอบหมายงาน; 2. แนบหลักฐาน; 3. รายงานคน
- **Revenue Model:** โรงเรียนจ่ายระบบประเมินงานกลุ่ม
- **Data / API:** Supabase
- **Differentiation:** ยึดหลักฐานแทนโหวตความชอบ
- **Biggest Risk:** ปริมาณกิจกรรมไม่เท่ากับคุณภาพงาน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-031 — Internship Tracker

- **ID:** IDEA-031
- **Name:** Internship Tracker
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** ผู้สมัครฝึกงานติดตามใบสมัครหลายบริษัทลำบาก
- **Target Customer:** ผู้สมัครใช้; สถานศึกษาจ่าย
- **Solution:** Kanban ติดตามสถานะพร้อมงานถัดไป
- **Core MVP:** 1. เพิ่มใบสมัคร; 2. Kanban; 3. Dashboard กำหนด
- **Revenue Model:** สถานศึกษาจ่ายเพื่อดูภาพรวมที่ได้รับอนุญาต
- **Data / API:** Supabase, ข้อมูลผู้ใช้
- **Differentiation:** เฉพาะวงจรสมัครฝึกงาน
- **Biggest Risk:** Notion/Sheet ใช้แทนได้และสมัครแค่บางฤดู
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-032 — PortfolioProof

- **ID:** IDEA-032
- **Name:** PortfolioProof
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** นักเรียนเก็บหลักฐานผลงานกระจัดกระจาย
- **Target Customer:** นักเรียนใช้; โรงเรียน/แนะแนวจ่าย
- **Solution:** ผูกผลงานกับทักษะและหลักฐาน
- **Core MVP:** 1. เพิ่มกิจกรรม; 2. แนบไฟล์; 3. สร้างหน้า Portfolio
- **Revenue Model:** โรงเรียนจ่ายค่าระบบจัดข้อมูล
- **Data / API:** Supabase Storage
- **Differentiation:** Claim ทักษะเชื่อมหลักฐานแต่ละชิ้น
- **Biggest Risk:** Canva/Drive มีแล้ว; ความสำเร็จขึ้นกับผลงาน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-033 — SchoolAsset Repair

- **ID:** IDEA-033
- **Name:** SchoolAsset Repair
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** อุปกรณ์เสียในโรงเรียนแจ้งและติดตามซ่อมยาก
- **Target Customer:** ครู/เจ้าหน้าที่ใช้; โรงเรียนจ่าย
- **Solution:** QR แจ้งซ่อมพร้อมประวัติรายอุปกรณ์
- **Core MVP:** 1. ทะเบียนอุปกรณ์; 2. แจ้งซ่อม; 3. Dashboard
- **Revenue Model:** โรงเรียนจ่ายค่าระบบ
- **Data / API:** QR Generator, Supabase
- **Differentiation:** ประวัติซ่อมผูกกับอุปกรณ์
- **Biggest Risk:** ไม่มีงบหรือคนอัปเดตข้อมูล
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-034 — MistakeBank

- **ID:** IDEA-034
- **Name:** MistakeBank
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** นักเรียนทำโจทย์ผิดซ้ำเพราะไม่ติดตามต้นเหตุ
- **Target Customer:** นักเรียนใช้; ผู้สอน/กวดวิชาจ่าย
- **Solution:** บันทึกข้อผิดพลาดและกำหนดรอบทบทวน
- **Core MVP:** 1. บันทึกโจทย์ผิด; 2. แท็กสาเหตุ; 3. คิวทบทวน
- **Revenue Model:** ผู้สอนจ่ายระบบดูจุดอ่อนชั้นเรียน
- **Data / API:** Supabase, เนื้อหาที่มีสิทธิ์ใช้
- **Differentiation:** วิเคราะห์เหตุผลที่ผิด ไม่ใช่แค่คะแนน
- **Biggest Risk:** Anki/สมุดจดใช้แทนได้; ผู้ใช้เลิกบันทึก
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-035 — SchoolFund Preorder

- **ID:** IDEA-035
- **Name:** SchoolFund Preorder
- **Category:** นักเรียนและการศึกษา (Student & Education)
- **Problem:** ชมรมเปิดขายระดมทุนแล้วคาดการผลิต/กำไรไม่แม่น
- **Target Customer:** ผู้ซื้อใช้; ชมรม/โรงเรียนจ่าย
- **Solution:** Preorder พร้อม Dashboard รายได้และต้นทุน
- **Core MVP:** 1. หน้าสั่งซื้อ; 2. รับออเดอร์; 3. สรุปต้นทุน/กำไร
- **Revenue Model:** ผู้จัดจ่ายค่าบริการต่อรอบขาย
- **Data / API:** Supabase, Mock Payment
- **Differentiation:** เชื่อมยอด Preorder กับเป้าหมายระดมทุน
- **Biggest Risk:** ยอดสั่งไม่เท่าจ่ายเงินจริง; ระเบียบเงินโรงเรียน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

**หมวด: ธุรกิจขนาดเล็กและ SME (Small Business / SME)**

#### IDEA-036 — BatchOrder

- **ID:** IDEA-036
- **Name:** BatchOrder
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านทำอาหารตามรอบรับออเดอร์หลายช่องทางจนเตรียมผิด
- **Target Customer:** ร้าน Preorder ใช้และจ่าย
- **Solution:** รวมออเดอร์และนับยอดผลิตต่อรอบ
- **Core MVP:** 1. เปิดรอบ; 2. รับออเดอร์; 3. สรุปยอดผลิต
- **Revenue Model:** ร้านจ่ายรายเดือน/รายรอบ
- **Data / API:** Supabase, เงินบันทึกเอง
- **Differentiation:** ตัดรอบผลิตแทน POS ทั่วไป
- **Biggest Risk:** Google Forms/Sheets อาจเพียงพอ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-037 — DepositFlow

- **ID:** IDEA-037
- **Name:** DepositFlow
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านรับทำของตามสั่งติดตามมัดจำและยอดค้างลำบาก
- **Target Customer:** ร้านสั่งทำใช้และจ่าย
- **Solution:** Ledger ออเดอร์พร้อมเงินมัดจำ
- **Core MVP:** 1. สร้างออเดอร์; 2. บันทึกมัดจำ; 3. แสดงยอดคงเหลือ
- **Revenue Model:** ร้านจ่ายเพื่อออกเอกสารและติดตาม
- **Data / API:** Supabase, PDF Generator
- **Differentiation:** เน้นยอดมัดจำแทนบัญชีเต็มระบบ
- **Biggest Risk:** FlowAccount รองรับมัดจำแล้ว; ลูกค้าอาจไม่ซื้อซ้ำ
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED

#### IDEA-038 — QuoteCompare SME

- **ID:** IDEA-038
- **Name:** QuoteCompare SME
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านเปรียบเทียบข้อเสนอ Supplier ต่างเงื่อนไขยาก
- **Target Customer:** ฝ่ายจัดซื้อ/เจ้าของร้านใช้และจ่าย
- **Solution:** เทียบต้นทุนรวมรวมค่าจัดส่ง
- **Core MVP:** 1. เพิ่มสินค้า; 2. กรอกข้อเสนอ; 3. เทียบยอดรวม
- **Revenue Model:** ธุรกิจจ่ายต่อทีม
- **Data / API:** ข้อมูลกรอกเอง, CSV Import
- **Differentiation:** เปรียบเทียบ Total Landed Cost
- **Biggest Risk:** สินค้าไม่เทียบกันตรง; Spreadsheet ฟรี
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-039 — RecipeMargin

- **ID:** IDEA-039
- **Name:** RecipeMargin
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านอาหารไม่รู้ต้นทุนต่อเมนูเมื่อราคาวัตถุดิบเปลี่ยน
- **Target Customer:** เจ้าของร้านอาหารใช้และจ่าย
- **Solution:** คำนวณต้นทุนสูตรและ Gross Margin
- **Core MVP:** 1. เพิ่มวัตถุดิบ; 2. สูตร/ปริมาณ; 3. ผล Margin
- **Revenue Model:** ร้านจ่ายเพื่อจัดการสูตร/ต้นทุน
- **Data / API:** ราคาที่ร้านกรอก, Database
- **Differentiation:** เชื่อมสูตรกับราคาวัตถุดิบแทน POS
- **Biggest Risk:** Yield และของเสียคลาดเคลื่อนทำให้กำไรผิด
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-040 — RestockSignal

- **ID:** IDEA-040
- **Name:** RestockSignal
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านรู้ว่าสินค้าใกล้หมดเมื่อขายไม่ทันแล้ว
- **Target Customer:** ร้านเล็กใช้และจ่าย
- **Solution:** แจ้งสินค้าเหลือต่ำกว่าเกณฑ์สั่งซื้อ
- **Core MVP:** 1. ทะเบียนสินค้า; 2. รับเข้า/จ่ายออก; 3. แจ้งเตือน
- **Revenue Model:** ร้านจ่ายรายเดือน
- **Data / API:** Supabase, ไม่มีเชื่อม POS
- **Differentiation:** Reorder Workflow แบบเบา
- **Biggest Risk:** ซอฟต์แวร์สต็อกเดิมมีแล้ว; กรอกมือทำให้ข้อมูลเก่า
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED

### Batch 3/5 — IDEA-041 ถึง IDEA-060

#### IDEA-041 — RepairApproval

- **ID:** IDEA-041
- **Name:** RepairApproval
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านซ่อมต้องโทรขออนุมัติราคาหลายครั้ง
- **Target Customer:** ร้านซ่อมใช้และจ่าย; ลูกค้าตัดสินใจ
- **Solution:** ลิงก์ใบเสนอราคาซ่อมให้อนุมัติ/ปฏิเสธ
- **Core MVP:** 1. สร้างงาน; 2. เสนอราคา; 3. ลูกค้ายืนยัน
- **Revenue Model:** ร้านจ่ายค่า Workflow อนุมัติ
- **Data / API:** Supabase, ลิงก์มีวันหมดอายุ
- **Differentiation:** ลดการติดต่อซ้ำ ณ จุดอนุมัติราคา
- **Biggest Risk:** พิสูจน์ผู้อนุมัติยาก; ลิงก์อาจถูกส่งต่อ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-042 — ConsignLedger

- **ID:** IDEA-042
- **Name:** ConsignLedger
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านฝากขายคิดส่วนแบ่งกับเจ้าของสินค้ายุ่งยาก
- **Target Customer:** ร้านรับฝากขายใช้และจ่าย
- **Solution:** บันทึกสินค้าฝากขายและคำนวณยอดแบ่ง
- **Core MVP:** 1. เพิ่มผู้ฝาก; 2. ลงยอดขาย; 3. สรุปยอดจ่าย
- **Revenue Model:** ร้านจ่ายตามจำนวนผู้ฝากขาย
- **Data / API:** Supabase, CSV Export
- **Differentiation:** สร้างมาสำหรับ Consignment
- **Biggest Risk:** ยอดขายน้อย; เงื่อนไขแบ่งรายได้หลากหลาย
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-043 — RentalGuard

- **ID:** IDEA-043
- **Name:** RentalGuard
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านเช่าติดตามวันคืน สภาพของ และเงินประกันหลายที่
- **Target Customer:** ร้านเช่าอุปกรณ์ใช้และจ่าย
- **Solution:** บันทึกปฏิทินเช่าและตรวจรับคืน
- **Core MVP:** 1. ทะเบียนอุปกรณ์; 2. ปฏิทิน; 3. บันทึกคืน
- **Revenue Model:** ร้านจ่ายตามจำนวนสินทรัพย์
- **Data / API:** Supabase, เงินประกันบันทึกเอง
- **Differentiation:** เน้นวงจรรับของ–คืนของ
- **Biggest Risk:** ข้อพิพาทความเสียหายและการคืนมัดจำ
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-044 — EmptySlot Rescue

- **ID:** IDEA-044
- **Name:** EmptySlot Rescue
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านบริการเสียรายได้เมื่อมีการยกเลิกนัดกระทันหัน
- **Target Customer:** ร้านเสริมสวย/บริการจ่าย; ลูกค้าจอง
- **Solution:** เปิดคิวที่ยกเลิกให้ Waitlist
- **Core MVP:** 1. ตารางนัด; 2. Waitlist; 3. เปิดให้จองใหม่
- **Revenue Model:** ร้านจ่ายเพื่อกู้เวลาว่าง
- **Data / API:** Supabase, ลิงก์แจ้งคิวบนเว็บ
- **Differentiation:** ขาย Capacity ที่สูญหาย
- **Biggest Risk:** คนใน Waitlist อาจมาไม่ทัน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-045 — ShiftClose

- **ID:** IDEA-045
- **Name:** ShiftClose
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านตรวจยอดเงินตอนปิดกะไม่ตรงและหาสาเหตุยาก
- **Target Customer:** เจ้าของร้าน/ผู้จัดการใช้และจ่าย
- **Solution:** เปรียบเทียบยอดขายตามช่องทางกับเงินนับจริง
- **Core MVP:** 1. กรอกยอดขาย; 2. นับเงิน; 3. รายงานส่วนต่าง
- **Revenue Model:** ร้านจ่ายค่าระบบควบคุมการปิดกะ
- **Data / API:** Supabase, CSV Import ถ้ามี
- **Differentiation:** เน้น Audit ส่วนต่างรายกะ
- **Biggest Risk:** ข้อมูลยอดขายผิด; POS เดิมมีฟังก์ชัน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-046 — CateringQuote

- **ID:** IDEA-046
- **Name:** CateringQuote
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านจัดเลี้ยงคิดใบเสนอราคาตามคนและบริการยุ่งยาก
- **Target Customer:** ร้าน Catering ใช้และจ่าย
- **Solution:** สร้างราคาแพ็กเกจแบบไดนามิก
- **Core MVP:** 1. เลือกแพ็กเกจ; 2. กำหนดคน/เสริม; 3. PDF
- **Revenue Model:** ร้านจ่ายค่าระบบออกเอกสาร
- **Data / API:** ราคาที่ร้านกำหนด, PDF Generator
- **Differentiation:** เงื่อนไขขั้นต่ำและค่าใช้จ่ายเฉพาะจัดเลี้ยง
- **Biggest Risk:** กฎแต่ละร้านต่างกัน; ระบบทั่วไปใช้แทนได้
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-047 — BundleProfit

- **ID:** IDEA-047
- **Name:** BundleProfit
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านทำโปรสินค้าเป็นชุดโดยไม่รู้กำไรหลังหักส่วนลด/ค่าธรรมเนียม
- **Target Customer:** พ่อค้าออนไลน์ใช้และจ่าย
- **Solution:** จำลอง Unit Economics ของ Bundle
- **Core MVP:** 1. สินค้า/ต้นทุน; 2. สร้างชุด; 3. คำนวณกำไร
- **Revenue Model:** ร้านจ่ายเพื่อจัดหลายแคมเปญ
- **Data / API:** ราคาและค่าธรรมเนียมกรอกเอง
- **Differentiation:** เน้น Margin ของชุดสินค้า
- **Biggest Risk:** ค่าธรรมเนียมเปลี่ยน; เครื่องคิดเลขฟรีทดแทน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-048 — ExpiryFirst

- **ID:** IDEA-048
- **Name:** ExpiryFirst
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านมีของหมดอายุแต่หยิบสินค้าใหม่ขายก่อนล็อตเก่า
- **Target Customer:** ร้านอาหาร/ของชำใช้และจ่าย
- **Solution:** จัดการล็อตตามวันหมดอายุแบบ FEFO
- **Core MVP:** 1. ลง Lot; 2. แจ้งใกล้หมด; 3. ตัด Lot
- **Revenue Model:** ร้านจ่ายรายเดือน
- **Data / API:** Supabase, กรอก Lot เอง
- **Differentiation:** บริหารล็อต ไม่ใช่สต็อกรวม
- **Biggest Risk:** กรอกข้อมูลเพิ่ม; ความผิดพลาดกระทบอาหาร
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-049 — PairSell

- **ID:** IDEA-049
- **Name:** PairSell
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ร้านไม่รู้สินค้าเสริมที่ควรเสนอคู่สินค้าเริ่มต้น
- **Target Customer:** ร้านออนไลน์ใช้และจ่าย
- **Solution:** จับคู่สินค้าแบบ Rule-based
- **Core MVP:** 1. เพิ่มสินค้า; 2. ตั้งกฎ; 3. หน้าเสนอ Upsell
- **Revenue Model:** ร้านจ่ายเพื่อเพิ่มโอกาส Upsell
- **Data / API:** Catalog, Supabase
- **Differentiation:** ไม่ต้องใช้ Big Data หรือ AI Recommendation
- **Biggest Risk:** ร้านต้องเปลี่ยนหน้าขาย; Upsell อาจไม่เพิ่ม
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-050 — PickupWindow

- **ID:** IDEA-050
- **Name:** PickupWindow
- **Category:** ธุรกิจขนาดเล็กและ SME (Small Business / SME)
- **Problem:** ลูกค้ามารับอาหารพร้อมกันจนร้านจัดเตรียมไม่ทัน
- **Target Customer:** ร้านอาหารรับกลับบ้านใช้และจ่าย
- **Solution:** กระจายเวลารับตาม Capacity ของร้าน
- **Core MVP:** 1. กำหนด Slot; 2. รับคำขอ; 3. รายการเตรียม
- **Revenue Model:** ร้านจ่ายรายเดือน
- **Data / API:** Supabase, Capacity ร้านกรอก
- **Differentiation:** บริหารกำลังผลิตแทนระบบคิวหน้าร้าน
- **Biggest Risk:** กำหนดเวลาผิดทำให้ลูกค้ารอ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

**หมวด: เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)**

#### IDEA-051 — ApproveLite

- **ID:** IDEA-051
- **Name:** ApproveLite
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** ทีมส่งขออนุมัติในแชตจนตรวจย้อนหลังไม่ได้
- **Target Customer:** ทีมใช้; องค์กร/ชมรมจ่าย
- **Solution:** Workflow ขออนุมัติพร้อมประวัติ
- **Core MVP:** 1. สร้างคำขอ; 2. อนุมัติ/แก้ไข; 3. ดูประวัติ
- **Revenue Model:** องค์กรจ่ายรายทีม
- **Data / API:** Supabase Auth/Database
- **Differentiation:** Approval ขั้นต่ำสำหรับทีมเล็ก
- **Biggest Risk:** Google Forms/แชตฟรีอาจเพียงพอ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-052 — Screenshot2Action

- **ID:** IDEA-052
- **Name:** Screenshot2Action
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** คนเก็บภาพ Screenshot งานแต่ไม่เปลี่ยนเป็น Task
- **Target Customer:** คนทำงานใช้และจ่าย; ทีมใช้ร่วม
- **Solution:** อ่านข้อความจากภาพแล้วให้ยืนยันเป็นงาน
- **Core MVP:** 1. อัปโหลดภาพ; 2. OCR; 3. ยืนยัน Task
- **Revenue Model:** เก็บค่าจัดการภาพ/Task ปริมาณมาก
- **Data / API:** Tesseract.js, ฟอร์มกรอกเองสำรอง
- **Differentiation:** เริ่มจาก Screenshot ไม่ใช่พิมพ์ใหม่
- **Biggest Risk:** OCR ภาษาไทยและวันผิด; กรอกเองอาจเร็วกว่า
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-053 — BlockerChain

- **ID:** IDEA-053
- **Name:** BlockerChain
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** ทีมไม่รู้ว่างานใดขวางงานอื่น
- **Target Customer:** PM ใช้; บริษัทเล็กจ่าย
- **Solution:** แสดง Graph Dependency และตัวบล็อก
- **Core MVP:** 1. เพิ่ม Task; 2. กำหนด Dependency; 3. งานที่ถูกบล็อก
- **Revenue Model:** ทีมจ่ายต่อ Workspace
- **Data / API:** Supabase, Graph Logic
- **Differentiation:** มอง Blocker แทน Kanban
- **Biggest Risk:** Project Tool ใหญ่มี Dependency แล้ว
- **Feasibility:** MEDIUM
- **Evidence Status:** VERIFIED

#### IDEA-054 — DecisionTrace

- **ID:** IDEA-054
- **Name:** DecisionTrace
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** ทีมประชุมแล้วลืมมติและผู้รับผิดชอบ
- **Target Customer:** ทีมใช้; องค์กรจ่าย
- **Solution:** บันทึก Decision ผูก Action Item
- **Core MVP:** 1. บันทึกประชุม; 2. เพิ่มมติ; 3. ติดตามงาน
- **Revenue Model:** องค์กรจ่ายค่าติดตามมติ
- **Data / API:** Supabase, ไม่ต้องใช้ AI ถอดเสียง
- **Differentiation:** Decision เป็นหน่วยข้อมูลหลัก
- **Biggest Risk:** ต้องกรอกเอง; ทีมอาจกลับไปใช้แชต
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-055 — ShiftVolunteer

- **ID:** IDEA-055
- **Name:** ShiftVolunteer
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** งานอาสาสมัครจัดคนประจำกะไม่พอหรือซ้อนกัน
- **Target Customer:** อาสาสมัครใช้; ผู้จัดงานจ่าย
- **Solution:** เปิดกะตามจำนวนคนที่ต้องใช้
- **Core MVP:** 1. สร้างกะ; 2. สมัคร; 3. แสดงกะขาดคน
- **Revenue Model:** ผู้จัดจ่ายต่อกิจกรรม
- **Data / API:** Supabase
- **Differentiation:** จัด Capacity ตามหน้าที่
- **Biggest Risk:** สมัครแล้วไม่มา; งานอาสาไม่อยากจ่ายค่าระบบ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-056 — RevisionGate

- **ID:** IDEA-056
- **Name:** RevisionGate
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** ส่งหลายเวอร์ชันจนอนุมัติผิดไฟล์
- **Target Customer:** ทีมออกแบบใช้; บริษัทจ่าย
- **Solution:** อนุมัติเอกสารทีละ Version
- **Core MVP:** 1. อัปโหลด Version; 2. Comment; 3. อนุมัติล่าสุด
- **Revenue Model:** บริษัทจ่ายต่อทีม
- **Data / API:** Supabase Storage/Database
- **Differentiation:** ระบุ Version ที่อนุมัติชัดเจน
- **Biggest Risk:** Drive มี Version History/Comment อยู่แล้ว
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-057 — BorrowDesk

- **ID:** IDEA-057
- **Name:** BorrowDesk
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** องค์กรไม่รู้ว่าใครยืมอุปกรณ์และกำหนดคืน
- **Target Customer:** เจ้าหน้าที่ใช้; องค์กรจ่าย
- **Solution:** ทะเบียนยืมคืนทรัพย์สิน
- **Core MVP:** 1. ทะเบียนของ; 2. ขอเบิก; 3. บันทึกคืน
- **Revenue Model:** องค์กรจ่ายค่าระบบ
- **Data / API:** Supabase, QR Code
- **Differentiation:** หมุนเวียนของใช้ ไม่ใช่ Inventory ขาย
- **Biggest Risk:** Asset Tool มีอยู่; สมุดลงชื่ออาจพอ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-058 — RenewalRadar

- **ID:** IDEA-058
- **Name:** RenewalRadar
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** ธุรกิจลืมต่อสัญญาหรือบริการกับ Vendor
- **Target Customer:** เจ้าของ/จัดซื้อใช้และจ่าย
- **Solution:** ติดตามสัญญา ค่าใช้จ่าย รอบต่ออายุ
- **Core MVP:** 1. เพิ่มสัญญา; 2. ปฏิทิน; 3. รายการใกล้หมด
- **Revenue Model:** ธุรกิจจ่ายตามจำนวนสัญญา
- **Data / API:** Supabase, CSV Export
- **Differentiation:** เน้น Vendor Renewal Cost
- **Biggest Risk:** Calendar ฟรี; ไม่อัปเดตแล้วพลาดกำหนด
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-059 — ReplyLibrary

- **ID:** IDEA-059
- **Name:** ReplyLibrary
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** ทีมตอบลูกค้าซ้ำและข้อความไม่ตรงกัน
- **Target Customer:** ทีมบริการใช้; ธุรกิจจ่าย
- **Solution:** คลัง Template ควบคุมข้อความมาตรฐาน
- **Core MVP:** 1. เพิ่มคำตอบ; 2. ค้นหา; 3. คัดลอก/นับใช้
- **Revenue Model:** ธุรกิจจ่ายต่อทีม
- **Data / API:** Supabase, ไม่มี AI
- **Differentiation:** มี Version และกระบวนการอนุมัติคำตอบ
- **Biggest Risk:** Text Expander และ FAQ ฟรีมีแล้ว
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-060 — ScopeLock

- **ID:** IDEA-060
- **Name:** ScopeLock
- **Category:** เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ (Productivity & Automation)
- **Problem:** ฟรีแลนซ์โดนขอทำงานเพิ่มโดยไม่เพิ่มราคา
- **Target Customer:** ฟรีแลนซ์/เอเจนซี่ใช้และจ่าย
- **Solution:** ขออนุมัติ Change Request จาก Scope เดิม
- **Core MVP:** 1. กำหนด Deliverable; 2. ขอเปลี่ยน; 3. ลูกค้ายืนยัน
- **Revenue Model:** คิดค่าระบบต่อโปรเจกต์
- **Data / API:** Supabase, PDF Export
- **Differentiation:** ติดตาม Scope Creep/ข้อตกลง
- **Biggest Risk:** ลูกค้าไม่ใช้ระบบ; กดยืนยันไม่แทนสัญญาเสมอ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

### Batch 4/5 — IDEA-061 ถึง IDEA-080

**หมวด: ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)**

#### IDEA-061 — RoommateResolve

- **ID:** IDEA-061
- **Name:** RoommateResolve
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** คนแชร์ห้องมีปัญหาการแบ่งงานและกฎบ้าน
- **Target Customer:** รูมเมตใช้และจ่าย
- **Solution:** ข้อตกลงบ้านพร้อมแบ่งงาน
- **Core MVP:** 1. สร้างบ้าน; 2. แบ่งหน้าที่; 3. บันทึกข้อตกลง
- **Revenue Model:** ค่าพื้นที่สำหรับบ้านหลายสมาชิก
- **Data / API:** Supabase
- **Differentiation:** เน้นข้อตกลง มากกว่า Task
- **Biggest Risk:** ความขัดแย้งเชิงคนแก้ด้วยแอปยาก
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-062 — PantryFirst

- **ID:** IDEA-062
- **Name:** PantryFirst
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** บ้านซื้อวัตถุดิบซ้ำหรือปล่อยเน่าเพราะไม่รู้ของคงเหลือ
- **Target Customer:** ครัวเรือนใช้และจ่าย
- **Solution:** สต็อกครัวและสูตรใช้วัตถุดิบใกล้หมด
- **Core MVP:** 1. เพิ่มวัตถุดิบ; 2. วันหมดอายุ; 3. ค้นสูตร
- **Revenue Model:** เก็บค่าบัญชีครอบครัว/คลังสูตร
- **Data / API:** Recipe Dataset ขนาดเล็กมีสิทธิ์, Supabase
- **Differentiation:** เริ่มจากของที่มีจริง
- **Biggest Risk:** การอัปเดตทุกวันยุ่งยาก; สูตรอาหารฟรีมีมาก
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-063 — HomeCare Calendar

- **ID:** IDEA-063
- **Name:** HomeCare Calendar
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** เจ้าของบ้านลืมรอบดูแลอุปกรณ์
- **Target Customer:** เจ้าของบ้านใช้และจ่าย
- **Solution:** ปฏิทินบำรุงรักษากับประวัติค่าใช้จ่าย
- **Core MVP:** 1. ลงอุปกรณ์; 2. ตั้งรอบ; 3. บันทึกบริการ
- **Revenue Model:** คนดูแลหลายหลังจ่ายค่าจัดการ
- **Data / API:** ข้อมูลอุปกรณ์ผู้ใช้, Supabase
- **Differentiation:** ผูกงานกับ Lifecycle ของอุปกรณ์
- **Biggest Risk:** งานไม่บ่อย; Calendar ฟรีเพียงพอ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-064 — GiftCircle

- **ID:** IDEA-064
- **Name:** GiftCircle
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** เพื่อนรวมเงินซื้อของขวัญแล้วติดตามความเห็น/ยอดสมทบยาก
- **Target Customer:** กลุ่มเพื่อนใช้; ผู้จัดจ่าย
- **Solution:** ห้องโหวตของขวัญและบัญชียอดสมทบ
- **Core MVP:** 1. สร้างกลุ่ม; 2. โหวต; 3. ยอดสมทบ
- **Revenue Model:** ผู้จัดจ่ายต่อกิจกรรม
- **Data / API:** Supabase, ไม่รับเงินจริง
- **Differentiation:** รวม Poll และบัญชีกลุ่ม
- **Biggest Risk:** แชต+โอนเงินตรงฟรี และผู้ใช้แทบไม่ยอมจ่าย
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-065 — PetRoutine

- **ID:** IDEA-065
- **Name:** PetRoutine
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** ครอบครัวดูแลสัตว์เลี้ยงซ้ำหรือลืมงาน
- **Target Customer:** ครอบครัวใช้; ธุรกิจรับดูแลสัตว์จ่าย
- **Solution:** ตารางดูแลที่แชร์สถานะระหว่างคน
- **Core MVP:** 1. เพิ่มสัตว์; 2. กำหนดงาน; 3. ติ๊กคนทำแล้ว
- **Revenue Model:** ธุรกิจจ่ายเพื่อรายงานการดูแล
- **Data / API:** Supabase
- **Differentiation:** เน้น Handoff หลายผู้ดูแล
- **Biggest Risk:** Note ฟรี; ธุรกิจอาจต้องการหลักฐานละเอียด
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-066 — SubWatch

- **ID:** IDEA-066
- **Name:** SubWatch
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** ผู้ใช้ไม่รู้ค่า Subscription รวมและวันต่ออายุ
- **Target Customer:** ผู้ใช้ทั่วไปใช้และจ่าย
- **Solution:** บัญชี Subscription และปฏิทิน
- **Core MVP:** 1. เพิ่มบริการ; 2. สรุปค่าใช้จ่าย; 3. วันต่ออายุ
- **Revenue Model:** เก็บค่าจัดการหลายบัญชี/ครอบครัว
- **Data / API:** ข้อมูลผู้ใช้, Supabase
- **Differentiation:** จัดการต่ออายุแยกสมาชิกครอบครัว
- **Biggest Risk:** มี Tracker อยู่แล้ว; คนอยากประหยัดไม่อยากจ่ายเพิ่ม
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-067 — WarrantyVault

- **ID:** IDEA-067
- **Name:** WarrantyVault
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** ใบเสร็จและประกันสินค้ากระจัดกระจาย
- **Target Customer:** ผู้บริโภคใช้; ร้านค้าปลีกจ่าย
- **Solution:** คลังสินค้าและหลักฐานรับประกัน
- **Core MVP:** 1. เพิ่มสินค้า; 2. แนบหลักฐาน; 3. วันสิ้นสุด
- **Revenue Model:** ร้านจ่าย Digital Warranty Record
- **Data / API:** Supabase Storage
- **Differentiation:** เชื่อมประวัติซื้อกับบริการหลังขาย
- **Biggest Risk:** ร้านมีระบบอยู่แล้ว; เอกสารมีข้อมูลส่วนตัว
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-068 — UtilityFair

- **ID:** IDEA-068
- **Name:** UtilityFair
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** คนแชร์ห้องแบ่งน้ำไฟและบิลอื่นไม่ตรงข้อตกลง
- **Target Customer:** ผู้เช่าใช้; ผู้ดูแลบ้านเช่าจ่าย
- **Solution:** คำนวณหารบิลแบบหลายกติกา
- **Core MVP:** 1. สมาชิก; 2. กรอกบิล/สัดส่วน; 3. ออกสรุป
- **Revenue Model:** ผู้ดูแลจ่ายค่าระบบหลายห้อง
- **Data / API:** ข้อมูลค่าใช้จ่าย, PDF Export
- **Differentiation:** รองรับสัดส่วนการพักจริง
- **Biggest Risk:** โต้แย้งวิธีแบ่ง; เครื่องคิดเลขฟรี
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-069 — FamilyChore Ledger

- **ID:** IDEA-069
- **Name:** FamilyChore Ledger
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** ครอบครัวติดตามงานบ้านสมาชิกไม่สม่ำเสมอ
- **Target Customer:** ผู้ปกครองจ่าย; สมาชิกใช้
- **Solution:** งานบ้านพร้อมการยืนยันจากผู้ดูแล
- **Core MVP:** 1. เพิ่มงาน; 2. กดทำแล้ว; 3. ผู้ดูแลรับรอง
- **Revenue Model:** ค่าระบบหลายสมาชิก/ประวัติ
- **Data / API:** Supabase
- **Differentiation:** ผู้ดูแลยืนยันการเสร็จ
- **Biggest Risk:** บางบ้านไม่ต้องการระบบติดตาม
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-070 — RepairOrReplace

- **ID:** IDEA-070
- **Name:** RepairOrReplace
- **Category:** ไลฟ์สไตล์ผู้บริโภค (Consumer Lifestyle)
- **Problem:** ผู้บริโภคไม่แน่ใจว่าซ่อมหรือซื้อใหม่คุ้มกว่า
- **Target Customer:** ผู้บริโภคใช้; ร้านซ่อม/ขายอุปกรณ์จ่าย
- **Solution:** เทียบต้นทุนและอายุการใช้งานคาดการณ์
- **Core MVP:** 1. ค่าซ่อม; 2. ราคาใหม่; 3. เทียบ Scenario
- **Revenue Model:** ร้านจ่ายเป็นเครื่องมือเสนอทางเลือก
- **Data / API:** ตัวเลขผู้ใช้กรอก, ไม่มีราคาสด
- **Differentiation:** แสดงสมมติฐานและ Trade-off
- **Biggest Risk:** อายุหลังซ่อมไม่แน่นอน; ร้านมีผลประโยชน์ทับซ้อน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

**หมวด: ตลาดกลางและการจับคู่ (Marketplace & Matching)**

#### IDEA-071 — LocalLens

- **ID:** IDEA-071
- **Name:** LocalLens
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** ผู้จัดงานเล็กหาช่างภาพพร้อมวันว่างและผลงานตรงงานยาก
- **Target Customer:** ผู้จัดงานจ่าย; ช่างภาพลงประกาศ
- **Solution:** จับคู่ช่างภาพตามงานและกำหนด
- **Core MVP:** 1. โปรไฟล์; 2. ค้นหา; 3. ขอใบเสนอราคา
- **Revenue Model:** จ่ายต่อลีดที่รับหรือแพ็กเกจผู้ขาย
- **Data / API:** Portfolio ผู้ขาย, Supabase
- **Differentiation:** โฟกัสงานเล็กในพื้นที่นำร่อง
- **Biggest Risk:** ต้องมีช่างภาพจริง; กลุ่ม Facebook/บอกต่อมีแล้ว
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-072 — SpaceForClass

- **ID:** IDEA-072
- **Name:** SpaceForClass
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** ผู้สอนอิสระหาห้องสอนรายชั่วโมงให้พอกับคนไม่ได้
- **Target Customer:** ผู้สอนใช้และจ่าย; เจ้าของห้องปล่อยเช่า
- **Solution:** หาและขอจองพื้นที่สอน
- **Core MVP:** 1. ประกาศห้อง; 2. Slot ว่าง; 3. ขอจอง
- **Revenue Model:** ส่วนแบ่งการเช่าสำเร็จ
- **Data / API:** ข้อมูลเจ้าของห้อง, Supabase
- **Differentiation:** เน้น Capacity และอุปกรณ์สอน
- **Biggest Risk:** Supply ต่ำ; ตรวจสิทธิ์ปล่อยเช่ายาก
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-073 — PackSource

- **ID:** IDEA-073
- **Name:** PackSource
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** ร้านเล็กหา Supplier บรรจุภัณฑ์ที่มี MOQ ตรงยอดสั่งยาก
- **Target Customer:** ร้านค้าใช้; Supplier จ่าย
- **Solution:** Matching ตามขั้นต่ำ จำนวน และขนาด
- **Core MVP:** 1. รายชื่อ Supplier; 2. ฟอร์มความต้องการ; 3. จับคู่
- **Revenue Model:** Supplier จ่ายค่าลีด
- **Data / API:** ข้อมูล Supplier สมัครเอง, Rule Engine
- **Differentiation:** จับคู่ตาม MOQ/เงื่อนไขส่ง
- **Biggest Risk:** Supplier ไม่จ่าย; ราคา/ขั้นต่ำเปลี่ยนเร็ว
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-074 — MakerCommission

- **ID:** IDEA-074
- **Name:** MakerCommission
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** ผู้ซื้ออยากสั่งงานฝีมือเฉพาะแบบแต่หา Maker ยาก
- **Target Customer:** ลูกค้าจ่ายงาน; Maker ใช้/แบ่งรายได้
- **Solution:** ส่ง Brief ให้ Maker เสนอราคา
- **Core MVP:** 1. สร้าง Brief; 2. เสนอราคา; 3. เลือกข้อเสนอ
- **Revenue Model:** Commission จากงานสำเร็จ
- **Data / API:** โปรไฟล์ Maker, Supabase, Mock Payment
- **Differentiation:** เริ่มจาก Brief ผู้ซื้อไม่ใช่สินค้าสำเร็จ
- **Biggest Risk:** คุณภาพ Scope/ข้อพิพาทและการแข่งขันสูง
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-075 — FarmSurplus Connect

- **ID:** IDEA-075
- **Name:** FarmSurplus Connect
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** ผลผลิตส่วนเกินต้องรีบขายก่อนเสื่อมคุณภาพ
- **Target Customer:** เกษตรกรใช้; ผู้ซื้อสินค้า/ร้านอาหารจ่าย
- **Solution:** ประกาศผลผลิตเหลือกับวันและพื้นที่รับ
- **Core MVP:** 1. ลงสินค้า; 2. ค้นพื้นที่; 3. ขอซื้อ
- **Revenue Model:** ค่าจับคู่เมื่อขายได้
- **Data / API:** ข้อมูลเกษตรกร, Supabase
- **Differentiation:** เน้นเวลาหมดอายุของโอกาสขาย
- **Biggest Risk:** Logistics/มาตรฐาน/สองฝั่ง Marketplace ยาก
- **Feasibility:** LOW
- **Evidence Status:** UNKNOWN

#### IDEA-076 — TranslateLocal

- **ID:** IDEA-076
- **Name:** TranslateLocal
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** ร้านท่องเที่ยวต้องการคนตรวจคำแปลเมนูและป้ายสั้น ๆ
- **Target Customer:** ร้านค้าจ่าย; นักแปลรับงาน
- **Solution:** ตลาดจับคู่งานแปลท้องถิ่น
- **Core MVP:** 1. โพสต์งาน; 2. นักแปลเสนอราคา; 3. ส่งงาน/ยืนยัน
- **Revenue Model:** ส่วนแบ่งงานสำเร็จ
- **Data / API:** Supabase Storage, ไม่มี API แปล
- **Differentiation:** งานแปลสั้นเฉพาะบริบทไทย
- **Biggest Risk:** เครื่องแปลอัตโนมัติถูก; การตรวจคุณภาพต้องดี
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-077 — CourtOffPeak

- **ID:** IDEA-077
- **Name:** CourtOffPeak
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** สนามกีฬามีช่วงเวลาว่างที่ขายไม่ได้
- **Target Customer:** ผู้เล่นจอง; เจ้าของสนามจ่าย
- **Solution:** แสดง Slot Off-peak ให้คนขอจอง
- **Core MVP:** 1. สนามลง Slot; 2. ผู้เล่นขอจอง; 3. สนามยืนยัน
- **Revenue Model:** รายเดือนหรือค่าจองสำเร็จ
- **Data / API:** Slot สนามกรอก, Supabase
- **Differentiation:** ขายเวลาที่มี Demand ต่ำ
- **Biggest Risk:** ไม่มีสนามเข้าร่วม; คนจองตรงกับสนามอยู่แล้ว
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-078 — EventGear Network

- **ID:** IDEA-078
- **Name:** EventGear Network
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** งานเล็กต้องใช้อุปกรณ์อีเวนต์ไม่คุ้มค่าซื้อ
- **Target Customer:** ผู้จัดงานจ่าย; ร้านเช่าอุปกรณ์ลงรายการ
- **Solution:** ตลาดค้นหาและขอเช่าอุปกรณ์
- **Core MVP:** 1. ลงอุปกรณ์; 2. ค้นวัน; 3. ขอเช่า
- **Revenue Model:** ส่วนแบ่งการเช่าสำเร็จ
- **Data / API:** ผู้ให้เช่ากรอกข้อมูล, Supabase
- **Differentiation:** รวมอุปกรณ์งานหลายประเภท
- **Biggest Risk:** ความเสียหาย เงินประกัน ขนส่งซับซ้อน
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-079 — BulkBasket

- **ID:** IDEA-079
- **Name:** BulkBasket
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** ผู้ซื้อกลุ่มเล็กสั่งไม่ถึงปริมาณขายส่ง
- **Target Customer:** องค์กร/โรงเรียนใช้; Supplier จ่าย
- **Solution:** รวมคำสั่งซื้อจากหลายองค์กรให้ถึง MOQ
- **Core MVP:** 1. เปิดกลุ่ม; 2. สมาชิกระบุจำนวน; 3. เทียบขั้นต่ำ
- **Revenue Model:** Supplier จ่ายเมื่อคำสั่งซื้อสำเร็จ
- **Data / API:** ราคา Supplier, Supabase
- **Differentiation:** รวม Demand ข้ามผู้ซื้อ
- **Biggest Risk:** คนถอนทำให้ไม่ถึง MOQ; ส่งหลายจุดยุ่งยาก
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-080 — MentorMinutes

- **ID:** IDEA-080
- **Name:** MentorMinutes
- **Category:** ตลาดกลางและการจับคู่ (Marketplace & Matching)
- **Problem:** เจ้าของธุรกิจเล็กต้องการปรึกษาเฉพาะเรื่องสั้น ๆ
- **Target Customer:** ผู้ปรึกษาจ่าย; Expert ให้บริการ
- **Solution:** จับคู่ผู้เชี่ยวชาญตามหัวข้อและ Slot
- **Core MVP:** 1. โปรไฟล์; 2. เวลาว่าง; 3. คำขอจอง
- **Revenue Model:** Commission ต่อ Session จ่ายจริง
- **Data / API:** Supabase, วิดีโอคอลภายนอก
- **Differentiation:** Session สั้นพร้อม Deliverable ชัด
- **Biggest Risk:** ตรวจความเชี่ยวชาญ/สร้างความไว้วางใจยาก
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

### Batch 5/5 — IDEA-081 ถึง IDEA-100

**หมวด: ชุมชนและบริการท้องถิ่น (Community & Local Services)**

#### IDEA-081 — NeighborTool

- **ID:** IDEA-081
- **Name:** NeighborTool
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** ชุมชนมีของส่วนกลางแต่ไม่รู้ใครยืมอยู่
- **Target Customer:** สมาชิกใช้; นิติบุคคล/ชุมชนจ่าย
- **Solution:** จองและยืมคืนของส่วนกลาง
- **Core MVP:** 1. ทะเบียน; 2. ขอจอง; 3. ยืนยันคืน
- **Revenue Model:** ชุมชนจ่ายค่าบริหารทรัพย์สิน
- **Data / API:** Supabase
- **Differentiation:** ทรัพย์สินส่วนกลางควบคุมโดยผู้ดูแล
- **Biggest Risk:** ข้อพิพาทของเสียหาย; ของที่แบ่งใช้มีน้อย
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-082 — RecycleMap Local

- **ID:** IDEA-082
- **Name:** RecycleMap Local
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** ไม่รู้จุดรับรีไซเคิลที่รับวัสดุแต่ละชนิด
- **Target Customer:** ประชาชนใช้; ท้องถิ่น/CSR จ่าย
- **Solution:** ค้นจุดรับตามประเภทวัสดุ
- **Core MVP:** 1. เพิ่มจุด; 2. กรองวัสดุ; 3. ผู้ดูแลอัปเดต
- **Revenue Model:** องค์กรจ่ายจัดการเครือข่ายจุดรับ
- **Data / API:** ข้อมูลนำร่องตรวจเอง
- **Differentiation:** มีเงื่อนไขรับและวันที่อัปเดต
- **Biggest Risk:** ข้อมูลจุดรับเก่าหรือจุดปิด
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-083 — CommunitySupply

- **ID:** IDEA-083
- **Name:** CommunitySupply
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** การแจกสิ่งของชุมชนติดตามรับเข้าและจัดสรรลำบาก
- **Target Customer:** อาสาใช้; องค์กรช่วยเหลือจ่าย
- **Solution:** ระบบคลังสิ่งของแจกจ่าย
- **Core MVP:** 1. รับของ; 2. จ่ายของ; 3. Dashboard คงเหลือ
- **Revenue Model:** องค์กรจ่ายระบบคลัง
- **Data / API:** Supabase, กรอกเอง
- **Differentiation:** คลังบริจาคไม่ใช่สินค้าขาย
- **Biggest Risk:** ข้อมูลไม่ตรงของจริง; ห้ามใช้เป็นระบบฉุกเฉินรับประกัน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-084 — CivicFix

- **ID:** IDEA-084
- **Name:** CivicFix
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** แจ้งปัญหาพื้นที่สาธารณะแล้วติดตามผลยาก
- **Target Customer:** ประชาชนใช้; ผู้ดูแลพื้นที่จ่าย
- **Solution:** บอร์ดรายงานปัญหาพร้อมหลักฐาน
- **Core MVP:** 1. รายงานปัญหา; 2. ผู้ดูแลรับงาน; 3. แสดงสถานะ
- **Revenue Model:** หน่วยงานจ่ายระบบดูแลพื้นที่
- **Data / API:** Supabase Storage, พิกัดตามสมัครใจ
- **Differentiation:** เน้นการส่งงานผู้รับผิดชอบพื้นที่นำร่อง
- **Biggest Risk:** ไม่มีหน่วยงานเข้าร่วมแล้วไม่เกิดผล; มี Traffy Fondue
- **Feasibility:** MEDIUM
- **Evidence Status:** ASSUMPTION

#### IDEA-085 — VolunteerProof

- **ID:** IDEA-085
- **Name:** VolunteerProof
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** ผู้จัดกิจกรรมอาสาต้องเช็กชื่อและออกชั่วโมงด้วยมือ
- **Target Customer:** อาสาใช้; องค์กรจัดงานจ่าย
- **Solution:** ยืนยันการเข้าร่วมและออกใบรับรอง
- **Core MVP:** 1. สร้างกิจกรรม; 2. เช็กชื่อโดยผู้จัด; 3. PDF/QR ตรวจสอบ
- **Revenue Model:** องค์กรจ่ายต่อกิจกรรม/ใบรับรอง
- **Data / API:** Supabase, PDF, QR
- **Differentiation:** ตรวจหลักฐานกับผู้จัดได้
- **Biggest Risk:** ลงชื่อปลอม; ผู้รับปลายทางอาจไม่ยอมรับ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-086 — VillagePriceBoard

- **ID:** IDEA-086
- **Name:** VillagePriceBoard
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** ราคาสินค้าชุมชนประกาศไม่ทั่วถึง
- **Target Customer:** ชุมชนใช้; สหกรณ์/ผู้ผลิตจ่าย
- **Solution:** กระดานราคาพร้อมวันที่อัปเดต
- **Core MVP:** 1. ลงสินค้า; 2. แสดงราคา; 3. ค้นหมวด
- **Revenue Model:** กลุ่มผู้ผลิตจ่ายค่าระบบ
- **Data / API:** ข้อมูลผู้ผลิต, Supabase
- **Differentiation:** กระดานราคาชุมชนที่ไม่รับชำระเงิน
- **Biggest Risk:** ราคาไม่อัปเดต; กลุ่มแชตสะดวกกว่า
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-087 — DonationNeeds

- **ID:** IDEA-087
- **Name:** DonationNeeds
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** ผู้บริจาคไม่รู้สิ่งของที่องค์กรยังขาด
- **Target Customer:** ผู้บริจาคใช้; องค์กรการกุศล/ผู้สนับสนุนจ่าย
- **Solution:** รายการสิ่งของที่ต้องการและยอดรับปาก
- **Core MVP:** 1. สร้างรายการ; 2. จองบริจาค; 3. องค์กรยืนยันรับ
- **Revenue Model:** องค์กร/สปอนเซอร์จ่ายจัดแคมเปญ
- **Data / API:** Supabase, ไม่รับเงิน
- **Differentiation:** ลดการบริจาคของชนิดเดียวซ้ำ
- **Biggest Risk:** ต้องตรวจองค์กรและการส่งมอบ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-088 — CommunityVote

- **ID:** IDEA-088
- **Name:** CommunityVote
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** ผู้ดูแลชุมชนไม่รู้โครงการที่สมาชิกให้ความสำคัญ
- **Target Customer:** สมาชิกใช้; นิติบุคคล/ชุมชนจ่าย
- **Solution:** รวบรวมข้อเสนอและโหวตเรียงลำดับ
- **Core MVP:** 1. เสนอเรื่อง; 2. ความเห็น/โหวต; 3. รายงาน
- **Revenue Model:** องค์กรจ่ายค่าใช้แพลตฟอร์ม
- **Data / API:** Supabase Auth/Database
- **Differentiation:** ผูกโครงการกับงบประมาณชุมชน
- **Biggest Risk:** โหวตไม่แทนการตัดสินใจทางการ; กันโหวตซ้ำ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-089 — PantryShare

- **ID:** IDEA-089
- **Name:** PantryShare
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** จุดแจกอาหารไม่มีข้อมูลของเหลือให้ชุมชนทราบ
- **Target Customer:** สมาชิกใช้; ผู้ดูแล/ผู้สนับสนุนจ่าย
- **Solution:** แสดงสต็อกของจุดแจกพร้อมอายุข้อมูล
- **Core MVP:** 1. รายการของ; 2. อัปเดตจำนวน; 3. เวลาล่าสุด
- **Revenue Model:** สปอนเซอร์จ่ายระบบหลายจุด
- **Data / API:** ข้อมูลผู้ดูแล, Supabase
- **Differentiation:** ผู้รับช่วยเหลืออ่านสต็อกได้ง่าย
- **Biggest Risk:** สต็อกเปลี่ยนเร็ว; ต้องคุมความปลอดภัยอาหาร
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-090 — LibraryLoop

- **ID:** IDEA-090
- **Name:** LibraryLoop
- **Category:** ชุมชนและบริการท้องถิ่น (Community & Local Services)
- **Problem:** ห้องสมุดชุมชนยืมคืนหนังสือผ่านสมุดทำให้ติดตามยาก
- **Target Customer:** สมาชิกใช้; ห้องสมุด/ผู้สนับสนุนจ่าย
- **Solution:** ทะเบียนยืมคืนแบบเรียบง่าย
- **Core MVP:** 1. ลงหนังสือ; 2. ยืมคืน; 3. ค้างกำหนด
- **Revenue Model:** ค่าติดตั้ง/ดูแลต่อห้องสมุด
- **Data / API:** Supabase, รหัสหนังสือกำหนดเอง
- **Differentiation:** ระบบขั้นต่ำไม่ต้องมี IT
- **Biggest Risk:** มี Open-source Library System; ไม่มีงบ
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

**หมวด: แนวคิดนอกกรอบ (Wildcard / Unconventional)**

#### IDEA-091 — TinyBiz Simulator

- **ID:** IDEA-091
- **Name:** TinyBiz Simulator
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** คนเริ่มธุรกิจไม่รู้ราคา/ยอดขายที่ทำให้คุ้มทุน
- **Target Customer:** ผู้เริ่มธุรกิจใช้; ผู้จัดอบรมจ่าย
- **Solution:** จำลองกำไรและจุดคุ้มทุนด้วย Slider
- **Core MVP:** 1. กรอกต้นทุน; 2. เปลี่ยนราคา/ยอดขาย; 3. Break-even Chart
- **Revenue Model:** สถาบันอบรมจ่ายเพื่อใช้ในคลาส
- **Data / API:** สูตร Unit Economics, ไม่มี API
- **Differentiation:** Interactive Scenario สำหรับสอน
- **Biggest Risk:** Spreadsheet/เครื่องคิดเลขฟรี; ข้อมูลเป็นแค่สมมติฐาน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-092 — MuseumMystery

- **ID:** IDEA-092
- **Name:** MuseumMystery
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** นิทรรศการมีส่วนร่วมกับผู้ชมไม่มาก
- **Target Customer:** ผู้เข้าชมใช้; พิพิธภัณฑ์/ผู้จัดจ่าย
- **Solution:** เกมปริศนา QR ที่เชื่อมเนื้อหาจัดแสดง
- **Core MVP:** 1. สร้างจุด; 2. ตอบคำถาม; 3. ความคืบหน้า/เฉลย
- **Revenue Model:** ผู้จัดจ่ายต่อ Exhibition
- **Data / API:** เนื้อหาพิพิธภัณฑ์มีสิทธิ์, QR
- **Differentiation:** ผู้จัดเล่าเรื่องผ่านเกม
- **Biggest Risk:** ต้องทำปริศนาให้สนุก; ลิขสิทธิ์เนื้อหา
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-093 — PrivacyRequest Kit

- **ID:** IDEA-093
- **Name:** PrivacyRequest Kit
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** คนไม่รู้รูปแบบคำขอใช้สิทธิเกี่ยวกับข้อมูลตน
- **Target Customer:** ผู้บริโภคใช้; องค์กรสิทธิผู้บริโภคจ่าย
- **Solution:** ทำ Draft คำขอจาก Template ตรวจทาน
- **Core MVP:** 1. เลือกประเภท; 2. กรอกข้อมูล; 3. Export ข้อความ
- **Revenue Model:** องค์กรจ่ายให้สมาชิกใช้เครื่องมือ
- **Data / API:** Template อ้างกฎหมายที่ต้องตรวจ
- **Differentiation:** ช่วยร่างคำขอ ไม่อ้างเป็นคำปรึกษากฎหมาย
- **Biggest Risk:** กฎหมายซับซ้อน; Template ผิดทำให้เข้าใจสิทธิผิด
- **Feasibility:** MEDIUM
- **Evidence Status:** UNKNOWN

#### IDEA-094 — EventBreakEven

- **ID:** IDEA-094
- **Name:** EventBreakEven
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** ผู้จัดงานไม่รู้ยอดขายบัตร/สปอนเซอร์ที่ทำให้งานคุ้มทุน
- **Target Customer:** ผู้จัดงานใช้และจ่าย
- **Solution:** จำลองงบงานและรายได้หลายช่องทาง
- **Core MVP:** 1. กรอกต้นทุน; 2. Scenario รายได้; 3. จุดคุ้มทุน
- **Revenue Model:** ผู้จัดจ่ายรายงาน/ต่ออีเวนต์
- **Data / API:** สูตรคำนวณ, ไม่มี API
- **Differentiation:** แยกบัตร บูธ และ Sponsor
- **Biggest Risk:** Spreadsheet ฟรี; Demand เป็นสมมติฐาน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-095 — SponsorProof

- **ID:** IDEA-095
- **Name:** SponsorProof
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** ผู้จัดงานขอสปอนเซอร์แล้วติดตามสิทธิประโยชน์ที่ส่งมอบยาก
- **Target Customer:** ผู้จัดกิจกรรมใช้; องค์กรผู้จัด/สปอนเซอร์จ่าย
- **Solution:** สร้างแพ็กเกจและบันทึกหลักฐานส่งมอบ
- **Core MVP:** 1. แพ็กเกจ; 2. รายชื่อ Sponsor; 3. อัปโหลด Proof
- **Revenue Model:** ผู้จัดจ่ายระบบสปอนเซอร์
- **Data / API:** Supabase Storage, PDF Export
- **Differentiation:** เชื่อมข้อเสนอขายกับหลักฐานหลังงาน
- **Biggest Risk:** ความถี่ใช้งานต่ำ; หลักฐาน Reach วัดยาก
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-096 — ConsentTrail

- **ID:** IDEA-096
- **Name:** ConsentTrail
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** ผู้จัดงานเก็บความยินยอมถ่าย/เผยแพร่ภาพไม่เป็นระบบ
- **Target Customer:** ผู้จัดงานใช้; องค์กรจ่าย
- **Solution:** ติดตาม Consent แยกวัตถุประสงค์และสถานะ
- **Core MVP:** 1. สร้างข้อความ; 2. รับตอบ; 3. ตรวจรายคน
- **Revenue Model:** องค์กรจ่ายจัดการ Consent
- **Data / API:** Supabase Auth/Database
- **Differentiation:** แสดงขอบเขตและถอนความยินยอม
- **Biggest Risk:** PDPA และผู้เยาว์ซับซ้อน; Checkbox ไม่พอ
- **Feasibility:** MEDIUM
- **Evidence Status:** UNKNOWN

#### IDEA-097 — RefillPass

- **ID:** IDEA-097
- **Name:** RefillPass
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** ร้านที่ใช้ภาชนะหมุนเวียนไม่รู้ใครยืมไปและคืนแล้ว
- **Target Customer:** ลูกค้าใช้; ร้านร่วมโครงการจ่าย
- **Solution:** ติด QR ติดตามภาชนะหมุนเวียน
- **Core MVP:** 1. ลงทะเบียน; 2. บันทึกยืม; 3. บันทึกคืน
- **Revenue Model:** ร้านจ่ายตามจำนวนภาชนะ
- **Data / API:** QR, Supabase
- **Differentiation:** จัดการภาชนะ ไม่ใช่แต้มสะสม
- **Biggest Risk:** ค่าล้าง/ส่งกลับ/สูญหายอาจสูงกว่าประหยัด
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-098 — Repairability Passport

- **ID:** IDEA-098
- **Name:** Repairability Passport
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** ผู้ซื้อไม่รู้ว่าสินค้ารุ่นไหนซ่อมหรือเปลี่ยนอะไหล่ได้
- **Target Customer:** ผู้บริโภคใช้; ร้าน/ผู้ผลิตจ่าย
- **Solution:** โปรไฟล์การซ่อมพร้อมที่มาของหลักฐาน
- **Core MVP:** 1. เพิ่มรุ่น; 2. กรอก Checklist ตามคู่มือ; 3. แสดงโปรไฟล์
- **Revenue Model:** ร้านจ่ายค่าข้อมูลหลังขาย
- **Data / API:** คู่มือมีสิทธิ์อ้างอิง, ข้อมูลผู้ดูแล
- **Differentiation:** เปิดเหตุผลและแหล่งที่มา ไม่ให้คะแนนลอย
- **Biggest Risk:** ข้อมูลไม่ครบ; ไม่รับรองความปลอดภัยซ่อม
- **Feasibility:** MEDIUM
- **Evidence Status:** UNKNOWN

#### IDEA-099 — LivingArchive

- **ID:** IDEA-099
- **Name:** LivingArchive
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** เรื่องเล่าและความทรงจำท้องถิ่นกระจัดกระจาย
- **Target Customer:** ประชาชนอ่าน; พิพิธภัณฑ์/องค์กรวัฒนธรรมจ่าย
- **Solution:** คลังเรื่องเล่าดิจิทัลพร้อม QR
- **Core MVP:** 1. เพิ่มเรื่อง; 2. อัปโหลดสื่อ; 3. สร้างหน้า/QR
- **Revenue Model:** องค์กรจ่ายจัดทำและดูแลคลัง
- **Data / API:** สื่อที่ขออนุญาต, Supabase Storage
- **Differentiation:** แสดงเจ้าของเรื่องและสิทธิ์เนื้อหา
- **Biggest Risk:** รวบรวมข้อมูล/สิทธิ์ใช้ช้า; ความถูกต้องเรื่องเล่า
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

#### IDEA-100 — QueueLab

- **ID:** IDEA-100
- **Name:** QueueLab
- **Category:** แนวคิดนอกกรอบ (Wildcard / Unconventional)
- **Problem:** ผู้จัดสถานที่ไม่รู้จำนวนจุดบริการที่เหมาะกับเวลารอ
- **Target Customer:** ร้านบริการ/ผู้จัดอีเวนต์ใช้และจ่าย
- **Solution:** จำลองคิวและเปรียบเทียบต้นทุนคนทำงาน
- **Core MVP:** 1. จำนวนลูกค้า/เวลาบริการ; 2. Simulation; 3. เทียบจุดบริการ
- **Revenue Model:** องค์กรจ่ายเครื่องมือวิเคราะห์ Capacity
- **Data / API:** Discrete-event Simulation ขนาดเล็ก, ไม่มี API
- **Differentiation:** Trade-off ระหว่างเวลารอและจำนวนเจ้าหน้าที่
- **Biggest Risk:** แบบจำลองไม่สะท้อนโลกจริงหากข้อมูลตั้งต้นผิด
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

## 3. Phase 4 — Diversity Check

| หมวด | ช่วง ID | จำนวน |
|---|---|---:|
| การท่องเที่ยวและเศรษฐกิจท้องถิ่น | IDEA-001–IDEA-025 | 25 |
| นักเรียนและการศึกษา | IDEA-026–IDEA-035 | 10 |
| ธุรกิจขนาดเล็กและ SME | IDEA-036–IDEA-050 | 15 |
| เพิ่มประสิทธิภาพการทำงานและระบบอัตโนมัติ | IDEA-051–IDEA-060 | 10 |
| ไลฟ์สไตล์ผู้บริโภค | IDEA-061–IDEA-070 | 10 |
| ตลาดกลางและการจับคู่ | IDEA-071–IDEA-080 | 10 |
| ชุมชนและบริการท้องถิ่น | IDEA-081–IDEA-090 | 10 |
| แนวคิดนอกกรอบ | IDEA-091–IDEA-100 | 10 |
| **รวม** | IDEA-001–IDEA-100 | **100** |

### คู่ไอเดียที่ยังต้องตรวจความต่าง

| คู่ | ความต่างที่เสนอ | ข้อวิจารณ์ |
|---|---|---|
| 010 / 018 | Workshop งานฝีมือ vs เยี่ยมฟาร์มตามฤดูกาล | ระบบจองคล้ายกันมาก |
| 022 / 068 | แบ่งค่าเที่ยว vs หารบิลบ้าน | Calculation Logic คล้ายกัน |
| 035 / 036 | ระดมทุนชมรม vs วางแผนผลิตอาหาร | ฟอร์ม Preorder ซ้ำได้ |
| 043 / 078 | หลังบ้านเช่า vs Marketplace เช่า | คนละลูกค้าหลัก แต่ธุรกรรมเช่าคล้าย |
| 057 / 081 | ยืมขององค์กร vs ของส่วนกลางชุมชน | Core Workflow ใกล้เคียง |
| 091 / 094 | ธุรกิจทั่วไป vs งานอีเวนต์ | ใช้สูตร Scenario คล้ายกัน |

**ข้อสรุป:** ไม่มีคู่ที่ถูกระบุว่าซ้ำกันทุกมิติ แต่ห้ามนับเป็นการพิสูจน์ว่าต่างกันในเชิงตลาด โดยเฉพาะ 010/018, 057/081 และ 091/094

## 4. Final Analysis — รายการสำหรับ AI Critic

### 4.1 โอกาสทำ MVP เสร็จสูง 10 รายการ

| ID | ผลิตภัณฑ์ | เหตุผล |
|---|---|---|
| IDEA-013 | FieldTrip Quote | Form → คำนวณ → PDF |
| IDEA-026 | GradeScenario | สูตร GPAX ไม่พึ่ง API |
| IDEA-039 | RecipeMargin | CRUD + สูตร Margin |
| IDEA-046 | CateringQuote | ใบเสนอราคาตามกฎ |
| IDEA-047 | BundleProfit | คำนวณกำไร Bundle |
| IDEA-051 | ApproveLite | Approval Workflow สั้น |
| IDEA-055 | ShiftVolunteer | สมัครกะตาม Capacity |
| IDEA-085 | VolunteerProof | เช็กชื่อ → ออกใบรับรอง |
| IDEA-091 | TinyBiz Simulator | Simulation/Chart ภายในเว็บ |
| IDEA-100 | QueueLab | แบบจำลองคิวไม่พึ่งข้อมูลภายนอก |

> MVP ทำง่าย **ไม่ได้แปลว่าชนะง่าย**: หลายตัวมีทางเลือกฟรีที่ดีอยู่แล้ว

### 4.2 Business Model น่าเชื่อถือในเชิงผู้จ่าย 10 รายการ

| ID | ผลิตภัณฑ์ | เหตุผลที่อาจยอมจ่าย |
|---|---|---|
| IDEA-014 | StayCheck | ลดงานประสานเตรียมห้อง |
| IDEA-015 | TourSeat Ledger | ลดความผิดพลาดที่นั่งและมัดจำ |
| IDEA-021 | FestivalBooth | ลดงานจัดสรรบูธ |
| IDEA-036 | BatchOrder | ลดความผิดพลาดจำนวนผลิต |
| IDEA-039 | RecipeMargin | ช่วยตัดสินใจเรื่องต้นทุน/ราคา |
| IDEA-041 | RepairApproval | ลดงานอนุมัติราคาซ่อม |
| IDEA-043 | RentalGuard | ลดความผิดพลาดยืม–คืน/มัดจำ |
| IDEA-044 | EmptySlot Rescue | อาจกู้รายได้จากนัดยกเลิก |
| IDEA-050 | PickupWindow | ลดคอขวดตอนรับสินค้า |
| IDEA-060 | ScopeLock | ลดการทำงานนอก Scope |

> เป็นเพียง Business Hypothesis เพราะยังไม่มีหลักฐานการขายหรือ Willingness to Pay

### 4.3 ดูดีแต่มีความเสี่ยงซ่อนอยู่ 10 รายการ

| ID | ผลิตภัณฑ์ | ความเสี่ยงซ่อนอยู่ |
|---|---|---|
| IDEA-001 | MoodSwipe Trip | Swipe สนุกแต่ไม่ใช่คุณค่า/รายได้ระยะยาว |
| IDEA-005 | RainPlan | ข้อกำหนด API อากาศและพยากรณ์ผิดได้ |
| IDEA-007 | AccessTrip | ข้อมูล Accessibility ผิดกระทบผู้ใช้จริง |
| IDEA-017 | IslandTransfer Board | ตารางเรือเก่าทำให้เสียโอกาสเดินทาง |
| IDEA-022 | TripSplit | Splitwise เป็นคู่แข่งชัดและเก็บเงินยาก |
| IDEA-043 | RentalGuard | เงินประกัน/ข้อพิพาทนอกระบบซับซ้อน |
| IDEA-075 | FarmSurplus Connect | Logistics, คุณภาพสินค้า และ Cold Start |
| IDEA-084 | CivicFix | Traffy Fondue มีบริการใกล้เคียง |
| IDEA-093 | PrivacyRequest Kit | Template กฎหมายผิดสร้างความเข้าใจผิด |
| IDEA-096 | ConsentTrail | Consent ของผู้เยาว์และ PDPA ซับซ้อน |

### 4.4 สมมติฐานที่ต้องตรวจสอบก่อนเลือก

- **Pain จริงหรือไม่:** สัมภาษณ์ลูกค้าเป้าหมายอย่างน้อย 3–5 รายต่อไอเดียที่เข้ารอบ
- **ความรุนแรงของ Pain:** ถามว่าแก้อย่างไรปัจจุบัน เสียเวลา/เงินเท่าไร
- **Willingness to Pay:** ทดลองเสนอราคาและขอ Commit จริง ไม่ใช่แค่คำชม
- **Buyer vs User:** แยกคนใช้ คนอนุมัติจ่าย และคนถือ Budget
- **Data Source:** โหลดข้อมูลจริง ตรวจ Schema, Coverage, License และวันอัปเดต
- **คู่แข่ง:** ทดลอง Workflow คู่แข่งและบอกช่องว่างด้วยหลักฐาน
- **Technical Risk:** ทำ Spike/Proof of Concept ของจุดเสี่ยงสุดก่อน
- **Demo ภายใน 60 วินาที:** ลองตั้งแต่กรอก Input ถึงได้ Output ที่ใช้ได้จริง
- **Unit Economics:** ประมาณ Hosting, Support, CAC และการทำงานหลังบ้าน
- **ข้อกฎหมายและข้อมูลส่วนบุคคล:** ตรวจ PDPA, สิทธิ์ไฟล์, Security และกติกา API

## 5. แนวทางส่งต่อให้ AI Critic

1. **อนุญาตให้ปฏิเสธทั้ง 100 ไอเดีย** ถ้าไม่มีตัวที่ตอบโจทย์อย่างแท้จริง
2. ท้าทายสมมติฐานว่าใครจะจ่ายและทำไมต้องเลิกใช้วิธีเดิม
3. ตัดไอเดียที่ Core Workflow ทำให้ใช้งานจริงไม่ได้ภายใน 1.5 วัน
4. แยก **คุณค่าใน Demo** ออกจาก **คุณค่าเมื่อเปิดบริการจริง**
5. ตรวจจุดเสี่ยงที่ต้องใช้ข้อมูลจริง, API, คู่ค้า หรือการอนุมัติจากภายนอก
6. เทียบกับเกณฑ์กรรมการ 20/30/30/20 และไม่ให้คะแนนโบนัสท่องเที่ยวเกินความจริง
7. ขอ Counterargument และการทดลองราคาถูกเพื่อพิสูจน์/หักล้างไอเดีย

---

**สรุป:** ครบ 100 ไอเดียตามหมวดที่กำหนด แต่ไม่มีไอเดียใดยืนยันแล้วว่าลูกค้ายอมจ่ายเงินจริง ข้อดีทางเทคนิคหรือ UX ไม่เพียงพอโดยลำพังที่จะชนะโจทย์ Make Me Money
