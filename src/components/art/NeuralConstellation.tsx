"use client";

import { motion } from "motion/react";

const nodes = [
  { x: 80, y: 60, r: 4, accent: true },
  { x: 200, y: 40, r: 3, accent: false },
  { x: 320, y: 70, r: 5, accent: true },
  { x: 140, y: 140, r: 4, accent: false },
  { x: 260, y: 120, r: 3, accent: true },
  { x: 380, y: 150, r: 4, accent: false },
  { x: 60, y: 220, r: 3, accent: true },
  { x: 180, y: 240, r: 5, accent: false },
  { x: 300, y: 210, r: 4, accent: true },
  { x: 420, y: 240, r: 3, accent: false },
  { x: 100, y: 320, r: 4, accent: false },
  { x: 240, y: 340, r: 3, accent: true },
  { x: 360, y: 310, r: 5, accent: false },
  { x: 160, y: 400, r: 4, accent: true },
  { x: 340, y: 390, r: 3, accent: false },
];

const connections = [
  [0, 1], [0, 3], [1, 2], [1, 4], [2, 5], [3, 4], [3, 6],
  [4, 5], [4, 8], [6, 7], [7, 8], [7, 11], [8, 9], [8, 12],
  [9, 12], [10, 11], [10, 7], [11, 12], [11, 13], [12, 14],
  [13, 14],
];

// Particles that travel along paths
const particles = [
  { from: 0, to: 4, duration: 3, delay: 0 },
  { from: 6, to: 8, duration: 2.5, delay: 1 },
  { from: 11, to: 5, duration: 4, delay: 0.5 },
  { from: 13, to: 9, duration: 3.5, delay: 2 },
];

export function NeuralConstellation() {
  return (
    <svg
      viewBox="0 0 480 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Neural constellation artwork representing connected knowledge networks"
    >
      {/* Connections */}
      {connections.map(([a, b], i) => (
        <motion.line
          key={`conn-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--color-muted)"
          strokeWidth={0.8}
          strokeOpacity={0.25}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
        />
      ))}

      {/* Glow connections for accent paths */}
      {connections
        .filter(([a, b]) => nodes[a].accent && nodes[b].accent)
        .map(([a, b], i) => (
          <motion.line
            key={`glow-${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--color-accent)"
            strokeWidth={1.2}
            strokeOpacity={0.3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 + i * 0.1 }}
          />
        ))}

      {/* Traveling particles */}
      {particles.map((p, i) => {
        const from = nodes[p.from];
        const to = nodes[p.to];
        return (
          <motion.circle
            key={`particle-${i}`}
            r={2}
            fill="var(--color-accent)"
            opacity={0.8}
            initial={{ cx: from.x, cy: from.y }}
            animate={{
              cx: [from.x, to.x, from.x],
              cy: [from.y, to.y, from.y],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g key={`node-${i}`}>
          {node.accent && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r * 3}
              fill="var(--color-accent)"
              opacity={0.08}
              animate={{ r: [node.r * 3, node.r * 4, node.r * 3] }}
              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
            />
          )}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.accent ? "var(--color-accent)" : "var(--color-muted)"}
            opacity={node.accent ? 0.9 : 0.4}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
          />
        </motion.g>
      ))}
    </svg>
  );
}
