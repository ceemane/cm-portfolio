"use client";

import { motion } from "motion/react";

// Inspired by classic arcade ghost characters
export function PixelGhost() {
  const colors = ["var(--color-accent)", "#e06060", "#60a0e0", "#e0a060"];

  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Pixel ghost characters">
      {/* Maze walls hint */}
      {[
        "M40 60 L200 60", "M280 60 L440 60",
        "M40 60 L40 240", "M440 60 L440 240",
        "M100 100 L180 100 L180 160", "M300 100 L380 100 L380 160",
        "M100 200 L180 200", "M300 200 L380 200",
        "M40 240 L200 240", "M280 240 L440 240",
      ].map((d, i) => (
        <path key={`wall-${i}`} d={d} stroke="var(--color-accent)" strokeWidth={2} strokeOpacity={0.12} />
      ))}

      {/* Dots in maze */}
      {[
        [60, 150], [100, 150], [140, 150], [220, 150],
        [260, 150], [340, 150], [380, 150], [420, 150],
      ].map(([x, y], i) => (
        <circle key={`pellet-${i}`} cx={x} cy={y} r={3} fill="var(--color-accent)" opacity={0.3} />
      ))}

      {/* Four ghosts floating */}
      {colors.map((color, i) => (
        <motion.g
          key={`ghost-${i}`}
          animate={{
            x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0, -20 * (i % 2 === 0 ? 1 : -1), 0],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
          >
            {/* Ghost body */}
            <path
              d={`M${200 + i * 45} 170
                  Q${200 + i * 45} 140 ${215 + i * 45} 140
                  Q${230 + i * 45} 140 ${230 + i * 45} 170
                  L${230 + i * 45} 190
                  L${225 + i * 45} 184
                  L${220 + i * 45} 190
                  L${215 + i * 45} 184
                  L${210 + i * 45} 190
                  L${205 + i * 45} 184
                  L${200 + i * 45} 190 Z`}
              fill={color}
              opacity={0.7}
            />
            {/* Eyes */}
            <circle cx={210 + i * 45} cy={158} r={5} fill="white" />
            <circle cx={222 + i * 45} cy={158} r={5} fill="white" />
            <motion.circle
              cx={212 + i * 45}
              cy={159}
              r={2.5}
              fill="var(--color-foreground)"
              animate={{ cx: [212 + i * 45, 214 + i * 45, 210 + i * 45, 212 + i * 45] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx={224 + i * 45}
              cy={159}
              r={2.5}
              fill="var(--color-foreground)"
              animate={{ cx: [224 + i * 45, 226 + i * 45, 222 + i * 45, 224 + i * 45] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.g>
        </motion.g>
      ))}
    </svg>
  );
}
