type Props = { size?: number; className?: string; label?: string };

export default function Goomba({ size = 64, className, label = "Goomba enemy" }: Props) {
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
      {/* head outline */}
      <rect x="4" y="1" width="8" height="1" fill="#000" />
      <rect x="3" y="2" width="10" height="1" fill="#000" />
      <rect x="2" y="3" width="12" height="1" fill="#000" />
      <rect x="2" y="4" width="12" height="6" fill="#000" />
      {/* head fill */}
      <rect x="4" y="2" width="6" height="1" fill="#b87400" />
      <rect x="3" y="3" width="9" height="1" fill="#b87400" />
      <rect x="3" y="4" width="10" height="5" fill="#b87400" />
      {/* highlight */}
      <rect x="10" y="2" width="2" height="1" fill="#fce0a8" />
      <rect x="11" y="3" width="2" height="2" fill="#fce0a8" />
      {/* eyes */}
      <rect x="5" y="5" width="2" height="3" fill="#fcfcfc" />
      <rect x="9" y="5" width="2" height="3" fill="#fcfcfc" />
      <rect x="6" y="6" width="1" height="2" fill="#000" />
      <rect x="10" y="6" width="1" height="2" fill="#000" />
      {/* eyebrows */}
      <rect x="4" y="4" width="3" height="1" fill="#000" />
      <rect x="9" y="4" width="3" height="1" fill="#000" />
      {/* lower face */}
      <rect x="4" y="9" width="8" height="1" fill="#000" />
      {/* feet */}
      <rect x="3" y="10" width="4" height="2" fill="#000" />
      <rect x="9" y="10" width="4" height="2" fill="#000" />
      <rect x="2" y="12" width="5" height="2" fill="#000" />
      <rect x="9" y="12" width="5" height="2" fill="#000" />
      <rect x="3" y="11" width="3" height="2" fill="#803000" />
      <rect x="10" y="11" width="3" height="2" fill="#803000" />
    </svg>
  );
}
