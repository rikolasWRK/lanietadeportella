/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Catalog from "./components/Catalog";
import CustomCakeBuilder from "./components/CustomCakeBuilder";
import CafeDonAntonio from "./components/CafeDonAntonio";
import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Route pages are code-split so the landing loads only the JS it needs.
const CategoryPage = lazy(() => import("./components/CategoryPage"));
const StoryPage = lazy(() => import("./components/pages/StoryPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const FaqPage = lazy(() => import("./components/pages/FaqPage"));
const PrivacyPage = lazy(() => import("./components/pages/PrivacyPage"));
const TermsPage = lazy(() => import("./components/pages/TermsPage"));
const ClaimsPage = lazy(() => import("./components/pages/ClaimsPage"));
const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-dashed border-action-cta/50 animate-spin" />
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Section B: Emotional Hero banner */}
      <Hero />

      {/* Section C: Heritage & Craftsman Story */}
      <Nosotros />

      {/* Section D: Premium Showcase Catalog Menu */}
      <Catalog />

      {/* Section C: Custom Cake Builder / "Torta a Medida" */}
      <CustomCakeBuilder />

      {/* Speciality Coffee: Cafe Don Antonio section */}
      <CafeDonAntonio />

      {/* Social Instagram Feed Grid */}
      <SocialFeed />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-primary-bg" id="app-root">
          {/* Global Navigation Header */}
          <Navigation />

          {/* Main Page Content */}
          <main className="flex-grow">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categoria/:id" element={<CategoryPage />} />
                <Route path="/historia" element={<StoryPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/privacidad" element={<PrivacyPage />} />
                <Route path="/terminos" element={<TermsPage />} />
                <Route path="/reclamaciones" element={<ClaimsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          {/* Section E: Solid Deep Chocolate Footer */}
          <Footer />

          {/* Global overlays */}
          <CartDrawer />
          <FloatingWhatsApp />
        </div>
      </CartProvider>
    </HashRouter>
  );
}
