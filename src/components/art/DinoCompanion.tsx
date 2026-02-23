"use client";

import { motion } from "motion/react";

// Inspired by a classic friendly dinosaur companion
export function DinoCompanion() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Dino companion character">
      {/* Background hills */}
      <ellipse cx={120} cy={260} rx={120} ry={30} fill="var(--color-accent)" fillOpacity={0.05} />
      <ellipse cx={380} cy={260} rx={100} ry={25} fill="var(--color-accent)" fillOpacity={0.04} />

      {/* Ground */}
      <rect x={20} y={240} width={440} height={3} rx={1} fill="var(--color-accent)" fillOpacity={0.15} />

      {/* Dino character */}
      <motion.g
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
      >
        {/* Body */}
        <ellipse cx={240} cy={195} rx={35} ry={40} fill="var(--color-accent)" opacity={0.75} />
        {/* Head */}
        <ellipse cx={270} cy={155} rx={25} ry={22} fill="var(--color-accent)" opacity={0.8} />
        {/* Snout */}
        <ellipse cx={290} cy={160} rx={14} ry={10} fill="var(--color-accent)" opacity={0.85} />
        {/* Eye */}
        <circle cx={278} cy={150} r={8} fill="white" />
        <circle cx={280} cy={150} r={4} fill="var(--color-foreground)" />
        <circle cx={282} cy={148} r={1.5} fill="white" />
        {/* Nostril */}
        <circle cx={298} cy={158} r={2} fill="var(--color-foreground)" opacity={0.3} />
        {/* Belly spot */}
        <ellipse cx={238} cy={200} rx={20} ry={25} fill="var(--color-background)" opacity={0.5} />
        {/* Shell/saddle */}
        <path d="M220 175 Q230 150 250 165 Q255 145 265 168 Q270 155 275 172" fill="none" stroke="var(--color-foreground)" strokeWidth={2} strokeOpacity={0.3} />
        {/* Tail */}
        <motion.path
          d="M210 210 Q190 220 180 210 Q170 200 160 210"
          stroke="var(--color-accent)"
          strokeWidth={8}
          strokeLinecap="round"
          fill="none"
          opacity={0.7}
          animate={{
            d: [
              "M210 210 Q190 220 180 210 Q170 200 160 210",
              "M210 210 Q190 215 180 220 Q170 225 160 215",
              "M210 210 Q190 220 180 210 Q170 200 160 210",
            ],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        {/* Legs */}
        <motion.g animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 0.4, repeat: Infinity }}>
          <ellipse cx={225} cy={235} rx={8} ry={6} fill="var(--color-accent)" opacity={0.65} />
        </motion.g>
        <motion.g animate={{ rotate: [3, -3, 3] }} transition={{ duration: 0.4, repeat: Infinity }}>
          <ellipse cx={255} cy={235} rx={8} ry={6} fill="var(--color-accent)" opacity={0.65} />
        </motion.g>
      </motion.g>

      {/* Floating fruit/item */}
      <motion.g
        animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <circle cx={350} cy={140} r={12} fill="var(--color-accent)" opacity={0.3} />
        <circle cx={350} cy={140} r={8} fill="var(--color-accent)" opacity={0.5} />
        <line x1={350} y1={128} x2={353} y2={120} stroke="var(--color-foreground)" strokeWidth={1.5} strokeOpacity={0.4} />
      </motion.g>
    </svg>
  );
}
