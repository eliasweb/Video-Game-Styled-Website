import Mushroom from "@/sprites/Mushroom";
import FireFlower from "@/sprites/FireFlower";
import Star from "@/sprites/Star";
import CoinSprite from "@/sprites/CoinSprite";
import { studio } from "@/lib/content";

const ICONS = {
  mushroom: Mushroom,
  fire: FireFlower,
  star: Star,
  coin: CoinSprite,
} as const;

export default function Footer() {
  return (
    <footer className="bg-nes-black text-nes-white border-t-4 border-nes-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-6 text-center">
        <div className="font-pixel text-base sm:text-lg anim-press-start">GAME OVER?</div>
        <p className="font-pixel text-[0.65rem] uppercase tracking-wider">
          INSERT COIN TO CONTINUE
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-4 mt-2">
          {studio.socials.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col items-center gap-1 px-2 py-2 hover:bg-nes-white hover:text-nes-black transition-colors"
                  aria-label={s.label}
                >
                  <Icon size={36} label={s.label} />
                  <span className="font-pixel text-[0.55rem] uppercase">{s.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="font-pixel text-[0.55rem] uppercase text-nes-gray mt-4">
          © {new Date().getFullYear()} {studio.name} · EST. {studio.established} · {studio.email}
        </div>
        <div className="font-pixel text-[0.5rem] uppercase text-nes-gray">
          A PARODY HOMAGE — NO AFFILIATION WITH ANY VIDEO GAME COMPANY.
        </div>
      </div>
    </footer>
  );
}
