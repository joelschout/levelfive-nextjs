import clsx from "clsx";

const LOGOS = [
  "DIFC",
  "BAKKAL",
  "IGNYTE",
  "JOY SPRING",
  "TAMER",
  "iRestore",
  "OYRISS HOME",
  "R",
];

export default function BrandStrip({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={clsx("w-full border-t border-black/10", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="flex items-center justify-between gap-10 overflow-x-auto no-scrollbar">
          {LOGOS.map((name) => (
            <div
              key={name}
              className="shrink-0 select-none text-black/60 font-semibold tracking-[0.26em] uppercase text-xs sm:text-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
