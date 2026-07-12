"use client";

import { useId } from "react";

export default function PyrigenMark({
  className = "",
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  const id = useId();
  const lg = `nl-${id}`;
  const rg = `nr-${id}`;

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={lg} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2E5081" />
          <stop offset="1" stopColor="#14294A" />
        </linearGradient>
        <linearGradient id={rg} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1D3A5F" />
          <stop offset="1" stopColor="#0B1C33" />
        </linearGradient>
      </defs>
      <polygon points="50,5 74.5,60 50,93" fill={`url(#${rg})`} />
      <polygon points="50,5 50,93 25.5,60" fill={`url(#${lg})`} />
      <line x1="50" y1="5" x2="50" y2="93" stroke="#C6A44A" strokeWidth={strokeWidth} />
    </svg>
  );
}
