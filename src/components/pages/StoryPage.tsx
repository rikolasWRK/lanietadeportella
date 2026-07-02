/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Heart,
  Flame,
  Sparkles,
  BookOpen,
  Star,
} from "lucide-react";
import FloatingSticker from "../FloatingSticker";

export default function StoryPage() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Programmatic array of stickers for the empty half of each timeline row.
  // This guarantees they will NEVER overlap with the text half (left or right)
  // and will be completely clean / hidden on mobile devices.
  const chapterStickers = [
    // Chapter 0 (70s) - Text is on Left. Spacer on Right.
    [
      {
        src: "sticker-i1.png",
        alt: "Sticker La Nieta",
        className: "top-[-10px] right-[25%] w-22 h-22 sm:w-26 sm:h-26",
        rotation: -10,
      },
      {
        src: "sticker-i3.png",
        alt: "Sticker Corazón",
        className: "top-[40%] right-[3%] w-18 h-18 sm:w-22 sm:h-22",
        rotation: 15,
      },
      {
        src: "sticker-i5.png",
        alt: "Sticker Tradición",
        className: "bottom-[-10px] right-[20%] w-20 h-20 sm:w-24 sm:h-24",
        rotation: -5,
      },
    ],
    // Chapter 1 (90s) - Text is on Right. Spacer on Left.
    [
      {
        src: "sticker-i2.png",
        alt: "Sticker Dulce",
        className: "top-[-10px] left-[25%] w-20 h-20 sm:w-24 sm:h-24",
        rotation: 12,
      },
      {
        src: "sticker-i4.png",
        alt: "Sticker Receta",
        className: "top-[40%] left-[3%] w-18 h-18 sm:w-22 sm:h-22",
        rotation: -12,
      },
      {
        src: "sticker-i6.png",
        alt: "Sticker Sello",
        className: "bottom-[-10px] left-[20%] w-20 h-20 sm:w-24 sm:h-24",
        rotation: -8,
      },
    ],
    // Chapter 2 (2011-2012) - Text is on Left. Spacer on Right.
    [
      {
        src: "sticker-i3.png",
        alt: "Sticker Detalle",
        className: "top-[-10px] right-[25%] w-20 h-20 sm:w-26 sm:h-26",
        rotation: -15,
      },
      {
        src: "sticker-coffee.png",
        alt: "Sticker Don Antonio",
        className: "top-[40%] right-[3%] w-20 h-20 sm:w-26 sm:h-26",
        rotation: -8,
      },
      {
        src: "sticker-cat-3pisos.png",
        alt: "Sticker Torta",
        className: "bottom-[-10px] right-[20%] w-24 h-24 sm:w-30 sm:h-30",
        rotation: 15,
      },
    ],
    // Chapter 3 (2014-Present) - Text is on Right. Spacer on Left.
    [
      {
        src: "sticker-i6.png",
        alt: "Sticker Insignia",
        className: "top-[-10px] left-[25%] w-20 h-20 sm:w-26 sm:h-26",
        rotation: 15,
      },
      {
        src: "sticker-i2.png",
        alt: "Sticker Dulzura",
        className: "top-[40%] left-[3%] w-18 h-18 sm:w-22 sm:h-22",
        rotation: -10,
      },
      {
        src: "sticker-i4.png",
        alt: "Sticker Secreto",
        className: "bottom-[-10px] left-[20%] w-20 h-20 sm:w-26 sm:h-26",
        rotation: 8,
      },
    ],
  ];

  const chapters = [
    {
      year: "Años 70s",
      title: "El Origen de un Sueño Dulce",
      subtitle: "La herencia del aroma y la harina",
      content: (
        <>
          La verdadera historia de La Nieta de Portella no empieza frente a un
          horno comercial, sino en los años 70, bajo la mirada atenta y cariñosa
          de la abuela Angela Portella. Angélica era su nieta engreída, esa
          pequeña que observaba fascinada cómo las manos sabias de su abuela
          transformaban ingredientes sencillos en momentos de pura felicidad.
          Creciendo además en el seno de una de las familias de panaderos más
          emblemáticas de Tarapoto —entre las décadas de los 60 y los 2000—,
          Angélica llevaba la harina, el calor del horno y el aroma del pan
          recién horneado corriendo por la sangre. Años más tarde, su esposo
          Juan Carlos se uniría a esta herencia, apoyando con devoción el taller
          de sus suegros.
        </>
      ),
      icon: <Heart className="w-5 h-5" />,
    },
    {
      year: "Años 90s",
      title: "Caminos de Barro, Coraje y Resiliencia",
      subtitle: "El valor de reinventarse desde cero",
      content: (
        <>
          La vida, sin embargo, traza caminos desafiantes. Durante las épocas
          más duras del país en medio de profundas movilizaciones extremistas y
          crisis familiares, el panorama se tornó adverso. Para recibir a su
          primer hijo, Juan Carlos (1993), Angélica y su esposo tuvieron que
          reinventarse por completo. Con un empuje indomable y sin temor al
          cansancio, ella vendía hamburguesas en un carrito típico afuera de los
          colegios, mientras él administraba un pequeño alquiler de sonido. Esa
          constancia inquebrantable les abrió mejores puertas: lograron abrirse
          paso en el sector de seguros y consultoría. A base de disciplina y
          estudio constante, se consolidaron como líderes regionales de
          representación en seguros. Llegaron los frutos de este camino: el
          terreno propio, la casa construida con sus propias manos y la llegada
          de su segundo hijo, Bruno Nicolas (2006).
        </>
      ),
      icon: <Flame className="w-5 h-5" />,
    },
    {
      year: "2011 - 2012",
      title: "El Despertar del Corazón",
      subtitle: "El llamado de la niña que nunca se olvidó",
      content: (
        <>
          Para el año 2010, Juan Carlos y Angélica se encontraban en la cúspide
          de sus carreras profesionales. Todo parecía perfecto, pero en el
          corazón de Angélica habitaba un vacío: un sueño de la infancia
          guardado bajo llave. En 2011, como un entrañable pasatiempo para
          canalizar su creatividad, comenzó a ofrecer catering para sus
          amistades. Al reencontrarse con el aroma de la vainilla y el batido de
          la harina, descubrió lo que le faltaba: era la pequeña Angélica
          llamándola a ser como su abuela Angela, a hacer feliz a las personas a
          través de la dulzura. En 2012, junto a su hijo Juan Carlos (hijo)
          —quien en ese entonces realizaba sus estudios universitarios de
          negocios en la capital—, plasmaron este viaje en el primer borrador de
          lo que hoy es "La Nieta de Portella".
        </>
      ),
      icon: <Star className="w-5 h-5" />,
    },
    {
      year: "2014 - Presente",
      title: "De un Hobby de Amor a un Referente Regional",
      subtitle: "El mandil de la abuela Angela conquistando San Martín",
      content: (
        <>
          Lo que operaba como un hobby de cupcakes para amigos demostró tener un
          potencial imparable. En agosto de 2014, Angélica soltó las pólizas de
          seguros, se ató el mandil de su infancia y abrió su primer local
          oficial. Fue cuestión de tiempo para consolidarse como la máxima
          referente de pastelería fina y de diseñador en toda la región San
          Martín. Hoy, tras casi 12 años superando crisis y transformaciones, la
          marca es pionera indiscutible de la repostería artesanal, manteniendo
          intacta la promesa de paciencia y cariño. Este éxito y crecimiento
          constante familiar sembró la semilla para expandir su propuesta, dando
          paso al proyecto de incursionar en el mundo del café de especialidad
          con la marca de altura{" "}
          <Link
            to="/categoria/cafe"
            className="font-semibold text-action-cta hover:underline"
          >
            DON ANTONIO
          </Link>
          , manteniendo siempre viva la tradición y la calidez en cada taza.
        </>
      ),
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <div
      className="bg-primary-bg min-h-screen text-dark-chocolate"
      id="story-page-root"
    >
      {/* Editorial Hero Header */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-cream-surface border-b border-dark-chocolate/5">
        {/* Stickers Group A (8 stickers placed STRICTLY at the far left/right side margins to avoid title text overlap) */}
        <FloatingSticker
          src="sticker-i1.png"
          alt="Sticker La Nieta"
          className="top-[8%] left-[2%] w-24 h-24 sm:w-30 sm:h-30 opacity-80 hidden md:block pointer-events-auto"
          rotation={-15}
          parallaxSpeed={-0.08}
        />
        <FloatingSticker
          src="sticker-i5.png"
          alt="Sticker Sello Tradicional"
          className="top-[25%] right-[2%] w-26 h-26 sm:w-34 sm:h-34 opacity-85 hidden md:block pointer-events-auto"
          rotation={12}
          parallaxSpeed={0.06}
        />
        <FloatingSticker
          src="sticker-i2.png"
          alt="Sticker Dulce Detalle"
          className="top-[48%] left-[3%] w-20 h-20 sm:w-26 sm:h-26 opacity-85 hidden md:block pointer-events-auto"
          rotation={25}
          parallaxSpeed={-0.04}
        />
        <FloatingSticker
          src="sticker-i6.png"
          alt="Sticker Insignia"
          className="top-[12%] right-[3%] w-22 h-22 sm:w-28 sm:h-28 opacity-80 hidden md:block pointer-events-auto"
          rotation={-20}
          parallaxSpeed={0.05}
        />
        <FloatingSticker
          src="sticker-coffee.png"
          alt="Sticker Café Don Antonio"
          className="top-[60%] right-[2%] w-28 h-28 sm:w-36 sm:h-36 opacity-90 hidden md:block pointer-events-auto"
          rotation={-10}
          parallaxSpeed={-0.06}
        />
        <FloatingSticker
          src="sticker-cat-3pisos.png"
          alt="Sticker Torta Tres Pisos"
          className="top-[70%] left-[2%] w-28 h-28 sm:w-36 sm:h-36 opacity-90 hidden md:block pointer-events-auto"
          rotation={5}
          parallaxSpeed={0.08}
        />
        <FloatingSticker
          src="sticker-i3.png"
          alt="Sticker Amor"
          className="top-[4%] left-[4%] w-18 h-18 sm:w-22 sm:h-22 opacity-85 hidden md:block pointer-events-auto"
          rotation={15}
          parallaxSpeed={-0.03}
        />
        <FloatingSticker
          src="sticker-i4.png"
          alt="Sticker Receta"
          className="top-[38%] right-[4%] w-20 h-20 sm:w-26 sm:h-26 opacity-85 hidden md:block pointer-events-auto"
          rotation={20}
          parallaxSpeed={0.04}
        />

        <div className="absolute top-1/4 left-10 w-64 h-64 opacity-5 pointer-events-none select-none border border-dark-chocolate rounded-full border-dashed" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 opacity-5 pointer-events-none select-none border border-dark-chocolate rounded-full border-double" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs font-bold tracking-[0.25em] text-action-cta uppercase flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>EL LEGADO PORTELLA</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight"
          >
            El Abrazo de la Abuela Angela
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl font-light text-dark-chocolate/75 max-w-2xl mx-auto leading-relaxed"
          >
            Harina en la sangre, coraje en el alma y el dulce aroma de la
            tradición familiar horneado con amor en Tarapoto.
          </motion.p>
        </div>
      </section>

      {/* Main Timeline Storytelling Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Timeline Central Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 top-24 bottom-24 w-[1px] bg-dark-chocolate/10 -translate-x-1/2 hidden sm:block" />

        <div className="space-y-20 relative z-10">
          {chapters.map((chap, idx) => {
            const isEven = idx % 2 === 0;
            const stickers = chapterStickers[idx] || [];

            return (
              <motion.div
                key={chap.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col sm:flex-row items-center gap-8 md:gap-16 relative ${
                  isEven ? "" : "sm:flex-row-reverse"
                }`}
              >
                {/* Text Block */}
                <div className="w-full sm:w-1/2 text-left space-y-4 relative z-20">
                  <span className="inline-block px-3 py-1 bg-vibrant-coral/10 text-vibrant-coral text-xs font-bold font-sans tracking-widest rounded-full">
                    {chap.year}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-dark-chocolate">
                    {chap.title}
                  </h2>
                  <h4 className="font-sans text-xs tracking-wider uppercase text-action-cta font-semibold">
                    {chap.subtitle}
                  </h4>
                  <p className="font-sans text-sm sm:text-base font-light leading-relaxed text-dark-chocolate/80">
                    {chap.content}
                  </p>
                </div>

                {/* Badge Center Point (Visual Separator) */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-cream-surface border-2 border-dark-chocolate/15 items-center justify-center text-action-cta shadow-sm z-20">
                  {chap.icon}
                </div>

                {/* Empty visual spacer for desktop layout balance.
                    We render the 4 stickers strictly inside this empty space container,
                    guaranteeing they NEVER overlap with the text half (left or right)
                    and will hide completely on mobile layout. */}
                <div className="w-full sm:w-1/2 hidden sm:block relative min-h-[220px]">
                  {stickers.map((stk, sidx) => (
                    <FloatingSticker
                      key={`${chap.year}-stk-${sidx}`}
                      src={stk.src}
                      alt={stk.alt}
                      className={stk.className}
                      rotation={stk.rotation}
                      zIndex="z-10"
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quote Highlight Banner */}
      <section className="py-16 bg-cream-surface/40 border-y border-dark-chocolate/5 relative overflow-hidden">
        {/* Stickers Group C (5 stickers placed STRICTLY in far margins clear of the centered text block) */}
        <FloatingSticker
          src="sticker-cat-3pisos.png"
          alt="Sticker Torta 3 Pisos"
          className="bottom-[-20px] right-[2%] w-32 h-32 sm:w-44 sm:h-44 opacity-90 hidden md:block pointer-events-auto"
          rotation={12}
          parallaxSpeed={0.03}
        />
        <FloatingSticker
          src="sticker-coffee.png"
          alt="Sticker Café Don Antonio"
          className="top-[8%] left-[2%] w-24 h-24 sm:w-32 sm:h-32 opacity-85 hidden md:block pointer-events-auto"
          rotation={-15}
          parallaxSpeed={-0.05}
        />
        <FloatingSticker
          src="sticker-i5.png"
          alt="Sticker Sello Especial"
          className="bottom-[-10px] left-[15%] w-20 h-20 sm:w-28 sm:h-28 opacity-85 hidden md:block pointer-events-auto"
          rotation={25}
          parallaxSpeed={0.04}
        />
        <FloatingSticker
          src="sticker-i6.png"
          alt="Sticker Calidad Portella"
          className="top-[5%] right-[15%] w-22 h-22 sm:w-26 sm:h-26 opacity-85 hidden md:block pointer-events-auto"
          rotation={-18}
          parallaxSpeed={-0.04}
        />
        <FloatingSticker
          src="sticker-i1.png"
          alt="Sticker Hecho con Amor"
          className="bottom-[10%] right-[30%] w-20 h-20 sm:w-24 sm:h-24 opacity-85 hidden lg:block pointer-events-auto"
          rotation={10}
          parallaxSpeed={0.03}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-20">
          <Heart className="w-8 h-8 text-action-cta mx-auto animate-pulse" />
          <blockquote className="font-sans text-xl sm:text-2xl font-bold italic leading-relaxed text-dark-chocolate max-w-2xl mx-auto">
            "La pastelería no es solo mezclar ingredientes; es el arte de volver
            a ser esa niña que miraba a su abuela cocinar y entender que el
            ingrediente más importante nunca se compra: se lleva en el alma."
          </blockquote>
          <cite className="block font-sans text-xs tracking-widest uppercase font-semibold text-action-cta not-italic">
            — Angélica Vela, Maestra Pastelera
          </cite>
        </div>
      </section>

      {/* Footer Back Link */}
      <div className="py-24 text-center relative overflow-hidden">
        {/* Stickers Group D (4 stickers placed STRICTLY in gutters clear of the centered back link) */}
        <FloatingSticker
          src="sticker-i2.png"
          alt="Sticker Dulce Detalle"
          className="top-[20%] left-[10%] w-24 h-24 sm:w-32 sm:h-32 opacity-85 hidden md:block pointer-events-auto"
          rotation={15}
          parallaxSpeed={-0.05}
        />
        <FloatingSticker
          src="sticker-i3.png"
          alt="Sticker Amor"
          className="top-[15%] right-[10%] w-24 h-24 sm:w-32 sm:h-32 opacity-85 hidden md:block pointer-events-auto"
          rotation={-12}
          parallaxSpeed={0.04}
        />
        <FloatingSticker
          src="sticker-i4.png"
          alt="Sticker Receta Secreta"
          className="bottom-[10%] left-[25%] w-22 h-22 sm:w-28 sm:h-28 opacity-85 hidden md:block pointer-events-auto"
          rotation={8}
          parallaxSpeed={-0.03}
        />
        <FloatingSticker
          src="sticker-i5.png"
          alt="Sticker Calidad"
          className="bottom-[10%] right-[25%] w-22 h-22 sm:w-28 sm:h-28 opacity-85 hidden md:block pointer-events-auto"
          rotation={-8}
          parallaxSpeed={0.03}
        />

        <Link
          to="/"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-wider text-dark-chocolate hover:text-action-cta transition-colors uppercase py-2 group relative z-10"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
