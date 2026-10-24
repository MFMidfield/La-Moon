import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import BottomSheet from '../BottomSheet'

// TODO: เนื้อหา mockup — รอข้อความจริงจากทีม
const DOCS = {
  terms: {
    tab: 'ข้อตกลงการใช้งาน',
    sections: [
      ['การใช้งาน LaMoon', 'LaMoon ช่วยแนะนำสถานที่ท่องเที่ยวตามมู้ดของคุณ ข้อมูลสถานที่มีไว้ประกอบการตัดสินใจเท่านั้น โปรดตรวจสอบเวลาเปิด-ปิดและเงื่อนไขก่อนเดินทาง'],
      ['บัญชีผู้ใช้', 'คุณเข้าสู่ระบบด้วยบัญชี Google และรับผิดชอบการใช้งานที่เกิดขึ้นภายใต้บัญชีของตัวเอง'],
      ['เนื้อหาที่คุณส่ง', 'ชื่อที่แสดงและรูปโปรไฟล์ต้องไม่ละเมิดสิทธิ์ผู้อื่น และไม่มีเนื้อหาที่ไม่เหมาะสม เราอาจลบเนื้อหาที่ฝ่าฝืนได้'],
      ['ลิงก์ไปยังบริการภายนอก', 'การจองที่พักหรือกิจกรรมผ่านลิงก์พันธมิตรเป็นไปตามเงื่อนไขของผู้ให้บริการนั้นๆ'],
      ['การเปลี่ยนแปลงข้อตกลง', 'เราอาจปรับปรุงข้อตกลงนี้ และจะแจ้งในแอปก่อนมีผลบังคับใช้'],
    ],
  },
  privacy: {
    tab: 'นโยบายความเป็นส่วนตัว',
    sections: [
      ['ข้อมูลที่เราเก็บ', 'ชื่อ อีเมล และรูปจากบัญชี Google, รูปโปรไฟล์ที่คุณอัปโหลด, มู้ดและจังหวัดที่เลือก และการ์ดที่คุณปัด'],
      ['เราใช้ข้อมูลเพื่ออะไร', 'คัดการ์ดให้ตรงใจ จำทริปที่บันทึกไว้ และปรับปรุงบริการ'],
      ['การแบ่งปันข้อมูล', 'เราไม่ขายข้อมูลส่วนตัว และแชร์เฉพาะที่จำเป็นกับผู้ให้บริการระบบ เช่น Supabase และ Google'],
      ['สิทธิ์ของคุณ', 'คุณขอดู แก้ไข หรือลบข้อมูลของตัวเองได้ตาม พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล (PDPA) โดยติดต่อทีม LaMoon'],
      ['การเก็บรักษาข้อมูล', 'เราเก็บข้อมูลตราบที่บัญชียังใช้งานอยู่ เมื่อลบบัญชีจะลบข้อมูลภายใน 30 วัน'],
    ],
  },
}

export default function TermsModal({ doc, onDocChange, onClose, onAccept }) {
  const reduced = useReducedMotion()
  const feedback = { whileTap: reduced ? undefined : { scale: 0.96 }, transition: reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 } }
  const pillId = useId()
  // จำ doc ล่าสุดไว้ใช้ตอน sheet กำลังปิด (doc เป็น null แล้ว)
  const current = DOCS[doc] ?? DOCS.terms

  return (
    <BottomSheet open={Boolean(doc)} onClose={onClose} labelledBy="terms-title">
      <div className="flex items-center justify-between px-[22px] pt-4">
        <h2 id="terms-title" className="m-0 text-xl font-bold">
          ข้อตกลงและนโยบาย
        </h2>
        <motion.button {...feedback}
          type="button"
          aria-label="ปิด"
          onClick={onClose}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-cream"
        >
          <X size={18} strokeWidth={2} aria-hidden="true" />
        </motion.button>
      </div>

      <div className="mx-[22px] mt-3 flex rounded-full bg-cream p-1" role="tablist">
        {Object.entries(DOCS).map(([key, d]) => (
          <motion.button {...feedback}
            key={key}
            type="button"
            role="tab"
            aria-selected={doc === key}
            onClick={() => onDocChange(key)}
            className={`relative isolate h-10 flex-1 cursor-pointer rounded-full text-sm font-semibold transition-colors duration-200 ${
              doc === key ? 'text-white' : 'text-ink'
            }`}
          >
            {doc === key && <motion.span layoutId={reduced ? undefined : pillId} className="absolute inset-0 -z-10 rounded-full bg-brown" transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 32 }} />}
            {d.tab}
          </motion.button>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-4 overflow-y-auto px-[22px] pb-2">
        <div className="text-xs text-muted">ฉบับร่าง · อัปเดตล่าสุด 24 ต.ค. 2569</div>
        {current.sections.map(([title, body], i) => (
          <section key={title} className="flex flex-col gap-1">
            <h3 className="m-0 text-[15px] font-semibold">
              {i + 1}. {title}
            </h3>
            <p className="m-0 text-sm leading-[1.6] text-[#4A3A30]">{body}</p>
          </section>
        ))}
      </div>

      <div className="flex gap-2.5 border-t border-[#EDE5DD] px-4 pb-6 pt-4 lg:pb-5">
        <motion.button {...feedback}
          type="button"
          onClick={onClose}
          className="h-[54px] flex-1 cursor-pointer rounded-full border-[1.5px] border-[#D9CFC5] bg-white text-base font-semibold text-ink"
        >
          ปิด
        </motion.button>
        <motion.button {...feedback}
          type="button"
          onClick={onAccept}
          className="h-[54px] flex-[2] cursor-pointer rounded-full bg-brown text-base font-semibold text-white"
        >
          ยอมรับ
        </motion.button>
      </div>
    </BottomSheet>
  )
}
