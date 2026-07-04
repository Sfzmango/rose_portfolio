import React from "react";

export function DropCap({ letter, children, tone = "ink", size = 46, style }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body)",
        lineHeight: "var(--lh-body)",
        color: tone === "ink" ? "var(--ink-700)" : "var(--ivory-400)",
        ...style,
      }}
    >
      <span
        style={{
          float: "left",
          fontFamily: "var(--font-blackletter)",
          fontSize: size,
          lineHeight: 0.78,
          color: "var(--accent-rust)",
          padding: "4px 8px 0 0",
        }}
      >
        {letter}
      </span>
      {children}
    </div>
  );
}
