type Props = {
  children: React.ReactNode;
  speaker?: string;
  className?: string;
  showCaret?: boolean;
};

export default function DialogBox({ children, speaker, className, showCaret = true }: Props) {
  return (
    <div className={`pixel-frame-dark relative ${className ?? ""}`.trim()}>
      {speaker && (
        <div className="font-pixel text-[0.65rem] text-nes-yellow mb-3 uppercase tracking-wider">
          {speaker}
        </div>
      )}
      <div className="text-[1.15rem] leading-snug">{children}</div>
      {showCaret && (
        <span
          aria-hidden
          className="anim-blink absolute right-3 bottom-2 font-pixel text-nes-yellow text-sm"
        >
          ▼
        </span>
      )}
    </div>
  );
}
