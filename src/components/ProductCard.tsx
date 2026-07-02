/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ChevronDown, Check } from "lucide-react";
import type { Product } from "../types";
import { asset } from "../lib/asset";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails =
    (product.ingredients?.length ?? 0) > 0 ||
    (product.features?.length ?? 0) > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
      className="group flex flex-col bg-white border border-dark-chocolate/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      {/* Product image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-surface/30">
        <img
          src={asset(product.image)}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.tagline && (
          <span className="absolute bottom-3 left-3 bg-dark-chocolate/85 text-primary-bg text-[10px] font-sans font-medium tracking-wide uppercase px-3 py-1.5 rounded-full backdrop-blur-sm">
            {product.tagline}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 text-left">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg sm:text-xl text-dark-chocolate leading-tight">
            {product.name}
          </h3>
          <span className="font-sans font-bold text-action-cta whitespace-nowrap">
            S/. {product.price}
          </span>
        </div>

        <p className="font-sans text-sm font-light text-dark-chocolate/70 leading-relaxed mt-3 flex-grow">
          {product.description}
        </p>

        {/* Expandable details */}
        {hasDetails && (
          <>
            <button
              type="button"
              onClick={() => setIsExpanded((v) => !v)}
              aria-expanded={isExpanded}
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-dark-chocolate/60 hover:text-action-cta transition-colors cursor-pointer w-fit"
            >
              <span>{isExpanded ? "Ocultar detalles" : "Ver detalles"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-4">
                    {product.features && product.features.length > 0 && (
                      <ul className="space-y-1.5">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-xs font-light text-dark-chocolate/75"
                          >
                            <Check className="w-3.5 h-3.5 text-action-cta shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {product.ingredients && product.ingredients.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-dark-chocolate/50 mb-1.5">
                          Ingredientes
                        </h4>
                        <p className="text-xs font-light text-dark-chocolate/70 leading-relaxed">
                          {product.ingredients.join(" · ")}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* CTA */}
        <button
          type="button"
          onClick={() => addItem(product)}
          className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-action-cta text-primary-bg font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Agregar al carrito</span>
        </button>
      </div>
    </motion.article>
  );
}
