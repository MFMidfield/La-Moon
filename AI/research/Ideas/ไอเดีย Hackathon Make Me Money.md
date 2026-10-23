# คัด 100 ไอเดีย Make Me Money ด้วยหลักฐานจริง

ไอเดียที่มีหลักฐานแข็งที่สุดสำหรับโจทย์ "Make Me Money" คือไอเดียที่ช่วยอุด "เงินรั่ว" ซึ่งมีตัวเลขเผยแพร่แล้ว เช่น ค่า GP ของแอปส่งอาหาร **30–35% (ไม่รวม VAT)** ตามหน้าของ Grab และ Wongnai เอง ([Grab](https://www.grab.com/th/merchant-blog/gp-คืออะไร/), [Wongnai](https://www.wongnai.com/business-owners/delivery-gross-profit)), ค่าธรรมเนียม Shopee/Lazada ที่ขึ้นราคาในเดือน ส.ค. 2026 ([FlowAccount](https://flowaccount.com/blog/commission-fees-ecommerce-shopee-lazada-tiktok/)), สลิปปลอม ([กรุงเทพธุรกิจ](https://www.bangkokbiznews.com/news/news-update/1241837)) และการโกงค่าแท็กซี่/รถเช่าซึ่งคิดเป็น **48% ของเคสโกงนักท่องเที่ยวในกรุงเทพฯ** ([Malay Mail](https://malaymail.com/news/life/2025/05/21/bangkok-cancun-and-hanoi-top-global-list-for-tourist-scams-mastercard-study-finds/177612)) ส่วน stack ฟรี (Supabase, Leaflet/OSM, `promptpay-qr`, LINE reply message, Typhoon API) พอสำหรับทำ MVP ใน 1.5 วันได้จริง แต่มีข้อจำกัดเชิงนโยบาย เช่น Vercel Hobby ห้ามใช้เชิงพาณิชย์ และ Supabase free หยุดเองหลังไม่ใช้ 1 สัปดาห์ ([Vercel](https://vercel.com/docs/plans/hobby), [Supabase](https://supabase.com/pricing)) ข้อจำกัดสำคัญที่สุดของรายงานนี้คือ **ไม่มีไอเดียไหนเลยที่มีหลักฐานว่าลูกค้า "ยอมจ่าย" ในราคาที่เสนอ** หลักฐานส่วนใหญ่ยืนยันได้แค่ว่า pain มีจริงและคู่แข่งเก็บเงินเท่าไร นอกจากนี้ยัง **หาไม่พบ hackathon ที่ใช้เกณฑ์ 20/30/30/20 นี้** จึงยืนยันไม่ได้ว่ามี Bonus ท่องเที่ยวจริง ไอเดียทั้ง 100 ข้อด้านล่างจึงให้ป้าย VERIFIED เฉพาะส่วนที่มี URL รองรับ ส่วนอื่นเป็น ASSUMPTION หรือ UNKNOWN เพื่อให้ AI ตัวถัดไปคัดค้านได้ตรงจุด

---

## Phase 1 — Pain point ที่มีหลักฐาน: เงินรั่วจากค่าธรรมเนียม การโกง และกฎใหม่

Pain ที่ตรวจสอบได้แบ่งเป็น 3 กลุ่ม กลุ่มแรกคือ **ค่าธรรมเนียมตัวกลาง** ที่ธุรกิจเล็กจ่ายอยู่แล้ว ซึ่งเป็นตัวตั้งที่ดีของ Revenue Model แบบ "ถูกกว่า" กลุ่มที่สองคือ **การโกงและความไม่โปร่งใสของราคา** ทั้งฝั่งนักท่องเที่ยวและฝั่งผู้บริโภค กลุ่มที่สามคือ **กฎหรือนโยบายที่เพิ่งเปลี่ยน** เช่น วีซ่าฟรีเหลือ 30 วัน เกณฑ์ VAT และ TCAS ซึ่งทำให้คนต้องการเครื่องมือช่วยคิดแบบใหม่

| # | Pain point (VERIFIED) | ตัวเลข / ข้อเท็จจริง | แหล่ง |
|---|---|---|---|
| P1 | ค่า GP แอปส่งอาหาร | GP เฉลี่ย 30–35% ไม่รวม VAT, VAT 7% คิดบน GP; Grab 47% / LINE MAN 41% ของ GMV ปี 2025; foodpanda ออกจากไทย 23 พ.ค. 2025 | [Grab](https://www.grab.com/th/merchant-blog/gp-คืออะไร/), [Wongnai](https://www.wongnai.com/business-owners/delivery-gross-profit), [KrASIA](https://amp.kr-asia.com/thailands-line-man-pushes-beyond-food-delivery-eyes-2027-ipo), [Khaosod](https://www.khaosodenglish.com/news/business/2025/04/23/foodpanda-exits-thailands-food-delivery-market-after-years-of-losses/) |
| P2 | ค่าธรรมเนียม marketplace ซ้อนกัน | Shopee commission 7.49–17.12% + transaction 3.21%; Lazada 6.96–17.12%; ขึ้นราคา 1–4 ส.ค. 2026 | [FlowAccount blog](https://flowaccount.com/blog/commission-fees-ecommerce-shopee-lazada-tiktok/) |
| P3 | สลิปโอนเงินปลอม | ผู้เช่าส่งสลิปปลอม 15 ใบ เสียหาย 57,842 บาท; SlipOK อ้างตรวจพบ 8,600+ ใบ (vendor claim) | [กรุงเทพธุรกิจ](https://www.bangkokbiznews.com/news/news-update/1241837), [Marketeer](https://marketeeronline.co/archives/342421) |
| P4 | แท็กซี่/รถเช่าโกงนักท่องเที่ยว | 48% ของเคสโกงในกรุงเทพฯ; ไทยอันดับ 3 โลกใน Reddit เรื่อง taxi scam; สมุยปรับคนขับ 40+ ราย | [Malay Mail](https://malaymail.com/news/life/2025/05/21/bangkok-cancun-and-hanoi-top-global-list-for-tourist-scams-mastercard-study-finds/177612), [Khaosod](https://www.khaosodenglish.com/news/2026/02/23/thailand-ranks-third-in-reddit-complaints-on-taxi-scams-uk-insurer-finds/), [Khaosod Samui](https://www.khaosodenglish.com/tourism/2025/12/28/samui-phangan-brace-for-tourism-surge-ahead-of-new-years-eve/) |
| P5 | ร้านเช่ามอเตอร์ไซค์ยึดพาสปอร์ต + เคลมรอยเดิม | รูปแบบโกงที่บันทึกไว้ | [World Nomads](https://worldnomads.com/travel-safety/southeast-asia/thailand/riding-motorbikes-in-thailand-what-are-the-rules) |
| P6 | Homestay/CBT ทำการตลาดออนไลน์ไม่สำเร็จ | งานวิจัยภาคใต้ 343 ตัวอย่าง (ข้อมูลปี 2020 เก่า) | [วารสารบริการและท่องเที่ยวไทย](https://so04.tci-thaijo.org/index.php/tourismtaat/article/download/240161/163734/825276) |
| P7 | ค่าธรรมเนียม OTA/affiliate | Airbnb host-only fee 15.5% (secondary source); affiliate Klook 2–5%, GetYourGuide ถึง 8%, Viator 8–30% | [Hostfully](https://www.hostfully.com/blog/airbnb-host-fees/), [Track360](https://track360.io/blog/tours-activities-experiences-affiliate-programs-operator-guide-2026) |
| P8 | กฎเข้าเมืองเปลี่ยน | วีซ่าฟรีเหลือ 30 วันตั้งแต่ 15 ก.ย. 2026; ข้ามแดนทางบกได้ 2 ครั้ง/ปี; TDAC ภายใน 72 ชม.; DTV สาย Soft Power (มวยไทย/ทำอาหาร) | [TAT News](https://www.tatnews.org/2026/09/thailand-introduces-new-30-day-and-15-day-visa-exemption-rules-from-15-september/), [Thaiger](https://thethaiger.com/guides/visa-information/thailand-digital-nomad-visa) |
| P9 | เรือ/เที่ยวบินเต็มช่วงพีคในสุราษฎร์ฯ | Lomprayah เกือบเต็มทุกเส้นทาง; Bangkok Airways 58–60 เที่ยว/วัน | [Khaosod Samui](https://www.khaosodenglish.com/tourism/2025/12/28/samui-phangan-brace-for-tourism-surge-ahead-of-new-years-eve/) |
| P10 | ภาษี SME/ฟรีแลนซ์ | จด VAT ใน 30 วันเมื่อรายได้เกิน 1.8 ล้าน; e-Tax by Time Stamp สำหรับรายได้ ≤30 ล้าน; e-WHT 1% ถึงสิ้นปี 2025 | [กรมสรรพากร](https://rd.go.th/7061.html), [InfoQuest](https://www.infoquest.co.th/?p=462192), [Forvis Mazars](https://forvismazars.com/th/en/insights/doing-business-in-thailand/tax/extension-withholding-tax-reduction) |
| P11 | สินเชื่อ SME หด | SME loan -4.6% YoY (Q2 2026); SME 3.28 ล้านราย, ~35% GDP | [BOT SME Snapshot](https://www.bot.or.th/content/dam/bot/documents/th/financial-innovation/การเงินเพื่อครัวเรือนและ-sme/sme/SME_snapshort_Q2_2569.pdf), [ฐานเศรษฐกิจ](https://www.thansettakij.com/economy/668484) |
| P12 | TCAS สับสน | ยืนยันสิทธิ์ 242,043 คน, สละสิทธิ์ 21,038 คน; นักเรียนไม่รู้จะเลือกรอบไหน/ทำพอร์ตแบบไหน | [MGR Online](https://mgronline.com/qol/detail/9690000059956), [Mitihoon](https://www.mitihoon.com/2026/08/04/663744/) |
| P13 | หนี้ครัวเรือน + ผ่อน | 67.5% ของผู้มีหนี้เคยผิดนัดใน 12 เดือน; ใช้ BNPL 14.2%; ร้านล็อกมือถือเก็บค่าปลดล็อก 300 บาท | [Nation/UTCC](https://www.nationthailand.com/business/economy/40071155), [Legardy](https://legardy.com/free-qna/49997) |
| P14 | มิจฉาชีพออนไลน์ | ~250,000 เคส 32,000 ล้านบาท (2025); ปี 2026 ซื้อของออนไลน์ 73%, หลอกงาน 9% | [Thairath English](https://en.thairath.co.th/money/economics/thai_economics/2956372) |
| P15 | ค่าคอมฟรีแลนซ์สูง | Fastwork 17% (ลดเหลือ 10% ช่วงโปรฯ); ฟรีแลนซ์ >50% บ่นเรื่องค่าธรรมเนียม | [Marketing Oops](https://www.marketingoops.com/?p=338637) |
| P16 | สังคมสูงวัย | 60+ ประมาณ 13.6 ล้านคน (~18%) | [Time Out/GISTDA](https://www.timeout.com/bangkok/news/thailand-is-now-a-nation-of-grandparents-090225) |
| P17 | ตลาดสัตว์เลี้ยงโต | ~92,000 ล้านบาท (2025); บริการดูแล 1,040 ล้าน โต ~20%/ปี | [InfoQuest/ttb](https://www.infoquest.co.th/?p=510170) |
| P18 | ชุมชน | ธนาคารขยะครบทุก อปท. (2024); เลือดขาด (ข้อมูลปี 2019); แอปนิติบุคคลคอนโด UI แย่ ไม่เชื่อมข้อมูล (2024) | [ONEP](https://www.onep.go.th/?p=91488), [Thai PBS](https://www.thaipbs.or.th/news/content/285438), [วารสารสารศาสตร์](https://so05.tci-thaijo.org/index.php/sarasatr/article/view/273370) |

ข้อสังเกตจากตารางนี้คือ pain ที่ "มีตัวเลข + มีคนจ่ายเงินแก้อยู่แล้ว" มีไม่กี่ข้อ ได้แก่ P1 (ร้านจ่าย GP), P3 (SlipOK มีแพ็กเกจ 350 บาท/เดือน ([SlipOK](https://slipok.com/))), P7 (host จ่าย OTA), P10 (FlowAccount 165–457 บาท/เดือน ([FlowAccount](https://flowaccount.com/pricing))) และ P15 (ฟรีแลนซ์จ่าย 17%) กลุ่มนี้มีหลักฐานว่าตลาด "เคยจ่าย" แต่ไม่ได้แปลว่าจะยอมจ่ายให้ทีมนักเรียน ส่วน P4, P13, P14, P16 เป็น pain ใหญ่แต่ผู้ใช้ปลายทางไม่ใช่คนจ่าย ต้องหาผู้จ่ายฝั่ง B2B/B2G ซึ่งยังเป็น ASSUMPTION

### Research coverage — อะไรยืนยันแล้ว อะไรยังไม่ได้

| หัวข้อ | สถานะ | หมายเหตุ |
|---|---|---|
| Hackathon ที่ใช้เกณฑ์ 20/30/30/20 | **ไม่พบ** | ค้นทั้งไทย/อังกฤษไม่เจอ อาจอยู่บน Facebook/Eventpop; คำแนะนำกรรมการของ [Devpost](https://info.devpost.com/blog/hackathon-judging-tips) ใช้เป็นแนวทางทั่วไปเท่านั้น |
| Bonus ไอเดียท่องเที่ยว | **UNKNOWN** | มีแค่ข่าวว่ามี BDI Tourism Hackathon (อ่านแค่หัวข้อ) ไม่ยืนยันกับงานนี้ |
| TAT Data API | มีจริง แต่ **ไม่รู้ limit/ราคา/เวลาอนุมัติ key** | ต้องสมัครก่อนวันงาน สำรองด้วย OSM/Overpass ([tatdataapi.io](https://tatdataapi.io/)) |
| Vercel Hobby | VERIFIED: **non-commercial only** | ต้องบอกทาง paid ใน pitch ([Vercel](https://vercel.com/docs/plans/hobby)) |
| Supabase Free | VERIFIED: 500 MB DB, 2 projects, **pause หลังไม่ใช้ 1 สัปดาห์** | ปลุกก่อนวันตัดสิน ([Supabase](https://supabase.com/pricing)) |
| Firebase Spark | VERIFIED: ไม่มี Phone Auth, Functions, Storage | ([Firebase](https://firebase.google.com/pricing)) |
| Google Maps | VERIFIED: ตั้งแต่ 1 มี.ค. 2025 เปลี่ยนเป็น free cap ต่อ SKU (Essentials 10,000/เดือน) | ต้องใช้ billing account หรือไม่ = ยังไม่ยืนยัน ([Google](https://developers.google.com/maps/billing-and-pricing/march-2025)) |
| Nominatim / OSM tiles | VERIFIED: 1 req/s ทั้งแอป, ห้าม autocomplete, ห้าม offline/bulk | ([Nominatim](https://operations.osmfoundation.org/policies/nominatim/), [OSM tiles](https://operations.osmfoundation.org/policies/tiles/)) |
| Open-Meteo | VERIFIED: ฟรีแต่ non-commercial | ทางเลือก TMD API (ราคา/key ยังไม่ยืนยัน) ([Open-Meteo](https://open-meteo.com/en/pricing), [TMD](https://data.tmd.go.th/api/index1.php)) |
| FX (BOT ผ่าน Frankfurter) | VERIFIED: ฟรี ไม่ต้องมี key | ([Frankfurter](https://frankfurter.dev/providers/bot/)) |
| `promptpay-qr` | VERIFIED: MIT, สร้าง QR พร้อมยอดเงินได้ แต่ **ไม่ยืนยันว่าเงินเข้า** และเปิดเผย PromptPay ID | ([GitHub](https://github.com/dtinth/promptpay-qr)) |
| LINE Messaging API | VERIFIED: reply ฟรี, push นับโควตา (ฟรี 300/เดือน) | ([LINE Developers](https://developers.line.biz/en/docs/messaging-api/pricing/)) |
| Typhoon API (Thai LLM/OCR) | VERIFIED: มี free tier, text model 200 req/min; OCR limit ไม่ระบุ | ([Typhoon docs](https://docs.opentyphoon.ai/en/)) |
| LLM free tier อื่น | Gemini ไม่มีตัวเลขทางการ; OpenRouter free 50 req/วัน; Groq 30 RPM | ([Gemini](https://ai.google.dev/gemini-api/docs/rate-limits), [OpenRouter](https://openrouter.ai/docs/api-reference/limits), [Groq](https://console.groq.com/docs/rate-limits)) |
| Stripe ไทย | VERIFIED: PromptPay 1.65%; นักเรียน/ผู้เยาว์เปิดบัญชีได้หรือไม่ = ไม่ยืนยัน | ([Stripe TH](https://stripe.com/th/pricing)) |
| Opn/Omise, 2C2P, GB Prime Pay sandbox | **ไม่ยืนยัน** | ใช้ "mock payment (จำลอง)" แทน |
| SlipOK | VERIFIED: ฟรี 100 สลิป/เดือน มี API | EasySlip มีจริง แต่ราคาไม่ยืนยัน ([SlipOK](https://slipok.com/)) |
| foodpanda | VERIFIED: ออกจากไทย 23 พ.ค. 2025 | ([Khaosod](https://www.khaosodenglish.com/news/business/2025/04/23/foodpanda-exits-thailands-food-delivery-market-after-years-of-losses/)) |
| คนละครึ่งพลัส ปี 2026 | **ไม่ยืนยัน** | ยืนยันได้แค่รอบ ต.ค.–ธ.ค. 2025 ([ฐานเศรษฐกิจ](https://www.thansettakij.com/economy/641340)) |
| ค่าธรรมเนียมเหยียบแผ่นดิน 300 บาท | ยังไม่บังคับใช้ ณ พ.ค. 2026 (secondary) | ([Wego](https://blog.wego.com/thailand-tourist-entry-fee-2026/)) |
| อัตรามิเตอร์แท็กซี่ทางการ | **ไม่ยืนยัน** | ไอเดียประเมินค่าโดยสารต้องหาแหล่งทางการเอง |
| ตารางเรือ (Lomprayah/Raja/Seatran), 12Go API | **ไม่พบ open API** | ต้องกรอกมือ |
| Commission ของ Klook/KKday/Agoda ฝั่ง operator, BeNeat/bTaskee/Q-CHANG, ShopeeFood, LINE OA usage | **ไม่ยืนยัน** | ห้ามใช้ตัวเลขใน pitch |
| ข้อมูลคิวร้านอาหาร, ตลาดนัด, live-selling, LINE group overload, shift scheduling, ซาเล้ง, น้ำท่วม, ของหาย, งานวัด | **ไม่พบข้อมูล** | ไอเดียกลุ่มนี้ติดป้าย ASSUMPTION/UNKNOWN |
| PDPA ผู้เยาว์ | VERIFIED (สรุปโดยสำนักกฎหมาย): ต่ำกว่า 10 ปีต้องได้รับความยินยอมจากผู้ปกครอง | ใช้ mock data อย่าเก็บข้อมูลจริงของเพื่อน ([Tilleke & Gibbins](https://www.tilleke.com/insights/thailand-issues-guidelines-on-pdpa-consent-and-notification-requirements)) |

---

## Phase 2–3 — 100 ไอเดียพร้อมการวิจารณ์ตัวเอง

วิธีอ่าน: ทุกไอเดียมี 13 บรรทัดตามรูปแบบที่กำหนด (ID + 12 ฟิลด์) การวิจารณ์ตัวเองของ Phase 3 อยู่ในฟิลด์เดิม คือ **Revenue Model** (บอกความสมจริงของการจ่าย), **Differentiation** (คู่แข่ง/ทางเลือกเดิม), **Biggest Risk** (เหตุผลที่อาจล้มเหลว + ความเสี่ยง MVP) และ **Feasibility** (โอกาสทำเสร็จใน 1.5 วัน โดยทีมนักเรียน ม.ปลาย ใช้ AI-assisted coding) ป้าย **Evidence Status** ดูจากส่วนที่อ่อนที่สุดของไอเดีย: VERIFIED = pain/คู่แข่ง/ข้อมูลหลักมี URL รองรับ (แต่การยอมจ่ายยังเป็น ASSUMPTION เสมอ), ASSUMPTION = เหตุผลฟังขึ้นแต่ไม่มีแหล่ง, UNKNOWN = ไม่มีข้อมูลเลย การจ่ายเงินทุกแบบใน Demo ถือเป็น **mock payment (จำลอง)** เว้นแต่ระบุไว้ ชื่อผลิตภัณฑ์ที่รู้จักกันทั่วไปแต่ไม่อยู่ใน notes จะกำกับ "(ไม่ได้ตรวจสอบ)"

### หมวด Tourism & Local Economy (IDEA-001 ถึง IDEA-025)

#### IDEA-001 — FareCheck TH
- **ID:** IDEA-001
- **Name:** FareCheck TH — เช็กว่าค่าแท็กซี่/ตุ๊กตุ๊กที่ถูกเสนอ "ปกติไหม"
- **Category:** Tourism & Local Economy
- **Problem:** นักท่องเที่ยวไม่รู้ราคาที่ควรจ่าย แท็กซี่และรถเช่าคิดเป็น 48% ของเคสโกงนักท่องเที่ยวในกรุงเทพฯ และไทยติดอันดับ 3 โลกใน Reddit เรื่อง taxi scam
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยวต่างชาติ FIT / ผู้จ่าย = โฮสเทลและโรงแรมเล็กที่ให้แขกใช้ผ่าน QR ที่เคาน์เตอร์
- **Solution:** ใส่ต้นทาง-ปลายทาง ได้ช่วงราคาที่ควรจ่าย (ประมาณจากระยะทาง + ราคาเหมาที่ผู้ใช้รายงาน) พร้อมการ์ดภาษาไทย "ขอเปิดมิเตอร์"
- **Core MVP:** 1) คำนวณระยะทางแล้วแปลงเป็นช่วงราคา 2) ปุ่ม "ฉันถูกเสนอราคา X บาท" เก็บรายงานแบบไม่ระบุตัวตน 3) การ์ดประโยคภาษาไทยสำหรับยื่นให้คนขับ
- **Revenue Model:** โรงแรมจ่ายรายเดือนเพื่อลดการโดนบ่นและเพิ่มรีวิวดี (ASSUMPTION) นักท่องเที่ยวไม่น่าจ่ายเองเพราะเป็นข้อมูลใช้ครั้งเดียว affiliate กับแอปเรียกรถยังไม่ยืนยันว่ามีโปรแกรม
- **Data / API:** Mapbox Directions (ฟรี 100,000 req/เดือน) หรือ OSM; อัตรามิเตอร์ทางการ **ยังไม่ยืนยัน** ต้องหาจากกรมการขนส่งทางบกเอง
- **Differentiation:** แอปเรียกรถแสดงราคาก่อนเดินทางอยู่แล้ว (Grab/Bolt — ไม่ได้ตรวจสอบรายละเอียด) จุดต่างคือใช้กับแท็กซี่เรียกข้างทางและตุ๊กตุ๊กที่แอปไม่ครอบคลุม
- **Biggest Risk:** ไม่มีอัตรามิเตอร์ยืนยันและราคาเหมาไม่มีมาตรฐาน ช่วงราคาจึงผิดได้ ผู้จ่ายไม่ชัด สุดท้ายอาจเป็นแค่เครื่องมือฟรีที่ไม่มีรายได้
- **Feasibility:** HIGH — ฟอร์ม + สูตร + ตาราง Supabase
- **Evidence Status:** VERIFIED (pain: [Malay Mail](https://malaymail.com/news/life/2025/05/21/bangkok-cancun-and-hanoi-top-global-list-for-tourist-scams-mastercard-study-finds/177612), [Khaosod](https://www.khaosodenglish.com/news/2026/02/23/thailand-ranks-third-in-reddit-complaints-on-taxi-scams-uk-insurer-finds/)) · UNKNOWN (อัตรามิเตอร์) · ASSUMPTION (ผู้จ่าย)

#### IDEA-002 — Samui Fair Ride Desk
- **ID:** IDEA-002
- **Name:** Samui Fair Ride Desk — จองรถจากท่าเรือ/สนามบินแบบราคาตายตัวกับคนขับท้องถิ่น
- **Category:** Tourism & Local Economy
- **Problem:** ช่วงปีใหม่สมุยมีร้องเรียนคนขับเรียกเกิน ไม่เปิดมิเตอร์ จนต้องตั้งด่านและปรับคนขับ 40+ ราย คนขับสุจริตเสียชื่อไปด้วย
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยวที่ลงท่าเรือ/สนามบิน / ผู้จ่าย = คนขับหรือกลุ่ม/สหกรณ์คนขับ จ่ายค่าธรรมเนียมต่องานที่ได้
- **Solution:** ตารางราคาโซนถึงโซนที่กลุ่มคนขับตั้งเอง นักท่องเที่ยวจองล่วงหน้า ได้ใบยืนยันที่มีชื่อและทะเบียนคนขับ
- **Core MVP:** 1) ตารางราคาโซน + ฟอร์มจอง 2) หน้าคนขับกดรับงาน (Supabase Realtime) 3) ใบยืนยัน QR + มัดจำผ่าน PromptPay QR (จำลอง)
- **Revenue Model:** คนขับจ่ายค่าธรรมเนียมคงที่ต่องาน เพราะได้งานล่วงหน้าโดยไม่ต้องรอคิว (ASSUMPTION ต้องคุยกับกลุ่มคนขับจริง)
- **Data / API:** Supabase Realtime (ฟรี 200 concurrent), `promptpay-qr`
- **Differentiation:** ต่างจาก IDEA-001 ที่เป็นข้อมูลราคา ตรงนี้คือการจองจริงฝั่งคนขับ; แอปเรียกรถในสมุยมีหรือไม่ = ไม่ยืนยัน
- **Biggest Risk:** ถ้ากลุ่มคนขับเจ้าถิ่นไม่ร่วม ระบบใช้ไม่ได้เลย และอาจมีความขัดแย้งเรื่องสิทธิ์รับผู้โดยสารที่ท่า
- **Feasibility:** MEDIUM — ต้องทำสองฝั่ง (ผู้โดยสาร/คนขับ) และ realtime
- **Evidence Status:** VERIFIED (pain สมุย: [Khaosod](https://www.khaosodenglish.com/tourism/2025/12/28/samui-phangan-brace-for-tourism-surge-ahead-of-new-years-eve/)) · ASSUMPTION (คนขับยอมจ่าย)

#### IDEA-003 — BikeProof
- **ID:** IDEA-003
- **Name:** BikeProof — บันทึกสภาพรถเช่าตอนรับ-คืน ที่ทั้งสองฝ่ายยืนยัน
- **Category:** Tourism & Local Economy
- **Problem:** ร้านเช่ามอเตอร์ไซค์บางร้านยึดพาสปอร์ตเป็นหลักประกัน แล้วเคลมรอยที่มีอยู่เดิมโดยใช้พาสปอร์ตต่อรอง
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยว + ร้านเช่า / ผู้จ่าย = ร้านเช่าที่สุจริตและอยากได้ลูกค้าต่างชาติ
- **Solution:** ตอนรับรถ ถ่ายรูปตามมุมบังคับ + เลขไมล์ ใช้เวลาจาก server ทั้งสองฝ่ายกดยืนยัน ตอนคืนเทียบรูปคู่กัน
- **Core MVP:** 1) ฟอร์มถ่ายรูป 6 มุม + timestamp ฝั่ง server 2) ลิงก์สัญญาให้สองฝ่ายกดยืนยัน (ใช้สำเนาพาสปอร์ตแทนตัวจริง) 3) หน้าเทียบรูปก่อน/หลัง
- **Revenue Model:** ร้านจ่ายรายเดือนเพื่อได้ badge "ไม่ยึดพาสปอร์ต + มีบันทึกสภาพรถ" ไว้ดึงลูกค้า (ASSUMPTION)
- **Data / API:** Supabase Storage (ฟรี 1 GB)
- **Differentiation:** ปัจจุบันนักท่องเที่ยวถ่ายวิดีโอเองตามคำแนะนำทั่วไป แต่ไม่มีหลักฐานที่ร้านยืนยันร่วม
- **Biggest Risk:** ร้านที่สร้างปัญหาคือร้านที่ไม่อยากใช้ จึงได้แต่ร้านดีที่ปัญหาน้อยอยู่แล้ว มูลค่า badge ขึ้นกับว่านักท่องเที่ยวรู้จักหรือไม่
- **Feasibility:** HIGH — upload รูป + หน้าเทียบ
- **Evidence Status:** VERIFIED (pain: [World Nomads](https://worldnomads.com/travel-safety/southeast-asia/thailand/riding-motorbikes-in-thailand-what-are-the-rules)) · ASSUMPTION (ร้านยอมจ่าย)

#### IDEA-004 — HomestayDirect
- **ID:** IDEA-004
- **Name:** HomestayDirect — หน้าจองตรงของ homestay พร้อมปฏิทินและมัดจำ PromptPay
- **Category:** Tourism & Local Economy
- **Problem:** homestay/CBT ในภาคใต้ใช้โซเชียลแค่ติดต่อส่วนตัว การตลาดยังไม่สำเร็จ ถ้าไป OTA ต้องเสียค่าธรรมเนียมสูง (Airbnb host-only fee 15.5%)
- **Target Customer:** ผู้ใช้ = เจ้าของ homestay เล็ก + แขกคนไทย / ผู้จ่าย = เจ้าของ homestay
- **Solution:** สร้างหน้าจองของตัวเองได้ในไม่กี่นาที มีรูป ห้อง ปฏิทินว่าง มัดจำผ่าน PromptPay QR และแจ้งเตือนเจ้าของ
- **Core MVP:** 1) ฟอร์มสร้างหน้าที่พัก + ปฏิทินห้องว่าง 2) จอง + PromptPay QR มัดจำ (เจ้าของกดยืนยันเงินเข้าเอง = จำลอง) 3) แจ้งเตือนเจ้าของทางอีเมลหรือ LINE reply
- **Revenue Model:** เจ้าของจ่ายรายเดือนคงที่ หรือค่าธรรมเนียมต่อการจองที่ต่ำกว่า OTA เพราะเก็บรายได้ได้มากขึ้น (ASSUMPTION) เจ้าของที่จองน้อยอาจไม่ยอมจ่ายรายเดือน
- **Data / API:** `promptpay-qr`, Supabase, LINE Messaging API (reply ฟรี)
- **Differentiation:** OTA มี traffic แต่ fee สูง Facebook ฟรีแต่ไม่มีปฏิทินและมัดจำ เครื่องมือนี้แก้เรื่องการจองแต่ไม่หา traffic ให้
- **Biggest Risk:** หน้าจองตรงไม่มีคนเห็น จึงไม่ได้แก้ปัญหาการตลาดจริง มีเครื่องมือสร้างเว็บจองทั่วไปอยู่แล้ว (ไม่ได้ตรวจสอบ)
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (pain: [วารสารการบริการและการท่องเที่ยวไทย 2020 — ข้อมูลเก่า](https://so04.tci-thaijo.org/index.php/tourismtaat/article/download/240161/163734/825276); fee: [Hostfully](https://www.hostfully.com/blog/airbnb-host-fees/) secondary) · ASSUMPTION (ยอมจ่าย)

#### IDEA-005 — CBT Study Trip
- **ID:** IDEA-005
- **Name:** CBT Study Trip — แค็ตตาล็อกกิจกรรมท่องเที่ยวชุมชนสำหรับโรงเรียนและบริษัท
- **Category:** Tourism & Local Economy
- **Problem:** กลุ่มท่องเที่ยวชุมชนขายให้ลูกค้ากลุ่มใหญ่ (ทัศนศึกษา, CSR) ได้ยาก ต้องคุยโทรศัพท์และทำใบเสนอราคาเองทุกครั้ง
- **Target Customer:** ผู้ใช้ = ครูผู้จัดทัศนศึกษา / ฝ่าย HR / ผู้จ่าย = โรงเรียนหรือบริษัทจ่ายค่าแพ็กเกจ แพลตฟอร์มหักคอมมิชชันจากชุมชน
- **Solution:** แค็ตตาล็อกกิจกรรมชุมชน ราคาต่อหัว จำนวนที่รับได้ และจุดประสงค์การเรียนรู้ พร้อมสร้างใบเสนอราคาอัตโนมัติ
- **Core MVP:** 1) แค็ตตาล็อก (seed 5–10 ชุมชน) 2) คำนวณใบเสนอราคาตามจำนวนคน + PDF 3) ฟอร์มจองและสถานะ
- **Revenue Model:** คอมมิชชันต่อการจองกลุ่ม ซึ่งมูลค่าต่อครั้งสูงกว่ารายบุคคล ชุมชนยอมจ่ายเพราะได้ลูกค้ากลุ่มที่หาเองยาก (ASSUMPTION)
- **Data / API:** Supabase, PDF library ฝั่ง client
- **Differentiation:** ปกติครูหาเองทาง Facebook/โทรศัพท์ บริษัททัวร์ทั่วไปไม่เน้นชุมชน (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ขึ้นกับระเบียบจัดซื้อและงบของโรงเรียน วงจรขายนาน และความรับผิดเรื่องความปลอดภัยเด็ก
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION (ไม่มีข้อมูล pain ตรง มีแค่งานวิจัย homestay ปี 2020)

#### IDEA-006 — Island Hop Planner
- **ID:** IDEA-006
- **Name:** Island Hop Planner — วางเส้นทางสุราษฎร์ฯ–สมุย–พะงัน–เต่า ช่วงพีค
- **Category:** Tourism & Local Economy
- **Problem:** ช่วงปีใหม่เรือเร็วเกือบเต็มทุกเส้นทาง นักท่องเที่ยวไม่รู้ทางเลือก (ท่าเรืออื่น เวลาอื่น รถ+เรือ)
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยว FIT / ผู้จ่าย = ผู้ให้บริการเรือหรือรถต่อเรือ จ่ายค่า lead
- **Solution:** เลือกวันและปลายทาง → แสดงทุกเส้นทาง ท่าเรือ เวลารวม และคำเตือนช่วงพีค แล้วส่งไปเว็บจองของผู้ให้บริการ
- **Core MVP:** 1) ตารางเรือกรอกมือ (JSON) 2) ค้นหาเส้นทางหลายขั้น 3) ปุ่มไปหน้าจองของผู้ให้บริการ
- **Revenue Model:** lead fee/affiliate จากผู้ให้บริการ — ไม่ยืนยันว่ามีโปรแกรม affiliate
- **Data / API:** ไม่พบ open API ของ Lomprayah, Raja Ferry, Seatran หรือ 12Go Asia ต้องกรอกเอง
- **Differentiation:** 12Go Asia ขายตั๋วรวมอยู่แล้ว (มีจริง แต่ไม่มีข้อมูล API/ค่าคอม) จุดต่างแคบ
- **Biggest Risk:** ไม่รู้ที่นั่งว่างแบบ real-time จึงแก้ปัญหา "เรือเต็ม" ไม่ได้จริง ตารางล้าสมัยเร็ว
- **Feasibility:** MEDIUM — ตรรกะเส้นทางหลายขั้นใช้เวลา
- **Evidence Status:** VERIFIED (peak: [Khaosod](https://www.khaosodenglish.com/tourism/2025/12/28/samui-phangan-brace-for-tourism-surge-ahead-of-new-years-eve/)) · UNKNOWN (API ตารางเรือ, รายได้)

#### IDEA-007 — StayCount TH
- **ID:** IDEA-007
- **Name:** StayCount TH — นับวันพำนักตามกฎวีซ่าฟรี 30 วันใหม่ + เตือน TDAC
- **Category:** Tourism & Local Economy
- **Problem:** ตั้งแต่ 15 ก.ย. 2026 วีซ่าฟรีเหลือ 30 วันสำหรับ 60 ประเทศ ข้ามแดนทางบกได้ 2 ครั้ง/ปี และต้องส่ง TDAC ภายใน 72 ชม. ก่อนเข้า
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยวและคนเที่ยวยาว / ผู้จ่าย = ตัวแทนวีซ่า ประกันเดินทาง หรือโฮสเทลที่ซื้อ lead/widget
- **Solution:** กรอกสัญชาติ วันเข้า ช่องทาง → นับวันเหลือ จำนวนครั้งข้ามแดนทางบกที่ใช้แล้ว และเตือนส่ง TDAC
- **Core MVP:** 1) rule engine ตามประกาศ TAT 2) timeline + ไฟล์ปฏิทิน .ics 3) อีเมลเตือน TDAC/วันครบกำหนด
- **Revenue Model:** ค่า lead จากตัวแทนวีซ่า/ประกัน เพราะผู้ใช้ที่ใกล้ครบกำหนดคือลูกค้าที่ต้องการบริการ (ASSUMPTION) ผู้ใช้ปลายทางไม่น่าจ่าย
- **Data / API:** กฎจาก TAT News (เขียนเป็น config เอง)
- **Differentiation:** เว็บราชการให้กฎแต่ไม่คำนวณรายบุคคล มีแอปนับวันวีซ่าทั่วไป (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ถ้าตีความกฎผิด ผู้ใช้อาจอยู่เกินกำหนด → ความรับผิด กฎเปลี่ยนบ่อย รายได้บาง
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (กฎ: [TAT News](https://www.tatnews.org/2026/09/thailand-introduces-new-30-day-and-15-day-visa-exemption-rules-from-15-september/), [Thaiger](https://thethaiger.com/guides/visa-information/thailand-digital-nomad-visa)) · ASSUMPTION (ผู้จ่าย)

#### IDEA-008 — SoftPower School Finder
- **ID:** IDEA-008
- **Name:** SoftPower School Finder — หาค่ายมวย/โรงเรียนทำอาหารที่รองรับ DTV
- **Category:** Tourism & Local Economy
- **Problem:** ผู้ขอ DTV สาย Soft Power (มวยไทย ทำอาหาร ฯลฯ) ต้องเข้าโปรแกรมของสถาบันไทย ส่วนใหญ่ ≥6 เดือน แต่หาว่าที่ไหนรองรับยาก
- **Target Customer:** ผู้ใช้ = ชาวต่างชาติที่จะขอ DTV / ผู้จ่าย = ค่ายมวยและโรงเรียนสอนทำอาหาร
- **Solution:** ไดเรกทอรีโรงเรียนที่ระบุว่าออกเอกสารรองรับ DTV ได้ ราคา ระยะโปรแกรม รีวิว และฟอร์มส่งใบสมัคร
- **Core MVP:** 1) listing + filter (เมือง ประเภท ระยะ) 2) ฟอร์มส่ง lead ให้โรงเรียน 3) checklist เอกสาร DTV
- **Revenue Model:** โรงเรียนจ่ายต่อ lead หรือ featured listing เพราะนักเรียน 6 เดือนมีมูลค่าสูงต่อราย (ASSUMPTION)
- **Data / API:** ข้อมูลโรงเรียนกรอกเอง (seed)
- **Differentiation:** ปัจจุบันหาผ่าน Google/เอเจนซี่ (ไม่ได้ตรวจสอบ) niche แคบและชัดกว่าเว็บรีวิวทั่วไป
- **Biggest Risk:** อัตราปฏิเสธ DTV สูงขึ้นในปี 2026 ตลาดอาจหด ข้อมูล "ออกเอกสารได้" ต้องตรวจทานเอง ถ้าผิดเกิดความรับผิด
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (กฎ DTV + อัตราปฏิเสธสูงขึ้น: [Thaiger](https://thethaiger.com/guides/visa-information/thailand-digital-nomad-visa)) · ASSUMPTION (โรงเรียนยอมจ่าย)

#### IDEA-009 — MenuBridge
- **ID:** IDEA-009
- **Name:** MenuBridge — เมนู QR ไทย/อังกฤษ/จีน พร้อมราคาตายตัวที่ร้านยืนยัน
- **Category:** Tourism & Local Economy
- **Problem:** ร้านเล็กในย่านท่องเที่ยวไม่มีเมนูภาษาต่างประเทศ นักท่องเที่ยวกลัวโดนบวกราคา ขณะที่ตลาดจีนโต +16% (ม.ค.–ส.ค. 2026)
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยว / ผู้จ่าย = ร้านอาหารและร้านค้าเล็กในย่านท่องเที่ยว
- **Solution:** ร้านพิมพ์เมนูภาษาไทย → ได้หน้าเมนู 3 ภาษา ราคาบาทตายตัว + ราคาเทียบสกุลเงินผู้ใช้ ผ่าน QR
- **Core MVP:** 1) ฟอร์มเมนูไทย + ร่างคำแปลอัตโนมัติ ให้ร้านแก้ได้ 2) หน้าเมนู QR หลายภาษา + แปลงสกุลเงิน 3) พิมพ์ป้าย QR
- **Revenue Model:** ร้านจ่ายครั้งเดียวค่าทำป้าย + รายเดือนเล็กน้อยสำหรับแก้เมนู เพราะอยากได้ลูกค้าต่างชาติ (ASSUMPTION)
- **Data / API:** Typhoon API (มี Translate model, free tier), FX จาก BOT ผ่าน Frankfurter (ฟรี ไม่ต้อง key)
- **Differentiation:** นักท่องเที่ยวใช้แอปแปลภาพถ่ายได้อยู่แล้ว (ไม่ได้ตรวจสอบ) จุดต่างคือ "ราคาที่ร้านยืนยัน" ซึ่งสร้างความเชื่อใจ
- **Biggest Risk:** ร้านไม่เห็นคุณค่าพอจะจ่ายเพราะนักท่องเที่ยวแปลเองได้ คำแปลชื่ออาหารผิดอาจเป็นเรื่องแพ้อาหาร
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ตลาดจีน: [The Nation](https://www.nationthailand.com/business/40070737); FX: [Frankfurter](https://frankfurter.dev/providers/bot/)) · ASSUMPTION (pain ฝั่งร้าน/ยอมจ่าย)

#### IDEA-010 — MuangRong Day Pass
- **ID:** IDEA-010
- **Name:** MuangRong Day Pass — ทริป 1 วันในเมืองรองพร้อมคูปองร้านท้องถิ่น
- **Category:** Tourism & Local Economy
- **Problem:** รัฐกระตุ้นการเที่ยวในประเทศและเมืองรอง แต่คนไทยไม่รู้จะเที่ยวอะไรใน 1 วัน และร้านในเมืองรองไม่ถูกค้นเจอ
- **Target Customer:** ผู้ใช้ = คนไทยเที่ยวในประเทศ / ผู้จ่าย = ร้านและที่พักในเมืองรอง
- **Solution:** เส้นทาง 1 วันต่อเมือง พร้อมคูปองร้านท้องถิ่นที่ใช้ได้ผ่าน QR
- **Core MVP:** 1) seed ทริป 2–3 เมือง 2) หน้าทริป + คูปอง 3) ร้านสแกนตัดคูปอง
- **Revenue Model:** ร้านจ่ายต่อคูปองที่ถูกใช้จริง เพราะจ่ายเมื่อได้ลูกค้าเท่านั้น (ASSUMPTION)
- **Data / API:** TAT Data API (ต้องสมัคร ไม่รู้ limit) สำรองด้วย OSM/Overpass (~10,000 req/วัน เป็น guideline)
- **Differentiation:** TAGTHAi กำลังถูกผลักเป็น one-stop platform พร้อม AI trip planning จุดต่างต้องอยู่ที่คูปองร้านเล็ก ไม่ใช่การวางแผนทริป
- **Biggest Risk:** แข่งกับแอปรัฐที่มีงบ ไม่มีร้านจริงก่อน Demo (ใช้ mock) และสถานะมาตรการเมืองรองปี 2026 ไม่ยืนยัน
- **Feasibility:** MEDIUM — ขึ้นกับการได้ key TAT
- **Evidence Status:** VERIFIED (TAGTHAi: [PRD](https://thailand.prd.go.th/en/content/category/detail/id/2078/iid/536369); มาตรการเที่ยวในประเทศปี 2025: [ฐานเศรษฐกิจ](https://www.thansettakij.com/business/tourism/644206)) · UNKNOWN (มาตรการเมืองรองปี 2026)

#### IDEA-011 — RainPlan
- **ID:** IDEA-011
- **Name:** RainPlan — เตือนความเสี่ยงฝนต่อรายการจองทัวร์ และให้แขกเลือกเลื่อนเอง
- **Category:** Tourism & Local Economy
- **Problem:** ทัวร์กลางแจ้ง (เกาะ ดำน้ำ เดินป่า) โดนยกเลิกเพราะฝน ผู้ประกอบการต้องโทรแจ้งแขกทีละคนและเสียรายได้
- **Target Customer:** ผู้ใช้และผู้จ่าย = ผู้ประกอบการทัวร์ขนาดเล็ก
- **Solution:** ดูพยากรณ์ของทุกการจองล่วงหน้า ให้คะแนนเสี่ยง แล้วส่งลิงก์ให้แขกเลือกเลื่อนวันหรือเปลี่ยนกิจกรรม
- **Core MVP:** 1) นำเข้ารายการจอง (CSV) 2) ดึงพยากรณ์ตามพิกัด + คะแนนเสี่ยง 3) ลิงก์ให้แขกเลือกเลื่อน/เปลี่ยน
- **Revenue Model:** ผู้ประกอบการจ่ายรายเดือน เพราะลดการยกเลิกแบบคืนเงินเต็ม (ASSUMPTION)
- **Data / API:** TMD WeatherForecast7Days (ควรลงทะเบียน ราคา/key ไม่ยืนยัน), Open-Meteo (ฟรีเฉพาะ non-commercial)
- **Differentiation:** ปกติผู้ประกอบการดูพยากรณ์เองแล้วแชท ระบบจองทัวร์ทั่วไปอาจมีฟีเจอร์คล้ายกัน (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** พยากรณ์ผิดทำให้เลื่อนทัวร์โดยไม่จำเป็น ผู้ประกอบการเล็กส่วนใหญ่อาจไม่ได้เก็บการจองในระบบดิจิทัล
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (API: [TMD](https://data.tmd.go.th/api/index1.php), [Open-Meteo](https://open-meteo.com/en/pricing)) · ASSUMPTION (pain)

#### IDEA-012 — CraftShip Home
- **ID:** IDEA-012
- **Name:** CraftShip Home — ซื้อของชุมชนที่หน้าร้าน แล้วให้ร้านส่งตามไปที่บ้าน
- **Category:** Tourism & Local Economy
- **Problem:** นักท่องเที่ยวอยากซื้อของชุมชนชิ้นใหญ่หรือแตกง่าย แต่ขนกลับไม่ได้ ร้านเสียยอดขาย
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยว / ผู้จ่าย = ผู้ซื้อจ่ายค่าส่ง + ผู้ผลิตจ่ายคอมมิชชันต่อออเดอร์
- **Solution:** สแกน QR ที่ร้าน → เลือกสินค้า จ่าย ใส่ที่อยู่ ร้านแพ็กส่งภายหลังและอัปเดตสถานะ
- **Core MVP:** 1) หน้าสินค้าต่อร้าน 2) checkout (mock payment) + ที่อยู่ 3) dashboard ร้านอัปเดตสถานะส่ง
- **Revenue Model:** คอมมิชชันต่อออเดอร์ เพราะร้านได้ยอดที่ปกติจะเสียไป (ASSUMPTION)
- **Data / API:** Supabase, `promptpay-qr` (ผู้ซื้อในประเทศ)
- **Differentiation:** TAGTHAi มีแผนเชื่อมธุรกิจรายย่อย (เช่นผ้าไทย) โดยตรง ร้านส่งไปรษณีย์เองได้อยู่แล้ว
- **Biggest Risk:** ส่งต่างประเทศติดศุลกากร ภาษี ของแตก เคลมยุ่ง และออเดอร์ต่อร้านน้อย
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (คู่แข่งรัฐ: [PRD](https://thailand.prd.go.th/en/content/category/detail/id/2078/iid/536369)) · ASSUMPTION (pain)

#### IDEA-013 — TripSplit THB
- **ID:** IDEA-013
- **Name:** TripSplit THB — หารค่าใช้จ่ายทริปหลายสกุลเงินด้วยอัตรา BOT
- **Category:** Tourism & Local Economy
- **Problem:** กลุ่มนักท่องเที่ยวจ่ายเงินหลายสกุล หารค่าใช้จ่ายยุ่ง
- **Target Customer:** ผู้ใช้ = กลุ่มนักท่องเที่ยว / ผู้จ่าย = ไม่ชัด (affiliate e-SIM หรือร้านแลกเงิน — ASSUMPTION)
- **Solution:** บันทึกค่าใช้จ่ายหลายสกุล แปลงตามอัตรา BOT รายวัน แล้วสรุปว่าใครต้องโอนให้ใคร
- **Core MVP:** 1) สร้างทริป + สมาชิก 2) บันทึกรายการหลายสกุล 3) สรุปยอดโอน + PromptPay QR สำหรับคนไทย
- **Revenue Model:** affiliate — ไม่มีหลักฐาน ผู้ใช้ไม่น่าจ่ายแอปหารเงิน
- **Data / API:** Frankfurter (BOT rates, ฟรี ไม่ต้อง key)
- **Differentiation:** Splitwise (ไม่ได้ตรวจสอบ) ทำเรื่องนี้ครบกว่า จุดต่างมีแค่อัตรา BOT + PromptPay
- **Biggest Risk:** ไม่มีจุดต่างจริงและไม่มีผู้จ่าย เป็นไอเดียอ่อนที่เก็บไว้เพื่อบันทึก
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (pain) · VERIFIED (API: [Frankfurter](https://frankfurter.dev/providers/bot/))

#### IDEA-014 — RoomQR Concierge
- **ID:** IDEA-014
- **Name:** RoomQR Concierge — QR ในห้องพักสำหรับจองทัวร์/รถท้องถิ่นที่โรงแรมคัดแล้ว
- **Category:** Tourism & Local Economy
- **Problem:** โฮสเทลและโรงแรมเล็กไม่มีคอนเซียร์จ แขกไปจองผ่าน OTA โรงแรมไม่ได้ส่วนแบ่ง ทัวร์ท้องถิ่นเล็กไม่ได้ลูกค้า
- **Target Customer:** ผู้ใช้ = แขกโรงแรม / ผู้จ่าย = ผู้ประกอบการทัวร์/รถจ่ายคอมมิชชัน แบ่งส่วนหนึ่งให้โรงแรม
- **Solution:** QR ในห้อง → รายการกิจกรรมที่โรงแรมรับรอง จองได้ทันที โรงแรมเห็นยอดคอมมิชชัน
- **Core MVP:** 1) หน้ารายการกิจกรรมต่อโรงแรม 2) จอง + mock payment 3) รายงานคอมมิชชันต่อโรงแรม
- **Revenue Model:** ผู้ประกอบการจ่ายคอมมิชชันเพราะได้ลูกค้าที่พักใกล้ ตลาดนี้มีโมเดลคอมมิชชันจริง (affiliate กิจกรรม 2–8% ถึง ~30%) แต่อัตราที่ผู้ประกอบการเล็กยอมจ่ายยังเป็น ASSUMPTION
- **Data / API:** Supabase, `promptpay-qr`
- **Differentiation:** โรงแรมติดลิงก์ affiliate Klook/GetYourGuide เองได้ จุดต่างคือผู้ประกอบการท้องถิ่นที่ไม่อยู่บน OTA
- **Biggest Risk:** โรงแรมต้องรับผิดชอบคุณภาพทัวร์ การคืนเงินและแบ่งคอมยุ่ง ผู้ประกอบการอาจข้ามแพลตฟอร์มหลังได้ลูกค้าแล้ว
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (อัตรา affiliate: [Track360](https://track360.io/blog/tours-activities-experiences-affiliate-programs-operator-guide-2026)) · ASSUMPTION (โรงแรมยอมใช้)

#### IDEA-015 — Street Food Stamp Pass
- **ID:** IDEA-015
- **Name:** Street Food Stamp Pass — พาสเส้นทางอาหารริมทาง แลกเมนูด้วย QR
- **Category:** Tourism & Local Economy
- **Problem:** นักท่องเที่ยวไม่รู้จะกินร้านไหนและกลัวราคานักท่องเที่ยว ร้านริมทางไม่มีช่องทางดึงนักท่องเที่ยว
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยว / ผู้จ่าย = นักท่องเที่ยวซื้อพาส แพลตฟอร์มจ่ายร้านตามจำนวนที่แลก
- **Solution:** พาสดิจิทัล 5 ร้าน 5 เมนู ราคาชัด ร้านสแกน QR เพื่อแลก พร้อมแผนที่เดินเอง
- **Core MVP:** 1) ซื้อพาส (mock payment) 2) QR แลกที่ร้าน 3) แผนที่ Leaflet/OSM
- **Revenue Model:** ส่วนต่างระหว่างราคาพาสกับเงินที่จ่ายร้าน นักท่องเที่ยวจ่ายเพราะได้ความสะดวกและราคาแน่นอน (ASSUMPTION)
- **Data / API:** Leaflet + OSM tiles (ต้องใส่ attribution ห้าม offline)
- **Differentiation:** food tour แบบมีไกด์ราคาสูงกว่า (ไม่ได้ตรวจสอบราคา) พาสเดินเองถูกกว่า
- **Biggest Risk:** การจ่ายเงินให้ร้านจริง (settlement) ต้องมีระบบชำระที่ยังไม่ได้ทำ ร้านต้องรักษาคุณภาพ ยอดขายต้องสูงจึงคุ้ม
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION (ไม่มีหลักฐาน pain เฉพาะเรื่องอาหาร หลักฐานการโกงที่มีเป็นเรื่องรถ)

#### IDEA-016 — BoatSeat Pool
- **ID:** IDEA-016
- **Name:** BoatSeat Pool — รวมที่นั่งเรือเที่ยวเกาะ จองรายที่นั่ง ออกเรือเมื่อครบขั้นต่ำ
- **Category:** Tourism & Local Economy
- **Problem:** นักท่องเที่ยวเดี่ยวต้องเหมาเรือแพง เจ้าของเรือเล็กออกเรือไม่เต็ม
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยวเดี่ยว/คู่ + เจ้าของเรือ / ผู้จ่าย = ผู้โดยสารจ่ายต่อที่นั่ง แพลตฟอร์มหักคอม
- **Solution:** เจ้าของเรือประกาศรอบพร้อมจำนวนขั้นต่ำ ผู้โดยสารจองรายที่นั่ง ระบบยืนยันออกเรือเมื่อครบ
- **Core MVP:** 1) สร้างรอบ + ขั้นต่ำ 2) จองที่นั่ง + มัดจำ (จำลอง) 3) สถานะ "ยืนยันออกเรือ / ยกเลิกคืนเงิน"
- **Revenue Model:** คอมมิชชันต่อที่นั่ง เพราะเจ้าของเรือได้รายได้จากที่นั่งที่ปกติว่าง (ASSUMPTION)
- **Data / API:** Supabase Realtime
- **Differentiation:** ปัจจุบันรวมกลุ่มผ่านเคาน์เตอร์ทัวร์หรือกลุ่ม Facebook (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ใบอนุญาต ประกัน และความปลอดภัยทางทะเล การคืนเงินเมื่อไม่ครบ และเจ้าของเรือข้ามแพลตฟอร์ม
- **Feasibility:** MEDIUM — ตรรกะยืนยัน/ยกเลิกต้องรัดกุม
- **Evidence Status:** ASSUMPTION

#### IDEA-017 — FestMap Vendor
- **ID:** IDEA-017
- **Name:** FestMap Vendor — แผนที่บูธในงานเทศกาล + สั่งล่วงหน้ารับที่บูธ
- **Category:** Tourism & Local Economy
- **Problem:** งานเทศกาลคนแน่น หาบูธ/ห้องน้ำยาก ต้องต่อคิวนาน (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = คนเที่ยวงาน / ผู้จ่าย = ผู้จัดงานจ่ายค่าระบบต่องาน + ผู้ค้าจ่าย featured
- **Solution:** อัปโหลดผังงานเป็นรูป ปักหมุดบูธ ค้นร้าน และสั่งล่วงหน้า
- **Core MVP:** 1) อัปโหลดผัง + ปักหมุด 2) ค้นร้าน/เมนู 3) สั่งล่วงหน้า (mock payment)
- **Revenue Model:** ผู้จัดงานจ่ายต่องานเพื่อลดความแออัด (ASSUMPTION)
- **Data / API:** Leaflet แบบ image overlay
- **Differentiation:** ผู้จัดปัจจุบันโพสต์รูปผังใน Facebook (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ใช้ครั้งเดียวต่อปีต่องาน สัญญาณมือถือในงานแออัด ไม่มีข้อมูล pain ยืนยัน
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (notes ระบุว่าไม่ได้ค้นเรื่องความแออัดช่วงเทศกาล)

#### IDEA-018 — Review2Post
- **ID:** IDEA-018
- **Name:** Review2Post — เก็บรีวิวจริงของแขก homestay แล้วร่างเป็นโพสต์โซเชียลให้เจ้าของ
- **Category:** Tourism & Local Economy
- **Problem:** เจ้าของ homestay ไม่มีเวลาทำคอนเทนต์ งานวิจัยพบว่าปัจจัยที่มีน้ำหนักสูงสุดต่อการตัดสินใจของนักท่องเที่ยวคือ "สิ่งสนับสนุนการตัดสินใจ" และ "ข้อมูลตรงความต้องการ"
- **Target Customer:** ผู้ใช้และผู้จ่าย = เจ้าของ homestay/CBT; แขกเป็นผู้ให้รีวิว
- **Solution:** แขกสแกน QR หลังเช็กเอาต์ ให้รีวิว + รูป → ระบบร่างโพสต์ไทย/อังกฤษจากรีวิวจริง เจ้าของคัดลอกไปโพสต์
- **Core MVP:** 1) ฟอร์มรีวิว + รูป + ขอความยินยอมใช้รูป 2) ร่างโพสต์ด้วย LLM จากรีวิวจริง 3) คลังคอนเทนต์ให้คัดลอก
- **Revenue Model:** เจ้าของจ่ายรายเดือนเล็กน้อยเพื่อประหยัดเวลา (ASSUMPTION ยังไม่มีหลักฐานว่าเจ้าของยอมจ่ายเรื่องการตลาด)
- **Data / API:** Typhoon API (free tier) หรือ Groq/OpenRouter สำรอง
- **Differentiation:** ต่างจาก IDEA-004 (ระบบจอง) ตรงนี้คือคลังรีวิว คุณค่าจริงคือเก็บรีวิวอย่างเป็นระบบ ไม่ใช่ "ใช้ AI"
- **Biggest Risk:** แขกไม่ยอมเขียนรีวิว ถ้าไม่มีรีวิวก็ไม่มีคอนเทนต์ PDPA เรื่องรูปแขก
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (pain: [วารสาร 2020 — ข้อมูลเก่า](https://so04.tci-thaijo.org/index.php/tourismtaat/article/download/240161/163734/825276)) · ASSUMPTION (ยอมจ่าย)

#### IDEA-019 — AccessTrip TH
- **ID:** IDEA-019
- **Name:** AccessTrip TH — ข้อมูลการเข้าถึงสำหรับผู้ใช้วีลแชร์และผู้สูงวัย พร้อมรูปยืนยัน
- **Category:** Tourism & Local Economy
- **Problem:** ผู้สูงวัย/ผู้พิการไม่รู้ว่าที่เที่ยวหรือที่พักเข้าถึงได้จริงไหม (ทางลาด ห้องน้ำ ลิฟต์)
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยวสูงวัย/ผู้พิการ + ครอบครัว / ผู้จ่าย = ที่พักหรือสถานที่จ่ายค่าประเมินเพื่อได้ badge
- **Solution:** checklist การเข้าถึงแบบมีรูปยืนยัน + ค้นหาด้วย filter
- **Core MVP:** 1) ฟอร์มประเมินพร้อมรูป 2) listing + filter 3) badge สำหรับฝังบนเว็บที่พัก
- **Revenue Model:** ค่าประเมิน/ป้าย (ASSUMPTION)
- **Data / API:** Supabase Storage
- **Differentiation:** ปัจจุบันข้อมูลกระจายอยู่ในรีวิวทั่วไป
- **Biggest Risk:** ต้องลงพื้นที่เก็บข้อมูลจริง ทำไม่ทันใน 1.5 วัน (Demo ต้องใช้ mock) และรับผิดถ้าข้อมูลผิด
- **Feasibility:** MEDIUM — ระบบง่าย แต่ข้อมูลจริงไม่ทัน
- **Evidence Status:** UNKNOWN (ไม่ได้ค้นเรื่อง accessibility) · VERIFIED เฉพาะบริบทสังคมสูงวัย 18% ([Time Out/GISTDA](https://www.timeout.com/bangkok/news/thailand-is-now-a-nation-of-grandparents-090225))

#### IDEA-020 — Tourist Incident Reporter
- **ID:** IDEA-020
- **Name:** Tourist Incident Reporter — แจ้งเหตุถูกเรียกเกินหลายภาษา สร้างคำร้องภาษาไทยพร้อมหลักฐาน
- **Category:** Tourism & Local Economy
- **Problem:** นักท่องเที่ยวที่ถูกเรียกเกินไม่รู้จะร้องเรียนที่ไหน ต้องใช้ภาษาไทย และหลักฐานไม่ครบ
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยว / ผู้จ่าย = หน่วยงานท่องเที่ยวจังหวัด (B2G) หรือบริษัทประกันเดินทาง
- **Solution:** ฟอร์มหลายภาษาเก็บรูปทะเบียน ราคา ตำแหน่ง → สร้าง PDF คำร้องภาษาไทย + dashboard จุดเสี่ยงให้หน่วยงาน
- **Core MVP:** 1) ฟอร์มรายงาน + รูป + พิกัด 2) PDF คำร้องภาษาไทย 3) heatmap สำหรับหน่วยงาน
- **Revenue Model:** หน่วยงานจ่ายค่า dashboard เพื่อวางด่านตรวจตรงจุด (ASSUMPTION ไม่มีหลักฐานว่ารัฐซื้อจากทีมเล็ก)
- **Data / API:** Leaflet + OSM, Supabase
- **Differentiation:** มีช่องทางรัฐ (ศูนย์ดำรงธรรม) อยู่แล้ว จุดต่างคือภาษาและหลักฐานครบ ทับซ้อนบางส่วนกับ IDEA-001
- **Biggest Risk:** ผู้จ่าย B2G ช้าและไม่แน่นอน รายงานเท็จเสี่ยงหมิ่นประมาท
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (pain: [Khaosod Samui](https://www.khaosodenglish.com/tourism/2025/12/28/samui-phangan-brace-for-tourism-surge-ahead-of-new-years-eve/), [Malay Mail](https://malaymail.com/news/life/2025/05/21/bangkok-cancun-and-hanoi-top-global-list-for-tourist-scams-mastercard-study-finds/177612)) · ASSUMPTION (ผู้จ่าย)

#### IDEA-021 — GuideQuote
- **ID:** IDEA-021
- **Name:** GuideQuote — ใบเสนอราคาหลายสกุลเงินสำหรับไกด์อิสระ พร้อมรับมัดจำ
- **Category:** Tourism & Local Economy
- **Problem:** ไกด์/คนขับรถนำเที่ยวอิสระตอบราคาลูกค้าต่างชาติทางแชท ทำใบเสนอราคาเอง แปลงสกุลเงินเอง และมัดจำไม่เป็นระบบ (สมมติฐาน)
- **Target Customer:** ผู้ใช้และผู้จ่าย = ไกด์และคนขับรถนำเที่ยวอิสระ; ลูกค้าต่างชาติเป็นผู้รับใบเสนอราคา
- **Solution:** เลือกรายการ (รถ ค่าเข้า อาหาร ชั่วโมงไกด์) → ได้ลิงก์ใบเสนอราคาสวย ๆ แสดงราคาบาท + สกุลลูกค้า ลูกค้ากดยอมรับและจ่ายมัดจำ
- **Core MVP:** 1) ตัวสร้างใบเสนอราคาจากรายการที่บันทึกไว้ 2) ลิงก์ให้ลูกค้ากดยอมรับ + แปลงสกุลเงิน 3) มัดจำ (PromptPay สำหรับคนไทย, Stripe test mode สำหรับบัตร = จำลอง)
- **Revenue Model:** ไกด์จ่ายรายเดือนเล็กน้อยเพราะดูเป็นมืออาชีพและลดการโดนเท (ASSUMPTION)
- **Data / API:** Frankfurter (BOT), Stripe ไทย (บัตรต่างประเทศ 4.75% + ฿10 — ถ้าใช้จริง)
- **Differentiation:** ต่างจาก IDEA-004 ที่เป็นปฏิทินห้องพัก ตรงนี้คือใบเสนอราคาแบบแยกรายการ; OTA กิจกรรมขายแพ็กเกจตายตัว ไม่ใช่งานส่วนตัว
- **Biggest Risk:** ไกด์ใช้แชท + รูปตารางราคาแล้วพอใจ ไม่เห็นเหตุผลจะจ่าย Stripe สำหรับผู้เยาว์/ไม่มีนิติบุคคลยังไม่ยืนยัน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION (pain) · VERIFIED (ค่าธรรมเนียม: [Stripe TH](https://stripe.com/th/pricing); FX: [Frankfurter](https://frankfurter.dev/providers/bot/))

#### IDEA-022 — TourMarket Pulse
- **ID:** IDEA-022
- **Name:** TourMarket Pulse — dashboard ตลาดนักท่องเที่ยวรายประเทศ สำหรับผู้ประกอบการท้องถิ่น
- **Category:** Tourism & Local Economy
- **Problem:** ตลาดเปลี่ยนเร็ว (ม.ค.–ส.ค. 2026 จีน +16.05%, เกาหลีใต้ -24.78%, มาเลเซีย -11.87%) แต่ร้านและที่พักเล็กไม่รู้ว่าควรทำป้าย/โฆษณาภาษาไหน
- **Target Customer:** ผู้ใช้ = ที่พักและร้านค้าในเมืองท่องเที่ยว / ผู้จ่าย = สมาคมโรงแรมหรือหอการค้าจังหวัด (ซื้อให้สมาชิก)
- **Solution:** แปลงข้อมูลเปิดของกระทรวงท่องเที่ยวฯ เป็นกราฟง่าย ๆ + คำแนะนำ "ตลาดที่โต/หด" รายเดือน
- **Core MVP:** 1) นำเข้า dataset (CSV/JSON) 2) กราฟแนวโน้มรายประเทศ 3) การ์ดคำแนะนำภาษาที่ควรรองรับ
- **Revenue Model:** สมาคมจ่ายรายปีเป็นบริการสมาชิก (ASSUMPTION) ผู้ประกอบการรายย่อยไม่น่าจ่ายเอง
- **Data / API:** data.go.th dataset ของ MOTS (CC-BY, annual) — CKAN API ยังไม่ยืนยัน; ตัวเลขรายเดือนอาจต้องกรอกจากข่าว
- **Differentiation:** ข้อมูลรัฐเปิดอยู่แล้วแต่ไม่แปลเป็นการตัดสินใจ
- **Biggest Risk:** ข้อมูลสาธารณะใครก็ดูได้ คุณค่าเพิ่มบาง ข้อมูลรายปีช้าเกินใช้งาน และ Demo ไม่น่าตื่นเต้นใน 60 วินาที
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ข้อมูลตลาด: [The Nation](https://www.nationthailand.com/business/40070737); dataset: [data.go.th](https://gdcc.data.go.th/en/dataset/international-tourist-arrivals-to-thailand-2021)) · ASSUMPTION (ผู้จ่าย)

#### IDEA-023 — NomadDesk Finder
- **ID:** IDEA-023
- **Name:** NomadDesk Finder — หาคาเฟ่/coworking ที่ทำงานได้จริง พร้อมผลวัดความเร็วเน็ตจากผู้ใช้
- **Category:** Tourism & Local Economy
- **Problem:** คนเที่ยวยาวสาย Workcation (DTV) ต้องหาที่นั่งทำงานที่มีเน็ตเร็วและปลั๊ก ข้อมูลรีวิวทั่วไปไม่บอก
- **Target Customer:** ผู้ใช้ = digital nomad / ผู้ถือ DTV / ผู้จ่าย = คาเฟ่และ coworking จ่าย featured listing หรือคอมจาก day pass
- **Solution:** แผนที่ที่นั่งทำงาน แต่ละแห่งมีผล speed test ล่าสุด ปลั๊ก เสียง ชั่วโมงเปิด + ขาย day pass
- **Core MVP:** 1) แผนที่ + filter 2) ฟอร์มส่งผล speed test/รูป 3) ซื้อ day pass (mock payment)
- **Revenue Model:** คาเฟ่จ่าย featured เพื่อดึงลูกค้านั่งนาน (ASSUMPTION — คาเฟ่บางแห่งไม่อยากได้ลูกค้านั่งนาน)
- **Data / API:** Leaflet + OSM / Overpass POI
- **Differentiation:** มีเว็บรวมที่ทำงานสำหรับ nomad ระดับโลก (ไม่ได้ตรวจสอบ) จุดต่างคือข้อมูลละเอียดในเมืองรอง เช่น สุราษฎร์ฯ/สมุย
- **Biggest Risk:** ต้องมีข้อมูลจากผู้ใช้จำนวนมากถึงมีค่า (cold start) และคาเฟ่ไม่ได้ต้องการลูกค้าแบบนี้ทุกที่
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (DTV Workcation: [Thaiger](https://thethaiger.com/guides/visa-information/thailand-digital-nomad-visa)) · ASSUMPTION (pain/ผู้จ่าย; ข่าว "nomad paradise" อ่านแค่หัวข้อ)

#### IDEA-024 — SlotVisit
- **ID:** IDEA-024
- **Name:** SlotVisit — ขายบัตรเข้าชมแบบจองช่วงเวลาสำหรับสถานที่เล็กของชุมชน
- **Category:** Tourism & Local Economy
- **Problem:** จุดเที่ยวเล็กของชุมชน (จุดชมวิว สวน วัดที่เก็บค่าบำรุง) คนล้นบางช่วงและเงียบบางช่วง เก็บเงินด้วยกล่องรับบริจาค (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยว / ผู้จ่าย = เจ้าของสถานที่จ่ายค่าธรรมเนียมต่อบัตร
- **Solution:** เปิดขายช่วงเวลาจำกัดจำนวน ช่วงคนน้อยราคาถูกกว่า สแกน QR ที่ทางเข้า
- **Core MVP:** 1) ตั้งช่วงเวลา + จำนวน + ราคา 2) ซื้อบัตร (mock payment) 3) หน้าสแกนตรวจบัตร
- **Revenue Model:** ค่าธรรมเนียมต่อบัตร เพราะสถานที่ได้รายได้แน่นอนและกระจายคน (ASSUMPTION)
- **Data / API:** Supabase, `promptpay-qr`
- **Differentiation:** ระบบขายบัตรทั่วไปมีอยู่ (ไม่ได้ตรวจสอบ) จุดต่างคือราคาตามช่วงเวลาสำหรับสถานที่เล็กที่ไม่เคยขายออนไลน์
- **Biggest Risk:** สถานที่เล็กไม่มีปัญหาคนล้นจริง และนักท่องเที่ยวไม่ชอบต้องจองล่วงหน้าสำหรับที่เล็ก
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (ไม่มีข้อมูลความแออัดของจุดเที่ยวชุมชน)

#### IDEA-025 — SnapLocal
- **ID:** IDEA-025
- **Name:** SnapLocal — จองช่างภาพท้องถิ่นถ่ายรูป 30 นาทีที่จุดท่องเที่ยว
- **Category:** Tourism & Local Economy
- **Problem:** นักท่องเที่ยวคู่/เดี่ยวอยากได้รูปสวยแต่ไม่มีคนถ่าย ช่างภาพท้องถิ่น/นักศึกษาไม่มีช่องทางหาลูกค้าต่างชาติ (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = นักท่องเที่ยว / ผู้จ่าย = นักท่องเที่ยวจ่ายค่าถ่าย แพลตฟอร์มหักคอม
- **Solution:** เลือกจุด เวลา ช่างภาพ ดูผลงาน จองและจ่ายมัดจำ
- **Core MVP:** 1) โปรไฟล์ช่างภาพ + ผลงาน 2) ปฏิทินจอง 3) มัดจำ (จำลอง)
- **Revenue Model:** คอมมิชชันต่อการจอง (benchmark: Fastwork 17% สำหรับงานฟรีแลนซ์) อัตราที่ช่างภาพยอมจ่ายเป็น ASSUMPTION
- **Data / API:** Supabase Storage
- **Differentiation:** มีแพลตฟอร์มช่างภาพท่องเที่ยวระดับโลก (ไม่ได้ตรวจสอบ) จุดต่างคือช่างภาพท้องถิ่นราคาไทย
- **Biggest Risk:** หลังเจอกันครั้งแรกจะข้ามแพลตฟอร์ม คุณภาพไม่สม่ำเสมอ และความปลอดภัยเมื่อนัดคนแปลกหน้า
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION · VERIFIED เฉพาะ benchmark ค่าคอม ([Marketing Oops](https://www.marketingoops.com/?p=338637))

### หมวด Student & Education (IDEA-026 ถึง IDEA-035)

#### IDEA-026 — TCAS Round Planner
- **ID:** IDEA-026
- **Name:** TCAS Round Planner — วางแผนว่าจะยื่นรอบไหน พร้อมเช็กลิสต์และเส้นตาย
- **Category:** Student & Education
- **Problem:** นักเรียนไม่รู้จะเริ่มวางแผนอย่างไร ควรยื่นรอบไหน เกณฑ์แต่ละรอบต่างกัน TCAS69 มีผู้ยืนยันสิทธิ์ 242,043 คน และสละสิทธิ์ 21,038 คน
- **Target Customer:** ผู้ใช้ = นักเรียน ม.5–ม.6 / ผู้จ่าย = ผู้ปกครอง (แพ็กแผนละเอียด) หรือโรงเรียนกวดวิชาที่ซื้อพื้นที่แนะนำคอร์ส
- **Solution:** กรอก GPAX คะแนน คณะที่สนใจ → ได้ timeline รอบที่เหมาะ เอกสารที่ต้องเตรียม และเส้นตาย
- **Core MVP:** 1) ฐานข้อมูลเกณฑ์คณะที่เลือก (seed 20–30 โครงการ) 2) ตัวจับคู่รอบ + timeline 3) checklist + ปฏิทิน .ics
- **Revenue Model:** freemium: ผู้ปกครองจ่ายครั้งเดียวสำหรับแผนละเอียด เพราะการพลาดรอบมีต้นทุนสูง (ASSUMPTION — มีเว็บข้อมูลฟรีจำนวนมาก)
- **Data / API:** ข้อมูลเกณฑ์ต้องกรอกเอง (ไม่พบ API ทางการ)
- **Differentiation:** มีเว็บ/เพจข่าว TCAS ฟรีหลายเจ้า (ไม่ได้ตรวจสอบ) จุดต่างคือแผนรายบุคคล ไม่ใช่ข่าว
- **Biggest Risk:** เกณฑ์เปลี่ยนทุกปี (TCAS70 กลับไปสอบกระดาษ) ถ้าข้อมูลผิดนักเรียนพลาดรอบจริง และนักเรียนไม่ค่อยจ่ายเงินซื้อข้อมูล
- **Feasibility:** MEDIUM — ระบบง่าย แต่กรอกเกณฑ์ให้ถูกใช้เวลามาก
- **Evidence Status:** VERIFIED (pain: [MGR Online](https://mgronline.com/qol/detail/9690000059956), [Mitihoon](https://www.mitihoon.com/2026/08/04/663744/)) · ASSUMPTION (ยอมจ่าย)

#### IDEA-027 — PortReview
- **ID:** IDEA-027
- **Name:** PortReview — ส่งพอร์ตให้รุ่นพี่มหาวิทยาลัยในคณะเป้าหมายรีวิว จ่ายรายครั้ง
- **Category:** Student & Education
- **Problem:** รอบ Portfolio เป็นรอบที่รับมากที่สุด (106,474 คน) แต่นักเรียนไม่รู้ว่าพอร์ตแบบไหนที่คณะต้องการ
- **Target Customer:** ผู้ใช้ = นักเรียน ม.6 / ผู้จ่าย = นักเรียน/ผู้ปกครองจ่ายต่อการรีวิว; รุ่นพี่ได้ส่วนแบ่ง
- **Solution:** อัปโหลด PDF พอร์ต เลือกคณะ → รุ่นพี่ที่ยืนยันตัวตนแล้วคอมเมนต์ตามแบบฟอร์มมาตรฐาน
- **Core MVP:** 1) อัปโหลดพอร์ต + เลือกคณะ 2) หน้ารีวิวของรุ่นพี่แบบ rubric + คอมเมนต์บน PDF 3) จ่ายต่อครั้ง (จำลอง)
- **Revenue Model:** ค่าธรรมเนียมต่อรีวิว แพลตฟอร์มหักส่วนแบ่ง เพราะถูกกว่าติวพอร์ตแบบคอร์ส (ASSUMPTION — ไม่มีข้อมูลราคาติวพอร์ต)
- **Data / API:** Supabase Storage, PDF viewer
- **Differentiation:** ติวพอร์ตแบบคอร์สและรุ่นพี่รับรีวิวผ่านโซเชียลมีอยู่ (ไม่ได้ตรวจสอบ) จุดต่างคือยืนยันคณะของผู้รีวิว + rubric มาตรฐาน
- **Biggest Risk:** ยืนยันตัวตนรุ่นพี่ยาก คุณภาพรีวิวไม่สม่ำเสมอ ฤดูกาลสั้น (รายได้ช่วงเดียวต่อปี) และ PDPA ของผู้เยาว์
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ขนาดรอบ Portfolio: [MGR Online](https://mgronline.com/qol/detail/9690000059956)) · ASSUMPTION (ยอมจ่าย)

#### IDEA-028 — CampRadar
- **ID:** IDEA-028
- **Name:** CampRadar — ปฏิทินส่วนตัวของค่าย/การแข่งขันที่ตรงกับคณะเป้าหมาย พร้อมเตือนก่อนปิดรับ
- **Category:** Student & Education
- **Problem:** ข่าวค่ายและการแข่งขันกระจัดกระจาย นักเรียนพลาดเส้นตายสมัคร (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = นักเรียน ม.ปลาย / ผู้จ่าย = ผู้จัดค่ายจ่าย boost เพื่อเข้าถึงนักเรียนที่ตรงกลุ่ม
- **Solution:** นักเรียนเลือกความสนใจ/คณะ → ได้ฟีดค่ายที่ตรง และบันทึกลงปฏิทินพร้อมเตือน
- **Core MVP:** 1) ฐานข้อมูลค่าย (กรอก seed) + tag 2) ฟีดตามความสนใจ 3) ปุ่มเพิ่มปฏิทิน + อีเมลเตือน
- **Revenue Model:** ผู้จัดค่ายจ่าย boost เพราะต้องการผู้สมัครที่ตรงกลุ่ม (ASSUMPTION)
- **Data / API:** กรอกเอง; ห้าม scrape CampHub
- **Differentiation:** CampHub เป็นเว็บรวมค่ายที่มีอยู่แล้ว (โมเดลรายได้ไม่ทราบ) จุดต่างมีแค่การเตือนส่วนตัว ซึ่งบางมาก
- **Biggest Risk:** CampHub เพิ่มฟีเจอร์นี้ได้ทันที ข้อมูลค่ายต้องอัปเดตตลอด
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (คู่แข่ง: [CampHub](https://www.camphub.in.th/)) · ASSUMPTION (pain/ผู้จ่าย)

#### IDEA-029 — UniformSwap
- **ID:** IDEA-029
- **Name:** UniformSwap — ซื้อขายชุดนักเรียน/หนังสือมือสองภายในโรงเรียนเดียว รับของที่โรงเรียน
- **Category:** Student & Education
- **Problem:** ผู้ปกครองซื้อชุด/หนังสือใหม่ทุกปีทั้งที่รุ่นพี่มีของเหลือ การนัดเจอคนแปลกหน้าบนเว็บขายของทั่วไปไม่สะดวก (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = ผู้ปกครองและนักเรียนในโรงเรียน / ผู้จ่าย = ผู้ขายจ่ายค่าธรรมเนียมเล็กต่อรายการ หรือสหกรณ์โรงเรียนจ่ายรายปี
- **Solution:** ตลาดเฉพาะสมาชิกโรงเรียน ระบุไซซ์/ชั้นปี จุดรับของที่ห้องสหกรณ์
- **Core MVP:** 1) ลงประกาศ + filter ไซซ์/ชั้น 2) จองของ + นัดรับที่จุดของโรงเรียน 3) ยืนยันรับ/ปิดรายการ
- **Revenue Model:** ค่าธรรมเนียมต่อรายการ หรือสหกรณ์จ่ายเพื่อบริการสมาชิก (ASSUMPTION)
- **Data / API:** Supabase Auth (อีเมลโรงเรียน)
- **Differentiation:** เว็บมือสองหลักให้ลงประกาศฟรี (Kaidee, ENNXO, FB Marketplace) จุดต่างคือวงปิดของโรงเรียนและจุดรับของที่ปลอดภัย
- **Biggest Risk:** มูลค่าต่อรายการต่ำมาก ค่าธรรมเนียมไม่คุ้ม กลุ่ม LINE ผู้ปกครองทำได้ฟรี
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ตลาดมือสองลงฟรี: [KTC](https://www.ktc.co.th/article/knowledge/business/8-second-hand-marketplace-atpb)) · ASSUMPTION (pain)

#### IDEA-030 — SeniorTutor
- **ID:** IDEA-030
- **Name:** SeniorTutor — รุ่นพี่ ม.ปลายติวรุ่นน้องในโรงเรียนเดียวกัน ผู้ปกครองจ่ายรายชั่วโมง
- **Category:** Student & Education
- **Problem:** ค่ากวดวิชาสูงสำหรับบางครอบครัว (ไม่มีตัวเลขยืนยัน) รุ่นพี่เก่งอยากได้รายได้เสริม
- **Target Customer:** ผู้ใช้ = นักเรียนรุ่นน้อง + รุ่นพี่ติวเตอร์ / ผู้จ่าย = ผู้ปกครอง
- **Solution:** รุ่นพี่ลงวิชาและเวลาว่าง ผู้ปกครองจองรายชั่วโมงในพื้นที่โรงเรียน รุ่นน้องให้คะแนนหลังเรียน
- **Core MVP:** 1) โปรไฟล์ติวเตอร์ + วิชา 2) จองตารางเวลา 3) จ่าย (จำลอง) + ให้คะแนน
- **Revenue Model:** แพลตฟอร์มหักเปอร์เซ็นต์ต่อชั่วโมง ผู้ปกครองจ่ายเพราะถูกกว่ากวดวิชา (ASSUMPTION)
- **Data / API:** Supabase
- **Differentiation:** Snapask จับคู่ติวเตอร์ที่คัดแล้ว (ข้อมูลปี 2020) จุดต่างคือรู้จักหลักสูตรของโรงเรียนนั้นเอง
- **Biggest Risk:** ติวเตอร์และผู้เรียนเป็นผู้เยาว์ (PDPA + ความปลอดภัย) โรงเรียนอาจไม่อนุญาตให้ทำเชิงพาณิชย์ และนัดกันเองนอกแพลตฟอร์มได้ง่าย
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION · VERIFIED เฉพาะคู่แข่ง ([ฐานเศรษฐกิจ 2020 — เก่า](https://www.thansettakij.com/technology/430794)) และ PDPA ผู้เยาว์ ([Tilleke & Gibbins](https://www.tilleke.com/insights/thailand-issues-guidelines-on-pdpa-consent-and-notification-requirements))

#### IDEA-031 — กยศ Payback Planner
- **ID:** IDEA-031
- **Name:** กยศ Payback Planner — วางแผนผ่อน กยศ. ให้ไม่ขาดงวด
- **Category:** Student & Education
- **Problem:** มีข่าวว่าผู้กู้ที่ค้าง 6 งวดเสี่ยงเสียสิทธิ์หรือถูกฟ้อง แต่ไม่มีตัวเลขยืนยันจำนวนผู้ผิดนัด
- **Target Customer:** ผู้ใช้ = นักศึกษาจบใหม่ที่มีหนี้ กยศ. / ผู้จ่าย = ไม่ชัด (สถาบันการเงินหรือ CSR)
- **Solution:** กรอกยอดหนี้และรายได้ → แผนผ่อนรายเดือน เตือนก่อนถึงงวด จำลองผลกระทบถ้าค้าง
- **Core MVP:** 1) ฟอร์มยอดหนี้/รายได้ 2) ตารางผ่อน + จำลองการค้าง 3) อีเมลเตือน
- **Revenue Model:** ไม่มีโมเดลที่น่าเชื่อ ผู้ใช้กำลังขาดเงินจึงไม่น่าจ่าย อาจได้ทุน CSR (ASSUMPTION) — เก็บไว้เป็นไอเดียอ่อน
- **Data / API:** กติกา กยศ. ต้องอ่านจากประกาศ (ไม่ได้ตรวจสอบในรอบนี้)
- **Differentiation:** กยศ. มีระบบของตัวเอง (ไม่ได้ตรวจสอบรายละเอียด)
- **Biggest Risk:** ไม่มีผู้จ่าย กติกาดอกเบี้ย/เบี้ยปรับคำนวณผิดได้
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (ข่าว กยศ. อ่านแค่หัวข้อ ตัวเลขผิดนัดโหลดไม่ได้)

#### IDEA-032 — MoveToCampus
- **ID:** IDEA-032
- **Name:** MoveToCampus — คำนวณค่าครองชีพรวม (หอ + เดินทาง + อาหาร) รอบมหาวิทยาลัยสำหรับเด็กต่างจังหวัด
- **Category:** Student & Education
- **Problem:** นักเรียนต่างจังหวัดเทียบหอจากค่าเช่าอย่างเดียว ไม่รวมค่าเดินทาง ค่าไฟ และค่าอาหาร ค่าเช่ารอบมหิดลศาลายาที่สุ่มดูส่วนใหญ่ 6,000–10,000 บาท/เดือน
- **Target Customer:** ผู้ใช้ = นักเรียนที่เพิ่งติดมหาวิทยาลัย + ผู้ปกครอง / ผู้จ่าย = เจ้าของหอจ่าย featured
- **Solution:** เลือกมหาวิทยาลัย → เทียบหอโดย "ต้นทุนรวมต่อเดือน" ไม่ใช่แค่ค่าเช่า
- **Core MVP:** 1) seed หอ 20–30 แห่งรอบ 1 มหาวิทยาลัย 2) ตัวคำนวณต้นทุนรวม (ระยะทาง × ค่าเดินทาง + ค่าไฟ) 3) เทียบ 3 ตัวเลือก
- **Revenue Model:** เจ้าของหอจ่าย featured เพราะผู้ปกครองเป็นผู้ตัดสินใจ (ASSUMPTION; RentHub ให้ลงฟรีและมีแพ็กเกจโฆษณาอยู่แล้ว)
- **Data / API:** Mapbox Directions หรือ OSM สำหรับระยะทาง
- **Differentiation:** RentHub มี 585 รายการรอบวิทยาลัยเดียวและเรียงตามระยะทางได้แล้ว จุดต่างมีแค่ต้นทุนรวม
- **Biggest Risk:** RentHub เพิ่มฟีเจอร์ได้ง่าย ค่าเดินทาง/ค่าไฟเป็นค่าประมาณที่อาจผิด ผู้ใช้ใช้ครั้งเดียว
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (คู่แข่งและค่าเช่า: [RentHub](https://www.renthub.in.th/อพาร์ทเม้นท์-ห้องพัก-หอพัก/วิทยาลัยการจัดการ-มหาวิทยาลัยมหิดล)) · ASSUMPTION (ยอมจ่าย)

#### IDEA-033 — GroupFair
- **ID:** IDEA-033
- **Name:** GroupFair — บันทึกการแบ่งงานกลุ่มและประเมินเพื่อนสำหรับครู
- **Category:** Student & Education
- **Problem:** งานกลุ่มมีคนไม่ทำงาน ครูประเมินรายบุคคลยาก (สมมติฐาน ไม่มีข้อมูลในไทย)
- **Target Customer:** ผู้ใช้ = นักเรียน + ครู / ผู้จ่าย = โรงเรียนจ่ายรายปี
- **Solution:** กลุ่มแบ่งงานบนบอร์ด บันทึกว่าใครทำอะไรเมื่อไร ปิดงานด้วยแบบประเมินเพื่อนแบบไม่ระบุชื่อ ครูเห็นสรุป
- **Core MVP:** 1) บอร์ดงานกลุ่ม 2) log การส่งงานรายคน 3) แบบประเมินเพื่อน + สรุปให้ครู
- **Revenue Model:** โรงเรียนจ่ายรายปี (ASSUMPTION — โรงเรียนรัฐงบจำกัดและใช้ Google Classroom ฟรี (ไม่ได้ตรวจสอบ))
- **Data / API:** Supabase Auth + Realtime
- **Differentiation:** เครื่องมือ task board ทั่วไปไม่มีส่วนประเมินเพื่อนที่ครูใช้ให้คะแนน
- **Biggest Risk:** ขายให้โรงเรียนยากและช้า นักเรียนไม่ใช้ถ้าครูไม่บังคับ ข้อมูลผู้เยาว์
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (notes ไม่มีข้อมูลเครื่องมืองานกลุ่ม)

#### IDEA-034 — ClubTix
- **ID:** IDEA-034
- **Name:** ClubTix — ขายบัตรงานและของที่ระลึกของชมรม/สภานักเรียน พร้อมเช็กอิน
- **Category:** Student & Education
- **Problem:** ชมรมขายบัตรงาน/เสื้อด้วยการโอนแล้วส่งสลิปในแชท ตรวจยอดเอง เสี่ยงสลิปปลอม (สมมติฐานในบริบทโรงเรียน)
- **Target Customer:** ผู้ใช้ = ชมรม/สภานักเรียน + ผู้ซื้อ / ผู้จ่าย = ผู้จัดจ่ายค่าธรรมเนียมต่อบัตร
- **Solution:** หน้าขายบัตร/สินค้าพร้อม PromptPay QR ใส่ยอด ตรวจสลิป และสแกนเช็กอินหน้างาน
- **Core MVP:** 1) หน้าขาย + PromptPay QR 2) อัปโหลดสลิป + ตรวจผ่าน SlipOK free tier (หรือจำลอง) 3) QR บัตร + หน้าสแกนเช็กอิน
- **Revenue Model:** ค่าธรรมเนียมเล็กต่อบัตร เพราะลดงานตรวจสลิป (ASSUMPTION)
- **Data / API:** `promptpay-qr`, SlipOK API (ฟรี 100 สลิป/เดือน)
- **Differentiation:** แพลตฟอร์มขายบัตรใหญ่มีอยู่ (ไม่ได้ตรวจสอบ) แต่เก็บค่าธรรมเนียมสูงสำหรับงานเล็ก (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ยอดต่อชมรมเล็กมาก ครู/โรงเรียนอาจไม่ให้รับเงินผ่านระบบภายนอก
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (สลิปปลอมทั่วไป: [กรุงเทพธุรกิจ](https://www.bangkokbiznews.com/news/news-update/1241837); API: [SlipOK](https://slipok.com/)) · ASSUMPTION (pain ในโรงเรียน)

#### IDEA-035 — InterviewPrep TCAS
- **ID:** IDEA-035
- **Name:** InterviewPrep TCAS — ฝึกสัมภาษณ์รอบ Portfolio/Quota ตามคณะ จับเวลา อัดตัวเองดูย้อนหลัง
- **Category:** Student & Education
- **Problem:** รอบ 1–2 มีการสัมภาษณ์ นักเรียนไม่รู้ว่าจะโดนถามอะไรและไม่มีคนซ้อมด้วย (สมมติฐานต่อยอดจาก pain TCAS)
- **Target Customer:** ผู้ใช้ = นักเรียน ม.6 / ผู้จ่าย = นักเรียน/ผู้ปกครองซื้อชุดคำถามรายคณะ หรือโรงเรียนกวดวิชาซื้อ license
- **Solution:** คลังคำถามตามคณะ สุ่มถาม จับเวลา อัดวิดีโอในเบราว์เซอร์ แล้วประเมินตัวเองตาม rubric (AI feedback เป็นตัวเสริม ไม่ใช่จุดขาย)
- **Core MVP:** 1) คลังคำถาม (seed 3–5 คณะ) 2) โหมดซ้อม + อัดวิดีโอ (MediaRecorder) 3) rubric ประเมินตัวเอง
- **Revenue Model:** จ่ายต่อชุดคณะ (ASSUMPTION ไม่มีหลักฐานว่ายอมจ่าย)
- **Data / API:** Web MediaRecorder; LLM (Typhoon) ถ้าจะทำ feedback จาก transcript
- **Differentiation:** คลิปแนวคำถามสัมภาษณ์ฟรีบน YouTube มีมาก (ไม่ได้ตรวจสอบ) จุดต่างคือซ้อมจริงแบบจับเวลา
- **Biggest Risk:** คำถามที่กรอกเองอาจไม่ตรงคณะจริง AI feedback ภาษาไทยคุณภาพไม่แน่นอน ส่งวิดีโอผู้เยาว์ไป LLM free tier เสี่ยง PDPA
- **Feasibility:** MEDIUM — อัดวิดีโอง่าย แต่ตัดสินคุณภาพ feedback ยาก
- **Evidence Status:** VERIFIED (pain TCAS ทั่วไป: [Mitihoon](https://www.mitihoon.com/2026/08/04/663744/)) · ASSUMPTION (pain สัมภาษณ์/ยอมจ่าย)

### หมวด Small Business / SME (IDEA-036 ถึง IDEA-050)

#### IDEA-036 — OwnOrder
- **ID:** IDEA-036
- **Name:** OwnOrder — ช่องทางสั่งอาหารของร้านเอง (QR เมนู + PromptPay + แจ้ง LINE) ไม่เสีย GP
- **Category:** Small Business / SME
- **Problem:** ร้านอาหารเสีย GP แอปส่งอาหาร 30–35% (ไม่รวม VAT) และ VAT 7% คิดบน GP อีกชั้น ตลาดถูกครองโดย Grab 47% / LINE MAN 41%
- **Target Customer:** ผู้ใช้ = ร้านอาหารเล็ก + ลูกค้าประจำใกล้ร้าน / ผู้จ่าย = เจ้าของร้าน
- **Solution:** ร้านได้หน้าเมนูของตัวเอง ลูกค้าสั่งแบบรับเอง/ส่งใกล้ ๆ จ่ายผ่าน PromptPay QR ที่ใส่ยอดแล้ว ร้านได้แจ้งเตือนทันที
- **Core MVP:** 1) สร้างเมนู + QR ร้าน 2) ตะกร้า + PromptPay QR ใส่ยอด (ร้านกดยืนยันเงินเข้าเอง = จำลอง) 3) หน้าออเดอร์เรียลไทม์ของร้าน
- **Revenue Model:** ร้านจ่ายรายเดือนคงที่ถูกกว่า GP ของออเดอร์ไม่กี่รายการ เพราะเห็นเงินที่ประหยัดได้ชัด (ASSUMPTION — ร้านอาจไม่จ่ายถ้าลูกค้าไม่เปลี่ยนช่องทาง)
- **Data / API:** `promptpay-qr`, Supabase Realtime, LINE Messaging API (reply ฟรี/push นับโควตา 300 ข้อความฟรี)
- **Differentiation:** แอปส่งอาหารมีคนขับและฐานลูกค้า LINE MAN ขาย POS ด้วย จุดต่างคือ 0% GP สำหรับลูกค้าประจำ แต่ไม่มีคนส่งให้
- **Biggest Risk:** ลูกค้าไม่ย้ายช่องทางเพราะแอปใหญ่สะดวกกว่าและมีคูปอง ร้านต้องหาคนส่งเอง; ช่วงโครงการรัฐ LINE MAN ลด GP เหลือ 7–9% ทำให้จุดขายอ่อนลงชั่วคราว
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (GP: [Grab](https://www.grab.com/th/merchant-blog/gp-คืออะไร/), [Wongnai](https://www.wongnai.com/business-owners/delivery-gross-profit); ส่วนแบ่ง: [KrASIA](https://amp.kr-asia.com/thailands-line-man-pushes-beyond-food-delivery-eyes-2027-ipo); GP 7–9%: [Brand Inside](https://brandinside.asia/?p=234699)) · ASSUMPTION (ลูกค้าย้ายช่องทาง/ยอมจ่าย)

#### IDEA-037 — TrueProfit
- **ID:** IDEA-037
- **Name:** TrueProfit — คำนวณกำไรจริงต่อเมนู/สินค้า หลังหัก GP และค่าธรรมเนียมทุกแพลตฟอร์ม
- **Category:** Small Business / SME
- **Problem:** ค่าธรรมเนียมซ้อนหลายชั้น (Shopee commission 7.49–17.12% + transaction 3.21% + platform fee; Lazada 6.96–17.12%; ขึ้นราคา ส.ค. 2026; GP แอปอาหาร 30–35% + VAT บน GP) ผู้ขายตั้งราคาแล้วขาดทุนโดยไม่รู้
- **Target Customer:** ผู้ใช้และผู้จ่าย = ร้านค้าออนไลน์และร้านอาหารที่ขายหลายช่องทาง
- **Solution:** ใส่ต้นทุน + ราคาขาย → เห็นกำไรสุทธิแยกตาม Grab/LINE MAN/Shopee/Lazada/TikTok/หน้าร้าน และราคาที่ควรตั้งเพื่อได้มาร์จิ้นเป้าหมาย
- **Core MVP:** 1) ตารางค่าธรรมเนียม (config อัปเดตได้) 2) ตัวคำนวณกำไรต่อรายการ + ราคาแนะนำ 3) นำเข้าสินค้าจาก CSV แล้วไฮไลต์รายการที่ขาดทุน
- **Revenue Model:** freemium: คำนวณทีละรายการฟรี จ่ายรายเดือนสำหรับนำเข้าทั้งร้าน + แจ้งเตือนเมื่อแพลตฟอร์มขึ้นค่าธรรมเนียม (ASSUMPTION — เครื่องคิดเลขมักถูกมองว่าควรฟรี)
- **Data / API:** ไม่มี API ค่าธรรมเนียม ต้องดูแลตารางเองจาก FlowAccount blog/Seller Centre
- **Differentiation:** มีเครื่องคิดเลขค่าธรรมเนียมฟรีบนบล็อกต่าง ๆ (ไม่ได้ตรวจสอบ) จุดต่างคือรวมแอปอาหาร + marketplace ในที่เดียวและทำทั้งร้าน
- **Biggest Risk:** ค่าธรรมเนียมเปลี่ยนบ่อยและขึ้นกับสัญญา ถ้าตัวเลขผิดผู้ใช้เลิกเชื่อ คนลองใช้ฟรีแล้วไม่จ่าย
- **Feasibility:** HIGH — เป็นเครื่องคำนวณล้วน Demo ใน 60 วินาทีได้ชัด
- **Evidence Status:** VERIFIED (ค่าธรรมเนียม: [FlowAccount blog](https://flowaccount.com/blog/commission-fees-ecommerce-shopee-lazada-tiktok/), [Grab](https://www.grab.com/th/merchant-blog/gp-คืออะไร/), [Wongnai](https://www.wongnai.com/business-owners/delivery-gross-profit)) · ASSUMPTION (ยอมจ่าย)

#### IDEA-038 — VAT Radar
- **ID:** IDEA-038
- **Name:** VAT Radar — ติดตามรายได้สะสม เตือนก่อนถึงเกณฑ์จด VAT 1.8 ล้านบาท
- **Category:** Small Business / SME
- **Problem:** ธุรกิจที่รายได้เกิน 1.8 ล้านบาท/ปีต้องจด VAT ภายใน 30 วัน ผู้ขายหลายช่องทางไม่รู้ยอดรวมจริง
- **Target Customer:** ผู้ใช้และผู้จ่าย = แม่ค้าออนไลน์และร้านค้าที่รายได้ใกล้เกณฑ์
- **Solution:** นำเข้ายอดขายจากหลายช่องทาง → กราฟยอดสะสม 12 เดือน คาดการณ์วันที่จะข้ามเกณฑ์ และ checklist สิ่งที่ต้องทำ
- **Core MVP:** 1) นำเข้า CSV/กรอกยอดรายเดือน 2) กราฟยอดสะสม + คาดการณ์ 3) checklist การจด VAT + e-Tax by Time Stamp
- **Revenue Model:** ผู้ขายจ่ายรายปีเล็กน้อย หรือสำนักงานบัญชีจ่ายค่า lead เพราะลูกค้าที่ใกล้เกณฑ์ต้องการนักบัญชี (ASSUMPTION)
- **Data / API:** ไม่มี API ยอดขายจากแพลตฟอร์ม (ไม่ได้ตรวจสอบ) ใช้ CSV
- **Differentiation:** FlowAccount (165–457 บาท/เดือน) ทำบัญชีครบอยู่แล้ว จุดต่างคือเครื่องมือเดียวที่เล็กและถูกกว่าสำหรับคนที่ยังไม่ใช้โปรแกรมบัญชี
- **Biggest Risk:** ผู้ขายบางรายไม่อยากรู้หรือไม่อยากจด VAT จึงไม่ใช้ ความรับผิดถ้าคำแนะนำภาษีผิด
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (เกณฑ์ VAT: [กรมสรรพากร](https://rd.go.th/7061.html); e-Tax: [InfoQuest](https://www.infoquest.co.th/?p=462192); คู่แข่ง: [FlowAccount](https://flowaccount.com/pricing)) · ASSUMPTION (ยอมจ่าย)

#### IDEA-039 — RentSlip
- **ID:** IDEA-039
- **Name:** RentSlip — เก็บค่าเช่าหอ/ห้องเช่าเล็ก พร้อมตรวจสลิปและออกใบเสร็จอัตโนมัติ
- **Category:** Small Business / SME
- **Problem:** เจ้าของห้องเช่าโดนสลิปปลอม (กรณีจริง: ผู้เช่าส่งสลิปปลอม 15 ใบทาง LINE เสียหาย 57,842 บาท รู้ตอนเทียบ statement) และต้องไล่เก็บค่าเช่า/ค่าน้ำไฟทุกเดือน
- **Target Customer:** ผู้ใช้ = เจ้าของหอ/ห้องเช่า 5–50 ห้อง + ผู้เช่า / ผู้จ่าย = เจ้าของหอ
- **Solution:** ทุกเดือนส่งบิลรายห้อง (ค่าเช่า + น้ำไฟจากเลขมิเตอร์) พร้อม PromptPay QR ผู้เช่าอัปโหลดสลิป ระบบตรวจและออกใบเสร็จ
- **Core MVP:** 1) ห้อง/ผู้เช่า + กรอกเลขมิเตอร์ → บิล 2) PromptPay QR + อัปโหลดสลิป ตรวจผ่าน SlipOK API (free tier 100 สลิป/เดือน; ถ้าไม่ได้ key ให้จำลอง) 3) dashboard ห้องค้างจ่าย + ใบเสร็จ PDF
- **Revenue Model:** เจ้าของหอจ่ายรายเดือนตามจำนวนห้อง เพราะลดความเสียหายจากสลิปปลอมและเวลาทวงเงิน ตลาดมีหลักฐานว่าคนจ่ายค่าตรวจสลิปอยู่แล้ว (SlipOK 350 บาท/เดือน สำหรับ 500 สลิป) แต่การยอมจ่ายให้ระบบใหม่ยังเป็น ASSUMPTION
- **Data / API:** SlipOK API, `promptpay-qr`, LINE LIFF (ถ้าจะให้ผู้เช่าใช้ใน LINE)
- **Differentiation:** SlipOK ตรวจสลิปอย่างเดียว ระบบจัดการหอพักมีอยู่ (ไม่ได้ตรวจสอบชื่อ/ราคา) จุดต่างคือรวมบิล + ตรวจสลิป + ใบเสร็จ สำหรับหอเล็ก
- **Biggest Risk:** ต้นทุนตรวจสลิปต่อใบกินมาร์จิ้นถ้าตั้งราคาต่ำ เจ้าของหอสูงวัยอาจไม่ใช้ และอาจมีระบบหอพักที่ทำครบแล้วซึ่งไม่ได้ตรวจ
- **Feasibility:** HIGH (ถ้าจำลองการตรวจสลิป) / MEDIUM (ถ้าต่อ SlipOK จริง)
- **Evidence Status:** VERIFIED (pain: [กรุงเทพธุรกิจ](https://www.bangkokbiznews.com/news/news-update/1241837); ราคาตลาด: [SlipOK](https://slipok.com/)) · ASSUMPTION (ยอมจ่าย)

#### IDEA-040 — CoPay Ready
- **ID:** IDEA-040
- **Name:** CoPay Ready — ช่วยร้านค้าเตรียมเอกสารสมัครโครงการรัฐแบบคนละครึ่ง ทีละขั้น
- **Category:** Small Business / SME
- **Problem:** การสมัครร้านค้าคนละครึ่งพลัส (15 ต.ค.–19 ธ.ค. 2025) ต้องใช้แอปถุงเงิน บัญชีกรุงไทย บัตรประชาชน รูปร้าน และร้านริมทางต้องให้เจ้าหน้าที่มหาดไทยรับรอง
- **Target Customer:** ผู้ใช้ = ร้านริมทาง/แผงลอย / ผู้จ่าย = ไม่ชัด (อาจเป็นแพลตฟอร์มที่อยากได้ร้านเข้าระบบ หรือรัฐ/ธนาคาร)
- **Solution:** wizard ตอบคำถามไม่กี่ข้อ → checklist เอกสารเฉพาะประเภทร้าน + เตือนเส้นตาย
- **Core MVP:** 1) wizard ประเภทร้าน 2) checklist + ตัวอย่างรูปที่ถูกต้อง 3) เตือนเส้นตาย
- **Revenue Model:** ไม่มีผู้จ่ายที่ชัด ร้านไม่น่าจ่ายค่าข้อมูลที่รัฐให้ฟรี (ASSUMPTION) — ไอเดียอ่อน
- **Data / API:** เนื้อหาจากประกาศ (กรอกเอง)
- **Differentiation:** ข่าว/คู่มือฟรีมีมาก แพลตฟอร์มใหญ่ (LINE MAN) ช่วยร้านสมัครแลกกับ GP ต่ำอยู่แล้ว
- **Biggest Risk:** **ยังไม่ยืนยันว่ามีโครงการรอบปี 2026** ถ้าไม่มีรอบใหม่ ไอเดียไม่มีตลาด
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ขั้นตอนรอบ 2025: [ฐานเศรษฐกิจ](https://www.thansettakij.com/economy/641340)) · UNKNOWN (รอบปี 2026, ผู้จ่าย)

#### IDEA-041 — MarketStamp
- **ID:** IDEA-041
- **Name:** MarketStamp — บัตรสะสมแต้มร่วมทั้งตลาดนัด ใช้ข้ามร้านได้ ไม่ต้องลงแอป
- **Category:** Small Business / SME
- **Problem:** ร้านในตลาดนัดแต่ละร้านเล็กเกินจะทำ loyalty เอง เจ้าของตลาดอยากให้ลูกค้ากลับมาทั้งตลาด (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = ลูกค้าตลาด + แม่ค้า / ผู้จ่าย = เจ้าของตลาด (จ่ายรายเดือน) เพราะได้ประโยชน์จากคนเดินตลาด
- **Solution:** ลูกค้าเปิดเว็บ (หรือ LIFF) มี QR ประจำตัว แม่ค้าสแกนให้แต้ม แต้มรวมทั้งตลาดแลกของรางวัลที่ตลาดจัด
- **Core MVP:** 1) QR ลูกค้า + หน้าแม่ค้าสแกนให้แต้ม (`liff.scanCode()` หรือกล้องเว็บ) 2) แต้มรวม + รางวัล 3) dashboard เจ้าของตลาด (ร้านไหนให้แต้มมาก)
- **Revenue Model:** เจ้าของตลาดจ่ายรายเดือนเพื่อเพิ่มความถี่ลูกค้าและมีข้อมูลยืนยันให้ผู้เช่าแผง (ASSUMPTION)
- **Data / API:** LINE LIFF (ได้ user ID + scan QR ใน LIFF browser), Supabase
- **Differentiation:** Loyverse ให้ระบบ loyalty ฟรีแต่เป็นรายร้าน จุดต่างคือแต้มข้ามร้านทั้งตลาด
- **Biggest Risk:** แม่ค้าไม่อยากเสียเวลาสแกนตอนคนเยอะ ใครเป็นคนออกเงินค่ารางวัล และเจ้าของตลาดอาจไม่เห็นผลเป็นตัวเงิน
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (คู่แข่ง loyalty ฟรี: [Loyverse](https://loyverse.com/pricing); LIFF: [LINE Developers](https://developers.line.biz/en/docs/liff/overview/)) · UNKNOWN (pain ตลาดนัด ไม่มีข้อมูล)

#### IDEA-042 — OfficeLunch Batch
- **ID:** IDEA-042
- **Name:** OfficeLunch Batch — สั่งข้าวล่วงหน้าเป็นรอบเวลาให้ตึกออฟฟิศเดียว คนส่งคนเดียวส่งรวม
- **Category:** Small Business / SME
- **Problem:** พนักงานสั่งผ่านแอปทีละออเดอร์ เสียค่าส่งและร้านเสีย GP 30–35% ทั้งที่ทุกคนอยู่ตึกเดียวกัน
- **Target Customer:** ผู้ใช้ = พนักงานในตึก + ร้านข้าวรอบตึก / ผู้จ่าย = ร้านจ่ายค่าธรรมเนียมต่อออเดอร์ที่ต่ำกว่า GP + ผู้สั่งจ่ายค่าส่งรวมหารกัน
- **Solution:** ปิดรับออเดอร์ 10:30 ร้านทำเป็นชุด คนส่งคนเดียวนำส่งที่ล็อบบี้ 12:00
- **Core MVP:** 1) เมนูหลายร้าน + รอบเวลาปิดรับ 2) ตะกร้า + PromptPay QR (จำลอง) 3) ใบสรุปต่อร้าน + รายชื่อรับของที่ล็อบบี้
- **Revenue Model:** ค่าธรรมเนียมต่อออเดอร์จากร้าน (ต่ำกว่า GP) + ค่าส่งรวมจากผู้สั่ง (ASSUMPTION)
- **Data / API:** Supabase, `promptpay-qr`
- **Differentiation:** ต่างจาก IDEA-036 (ช่องทางของร้านเดียว) ตรงนี้คือรวมหลายร้านส่งตึกเดียวรอบเดียว แอปใหญ่ไม่ทำส่งรวมแบบนี้ (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ต้องมีคนส่งจริงทุกวัน (ปัญหา operation ไม่ใช่ซอฟต์แวร์) เริ่มได้แค่ทีละตึก ขยายช้า
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (GP: [Grab](https://www.grab.com/th/merchant-blog/gp-คืออะไร/)) · ASSUMPTION (pain ฝั่งพนักงาน/operation)

#### IDEA-043 — StallBook
- **ID:** IDEA-043
- **Name:** StallBook — จองแผงตลาดนัดออนไลน์ เห็นผังแผงว่าง จ่ายค่าแผงล่วงหน้า
- **Category:** Small Business / SME
- **Problem:** แม่ค้าต้องโทร/แชทจองแผง เจ้าของตลาดจดลงสมุด เก็บเงินสด (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = แม่ค้าขาจร + เจ้าของตลาด / ผู้จ่าย = เจ้าของตลาด
- **Solution:** ผังแผงแบบคลิกได้ เลือกวัน จองและจ่ายค่าแผง เจ้าของตลาดเห็นรายได้รายวัน
- **Core MVP:** 1) ผังแผง (grid) + สถานะว่าง/จอง 2) จอง + PromptPay QR (จำลอง) 3) รายงานรายได้เจ้าของตลาด
- **Revenue Model:** เจ้าของตลาดจ่ายรายเดือนหรือเปอร์เซ็นต์ค่าแผง เพราะลดเงินรั่วและงานจด (ASSUMPTION)
- **Data / API:** Supabase
- **Differentiation:** ไม่มีข้อมูลคู่แข่งในไทย (ไม่ได้ค้น)
- **Biggest Risk:** เจ้าของตลาดอาจไม่อยากให้รายได้โปร่งใส (ภาษี) แม่ค้าประจำไม่ต้องจอง
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (notes ระบุว่าไม่มีข้อมูลเรื่องเช่าแผงตลาดนัด)

#### IDEA-044 — DishCost
- **ID:** IDEA-044
- **Name:** DishCost — ถ่ายบิลวัตถุดิบ แล้วรู้ต้นทุนต่อจานแบบอัปเดตตามราคาจริง
- **Category:** Small Business / SME
- **Problem:** ร้านอาหารเล็กไม่รู้ต้นทุนต่อจานเมื่อราคาวัตถุดิบเปลี่ยน พอรวมกับ GP 30–35% อาจขายขาดทุน (สมมติฐานต่อยอดจาก P1)
- **Target Customer:** ผู้ใช้และผู้จ่าย = เจ้าของร้านอาหารเล็ก/คาเฟ่
- **Solution:** ถ่ายรูปบิลตลาด/แม็คโคร → OCR ดึงราคา → อัปเดตต้นทุนสูตรอาหาร → เตือนเมนูที่มาร์จิ้นต่ำกว่าเป้า
- **Core MVP:** 1) อัปโหลดบิล → OCR → ให้ผู้ใช้ตรวจแก้ 2) สูตรอาหาร (วัตถุดิบ × ปริมาณ) 3) ตารางต้นทุน/มาร์จิ้นต่อเมนู + เตือน
- **Revenue Model:** ร้านจ่ายรายเดือนเพราะป้องกันการขายขาดทุน (ASSUMPTION — ร้านเล็กหลายร้านไม่ทำบัญชีต้นทุนเลย)
- **Data / API:** Typhoon OCR (Thai/English receipts, OpenAI-compatible API; limit OCR ไม่ระบุ) — ต้องเตรียมบิลตัวอย่างและ cache ไว้
- **Differentiation:** POS (Loyverse ฯลฯ) มีสต็อกแต่ไม่ได้ดึงราคาจากบิลจริง (ไม่ได้ตรวจสอบเชิงลึก) จุดต่างคือต้นทุนต่อจานจากบิล
- **Biggest Risk:** OCR บิลลายมือ/บิลตลาดสดอ่านผิด ต้องตรวจแก้เองจนไม่ประหยัดเวลา ผู้ใช้เลิกใช้หลังสัปดาห์แรก
- **Feasibility:** MEDIUM — OCR + map ชื่อวัตถุดิบใช้เวลา
- **Evidence Status:** VERIFIED (OCR: [Typhoon OCR](https://huggingface.co/scb10x/typhoon-ocr-3b)) · ASSUMPTION (pain/ยอมจ่าย)

#### IDEA-045 — LiveCF
- **ID:** IDEA-045
- **Name:** LiveCF — แปลงคอมเมนต์ "CF" ระหว่างไลฟ์ขายของเป็นรายการออเดอร์และบิล
- **Category:** Small Business / SME
- **Problem:** แม่ค้าไลฟ์ขายต้องจดคอมเมนต์ CF เอง ตกหล่น ส่งบิลทีละคน (สมมติฐาน — notes ไม่มีข้อมูล)
- **Target Customer:** ผู้ใช้และผู้จ่าย = แม่ค้าไลฟ์สดรายย่อย
- **Solution:** วาง/พิมพ์คอมเมนต์ระหว่างไลฟ์ → ระบบจับรหัสสินค้า + ชื่อ → สร้างบิลพร้อม PromptPay QR ส่งลิงก์ให้ลูกค้า
- **Core MVP:** 1) ช่องวางคอมเมนต์ + parser รหัสสินค้า 2) ตารางออเดอร์ + สต็อก 3) ลิงก์บิล + PromptPay QR
- **Revenue Model:** รายเดือนต่อร้าน (ASSUMPTION)
- **Data / API:** ไม่ได้เชื่อม API ของ Facebook/TikTok Live (ไม่ได้ตรวจสอบสิทธิ์การเข้าถึง) จึงใช้การวาง/พิมพ์เอง
- **Differentiation:** Page365, ZORT และระบบไลฟ์อื่นมีอยู่ (ราคาไม่ยืนยัน) ทีมนักเรียนแทบไม่มีจุดต่าง
- **Biggest Risk:** ถ้าไม่ดึงคอมเมนต์อัตโนมัติก็ไม่ช่วยจริง แต่การเชื่อม API แพลตฟอร์มทำไม่ทันและอาจไม่ได้สิทธิ์ คู่แข่งตรงมีอยู่แล้ว
- **Feasibility:** MEDIUM (แบบวางเอง) / LOW (แบบดึงอัตโนมัติ)
- **Evidence Status:** UNKNOWN (pain live-selling) · ASSUMPTION (คู่แข่งมีอยู่ ราคาไม่ยืนยัน)

#### IDEA-046 — LoanReady Pack
- **ID:** IDEA-046
- **Name:** LoanReady Pack — แปลงบันทึกยอดขายเป็นสรุปกระแสเงินสด + ชุดเอกสารสำหรับยื่นกู้ SME
- **Category:** Small Business / SME
- **Problem:** สินเชื่อ SME หด -4.6% YoY (Q2 2026) SME ขาดทุน/ความรู้ ร้านเล็กไม่มีงบการเงินไปยื่นธนาคาร
- **Target Customer:** ผู้ใช้ = ร้านค้ารายย่อย / ผู้จ่าย = ธนาคารหรือ fintech จ่ายค่า lead ที่มีเอกสารครบ (หรือร้านจ่ายต่อครั้ง)
- **Solution:** กรอก/นำเข้ายอดขายและค่าใช้จ่าย 6–12 เดือน → รายงานกระแสเงินสด PDF + checklist เอกสาร + ประมาณวงเงินผ่อนไหว
- **Core MVP:** 1) นำเข้า CSV/กรอกรายเดือน 2) สรุปกระแสเงินสด + กราฟ 3) PDF + checklist เอกสาร
- **Revenue Model:** ค่า lead จากผู้ให้กู้ เพราะได้ลูกค้าที่เตรียมเอกสารแล้ว (ASSUMPTION ต้องมีใบอนุญาตหรือข้อตกลงกับผู้ให้กู้)
- **Data / API:** ไม่มี API ธนาคาร; ข้อมูลโครงการ BOT (SMEs Credit Boost) เป็นข้อความ
- **Differentiation:** โปรแกรมบัญชีทำงบได้ (FlowAccount) แต่ไม่ได้ทำเพื่อยื่นกู้โดยตรง
- **Biggest Risk:** ตัวเลขที่ร้านกรอกเองธนาคารไม่เชื่อ ธนาคารไม่ซื้อ lead จากทีมเล็ก ประเด็นกฎหมายเรื่องการเป็นนายหน้าสินเชื่อ
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (สินเชื่อหด: [BOT SME Snapshot](https://www.bot.or.th/content/dam/bot/documents/th/financial-innovation/การเงินเพื่อครัวเรือนและ-sme/sme/SME_snapshort_Q2_2569.pdf)) · ASSUMPTION (ผู้จ่าย)

#### IDEA-047 — FixTrack
- **ID:** IDEA-047
- **Name:** FixTrack — ร้านซ่อมมือถือ/มอเตอร์ไซค์ส่งลิงก์สถานะงานซ่อมให้ลูกค้า
- **Category:** Small Business / SME
- **Problem:** ลูกค้าโทรถามสถานะซ่อมซ้ำ ๆ ร้านจดใบงานกระดาษหาย ไม่มีบันทึกรับประกัน (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = ร้านซ่อม + ลูกค้า / ผู้จ่าย = ร้านซ่อม
- **Solution:** เปิดใบงาน → ลูกค้าได้ลิงก์ดูสถานะ (รับเครื่อง → รออะไหล่ → เสร็จ) + ใบเสนอราคาให้กดอนุมัติ + ใบรับประกัน
- **Core MVP:** 1) ใบงาน + รูปเครื่องตอนรับ 2) ลิงก์สถานะ + ปุ่มอนุมัติราคา 3) ใบรับประกัน PDF
- **Revenue Model:** ร้านจ่ายรายเดือนเพราะลดโทรศัพท์และข้อพิพาท (ASSUMPTION)
- **Data / API:** Supabase, LINE reply (ถ้าใช้ LINE)
- **Differentiation:** ไม่มีข้อมูลคู่แข่งในไทย (ไม่ได้ค้น)
- **Biggest Risk:** ร้านซ่อมเล็กคุ้นกับการตอบแชท ไม่อยากเพิ่มขั้นตอน
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-048 — NoShow Guard
- **ID:** IDEA-048
- **Name:** NoShow Guard — ระบบนัดร้านตัดผม/ทำเล็บ/สปาเล็ก พร้อมมัดจำกันลูกค้าเบี้ยวนัด
- **Category:** Small Business / SME
- **Problem:** ร้านบริการเล็กเสียรายได้จากลูกค้าจองแล้วไม่มา (สมมติฐาน ไม่มีข้อมูลไทย)
- **Target Customer:** ผู้ใช้ = ร้านบริการ + ลูกค้า / ผู้จ่าย = ร้าน
- **Solution:** ลิงก์จองตามช่างและบริการ ต้องจ่ายมัดจำผ่าน PromptPay QR ก่อนยืนยันคิว มีนโยบายเลื่อน/คืนมัดจำชัดเจน
- **Core MVP:** 1) ตารางช่าง/บริการ/เวลา 2) จอง + มัดจำ PromptPay (ร้านยืนยันเอง = จำลอง) 3) หน้าคิววันนี้ของร้าน
- **Revenue Model:** ร้านจ่ายรายเดือนต่อช่าง เพราะมัดจำลดการเบี้ยว (ASSUMPTION)
- **Data / API:** `promptpay-qr`, Supabase
- **Differentiation:** แอปจองร้านความงามมีหลายเจ้า (ไม่ได้ตรวจสอบ) จุดต่างคือเรียบง่ายและมัดจำ PromptPay
- **Biggest Risk:** ลูกค้าไม่ชอบจ่ายมัดจำแล้วไปร้านอื่น การยืนยันเงินเข้าต้องพึ่งร้านหรือ API ตรวจสลิป
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (pain) · ASSUMPTION (คู่แข่ง)

