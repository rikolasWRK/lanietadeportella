/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, ShoppingBag, Info, X, Check, Heart } from "lucide-react";
import { Product, CartItem } from "../types";
import { PRODUCT_CATALOG, CONTACT_WHATSAPP_NUMBER } from "../constants";

interface CatalogProps {
  onAddToCart: (product: Product, quantity: number, customText?: string) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<"tortas" | "cupcakes" | "bocaditos" | "cafe">("tortas");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState("");
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = [
    {
      id: "tortas" as const,
      name: "Tortas",
      subtitle: "VER COLECCIÓN",
      image: "/torta-mama.jpeg",
      tagline: "Tortas de Vitrina"
    },
    {
      id: "cupcakes" as const,
      name: "Cupcakes",
      subtitle: "VER SABORES",
      image: "/cupcakes-caja6.jpeg",
      tagline: "Cupcakes de Autor"
    },
    {
      id: "bocaditos" as const,
      name: "Bocaditos",
      subtitle: "EVENTOS & CATERING",
      image: "/caja-regalo.jpeg",
      tagline: "Bocaditos Finos"
    },
    {
      id: "cafe" as const,
      name: "El Café",
      subtitle: "NUESTRA HERENCIA CAFETALERA",
      image: "/cafe-taza.jpeg",
      tagline: "Café Don Antonio"
    }
  ];

  const filteredProducts = PRODUCT_CATALOG.filter(
    (product) => product.category === selectedCategory
  );

