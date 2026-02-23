"use client";

import { motion } from "motion/react";

// Inspired by a classic yellow dot-eating character
export function RetroChomper() {
  const dots = [280, 320, 360, 400];

  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Retro chomper character">
      {/* Dots to eat */}
      {dots.map((x, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={x}
          cy={150}
          r={6}
          fill="var(--color-accent)"
          opacity={0.8}
          animate={{ opacity: [0.8, 0.8, 0], scale: [1, 1, 0] }}
          transition={{ duration: 2.5, delay: 0.6 * i + 0.8, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}

      {/* Character body - animated chomp */}
      <motion.g
        animate={{ x: [0, 200, 200, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.5, ease: "linear" }}
      >
        {/* Body */}
        <motion.path
          d="M200 150 L200 150 A50 50 0 1 1 200 149.99 Z"
          fill="var(--color-accent)"
          animate={{
            d: [
              "M200 150 L240 120 A50 50 0 1 1 240 180 Z",
              "M200 150 L250 145 A50 50 0 1 1 250 155 Z",
              "M200 150 L240 120 A50 50 0 1 1 240 180 Z",
            ],
          }}
          transition={{ duration: 0.3, repeat: Infinity }}
        />
        {/* Eye */}
        <circle cx={205} cy={120} r={5} fill="var(--color-background)" />
      </motion.g>

      {/* Power pellet */}
      <motion.circle
        cx={440}
        cy={150}
        r={12}
        fill="var(--color-accent)"
        opacity={0.9}
        animate={{ scale: [1, 1.2, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />

      {/* Score text */}
      <motion.text
        x={240}
        y={60}
        textAnchor="middle"
        fill="var(--color-accent)"
        fontSize={20}
        fontFamily="var(--font-inter), monospace"
        fontWeight={700}
        opacity={0}
        animate={{ opacity: [0, 1, 1, 0], y: [60, 50, 50, 40] }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, repeatDelay: 2 }}
      >
        200
      </motion.text>

      {/* Ground line */}
      <line x1={40} y1={210} x2={440} y2={210} stroke="var(--color-muted)" strokeWidth={1} strokeOpacity={0.2} strokeDasharray="4 4" />
    </svg>
  );
}
