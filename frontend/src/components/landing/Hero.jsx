import SlideLink from '../SlideLink'
import CardStack from './CardStack'

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-[640px] flex-col lg:grid lg:max-w-[1120px] lg:grid-cols-2 lg:gap-x-12 lg:px-8 lg:pt-10">
      <div className="flex flex-col gap-2.5 px-[22px] pt-[18px] text-center lg:self-end lg:px-0 lg:text-left">
        <span className="self-center rounded-full bg-peach px-3.5 py-1 text-[13px] font-medium text-brown lg:self-start lg:text-sm">
          ไม่ต้องวางแผน แค่ปัด
        </span>
        <h1 className="m-0 text-[34px] font-bold leading-[1.2] lg:text-[56px]">
          ปัดการ์ด
          <br />
          เจอที่เที่ยวที่ใช่
        </h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#4A3A30] lg:text-lg">
          เลือกจังหวัดกับมู้ด แล้วปัดขวาที่อยากไป
          <br />
          ปัดซ้ายที่ไม่ใช่ ได้ทริปในไม่กี่นาที
        </p>
      </div>

      <div className="mt-[26px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
        <CardStack />
      </div>

      <div className="flex flex-col gap-2.5 px-[22px] pt-7 lg:w-80 lg:self-start lg:px-0">
        <SlideLink
          to="/login"
          className="flex h-14 items-center justify-center rounded-full bg-brown text-base font-semibold text-white"
        >
          ลองปัดเลย
        </SlideLink>
        <div className="text-center text-[13px] text-muted">ฟรี ใช้ได้ทันทีด้วยบัญชี Google</div>
      </div>
    </section>
  )
}
