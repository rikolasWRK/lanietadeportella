/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Coffee, Clock, Cake, ChefHat, Utensils } from "lucide-react";

// Contextual Coming Soon configurations for each product category
const categoryConfigs: Record<
  string,
  {
    icon: React.ComponentType<any>;
    eyebrow: string;
    headlineWord: string;
    subtext: string;
    bottomText: string;
    timerText: string;
  }
> = {
  cafe: {
    icon: Coffee,
    eyebrow: "Molienda Especial",
    headlineWord: "filtrando",
    subtext: "El apartado de Café Don Antonio está en preparación. Estamos seleccionando los mejores granos de altura y diseñando una carta de especialidad única para ti.",
    bottomText: "Pronto podrás disfrutar del aroma de la taza perfecta.",
    timerText: "Próximamente en taza",
  },
  tortas: {
    icon: Cake,
    eyebrow: "Colección Premium",
    headlineWord: "horneando",
    subtext: "Nuestra selección exclusiva de tortas artesanales y de diseñador está en preparación. Estamos perfeccionando las recetas tradicionales de la abuela Angela para tu deleite.",
    bottomText: "Pronto verás el catálogo más dulce de San Martín.",
    timerText: "Próximamente en vitrina",
  },
  cupcakes: {
    icon: ChefHat,
    eyebrow: "Bocados de Autor",
    headlineWord: "decorando",
    subtext: "Los cupcakes y bakes de autor están recibiendo sus últimos toques de dulzura y diseño. Pronto podrás disfrutar de estas pequeñas obras de arte comestibles.",
    bottomText: "Detalles finos y sabores inolvidables en camino.",
    timerText: "Próximamente en vitrina",
  },
  bocaditos: {
    icon: Utensils,
    eyebrow: "Servicio Gourmet",
    headlineWord: "preparando",
    subtext: "Nuestra propuesta de bocaditos finos y servicio de catering para tus eventos especiales está terminando de estructurarse para garantizar una experiencia gourmet impecable.",
    bottomText: "El catering perfecto para tus celebraciones.",
    timerText: "Próximamente disponible",
  },
};

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();

  // Scroll to top on load/change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const activeId = id || "tortas";
  const config = categoryConfigs[activeId] || categoryConfigs.tortas;
  const IconComponent = config.icon;

  return (
    <main
      className="min-h-[75vh] bg-primary-bg flex flex-col items-center justify-center text-dark-chocolate px-6 text-center py-16"
      id="category-page-root"
    >
      {/* Animated contextual icon */}
      <motion.div
        animate={{
          rotate: [0, -6, 6, -6, 6, 0],
          y: [0, -4, 0, -4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        }}
        className="mb-8"
      >
        <IconComponent className="w-20 h-20 text-action-cta mx-auto" strokeWidth={1.2} />
      </motion.div>

      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-sans text-xs font-bold tracking-[0.25em] text-action-cta uppercase block mb-4"
      >
        {config.eyebrow}
      </motion.span>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight"
      >
        Aún se está <span className="text-action-cta">{config.headlineWord}</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="font-sans text-base font-light text-dark-chocolate/60 max-w-md leading-relaxed mb-10"
      >
        {config.subtext}
        <br />
        <span className="text-dark-chocolate/40 text-sm mt-2 block">
          {config.bottomText}
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
          {config.timerText}
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
          Volver al inicio
        </Link>
      </motion.div>
    </main>
  );
}
