import Hero from "@/components/home/Hero";
import BrandMarquee from "@/components/home/BrandMarquee";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import BrandGrow from "@/components/home/BrandGrow";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/common/Footer";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TextMarquee from "@/components/home/TextMarquee";
import Pricing from "@/components/home/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandMarquee />
      <Work />
      <BrandGrow />
      <Services />
      <TextMarquee />
      <WhyChooseUs />
      <Pricing />
      {/* <About />
      <Stats />
      <Testimonials /> */}
      <FAQ />
      {/* <Contact /> */}
    </main>
  );
}


