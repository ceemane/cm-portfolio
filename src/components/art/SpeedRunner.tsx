"use client";

import { motion } from "motion/react";

// Inspired by a classic fast blue hedgehog character
export function SpeedRunner() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Speed runner character">
      {/* Speed lines */}
      {[130, 150, 170].map((y, i) => (
        <motion.line
          key={`speed-${i}`}
          x1={40}
          y1={y}
          x2={120}
          y2={y}
          stroke="var(--color-accent)"
          strokeWidth={2}
          strokeOpacity={0.3}
          animate={{ x1: [40, 80, 40], x2: [120, 140, 120], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
        />
      ))}

      {/* Character */}
      <motion.g
        animate={{ x: [0, 250, 250, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: [0.2, 0, 0.8, 1] }}
      >
        {/* Body - round and spiky */}
        <circle cx={140} cy={155} r={28} fill="var(--color-accent)" opacity={0.8} />
        {/* Spikes */}
        <motion.g animate={{ rotate: [0, -5, 0] }} transition={{ duration: 0.2, repeat: Infinity }}>
          <polygon points="120,140 100,125 115,145" fill="var(--color-accent)" opacity={0.9} />
          <polygon points="115,148 90,140 112,155" fill="var(--color-accent)" opacity={0.8} />
          <polygon points="115,155 95,158 115,162" fill="var(--color-accent)" opacity={0.7} />
        </motion.g>
        {/* Belly */}
        <ellipse cx={148} cy={158} rx={14} ry={16} fill="var(--color-background)" opacity={0.9} />
        {/* Eye */}
        <circle cx={155} cy={148} r={8} fill="white" />
        <circle cx={158} cy={148} r={4} fill="var(--color-foreground)" />
        {/* Shoes */}
        <motion.g animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.15, repeat: Infinity }}>
          <ellipse cx={135} cy={185} rx={10} ry={5} fill="var(--color-foreground)" opacity={0.6} />
        </motion.g>
        <motion.g animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.15, repeat: Infinity }}>
          <ellipse cx={150} cy={185} rx={10} ry={5} fill="var(--color-foreground)" opacity={0.6} />
        </motion.g>
      </motion.g>

      {/* Rings */}
      {[300, 340, 380].map((x, i) => (
        <motion.g key={`ring-${i}`} animate={{ y: [0, -8, 0], rotate: [0, 360] }} transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}>
          <circle cx={x} cy={130} r={12} fill="none" stroke="var(--color-accent)" strokeWidth={3} opacity={0.7} />
          <circle cx={x} cy={130} r={6} fill="var(--color-accent)" opacity={0.2} />
        </motion.g>
      ))}

      {/* Ground */}
      <rect x={20} y={200} width={440} height={4} rx={2} fill="var(--color-accent)" fillOpacity={0.15} />
      {/* Checkered pattern hint */}
      {Array.from({ length: 11 }).map((_, i) => (
        <rect key={`check-${i}`} x={20 + i * 40} y={204} width={20} height={8} fill="var(--color-accent)" fillOpacity={i % 2 === 0 ? 0.08 : 0.04} />
      ))}
    </svg>
  );
}
