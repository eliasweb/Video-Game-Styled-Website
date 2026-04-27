import Hero from "@/components/Hero";
import WorldCard from "@/components/WorldCard";
import DialogBox from "@/components/DialogBox";
import PixelButton from "@/components/PixelButton";
import Coin from "@/components/Coin";
import { services } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Pitch / dialog */}
      <section className="bg-nes-cream py-16 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <h2 className="font-pixel text-lg sm:text-xl text-center">
            ⚙ STAGE 1 — WHAT WE DO
          </h2>
          <DialogBox speaker="AGENCY 1-1">
            <p className="mb-3">
              You found the warp pipe. We&apos;re a small senior team that ships
              <strong> conversion-focused websites, e-commerce stores, and Google Ads campaigns </strong>
              for ambitious brands.
            </p>
            <p>
              No 50-slide kickoffs. No outsourced juniors. Pick a world below to
              start the level — or skip ahead to <a href="/contact" className="pixel-link">/contact</a>.
            </p>
          </DialogBox>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-nes-sky py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-pixel text-lg sm:text-xl text-center mb-10 text-nes-white drop-shadow-[2px_2px_0_#000]">
            ★ LEVEL SELECT ★
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <WorldCard
                key={s.slug}
                world={s.world}
                title={s.title}
                blurb={s.blurb}
                href={`/services/${s.slug}`}
                color={s.color}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <PixelButton href="/services" sfx="select">
              View all worlds ▶
            </PixelButton>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-nes-black text-nes-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "PROJECTS SHIPPED", value: "142" },
            { label: "AVG. ROAS", value: "3.4x" },
            { label: "YEARS PLAYING", value: "07" },
            { label: "COFFEES /WK", value: "∞" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-2 items-center">
              <div className="font-pixel text-2xl sm:text-3xl text-nes-yellow">{s.value}</div>
              <div className="font-pixel text-[0.6rem] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nes-cream py-16 px-4">
        <div className="max-w-3xl mx-auto pixel-frame text-center flex flex-col gap-5 items-center">
          <Coin size={40} />
          <h2 className="font-pixel text-base sm:text-lg">READY TO 1-UP YOUR BUSINESS?</h2>
          <p className="text-[1.15rem]">
            Tell us about your project. We&apos;ll reply within one business day with
            either a scope, a quote, or honest advice.
          </p>
          <PixelButton href="/contact" variant="primary" sfx="powerup">
            Start the quest ▶
          </PixelButton>
        </div>
      </section>
    </>
  );
}
