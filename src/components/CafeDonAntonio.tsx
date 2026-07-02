/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee, Award, Sparkles, Flame } from "lucide-react";
import { asset } from "../lib/asset";
import { useSectionNav } from "../lib/useSectionNav";

export default function CafeDonAntonio() {
  const goToSection = useSectionNav();
  const tastingNotes = [
    { label: "Cuerpo / Body", value: "85%", width: "w-[85%]" },
    { label: "Acidez / Acidity", value: "70%", width: "w-[70%]" },
    { label: "Dulzura / Sweetness", value: "90%", width: "w-[90%]" },
    { label: "Aroma / Aroma", value: "95%", width: "w-[95%]" },
  ];

  return (
    <section
      id="cafe-antonio"
      className="py-24 bg-dark-chocolate text-primary-bg overflow-hidden relative"
    >
      {/* Decorative Coffee Beans Fine Lines */}
      <div className="absolute top-1/4 left-5 w-40 h-40 opacity-5 pointer-events-none select-none border border-primary-bg rounded-full border-dashed" />
      <div className="absolute bottom-1/4 right-5 w-56 h-56 opacity-5 pointer-events-none select-none border border-primary-bg rounded-full border-double" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Logo inside top-arch frame (High Contrast Match) */}
          <div className="md:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm aspect-square sm:aspect-[4/5] bg-primary-bg/10 p-2 border border-primary-bg/10 rounded-t-full rounded-b-xl overflow-hidden shadow-2xl group"
              id="cafe-logo-container"
            >
              <div className="arch-frame w-full h-full relative bg-black flex items-center justify-center p-6">
                {/* Official Cafe Don Antonio White/Black logo */}
                <img
                  src={asset("cafe-taza.jpeg")}
                  alt="Logo Oficial Café Don Antonio de Especialidad"
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Information & Coffee metrics */}
          <div className="md:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-action-cta uppercase flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                <span>Nuestra Herencia Cafetalera</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Café de Especialidad Don Antonio
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-sm sm:text-base font-light leading-relaxed text-primary-bg/80"
              id="cafe-intro-text"
            >
              Cosechado artesanalmente a más de 1,500 msnm en las laderas
              nubosas de la selva alta de San Martín. Nuestro café arábica
              orgánico se lava de forma rústica y se tuesta semanalmente en
              pequeños lotes, revelando notas ricas a chocolate de taza,
              caramelo fundido y un final limpio con acidez cítrica sutil.
            </motion.p>

            {/* Coffee specifications cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
              id="cafe-specs-grid"
            >
              <div className="p-4 bg-primary-bg/5 border border-primary-bg/10 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-action-cta">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Puntaje de Taza
                  </span>
                </div>
                <p className="font-display text-2xl text-primary-bg">
                  84.5+ SCA
                </p>
                <p className="text-[10px] font-light text-primary-bg/50">
                  Categoría Especialidad Excelente
                </p>
              </div>

              <div className="p-4 bg-primary-bg/5 border border-primary-bg/10 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-action-cta">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Perfil de Tueste
                  </span>
                </div>
                <p className="font-display text-2xl text-primary-bg">
                  Tueste Medio
                </p>
                <p className="text-[10px] font-light text-primary-bg/50">
                  Balance perfecto entre aroma y cuerpo
                </p>
              </div>
            </motion.div>

            {/* Interactive flavor profile metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3 bg-primary-bg/5 p-5 border border-primary-bg/10 rounded-xl"
              id="cafe-profile-metrics"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary-bg/70 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-action-cta" />
                <span>Perfil Organoléptico en Taza</span>
              </h4>
              <div className="space-y-2.5 pt-2">
                {tastingNotes.map((note) => (
                  <div key={note.label} className="space-y-1">
                    <div className="flex justify-between text-xs font-light">
                      <span className="text-primary-bg/80">{note.label}</span>
                      <span className="font-bold text-action-cta">
                        {note.value}
                      </span>
                    </div>
                    {/* Bar chart container */}
                    <div className="h-1.5 bg-primary-bg/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-action-cta ${note.width} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scrolling Trigger to the menu Café category */}
            <div className="pt-2">
              <a
                href="#carta"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("carta");
                }}
                className="px-6 py-3 bg-action-cta text-primary-bg font-sans rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-opacity-95 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
                id="cafe-catalog-trigger"
              >
                <span>Pedir Café en Grano o Bebidas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
