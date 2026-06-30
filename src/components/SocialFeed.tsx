/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { INSTAGRAM_USERNAME } from "../constants";

export default function SocialFeed() {
  const feedItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
      likes: "248",
      comments: "14",
      alt: "Un bocado de torta húmeda de chocolate"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
      likes: "312",
      comments: "25",
      alt: "Manos amasando recetas familiares con harina"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80",
      likes: "196",
      comments: "8",
      alt: "Croissants recién horneados y dorados"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80",
      likes: "410",
      comments: "32",
      alt: "Arte latte de capuccino de especialidad"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
      likes: "285",
      comments: "19",
      alt: "Interiores minimalistas y elegantes de nuestra pastelería"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=400&q=80",
      likes: "342",
      comments: "22",
      alt: "Caja de dulces premium listos para delivery"
    }
  ];

  return (
    <section className="py-24 bg-primary-bg text-dark-chocolate overflow-hidden" id="social-feed-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Section Headers */}
        <div className="space-y-3">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-action-cta uppercase block">
            Sigue nuestro día a día
          </span>
          <h3 className="font-display text-3xl sm:text-4xl tracking-tight">
            Un bocado que te lleva a casa
          </h3>
          <a
            href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-xs font-semibold tracking-wider text-dark-chocolate hover:text-action-cta transition-colors underline block"
            id="instagram-username-handle"
          >
            @{INSTAGRAM_USERNAME}
          </a>
        </div>

        {/* 6 Column Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="social-grid">
          {feedItems.map((item) => (
            <motion.a
              key={item.id}
              href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-xl bg-secondary-bg group shadow-sm cursor-pointer"
              id={`social-card-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay with Likes/Comments icons */}
              <div className="absolute inset-0 bg-dark-chocolate/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1.5 text-xs font-medium font-sans">
                  <Heart className="w-4 h-4 fill-current text-action-cta" />
                  <span>{item.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium font-sans">
                  <MessageCircle className="w-4 h-4 fill-current text-primary-bg" />
                  <span>{item.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
