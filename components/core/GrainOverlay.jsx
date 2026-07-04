import React from "react";

export function GrainOverlay({ parchment = false, opacity, style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity: opacity != null ? opacity : parchment ? 0.08 : 0.055,
        backgroundImage: "var(--texture-grain)",
        ...style,
      }}
    ></div>
  );
}