#### IDEA-049 — ListingLingo
- **ID:** IDEA-049
- **Name:** ListingLingo — ทำหน้าสินค้าชุมชน/OTOP ไทย-อังกฤษ-จีน พร้อมเช็กลิสต์รูปสินค้าตามมาตรฐานแพลตฟอร์ม
- **Category:** Small Business / SME
- **Problem:** ผู้ผลิตชุมชนเขียนรายละเอียดสินค้าไม่เป็นและทำได้แค่ภาษาไทย ขณะที่ตลาดนักท่องเที่ยวจีนโต (สมมติฐานด้าน pain ของผู้ผลิต)
- **Target Customer:** ผู้ใช้และผู้จ่าย = วิสาหกิจชุมชน/ผู้ผลิตรายย่อย หรือหน่วยงานพัฒนาชุมชนจ่ายแทน
- **Solution:** กรอกข้อมูลจริง (วัตถุดิบ ขนาด วิธีใช้) → ได้คำบรรยาย 3 ภาษาให้ตรวจแก้ + checklist รูป + การ์ดสินค้า QR
- **Core MVP:** 1) ฟอร์มข้อมูลสินค้า 2) ร่างคำบรรยาย 3 ภาษา (Typhoon/LLM) ให้แก้ได้ 3) หน้าสินค้า + QR
- **Revenue Model:** จ่ายต่อสินค้า หรือหน่วยงานรัฐ/มหาวิทยาลัยจ่ายเป็นโครงการ (ASSUMPTION)
- **Data / API:** Typhoon API (free tier), Supabase Storage
- **Differentiation:** ผู้ขายใช้ chatbot ทั่วไปทำเองได้ฟรี คุณค่าที่เหลือคือฟอร์มบังคับข้อมูลจริง + template แพลตฟอร์ม — เสี่ยงเป็น "ใช้ AI" เป็นจุดขาย
- **Biggest Risk:** คุณค่าเพิ่มบางเมื่อเทียบกับ LLM ฟรี ผู้ผลิตไม่ยอมจ่าย คำแปลผิดเรื่องส่วนผสม/สรรพคุณผิดกฎหมายโฆษณา
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ตลาดจีนโต: [The Nation](https://www.nationthailand.com/business/40070737); Typhoon: [docs](https://docs.opentyphoon.ai/en/)) · ASSUMPTION (pain ผู้ผลิต/ยอมจ่าย)

#### IDEA-050 — Harvest PreSale
- **ID:** IDEA-050
- **Name:** Harvest PreSale — ชาวสวน (เช่น ทุเรียน/เงาะ/มังคุดสุราษฎร์ฯ) เปิดจองผลผลิตล่วงหน้าให้ลูกค้าในเมือง
- **Category:** Small Business / SME
- **Problem:** ชาวสวนขายผ่านล้ง/พ่อค้าคนกลางได้ราคาต่ำ ลูกค้าในเมืองหาผลไม้คุณภาพตรงจากสวนยาก (สมมติฐาน ไม่มีข้อมูลใน notes)
- **Target Customer:** ผู้ใช้ = ชาวสวน + ลูกค้าในเมือง / ผู้จ่าย = ชาวสวนจ่ายคอมมิชชันต่อออเดอร์
- **Solution:** สวนเปิดรอบจองตามฤดู กำหนดจำนวน ลูกค้าจ่ายมัดจำ สวนอัปเดตรูปการเก็บและส่งตามรอบ
- **Core MVP:** 1) หน้าสวน + รอบเก็บเกี่ยว + จำนวนรับ 2) จอง + มัดจำ (จำลอง) 3) อัปเดตสถานะ/รูปการเก็บถึงผู้จอง
- **Revenue Model:** คอมมิชชันต่อออเดอร์ เพราะสวนได้ราคาดีกว่าขายคนกลาง (ASSUMPTION ไม่มีข้อมูลราคาคนกลาง)
- **Data / API:** Supabase, `promptpay-qr`
- **Differentiation:** สวนขายตรงทาง Facebook/LINE อยู่แล้ว (ไม่ได้ตรวจสอบ) จุดต่างคือรอบจองที่ล็อกจำนวน + สถานะส่ง
- **Biggest Risk:** การขนส่งผลไม้สด/เสียหาย คุณภาพไม่สม่ำเสมอ ขายได้แค่ช่วงฤดู
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (ไม่มีข้อมูลเกษตรใน notes)

