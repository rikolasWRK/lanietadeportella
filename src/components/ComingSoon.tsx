/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChefHat, ArrowLeft, Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col items-center justify-center text-dark-chocolate px-6 text-center">
      
      {/* Animated oven icon */}
      <motion.div
        animate={{ rotate: [0, -8, 8, -8, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
        className="mb-8"
      >
        <ChefHat className="w-20 h-20 text-action-cta mx-auto" strokeWidth={1.2} />
      </motion.div>

      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-sans text-xs font-bold tracking-[0.25em] text-action-cta uppercase block mb-4"
      >
        Función en Camino
      </motion.span>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight"
      >
        Aún lo estamos{" "}
        <span className="text-action-cta">horneando</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="font-sans text-base font-light text-dark-chocolate/60 max-w-md leading-relaxed mb-10"
      >
        Esta sección está en preparación, igual que nuestras tortas: 
        con paciencia, buena técnica y mucho amor.
        <br />
        <span className="text-dark-chocolate/40 text-sm mt-2 block">
          Mientras tanto, si tienes una queja urgente escríbenos al WhatsApp.
        </span>
      </motion.p>

      {/* Timer badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-2 bg-secondary-bg border border-dark-chocolate/10 rounded-full px-5 py-2.5 mb-10"
      >
        <Clock className="w-4 h-4 text-action-cta" />
        <span className="font-sans text-xs font-semibold tracking-widest uppercase text-dark-chocolate/70">
          Próximamente disponible
        </span>
      </motion.div>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-widest uppercase text-dark-chocolate/50 hover:text-action-cta transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a la pastelería
        </Link>
      </motion.div>

    </main>
  );
}
