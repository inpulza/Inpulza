import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Taxes from "@/components/Taxes";
import InsuranceCTA from "@/components/InsuranceCTA";
import Health from "@/components/Health";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Navbar />
      <Hero />
      <Logos />
      <Taxes />
      <InsuranceCTA />
      <Health />
      <Services />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Map />
      <CTA />
      <FAQ />
      <Blog />
      <PreFooterCTA />
      <Footer />
    </main>
  );
}
