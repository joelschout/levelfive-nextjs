const STARS = 5;

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  badge: string; // small square “logo” placeholder
  badgeBg: string;
};

const DATA: Testimonial[] = [
  {
    quote:
      "The Portl interface feels clearer and more intuitive now. The updates instantly improved how our users navigate the product. Reliable work with a premium touch.",
    name: "Michael Coyle",
    title: "Founder & CEO of Portl",
    badge: "P",
    badgeBg: "bg-black",
  },
  {
    quote:
      "Working with LevelFive was a game-changer for our startup. Their UX insights and clean design turned our app into something users actually love to use. Fast, professional, and visionary.",
    name: "Brian Kings",
    title: "CEO at PandaPanda",
    badge: "🐼",
    badgeBg: "bg-emerald-500/20",
  },
  {
    quote:
      "LevelFive completely transformed our brand presence. From strategy to execution, everything was seamless. We saw a 3x increase in engagement after launch.",
    name: "Tariq Ahmed",
    title: "Founder of Teenerz",
    badge: "👁️",
    badgeBg: "bg-red-500/20",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: STARS }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-amber-400"
          aria-hidden
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-liquid">
      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
        <h2 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl">
          TESTIMONIALS
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DATA.map((t) => (
            <article
              key={t.name}
              className="glass relative rounded-3xl p-8 md:p-9"
            >
              <Stars />

              <p className="mt-6 text-[22px] font-semibold leading-snug text-black/95 md:text-[24px]">
                “{t.quote}”
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${t.badgeBg} text-black shadow-[0_18px_60px_rgba(0,0,0,.45)]`}
                >
                  <span className="text-lg font-black">{t.badge}</span>
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-black/90">
                    {t.name}
                  </div>
                  <div className="mt-1 text-sm text-black/55">{t.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
