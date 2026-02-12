import type { ReactNode } from "react";
import clsx from "clsx";

type Benefit = {
  title: string;
  desc: string;
  iconBg: string;
  icon: ReactNode;
  rotate: string;
};

function IconLock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 10h12v10H6V10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M14 4c2.8 0 6 3.2 6 6 0 4-3 8-8 10-1.2-1.2-2.8-2.8-4-4 2-5 6-8 10-8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 17l-3 3 1-4 2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconFingerprint() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 11a3 3 0 0 1 3 3v2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 14c0-1.66 1.34-3 3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 14v1.5c0 3.5 2 6.5 5 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 13.5V14c0 5-2.5 8-5 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 9.2A6 6 0 0 1 12 7a6 6 0 0 1 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BenefitCard({ b }: { b: Benefit }) {
  return (
    <div
      className={clsx(
        "group relative w-[300px] shrink-0 transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]",
        b.rotate,
        "hover:rotate-0 hover:-translate-y-2 hover:scale-[1.03]"
      )}
    >
      <div className="relative rounded-3xl border border-black/10 bg-black/5 p-7 shadow-[0_30px_90px_-70px_rgba(0,0,0,.35)]">
        <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        <div className="relative">
          <div
            className={clsx(
              "mb-6 grid h-12 w-12 place-items-center rounded-2xl text-black shadow-[0_18px_50px_-20px_rgba(0,0,0,.18)]",
              b.iconBg
            )}
          >
            {b.icon}
          </div>

          <h3 className="whitespace-pre-line text-xl font-semibold tracking-tight text-black">
            {b.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-black/70">{b.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChoose() {
  const benefits: Benefit[] = [
    {
      title: "Predictable\nPricing",
      desc:
        "Clear project fees with no hidden charges. LevelFive scopes every UX/UI and branding project upfront for full cost clarity.",
      iconBg: "bg-acid",
      icon: <IconLock />,
      rotate: "-rotate-[6deg]",
    },
    {
      title: "Fast Turnaround",
      desc:
        "High-quality UX/UI and product design delivered quickly. Smooth revisions keep your digital project moving.",
      iconBg: "bg-acid",
      icon: <IconBolt />,
      rotate: "rotate-[2deg]",
    },
    {
      title: "Highest Quality",
      desc:
        "Senior-level design for web, app, and brand experiences. Clean, modern, and built to perform across digital platforms.",
      iconBg: "bg-acid",
      icon: <IconStar />,
      rotate: "rotate-[6deg]",
    },
    {
      title: "Scale Anytime",
      desc:
        "Add new pages, features, or full product work with ease. LevelFive adapts to your roadmap as your business grows.",
      iconBg: "bg-acid",
      icon: <IconRocket />,
      rotate: "rotate-[10deg]",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
            WHY CHOOSE LEVELFIVE?
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base">
            Get reliable, high-quality design without the overhead of hiring in-house or dealing with
            freelancers.
          </p>
        </div>

        <div className="mt-14">
          {/* Max 4 cards per row */}
          <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 [perspective:1200px]">
            {benefits.map((b, idx) => (
              <div key={idx} className="[transform-style:preserve-3d]">
                <BenefitCard b={b} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
