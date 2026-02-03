import { About } from "../features/about/About";
import { CallToAction } from "../features/cta/CallToAction";
import { Experience } from "../features/projects/temp_Experience";
import { Footer } from "../features/footer/Footer";
import { Hero } from "../features/hero/Hero";
import { Navbar } from "../features/navbar/Navbar";
import { Partners } from "../features/partners/Partners";
import { Services } from "../features/services/Services";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const NeoApp = () => {
  return (
    <>
    <SpeedInsights  />
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
