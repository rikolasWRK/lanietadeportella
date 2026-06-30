/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, ShoppingBag, Send, CreditCard, ChevronRight, MessageCircle } from "lucide-react";
import { CartItem } from "../types";
import { CONTACT_WHATSAPP_NUMBER } from "../constants";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, customText?: string) => void;
  onRemoveItem: (productId: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    let msg = `*¡Hola La Nieta de Portella! Me gustaría realizar un pedido de Happy Bakes:*\n\n`;
    items.forEach((item, idx) => {
      msg += `*${idx + 1}. ${item.product.name}* (x${item.quantity})\n`;
      if (item.product.category === "tortas") {
        msg += `   _Categoría: Tortas de Vitrina_\n`;
      }
      if (item.customText) {
        msg += `   _Dedicatoria en torta:_ "${item.customText}"\n`;
      }
      msg += `   _Precio unitario:_ S/. ${item.product.price.toFixed(2)}\n`;
      msg += `   _Subtotal:_ S/. ${(item.product.price * item.quantity).toFixed(2)}\n\n`;
    });

    msg += `*Monto Total del Pedido: S/. ${total.toFixed(2)}*\n\n`;
    msg += `📍 *Ubicación de entrega / Retiro:* (Por coordinar)\n`;
    msg += `📅 *Fecha de entrega deseada:* (Por coordinar)\n\n`;
    msg += `Por favor, confirmen disponibilidad. ¡Muchas gracias por endulzar mi día! ✨`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CONTACT_WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
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
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-xs"
            id="cart-backdrop"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-primary-bg shadow-2xl z-50 flex flex-col border-l border-dark-chocolate/10 text-dark-chocolate"
            id="cart-panel"
          >
            {/* Header */}
            <div className="p-6 border-b border-dark-chocolate/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-action-cta" />
                <h3 className="font-display text-xl tracking-tight">Mi Bolsa Dulce</h3>
                <span className="bg-action-cta text-primary-bg text-xs font-bold px-2 py-0.5 rounded-full">
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-dark-chocolate/5 rounded-full transition-colors"
                aria-label="Cerrar carrito"
                id="close-cart-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-secondary-bg flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-dark-chocolate/30" />
                  </div>
                  <h4 className="font-display text-lg">Tu bolsa está vacía</h4>
                  <p className="text-sm font-light text-dark-chocolate/60 max-w-xs">
                    Explora nuestra carta premium y agrega deliciosos postres para comenzar tu pedido.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-action-cta text-primary-bg font-sans rounded-xl text-sm font-medium tracking-wide shadow-xs hover:opacity-90 transition-opacity"
                    id="cart-start-shopping-btn"
                  >
                    Explorar Carta
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-white/50 border border-dark-chocolate/5 rounded-xl p-4 flex gap-4 transition-all hover:bg-white/80"
                      id={`cart-item-${item.product.id}`}
                    >
                      {/* Product Thumbnail */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-dark-chocolate/5 bg-secondary-bg">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-display text-base leading-tight truncate">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-dark-chocolate/40 hover:text-action-cta p-1 rounded-md transition-colors"
                              title="Quitar item"
                              id={`remove-item-btn-${item.product.id}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs font-light text-dark-chocolate/60 mt-0.5">
                            S/. {item.product.price.toFixed(2)} c/u
                          </p>
                        </div>

                        {/* Interactive Dedication details for cakes */}
                        {item.product.category === "tortas" && (
                          <div className="mt-2 space-y-1">
                            <label className="text-[10px] font-bold text-dark-chocolate/60 uppercase tracking-wider block">
                              Dedicatoria en Torta:
                            </label>
                            <input
                              type="text"
                              maxLength={35}
                              value={item.customText || ""}
                              onChange={(e) =>
                                onUpdateQuantity(item.product.id, item.quantity, e.target.value)
                              }
                              placeholder="Ej: ¡Feliz Cumple Bonita!"
                              className="w-full bg-white/60 border border-dark-chocolate/10 rounded-md text-xs px-2 py-1 text-dark-chocolate outline-hidden focus:border-action-cta transition-colors"
                              id={`dedication-input-${item.product.id}`}
                            />
                          </div>
                        )}

                        {/* Quantity controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-dark-chocolate/10 rounded-lg bg-white/40 overflow-hidden">
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1), item.customText)
                              }
                              className="px-2.5 py-1 text-xs hover:bg-dark-chocolate/5 transition-colors font-medium"
                              id={`qty-minus-${item.product.id}`}
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-xs font-medium font-sans">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.quantity + 1, item.customText)
                              }
                              className="px-2.5 py-1 text-xs hover:bg-dark-chocolate/5 transition-colors font-medium"
                              id={`qty-plus-${item.product.id}`}
                            >
                              +
                            </button>
                          </div>
                          <span className="font-sans font-semibold text-sm">
                            S/. {(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary & CTA */}
            {items.length > 0 && (
              <div className="p-6 border-t border-dark-chocolate/10 bg-white/30 backdrop-blur-md space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-light text-dark-chocolate/70">
                    <span>Subtotal del pedido</span>
                    <span>S/. {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-light text-dark-chocolate/70">
                    <span>Costo de envío / Delivery</span>
                    <span className="text-xs font-medium text-action-cta uppercase tracking-wider">
                      Por coordinar
                    </span>
                  </div>
                  <div className="border-t border-dark-chocolate/10 pt-2 flex justify-between items-baseline">
                    <span className="font-display text-lg">Total estimado</span>
                    <span className="font-sans font-bold text-2xl text-action-cta">
                      S/. {total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-action-cta text-primary-bg font-sans py-3 px-4 rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 shadow-md hover:bg-opacity-95 transition-all group cursor-pointer"
                  id="checkout-whatsapp-btn"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enviar Pedido a WhatsApp</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[10px] text-center font-light text-dark-chocolate/50">
                  Al confirmar, se abrirá un chat de WhatsApp con el detalle de tus productos para que nuestro equipo coordine el pago (transferencia/Yape) y horario de entrega.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
