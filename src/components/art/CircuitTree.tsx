"use client";

import { motion } from "motion/react";

export function CircuitTree() {
  return (
    <svg
      viewBox="0 0 480 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Circuit tree artwork merging organic growth with technology"
    >
      {/* Trunk - main vertical line */}
      <motion.path
        d="M240 420 L240 280"
        stroke="var(--color-muted)"
        strokeWidth={2.5}
        strokeOpacity={0.4}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Root traces */}
      {[
        "M240 420 L200 440", "M240 420 L280 440",
        "M240 410 L180 435", "M240 410 L300 435",
      ].map((d, i) => (
        <motion.path
          key={`root-${i}`}
          d={d}
          stroke="var(--color-muted)"
          strokeWidth={1}
          strokeOpacity={0.2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
        />
      ))}

      {/* Main branches - circuit traces with right angles */}
      {[
        { d: "M240 280 L240 240 L160 240 L160 180 L120 180", delay: 0.8 },
        { d: "M240 280 L240 240 L320 240 L320 180 L360 180", delay: 0.9 },
        { d: "M240 280 L240 220 L180 220 L180 140 L140 140 L140 100", delay: 1.0 },
        { d: "M240 280 L240 220 L300 220 L300 140 L340 140 L340 100", delay: 1.1 },
        { d: "M240 280 L240 200 L200 200 L200 120 L200 80", delay: 1.2 },
        { d: "M240 280 L240 200 L280 200 L280 120 L280 80", delay: 1.3 },
        { d: "M160 180 L160 120 L100 120 L100 80", delay: 1.4 },
        { d: "M360 180 L360 120 L400 120 L400 80", delay: 1.5 },
        { d: "M240 240 L240 160 L240 60", delay: 1.0 },
      ].map((branch, i) => (
        <motion.path
          key={`branch-${i}`}
          d={branch.d}
          stroke="var(--color-muted)"
          strokeWidth={1.5}
          strokeOpacity={0.3}
          strokeLinecap="square"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: branch.delay, ease: "easeOut" }}
        />
      ))}

      {/* Junction nodes (circuit board style squares) */}
      {[
        { x: 240, y: 280 }, { x: 240, y: 240 }, { x: 240, y: 220 },
        { x: 240, y: 200 }, { x: 160, y: 240 }, { x: 320, y: 240 },
        { x: 180, y: 220 }, { x: 300, y: 220 }, { x: 160, y: 180 },
        { x: 360, y: 180 },
      ].map((jn, i) => (
        <motion.rect
          key={`jn-${i}`}
          x={jn.x - 3}
          y={jn.y - 3}
          width={6}
          height={6}
          fill="var(--color-muted)"
          opacity={0.3}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 + i * 0.05 }}
        />
      ))}

      {/* Leaf nodes - data endpoints with amber accent */}
      {[
        { x: 100, y: 80, size: 8 },
        { x: 140, y: 100, size: 6 },
        { x: 200, y: 80, size: 7 },
        { x: 240, y: 60, size: 9 },
        { x: 280, y: 80, size: 7 },
        { x: 340, y: 100, size: 6 },
        { x: 400, y: 80, size: 8 },
        { x: 120, y: 180, size: 6 },
        { x: 360, y: 180, size: 6 },
      ].map((leaf, i) => (
        <motion.g key={`leaf-${i}`}>
          <motion.circle
            cx={leaf.x}
            cy={leaf.y}
            r={leaf.size * 2}
            fill="var(--color-accent)"
            opacity={0.06}
            animate={{
              r: [leaf.size * 2, leaf.size * 2.8, leaf.size * 2],
              opacity: [0.06, 0.12, 0.06],
            }}
            transition={{ duration: 2.5 + i * 0.3, repeat: Infinity }}
          />
          <motion.circle
            cx={leaf.x}
            cy={leaf.y}
            r={leaf.size / 2}
            fill="var(--color-accent)"
            opacity={0.8}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
          />
        </motion.g>
      ))}

      {/* Pulse traveling up trunk */}
      <motion.circle
        r={3}
        fill="var(--color-accent)"
        opacity={0.6}
        initial={{ cx: 240, cy: 420 }}
        animate={{
          cx: [240, 240, 240, 240],
          cy: [420, 280, 200, 60],
          opacity: [0.6, 0.8, 0.6, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
      />
      <motion.circle
        r={3}
        fill="var(--color-accent)"
        opacity={0.5}
        initial={{ cx: 240, cy: 280 }}
        animate={{
          cx: [240, 160, 160, 120],
          cy: [280, 240, 180, 180],
          opacity: [0, 0.6, 0.8, 0],
        }}
        transition={{ duration: 2.5, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
      />
      <motion.circle
        r={3}
        fill="var(--color-accent)"
        opacity={0.5}
        initial={{ cx: 240, cy: 280 }}
        animate={{
          cx: [240, 320, 320, 360],
          cy: [280, 240, 180, 180],
          opacity: [0, 0.6, 0.8, 0],
        }}
        transition={{ duration: 2.5, delay: 2.5, repeat: Infinity, repeatDelay: 2 }}
      />
    </svg>
  );
}
