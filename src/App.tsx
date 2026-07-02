/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Catalog from "./components/Catalog";
import CustomCakeBuilder from "./components/CustomCakeBuilder";
import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import StoryPage from "./components/StoryPage";
import ComingSoon from "./components/ComingSoon";
import ContactPage from "./components/ContactPage";

/** Scrolls to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
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

      {/* Social Instagram Feed Grid */}
      <SocialFeed />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
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
            <Route path="/reclamaciones" element={<ComingSoon />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/privacidad" element={<ComingSoon />} />
            <Route path="/terminos" element={<ComingSoon />} />
            <Route path="/faq" element={<ComingSoon />} />
          </Routes>
        </main>

        {/* Section E: Solid Deep Chocolate Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
