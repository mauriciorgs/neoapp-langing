import { Calendar, Briefcase, Users } from 'lucide-react';
import neoMockup from '../../assets/images/neoapp-mockup.webp';

const WA_LINK =
  'https://wa.me/573158932278?text=Hola,%20vengo%20de%20la%20web.%20Me%20gustaría%20solicitar%20una%20asesoría%20para%20un%20proyecto%20de%20desarrollo%20de%20software.';

// Arreglo listo para escalar. Si quieres agregar otro, solo añade un objeto más aquí.
const stats = [
  {
    id: 1,
    icon: Calendar,
    text: '+5 años de experiencia',
  },
  {
    id: 2,
    icon: Briefcase,
    text: '+15 proyectos ejecutados',
  },
  {
    id: 3,
    icon: Users,
    text: '+30 clientes satisfechos',
  },
];

export const Hero: React.FC = () => {
  return (
    <section
      className="'relative min-h-dvh flex flex-col justify-center pt-20 pb-10"
      id="hero">
      {/* Contenedor principal sin el grid, para permitir elementos de ancho completo */}
      <div className="max-w-[1200px] mx-auto px-6 w-full ">
        {/* Bloque Superior: Textos e Imagen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 md:mb-16">
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
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
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

        {/* Bloque Inferior: Tarjetas de Estadísticas (Stats) */}
        <div className="flex flex-wrap justify-center gap-4 md:pt-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-3 px-5 py-3 bg-brand-card/50 border border-border rounded-full hover:border-brand-accent/50 hover:-translate-y-1 transition-all duration-300">
              <div className="text-brand-accent shrink-0">
                <stat.icon className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="text-text-main font-medium text-sm sm:text-base">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