### หมวด Productivity & Automation (IDEA-051 ถึง IDEA-060)

#### IDEA-051 — FreelanceDocs
- **ID:** IDEA-051
- **Name:** FreelanceDocs — ใบเสนอราคา → ใบแจ้งหนี้ → ใบเสร็จ ต่อกันอัตโนมัติ พร้อมคำนวณยอดหักภาษี ณ ที่จ่าย
- **Category:** Productivity & Automation
- **Problem:** ฟรีแลนซ์ต้องทำเอกสารหลายใบต่องาน และคำนวณยอดสุทธิหลังลูกค้าหัก WHT (อัตรามาตรฐาน 3%/5%)
- **Target Customer:** ผู้ใช้และผู้จ่าย = ฟรีแลนซ์ (กราฟิก, dev, ช่างภาพ, ติวเตอร์)
- **Solution:** ทำใบเสนอราคาครั้งเดียว กดแปลงเป็นใบแจ้งหนี้/ใบเสร็จได้ทันที คำนวณ WHT และยอดสุทธิ พร้อม PromptPay QR ในใบแจ้งหนี้
- **Core MVP:** 1) ฟอร์มใบเสนอราคา + PDF 2) แปลงเป็นใบแจ้งหนี้/ใบเสร็จ + คำนวณ WHT 3) PromptPay QR + สถานะจ่ายแล้ว/ค้าง
- **Revenue Model:** ฟรีแลนซ์จ่ายรายเดือนต่ำ (ต้องต่ำกว่า FlowAccount Standard 165 บาท/เดือน และต้องสู้กับแผนฟรีของ FlowAccount ที่ออกแบบมาเพื่อฟรีแลนซ์) — การยอมจ่ายเป็น ASSUMPTION
- **Data / API:** `promptpay-qr`, PDF library
- **Differentiation:** FlowAccount มีแผนฟรีสำหรับฟรีแลนซ์อยู่แล้ว จุดต่างต้องอยู่ที่ความเร็ว (ใบเดียวจบในนาที) — จุดต่างบาง
- **Biggest Risk:** คู่แข่งตรงที่ฟรีและครบกว่า ทำให้ Demo ดีแต่ธุรกิจอ่อน
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (คู่แข่ง/ราคา: [FlowAccount](https://flowaccount.com/pricing); WHT: [Forvis Mazars](https://forvismazars.com/th/en/insights/doing-business-in-thailand/tax/extension-withholding-tax-reduction)) · ASSUMPTION (ยอมจ่าย)

#### IDEA-052 — ClubReimburse
- **ID:** IDEA-052
- **Name:** ClubReimburse — ถ่ายใบเสร็จ → รายการเบิกเงินอัตโนมัติ สำหรับทีมเล็ก/ชมรม/กลุ่มกิจกรรม
- **Category:** Productivity & Automation
- **Problem:** ทีมเล็กเบิกเงินด้วยการส่งรูปใบเสร็จในแชท เหรัญญิกพิมพ์ลง spreadsheet เอง (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = สมาชิก + เหรัญญิก / ผู้จ่าย = องค์กรเล็ก/บริษัทเล็กจ่ายรายเดือน
- **Solution:** อัปโหลดรูปใบเสร็จ → OCR ดึงร้าน วันที่ ยอด → เหรัญญิกอนุมัติ → export ตาราง + สถานะโอนคืน
- **Core MVP:** 1) อัปโหลด + OCR + แก้ไขได้ 2) คิวอนุมัติ 3) export CSV/PDF
- **Revenue Model:** บริษัทเล็กจ่ายต่อผู้ใช้ (ASSUMPTION — ชมรมนักเรียนไม่มีงบจ่าย)
- **Data / API:** Typhoon OCR (receipts) — cache ตัวอย่างไว้สำหรับ Demo
- **Differentiation:** โปรแกรมบัญชีและแอปเบิกจ่ายต่างประเทศมีอยู่ (ไม่ได้ตรวจสอบ) จุดต่างคือ OCR ใบเสร็จภาษาไทย
- **Biggest Risk:** ความแม่นยำ OCR ไทยยังไม่มี benchmark ทีมเล็กใช้ spreadsheet ฟรีพอแล้ว
- **Feasibility:** MEDIUM — OCR + latency
- **Evidence Status:** VERIFIED (OCR: [Typhoon OCR](https://huggingface.co/scb10x/typhoon-ocr-3b)) · ASSUMPTION (pain)

#### IDEA-053 — WHT Wallet
- **ID:** IDEA-053
- **Name:** WHT Wallet — เก็บหนังสือรับรอง 50 ทวิ ที่ได้จากลูกค้า รวมยอดภาษีถูกหัก และประมาณเงินคืน
- **Category:** Productivity & Automation
- **Problem:** ฟรีแลนซ์ถูกหักภาษี ณ ที่จ่าย 3% จากหลายลูกค้า เอกสาร 50 ทวิ กระจัดกระจาย ลืมทวงจนยื่นภาษีไม่ครบ
- **Target Customer:** ผู้ใช้และผู้จ่าย = ฟรีแลนซ์/คนรับงานหลายเจ้า
- **Solution:** บันทึกงานที่ถูกหักแต่ละครั้ง ติดตามว่าได้ 50 ทวิ แล้วหรือยัง ส่งข้อความทวงจาก template สรุปยอดตอนยื่นภาษี
- **Core MVP:** 1) บันทึกงาน + ยอดหัก 2) สถานะ "ยังไม่ได้ 50 ทวิ" + ข้อความทวง 3) สรุปยอดทั้งปี + อัปโหลดไฟล์ 50 ทวิ
- **Revenue Model:** จ่ายครั้งเดียวช่วงยื่นภาษี เพราะเห็นเงินคืนเป็นตัวเลข (ASSUMPTION)
- **Data / API:** Supabase Storage; อัตรา WHT จาก notes (สถานะ e-WHT 1% ปี 2026 ไม่ยืนยัน)
- **Differentiation:** ต่างจาก IDEA-051 (ออกเอกสาร) ตรงนี้คือเก็บเอกสารที่ได้รับ; ไม่ได้ตรวจว่ามีเครื่องมือเฉพาะแบบนี้ในไทย
- **Biggest Risk:** ใช้ปีละครั้ง จ่ายน้อย และผู้ใช้อาจใช้โฟลเดอร์ในมือถือแทน
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (อัตรา WHT: [Forvis Mazars](https://forvismazars.com/th/en/insights/doing-business-in-thailand/tax/extension-withholding-tax-reduction)) · ASSUMPTION (pain/ยอมจ่าย)

#### IDEA-054 — ChatToTasks
- **ID:** IDEA-054
- **Name:** ChatToTasks — วางแชทกลุ่ม LINE ที่ export แล้ว ได้รายการงาน ผู้รับผิดชอบ และเส้นตาย
- **Category:** Productivity & Automation
- **Problem:** งานในกลุ่ม LINE จมหายในข้อความ (สมมติฐาน — notes ระบุว่าไม่พบข้อมูลยืนยันเรื่อง LINE group overload)
- **Target Customer:** ผู้ใช้ = ทีมเล็ก/ครู/ชมรม / ผู้จ่าย = ไม่ชัด
- **Solution:** วางไฟล์ export → LLM สกัดงาน/วันที่/ชื่อ → บอร์ดงานให้ตรวจแก้
- **Core MVP:** 1) อัปโหลดไฟล์แชท 2) สกัดงานด้วย LLM 3) บอร์ดงาน + export
- **Revenue Model:** ไม่ชัด อาจเป็นรายเดือนสำหรับทีม (ASSUMPTION) — ไอเดียอ่อน
- **Data / API:** Typhoon/Groq/OpenRouter (OpenRouter free 50 req/วัน ถ้าไม่ซื้อ credit)
- **Differentiation:** chatbot ทั่วไปทำได้ฟรี — ไอเดียนี้พึ่ง "ใช้ AI" เป็นจุดขายหลัก ซึ่งขัดกฎ
- **Biggest Risk:** ส่งแชทที่มีข้อมูลส่วนตัวไป LLM free tier เสี่ยง PDPA (Gemini free อาจถูกคนตรวจอ่าน — ไม่ยืนยัน) ไม่มีจุดต่าง
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (pain) · VERIFIED (ข้อจำกัด LLM: [OpenRouter](https://openrouter.ai/docs/api-reference/limits))

#### IDEA-055 — ReorderBot
- **ID:** IDEA-055
- **Name:** ReorderBot — พนักงานพิมพ์นับสต็อกในแชท LINE แล้วได้ใบสั่งซื้อส่งซัพพลายเออร์
- **Category:** Productivity & Automation
- **Problem:** ร้านเล็กนับสต็อกในกระดาษ สั่งของจากความจำ ของขาดหรือสั่งเกิน (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = พนักงานร้าน / ผู้จ่าย = เจ้าของร้าน (คาเฟ่ ร้านอาหาร มินิมาร์ท)
- **Solution:** พนักงานพิมพ์ "นม 3 ถั่ว 1" ใน LINE OA → bot ตอบกลับ (reply message ฟรี) พร้อมรายการที่ต่ำกว่าจุดสั่ง → เจ้าของกดส่งใบสั่งซื้อ
- **Core MVP:** 1) LINE webhook รับข้อความ + parser 2) จุดสั่งซื้อขั้นต่ำต่อสินค้า 3) หน้าใบสั่งซื้อให้คัดลอก/ส่ง
- **Revenue Model:** เจ้าของจ่ายรายเดือนต่ำ เพราะลดของขาด (ASSUMPTION)
- **Data / API:** LINE Messaging API (reply ไม่นับโควตา; push นับ — ฟรี 300/เดือน)
- **Differentiation:** Loyverse มี essential inventory ฟรี แต่ต้องใช้แอป POS จุดต่างคือทำผ่านแชทที่พนักงานใช้อยู่แล้ว
- **Biggest Risk:** การพิมพ์ในแชทผิดรูปแบบบ่อย POS ฟรีทำสต็อกได้ดีกว่า
- **Feasibility:** MEDIUM — ต้องตั้ง LINE OA + webhook ให้ทันในวันแรก
- **Evidence Status:** VERIFIED (LINE quota: [LINE Developers](https://developers.line.biz/en/docs/messaging-api/pricing/); คู่แข่ง: [Loyverse](https://loyverse.com/pricing)) · ASSUMPTION (pain)

#### IDEA-056 — ShiftSwap
- **ID:** IDEA-056
- **Name:** ShiftSwap — จัดกะพนักงาน part-time ร้านเล็ก จากเวลาว่างที่ส่งมา + แลกกะกันเอง
- **Category:** Productivity & Automation
- **Problem:** เจ้าของร้านจัดกะในกลุ่มแชท พนักงาน part-time (มักเป็นนักศึกษา) เปลี่ยนเวลาบ่อย (สมมติฐาน — ไม่มีข้อมูล)
- **Target Customer:** ผู้ใช้ = พนักงาน + เจ้าของ / ผู้จ่าย = เจ้าของร้าน
- **Solution:** พนักงานส่งเวลาว่างรายสัปดาห์ → ระบบร่างตารางตามจำนวนคนที่ต้องการต่อกะ → แลกกะผ่านปุ่มที่เจ้าของอนุมัติ
- **Core MVP:** 1) ฟอร์มเวลาว่าง 2) จัดตารางอัตโนมัติแบบง่าย (greedy) 3) ขอแลกกะ + อนุมัติ
- **Revenue Model:** รายเดือนต่อร้าน (ASSUMPTION; FlowAccount ขายส่วนเสริมจัดการการลา 249 บาท/เดือน แสดงว่ามีตลาดเครื่องมือ HR เล็ก แต่ไม่ใช่หลักฐานโดยตรง)
- **Data / API:** Supabase
- **Differentiation:** Loyverse ขาย Employee Management US$25/ร้าน/เดือน และมีแอปจัดกะต่างประเทศ (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ร้านเล็กมีพนักงาน 2–5 คน จัดในแชทก็พอ ไม่เห็นค่าพอจะจ่าย
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (pain) · VERIFIED (ราคาคู่แข่ง: [Loyverse](https://loyverse.com/pricing), [FlowAccount](https://flowaccount.com/pricing))

#### IDEA-057 — ScopeLock
- **ID:** IDEA-057
- **Name:** ScopeLock — ขอบเขตงาน + บันทึกการขอแก้ไขที่ลูกค้ากดยอมรับ สำหรับฟรีแลนซ์ที่รับงานนอกแพลตฟอร์ม
- **Category:** Productivity & Automation
- **Problem:** ฟรีแลนซ์ >50% บ่นค่าธรรมเนียมแพลตฟอร์ม (Fastwork 17%) จึงรับงานตรง แต่พอไม่มีแพลตฟอร์มคุ้มครอง ก็เจอลูกค้าขอแก้ไม่จบ (ส่วนหลังเป็นสมมติฐาน)
- **Target Customer:** ผู้ใช้และผู้จ่าย = ฟรีแลนซ์ที่รับงานตรง
- **Solution:** สร้างหน้าขอบเขตงาน (จำนวนรอบแก้ ราคา ระยะเวลา) ลูกค้ากดยอมรับ ทุกคำขอแก้เพิ่มถูกบันทึกและคิดเงินเพิ่มตามที่ตกลง
- **Core MVP:** 1) template ขอบเขตงาน + ลิงก์ให้ลูกค้ากดยอมรับ (บันทึกเวลา) 2) บันทึกรอบแก้ + เตือนเมื่อเกิน 3) สรุปยอดเพิ่ม + PromptPay QR
- **Revenue Model:** ฟรีแลนซ์จ่ายรายเดือน/ต่อโปรเจกต์ เพราะถูกกว่าค่าคอมแพลตฟอร์ม (ASSUMPTION)
- **Data / API:** Supabase, `promptpay-qr`
- **Differentiation:** Fastwork มีระบบคุ้มครองแลกกับค่าคอม 17% จุดต่างคือเครื่องมือเบาสำหรับงานตรง
- **Biggest Risk:** การกดยอมรับบนเว็บมีน้ำหนักทางกฎหมายแค่ไหนยังไม่ได้ตรวจ ลูกค้าอาจไม่ยอมกด
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ค่าคอม/ความกังวลเรื่อง fee: [Marketing Oops](https://www.marketingoops.com/?p=338637)) · ASSUMPTION (pain เรื่องแก้งาน)

#### IDEA-058 — DocChase
- **ID:** IDEA-058
- **Name:** DocChase — พอร์ทัลให้สำนักงานบัญชีเล็กตามเก็บเอกสารรายเดือนจากลูกค้า SME
- **Category:** Productivity & Automation
- **Problem:** สำนักงานบัญชีต้องทวงใบเสร็จ/ใบกำกับจากลูกค้า SME ทุกเดือนผ่านแชท (สมมติฐาน) ขณะที่ SME มี 3.28 ล้านราย
- **Target Customer:** ผู้ใช้ = สำนักงานบัญชีเล็ก + ลูกค้า SME / ผู้จ่าย = สำนักงานบัญชี
- **Solution:** ลูกค้าแต่ละรายมีลิงก์อัปโหลดพร้อม checklist ประจำเดือน สำนักงานเห็นภาพรวมว่าใครยังไม่ส่ง
- **Core MVP:** 1) checklist เอกสารต่อเดือนต่อลูกค้า 2) ลิงก์อัปโหลด (ไม่ต้อง login) 3) dashboard สถานะทุกลูกค้า + ข้อความทวง
- **Revenue Model:** สำนักงานบัญชีจ่ายต่อจำนวนลูกค้า เพราะลดเวลาทวงเอกสาร (ASSUMPTION — สำนักงานบัญชีเป็นธุรกิจที่จ่ายค่าซอฟต์แวร์อยู่แล้วตามสมมติฐาน)
- **Data / API:** Supabase Storage (ฟรี 1 GB — ต้องอัปเกรดเมื่อใช้จริง)
- **Differentiation:** PEAK/FlowAccount อาจมีฟีเจอร์คล้ายกัน (ไม่ได้ตรวจสอบ) Google Drive ใช้ฟรีได้
- **Biggest Risk:** ลูกค้า SME ยังส่งทางแชทเหมือนเดิม เอกสารการเงินเป็นข้อมูลอ่อนไหว ต้องดูแลความปลอดภัย
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (จำนวน SME: [BOT SME Snapshot](https://www.bot.or.th/content/dam/bot/documents/th/financial-innovation/การเงินเพื่อครัวเรือนและ-sme/sme/SME_snapshort_Q2_2569.pdf)) · ASSUMPTION (pain)

#### IDEA-059 — CertBatch
- **ID:** IDEA-059
- **Name:** CertBatch — ออกเกียรติบัตรจำนวนมากจากรายชื่อ พร้อม QR ให้ตรวจสอบว่าของจริง
- **Category:** Productivity & Automation
- **Problem:** โรงเรียน/ผู้จัดค่ายทำเกียรติบัตรทีละใบ และเกียรติบัตรปลอมได้ง่าย (สมมติฐาน)
- **Target Customer:** ผู้ใช้และผู้จ่าย = ผู้จัดค่าย/งานแข่งขัน/โรงเรียน
- **Solution:** อัปโหลด template + CSV รายชื่อ → PDF ทุกใบพร้อม QR ไปหน้าตรวจสอบ ส่งอีเมลให้ผู้รับ
- **Core MVP:** 1) วาง field บน template 2) สร้าง PDF จาก CSV 3) หน้าตรวจสอบจาก QR
- **Revenue Model:** จ่ายต่องาน/ต่อจำนวนใบ (ASSUMPTION)
- **Data / API:** PDF library ฝั่ง client, Supabase
- **Differentiation:** Canva/Google Slides + mail merge ทำได้ฟรี (ไม่ได้ตรวจสอบ) จุดต่างคือ QR ตรวจสอบ
- **Biggest Risk:** ทางเลือกฟรีมีมาก ผู้จัดงานโรงเรียนไม่มีงบ ใช้ไม่บ่อย
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (pain) — มีแค่หลักฐานว่ามีค่ายจำนวนมาก ([CampHub](https://www.camphub.in.th/))

#### IDEA-060 — eTax PreCheck
- **ID:** IDEA-060
- **Name:** eTax PreCheck — ตรวจข้อมูลใบกำกับภาษีให้ครบก่อนส่งระบบ e-Tax by Time Stamp
- **Category:** Productivity & Automation
- **Problem:** ธุรกิจเล็ก (รายได้ ≤30 ล้าน) ที่เพิ่งเข้าระบบ e-Tax by Time Stamp หรือเพิ่งจด VAT อาจออกใบกำกับข้อมูลไม่ครบ (ส่วนหลังเป็นสมมติฐาน)
- **Target Customer:** ผู้ใช้และผู้จ่าย = SME ที่เพิ่งจด VAT
- **Solution:** อัปโหลด/กรอกใบกำกับ → ตรวจ field ที่ต้องมี (เลขผู้เสียภาษี ที่อยู่ ฯลฯ) และเตือนจุดผิด
- **Core MVP:** 1) ฟอร์ม/อัปโหลดใบกำกับ 2) rule checker 3) รายงานจุดที่ต้องแก้
- **Revenue Model:** จ่ายต่อเดือน (ASSUMPTION)
- **Data / API:** กติกาต้องอ่านจากกรมสรรพากร (หน้า e-Tax ไม่ได้ fetch ในรอบนี้)
- **Differentiation:** FlowAccount มี e-Tax by Time Stamp ในตัว ผู้ที่ใช้โปรแกรมบัญชีไม่ต้องใช้เครื่องมือนี้
- **Biggest Risk:** ทีมนักเรียนตีความกฎภาษีผิด เกิดความรับผิด ตลาดแคบ (เฉพาะคนที่ไม่ใช้โปรแกรมบัญชี)
- **Feasibility:** MEDIUM — ต้องเข้าใจรูปแบบข้อมูล e-Tax ซึ่งยังไม่ได้ตรวจ
- **Evidence Status:** VERIFIED (ระบบ e-Tax: [InfoQuest](https://www.infoquest.co.th/?p=462192); คู่แข่ง: [FlowAccount](https://flowaccount.com/pricing)) · UNKNOWN (pain/กติกา field)

### หมวด Consumer Lifestyle (IDEA-061 ถึง IDEA-070)

#### IDEA-061 — ผ่อนจริงเท่าไร
- **ID:** IDEA-061
- **Name:** ผ่อนจริงเท่าไร — เทียบต้นทุนจริงของการซื้อเงินสด / ผ่อนบัตร / BNPL / ผ่อนร้าน ก่อนตัดสินใจ
- **Category:** Consumer Lifestyle
- **Problem:** หนี้ครัวเรือนเฉลี่ย ~795,000 บาท (สูงสุดในรอบ 17 ปีของผลสำรวจ) 67.5% ของผู้มีหนี้เคยผิดนัดใน 12 เดือน ผู้ใช้ BNPL เพิ่มจาก 6.2% เป็น 14.2%
- **Target Customer:** ผู้ใช้ = คนวัยทำงานรายได้ปานกลาง-ต่ำที่กำลังจะผ่อนของ / ผู้จ่าย = นายจ้าง (สวัสดิการความรู้การเงิน) หรือสหกรณ์ออมทรัพย์ — ไม่ใช่ผู้ใช้เอง
- **Solution:** ใส่ราคา ตัวเลือกผ่อน ดอกเบี้ย ค่าธรรมเนียม และรายได้ → เห็นยอดจ่ายรวม ดอกเบี้ยแฝง ภาระต่อรายได้ (เทียบเกณฑ์ 15–20% ที่บทความแนะนำ) และวันตัดรอบที่ควรตรงกับวันเงินเดือนออก
- **Core MVP:** 1) ตัวคำนวณหลายตัวเลือกเทียบกัน 2) เกจภาระหนี้ต่อรายได้ 3) ตารางผ่อน + เตือนวันครบกำหนด (.ics)
- **Revenue Model:** นายจ้าง/สหกรณ์จ่ายแบบ license เพราะพนักงานที่หนี้ล้นกระทบงาน (ASSUMPTION) — ห้ามรับค่า affiliate จากผู้ให้กู้เพราะขัดกับจุดยืนของเครื่องมือ
- **Data / API:** ไม่ต้องใช้ API ภายนอก สูตรการเงินล้วน
- **Differentiation:** เครื่องคำนวณผ่อนบนเว็บธนาคาร/ร้านค้ามักเชียร์สินค้าของตัวเอง (บทความ Siamphone เชียร์ KTC) จุดต่างคือเป็นกลางและเทียบภาระต่อรายได้
- **Biggest Risk:** คนที่ควรใช้มักไม่ค้นหาเครื่องมือก่อนผ่อน และผู้ใช้ไม่จ่ายเงิน ขายนายจ้างใช้เวลานาน
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (pain: [Nation/UTCC](https://www.nationthailand.com/business/economy/40071155), [SCB EIC](https://www.scbeic.com/en/detail/file/product/10147/hknkoi227d/Flash-Household-debt-JUL-EN-20260723.pdf); เกณฑ์ 15–20%: [Siamphone](https://www.siamphone.com/contents/news-56018.html)) · ASSUMPTION (ผู้จ่าย)

#### IDEA-062 — DebtPath
- **ID:** IDEA-062
- **Name:** DebtPath — วางลำดับการปิดหนี้หลายก้อน (บัตร, BNPL, ผ่อนร้าน, หนี้นอกระบบ)
- **Category:** Consumer Lifestyle
- **Problem:** คนไทยมีหนี้หลายก้อน 22.8% ของหนี้เป็นหนี้นอกระบบ ไม่รู้ว่าควรปิดก้อนไหนก่อน
- **Target Customer:** ผู้ใช้ = คนที่มีหนี้หลายก้อน / ผู้จ่าย = องค์กรที่ให้คำปรึกษาหนี้หรือนายจ้าง (ASSUMPTION)
- **Solution:** กรอกหนี้ทุกก้อน → จำลองแผนปิดแบบดอกสูงก่อน/ก้อนเล็กก่อน เห็นวันปลดหนี้และดอกเบี้ยที่ประหยัด
- **Core MVP:** 1) กรอกหนี้ (ยอด ดอก ขั้นต่ำ) 2) จำลอง 2 กลยุทธ์ + กราฟ 3) แผนรายเดือน + เตือน
- **Revenue Model:** B2B กับนายจ้าง/สหกรณ์ (ASSUMPTION) ผู้ใช้ที่ขาดเงินไม่น่าจ่าย
- **Data / API:** สูตรการเงินล้วน
- **Differentiation:** ต่างจาก IDEA-061 (ตัดสินใจก่อนก่อหนี้) ตรงนี้คือแผนปิดหนี้ที่มีอยู่ บริการแก้หนี้ของรัฐ/ธนาคารมีอยู่ (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** หนี้นอกระบบไม่ได้คิดดอกแบบมาตรฐาน แผนอาจผิด ผู้ใช้ไม่มีเงินเหลือพอทำตามแผน
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (หนี้นอกระบบ 22.8%: [Nation/UTCC](https://www.nationthailand.com/business/economy/40071155)) · ASSUMPTION (ผู้จ่าย)

#### IDEA-063 — SellerCheck
- **ID:** IDEA-063
- **Name:** SellerCheck — เช็กเบอร์/บัญชีผู้ขายก่อนโอน + เช็กลิสต์สัญญาณโกงสำหรับซื้อของออนไลน์
- **Category:** Consumer Lifestyle
- **Problem:** ปี 2026 การโกงซื้อของออนไลน์คิดเป็น 73% ของคดี (ม.ค.–ก.ค. 2026 มากกว่า 190,000 คดี เสียหายกว่า 9,300 ล้านบาท)
- **Target Customer:** ผู้ใช้ = ผู้ซื้อของออนไลน์/มือสอง / ผู้จ่าย = ร้านค้าออนไลน์สุจริตที่จ่ายเพื่อรับป้าย "ยืนยันตัวตนแล้ว" (ASSUMPTION)
- **Solution:** ใส่เบอร์/เลขบัญชี → ดูรายงานจากผู้ใช้ (ต้องแนบหลักฐาน) + เช็กลิสต์สัญญาณเตือน; ร้านสุจริตยืนยันตัวตนเพื่อได้ป้าย
- **Core MVP:** 1) ค้นหาจากฐานรายงาน (seed mock) 2) ฟอร์มรายงานพร้อมหลักฐาน + คิวตรวจ 3) หน้าโปรไฟล์ร้านที่ยืนยันแล้ว
- **Revenue Model:** ร้านจ่ายค่ายืนยันตัวตนรายปี เพราะเพิ่ม conversion (ASSUMPTION)
- **Data / API:** ไม่มี API ทางการของตำรวจ/ธนาคาร (ไม่ได้ตรวจสอบ) ต้องพึ่งรายงานจากผู้ใช้
- **Differentiation:** มีเว็บรวมรายชื่อคนโกงจากชุมชนอยู่แล้ว (ไม่ได้ตรวจสอบชื่อ) จุดต่างคือฝั่งร้านยืนยันตัวตน
- **Biggest Risk:** รายงานเท็จ = หมิ่นประมาท + PDPA (เผยแพร่เลขบัญชี) ฐานข้อมูลว่างตอนเริ่ม คนโกงเปลี่ยนบัญชีเร็ว
- **Feasibility:** HIGH (ระบบ) — แต่ข้อมูลจริงไม่มี
- **Evidence Status:** VERIFIED (pain: [Thairath English](https://en.thairath.co.th/money/economics/thai_economics/2956372)) · ASSUMPTION (ผู้จ่าย, ความถูกต้องของข้อมูล)

#### IDEA-064 — ContractLens ผ่อนมือถือ
- **ID:** IDEA-064
- **Name:** ContractLens — อ่านสัญญาผ่อนมือถือ ไฮไลต์ค่าปลดล็อก/ค่าปรับ และร่างหนังสือร้องเรียน สคบ.
- **Category:** Consumer Lifestyle
- **Problem:** ผู้ผ่อนมือถือ 2,425 บาท/เดือนโดนล็อกเครื่องทุกครั้งที่จ่ายช้า (เข้าแอปธนาคารไม่ได้) ร้านเก็บค่าปลดล็อก 300 บาท/ครั้ง ขู่ปรับ 50 บาท/วัน; ทนายระบุว่าเก็บได้เฉพาะถ้าอยู่ในสัญญา
- **Target Customer:** ผู้ใช้ = คนผ่อนมือถือ (มักไม่มีบัตรเครดิต) / ผู้จ่าย = ไม่ชัด (สำนักงานกฎหมาย/องค์กรผู้บริโภคจ่ายค่า lead — ASSUMPTION)
- **Solution:** ถ่ายรูปสัญญา → OCR → ไฮไลต์ข้อที่เกี่ยวกับค่าปรับ/ล็อกเครื่อง/ค่าปลดล็อก + ร่างคำร้อง สคบ.
- **Core MVP:** 1) อัปโหลดสัญญา + OCR 2) ไฮไลต์ข้อสำคัญด้วยคำค้น/LLM 3) template คำร้อง
- **Revenue Model:** lead ให้ทนาย/องค์กรผู้บริโภค (ASSUMPTION) ผู้ใช้กำลังขาดเงินไม่น่าจ่าย
- **Data / API:** Typhoon OCR + Typhoon text model
- **Differentiation:** ปัจจุบันถามในเว็บถาม-ตอบกฎหมายฟรี (Legardy) จุดต่างคืออ่านสัญญาของผู้ใช้เอง
- **Biggest Risk:** เป็นการให้คำแนะนำกฎหมาย ถ้าผิดเกิดความรับผิด ความแม่นยำ OCR/LLM ภาษากฎหมายไทยไม่มี benchmark ไม่มีผู้จ่าย
- **Feasibility:** MEDIUM
- **Evidence Status:** VERIFIED (pain: [Legardy](https://legardy.com/free-qna/49997)) · UNKNOWN (จำนวนคำร้องเรียน สคบ.) · ASSUMPTION (ผู้จ่าย)

#### IDEA-065 — PetBook Reminder
- **ID:** IDEA-065
- **Name:** PetBook Reminder — สมุดสุขภาพสัตว์เลี้ยงออนไลน์ + เตือนวัคซีน ที่คลินิกเป็นผู้จ่าย
- **Category:** Consumer Lifestyle
- **Problem:** ตลาดสัตว์เลี้ยง ~92,000 ล้านบาท (2025) บริการสัตวแพทย์ ~6,990 ล้าน เจ้าของที่มองสัตว์เป็นสมาชิกครอบครัวใช้จ่าย ~50,500 บาท/ตัว/ปี; การลืมนัดวัคซีนเป็นสมมติฐาน
- **Target Customer:** ผู้ใช้ = เจ้าของสัตว์เลี้ยง / ผู้จ่าย = คลินิกสัตว์เล็ก เพราะการเตือนนัดทำให้ลูกค้ากลับมา
- **Solution:** คลินิกบันทึกวัคซีน/ยาถ่ายพยาธิ → เจ้าของได้ลิงก์สมุดสุขภาพ + เตือนก่อนครบกำหนด + กดจองคิว
- **Core MVP:** 1) หน้าคลินิกบันทึกประวัติ 2) ลิงก์สมุดสุขภาพของเจ้าของ 3) เตือนอีเมล/LINE + ปุ่มจองนัด
- **Revenue Model:** คลินิกจ่ายรายเดือนเพราะเพิ่มนัดซ้ำ (ASSUMPTION)
- **Data / API:** Supabase, LINE (ระวังโควตา push ฟรี 300/เดือน — ใช้อีเมลเป็นหลัก)
- **Differentiation:** ระบบคลินิกสัตว์อาจมีฟีเจอร์เตือนแล้ว (ไม่ได้ตรวจสอบ) จุดต่างคือเบาและเจ้าของไม่ต้องลงแอป
- **Biggest Risk:** คลินิกมีระบบอยู่แล้วหรือใช้ LINE ส่งเตือนเอง push message มีต้นทุนเมื่อเกินโควตา
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ตลาด: [InfoQuest/ttb](https://www.infoquest.co.th/?p=510170); LINE quota: [LINE Developers](https://developers.line.biz/en/docs/messaging-api/pricing/)) · ASSUMPTION (pain/ผู้จ่าย)

#### IDEA-066 — FridgeLeft
- **ID:** IDEA-066
- **Name:** FridgeLeft — บันทึกของในตู้เย็น เตือนใกล้หมดอายุ และเสนอเมนูจากของที่เหลือ
- **Category:** Consumer Lifestyle
- **Problem:** ครัวเรือนไทยทิ้งอาหาร ~0.332 กก./คน/วัน (รวมของเหลว) จากการศึกษา 2,700 ครัวเรือน
- **Target Customer:** ผู้ใช้ = ครอบครัว/คนอยู่หอ / ผู้จ่าย = ไม่ชัด (ซูเปอร์มาร์เก็ตจ่ายโฆษณา — ASSUMPTION)
- **Solution:** เพิ่มของเข้าตู้เย็นด้วยปุ่มลัด → เตือนของใกล้หมดอายุ → เสนอเมนูไทยจากของที่มี
- **Core MVP:** 1) รายการของ + วันหมดอายุ 2) เตือนรายวัน 3) จับคู่เมนูจากฐานสูตรเล็ก ๆ
- **Revenue Model:** โฆษณา/affiliate ร้านค้า (ASSUMPTION) ผู้ใช้ไม่จ่าย
- **Data / API:** ฐานสูตรอาหารกรอกเอง
- **Differentiation:** แอปลักษณะนี้มีทั่วโลก (ไม่ได้ตรวจสอบ) ผู้ใช้เลิกกรอกเร็ว
- **Biggest Risk:** การกรอกข้อมูลด้วยมือทำให้เลิกใช้ภายในไม่กี่วัน ไม่มีผู้จ่ายที่ชัด
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (pain: [Applied Environmental Research](https://ph01.tci-thaijo.org/index.php/aer/article/view/259655)) · ASSUMPTION (ผู้จ่าย)

#### IDEA-067 — SubTrack TH
- **ID:** IDEA-067
- **Name:** SubTrack TH — รวมค่าบริการรายเดือน (สตรีมมิ่ง เน็ต ประกัน แพ็กเกจมือถือ) เตือนก่อนตัดเงิน
- **Category:** Consumer Lifestyle
- **Problem:** สมมติฐานว่าคนจ่าย subscription ซ้ำซ้อนโดยไม่รู้ตัว (notes ระบุว่าไม่มีข้อมูล subscription overload)
- **Target Customer:** ผู้ใช้ = คนวัยทำงาน / ผู้จ่าย = ไม่ชัด
- **Solution:** กรอกบริการ → ปฏิทินวันตัดเงิน ยอดรวมต่อเดือน และปุ่มลิงก์ไปหน้ายกเลิก
- **Core MVP:** 1) รายการบริการ 2) ปฏิทิน + ยอดรวม 3) เตือนก่อนตัด
- **Revenue Model:** ไม่มีโมเดลที่น่าเชื่อ — ไอเดียอ่อนเก็บไว้เพื่อบันทึก
- **Data / API:** ไม่มี (การเชื่อมบัญชีธนาคารทำไม่ได้)
- **Differentiation:** แทบไม่มี แอปบันทึกรายจ่ายทั่วไปทำได้
- **Biggest Risk:** ไม่มี pain ยืนยัน ไม่มีผู้จ่าย ไม่มีจุดต่าง
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-068 — DormSplit
- **ID:** IDEA-068
- **Name:** DormSplit — ถ่ายรูปมิเตอร์ แล้วหารค่าน้ำไฟระหว่างรูมเมต พร้อม PromptPay QR รายคน
- **Category:** Consumer Lifestyle
- **Problem:** รูมเมตหารค่าน้ำไฟ/เน็ตไม่ลงตัว ทวงเงินกันเองอึดอัด (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = นักศึกษา/คนทำงานที่อยู่ร่วมกัน / ผู้จ่าย = ไม่ชัด (อาจขายต่อให้เจ้าของหอเป็นส่วนหนึ่งของ IDEA-039)
- **Solution:** ใส่เลขมิเตอร์ต้น/ปลายเดือน + กติกาหาร → ยอดต่อคน + PromptPay QR + สถานะจ่าย
- **Core MVP:** 1) ห้อง + สมาชิก + กติกา 2) คำนวณ + QR รายคน 3) สถานะจ่าย/ทวง
- **Revenue Model:** ไม่น่ามีคนจ่าย (ASSUMPTION) — มูลค่าอยู่ที่การเป็น feature ของระบบหอ
- **Data / API:** `promptpay-qr`
- **Differentiation:** แอปหารเงินทั่วไปทำได้ จุดต่างแค่คำนวณจากมิเตอร์
- **Biggest Risk:** ไม่มีผู้จ่าย ทับซ้อนกับ IDEA-039 และ IDEA-013
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (notes ไม่มีข้อมูลเรื่องบิลค่าน้ำไฟ/การหารเงิน)

