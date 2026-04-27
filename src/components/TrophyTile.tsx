import Star from "@/sprites/Star";

type Props = {
  title: string;
  client: string;
  vertical: string;
  metric: string;
  stars: 1 | 2 | 3;
  category: string;
};

export default function TrophyTile({ title, client, vertical, metric, stars, category }: Props) {
  return (
    <article className="pixel-frame flex flex-col gap-3">
      <div className="flex items-center gap-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className={i < stars ? "" : "opacity-20"}>
            <Star size={28} />
          </span>
        ))}
      </div>
      <h3 className="font-pixel text-sm leading-snug">{title}</h3>
      <div className="text-[1rem] text-nes-gray uppercase tracking-wide font-pixel text-[0.55rem]">
        {client} · {vertical}
      </div>
      <p className="text-[1.1rem]">{metric}</p>
      <div className="mt-auto pt-2 font-pixel text-[0.55rem] uppercase text-nes-blue">
        World · {category.replace("-", " ")}
      </div>
    </article>
  );
}
