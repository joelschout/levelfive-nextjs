"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scroll wrapper for Next.js App Router.
 * - Respects `prefers-reduced-motion`
 * - Cleans up RAF + instance on unmount
 */
export default function LenisProvider({ children }: PropsWithChildren) {
  const rafId = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion) return;

    const lenis = new Lenis({
      // Feel free to tweak to taste
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };

    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = null;
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
