"use client";

import { useState } from "react";
import TrophyTile from "@/components/TrophyTile";
import { portfolio } from "@/lib/content";
import type { ServiceSlug } from "@/lib/content";
import { play } from "@/lib/sounds";

type Filter = "all" | ServiceSlug;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "web-design", label: "WEB" },
  { id: "ecommerce", label: "E-COM" },
  { id: "google-ads", label: "ADS" },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const items = portfolio.filter((p) => filter === "all" || p.category === filter);

  return (
    <div className="bg-nes-cream py-12 px-4 min-h-[80vh]">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <header className="text-center flex flex-col items-center gap-3">
          <div className="font-pixel text-[0.65rem] uppercase">★ TROPHY ROOM ★</div>
          <h1 className="font-pixel text-2xl sm:text-3xl">RECENT VICTORIES</h1>
          <p className="text-[1.15rem] max-w-xl">
            A small selection of clients we&apos;ve helped beat their level.
          </p>
        </header>

        {/* Filters as item-select tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                play("blip");
                setFilter(f.id);
              }}
              className={`font-pixel text-[0.6rem] uppercase px-3 py-2 transition-colors border-4 border-nes-black ${
                filter === f.id
                  ? "bg-nes-yellow text-nes-black"
                  : "bg-nes-white text-nes-black hover:bg-nes-yellow"
              }`}
              aria-pressed={filter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <TrophyTile
              key={p.title}
              title={p.title}
              client={p.client}
              vertical={p.vertical}
              metric={p.metric}
              stars={p.stars}
              category={p.category}
            />
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center font-pixel text-sm">No trophies in that world yet.</p>
        )}
      </div>
    </div>
  );
}
