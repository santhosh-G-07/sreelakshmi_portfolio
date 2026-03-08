import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CatchTheDot from "@/components/CatchTheDot";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Fireflies from "@/components/Fireflies";
import SectionDivider from "@/components/SectionDivider";


const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CustomCursor />
      <Fireflies />
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <CatchTheDot />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      
    </div>
  );
};

export default Index;
