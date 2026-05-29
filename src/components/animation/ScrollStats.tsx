"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Star, Clock, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 153, suffix: "K+", label: "Learners Reached", icon: Users },
  { value: 4.4, suffix: "/5", label: "Satisfaction Score", decimals: 1, icon: Star },
  { value: 95, suffix: "%", label: "Rise Completion Rate", icon: Zap },
  { value: 12, suffix: "+", label: "Years Experience", icon: Clock },
];

export function ScrollStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(sectionRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });

          stats.forEach((stat, i) => {
            const el = numbersRef.current[i];
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.value,
              duration: 1.8,
              ease: "power2.out",
              delay: i * 0.1,
              onUpdate: () => {
                el.textContent = stat.decimals
                  ? obj.val.toFixed(stat.decimals)
                  : Math.round(obj.val).toString();
              },
            });
          });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <Icon className="w-5 h-5 text-accent/60" strokeWidth={1.5} />
                <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                  <span ref={(el) => { numbersRef.current[i] = el; }}>0</span>
                  {stat.suffix}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
