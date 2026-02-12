"use client";

import { useEffect, useMemo, useState } from "react";

type VideoItem = { title: string; src: string; poster?: string };

const VIDEOS: VideoItem[] = [
  { title: "Video 01", src: "/videos/slider/hero-video.mp4" },
  { title: "Video 02", src: "/videos/slider/testviddy.mp4" },
  { title: "Video 03", src: "/videos/slider/thankgoes.mp4" },
  { title: "Video 04", src: "/videos/slider/Websitevideo-mobile-1.mp4" },
  { title: "Video 05", src: "/videos/slider/Lilou-Reels-v2.mp4" },
];

function Modal({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 p-6"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
        <button
          type="button"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/20"
          onClick={onClose}
        >
          Sluiten
        </button>
        <video
          src={src}
          className="h-auto w-full"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}

function VideoCard({
  item,
  onOpen,
}: {
  item: VideoItem;
  onOpen: (src: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item.src)}
      className="group w-[360px] shrink-0 text-left sm:w-[420px] lg:w-[520px]"
      data-cursor="video"
      data-cursor-label="Bekijk deze video"
    >
      <div className="relative h-[230px] overflow-hidden rounded-3xl border border-black/10 bg-black/5 sm:h-[260px] lg:h-[300px]">
        <video
          src={item.src}
          poster={item.poster}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </button>
  );
}

export default function VideoMarquee() {
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const duplicated = useMemo(() => [...VIDEOS, ...VIDEOS], []);

  return (
    <section className="py-14 sm:py-16">
      <div className="marquee">
        <div
          className="marquee-track gap-6 px-6"
          style={{ ["--marquee-duration" as any]: "55s" }}
        >
          {duplicated.map((item, i) => (
            <VideoCard
              key={`${item.title}-${i}`}
              item={item}
              onOpen={setOpenSrc}
            />
          ))}
        </div>
      </div>

      <Modal src={openSrc} onClose={() => setOpenSrc(null)} />
    </section>
  );
}
