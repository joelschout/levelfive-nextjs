"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: dot inside a ring.
 * - Only enabled for fine-pointer devices (mouse/trackpad)
 * - Smooth follow via requestAnimationFrame + lerp
 */
export default function CustomCursor() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [down, setDown] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  // Current + target positions (client pixels)
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia?.("(pointer: fine)")?.matches;
    setEnabled(!!isFinePointer);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const el = wrapRef.current;
    if (!el) return;

    // Start centered to avoid a jump
    current.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    // Smooth follow
    const tick = () => {
      const lerp = 0.18; // lower = smoother/slower
      current.current.x += (target.current.x - current.current.x) * lerp;
      current.current.y += (target.current.y - current.current.y) * lerp;

      el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    // Pointer interactions (buttons/links + custom cursors)
    const isInteractive = (t: EventTarget | null) => {
      const el = t as HTMLElement | null;
      if (!el) return false;
      return !!el.closest?.(
        "a,button,[role='button'],input,textarea,select,[data-cursor='pointer']"
      );
    };

    const getVideoLabel = (t: EventTarget | null) => {
      const el = t as HTMLElement | null;
      const hit = el?.closest?.("[data-cursor='video']") as HTMLElement | null;
      if (!hit) return null;
      return hit.getAttribute("data-cursor-label") || "Bekijk deze video";
    };

    const onOver = (e: MouseEvent) => {
      const v = getVideoLabel(e.target);
      if (v) {
        setLabel(v);
        setActive(false);
        return;
      }
      setLabel(null);
      setActive(isInteractive(e.target));
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      // If moving into another video target, keep label
      if (related && related.closest?.("[data-cursor='video']")) return;
      setLabel(null);

      // If moving into another interactive target, keep pointer
      if (related && isInteractive(related)) return;
      setActive(false);
    };

    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      aria-hidden
    >
      {label ? (
        <div className="cursor-label">
          {label}
        </div>
      ) : (
        <div
          className={
            "cursor-ring flex items-center justify-center transition-transform duration-150 " +
            (active ? "cursor-ring--active" : "") +
            (down ? " cursor-ring--down" : "")
          }
        >
          <div
            className={
              "cursor-dot transition-transform duration-150 " +
              (active ? "cursor-dot--active" : "") +
              (down ? " cursor-dot--down" : "")
            }
          />
        </div>
      )}
    </div>
  );
}
