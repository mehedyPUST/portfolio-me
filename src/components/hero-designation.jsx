"use client";

import { useEffect, useState } from "react";

export default function HeroDesignation({ items, fallback }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items?.length) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [items]);

  const value = items?.[index] ?? fallback;

  return (
    <span className="hero-designation-chip inline-flex min-h-11 items-center rounded-full px-4 py-2">
      <span className="hero-designation-dot" aria-hidden="true" />
      <span className="hero-designation-text">{value}</span>
    </span>
  );
}
