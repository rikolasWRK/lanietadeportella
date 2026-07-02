/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Resolves a public asset path against the app's deploy base URL.
 *
 * Using `import.meta.env.BASE_URL` keeps assets working whether the site is
 * served from the domain root (dev) or a subpath like `/lanietadeportella/`
 * (GitHub Pages), without hardcoding the repository name anywhere.
 *
 * @param path Filename inside the `public/` folder, e.g. `"torta-mama.jpeg"`.
 */
export function asset(path: string): string {
  const normalized = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
