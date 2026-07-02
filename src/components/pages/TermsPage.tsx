/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PageLayout from "./PageLayout";

const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "1. Sobre estos términos",
    body: "Al realizar un pedido con La Nieta de Portella aceptas las condiciones descritas a continuación. Te recomendamos leerlas antes de confirmar tu compra.",
  },
  {
    heading: "2. Pedidos y confirmación",
    body: "Los pedidos se coordinan por WhatsApp. Un pedido se considera confirmado únicamente cuando recibes nuestra respuesta con la fecha, hora y monto acordados. Los precios mostrados en el sitio son referenciales y pueden variar según personalización.",
  },
  {
    heading: "3. Reservas y adelantos",
    body: "Para tortas personalizadas y pedidos grandes solicitamos un adelanto del 50% para reservar la fecha en agenda. El saldo se cancela al momento de la entrega o recojo.",
  },
  {
    heading: "4. Cambios y cancelaciones",
    body: "Los cambios en un pedido personalizado se aceptan hasta 48 horas antes de la entrega, sujetos a disponibilidad. Las cancelaciones con menos de 48 horas de anticipación pueden no incluir la devolución del adelanto, ya que la producción suele haber iniciado.",
  },
  {
    heading: "5. Entregas",
    body: "Coordinamos entrega a domicilio en Tarapoto y alrededores, o recojo en tienda. Los tiempos de entrega se acuerdan al confirmar el pedido.",
  },
];

export default function TermsPage() {
  return (
    <PageLayout
      eyebrow="Legal"
      title="Términos de Servicio"
      subtitle="Las condiciones bajo las que atendemos tus pedidos."
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
