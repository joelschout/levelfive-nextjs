"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  text: string;
  className?: string;
};

/**
 * "Read along" scroll effect:
 * Words animate from grey -> black while you scroll through the paragraph.
 */
export default function ScrollRead({ text, className }: Props) {
  const rootRef = useRef<HTMLParagraphElement | null>(null);

  const words = useMemo(() => {
    return text
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }, [text]);

  useEffect(() => {
    if (!rootRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const wordEls = rootRef.current?.querySelectorAll<HTMLElement>("[data-word]");
      if (!wordEls || wordEls.length === 0) return;

      gsap.set(wordEls, { color: "rgba(0,0,0,0.35)" });

      gsap.to(wordEls, {
        color: "rgba(0,0,0,0.92)",
        ease: "none",
        stagger: 1,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
          end: "bottom 35%",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [words.length]);

  return (
    <p ref={rootRef} className={className} style={{ wordSpacing: "0.08em" }}>
      {words.map((w, i) => (
        <span key={i} className="inline">
          <span data-word className="inline-block">
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
}
