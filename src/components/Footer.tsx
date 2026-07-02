/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, ArrowUp, Instagram, Facebook, MessageCircle, Heart, Check, BookOpen } from "lucide-react";
import { BRANCH_LOCATION, BRANCH_HOURS, BRAND_PHONE, BRAND_EMAIL, INSTAGRAM_USERNAME, CONTACT_WHATSAPP_NUMBER } from "../constants";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contacto"
      className="bg-dark-chocolate text-primary-bg pt-20 pb-8 overflow-hidden relative border-t-2 border-action-cta"
    >
      {/* Editorial Watermark Logo Silhouette */}
      <div className="absolute right-[-5%] bottom-[-5%] w-[450px] h-[450px] opacity-[0.08] pointer-events-none select-none">
        <img
          src="BGsilouette.svg"
          alt="Silueta Corazón La Nieta"
          className="w-full h-full object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Column Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-primary-bg/10">
          
          {/* Brand Presentation (5 columns) */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="space-y-1">
              <h3 className="font-display text-3xl tracking-tight text-primary-bg leading-none">
                La Nieta de Portella
              </h3>
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-action-cta uppercase block mt-1.5">
                HAPPY BAKES
              </span>
            </div>
            
            <p className="font-sans text-sm font-light leading-relaxed text-primary-bg/70 max-w-sm">
              Elevando la pastelería artesanal a una experiencia sensorial única e inolvidable. Horneamos recuerdos desde 2012 para toda la hermosa región de San Martín.
            </p>

            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-primary-bg/5 hover:bg-action-cta/20 hover:text-action-cta text-primary-bg rounded-full transition-all border border-primary-bg/10"
                aria-label="Siguenos en Instagram"
                id="footer-ig-link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1HNY464zW4/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-primary-bg/5 hover:bg-action-cta/20 hover:text-action-cta text-primary-bg rounded-full transition-all border border-primary-bg/10"
                aria-label="Siguenos en Facebook"
                id="footer-fb-link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/51984365755`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-primary-bg/5 hover:bg-action-cta/20 hover:text-action-cta text-primary-bg rounded-full transition-all border border-primary-bg/10"
                aria-label="Siguenos en WhatsApp"
                id="footer-wa-link"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links (3 columns) */}
          <div className="md:col-span-3 space-y-6 text-left">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-action-cta">
              Explorar
            </h4>
            <ul className="space-y-3 font-sans text-sm font-light text-primary-bg/80">
              <li>
                <a href="#/historia" className="hover:text-action-cta transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    const text = `*¡Hola La Nieta de Portella! Me gustaría cotizar y personalizar una torta a medida para una ocasión especial.* 🎂✨\n\n¿Podrían brindarme más información sobre las opciones de sabores, tamaños y disponibilidad de agenda? ¡Muchas gracias!`;
                    const url = `https://api.whatsapp.com/send?phone=${CONTACT_WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
                    window.open(url, "_blank");
                  }}
                  className="hover:text-action-cta transition-colors text-left cursor-pointer"
                >
                  Tortas Personalizadas
                </button>
              </li>
              <li>
                <a href="#/categoria/cafe" className="hover:text-action-cta transition-colors">
                  Café <span className="uppercase">Don Antonio</span>
                </a>
              </li>
              <li>
                <a href="#/reclamaciones" className="hover:text-action-cta transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Libro de Reclamaciones</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 columns) */}
          <div className="md:col-span-4 space-y-6 text-left">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-action-cta">
              Atención & Ubicación
            </h4>
            <ul className="space-y-4 font-sans text-sm font-light text-primary-bg/80">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-action-cta shrink-0 mt-0.5" />
                <span>{BRANCH_LOCATION}</span>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-action-cta shrink-0 mt-0.5" />
                <span>{BRANCH_HOURS}</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-action-cta shrink-0 mt-0.5" />
                <span>{BRAND_PHONE}</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-action-cta shrink-0 mt-0.5" />
                <span>{BRAND_EMAIL}</span>
              </li>
            </ul>

            {/* Google Maps embed */}
            <div className="mt-5 rounded-xl overflow-hidden border border-primary-bg/10 shadow-lg w-full aspect-video">
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
          </div>

        </div>

        {/* Newsletter subscription panel & scroll to top */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-primary-bg/10">
          
          {/* Newsletter copy (7 columns) */}
          <div className="md:col-span-7 space-y-2 text-left">
            <h4 className="font-display text-xl sm:text-2xl text-primary-bg">
              Recibe dulzura en tu correo
            </h4>
            <p className="font-sans text-xs font-light text-primary-bg/60">
              Inscríbete para enterarte de nuestros lanzamientos de temporada, recetas caseras secretas y promociones exclusivas de Happy Bakes.
            </p>
          </div>

          {/* Subscription input (5 columns) */}
          <div className="md:col-span-5 text-left">
            {isSubscribed ? (
              <div className="bg-action-cta/20 border border-action-cta/40 rounded-xl p-4 flex items-center gap-2 text-primary-bg text-sm font-light animate-pulse">
                <Check className="w-4 h-4 text-green-400 shrink-0" />
                <span>¡Suscrito con éxito! Pronto recibirás novedades dulces en tu buzón.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-4 items-center">
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-b border-primary-bg/20 rounded-none py-2 text-sm text-primary-bg outline-hidden focus:border-action-cta transition-colors font-sans placeholder-primary-bg/40"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-action-cta text-primary-bg rounded-lg text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                  id="newsletter-submit-btn"
                >
                  Registrarme
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright footer bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-primary-bg/45 text-center sm:text-left">
          <p>
            Desde 2012 © La Nieta de Portella • Todos los derechos reservados.
          </p>
          
          <div className="flex gap-6 items-center">
            <a href="#/faq" className="hover:text-action-cta transition-colors">
              Preguntas Frecuentes
            </a>
            <a href="#/privacidad" className="hover:text-action-cta transition-colors">
              Políticas de Privacidad
            </a>
            <a href="#/terminos" className="hover:text-action-cta transition-colors">
              Términos de Servicio
            </a>
            <button
              onClick={handleScrollToTop}
              className="p-2.5 bg-primary-bg/5 hover:bg-action-cta hover:text-primary-bg rounded-full transition-all cursor-pointer"
              aria-label="Volver al inicio"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
