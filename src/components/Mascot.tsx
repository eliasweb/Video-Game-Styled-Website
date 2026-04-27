type Props = {
  size?: number;
  className?: string;
  waving?: boolean;
  label?: string;
};

/**
 * Generic 8-bit "agency" mascot — a small plumber-coded character
 * inspired by the era but distinctly its own. Cap, mustache, blue overalls.
 */
export default function Mascot({ size = 96, className, waving = true, label = "Agency mascot" }: Props) {
  return (
    <div
      className={`relative inline-block ${className ?? ""}`.trim()}
      style={{ width: size, height: size }}
      aria-label={label}
      role="img"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
        className="anim-mascot-idle absolute inset-0"
      >
        {/* hat */}
        <rect x="3" y="1" width="8" height="1" fill="#000" />
        <rect x="2" y="2" width="10" height="1" fill="#000" />
        <rect x="2" y="3" width="10" height="2" fill="#e40058" />
        <rect x="6" y="3" width="4" height="2" fill="#fcfcfc" />
        {/* hair sides */}
        <rect x="2" y="5" width="2" height="2" fill="#803000" />
        <rect x="11" y="5" width="2" height="2" fill="#803000" />
        {/* face */}
        <rect x="4" y="5" width="7" height="3" fill="#fce0a8" />
        {/* eyes */}
        <rect x="6" y="5" width="1" height="2" fill="#000" />
        <rect x="9" y="5" width="1" height="2" fill="#000" />
        {/* mustache */}
        <rect x="5" y="7" width="6" height="1" fill="#000" />
        {/* ear */}
        <rect x="11" y="6" width="1" height="2" fill="#fce0a8" />
        {/* neck/shirt */}
        <rect x="5" y="8" width="6" height="1" fill="#e40058" />
        {/* overalls */}
        <rect x="4" y="9" width="8" height="4" fill="#0058f8" />
        <rect x="6" y="9" width="1" height="2" fill="#f8b800" />
        <rect x="9" y="9" width="1" height="2" fill="#f8b800" />
        {/* arms */}
        <rect x="2" y="9" width="2" height="3" fill="#e40058" />
        {/* shoes */}
        <rect x="3" y="13" width="4" height="2" fill="#000" />
        <rect x="9" y="13" width="4" height="2" fill="#000" />
        <rect x="2" y="14" width="5" height="1" fill="#000" />
        <rect x="9" y="14" width="5" height="1" fill="#000" />
      </svg>
      {/* waving arm overlay */}
      {waving && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          shapeRendering="crispEdges"
          className="anim-wave absolute inset-0"
          style={{ transformOrigin: `${size * 0.78}px ${size * 0.62}px` }}
        >
          <rect x="12" y="9" width="2" height="3" fill="#e40058" />
          <rect x="13" y="7" width="2" height="2" fill="#fce0a8" />
        </svg>
      )}
    </div>
  );
}
