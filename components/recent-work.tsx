"use client";

import Image from "next/image";
import { useRef } from "react";

const ITEMS = [
  {
    title: "Lilou Restaurant",
    tag: "Fotografie",
    image: "/work/LevelFive-LilouFotografie-14-819x1024.jpg",
  },
  {
    title: "Brisa Antwerp",
    tag: "Fotografie",
    image: "/work/LevelFive-BrisaOpening-48-819x1024.jpg",
  },
  {
    title: "Brenzon",
    tag: "Fotografie",
    image: "/work/LevelFive-Brezon-Zierikzee-10-683x1024.jpg",
  },
  {
    title: "Goes is Goes",
    tag: "Fotografie",
    image: "/work/LevelFive-Kinderstad-17-819x1024.jpg",
  },
  {
    title: "Thank Goes Its Friday",
    tag: "Videografie",
    image:
      "/work/471749530_874364008222611_474599154366115814_n-1-e1761830050699-1024x437.jpg",
  },
];

export default function RecentWork() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card='true']");
    const step = card ? card.offsetWidth + 28 : 520;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-liquid">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-14 sm:py-20">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-black text-[34px] tracking-tight font-extrabold sm:text-[44px]">
            RECENT WORK
          </h2>

          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => scrollByCards(-1)}
              className="group grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-acid transition hover:brightness-95"
            >
              <span className="text-black/90 text-2xl leading-none -translate-x-[1px] transition group-hover:text-black">
                ‹
              </span>
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByCards(1)}
              className="group grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-acid transition hover:brightness-95"
            >
              <span className="text-black/90 text-2xl leading-none translate-x-[1px] transition group-hover:text-black">
                ›
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10">
          <div
            ref={scrollerRef}
            className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-7 overflow-x-auto px-6 pb-2"
          >
            {ITEMS.map((item) => (
              <article key={item.title} data-card="true" className="snap-start">
                <a
                  href="#"
                  className="group relative block h-[380px] w-[320px] overflow-hidden rounded-[28px] border border-black/10 bg-black/5 transition-transform duration-300 hover:-translate-y-1 sm:h-[420px] sm:w-[360px] lg:h-[460px] lg:w-[410px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    priority={false}
                    sizes="(max-width: 768px) 320px, 420px"
                  />

                  {/* Bottom overlay title + tag */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                    <div className="max-w-[85%]">
                      <h3 className="text-white text-[34px] font-extrabold leading-[1] drop-shadow-[0_12px_28px_rgba(0,0,0,.35)]">
                        {item.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center rounded-full border border-white/35 bg-white/25 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,.22)]">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <div className="pointer-events-none absolute right-5 top-5 translate-y-1 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-acid shadow-[0_20px_60px_rgba(0,0,0,.22)]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="black"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                        <path
                          d="M10 7h7v7"
                          stroke="black"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
