/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  Store,
  Bike,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { asset } from "../lib/asset";
import {
  openWhatsApp,
  cartOrderMessage,
  type CheckoutInfo,
} from "../lib/whatsapp";

type Phase = "cart" | "checkout";

const inputClass =
  "w-full bg-primary-bg/50 border border-dark-chocolate/15 rounded-xl px-3.5 py-2.5 text-sm text-dark-chocolate font-sans outline-none focus:border-action-cta focus:ring-4 focus:ring-action-cta/5 transition-all";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    setQuantity,
    removeItem,
    clearCart,
    closeCart,
  } = useCart();

  const [phase, setPhase] = useState<Phase>("cart");
  const [name, setName] = useState("");
  const [method, setMethod] = useState<CheckoutInfo["method"]>("retiro");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const today = new Date().toISOString().slice(0, 10);

  // Close on Escape and lock body scroll while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeCart]);

  // Always reopen on the cart step; drop back if the cart empties.
  useEffect(() => {
    if (!isOpen || items.length === 0) setPhase("cart");
  }, [isOpen, items.length]);

  const canSend = name.trim().length > 0;

  const handleSend = () => {
    if (!canSend || items.length === 0) return;
    const info: CheckoutInfo = {
      name: name.trim(),
      method,
      address: method === "delivery" ? address.trim() : undefined,
      date: date || undefined,
      note: note.trim() || undefined,
    };
    openWhatsApp(cartOrderMessage(items, info));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 bg-dark-chocolate/50 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-primary-bg z-50 flex flex-col shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Carrito de pedido"
          >
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-5 border-b border-dark-chocolate/10">
              <h2 className="font-display text-xl text-dark-chocolate flex items-center gap-2">
                {phase === "checkout" ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setPhase("cart")}
                      className="text-dark-chocolate/60 hover:text-action-cta transition-colors cursor-pointer"
                      aria-label="Volver al carrito"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span>Datos de entrega</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 text-action-cta" />
                    <span>Tu Pedido</span>
                    {totalItems > 0 && (
                      <span className="font-sans text-xs font-bold text-dark-chocolate/50">
                        ({totalItems})
                      </span>
                    )}
                  </>
                )}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                className="p-2 text-dark-chocolate/70 hover:text-action-cta hover:bg-dark-chocolate/5 rounded-full transition-colors cursor-pointer"
                aria-label="Cerrar carrito"
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            {/* Empty state */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="p-5 bg-cream-surface/40 rounded-full">
                  <ShoppingBag className="w-8 h-8 text-dark-chocolate/40" />
                </div>
                <p className="font-sans text-sm text-dark-chocolate/60 max-w-xs">
                  Tu carrito está vacío. Explora nuestra carta y agrega tus
                  antojos favoritos.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 font-sans text-xs font-bold uppercase tracking-wider text-action-cta hover:underline cursor-pointer"
                >
                  Seguir explorando
                </button>
              </div>
            ) : phase === "cart" ? (
              /* ── Step 1: cart items ── */
              <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <li
                    key={item.product.id}
                    className="flex gap-4 pb-4 border-b border-dark-chocolate/5 last:border-b-0"
                  >
                    <img
                      src={asset(item.product.image)}
                      alt={item.product.name}
                      loading="lazy"
                      className="w-20 h-20 rounded-xl object-cover shrink-0 bg-cream-surface/30"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <h3 className="font-display text-sm text-dark-chocolate leading-tight">
                          {item.product.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="text-dark-chocolate/40 hover:text-action-cta transition-colors cursor-pointer shrink-0"
                          aria-label={`Quitar ${item.product.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-sans text-xs text-dark-chocolate/50 mt-0.5">
                        S/. {item.product.price} c/u
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 border border-dark-chocolate/15 rounded-lg px-2 py-1">
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(item.product.id, item.quantity - 1)
                            }
                            className="text-dark-chocolate/70 hover:text-action-cta transition-colors cursor-pointer"
                            aria-label="Reducir cantidad"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-sans text-sm font-bold w-5 text-center tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(item.product.id, item.quantity + 1)
                            }
                            className="text-dark-chocolate/70 hover:text-action-cta transition-colors cursor-pointer"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="font-sans font-bold text-sm text-action-cta">
                          S/. {(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              /* ── Step 2: checkout details ── */
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: María Pérez"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                    ¿Cómo lo recibes?
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setMethod("retiro")}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        method === "retiro"
                          ? "border-action-cta bg-action-cta/5 text-action-cta ring-2 ring-action-cta/15"
                          : "border-dark-chocolate/15 text-dark-chocolate/70 hover:border-dark-chocolate/30"
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      Retiro en tienda
                    </button>
                    <button
                      type="button"
                      onClick={() => setMethod("delivery")}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        method === "delivery"
                          ? "border-action-cta bg-action-cta/5 text-action-cta ring-2 ring-action-cta/15"
                          : "border-dark-chocolate/15 text-dark-chocolate/70 hover:border-dark-chocolate/30"
                      }`}
                    >
                      <Bike className="w-4 h-4" />
                      Delivery
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {method === "delivery" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1.5 pt-0.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                          Dirección de entrega
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Calle, número, referencia"
                          className={inputClass}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                    Fecha deseada
                  </label>
                  <input
                    type="date"
                    value={date}
                    min={today}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                    Nota (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Ej: alergias, dedicatoria, hora de entrega…"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            )}

            {/* Footer */}
            {items.length > 0 && (
              <footer className="border-t border-dark-chocolate/10 px-6 py-5 space-y-3 bg-white">
                <div className="flex justify-between items-baseline">
                  <span className="font-sans text-sm text-dark-chocolate/70">
                    Total estimado
                  </span>
                  <span className="font-display text-2xl text-action-cta">
                    S/. {totalPrice.toFixed(2)}
                  </span>
                </div>

                {phase === "cart" ? (
                  <>
                    <p className="text-[11px] font-light text-dark-chocolate/50 leading-snug">
                      El precio final se confirma por WhatsApp según
                      personalización y disponibilidad.
                    </p>
                    <button
                      type="button"
                      onClick={() => setPhase("checkout")}
                      className="w-full inline-flex items-center justify-center gap-2 bg-dark-chocolate text-primary-bg font-sans text-xs font-bold uppercase tracking-widest px-5 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-md cursor-pointer"
                    >
                      <span>Continuar pedido</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={clearCart}
                      className="w-full font-sans text-xs font-semibold uppercase tracking-wider text-dark-chocolate/50 hover:text-action-cta transition-colors cursor-pointer"
                    >
                      Vaciar carrito
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleSend}
                    disabled={!canSend}
                    className="w-full inline-flex items-center justify-center gap-2 bg-action-cta text-primary-bg font-sans text-xs font-bold uppercase tracking-widest px-5 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Enviar pedido por WhatsApp</span>
                  </button>
                )}
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
