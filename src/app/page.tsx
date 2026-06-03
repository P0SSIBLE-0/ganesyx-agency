import Hero from "@/components/home/Hero";
import BrandMarquee from "@/components/home/BrandMarquee";
import PartnerWith from "@/components/home/PartnerWith";
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
import Consultation from "@/components/home/Consultation";
import ContactUs from "@/components/common/ContactUs";
import BlogCarousel from "@/components/blogs/BlogCarousel";
import { blogsData } from "@/data/blogs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <BrandMarquee />
      <BrandGrow imageUrl="https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=735&auto=format&fit=crop" />
      <Services />
      <WhyChooseUs />
      <TextMarquee />
      <Pricing />
      {/* <BlogCarousel blogs={blogsData.slice(0, 6)} /> */}
      <Testimonials />
      <PartnerWith />
      <Consultation />
      {/* <About />
      <Stats /> */}
      {/* <FAQ /> */}
      <ContactUs />
    </main>
  );
}


