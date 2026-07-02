/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, PackageOpen } from "lucide-react";
import type { Product } from "../types";
import { PRODUCT_CATALOG } from "../constants";
import ProductCard from "./ProductCard";

interface CategoryMeta {
  title: string;
  subtitle: string;
}

const CATEGORY_META: Record<Product["category"], CategoryMeta> = {
  tortas: {
    title: "Colección de Tortas",
    subtitle: "Recetas artesanales horneadas diariamente en Tarapoto",
  },
  cupcakes: {
    title: "Cupcakes de Autor",
    subtitle: "Pequeñas obras de arte llenas de sabor y dedicación",
  },
  bocaditos: {
    title: "Mini Bites & Catering",
    subtitle: "Diseño gourmet para eventos especiales y celebraciones",
  },
  cafe: {
    title: "Café DON ANTONIO",
    subtitle: "Nuestra selección exclusiva de especialidad de altura",
  },
};

function isValidCategory(id: string | undefined): id is Product["category"] {
  return id !== undefined && id in CATEGORY_META;
}

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();

  // Scroll to top whenever the category changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const valid = isValidCategory(id);
  const meta = valid ? CATEGORY_META[id] : null;
  const products = valid
    ? PRODUCT_CATALOG.filter((product) => product.category === id)
    : [];

  return (
    <div className="py-24 bg-primary-bg text-dark-chocolate min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-action-cta uppercase block">
            {meta ? "Nuestra Carta" : "Categoría"}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark-chocolate">
            {meta ? meta.title : "Categoría no encontrada"}
          </h1>
          <p className="font-sans text-base sm:text-lg font-light text-dark-chocolate/70 max-w-xl mx-auto leading-relaxed">
            {meta
              ? meta.subtitle
              : "La categoría que buscas no existe o fue movida."}
          </p>
          <div className="w-12 h-[1px] bg-action-cta mx-auto" />
        </header>

        {/* Product grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="max-w-md mx-auto text-center bg-cream-surface/30 rounded-3xl border border-dark-chocolate/10 p-10 flex flex-col items-center gap-4">
            <PackageOpen className="w-10 h-10 text-dark-chocolate/40" />
            <p className="font-sans text-sm text-dark-chocolate/70">
              {valid
                ? "Pronto sumaremos nuevos productos a esta categoría."
                : "No pudimos encontrar esta categoría."}
            </p>
          </div>
        )}

        {/* Back link */}
        <div className="text-center pt-16">
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
