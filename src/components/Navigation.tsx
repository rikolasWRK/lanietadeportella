/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Motion value tracking scroll position (0 = top, 1 = scrolled)
  const scrollProgress = useMotionValue(0);

  // Smooth spring — stiffness high enough to feel snappy but low enough to glide
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 120,
    damping: 22,
    restDelta: 0.001,
  });

  // Derive animated CSS values from the spring
  const navPaddingY   = useTransform(smoothProgress, [0, 1], [28, 16]); // px: 7 → 4
  const bgOpacity     = useTransform(smoothProgress, [0, 1], [0, 0.92]);
  const borderOpacity = useTransform(smoothProgress, [0, 1], [0, 0.06]);
  const shadowBlur    = useTransform(smoothProgress, [0, 1], [0, 12]);
  const logoScale     = useTransform(smoothProgress, [0, 1], [1, 0.88]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      scrollProgress.set(scrolled ? 1 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollProgress]);

  const navLinks = [
    { label: "Nosotros",             href: "#nosotros" },
    { label: "La Carta",             href: "#carta" },
    { label: "Tortas Personalizadas",href: "#personalizar" },
    { label: "Café Don Antonio",     href: "#cafe-antonio" },
    { label: "Contacto",             href: "#contacto" }
  ];

  return (
    <>
      <motion.nav
        id="global-navigation"
        style={{ paddingTop: navPaddingY, paddingBottom: navPaddingY }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        {/* Animated frosted glass background layer */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 backdrop-blur-md pointer-events-none"
          style={{ opacity: bgOpacity }}
        />

        {/* Animated bottom border */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px bg-dark-chocolate pointer-events-none"
          style={{ opacity: borderOpacity }}
        />

        {/* Animated drop shadow layer */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: useTransform(
              shadowBlur,
              (v) => `0 ${v * 0.5}px ${v}px rgba(0,0,0,0.06)`
            ),
          }}
        />

        {/* Solid background colour that fades in */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-primary-bg pointer-events-none"
          style={{ opacity: bgOpacity }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="flex items-center justify-between w-full relative">

            {/* Left Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8 z-10">
              <a
                href="#nosotros"
                className="font-sans text-xs font-medium tracking-widest text-dark-chocolate hover:text-action-cta transition-colors duration-300 uppercase py-1 relative group"
              >
                Nosotros
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-action-cta transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#carta"
                className="font-sans text-xs font-medium tracking-widest text-dark-chocolate hover:text-action-cta transition-colors duration-300 uppercase py-1 relative group"
              >
                Carta/Tienda
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-action-cta transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            {/* Logo — scales down slightly on scroll */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 text-center select-none z-10 origin-center"
              style={{ scale: logoScale }}
            >
              <a href="#" className="flex flex-col items-center justify-center">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-normal text-vibrant-coral leading-none">
                  La Nieta de Portella
                </span>
                <span className="font-sans text-[11px] tracking-[0.35em] text-dark-chocolate/60 uppercase mt-1.5 leading-none">
                  HAPPY BAKES
                </span>
              </a>
            </motion.div>

            {/* Right side controls */}
            <div className="flex items-center space-x-3 sm:space-x-4 z-10 ml-auto" id="nav-controls">
              {/* Right Navigation Links (Desktop) */}
              <div className="hidden md:flex items-center gap-4 lg:gap-8 mr-4 lg:mr-8">
                <a
                  href="#cafe-antonio"
                  className="font-sans text-xs font-medium tracking-widest text-dark-chocolate hover:text-action-cta transition-colors duration-300 uppercase py-1 relative group"
                >
                  Café Don Antonio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-action-cta transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="#contacto"
                  className="font-sans text-xs font-medium tracking-widest text-dark-chocolate hover:text-action-cta transition-colors duration-300 uppercase py-1 relative group"
                >
                  Contacto
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-action-cta transition-all duration-300 group-hover:w-full" />
                </a>
              </div>

              {/* Search utility */}
              <button
                className="p-2 text-dark-chocolate/80 hover:text-action-cta hover:bg-dark-chocolate/5 rounded-full transition-all duration-300 hidden sm:block"
                aria-label="Buscar productos"
                id="search-btn"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-dark-chocolate hover:text-action-cta rounded-full md:hidden transition-colors"
                aria-label="Menu principal"
                id="mobile-menu-toggle-btn"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="relative md:hidden bg-primary-bg border-b border-dark-chocolate/10 shadow-lg overflow-hidden"
              id="mobile-dropdown-menu"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-sans text-sm font-medium tracking-wider text-dark-chocolate/90 uppercase hover:text-action-cta hover:bg-dark-chocolate/5 px-3 py-2.5 rounded-lg transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-dark-chocolate/5 flex items-center justify-around">
                  <button
                    className="flex items-center gap-2 font-sans text-xs text-dark-chocolate/80 hover:text-action-cta p-2"
                    id="mobile-search-btn"
                  >
                    <Search className="w-4 h-4" /> Buscar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to avoid layout jump with fixed nav */}
      <div className="h-20 w-full" />
    </>
  );
}
