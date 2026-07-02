/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Calendar,
  Check,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Cake,
  MessageCircle,
} from "lucide-react";
import {
  CAKE_SIZES,
  CAKE_BISCUITS,
  CAKE_FILLINGS,
  CAKE_THEMES,
} from "../constants";
import { asset } from "../lib/asset";
import { openWhatsApp, customCakeMessage } from "../lib/whatsapp";

export default function CustomCakeBuilder() {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState(CAKE_SIZES[1]); // Default to Medium
  const [selectedBiscuit, setSelectedBiscuit] = useState(CAKE_BISCUITS[0]); // Default to Red Velvet
  const [selectedFilling, setSelectedFilling] = useState(CAKE_FILLINGS[0]); // Default to Manjar Blanco
  const [selectedTheme, setSelectedTheme] = useState(CAKE_THEMES[0]); // Default to Pink Macaron
  const [topperText, setTopperText] = useState("Feliz Cumple Bonita");

  const totalSteps = 5;

  const resetBuilder = () => {
    setStep(1);
    setSelectedSize(CAKE_SIZES[1]);
    setSelectedBiscuit(CAKE_BISCUITS[0]);
    setSelectedFilling(CAKE_FILLINGS[0]);
    setSelectedTheme(CAKE_THEMES[0]);
    setTopperText("Feliz Cumple Bonita");
  };

  const handleSendCustomOrder = () => {
    openWhatsApp(
      customCakeMessage({
        size: selectedSize,
        biscuit: selectedBiscuit,
        filling: selectedFilling,
        theme: selectedTheme,
        topperText,
      }),
    );
  };

  return (
    <section
      id="personalizar"
      className="py-24 bg-cream-surface/30 text-dark-chocolate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Split Layout card */}
        <AnimatePresence mode="wait">
          {!isBuilderOpen ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-dark-chocolate/10 rounded-3xl p-6 sm:p-12 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left"
            >
              {/* Left Column: Details */}
              <div className="md:col-span-7 space-y-6">
                <span className="font-sans text-xs font-bold tracking-[0.15em] text-action-strong uppercase block">
                  Tortas de Alta Costura
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Sueña en grande, <br />
                  nosotros lo horneamos.
                </h2>
                <p className="font-sans text-sm sm:text-base font-light text-dark-chocolate/80 leading-relaxed">
                  Desde bodas íntimas hasta celebraciones monumentales.
                  Trabajamos contigo de la mano para diseñar la pieza central
                  perfecta para tu evento, garantizando un sabor extraordinario
                  y una estética impecable.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex gap-3">
                    <div className="p-2.5 bg-action-cta/10 text-action-cta rounded-xl shrink-0 h-fit">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base leading-tight">
                        Diseño a Medida
                      </h3>
                      <p className="text-xs font-light text-dark-chocolate/60 mt-1 leading-normal">
                        Elige cada detalle, desde el bizcocho hasta los adornos
                        y texturas finales.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="p-2.5 bg-action-cta/10 text-action-cta rounded-xl shrink-0 h-fit">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base leading-tight">
                        Reserva con Tiempo
                      </h3>
                      <p className="text-xs font-light text-dark-chocolate/60 mt-1 leading-normal">
                        Agenda una sesión de degustación y diseño personalizada
                        para bodas y galas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsBuilderOpen(true)}
                    className="px-8 py-4 bg-dark-chocolate text-primary-bg font-sans rounded-xl font-medium tracking-wide flex items-center gap-2.5 transition-all hover:bg-opacity-95 hover:translate-y-[-2px] duration-300 shadow-md group cursor-pointer"
                    id="personalize-cake-trigger"
                  >
                    <Cake className="w-4 h-4 text-action-cta" />
                    <span>Personalizar Mi Torta</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Column: Baker Decorating Golden Cake */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/5] bg-secondary-bg/25 p-2 border border-dark-chocolate/10 rounded-t-full rounded-b-xl overflow-hidden shadow-lg">
                  <div className="arch-frame w-full h-full">
                    <img
                      src={asset("torta-mama.jpeg")}
                      alt="Torta personalizada de ejemplo"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Immersive Custom Cake Builder Interface */
            <motion.div
              key="builder"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-dark-chocolate/15 rounded-3xl p-6 sm:p-10 shadow-2xl text-left"
              id="custom-cake-builder-wizard"
            >
              {/* Header Wizard Panel */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-dark-chocolate/10 mb-8">
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-dark-chocolate flex items-center gap-2">
                    <Cake className="w-6 h-6 text-action-cta" />
                    <span>Diseñador Virtual de Tortas</span>
                  </h3>
                  <p className="text-xs font-light text-dark-chocolate/60">
                    Crea tu pastel soñado en 5 simples pasos y recíbelo horneado
                    a la perfección.
                  </p>
                </div>
                <button
                  onClick={resetBuilder}
                  className="text-xs font-semibold uppercase tracking-wider text-action-cta hover:bg-action-cta/10 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                  id="reset-builder-btn"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Empezar de nuevo</span>
                </button>
              </div>

              {/* Progress Stepper Row */}
              <div className="flex items-center justify-between max-w-xl mx-auto mb-10 text-center relative px-2">
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-dark-chocolate/10 transform -translate-y-1/2 -z-10" />
                <div
                  className="absolute top-1/2 left-0 h-[2px] bg-action-cta transform -translate-y-1/2 -z-10 transition-all duration-500"
                  style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                />
                {Array.from({ length: totalSteps }).map((_, i) => {
                  const s = i + 1;
                  const isActive = step === s;
                  const isCompleted = step > s;
                  return (
                    <button
                      key={s}
                      onClick={() => s <= step && setStep(s)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all relative z-10 cursor-pointer ${
                        isActive
                          ? "bg-action-cta text-primary-bg ring-4 ring-action-cta/20"
                          : isCompleted
                            ? "bg-dark-chocolate text-primary-bg"
                            : "bg-secondary-bg text-dark-chocolate/40"
                      }`}
                      id={`stepper-node-${s}`}
                    >
                      {isCompleted ? <Check className="w-3.5 h-3.5" /> : s}
                    </button>
                  );
                })}
              </div>

              {/* Builder Layout Split: Left choices / Right real-time preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Panel: Options selection (7 cols) */}
                <div className="lg:col-span-7 min-h-[300px] flex flex-col justify-between">
                  <div>
                    {/* STEP 1: SIZE */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                        id="wizard-step-1"
                      >
                        <h4 className="font-display text-xl">
                          Paso 1: Selecciona el Tamaño
                        </h4>
                        <p className="text-xs font-light text-dark-chocolate/70">
                          Calcula el tamaño ideal en porciones según el número
                          de invitados de tu evento.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          {CAKE_SIZES.map((sz) => (
                            <button
                              key={sz.id}
                              onClick={() => setSelectedSize(sz)}
                              className={`p-4 rounded-xl border text-left transition-all duration-300 flex justify-between items-center cursor-pointer ${
                                selectedSize.id === sz.id
                                  ? "border-action-cta bg-action-cta/5 ring-2 ring-action-cta/15"
                                  : "border-dark-chocolate/10 hover:border-dark-chocolate/30"
                              }`}
                              id={`option-size-${sz.id}`}
                            >
                              <div>
                                <h5 className="font-display text-base text-dark-chocolate">
                                  {sz.name}
                                </h5>
                                <p className="text-xs font-light text-dark-chocolate/60 mt-0.5">
                                  {sz.portions}
                                </p>
                              </div>
                              <span className="font-sans font-bold text-sm text-action-cta">
                                S/. {sz.price}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: BISCUIT FLAVOR */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                        id="wizard-step-2"
                      >
                        <h4 className="font-display text-xl">
                          Paso 2: Sabor del Bizcochuelo
                        </h4>
                        <p className="text-xs font-light text-dark-chocolate/70">
                          Horneamos bizcochos sumamente húmedos utilizando
                          ingredientes de origen local premium.
                        </p>
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          {CAKE_BISCUITS.map((bc) => (
                            <button
                              key={bc.id}
                              onClick={() => setSelectedBiscuit(bc)}
                              className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                                selectedBiscuit.id === bc.id
                                  ? "border-action-cta bg-action-cta/5 ring-2 ring-action-cta/15"
                                  : "border-dark-chocolate/10 hover:border-dark-chocolate/30"
                              }`}
                              id={`option-biscuit-${bc.id}`}
                            >
                              <div className="max-w-md pr-4">
                                <h5 className="font-display text-base text-dark-chocolate">
                                  {bc.name}
                                </h5>
                                <p className="text-xs font-light text-dark-chocolate/60 mt-0.5">
                                  {bc.description}
                                </p>
                              </div>
                              {selectedBiscuit.id === bc.id && (
                                <div className="w-5 h-5 rounded-full bg-action-cta flex items-center justify-center text-primary-bg">
                                  <Check className="w-3.5 h-3.5" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: FILLING CREAM */}
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                        id="wizard-step-3"
                      >
                        <h4 className="font-display text-xl">
                          Paso 3: Relleno de Pastelería
                        </h4>
                        <p className="text-xs font-light text-dark-chocolate/70">
                          Nuestros rellenos se cocinan artesanalmente por horas
                          para lograr un copete untuoso y denso.
                        </p>
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          {CAKE_FILLINGS.map((fl) => (
                            <button
                              key={fl.id}
                              onClick={() => setSelectedFilling(fl)}
                              className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                                selectedFilling.id === fl.id
                                  ? "border-action-cta bg-action-cta/5 ring-2 ring-action-cta/15"
                                  : "border-dark-chocolate/10 hover:border-dark-chocolate/30"
                              }`}
                              id={`option-filling-${fl.id}`}
                            >
                              <div className="max-w-md pr-4">
                                <h5 className="font-display text-base text-dark-chocolate">
                                  {fl.name}
                                </h5>
                                <p className="text-xs font-light text-dark-chocolate/60 mt-0.5">
                                  {fl.description}
                                </p>
                              </div>
                              {selectedFilling.id === fl.id && (
                                <div className="w-5 h-5 rounded-full bg-action-cta flex items-center justify-center text-primary-bg">
                                  <Check className="w-3.5 h-3.5" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4: FROSTING DECORATION THEME */}
                    {step === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                        id="wizard-step-4"
                      >
                        <h4 className="font-display text-xl">
                          Paso 4: Temática & Glaseado
                        </h4>
                        <p className="text-xs font-light text-dark-chocolate/70">
                          Define la paleta de colores y la estética superior de
                          la torta.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          {CAKE_THEMES.map((th) => (
                            <button
                              key={th.id}
                              onClick={() => setSelectedTheme(th)}
                              className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-36 cursor-pointer ${
                                selectedTheme.id === th.id
                                  ? "border-action-cta bg-action-cta/5 ring-2 ring-action-cta/15"
                                  : "border-dark-chocolate/10 hover:border-dark-chocolate/30"
                              }`}
                              id={`option-theme-${th.id}`}
                            >
                              <div className="flex justify-between items-center w-full">
                                <h5 className="font-display text-base text-dark-chocolate">
                                  {th.name}
                                </h5>
                                <div
                                  className="w-5 h-5 rounded-full border border-dark-chocolate/20"
                                  style={{ backgroundColor: th.color }}
                                />
                              </div>
                              <p className="text-xs font-light text-dark-chocolate/60 leading-normal">
                                {th.description}
                              </p>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 5: CUSTOM TOPPER MESSAGE */}
                    {step === 5 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                        id="wizard-step-5"
                      >
                        <h4 className="font-display text-xl">
                          Paso 5: Dedicatoria Escrita
                        </h4>
                        <p className="text-xs font-light text-dark-chocolate/70">
                          Escribe el mensaje o dedicatoria que se colocará de
                          adorno en la cima. ¡Mira el render a la derecha!
                        </p>
                        <div className="space-y-4 pt-2">
                          <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                              Texto del Topper (Máx 30 caracteres):
                            </label>
                            <input
                              type="text"
                              maxLength={30}
                              placeholder="Ej: Feliz Cumple Bonita"
                              value={topperText}
                              onChange={(e) => setTopperText(e.target.value)}
                              className="w-full bg-primary-bg/30 border border-dark-chocolate/15 rounded-xl px-4 py-3 text-sm text-dark-chocolate font-sans outline-hidden focus:border-action-cta focus:ring-4 focus:ring-action-cta/5 transition-all"
                              id="builder-topper-text-input"
                            />
                          </div>
                          <div className="bg-cream-surface/20 border border-dark-chocolate/5 p-4 rounded-xl text-xs font-light leading-relaxed text-dark-chocolate/75">
                            <span className="font-bold text-action-strong uppercase tracking-wider mr-1 block sm:inline">
                              Nota:
                            </span>
                            Los toppers se fabrican en papel acrílico cortado
                            con láser o se escriben a pulso artístico con
                            chocolate blanco belga sobre macarons en la cima.
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Navigation controls footer inside selection panel */}
                  <div className="flex justify-between items-center pt-8 border-t border-dark-chocolate/5 mt-8">
                    <button
                      disabled={step === 1}
                      onClick={() => setStep(step - 1)}
                      className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-dark-chocolate hover:bg-dark-chocolate/5 disabled:opacity-30 disabled:hover:bg-transparent flex items-center gap-1 cursor-pointer"
                      id="wizard-prev-btn"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Atrás</span>
                    </button>

                    {step < totalSteps ? (
                      <button
                        onClick={() => setStep(step + 1)}
                        className="px-6 py-3 bg-dark-chocolate text-primary-bg font-sans rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 hover:opacity-90 transition-opacity cursor-pointer"
                        id="wizard-next-btn"
                      >
                        <span>Siguiente</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSendCustomOrder}
                        className="px-6 py-3 bg-action-cta text-primary-bg font-sans rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 hover:opacity-90 transition-opacity shadow-md cursor-pointer"
                        id="wizard-finish-btn"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Pedir por WhatsApp</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Panel: Live real-time visual preview (5 cols) */}
                <div className="lg:col-span-5 bg-cream-surface/30 border border-dark-chocolate/10 rounded-2xl p-6 flex flex-col justify-between aspect-square lg:aspect-[4/5]">
                  <div className="text-center">
                    <span className="font-sans text-[10px] font-bold tracking-widest text-dark-chocolate/60 uppercase">
                      Vista Previa en Tiempo Real
                    </span>
                    <div className="w-8 h-[1px] bg-dark-chocolate/20 mx-auto mt-1" />
                  </div>

                  {/* Live Render Cake graphic */}
                  <div className="flex-1 flex flex-col items-center justify-center relative py-6">
                    {/* The Cake stand */}
                    <div className="absolute bottom-6 w-32 h-2.5 bg-gray-300 rounded-full border border-gray-400/20 shadow-xs" />
                    <div className="absolute bottom-8 w-24 h-4 bg-white border border-dark-chocolate/5 rounded-t-lg shadow-sm" />

                    {/* Interactive Virtual Cake cylinder */}
                    <motion.div
                      animate={{ backgroundColor: selectedTheme.color }}
                      transition={{ duration: 0.5 }}
                      className="w-40 h-32 rounded-lg relative flex flex-col items-center justify-center border-x-2 border-b-2 border-black/5 shadow-lg mb-8"
                      id="cake-render-body"
                    >
                      {/* Cream drips topping representation */}
                      <div className="absolute -top-1 left-0 right-0 h-4 bg-white/20 rounded-full blur-[1px] border-b border-white/10" />

                      {/* Sparkles / toppings sprinkles if floral/coral */}
                      {selectedTheme.id === "theme-pink-macaron" && (
                        <div className="absolute inset-x-2 inset-y-4 pointer-events-none opacity-80 grid grid-cols-4 gap-2">
                          {Array.from({ length: 8 }).map((_, idx) => (
                            <div
                              key={idx}
                              className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
                            />
                          ))}
                        </div>
                      )}
                      {selectedTheme.id === "theme-chocolate-luxury" && (
                        <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent to-black/30" />
                      )}

                      {/* Cake Topper text live rendered */}
                      <AnimatePresence mode="wait">
                        {topperText && (
                          <motion.div
                            key={topperText}
                            initial={{ scale: 0.8, opacity: 0, y: -10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="absolute -top-12 z-20 bg-dark-chocolate text-primary-bg px-3 py-1.5 rounded-md border border-action-cta text-center shadow-md max-w-[130px]"
                            id="cake-topper-render"
                          >
                            <span className="font-display text-[10px] sm:text-xs tracking-wide block truncate">
                              {topperText}
                            </span>
                            {/* Pin Stick */}
                            <div className="w-0.5 h-10 bg-dark-chocolate mx-auto absolute top-full left-1/2 transform -translate-x-1/2 -z-10" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Interactive Visual indicators (Sponge + Cream) inside the cake */}
                      <div className="absolute bottom-2 left-3 right-3 bg-black/10 rounded-md p-1.5 flex items-center justify-between text-[10px] text-white">
                        <span className="font-sans leading-none truncate max-w-[65px]">
                          {selectedBiscuit.name}
                        </span>
                        <div className="w-1 h-3 bg-white/25 rounded-full" />
                        <span className="font-sans leading-none truncate max-w-[65px]">
                          {selectedFilling.name}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Summary Pricing Footer */}
                  <div className="border-t border-dark-chocolate/10 pt-4 space-y-1.5">
                    <div className="flex justify-between items-baseline text-xs font-light text-dark-chocolate/60">
                      <span>Tamaño Seleccionado</span>
                      <span>
                        {selectedSize.name} ({selectedSize.portions})
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline text-sm font-medium">
                      <span>Total estimado</span>
                      <span className="font-sans font-bold text-lg text-action-cta">
                        S/. {selectedSize.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close builder panel */}
              <div className="mt-8 pt-6 border-t border-dark-chocolate/10 flex justify-end">
                <button
                  onClick={() => setIsBuilderOpen(false)}
                  className="px-6 py-2.5 border border-dark-chocolate/20 text-dark-chocolate hover:bg-dark-chocolate/5 font-sans rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  id="close-cake-builder-wizard-btn"
                >
                  Volver a Presentación
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