#### IDEA-069 — JobScam Check
- **ID:** IDEA-069
- **Name:** JobScam Check — วางข้อความประกาศงาน/ข้อเสนองาน แล้วเห็นสัญญาณเตือนการหลอกลวง
- **Category:** Consumer Lifestyle
- **Problem:** หลอกงานคิดเป็น 9% ของคดีฉ้อโกงออนไลน์ปี 2026 (รองจากซื้อของออนไลน์) คนหางานพาร์ตไทม์/วัยรุ่นตกเป็นเหยื่อ (ส่วนหลังเป็นสมมติฐาน)
- **Target Customer:** ผู้ใช้ = คนหางาน นักศึกษา / ผู้จ่าย = เว็บหางานหรือมหาวิทยาลัย (ฝ่ายแนะแนวอาชีพ) ซื้อ widget — ASSUMPTION
- **Solution:** วางข้อความ → ตรวจกฎสัญญาณเตือน (ให้โอนเงินก่อน รายได้สูงผิดปกติ ติดต่อผ่านแชทเท่านั้น) + คำอธิบายเหตุผลรายข้อ
- **Core MVP:** 1) rule engine สัญญาณเตือน (หลัก) 2) LLM ช่วยจับข้อความแปลกเป็นตัวเสริม 3) การ์ดผลลัพธ์อธิบายเหตุผล
- **Revenue Model:** B2B widget ให้มหาวิทยาลัย/เว็บหางาน (ASSUMPTION)
- **Data / API:** Typhoon/Groq (มีทางสำรองเป็น rule-based ถ้า quota หมด)
- **Differentiation:** ต่างจาก IDEA-063 (ตรวจผู้ขาย) ตรงนี้ตรวจข้อเสนองาน; หน่วยงานรัฐมีคำเตือนทั่วไป (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ตรวจผิดทั้งสองทาง (บอกว่าปลอดภัยแต่โกง = เสียหายจริง) ผู้จ่ายไม่ชัด
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (สัดส่วนหลอกงาน 9%: [Thairath English](https://en.thairath.co.th/money/economics/thai_economics/2956372)) · ASSUMPTION (ผู้จ่าย)

#### IDEA-070 — MedBuddy Family
- **ID:** IDEA-070
- **Name:** MedBuddy Family — ลูกหลานตั้งตารางยาให้พ่อแม่สูงวัย พ่อแม่กด "กินแล้ว" ปุ่มเดียว
- **Category:** Consumer Lifestyle
- **Problem:** ผู้สูงวัย 60+ ประมาณ 13.6 ล้านคน (~18%) ลูกหลานทำงานไกลบ้านไม่รู้ว่าพ่อแม่กินยาครบไหม (ส่วนหลังเป็นสมมติฐาน)
- **Target Customer:** ผู้ใช้ = ผู้สูงวัย + ลูกหลาน / ผู้จ่าย = ลูกหลาน (รายเดือน) หรือร้านขายยาที่ให้เป็นบริการเสริม
- **Solution:** ลูกหลานใส่ตารางยา → พ่อแม่เห็นหน้าจอตัวใหญ่ปุ่มเดียว → ถ้าไม่กดตามเวลา ลูกหลานได้แจ้งเตือน
- **Core MVP:** 1) ตั้งตารางยา (ฝั่งลูก) 2) หน้าปุ่มใหญ่ (ฝั่งพ่อแม่) 3) dashboard + แจ้งเตือนเมื่อพลาด
- **Revenue Model:** ลูกหลานจ่ายรายเดือนเพราะลดความกังวล (ASSUMPTION — แอปเตือนยาฟรีมีมาก)
- **Data / API:** Supabase Realtime, Web Push (ไม่ได้ตรวจข้อจำกัดบน iOS)
- **Differentiation:** แอปเตือนยาทั่วไปไม่ได้ส่งผลให้ลูกหลาน (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ผู้สูงวัยไม่ใช้สมาร์ตโฟน/ไม่กดตามจริง ข้อมูลสุขภาพเป็นข้อมูลอ่อนไหวตาม PDPA
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (สังคมสูงวัย: [Time Out/GISTDA](https://www.timeout.com/bangkok/news/thailand-is-now-a-nation-of-grandparents-090225)) · ASSUMPTION (pain/ยอมจ่าย)

### หมวด Marketplace & Matching (IDEA-071 ถึง IDEA-080)

#### IDEA-071 — StudentGig Studio
- **ID:** IDEA-071
- **Name:** StudentGig Studio — ตลาดงานออกแบบ/ตัดต่อจากนักศึกษา ค่าคอมต่ำ สำหรับร้านค้า SME
- **Category:** Marketplace & Matching
- **Problem:** Fastwork เก็บค่าคอม 17% (ลดเหลือ 10% ช่วงโปรฯ ซึ่ง CEO ยอมรับว่ากระทบรายได้) ฟรีแลนซ์ >50% บอกว่าค่าธรรมเนียมเป็นเรื่องกังวลหลัก
- **Target Customer:** ผู้ใช้ = นักศึกษาสายออกแบบ + ร้านค้า SME / ผู้จ่าย = ผู้ว่าจ้างจ่ายค่าบริการ แพลตฟอร์มหักคอมต่ำกว่า 17%
- **Solution:** แพ็กเกจงานราคาตายตัวสำหรับ SME (โลโก้ เมนู โพสต์ 10 ชิ้น) โดยนักศึกษาที่ยืนยันสถาบัน + อาจารย์รับรองผลงาน
- **Core MVP:** 1) แพ็กเกจงาน + โปรไฟล์ 2) สั่งงาน + มัดจำ (จำลอง) 3) ส่งงาน/ขอแก้/ปิดงาน
- **Revenue Model:** คอมมิชชันต่ำกว่า Fastwork ผู้ว่าจ้างได้ราคาถูก นักศึกษาได้ส่วนแบ่งมากขึ้น (ASSUMPTION — ค่าคอมต่ำทำให้กำไรแพลตฟอร์มต่ำ)
- **Data / API:** Supabase Storage
- **Differentiation:** Fastwork มีฟรีแลนซ์ 130,000+ และลูกค้า 1.6 ล้าน จุดต่างคือ niche นักศึกษา + ราคาแพ็กเกจ SME
- **Biggest Risk:** สองฝั่ง (two-sided) เริ่มยาก คุณภาพงานนักศึกษาไม่สม่ำเสมอ ค่าคอมต่ำอาจไม่พอค่าดำเนินการ
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ค่าคอม/ความกังวล: [Marketing Oops](https://www.marketingoops.com/?p=338637)) · ASSUMPTION (ยอมจ่าย/ใช้)

#### IDEA-072 — PetSitter Near
- **ID:** IDEA-072
- **Name:** PetSitter Near — จับคู่คนรับเลี้ยง/เยี่ยมสัตว์เลี้ยงที่บ้านในละแวกเดียวกัน
- **Category:** Marketplace & Matching
- **Problem:** เจ้าของสัตว์เลี้ยงไปเที่ยว/กลับบ้านต่างจังหวัดแล้วไม่มีคนดูแล (สมมติฐาน) ขณะที่ตลาดบริการดูแลสัตว์ (รวมสปา) ~1,040 ล้านบาท โตเฉลี่ย ~20%/ปี
- **Target Customer:** ผู้ใช้ = เจ้าของสัตว์เลี้ยง + ผู้รับเลี้ยง / ผู้จ่าย = เจ้าของจ่ายค่าบริการ แพลตฟอร์มหักคอม
- **Solution:** ค้นผู้รับเลี้ยงใกล้บ้าน ดูรีวิว จองรายวัน ผู้รับเลี้ยงส่งรูป/สถานะระหว่างดูแล
- **Core MVP:** 1) โปรไฟล์ผู้รับเลี้ยง + พื้นที่ให้บริการ 2) จอง + จ่าย (จำลอง) 3) อัปเดตรูประหว่างดูแล
- **Revenue Model:** คอมมิชชันต่อการจอง เจ้าของจ่ายเพราะถูกกว่าโรงแรมสัตว์และสัตว์อยู่บ้าน (ASSUMPTION)
- **Data / API:** Supabase, Leaflet
- **Differentiation:** แพลตฟอร์มต่างประเทศและกลุ่ม Facebook มีอยู่ (ไม่ได้ตรวจสอบ) notes ไม่พบข้อมูลแพลตฟอร์มรับเลี้ยงในไทย
- **Biggest Risk:** ความไว้ใจ (ให้คนแปลกหน้าเข้าบ้าน) สัตว์ป่วย/หายระหว่างดูแล = ความรับผิดสูง ช่วงเทศกาลความต้องการพุ่ง แต่ช่วงปกติเงียบ
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ขนาด/การเติบโต: [InfoQuest/ttb](https://www.infoquest.co.th/?p=510170)) · UNKNOWN (คู่แข่งในไทย) · ASSUMPTION (pain)

#### IDEA-073 — CareHour
- **ID:** IDEA-073
- **Name:** CareHour — จองเพื่อนดูแลผู้สูงวัยรายชั่วโมง (พาไปหาหมอ, อยู่เป็นเพื่อน) ไม่ใช่พยาบาล
- **Category:** Marketplace & Matching
- **Problem:** ผู้สูงวัย 13.6 ล้านคน ลูกหลานต้องลางานพาไปโรงพยาบาล (ส่วนหลังเป็นสมมติฐาน)
- **Target Customer:** ผู้ใช้ = ผู้สูงวัย / ผู้จ่าย = ลูกหลาน; ผู้ให้บริการ = ผู้ดูแลที่ผ่านการอบรม
- **Solution:** จองผู้ดูแลเป็นชั่วโมง ระบุงาน (พาไปหาหมอ ซื้อของ) ลูกหลานเห็นสถานะเช็กอิน/เช็กเอาต์
- **Core MVP:** 1) โปรไฟล์ผู้ดูแล + ใบรับรอง 2) จองงานรายชั่วโมง 3) เช็กอิน/เอาต์ + บันทึกงาน
- **Revenue Model:** คอมมิชชันต่อชั่วโมงจากลูกหลาน (ASSUMPTION)
- **Data / API:** Supabase
- **Differentiation:** Careny (Careadviser) จับคู่ผู้ดูแลที่รับรองโดยมหิดล — ข้อมูลปี 2020 เท่านั้น สถานะปัจจุบันไม่ทราบ
- **Biggest Risk:** การคัดกรองผู้ดูแลและความปลอดภัยของผู้สูงวัยเป็นความเสี่ยงสูงสุด ทีมนักเรียนรับผิดชอบไม่ได้ในทางปฏิบัติ
- **Feasibility:** HIGH (ซอฟต์แวร์) แต่ operation จริงยาก
- **Evidence Status:** VERIFIED (สูงวัย: [Time Out/GISTDA](https://www.timeout.com/bangkok/news/thailand-is-now-a-nation-of-grandparents-090225); คู่แข่ง 2020: [The Bangkok Insight](https://www.thebangkokinsight.com/news/startup/298290/)) · ASSUMPTION (pain/ราคา)

#### IDEA-074 — GearShare
- **ID:** IDEA-074
- **Name:** GearShare — เช่ากล้อง/อุปกรณ์จากคนในเมืองเดียวกัน พร้อมบันทึกสภาพและมัดจำ
- **Category:** Marketplace & Matching
- **Problem:** คนใช้กล้อง/ไมค์/เต็นท์ไม่กี่ครั้งต่อปี ซื้อแพง เจ้าของอุปกรณ์อยากหารายได้ (สมมติฐาน — notes ไม่มีข้อมูล)
- **Target Customer:** ผู้ใช้ = ผู้เช่า + เจ้าของอุปกรณ์ / ผู้จ่าย = ผู้เช่าจ่ายค่าเช่า แพลตฟอร์มหักคอม
- **Solution:** ลงอุปกรณ์ + ราคา/วัน ผู้เช่าจอง จ่ายมัดจำ ถ่ายรูปสภาพตอนรับ-คืน (ใช้ flow เดียวกับ IDEA-003 แต่ลูกค้าต่างกลุ่ม)
- **Core MVP:** 1) ลงอุปกรณ์ + ปฏิทินว่าง 2) จอง + มัดจำ (จำลอง) 3) บันทึกสภาพรับ-คืน
- **Revenue Model:** คอมมิชชันต่อการเช่า (ASSUMPTION)
- **Data / API:** Supabase Storage
- **Differentiation:** ร้านให้เช่ากล้องมีอยู่ (ไม่ได้ตรวจสอบ) จุดต่างคือ peer-to-peer
- **Biggest Risk:** ของหาย/ถูกโกงไม่คืน ต้องยืนยันตัวตนจริงซึ่งทำใน MVP ไม่ได้ ประกันไม่มี
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (notes ระบุว่าไม่มีข้อมูลการเช่าอุปกรณ์)

