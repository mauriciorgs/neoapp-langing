const WA_LINK =
  'https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software.';

export const CallToAction = () => {
  return (
    <section className="px-6 pb-2">
      <div className="max-w-[1200px] mx-auto text-center pb-16 px-6">
        <h2 className="mb-4 text-balance">
          ¿Listo para impulsar tu negocio con tecnología?
        </h2>
        <p className="mx-auto mb-10">
          Ya sea que necesites una solución de software a medida o quieras
          implementar nuestro sistema POS, estamos listos para ayudarte.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href={WA_LINK} className="btn-primary px-6 py-3">
            Hablemos de tu proyecto
          </a>
          <a
            href={WA_LINK}
            className="px-6 py-3 rounded-lg border border-border text-text-main font-medium transition-all duration-200 hover:bg-brand-card hover:-translate-y-0.5">
            Conocer el sistema POS
          </a>
        </div>
      </div>
    </section>
  );
};
