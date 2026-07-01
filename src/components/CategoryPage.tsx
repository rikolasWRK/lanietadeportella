/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();

  // Scroll to top on load/change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const categoryTitles: Record<string, string> = {
    tortas: "Colección de Tortas",
    cupcakes: "Cupcakes de Autor",
    bocaditos: "Mini Bites & Catering",
    cafe: "Café DON ANTONIO",
  };

  const categorySubtitles: Record<string, string> = {
    tortas: "Recetas artesanales horneadas diariamente en Tarapoto",
    cupcakes: "Pequeñas obras de arte llenas de sabor y dedicación",
    bocaditos: "Diseño gourmet para eventos especiales y celebraciones",
    cafe: "Nuestra selección exclusiva de especialidad de altura",
  };

  const title = categoryTitles[id || ""] || "Categoría Premium";
  const subtitle = categorySubtitles[id || ""] || "Pastelería artesanal y café de especialidad";

  return (
    <div className="py-24 bg-primary-bg text-dark-chocolate min-h-[60vh] flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow */}
        <span className="font-sans text-xs font-bold tracking-[0.2em] text-action-cta uppercase block">
          Categoría: {id}
        </span>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark-chocolate">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg font-light text-dark-chocolate/70 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Placeholder container resembling main structure but empty */}
        <div className="w-full aspect-[16/9] max-w-2xl bg-cream-surface/30 rounded-3xl border border-dark-chocolate/10 flex flex-col items-center justify-center p-8 shadow-sm">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-dark-chocolate/30 animate-spin mb-4" />
          <p className="font-sans text-xs tracking-wider uppercase text-dark-chocolate/60">
            Contenido de prueba en construcción
          </p>
        </div>

        {/* Back Link */}
        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-wider text-dark-chocolate hover:text-action-cta transition-colors uppercase py-2 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Volver al Inicio
          </Link>
        </div>

      </div>
    </div>
  );
}
