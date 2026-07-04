import React from "react";

export function NavRow({ items = [], tone = "dark", gap = 22, style }) {
  const [hi, setHi] = React.useState(-1);
  const color = tone === "dark" ? "#d9cfa8" : "var(--ink-500)";
  const hover = tone === "dark" ? "#f4e6ba" : "var(--text-heading-ink)";
  return (
    <nav style={{ display: "flex", justifyContent: "center", alignItems: "center", gap, fontFamily: "var(--font-smallcaps)", fontSize: 12.5, letterSpacing: "var(--ls-caps-wide)", ...style }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <span style={{ color: "var(--gold-500)", fontSize: 8 }}>◆</span> : null}
          <a
            href={it.href || "#"}
            onClick={it.onClick}
            onMouseEnter={() => setHi(i)}
            onMouseLeave={() => setHi(-1)}
            style={{ color: hi === i ? hover : color, textDecoration: "none", transition: "color .4s" }}
          >
            {it.label}
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
}
