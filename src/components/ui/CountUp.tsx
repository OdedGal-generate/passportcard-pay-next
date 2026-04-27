"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate, useMotionValue, useTransform } from "framer-motion";

interface CountUpProps {
  to: number;
  duration?: number;
}

export default function CountUp({ to, duration = 1.2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) =>
    new Intl.NumberFormat("en-US").format(Math.round(v))
  );
  const [text, setText] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, {
      duration,
      ease: [0.25, 1, 0.5, 1],
    });
    const unsub = display.on("change", (v) => setText(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, duration, motionVal, display]);

  return <span ref={ref} className="tabular">{text}</span>;
}
