import { About } from '../../features/about/About';
import { CallToAction } from '../../features/cta/CallToAction';
import { FloatinButton } from '../../features/floating-button/FloatingButton';
import { Hero } from '../../features/hero/Hero';
import { Partners } from '../../features/partners/Partners';
import { Experience } from '../../features/projects/temp_Experience';
import { Services } from '../../features/services/Services';

export const HomePage = () => {
  return (
    <div>
      <Hero />

      <Services />

      <About />
      
      <FloatinButton />

      <Experience />

      <Partners />

      <CallToAction />
    </div>
  );
};
