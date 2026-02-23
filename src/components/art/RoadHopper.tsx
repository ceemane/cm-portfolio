"use client";

import { motion } from "motion/react";

// Inspired by a classic road-crossing frog character
export function RoadHopper() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Road hopper game character">
      {/* Water at top */}
      <rect x={20} y={20} width={440} height={50} rx={2} fill="var(--color-accent)" fillOpacity={0.06} />

      {/* Lily pads */}
      {[80, 200, 320, 420].map((x, i) => (
        <motion.ellipse
          key={`lily-${i}`}
          cx={x}
          cy={45}
          rx={25}
          ry={10}
          fill="var(--color-accent)"
          fillOpacity={0.2}
          animate={{ cx: [x, x + 30, x] }}
          transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
        />
      ))}

      {/* Logs */}
      {[60, 280].map((x, i) => (
        <motion.g key={`log-${i}`} animate={{ x: [0, 80, 0] }} transition={{ duration: 5, delay: i * 1.5, repeat: Infinity }}>
          <rect x={x} y={35} rx={6} width={80} height={16} fill="var(--color-foreground)" fillOpacity={0.12} />
        </motion.g>
      ))}

      {/* Road lanes */}
      {[90, 130, 170, 210].map((y, i) => (
        <g key={`lane-${i}`}>
          <rect x={20} y={y} width={440} height={35} fill="var(--color-foreground)" fillOpacity={0.04} />
          {/* Lane dividers */}
          {Array.from({ length: 8 }).map((_, j) => (
            <rect key={`div-${i}-${j}`} x={40 + j * 55} y={y + 33} width={30} height={2} fill="var(--color-muted)" fillOpacity={0.15} />
          ))}
        </g>
      ))}

      {/* Cars/trucks moving */}
      {[
        { y: 95, dir: 1, speed: 3, w: 40, color: "var(--color-accent)" },
        { y: 135, dir: -1, speed: 4, w: 55, color: "var(--color-muted)" },
        { y: 175, dir: 1, speed: 2.5, w: 35, color: "var(--color-accent)" },
        { y: 215, dir: -1, speed: 3.5, w: 45, color: "var(--color-muted)" },
      ].map((car, i) => (
        <motion.rect
          key={`car-${i}`}
          x={car.dir > 0 ? -60 : 480}
          y={car.y + 5}
          width={car.w}
          height={20}
          rx={4}
          fill={car.color}
          fillOpacity={0.3}
          animate={{ x: car.dir > 0 ? [-60, 500] : [500, -60] }}
          transition={{ duration: car.speed, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
        />
      ))}

      {/* Safe zone */}
      <rect x={20} y={250} width={440} height={35} rx={2} fill="var(--color-accent)" fillOpacity={0.06} />

      {/* Frog character */}
      <motion.g
        animate={{
          y: [0, -40, -40, -80, -80, -120, -120, -160, -160, -200, -200, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatDelay: 1, times: [0, 0.08, 0.15, 0.23, 0.3, 0.38, 0.45, 0.53, 0.6, 0.68, 0.85, 1] }}
      >
        {/* Body */}
        <ellipse cx={240} cy={265} rx={12} ry={10} fill="var(--color-accent)" opacity={0.8} />
        {/* Eyes */}
        <circle cx={234} cy={257} r={4} fill="var(--color-accent)" />
        <circle cx={246} cy={257} r={4} fill="var(--color-accent)" />
        <circle cx={234} cy={256} r={2} fill="white" />
        <circle cx={246} cy={256} r={2} fill="white" />
        {/* Legs */}
        <motion.g animate={{ scaleY: [1, 0.6, 1] }} transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 0.3 }}>
          <ellipse cx={228} cy={272} rx={6} ry={3} fill="var(--color-accent)" opacity={0.6} />
          <ellipse cx={252} cy={272} rx={6} ry={3} fill="var(--color-accent)" opacity={0.6} />
        </motion.g>
      </motion.g>

      {/* Home slots at top */}
      {[100, 200, 300, 400].map((x, i) => (
        <rect key={`home-${i}`} x={x - 15} y={22} width={30} height={20} rx={3} fill="none" stroke="var(--color-accent)" strokeWidth={1} strokeOpacity={0.2} />
      ))}
    </svg>
  );
}
