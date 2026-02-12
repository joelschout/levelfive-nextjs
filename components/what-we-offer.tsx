"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type OfferItem = {
  title: string;
  subtitle: string;
  body?: string[];
  image: string;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
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

export default function WhatWeOffer() {
  const items = useMemo<OfferItem[]>(
    () => [
      {
        title: "UX/UI Design",
        subtitle: "Intuitive, clean interfaces that users love",
        image: "/offers/Studio89-Elevate-Level5-2-scaled.jpg",
        body: [
          "We craft intuitive, conversion-focused user experiences and beautiful, clean interfaces that users love.",
          "From research and wireframes to high-fidelity prototypes, we design digital products that feel effortless and perform seamlessly across all devices.",
        ],
      },
      {
        title: "Web Design",
        subtitle: "Modern websites that look great and work better",
        image: "/offers/web.svg",
        body: [
          "High-impact websites with a premium feel — designed to be fast, responsive, and easy to scale.",
        ],
      },
      {
        title: "Marketing Collateral",
        subtitle: "Engaging, on-brand designs that bring your story to life",
        image: "/offers/marketing.svg",
        body: [
          "Campaign assets, pitch decks, social templates, and ad creatives — consistent, sharp, and ready to ship.",
        ],
      },
      {
        title: "Branding",
        subtitle: "Distinctive brand identities that leave a mark",
        image: "/offers/branding.svg",
        body: [
          "Identity systems that feel timeless: logo directions, typography, color, and guidelines that scale with your brand.",
        ],
      },
      {
        title: "Development",
        subtitle: "Powerful digital products, delivered seamlessly",
        image: "/offers/dev.svg",
        body: [
          "Modern builds with clean code, great performance, and a smooth handoff — from landing pages to full platforms.",
        ],
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-black md:text-4xl">
              WHAT WE OFFER
            </h2>
            <p className="mt-3 text-sm text-black/70">
              All things design, we got you covered.
            </p>

            {/* Hover preview (image changes on hover)
                If nothing is hovered, the preview area should be visually hidden (no border/background). */}
            <div
              className={
                "relative mt-10 hidden aspect-[4/5] w-full max-w-[380px] rounded-3xl md:block transition-opacity duration-200 " +
                (openIndex === null
                  ? "opacity-0 border-transparent bg-transparent"
                  : "opacity-100 border border-black/10 bg-black/[0.03]")
              }
              aria-hidden={openIndex === null}
            >
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {items.map((item, idx) => (
                  <Image
                    key={item.title}
                    src={item.image}
                    alt={item.title}
                    fill
                    className={
                      "object-cover transition duration-300 " +
                      (openIndex === idx ? "opacity-100" : "opacity-0")
                    }
                    sizes="(min-width: 768px) 360px, 0px"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div
              className="mt-2 divide-y divide-black/10"
              onMouseLeave={() => setOpenIndex(null)}
            >
              {items.map((item, idx) => {
                const open = openIndex === idx;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setOpenIndex(open ? null : idx)}
                    onMouseEnter={() => setOpenIndex(idx)}
                    onMouseLeave={() => setOpenIndex(null)}
                    onFocus={() => setOpenIndex(idx)}
                    className="w-full py-6 text-left"
                    aria-expanded={open}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-2xl font-semibold text-black md:text-3xl">
                          {item.title}
                        </div>
                        <div className="mt-2 text-sm text-black/70">
                          {item.subtitle}
                        </div>
                      </div>
                      <div className="mt-1 text-black/70">
                        <Chevron open={open} />
                      </div>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {item.body ? (
                          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-black/65">
                            {item.body.map((p) => (
                              <p key={p}>{p}</p>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
