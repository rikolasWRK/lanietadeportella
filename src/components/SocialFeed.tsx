/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { INSTAGRAM_USERNAME } from "../constants";

export default function SocialFeed() {
  const feedItems = [
    {
      id: 1,
      image: "ig-post-1.jpeg",
      url: "https://www.instagram.com/p/DYDxhKdDvW9/?igsh=d2luNHAzNm94Z3Az",
      alt: "Post de Instagram - La Nieta de Portella"
    },
    {
      id: 2,
      image: "ig-post-2.jpeg",
      url: "https://www.instagram.com/p/CrjmrA_Lg8v/?igsh=d2E4cmV0ZHpkNmly",
      alt: "Post de Instagram - La Nieta de Portella"
    },
    {
      id: 3,
      image: "ig-post-3.jpeg",
      url: "https://www.instagram.com/p/ClgfPmyu3yb/?igsh=MTllcmtsaDJwb3cxaQ==",
      alt: "Post de Instagram - La Nieta de Portella"
    },
    {
      id: 4,
      image: "ig-post-4.jpeg",
      url: "https://www.instagram.com/p/Crvpvmmuiid/?igsh=czMyYjFwb3Zia2U1",
      alt: "Post de Instagram - La Nieta de Portella"
    },
    {
      id: 5,
      image: "ig-post-5.jpeg",
      url: "https://www.instagram.com/p/CvsBb1BJuMU/?igsh=MTU5MWswMTZ3bnRobg==",
      alt: "Post de Instagram - La Nieta de Portella"
    },
    {
      id: 6,
      image: "ig-post-6.jpeg",
      url: "https://www.instagram.com/p/Cs3lyFVtLf3/?igsh=OGptMjZhaDRncXpp",
      alt: "Post de Instagram - La Nieta de Portella"
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
              href={item.url}
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
              />

              {/* Hover Overlay — solo corazón rojo */}
              <div className="absolute inset-0 bg-dark-chocolate/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart className="w-8 h-8 fill-current text-action-cta drop-shadow-lg" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
