/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-cream-surface text-dark-chocolate overflow-hidden relative"
    >
      {/* Subtle Flourish Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none border-b border-l border-dark-chocolate rounded-bl-[120px]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5 pointer-events-none border-t border-r border-dark-chocolate rounded-tr-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Chef Craftsmanship in Arch Frame */}
          <div className="md:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm aspect-[4/5] bg-primary-bg/20 p-2 border border-dark-chocolate/10 rounded-t-full rounded-b-xl shadow-lg group"
              id="nosotros-image-container"
            >
              <div className="arch-frame w-full h-full relative">
                {/* Beautiful chef crafting bakes image */}
                <img
                  src="/angelica.jpeg"
                  alt="Maestra pastelera de La Nieta de Portella amasando recetas familiares de la abuela Angela"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Detailed Storytelling Copy & Quote */}
          <div className="md:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="font-sans text-xs font-bold tracking-widest text-action-cta uppercase">
                Nuestra Historia & Legado
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Tradición que trasciende el tiempo y generaciones.
              </h2>
            </motion.div>

            {/* Story Text (STRICT COMPLIANCE WITH USER COPY) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-base leading-relaxed text-dark-chocolate/80 font-light"
              id="nosotros-story-text"
            >
              Desde 2012, nuestra cocina ha sido el corazón de celebraciones tarapotinas. Lo que comenzó como un homenaje a las recetas de la abuela Angela en la intimidad del hogar, hoy es un destino en San Martín para quienes buscan la perfección en la pastelería artesanal, fusionando insumos premium con el abrazo cálido de nuestra tradición familiar.
            </motion.p>

            {/* Quote Callout (STRICT COMPLIANCE WITH USER QUOTE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-2 border-action-cta pl-6 py-2 my-6 relative bg-primary-bg/30 rounded-r-lg pr-4"
              id="nosotros-quote-callout"
            >
              <Quote className="absolute top-2 right-4 w-12 h-12 text-action-cta/10 pointer-events-none rotate-180" />
              <p className="font-display text-lg sm:text-xl lg:text-2xl text-dark-chocolate italic leading-relaxed">
                "Cada bocado es un homenaje a nuestra historia. Usamos el mismo mandil, el mismo cariño y la misma paciencia que mi abuela Angela nos enseñó."
              </p>
            </motion.div>

            {/* Numerical trust metrics layout (matching mockup stats bar) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-dark-chocolate/10 text-center sm:text-left"
              id="nosotros-stats-bar"
            >
              <div className="space-y-1">
                <p className="font-display text-3xl lg:text-4xl text-action-cta">10+</p>
                <p className="text-[10px] sm:text-xs font-bold tracking-widest text-dark-chocolate/70 uppercase">
                  Años endulzando
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-display text-3xl lg:text-4xl text-action-cta">∞</p>
                <p className="text-[10px] sm:text-xs font-bold tracking-widest text-dark-chocolate/70 uppercase">
                  Sonrisas
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-display text-3xl lg:text-4xl text-action-cta">1</p>
                <p className="text-[10px] sm:text-xs font-bold tracking-widest text-dark-chocolate/70 uppercase">
                  Maestra pastelera
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
