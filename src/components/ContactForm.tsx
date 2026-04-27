"use client";

import { useEffect, useState } from "react";
import PixelButton from "./PixelButton";
import DialogBox from "./DialogBox";
import { play } from "@/lib/sounds";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [defaultPlan, setDefaultPlan] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) setDefaultPlan(plan);
  }, []);

  // Default to the production form; override per-environment with NEXT_PUBLIC_FORMSPREE_ID.
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "mdayvqar";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formspreeId || formspreeId === "your_formspree_id_here") {
      // Demo mode: pretend success after a beat so the UI is testable.
      console.info("[ContactForm] No NEXT_PUBLIC_FORMSPREE_ID set — running in demo mode.", Object.fromEntries(formData.entries()));
      await new Promise((r) => setTimeout(r, 700));
      play("lifeUp");
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Submission failed");
      }
      play("lifeUp");
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      play("gameOver");
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <DialogBox speaker="QUEST ACCEPTED">
        <p className="mb-3">+1 LIFE! Thanks — we&apos;ll reply within one business day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-pixel text-[0.6rem] underline hover:text-nes-yellow"
        >
          ▶ SEND ANOTHER
        </button>
      </DialogBox>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <Field label="NAME" name="name" required defaultValue="" />
      <Field label="EMAIL" name="email" type="email" required defaultValue="" />
      <SelectField label="QUEST TYPE" name="quest" defaultValue={defaultPlan || "web-design"}>
        <option value="web-design">Web Design</option>
        <option value="ecommerce">E-Commerce</option>
        <option value="google-ads">Google Ads</option>
        <option value="starter">Mushroom Plan</option>
        <option value="pro">Fire Flower Plan</option>
        <option value="enterprise">Super Star Plan</option>
        <option value="other">Other</option>
      </SelectField>
      <TextareaField label="MESSAGE" name="message" required />

      {/* Honeypot for bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      {status === "error" && (
        <DialogBox speaker="GAME OVER" showCaret={false} className="!bg-nes-red-dark border-0">
          <p>{errorMsg ?? "Something went wrong. Please try again."}</p>
        </DialogBox>
      )}

      <div className="flex items-center gap-4">
        <PixelButton
          type="submit"
          variant="success"
          disabled={status === "submitting"}
          sfx="jump"
        >
          {status === "submitting" ? "SENDING…" : "SEND QUEST ▶"}
        </PixelButton>
        <span className="font-pixel text-[0.55rem] uppercase text-nes-black/70">
          Replies within 1 business day
        </span>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-pixel text-[0.6rem] uppercase">
        {label} {required && <span className="text-nes-red">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="pixel-input"
        autoComplete={name === "email" ? "email" : "off"}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-pixel text-[0.6rem] uppercase">{label}</span>
      <select name={name} defaultValue={defaultValue} className="pixel-select">
        {children}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-pixel text-[0.6rem] uppercase">
        {label} {required && <span className="text-nes-red">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={6}
        className="pixel-textarea"
        placeholder="Tell us about your project — goals, timeline, any deadlines."
      />
    </label>
  );
}
