import React from "react";

export function WaxSeal({ initials = "LI", size = 58, style }) {
  const inner = Math.round(size * 0.69);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--gradient-seal)",
        boxShadow: "inset 0 2px 6px rgba(255,255,255,.18), inset 0 -4px 8px rgba(0,0,0,.45), 0 6px 12px rgba(0,0,0,.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "rotate(-8deg)",
        flex: "none",
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-smallcaps)",
          fontSize: Math.round(size * 0.29),
          color: "#e2cfa8",
          border: "1px solid rgba(226,207,168,.55)",
          borderRadius: "50%",
          width: inner,
          height: inner,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {initials}
      </span>
    </div>
  );
}
