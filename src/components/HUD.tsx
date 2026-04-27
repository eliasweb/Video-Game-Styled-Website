"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Coin from "./Coin";
import SoundToggle from "./SoundToggle";
import Mushroom from "@/sprites/Mushroom";

const NAV = [
  { href: "/", label: "1-1 HOME" },
  { href: "/services", label: "WORLDS" },
  { href: "/portfolio", label: "TROPHIES" },
  { href: "/pricing", label: "POWER-UPS" },
  { href: "/about", label: "PARTY" },
  { href: "/contact", label: "QUEST" },
];

export default function HUD() {
  const [open, setOpen] = useState(false);
  const [coins, setCoins] = useState(0);

  // Animate coins ticking up to a target on mount.
  useEffect(() => {
    const target = 142;
    let n = 0;
    const id = window.setInterval(() => {
      n += 1;
      setCoins(n);
      if (n >= target) window.clearInterval(id);
    }, 14);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-nes-black text-nes-white border-b-4 border-nes-white">
      <div className="max-w-6xl mx-auto flex items-center gap-3 px-3 sm:px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-2 shrink-0" aria-label="Agency 1-1 home">
          <Mushroom size={28} label="Agency 1-1 logo" />
          <span className="font-pixel text-[0.65rem] sm:text-[0.75rem]">AGENCY 1-1</span>
        </Link>

        {/* Stats */}
        <div className="hidden md:flex items-center gap-5 ml-2">
          <Stat label="WORLD" value="1-1" />
          <Stat label="LIVES" value="03" />
          <div className="flex items-center gap-1">
            <Coin size={20} />
            <span className="font-pixel text-[0.7rem]">×{String(coins).padStart(3, "0")}</span>
          </div>
          <Stat label="SCORE" value={String(coins * 100).padStart(6, "0")} />
        </div>

        <div className="flex-1" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-pixel text-[0.6rem] px-2 py-1 hover:bg-nes-white hover:text-nes-black focus-visible:bg-nes-yellow focus-visible:text-nes-black transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <SoundToggle />

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden font-pixel text-[0.6rem] border-2 border-nes-white px-2 py-1 hover:bg-nes-white hover:text-nes-black"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t-4 border-nes-white bg-nes-black"
        >
          <ul className="max-w-6xl mx-auto flex flex-col">
            {NAV.map((n) => (
              <li key={n.href} className="border-b-2 border-nes-gray">
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block font-pixel text-[0.7rem] px-4 py-3 hover:bg-nes-white hover:text-nes-black"
                >
                  ▶ {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col leading-none">
      <span className="font-pixel text-[0.55rem] text-nes-yellow">{label}</span>
      <span className="font-pixel text-[0.7rem] mt-1">{value}</span>
    </div>
  );
}
