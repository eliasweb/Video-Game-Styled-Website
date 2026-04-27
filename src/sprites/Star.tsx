type Props = { size?: number; className?: string; label?: string };

export default function Star({ size = 64, className, label = "Super star" }: Props) {
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
      <rect x="7" y="1" width="2" height="1" fill="#000" />
      <rect x="6" y="2" width="4" height="1" fill="#000" />
      <rect x="5" y="3" width="6" height="1" fill="#000" />
      <rect x="1" y="4" width="14" height="2" fill="#000" />
      <rect x="2" y="6" width="12" height="2" fill="#000" />
      <rect x="3" y="8" width="10" height="2" fill="#000" />
      <rect x="3" y="10" width="3" height="3" fill="#000" />
      <rect x="10" y="10" width="3" height="3" fill="#000" />
      {/* yellow fill */}
      <rect x="7" y="2" width="2" height="1" fill="#f8b800" />
      <rect x="6" y="3" width="4" height="1" fill="#f8b800" />
      <rect x="2" y="4" width="12" height="2" fill="#f8b800" />
      <rect x="3" y="6" width="10" height="2" fill="#f8b800" />
      <rect x="4" y="8" width="8" height="2" fill="#f8b800" />
      <rect x="4" y="10" width="2" height="2" fill="#f8b800" />
      <rect x="10" y="10" width="2" height="2" fill="#f8b800" />
      {/* eyes */}
      <rect x="6" y="6" width="1" height="2" fill="#000" />
      <rect x="9" y="6" width="1" height="2" fill="#000" />
      {/* sparkle highlight */}
      <rect x="5" y="5" width="1" height="1" fill="#fcfcfc" />
      <rect x="4" y="6" width="1" height="1" fill="#fcfcfc" />
    </svg>
  );
}