#### IDEA-075 — FixPhoto Quote
- **ID:** IDEA-075
- **Name:** FixPhoto Quote — ถ่ายรูปปัญหาบ้าน แล้วได้ใบเสนอราคาจากช่างในอำเภอเดียวกันหลายเจ้า
- **Category:** Marketplace & Matching
- **Problem:** คนต่างจังหวัดหาช่างแอร์/ประปา/ไฟฟ้าที่ราคาชัดเจนยาก (สมมติฐาน) แพลตฟอร์มช่างส่วนใหญ่เน้นเมืองใหญ่ (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = เจ้าของบ้านในเมืองรอง / ผู้จ่าย = ช่างจ่ายค่า lead ต่อการเสนอราคา
- **Solution:** โพสต์รูป + รายละเอียด → ช่างในพื้นที่เสนอราคา → เจ้าของบ้านเลือก ให้คะแนนหลังงาน
- **Core MVP:** 1) โพสต์งาน + รูป 2) หน้าช่างเสนอราคา 3) เลือกช่าง + รีวิว
- **Revenue Model:** ช่างจ่ายต่อ lead (ASSUMPTION — ไม่มีข้อมูลค่าคอม/ค่า lead ของคู่แข่ง)
- **Data / API:** Supabase Storage
- **Differentiation:** Fixzy (แจ้งปัญหาด้วยรูป ดูโปรไฟล์/รีวิวช่าง), Q-CHANG, ProChang, bTaskee มีอยู่แล้ว จุดต่างมีแค่การเน้นอำเภอในต่างจังหวัด
- **Biggest Risk:** คู่แข่งตรงหลายเจ้า ฝั่งช่างในต่างจังหวัดอาจไม่ใช้แอป การรับงานต่อนอกแพลตฟอร์ม
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (คู่แข่ง: [ฐานเศรษฐกิจ](https://www.thansettakij.com/technology/670426)) · ASSUMPTION (pain/ผู้จ่าย)

#### IDEA-076 — EventCrew
- **ID:** IDEA-076
- **Name:** EventCrew — หาสตาฟฟ์งานอีเวนต์รายวัน (ลงทะเบียน แจกของ พิธีกร) จากนักศึกษาที่มีประวัติงาน
- **Category:** Marketplace & Matching
- **Problem:** ผู้จัดอีเวนต์หาสตาฟฟ์รายวันผ่านกลุ่ม Facebook สตาฟฟ์เบี้ยวงาน นักศึกษาไม่มีที่สะสมประวัติ (สมมติฐาน — notes ไม่มีข้อมูล)
- **Target Customer:** ผู้ใช้ = ผู้จัดอีเวนต์ + นักศึกษา / ผู้จ่าย = ผู้จัดอีเวนต์จ่ายค่าบริการต่อหัว
- **Solution:** ประกาศงาน → นักศึกษาสมัคร → ผู้จัดเลือกจากคะแนนความตรงเวลา → เช็กอินหน้างานด้วย QR
- **Core MVP:** 1) ประกาศงาน + สมัคร 2) คัดเลือก + ยืนยัน 3) QR เช็กอิน + ให้คะแนน
- **Revenue Model:** ค่าบริการต่อสตาฟฟ์ที่ทำงานจริง เพราะลดการเบี้ยวงาน (ASSUMPTION)
- **Data / API:** Supabase
- **Differentiation:** ต่างจาก IDEA-071 (งานออนไลน์) ตรงนี้งานหน้างานรายวัน แพลตฟอร์มหางานพาร์ตไทม์มีอยู่ (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ภาษี/แรงงาน/ประกันอุบัติเหตุ ผู้จัดใช้กลุ่ม Facebook ฟรีอยู่แล้ว
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (notes ไม่มีข้อมูลตลาดสตาฟฟ์อีเวนต์)

#### IDEA-077 — LastBite
- **ID:** IDEA-077
- **Name:** LastBite — ขายอาหาร/เบเกอรี่เหลือปลายวันลดราคา ให้คนในละแวกจองแล้วมารับ
- **Category:** Marketplace & Matching
- **Problem:** อาหารเหลือทิ้งเป็นปัญหาจริงในครัวเรือน (0.332 กก./คน/วัน) แต่ข้อมูลฝั่งร้านค้าไม่มีใน notes
- **Target Customer:** ผู้ใช้ = ร้านเบเกอรี่/ร้านข้าวแกง + คนในละแวก / ผู้จ่าย = ร้านจ่ายคอมต่อชิ้นที่ขายได้
- **Solution:** ร้านลงของเหลือ 1 ชม. ก่อนปิด ราคาลด ลูกค้าจองและจ่ายล่วงหน้า มารับเอง
- **Core MVP:** 1) ร้านลงของ + จำนวน + เวลารับ 2) ลูกค้าจอง + PromptPay (จำลอง) 3) โค้ดรับของ
- **Revenue Model:** คอมต่อชิ้น ร้านจ่ายเพราะได้เงินจากของที่ปกติทิ้ง (ASSUMPTION)
- **Data / API:** Supabase Realtime, Leaflet
- **Differentiation:** มีแอปแนวนี้ในไทยและต่างประเทศ (ไม่ได้ตรวจสอบชื่อ/สถานะ) จุดต่างต้องมาจากพื้นที่ที่คู่แข่งไม่ครอบคลุม
- **Biggest Risk:** หลักฐานเรื่องขยะอาหารเป็นของครัวเรือน ไม่ใช่ร้าน ร้านกลัวกินยอดขายราคาเต็ม ความปลอดภัยอาหาร
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION (pain ฝั่งร้าน) · VERIFIED เฉพาะขยะครัวเรือน ([AER](https://ph01.tci-thaijo.org/index.php/aer/article/view/259655))

#### IDEA-078 — ParkSpot
- **ID:** IDEA-078
- **Name:** ParkSpot — ให้เช่าที่จอดรถหน้าบ้าน/ร้านเป็นรายชั่วโมง ใกล้โรงพยาบาล/มหาวิทยาลัย
- **Category:** Marketplace & Matching
- **Problem:** ที่จอดใกล้โรงพยาบาลเต็ม คนในละแวกมีที่ว่างช่วงกลางวัน (สมมติฐาน — notes ไม่มีข้อมูล)
- **Target Customer:** ผู้ใช้ = คนขับรถ + เจ้าของที่ / ผู้จ่าย = คนขับรถจ่ายค่าจอด แพลตฟอร์มหักคอม
- **Solution:** เจ้าของลงช่องจอด + เวลาว่าง คนขับจองล่วงหน้า สแกน QR ตอนเข้า-ออก
- **Core MVP:** 1) ลงช่องจอด + แผนที่ 2) จองตามช่วงเวลา + จ่าย (จำลอง) 3) QR เข้า-ออก
- **Revenue Model:** คอมต่อการจอง (ASSUMPTION)
- **Data / API:** Leaflet + OSM; Nominatim ห้าม autocomplete (ใช้ปักหมุดแทน)
- **Differentiation:** ไม่มีข้อมูลคู่แข่งในไทยใน notes
- **Biggest Risk:** ผังเมือง/นิติบุคคลหมู่บ้านอาจห้าม รถจอดเกินเวลา ข้อพิพาทเพื่อนบ้าน
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-079 — SafeDeal
- **ID:** IDEA-079
- **Name:** SafeDeal — พักเงินกลางสำหรับซื้อขายของมือสองราคาสูง ปล่อยเงินเมื่อผู้ซื้อยืนยันรับของ
- **Category:** Marketplace & Matching
- **Problem:** โกงซื้อของออนไลน์ 73% ของคดีปี 2026 เว็บมือสองหลักส่วนใหญ่ให้ลงประกาศฟรีและไม่คุ้มครองเงิน (Kaidee, ENNXO, FB Marketplace)
- **Target Customer:** ผู้ใช้ = ผู้ซื้อ/ผู้ขายของมือสองราคาสูง (มือถือ กล้อง) / ผู้จ่าย = ผู้ซื้อหรือผู้ขายจ่ายค่าธรรมเนียมพักเงินเป็น %
- **Solution:** สร้างดีล → ผู้ซื้อโอนเข้าบัญชีกลาง → ผู้ขายส่งของ + เลขพัสดุ → ผู้ซื้อยืนยัน → ปล่อยเงิน
- **Core MVP:** 1) สร้างดีล + ลิงก์ให้อีกฝ่าย 2) สถานะดีลทีละขั้น 3) ปล่อยเงิน/ข้อพิพาท — **ทั้งหมดเป็นการจำลอง** ไม่มีการถือเงินจริง
- **Revenue Model:** ค่าธรรมเนียม % ต่อดีล ผู้ซื้อจ่ายเพราะลดความเสี่ยงโดนโกง (ASSUMPTION)
- **Data / API:** Stripe/PromptPay (ใช้จริงไม่ได้ในรูปแบบ escrow โดยไม่มีใบอนุญาต — ไม่ได้ตรวจกฎหมาย)
- **Differentiation:** Shopee มีระบบคุ้มครองแต่เก็บค่าคอม (อัตราที่ KTC ไม่ระบุ) จุดต่างคือใช้กับดีลจากช่องทางไหนก็ได้
- **Biggest Risk:** การถือเงินคนอื่นน่าจะต้องมีใบอนุญาตทางการเงิน (ไม่ได้ตรวจสอบ) ทำจริงไม่ได้โดยทีมนักเรียน ข้อพิพาทต้องมีคนตัดสิน
- **Feasibility:** HIGH (Demo จำลอง) / LOW (ใช้จริง)
- **Evidence Status:** VERIFIED (pain: [Thairath English](https://en.thairath.co.th/money/economics/thai_economics/2956372); ตลาดมือสองลงฟรี: [KTC](https://www.ktc.co.th/article/knowledge/business/8-second-hand-marketplace-atpb)) · UNKNOWN (กฎหมาย escrow)

#### IDEA-080 — FarmToKitchen
- **ID:** IDEA-080
- **Name:** FarmToKitchen — ร้านอาหารสั่งผักผลไม้ตรงจากเกษตรกรในจังหวัด แบบสั่งประจำสัปดาห์
- **Category:** Marketplace & Matching
- **Problem:** ร้านอาหารเล็กซื้อวัตถุดิบผ่านคนกลาง/ห้าง เกษตรกรรายย่อยไม่มีลูกค้าประจำ (สมมติฐาน — ไม่มีข้อมูล)
- **Target Customer:** ผู้ใช้ = ร้านอาหาร + เกษตรกร / ผู้จ่าย = ร้านจ่ายค่าบริการต่อออเดอร์ หรือเกษตรกรจ่ายคอม
- **Solution:** เกษตรกรลงผลผลิตที่มีสัปดาห์นี้ ร้านตั้งรายการสั่งประจำ ระบบรวมออเดอร์เป็นรอบส่ง
- **Core MVP:** 1) ลงผลผลิต + ราคา 2) ร้านสั่งประจำ 3) สรุปรอบส่ง
- **Revenue Model:** คอมต่อออเดอร์ (ASSUMPTION)
- **Data / API:** Supabase
- **Differentiation:** ต่างจาก IDEA-050 (ขายผู้บริโภคตามฤดู) ตรงนี้เป็น B2B รายสัปดาห์ แม็คโคร/ตลาดค้าส่งเป็นทางเลือกเดิม (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** การขนส่งและคุณภาพ (operation ไม่ใช่ซอฟต์แวร์) ราคาไม่สู้ค้าส่ง ปริมาณเกษตรกรไม่แน่นอน
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

### หมวด Community & Local Services (IDEA-081 ถึง IDEA-090)

#### IDEA-081 — WasteBank Ledger
- **ID:** IDEA-081
- **Name:** WasteBank Ledger — สมุดบัญชีธนาคารขยะดิจิทัล: ชั่งฝาก → แต้ม/เงิน + กระดานราคารับซื้อ
- **Category:** Community & Local Services
- **Problem:** มหาดไทยประกาศว่ามีธนาคารขยะครบ 1 แห่งต่อ อปท. (มี.ค. 2024) รายได้ใช้เป็นสวัสดิการชุมชน แต่การจดบัญชีน่าจะยังเป็นกระดาษ (ส่วนหลังเป็นสมมติฐาน)
- **Target Customer:** ผู้ใช้ = อาสาสมัครธนาคารขยะ + สมาชิก / ผู้จ่าย = อปท. (B2G) หรือร้านรับซื้อของเก่าที่สนับสนุนเพื่อได้วัตถุดิบ
- **Solution:** อาสาสมัครกรอกน้ำหนักแยกประเภท → ยอดสะสมของสมาชิกอัปเดตทันที สมาชิกดูยอดผ่านลิงก์ + กระดานราคารับซื้อ
- **Core MVP:** 1) ทะเบียนสมาชิก + บันทึกการฝาก (ประเภท × กก. × ราคา) 2) หน้าสมาชิกดูยอด 3) รายงานรายเดือนสำหรับ อปท.
- **Revenue Model:** อปท. จ่ายรายปีเพื่อรายงานผลและความโปร่งใส (ASSUMPTION — การจัดซื้อภาครัฐช้าและมีขั้นตอน)
- **Data / API:** Supabase; ราคารับซื้อต้องกรอกเอง (notes ไม่มีข้อมูลราคา)
- **Differentiation:** ไม่มีข้อมูลระบบที่ อปท. ใช้อยู่ (ไม่ได้ค้น)
- **Biggest Risk:** ผู้จ่ายเป็นภาครัฐ ขายยาก อาสาสมัครสูงวัยอาจไม่ใช้ ไม่รู้จำนวนธนาคารขยะที่ยังดำเนินการจริง
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ธนาคารขยะครบทุก อปท.: [ONEP](https://www.onep.go.th/?p=91488)) · UNKNOWN (ราคา/จำนวนสมาชิก) · ASSUMPTION (ผู้จ่าย)

#### IDEA-082 — SalengCall
- **ID:** IDEA-082
- **Name:** SalengCall — บ้าน/คอนโดนัดซาเล้งมารับของรีไซเคิลถึงที่ ซาเล้งเห็นจุดรับในเส้นทาง
- **Category:** Community & Local Services
- **Problem:** บ้านมีขวด/กล่องสะสมแต่ไม่รู้จะเรียกใคร ซาเล้งขับวนหาของ (สมมติฐาน — notes ไม่มีข้อมูลซาเล้ง)
- **Target Customer:** ผู้ใช้ = ครัวเรือน + ซาเล้ง / ผู้จ่าย = ร้านรับซื้อของเก่าจ่ายค่าระบบเพื่อได้ปริมาณ หรือนิติบุคคลคอนโดจ่ายเพื่อลดขยะ
- **Solution:** ครัวเรือนกดแจ้ง "มีของ" + รูป + ประเภท → ซาเล้งเห็นหมุดบนแผนที่ รับงานและไปเก็บ
- **Core MVP:** 1) ฟอร์มแจ้งของ + ปักหมุด 2) แผนที่งานฝั่งซาเล้ง + กดรับ 3) ปิดงาน + บันทึกน้ำหนัก
- **Revenue Model:** ร้านรับซื้อของเก่าหรือนิติบุคคลจ่าย (ASSUMPTION)
- **Data / API:** Leaflet + OSM, Supabase Realtime
- **Differentiation:** ต่างจาก IDEA-081 (บัญชีของ อปท.) ตรงนี้คือการนัดรับระหว่างบ้านกับซาเล้ง
- **Biggest Risk:** ซาเล้งหลายคนไม่ใช้สมาร์ตโฟน/ไม่อยากใช้แอป มูลค่าของต่อบ้านต่ำ ไม่คุ้มเดินทาง
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN (notes ระบุว่าไม่มีข้อมูลซาเล้ง/ราคารีไซเคิล)

