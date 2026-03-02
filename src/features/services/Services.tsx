const services = [
  {
    title: 'Software a la medida',
    description:
      'Diseñamos y desarrollamos soluciones personalizadas adaptadas a los procesos reales de tu empresa.',
  },
  {
    title: 'Sistema POS',
    description:
      'Nuestro sistema POS permite gestionar ventas, inventario y reportes desde una sola plataforma, de forma rápida y segura.',
  },
  {
    title: 'Automatización de procesos',
    description:
      'Optimizamos tareas operativas mediante tecnología para reducir errores y aumentar la eficiencia.',
  },
  {
    title: 'Escalabilidad y soporte',
    description:
      'Acompañamos a nuestros clientes con soporte continuo y soluciones preparadas para crecer junto a su negocio.',
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-16">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-14">
          <h2 className="mb-4 text-balance">
            Soluciones de software que impulsan tu negocio
          </h2>
          <p className="mx-auto">
            Desarrollamos tecnología a la medida y productos propios que
            optimizan procesos, mejoran la productividad y acompañan el
            crecimiento de tu empresa.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-brand-card border border-border rounded-2xl p-8 text-center shadow-[0_4px_20px_-2px_rgba(30,132,248,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-4px_rgba(30,130,248,0.2)]">
              <div className="text-[2.2rem] mb-4" />
              <h3 className="mb-3 text-[1.1rem] text-text-main">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-none">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
