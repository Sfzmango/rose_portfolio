import React from "react";

export function VaultTag({ children = "FROM THE VAULT", style }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: "var(--accent-oxblood)",
        color: "#e8dcc2",
        fontFamily: "var(--font-smallcaps)",
        fontSize: 10.5,
        letterSpacing: ".26em",
        padding: "5px 12px",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
