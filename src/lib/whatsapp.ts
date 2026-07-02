/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CONTACT_WHATSAPP_NUMBER } from "../constants";
import type { CartItem, Product } from "../types";

/** Delivery details collected at checkout before sending the order. */
export interface CheckoutInfo {
  name: string;
  method: "retiro" | "delivery";
  address?: string;
  date?: string; // ISO yyyy-mm-dd from a date input
  note?: string;
}

/** Builds a WhatsApp deep link with a pre-filled, URL-encoded message. */
export function buildWhatsAppUrl(message: string): string {
  return `https://api.whatsapp.com/send?phone=${CONTACT_WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message,
  )}`;
}

/** Opens WhatsApp in a new tab with the given message. */
export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

/** Turns an ISO date (yyyy-mm-dd) into a readable dd/mm/yyyy. */
function formatDate(iso?: string): string | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-");
  return d && m && y ? `${d}/${m}/${y}` : iso;
}

const BRAND_HEADER = "🎀 *La Nieta de Portella*";

/** Consulta rápida por un producto de la carta. */
export function productOrderMessage(product: Product): string {
  return [
    BRAND_HEADER,
    "",
    `Hola 👋 Me interesa este producto de la carta:`,
    "",
    `🧁 *${product.name}*`,
    `💰 Precio referencial: S/. ${product.price.toFixed(2)}`,
    "",
    `¿Tienen disponibilidad? ¡Gracias! 😊`,
  ].join("\n");
}

/** Pedido completo del carrito, con los datos de entrega. */
export function cartOrderMessage(
  items: CartItem[],
  info: CheckoutInfo,
): string {
  const detail = items
    .map(
      (item) =>
        `• ${item.quantity} × ${item.product.name} — S/. ${(
          item.product.price * item.quantity
        ).toFixed(2)}`,
    )
    .join("\n");

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const lines = [
    "🎀 *NUEVO PEDIDO*",
    "_La Nieta de Portella_",
    "",
    "🧾 *Detalle del pedido:*",
    detail,
    "",
    `💰 *Total estimado:* S/. ${total.toFixed(2)}`,
    "",
    "📋 *Datos de entrega:*",
    `👤 ${info.name}`,
    info.method === "delivery"
      ? `🛵 Delivery${info.address ? ` — 📍 ${info.address}` : ""}`
      : "🏬 Retiro en tienda",
  ];

  const fecha = formatDate(info.date);
  if (fecha) lines.push(`📅 Para el: ${fecha}`);
  if (info.note?.trim()) lines.push(`📝 Nota: ${info.note.trim()}`);

  lines.push("", "¡Gracias! Quedo atento a su confirmación 🧁");

  return lines.join("\n");
}

interface CustomCakeSelection {
  size: { name: string; portions: string; price: number };
  biscuit: { name: string };
  filling: { name: string };
  theme: { name: string };
  topperText: string;
}

/** Cotización de una torta personalizada armada en el diseñador. */
export function customCakeMessage(cake: CustomCakeSelection): string {
  return [
    "🎂 *TORTA PERSONALIZADA*",
    "_La Nieta de Portella_",
    "",
    `📐 Tamaño: ${cake.size.name} (${cake.size.portions})`,
    `🍰 Bizcocho: ${cake.biscuit.name}`,
    `🥧 Relleno: ${cake.filling.name}`,
    `🎨 Estilo: ${cake.theme.name}`,
    `✍️ Dedicatoria: "${cake.topperText.trim() || "Sin dedicatoria"}"`,
    "",
    `💰 *Estimado:* S/. ${cake.size.price.toFixed(2)}`,
    "",
    "¿Tienen agenda disponible para coordinar fecha? ¡Gracias! 🎉",
  ].join("\n");
}

/** Solicitud de suscripción al canal de novedades. */
export function newsletterMessage(email: string): string {
  return [
    BRAND_HEADER,
    "",
    "Hola 👋 Quiero suscribirme a sus novedades y promociones.",
    `📧 Mi correo: ${email}`,
    "",
    "¡Gracias! 🧁",
  ].join("\n");
}
