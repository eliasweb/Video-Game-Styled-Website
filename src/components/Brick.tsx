type Props = {
  size?: number;
  className?: string;
  variant?: "brick" | "question" | "used";
  bouncing?: boolean;
};

export default function Brick({ size = 48, className, variant = "brick", bouncing = false }: Props) {
  if (variant === "question") {
    return (
      <svg
        role="img"
        aria-label="Question block"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
        className={`${bouncing ? "anim-bounce-slow" : ""} ${className ?? ""}`.trim()}
      >
        <rect x="0" y="0" width="16" height="16" fill="#000" />
        <rect x="1" y="1" width="14" height="14" fill="#f8b800" />
        <rect x="1" y="1" width="14" height="2" fill="#fce0a8" />
        <rect x="1" y="1" width="2" height="14" fill="#fce0a8" />
        <rect x="13" y="1" width="2" height="14" fill="#b87400" />
        <rect x="1" y="13" width="14" height="2" fill="#b87400" />
        {/* corner studs */}
        <rect x="2" y="2" width="2" height="2" fill="#000" />
        <rect x="12" y="2" width="2" height="2" fill="#000" />
        <rect x="2" y="12" width="2" height="2" fill="#000" />
        <rect x="12" y="12" width="2" height="2" fill="#000" />
        {/* ? */}
        <rect x="6" y="4" width="4" height="2" fill="#000" />
        <rect x="9" y="6" width="2" height="2" fill="#000" />
        <rect x="7" y="8" width="2" height="2" fill="#000" />
        <rect x="7" y="11" width="2" height="2" fill="#000" />
      </svg>
    );
  }
  if (variant === "used") {
    return (
      <svg
        role="img"
        aria-label="Used block"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
        className={className}
      >
        <rect x="0" y="0" width="16" height="16" fill="#000" />
        <rect x="1" y="1" width="14" height="14" fill="#b87400" />
        <rect x="1" y="13" width="14" height="2" fill="#803000" />
        <rect x="13" y="1" width="2" height="14" fill="#803000" />
      </svg>
    );
  }
  return (
    <svg
      role="img"
      aria-label="Brick block"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
    >
      <rect x="0" y="0" width="16" height="16" fill="#000" />
      <rect x="1" y="1" width="14" height="14" fill="#b85820" />
      <rect x="1" y="1" width="14" height="2" fill="#fce0a8" />
      <rect x="1" y="1" width="2" height="14" fill="#fce0a8" />
      <rect x="13" y="3" width="2" height="12" fill="#803000" />
      <rect x="1" y="13" width="14" height="2" fill="#803000" />
      {/* mortar lines */}
      <rect x="1" y="7" width="14" height="1" fill="#000" />
      <rect x="7" y="1" width="1" height="6" fill="#000" />
      <rect x="3" y="9" width="1" height="4" fill="#000" />
      <rect x="11" y="9" width="1" height="4" fill="#000" />
    </svg>
  );
}
