import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import InvestmentForm from "@/components/InvestmentForm";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <HowItWorks />
        <Benefits />
        <InvestmentForm />
        {/* <Disclaimer /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