#### IDEA-083 — BloodDrive Slot
- **ID:** IDEA-083
- **Name:** BloodDrive Slot — จองเวลาบริจาคเลือดในหน่วยเคลื่อนที่ของบริษัท/มหาวิทยาลัย + เตือนเมื่อครบรอบบริจาคได้อีก
- **Category:** Community & Local Services
- **Problem:** ข้อมูลปี 2019: โรงพยาบาลขอเลือด 2,600–3,000 ยูนิต/วัน แต่จัดหาได้ ~60% รับบริจาคได้ 1,500–1,700 ยูนิต/วัน ต่ำกว่าเป้า
- **Target Customer:** ผู้ใช้ = พนักงาน/นักศึกษาที่บริจาค / ผู้จ่าย = บริษัทที่ทำ CSR (จ่ายค่าจัดระบบ) — ASSUMPTION
- **Solution:** ฝ่าย HR สร้างรอบหน่วยเคลื่อนที่ พนักงานจองช่วงเวลา ระบบเตือนก่อนวันและเมื่อครบกำหนดบริจาครอบต่อไป
- **Core MVP:** 1) สร้างรอบ + ช่วงเวลา 2) จอง + เตือน 3) สรุปจำนวนผู้บริจาคสำหรับรายงาน CSR
- **Revenue Model:** บริษัทจ่ายเป็นงบ CSR (ASSUMPTION) ผู้บริจาคไม่จ่าย
- **Data / API:** Supabase
- **Differentiation:** สภากาชาดอาจมีระบบนัดของตัวเอง (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ข้อมูลขาดแคลนเป็นปี 2019 (เก่า) ต้องประสานกับศูนย์บริการโลหิต การหารายได้จากงานสาธารณกุศลอ่อน
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ข้อมูลปี 2019 — เก่า: [Thai PBS](https://www.thaipbs.or.th/news/content/285438)) · ASSUMPTION (ผู้จ่าย)

#### IDEA-084 — CondoDesk Lite
- **ID:** IDEA-084
- **Name:** CondoDesk Lite — แจ้งพัสดุ/ประกาศ/บิลส่วนกลางของคอนโดเล็กผ่าน LINE แบบไม่ต้องลงแอป
- **Category:** Community & Local Services
- **Problem:** งานวิจัยปี 2024 (3 คอนโดกรณีศึกษา) พบว่าแอปนิติบุคคลช่วยลดกระดาษ แต่ UI/ฟีเจอร์ออกแบบไม่ดีจนงานซับซ้อนขึ้น และข้อมูลไม่เชื่อมกัน
- **Target Customer:** ผู้ใช้ = นิติบุคคล + ลูกบ้าน / ผู้จ่าย = นิติบุคคลคอนโดเล็ก (จ่ายต่อห้อง)
- **Solution:** เจ้าหน้าที่ถ่ายรูปพัสดุ เลือกห้อง → ลูกบ้านได้แจ้งเตือนใน LINE (LIFF) + ประกาศ + บิลส่วนกลางพร้อม PromptPay QR
- **Core MVP:** 1) บันทึกพัสดุ + แจ้งเตือน 2) ประกาศ 3) บิลส่วนกลาง + QR + สถานะจ่าย
- **Revenue Model:** นิติบุคคลจ่ายต่อห้องต่อเดือน (ราคาตลาดของแอปนิติฯ ไม่ยืนยัน) เพราะลดงานเจ้าหน้าที่ (ASSUMPTION)
- **Data / API:** LINE LIFF + Messaging API (push นับโควตา: ฟรี 300, Basic 1,280 บาท/15,000 ข้อความ — ต้นทุนจริงต้องคิด)
- **Differentiation:** มีแอปนิติบุคคลหลายตัว (ชื่อ/ราคาไม่ยืนยัน) จุดต่างคือไม่ต้องลงแอป ใช้ใน LINE
- **Biggest Risk:** ค่าข้อความ push ของ LINE กินมาร์จิ้นเมื่อห้องมาก คู่แข่งที่มีอยู่อาจถูกและครบกว่า การเปลี่ยนระบบของนิติฯ ต้องผ่านมติ
- **Feasibility:** MEDIUM — ตั้ง LIFF/LINE OA ใช้เวลา
- **Evidence Status:** VERIFIED (pain: [วารสารสารศาสตร์ 2024](https://so05.tci-thaijo.org/index.php/sarasatr/article/view/273370); ราคา LINE: [LINE for Business](https://lineforbusiness.com/th/service/line-oa-features/broadcast-message)) · ASSUMPTION (ยอมจ่าย)

#### IDEA-085 — VillageFee Ledger
- **ID:** IDEA-085
- **Name:** VillageFee Ledger — เก็บค่าส่วนกลางหมู่บ้านจัดสรร + บัญชีรายรับรายจ่ายที่ลูกบ้านทุกคนดูได้
- **Category:** Community & Local Services
- **Problem:** ลูกบ้านไม่รู้ว่าค่าส่วนกลางถูกใช้ไปกับอะไร กรรมการตรวจสลิปเอง เสี่ยงสลิปปลอม (ส่วนความโปร่งใสเป็นสมมติฐาน)
- **Target Customer:** ผู้ใช้ = กรรมการหมู่บ้าน + ลูกบ้าน / ผู้จ่าย = นิติบุคคลหมู่บ้าน
- **Solution:** บิลค่าส่วนกลาง + PromptPay QR + ตรวจสลิป และหน้า "บัญชีสาธารณะ" ที่แสดงรายจ่ายพร้อมรูปใบเสร็จ
- **Core MVP:** 1) บิล + QR + ตรวจสลิป (SlipOK หรือจำลอง) 2) บันทึกรายจ่าย + รูปใบเสร็จ 3) หน้าบัญชีสาธารณะ
- **Revenue Model:** นิติบุคคลจ่ายรายเดือน เพราะลดข้อร้องเรียนเรื่องเงิน (ASSUMPTION)
- **Data / API:** `promptpay-qr`, SlipOK API
- **Differentiation:** ทับซ้อนกับ IDEA-039 (ตรวจสลิป) และ IDEA-084 (บิลส่วนกลาง) จุดต่างคือ "บัญชีโปร่งใส" ฝั่งรายจ่าย
- **Biggest Risk:** กรรมการบางชุดไม่อยากโปร่งใส ใกล้เคียงไอเดียอื่นในชุดนี้มาก
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (สลิปปลอม: [กรุงเทพธุรกิจ](https://www.bangkokbiznews.com/news/news-update/1241837)) · ASSUMPTION (pain เรื่องความโปร่งใส)

#### IDEA-086 — ฌาปนกิจ Ledger
- **ID:** IDEA-086
- **Name:** ฌาปนกิจ Ledger — ทะเบียนสมาชิกกองทุนฌาปนกิจ/สวัสดิการชุมชน เก็บเงินรายศพและแสดงยอดคงเหลือ
- **Category:** Community & Local Services
- **Problem:** กองทุนสวัสดิการชุมชน (รวมช่วยงานศพ) จดบัญชีด้วยมือ สมาชิกไม่เห็นยอด (สมมติฐาน — notes มีแค่ว่ารายได้ธนาคารขยะใช้เป็นเงินช่วยงานศพ)
- **Target Customer:** ผู้ใช้ = เหรัญญิกกองทุน + สมาชิก / ผู้จ่าย = กองทุนหรือ อปท.
- **Solution:** ทะเบียนสมาชิก เมื่อมีสมาชิกเสียชีวิต ระบบออกใบแจ้งเก็บเงินรายคน + QR และสรุปยอดจ่ายให้ครอบครัว
- **Core MVP:** 1) ทะเบียนสมาชิก 2) สร้างรอบเก็บเงิน + QR 3) สถานะจ่าย + รายงาน
- **Revenue Model:** กองทุนจ่ายค่าบริการรายปีเล็กน้อย (ASSUMPTION)
- **Data / API:** `promptpay-qr`
- **Differentiation:** ไม่มีข้อมูลระบบเดิม
- **Biggest Risk:** เรื่องเงินและความเชื่อใจในชุมชน กฎหมายสมาคมฌาปนกิจมีข้อกำหนดเฉพาะ (ไม่ได้ตรวจสอบ) สมาชิกสูงวัยจ่ายเงินสด
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-087 — TempleTasks
- **ID:** IDEA-087
- **Name:** TempleTasks — วัด/ชุมชนเปิดรับอาสาสมัครและของบริจาคตามรายการที่ขาดจริงสำหรับงานบุญ
- **Category:** Community & Local Services
- **Problem:** งานบุญได้ของซ้ำ (น้ำดื่มล้น) แต่ขาดบางอย่าง และหาคนช่วยงานยาก (สมมติฐาน — notes ไม่มีข้อมูล)
- **Target Customer:** ผู้ใช้ = กรรมการวัด/ชุมชน + ผู้ศรัทธา / ผู้จ่าย = ไม่ชัด (ร้านสังฆภัณฑ์จ่ายโฆษณา? — ASSUMPTION)
- **Solution:** รายการของที่ต้องการพร้อมจำนวน ผู้บริจาคกดจองรายการ ตารางอาสาสมัครตามหน้าที่
- **Core MVP:** 1) รายการของ + จำนวนที่เหลือ 2) กดจองบริจาค 3) ตารางอาสา
- **Revenue Model:** ไม่มีโมเดลที่ชัด เสี่ยงทำเงินจากศาสนา — ไอเดียอ่อน
- **Data / API:** Supabase
- **Differentiation:** ปัจจุบันใช้ประกาศใน Facebook/LINE
- **Biggest Risk:** ไม่มีผู้จ่าย ความอ่อนไหวทางศาสนา
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-088 — FloodBoard
- **ID:** IDEA-088
- **Name:** FloodBoard — กระดานเตือนภัยระดับตำบล: รวมประกาศเตือนจากกรมอุตุฯ + รายงานน้ำท่วมถนนจากคนในพื้นที่
- **Category:** Community & Local Services
- **Problem:** คนในพื้นที่ไม่รู้ว่าถนนไหนน้ำท่วม (สมมติฐาน — notes ไม่มีข้อมูลแอปเตือนน้ำท่วม)
- **Target Customer:** ผู้ใช้ = คนในตำบล / ผู้จ่าย = อปท. (B2G) หรือร้านค้าท้องถิ่นเป็นสปอนเซอร์
- **Solution:** ดึงประกาศเตือนภัย + พยากรณ์ 7 วันของจังหวัด แสดงพร้อมรายงานจุดน้ำท่วมจากผู้ใช้ (รูป + เวลา หมดอายุอัตโนมัติ)
- **Core MVP:** 1) ดึง TMD WeatherWarningNews + 7 วัน 2) ปักหมุดรายงานน้ำท่วม + รูป 3) หน้า อปท. ยืนยัน/ปิดรายงาน
- **Revenue Model:** อปท. จ่าย (ASSUMPTION) — การหาเงินจากเหตุภัยพิบัติเสี่ยงภาพลักษณ์
- **Data / API:** TMD API (ควรลงทะเบียน; key/ราคาไม่ยืนยัน), Leaflet + OSM
- **Differentiation:** ไม่มีข้อมูลคู่แข่งใน notes
- **Biggest Risk:** ช่วงน้ำท่วมจริงไฟ/เน็ตอาจล่ม รายงานเท็จ ใช้งานเป็นฤดูกาล
- **Feasibility:** MEDIUM — TMD key อาจไม่ทัน
- **Evidence Status:** VERIFIED (API: [TMD](https://data.tmd.go.th/api/index1.php)) · UNKNOWN (pain/ผู้จ่าย)

#### IDEA-089 — LostFound Local
- **ID:** IDEA-089
- **Name:** LostFound Local — ของหายในตลาด/สถานีขนส่ง/โรงเรียน ลงประกาศและนัดรับคืนอย่างปลอดภัย
- **Category:** Community & Local Services
- **Problem:** ของหายประกาศใน Facebook กระจาย คนเก็บได้ไม่รู้จะส่งที่ไหน (สมมติฐาน — notes ไม่มีข้อมูล)
- **Target Customer:** ผู้ใช้ = คนทำของหาย + คนเก็บได้ / ผู้จ่าย = สถานที่ (ตลาด สถานีขนส่ง) จ่ายค่าระบบ
- **Solution:** สถานที่มีหน้า lost & found ของตัวเอง ผู้ทำหายต้องตอบคำถามยืนยันความเป็นเจ้าของก่อนนัดรับ
- **Core MVP:** 1) ลงของที่เก็บได้ (ซ่อนรายละเอียดสำคัญ) 2) ขอรับคืน + คำถามยืนยัน 3) นัดรับ
- **Revenue Model:** สถานที่จ่ายรายปี (ASSUMPTION — ไม่เห็นเหตุผลชัดว่าสถานที่จะจ่าย)
- **Data / API:** Supabase Storage
- **Differentiation:** กลุ่ม Facebook ฟรี
- **Biggest Risk:** ไม่มีผู้จ่ายที่ชัด ปริมาณใช้งานต่ำ — ไอเดียอ่อน
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-090 — OkayToday
- **ID:** IDEA-090
- **Name:** OkayToday — ผู้สูงวัยที่อยู่คนเดียวกด "วันนี้สบายดี" ทุกเช้า ถ้าไม่กด อสม./เพื่อนบ้านได้รับแจ้งให้ไปดู
- **Category:** Community & Local Services
- **Problem:** สังคมสูงวัย ~18% ผู้สูงวัยอยู่ลำพังมีความเสี่ยงหากเกิดเหตุแล้วไม่มีใครรู้ (ส่วนหลังเป็นสมมติฐาน)
- **Target Customer:** ผู้ใช้ = ผู้สูงวัยอยู่ลำพัง + อาสาสมัคร/เพื่อนบ้าน / ผู้จ่าย = อปท./โรงพยาบาลส่งเสริมสุขภาพตำบล หรือลูกหลาน
- **Solution:** ปุ่มเดียวทุกเช้า → ถ้าไม่กดภายในเวลา ระบบแจ้งผู้ดูแลตามลำดับ (ลูกหลาน → เพื่อนบ้าน → อาสาสมัคร)
- **Core MVP:** 1) หน้าปุ่มใหญ่ฝั่งผู้สูงวัย 2) ลำดับการแจ้งเตือน 3) dashboard ของอาสาสมัคร (ใครยังไม่กดวันนี้)
- **Revenue Model:** อปท. จ่ายแบบรายหัว หรือลูกหลานจ่ายรายเดือน (ASSUMPTION)
- **Data / API:** Supabase, Web Push/อีเมล (LINE push มีโควตา)
- **Differentiation:** ต่างจาก IDEA-070 (กินยา, ฝั่งครอบครัว) ตรงนี้คือความปลอดภัยรายวันฝั่งชุมชน
- **Biggest Risk:** ผู้สูงวัยไม่มี/ไม่ใช้สมาร์ตโฟน แจ้งเตือนผิดพลาดบ่อยจนอาสาเลิกสนใจ ความรับผิดถ้าระบบล่มในวันเกิดเหตุ
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (สังคมสูงวัย: [Time Out/GISTDA](https://www.timeout.com/bangkok/news/thailand-is-now-a-nation-of-grandparents-090225)) · ASSUMPTION (pain/ผู้จ่าย)

### หมวด Wildcard / Unconventional Ideas (IDEA-091 ถึง IDEA-100)

#### IDEA-091 — ซองดิจิทัล
- **ID:** IDEA-091
- **Name:** ซองดิจิทัล — QR ใส่ซองงานแต่ง/งานบวช/งานศพ พร้อมสมุดบันทึกว่าใครให้เท่าไร
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** เจ้าภาพต้องนับซองและจดชื่อเองเพื่อ "ตอบแทน" ภายหลัง แขกที่ไม่ได้มางานอยากร่วมทำบุญ (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = เจ้าภาพ + แขก / ผู้จ่าย = เจ้าภาพจ่ายต่องาน (หรือแพ็กเกจกับผู้รับจัดงาน)
- **Solution:** หน้า "ซอง" ของงาน แขกกรอกชื่อ + ข้อความ + สแกน PromptPay QR ของเจ้าภาพ เจ้าภาพได้สมุดบันทึกรายชื่อ/ยอด
- **Core MVP:** 1) สร้างหน้างาน + QR ไปบัญชีเจ้าภาพ 2) แขกกรอกชื่อ/ยอด/ข้อความ + แนบสลิป 3) สมุดบันทึก export
- **Revenue Model:** เจ้าภาพจ่ายต่องาน เพราะประหยัดเวลาและได้รายชื่อครบ (ASSUMPTION) เงินโอนตรงเข้าเจ้าภาพ แพลตฟอร์มไม่ถือเงิน
- **Data / API:** `promptpay-qr` (QR เปิดเผย PromptPay ID ของเจ้าภาพ — ต้องแจ้ง), SlipOK (ถ้าจะตรวจ)
- **Differentiation:** แขกโอนผ่าน QR ที่เจ้าภาพพิมพ์ไว้อยู่แล้ว (ไม่ได้ตรวจสอบ) จุดต่างคือสมุดบันทึกชื่อ-ยอด
- **Biggest Risk:** วัฒนธรรมบางกลุ่มมองว่าไม่เหมาะ เจ้าภาพไม่อยากจ่ายเพิ่มในงานที่ใช้เงินมากอยู่แล้ว สลิปปลอมในงาน
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION · VERIFIED (ข้อจำกัด QR: [promptpay-qr](https://github.com/dtinth/promptpay-qr))

#### IDEA-092 — QueueProxy
- **ID:** IDEA-092
- **Name:** QueueProxy — จ้างคนในพื้นที่ไปต่อคิวแทน (โรงพยาบาลรัฐ สำนักงานราชการ ร้านดัง) พร้อมอัปเดตสถานะคิว
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** การต่อคิวยาวเสียเวลาทำงาน (สมมติฐาน — notes ไม่มีข้อมูลคิว)
- **Target Customer:** ผู้ใช้ = คนทำงาน/ลูกหลานผู้สูงวัย / ผู้จ่าย = ผู้ว่าจ้างจ่ายรายชั่วโมง แพลตฟอร์มหักคอม
- **Solution:** โพสต์งานต่อคิว → คนรับงานเช็กอินที่จุด ส่งรูปคิว แจ้งเมื่อใกล้ถึง
- **Core MVP:** 1) โพสต์งาน 2) รับงาน + เช็กอิน 3) อัปเดตสถานะ + จ่าย (จำลอง)
- **Revenue Model:** คอมต่องาน (ASSUMPTION)
- **Data / API:** Supabase Realtime
- **Differentiation:** มีคนรับจ้างต่อคิวผ่านโซเชียล (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ประเด็นจริยธรรม/ความเป็นธรรมต่อคนอื่นในคิว โรงพยาบาลหลายแห่งไม่อนุญาตให้ต่อคิวแทน ระบบคิวออนไลน์ของหน่วยงานจะทำให้ไอเดียหมดค่า
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-093 — ProvenanceTag
- **ID:** IDEA-093
- **Name:** ProvenanceTag — ประวัติการซื้อขายของสะสม (พระเครื่อง รองเท้า การ์ด) ผูกกับ QR ที่เจ้าของโอนสิทธิ์ต่อได้
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** ตลาดของสะสมมือสองมีของปลอม ผู้ซื้อไม่รู้ประวัติ (สมมติฐาน — ไม่มีข้อมูล)
- **Target Customer:** ผู้ใช้ = นักสะสม / ผู้จ่าย = ร้านของสะสมที่ออกใบรับประกันจ่ายต่อแท็ก
- **Solution:** ร้านออกแท็ก QR + รูป + รายละเอียด เมื่อขายต่อ เจ้าของเดิมกดโอนสิทธิ์ให้เจ้าของใหม่ บันทึกประวัติทุกทอด
- **Core MVP:** 1) ร้านสร้างแท็ก 2) หน้าตรวจสอบจาก QR 3) โอนสิทธิ์ระหว่างบัญชี
- **Revenue Model:** ร้านจ่ายต่อแท็ก เพราะเพิ่มความเชื่อมั่นของลูกค้า (ASSUMPTION)
- **Data / API:** Supabase (ไม่จำเป็นต้องใช้ blockchain)
- **Differentiation:** ไม่มีข้อมูลคู่แข่ง
- **Biggest Risk:** QR ไม่ได้พิสูจน์ว่าของชิ้นนั้นเป็นของจริง (คัดลอก QR ไปติดของปลอมได้) จึงแก้ปัญหาไม่ได้จริง
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-094 — FamilyVault
- **ID:** IDEA-094
- **Name:** FamilyVault — พ่อแม่จดรายการบัญชี ประกัน หนี้ และผู้ติดต่อสำคัญ ให้ลูกเปิดดูได้เมื่อจำเป็น
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** เมื่อพ่อแม่สูงวัยป่วยหนัก/เสียชีวิต ลูกไม่รู้ว่ามีบัญชีหรือประกันที่ไหน (สมมติฐาน) ในบริบทสังคมสูงวัย 18%
- **Target Customer:** ผู้ใช้ = พ่อแม่สูงวัย + ลูก / ผู้จ่าย = ลูกจ่ายรายปี หรือบริษัทประกัน/ทนายให้เป็นบริการเสริม
- **Solution:** แบบฟอร์มนำทาง (ธนาคาร ประกัน ที่ดิน หนี้ ผู้ติดต่อ) — ไม่เก็บรหัสผ่าน — แชร์ให้ผู้รับที่กำหนดตามเงื่อนไข
- **Core MVP:** 1) แบบฟอร์มรายการทรัพย์สิน (ไม่มีรหัสผ่าน) 2) กำหนดผู้รับ 3) ปลดล็อกเมื่อผู้ดูแล 2 คนยืนยัน
- **Revenue Model:** ลูกจ่ายรายปี หรือบริษัทประกันซื้อ license (ASSUMPTION)
- **Data / API:** Supabase + การเข้ารหัสฝั่ง client
- **Differentiation:** ทำได้ด้วยสมุด/ไฟล์ส่วนตัวฟรี จุดต่างคือ checklist ครบและการปลดล็อกแบบมีเงื่อนไข
- **Biggest Risk:** ข้อมูลการเงินอ่อนไหวสูง ทีมนักเรียนรับประกันความปลอดภัยไม่ได้ ความน่าเชื่อถือคือทุกอย่างของธุรกิจนี้
- **Feasibility:** MEDIUM — การเข้ารหัสและเงื่อนไขปลดล็อกต้องรัดกุม
- **Evidence Status:** ASSUMPTION · VERIFIED เฉพาะบริบทสูงวัย ([Time Out/GISTDA](https://www.timeout.com/bangkok/news/thailand-is-now-a-nation-of-grandparents-090225))

#### IDEA-095 — LangSwap Café
- **ID:** IDEA-095
- **Name:** LangSwap Café — จับคู่นักท่องเที่ยวคนเที่ยวยาวกับนักศึกษาไทยฝึกภาษา นัดที่คาเฟ่พาร์ตเนอร์
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** คนเที่ยวยาว/ผู้ถือ DTV อยากรู้จักคนท้องถิ่น นักศึกษาไทยอยากฝึกภาษา (สมมติฐาน) — หมายเหตุ: DTV ตัดสายเรียนภาษาไทยออกตั้งแต่ 2025
- **Target Customer:** ผู้ใช้ = ชาวต่างชาติ + นักศึกษาไทย / ผู้จ่าย = คาเฟ่จ่ายเพื่อเป็นสถานที่นัด (ได้ลูกค้า) — ASSUMPTION
- **Solution:** เลือกภาษาที่จะแลก เวลา คาเฟ่ → จับคู่เป็นกลุ่ม 4 คน (ปลอดภัยกว่าคู่) → เช็กอินที่คาเฟ่ได้ส่วนลด
- **Core MVP:** 1) โปรไฟล์ภาษา + เวลา 2) จับคู่กลุ่ม 3) QR เช็กอินคาเฟ่ + ส่วนลด
- **Revenue Model:** คาเฟ่จ่ายต่อกลุ่มที่มาจริง (ASSUMPTION)
- **Data / API:** Supabase
- **Differentiation:** แอปแลกภาษาออนไลน์มีอยู่ (ไม่ได้ตรวจสอบ) จุดต่างคือพบกันจริงที่คาเฟ่
- **Biggest Risk:** ความปลอดภัยในการนัดพบคนแปลกหน้า (โดยเฉพาะผู้เยาว์) ใช้ครั้งเดียวแล้วติดต่อกันเอง
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (DTV ตัดสายเรียนภาษาไทย: [Thaiger](https://thethaiger.com/guides/visa-information/thailand-digital-nomad-visa)) · ASSUMPTION (pain/ผู้จ่าย)

#### IDEA-096 — สังฆทานถึงวัด
- **ID:** IDEA-096
- **Name:** สังฆทานถึงวัด — คนเมืองสั่งชุดถวายจากร้านใกล้วัดบ้านเกิด ร้านนำส่งและส่งรูปยืนยัน
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** คนทำงานในเมืองอยากทำบุญวันเกิด/วันครบรอบที่วัดบ้านเกิดแต่กลับไม่ได้ (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = คนทำงานต่างถิ่น / ผู้จ่าย = ผู้สั่งจ่ายค่าชุด + ค่าส่ง แพลตฟอร์มหักคอมจากร้าน
- **Solution:** เลือกวัด → เลือกชุดถวายที่วัดต้องการจริง (ไม่ซ้ำซ้อน) → ร้านใกล้วัดนำส่ง ถ่ายรูปยืนยัน
- **Core MVP:** 1) รายชื่อวัด + ร้านพาร์ตเนอร์ (seed) 2) สั่ง + จ่าย (จำลอง) 3) ร้านอัปโหลดรูปยืนยัน
- **Revenue Model:** คอมต่อออเดอร์ (ASSUMPTION)
- **Data / API:** Supabase Storage
- **Differentiation:** ทำบุญออนไลน์ผ่านการโอนให้วัดมีอยู่ทั่วไป (ไม่ได้ตรวจสอบ) จุดต่างคือของจริงที่วัดต้องการ
- **Biggest Risk:** ความอ่อนไหวทางศาสนา (ถูกมองว่าเป็น "พุทธพาณิชย์") ความเชื่อใจว่าร้านส่งจริง
- **Feasibility:** HIGH
- **Evidence Status:** UNKNOWN

