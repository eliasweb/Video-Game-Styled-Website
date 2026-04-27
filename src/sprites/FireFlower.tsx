type Props = { size?: number; className?: string; label?: string };

export default function FireFlower({ size = 64, className, label = "Fire flower power-up" }: Props) {
  return (
    <svg
      role="img"
      aria-label={label}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
    >
      {/* outer petals */}
      <rect x="6" y="1" width="4" height="1" fill="#000" />
      <rect x="5" y="2" width="6" height="1" fill="#000" />
      <rect x="4" y="3" width="8" height="1" fill="#000" />
      <rect x="6" y="2" width="4" height="1" fill="#e40058" />
      <rect x="5" y="3" width="6" height="1" fill="#e40058" />
      <rect x="4" y="4" width="2" height="2" fill="#000" />
      <rect x="10" y="4" width="2" height="2" fill="#000" />
      <rect x="6" y="4" width="4" height="2" fill="#f8b800" />
      <rect x="5" y="4" width="1" height="1" fill="#f8b800" />
      <rect x="10" y="4" width="1" height="1" fill="#f8b800" />
      <rect x="4" y="5" width="8" height="1" fill="#fcfcfc" />
      {/* center */}
      <rect x="6" y="6" width="4" height="1" fill="#000" />
      <rect x="7" y="6" width="2" height="1" fill="#fcfcfc" />
      {/* stem */}
      <rect x="7" y="7" width="2" height="7" fill="#000" />
      <rect x="7" y="7" width="1" height="7" fill="#00a800" />
      {/* leaves */}
      <rect x="3" y="9" width="3" height="2" fill="#000" />
      <rect x="10" y="9" width="3" height="2" fill="#000" />
      <rect x="4" y="9" width="2" height="1" fill="#00a800" />
      <rect x="10" y="9" width="2" height="1" fill="#00a800" />
      {/* base */}
      <rect x="5" y="13" width="6" height="1" fill="#000" />
    </svg>
  );
}
