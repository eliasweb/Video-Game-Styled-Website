import PixelButton from "@/components/PixelButton";
import Goomba from "@/sprites/Goomba";

export default function NotFound() {
  return (
    <div className="bg-nes-black text-nes-white min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="text-center flex flex-col items-center gap-6">
        <Goomba size={120} />
        <h1 className="font-pixel text-3xl sm:text-5xl text-nes-red drop-shadow-[3px_3px_0_#000]">
          GAME OVER
        </h1>
        <p className="font-pixel text-sm sm:text-base">404 — WORLD NOT FOUND</p>
        <p className="text-[1.15rem] max-w-md">
          You walked into a Goomba. The page you were looking for doesn&apos;t exist.
        </p>
        <PixelButton href="/" variant="success" sfx="lifeUp">
          Continue ▶
        </PixelButton>
      </div>
    </div>
  );
}