#### IDEA-097 — BuskQR
- **ID:** IDEA-097
- **Name:** BuskQR — หน้ารับทิปของนักดนตรีเปิดหมวก/ศิลปินข้างถนน แสดงยอดหลายสกุลเงินสำหรับนักท่องเที่ยว
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** นักท่องเที่ยวไม่พกเงินสดบาท ศิลปินเปิดหมวกได้ทิปน้อยลง (สมมติฐาน)
- **Target Customer:** ผู้ใช้ = ศิลปินเปิดหมวก + ผู้ชม / ผู้จ่าย = ศิลปินยอมให้หักเปอร์เซ็นต์เล็กจากทิปที่ได้ผ่านบัตร
- **Solution:** ป้าย QR → หน้าศิลปิน (เพลง ผลงาน) + ปุ่มทิปที่แสดงเป็นสกุลเงินผู้ชม คนไทยจ่าย PromptPay ต่างชาติจ่ายบัตร
- **Core MVP:** 1) หน้าศิลปิน + QR 2) ปุ่มทิป (PromptPay QR / Stripe test mode = จำลอง) 3) สรุปยอดทิปรายวัน
- **Revenue Model:** หักเปอร์เซ็นต์เล็กจากทิปผ่านบัตร (ต้นทุน Stripe บัตรต่างประเทศ 4.75% + ฿10 ทำให้ทิปเล็กไม่คุ้ม) — ASSUMPTION
- **Data / API:** `promptpay-qr`, Stripe TH, Frankfurter
- **Differentiation:** ศิลปินวาง QR พร้อมเพย์ของตัวเองได้ฟรี จุดต่างคือรับบัตรต่างชาติ
- **Biggest Risk:** ค่าธรรมเนียมบัตร + ฿10 ต่อรายการกินทิปเล็กเกือบหมด การเปิดบัญชี Stripe สำหรับผู้เยาว์/ไม่มีนิติบุคคลไม่ยืนยัน
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (ค่าธรรมเนียม: [Stripe TH](https://stripe.com/th/pricing)) · ASSUMPTION (pain)

#### IDEA-098 — ExpatExit Sale
- **ID:** IDEA-098
- **Name:** ExpatExit Sale — หน้าขายของยกบ้านสำหรับชาวต่างชาติที่ต้องย้ายออก ขายให้คนท้องถิ่นแบบเหมา/ทีละชิ้น
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** กฎวีซ่าฟรีสั้นลงเหลือ 30 วัน และอัตราปฏิเสธ DTV สูงขึ้น ชาวต่างชาติบางส่วนต้องย้ายออกเร็ว ขายของไม่ทัน (ส่วนหลังเป็นสมมติฐาน)
- **Target Customer:** ผู้ใช้ = ชาวต่างชาติที่ย้ายออก + คนไทยผู้ซื้อ / ผู้จ่าย = ผู้ขายจ่ายค่าลงประกาศแบบเหมาหน้า
- **Solution:** ถ่ายรูปทุกชิ้นในหน้าเดียว ตั้งวันส่งมอบสุดท้าย ผู้ซื้อจองทีละชิ้นหรือเหมา ราคาลดอัตโนมัติเมื่อใกล้วันย้าย
- **Core MVP:** 1) หน้าขายรวมทุกชิ้น + วันส่งมอบ 2) จอง + นัดรับ 3) ลดราคาอัตโนมัติตามเวลา
- **Revenue Model:** ผู้ขายจ่ายค่าหน้าเหมาครั้งเดียว เพราะต้องขายให้หมดก่อนวันบิน (ASSUMPTION)
- **Data / API:** Supabase
- **Differentiation:** Facebook Marketplace/กลุ่ม expat ลงฟรี (KTC ระบุว่า FB Marketplace ไม่มีค่าธรรมเนียม) จุดต่างคือรูปแบบ "ยกบ้าน" + ลดราคาตามเวลา
- **Biggest Risk:** ทางเลือกฟรีเพียงพอ ตลาดเล็กและเป็นครั้งเดียวต่อผู้ใช้
- **Feasibility:** HIGH
- **Evidence Status:** VERIFIED (กฎวีซ่า: [TAT News](https://www.tatnews.org/2026/09/thailand-introduces-new-30-day-and-15-day-visa-exemption-rules-from-15-september/); DTV: [Thaiger](https://thethaiger.com/guides/visa-information/thailand-digital-nomad-visa); ตลาดฟรี: [KTC](https://www.ktc.co.th/article/knowledge/business/8-second-hand-marketplace-atpb)) · ASSUMPTION (pain)

#### IDEA-099 — SolarCheck Lead
- **ID:** IDEA-099
- **Name:** SolarCheck Lead — กรอกค่าไฟ + ขนาดหลังคา ได้ระยะคืนทุนโซลาร์รูฟโดยประมาณ แล้วส่งต่อช่างติดตั้งในพื้นที่
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** เจ้าของบ้านไม่รู้ว่าติดโซลาร์คุ้มไหม (สมมติฐาน) ผู้ให้บริการช่างอย่าง ProChang รับงานโซลาร์อยู่ แสดงว่ามีตลาด
- **Target Customer:** ผู้ใช้ = เจ้าของบ้าน / ผู้จ่าย = ผู้ติดตั้งจ่ายค่า lead
- **Solution:** กรอกบิลค่าไฟ 3 เดือน + พื้นที่หลังคา → ประมาณขนาดระบบ ระยะคืนทุน → ส่ง lead ไปผู้ติดตั้ง 2–3 ราย
- **Core MVP:** 1) ฟอร์ม + สูตรประมาณ 2) ผลระยะคืนทุน + สมมติฐานที่ใช้ 3) ส่ง lead
- **Revenue Model:** ผู้ติดตั้งจ่ายต่อ lead เพราะงานโซลาร์มูลค่าสูง (ASSUMPTION — ไม่มีข้อมูลราคา lead)
- **Data / API:** ข้อมูลรังสีแสงอาทิตย์/ราคาระบบ/ค่าไฟต่อหน่วย **ไม่ได้ตรวจสอบ** ทั้งหมด
- **Differentiation:** ผู้ติดตั้งหลายรายมีเครื่องคำนวณของตัวเอง (ไม่ได้ตรวจสอบ)
- **Biggest Risk:** ตัวเลขประมาณผิดทำให้ผู้ใช้ตัดสินใจผิด ทีมไม่มีข้อมูลต้นทุนจริง ผู้ติดตั้งไม่ซื้อ lead จากเว็บใหม่
- **Feasibility:** HIGH (ระบบ) / ข้อมูลอ่อน
- **Evidence Status:** VERIFIED (มีผู้ให้บริการโซลาร์: [ฐานเศรษฐกิจ](https://www.thansettakij.com/technology/670426)) · UNKNOWN (ข้อมูลคำนวณทั้งหมด)

#### IDEA-100 — PreSale Test Kit
- **ID:** IDEA-100
- **Name:** PreSale Test Kit — สร้างหน้าเปิดจองสินค้าก่อนผลิต + รับมัดจำเล็กน้อย เพื่อทดสอบว่ามีคนอยากซื้อจริงไหม
- **Category:** Wildcard / Unconventional Ideas
- **Problem:** นักเรียน/ผู้เริ่มขายของลงทุนผลิตก่อนแล้วขายไม่ออก (สมมติฐาน) — เป็นปัญหาเดียวกับที่รายงานนี้เจอ: ไม่มีหลักฐาน "ยอมจ่าย"
- **Target Customer:** ผู้ใช้และผู้จ่าย = ผู้เริ่มธุรกิจรายย่อย นักเรียนชมรมผู้ประกอบการ ร้านที่จะออกสินค้าใหม่
- **Solution:** ทำหน้าเปิดจอง 1 หน้า (รูป ราคา จำนวนเป้าหมาย) รับมัดจำผ่าน PromptPay ถ้าไม่ถึงเป้าภายในวันที่กำหนด แสดงสถานะ "คืนเงิน"
- **Core MVP:** 1) ตัวสร้างหน้าเปิดจอง 2) จอง + มัดจำ PromptPay (จำลอง) + ตัวนับเป้าหมาย 3) dashboard อัตราคนเข้า → คนจอง
- **Revenue Model:** จ่ายต่อแคมเปญ หรือหักเปอร์เซ็นต์เมื่อถึงเป้า (ASSUMPTION)
- **Data / API:** `promptpay-qr`, Supabase
- **Differentiation:** แพลตฟอร์ม crowdfunding มีอยู่ (ไม่ได้ตรวจสอบ) จุดต่างคือแคมเปญเล็กมาก ตั้งได้ในนาที
- **Biggest Risk:** การคืนเงินเมื่อไม่ถึงเป้าต้องทำด้วยมือ (แพลตฟอร์มไม่ถือเงิน) ความเชื่อใจของผู้จอง ใช้ซ้ำน้อย
- **Feasibility:** HIGH
- **Evidence Status:** ASSUMPTION

