/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PageLayout from "./PageLayout";
import { BRAND_EMAIL } from "../../constants";

const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "1. Responsable del tratamiento",
    body: "La Nieta de Portella (Tarapoto, San Martín, Perú) es responsable de los datos personales que recopilamos a través de este sitio web y de nuestros canales de atención.",
  },
  {
    heading: "2. Datos que recopilamos",
    body: "Recopilamos únicamente los datos que nos proporcionas voluntariamente al realizar un pedido o consulta: nombre, número de contacto y detalle del pedido. Este sitio no almacena tus datos en servidores propios; el carrito se guarda localmente en tu navegador.",
  },
  {
    heading: "3. Finalidad",
    body: "Usamos tus datos exclusivamente para atender tu pedido, coordinar entregas y responder tus consultas. No compartimos ni vendemos tu información a terceros.",
  },
  {
    heading: "4. Tus derechos (Ley N.º 29733)",
    body: "Conforme a la Ley de Protección de Datos Personales del Perú, puedes solicitar el acceso, rectificación, cancelación u oposición al tratamiento de tus datos escribiéndonos en cualquier momento.",
  },
  {
    heading: "5. Contacto",
    body: `Para ejercer tus derechos o resolver dudas sobre privacidad, escríbenos a ${BRAND_EMAIL}.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout
      eyebrow="Legal"
      title="Políticas de Privacidad"
      subtitle="Cómo tratamos y protegemos tu información personal."
    >
      <div className="bg-white border border-dark-chocolate/10 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-action-cta">
          Plantilla referencial — revísala con tu asesor legal antes de
          publicarla.
        </p>
        {SECTIONS.map((section) => (
          <section key={section.heading} className="space-y-2">
            <h2 className="font-display text-lg text-dark-chocolate">
              {section.heading}
            </h2>
            <p className="font-sans text-sm font-light text-dark-chocolate/70 leading-relaxed">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
