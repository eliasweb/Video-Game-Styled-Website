import Cloud from "./Cloud";
import Mascot from "./Mascot";
import Brick from "./Brick";
import QuestionBlock from "./QuestionBlock";
import PixelButton from "./PixelButton";
import { studio } from "@/lib/content";
import Pipe from "./Pipe";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-nes-sky pt-12 pb-0">
      {/* Sky parallax clouds */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="anim-cloud absolute top-8 left-0" style={{ animationDuration: "60s" }}>
          <Cloud size={120} />
        </div>
        <div className="anim-cloud absolute top-24 left-0" style={{ animationDuration: "85s", animationDelay: "-20s" }}>
          <Cloud size={88} />
        </div>
        <div className="anim-cloud absolute top-44 left-0" style={{ animationDuration: "100s", animationDelay: "-50s" }}>
          <Cloud size={150} />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pb-20">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="font-pixel text-[0.6rem] uppercase text-nes-white drop-shadow-[2px_2px_0_#000]">
            ★ NOW ENTERING ★
          </div>
          <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl text-nes-white drop-shadow-[3px_3px_0_#000] leading-tight">
            {studio.name}
          </h1>
          <p className="font-pixel text-sm sm:text-base text-nes-yellow drop-shadow-[2px_2px_0_#000]">
            WEB · E-COM · GOOGLE ADS
          </p>
          <p className="max-w-2xl text-[1.2rem] sm:text-[1.4rem] text-nes-white drop-shadow-[2px_2px_0_#000]">
            We build pixel-perfect websites, e-commerce stores, and Google Ads campaigns
            that turn visitors into customers. {studio.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <PixelButton href="/services" sfx="powerup">
              Press Start ▶
            </PixelButton>
            <PixelButton href="/contact" variant="secondary" sfx="select">
              Talk to us
            </PixelButton>
          </div>

          <div className="flex items-end gap-6 mt-10">
            <Brick size={56} />
            <QuestionBlock size={56} label="Coin: 1-up" />
            <Brick size={56} />
            <QuestionBlock size={56} label="Coin: 1-up" />
            <Brick size={56} />
          </div>

          <div className="mt-10">
            <Mascot size={140} />
          </div>
        </div>

        {/* Pipes row → services */}
        <div className="flex justify-center items-end gap-8 sm:gap-14 mt-10 flex-wrap">
          <a href="/services/web-design" className="hover:-translate-y-2 transition-transform">
            <Pipe height={120} width={88} label="WEB" />
          </a>
          <a href="/services/ecommerce" className="hover:-translate-y-2 transition-transform">
            <Pipe height={150} width={88} label="E-COM" />
          </a>
          <a href="/services/google-ads" className="hover:-translate-y-2 transition-transform">
            <Pipe height={100} width={88} label="ADS" />
          </a>
        </div>
      </div>

      {/* Ground */}
      <div aria-hidden className="bg-ground h-12" />
      <div aria-hidden className="bg-bricks h-8" />
    </section>
  );
}
