"use client";

import Image from "next/image";
import clsx from "clsx";

const NAV = [
  { label: "Case Studies", href: "#" },
  { label: "Services", href: "#" },
  { label: "About", href: "#" },
];

export default function HeaderHero() {
  return (
    <section data-no-gsap className="relative overflow-hidden bg-white text-white">
      {/* Background video */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* No overlay/glow */}

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <TopNav />

        <div className="min-h-[70vh] pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-18 lg:pb-20 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-balance font-black tracking-tight leading-[0.95] text-[44px] sm:text-[64px] lg:text-[86px] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.45)]">
              <span className="block">Content die</span>
              <span className="block">
                <span className="text-acid">beweegt</span> &amp; verkoopt.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-white/85 text-[15px] sm:text-[16px] leading-relaxed drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              Wij maken conversie-gedreven websites en digitale experiences die snel laden, strak voelen en resultaten leveren.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-acid px-6 text-sm font-semibold text-black shadow-soft transition hover:translate-y-[-1px] hover:brightness-95"
              >
                Request a Quote
              </a>

              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white/95 border border-white/35 bg-white/10 backdrop-blur-md transition hover:translate-y-[-1px] hover:bg-white/15"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hr-fade" />
    </section>
  );
}

function TopNav() {
  return (
    <header className="pt-6">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/LevelFive-LogoFile-Black.png"
            alt="LevelFive"
            width={170}
            height={44}
            priority
            className="h-9 w-auto object-contain invert"
          />
        </a>

        {/* right aligned nav + CTA */}
        <div className="flex items-center justify-end gap-4">
          <nav className="hidden items-center gap-10 text-sm text-white/80 md:flex drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
            {NAV.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className={clsx(
              "hidden md:inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold",
              "bg-white text-black shadow-soft transition hover:translate-y-[-1px] hover:brightness-95"
            )}
          >
            Get Started
          </a>

          {/* mobile menu button (visual only) */}
          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md"
            aria-label="Open menu"
          >
            <span className="relative h-[14px] w-[18px]">
              <span className="absolute left-0 top-0 h-[2px] w-full rounded bg-white" />
              <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded bg-white/80" />
              <span className="absolute left-0 bottom-0 h-[2px] w-full rounded bg-white" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
