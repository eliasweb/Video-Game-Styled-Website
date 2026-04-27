import Mushroom from "@/sprites/Mushroom";
import FireFlower from "@/sprites/FireFlower";
import Star from "@/sprites/Star";
import PixelButton from "./PixelButton";

type Props = {
  tier: "MUSHROOM" | "FIRE FLOWER" | "SUPER STAR";
  power: string;
  price: string;
  cadence: string;
  features: string[];
  highlight?: boolean;
};

export default function PowerUpCard({ tier, power, price, cadence, features, highlight }: Props) {
  const Sprite = tier === "MUSHROOM" ? Mushroom : tier === "FIRE FLOWER" ? FireFlower : Star;
  const planSlug = power.toLowerCase();

  return (
    <div
      className={`pixel-frame flex flex-col gap-4 ${
        highlight ? "outline outline-4 outline-dashed outline-nes-yellow outline-offset-4" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <Sprite size={56} />
        <div>
          <div className="font-pixel text-[0.65rem] text-nes-red uppercase">{tier}</div>
          <div className="font-pixel text-base">{power}</div>
        </div>
      </div>

      <div className="font-pixel text-2xl">{price}</div>
      <div className="text-sm uppercase tracking-wider text-nes-gray font-pixel">{cadence}</div>

      <ul className="space-y-2 mt-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[1.05rem]">
            <span aria-hidden className="text-nes-red font-pixel mt-0.5">▶</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4">
        <PixelButton
          href={`/contact?plan=${encodeURIComponent(planSlug)}`}
          variant={highlight ? "primary" : "secondary"}
          sfx="powerup"
        >
          Grab Power-Up
        </PixelButton>
      </div>
    </div>
  );
}
