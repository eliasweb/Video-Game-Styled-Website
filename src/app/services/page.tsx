import type { Metadata } from "next";
import WorldCard from "@/components/WorldCard";
import DialogBox from "@/components/DialogBox";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Worlds — Web Design, E-Commerce, Google Ads",
  description:
    "Three worlds, one quest. Choose web design, e-commerce, or Google Ads — or combine all three for a full-stack growth engine.",
};

export default function ServicesPage() {
  return (
    <div className="bg-nes-sky pt-12 pb-20 px-4 min-h-[80vh]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <header className="text-center">
          <div className="font-pixel text-[0.65rem] uppercase text-nes-white drop-shadow-[2px_2px_0_#000]">
            ★ STAGE SELECT ★
          </div>
          <h1 className="font-pixel text-2xl sm:text-3xl mt-3 text-nes-white drop-shadow-[3px_3px_0_#000]">
            CHOOSE YOUR WORLD
          </h1>
        </header>

        <div className="max-w-3xl mx-auto w-full">
          <DialogBox speaker="GUIDE">
            <p>
              Each world is a complete service we own end-to-end. Pick one or
              combine them — the boss fights are easier with the right loadout.
            </p>
          </DialogBox>
        </div>

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
      </div>
    </div>
  );
}
