const experiences = [
  {
    badge: 'Producto propio',
    title: 'Sistema POS',
    description:
      'Plataforma de punto de venta diseñada para pequeños y medianos negocios, con gestión de ventas, inventario y reportes en tiempo real.',
  },
  {
    badge: 'Software a medida',
    title: 'Plataformas empresariales',
    description:
      'Desarrollo de sistemas personalizados para la gestión de pagos, ventas y procesos internos.',
  },
  {
    badge: 'Automatización',
    title: 'Optimización de procesos',
    description:
      'Soluciones enfocadas en automatizar tareas operativas y mejorar la eficiencia en empresas en crecimiento.',
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-18 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <header className="text-center mb-14">
          <h2 className="mb-4 text-balance">
            Experiencia construyendo soluciones digitales
          </h2>
          <p className="mx-auto">
            Hemos desarrollado productos y plataformas tecnológicas adaptadas a
            distintos sectores, siempre enfocándonos en calidad, escalabilidad y
            resultados.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="bg-brand-bg border border-border rounded-2xl p-10 relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full text-brand-accent bg-[rgba(14,165,233,0.1)]">
                {item.badge}
              </span>
              <h3 className="mb-3 text-[1.15rem] text-text-main">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-none">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
