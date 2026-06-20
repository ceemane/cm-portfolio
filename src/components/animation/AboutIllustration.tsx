"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CX = 240;
const CY = 230;
const SR = 120; // spoke radius (center-to-node center distance)

export function AboutIllustration() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef  = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const svg      = svgRef.current!;
      const glow     = svg.querySelector<SVGElement>(".glow");
      const center   = svg.querySelector<SVGElement>(".center-node");
      const lines    = svg.querySelectorAll<SVGElement>(".spoke");
      const nodes    = svg.querySelectorAll<SVGElement>(".outer-node");
      const labels   = svg.querySelectorAll<SVGElement>(".lbl");

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
            .to(glow,   { opacity: 1, duration: 1, ease: "power2.out" })
            .to(center, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.6")
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
    <div ref={wrapRef} className="flex justify-center py-8">
      <svg
        ref={svgRef}
        viewBox="0 0 480 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Hub diagram: Learner, Content, AI Agent, and Certification connected to the L&D practice hub"
        className="w-full max-w-md"
      >
        {/* Ambient glow */}
        <ellipse className="glow" cx={CX} cy={CY} rx="110" ry="80"
          fill="rgba(245,200,66,0.07)" />

        {/* Spoke lines — drawn before nodes so circles cover the ends */}
        <line className="spoke" x1={CX} y1={CY} x2={CX}      y2={CY - SR}
          stroke="#f5c842" strokeWidth="1" strokeOpacity="0.4"
          strokeDasharray={SR} strokeDashoffset={SR} />
        <line className="spoke" x1={CX} y1={CY} x2={CX + SR} y2={CY}
          stroke="#f5c842" strokeWidth="1" strokeOpacity="0.4"
          strokeDasharray={SR} strokeDashoffset={SR} />
        <line className="spoke" x1={CX} y1={CY} x2={CX}      y2={CY + SR}
          stroke="#f5c842" strokeWidth="1" strokeOpacity="0.4"
          strokeDasharray={SR} strokeDashoffset={SR} />
        <line className="spoke" x1={CX} y1={CY} x2={CX - SR} y2={CY}
          stroke="#f5c842" strokeWidth="1" strokeOpacity="0.4"
          strokeDasharray={SR} strokeDashoffset={SR} />

        {/* CENTER NODE */}
        <g className="center-node">
          <circle cx={CX} cy={CY} r={34} fill="#2e3e40" stroke="#f5c842" strokeWidth="2" />
          <circle cx={CX}     cy={CY - 10} r={4} fill="#f5c842" />
          <circle cx={CX - 9} cy={CY + 5}  r={4} fill="#f5c842" />
          <circle cx={CX + 9} cy={CY + 5}  r={4} fill="#f5c842" />
          <line x1={CX}     y1={CY - 6}  x2={CX - 7} y2={CY + 2}  stroke="#f5c842" strokeWidth="1.5" />
          <line x1={CX}     y1={CY - 6}  x2={CX + 7} y2={CY + 2}  stroke="#f5c842" strokeWidth="1.5" />
          <line x1={CX - 6} y1={CY + 5}  x2={CX + 6} y2={CY + 5}  stroke="#f5c842" strokeWidth="1.5" />
        </g>

        {/* TOP: Learner (240, 110) */}
        <g className="outer-node">
          <circle cx={CX} cy={CY - SR} r={26} fill="#2e3e40" stroke="#34484a" strokeWidth="1.5" />
          <circle cx={CX} cy={CY - SR - 7} r={7} fill="none" stroke="#b0cec8" strokeWidth="1.5" opacity="0.7" />
          <path d={`M${CX - 12} ${CY - SR + 15} Q${CX} ${CY - SR + 7} ${CX + 12} ${CY - SR + 15}`}
            stroke="#b0cec8" strokeWidth="1.5" fill="none" opacity="0.7" />
        </g>
        <text className="lbl" x={CX} y={CY - SR - 40}
          textAnchor="middle" fontSize="10" fill="#f0faf7" fontFamily="system-ui" fontWeight="600">Learner</text>
        <text className="lbl" x={CX} y={CY - SR - 26}
          textAnchor="middle" fontSize="9" fill="#7aa89f" fontFamily="system-ui">50K+ served</text>

        {/* RIGHT: Certification (360, 230) */}
        <g className="outer-node">
          <circle cx={CX + SR} cy={CY} r={26} fill="#2e3e40" stroke="#34484a" strokeWidth="1.5" />
          <rect x={CX + SR - 9} y={CY - 12} width="18" height="13" rx="2"
            fill="none" stroke="#b0cec8" strokeWidth="1.5" opacity="0.7" />
          <circle cx={CX + SR} cy={CY + 9} r={5} fill="#f5c842" opacity="0.65" />
          <line x1={CX + SR - 4} y1={CY + 14} x2={CX + SR - 7} y2={CY + 20}
            stroke="#f5c842" strokeWidth="1.5" opacity="0.6" />
          <line x1={CX + SR + 4} y1={CY + 14} x2={CX + SR + 7} y2={CY + 20}
            stroke="#f5c842" strokeWidth="1.5" opacity="0.6" />
        </g>
        <text className="lbl" x={CX + SR + 38} y={CY - 4}
          textAnchor="start" fontSize="10" fill="#f0faf7" fontFamily="system-ui" fontWeight="600">Certification</text>
        <text className="lbl" x={CX + SR + 38} y={CY + 10}
          textAnchor="start" fontSize="9" fill="#7aa89f" fontFamily="system-ui">$1.6M ARR</text>

        {/* BOTTOM: AI Agent (240, 350) */}
        <g className="outer-node">
          <circle cx={CX} cy={CY + SR} r={26} fill="#2e3e40" stroke="#34484a" strokeWidth="1.5" />
          <rect x={CX - 11} y={CY + SR - 9} width="22" height="15" rx="3"
            fill="none" stroke="#b0cec8" strokeWidth="1.5" opacity="0.6" />
          <circle cx={CX - 5} cy={CY + SR - 3} r={3} fill="#f5c842" opacity="0.75" />
          <circle cx={CX + 5} cy={CY + SR - 3} r={3} fill="#f5c842" opacity="0.75" />
          <line x1={CX - 4} y1={CY + SR + 4} x2={CX + 4} y2={CY + SR + 4}
            stroke="#b0cec8" strokeWidth="1.5" opacity="0.5" />
          <line x1={CX} y1={CY + SR - 9} x2={CX} y2={CY + SR - 16}
            stroke="#b0cec8" strokeWidth="1.5" opacity="0.5" />
          <circle cx={CX} cy={CY + SR - 19} r={3} fill="none" stroke="#b0cec8" strokeWidth="1.2" opacity="0.45" />
        </g>
        <text className="lbl" x={CX} y={CY + SR + 42}
          textAnchor="middle" fontSize="10" fill="#f0faf7" fontFamily="system-ui" fontWeight="600">AI Agent</text>
        <text className="lbl" x={CX} y={CY + SR + 56}
          textAnchor="middle" fontSize="9" fill="#7aa89f" fontFamily="system-ui">99% ops reduction</text>

        {/* LEFT: Content (120, 230) */}
        <g className="outer-node">
          <circle cx={CX - SR} cy={CY} r={26} fill="#2e3e40" stroke="#34484a" strokeWidth="1.5" />
          <rect x={CX - SR - 9} y={CY - 13} width="18" height="24" rx="2"
            fill="none" stroke="#b0cec8" strokeWidth="1.5" opacity="0.7" />
          <line x1={CX - SR - 6} y1={CY - 5} x2={CX - SR + 6} y2={CY - 5}
            stroke="#b0cec8" strokeWidth="1.2" opacity="0.5" />
          <line x1={CX - SR - 6} y1={CY}     x2={CX - SR + 6} y2={CY}
            stroke="#b0cec8" strokeWidth="1.2" opacity="0.5" />
          <line x1={CX - SR - 6} y1={CY + 5} x2={CX - SR + 2} y2={CY + 5}
            stroke="#b0cec8" strokeWidth="1.2" opacity="0.5" />
        </g>
        <text className="lbl" x={CX - SR - 38} y={CY - 4}
          textAnchor="end" fontSize="10" fill="#f0faf7" fontFamily="system-ui" fontWeight="600">Content</text>
        <text className="lbl" x={CX - SR - 38} y={CY + 10}
          textAnchor="end" fontSize="9" fill="#7aa89f" fontFamily="system-ui">95% completion</text>
      </svg>
    </div>
  );
}
