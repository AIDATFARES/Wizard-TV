import Image from "next/image";

interface BrandLogoProps {
  compact?: boolean;
  theme?: "dark" | "light" | "auto";
}

export default function BrandLogo({ compact = false, theme = "auto" }: BrandLogoProps) {
  const isLightText = theme === "light";

  return (
    <div className={`inline-flex items-center gap-3 select-none transition-transform hover:scale-[1.02] ${compact ? "py-1" : "py-1.5"}`}>
      {/* Wizard TV Official Glowing Emblem */}
      <div className={`relative rounded-xl overflow-hidden shadow-[0_0_20px_rgba(138,43,226,0.45)] border border-[#8A2BE2]/40 shrink-0 bg-[#070913] ${compact ? "w-10 h-10" : "w-11 h-11"}`}>
        <Image
          src="/icon.png"
          alt="Wizard TV Logo"
          fill
          priority
          sizes="48px"
          className="object-cover"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-xl sm:text-2xl font-black tracking-tight ${isLightText ? "text-white" : "text-slate-950"}`}>
            WIZARD
          </span>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] via-[#9333EA] to-[#F59E0B]">
            TV
          </span>
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#F59E0B] leading-tight mt-0.5">
          PREMIUM 4K IPTV
        </span>
      </div>
    </div>
  );
}
