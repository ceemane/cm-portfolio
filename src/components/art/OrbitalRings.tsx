"use client";

import { motion } from "motion/react";

const orbits = [
  { rx: 160, ry: 60, rotation: -20, duration: 20 },
  { rx: 140, ry: 55, rotation: 40, duration: 25 },
  { rx: 120, ry: 50, rotation: -70, duration: 18 },
  { rx: 180, ry: 45, rotation: 15, duration: 30 },
];

const orbitNodes = [
  { orbit: 0, angle: 45, r: 5, accent: true, label: "AI" },
  { orbit: 0, angle: 200, r: 4, accent: false, label: "" },
  { orbit: 1, angle: 120, r: 6, accent: true, label: "Design" },
  { orbit: 1, angle: 300, r: 3, accent: false, label: "" },
  { orbit: 2, angle: 80, r: 5, accent: true, label: "Learn" },
  { orbit: 2, angle: 250, r: 4, accent: false, label: "" },
  { orbit: 3, angle: 160, r: 4, accent: true, label: "Tech" },
  { orbit: 3, angle: 350, r: 3, accent: false, label: "" },
];

function getOrbitPoint(
  orbit: (typeof orbits)[0],
  angleDeg: number,
  cx: number,
  cy: number
) {
  const rad = (angleDeg * Math.PI) / 180;
  const rotRad = (orbit.rotation * Math.PI) / 180;
  const px = orbit.rx * Math.cos(rad);
  const py = orbit.ry * Math.sin(rad);
  return {
    x: cx + px * Math.cos(rotRad) - py * Math.sin(rotRad),
    y: cy + px * Math.sin(rotRad) + py * Math.cos(rotRad),
  };
}

export function OrbitalRings() {
  const cx = 240;
  const cy = 210;

  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Orbital rings artwork representing interconnected knowledge domains"
    >
      {/* Orbital ellipses */}
      {orbits.map((orbit, i) => (
        <motion.ellipse
          key={`orbit-${i}`}
          cx={cx}
          cy={cy}
          rx={orbit.rx}
          ry={orbit.ry}
          transform={`rotate(${orbit.rotation} ${cx} ${cy})`}
          stroke="var(--color-muted)"
          strokeWidth={0.8}
          strokeOpacity={0.2}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.2 }}
        />
      ))}

      {/* Subtle rotation hint - animated dashes */}
      {orbits.map((orbit, i) => (
        <motion.ellipse
          key={`dash-${i}`}
          cx={cx}
          cy={cy}
          rx={orbit.rx}
          ry={orbit.ry}
          transform={`rotate(${orbit.rotation} ${cx} ${cy})`}
          stroke="var(--color-accent)"
          strokeWidth={1}
          strokeOpacity={0.15}
          strokeDasharray="8 80"
          fill="none"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: [0, -88] }}
          transition={{
            duration: orbit.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Nodes on orbits */}
      {orbitNodes.map((node, i) => {
        const orbit = orbits[node.orbit];
        const pos = getOrbitPoint(orbit, node.angle, cx, cy);
        return (
          <motion.g key={`node-${i}`}>
            {node.accent && (
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={node.r * 3.5}
                fill="var(--color-accent)"
                opacity={0.06}
                animate={{
                  r: [node.r * 3.5, node.r * 4.5, node.r * 3.5],
                  opacity: [0.06, 0.12, 0.06],
                }}
                transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
              />
            )}
            <motion.circle
              cx={pos.x}
              cy={pos.y}
              r={node.r}
              fill={
                node.accent ? "var(--color-accent)" : "var(--color-muted)"
              }
              opacity={node.accent ? 0.8 : 0.35}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            />
            {node.label && (
              <motion.text
                x={pos.x}
                y={pos.y - node.r - 8}
                textAnchor="middle"
                fill="var(--color-accent)"
                fontSize={10}
                fontFamily="var(--font-inter), system-ui, sans-serif"
                fontWeight={500}
                opacity={0}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
              >
                {node.label}
              </motion.text>
            )}
          </motion.g>
        );
      })}

      {/* Center node */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={20}
        fill="var(--color-accent)"
        opacity={0.05}
        animate={{ r: [20, 28, 20], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.circle
        cx={cx}
        cy={cy}
        r={8}
        fill="var(--color-accent)"
        opacity={0.8}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <motion.text
        x={cx}
        y={cy + 3.5}
        textAnchor="middle"
        fill="var(--color-background)"
        fontSize={8}
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight={600}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        CM
      </motion.text>
    </svg>
  );
}
