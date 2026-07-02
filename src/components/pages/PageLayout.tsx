/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

/** Shared shell for standalone content pages (FAQ, legal, claims book). */
export default function PageLayout({
  eyebrow,
  title,
  subtitle,
  children,
}: PageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-24 bg-primary-bg text-dark-chocolate min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center space-y-4 mb-14">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-action-strong uppercase block">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight text-dark-chocolate">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-base font-light text-dark-chocolate/70 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-12 h-[1px] bg-action-cta mx-auto" />
        </header>

        {children}

        <div className="text-center pt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-wider text-dark-chocolate hover:text-action-cta transition-colors uppercase py-2 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
