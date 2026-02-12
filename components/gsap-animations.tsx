"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global scroll-reveal animations.
 * - Fades in each section's inner wrapper as it enters the viewport.
 * - Skips sections that have `data-no-gsap`.
 */
export default function GsapAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));

    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      if (section.hasAttribute("data-no-gsap")) return;

      const target = (section.firstElementChild as HTMLElement) ?? section;

      gsap.set(target, { opacity: 0, y: 26 });

      const tween = gsap.to(target, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 35%",
          toggleActions: "play none none reverse",
        },
      });

      const st = tween.scrollTrigger;
      if (st) triggers.push(st);
    });

    // "Ways to work" outlined numbers (1/2/3) reveal on scroll
    const wayNums = Array.from(document.querySelectorAll<HTMLElement>("[data-way-num]"));
    if (wayNums.length) {
      gsap.set(wayNums, { opacity: 0, y: 12 });
      const tw = gsap.to(wayNums, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: wayNums[0].closest("section") || wayNums[0],
          start: "top 70%",
        },
      });
      const st = tw.scrollTrigger;
      if (st) triggers.push(st);
    }

    // Keep ScrollTrigger correct after images/fonts load
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return null;
}
