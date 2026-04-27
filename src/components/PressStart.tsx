"use client";

import { useEffect, useState } from "react";
import { play } from "@/lib/sounds";

const STORAGE_KEY = "agency-1-1.pressed-start";

export default function PressStart() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);

    const dismiss = () => {
      play("powerup");
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      setVisible(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.key.toLowerCase() === "s") {
        e.preventDefault();
        dismiss();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    play("powerup");
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Press start to continue"
      onClick={dismiss}
      className="fixed inset-0 z-50 bg-nes-black flex flex-col items-center justify-center cursor-pointer text-center px-6"
    >
      <div className="font-pixel text-nes-white text-2xl sm:text-4xl mb-6">AGENCY 1-1</div>
      <div className="font-pixel text-nes-yellow text-xs sm:text-sm mb-12">
        WEB · E-COM · GOOGLE ADS
      </div>
      <div className="font-pixel text-nes-white text-sm sm:text-lg anim-press-start">
        ▶ PRESS START
      </div>
      <div className="font-pixel text-nes-gray text-[0.55rem] uppercase mt-12">
        click anywhere or press enter
      </div>
    </div>
  );
}
