"use client";

/**
 * Tiny 8-bit SFX engine using Web Audio API.
 * Generates bleeps procedurally so we don't ship audio assets.
 * Sound is gated behind a localStorage toggle (default: off) and
 * suppressed if the user prefers reduced motion.
 */

type SfxName = "coin" | "jump" | "powerup" | "select" | "blip" | "lifeUp" | "gameOver";

const STORAGE_KEY = "agency-1-1.sound";

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  return ctx;
}

export function isSoundOn(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "on";
}

export function setSoundOn(on: boolean): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, on ? "on" : "off");
  window.dispatchEvent(new CustomEvent("agency-sound-change", { detail: { on } }));
}

export function toggleSound(): boolean {
  const next = !isSoundOn();
  setSoundOn(next);
  return next;
}

function tone(freq: number, duration: number, type: OscillatorType = "square", volume = 0.06, when = 0) {
  const audio = getCtx();
  if (!audio) return;
  const t0 = audio.currentTime + when;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  gain.gain.setValueAtTime(volume, t0);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain).connect(audio.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

export function play(name: SfxName): void {
  if (!isSoundOn()) return;
  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

  switch (name) {
    case "coin":
      tone(987.77, 0.08, "square", 0.06, 0);
      tone(1318.51, 0.18, "square", 0.06, 0.08);
      break;
    case "jump":
      tone(523.25, 0.06, "square", 0.05, 0);
      tone(659.25, 0.06, "square", 0.05, 0.06);
      tone(783.99, 0.1, "square", 0.05, 0.12);
      break;
    case "powerup":
      tone(523.25, 0.06, "square", 0.06, 0);
      tone(659.25, 0.06, "square", 0.06, 0.06);
      tone(783.99, 0.06, "square", 0.06, 0.12);
      tone(1046.5, 0.12, "square", 0.06, 0.18);
      break;
    case "select":
      tone(880, 0.05, "square", 0.05, 0);
      break;
    case "blip":
      tone(440, 0.04, "square", 0.04, 0);
      break;
    case "lifeUp":
      tone(659.25, 0.08, "triangle", 0.06, 0);
      tone(783.99, 0.08, "triangle", 0.06, 0.08);
      tone(1046.5, 0.08, "triangle", 0.06, 0.16);
      tone(1318.51, 0.16, "triangle", 0.06, 0.24);
      break;
    case "gameOver":
      tone(330, 0.18, "square", 0.06, 0);
      tone(247, 0.22, "square", 0.06, 0.18);
      tone(165, 0.32, "square", 0.06, 0.4);
      break;
  }
}
