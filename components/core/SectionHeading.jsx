import React from "react";

export function SectionHeading({ title, tone = "ink", asterism = true, rule = true, size = 42, ruleWidth = 520, style }) {
  const ink = tone === "ink";
  return (
    <div style={{ textAlign: "center", ...style }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: size, lineHeight: 1.1, color: ink ? "var(--text-heading-ink)" : "var(--ivory-200)" }}>{title}</div>
      {asterism ? <div style={{ color: ink ? "#7a5a30" : "var(--khaki-600)", fontSize: 15, marginTop: 8 }}>⁂</div> : null}
      {rule ? (
        <div
          style={{
            margin: "14px auto 0",
            maxWidth: ruleWidth,
            height: 5,
            borderTop: "1px solid " + (ink ? "rgba(90,70,48,.7)" : "rgba(201,169,97,.55)"),
            borderBottom: "1px solid " + (ink ? "rgba(90,70,48,.4)" : "rgba(201,169,97,.3)"),
          }}
        ></div>
      ) : null}
    </div>
  );
}
