// import logoDonCampo from '../../assets/images/don-campo.webp';
// import logoTech from '../../assets/images/tech-logo.webp';

import halltec from '../../assets/images/logo-halltec.webp';
import Antonella from '../../assets/images/logo-antonella.webp';
import logoMantor from '../../assets/images/logo-mantor.webp';
import logoMaterialesMane from '../../assets/images/logo-materiales-mane.webp';
import logoSandalias from '../../assets/images/logo-el-punto-sandalia.webp';

export const Partners = () => {
  const partnersData = [
    {
      id: 1,
      name: 'Halltec',
      logo: halltec,
      type: 'aliado',
      aliance: 'Proveedor de Facturación Electrónica - DIAN',
    },
    {
      id: 2,
      name: 'Antonella Store',
      logo: Antonella,
      type: 'cliente',
      projectName: 'Software POS - NeoPOS',
    },
    {
      id: 3,
      name: 'Mantor',
      logo: logoMantor,
      type: 'cliente',
      projectName: 'Diseño landing page',
    },
    {
      id: 4,
      name: 'Materiales El Mañe',
      logo: logoMaterialesMane,
      type: 'cliente',
      projectName: 'Software POS - NeoPOS',
    },
    {
      id: 5,
      name: 'El Punto de la Sandalias',
      logo: logoSandalias,
      type: 'cliente',
      projectName: 'Software POS - NeoPOS',
    },
  ];

  // Duplicamos el array para crear el efecto de bucle infinito sin cortes
  const duplicatedPartners = [...partnersData, ...partnersData];

  return (
    <section id="aliados" className="pt-18 pb-4 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-12">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-text-main">
            Empresas que confían en nosotros
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-[60ch] mx-auto">
            Nuestros aliados y clientes hacen parte de distintos sectores y han
            confiado en nuestras soluciones tecnológicas.
          </p>
        </header>
      </div>

      {/* Contenedor del Carrusel Infinito */}
      <div className="relative w-full max-w-[1400px] mx-auto">
        {/* Pista de deslizamiento */}
        <div className="flex overflow-hidden no-scrollbar pb-8 pt-2 w-full">
          <div className="flex animate-marquee w-max gap-6 px-3">
            {duplicatedPartners.map((partner, index) => (
              <div
                // Usamos el index combinado con el ID para evitar keys duplicadas en React
                key={`${partner.id}-${index}`}
                className="flex flex-col items-center justify-start p-6 rounded-xl border border-border bg-brand-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_8px_30px_rgba(30,130,248,0.15)] group w-[260px] md:w-[280px] shrink-0">
                {/* Contenedor del Logo */}
                <div className="h-20 w-full flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={`Logo de ${partner.name}`}
                    className="max-h-full max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-text-main font-semibold text-center mb-2">
                  {partner.name}
                </h3>

                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 ${
                    partner.type === 'cliente'
                      ? 'bg-[rgba(30,130,248,0.1)] text-brand-accent border border-brand-accent/20'
                      : 'bg-[#1e293b] text-text-muted border border-border'
                  }`}>
                  {partner.type === 'cliente'
                    ? 'Cliente'
                    : 'Aliado Tecnológico'}
                </span>

                {partner.type === 'cliente' && partner.projectName ? (
                  <div className="mt-auto pt-4 border-t border-border/50 w-full text-center">
                    <p className="text-xs text-text-muted">Proyecto:</p>
                    <p className="text-sm font-medium text-text-main line-clamp-2">
                      {partner.projectName}
                    </p>
                  </div>
                ) : (
                  <div className="mt-auto pt-4 border-t border-border/50 w-full text-center">
                    <p className="text-xs text-text-muted">Alianza:</p>
                    <p className="text-sm font-medium text-text-main line-clamp-2">
                      {partner.aliance}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-14 text-center">
        <p className="text-xl text-text-main mb-3 font-semibold">
          ¿Quieres ser nuestro próximo aliado o cliente?
        </p>
      </div>
    </section>
  );
};
