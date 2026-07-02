/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { asset } from "../lib/asset";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="bg-cream-surface py-24 md:py-32 text-dark-chocolate relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait in Polaroid Style Frame */}
          <div className="md:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-sm"
              id="nosotros-image-container"
            >
              <div className="bg-white p-4 pb-12 shadow-2xl border border-dark-chocolate/5 rotate-[-2.5deg] hover:rotate-0 transition-transform duration-500 group">
                <div className="w-full aspect-square overflow-hidden bg-cream-surface/10 border border-dark-chocolate/5">
                  <img
                    src={asset("old-pic-angelica.webp")}
                    alt="Foto clásica de la señora Angélica de joven"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Story & Quote & Stats */}
          <div className="md:col-span-7 md:pl-12 text-left space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-dark-chocolate leading-tight"
            >
              Tradición que trasciende el tiempo y generaciones.
            </motion.h3>

            <div className="space-y-6 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-sans text-base sm:text-lg text-on-surface-variant font-light leading-relaxed"
                id="nosotros-story-text"
              >
                Desde 2012, nuestra cocina ha sido el corazón de celebraciones
                tarapotinas. Lo que comenzó como un homenaje a las recetas de la
                abuela Angela en la intimidad del hogar, hoy es un destino en
                San Martín para quienes buscan la perfección en la pastelería
                artesanal, fusionando insumos premium con el abrazo cálido de
                nuestra tradición familiar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="border-l-2 border-action-cta pl-6 py-2 my-6"
                id="nosotros-quote-callout"
              >
                <p className="font-sans text-base sm:text-lg font-bold text-dark-chocolate italic leading-relaxed">
                  "Cada bocado es un homenaje a nuestra historia. Usamos el
                  mismo mandil, el mismo cariño y la misma paciencia que mi
                  abuela Angela nos enseñó."
                </p>
              </motion.div>
            </div>

            {/* Numerical Stats Layout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex gap-12 items-center"
              id="nosotros-stats-bar"
            >
              <div className="text-center md:text-left">
                <span className="block font-display text-3xl sm:text-4xl text-vibrant-coral leading-none">
                  10+
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-dark-chocolate mt-1 block">
                  Años
                </span>
              </div>
              <div className="text-center md:text-left">
                <span className="block font-display text-3xl sm:text-4xl text-vibrant-coral leading-none">
                  ∞
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-dark-chocolate mt-1 block">
                  Sonrisas
                </span>
              </div>
              <div className="text-center md:text-left">
                <span className="block font-display text-3xl sm:text-4xl text-vibrant-coral leading-none">
                  1
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-dark-chocolate mt-1 block">
                  Maestra pastelera
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
