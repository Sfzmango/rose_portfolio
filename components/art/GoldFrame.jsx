import React from "react";

export function GoldFrame({ src, alt = "", width = 470, padding = 15, hoverLift = true, children, style }) {
  const [hover, setHover] = React.useState(false);
  const lifted = hover && hoverLift;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        background: "var(--gradient-gold-frame)",
        padding,
        boxShadow: lifted ? "0 36px 66px rgba(0,0,0,.78)" : "var(--shadow-frame)",
        transform: lifted ? "translateY(-6px)" : "none",
        transition: "transform .6s var(--ease-lift), box-shadow .6s",
        ...style,
      }}
    >
      <div style={{ background: "#0c0b09", padding: 4 }}>
        <div style={{ background: "var(--gradient-gold-fillet)", padding: 3 }}>
          {src ? <img src={src} alt={alt} style={{ display: "block", width }} /> : children}
        </div>
      </div>
    </div>
  );
}
