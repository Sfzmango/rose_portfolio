import React from "react";

export function SpecimenCard({ no, title, note, price, meta, image, imageAlt = "", blend = true, tone = "dark", last = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === "dark";
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        background: dark ? "var(--gradient-card)" : "var(--parchment-100)",
        padding: "15px 15px 17px",
        boxShadow: hover ? (dark ? "var(--shadow-card-hover)" : "0 20px 34px rgba(60,40,15,.38)") : dark ? "var(--shadow-card)" : "var(--shadow-card-light)",
        border: "1px solid rgba(70,50,25,.35)",
        position: "relative",
        transform: hover ? "translateY(-8px)" : "none",
        transition: "transform .55s var(--ease-lift), box-shadow .55s",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.07, backgroundImage: "var(--texture-grain)" }}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: 152, height: 190, borderRadius: "50%", overflow: "hidden", border: "3px double var(--ink-400)", background: "#f4eedd" }}>
          <img
            src={image}
            alt={imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: blend ? "multiply" : "normal", transform: hover ? "scale(1.07)" : "scale(1)", transition: "transform 2.5s ease" }}
          />
        </div>
      </div>
      {no ? <div style={{ fontFamily: "var(--font-label)", fontSize: 10.5, color: "var(--text-label)", marginTop: 14 }}>{no}</div> : null}
      <div style={{ fontFamily: "var(--font-body)", fontSize: 18, color: "#2c2114", marginTop: 2 }}>{title}</div>
      {note ? <div style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 13, color: "var(--ink-500)", marginTop: 3 }}>{note}</div> : null}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, borderTop: "1px dotted var(--leader-dots)", paddingTop: 10 }}>
        <span style={{ fontFamily: "var(--font-label)", fontSize: 14, color: "var(--ink-800)" }}>{price}</span>
        {last ? (
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "var(--gradient-seal)", boxShadow: "inset 0 1px 2px rgba(255,255,255,.2)" }}></span>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 10, color: "var(--accent-rust)" }}>last one</span>
          </span>
        ) : meta ? (
          <span style={{ fontFamily: "var(--font-label)", fontSize: 10, color: "var(--text-label)" }}>{meta}</span>
        ) : null}
      </div>
    </div>
  );
}
