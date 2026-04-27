"use client";

import { useEffect, useState } from "react";
import { isSoundOn, toggleSound } from "@/lib/sounds";

export default function SoundToggle() {
  const [on, setOn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setOn(isSoundOn());
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ on: boolean }>).detail;
      setOn(detail.on);
    };
    window.addEventListener("agency-sound-change", handler);
    return () => window.removeEventListener("agency-sound-change", handler);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() => setOn(toggleSound())}
      className="font-pixel text-[0.6rem] uppercase px-2 py-1 bg-nes-black text-nes-white border-2 border-nes-white hover:bg-nes-white hover:text-nes-black transition-colors"
      aria-label={on ? "Turn sound off" : "Turn sound on"}
      title={on ? "Sound: ON" : "Sound: OFF"}
    >
      {on ? "♪ ON" : "♪ OFF"}
    </button>
  );
}
