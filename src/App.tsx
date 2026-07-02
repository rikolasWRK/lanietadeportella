/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import CategoryPage from "./components/CategoryPage";
import StoryPage from "./components/pages/StoryPage";
import ContactPage from "./components/pages/ContactPage";
import FaqPage from "./components/pages/FaqPage";
import PrivacyPage from "./components/pages/PrivacyPage";
import TermsPage from "./components/pages/TermsPage";
import ClaimsPage from "./components/pages/ClaimsPage";
import NotFoundPage from "./components/pages/NotFoundPage";

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
