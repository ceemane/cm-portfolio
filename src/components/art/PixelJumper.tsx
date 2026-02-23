"use client";

import { motion } from "motion/react";

// Inspired by a classic jumping plumber character
export function PixelJumper() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Pixel jumper character">
      {/* Ground blocks */}
      {[0, 40, 80, 120, 160, 280, 320, 360, 400, 440].map((x, i) => (
        <rect key={`block-${i}`} x={x} y={240} width={38} height={38} rx={2} fill="var(--color-accent)" fillOpacity={0.15} stroke="var(--color-accent)" strokeWidth={1} strokeOpacity={0.3} />
      ))}

      {/* Floating block */}
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <rect x={180} y={140} width={36} height={36} rx={2} fill="var(--color-accent)" fillOpacity={0.3} stroke="var(--color-accent)" strokeWidth={1.5} />
        <text x={198} y={164} textAnchor="middle" fill="var(--color-accent)" fontSize={16} fontWeight={700}>?</text>
      </motion.g>

      {/* Coin */}
      <motion.g
        animate={{ y: [0, -20, -20, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <circle cx={198} cy={110} r={10} fill="var(--color-accent)" opacity={0.8} />
        <text x={198} y={115} textAnchor="middle" fill="var(--color-background)" fontSize={12} fontWeight={700}>$</text>
      </motion.g>

      {/* Character */}
      <motion.g
        animate={{
          x: [0, 60, 120, 120, 60, 0],
          y: [0, -60, 0, 0, -30, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
      >
        {/* Hat */}
        <rect x={70} y={190} width={30} height={8} rx={2} fill="var(--color-accent)" />
        <rect x={65} y={196} width={40} height={5} rx={1} fill="var(--color-accent)" opacity={0.7} />
        {/* Head */}
        <rect x={72} y={201} width={26} height={14} rx={3} fill="var(--color-foreground)" fillOpacity={0.7} />
        {/* Eye */}
        <circle cx={90} cy={208} r={2} fill="var(--color-background)" />
        {/* Body */}
        <rect x={72} y={215} width={26} height={14} rx={2} fill="var(--color-accent)" />
        {/* Legs */}
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        >
          <rect x={72} y={229} width={10} height={10} rx={2} fill="var(--color-foreground)" fillOpacity={0.5} />
        </motion.g>
        <motion.g
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        >
          <rect x={88} y={229} width={10} height={10} rx={2} fill="var(--color-foreground)" fillOpacity={0.5} />
        </motion.g>
      </motion.g>

      {/* Cloud */}
      <motion.g animate={{ x: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }}>
        <ellipse cx={350} cy={70} rx={30} ry={15} fill="var(--color-muted)" fillOpacity={0.1} />
        <ellipse cx={370} cy={65} rx={20} ry={12} fill="var(--color-muted)" fillOpacity={0.1} />
      </motion.g>
    </svg>
  );
}
