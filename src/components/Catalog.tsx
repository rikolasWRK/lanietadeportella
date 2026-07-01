import React from "react";
import { Link } from "react-router-dom";

export default function Catalog() {
  const categories = [
    {
      id: "tortas" as const,
      name: "Tortas",
      subtitle: "VER COLECCIÓN",
      image: "tortaBG.png",
      tagline: "Tortas de Vitrina"
    },
    {
      id: "cupcakes" as const,
      name: "Cupcakes",
      subtitle: "VER SABORES",
      image: "cupcakeBG.png",
      tagline: "Cupcakes de Autor"
    },
    {
      id: "bocaditos" as const,
      name: "Mini Bites & Catering",
      subtitle: "EVENTOS & CATERING",
      image: "mbcBG.png",
      tagline: "Bocaditos Finos"
    },
    {
      id: "cafe" as const,
      name: "Café DON ANTONIO",
      subtitle: "NUESTRA HERENCIA CAFETALERA",
      image: "AntucoBG.png",
      tagline: "LÍNEA DE CAFÉ PREMIUM"
    }
  ];

  return (
    <section id="carta" className="py-24 bg-primary-bg text-dark-chocolate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-action-cta uppercase block">
            A mal tiempo, un buen postre
          </span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Nuestras Categorías
          </h2>
          <div className="w-12 h-[1px] bg-action-cta mx-auto" />
        </div>

        {/* Categories Row — arch-frame + floating icons + 3D tilt on hover */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 [perspective:1200px]"
          id="categories-grid"
        >
          {categories.map((cat) => {
            // Floating silhouette icon per category (custom PNGs, scalable)
            const icons: Record<string, React.ReactNode> = {
              tortas: (
                <img
                  src="/lanietadeportella/CATtortaFIX.png"
                  alt="Icono Tortas"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              ),
              cupcakes: (
                <img
                  src="/lanietadeportella/S9.png"
                  alt="Icono Cupcakes"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              ),
              bocaditos: (
                <img
                  src="/lanietadeportella/CAT3pisosFIX.png"
                  alt="Icono Bocaditos"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              ),
              cafe: (
                <img
                  src="/lanietadeportella/COFFEdaFIX.png"
                  alt="Icono Café"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              ),
            };

            return (
              <Link
                key={cat.id}
                to={`/categoria/${cat.id}`}
                className="group block text-center cursor-pointer w-full focus:outline-none select-none relative"
                id={`cat-select-${cat.id}`}
              >
                {/* Arch frame with 3D forward-tilt on hover */}
                <div
                  className="arch-frame cat-card-3d w-full aspect-[4/5] bg-cream-surface/20 mb-5 overflow-hidden relative border border-dark-chocolate/10"
                  style={{ boxShadow: "rgba(0,0,0,0.04) 0px 1px 4px" }}
                >
                  {/* Subtle dark overlay (#281808) — fades out on hover */}
                  <div
                    className="absolute inset-0 bg-[#281808]/60 transition-opacity duration-500 z-10 group-hover:opacity-0 pointer-events-none"
                  />

                  {/* Floating category icon — starts large/centered, shrinks and moves to top-center on hover */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20 pointer-events-none transition-all duration-500 ease-in-out group-hover:top-6 group-hover:translate-y-0 group-hover:w-9 group-hover:h-9"
                    aria-hidden="true"
                  >
                    {icons[cat.id]}
                  </div>

                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />

                  {/* Coral tint on hover */}
                  <div
                    className="absolute inset-0 bg-action-cta pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.07]"
                  />

                  {/* Label reveal from bottom on hover */}
                  <span
                    className="absolute bottom-0 left-0 right-0 py-3 font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
                  >
                    {cat.subtitle}
                  </span>
                </div>

                {/* Title — dark, turns red + underline appears on hover */}
                <h4 className="relative inline-block font-sans text-lg font-semibold mb-1 text-dark-chocolate group-hover:text-action-cta transition-colors duration-300">
                  {cat.name}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-action-cta rounded-full transition-all duration-300 group-hover:w-full" />
                </h4>

                {/* Tagline — muted, turns red on hover */}
                <p className="font-sans text-xs tracking-widest uppercase text-dark-chocolate/50 group-hover:text-action-cta transition-colors duration-300">
                  {cat.tagline}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
