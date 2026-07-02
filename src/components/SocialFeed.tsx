/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { INSTAGRAM_USERNAME } from "../constants";
import { asset } from "../lib/asset";

export default function SocialFeed() {
  // Real Instagram posts — each thumbnail links to the actual publication.
  const feedItems = [
    {
      id: 1,
      image: "ig-post-1.jpeg",
      url: "https://www.instagram.com/p/DYDxhKdDvW9/",
      alt: "Publicación de La Nieta de Portella en Instagram",
    },
    {
      id: 2,
      image: "ig-post-2.jpeg",
      url: "https://www.instagram.com/p/CrjmrA_Lg8v/",
      alt: "Publicación de La Nieta de Portella en Instagram",
    },
    {
      id: 3,
      image: "ig-post-3.jpeg",
      url: "https://www.instagram.com/p/ClgfPmyu3yb/",
      alt: "Publicación de La Nieta de Portella en Instagram",
    },
    {
      id: 4,
      image: "ig-post-4.jpeg",
      url: "https://www.instagram.com/p/Crvpvmmuiid/",
      alt: "Publicación de La Nieta de Portella en Instagram",
    },
    {
      id: 5,
      image: "ig-post-5.jpeg",
      url: "https://www.instagram.com/p/CvsBb1BJuMU/",
      alt: "Publicación de La Nieta de Portella en Instagram",
    },
    {
      id: 6,
      image: "ig-post-6.jpeg",
      url: "https://www.instagram.com/p/Cs3lyFVtLf3/",
      alt: "Publicación de La Nieta de Portella en Instagram",
    },
  ];

  return (
    <section
      className="py-24 bg-primary-bg text-dark-chocolate overflow-hidden"
      id="social-feed-section"
    >
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
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          id="social-grid"
        >
          {feedItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver publicación en Instagram"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-xl bg-secondary-bg group shadow-sm cursor-pointer"
              id={`social-card-${item.id}`}
            >
              <img
                src={asset(item.image)}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay — links to the real post */}
              <div className="absolute inset-0 bg-dark-chocolate/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 text-primary-bg">
                <Instagram className="w-6 h-6" />
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider">
                  Ver post
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
