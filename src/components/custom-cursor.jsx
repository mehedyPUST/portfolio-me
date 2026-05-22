"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // মিডিয়া কুয়েরি চেক - টাচ ডিভাইসে কাস্টম কার্সার রেন্ডার করবে না
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return undefined;
    }

    // ১. পারফরম্যান্স বুস্টেড ডিরেক্ট DOM ম্যানিপুলেশন (কোনো রি-রেন্ডারিং ল্যাগ নেই)
    const handleMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    // ২. গ্লোবাল ইভেন্ট ডেলিগেশন (Event Delegation)
    // এর ফলে SPA রাউটিং বা ডাইনামিক ফিল্টারিং হলেও হোভার ইফেক্ট ব্রেক করবে না
    const handleMouseOver = (event) => {
      const target = event.target;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive, [data-cursor-interactive]'
      );

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [visible]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`custom-cursor-dot ${visible ? "is-visible" : ""} ${isHovering ? "is-hovering" : ""
        }`}
    />
  );
}