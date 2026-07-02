/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Google Analytics 4 — opt-in via the `VITE_GA_ID` environment variable.
 * With no id configured, nothing loads and nothing is tracked. To enable,
 * set `VITE_GA_ID=G-XXXXXXXXXX` in a `.env` file before building.
 */

const GA_ID = import.meta.env.VITE_GA_ID;

export function initAnalytics(): void {
  if (!GA_ID) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: true });
}

/** Registers a virtual page view — call on client-side route changes. */
export function trackPageView(path: string): void {
  if (!GA_ID || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path });
}
