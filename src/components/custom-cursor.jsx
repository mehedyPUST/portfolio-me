// "use client";

// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     if (
//       typeof window === "undefined" ||
//       !window.matchMedia("(hover: hover) and (pointer: fine)").matches
//     ) {
//       return undefined;
//     }

//     const handleMove = (event) => {
//       setPosition({ x: event.clientX, y: event.clientY });
//       setVisible(true);
//     };

//     const handleLeave = () => {
//       setVisible(false);
//     };

//     const handleEnter = () => {
//       setVisible(true);
//     };

//     window.addEventListener("mousemove", handleMove);
//     window.addEventListener("mouseout", handleLeave);
//     window.addEventListener("mouseenter", handleEnter);

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//       window.removeEventListener("mouseout", handleLeave);
//       window.removeEventListener("mouseenter", handleEnter);
//     };
//   }, []);

//   return (
//     <div
//       aria-hidden="true"
//       className={`custom-cursor-dot ${visible ? "is-visible" : ""}`}
//       style={{
//         transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//       }}
//     />
//   );
// }
"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return undefined;
    }

    // Direct instant movement - no lag
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    const handleEnter = () => {
      setVisible(true);
    };

    // Handle hover effects for interactive elements
    const handleInteractiveEnter = () => {
      setIsHovering(true);
    };

    const handleInteractiveLeave = () => {
      setIsHovering(false);
    };

    // Detect all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], .interactive, [data-cursor-interactive]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter);
      el.addEventListener("mouseleave", handleInteractiveLeave);
    });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className={`custom-cursor-dot ${visible ? "is-visible" : ""} ${isHovering ? "is-hovering" : ""}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
}