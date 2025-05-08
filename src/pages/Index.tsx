
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FreeForm from "@/components/FreeForm";
import PremiumCTA from "@/components/PremiumCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight text-ivory">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <PremiumCTA />
        <FreeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
