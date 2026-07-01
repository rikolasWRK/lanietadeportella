/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Catalog from "./components/Catalog";
import CustomCakeBuilder from "./components/CustomCakeBuilder";
import CafeDonAntonio from "./components/CafeDonAntonio";
import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";

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
      <div className="min-h-screen flex flex-col bg-primary-bg" id="app-root">
        {/* Global Navigation Header */}
        <Navigation />

        {/* Main Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:id" element={<CategoryPage />} />
          </Routes>
        </main>

        {/* Section E: Solid Deep Chocolate Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
