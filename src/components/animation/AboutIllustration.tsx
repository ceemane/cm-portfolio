"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CX = 200;  // center x
const CY = 250;  // center y
const SR = 120;  // spoke radius (center-to-node center)
const CR = 40;   // center node radius
const NR = 34;   // outer node radius

export function AboutIllustration() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef  = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const svg    = svgRef.current!;
      const glow   = svg.querySelector<SVGElement>(".glow");
      const center = svg.querySelector<SVGElement>(".center-node");
      const lines  = svg.querySelectorAll<SVGElement>(".spoke");
      const nodes  = svg.querySelectorAll<SVGElement>(".outer-node");
      const labels = svg.querySelectorAll<SVGElement>(".lbl");

      gsap.set(glow,   { opacity: 0 });
      gsap.set(center, { scale: 0, opacity: 0, transformBox: "fill-box", transformOrigin: "center center" });
      gsap.set(lines,  { strokeDashoffset: SR, opacity: 0 });
      gsap.set(nodes,  { scale: 0, opacity: 0, transformBox: "fill-box", transformOrigin: "center center" });
      gsap.set(labels, { opacity: 0 });

      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.timeline()
            .to(glow,   { opacity: 1, duration: 1,    ease: "power2.out" })
            .to(center, { scale: 1, opacity: 1, duration: 0.5,  ease: "back.out(1.7)" }, "-=0.6")
            .to(lines,  { strokeDashoffset: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.2")
            .to(nodes,  { scale: 1, opacity: 1, duration: 0.45, stagger: 0.12, ease: "back.out(1.7)" }, "-=0.55")
            .to(labels, { opacity: 1, duration: 0.4, stagger: 0.1 }, "-=0.2");
        },
        once: true,
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="flex justify-center py-6">
      <svg
        ref={svgRef}
        viewBox="0 0 400 462"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Hub diagram connecting Learner, Content, AI Agent, and Credential to the L&D practice hub"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md"
      >
        {/* Ambient glow */}
        <ellipse className="glow" cx={CX} cy={CY} rx="110" ry="85" fill="rgba(245,200,66,0.07)" />

        {/* Spokes — drawn before nodes so circles mask the ends */}
        <line className="spoke" x1={CX} y1={CY} x2={CX}      y2={CY - SR}
          stroke="#f5c842" strokeWidth="1.5" strokeOpacity="0.4"
          strokeDasharray={SR} strokeDashoffset={SR} />
        <line className="spoke" x1={CX} y1={CY} x2={CX + SR} y2={CY}
          stroke="#f5c842" strokeWidth="1.5" strokeOpacity="0.4"
          strokeDasharray={SR} strokeDashoffset={SR} />
        <line className="spoke" x1={CX} y1={CY} x2={CX}      y2={CY + SR}
          stroke="#f5c842" strokeWidth="1.5" strokeOpacity="0.4"
          strokeDasharray={SR} strokeDashoffset={SR} />
        <line className="spoke" x1={CX} y1={CY} x2={CX - SR} y2={CY}
          stroke="#f5c842" strokeWidth="1.5" strokeOpacity="0.4"
          strokeDasharray={SR} strokeDashoffset={SR} />

        {/* ── CENTER NODE ─────────────────────────────── */}
        <g className="center-node">
          <circle cx={CX} cy={CY} r={CR} fill="#2e3e40" stroke="#f5c842" strokeWidth="2" />
          {/* Triangle network icon */}
          <circle cx={CX}      cy={CY - 12} r={5} fill="#f5c842" />
          <circle cx={CX - 11} cy={CY + 7}  r={5} fill="#f5c842" />
          <circle cx={CX + 11} cy={CY + 7}  r={5} fill="#f5c842" />
          <line x1={CX}      y1={CY - 7} x2={CX - 8}  y2={CY + 3} stroke="#f5c842" strokeWidth="1.5" />
          <line x1={CX}      y1={CY - 7} x2={CX + 8}  y2={CY + 3} stroke="#f5c842" strokeWidth="1.5" />
          <line x1={CX - 8}  y1={CY + 7} x2={CX + 8}  y2={CY + 7} stroke="#f5c842" strokeWidth="1.5" />
        </g>

        {/* ── TOP: Learner (200, 130) ──────────────────── */}
        <g className="outer-node">
          <circle cx={CX} cy={CY - SR} r={NR} fill="#2e3e40" stroke="#34484a" strokeWidth="1.5" />
          <circle cx={CX} cy={CY - SR - 10} r={9}
            fill="none" stroke="#b0cec8" strokeWidth="2" opacity="0.75" />
          <path d={`M${CX - 15} ${CY - SR + 18} Q${CX} ${CY - SR + 8} ${CX + 15} ${CY - SR + 18}`}
            stroke="#b0cec8" strokeWidth="2" fill="none" opacity="0.75" />
        </g>
        {/* Label above the top node */}
        <text className="lbl" x={CX} y={CY - SR - NR - 18}
          textAnchor="middle" fontSize="14" fill="#f0faf7" fontFamily="system-ui" fontWeight="600">Learner</text>
        <text className="lbl" x={CX} y={CY - SR - NR - 3}
          textAnchor="middle" fontSize="12" fill="#7aa89f" fontFamily="system-ui">50K+ served</text>

        {/* ── RIGHT: Credential (320, 250) ─────────────── */}
        <g className="outer-node">
          <circle cx={CX + SR} cy={CY} r={NR} fill="#2e3e40" stroke="#34484a" strokeWidth="1.5" />
          <rect x={CX + SR - 11} y={CY - 13} width="22" height="15" rx="3"
            fill="none" stroke="#b0cec8" strokeWidth="2" opacity="0.75" />
          <circle cx={CX + SR} cy={CY + 11} r={6} fill="#f5c842" opacity="0.65" />
          <line x1={CX + SR - 5} y1={CY + 17} x2={CX + SR - 8} y2={CY + 24}
            stroke="#f5c842" strokeWidth="2" opacity="0.6" />
          <line x1={CX + SR + 5} y1={CY + 17} x2={CX + SR + 8} y2={CY + 24}
            stroke="#f5c842" strokeWidth="2" opacity="0.6" />
        </g>
        {/* Label below the right node */}
        <text className="lbl" x={CX + SR} y={CY + NR + 22}
          textAnchor="middle" fontSize="14" fill="#f0faf7" fontFamily="system-ui" fontWeight="600">Credential</text>
        <text className="lbl" x={CX + SR} y={CY + NR + 39}
          textAnchor="middle" fontSize="12" fill="#7aa89f" fontFamily="system-ui">$1.6M ARR</text>

        {/* ── BOTTOM: AI Agent (200, 370) ──────────────── */}
        <g className="outer-node">
          <circle cx={CX} cy={CY + SR} r={NR} fill="#2e3e40" stroke="#34484a" strokeWidth="1.5" />
          <rect x={CX - 13} y={CY + SR - 10} width="26" height="18" rx="3"
            fill="none" stroke="#b0cec8" strokeWidth="2" opacity="0.65" />
          <circle cx={CX - 6} cy={CY + SR - 3} r={3.5} fill="#f5c842" opacity="0.8" />
          <circle cx={CX + 6} cy={CY + SR - 3} r={3.5} fill="#f5c842" opacity="0.8" />
          <line x1={CX - 5} y1={CY + SR + 6} x2={CX + 5} y2={CY + SR + 6}
            stroke="#b0cec8" strokeWidth="2" opacity="0.5" />
          <line x1={CX} y1={CY + SR - 10} x2={CX} y2={CY + SR - 18}
            stroke="#b0cec8" strokeWidth="2" opacity="0.5" />
          <circle cx={CX} cy={CY + SR - 21} r={3.5}
            fill="none" stroke="#b0cec8" strokeWidth="1.5" opacity="0.45" />
        </g>
        {/* Label below the bottom node */}
        <text className="lbl" x={CX} y={CY + SR + NR + 22}
          textAnchor="middle" fontSize="14" fill="#f0faf7" fontFamily="system-ui" fontWeight="600">AI Agent</text>
        <text className="lbl" x={CX} y={CY + SR + NR + 39}
          textAnchor="middle" fontSize="12" fill="#7aa89f" fontFamily="system-ui">99% ops saved</text>

        {/* ── LEFT: Content (80, 250) ──────────────────── */}
        <g className="outer-node">
          <circle cx={CX - SR} cy={CY} r={NR} fill="#2e3e40" stroke="#34484a" strokeWidth="1.5" />
          <rect x={CX - SR - 11} y={CY - 15} width="22" height="30" rx="2"
            fill="none" stroke="#b0cec8" strokeWidth="2" opacity="0.75" />
          <line x1={CX - SR - 7} y1={CY - 6} x2={CX - SR + 7} y2={CY - 6}
            stroke="#b0cec8" strokeWidth="1.5" opacity="0.55" />
          <line x1={CX - SR - 7} y1={CY}     x2={CX - SR + 7} y2={CY}
            stroke="#b0cec8" strokeWidth="1.5" opacity="0.55" />
          <line x1={CX - SR - 7} y1={CY + 6} x2={CX - SR + 2} y2={CY + 6}
            stroke="#b0cec8" strokeWidth="1.5" opacity="0.55" />
        </g>
        {/* Label below the left node */}
        <text className="lbl" x={CX - SR} y={CY + NR + 22}
          textAnchor="middle" fontSize="14" fill="#f0faf7" fontFamily="system-ui" fontWeight="600">Content</text>
        <text className="lbl" x={CX - SR} y={CY + NR + 39}
          textAnchor="middle" fontSize="12" fill="#7aa89f" fontFamily="system-ui">95% complete</text>
      </svg>
    </div>
  );
}
