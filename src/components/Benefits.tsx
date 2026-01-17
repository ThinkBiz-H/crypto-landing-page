import { DollarSign, Layers, Activity, Target } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Low Entry Barrier",
    description: "Start investing with as little as CAD 1,000. Professional crypto management accessible to everyone.",
    highlight: "From CAD 1,000"
  },
  {
    icon: Layers,
    title: "Diversified Portfolio",
    description: "Your investment is spread across Bitcoin, Ethereum, and select altcoins to optimize growth potential.",
    highlight: "10+ Assets"
  },
  {
    icon: Activity,
    title: "Active Monitoring",
    description: "Our team actively manages positions, rebalancing your portfolio as market conditions evolve.",
    highlight: "24/7 Analysis"
  },
  {
    icon: Target,
    title: "Growth-Focused Approach",
    description: "Strategic allocation designed for long-term capital appreciation with managed risk exposure.",
    highlight: "Long-Term Vision"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment Benefits
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the advantages of professionally managed cryptocurrency investments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card-elevated flex gap-5">
              <div className="shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {benefit.highlight}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
