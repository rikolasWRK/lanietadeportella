import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-24" id="hero-section">
      {/* Background Video with adjusted exposure (brightness) and opacity */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-80 brightness-[0.85]"
      >
        <source src="beacons-bg2.mp4" type="video/mp4" />
      </video>

      {/* Subtle light overlay to guarantee dark text readability */}
      <div className="absolute inset-0 bg-primary-bg/40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column: Text Content & Actions */}
        <div className="order-2 md:order-1 text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-sm font-bold tracking-[0.25em] text-vibrant-coral mb-4 block"
          >
            ARTESANÍA EN CADA BOCADO
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-dark-chocolate mb-8 leading-tight"
          >
            Pasión por endulzar la vida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-on-surface-variant max-w-md mb-12 font-light leading-relaxed"
          >
            Recetas familiares que han trascendido generaciones, elaboradas con los ingredientes más finos para crear momentos inolvidables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              className="inline-block bg-vibrant-coral text-primary-bg px-10 py-5 rounded-full font-sans text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-all active:scale-95 text-center shadow-md cursor-pointer"
              href="#carta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Nuestra Carta
            </a>
            <a
              className="inline-block border border-dark-chocolate text-dark-chocolate px-10 py-5 rounded-full font-sans text-xs font-semibold tracking-widest uppercase hover:bg-dark-chocolate hover:text-primary-bg transition-all text-center cursor-pointer"
              href="#/historia"
            >
              Nuestro Legado
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Image with Spinning Badge */}
        <div className="order-1 md:order-2 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-md"
          >
            <div className="arch-frame w-full aspect-[4/5] bg-dusty-rose overflow-hidden shadow-2xl relative">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src="fix-angelica.png"
                alt="La Nieta de Portella - Tarta Premium de Bodas"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Signature Tag (Angelica Vela - Maestra pastelera) */}
            <div
              className="absolute top-[-20px] left-1/2 -translate-x-1/2 translate-y-0 sm:top-[32%] sm:left-[-60px] sm:translate-x-0 sm:-translate-y-1/2 z-20 bg-cream-surface/95 backdrop-blur-xs px-6 py-3 border border-dark-chocolate/10 text-center rounded-xl rotate-0 min-w-[170px]"
              style={{
                boxShadow: "rgba(40, 24, 8, 0.12) 0px 8px 24px, rgba(40, 24, 8, 0.08) 0px 4px 8px",
              }}
              id="hero-signature-tag"
            >
              <p className="font-display text-xl sm:text-2xl text-[#EB4329] leading-none">
                Angelica Vela
              </p>
              <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#281808] font-bold mt-1.5">
                Maestra pastelera
              </p>
            </div>
            
            {/* Rotating Circle Badge Overlapping */}
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 w-32 h-32 md:w-48 md:h-48 bg-cream-surface rounded-full flex items-center justify-center p-4 shadow-lg"
            >
              {/* Spinning text ring */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-[spin_20s_linear_infinite] fill-dark-chocolate overflow-visible"
              >
                <path
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                  id="circlePath"
                />
                <text className="font-sans text-[9px] font-bold tracking-[0.25em] uppercase fill-dark-chocolate">
                  <textPath href="#circlePath">
                    HAPPY BAKES • BAKES HAPPY • HAPPY BAKES • BAKES HAPPY •
                  </textPath>
                </text>
              </svg>

              {/* Static center image — S6 sticker */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                <img
                  src="/lanietadeportella/S6.png"
                  alt="La Nieta de Portella"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

