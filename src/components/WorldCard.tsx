"use client";

import Link from "next/link";
import Pipe from "./Pipe";
import PixelButton from "./PixelButton";
import { play } from "@/lib/sounds";

type Props = {
  world: string;
  title: string;
  blurb: string;
  href: string;
  color: "red" | "green" | "blue";
};

const accent = {
  red: "bg-nes-red",
  green: "bg-nes-green",
  blue: "bg-nes-blue",
} as const;

export default function WorldCard({ world, title, blurb, href, color }: Props) {
  return (
    <Link
      href={href}
      onMouseEnter={() => play("blip")}
      onClick={() => play("coin")}
      className="pixel-frame group flex flex-col gap-4 transition-transform duration-100 hover:-translate-y-1 hover:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-dashed focus-visible:outline-nes-yellow"
    >
      <div className={`font-pixel text-[0.6rem] inline-block w-fit px-2 py-1 text-nes-white ${accent[color]}`}>
        {world}
      </div>
      <h3 className="font-pixel text-base sm:text-lg leading-snug">{title}</h3>
      <p className="text-[1.05rem] leading-snug">{blurb}</p>

      <div className="flex items-end justify-between gap-4 mt-2">
        <Pipe height={70} width={64} />
        <PixelButton href={href} variant="secondary" sfx="jump">
          Enter ▶
        </PixelButton>
      </div>
    </Link>
  );
}
