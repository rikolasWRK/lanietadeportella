/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Catalog from "./components/Catalog";
import CustomCakeBuilder from "./components/CustomCakeBuilder";
import CafeDonAntonio from "./components/CafeDonAntonio";
import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { Product, CartItem } from "./types";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("la_nieta_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Synchronize cart state to localStorage
  useEffect(() => {
    localStorage.setItem("la_nieta_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity: number, customText?: string) => {
    setCartItems((prevItems) => {
      // Find index of item
      const existingIdx = prevItems.findIndex((item) => item.product.id === product.id);

      if (existingIdx > -1) {
        // Update existing item
        const updated = [...prevItems];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + quantity,
          customText: customText !== undefined ? customText : updated[existingIdx].customText
        };
        return updated;
      } else {
        // Append new item
        return [...prevItems, { product, quantity, customText }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number, customText?: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity, customText } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-primary-bg" id="app-root">
      {/* Global Navigation Header */}
      <Navigation onOpenCart={() => setIsCartOpen(true)} cartCount={cartCount} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Section B: Emotional Hero banner */}
        <Hero />

        {/* Section C: Heritage & Craftsman Story */}
        <Nosotros />

        {/* Section D: Premium Showcase Catalog Menu */}
        <Catalog onAddToCart={handleAddToCart} />

        {/* Section C: Custom Cake Builder / "Torta a Medida" */}
        <CustomCakeBuilder />

        {/* Speciality Coffee: Cafe Don Antonio section */}
        <CafeDonAntonio />

        {/* Social Instagram Feed Grid */}
        <SocialFeed />
      </main>

      {/* Section E: Solid Deep Chocolate Footer */}
      <Footer />

      {/* Sliding shopping cart drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
