import React from "react";

const sizes = {
  sm: { padding: "10px 26px", fontSize: "11.5px" },
  md: { padding: "14px 42px", fontSize: "13px" },
};

const variants = {
  gold: { border: "1px solid rgba(212,183,112,.8)", color: "var(--ivory-100)", hoverBg: "rgba(201,169,97,.18)" },
  "gold-outlined": { border: "1px solid var(--gold-500)", outline: "1px solid var(--border-gold-faint)", outlineOffset: "4px", color: "var(--ivory-100)", hoverBg: "rgba(201,169,97,.16)" },
  ink: { border: "1px solid var(--ink-400)", outline: "1px solid rgba(107,84,58,.4)", outlineOffset: "4px", color: "var(--text-heading-ink)", hoverBg: "rgba(107,84,58,.12)" },
  oxblood: { border: "1px solid rgba(107,42,53,.9)", outline: "1px solid rgba(107,42,53,.4)", outlineOffset: "4px", color: "var(--ivory-300)", hoverBg: "rgba(94,36,49,.25)" },
};

export function Button({ variant = "gold", size = "md", href, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.gold;
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        fontFamily: "var(--font-smallcaps)",
        letterSpacing: "var(--ls-caps-wide)",
        textDecoration: "none",
        textAlign: "center",
        cursor: "pointer",
        transition: "background .5s, color .5s, border-color .5s",
        background: hover ? v.hoverBg : "transparent",
        border: v.border,
        outline: v.outline,
        outlineOffset: v.outlineOffset,
        color: v.color,
        ...sizes[size],
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
