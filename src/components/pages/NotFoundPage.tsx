/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { Home, CakeSlice } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="py-32 bg-primary-bg text-dark-chocolate min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <CakeSlice className="w-14 h-14 text-action-cta mb-6" />
      <span className="font-display text-6xl sm:text-7xl text-dark-chocolate leading-none">
        404
      </span>
      <h1 className="font-display text-2xl sm:text-3xl mt-4">
        Esta página se horneó de más
      </h1>
      <p className="font-sans text-sm font-light text-dark-chocolate/70 max-w-sm mt-3 leading-relaxed">
        No encontramos lo que buscabas, pero nuestra carta sigue fresca y lista
        para endulzarte el día.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-action-cta text-primary-bg font-sans text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-md"
      >
        <Home className="w-4 h-4" />
        <span>Volver al Inicio</span>
      </Link>
    </div>
  );
}
