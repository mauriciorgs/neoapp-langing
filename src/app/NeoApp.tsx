import { About } from "../features/about/About";
import { CallToAction } from "../features/cta/CallToAction";
import { Experience } from "../features/projects/temp_Experience";
import { Footer } from "../features/footer/Footer";
import { Hero } from "../features/hero/Hero";
import { Navbar } from "../features/navbar/Navbar";
import { Partners } from "../features/partners/Partners";
import { Services } from "../features/services/Services";

export const NeoApp = () => {
  return (
    <>
    
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Experience />

      <Partners />

      <CallToAction />

      <Footer />
    </>
  );
};
