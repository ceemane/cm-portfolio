"use client";

import { motion } from "motion/react";

// Low-poly triangles forming a brain silhouette
const triangles = [
  // Left hemisphere - upper
  { points: "160,120 190,80 210,120", accent: false, delay: 0 },
  { points: "130,160 160,120 170,165", accent: false, delay: 0.05 },
  { points: "160,120 210,120 170,165", accent: true, delay: 0.1 },
  { points: "190,80 240,70 210,120", accent: false, delay: 0.08 },
  { points: "210,120 240,70 250,115", accent: true, delay: 0.12 },
  { points: "210,120 250,115 240,160", accent: false, delay: 0.15 },
  { points: "170,165 210,120 240,160", accent: true, delay: 0.18 },

  // Right hemisphere - upper
  { points: "240,70 290,80 250,115", accent: false, delay: 0.06 },
  { points: "290,80 320,120 250,115", accent: true, delay: 0.1 },
  { points: "250,115 320,120 310,165", accent: false, delay: 0.14 },
  { points: "250,115 310,165 240,160", accent: true, delay: 0.2 },
  { points: "320,120 350,160 310,165", accent: false, delay: 0.16 },

  // Left hemisphere - middle
  { points: "120,200 130,160 170,165", accent: false, delay: 0.2 },
  { points: "120,200 170,165 160,210", accent: true, delay: 0.22 },
  { points: "170,165 240,160 200,210", accent: false, delay: 0.25 },
  { points: "160,210 170,165 200,210", accent: false, delay: 0.28 },
  { points: "200,210 240,160 240,210", accent: true, delay: 0.3 },

  // Right hemisphere - middle
  { points: "240,160 310,165 280,210", accent: false, delay: 0.24 },
  { points: "240,160 280,210 240,210", accent: true, delay: 0.26 },
  { points: "310,165 350,160 340,210", accent: false, delay: 0.28 },
  { points: "310,165 340,210 280,210", accent: false, delay: 0.3 },
  { points: "340,210 360,200 350,160", accent: true, delay: 0.32 },

  // Left hemisphere - lower
  { points: "120,200 160,210 140,250", accent: false, delay: 0.32 },
  { points: "160,210 200,210 180,260", accent: true, delay: 0.35 },
  { points: "140,250 160,210 180,260", accent: false, delay: 0.38 },
  { points: "200,210 240,210 220,270", accent: false, delay: 0.4 },
  { points: "180,260 200,210 220,270", accent: true, delay: 0.42 },

  // Right hemisphere - lower
  { points: "240,210 280,210 260,270", accent: false, delay: 0.36 },
  { points: "240,210 260,270 220,270", accent: true, delay: 0.4 },
  { points: "280,210 340,210 300,260", accent: false, delay: 0.38 },
  { points: "280,210 300,260 260,270", accent: false, delay: 0.42 },
  { points: "340,210 360,200 340,250", accent: true, delay: 0.44 },
  { points: "340,210 340,250 300,260", accent: false, delay: 0.46 },

  // Bottom center (brain stem area)
  { points: "180,260 220,270 200,310", accent: false, delay: 0.48 },
  { points: "220,270 260,270 240,310", accent: true, delay: 0.5 },
  { points: "200,310 220,270 240,310", accent: false, delay: 0.52 },
  { points: "200,310 240,310 220,340", accent: false, delay: 0.55 },
];

// "Active" region highlight pulse
const activeRegion = [4, 10, 16, 17, 24, 27];

export function GeometricBrain() {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Geometric brain artwork representing structured thinking and design"
    >
      {/* Triangle facets */}
      {triangles.map((tri, i) => (
        <motion.polygon
          key={`tri-${i}`}
          points={tri.points}
          fill={tri.accent ? "var(--color-accent)" : "var(--color-foreground)"}
          fillOpacity={tri.accent ? 0.15 : 0.06}
          stroke={tri.accent ? "var(--color-accent)" : "var(--color-muted)"}
          strokeWidth={0.8}
          strokeOpacity={tri.accent ? 0.5 : 0.2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: tri.delay + 0.3 }}
        />
      ))}

      {/* Pulsing "active" region */}
      {activeRegion.map((idx) => (
        <motion.polygon
          key={`pulse-${idx}`}
          points={triangles[idx].points}
          fill="var(--color-accent)"
          initial={{ fillOpacity: 0.15 }}
          animate={{ fillOpacity: [0.15, 0.35, 0.15] }}
          transition={{
            duration: 3,
            delay: idx * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vertex dots */}
      {(() => {
        const vertices = new Set<string>();
        triangles.forEach((t) => {
          t.points.split(" ").forEach((p) => vertices.add(p));
        });
        return Array.from(vertices).map((v, i) => {
          const [x, y] = v.split(",").map(Number);
          return (
            <motion.circle
              key={`v-${i}`}
              cx={x}
              cy={y}
              r={1.5}
              fill="var(--color-muted)"
              opacity={0.3}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.02 }}
            />
          );
        });
      })()}

      {/* Center synapse spark */}
      <motion.circle
        cx={240}
        cy={180}
        r={4}
        fill="var(--color-accent)"
        opacity={0.7}
        animate={{
          r: [4, 8, 4],
          opacity: [0.7, 0.2, 0.7],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}
