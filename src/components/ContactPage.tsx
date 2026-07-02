/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  MapPin, Clock, Phone, Mail, MessageCircle,
  Instagram, ArrowLeft, ExternalLink
} from "lucide-react";
import {
  BRANCH_LOCATION,
  BRANCH_HOURS,
  BRAND_PHONE,
  BRAND_EMAIL,
  INSTAGRAM_USERNAME,
  CONTACT_WHATSAPP_NUMBER,
} from "../constants";

const contactItems = [
  {
    icon: MapPin,
    label: "Dirección",
    value: BRANCH_LOCATION,
    sub: "Tarapoto, San Martín — Perú",
    link: "https://maps.google.com/?q=La+Nieta+de+Portella+Tarapoto",
    linkLabel: "Cómo llegar",
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lunes a Sábado",
    sub: "9:00 AM – 1:00 PM  ·  4:00 PM – 8:30 PM",
    link: null,
    linkLabel: null,
  },
  {
    icon: Phone,
    label: "Teléfonos",
    value: BRAND_PHONE,
    sub: "Llamadas y WhatsApp",
    link: `https://wa.me/${CONTACT_WHATSAPP_NUMBER}`,
    linkLabel: "Escribir por WhatsApp",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: BRAND_EMAIL,
    sub: "Respondemos en menos de 24 h",
    link: `mailto:${BRAND_EMAIL}`,
    linkLabel: "Enviar correo",
  },
];

export default function ContactPage() {
  const waText = encodeURIComponent(
    `*¡Hola La Nieta de Portella!* 👋 Quisiera hacer una consulta sobre sus productos y disponibilidad. ¡Muchas gracias!`
  );

  return (
    <main className="min-h-screen bg-primary-bg text-dark-chocolate">

      {/* ── Hero header ── */}
      <section className="py-20 bg-dark-chocolate text-primary-bg text-center relative overflow-hidden">
        {/* subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-sans text-xs font-bold tracking-[0.25em] text-action-cta uppercase block mb-4"
        >
          Estamos aquí para ti
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-tight"
        >
          Encuéntranos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="font-sans text-sm font-light text-primary-bg/60 max-w-md mx-auto mt-5 leading-relaxed"
        >
          Un lugar donde cada visita huele a mantequilla, cacao y hogar. 
          Te esperamos en el corazón de Tarapoto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-widest uppercase text-primary-bg/40 hover:text-action-cta transition-colors duration-300"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver al inicio
          </Link>
        </motion.div>
      </section>

      {/* ── Main content ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT — Contact cards */}
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-sans text-xs font-bold tracking-[0.25em] text-action-cta uppercase"
            >
              Información de contacto
            </motion.p>

            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group bg-secondary-bg/40 hover:bg-secondary-bg border border-dark-chocolate/8 hover:border-dark-chocolate/15 rounded-2xl p-5 flex gap-4 items-start transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 bg-action-cta/10 group-hover:bg-action-cta/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-4.5 h-4.5 text-action-cta" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs font-bold tracking-widest uppercase text-dark-chocolate/40 mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm font-semibold text-dark-chocolate leading-snug">
                      {item.value}
                    </p>
                    <p className="font-sans text-xs font-light text-dark-chocolate/55 mt-0.5">
                      {item.sub}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 mt-2 font-sans text-xs font-semibold text-action-cta hover:underline transition-colors"
                      >
                        {item.linkLabel}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://api.whatsapp.com/send?phone=${CONTACT_WHATSAPP_NUMBER}&text=${waText}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.38 }}
              className="flex items-center justify-center gap-3 w-full py-4 bg-dark-chocolate text-primary-bg rounded-2xl font-sans font-semibold text-sm tracking-wide hover:bg-dark-chocolate/85 hover:-translate-y-0.5 transition-all duration-300 shadow-md group"
            >
              <MessageCircle className="w-5 h-5 text-action-cta" />
              Escríbenos por WhatsApp
            </motion.a>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-3 pt-2"
            >
              <span className="font-sans text-xs font-light text-dark-chocolate/40">Síguenos:</span>
              <a
                href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-dark-chocolate hover:text-action-cta transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                @{INSTAGRAM_USERNAME}
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Google Maps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sticky top-24 rounded-2xl overflow-hidden border border-dark-chocolate/10 shadow-xl"
          >
            {/* Map label */}
            <div className="bg-dark-chocolate px-5 py-3 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-action-cta shrink-0" />
              <div>
                <p className="font-sans text-xs font-bold text-primary-bg leading-none">La Nieta de Portella</p>
                <p className="font-sans text-xs font-light text-primary-bg/50 mt-0.5">Jr. Lamas 173, Tarapoto</p>
              </div>
            </div>

            {/* Iframe full size */}
            <div className="w-full" style={{ height: "480px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2775434513674!2d-76.36061662412887!3d-6.486494763420537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ba0c060abfd9ff%3A0xa94e1e0fe1fa378e!2sLa%20Nieta%20de%20Portella!5e0!3m2!1ses-419!2spe!4v1782960621496!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ubicación de La Nieta de Portella en Google Maps"
              />
            </div>

            {/* "Abrir en Maps" footer */}
            <a
              href="https://maps.google.com/?q=La+Nieta+de+Portella+Tarapoto"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-secondary-bg font-sans text-xs font-semibold tracking-wide text-dark-chocolate hover:text-action-cta transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Abrir en Google Maps
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
