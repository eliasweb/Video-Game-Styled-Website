"use client";

import Brick from "./Brick";
import { play } from "@/lib/sounds";

type Props = {
  size?: number;
  label?: string;
  onActivate?: () => void;
  className?: string;
};

export default function QuestionBlock({ size = 64, label, onActivate, className }: Props) {
  return (
    <button
      type="button"
      className={`group inline-flex flex-col items-center gap-2 cursor-pointer ${className ?? ""}`.trim()}
      onClick={() => {
        play("coin");
        onActivate?.();
      }}
      aria-label={label ?? "Question block"}
    >
      <Brick variant="question" size={size} bouncing />
      {label && (
        <span className="font-pixel text-[0.55rem] uppercase text-nes-white drop-shadow-[2px_2px_0_#000]">
          {label}
        </span>
      )}
    </button>
  );
}
