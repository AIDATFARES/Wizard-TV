import Link from "next/link";
import { Monitor, Laptop, Smartphone, Tablet, List } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-4 md:pt-6 pb-16 md:pb-20 flex items-center justify-center bg-[#070913] overflow-hidden text-center">

      {/* Background Image & Mystic Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wizard-hero-banner.webp"
          alt="Wizard TV Interface"
          priority
          fetchPriority="high"
          fill
          sizes="(max-width: 768px) 100vw, 1400px"
          quality={75}
          className="object-cover"
        />
        {/* Smooth bottom edge blend only */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070913] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 flex flex-col items-center gap-6 py-6 rounded-3xl bg-black/30 backdrop-blur-[2px] shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-white/5">

        {/* Top Tag */}
        <div className="inline-flex items-center border border-[#8A2BE2]/60 rounded-full px-4 py-1.5 backdrop-blur-md bg-[#8A2BE2]/10 shadow-[0_0_15px_rgba(138,43,226,0.3)]">
          <span className="w-2 h-2 rounded-full bg-amber-400 mr-2 animate-pulse shadow-[0_0_8px_#F59E0B]"></span>
          <span className="text-[10px] sm:text-xs font-bold text-amber-300 tracking-widest uppercase">
            +7,500 Satisfied Customers
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight leading-[1.08] sm:leading-[1] text-white drop-shadow-2xl mt-4">
          Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]">Wizard TV</span><br className="hidden sm:inline" />{" "}
          The Magic of Streaming
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-[720px] mt-2 drop-shadow-lg leading-relaxed">
          Step into the magical realm of television with <strong>Wizard TV</strong>. Enjoy exclusive access to <Link href="/channels" title="Explore IPTV Channels" className="font-bold text-white hover:text-amber-300 underline decoration-white/30 underline-offset-4 hover:decoration-amber-300 transition-colors">+50,000 Channels</Link>, <strong>+120,000 Films & Series</strong>, and VIP sports coverage. Say goodbye to buffering and expensive cable bills—<span className="font-bold text-amber-300"><Link href="/pricing" title="Wizard TV Premium Subscriptions" className="hover:text-white underline decoration-amber-300/40 underline-offset-4 hover:decoration-white transition-colors">grab your premium subscription</Link> or <a href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Wizard%20TV." target="_blank" rel="noreferrer" className="hover:text-white underline decoration-amber-300/40 underline-offset-4 hover:decoration-white transition-colors">start a free trial today!</a></span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center w-full sm:w-auto">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Wizard%20TV."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-voltra py-4 px-8 text-sm sm:text-base font-bold flex items-center justify-center tracking-wider hover:scale-105"
          >
            GET 12 MONTHS — 2 MONTHS FREE &rarr;
          </a>
          <a
            href="/pricing"
            className="py-4 px-8 text-sm sm:text-base font-bold text-amber-300 bg-transparent border-2 border-amber-400/80 rounded-xl hover:bg-amber-400/10 shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all duration-300 flex items-center justify-center gap-2 tracking-wider hover:scale-105"
          >
            <List className="w-5 h-5 text-amber-400" /> View Plans
          </a>
        </div>

        {/* Bottom Device Icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-300 mt-8">
          <div className="flex flex-col items-center gap-2 group hover:text-amber-300 transition-colors cursor-pointer">
            <Monitor className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Smart TV</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-amber-300 transition-colors cursor-pointer">
            <Laptop className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Laptop / PC</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-amber-300 transition-colors cursor-pointer">
            <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Android</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-amber-300 transition-colors cursor-pointer">
            <Tablet className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">IOS</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-amber-300 transition-colors cursor-pointer">
            <Monitor className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Windows</span>
          </div>
        </div>

      </div>
    </section>
  );
}
