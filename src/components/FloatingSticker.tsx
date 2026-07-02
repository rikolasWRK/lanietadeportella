/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { asset } from "../lib/asset";

interface FloatingStickerProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  drag?: boolean;
  scale?: number;
  /** positive = faster scroll, negative = slower/opposite scroll */
  parallaxSpeed?: number;
  /** Tailwind z-index utility, e.g. "z-10", "z-20" */
  zIndex?: string;
  /** Deterministic per-instance wobble on hover (avoids Math.random). */
  hoverWobble?: number;
}

export default function FloatingSticker({
  src,
  alt,
  className = "",
  rotation = 0,
  drag = true,
  scale = 1,
  parallaxSpeed = 0,
  zIndex = "z-10",
  hoverWobble = 4,
}: FloatingStickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Scroll-based offset for the parallax effect.
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, parallaxSpeed * 150],
  );

  return (
    <motion.div
      ref={containerRef}
      style={{
        y: parallaxSpeed !== 0 ? yOffset : 0,
        rotate: rotation,
        scale,
      }}
      drag={drag}
      dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
      dragElastic={0.15}
      whileHover={{
        scale: scale * 1.08,
        rotate: rotation + hoverWobble,
        filter: "drop-shadow(0px 12px 20px rgba(40, 24, 8, 0.15))",
        cursor: drag ? "grab" : "pointer",
      }}
      whileTap={{ scale: scale * 0.98, cursor: drag ? "grabbing" : "pointer" }}
      className={`absolute ${zIndex} select-none pointer-events-auto transition-shadow duration-300 drop-shadow-[0px_4px_8px_rgba(40,24,8,0.08)] ${className}`}
    >
      <img
        src={asset(src)}
        alt={alt}
        className="w-full h-full object-contain pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}
