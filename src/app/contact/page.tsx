import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import DialogBox from "@/components/DialogBox";
import Mascot from "@/components/Mascot";
import { studio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quest Log — Contact",
  description:
    "Start a project, ask a question, or just say hi. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <div className="bg-nes-sky py-12 px-4 min-h-[80vh]">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <header className="text-center flex flex-col items-center gap-3">
          <div className="font-pixel text-[0.65rem] uppercase text-nes-white drop-shadow-[2px_2px_0_#000]">
            ★ NEW QUEST ★
          </div>
          <h1 className="font-pixel text-2xl sm:text-3xl text-nes-white drop-shadow-[3px_3px_0_#000]">
            START A PROJECT
          </h1>
        </header>

        <div className="flex items-end gap-4">
          <Mascot size={96} />
          <div className="flex-1">
            <DialogBox speaker="AGENCY 1-1">
              <p className="mb-2">
                Hey there! Tell us about your project — goals, timeline, budget if you have one.
              </p>
              <p>
                We reply within one business day. No bots, no auto-responders.
              </p>
            </DialogBox>
          </div>
        </div>

        <div className="pixel-frame">
          <ContactForm />
        </div>

        <div className="text-center font-pixel text-[0.6rem] uppercase text-nes-white drop-shadow-[2px_2px_0_#000]">
          OR EMAIL US:&nbsp;
          <a className="underline hover:text-nes-yellow" href={`mailto:${studio.email}`}>
            {studio.email}
          </a>
        </div>
      </div>
    </div>
  );
}
