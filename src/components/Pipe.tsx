type Props = {
  height?: number;
  width?: number;
  label?: string;
  className?: string;
};

export default function Pipe({ height = 160, width = 120, label, className }: Props) {
  return (
    <div
      className={`relative inline-flex flex-col items-center ${className ?? ""}`.trim()}
      style={{ width }}
    >
      {/* lip */}
      <div
        className="relative"
        style={{ width: width + 24, height: 40 }}
      >
        <div className="absolute inset-0 bg-nes-green border-x-[6px] border-y-[6px] border-nes-black" />
        <div
          aria-hidden
          className="absolute left-1 top-1 bg-nes-green-dark"
          style={{ width: 8, height: 28 }}
        />
        <div aria-hidden className="absolute left-2 top-1 bg-nes-white/60" style={{ width: 4, height: 28 }} />
      </div>
      {/* body */}
      <div
        className="relative bg-nes-green border-x-[6px] border-nes-black"
        style={{ width, height }}
      >
        <div
          aria-hidden
          className="absolute left-1 top-0 bg-nes-green-dark h-full"
          style={{ width: 8 }}
        />
        <div
          aria-hidden
          className="absolute left-3 top-0 bg-nes-white/40 h-full"
          style={{ width: 4 }}
        />
        {label && (
          <span className="font-pixel text-[0.55rem] text-nes-white absolute inset-0 flex items-center justify-center px-2 text-center leading-tight uppercase">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
