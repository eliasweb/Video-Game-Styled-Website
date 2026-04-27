import CoinSprite from "@/sprites/CoinSprite";

type Props = { size?: number; className?: string; spin?: boolean };

export default function Coin({ size = 24, className, spin = true }: Props) {
  return (
    <span className={`inline-block ${spin ? "anim-coin-spin" : ""} ${className ?? ""}`.trim()}>
      <CoinSprite size={size} />
    </span>
  );
}
