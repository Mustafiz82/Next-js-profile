import Image from "next/image";

export default function Header() {
  return (
    <header className="px-5 bg-white shadow-sm">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-1">
          <Image width={54} height={54} src="/images/logo.png" alt="logo.png" />
          <h2 className="text-[33px] text-[#2F2B3DE5] font-semibold">Orbit</h2>
        </div>
        <div className="flex items-center gap-3">
          <Image width={83} height={57} src="/images/apan.png" alt="apan.png" />
          <div>
            <h3 className="text-[25px] leading-[27px]">APAN53 - Bangladesh</h3>
            <span className="text-xs">27 Jul, 2024 - 04 Aug, 2024</span>
          </div>
        </div>
      </div>

      <div className="w-[52px] h-[52px] relative">
      <Image width={52} height={52} src="/images/avatar-1.png" alt="apan.png" className="rounded-full" />
      <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#28C76F] rounded-full border-[4px] border-white" />
      </div>
      </div>
    </header>
  );
}
