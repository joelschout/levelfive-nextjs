"use client";

import { useMemo, useState } from "react";

type QA = {
  q: string;
  a: string;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function YouAskWeAnswer() {
  const items = useMemo<QA[]>(
    () => [
      {
        q: "Why not just hire a full-time designer?",
        a: "Full-time hires come with overhead, ramp-up time, and fixed costs. With LevelFive, you get senior-level output on demand, without the long-term commitment.",
      },
      {
        q: "How do we request designs?",
        a: "Send a brief (or even a rough idea). We’ll clarify scope, agree on priorities, and start delivering iteratively with fast feedback loops.",
      },
      {
        q: "Is there a limit to how many requests we can make?",
        a: "No hard limit. We work through requests in priority order, keeping your queue moving and transparent.",
      },
      {
        q: "How fast will we receive our designs?",
        a: "Most requests start showing progress within 24–48 hours. Timelines depend on complexity, but you’ll always know what’s next.",
      },
      {
        q: "What kind of design work is included?",
        a: "UX/UI, web design, product design, branding systems, marketing collateral, and design QA. Anything that helps your product look and work better.",
      },
      {
        q: "Do you use AI in your design process?",
        a: "We use tools where they help speed up exploration, but every deliverable is refined by senior designers to meet your brand and quality bar.",
      },
      {
        q: "Can we request designs for multiple brands or products?",
        a: "Yes. We can support multiple brands/products as long as priorities are clear. We’ll help you structure requests for maximum throughput.",
      },
      {
        q: "What tools do you use?",
        a: "Figma, FigJam, Notion, Slack, and whatever your team already uses. We integrate into your workflow.",
      },
    ],
    []
  );

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_.85fr] lg:gap-14">
          {/* Left: FAQ */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl">
              YOU ASK, WE ANSWER
            </h2>

            <div className="mt-8 divide-y divide-black/10" onMouseLeave={() => setOpenIdx(null)}>
              {items.map((it, idx) => {
                const open = openIdx === idx;
                return (
                  <button
                    key={it.q}
                    type="button"
                    onClick={() => setOpenIdx(open ? null : idx)}
                    onMouseEnter={() => setOpenIdx(idx)}
                    onMouseLeave={() => setOpenIdx(null)}
                    onFocus={() => setOpenIdx(idx)}
                    className="w-full py-6 text-left"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="text-xl font-medium text-black/90 md:text-2xl">
                        {it.q}
                      </div>
                      <div className="text-black/70">
                        <Chevron open={open} />
                      </div>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/65">
                          {it.a}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-acid p-8 shadow-[0_30px_90px_rgba(0,0,0,.12)] ring-1 ring-black/10">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full bg-white/10 ring-2 ring-black/10">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.85),rgba(255,255,255,.1)_65%)]" />
                  </div>
                </div>
              </div>

              <h3 className="mt-6 text-4xl font-extrabold tracking-tight text-black">
                BOOK A QUICK
                <br />
                INTRO CALL
              </h3>

              <button className="mt-8 w-full rounded-full  bg-black px-6 py-4 text-center text-base font-semibold text-white shadow-[0_18px_60px_rgba(0,0,0,.35)]">
                Book a Call
              </button>

              <div className="mt-8 flex items-center justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold text-black/85">
                    Prefer email?
                  </div>
                  <div className="mt-1 text-sm text-black/80">
                    hello@levelfive.com
                  </div>
                </div>
                <div className="text-black/90">
                  <Arrow />
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-black/95">
                Insights in Your Inbox
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60">
                Join our newsletter for smarter business moves.
              </p>

              <div className="mt-8 flex items-center justify-between gap-4 border-b border-black/10 pb-3">
                <input
                  type="email"
                  placeholder="me@company.com"
                  className="w-full bg-transparent text-sm text-black/80 outline-none placeholder:text-black/35"
                />
                <button
                  aria-label="Subscribe"
                  className="text-black/80 transition hover:text-black"
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
