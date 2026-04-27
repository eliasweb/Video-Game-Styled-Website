import type { Metadata } from "next";
import DialogBox from "@/components/DialogBox";
import Mushroom from "@/sprites/Mushroom";
import FireFlower from "@/sprites/FireFlower";
import Star from "@/sprites/Star";
import CoinSprite from "@/sprites/CoinSprite";
import { team, studio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Party Members — About",
  description:
    "Meet the senior team behind Agency 1-1. No outsourced juniors, no kickoff theater.",
};

const ICONS = {
  mushroom: Mushroom,
  fire: FireFlower,
  star: Star,
  coin: CoinSprite,
} as const;

export default function AboutPage() {
  return (
    <div className="bg-nes-cream py-12 px-4 min-h-[80vh]">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <header className="text-center flex flex-col items-center gap-3">
          <div className="font-pixel text-[0.65rem] uppercase">★ CHARACTER SELECT ★</div>
          <h1 className="font-pixel text-2xl sm:text-3xl">MEET THE PARTY</h1>
          <p className="text-[1.15rem] max-w-xl">
            We&apos;re a senior, embedded team. The person you talk to on the
            sales call is the same person doing your work.
          </p>
        </header>

        <div className="max-w-3xl mx-auto w-full">
          <DialogBox speaker="OUR STORY">
            <p className="mb-3">
              {studio.name} started in {studio.established} when we kept seeing the
              same problem: agencies that win the pitch don&apos;t do the work.
            </p>
            <p>
              So we made a small studio with no junior bench. Every project is staffed
              by senior operators end-to-end. We&apos;re not the cheapest — we&apos;re the team
              you hire when the result has to be right.
            </p>
          </DialogBox>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {team.map((m) => {
            const Icon = ICONS[m.emoji];
            return (
              <article key={m.name} className="pixel-frame flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <Icon size={56} />
                  <div>
                    <div className="font-pixel text-base">{m.name}</div>
                    <div className="text-sm uppercase tracking-wider font-pixel text-[0.55rem] text-nes-blue mt-1">
                      {m.role}
                    </div>
                  </div>
                </div>
                <p className="text-[1.1rem]">{m.bio}</p>
                <div className="grid grid-cols-3 gap-2 mt-2 font-pixel text-[0.55rem] uppercase">
                  <Stat label="HP" value={m.hp} color="bg-nes-red" />
                  <Stat label="MP" value={m.mp} color="bg-nes-blue" />
                  <Stat label="ATK" value={m.atk} color="bg-nes-yellow" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span>{label}</span>
      <div className="h-3 bg-nes-black border-2 border-nes-black relative overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-right text-nes-black/70">{value}/100</span>
    </div>
  );
}
