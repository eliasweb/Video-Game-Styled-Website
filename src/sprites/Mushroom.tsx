type Props = { size?: number; className?: string; label?: string };

export default function Mushroom({ size = 64, className, label = "Mushroom power-up" }: Props) {
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
      {/* cap */}
      <rect x="4" y="1" width="8" height="1" fill="#000" />
      <rect x="3" y="2" width="10" height="1" fill="#000" />
      <rect x="2" y="3" width="12" height="1" fill="#000" />
      <rect x="1" y="4" width="14" height="3" fill="#000" />
      <rect x="2" y="3" width="10" height="1" fill="#e40058" />
      <rect x="2" y="4" width="12" height="2" fill="#e40058" />
      <rect x="4" y="2" width="2" height="1" fill="#fcfcfc" />
      <rect x="9" y="3" width="3" height="2" fill="#fcfcfc" />
      <rect x="3" y="5" width="2" height="1" fill="#fcfcfc" />
      {/* stem */}
      <rect x="5" y="7" width="6" height="1" fill="#000" />
      <rect x="4" y="8" width="8" height="6" fill="#000" />
      <rect x="5" y="8" width="6" height="5" fill="#fce0a8" />
      <rect x="6" y="9" width="1" height="1" fill="#000" />
      <rect x="9" y="9" width="1" height="1" fill="#000" />
      <rect x="7" y="11" width="2" height="1" fill="#000" />
      <rect x="5" y="13" width="6" height="1" fill="#000" />
    </svg>
  );
}
