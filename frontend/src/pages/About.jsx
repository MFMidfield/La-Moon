import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Mail } from 'lucide-react'
import AppHeader from '../components/AppHeader'
import { slideNavigate } from '../components/SlideLink'
import { CONTACT_EMAIL, LEGAL_DOCS, LEGAL_UPDATED } from '../data/legal'

function Section({ id, title, children }) {
  return (
    <section id={id} className="flex scroll-mt-4 flex-col gap-3 rounded-[28px] bg-white p-[22px]">
      <h2 className="m-0 text-[22px] font-bold">{title}</h2>
      {children}
    </section>
  )
}

function DocList({ sections }) {
  return sections.map(([title, body], i) => (
    <div key={title} className="flex flex-col gap-1">
      <h3 className="m-0 text-[15px] font-semibold">
        {i + 1}. {title}
      </h3>
      <p className="m-0 text-sm leading-[1.6] text-[#4A3A30]">{body}</p>
    </div>
  ))
}

// หน้าเปิดสาธารณะ: เกี่ยวกับ / ติดต่อ / ข้อตกลง / ความเป็นส่วนตัว / ลิงก์พันธมิตร
export default function About() {
  const navigate = useNavigate()
  const { hash, key } = useLocation()

  useEffect(() => {
    const el = hash && document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [hash, key])

  // เปิดตรงจากลิงก์ภายนอก (ไม่มีหน้าก่อน) → กลับหน้าแรก
  const goBack = () => (key === 'default' ? slideNavigate(navigate, '/', { back: true }) : navigate(-1))

  return (
    <div className="min-h-svh bg-cream text-ink">
      <div className="mx-auto max-w-[560px]">
        <AppHeader crumb="LaMoon" title="เกี่ยวกับเรา" onBack={goBack} />

        <main className="flex flex-col gap-3.5 px-4 pb-10 pt-2">
          <Section id="about" title="LaMoon คืออะไร">
            <p className="m-0 text-[15px] leading-[1.6] text-[#4A3A30]">
              LaMoon ช่วยวางแผนเที่ยวไทยจากมู้ดของคุณ บอกมู้ด งบ และจำนวนคน แล้วเลือกหรือสุ่มจังหวัดบนแผนที่
              ปัดการ์ดสถานที่ที่อยากไป ระบบจัดแผนรายวันพร้อมประมาณงบและการเดินทางให้อัตโนมัติ
            </p>
            <p className="m-0 text-[15px] leading-[1.6] text-[#4A3A30]">
              เริ่มจากสถานที่จริงในภาคใต้และกรุงเทพฯ และกำลังขยายไปทั่วประเทศ
            </p>
          </Section>

          <Section id="contact" title="ติดต่อเรา">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex min-h-11 items-center gap-3 rounded-[24px] bg-cream px-4 py-3 text-[15px] font-semibold text-brown hover:text-ink"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FBE3D2]">
                <Mail size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="min-w-0 break-all">{CONTACT_EMAIL}</span>
            </a>
          </Section>

          <Section id="affiliate" title="ลิงก์พันธมิตร">
            <p className="m-0 text-sm leading-[1.6] text-[#4A3A30]">
              บางลิงก์จองที่พักใน LaMoon เป็นลิงก์พันธมิตร (affiliate) เช่น Agoda เมื่อคุณจองผ่านลิงก์
              LaMoon อาจได้รับค่าคอมมิชชันจากผู้ให้บริการ โดยคุณไม่ต้องจ่ายเพิ่ม ราคาและเงื่อนไขการจองเป็นของผู้ให้บริการนั้นๆ
            </p>
          </Section>

          <Section id="terms" title={LEGAL_DOCS.terms.tab}>
            <DocList sections={LEGAL_DOCS.terms.sections} />
          </Section>

          <Section id="privacy" title={LEGAL_DOCS.privacy.tab}>
            <DocList sections={LEGAL_DOCS.privacy.sections} />
          </Section>

          <p className="m-0 pt-2 text-center text-xs text-muted">อัปเดตล่าสุด {LEGAL_UPDATED} · © 2026 ทีม LaMoon</p>
        </main>
      </div>
    </div>
  )
}
