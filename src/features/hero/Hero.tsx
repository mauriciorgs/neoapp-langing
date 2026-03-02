import neoMockup from '../../assets/images/neoapp-mockup.webp';

import {} from 'lucide-react';

const WA_LINK =
  'https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software.';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24" id="hero">
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-[clamp(2.4rem,5vw,3.2rem)] font-semibold leading-tight mb-5 text-balance">
            Sistema POS moderno para
            <span className="text-brand-accent">
              {' '}
              pequeñas y medianas empresas
            </span>
          </h1>
          <p className="text-base md:text-lg mb-8 text-text-muted max-w-[52ch] mx-auto md:mx-0">
            Gestiona ventas, inventarios y pagos desde una sola plataforma.
            Diseñado para crecer contigo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 ">
            <a
              href={WA_LINK}
              className="btn-primary px-6 py-3 md:px-6 lg:w-full md:w-full sm:w-auto text-center">
              Agendar una Demo
            </a>
            <a
              href={WA_LINK}
              className="lg:w-full md:w-full sm:w-auto text-center text-text-main font-medium border border-border px-6 py-3 rounded-lg transition-all duration-200 hover:bg-brand-card hover:-translate-y-0.5">
              Hablemos de tu proyecto
            </a>
          </div>
          {/* Trust Indicators */}
          <div className="pt-10 flex flex-col items-center md:items-start">
            <p className="text-xs text-text-muted mb-3 font-semibold uppercase tracking-wider">
              Tecnologias que utilizamos
            </p>
            {/* Sustituye los textos por etiquetas <svg> o <img> con los logos reales si lo prefieres */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-text-muted opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="flex items-center gap-2 text-sm">React</span>
              <span className="flex items-center gap-2 text-sm">Tailwind</span>
              <span className="flex items-center gap-2 text-sm">
                Java/JavaFX
              </span>
              <span className="flex items-center gap-2 text-sm">Python</span>
            </div>
          </div>
          {/* <div className="pt-10 flex flex-col items-center">
            <p className="text-xs text-text-muted mb-3 font-semibold">
              +25 CLIENTES
            </p>
          </div> */}
        </div>

        {/* Visual */}
        <div className="relative flex justify-center mt-8 md:mt-0 md:ml-12">
          <img
            src={neoMockup}
            alt="Mockup sistema pos NeoPOS"
            className="relative z-10 w-full max-w-160 shadow-2xl rounded-2xl block"
          />
        </div>
      </div>
    </section>
  );
};
