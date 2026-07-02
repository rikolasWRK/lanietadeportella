/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent } from "react";
import { BookOpen, Check } from "lucide-react";
import PageLayout from "./PageLayout";
import { openWhatsApp } from "../../lib/whatsapp";

type ClaimType = "reclamo" | "queja";

export default function ClaimsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    document: "",
    contact: "",
    type: "reclamo" as ClaimType,
    detail: "",
  });

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message =
      `*LIBRO DE RECLAMACIONES — La Nieta de Portella*\n\n` +
      `*Tipo:* ${form.type === "reclamo" ? "Reclamo" : "Queja"}\n` +
      `*Nombre:* ${form.fullName}\n` +
      `*Documento:* ${form.document}\n` +
      `*Contacto:* ${form.contact}\n\n` +
      `*Detalle:*\n${form.detail}`;
    openWhatsApp(message);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-primary-bg/40 border border-dark-chocolate/15 rounded-xl px-4 py-3 text-sm text-dark-chocolate font-sans outline-none focus:border-action-cta focus:ring-4 focus:ring-action-cta/5 transition-all";

  return (
    <PageLayout
      eyebrow="Atención al cliente"
      title="Libro de Reclamaciones"
      subtitle="Tu opinión nos ayuda a mejorar. Registra aquí tu reclamo o queja."
    >
      <div className="bg-white border border-dark-chocolate/10 rounded-3xl p-6 sm:p-10 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-action-cta mb-6">
          Plantilla referencial — conforme al Código de Protección al Consumidor
          (Indecopi). Adáptala a tu razón social y RUC reales.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center text-center gap-4 py-8">
            <div className="p-4 bg-action-cta/10 rounded-full">
              <Check className="w-8 h-8 text-action-cta" />
            </div>
            <h2 className="font-display text-2xl text-dark-chocolate">
              Registro enviado
            </h2>
            <p className="font-sans text-sm font-light text-dark-chocolate/70 max-w-sm">
              Hemos abierto WhatsApp con tu reclamo para dejar constancia.
              Responderemos en un plazo máximo de 15 días hábiles.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-2 font-sans text-xs font-bold uppercase tracking-wider text-action-cta hover:underline cursor-pointer"
            >
              Registrar otro
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={update("fullName")}
                  className={inputClass}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                  DNI / Documento
                </label>
                <input
                  type="text"
                  required
                  value={form.document}
                  onChange={update("document")}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                  Teléfono o correo
                </label>
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={update("contact")}
                  className={inputClass}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                  Tipo de registro
                </label>
                <select
                  value={form.type}
                  onChange={update("type")}
                  className={inputClass}
                >
                  <option value="reclamo">Reclamo (disconformidad)</option>
                  <option value="queja">Queja (atención)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-dark-chocolate/60">
                Detalle
              </label>
              <textarea
                required
                rows={5}
                value={form.detail}
                onChange={update("detail")}
                className={`${inputClass} resize-none`}
                placeholder="Cuéntanos qué ocurrió con el mayor detalle posible."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-action-cta text-primary-bg font-sans text-xs font-bold uppercase tracking-widest px-5 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-md cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Enviar registro</span>
            </button>
          </form>
        )}
      </div>
    </PageLayout>
  );
}
