"use client";

import { motion } from "motion/react";

// Inspired by classic falling block puzzle game
const placedBlocks = [
  // Bottom rows - partially filled
  { x: 160, y: 260, w: 30, h: 30, color: "var(--color-accent)", opacity: 0.3 },
  { x: 190, y: 260, w: 30, h: 30, color: "var(--color-accent)", opacity: 0.25 },
  { x: 220, y: 260, w: 30, h: 30, color: "var(--color-muted)", opacity: 0.2 },
  { x: 250, y: 260, w: 30, h: 30, color: "var(--color-accent)", opacity: 0.35 },
  { x: 280, y: 260, w: 30, h: 30, color: "var(--color-muted)", opacity: 0.15 },
  { x: 310, y: 260, w: 30, h: 30, color: "var(--color-accent)", opacity: 0.25 },
  // Second row
  { x: 160, y: 230, w: 30, h: 30, color: "var(--color-muted)", opacity: 0.15 },
  { x: 190, y: 230, w: 30, h: 30, color: "var(--color-accent)", opacity: 0.3 },
  { x: 250, y: 230, w: 30, h: 30, color: "var(--color-accent)", opacity: 0.2 },
  { x: 310, y: 230, w: 30, h: 30, color: "var(--color-muted)", opacity: 0.2 },
  // Third row
  { x: 190, y: 200, w: 30, h: 30, color: "var(--color-accent)", opacity: 0.2 },
  { x: 250, y: 200, w: 30, h: 30, color: "var(--color-muted)", opacity: 0.15 },
];

export function BlockDrop() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Block puzzle game">
      {/* Game border */}
      <rect x={155} y={30} width={190} height={265} rx={2} fill="none" stroke="var(--color-muted)" strokeWidth={1} strokeOpacity={0.15} />

      {/* Grid lines */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`vline-${i}`} x1={160 + i * 30} y1={30} x2={160 + i * 30} y2={295} stroke="var(--color-muted)" strokeWidth={0.3} strokeOpacity={0.08} />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`hline-${i}`} x1={155} y1={30 + i * 30} x2={345} y2={30 + i * 30} stroke="var(--color-muted)" strokeWidth={0.3} strokeOpacity={0.08} />
      ))}

      {/* Placed blocks */}
      {placedBlocks.map((block, i) => (
        <rect
          key={`placed-${i}`}
          x={block.x + 1}
          y={block.y + 1}
          width={block.w - 2}
          height={block.h - 2}
          rx={3}
          fill={block.color}
          fillOpacity={block.opacity}
          stroke={block.color}
          strokeWidth={0.5}
          strokeOpacity={block.opacity + 0.1}
        />
      ))}

      {/* Falling T-piece */}
      <motion.g
        animate={{ y: [0, 150] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5, ease: "easeIn" }}
      >
        {/* T-shape */}
        {[
          { x: 220, y: 40 },
          { x: 250, y: 40 },
          { x: 280, y: 40 },
          { x: 250, y: 70 },
        ].map((b, i) => (
          <rect
            key={`fall-${i}`}
            x={b.x + 1}
            y={b.y + 1}
            width={28}
            height={28}
            rx={3}
            fill="var(--color-accent)"
            fillOpacity={0.6}
            stroke="var(--color-accent)"
            strokeWidth={1}
            strokeOpacity={0.8}
          />
        ))}
      </motion.g>

      {/* Line clear flash */}
      <motion.rect
        x={156}
        y={261}
        width={188}
        height={28}
        fill="var(--color-accent)"
        opacity={0}
        animate={{ opacity: [0, 0, 0.4, 0, 0] }}
        transition={{ duration: 4, delay: 3, repeat: Infinity }}
      />

      {/* Next piece preview */}
      <text x={370} y={50} fill="var(--color-muted)" fontSize={10} fontFamily="var(--font-inter), monospace" opacity={0.3}>NEXT</text>
      <rect x={370} y={58} width={22} height={22} rx={2} fill="var(--color-accent)" fillOpacity={0.2} />
      <rect x={392} y={58} width={22} height={22} rx={2} fill="var(--color-accent)" fillOpacity={0.2} />
      <rect x={370} y={80} width={22} height={22} rx={2} fill="var(--color-accent)" fillOpacity={0.2} />

      {/* Level */}
      <text x={370} y={140} fill="var(--color-muted)" fontSize={10} fontFamily="var(--font-inter), monospace" opacity={0.3}>LEVEL</text>
      <text x={370} y={158} fill="var(--color-accent)" fontSize={16} fontFamily="var(--font-inter), monospace" fontWeight={700} opacity={0.5}>09</text>

      {/* Lines */}
      <text x={370} y={190} fill="var(--color-muted)" fontSize={10} fontFamily="var(--font-inter), monospace" opacity={0.3}>LINES</text>
      <text x={370} y={208} fill="var(--color-accent)" fontSize={16} fontFamily="var(--font-inter), monospace" fontWeight={700} opacity={0.5}>042</text>
    </svg>
  );
}
