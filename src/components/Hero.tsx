/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ChevronRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-[calc(100vh-4rem)] flex items-center pt-8 pb-16 overflow-hidden bg-primary-bg" id="hero-section">
      {/* Decorative Fine-Line Flourishes */}
      <div className="absolute top-1/4 left-10 w-48 h-48 opacity-10 pointer-events-none select-none border border-dark-chocolate rounded-full border-dashed animate-pulse" />
      <div className="absolute bottom-12 right-12 w-96 h-96 opacity-5 pointer-events-none select-none border border-dark-chocolate rounded-full border-double" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content & Actions */}
          <div className="md:col-span-6 space-y-6 text-dark-chocolate text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="font-sans text-xs font-bold tracking-widest text-action-cta uppercase inline-block bg-action-cta/10 px-3 py-1 rounded-full">
                Artesanía en cada bocado
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-dark-chocolate">
                Pasión por <br className="hidden sm:inline" />
                <span className="text-action-cta italic font-normal">endulzar</span> la vida
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg font-light leading-relaxed text-dark-chocolate/80 max-w-xl"
            >
              Pastelería fina nacida de un legado familiar inquebrantable, horneada paso a paso con insumos premium y combinada con el alma aromática del café de especialidad Don Antonio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
              id="hero-actions"
            >
              <a
                href="#carta"
                className="px-8 py-4 bg-action-cta text-primary-bg font-sans rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 shadow-md hover:bg-opacity-95 transition-all hover:translate-y-[-2px] hover:shadow-lg duration-300"
                id="hero-primary-cta"
              >
                <span>Explorar Carta Premium</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#personalizar"
                className="px-8 py-4 border-2 border-dark-chocolate/20 text-dark-chocolate hover:border-dark-chocolate bg-transparent font-sans rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 transition-all hover:bg-dark-chocolate/5 duration-300"
                id="hero-secondary-cta"
              >
                <span>Torta Personalizada</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-8 border-t border-dark-chocolate/10 grid grid-cols-3 gap-6"
            >
              <div>
                <p className="font-display text-2xl text-action-cta">100%</p>
                <p className="text-xs font-light text-dark-chocolate/70">Insumos Premium</p>
              </div>
              <div>
                <p className="font-display text-2xl text-action-cta">Desde 2012</p>
                <p className="text-xs font-light text-dark-chocolate/70">Tradición Familiar</p>
              </div>
              <div>
                <p className="font-display text-2xl text-action-cta">Sca 84+</p>
                <p className="text-xs font-light text-dark-chocolate/70">Café Especialidad</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Premium Arch Placeholder */}
          <div className="md:col-span-6 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-md aspect-[3/4] bg-cream-surface/30 p-2 border border-dark-chocolate/10 rounded-t-full rounded-b-2xl shadow-xl group"
              id="hero-image-container"
            >
              {/* Outer arch wrapper */}
              <div className="arch-frame w-full h-full relative">
                {/* Fallback pattern or stunning cake photo from Unsplash */}
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80"
                  alt="La Nieta de Portella - Tarta Premium de Bodas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Interactive Spinning Badge */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-28 h-28 sm:w-36 sm:h-36 bg-secondary-bg border border-dark-chocolate/20 rounded-full flex items-center justify-center p-1 shadow-lg pointer-events-none select-none z-10">
                <div className="w-full h-full relative flex items-center justify-center">
                  {/* Rotating SVG Text */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-[spin_16s_linear_infinite]"
                  >
                    <defs>
                      <path
                        id="textPath"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      />
                    </defs>
                    <text className="font-sans text-[7.5px] font-bold tracking-[0.25em] fill-dark-chocolate">
                      <textPath href="#textPath" startOffset="0%">
                        • HAPPY BAKES • WE BAKE YOU HAPPY
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Mini-Logo Centered */}
                  <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-bg flex flex-col items-center justify-center border border-dark-chocolate/10 text-center">
                    <span className="font-display text-[9px] text-action-cta">Est.</span>
                    <span className="font-sans text-[10px] font-bold text-dark-chocolate leading-none">2012</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scroll Indicator helper */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-60">
              <span className="font-sans text-[10px] uppercase tracking-widest text-dark-chocolate">Deslizar</span>
              <ArrowDown className="w-4 h-4 text-action-cta animate-bounce" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
