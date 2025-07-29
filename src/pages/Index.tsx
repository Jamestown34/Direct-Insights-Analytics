import { Button } from "@/components/ui/button";
import Header from "@/components/Header";  // Import the Header component
import Hero from "@/components/Hero";
import ValuePropositions from "@/components/ValuePropositions";
import Cases from "@/components/Cases";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header /> {/* Render the Header component */}
      <Hero />
      <ValuePropositions />
      <Cases />
      <Services />
      <HowItWorks />
      <FAQ />

      {/* Removed hardcoded About section */}

      <Footer />
    </div>
  );
};

export default Index;
