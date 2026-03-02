export const Partners = () => {
  return (
    <section id="aliados" className="pt-16 px-6">
      <div className="max-w-[1200px] mx-auto pt-16 pb-10 px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="mb-4 text-balance">
            Empresas que confían en nosotros
          </h2>
          <p className="mx-auto">
            Nuestros aliados y clientes hacen parte de distintos sectores y han
            confiado en nuestras soluciones tecnológicas.
          </p>
        </header>

        {/* Logos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {['Cliente A', 'Cliente B', 'Cliente C', 'Cliente D'].map(
            (client) => (
              <div
                key={client}
                className="h-[90px] rounded-xl border border-border bg-brand-card flex items-center justify-center text-text-muted text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
                {client}
              </div>
            ),
          )}
        </div>
        <p className="mt-10 text-center text-text-main">
          ¿Quieres ser nuestro próximo aliado? Conversemos sobre tu proyecto.
        </p>
      </div>
    </section>
  );
};
