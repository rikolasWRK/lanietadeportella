/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/whatsapp";

const DEFAULT_MESSAGE =
  "¡Hola La Nieta de Portella! Me gustaría hacer una consulta. 😊";

/** Persistent WhatsApp call-to-action anchored to the bottom-right corner. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
    </a>
  );
}
