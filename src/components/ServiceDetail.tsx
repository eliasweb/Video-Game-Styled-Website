import Link from "next/link";
import DialogBox from "./DialogBox";
import PixelButton from "./PixelButton";
import Coin from "./Coin";
import Pipe from "./Pipe";
import type { ServiceSlug } from "@/lib/content";
import { services } from "@/lib/content";

type Props = { slug: ServiceSlug };

const accent = {
  red: "bg-nes-red",
  green: "bg-nes-green",
  blue: "bg-nes-blue",
} as const;

export default function ServiceDetail({ slug }: Props) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const others = services.filter((s) => s.slug !== slug);

  return (
    <div className="bg-nes-cream py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <header className="text-center flex flex-col items-center gap-3">
          <span
            className={`font-pixel text-[0.6rem] uppercase text-nes-white px-2 py-1 ${accent[service.color]}`}
          >
            {service.world}
          </span>
          <h1 className="font-pixel text-2xl sm:text-3xl">{service.title}</h1>
          <p className="text-[1.2rem] max-w-2xl">{service.blurb}</p>
        </header>

        {/* Features as collected items */}
        <section className="pixel-frame">
          <h2 className="font-pixel text-sm sm:text-base mb-4">▶ ITEMS COLLECTED</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[1.1rem]">
                <span className="shrink-0 mt-1">
                  <Coin size={20} />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ as dialog */}
        <section className="flex flex-col gap-4">
          <h2 className="font-pixel text-sm sm:text-base text-center">▶ FAQ ◀</h2>
          {service.faq.map((qa, i) => (
            <div key={i} className="flex flex-col gap-3">
              <DialogBox speaker="VISITOR" showCaret={false}>
                <p>{qa.q}</p>
              </DialogBox>
              <DialogBox speaker="AGENCY 1-1">
                <p>{qa.a}</p>
              </DialogBox>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="pixel-frame text-center flex flex-col gap-4 items-center">
          <h2 className="font-pixel text-sm sm:text-base">READY TO START?</h2>
          <p>Tell us your goal. We&apos;ll come back with a plan within one business day.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <PixelButton href={`/contact?plan=${slug}`} variant="primary" sfx="powerup">
              Start Quest ▶
            </PixelButton>
            <PixelButton href="/pricing" variant="secondary" sfx="select">
              View Power-Ups
            </PixelButton>
          </div>
        </section>

        {/* Other worlds */}
        <section className="flex flex-col gap-4 items-center">
          <h2 className="font-pixel text-[0.7rem] uppercase tracking-wider">▶ Other Worlds</h2>
          <div className="flex flex-wrap gap-6 justify-center items-end">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform"
              >
                <Pipe height={70} width={64} label={o.world.replace("WORLD ", "")} />
                <span className="font-pixel text-[0.55rem] uppercase">{o.title.split("&")[0]?.trim() ?? o.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