---

## Phase 4 — Diversity check: รวม/แทนที่ไอเดียซ้ำ 10 รายการ และเก็บไอเดียอ่อนไว้ทั้งหมด

ระหว่างร่าง มีไอเดียที่ซ้ำกันใน pain, workflow หรือลูกค้า จึงรวมหรือแทนที่ตามตารางด้านล่าง ไม่มีไอเดียไหนถูกลบทิ้งโดยไม่บันทึก

| ไอเดียที่ร่างไว้เดิม | ซ้ำกับ | สิ่งที่ทำ |
|---|---|---|
| ไดเรกทอรีรีวิวร้านเช่ามอเตอร์ไซค์ | IDEA-003 (pain เดียวกัน) | รวมเข้า IDEA-003 ในรูป badge |
| จองคลาสทำอาหาร/มวยไทยแบบรายวัน | IDEA-008 | รวมเข้า IDEA-008 |
| เช็กลิสต์ก่อนเดินทาง (SIM, รถรับส่ง, TDAC) | IDEA-007 | รวมเข้า IDEA-007 (ส่วนเตือน TDAC) |
| สติกเกอร์ "ร้านราคาเป็นธรรม" | IDEA-009 | รวมเข้า IDEA-009 (ราคาที่ร้านยืนยัน) |
| จับคู่ติวเตอร์ออนไลน์ให้เด็กต่างจังหวัด | IDEA-030 | แทนที่ด้วย IDEA-076 EventCrew |
| รับประกันคืนเงินถ้าฝนตกสำหรับทัวร์ | IDEA-011 | แทนที่ด้วย IDEA-099 SolarCheck Lead |
| ครัวรวมหลายแผงส่งในออเดอร์เดียว | IDEA-036, IDEA-042 | แทนที่ด้วย IDEA-097 BuskQR |
| ลิงก์นัดหมาย + มัดจำสำหรับมืออาชีพเดี่ยว | IDEA-048 | แทนที่ด้วย IDEA-055 ReorderBot |
| ซื้อผลไม้แบบกลุ่มในคอนโด | IDEA-050, IDEA-080 | แทนที่ด้วย IDEA-096 สังฆทานถึงวัด |
| บันทึกการออมทอง | IDEA-061/062 + ไม่มีข้อมูล | แทนที่ด้วย IDEA-070 MedBuddy Family |

**คู่ที่ยังใกล้กันแต่เก็บไว้** เพราะลูกค้าหรือ workflow ต่างกันพอ (AI ตัวถัดไปควรตรวจซ้ำ): IDEA-001/020 (เช็กราคา vs แจ้งเหตุ), IDEA-004/018 (จอง vs คอนเทนต์), IDEA-039/084/085 (ตรวจสลิปและบิลในบริบทหอ/คอนโด/หมู่บ้าน), IDEA-050/080 (B2C ตามฤดู vs B2B รายสัปดาห์), IDEA-061/062 (ก่อนก่อหนี้ vs ปิดหนี้), IDEA-051/053 (ออกเอกสาร vs เก็บเอกสาร), IDEA-003/074 (บันทึกสภาพ: ร้านเช่ารถ vs P2P), IDEA-063/069/079 (ตรวจผู้ขาย vs ตรวจงาน vs พักเงิน), IDEA-070/090 (ครอบครัว vs ชุมชน), IDEA-013/068 (หารเงินทริป vs ค่าน้ำไฟ)

**ไอเดียอ่อนที่เก็บไว้โดยตั้งใจ** (เพื่อให้ AI ตัวถัดไปเห็นและปฏิเสธได้): IDEA-013 (ไม่มีจุดต่างจาก Splitwise), IDEA-017 (ใช้ปีละครั้ง), IDEA-031 (ไม่มีผู้จ่าย), IDEA-040 (ไม่ยืนยันว่ามีรอบปี 2026), IDEA-054 (พึ่ง "ใช้ AI" เป็นจุดขาย), IDEA-067 (ไม่มี pain/ผู้จ่าย/จุดต่าง), IDEA-068 (เป็นแค่ feature), IDEA-087 (ไม่มีผู้จ่าย + ศาสนา), IDEA-089 (ไม่มีผู้จ่าย), IDEA-093 (QR ไม่ได้พิสูจน์ของจริง)

---

## Final requirement — 4 รายการสรุป (ไม่มีไอเดียไหนชนะแน่นอน)

### 1) 10 ไอเดียที่มีโอกาสทำ MVP สำเร็จสูงสุดใน 1.5 วัน

| ID | เหตุผลหนึ่งบรรทัด |
|---|---|
| IDEA-037 TrueProfit | เป็นเครื่องคำนวณล้วน ไม่มี API ภายนอก ตัวเลขค่าธรรมเนียมมีแหล่งอ้างอิง Demo 60 วินาทีชัด |
| IDEA-038 VAT Radar | ฟอร์ม + กราฟสะสม + เกณฑ์ 1.8 ล้านที่ยืนยันแล้ว ไม่มีส่วนที่ต้องรอใคร |
| IDEA-061 ผ่อนจริงเท่าไร | สูตรการเงินล้วน ข้อมูล pain แข็ง Demo เปรียบเทียบตัวเลือกเห็นผลทันที |
| IDEA-036 OwnOrder | QR เมนู + `promptpay-qr` + Supabase Realtime เป็น stack ที่ยืนยันแล้วว่าฟรี |
| IDEA-009 MenuBridge | ฟอร์มเมนู + หน้า QR + FX ไม่ต้องใช้ key ถ้าแปลไม่ทันก็ใส่คำแปลเองได้ |
| IDEA-004 HomestayDirect | CRUD + ปฏิทิน + PromptPay QR ไม่มีส่วนเสี่ยงทางเทคนิค |
| IDEA-003 BikeProof | upload รูป + timestamp ฝั่ง server + หน้าเทียบ เป็นงานที่ AI-assisted coding ช่วยได้มาก |
| IDEA-051 FreelanceDocs | ฟอร์ม + PDF + คำนวณ WHT ขอบเขตแคบ |
| IDEA-081 WasteBank Ledger | ตารางสมาชิก + บันทึกการฝาก + รายงาน ไม่มี API ภายนอก |
| IDEA-007 StayCount TH | rule engine เล็กจากประกาศ TAT ที่ยืนยันแล้ว + ปฏิทิน .ics |

### 2) 10 ไอเดียที่ Business Model น่าเชื่อถือที่สุด (ตามหลักฐานว่าลูกค้ากลุ่มนี้จ่ายสิ่งที่คล้ายกันอยู่แล้ว — ไม่ใช่หลักฐานว่าจะจ่ายให้ทีมนี้)

| ID | เหตุผลหนึ่งบรรทัด |
|---|---|
| IDEA-036 OwnOrder | ร้านจ่าย GP 30–35% อยู่แล้ว ([Grab](https://www.grab.com/th/merchant-blog/gp-คืออะไร/)) ค่าบริการคงที่เทียบเงินที่ประหยัดได้ชัด |
| IDEA-039 RentSlip | มีตลาดตรวจสลิปแบบจ่ายรายเดือนอยู่แล้ว (SlipOK 350 บาท/500 สลิป) และมีคดีความเสียหายจริง |
| IDEA-004 HomestayDirect | host จ่ายค่าธรรมเนียม OTA ~15.5% อยู่แล้ว เครื่องมือที่ถูกกว่ามีเหตุผลด้านราคา |
| IDEA-014 RoomQR Concierge | โมเดลคอมมิชชันกิจกรรมท่องเที่ยวมีจริง (2–8% ถึง ~30%) และไม่ต้องเก็บเงินจากแขกเพิ่ม |
| IDEA-008 SoftPower School Finder | ลูกค้า 6 เดือนมีมูลค่าสูงต่อราย ค่า lead จึงมีเหตุผล (แต่ตลาด DTV อาจหด) |
| IDEA-071 StudentGig Studio | ค่าคอม 17% ของ Fastwork เป็น benchmark ที่ยืนยันแล้ว ฟรีแลนซ์กังวลเรื่อง fee จริง |
| IDEA-072 PetSitter Near | ตลาดบริการดูแลสัตว์โต ~20%/ปี เจ้าของจ่ายต่อสัตว์ปีละ ~50,500 บาท (กลุ่ม "สมาชิกครอบครัว") |
| IDEA-084 CondoDesk Lite | นิติบุคคลใช้แอปอยู่แล้วแต่ไม่พอใจ UI ([วารสารสารศาสตร์](https://so05.tci-thaijo.org/index.php/sarasatr/article/view/273370)) ผู้จ่ายเป็นองค์กร ไม่ใช่รายบุคคล |
| IDEA-058 DocChase | สำนักงานบัญชีเป็นธุรกิจ B2B ที่มีลูกค้า SME 3.28 ล้านรายเป็นฐาน (การยอมจ่ายเป็น ASSUMPTION) |
| IDEA-042 OfficeLunch Batch | ทั้งร้าน (จ่ายต่ำกว่า GP) และผู้สั่ง (หารค่าส่ง) มีเหตุผลจ่าย แต่ต้องมี operation ส่งจริง |

### 3) 10 ไอเดียที่ดูดีแต่มีความเสี่ยงซ่อนอยู่

| ID | ความเสี่ยงที่ซ่อนอยู่ |
|---|---|
| IDEA-001 FareCheck TH | pain แข็งที่สุดในชุด แต่ไม่มีอัตรามิเตอร์ยืนยันและไม่มีผู้จ่ายที่ชัด |
| IDEA-036 OwnOrder | ร้านอยากประหยัด GP แต่ลูกค้าอาจไม่ย้ายช่องทาง และ LINE MAN ลด GP เหลือ 7–9% ช่วงโครงการรัฐ |
| IDEA-010 MuangRong Day Pass | ตรงกับนโยบายรัฐ (อาจได้ Bonus) แต่แข่งกับ TAGTHAi ที่รัฐผลักดันเป็น one-stop platform |
| IDEA-006 Island Hop Planner | ฟังเหมาะกับสุราษฎร์ฯ แต่ไม่มี API ตารางเรือ/ที่นั่งว่าง จึงแก้ปัญหา "เรือเต็ม" ไม่ได้ |
| IDEA-026 TCAS Round Planner | pain และขนาดตลาดยืนยันแล้ว แต่เกณฑ์เปลี่ยนทุกปี ข้อมูลผิด = นักเรียนพลาดรอบจริง |
| IDEA-063 SellerCheck | ปัญหาโกงใหญ่มาก แต่การเผยแพร่เลขบัญชี/รายงานเท็จเสี่ยงหมิ่นประมาทและ PDPA |
| IDEA-079 SafeDeal | Demo สวย แต่การถือเงินคนอื่นน่าจะต้องมีใบอนุญาต (ไม่ได้ตรวจสอบ) ทำจริงไม่ได้ |
| IDEA-073 CareHour | ตลาดสูงวัยใหญ่ แต่ความปลอดภัยและการคัดกรองผู้ดูแลเป็นภาระที่ทีมนักเรียนรับไม่ได้ |
| IDEA-064 ContractLens | pain ชัดจากกรณีจริง แต่เป็นการให้คำแนะนำกฎหมาย และไม่มีผู้จ่าย |
| IDEA-040 CoPay Ready | ผูกกับโครงการรัฐที่ไม่ยืนยันว่ามีรอบปี 2026 |

### 4) สมมติฐานสำคัญที่ยังต้องตรวจสอบ

| # | สมมติฐาน | กระทบไอเดีย | วิธีตรวจ |
|---|---|---|---|
| A1 | งานนี้ใช้เกณฑ์ 20/30/30/20 จริง และมี Bonus ท่องเที่ยว (น้ำหนักเท่าไร) | หมวด Tourism ทั้ง 25 ข้อ | ถามผู้จัดเป็นลายลักษณ์อักษร |
| A2 | ลูกค้า B2B (ร้านอาหาร, homestay, เจ้าของหอ, นิติบุคคล) ยอมจ่ายรายเดือนในราคาที่ตั้ง | 004, 036, 039, 084 ฯลฯ | สัมภาษณ์กลุ่มละ 5 รายก่อนวันงาน ถามว่าเคยจ่ายอะไรอยู่ |
| A3 | ลูกค้าประจำของร้านยอมย้ายมาสั่งช่องทางตรง | 036, 042 | ถามลูกค้าหน้าร้านจริง |
| A4 | TAT Data API อนุมัติ key ทันและ limit พอ | 010, 022 | สมัครวันนี้ ([tatdataapi.io](https://tatdataapi.io/)) สำรองด้วย OSM |
| A5 | อัตรามิเตอร์แท็กซี่ทางการ | 001 | หาประกาศกรมการขนส่งทางบก |
| A6 | นักเรียน/ผู้เยาว์ใช้ SlipOK API และเปิดบัญชี Stripe ได้ | 034, 039, 085, 097 | สมัคร free tier ล่วงหน้า; ถ้าไม่ได้ให้ระบุว่าจำลอง |
| A7 | Typhoon OCR อ่านบิล/ใบเสร็จภาษาไทยแม่นพอ และ limit OCR พอ | 044, 052, 064 | ทดสอบกับบิลจริง 20 ใบ cache ผลไว้สำหรับ Demo |
| A8 | มีโครงการคนละครึ่ง/เมืองรองรอบปี 2026 | 010, 040 | ตรวจข่าวทางการล่าสุด |
| A9 | LLM free tier พอใช้วันตัดสิน และไม่ส่งข้อมูลส่วนตัว | 018, 035, 049, 054, 069 | Gemini ไม่มีตัวเลขทางการ ([Gemini](https://ai.google.dev/gemini-api/docs/rate-limits)); เตรียม Typhoon/Groq/rule-based สำรอง |
| A10 | ประเด็นกฎหมาย: การพักเงิน, การให้คำแนะนำกฎหมาย/ภาษี, PDPA ผู้เยาว์, การเผยแพร่ข้อมูลผู้โกง | 007, 038, 063, 064, 079 | ปรึกษาผู้รู้ก่อน pitch และใส่ disclaimer |
| A11 | ต้นทุนเมื่อใช้เชิงพาณิชย์: Vercel Hobby ห้ามใช้เชิงพาณิชย์, Supabase Pro $25/เดือน, LINE push เกินโควตามีค่าใช้จ่าย | ทุกไอเดีย | ใส่ในสไลด์ cost ([Supabase](https://supabase.com/pricing), [Vercel](https://vercel.com/docs/plans/hobby), [LINE](https://lineforbusiness.com/th/service/line-oa-features/broadcast-message)) |
| A12 | pain ของ homestay ยังเป็นจริงในปี 2026 (หลักฐานเป็นปี 2020) และ GP ปัจจุบันของ LINE MAN (หลักฐานปี 2021) | 004, 018, 036 | หาข้อมูลใหม่หรือสัมภาษณ์ |

---

## Conclusion

ภาพที่ได้จากการคัดกรองคือ "pain ที่ยืนยันได้" กับ "คนที่ยอมจ่าย" มักเป็นคนละกลุ่มกัน: นักท่องเที่ยว ผู้เป็นหนี้ และผู้สูงวัยมีปัญหาที่มีตัวเลขแข็ง แต่ไม่ใช่คนจ่าย ส่วนร้านอาหาร เจ้าของหอ และ host มีหลักฐานว่าจ่ายค่าธรรมเนียมหรือ SaaS อยู่แล้ว ไอเดียที่ทนต่อการคัดค้านได้ดีจึงมักเป็น B2B แคบ ๆ ที่ "ถูกกว่าสิ่งที่จ่ายอยู่" มากกว่าไอเดียสังคมที่ฟังดูดี ในเกณฑ์ที่ให้น้ำหนัก Product Completeness + Business Feasibility รวม 60 คะแนน (ถ้าเกณฑ์นี้ใช้จริง) การเลือกไอเดียที่ทั้ง Feasibility HIGH และมีผู้จ่ายที่จ่ายของคล้ายกันอยู่แล้ว (เช่น IDEA-036, 039, 004) มีเหตุผลกว่าการไล่ Bonus ท่องเที่ยวที่ยังไม่ยืนยัน

ขั้นต่อไปที่ให้ข้อมูลมากที่สุดไม่ใช่การเขียนโค้ด แต่คือการได้คำตอบของ A1 (เกณฑ์/Bonus จริง) และ A2 (สัมภาษณ์ผู้จ่าย 5 ราย) เพราะสองข้อนี้เปลี่ยนลำดับไอเดียได้มากกว่าข้อมูลอื่นทั้งหมด และหลักฐานจากการสัมภาษณ์จริงยังใช้เป็นสไลด์ "Problem & Business Opportunity" ได้ทันที ซึ่งเป็นสิ่งที่ notes ชุดนี้ยังไม่มีสำหรับไอเดียใดเลย

---

## Sources

**ท่องเที่ยว**
- [Malay Mail — Mastercard tourist scam study (May 2025)](https://malaymail.com/news/life/2025/05/21/bangkok-cancun-and-hanoi-top-global-list-for-tourist-scams-mastercard-study-finds/177612)
- [Khaosod English — Thailand ranks third in Reddit taxi-scam complaints (Feb 2026)](https://www.khaosodenglish.com/news/2026/02/23/thailand-ranks-third-in-reddit-complaints-on-taxi-scams-uk-insurer-finds/)
- [Khaosod English — Samui/Phangan New Year surge (Dec 2025)](https://www.khaosodenglish.com/tourism/2025/12/28/samui-phangan-brace-for-tourism-surge-ahead-of-new-years-eve/)
- [World Nomads — Riding motorbikes in Thailand (Sep 2025)](https://worldnomads.com/travel-safety/southeast-asia/thailand/riding-motorbikes-in-thailand-what-are-the-rules)
- [วารสารการบริการและการท่องเที่ยวไทย — homestay social media (2020)](https://so04.tci-thaijo.org/index.php/tourismtaat/article/download/240161/163734/825276)
- [TAT News — 30-day/15-day visa exemption rules (Sep 2026)](https://www.tatnews.org/2026/09/thailand-introduces-new-30-day-and-15-day-visa-exemption-rules-from-15-september/)
- [Thaiger — DTV guide (Jul 2026)](https://thethaiger.com/guides/visa-information/thailand-digital-nomad-visa)
- [TAT Data API](https://tatdataapi.io/)
- [data.go.th — International Tourist Arrivals dataset](https://gdcc.data.go.th/en/dataset/international-tourist-arrivals-to-thailand-2021)
- [ฐานเศรษฐกิจ — มาตรการท่องเที่ยว (Nov 2025)](https://www.thansettakij.com/business/tourism/644206)
- [Wego — Thailand entry fee status (May 2026)](https://blog.wego.com/thailand-tourist-entry-fee-2026/)
- [PRD — TAGTHAi national platform (Aug 2026)](https://thailand.prd.go.th/en/content/category/detail/id/2078/iid/536369)
- [The Nation — arrivals Jan–Aug 2026](https://www.nationthailand.com/business/40070737)
- [Hostfully — Airbnb host fees](https://www.hostfully.com/blog/airbnb-host-fees/)
- [Track360 — tours/activities affiliate programs (Jun 2026)](https://track360.io/blog/tours-activities-experiences-affiliate-programs-operator-guide-2026)

**SME / ภาษี / การชำระเงิน**
- [Grab merchant blog — GP คืออะไร](https://www.grab.com/th/merchant-blog/gp-คืออะไร/)
- [Wongnai for Business — delivery GP](https://www.wongnai.com/business-owners/delivery-gross-profit)
- [Brand Inside — LINE MAN GP 7–9% (Oct 2025)](https://brandinside.asia/?p=234699)
- [Khaosod English — foodpanda exits Thailand](https://www.khaosodenglish.com/news/business/2025/04/23/foodpanda-exits-thailands-food-delivery-market-after-years-of-losses/)
- [KrASIA — LINE MAN share and IPO (Jun 2026)](https://amp.kr-asia.com/thailands-line-man-pushes-beyond-food-delivery-eyes-2027-ipo)
- [กรุงเทพธุรกิจ — fake slip case (Jul 2026)](https://www.bangkokbiznews.com/news/news-update/1241837)
- [Marketeer — SlipOK fake slip claims (2024)](https://marketeeronline.co/archives/342421)
- [กรมสรรพากร — VAT registration](https://rd.go.th/7061.html)
- [InfoQuest — e-Tax Invoice by Time Stamp (Jan 2025)](https://www.infoquest.co.th/?p=462192)
- [Forvis Mazars — e-WHT reduced rate](https://forvismazars.com/th/en/insights/doing-business-in-thailand/tax/extension-withholding-tax-reduction)
- [FlowAccount blog — Shopee/Lazada/TikTok fees (Aug 2026)](https://flowaccount.com/blog/commission-fees-ecommerce-shopee-lazada-tiktok/)
- [ฐานเศรษฐกิจ — คนละครึ่งพลัส merchant onboarding (Oct 2025)](https://www.thansettakij.com/economy/641340)
- [BOT SME Snapshot Q2 2026 (PDF)](https://www.bot.or.th/content/dam/bot/documents/th/financial-innovation/การเงินเพื่อครัวเรือนและ-sme/sme/SME_snapshort_Q2_2569.pdf)
- [ฐานเศรษฐกิจ — OSMEP SME GDP share (Sep 2026)](https://www.thansettakij.com/economy/668484)
- [LINE for Business TH — OA plans](https://lineforbusiness.com/th/service/line-oa-features/broadcast-message)
- [FlowAccount pricing](https://flowaccount.com/pricing)
- [Loyverse pricing](https://loyverse.com/pricing)
- [SlipOK](https://slipok.com/)
- [Typhoon OCR (Hugging Face)](https://huggingface.co/scb10x/typhoon-ocr-3b)
- [dtinth/promptpay-qr](https://github.com/dtinth/promptpay-qr)
- [LINE Messaging API pricing](https://developers.line.biz/en/docs/messaging-api/pricing/)
- [LINE LIFF overview](https://developers.line.biz/en/docs/liff/overview/)
- [Stripe Thailand pricing](https://stripe.com/th/pricing)

**นักเรียน / ผู้บริโภค / marketplace / ชุมชน**
- [MGR Online — TCAS69 figures (Jun 2026)](https://mgronline.com/qol/detail/9690000059956)
- [Mitihoon — TCAS70 pain points (Aug 2026)](https://www.mitihoon.com/2026/08/04/663744/)
- [ฐานเศรษฐกิจ — StartDee/Snapask (2020)](https://www.thansettakij.com/technology/430794)
- [RentHub — dorms near Mahidol CMMU](https://www.renthub.in.th/อพาร์ทเม้นท์-ห้องพัก-หอพัก/วิทยาลัยการจัดการ-มหาวิทยาลัยมหิดล)
- [CampHub](https://www.camphub.in.th/)
- [SCB EIC — household debt flash (Jul 2026)](https://www.scbeic.com/en/detail/file/product/10147/hknkoi227d/Flash-Household-debt-JUL-EN-20260723.pdf)
- [Nation Thailand — UTCC household debt survey (Sep 2026)](https://www.nationthailand.com/business/economy/40071155)
- [Thairath English — online fraud statistics (Aug 2026)](https://en.thairath.co.th/money/economics/thai_economics/2956372)
- [Legardy — phone installment lock Q&A](https://legardy.com/free-qna/49997)
- [Siamphone — phone purchase without credit card (Jul 2026)](https://www.siamphone.com/contents/news-56018.html)
- [InfoQuest — Thai pet market (Jul 2025)](https://www.infoquest.co.th/?p=510170)
- [Applied Environmental Research — household food waste (2025)](https://ph01.tci-thaijo.org/index.php/aer/article/view/259655)
- [Marketing Oops — Fastwork commission (Feb 2025)](https://www.marketingoops.com/?p=338637)
- [ฐานเศรษฐกิจ — home-service platforms (Oct 2026)](https://www.thansettakij.com/technology/670426)
- [KTC — second-hand marketplaces (Jan 2025)](https://www.ktc.co.th/article/knowledge/business/8-second-hand-marketplace-atpb)
- [The Bangkok Insight — Careny caregiver matching (2020)](https://www.thebangkokinsight.com/news/startup/298290/)
- [Time Out Bangkok — aging society (Sep 2025)](https://www.timeout.com/bangkok/news/thailand-is-now-a-nation-of-grandparents-090225)
- [ONEP — waste bank per local government (Mar 2024)](https://www.onep.go.th/?p=91488)
- [Thai PBS — blood shortage (2019)](https://www.thaipbs.or.th/news/content/285438)
- [วารสารสารศาสตร์ — condo juristic app usage (Oct 2024)](https://so05.tci-thaijo.org/index.php/sarasatr/article/view/273370)

**เทคนิค / ข้อจำกัด / การตัดสิน**
- [Supabase pricing](https://supabase.com/pricing)
- [Firebase pricing](https://firebase.google.com/pricing)
- [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
- [Netlify pricing](https://www.netlify.com/pricing/)
- [Gemini API rate limits](https://ai.google.dev/gemini-api/docs/rate-limits)
- [OpenRouter limits](https://openrouter.ai/docs/api-reference/limits)
- [Groq rate limits](https://console.groq.com/docs/rate-limits)
- [Typhoon docs](https://docs.opentyphoon.ai/en/)
- [Google Maps — March 2025 changes](https://developers.google.com/maps/billing-and-pricing/march-2025)
- [Mapbox pricing](https://www.mapbox.com/pricing)
- [OSMF tile usage policy](https://operations.osmfoundation.org/policies/tiles/)
- [OSMF Nominatim usage policy](https://operations.osmfoundation.org/policies/nominatim/)
- [Overpass API commons](https://dev.overpass-api.de/overpass-doc/en/preface/commons.html)
- [Open-Meteo pricing](https://open-meteo.com/en/pricing)
- [TMD API](https://data.tmd.go.th/api/index1.php)
- [Frankfurter — BOT provider](https://frankfurter.dev/providers/bot/)
- [Tilleke & Gibbins — PDPA consent guidelines](https://www.tilleke.com/insights/thailand-issues-guidelines-on-pdpa-consent-and-notification-requirements)
- [Devpost — hackathon judging tips](https://info.devpost.com/blog/hackathon-judging-tips)
