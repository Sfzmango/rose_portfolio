import React from "react";

export function Ledger({ items = [], tone = "ink", fontSize = 15.5, gap = 11, style }) {
  const ink = tone === "ink";
  const color = ink ? "var(--ink-800)" : "var(--ivory-100)";
  const dots = ink ? "var(--leader-dots)" : "rgba(201,169,97,.5)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap, ...style }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", alignItems: "baseline", fontFamily: "var(--font-body)", fontSize, color }}>
          <span>{it.name}</span>
          <span style={{ flex: 1, borderBottom: "1px dotted " + dots, margin: "0 10px", transform: "translateY(-4px)" }}></span>
          <span>{it.price}</span>
        </div>
      ))}
    </div>
  );
}