  const handleQuickWhatsApp = (product: Product) => {
    const text = `*¡Hola La Nieta de Portella! Me gustaría realizar un pedido inmediato de:*
    
- *Producto:* ${product.name}
- *Cantidad:* 1 unidad
- *Precio:* S/. ${product.price.toFixed(2)}
${product.category === "tortas" ? `\n(Por favor coordinar dedicatoria escrita en la torta)` : ""}

¿Tienen disponibilidad para el día de hoy? ¡Muchas gracias! ✨`;

    const url = `https://api.whatsapp.com/send?phone=${CONTACT_WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setCustomText("");
  };

  const handleAddFromDetail = () => {
    if (!selectedProduct) return;
    onAddToCart(selectedProduct, quantity, selectedProduct.category === "tortas" ? customText : undefined);
    
    // Add success feedback animation trigger
    setJustAddedId(selectedProduct.id);
    setTimeout(() => setJustAddedId(null), 2000);
    
    setSelectedProduct(null);
  };

  const handleQuickAdd = (product: Product, e: MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 1);
    
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 2000);
  };

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

        {/* Categories Row (Exact Mockup Layout Match) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20" id="categories-grid">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center group text-center cursor-pointer select-none transition-all duration-500`}
                id={`cat-select-${cat.id}`}
              >
                {/* Visual arch-framed selector */}
                <div
                  className={`w-full max-w-[200px] aspect-[3/4] p-1 border rounded-t-full rounded-b-xl mb-4 transition-all duration-500 ${
                    isActive
                      ? "border-action-cta bg-cream-surface/50 scale-[1.03] shadow-md"
                      : "border-dark-chocolate/10 hover:border-dark-chocolate/30 hover:scale-[1.01]"
                  }`}
                >
                  <div className="arch-frame w-full h-full bg-secondary-bg relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive ? "scale-105" : "group-hover:scale-103"
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Tint Overlay */}
                    <div
                      className={`absolute inset-0 bg-action-cta/10 transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-10"
                      }`}
                    />
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-dark-chocolate group-hover:text-action-cta transition-colors">
                  {cat.name}
                </h3>
                <span
                  className={`font-sans text-[9px] sm:text-[10px] font-bold tracking-widest mt-1.5 transition-colors ${
                    isActive ? "text-action-cta" : "text-dark-chocolate/60 group-hover:text-action-cta"
                  }`}
                >
                  {cat.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Typographic Split Break Banner (Strict Requirement) */}
        <div className="w-full overflow-hidden py-4 bg-cream-surface border-y border-dark-chocolate/10 flex select-none mb-20 relative rounded-xl">
          <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap flex gap-12 text-center items-center">
            {Array(5)
              .fill("A mal tiempo, un buen postre •")
              .map((txt, i) => (
                <span
                  key={i}
                  className="font-display text-2xl sm:text-3xl lg:text-4xl italic tracking-wide text-dark-chocolate/70"
                >
                  {txt}
                </span>
              ))}
          </div>
          {/* Duplicate marquee for seamless scroll */}
          <div className="absolute top-4 animate-[marquee2_20s_linear_infinite] whitespace-nowrap flex gap-12 text-center items-center">
            {Array(5)
              .fill("A mal tiempo, un buen postre •")
              .map((txt, i) => (
                <span
                  key={i}
                  className="font-display text-2xl sm:text-3xl lg:text-4xl italic tracking-wide text-dark-chocolate/70"
                >
                  {txt}
                </span>
              ))}
          </div>
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="products-grid">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => {
              const isAdded = justAddedId === product.id;
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleOpenProduct(product)}
                  className="bg-cream-surface/20 border border-dark-chocolate/5 rounded-2xl p-5 hover:bg-cream-surface/45 hover:shadow-lg transition-all duration-500 flex flex-col justify-between group cursor-pointer relative"
                  id={`product-card-${product.id}`}
                >
                  <div className="space-y-4">
                    {/* Arch Masked Card Image */}
                    <div className="w-full aspect-[4/3] rounded-t-[100px] rounded-b-xl overflow-hidden border border-dark-chocolate/5 bg-secondary-bg relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive tag */}
                      {product.tagline && (
                        <span className="absolute bottom-3 left-3 bg-primary-bg/95 backdrop-blur-xs text-[10px] text-dark-chocolate px-2 py-0.5 rounded-full font-medium tracking-wide">
                          {product.tagline}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-left">
                      <div className="flex justify-between items-baseline gap-2">
                        <h4 className="font-display text-lg sm:text-xl leading-tight group-hover:text-action-cta transition-colors">
                          {product.name}
                        </h4>
                        <span className="font-sans font-bold text-base text-action-cta shrink-0">
                          S/. {product.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="font-sans text-xs font-light text-dark-chocolate/70 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex gap-2.5 mt-5 pt-4 border-t border-dark-chocolate/5">
                    {/* Quick Add to Bag */}
                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className={`flex-1 font-sans py-2.5 px-3 rounded-lg text-xs font-medium tracking-wide flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isAdded
                          ? "bg-green-600 text-white"
                          : "bg-dark-chocolate text-primary-bg hover:opacity-90"
                      }`}
                      id={`add-bag-quick-${product.id}`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>¡Agregado!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Agregar</span>
                        </>
                      )}
                    </button>

                    {/* WhatsApp Checkout directly */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickWhatsApp(product);
                      }}
                      className="p-2.5 bg-action-cta/10 hover:bg-action-cta hover:text-primary-bg text-action-cta rounded-lg transition-all cursor-pointer"
                      title="Pedir directo por WhatsApp"
                      id={`order-whatsapp-quick-${product.id}`}
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* --- SLIDE-OVER PRODUCT DETAIL DIALOG --- */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-xs"
              id="detail-backdrop"
            />

            {/* Slide-over Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-primary-bg z-50 flex flex-col shadow-2xl border-l border-dark-chocolate/10 text-dark-chocolate"
              id="detail-drawer"
            >
              {/* Header */}
              <div className="p-5 border-b border-dark-chocolate/5 flex justify-between items-center bg-white/20">
                <span className="font-sans text-[10px] font-bold text-action-cta uppercase tracking-widest">
                  Detalle de Pastelería Premium
                </span>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 hover:bg-dark-chocolate/5 rounded-full transition-colors"
                  aria-label="Cerrar detalle"
                  id="close-detail-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Large Arch Image inside detail drawer */}
                <div className="w-full max-w-md mx-auto aspect-[4/3] rounded-t-full rounded-b-xl overflow-hidden shadow-md border border-dark-chocolate/5 bg-secondary-bg">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl leading-none">
                    {selectedProduct.name}
                  </h3>
                  {selectedProduct.tagline && (
                    <p className="font-sans text-xs italic text-action-cta font-medium">
                      {selectedProduct.tagline}
                    </p>
                  )}
                  <div className="flex justify-between items-baseline pt-1">
                    <span className="font-sans text-2xl font-bold text-action-cta">
                      S/. {selectedProduct.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-dark-chocolate/50 font-light">
                      *Impuestos incluidos / Elaboración artesanal
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/70">
                    Descripción
                  </h4>
                  <p className="font-sans text-sm font-light leading-relaxed text-dark-chocolate/80">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Display Cake Customization text only for tortas category */}
                {selectedProduct.category === "tortas" && (
                  <div className="p-4 bg-cream-surface/30 rounded-xl space-y-3 border border-dark-chocolate/5">
                    <div className="flex justify-between items-baseline">
                      <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/80 block">
                        Dedicatoria Escrita en la Torta
                      </label>
                      <span className="text-[10px] text-dark-chocolate/50">Opcional</span>
                    </div>
                    <input
                      type="text"
                      maxLength={35}
                      placeholder="Ej: ¡Feliz Cumple Angela!"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      className="w-full bg-white border border-dark-chocolate/10 rounded-lg text-sm px-3 py-2 text-dark-chocolate outline-hidden focus:border-action-cta transition-colors"
                      id="detail-cake-custom-text-input"
                    />
                    <p className="text-[10px] text-dark-chocolate/50 font-light">
                      * El texto se escribirá artísticamente sobre la torta usando fudge o buttercream blanco de pastelería artesanal.
                    </p>
                  </div>
                )}

                {/* Ingredients section */}
                {selectedProduct.ingredients && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/70">
                      Ingredientes Clave
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProduct.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="bg-cream-surface text-dark-chocolate font-sans text-xs px-2.5 py-1 rounded-md border border-dark-chocolate/5 font-light"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features section */}
                {selectedProduct.features && (
                  <div className="space-y-2 bg-cream-surface/20 p-4 rounded-xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/70 mb-2">
                      Garantía & Cuidado
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-light">
                          <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer Interactive Actions */}
              <div className="p-5 border-t border-dark-chocolate/5 bg-white/30 backdrop-blur-md flex flex-col gap-3">
                {/* Quantity and Subtotal bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-dark-chocolate/60">Cantidad</span>
                    <div className="flex items-center border border-dark-chocolate/10 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-2.5 py-1 hover:bg-dark-chocolate/5 transition-colors font-medium text-sm"
                        id="drawer-qty-minus"
                      >
                        -
                      </button>
                      <span className="px-3.5 py-1 font-semibold text-sm font-sans">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-2.5 py-1 hover:bg-dark-chocolate/5 transition-colors font-medium text-sm"
                        id="drawer-qty-plus"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-dark-chocolate/60 block">Subtotal</span>
                    <span className="font-sans font-bold text-xl text-action-cta">
                      S/. {(selectedProduct.price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2.5 pt-2">
                  {/* Add to Cart CTA */}
                  <button
                    onClick={handleAddFromDetail}
                    className="col-span-4 bg-dark-chocolate text-primary-bg py-3 px-4 rounded-xl font-sans text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-xs hover:opacity-95 transition-opacity cursor-pointer"
                    id="drawer-add-to-cart-btn"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Agregar a la Bolsa</span>
                  </button>

                  {/* Immediate WhatsApp link */}
                  <button
                    onClick={() => {
                      const text = `*¡Hola La Nieta de Portella! Me gustaría realizar un pedido de:*
                      
- *Producto:* ${selectedProduct.name}
- *Cantidad:* ${quantity} unidades
- *Precio Total:* S/. ${(selectedProduct.price * quantity).toFixed(2)}
${selectedProduct.category === "tortas" && customText ? `- *Dedicatoria en la torta:* "${customText}"` : ""}

¿Tienen disponibilidad? ¡Muchas gracias!`;

                      const url = `https://api.whatsapp.com/send?phone=${CONTACT_WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
                      window.open(url, "_blank");
                    }}
                    className="col-span-1 bg-action-cta text-primary-bg py-3 px-3 rounded-xl flex items-center justify-center transition-all hover:bg-opacity-95 cursor-pointer"
                    title="Pedir directo por WhatsApp"
                    id="drawer-order-whatsapp-btn"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
