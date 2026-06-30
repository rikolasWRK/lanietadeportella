/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ShoppingBag, Search, User, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavigationProps {
  onOpenCart: () => void;
  cartCount: number;
}

export default function Navigation({ onOpenCart, cartCount }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "La Carta", href: "#carta" },
    { label: "Tortas Personalizadas", href: "#personalizar" },
    { label: "Café Don Antonio", href: "#cafe-antonio" },
    { label: "Contacto", href: "#contacto" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-primary-bg/90 backdrop-blur-md shadow-sm border-b border-dark-chocolate/5"
            : "py-5 bg-transparent"
        }`}
        id="global-navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
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

            {/* Logo in absolute center */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center select-none z-10">
              <a href="#" className="flex flex-col items-center justify-center">
                <span className="font-display text-xl sm:text-2xl tracking-normal text-vibrant-coral leading-none">
                  La Nieta de Portella
                </span>
                <span className="font-sans text-[9px] tracking-[0.3em] text-dark-chocolate/60 uppercase mt-1 leading-none">
                  HAPPY BAKES
                </span>
              </a>
            </div>

            {/* Interactive Functional Controls (Right side) */}
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

              {/* User / Profile link */}
              <button
                className="p-2 text-dark-chocolate/80 hover:text-action-cta hover:bg-dark-chocolate/5 rounded-full transition-all duration-300 hidden sm:block"
                aria-label="Perfil de usuario"
                id="user-profile-btn"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Cart Drawer Toggle Button */}
              <button
                onClick={onOpenCart}
                className="p-2 text-dark-chocolate/80 hover:text-action-cta hover:bg-dark-chocolate/5 rounded-full transition-all duration-300 relative cursor-pointer"
                aria-label="Ver bolsa de compras"
                id="cart-trigger-btn"
              >
                <ShoppingBag className="w-5 h-5" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-0 right-0 w-4 h-4 bg-action-cta text-primary-bg font-sans text-[9px] font-bold rounded-full flex items-center justify-center shadow-xs"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
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
              className="md:hidden bg-primary-bg border-b border-dark-chocolate/10 shadow-lg overflow-hidden"
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
                  <button
                    className="flex items-center gap-2 font-sans text-xs text-dark-chocolate/80 hover:text-action-cta p-2"
                    id="mobile-account-btn"
                  >
                    <User className="w-4 h-4" /> Mi Cuenta
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to avoid layout jump with fixed nav */}
      <div className="h-16 w-full" />
    </>
  );
}
