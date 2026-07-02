/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import PageLayout from "./PageLayout";
import { BRANCH_HOURS } from "../../constants";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "¿Con cuánta anticipación debo pedir una torta personalizada?",
    answer:
      "Recomendamos reservar con al menos 3 a 5 días de anticipación. Para tortas de boda o de gala sugerimos 2 semanas, ya que incluyen una sesión de diseño y, si lo deseas, una degustación previa.",
  },
  {
    question: "¿Hacen entregas a domicilio en Tarapoto?",
    answer:
      "Sí, coordinamos delivery dentro de Tarapoto y alrededores. El costo depende de la zona y se confirma al momento de cerrar tu pedido por WhatsApp. También puedes recoger en nuestra tienda.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, Yape, Plin y transferencia bancaria. Para pedidos personalizados solicitamos un adelanto del 50% para confirmar la reserva en agenda.",
  },
  {
    question: "¿Puedo pedir opciones sin gluten o sin lácteos?",
    answer:
      "Contamos con alternativas como nuestros macarons (naturalmente libres de gluten) y bebidas con leche de almendras. Para requerimientos específicos, escríbenos y evaluamos cada caso con cariño.",
  },
  {
    question: "¿Cómo hago un pedido?",
    answer:
      "Agrega tus productos favoritos al carrito y envía el pedido por WhatsApp con un solo clic. También puedes diseñar tu torta a medida en la sección 'Tortas Personalizadas'. Nosotros confirmamos disponibilidad y coordinamos el resto.",
  },
  {
    question: "¿Cuál es su horario de atención?",
    answer: BRANCH_HOURS,
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-dark-chocolate/10">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="font-sans text-base font-medium text-dark-chocolate group-hover:text-action-cta transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-action-cta shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-sans text-sm font-light text-dark-chocolate/70 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <PageLayout
      eyebrow="Ayuda"
      title="Preguntas Frecuentes"
      subtitle="Resolvemos las dudas más comunes sobre pedidos, entregas y personalización."
    >
      <div className="bg-white border border-dark-chocolate/10 rounded-3xl px-6 sm:px-8 shadow-sm">
        {FAQS.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </PageLayout>
  );
}
