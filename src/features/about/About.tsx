import { Award, MousePointerClick, ShieldCheck, TrendingUp, Lightbulb } from 'lucide-react';

const values = [
  { icon: Award, title: 'Calidad' },
  { icon: MousePointerClick, title: 'Simplificación' },
  { icon: ShieldCheck, title: 'Responsabilidad' },
  { icon: TrendingUp, title: 'Desarrollo' },
  { icon: Lightbulb, title: 'Innovación' },
];

export const About = () => {
  return (
    <section id='about' className='py-16 px-4 sm:px-6'>
      <div className='max-w-[1200px] mx-auto grid py-20 grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start'>
        
        {/* Content */}

        <div className='lg:col-span-5 lg:sticky lg:top-24'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-text-main text-balance'>
            Sobre nosotros
          </h2>
          <div className='space-y-4 text-base md:text-lg text-text-muted'>
            <p className='text-justify'>
              Somos una empresa de desarrollo de software enfocada en crear
              soluciones tecnológicas confiables, escalables y alineadas a las
              necesidades reales de nuestros clientes.
            </p>
            <p>
              Creemos en la tecnología como una herramienta para optimizar
              procesos, mejorar la toma de decisiones y potenciar el crecimiento
              de los negocios.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className='lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4'>
          {values.map((v, index) => (
            <div
              key={v.title}
             
              className={`bg-brand-card border border-border rounded-xl p-4 flex items-center gap-4 ${
                index === 4 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''
              }`}
            >
             
              <div className='w-10 h-10 shrink-0 rounded-lg bg-[rgba(30,130,248,0.1)] text-brand-accent flex items-center justify-center'>
                <v.icon className='w-5 h-5' strokeWidth={2} />
              </div>
              
              <h3 className='text-text-main text-base font-semibold m-0'>
                {v.title}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};