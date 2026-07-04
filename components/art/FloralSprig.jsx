import React from "react";

const treatments = {
  natural: { filter: "sepia(.25) brightness(.92) drop-shadow(0 14px 26px rgba(0,0,0,.55))", opacity: 1 },
  sepia: { filter: "sepia(.4) brightness(.8) drop-shadow(0 12px 22px rgba(0,0,0,.6))", opacity: 0.9 },
  silhouette: { filter: "brightness(.1) blur(2px)", opacity: 0.94 },
  shadow: { filter: "brightness(0) blur(2px)", opacity: 0.6 },
  pressed: { filter: "sepia(.35) contrast(1.05)", opacity: 0.9 },
};

export function FloralSprig({ src = "assets/floral-engraving.png", treatment = "natural", width = 380, rotate = 0, flip = false, sway = "a", swayOrigin = "50% 95%", opacity, style }) {
  const t = treatments[treatment] || treatments.natural;
  const anim = sway === "a" ? "sway 9s ease-in-out infinite" : sway === "b" ? "swayB 11s ease-in-out infinite" : "none";
  return (
    <div style={{ width, pointerEvents: "none", ...style }}>
      <div style={{ animation: anim, transformOrigin: swayOrigin }}>
        <img
          src={src}
          alt=""
          style={{
            width: "100%",
            transform: "rotate(" + rotate + "deg)" + (flip ? " scaleX(-1)" : ""),
            filter: t.filter,
            opacity: opacity != null ? opacity : t.opacity,
          }}
        />
      </div>
    </div>
  );
}
