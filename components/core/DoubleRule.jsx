import React from "react";

export function DoubleRule({ tone = "ink", maxWidth = 520, style }) {
  const ink = tone === "ink";
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth,
        height: 5,
        borderTop: "1px solid " + (ink ? "rgba(90,70,48,.7)" : "rgba(201,169,97,.55)"),
        borderBottom: "1px solid " + (ink ? "rgba(90,70,48,.4)" : "rgba(201,169,97,.3)"),
        ...style,
      }}
    ></div>
  );
}
