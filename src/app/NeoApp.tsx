import { About } from "../features/about/About";
import { CallToAction } from "../features/cta/CallToAction";
import { Footer } from "../features/footer/Footer";
import { Hero } from "../features/hero/Hero";
import { Navbar } from "../features/navbar/Navbar";
import { Services } from "../features/services/Services";
import { Partners } from "../partners/Partners";
import { Experience } from "../projects/EXperience";

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
