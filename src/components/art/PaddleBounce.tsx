"use client";

import { motion } from "motion/react";

// Inspired by classic paddle and ball brick-breaking game
const brickRows = [
  { y: 40, color: "var(--color-accent)", opacity: 0.5 },
  { y: 58, color: "var(--color-accent)", opacity: 0.4 },
  { y: 76, color: "var(--color-accent)", opacity: 0.3 },
  { y: 94, color: "var(--color-muted)", opacity: 0.25 },
  { y: 112, color: "var(--color-muted)", opacity: 0.2 },
];

export function PaddleBounce() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Paddle bounce brick game">
      {/* Border */}
      <rect x={30} y={20} width={420} height={270} rx={2} fill="none" stroke="var(--color-muted)" strokeWidth={1} strokeOpacity={0.1} />

      {/* Bricks */}
      {brickRows.map((row, ri) =>
        Array.from({ length: 10 }).map((_, ci) => (
          <motion.rect
            key={`brick-${ri}-${ci}`}
            x={40 + ci * 40}
            y={row.y}
            width={38}
            height={16}
            rx={2}
            fill={row.color}
            fillOpacity={row.opacity}
            stroke={row.color}
            strokeWidth={0.5}
            strokeOpacity={row.opacity + 0.1}
            animate={
              ri === 4 && (ci === 3 || ci === 4 || ci === 5)
                ? { opacity: [1, 1, 0], scale: [1, 1.1, 0] }
                : {}
            }
            transition={
              ri === 4 && (ci === 3 || ci === 4 || ci === 5)
                ? { duration: 0.3, delay: 2 + ci * 0.15, repeat: Infinity, repeatDelay: 5 }
                : {}
            }
          />
        ))
      )}

      {/* Ball */}
      <motion.circle
        r={5}
        fill="var(--color-accent)"
        opacity={0.9}
        animate={{
          cx: [240, 340, 280, 160, 200, 300, 240],
          cy: [240, 130, 240, 130, 240, 130, 240],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Ball trail */}
      <motion.circle
        r={4}
        fill="var(--color-accent)"
        opacity={0.2}
        animate={{
          cx: [240, 340, 280, 160, 200, 300, 240],
          cy: [240, 130, 240, 130, 240, 130, 240],
        }}
        transition={{ duration: 4, delay: 0.05, repeat: Infinity, ease: "linear" }}
      />

      {/* Paddle */}
      <motion.rect
        y={255}
        width={60}
        height={10}
        rx={5}
        fill="var(--color-foreground)"
        fillOpacity={0.6}
        animate={{ x: [210, 310, 250, 130, 170, 270, 210] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Particle burst on brick hit */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={`particle-${i}`}
          r={2}
          fill="var(--color-accent)"
          opacity={0}
          animate={{
            cx: [200 + i * 40, 200 + i * 40 + (i - 1.5) * 15],
            cy: [130, 130 + (i % 2 === 0 ? -15 : 15)],
            opacity: [0, 0, 0.8, 0],
          }}
          transition={{ duration: 0.5, delay: 2.2, repeat: Infinity, repeatDelay: 5 }}
        />
      ))}

      {/* Score and lives */}
      <text x={40} y={285} fill="var(--color-muted)" fontSize={10} fontFamily="var(--font-inter), monospace" opacity={0.3}>
        BALL 3
      </text>
      <text x={380} y={285} fill="var(--color-accent)" fontSize={10} fontFamily="var(--font-inter), monospace" opacity={0.4}>
        12480
      </text>
    </svg>
  );
}
