import { Users, Shield, Eye, TrendingUp, PieChart, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Crypto Analysts",
    description: "Our team of certified analysts monitors markets 24/7 to identify the best opportunities for your portfolio."
  },
  {
    icon: Shield,
    title: "Secure Investment Strategy",
    description: "Bank-grade security protocols and proven investment methodologies to protect your capital."
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "Full visibility into your investments with regular reports and real-time portfolio tracking."
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth Focus",
    description: "Strategic positioning in high-potential assets designed for sustainable wealth accumulation."
  },
  {
    icon: PieChart,
    title: "Risk-Managed Portfolio",
    description: "Diversified allocation across multiple crypto assets to minimize volatility and maximize returns."
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal investment advisor available via WhatsApp for all your questions and concerns."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Investors Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine institutional-grade expertise with personalized service to help you navigate the crypto markets confidently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
