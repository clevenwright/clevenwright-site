"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const fill = document.getElementById("spineFill");
    const docH = () => document.documentElement.scrollHeight - window.innerHeight;

    const onScroll = () => {
      const y = window.scrollY;
      nav?.classList.toggle("scrolled", y > 40);
      if (fill) {
        const p = Math.min(y / Math.max(docH(), 1), 1);
        fill.style.height = `${p * window.innerHeight}px`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | undefined;

    if (!reducedMotion) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
      );

      document.querySelectorAll(".reveal").forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = `${Math.min(i, 6) * 40}ms`;
        observer?.observe(el);
      });
    } else {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("in");
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return null;
}
