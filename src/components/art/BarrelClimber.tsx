"use client";

import { motion } from "motion/react";

// Inspired by a classic barrel-dodging climbing game
export function BarrelClimber() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Barrel climber arcade game">
      {/* Platforms - slanted like the classic */}
      {[
        { x1: 60, y: 260, x2: 420, tilt: 8 },
        { x1: 60, y: 200, x2: 420, tilt: -8 },
        { x1: 60, y: 140, x2: 420, tilt: 8 },
        { x1: 60, y: 80, x2: 420, tilt: -8 },
      ].map((p, i) => (
        <g key={`platform-${i}`}>
          <line
            x1={p.x1}
            y1={p.y}
            x2={p.x2}
            y2={p.y + p.tilt}
            stroke="var(--color-accent)"
            strokeWidth={4}
            strokeOpacity={0.2}
          />
          {/* Platform segments */}
          {Array.from({ length: 12 }).map((_, j) => (
            <rect
              key={`seg-${i}-${j}`}
              x={p.x1 + j * 30}
              y={p.y + (p.tilt * j) / 12 - 2}
              width={28}
              height={6}
              rx={1}
              fill="var(--color-accent)"
              fillOpacity={0.12}
            />
          ))}
        </g>
      ))}

      {/* Ladders */}
      {[
        { x: 380, y1: 200, y2: 260 },
        { x: 100, y1: 140, y2: 200 },
        { x: 350, y1: 80, y2: 140 },
      ].map((l, i) => (
        <g key={`ladder-${i}`}>
          <line x1={l.x} y1={l.y1} x2={l.x} y2={l.y2} stroke="var(--color-accent)" strokeWidth={2} strokeOpacity={0.2} />
          <line x1={l.x + 14} y1={l.y1} x2={l.x + 14} y2={l.y2} stroke="var(--color-accent)" strokeWidth={2} strokeOpacity={0.2} />
          {Array.from({ length: 4 }).map((_, j) => (
            <line key={`rung-${i}-${j}`} x1={l.x} y1={l.y1 + 12 + j * 14} x2={l.x + 14} y2={l.y1 + 12 + j * 14} stroke="var(--color-accent)" strokeWidth={1.5} strokeOpacity={0.15} />
          ))}
        </g>
      ))}

      {/* Rolling barrels */}
      {[0, 1, 2].map((i) => (
        <motion.g
          key={`barrel-${i}`}
          animate={{
            x: i % 2 === 0 ? [0, 300] : [300, 0],
          }}
          transition={{ duration: 3 + i * 0.5, delay: i * 1.2, repeat: Infinity, ease: "linear" }}
        >
          <motion.g animate={{ rotate: [0, 360] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
            <circle cx={80} cy={i % 2 === 0 ? 254 : 194} r={12} fill="var(--color-foreground)" fillOpacity={0.2} stroke="var(--color-accent)" strokeWidth={1.5} strokeOpacity={0.4} />
            <line x1={74} y1={i % 2 === 0 ? 254 : 194} x2={86} y2={i % 2 === 0 ? 254 : 194} stroke="var(--color-accent)" strokeWidth={1} strokeOpacity={0.3} />
            <line x1={80} y1={i % 2 === 0 ? 248 : 188} x2={80} y2={i % 2 === 0 ? 260 : 200} stroke="var(--color-accent)" strokeWidth={1} strokeOpacity={0.3} />
          </motion.g>
        </motion.g>
      ))}

      {/* Hero character climbing */}
      <motion.g
        animate={{
          x: [0, 0, 290, 290, 290, 0, 0],
          y: [0, 0, 0, -60, -60, -60, -120],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Head */}
        <rect x={85} y={230} width={14} height={12} rx={3} fill="var(--color-foreground)" fillOpacity={0.6} />
        {/* Cap */}
        <rect x={83} y={228} width={18} height={5} rx={2} fill="var(--color-accent)" opacity={0.7} />
        {/* Body */}
        <rect x={86} y={242} width={12} height={12} rx={2} fill="var(--color-accent)" opacity={0.6} />
        {/* Legs */}
        <motion.g animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 0.3, repeat: Infinity }}>
          <rect x={86} y={254} width={5} height={6} rx={1} fill="var(--color-foreground)" fillOpacity={0.4} />
        </motion.g>
        <motion.g animate={{ rotate: [8, -8, 8] }} transition={{ duration: 0.3, repeat: Infinity }}>
          <rect x={93} y={254} width={5} height={6} rx={1} fill="var(--color-foreground)" fillOpacity={0.4} />
        </motion.g>
      </motion.g>

      {/* Villain at top */}
      <motion.g animate={{ x: [-3, 3, -3] }} transition={{ duration: 1, repeat: Infinity }}>
        <rect x={80} y={56} width={24} height={20} rx={3} fill="var(--color-foreground)" fillOpacity={0.4} />
        <rect x={84} y={63} width={4} height={4} rx={1} fill="var(--color-background)" opacity={0.8} />
        <rect x={96} y={63} width={4} height={4} rx={1} fill="var(--color-background)" opacity={0.8} />
      </motion.g>

      {/* Rescued character at top */}
      <text x={130} y={72} fill="var(--color-accent)" fontSize={14} fontFamily="var(--font-inter), monospace" opacity={0.4}>HELP!</text>
    </svg>
  );
}
