/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface FloatingStickerProps {
  key?: string | number;
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
  drag?: boolean;
  scale?: number;
  parallaxSpeed?: number; // positive = faster scroll, negative = slower/opposite scroll
  zIndex?: string; // e.g. "z-10", "z-20"
}

export default function FloatingSticker({
  src,
  alt,
  className = "",
  rotation = 0,
  drag = true,
  scale = 1,
  parallaxSpeed = 0,
  zIndex = "z-10"
}: FloatingStickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Create a scroll-based offset for parallax effect
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, parallaxSpeed * 150]
  );

  return (
    <motion.div
      ref={containerRef}
      style={{
        y: parallaxSpeed !== 0 ? yOffset : 0,
        rotate: rotation,
        scale: scale,
      }}
      drag={drag}
      dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
      dragElastic={0.15}
      whileHover={{
        scale: scale * 1.08,
        rotate: rotation + (Math.random() > 0.5 ? 4 : -4),
        filter: "drop-shadow(0px 12px 20px rgba(40, 24, 8, 0.15))",
        cursor: drag ? "grab" : "pointer"
      }}
      whileTap={drag ? { scale: scale * 0.98, cursor: "grabbing" } : { scale: scale * 0.98 }}
      className={`absolute ${zIndex} select-none pointer-events-auto transition-shadow duration-300 drop-shadow-[0px_4px_8px_rgba(40,24,8,0.08)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}
