import type { Metadata } from "next";
import PowerUpCard from "@/components/PowerUpCard";
import DialogBox from "@/components/DialogBox";
import { pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Power-Ups — Pricing",
  description:
    "Pick a power-up tier: Mushroom (Starter), Fire Flower (Pro), or Super Star (Enterprise retainer).",
};

export default function PricingPage() {
  return (
    <div className="bg-nes-sky py-12 px-4 min-h-[80vh]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <header className="text-center flex flex-col items-center gap-3">
          <div className="font-pixel text-[0.65rem] uppercase text-nes-white drop-shadow-[2px_2px_0_#000]">
            ★ POWER-UPS ★
          </div>
          <h1 className="font-pixel text-2xl sm:text-3xl text-nes-white drop-shadow-[3px_3px_0_#000]">
            CHOOSE YOUR POWER
          </h1>
          <p className="text-[1.15rem] max-w-xl text-nes-white drop-shadow-[2px_2px_0_#000]">
            Three tiers, one outcome: ship faster, convert higher.
          </p>
        </header>

        <div className="max-w-3xl mx-auto w-full">
          <DialogBox speaker="SHOPKEEPER">
            <p>
              Most projects fit Fire Flower. Bigger brands & ad-spending stores
              get more out of Super Star. Not sure?{" "}
              <a className="pixel-link" href="/contact">
                Ask us
              </a>
              .
            </p>
          </DialogBox>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((p) => (
            <PowerUpCard
              key={p.tier}
              tier={p.tier}
              power={p.power}
              price={p.price}
              cadence={p.cadence}
              features={p.features}
              highlight={p.highlight}
            />
          ))}
        </div>

        <p className="text-center font-pixel text-[0.55rem] uppercase text-nes-white drop-shadow-[2px_2px_0_#000]">
          All tiers include a 30-min discovery call · USD · Taxes not included
        </p>
      </div>
    </div>
  );
}
