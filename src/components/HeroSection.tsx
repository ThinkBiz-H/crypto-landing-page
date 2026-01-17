import { Shield, ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in learning more about crypto investment opportunities.");
    window.open(`https://wa.me/918512001218?text=${message}`, "_blank");
  };

  return (
    <section className="bg-background pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
            <Shield className="w-4 h-4" />
            Trusted by 2,500+ Canadian Investors
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Smart Crypto Investing for{" "}
            <span className="text-primary">Long-Term Growth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Expert-managed cryptocurrency investment solutions designed to help you build wealth with confidence. Secure, transparent, and professionally guided.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#invest"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:gap-3"
            >
              Start Investing Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary/80 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Expert
            </button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">$25M+</div>
              <div className="text-sm text-muted-foreground">Assets Managed</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">2,500+</div>
              <div className="text-sm text-muted-foreground">Active Investors</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">5+ Years</div>
              <div className="text-sm text-muted-foreground">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
