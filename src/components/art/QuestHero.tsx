"use client";

import { motion } from "motion/react";

// Inspired by a classic adventure quest hero
export function QuestHero() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Quest hero adventure character">
      {/* Dungeon floor tiles */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <rect
            key={`tile-${row}-${col}`}
            x={40 + col * 52}
            y={100 + row * 35}
            width={50}
            height={33}
            fill="var(--color-foreground)"
            fillOpacity={(row + col) % 2 === 0 ? 0.03 : 0.05}
            stroke="var(--color-muted)"
            strokeWidth={0.3}
            strokeOpacity={0.08}
          />
        ))
      )}

      {/* Torch left */}
      <motion.g>
        <rect x={60} y={60} width={6} height={25} rx={1} fill="var(--color-foreground)" fillOpacity={0.3} />
        <motion.ellipse
          cx={63}
          cy={55}
          rx={8}
          ry={10}
          fill="var(--color-accent)"
          opacity={0.3}
          animate={{ ry: [10, 13, 10], rx: [8, 6, 8], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <motion.ellipse
          cx={63}
          cy={57}
          rx={4}
          ry={6}
          fill="var(--color-accent)"
          opacity={0.6}
          animate={{ ry: [6, 8, 6], opacity: [0.6, 0.4, 0.6] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </motion.g>

      {/* Torch right */}
      <motion.g>
        <rect x={414} y={60} width={6} height={25} rx={1} fill="var(--color-foreground)" fillOpacity={0.3} />
        <motion.ellipse
          cx={417}
          cy={55}
          rx={8}
          ry={10}
          fill="var(--color-accent)"
          opacity={0.3}
          animate={{ ry: [10, 12, 10], rx: [8, 7, 8], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 0.7, repeat: Infinity }}
        />
        <motion.ellipse
          cx={417}
          cy={57}
          rx={4}
          ry={6}
          fill="var(--color-accent)"
          opacity={0.6}
          animate={{ ry: [6, 7, 6], opacity: [0.6, 0.45, 0.6] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      </motion.g>

      {/* Hero character */}
      <motion.g
        animate={{ x: [0, 80, 80, 160, 160, 80, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Hat/cap */}
        <polygon points="180,140 200,125 220,140" fill="var(--color-accent)" opacity={0.8} />
        {/* Head */}
        <rect x={185} y={140} width={30} height={22} rx={4} fill="var(--color-foreground)" fillOpacity={0.6} />
        {/* Eyes */}
        <circle cx={195} cy={150} r={2} fill="var(--color-background)" />
        <circle cx={210} cy={150} r={2} fill="var(--color-background)" />
        {/* Body - tunic */}
        <rect x={187} y={162} width={26} height={22} rx={2} fill="var(--color-accent)" opacity={0.7} />
        {/* Belt */}
        <rect x={187} y={175} width={26} height={4} fill="var(--color-foreground)" fillOpacity={0.4} />
        {/* Legs */}
        <motion.g animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 0.5, repeat: Infinity }}>
          <rect x={190} y={184} width={8} height={14} rx={2} fill="var(--color-foreground)" fillOpacity={0.4} />
        </motion.g>
        <motion.g animate={{ rotate: [5, -5, 5] }} transition={{ duration: 0.5, repeat: Infinity }}>
          <rect x={202} y={184} width={8} height={14} rx={2} fill="var(--color-foreground)" fillOpacity={0.4} />
        </motion.g>
        {/* Sword */}
        <motion.g animate={{ rotate: [0, -20, 0] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
          <rect x={218} y={148} width={3} height={30} rx={1} fill="var(--color-muted)" fillOpacity={0.5} />
          <rect x={214} y={162} width={11} height={3} rx={1} fill="var(--color-accent)" opacity={0.6} />
        </motion.g>
        {/* Shield */}
        <rect x={176} y={162} width={12} height={16} rx={3} fill="var(--color-accent)" opacity={0.3} stroke="var(--color-accent)" strokeWidth={1} strokeOpacity={0.5} />
      </motion.g>

      {/* Treasure chest */}
      <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <rect x={360} y={170} width={30} height={20} rx={3} fill="var(--color-accent)" fillOpacity={0.3} stroke="var(--color-accent)" strokeWidth={1} strokeOpacity={0.4} />
        <rect x={360} y={165} width={30} height={10} rx={3} fill="var(--color-accent)" fillOpacity={0.2} />
        <rect x={372} y={176} width={6} height={6} rx={1} fill="var(--color-accent)" opacity={0.6} />
        {/* Sparkle */}
        <motion.circle
          cx={375}
          cy={160}
          r={2}
          fill="var(--color-accent)"
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
      </motion.g>

      {/* Hearts (lives) */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={`heart-${i}`}
          d={`M${55 + i * 22} 35 L${60 + i * 22} 42 L${65 + i * 22} 35 Q${65 + i * 22} 28 ${60 + i * 22} 32 Q${55 + i * 22} 28 ${55 + i * 22} 35`}
          fill="var(--color-accent)"
          opacity={0.5}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}
