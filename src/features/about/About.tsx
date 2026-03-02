const values = [
  {
    icon: '🚀',
    title: 'Calidad',
    description: 'Desarrollamos software robusto y bien diseñado.',
  },
  {
    icon: '🤝',
    title: 'Compromiso',
    description: 'Acompañamos a nuestros clientes en cada etapa.',
  },
  {
    icon: '🧠',
    title: 'Innovación',
    description: 'Buscamos soluciones modernas y eficientes.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-[1200px] mx-auto py-48 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="mb-4">Sobre nosotros</h2>
          <p className="mb-4 text-text-muted">
            Somos una empresa de desarrollo de software enfocada en crear
            soluciones tecnológicas confiables, escalables y alineadas a las
            necesidades reales de nuestros clientes.
          </p>
          <p className="text-text-muted">
            Creemos en la tecnología como una herramienta para optimizar
            procesos, mejorar la toma de decisiones y potenciar el crecimiento
            de los negocios.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-brand-card border border-border rounded-2xl px-6 py-7 text-center">
              <span className="text-[1.8rem] mb-2 block">{v.icon}</span>
              <h3 className="mb-2 text-text-main text-base">{v.title}</h3>
              <p className="text-text-muted text-sm max-w-none">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
