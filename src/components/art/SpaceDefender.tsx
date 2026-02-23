"use client";

import { motion } from "motion/react";

// Inspired by classic space invader arcade games
export function SpaceDefender() {
  const invaderRows = [
    { y: 40, offsets: [120, 180, 240, 300, 360] },
    { y: 80, offsets: [140, 200, 260, 320, 340] },
    { y: 120, offsets: [120, 180, 240, 300, 360] },
  ];

  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Space defender game">
      {/* Stars */}
      {[
        [50, 30], [100, 80], [430, 50], [380, 20], [200, 15],
        [70, 200], [420, 180], [300, 25], [150, 250], [460, 240],
      ].map(([x, y], i) => (
        <motion.circle
          key={`star-${i}`}
          cx={x}
          cy={y}
          r={1}
          fill="var(--color-muted)"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
        />
      ))}

      {/* Invaders */}
      <motion.g animate={{ x: [0, 30, 0, -30, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        {invaderRows.map((row, ri) =>
          row.offsets.map((x, ci) => (
            <motion.g key={`inv-${ri}-${ci}`}>
              {/* Invader body - pixelated look */}
              <rect x={x - 12} y={row.y} width={24} height={16} rx={2} fill="var(--color-accent)" fillOpacity={0.7} />
              {/* Eyes */}
              <rect x={x - 7} y={row.y + 4} width={4} height={4} fill="var(--color-background)" />
              <rect x={x + 3} y={row.y + 4} width={4} height={4} fill="var(--color-background)" />
              {/* Legs - animated */}
              <motion.g animate={{ scaleX: [1, -1, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                <rect x={x - 14} y={row.y + 14} width={4} height={6} fill="var(--color-accent)" fillOpacity={0.5} />
                <rect x={x + 10} y={row.y + 14} width={4} height={6} fill="var(--color-accent)" fillOpacity={0.5} />
              </motion.g>
            </motion.g>
          ))
        )}
      </motion.g>

      {/* Player ship */}
      <motion.g animate={{ x: [0, 40, -20, 60, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <polygon points="240,260 225,280 255,280" fill="var(--color-foreground)" fillOpacity={0.7} />
        <rect x={237} y={255} width={6} height={8} fill="var(--color-accent)" />
      </motion.g>

      {/* Laser */}
      <motion.g
        animate={{ y: [0, -160], opacity: [1, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
      >
        <rect x={242} y={250} width={2} height={12} fill="var(--color-accent)" />
      </motion.g>

      {/* Shield bunkers */}
      {[140, 240, 340].map((x, i) => (
        <rect key={`bunker-${i}`} x={x - 20} y={230} width={40} height={15} rx={4} fill="var(--color-accent)" fillOpacity={0.12} />
      ))}

      {/* Score */}
      <text x={30} y={25} fill="var(--color-muted)" fontSize={12} fontFamily="var(--font-inter), monospace" opacity={0.4}>
        SCORE
      </text>
      <text
        x={30}
        y={42}
        fill="var(--color-accent)"
        fontSize={14}
        fontFamily="var(--font-inter), monospace"
        fontWeight={700}
        opacity={0.6}
      >
        0340
      </text>
    </svg>
  );
}
