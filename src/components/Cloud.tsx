type Props = {
  size?: number;
  className?: string;
};

export default function Cloud({ size = 96, className }: Props) {
  return (
    <svg
      role="img"
      aria-label="Cloud"
      width={size}
      height={(size * 9) / 16}
      viewBox="0 0 32 18"
      shapeRendering="crispEdges"
      className={className}
    >
      <rect x="6" y="4" width="2" height="2" fill="#000" />
      <rect x="8" y="2" width="2" height="2" fill="#000" />
      <rect x="10" y="2" width="6" height="2" fill="#000" />
      <rect x="16" y="4" width="2" height="2" fill="#000" />
      <rect x="18" y="2" width="6" height="2" fill="#000" />
      <rect x="24" y="4" width="2" height="2" fill="#000" />
      <rect x="26" y="6" width="2" height="2" fill="#000" />
      <rect x="4" y="6" width="2" height="6" fill="#000" />
      <rect x="6" y="12" width="22" height="2" fill="#000" />
      <rect x="28" y="8" width="2" height="4" fill="#000" />
      {/* fill */}
      <rect x="6" y="6" width="22" height="6" fill="#fcfcfc" />
      <rect x="8" y="4" width="16" height="2" fill="#fcfcfc" />
      <rect x="10" y="4" width="6" height="2" fill="#fcfcfc" />
      <rect x="18" y="4" width="6" height="2" fill="#fcfcfc" />
      {/* shadow */}
      <rect x="6" y="10" width="22" height="2" fill="#c8d8ff" />
    </svg>
  );
}
