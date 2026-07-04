import React from "react";

export function PlaqueLabel({ children, style }) {
  return (
    <div style={{ background: "var(--gradient-plaque-border)", padding: 1, display: "inline-block", ...style }}>
      <div
        style={{
          background: "var(--gradient-plaque)",
          padding: "8px 22px",
          fontFamily: "var(--font-smallcaps)",
          fontSize: 12.5,
          letterSpacing: "var(--ls-plaque)",
          color: "var(--ivory-300)",
          textShadow: "0 1px 0 rgba(0,0,0,.9)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
