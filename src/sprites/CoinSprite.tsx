type Props = { size?: number; className?: string; label?: string };

export default function CoinSprite({ size = 32, className, label = "Coin" }: Props) {
  return (
    <svg
      role="img"
      aria-label={label}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 12 16"
      shapeRendering="crispEdges"
    >
      <rect x="4" y="1" width="4" height="1" fill="#000" />
      <rect x="3" y="2" width="6" height="1" fill="#000" />
      <rect x="2" y="3" width="8" height="1" fill="#000" />
      <rect x="2" y="4" width="8" height="9" fill="#000" />
      <rect x="3" y="13" width="6" height="1" fill="#000" />
      <rect x="4" y="14" width="4" height="1" fill="#000" />
      {/* fill */}
      <rect x="4" y="2" width="4" height="1" fill="#f8b800" />
      <rect x="3" y="3" width="6" height="1" fill="#f8b800" />
      <rect x="3" y="4" width="6" height="8" fill="#f8b800" />
      <rect x="4" y="12" width="4" height="1" fill="#f8b800" />
      {/* center stripe */}
      <rect x="5" y="4" width="2" height="8" fill="#b87400" />
      {/* shine */}
      <rect x="3" y="4" width="1" height="3" fill="#fce0a8" />
    </svg>
  );
}
